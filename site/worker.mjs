const PHONE_DISPLAY = "0403 202 949";
const PHONE_HREF = "+61403202949";
const EMAIL = "handyman.kevinlee@gmail.com";
const CONTACT = "Felix";
const GA_MEASUREMENT_ID = "G-2FKG0LZ2V1";
const GOOGLE_BUSINESS_URL = "https://www.google.com/maps/place/Mel+One+Renovations/@-27.4677227,153.0289747,17z/data=!4m6!3m5!1s0x6b915b94f91493e3:0xb7c3ba1146243943!8m2!3d-27.4677227!4d153.0289747!16s%2Fg%2F11zh9gk28p?hl=en";
const GOOGLE_BUSINESS_EMBED = "https://www.google.com/maps?q=-27.4677227%2C153.0289747&amp;output=embed";

const services = [
  {
    slug: "/blocked-drains-brisbane/",
    nav: "Blocked drains",
    title: "Blocked Drains Brisbane | Local Drain Help | MelOne",
    description:
      "Blocked drain help across Brisbane for slow, gurgling, overflowing or unpleasant-smelling drains. Call MelOne to discuss the problem and availability.",
    eyebrow: "Blocked drain help",
    heading: "A blocked drain needs a clear next step.",
    intro:
      "When water is backing up, a drain smells wrong or a toilet will not clear, guessing can make the mess worse. MelOne helps Brisbane households and small businesses understand the immediate problem, limit further overflow and arrange practical drain-clearing help.",
    intent: "For urgent, active or recurring blockages",
    signs: [
      "Water rising in a sink, shower, bath or floor waste",
      "A toilet that drains slowly or does not clear",
      "Gurgling from nearby drains when water is used",
      "Overflow from an outside drain or inspection point",
      "Strong drain smells that keep coming back",
      "More than one drain slowing down at the same time",
    ],
    steps: [
      "Stop using the blocked drain and, if water is rising, use as little water as possible nearby.",
      "Call Felix and describe where the blockage is, what you can see and when it started.",
      "We confirm availability, check what is happening and explain what to do next.",
    ],
    faqs: [
      [
        "Can MelOne attend a blocked drain today?",
        "Yes. The urgent line is open 24 hours a day. The team responds within minutes and can attend within two hours across the Brisbane service area.",
      ],
      [
        "What should I do while a drain is overflowing?",
        "Stop using the blocked drain and limit nearby water use. Keep people away from dirty water, move items out of the wet area and call for advice. Do not mix drain-cleaning chemicals.",
      ],
      [
        "Does a recurring blockage mean the pipe is broken?",
        "Not always. Build-up, foreign objects, tree roots or a damaged pipe can all cause a blockage to return. What to do next depends on where the problem is and how often it happens.",
      ],
    ],
  },
  {
    slug: "/drain-cleaning-brisbane/",
    nav: "Drain cleaning",
    title: "Drain Cleaning Brisbane | Slow & Smelly Drains | MelOne",
    description:
      "Brisbane drain cleaning for slow flow, recurring smells and build-up in household or small-business drains. Speak with MelOne about what to do next.",
    eyebrow: "Drain cleaning",
    heading: "Deal with slow drains before they stop completely.",
    intro:
      "A drain that is slow today can become tomorrow's overflow. MelOne provides straightforward drain-cleaning help across Brisbane, based on what is actually happening at your property.",
    intent: "For slow flow, odours, build-up and maintenance",
    signs: [
      "A sink or shower taking longer than usual to empty",
      "Water pooling around a floor waste",
      "Greasy build-up or recurring kitchen sink smells",
      "A drain that improves briefly, then slows again",
      "Gurgling without a full overflow",
      "A maintenance clean before a busy period or tenancy change",
    ],
    steps: [
      "Tell us which drain is slow and whether it happens all the time or only sometimes.",
      "We check where the problem is likely to be and the best way to clear the build-up.",
      "After the service, we explain what was found and any sensible follow-up.",
    ],
    faqs: [
      [
        "How is drain cleaning different from clearing a blockage?",
        "Blockage clearing focuses on restoring flow when a drain has stopped or is backing up. Drain cleaning can also address slower build-up, odours and recurring flow problems before a complete blockage develops.",
      ],
      [
        "Can I keep using a slow drain?",
        "Use it sparingly and watch for rising water, gurgling or overflow. If more than one drain is slow, stop unnecessary water use and call for advice.",
      ],
      [
        "Do chemical drain cleaners solve the problem?",
        "They may not reach or remove the underlying cause, and mixing products can be dangerous. Tell us about anything already poured into the drain before work begins.",
      ],
    ],
  },
  {
    slug: "/toilet-sink-blockages/",
    nav: "Toilets & sinks",
    title: "Blocked Toilet & Sink Brisbane | MelOne Drain Help",
    description:
      "Help with blocked toilets, kitchen sinks, bathroom basins and shower drains across Brisbane. Call MelOne to explain what is blocked and confirm availability.",
    eyebrow: "Toilet, sink and shower blockages",
    heading: "Blocked toilet, sink or shower? Tell us what is happening.",
    intro:
      "One blocked toilet, sink or shower may be a local problem, while several slow drains can point to a blockage further along the pipe. MelOne starts with what you can see and hear, then works out what to do next at your Brisbane property.",
    intent: "For toilets, kitchen sinks, basins and showers",
    signs: [
      "A toilet bowl rising after flushing",
      "A kitchen sink holding greasy or food-laden water",
      "A bathroom basin that drains slowly",
      "A shower tray filling during normal use",
      "Gurgling in one drain when another is used",
      "Water appearing at a nearby floor waste",
    ],
    steps: [
      "Do not flush repeatedly or continue filling an affected sink.",
      "Note whether any other drains are slow, noisy or backing up as well.",
      "Call MelOne so we can understand what is happening and arrange the right help.",
    ],
    faqs: [
      [
        "Should I keep flushing a blocked toilet?",
        "No. Repeated flushing can cause the bowl to overflow. Keep the toilet out of use and call for advice, especially if dirty water is backing up elsewhere.",
      ],
      [
        "Why does my shower gurgle when the toilet flushes?",
        "Connected drains can affect each other when air or water cannot move freely through the pipes. Mention this when you call because it can help narrow down where the blockage is.",
      ],
      [
        "Can MelOne help with a commercial sink blockage?",
        "We help homes and small businesses. Tell us what type of property it is, which drain is blocked and how the problem is affecting you so we can confirm whether we can help and when we are available.",
      ],
    ],
  },
  {
    slug: "/stormwater-drain-cleaning/",
    nav: "Stormwater drains",
    title: "Stormwater Drain Cleaning Brisbane | MelOne",
    description:
      "Brisbane stormwater drain help for slow grates, pooling water, leaf build-up and outside overflows. Contact MelOne before the next heavy downpour.",
    eyebrow: "Outdoor drainage",
    heading: "Give stormwater somewhere to go.",
    intro:
      "Brisbane downpours expose outdoor drainage problems quickly. Leaves, silt and other debris can block grates and drains, leaving water to pool around paths, yards and low points. MelOne checks and clears stormwater blockages we can safely reach across Brisbane.",
    intent: "For outside drains, grates and rain-related pooling",
    signs: [
      "Water pooling around a yard or driveway grate",
      "Leaves and silt collecting faster than water can drain",
      "An outside drain overflowing during moderate rain",
      "A drain that stays full well after the rain stops",
      "Debris or odours coming back through an outdoor grate",
      "A known problem you want checked before storm season",
    ],
    steps: [
      "If safe, remove loose surface leaves without opening or entering drains.",
      "Tell us where water pools, how long it remains and what happens during rain.",
      "We check the drains we can reach and explain what to do next.",
    ],
    faqs: [
      [
        "When should I arrange stormwater drain cleaning?",
        "Before the wetter season is useful if you have noticed slow grates, pooling water that will not drain or past overflows. For active flooding or electrical hazards, keep clear and contact the relevant emergency service.",
      ],
      [
        "Are stormwater and sewer drains the same?",
        "No. Stormwater drains carry rainwater, while sewer drains carry wastewater. The right response is different, so tell us exactly where the water is appearing.",
      ],
      [
        "Can you guarantee my property will not flood?",
        "No drain service can promise that. Heavy rain, the slope of the property, council drains and other site conditions can all affect flooding. We focus on the drainage problem we can safely reach and check.",
      ],
    ],
  },
  {
    slug: "/sewer-drain-cleaning-brisbane/",
    nav: "Sewer & main drains",
    title: "Sewer Drain Cleaning Brisbane | Main Drain Help | MelOne",
    description:
      "Brisbane sewer and main drain cleaning enquiries for several fixtures backing up, recurring wastewater problems, gurgling and sewage odours.",
    eyebrow: "Sewer and main drain cleaning",
    heading: "Several fixtures backing up can point to the main drain.",
    intro:
      "When more than one toilet, sink, shower or floor waste backs up, or wastewater appears at an outside relief point, the problem may sit beyond one fixture. MelOne reviews the pattern across the property, safe access points and any recurring history before the cleaning or investigation scope is confirmed.",
    intent: "For several affected fixtures and recurring main-drain restrictions",
    signs: [
      "More than one fixture draining slowly or backing up",
      "Wastewater appearing at an outside relief point",
      "Gurgling across different rooms when water is used",
      "Sewage odours returning after normal cleaning",
      "A main drain blockage that clears briefly and returns",
      "A toilet level changing when another fixture is used",
    ],
    steps: [
      "Reduce water use and stop using fixtures that are backing up.",
      "Tell Felix which fixtures and outside relief points are affected.",
      "We reply within 24 hours, confirm urgent availability separately and explain the appropriate next step.",
    ],
    faqs: [
      [
        "How is a main sewer blockage different from one blocked drain?",
        "A local blockage usually affects one fixture. A main-drain problem often affects several fixtures or causes wastewater to appear at another point on the property.",
      ],
      [
        "Should we keep using water while wastewater is backing up?",
        "No. Reduce water use and stop using affected fixtures where possible. Keep people away from wastewater and call for advice.",
      ],
      [
        "Will cleaning stop a recurring sewer blockage permanently?",
        "Cleaning may restore flow, but recurring restrictions can involve roots, displaced joints, damaged pipework or another condition that needs separate investigation.",
      ],
    ],
  },
];

const areas = {
  "Inner Brisbane": [
    "Brisbane City",
    "Fortitude Valley",
    "New Farm",
    "Newstead",
    "Spring Hill",
    "South Brisbane",
    "West End",
    "Kangaroo Point",
    "Woolloongabba",
  ],
  "Northside": [
    "Albion",
    "Ascot",
    "Chermside",
    "Clayfield",
    "Everton Park",
    "Kedron",
    "Nundah",
    "Stafford",
    "Wavell Heights",
    "Zillmere",
  ],
  "Southside": [
    "Annerley",
    "Carindale",
    "Eight Mile Plains",
    "Greenslopes",
    "Holland Park",
    "Moorooka",
    "Mount Gravatt",
    "Runcorn",
    "Sunnybank",
    "Upper Mount Gravatt",
  ],
  "East & bayside": [
    "Bulimba",
    "Cannon Hill",
    "Hawthorne",
    "Manly",
    "Morningside",
    "Murarrie",
    "Tingalpa",
    "Wakerley",
    "Wynnum",
  ],
  "West & outer suburbs": [
    "Ashgrove",
    "Indooroopilly",
    "Jindalee",
    "Kenmore",
    "Milton",
    "Paddington",
    "Taringa",
    "The Gap",
    "Toowong",
    "Wacol",
  ],
};

const homeFaqs = [
  [
    "What counts as a blocked drain?",
    "Common signs include slow flow, rising water, gurgling, recurring smells, an overflowing outside drain or several drains slowing at once. If water is rising, stop using the blocked drain and call for advice.",
  ],
  [
    "How quickly will MelOne reply?",
    "For an active blockage or water backing up, call the 24-hour urgent line. The team responds within minutes and can attend within two hours across the Brisbane service area. General enquiries are answered within 24 hours.",
  ],
  [
    "Which Brisbane suburbs do you service?",
    "MelOne serves Brisbane and many nearby suburbs across the inner city, northside, southside, east, bayside and west. Check the service-area page or call with your suburb and postcode.",
  ],
  [
    "Can you quote a blocked drain over the phone?",
    "We can discuss the job by phone, but the cause and access may only become clear during a visit. We keep the process straightforward and explain what affects the work.",
  ],
  [
    "What information should I have ready?",
    "Tell us your suburb, which drain is blocked, when the problem started, whether water is rising, whether any other drains are slow and whether you have used a chemical drain cleaner.",
  ],
  [
    "Do you help rental properties and small businesses?",
    "Yes. MelOne helps homes, rental properties, body corporate contacts and local businesses. Tell us about the drain, the site contact and access when you call or email so we can confirm whether we can help.",
  ],
];

const routePaths = [
  "/",
  ...services.map((service) => service.slug),
  "/service-areas-brisbane/",
  "/about/",
  "/contact/",
  "/zh/",
];

const esc = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");

const serviceCards = (exclude = "") => `
  <div class="service-grid">
    ${services
      .filter((service) => service.slug !== exclude)
      .map(
        (service, index) => `
          <article class="service-card reveal" style="--delay:${index * 70}ms">
            <span class="service-number">0${index + 1}</span>
            <p class="eyebrow">${esc(service.intent)}</p>
            <h3>${esc(service.nav)}</h3>
            <p>${esc(service.description.split(". ")[0])}.</p>
            <a class="text-link" href="${service.slug}">Explore ${esc(service.nav.toLowerCase())}<span aria-hidden="true">→</span></a>
          </article>`,
      )
      .join("")}
  </div>`;

const faqMarkup = (faqs) => `
  <div class="faq-list">
    ${faqs
      .map(
        ([question, answer], index) => `
          <details class="faq-item reveal" ${index === 0 ? "open" : ""}>
            <summary><span>${esc(question)}</span><span class="faq-plus" aria-hidden="true">+</span></summary>
            <p>${esc(answer)}</p>
          </details>`,
      )
      .join("")}
  </div>`;

const verifiedReviews = [
  [
    "Ingrid Gao",
    "Words can’t express how grateful we are...",
  ],
  [
    "Kong Tran",
    "completed numerous and various jobs for me.",
  ],
  [
    "Kevin Song",
    "Their service is excellent and the prices are reasonable.",
  ],
];

const reviewCarousel = () => `
  <section class="section reviews-section" aria-labelledby="reviews-title">
    <div class="reviews-heading">
      <div>
        <p class="eyebrow">Customer feedback</p>
        <h2 id="reviews-title">What customers say about MelOne.</h2>
        <p>A selection of comments previously shared about the MelOne team’s work.</p>
      </div>
      <div class="reviews-controls" aria-label="Customer feedback carousel controls">
        <button type="button" data-review-prev aria-label="Previous review card">Back</button>
        <button type="button" data-review-toggle aria-label="Pause automatic review scrolling">Pause</button>
        <button type="button" data-review-next aria-label="Next review card">Next</button>
      </div>
    </div>
    <div class="reviews-carousel" data-review-carousel>
      <div class="reviews-viewport" data-review-viewport tabindex="0" aria-label="Customer feedback">
        <div class="reviews-track">
          ${verifiedReviews
            .map(
              ([name, quote], index) => `
                <article class="review-card" data-review-card>
                  <span class="review-index">0${index + 1}</span>
                  <p class="review-status">Customer feedback</p>
                  <blockquote><p>“${esc(quote)}”</p></blockquote>
                  <footer>
                    <span class="review-avatar" aria-hidden="true">${esc(name.slice(0, 1))}</span>
                    <span class="review-person"><strong>${esc(name)}</strong><small>Mel One customer</small></span>
                  </footer>
                </article>`,
            )
            .join("")}
        </div>
      </div>
    </div>
  </section>`;

const brisbaneMap = ({ id, eyebrow, heading, copy, linkText }) => `
  <section class="section map-section location-map-section" aria-labelledby="${esc(id)}">
    <div class="map-copy reveal">
      <p class="eyebrow">${esc(eyebrow)}</p>
      <h2 id="${esc(id)}">${esc(heading)}</h2>
      <p>${esc(copy)}</p>
      <div class="location-meta" aria-label="MelOne company and service area details">
        <strong>Mel One Property Maintenance Pty Ltd</strong>
        <span>ABN 39 666 325 408</span>
        <span>Brisbane company profile</span>
        <span>Google Maps</span>
      </div>
      <div class="map-links">
        <a class="text-link" href="${esc(GOOGLE_BUSINESS_URL)}" target="_blank" rel="noopener">${esc(linkText)} <span aria-hidden="true">↗</span></a>
        <a class="text-link" href="/service-areas-brisbane/">See the Brisbane service-area map <span aria-hidden="true">→</span></a>
      </div>
    </div>
    <div class="map-frame map-frame-colour reveal">
      <iframe title="Google map for the Mel One Brisbane company profile" src="${GOOGLE_BUSINESS_EMBED}" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  </section>`;

const breadcrumb = (items) => `
  <nav class="breadcrumbs" aria-label="Breadcrumb">
    <ol>
      <li><a href="/">Home</a></li>
      ${items.map(([label, href]) => `<li>${href ? `<a href="${href}">${esc(label)}</a>` : `<span aria-current="page">${esc(label)}</span>`}</li>`).join("")}
    </ol>
  </nav>`;

const callout = (heading = "Tell us what the drain is doing.") => `
  <section class="contact-band" aria-labelledby="contact-band-title">
    <div>
      <p class="eyebrow eyebrow-light">Brisbane drain help</p>
      <h2 id="contact-band-title">${esc(heading)}</h2>
      <p>Blocked drain backing up? Call the 24-hour urgent line. We respond within minutes and can attend within two hours across the Brisbane service area.</p>
    </div>
    <div class="contact-band-actions">
      <a class="button button-light" href="tel:${PHONE_HREF}">Call ${PHONE_DISPLAY}</a>
      <a class="button button-ghost-light" href="mailto:${EMAIL}?subject=Brisbane%20drain%20service%20enquiry">Email MelOne</a>
    </div>
  </section>`;

const homePage = () => ({
  title: "Brisbane Drain Services | Mel One Maintenance",
  description:
    "Mel One Maintenance provides Brisbane drain services for blocked, slow, gurgling and overflowing drains, with direct contact and clear next steps.",
  eyebrow: "Brisbane drain services",
  heading: "Brisbane drain help. Clear next steps.",
  updated: "2026-08-17",
  faqs: homeFaqs,
  body: `
    <section class="hero home-hero">
      <div class="hero-copy reveal">
        <p class="eyebrow">Brisbane drain services</p>
        <h1>Brisbane drain help.<br><span>Clear next steps.</span></h1>
        <p class="hero-lede">Practical help for slow, gurgling, smelly or overflowing drains across Brisbane and nearby suburbs. Speak directly with Felix, explain what is happening and find the right next move.</p>
        <div class="hero-actions">
          <a class="button button-primary" href="tel:${PHONE_HREF}">Call ${PHONE_DISPLAY}</a>
          <a class="button button-secondary" href="mailto:${EMAIL}?subject=Blocked%20drain%20enquiry">Email MelOne</a>
        </div>
        <p class="availability-note"><span></span> Water backing up? Call the 24-hour urgent line. We respond within minutes and can attend within two hours across Brisbane.</p>
      </div>
      <aside class="hero-panel reveal" aria-label="What to tell us">
        <div class="drain-mark" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i></div>
        <p class="panel-kicker">When you call</p>
        <h2>Three details help us start.</h2>
        <ol class="quick-list">
          <li><span>01</span><div><strong>Your suburb</strong><small>Brisbane or nearby</small></div></li>
          <li><span>02</span><div><strong>The affected drain</strong><small>Toilet, sink, shower or outside</small></div></li>
          <li><span>03</span><div><strong>What you can see</strong><small>Slow flow, sound, smell or overflow</small></div></li>
        </ol>
      </aside>
    </section>

    <section class="proof-strip" aria-label="MelOne service approach">
      <div><span>01</span><strong>Local Brisbane service</strong></div>
      <div><span>02</span><strong>Straightforward communication</strong></div>
      <div><span>03</span><strong>Homes & small businesses</strong></div>
      <div><span>04</span><strong>Clear next steps</strong></div>
    </section>

    <section class="section photo-story" aria-labelledby="photo-story-title">
      <div class="photo-story-heading">
        <p class="eyebrow">What drainage trouble looks like</p>
        <h2 id="photo-story-title">Real details. Easier to describe.</h2>
        <p>From a restricted outside grate to water lingering around a shower drain, the visible detail helps start the conversation. These reference photographs show common drainage situations and do not depict MelOne staff or completed jobs.</p>
      </div>
      <div class="photo-grid">
        <figure class="photo-card photo-card-tall reveal">
          <img src="/representative-pipe-service.jpg" alt="Tradesperson working on a pipe as a representative service image" width="1365" height="2048" loading="lazy">
          <figcaption><span>Service detail</span><strong>Tell us what has already been tried.</strong></figcaption>
        </figure>
        <figure class="photo-card reveal">
          <img src="/storm-drain-leaves.jpg" alt="Leaves gathered around an outdoor storm drain" width="1365" height="2048" loading="lazy">
          <figcaption><span>Outdoor drains</span><strong>Debris can restrict the path for rainwater.</strong></figcaption>
        </figure>
        <figure class="photo-card reveal">
          <img src="/drain-detail.jpg" alt="Water droplets around a household drain cover" width="1365" height="2048" loading="lazy">
          <figcaption><span>Indoor drains</span><strong>Slow flow often shows itself before a full blockage.</strong></figcaption>
        </figure>
      </div>
    </section>

    <section class="section split-intro" id="services">
      <div>
        <p class="eyebrow">Start with the problem</p>
        <h2>Drain help matched to what you are seeing.</h2>
      </div>
      <p>One slow basin is different from several drains backing up together. Choose the situation closest to yours, or call and explain what is happening in your own words.</p>
    </section>
    <section class="section section-tight" aria-label="Drain services">
      ${serviceCards()}
    </section>

    <section class="section symptom-section">
      <div class="symptom-copy reveal">
        <p class="eyebrow">Common warning signs</p>
        <h2>Small warning signs can point to a bigger blockage.</h2>
        <p>A bad smell, a gurgle or water taking longer to drain can be the first warning sign. If it keeps happening, note which drain is involved and when the problem appears.</p>
        <a class="text-link" href="/blocked-drains-brisbane/">See blocked drain guidance <span aria-hidden="true">→</span></a>
      </div>
      <div class="symptom-grid">
        ${[
          ["Slow water", "A sink, shower or floor waste taking longer to empty."],
          ["Gurgling", "Airy or bubbling sounds when another drain is used."],
          ["Bad smells", "Odours returning from a drain after normal cleaning."],
          ["Rising water", "Water sitting higher, returning or approaching overflow."],
          ["Outside pooling", "Rainwater lingering around a grate or low point."],
          ["Repeat trouble", "A blockage that clears briefly, then comes back."],
        ]
          .map(([title, text], index) => `<article class="symptom reveal" style="--delay:${index * 55}ms"><span aria-hidden="true"></span><h3>${title}</h3><p>${text}</p></article>`)
          .join("")}
      </div>
    </section>

    <section class="section process-section">
      <div class="section-heading centered">
        <p class="eyebrow">A simple process</p>
        <h2>From first call to a clearer way forward.</h2>
      </div>
      <ol class="process-list">
        <li class="reveal"><span>1</span><div><h3>Describe it</h3><p>Tell Felix your suburb, which drain is blocked and what you have noticed. Photos can help when the problem is visible.</p></div></li>
        <li class="reveal"><span>2</span><div><h3>Confirm the visit</h3><p>We check the location and current availability, then agree on what happens next.</p></div></li>
        <li class="reveal"><span>3</span><div><h3>Check the drain</h3><p>We use what you have noticed and the drains we can reach to work out where the blockage may be.</p></div></li>
        <li class="reveal"><span>4</span><div><h3>Know what follows</h3><p>We explain what we found and any sensible follow-up in plain English.</p></div></li>
      </ol>
    </section>

    <section class="section why-section" aria-labelledby="why-title">
      <div class="why-heading reveal">
        <p class="eyebrow">Why choose MelOne</p>
        <h2 id="why-title">Useful answers before a drain visit.</h2>
        <p>When water is backing up, you need one clear contact, sensible questions and a clear idea of what happens next.</p>
        <p class="updated-note">Service information reviewed <time datetime="2026-08-03">3 August 2026</time>.</p>
      </div>
      <div class="why-grid">
        <article class="why-card reveal"><span>01</span><h3>One clear contact</h3><p>Call or email Felix directly using the same contact details shown across the site.</p></article>
        <article class="why-card reveal"><span>02</span><h3>Help matched to the problem</h3><p>Blocked drains, maintenance cleaning, toilet and sink blockages, and stormwater problems each have clear guidance.</p></article>
        <article class="why-card reveal"><span>03</span><h3>Coverage confirmed first</h3><p>Give us your Brisbane suburb and postcode so travel and current availability can be checked before booking.</p></article>
        <article class="why-card reveal"><span>04</span><h3>Repair workmanship warranty</h3><p>Eligible drain repair work includes a 10-year workmanship warranty. Covered scope and terms are confirmed in writing before work starts.</p></article>
      </div>
    </section>

    ${reviewCarousel()}

    <section class="section area-preview" id="areas">
      <div class="area-preview-copy reveal">
        <p class="eyebrow eyebrow-light">Service area</p>
        <h2>Across Brisbane,<br>suburb by suburb.</h2>
        <p>MelOne travels to customers across Brisbane's inner city, northside, southside, east, bayside and west. Availability depends on the day and distance, so call with your suburb and postcode.</p>
        <a class="button button-light" href="/service-areas-brisbane/">Check service areas</a>
      </div>
      <div class="area-cloud reveal" aria-label="Popular Brisbane service suburbs">
        ${["Brisbane City", "New Farm", "Chermside", "Wynnum", "Sunnybank", "Carindale", "Indooroopilly", "The Gap", "Cannon Hill", "Mount Gravatt", "Nundah", "West End"].map((area) => `<span>${area}</span>`).join("")}
      </div>
    </section>

    ${brisbaneMap({
      id: "home-brisbane-map-title",
      eyebrow: "Brisbane service area",
      heading: "Mel One’s Brisbane company profile.",
      copy: "Use the map to view the Mel One company profile and get directions.",
      linkText: "View the company profile on Google Maps",
    })}

    <section class="section about-preview">
      <div class="about-card reveal">
        <p class="eyebrow">About MelOne</p>
        <h2>A local service built around useful answers.</h2>
        <p>MelOne helps Brisbane residents, property managers and local businesses deal with blocked and slow drains. Felix is the primary contact, so you can explain the problem once and get a clear answer about what happens next.</p>
        <a class="text-link" href="/about/">Meet MelOne <span aria-hidden="true">→</span></a>
      </div>
      <blockquote class="principle-card reveal">
        <p>“Start with what the customer can see. Explain what matters. Keep it clear.”</p>
        <footer>— The MelOne approach</footer>
      </blockquote>
    </section>

    <section class="section faq-section" id="faq">
      <div class="section-heading">
        <p class="eyebrow">Helpful answers</p>
        <h2>Before you call about a blocked drain.</h2>
      </div>
      ${faqMarkup(homeFaqs)}
    </section>

    ${callout()}
  `,
});

const servicePage = (service) => ({
  ...service,
  updated: "2026-08-17",
  body: `
    <main>
      <section class="inner-hero">
        ${breadcrumb([[service.nav, ""]])}
        <div class="inner-hero-grid">
          <div class="reveal">
            <p class="eyebrow">${esc(service.eyebrow)} · Brisbane</p>
            <h1>${esc(service.heading)}</h1>
          </div>
          <div class="inner-hero-aside reveal">
            <p>${esc(service.intro)}</p>
            <div class="hero-actions">
              <a class="button button-primary" href="tel:${PHONE_HREF}">Call ${PHONE_DISPLAY}</a>
              <a class="text-link" href="/contact/">Contact details <span aria-hidden="true">→</span></a>
            </div>
          </div>
        </div>
      </section>

      <section class="section service-detail-grid">
        <div class="sticky-heading">
          <p class="eyebrow">Signs to watch</p>
          <h2>What this kind of drain problem can look like.</h2>
          <p>You do not need to diagnose the cause before calling. The pattern is enough to begin.</p>
        </div>
        <ul class="sign-list">
          ${service.signs.map((sign, index) => `<li class="reveal"><span>${String(index + 1).padStart(2, "0")}</span><p>${esc(sign)}</p></li>`).join("")}
        </ul>
      </section>

      <section class="section safety-card">
        <div>
          <p class="eyebrow">Before the visit</p>
          <h2>Protect the area and avoid making it worse.</h2>
        </div>
        <ol>
          ${service.steps.map((step, index) => `<li><span>0${index + 1}</span><p>${esc(step)}</p></li>`).join("")}
        </ol>
      </section>

      <section class="section related-services">
        <div class="section-heading">
          <p class="eyebrow">Related help</p>
          <h2>Not quite your problem?</h2>
        </div>
        ${serviceCards(service.slug)}
      </section>

      <section class="section faq-section">
        <div class="section-heading">
          <p class="eyebrow">Useful answers</p>
          <h2>${esc(service.nav)} questions.</h2>
        </div>
        ${faqMarkup(service.faqs)}
      </section>
      ${callout(`Need ${service.nav.toLowerCase()} help in Brisbane?`)}
    </main>`,
});

const areaPage = () => ({
  title: "Brisbane Drain Service Area & Map | MelOne",
  description:
    "View MelOne's indicative Brisbane drain service area map, company contact details and suburb coverage for mobile drain help.",
  eyebrow: "Brisbane service area and map",
  heading: "MelOne's Brisbane service area and map.",
  updated: "2026-08-17",
  body: `
    <main>
      <section class="inner-hero area-hero">
        ${breadcrumb([["Service areas", ""]])}
        <div class="inner-hero-grid">
          <div class="reveal">
            <p class="eyebrow">Brisbane service area and map</p>
            <h1>MelOne's Brisbane service area and map.</h1>
          </div>
          <div class="inner-hero-aside reveal">
            <p>MelOne travels to homes and small businesses across Brisbane and nearby suburbs. The list below covers common service areas, but it is not a hard boundary. Call with your suburb and postcode to confirm availability.</p>
            <a class="button button-primary" href="tel:${PHONE_HREF}">Check your suburb</a>
          </div>
        </div>
      </section>

      <section class="section map-section" aria-labelledby="service-map-title">
        <div class="map-copy reveal">
          <p class="eyebrow">Indicative coverage map</p>
          <h2 id="service-map-title">Mobile service across Brisbane.</h2>
          <p>MelOne travels to customer properties. This map shows Brisbane as the general service area; it is not a shopfront pin or a guaranteed travel boundary. Call with your suburb and postcode so Felix can confirm current availability.</p>
          <a class="text-link" href="${GOOGLE_BUSINESS_URL}" target="_blank" rel="noopener">Open the Mel One company profile in Google Maps <span aria-hidden="true">↗</span></a>
          <p class="updated-note">Coverage information reviewed <time datetime="2026-08-03">3 August 2026</time>.</p>
        </div>
        <div class="map-frame reveal">
          <iframe title="Map showing the Mel One company profile in Brisbane" src="${GOOGLE_BUSINESS_EMBED}" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <aside class="entity-card reveal" aria-labelledby="entity-title">
          <p class="eyebrow">Business details</p>
          <h2 id="entity-title">MelOne</h2>
          <dl>
            <div><dt>Legal entity</dt><dd>Mel One Property Maintenance Pty Ltd</dd></div>
            <div><dt>ABN / ACN</dt><dd>39 666 325 408 / 666 325 408</dd></div>
            <div><dt>Primary contact</dt><dd>${CONTACT}</dd></div>
            <div><dt>Phone</dt><dd><a href="tel:${PHONE_HREF}">${PHONE_DISPLAY}</a></dd></div>
            <div><dt>Email</dt><dd><a href="mailto:${EMAIL}">${EMAIL}</a></dd></div>
            <div><dt>Phone enquiries</dt><dd>Free quotes by phone or email</dd></div>
            <div><dt>How we work</dt><dd>We visit homes and businesses by arrangement; there is no walk-in shopfront</dd></div>
            <div><dt>Primary area</dt><dd>Brisbane and nearby suburbs, Queensland</dd></div>
          </dl>
        </aside>
      </section>

      <section class="section area-directory">
        ${Object.entries(areas)
          .map(
            ([region, suburbs], index) => `
              <article class="area-group reveal" style="--delay:${index * 70}ms">
                <div><span>0${index + 1}</span><h2>${esc(region)}</h2></div>
                <ul>${suburbs.map((suburb) => `<li>${esc(suburb)}</li>`).join("")}</ul>
              </article>`,
          )
          .join("")}
      </section>

      <section class="section area-notes">
        <div>
          <p class="eyebrow">Before booking</p>
          <h2>Distance is only one part of availability.</h2>
        </div>
        <div class="note-grid">
          <article><h3>Tell us the postcode</h3><p>Brisbane has suburbs with similar names and broad boundaries. A postcode helps confirm the right location.</p></article>
          <article><h3>Describe access</h3><p>Let us know whether the affected drain is inside, outside, behind a gate or in a shared property area.</p></article>
          <article><h3>Explain the urgency</h3><p>Dirty water backing up, one slow drain and a maintenance clean each need a different response. Describe what is happening now.</p></article>
        </div>
      </section>
      <section class="section related-services">
        <div class="section-heading"><p class="eyebrow">Services across Brisbane</p><h2>Choose the drain problem.</h2></div>
        ${serviceCards()}
      </section>
      ${callout("Ask if we service your Brisbane suburb.")}
    </main>`,
});

const aboutPage = () => ({
  title: "About MelOne | Brisbane Drain Clearing",
  description:
    "Meet MelOne, a Brisbane service business helping homes and local businesses with blocked drains, slow drainage and clear advice.",
  eyebrow: "About MelOne",
  heading: "Straightforward drain help, with clear communication.",
  body: `
    <main>
      <section class="inner-hero about-hero">
        ${breadcrumb([["About", ""]])}
        <div class="inner-hero-grid">
          <div class="reveal">
            <p class="eyebrow">About MelOne</p>
            <h1>Local work starts with listening properly.</h1>
          </div>
          <div class="inner-hero-aside reveal">
            <p>MelOne helps Brisbane residents, property managers and local businesses with blocked, slow and troublesome drains. We listen to what is happening, explain the options clearly and keep the process straightforward.</p>
          </div>
        </div>
      </section>

      <section class="section story-grid">
        <div class="story-lead reveal">
          <p class="eyebrow">The person behind the phone</p>
          <h2>Speak with Felix.</h2>
        </div>
        <div class="story-copy reveal">
          <p>Felix is MelOne’s primary contact for drain enquiries. That direct contact matters when a sink will not empty or an outside drain is starting to overflow. Tell us what is blocked and what you have noticed, and Felix will give you a clear answer about availability.</p>
          <p>You do not need to know what is happening inside the pipe. Tell us where the water appears, what makes it worse and whether any other drains are slow or backing up.</p>
        </div>
      </section>

      <section class="section values-section">
        <div class="section-heading centered"><p class="eyebrow">How we approach the work</p><h2>Useful at every step.</h2></div>
        <div class="values-grid">
          <article class="reveal"><span>01</span><h3>Listen before assuming</h3><p>What you can see and when it happens help us decide where to start.</p></article>
          <article class="reveal"><span>02</span><h3>Say what matters</h3><p>Customers need clear advice, not a cloud of technical language.</p></article>
          <article class="reveal"><span>03</span><h3>Respect the property</h3><p>Access, people at the property and any dirty water are all taken into account.</p></article>
          <article class="reveal"><span>04</span><h3>Be honest about fit</h3><p>If a job needs a different trade, we will say so clearly.</p></article>
        </div>
      </section>

      <section class="section who-we-help">
        <div><p class="eyebrow">Who we help</p><h2>Drain problems do not only happen at home.</h2></div>
        <div class="who-grid">
          <article><h3>Homeowners & residents</h3><p>Help with blocked toilets, sinks, showers, floor wastes and outside drains.</p></article>
          <article><h3>Rental property contacts</h3><p>Clear communication about the site contact, access and what is happening at the property.</p></article>
          <article><h3>Small businesses</h3><p>Drain-clearing help for local businesses that need to keep disruption to a minimum.</p></article>
        </div>
      </section>

      <section id="company-details" class="section section-tight">
        <div class="section-heading"><p class="eyebrow">Company &amp; insurance</p><h2>Company and insurance details.</h2></div>
        <div class="entity-card">
          <p><strong>Mel One Property Maintenance Pty Ltd</strong><br>ABN 39 666 325 408 · ACN 666 325 408<br>Registered with ASIC on 8 March 2023</p>
          <p><strong>Current public liability insurance</strong><br>Chubb Insurance Australia Limited<br>Public &amp; Products Liability · AUD 20 million<br>13 April 2026 – 13 April 2027, subject to policy terms</p>
          <p><strong>Regulated drainage work:</strong> If clearing identifies regulated plumbing or drainage work, that scope is separated from routine cleaning. The required licence class and responsible contracting party are confirmed before the quote is accepted or work starts.</p>
        </div>
      </section>

      ${brisbaneMap({
        id: "about-brisbane-map-title",
        eyebrow: "Where we work",
        heading: "Mel One’s Brisbane company profile.",
        copy: "View the Mel One company profile and directions.",
        linkText: "Open in Google Maps",
      })}

      ${reviewCarousel()}

      ${callout("Speak directly with MelOne.")}
    </main>`,
});

const chinesePage = () => ({
  title: "布里斯班管道疏通与排水服务 | Mel One Maintenance",
  description:
    "Mel One Maintenance 为布里斯班住宅、出租物业和本地商家提供堵塞排水管、马桶、洗手盆及雨水排水问题的中文咨询。",
  eyebrow: "中文服务",
  heading: "布里斯班管道疏通与排水服务",
  lang: "zh-Hans",
  updated: "2026-08-17",
  body: `
    <main>
      <section class="inner-hero about-hero">
        <nav class="breadcrumbs" aria-label="面包屑导航"><ol><li><a href="/">English</a></li><li><span aria-current="page">中文</span></li></ol></nav>
        <div class="inner-hero-grid">
          <div class="reveal">
            <p class="eyebrow">Mel One Maintenance 中文服务</p>
            <h1>布里斯班管道堵塞？先把情况说清楚。</h1>
          </div>
          <div class="inner-hero-aside reveal">
            <p>排水口正在倒灌？24 小时紧急电话通常数分钟内回复，布里斯班服务区域内两小时内可到场。</p>
            <a class="text-link" href="/">View the English website <span aria-hidden="true">→</span></a>
          </div>
        </div>
      </section>

      <section class="section split-intro">
        <div><p class="eyebrow">常见排水问题</p><h2>住宅、出租物业和本地商家。</h2></div>
        <p>我们处理布里斯班常见的排水堵塞咨询。情况紧急时，请先停止使用受影响的排水口，并尽量减少附近用水。</p>
      </section>

      <section class="section section-tight" aria-label="中文排水服务">
        <div class="service-grid">
          <article class="service-card reveal"><span class="service-number">01</span><p class="eyebrow">水位上升或倒灌</p><h3>堵塞排水管</h3><p>洗手盆、淋浴、地漏或室外排水口排水缓慢、发出咕噜声或溢水。</p><a class="text-link" href="/blocked-drains-brisbane/">查看英文服务页 <span aria-hidden="true">→</span></a></article>
          <article class="service-card reveal"><span class="service-number">02</span><p class="eyebrow">慢排水与异味</p><h3>排水清理</h3><p>处理积垢、反复出现的异味，以及越来越慢的厨房或浴室排水。</p><a class="text-link" href="/drain-cleaning-brisbane/">查看英文服务页 <span aria-hidden="true">→</span></a></article>
          <article class="service-card reveal"><span class="service-number">03</span><p class="eyebrow">卫生间与厨房</p><h3>马桶和洗手盆堵塞</h3><p>马桶、厨房水槽、浴室洗手盆和淋浴排水问题。</p><a class="text-link" href="/toilet-sink-blockages/">查看英文服务页 <span aria-hidden="true">→</span></a></article>
          <article class="service-card reveal"><span class="service-number">04</span><p class="eyebrow">室外积水</p><h3>雨水排水</h3><p>布里斯班大雨前后的格栅、落叶淤积和室外积水问题。</p><a class="text-link" href="/stormwater-drain-cleaning/">查看英文服务页 <span aria-hidden="true">→</span></a></article>
        </div>
      </section>

      <section class="section why-section" aria-labelledby="zh-why-title">
        <div class="why-heading reveal">
          <p class="eyebrow">为什么选择 MelOne</p>
          <h2 id="zh-why-title">一个联系人，清楚沟通。</h2>
          <p>直接联系 Felix。请提供郊区、邮编和现场情况，我们会先确认服务范围与时间。</p>
        </div>
        <div class="why-grid">
          <article class="why-card reveal"><span>01</span><h3>直接联系</h3><p>电话和邮箱在全站保持一致，不需要重复寻找联系人。</p></article>
          <article class="why-card reveal"><span>02</span><h3>说明白再安排</h3><p>先了解哪里堵塞、何时开始，以及其他排水口是否也受影响。</p></article>
          <article class="why-card reveal"><span>03</span><h3>布里斯班上门服务</h3><p>提供郊区和邮编后，我们会确认当天的行程与可预约时间。</p></article>
          <article class="why-card reveal"><span>04</span><h3>维修工艺质保</h3><p>符合条件的排水维修工程提供10年工艺质保，覆盖范围和条款会在施工前书面确认。</p></article>
        </div>
      </section>

      <section id="company-details" class="section section-tight">
        <div class="section-heading"><p class="eyebrow">公司与保险</p><h2>先确认您联系的是哪家公司。</h2></div>
        <div class="entity-card">
          <p><strong>Mel One Property Maintenance Pty Ltd</strong><br>ABN 39 666 325 408 · ACN 666 325 408<br>公司注册日期：2023 年 3 月 8 日</p>
          <p><strong>当前公众与产品责任险</strong><br>Chubb Insurance Australia Limited<br>责任限额：2,000 万澳元<br>保险期间：2026 年 4 月 13 日至 2027 年 4 月 13 日，具体保障以保单条款为准。</p>
        </div>
      </section>

      ${brisbaneMap({
        id: "zh-brisbane-map-title",
        eyebrow: "服务区域地图",
        heading: "在 Google 地图查看 Mel One Renovations",
        copy: "使用地图查看 Mel One Renovations 商家资料、地点和路线。",
        linkText: "在 Google 地图中查看 Mel One Renovations",
      })}

      <section class="contact-band" aria-labelledby="zh-contact-title">
        <div>
          <p class="eyebrow eyebrow-light">中文咨询</p>
          <h2 id="zh-contact-title">告诉我们哪里堵塞。</h2>
          <p>紧急倒灌可随时致电；团队通常数分钟内回复，布里斯班服务区域内两小时内可到场。</p>
        </div>
        <div class="contact-band-actions">
          <a class="button button-light" href="tel:${PHONE_HREF}">电话 ${PHONE_DISPLAY}</a>
          <a class="button button-ghost-light" href="mailto:${EMAIL}?subject=Brisbane%20drain%20service%20enquiry">${EMAIL}</a>
        </div>
      </section>
    </main>`,
});

const contactPage = () => ({
  title: "Contact MelOne | Blocked Drain Help Brisbane",
  description:
    "Call Felix at MelOne on 0403 202 949 or email handyman.kevinlee@gmail.com for blocked drain and drain cleaning enquiries across Brisbane.",
  eyebrow: "Contact MelOne",
  heading: "Describe the drain problem. We will take it from there.",
  body: `
    <main>
      <section class="contact-hero">
        ${breadcrumb([["Contact", ""]])}
        <div class="contact-hero-grid">
          <div class="reveal">
            <p class="eyebrow eyebrow-light">Contact MelOne</p>
            <h1>What is the drain doing?</h1>
            <p>Call for the quickest conversation, or email the key details and any useful photos. We reply within 24 hours; Felix confirms urgent attendance and the work scope separately.</p>
          </div>
          <div class="contact-cards reveal">
            <a href="tel:${PHONE_HREF}" class="contact-card"><span>Call</span><strong>${PHONE_DISPLAY}</strong><small>Primary contact: ${CONTACT}</small></a>
            <a href="mailto:${EMAIL}?subject=Brisbane%20drain%20service%20enquiry" class="contact-card"><span>Email</span><strong>${EMAIL}</strong><small>Include your suburb and the blocked drain</small></a>
          </div>
        </div>
      </section>

      <section class="section enquiry-guide">
        <div>
          <p class="eyebrow">A useful first message</p>
          <h2>Five details help us respond.</h2>
        </div>
        <ol>
          <li><span>01</span><div><h3>Suburb and postcode</h3><p>So we can confirm the service area and travel.</p></div></li>
          <li><span>02</span><div><h3>Which drain is blocked</h3><p>Toilet, sink, shower, floor waste, outdoor grate or another drain.</p></div></li>
          <li><span>03</span><div><h3>What is happening</h3><p>Slow flow, gurgling, smell, rising water or active overflow.</p></div></li>
          <li><span>04</span><div><h3>Other drains</h3><p>Tell us whether anything else is slow or backing up at the same time.</p></div></li>
          <li><span>05</span><div><h3>Access and site contact</h3><p>Especially for rentals, shared properties and small businesses.</p></div></li>
        </ol>
      </section>

      <section class="section contact-safety">
        <div><p class="eyebrow">If water is rising</p><h2>Pause water use first.</h2></div>
        <p>Stop using the blocked drain, reduce water use nearby and keep people away from dirty water. Do not mix drain-cleaning chemicals. For immediate danger, serious flooding or an electrical hazard, contact the relevant emergency service.</p>
      </section>

      <section class="section area-mini">
        <div><p class="eyebrow">Where we go</p><h2>Brisbane and nearby suburbs.</h2></div>
        <p>From the inner city and northside to the southside, bayside and western suburbs, call with your postcode to check current availability.</p>
        <a class="text-link" href="/service-areas-brisbane/">View the Brisbane service area <span aria-hidden="true">→</span></a>
      </section>
    </main>`,
});

const getPage = (path) => {
  if (path === "/") return homePage();
  const service = services.find((item) => item.slug === path);
  if (service) return servicePage(service);
  if (path === "/service-areas-brisbane/") return areaPage();
  if (path === "/about/") return aboutPage();
  if (path === "/contact/") return contactPage();
  if (path === "/zh/") return chinesePage();
  return null;
};

const header = (path) => `
  <a class="skip-link" href="#main">Skip to content</a>
  <div class="utility-bar">
    <p><span>Brisbane & nearby suburbs</span><span class="utility-dot">•</span><span>Call to check availability</span></p>
    <a href="tel:${PHONE_HREF}">Call ${PHONE_DISPLAY}</a>
  </div>
  <header class="site-header">
    <a class="brand" href="/" aria-label="MelOne home"><span class="brand-logo-crop" aria-hidden="true"><img src="/melone-logo.png" alt="" width="960" height="960"></span><span class="brand-copy"><strong class="brand-wordmark">MELONE</strong><span class="brand-tag">Drain care · Brisbane</span></span></a>
    <button class="menu-button" type="button" aria-expanded="false" aria-controls="site-nav"><span></span><span></span><span></span><span class="sr-only">Menu</span></button>
    <nav class="site-nav" id="site-nav" aria-label="Primary navigation">
      <a ${path.startsWith("/blocked") || path.startsWith("/drain-") || path.startsWith("/sewer-") || path.startsWith("/toilet") || path.startsWith("/stormwater") ? 'aria-current="page"' : ""} href="/blocked-drains-brisbane/">Services</a>
      <a ${path === "/service-areas-brisbane/" ? 'aria-current="page"' : ""} href="/service-areas-brisbane/">Map & areas</a>
      <a ${path === "/about/" ? 'aria-current="page"' : ""} href="/about/">About</a>
      <a ${path === "/zh/" ? 'aria-current="page"' : ""} href="/zh/" lang="zh-Hans">中文</a>
      <a class="nav-contact" ${path === "/contact/" ? 'aria-current="page"' : ""} href="/contact/">Contact <span aria-hidden="true">↗</span></a>
    </nav>
  </header>`;

const footer = () => `
  <footer class="site-footer">
    <div class="footer-main">
      <div class="footer-brand"><div class="footer-logo-lockup"><span class="footer-logo-crop" aria-hidden="true"><img src="/melone-logo.png" alt="" width="960" height="960"></span><strong class="brand-wordmark">MELONE</strong></div><p>Blocked drain and drain cleaning help across Brisbane and nearby suburbs.</p><p>Mel One Property Maintenance Pty Ltd · ABN 39 666 325 408</p></div>
      <div><h2>Services</h2><ul>${services.map((service) => `<li><a href="${service.slug}">${esc(service.nav)}</a></li>`).join("")}</ul></div>
      <div><h2>Company</h2><ul><li><a href="/service-areas-brisbane/">Map & service areas</a></li><li><a href="/about/">About MelOne</a></li><li><a href="/about/#company-details">Company &amp; insurance</a></li><li><a href="https://www.meloneplumbingvic.com.au/plumbing-services-brisbane">Other Brisbane plumbing repairs</a></li><li><a href="/zh/" lang="zh-Hans">中文服务</a></li><li><a href="/contact/">Contact</a></li></ul></div>
      <div class="footer-contact"><h2>Speak with ${CONTACT}</h2><a href="tel:${PHONE_HREF}">${PHONE_DISPLAY}</a><a href="mailto:${EMAIL}">${EMAIL}</a><p>Brisbane, Queensland</p></div>
    </div>
    <div class="footer-bottom"><span>© MelOne</span><span>Brisbane drain clearing</span></div>
  </footer>
  <div class="mobile-call"><a href="tel:${PHONE_HREF}"><span>Call MelOne</span><strong>${PHONE_DISPLAY}</strong></a></div>`;

const jsonLd = (page, origin, path) => {
  const canonical = `${origin}${path}`;
  const service = services.find((item) => item.slug === path);
  const crumbs = [
    { "@type": "ListItem", position: 1, name: "Home", item: `${origin}/` },
  ];
  if (path !== "/") {
    crumbs.push({
      "@type": "ListItem",
      position: 2,
      name: page.eyebrow,
      item: canonical,
    });
  }
  const graph = [
    {
      "@type": "Organization",
      "@id": `${origin}/#organisation`,
      name: "MelOne Brisbane Drain Care",
      alternateName: ["Mel One Maintenance", "Mel One", "MelOne", "MelOne Brisbane Drain Care"],
      legalName: "Mel One Property Maintenance Pty Ltd",
      url: `${origin}/`,
      logo: `${origin}/melone-logo.png`,
      email: EMAIL,
      telephone: PHONE_HREF,
      taxID: "ABN 39 666 325 408",
      identifier: [
        { "@type": "PropertyValue", propertyID: "ABN", value: "39 666 325 408" },
        { "@type": "PropertyValue", propertyID: "ACN", value: "666 325 408" },
      ],
      sameAs: [GOOGLE_BUSINESS_URL],
      contactPoint: {
        "@type": "ContactPoint",
        name: CONTACT,
        telephone: PHONE_HREF,
        email: EMAIL,
        contactType: "customer service",
        areaServed: "AU-QLD",
        availableLanguage: ["en-AU", "zh-Hans"],
      },
    },
    {
      "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
      "@id": `${origin}/#business`,
      name: "MelOne Brisbane Drain Care",
      alternateName: ["Mel One Maintenance", "Mel One", "MelOne", "MelOne Brisbane Drain Care"],
      legalName: "Mel One Property Maintenance Pty Ltd",
      url: `${origin}/`,
      image: `${origin}/og.png`,
      telephone: PHONE_HREF,
      email: EMAIL,
      taxID: "ABN 39 666 325 408",
      sameAs: [GOOGLE_BUSINESS_URL],
      hasMap: GOOGLE_BUSINESS_URL,
      areaServed: [
        { "@type": "City", name: "Brisbane" },
        { "@type": "AdministrativeArea", name: "Greater Brisbane" },
      ],
      parentOrganization: { "@id": `${origin}/#organisation` },
      knowsAbout: [
        "Blocked drains",
        "Drain cleaning",
        "Blocked toilets and sinks",
        "Stormwater drain cleaning",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${origin}/#website`,
      url: `${origin}/`,
      name: "MelOne Brisbane Drain Care",
      inLanguage: ["en-AU", "zh-Hans"],
      publisher: { "@id": `${origin}/#organisation` },
    },
    {
      "@type": path === "/about/" ? "AboutPage" : path === "/contact/" ? "ContactPage" : path === "/service-areas-brisbane/" ? "CollectionPage" : "WebPage",
      "@id": `${canonical}#webpage`,
      url: canonical,
      name: page.title,
      description: page.description,
      inLanguage: page.lang || "en-AU",
      isPartOf: { "@id": `${origin}/#website` },
      about: { "@id": `${origin}/#business` },
      dateModified: page.updated,
    },
    { "@type": "BreadcrumbList", itemListElement: crumbs },
  ];
  if (page.faqs?.length) {
    graph.push({
      "@type": "FAQPage",
      mainEntity: page.faqs.map(([question, answer]) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: { "@type": "Answer", text: answer },
      })),
    });
  }
  if (service) {
    graph.push({
      "@type": "Service",
      "@id": `${canonical}#service`,
      name: service.nav,
      serviceType: service.intent,
      url: canonical,
      provider: { "@id": `${origin}/#business` },
      areaServed: { "@type": "City", name: "Brisbane" },
      description: service.description,
    });
  }
  return JSON.stringify({ "@context": "https://schema.org", "@graph": graph }).replaceAll("<", "\\u003c");
};

const document = (page, origin, path) => {
  const canonical = `${origin}${path}`;
  const pageLang = page.lang || "en-AU";
  const ogLocale = pageLang === "zh-Hans" ? "zh_CN" : "en_AU";
  const alternateLinks = path === "/" || path === "/zh/"
    ? `\n  <link rel="alternate" hreflang="en-AU" href="${origin}/">\n  <link rel="alternate" hreflang="zh-Hans" href="${origin}/zh/">\n  <link rel="alternate" hreflang="x-default" href="${origin}/">`
    : "";
  return `<!doctype html>
<html lang="${pageLang}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(page.title)}</title>
  <meta name="description" content="${esc(page.description)}">
  <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1">
  <link rel="canonical" href="${canonical}">${alternateLinks}
  <link rel="preload" href="/assets/site.css" as="style">
  <link rel="stylesheet" href="/assets/site.css">
  <meta name="theme-color" content="#071a2b">
  <link rel="icon" href="/melone-logo.png" type="image/png" sizes="960x960">
  <link rel="apple-touch-icon" href="/melone-logo.png">
  <meta property="og:type" content="website">
  <meta property="og:locale" content="${ogLocale}">
  <meta property="og:site_name" content="MelOne Brisbane Drain Care">
  <meta property="og:title" content="${esc(page.title)}">
  <meta property="og:description" content="${esc(page.description)}">
  <meta property="og:url" content="${canonical}">
  <meta property="og:image" content="${origin}/og.png">
  <meta property="og:image:width" content="1732">
  <meta property="og:image:height" content="909">
  <meta property="og:image:alt" content="MelOne — Blocked drains. Clear next steps. Brisbane.">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${esc(page.title)}">
  <meta name="twitter:description" content="${esc(page.description)}">
  <meta name="twitter:image" content="${origin}/og.png">
  <script async src="https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}"></script>
  <script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag("js",new Date());gtag("config","${GA_MEASUREMENT_ID}");</script>
  <script type="application/ld+json">${jsonLd(page, origin, path)}</script>
</head>
<body>
  ${header(path)}
  <div id="main">${page.body}</div>
  ${footer()}
  <script src="/assets/site.js" defer></script>
</body>
</html>`;
};

const sitemap = (origin) => `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routePaths.map((path) => `  <url><loc>${origin}${path}</loc><lastmod>2026-08-03</lastmod><changefreq>${path === "/" ? "weekly" : "monthly"}</changefreq><priority>${path === "/" ? "1.0" : "0.8"}</priority></url>`).join("\n")}
</urlset>`;

const notFound = (origin) => `<!doctype html><html lang="en-AU"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Page not found | MelOne</title><meta name="robots" content="noindex"><link rel="stylesheet" href="/assets/site.css"></head><body>${header("")}<main class="not-found"><p class="eyebrow">404</p><h1>That page has gone down the wrong drain.</h1><p>Return to the MelOne homepage or call if you need drain help in Brisbane.</p><div class="hero-actions"><a class="button button-primary" href="/">Back to home</a><a class="button button-secondary" href="tel:${PHONE_HREF}">Call ${PHONE_DISPLAY}</a></div></main>${footer()}<script src="/assets/site.js" defer></script></body></html>`;

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const origin = url.origin;
    let path = url.pathname;

    if (path === "/robots.txt") {
      return new Response(`User-agent: *\nAllow: /\n\nSitemap: ${origin}/sitemap.xml\n`, {
        headers: { "content-type": "text/plain; charset=utf-8", "cache-control": "public, max-age=3600" },
      });
    }
    if (path === "/sitemap.xml") {
      return new Response(sitemap(origin), {
        headers: { "content-type": "application/xml; charset=utf-8", "cache-control": "public, max-age=3600" },
      });
    }
    if (
      path.startsWith("/assets/") ||
      [
        "/og.png",
        "/melone-logo.png",
        "/representative-pipe-service.jpg",
        "/storm-drain-leaves.jpg",
        "/drain-detail.jpg",
      ].includes(path)
    ) {
      return env.ASSETS.fetch(request);
    }
    if (!path.endsWith("/") && !path.includes(".")) {
      return Response.redirect(`${origin}${path}/`, 301);
    }
    const page = getPage(path);
    if (!page) {
      return new Response(notFound(origin), {
        status: 404,
        headers: { "content-type": "text/html; charset=utf-8", "x-content-type-options": "nosniff" },
      });
    }
    return new Response(document(page, origin, path), {
      headers: {
        "content-type": "text/html; charset=utf-8",
        "cache-control": "public, max-age=0, s-maxage=3600",
        "x-content-type-options": "nosniff",
        "referrer-policy": "strict-origin-when-cross-origin",
        "content-language": page.lang || "en-AU",
      },
    });
  },
};

