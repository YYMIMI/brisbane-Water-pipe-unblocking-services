import assert from "node:assert/strict";
import test from "node:test";
import enquiryHandler from "../api/enquiry.mjs";
import vercelHandler from "../api/render.mjs";
import worker from "../dist/server/index.js";

const paths = [
  "/",
  "/blocked-drains-brisbane/",
  "/drain-cleaning-brisbane/",
  "/sewer-drain-cleaning-brisbane/",
  "/toilet-sink-blockages/",
  "/stormwater-drain-cleaning/",
  "/service-areas-brisbane/",
  "/about/",
  "/contact/",
  "/zh/",
];

const assets = { fetch: async () => new Response("asset", { status: 200 }) };
const fetchPath = (path) => worker.fetch(new Request(`https://melone.example${path}`), { ASSETS: assets });

test("every public page renders with unique metadata and one useful heading", async () => {
  const titles = new Set();
  for (const path of paths) {
    const response = await fetchPath(path);
    assert.equal(response.status, 200, path);
    assert.match(response.headers.get("content-type") || "", /^text\/html/);
    const html = await response.text();
    assert.match(html, path === "/zh/" ? /<html lang="zh-Hans">/ : /<html lang="en-AU">/);
    assert.match(html, /0403 202 949/);
    assert.match(html, /handyman\.kevinlee@gmail\.com/);
    if (["/", "/contact/", "/sewer-drain-cleaning-brisbane/"].includes(path)) {
      assert.match(html, /reply within 24 hours|We reply within 24 hours|answered within 24 hours/i);
    }
    assert.match(html, /\/melone-logo\.png/);
    assert.match(html, /<link rel="icon" href="\/melone-logo\.png" type="image\/png" sizes="960x960">/);
    assert.match(html, /<link rel="apple-touch-icon" href="\/melone-logo\.png">/);
    assert.match(html, new RegExp(`<link rel="canonical" href="https://melone\\.example${path.replaceAll("/", "\\/")}">`));
    assert.match(html, /googletagmanager\.com\/gtag\/js\?id=G-2FKG0LZ2V1/);
    assert.match(html, /gtag\("config","G-2FKG0LZ2V1"\)/);
    if (path === "/" || path === "/zh/") {
      assert.match(html, /hreflang="en-AU"/);
      assert.match(html, /hreflang="zh-Hans"/);
      assert.match(html, /hreflang="x-default"/);
    } else {
      assert.doesNotMatch(html, /rel="alternate"/);
    }
    assert.equal((html.match(/<h1\b/g) || []).length, 1, `${path} should contain one h1`);
    assert.doesNotMatch(html, /codex-preview|Your site is taking shape|keyword strategy|SEO strategy/i);
    assert.doesNotMatch(html, /melonerenovations\.com\.au/i);
    const visibleText = html
      .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, " ")
      .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, " ")
      .replace(/<[^>]+>/g, " ")
      .replace(/\s+/g, " ");
    assert.doesNotMatch(
      visibleText,
      /\bsymptoms?\b|practical next step|drainage point|sewage-like|bigger restriction/i,
      `${path} should use plain Australian English`,
    );
    const title = html.match(/<title>(.*?)<\/title>/)?.[1];
    assert.ok(title);
    assert.ok(!titles.has(title), `duplicate title: ${title}`);
    titles.add(title);
    const json = html.match(/<script type="application\/ld\+json">(.*?)<\/script>/s)?.[1];
    assert.ok(json, `${path} should contain JSON-LD`);
    const structuredData = JSON.parse(json);
    assert.equal(structuredData["@graph"][0].name, "MelOne Brisbane Drain Care");
    assert.equal(structuredData["@graph"][1].name, "MelOne Brisbane Drain Care");
    assert.doesNotMatch(json, /AggregateRating|\"@type\":\"Review\"/);
    if (path === "/") {
      assert.match(html, /Why choose MelOne/);
      assert.match(html, /data-review-carousel/);
      assert.match(html, /Ingrid Gao/);
      assert.match(html, /Kong Tran/);
      assert.match(html, /Kevin Song/);
      assert.match(html, /What customers say about MelOne/);
      assert.match(html, /home-brisbane-map-title/);
      assert.match(html, /www\.google\.com\/maps\/place\/Mel\+One\+Renovations/);
      assert.match(html, /Mel One Property Maintenance Pty Ltd/);
    }
    if (path === "/about/") {
      assert.match(html, /data-review-carousel/);
      assert.match(html, /What customers say about MelOne/);
      assert.match(html, /Ingrid Gao/);
      assert.match(html, /Kong Tran/);
      assert.match(html, /Kevin Song/);
      assert.match(html, /about-brisbane-map-title/);
      assert.match(html, /www\.google\.com\/maps\/place\/Mel\+One\+Renovations/);
      assert.match(html, /Mel One Property Maintenance Pty Ltd/);
    }
    if (path === "/zh/") {
      assert.match(html, /Mel(?:One| One Maintenance) 中文服务/);
      assert.match(html, /布里斯班管道疏通与排水服务/);
      assert.match(html, /zh-brisbane-map-title/);
      assert.match(html, /www\.google\.com\/maps\/place\/Mel\+One\+Renovations/);
      assert.match(html, /hreflang="zh-Hans"/);
    }
    if (path === "/service-areas-brisbane/") {
      assert.match(html, /Indicative coverage map/);
      assert.match(html, /Mel One Property Maintenance Pty Ltd/);
      assert.match(html, /39 666 325 408/);
      assert.match(html, /no walk-in shopfront/);
      assert.doesNotMatch(html, /streetAddress|postalCode|aggregateRating/);
    }
    if (path === "/contact/") {
      assert.match(html, /data-enquiry-form/);
      assert.match(html, /action="\/api\/enquiry" method="post"/);
      assert.match(html, /name="phone"[^>]+required/);
      assert.match(html, /name="suburb"[^>]+required/);
      assert.match(html, /name="consent"[^>]+required/);
      assert.match(html, /data-form-status/);
    }
  }
});

test("crawl routes and redirects are complete", async () => {
  const sitemap = await (await fetchPath("/sitemap.xml")).text();
  for (const path of paths) assert.match(sitemap, new RegExp(`https://melone\\.example${path.replaceAll("/", "\\/")}`));

  const robots = await (await fetchPath("/robots.txt")).text();
  assert.match(robots, /Allow: \/\n/);
  assert.match(robots, /https:\/\/melone\.example\/sitemap\.xml/);

  const redirect = await fetchPath("/about");
  assert.equal(redirect.status, 301);
  assert.equal(redirect.headers.get("location"), "https://melone.example/about/");
});

test("unknown pages return a helpful 404", async () => {
  const response = await fetchPath("/missing-page/");
  assert.equal(response.status, 404);
  assert.match(await response.text(), /wrong drain/);
});

test("Vercel catch-all renders the requested public route", async () => {
  const chunks = [];
  const headers = new Map();
  const response = {
    statusCode: 0,
    setHeader: (name, value) => headers.set(name.toLowerCase(), value),
    end: (chunk) => {
      if (chunk) chunks.push(Buffer.from(chunk));
    },
  };

  await vercelHandler(
    {
      method: "GET",
      headers: {
        host: "melone.example",
        "x-forwarded-proto": "https",
      },
      query: { path: "zh/" },
    },
    response,
  );

  const html = Buffer.concat(chunks).toString("utf8");
  assert.equal(response.statusCode, 200);
  assert.match(headers.get("content-type") || "", /^text\/html/);
  assert.match(html, /布里斯班管道疏通与排水服务/);
  assert.match(html, /https:\/\/melone\.example\/zh\//);
});

const invokeEnquiry = async ({ method = "POST", body = {}, headers = {} } = {}) => {
  const chunks = [];
  const responseHeaders = new Map();
  const response = {
    statusCode: 0,
    setHeader: (name, value) => responseHeaders.set(name.toLowerCase(), value),
    end: (chunk) => {
      if (chunk) chunks.push(Buffer.from(chunk));
    },
  };
  await enquiryHandler(
    {
      method,
      body,
      headers: {
        host: "melone.example",
        origin: "https://melone.example",
        "x-forwarded-proto": "https",
        "content-type": "application/json",
        ...headers,
      },
    },
    response,
  );
  return {
    status: response.statusCode,
    headers: responseHeaders,
    json: JSON.parse(Buffer.concat(chunks).toString("utf8")),
  };
};

const validEnquiry = () => ({
  name: "Test Customer",
  phone: "0400 000 000",
  email: "customer@example.com",
  suburb: "Carindale 4152",
  service: "blocked-drain",
  timing: "soon",
  details: "The outside drain is slow and starts rising when the sink is used.",
  consent: "yes",
  website: "",
  startedAt: Date.now() - 5_000,
  submissionId: "test-enquiry-12345",
  sourcePath: "/contact/",
});

test("enquiry endpoint rejects wrong methods, origins and invalid fields", async () => {
  const wrongMethod = await invokeEnquiry({ method: "GET" });
  assert.equal(wrongMethod.status, 405);
  assert.equal(wrongMethod.headers.get("allow"), "POST");

  const wrongOrigin = await invokeEnquiry({ body: validEnquiry(), headers: { origin: "https://example.com" } });
  assert.equal(wrongOrigin.status, 403);

  const invalid = await invokeEnquiry({ body: { ...validEnquiry(), phone: "bad", consent: "" } });
  assert.equal(invalid.status, 422);
});

test("enquiry endpoint reports delivery only after Resend accepts the message", async () => {
  const originalFetch = globalThis.fetch;
  const originalApiKey = process.env.RESEND_API_KEY;
  const originalDomain = process.env.RESEND_EMAIL_DOMAIN;
  const originalRecipient = process.env.CONTACT_TO_EMAIL;
  let providerRequest;

  process.env.RESEND_API_KEY = "re_test_key";
  process.env.RESEND_EMAIL_DOMAIN = "example.com";
  process.env.CONTACT_TO_EMAIL = "office@example.com";
  globalThis.fetch = async (url, options) => {
    providerRequest = { url, options };
    return new Response(JSON.stringify({ id: "email_test_123" }), {
      status: 200,
      headers: { "content-type": "application/json" },
    });
  };

  try {
    const result = await invokeEnquiry({ body: validEnquiry() });
    assert.equal(result.status, 201);
    assert.equal(result.json.delivered, true);
    assert.equal(result.json.leadId, "test-enquiry-12345");
    assert.equal(result.json.reference, "email_test_123");
    assert.equal(providerRequest.url, "https://api.resend.com/emails");
    const payload = JSON.parse(providerRequest.options.body);
    assert.deepEqual(payload.to, ["office@example.com"]);
    assert.equal(payload.reply_to, "customer@example.com");
    assert.match(payload.subject, /^test-enquiry-12345 — Brisbane drain enquiry/);
    assert.match(payload.subject, /Carindale 4152/);
    assert.match(payload.text, /Lead ID: test-enquiry-12345/);
    assert.match(payload.text, /outside drain is slow/);
    assert.match(payload.html, /<th align="left">Lead ID<\/th><td>test-enquiry-12345<\/td>/);
    assert.equal(providerRequest.options.headers["idempotency-key"], "melone-drains-test-enquiry-12345");
  } finally {
    globalThis.fetch = originalFetch;
    if (originalApiKey === undefined) delete process.env.RESEND_API_KEY;
    else process.env.RESEND_API_KEY = originalApiKey;
    if (originalDomain === undefined) delete process.env.RESEND_EMAIL_DOMAIN;
    else process.env.RESEND_EMAIL_DOMAIN = originalDomain;
    if (originalRecipient === undefined) delete process.env.CONTACT_TO_EMAIL;
    else process.env.CONTACT_TO_EMAIL = originalRecipient;
  }
});

