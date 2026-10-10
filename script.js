/* ==========================================================================
   script.js: builds the page from data.js and adds the interactive bits
   (menu, dark mode, animations, copy email). You don't need to edit this
   file to update your resume. Edit data.js instead.
   ========================================================================== */

(function () {
  "use strict";

  /* ---------- Icons (simple line icons, drawn in code) ---------- */
  const ICONS = {
    mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
    download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/><path d="M12 15V3"/>',
    arrowRight: '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
    arrowUp: '<path d="m5 12 7-7 7 7"/><path d="M12 19V5"/>',
    mapPin: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
    clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
    globe: '<circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>',
    check: '<path d="M20 6 9 17l-5-5"/>',
    copy: '<rect width="14" height="14" x="8" y="8" rx="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>',
    external: '<path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>',
    briefcase: '<path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><rect width="20" height="14" x="2" y="6" rx="2"/>',
    calendar: '<rect width="18" height="18" x="3" y="4" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
    calculator: '<rect width="16" height="20" x="4" y="2" rx="2"/><path d="M8 6h8"/><path d="M16 14v4"/><path d="M16 10h.01M12 10h.01M8 10h.01M12 14h.01M8 14h.01M12 18h.01M8 18h.01"/>',
    clipboard: '<rect width="8" height="4" x="8" y="2" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M12 11h4M12 16h4M8 11h.01M8 16h.01"/>',
    bag: '<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/>',
    megaphone: '<path d="m3 11 18-5v12L3 14v-3z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/>',
    landmark: '<path d="M3 22h18"/><path d="M6 18v-7M10 18v-7M14 18v-7M18 18v-7"/><path d="M12 2 20 7H4z"/>',
    graduation: '<path d="M21.42 10.92a1 1 0 0 0-.02-1.84L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.83l8.57 3.91a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/>',
    shield: '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',
    award: '<circle cx="12" cy="8" r="6"/><path d="M15.48 12.89 17 22l-5-3-5 3 1.52-9.11"/>',
    message: '<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>',
  };

  const icon = (name) =>
    `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">${ICONS[name] || ICONS.check}</svg>`;

  // Makes text safe to put into HTML (so "&" or "<" in data.js can't break the page).
  const esc = (value) =>
    String(value == null ? "" : value).replace(/[&<>"']/g, (c) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
    })[c]);

  // Returns a clean list, skipping empty "" items.
  const list = (items) => (Array.isArray(items) ? items.filter((x) => x !== "" && x != null) : []);

  /* ---------- Data check ---------- */
  if (typeof RESUME === "undefined") {
    const hero = document.querySelector('[data-render="hero"]');
    if (hero) {
      hero.innerHTML =
        '<div class="data-error"><strong>The site content could not load.</strong> ' +
        "There is probably a small typo in <code>data.js</code>, such as a missing quote " +
        "<code>\"</code> or comma <code>,</code>. Undo your last change, or open the browser " +
        "console (press F12) to see the line number.</div>";
    }
    return;
  }

  const D = RESUME;
  const B = D.buttons || {};
  const mailto = `mailto:${D.email}${D.emailSubject ? `?subject=${encodeURIComponent(D.emailSubject)}` : ""}`;
  const profileLinks = list(D.links).filter((l) => l && l.url);

  function sectionHead(key) {
    const s = (D.sections && D.sections[key]) || {};
    return `
      <header class="section-head reveal">
        ${s.eyebrow ? `<p class="eyebrow">${esc(s.eyebrow)}</p>` : ""}
        <h2 id="${key}-title">${esc(s.title || s.eyebrow || key)}</h2>
        ${s.intro ? `<p class="section-intro">${esc(s.intro)}</p>` : ""}
      </header>`;
  }

  /* ---------- Section templates ---------- */
  const render = {
    hero() {
      const h = D.hero || {};
      const specialties = list(D.specialties).map((s) => `<li>${esc(s)}</li>`).join("");
      const badges = list(h.badges)
        .map((b, i) => `
          <div class="float-card float-card-${i + 1}">
            ${icon(b.icon)}
            <div><strong>${esc(b.title)}</strong><span>${esc(b.text)}</span></div>
          </div>`)
        .join("");
      const printLine = [D.email, D.location, D.availability, ...profileLinks.map((l) => l.url)]
        .filter(Boolean)
        .map(esc)
        .join(" &nbsp;·&nbsp; ");

      return `
        <div class="hero-text">
          <p class="status reveal"><span class="status-dot" aria-hidden="true"></span>${esc(D.availability)}</p>
          <h1 id="hero-title" class="reveal" style="--delay:60ms">${esc(D.name)}</h1>
          <p class="hero-role reveal" style="--delay:120ms">${esc(D.title)}</p>
          <ul class="specialties reveal" style="--delay:160ms" aria-label="Specialties">${specialties}</ul>
          <p class="hero-lead reveal" style="--delay:220ms">${esc(h.lead)}</p>
          <div class="hero-cta reveal" style="--delay:280ms">
            <a class="btn btn-primary btn-lg" href="#contact">${esc(B.hire)} ${icon("arrowRight")}</a>
            <a class="btn btn-outline btn-lg" href="${esc(mailto)}">${icon("mail")} ${esc(B.email)}</a>
            <a class="btn btn-ghost btn-lg" href="${esc(D.resumePdf)}" download>${icon("download")} ${esc(B.resume)}</a>
          </div>
          <p class="print-contact">${printLine}</p>
        </div>
        <div class="hero-visual reveal" style="--delay:200ms">
          <div class="portrait">
            <div class="portrait-frame">
              <span class="portrait-initials" aria-hidden="true">${esc(D.initials)}</span>
              ${D.photo ? `<img class="portrait-img" src="${esc(D.photo)}" alt="Photo of ${esc(D.name)}" width="400" height="500" decoding="async">` : ""}
            </div>
            ${badges}
          </div>
        </div>`;
    },

    about() {
      const a = D.about || {};
      const paragraphs = list(a.paragraphs).map((p) => `<p>${esc(p)}</p>`).join("");
      const facts = [
        ["mapPin", "Based in", esc(D.location)],
        ["clock", "Time zone", esc(D.timezone)],
        ["globe", "Availability", esc(D.availability)],
        ["message", "Languages", list(D.languages).map(esc).join(", ")],
        ["shield", "Strengths", list(a.strengths).map(esc).join(" · ")],
        ["mail", "Email", D.email ? `<a href="${esc(mailto)}">${esc(D.email)}</a>` : ""],
      ].filter((f) => f[2]);

      return `
        ${sectionHead("about")}
        <div class="about-grid">
          <div class="about-text reveal">${paragraphs}</div>
          <aside class="card glance reveal" style="--delay:120ms" aria-labelledby="glance-title">
            <h3 class="card-title" id="glance-title">At a glance</h3>
            <dl class="facts">
              ${facts.map(([ic, label, value]) => `
                <div class="fact">${icon(ic)}<div><dt>${label}</dt><dd>${value}</dd></div></div>`).join("")}
            </dl>
          </aside>
        </div>`;
    },

    services() {
      const s = (D.sections && D.sections.services) || {};
      const cards = list(D.services)
        .map((svc, i) => {
          const includes = list(svc.includes);
          return `
            <article class="card service reveal" style="--delay:${i * 80}ms">
              <div class="service-icon">${icon(svc.icon)}</div>
              <h3>${esc(svc.title)}</h3>
              <p>${esc(svc.description)}</p>
              ${includes.length ? `<ul class="check-list">${includes.map((x) => `<li>${icon("check")}<span>${esc(x)}</span></li>`).join("")}</ul>` : ""}
            </article>`;
        })
        .join("");

      return `
        ${sectionHead("services")}
        <div class="services-grid">${cards}</div>
        ${s.cta ? `
          <div class="services-cta reveal">
            <p>${esc(s.cta)}</p>
            <a class="btn btn-primary" href="#contact">${esc(B.hire)} ${icon("arrowRight")}</a>
          </div>` : ""}`;
    },

    experience() {
      const items = list(D.experience)
        .map((job, i) => {
          const current = /present/i.test(job.end || "");
          const points = list(job.points);
          return `
            <li class="timeline-item reveal" style="--delay:${i * 60}ms">
              <span class="timeline-dot${current ? " is-current" : ""}" aria-hidden="true"></span>
              <article class="card job">
                <header class="job-head">
                  <div>
                    <h3>${esc(job.role)}</h3>
                    <p class="job-company">${icon("briefcase")}${esc(job.company)}</p>
                  </div>
                  <p class="job-dates">
                    ${current ? '<span class="pill pill-current">Current</span>' : ""}
                    <span>${icon("calendar")}${esc(job.start)} – ${esc(job.end)}</span>
                  </p>
                </header>
                ${points.length ? `<ul class="job-points">${points.map((p) => `<li>${esc(p)}</li>`).join("")}</ul>` : ""}
              </article>
            </li>`;
        })
        .join("");

      return `${sectionHead("experience")}<ol class="timeline">${items}</ol>`;
    },

    skills() {
      const skills = list(D.skills)
        .map((s, i) => `<li class="skill reveal" style="--delay:${i * 40}ms">${icon("check")}<span>${esc(s)}</span></li>`)
        .join("");
      const languages = list(D.languages).map((l) => `<li>${esc(l)}</li>`).join("");

      return `
        ${sectionHead("skills")}
        <div class="skills-grid">
          <ul class="skills-list" aria-label="Skills">${skills}</ul>
          ${languages ? `
            <aside class="card lang-card reveal" aria-labelledby="lang-title">
              <h3 class="card-title" id="lang-title">${icon("message")} Languages</h3>
              <ul class="lang-list">${languages}</ul>
            </aside>` : ""}
        </div>`;
    },

    education() {
      const cards = list(D.education)
        .map((e, i) => `
          <article class="card edu reveal" style="--delay:${i * 80}ms">
            <div class="edu-icon">${icon("graduation")}</div>
            <div>
              <p class="edu-years">${esc(e.start)} – ${esc(e.end)}</p>
              <h3>${esc(e.degree)}</h3>
              <p class="edu-school">${esc(e.school)}</p>
              ${e.honor ? `<p class="pill pill-honor">${icon("award")} ${esc(e.honor)}</p>` : ""}
            </div>
          </article>`)
        .join("");

      return `${sectionHead("education")}<div class="edu-grid">${cards}</div>`;
    },

    contact() {
      const c = D.contact || {};
      return `
        <div class="contact-card reveal">
          <div class="contact-main">
            ${c.eyebrow ? `<p class="eyebrow">${esc(c.eyebrow)}</p>` : ""}
            <h2 id="contact-title">${esc(c.title)}</h2>
            <p class="contact-text">${esc(c.text)}</p>
            <div class="contact-actions">
              <a class="btn btn-accent btn-lg" href="${esc(mailto)}">${icon("mail")} ${esc(B.email)}</a>
              <a class="btn btn-outline-light btn-lg" href="${esc(D.resumePdf)}" download>${icon("download")} ${esc(B.resume)}</a>
            </div>
          </div>
          <div class="contact-side">
            <div class="email-box">
              <span class="email-label">Email</span>
              <a class="email-link" href="${esc(mailto)}">${esc(D.email)}</a>
              <button class="copy-btn" type="button" data-copy="${esc(D.email)}" aria-label="Copy email address">${icon("copy")}<span>Copy</span></button>
            </div>
            <ul class="contact-facts">
              ${D.location ? `<li>${icon("mapPin")}${esc(D.location)}</li>` : ""}
              ${D.timezone ? `<li>${icon("clock")}${esc(D.timezone)}</li>` : ""}
              ${D.availability ? `<li>${icon("globe")}${esc(D.availability)}</li>` : ""}
            </ul>
            ${profileLinks.length ? `
              <ul class="profile-links">
                ${profileLinks.map((l) => `<li><a href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)} ${icon("external")}<span class="sr-only">(opens in a new tab)</span></a></li>`).join("")}
              </ul>` : ""}
          </div>
          ${c.referencesNote ? `<p class="references">${esc(c.referencesNote)}</p>` : ""}
        </div>
        <p class="sr-only" id="copy-status" role="status" aria-live="polite"></p>`;
    },

    footer() {
      return `
        <p>© ${new Date().getFullYear()} ${esc(D.name)} · ${esc(D.location)}</p>
        <a class="back-to-top" href="#top">${icon("arrowUp")} Back to top</a>`;
    },
  };

  /* ---------- Build the page ---------- */
  document.querySelectorAll("[data-render]").forEach((el) => {
    const fn = render[el.dataset.render];
    if (!fn) return;
    try {
      el.innerHTML = fn();
    } catch (err) {
      console.error(`Could not build the "${el.dataset.render}" section. Check data.js.`, err);
    }
  });

  // Fill small bits of text in the header (name, initials, Hire Me button).
  document.querySelectorAll("[data-field]").forEach((el) => {
    const value = el.dataset.field.split(".").reduce((obj, key) => (obj ? obj[key] : undefined), D);
    if (value) el.textContent = value;
  });

  // Headshot: show photo.jpg if it exists, otherwise keep the initials.
  const photo = document.querySelector(".portrait-img");
  if (photo) {
    const hidePhoto = () => photo.remove();
    photo.addEventListener("error", hidePhoto);
    if (photo.complete && photo.naturalWidth === 0) hidePhoto();
  }

  /* ---------- Light / dark mode ---------- */
  const root = document.documentElement;
  const themeBtn = document.getElementById("theme-toggle");
  const themeMeta = document.querySelector('meta[name="theme-color"]');

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    if (themeBtn) {
      themeBtn.setAttribute("aria-label", theme === "dark" ? "Switch to light mode" : "Switch to dark mode");
    }
    if (themeMeta) themeMeta.setAttribute("content", theme === "dark" ? "#0a1624" : "#12355b");
  }

  applyTheme(root.getAttribute("data-theme") === "dark" ? "dark" : "light");

  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      applyTheme(next);
      try { localStorage.setItem("theme", next); } catch (e) { /* storage blocked: fine */ }
    });
  }

  // Follow the device setting until the visitor picks a theme themselves.
  if (window.matchMedia) {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onSystemChange = (e) => {
      let saved = null;
      try { saved = localStorage.getItem("theme"); } catch (err) { /* ignore */ }
      if (!saved) applyTheme(e.matches ? "dark" : "light");
    };
    if (mq.addEventListener) mq.addEventListener("change", onSystemChange);
  }

  /* ---------- Mobile menu ---------- */
  const header = document.getElementById("site-header");
  const menu = document.getElementById("nav-menu");
  const menuBtn = document.getElementById("nav-toggle");

  function setMenu(open) {
    if (!menu || !menuBtn) return;
    menu.classList.toggle("is-open", open);
    menuBtn.setAttribute("aria-expanded", String(open));
    menuBtn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  }

  if (menuBtn) {
    menuBtn.addEventListener("click", () => setMenu(menuBtn.getAttribute("aria-expanded") !== "true"));
  }
  if (menu) {
    menu.addEventListener("click", (e) => {
      if (e.target.closest("a")) setMenu(false);
    });
  }
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && menu && menu.classList.contains("is-open")) {
      setMenu(false);
      menuBtn.focus();
    }
  });
  document.addEventListener("click", (e) => {
    if (menu && menu.classList.contains("is-open") && !header.contains(e.target)) setMenu(false);
  });

  /* ---------- Header shadow when scrolling ---------- */
  const onScroll = () => header && header.classList.toggle("is-scrolled", window.scrollY > 8);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---------- Highlight the current section in the menu ---------- */
  const navLinks = Array.from(document.querySelectorAll(".nav-links a"));
  if ("IntersectionObserver" in window && navLinks.length) {
    const byId = new Map(navLinks.map((a) => [a.getAttribute("href").slice(1), a]));
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          navLinks.forEach((a) => {
            a.classList.remove("is-active");
            a.removeAttribute("aria-current");
          });
          const link = byId.get(entry.target.id);
          if (link) {
            link.classList.add("is-active");
            link.setAttribute("aria-current", "true");
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    document.querySelectorAll("main section[id]").forEach((section) => spy.observe(section));
  }

  /* ---------- Fade-in on scroll ---------- */
  const reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if ("IntersectionObserver" in window && !reduceMotion) {
    root.classList.add("anim");
    const revealer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -6% 0px", threshold: 0.08 }
    );
    document.querySelectorAll(".reveal").forEach((el) => revealer.observe(el));
    // Make sure nothing stays hidden when printing.
    window.addEventListener("beforeprint", () => {
      document.querySelectorAll(".reveal").forEach((el) => el.classList.add("is-visible"));
    });
  }

  /* ---------- Copy email button ---------- */
  document.addEventListener("click", async (e) => {
    const btn = e.target.closest("[data-copy]");
    if (!btn) return;
    const text = btn.getAttribute("data-copy");
    let copied = false;
    try {
      await navigator.clipboard.writeText(text);
      copied = true;
    } catch (err) {
      // Fallback for older browsers.
      const area = document.createElement("textarea");
      area.value = text;
      area.setAttribute("readonly", "");
      area.style.position = "fixed";
      area.style.opacity = "0";
      document.body.appendChild(area);
      area.select();
      try { copied = document.execCommand("copy"); } catch (err2) { copied = false; }
      area.remove();
    }
    const label = btn.querySelector("span");
    const status = document.getElementById("copy-status");
    if (copied) {
      btn.classList.add("is-copied");
      if (label) label.textContent = "Copied!";
      if (status) status.textContent = "Email address copied to clipboard.";
      setTimeout(() => {
        btn.classList.remove("is-copied");
        if (label) label.textContent = "Copy";
        if (status) status.textContent = "";
      }, 2000);
    }
  });

  /* ---------- Opened with a #link? Jump there now that content exists ---------- */
  if (location.hash.length > 1) {
    const target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
    if (target) target.scrollIntoView();
  }
})();
