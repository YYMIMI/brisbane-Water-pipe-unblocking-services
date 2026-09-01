const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector(".site-nav");

if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    navigation.classList.toggle("is-open", !isOpen);
    document.body.classList.toggle("menu-open", !isOpen);
  });

  navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menuButton.setAttribute("aria-expanded", "false");
      navigation.classList.remove("is-open");
      document.body.classList.remove("menu-open");
    });
  });
}

const observer = "IntersectionObserver" in window
  ? new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8%", threshold: 0.08 },
    )
  : null;

document.querySelectorAll(".reveal").forEach((element) => {
  if (observer) observer.observe(element);
  else element.classList.add("is-visible");
});

document.querySelectorAll(".faq-item").forEach((item) => {
  item.addEventListener("toggle", () => {
    const marker = item.querySelector(".faq-plus");
    if (marker) marker.textContent = item.open ? "−" : "+";
  });
});

document.querySelectorAll("[data-review-carousel]").forEach((carousel) => {
  const viewport = carousel.querySelector("[data-review-viewport]");
  const cards = [...carousel.querySelectorAll("[data-review-card]")];
  const section = carousel.closest(".reviews-section");
  const previous = section?.querySelector("[data-review-prev]");
  const next = section?.querySelector("[data-review-next]");
  const toggle = section?.querySelector("[data-review-toggle]");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  if (!viewport || cards.length < 2 || !previous || !next || !toggle) return;

  let paused = reducedMotion.matches;
  let timer;

  const cardStep = () => {
    const first = cards[0];
    const gap = Number.parseFloat(getComputedStyle(first.parentElement).columnGap || "0");
    return first.getBoundingClientRect().width + gap;
  };

  const move = (direction) => {
    const step = cardStep();
    const atEnd = viewport.scrollLeft + viewport.clientWidth >= viewport.scrollWidth - step * 0.4;
    const atStart = viewport.scrollLeft <= step * 0.2;
    const left = direction > 0 && atEnd
      ? 0
      : direction < 0 && atStart
        ? viewport.scrollWidth
        : viewport.scrollLeft + direction * step;
    viewport.scrollTo({ left, behavior: reducedMotion.matches ? "auto" : "smooth" });
  };

  const stop = () => {
    window.clearInterval(timer);
    timer = undefined;
  };

  const start = () => {
    stop();
    if (!paused && !document.hidden) timer = window.setInterval(() => move(1), 8000);
  };

  const updateToggle = () => {
    toggle.textContent = paused ? "Play" : "Pause";
    toggle.setAttribute("aria-label", paused ? "Play automatic review scrolling" : "Pause automatic review scrolling");
  };

  previous.addEventListener("click", () => {
    move(-1);
    start();
  });
  next.addEventListener("click", () => {
    move(1);
    start();
  });
  toggle.addEventListener("click", () => {
    paused = !paused;
    updateToggle();
    start();
  });
  section.addEventListener("mouseenter", stop);
  section.addEventListener("mouseleave", start);
  section.addEventListener("focusin", stop);
  section.addEventListener("focusout", start);
  viewport.addEventListener("pointerdown", stop);
  document.addEventListener("visibilitychange", start);
  reducedMotion.addEventListener("change", (event) => {
    paused = event.matches;
    updateToggle();
    start();
  });

  updateToggle();
  start();
});

const enquiryForm = document.querySelector("[data-enquiry-form]");

if (enquiryForm) {
  const formStatus = enquiryForm.querySelector("[data-form-status]");
  const submitButton = enquiryForm.querySelector('button[type="submit"]');
  const startedAtInput = enquiryForm.elements.namedItem("startedAt");
  const submissionIdInput = enquiryForm.elements.namedItem("submissionId");
  let formStarted = false;

  const refreshSubmissionData = () => {
    if (startedAtInput) startedAtInput.value = String(Date.now());
    if (submissionIdInput) {
      submissionIdInput.value = typeof crypto.randomUUID === "function"
        ? crypto.randomUUID()
        : String(Date.now()) + "-" + Math.random().toString(36).slice(2);
    }
  };

  const showFormStatus = (message, type = "") => {
    if (!formStatus) return;
    formStatus.textContent = message;
    formStatus.classList.toggle("is-error", type === "error");
    formStatus.classList.toggle("is-success", type === "success");
  };

  const trackFormEvent = (name, parameters = {}) => {
    if (typeof window.gtag !== "function") return;
    window.gtag("event", name, {
      form_id: "brisbane_drains_enquiry",
      page_path: window.location.pathname,
      hostname: window.location.hostname,
      transport_type: "beacon",
      ...parameters,
    });
  };

  refreshSubmissionData();
  enquiryForm.addEventListener("focusin", () => {
    if (formStarted) return;
    formStarted = true;
    trackFormEvent("lead_form_start");
  });

  enquiryForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!enquiryForm.reportValidity() || !submitButton) return;

    const leadId = String(submissionIdInput?.value || "");
    trackFormEvent("lead_submit_attempt", {
      lead_id: leadId,
      submission_id: leadId,
    });

    const originalLabel = submitButton.textContent;
    submitButton.disabled = true;
    submitButton.textContent = "Sending enquiry…";
    showFormStatus("Sending your enquiry securely…");

    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 15_000);

    let failureTracked = false;
    try {
      const payload = Object.fromEntries(new FormData(enquiryForm).entries());
      payload.sourcePath = window.location.pathname;
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          accept: "application/json",
        },
        body: JSON.stringify(payload),
        signal: controller.signal,
      });
      const result = await response.json().catch(() => null);

      if (!response.ok || result?.delivered !== true) {
        trackFormEvent(
          response.status === 400 || response.status === 422
            ? "lead_validation_error"
            : "lead_api_error",
          { http_status: response.status, lead_id: leadId, submission_id: leadId },
        );
        failureTracked = true;
        throw new Error(result?.error || "We could not send your enquiry. Please call Felix on 0403 202 949.");
      }

      trackFormEvent("generate_lead", {
        lead_id: String(result?.leadId || leadId),
        submission_id: leadId,
      });
      enquiryForm.reset();
      refreshSubmissionData();
      formStarted = false;
      showFormStatus(
        "Thanks — your enquiry has been sent to MelOne. We reply within 24 hours. If water is rising, call 0403 202 949.",
        "success",
      );
    } catch (error) {
      const message = error?.name === "AbortError"
        ? "The request took too long. Please try again or call Felix on 0403 202 949."
        : error instanceof Error
          ? error.message
          : "We could not send your enquiry. Please call Felix on 0403 202 949.";
      showFormStatus(message, "error");
      if (!failureTracked) {
        trackFormEvent("lead_api_error", {
          error_type: "network_or_client",
          lead_id: leadId,
          submission_id: leadId,
        });
      }
    } finally {
      window.clearTimeout(timeout);
      submitButton.disabled = false;
      submitButton.textContent = originalLabel;
    }
  });
}

document.addEventListener("click", (event) => {
  const link = event.target.closest("a[href^='tel:'], a[href^='mailto:']");
  if (!link || typeof window.gtag !== "function") return;

  const isPhone = link.href.startsWith("tel:");
  window.gtag("event", isPhone ? "click_to_call" : "email_click", {
    link_type: isPhone ? "telephone" : "email",
    page_path: window.location.pathname,
    transport_type: "beacon",
  });
});

