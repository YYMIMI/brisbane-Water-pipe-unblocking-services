const PHONE_DISPLAY = "0403 202 949";
const CONTACT_NAME = "Felix";
const DEFAULT_TO_EMAIL = "handyman.kevinlee@gmail.com";

const SERVICE_LABELS = Object.freeze({
  "not-sure": "Not sure / needs advice",
  "blocked-drain": "Blocked drain",
  "drain-cleaning": "Drain cleaning",
  "toilet-or-sink": "Toilet or sink blockage",
  stormwater: "Stormwater drain",
  sewer: "Sewer or main drain",
  other: "Other drain enquiry",
});

const TIMING_LABELS = Object.freeze({
  urgent: "Urgent / water is rising",
  soon: "As soon as practical",
  days: "Within a few days",
  flexible: "Flexible",
});

const firstHeader = (value) => (Array.isArray(value) ? value[0] : value);

const cleanField = (value, maxLength, singleLine = false) => {
  if (typeof value !== "string") return "";
  const cleaned = value.replace(/\u0000/g, "").trim().slice(0, maxLength);
  return singleLine ? cleaned.replace(/[\r\n]+/g, " ").replace(/\s{2,}/g, " ") : cleaned;
};

const validEmail = (value) => !value || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
const validPhone = (value) => /^[+()\d\s.-]{6,32}$/.test(value);
const validSuburb = (value) => value.length >= 2 && /^[\p{L}\p{N}\s,'’.-]+$/u.test(value);

const escapeEmailHtml = (value) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

const sendJson = (response, status, data, extraHeaders = {}) => {
  response.statusCode = status;
  response.setHeader("content-type", "application/json; charset=utf-8");
  response.setHeader("cache-control", "no-store");
  response.setHeader("x-content-type-options", "nosniff");
  for (const [name, value] of Object.entries(extraHeaders)) response.setHeader(name, value);
  response.end(JSON.stringify(data));
};

const expectedOrigin = (request) => {
  const protocol = firstHeader(request.headers?.["x-forwarded-proto"]) || "https";
  const host = firstHeader(request.headers?.["x-forwarded-host"]) || firstHeader(request.headers?.host);
  return host ? `${protocol}://${host}` : "";
};

const readJsonBody = async (request) => {
  if (request.body && typeof request.body === "object" && !Buffer.isBuffer(request.body)) return request.body;
  if (typeof request.body === "string") return JSON.parse(request.body);
  const chunks = [];
  for await (const chunk of request) chunks.push(Buffer.from(chunk));
  return JSON.parse(Buffer.concat(chunks).toString("utf8") || "{}");
};

const recipientList = () =>
  (process.env.CONTACT_TO_EMAIL || process.env.ENQUIRY_TO_EMAIL || DEFAULT_TO_EMAIL)
    .split(",")
    .map((value) => value.trim().toLowerCase())
    .filter((value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
    .slice(0, 5);

export default async function enquiryHandler(request, response) {
  if ((request.method || "GET").toUpperCase() !== "POST") {
    sendJson(response, 405, { error: "Method not allowed." }, { allow: "POST" });
    return;
  }

  const origin = firstHeader(request.headers?.origin);
  if (!origin || origin !== expectedOrigin(request)) {
    sendJson(response, 403, { error: "This form must be submitted from the MelOne website." });
    return;
  }

  const contentType = (firstHeader(request.headers?.["content-type"]) || "").toLowerCase();
  if (!contentType.startsWith("application/json")) {
    sendJson(response, 415, { error: "Please submit the online form." });
    return;
  }

  const contentLength = Number(firstHeader(request.headers?.["content-length"]) || 0);
  if (contentLength > 12_000) {
    sendJson(response, 413, { error: "The enquiry is too large." });
    return;
  }

  let body;
  try {
    body = await readJsonBody(request);
  } catch {
    sendJson(response, 400, { error: "Please check the form and try again." });
    return;
  }

  if (cleanField(body.website, 120, true)) {
    sendJson(response, 202, { ok: true, delivered: false });
    return;
  }

  const startedAt = Number(body.startedAt || 0);
  const elapsed = Date.now() - startedAt;
  if (!Number.isFinite(startedAt) || startedAt <= 0 || elapsed > 86_400_000) {
    sendJson(response, 422, { error: "Please refresh the page and submit the form again." });
    return;
  }
  if (elapsed < 1_200) {
    sendJson(response, 202, { ok: true, delivered: false });
    return;
  }

  const name = cleanField(body.name, 80, true);
  const phone = cleanField(body.phone, 32, true);
  const email = cleanField(body.email, 254, true).toLowerCase();
  const suburb = cleanField(body.suburb, 100, true);
  const details = cleanField(body.details, 2_000);
  const service = SERVICE_LABELS[cleanField(body.service, 40, true)];
  const timing = TIMING_LABELS[cleanField(body.timing, 40, true)];
  const consent = cleanField(body.consent, 10, true);
  const sourcePath = cleanField(body.sourcePath, 160, true) || "/contact/";

  if (
    name.length < 2 ||
    !validPhone(phone) ||
    !validEmail(email) ||
    !validSuburb(suburb) ||
    details.length < 10 ||
    !service ||
    !timing ||
    consent !== "yes"
  ) {
    sendJson(response, 422, {
      error: "Please provide your name, a valid phone number, Brisbane suburb or postcode, issue type, timing and at least 10 characters describing the drain problem.",
    });
    return;
  }

  const apiKey = process.env.RESEND_API_KEY?.trim();
  const configuredDomain = process.env.RESEND_EMAIL_DOMAIN?.trim().toLowerCase();
  const fromEmail =
    process.env.CONTACT_FROM_EMAIL?.trim() ||
    (configuredDomain ? `Mel One Brisbane Drains <enquiries@${configuredDomain}>` : "");
  const recipients = recipientList();
  if (!apiKey || !fromEmail || recipients.length === 0) {
    console.error("Mel One Brisbane Drains enquiry email configuration is incomplete.");
    sendJson(response, 503, {
      error: `Online enquiries are temporarily unavailable. Please call ${CONTACT_NAME} on ${PHONE_DISPLAY}.`,
    });
    return;
  }

  const proposedId = cleanField(body.submissionId, 120, true);
  const submissionId = /^[A-Za-z0-9_-]{8,120}$/.test(proposedId) ? proposedId : crypto.randomUUID();
  const safe = {
    name: escapeEmailHtml(name),
    phone: escapeEmailHtml(phone),
    email: escapeEmailHtml(email || "Not provided"),
    suburb: escapeEmailHtml(suburb),
    service: escapeEmailHtml(service),
    timing: escapeEmailHtml(timing),
    details: escapeEmailHtml(details),
    sourcePath: escapeEmailHtml(sourcePath),
  };
  const text = [
    "New Mel One Brisbane Drains enquiry",
    "",
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Email: ${email || "Not provided"}`,
    `Suburb: ${suburb}`,
    `Issue: ${service}`,
    `Timing: ${timing}`,
    `Source page: ${sourcePath}`,
    "",
    "What is happening:",
    details,
  ].join("\n");
  const html = [
    "<h2>New Mel One Brisbane Drains enquiry</h2>",
    '<table cellpadding="6" cellspacing="0" style="border-collapse:collapse">',
    `<tr><th align="left">Name</th><td>${safe.name}</td></tr>`,
    `<tr><th align="left">Phone</th><td>${safe.phone}</td></tr>`,
    `<tr><th align="left">Email</th><td>${safe.email}</td></tr>`,
    `<tr><th align="left">Suburb</th><td>${safe.suburb}</td></tr>`,
    `<tr><th align="left">Issue</th><td>${safe.service}</td></tr>`,
    `<tr><th align="left">Timing</th><td>${safe.timing}</td></tr>`,
    `<tr><th align="left">Source page</th><td>${safe.sourcePath}</td></tr>`,
    `</table><h3>What is happening</h3><p style="white-space:pre-wrap">${safe.details}</p>`,
  ].join("");

  const payload = {
    from: fromEmail,
    to: recipients,
    subject: `Brisbane drain enquiry — ${suburb}`,
    text,
    html,
  };
  if (email) payload.reply_to = email;

  let providerResponse;
  try {
    providerResponse = await fetch(process.env.RESEND_API_URL?.trim() || "https://api.resend.com/emails", {
      method: "POST",
      headers: {
        authorization: `Bearer ${apiKey}`,
        "content-type": "application/json",
        "idempotency-key": `melone-drains-${submissionId}`,
      },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(10_000),
    });
  } catch {
    console.error("Mel One Brisbane Drains enquiry could not reach the email provider.");
    sendJson(response, 502, {
      error: `We could not send your enquiry right now. Please call ${CONTACT_NAME} on ${PHONE_DISPLAY}.`,
    });
    return;
  }

  if (!providerResponse.ok) {
    console.error("Mel One Brisbane Drains enquiry email was rejected.", { status: providerResponse.status });
    sendJson(response, 502, {
      error: `We could not send your enquiry right now. Please call ${CONTACT_NAME} on ${PHONE_DISPLAY}.`,
    });
    return;
  }

  const result = await providerResponse.json().catch(() => null);
  sendJson(response, 201, { ok: true, delivered: true, reference: result?.id || null });
}
