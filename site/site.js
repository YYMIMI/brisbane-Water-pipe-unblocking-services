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

document.addEventListener("click", (event) => {
  const link = event.target.closest("a[href^='tel:'], a[href^='mailto:']");
  if (!link || typeof window.gtag !== "function") return;

  const isPhone = link.href.startsWith("tel:");
  window.gtag("event", isPhone ? "click_to_call" : "email_click", {
    link_url: link.href,
    page_path: window.location.pathname,
    transport_type: "beacon",
  });
});
