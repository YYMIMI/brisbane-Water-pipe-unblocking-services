const isChinese = document.documentElement.lang.startsWith("zh");
const runtimeChinese = {"Open menu":"打开菜单","Close menu":"关闭菜单","Play":"播放","Pause":"暂停","Play automatic review scrolling":"播放评价自动滚动","Pause automatic review scrolling":"暂停评价自动滚动","Sending enquiry…":"正在发送咨询…","Sending your enquiry securely…":"正在安全发送您的咨询…","We could not send your enquiry. Please call Felix on 0403 202 949.":"未能发送咨询，请致电 Felix：0403 202 949。","Thanks — your enquiry has been sent to MelOne. We reply within 24 hours. If water is rising, call 0403 202 949.":"谢谢，您的咨询已发送给 MelOne。我们会在24小时内回复。如果水位正在上升，请致电 0403 202 949。","The request took too long. Please try again or call Felix on 0403 202 949.":"请求超时，请重试或致电 Felix：0403 202 949。","Online enquiries are temporarily unavailable. Please call Felix on 0403 202 949.":"在线咨询暂时无法使用，请致电 Felix：0403 202 949。","Please provide your name, a valid phone number, Brisbane suburb or postcode, issue type, timing and at least 10 characters describing the drain problem.":"请填写姓名、有效电话、布里斯班郊区或邮编、问题类型、希望安排时间，并用至少10个字符说明排水问题。","Please refresh the page and submit the form again.":"请刷新页面后重新提交表单。","Please check the form and try again.":"请检查表单后重试。","The enquiry is too large.":"咨询内容过长，请缩短后重试。","Please submit the online form.":"请使用在线表单提交。","This form must be submitted from the MelOne website.":"请从 MelOne 网站提交此表单。","Online enquiries are available only on the published Mel One drains site.":"在线咨询仅可在已发布的 Mel One 排水网站提交。"};
const localText = text => isChinese ? (runtimeChinese[text] || text) : text;

const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector(".site-nav");

if (menuButton && navigation) {
  const closeMenu = (restoreFocus = false) => {
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", localText("Open menu"));
    navigation.classList.remove("is-open");
    navigation.querySelectorAll(".nav-services").forEach((menu) => menu.removeAttribute("open"));
    document.body.classList.remove("menu-open");
    if (restoreFocus) menuButton.focus();
  };

  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    if (isOpen) {
      closeMenu();
      return;
    }
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    menuButton.setAttribute("aria-label", localText("Close menu"));
    navigation.classList.add("is-open");
    document.body.classList.add("menu-open");
  });

  navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => closeMenu());
  });

  document.addEventListener("click", (event) => {
    if (navigation.classList.contains("is-open") && !navigation.contains(event.target) && !menuButton.contains(event.target)) closeMenu();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && navigation.classList.contains("is-open")) closeMenu(true);
  });
}

const serviceMenus = [...document.querySelectorAll(".nav-services")];

serviceMenus.forEach((menu) => {
  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => menu.removeAttribute("open"));
  });
});

document.addEventListener("click", (event) => {
  serviceMenus.forEach((menu) => {
    if (!menu.contains(event.target)) menu.removeAttribute("open");
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  serviceMenus.forEach((menu) => menu.removeAttribute("open"));
});

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
    toggle.textContent = paused ? localText("Play") : localText("Pause");
    toggle.setAttribute("aria-label", paused ? localText("Play automatic review scrolling") : localText("Pause automatic review scrolling"));
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
  if (isChinese) {
    enquiryForm.addEventListener("invalid", event => { const field = event.target; field.setCustomValidity(""); if(field.validity.valueMissing) field.setCustomValidity(field.tagName === "SELECT" ? "请选择一项。" : field.type === "checkbox" ? "请先确认同意条款。" : "请填写此项。"); else if(field.validity.typeMismatch) field.setCustomValidity("请填写有效的邮箱地址。"); else if(field.validity.tooShort) field.setCustomValidity("填写内容太短，请补充资料。"); else if(!field.validity.valid) field.setCustomValidity("请检查此项资料。"); }, true);
    enquiryForm.addEventListener("input", event => event.target.setCustomValidity?.(""));
    enquiryForm.addEventListener("change", event => event.target.setCustomValidity?.(""));
  }
  const requestedSuburb = new URLSearchParams(window.location.search).get("suburb")?.trim().slice(0, 100);
  const suburbInput = enquiryForm.elements.namedItem("suburb");
  if (requestedSuburb && suburbInput && !suburbInput.value) suburbInput.value = requestedSuburb;
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
    submitButton.textContent = localText("Sending enquiry…");
    showFormStatus(localText("Sending your enquiry securely…"));

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
        throw new Error((isChinese ? (runtimeChinese[result?.error] || runtimeChinese["We could not send your enquiry. Please call Felix on 0403 202 949."]) : result?.error) || localText("We could not send your enquiry. Please call Felix on 0403 202 949."));
      }

      trackFormEvent("generate_lead", {
        lead_id: String(result?.leadId || leadId),
        submission_id: leadId,
      });
      enquiryForm.reset();
      refreshSubmissionData();
      formStarted = false;
      showFormStatus(
        localText("Thanks — your enquiry has been sent to MelOne. We reply within 24 hours. If water is rising, call 0403 202 949."),
        "success",
      );
    } catch (error) {
      const message = error?.name === "AbortError"
        ? localText("The request took too long. Please try again or call Felix on 0403 202 949.")
        : error instanceof Error
          ? (isChinese ? (/\p{Script=Han}/u.test(error.message) ? error.message : runtimeChinese["We could not send your enquiry. Please call Felix on 0403 202 949."]) : error.message)
          : localText("We could not send your enquiry. Please call Felix on 0403 202 949.");
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

