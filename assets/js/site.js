/* Prakriti — shared site script.
   Builds the header, nav, footer and search on every page, and fills
   in any content sections the current page asks for.
   Content lives in content.js. You should not need to edit this file. */

(function () {
  "use strict";

  var NAV = [
    { href: "index.html",       label: "Home" },
    { href: "programmes.html",  label: "Programmes" },
    { href: "field-notes.html", label: "Field notes" },
    { href: "science.html",     label: "Science" },
    { href: "our-work.html",    label: "Our work" },
    { href: "about.html",       label: "About" }
  ];

  var here = location.pathname.split("/").pop() || "index.html";

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;")
      .replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
  function el(id) { return document.getElementById(id); }
  function fill(id, html) { var n = el(id); if (n) n.innerHTML = html; }

  /* ---------- header ---------- */
  function buildHeader() {
    var slot = el("site-header");
    if (!slot) return;

    var telugu = here === "field-notes.html"
      ? '<button type="button" id="langbtn" lang="te">తెలుగు</button>' : "";

    var links = NAV.map(function (n) {
      var cur = n.href === here ? ' aria-current="page"' : "";
      return '<a href="' + n.href + '"' + cur + ">" + esc(n.label) + "</a>";
    }).join("");

    slot.innerHTML =
      '<div class="topbar"><div class="wrap topbar__in">' +
        '<span class="topbar__name">Indian Institute of Science Education and Research Tirupati</span>' +
        '<span class="sizeset">' +
          '<button type="button" data-size="15" aria-label="Smaller text">A&minus;</button>' +
          '<button type="button" data-size="17" aria-label="Default text size">A</button>' +
          '<button type="button" data-size="20" aria-label="Larger text">A+</button>' +
        "</span>" + telugu +
      "</div></div>" +

      '<div class="masthead"><div class="wrap masthead__in">' +
        '<a class="lockup" href="index.html">' +
          '<img src="assets/img/prakriti-logo.png" srcset="assets/img/prakriti-logo.png 1x, assets/img/prakriti-logo@2x.png 2x" alt="Prakriti">' +
          '<span class="lockup__txt"><b>Prakriti</b><span>Conservation Club</span></span>' +
        "</a>" +
        '<div class="masthead__inst"><b>IISER Tirupati</b>A student club under the Student Activity Centre</div>' +
      "</div></div>" +

      '<nav class="mainnav" aria-label="Main"><div class="mainnav__in">' +
        '<button class="navtoggle" type="button" aria-expanded="false">Menu</button>' +
        '<div class="mainnav__links" id="navlinks">' + links + "</div>" +
        '<button class="navsearch" type="button" id="searchopen" aria-label="Search this site">Search</button>' +
      "</div></nav>" +

      (typeof ANNOUNCE !== "undefined" && ANNOUNCE.show
        ? '<div class="announce"><div class="wrap announce__in">' +
            '<span class="tag">' + esc(ANNOUNCE.tag) + "</span>" +
            '<span class="announce__txt">' + esc(ANNOUNCE.text) + "</span>" +
            (ANNOUNCE.link ? '<a href="' + esc(ANNOUNCE.link) + '">Details</a>' : "") +
          "</div></div>"
        : "");

    var toggle = slot.querySelector(".navtoggle");
    toggle.addEventListener("click", function () {
      var open = el("navlinks").classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    slot.querySelectorAll("[data-size]").forEach(function (b) {
      b.addEventListener("click", function () {
        var px = b.getAttribute("data-size");
        document.documentElement.style.setProperty("--rootsize", px + "px");
        try { localStorage.setItem("prakriti-size", px); } catch (e) {}
      });
    });
    try {
      var saved = localStorage.getItem("prakriti-size");
      if (saved) document.documentElement.style.setProperty("--rootsize", saved + "px");
    } catch (e) {}
  }

  /* ---------- footer ---------- */
  function buildFooter() {
    var slot = el("site-footer");
    if (!slot) return;
    var s = SITE;
    var wa = s.whatsapp ? '<li><a href="https://wa.me/' + esc(s.whatsapp) + '">WhatsApp</a></li>' : "";

    slot.innerHTML =
      '<footer class="foot"><div class="wrap">' +
        '<div class="foot__grid">' +
          "<div>" +
            '<div class="foot__brand"><img src="assets/img/prakriti-mark.png" alt=""><b>Prakriti</b></div>' +
            "The Conservation Club<br>Student Activity Centre<br>IISER Tirupati" +
          "</div>" +
          "<div><h4>Contact</h4><ul>" +
            '<li><a href="mailto:' + esc(s.email) + '">' + esc(s.email) + "</a></li>" +
            '<li><a href="mailto:' + esc(s.email) + '?subject=Researcher%20enquiry">Researcher enquiries</a></li>' +
            '<li><a href="mailto:' + esc(s.email) + '?subject=School%20partnership">School partnerships</a></li>' +
            '<li><a href="mailto:' + esc(s.email) + '?subject=Suggestion%20for%20Prakriti">Send a suggestion</a></li>' +
          "</ul></div>" +
          "<div><h4>Follow</h4><ul>" +
            '<li><a href="' + esc(s.instagram) + '">Instagram</a></li>' +
            '<li><a href="' + esc(s.linkedin) + '">LinkedIn</a></li>' +
            '<li><a href="' + esc(s.twitter) + '">X (Twitter)</a></li>' + wa +
          "</ul></div>" +
          "<div><h4>Institute</h4>" + esc(s.address) + "</div>" +
        "</div>" +
        '<div class="foot__legal">' +
          "<span>Maintained by the Prakriti core team</span>" +
          "<span>Faculty mentor: " + esc(TEAM.mentor.name) + "</span>" +
        "</div>" +
      "</div></footer>";
  }

  /* ---------- search ---------- */
  function buildSearch() {
    if (!el("searchopen")) return;
    var idx = [];

    NAV.forEach(function (n) { idx.push({ kind: "Page", title: n.label, href: n.href }); });
    (typeof EVENTS !== "undefined" ? EVENTS : []).forEach(function (e) {
      idx.push({ kind: "Programme", title: e.title, extra: e.when + " " + e.kind + " " + e.summary, href: "programmes.html" });
    });
    (typeof SCIENCE !== "undefined" ? SCIENCE : []).forEach(function (s) {
      idx.push({ kind: "Science", title: s.title, extra: s.problem + " " + s.science, href: "science.html" });
    });
    (typeof INITIATIVES !== "undefined" ? INITIATIVES : []).forEach(function (i) {
      idx.push({ kind: "Our work", title: i.title, extra: i.cadence + " " + i.summary, href: "our-work.html" });
    });
    (typeof REPORTS !== "undefined" ? REPORTS : []).forEach(function (r) {
      idx.push({ kind: "Report " + r.id, title: r.problem, extra: r.mandal + " " + r.crop, href: "field-notes.html" });
    });

    var panel = document.createElement("div");
    panel.className = "searchpanel";
    panel.innerHTML =
      '<div class="searchbox">' +
        '<input type="search" id="searchinput" placeholder="Search programmes, science entries, reports" aria-label="Search this site">' +
        '<div class="results" id="searchresults"></div>' +
      "</div>";
    document.body.appendChild(panel);

    var input = el("searchinput"), out = el("searchresults");

    function close() { panel.classList.remove("open"); }
    el("searchopen").addEventListener("click", function () {
      panel.classList.add("open"); input.value = ""; render(""); input.focus();
    });
    panel.addEventListener("click", function (e) { if (e.target === panel) close(); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") close(); });

    function render(q) {
      q = q.trim().toLowerCase();
      if (!q) { out.innerHTML = '<p class="results__empty">Type to search across the site.</p>'; return; }
      var hits = idx.filter(function (r) {
        return (r.title + " " + (r.extra || "")).toLowerCase().indexOf(q) > -1;
      }).slice(0, 12);
      out.innerHTML = hits.length
        ? hits.map(function (r) {
            return '<a href="' + r.href + '"><span class="rk">' + esc(r.kind) +
                   '</span><span class="rt">' + esc(r.title) + "</span></a>";
          }).join("")
        : '<p class="results__empty">Nothing found for that. Try a crop, a mandal, or a programme name.</p>';
    }
    input.addEventListener("input", function () { render(input.value); });
  }

  /* ---------- page sections ---------- */
  function eventCard(e) {
    return '<article class="card">' +
      '<div class="card__meta">' + esc(e.when) + " &middot; " + esc(e.kind) + "</div>" +
      "<h3>" + esc(e.title) + "</h3>" +
      "<p>" + esc(e.summary) + "</p>" +
      '<div class="card__foot">' + esc(e.venue) + "</div></article>";
  }

  function reportRow(r) {
    var label = { "new": "New", routed: "With a researcher", answered: "Answered" }[r.status] || r.status;
    return '<div class="brow">' +
      '<span class="brow__id">' + esc(r.id) + "</span>" +
      '<span class="brow__q">' + esc(r.problem) + "</span>" +
      '<span class="brow__loc">' + esc(r.mandal) + " &middot; " + esc(r.crop) + "</span>" +
      '<span class="brow__status"><span class="chip chip--' + esc(r.status) + '">' + esc(label) + "</span></span>" +
      "</div>";
  }

  function sciCard(s) {
    return '<article class="sci"><h3>' + esc(s.title) + "</h3>" +
      '<div class="sci__block"><div class="sci__label">The problem</div><p>' + esc(s.problem) + "</p></div>" +
      '<div class="sci__block"><div class="sci__label">What the science says</div><p>' + esc(s.science) + "</p></div>" +
      '<div class="sci__block"><div class="sci__label">What can be done</div><ul>' +
        "<li>" + esc(s.actions.home) + "</li>" +
        "<li>" + esc(s.actions.campus) + "</li>" +
        "<li>" + esc(s.actions.policy) + "</li>" +
      "</ul></div>" +
      '<div class="sci__block"><div class="sci__label">Who to ask</div><p>' + esc(s.ask) + "</p></div>" +
      "</article>";
  }

  function personCard(p, roleFallback) {
    var img = p.photo
      ? '<img src="assets/img/' + esc(p.photo) + '" alt="' + esc(p.name) + '">'
      : "Photo";
    var role = p.role || roleFallback || "";
    if (p.batch) role += (role ? " &middot; " : "") + esc(p.batch);
    return '<article class="person"><div class="person__ph">' + img + "</div><div>" +
      "<h3>" + esc(p.name) + "</h3>" +
      '<div class="person__role">' + role + "</div>" +
      (p.note ? "<p>" + esc(p.note) + "</p>" : "") +
      (p.link ? '<a href="' + esc(p.link) + '">Profile page</a>' : "") +
      "</div></article>";
  }

  function buildPage() {
    var upcoming = (typeof EVENTS !== "undefined" ? EVENTS : []).filter(function (e) { return e.status === "upcoming"; });
    var past = (typeof EVENTS !== "undefined" ? EVENTS : []).filter(function (e) { return e.status === "past"; });

    if (el("home-events")) {
      fill("home-events", upcoming.slice(0, 3).map(eventCard).join("") ||
        '<p class="pending">No programmes listed yet.</p>');
    }
    if (el("all-upcoming")) {
      fill("all-upcoming", upcoming.map(eventCard).join("") ||
        '<p class="pending">Nothing scheduled at the moment. Check back after the semester calendar is confirmed.</p>');
    }
    if (el("all-past")) {
      fill("all-past", past.map(eventCard).join("") ||
        '<p class="pending">The archive fills up as programmes finish. Nothing here yet.</p>');
    }
    if (el("reports-board")) {
      fill("reports-board", REPORTS.map(reportRow).join(""));
    }
    if (el("home-reports")) {
      fill("home-reports", REPORTS.slice(0, 3).map(reportRow).join(""));
    }
    if (el("science-list")) {
      fill("science-list", SCIENCE.map(sciCard).join(""));
    }
    if (el("home-science")) {
      fill("home-science", SCIENCE.slice(0, 1).map(sciCard).join(""));
    }
    if (el("initiatives")) {
      fill("initiatives", INITIATIVES.map(function (i) {
        return '<article class="card"><div class="card__meta">' + esc(i.cadence) + "</div>" +
          "<h3>" + esc(i.title) + "</h3><p>" + esc(i.summary) + "</p></article>";
      }).join(""));
    }
    if (el("mentor")) {
      fill("mentor", personCard(TEAM.mentor));
    }
    if (el("coordinators")) {
      fill("coordinators", TEAM.coordinators.map(function (p) { return personCard(p); }).join(""));
    }
    if (el("core-team")) {
      fill("core-team", TEAM.core.map(function (v) {
        var body = v.members.length
          ? "<ul>" + v.members.map(function (m) {
              return "<li>" + esc(m.name) + (m.role ? ' <span class="muted">— ' + esc(m.role) + "</span>" : "") + "</li>";
            }).join("") + "</ul>"
          : '<p class="muted">Members to be listed.</p>';
        return '<article class="card"><h3>' + esc(v.vertical) + "</h3>" + body + "</article>";
      }).join(""));
    }
    if (el("past-coordinators")) {
      fill("past-coordinators", TEAM.past.length
        ? '<table class="reg"><thead><tr><th>Tenure</th><th>Name</th><th>Role</th><th>What was done</th></tr></thead><tbody>' +
          TEAM.past.map(function (p) {
            return "<tr><td>" + esc(p.years) + "</td><td>" + esc(p.name) +
              "</td><td>" + esc(p.role) + "</td><td>" + esc(p.work) + "</td></tr>";
          }).join("") + "</tbody></table>"
        : '<p class="pending">This register is being compiled. If you coordinated Prakriti in an earlier year, write to us and we will add your tenure.</p>');
    }
  }

  /* ---------- go ---------- */
  document.addEventListener("DOMContentLoaded", function () {
    buildHeader();
    buildPage();
    buildFooter();
    buildSearch();
  });
})();
