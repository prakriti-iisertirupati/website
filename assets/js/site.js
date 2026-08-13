/* Prakriti — shared site script.
   Builds the header, nav, footer and search on every page, and fills
   in any content sections the current page asks for.
   Content lives in content.js. You should not need to edit this file. */

(function () {
  "use strict";

  var NAV = [
    { href: "index.html",       label: "Home" },
    { href: "events.html",      label: "Events" },
    { href: "news.html",        label: "News" },
    { href: "field-notes.html", label: "Field notes" },
    { href: "science.html",     label: "Science" },
    { href: "learn.html",       label: "Learn" },
    { href: "sustainability.html", label: "Sustainability" },
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

    var promoted = (typeof NEWS !== "undefined" ? NEWS : []).filter(function (n) { return n.promote; })[0];
    var strip = "";
    if (promoted) {
      strip = '<div class="announce"><div class="wrap announce__in">' +
        '<span class="tag">Announcement</span>' +
        '<span class="announce__txt">' + esc(promoted.title) + "</span>" +
        '<a href="news.html">More</a>' +
      "</div></div>";
    } else if (typeof ANNOUNCE !== "undefined" && ANNOUNCE.show) {
      strip = '<div class="announce"><div class="wrap announce__in">' +
        '<span class="tag">' + esc(ANNOUNCE.tag) + "</span>" +
        '<span class="announce__txt">' + esc(ANNOUNCE.text) + "</span>" +
        (ANNOUNCE.link ? '<a href="' + esc(ANNOUNCE.link) + '">Details</a>' : "") +
      "</div></div>";
    }

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
          '<span class="lockup__txt"><b>Prakriti</b><span>Ecology &amp; Conservation Club · IISER Tirupati</span></span>' +
        "</a>" +
        '<div class="masthead__inst"><b>IISER Tirupati</b>A student club under SAC</div>' +
      "</div></div>" +

      '<nav class="mainnav" aria-label="Main"><div class="mainnav__in">' +
        '<button class="navtoggle" type="button" aria-expanded="false">Menu</button>' +
        '<div class="mainnav__links" id="navlinks">' + links + "</div>" +
        '<button class="navsearch" type="button" id="searchopen" aria-label="Search this site">Search</button>' +
      "</div></nav>" +
      strip;

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

    slot.innerHTML =
      '<footer class="foot"><div class="wrap">' +
        '<div class="foot__grid">' +
          "<div>" +
            '<div class="foot__brand"><img src="assets/img/prakriti-mark.png" alt=""><b>Prakriti</b></div>' +
            "Ecology &amp; Conservation Club<br>A student club under SAC<br>IISER Tirupati" +
          "</div>" +
          "<div><h4>Contact us</h4>" +
            "IISER Tirupati<br>Srinivasapuram, Yerpedu Mandal<br>Tirupati District, Andhra Pradesh<br>India — 517619" +
            '<br><br><a href="mailto:' + esc(s.email) + '">' + esc(s.email) + "</a>" +
            ' <button type="button" class="copybtn" data-copy="' + esc(s.email) + '" aria-label="Copy email address">Copy</button>' +
          "</div>" +
          "<div><h4>Important links</h4><ul>" +
            '<li><a href="index.html">Home</a></li>' +
            '<li><a href="news.html">News &amp; announcements</a></li>' +
            '<li><a href="events.html">Events &amp; activities</a></li>' +
            '<li><a href="field-notes.html">Field notes</a></li>' +
            '<li><a href="about.html">About the club</a></li>' +
          "</ul></div>" +
          "<div><h4>Other links</h4><ul>" +
            '<li><a href="learn.html">Learn</a></li>' +
            '<li><a href="science.html">Science</a></li>' +
            '<li><a href="sustainability.html">Sustainability on campus</a></li>' +
            '<li><a href="https://www.iisertirupati.ac.in" target="_blank" rel="noopener">IISER Tirupati</a></li>' +
            '<li><a href="mailto:' + esc(s.email) + '?subject=Suggestion%20for%20Prakriti">Send a suggestion</a></li>' +
          "</ul></div>" +
          "<div><h4>Follow</h4><ul>" +
            '<li><a href="' + esc(s.instagram) + '" target="_blank" rel="noopener">Instagram</a></li>' +
            '<li><a href="' + esc(s.linkedin) + '" target="_blank" rel="noopener">LinkedIn</a></li>' +
            '<li><a href="' + esc(s.twitter) + '" target="_blank" rel="noopener">X (Twitter)</a></li>' +
          "</ul></div>" +
        "</div>" +
        '<div class="foot__legal">' +
          "<span>Maintained by the Prakriti core team</span>" +
          "<span>Faculty mentor: " + esc(TEAM.mentor.name) + "</span>" +
        "</div>" +
      "</div></footer>";

    slot.querySelectorAll(".copybtn").forEach(function (b) {
      b.addEventListener("click", function () {
        var text = b.getAttribute("data-copy");
        var done = function () {
          var old = b.textContent;
          b.textContent = "Copied";
          setTimeout(function () { b.textContent = old; }, 1600);
        };
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(text).then(done, done);
        } else {
          var t = document.createElement("textarea");
          t.value = text; document.body.appendChild(t); t.select();
          try { document.execCommand("copy"); } catch (e) {}
          document.body.removeChild(t); done();
        }
      });
    });
  }

  /* ---------- search ---------- */
  function buildSearch() {
    if (!el("searchopen")) return;
    var idx = [];

    NAV.forEach(function (n) { idx.push({ kind: "Page", title: n.label, href: n.href }); });
    (typeof EVENTS !== "undefined" ? EVENTS : []).forEach(function (e) {
      idx.push({ kind: "Event", title: e.title, extra: e.when + " " + e.kind + " " + e.summary, href: "events.html" });
    });
    (typeof SCIENCE !== "undefined" ? SCIENCE : []).forEach(function (s) {
      idx.push({ kind: "Science", title: s.title, extra: s.problem + " " + s.science, href: "science.html" });
    });
    (typeof INITIATIVES !== "undefined" ? INITIATIVES : []).forEach(function (i) {
      idx.push({ kind: "Sustainability", title: i.title, extra: i.status + " " + i.summary, href: "sustainability.html" });
    });
    (typeof NEWS !== "undefined" ? NEWS : []).forEach(function (n) {
      idx.push({ kind: "News", title: n.title, extra: n.date + " " + n.summary, href: "news.html" });
    });
    (typeof LEARN !== "undefined" ? LEARN : []).forEach(function (l) {
      idx.push({ kind: "Learn", title: l.title, extra: l.kind + " " + l.summary, href: "learn.html" });
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
    var scopeTag = e.scope === "off"
      ? '<span class="scopetag scopetag--off">Off campus</span>'
      : '<span class="scopetag">On campus</span>';
    return '<article class="card">' +
      '<div class="card__meta">' + esc(e.when) + " &middot; " + esc(e.kind) + " " + scopeTag + "</div>" +
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
    var onCampus = upcoming.filter(function (e) { return e.scope !== "off"; });
    var offCampus = upcoming.filter(function (e) { return e.scope === "off"; });

    if (el("home-events")) {
      fill("home-events", upcoming.slice(0, 3).map(eventCard).join("") ||
        '<p class="pending">No events listed yet.</p>');
    }
    if (el("events-oncampus")) {
      fill("events-oncampus", onCampus.map(eventCard).join("") ||
        '<p class="pending">Nothing scheduled on campus at the moment.</p>');
    }
    if (el("events-offcampus")) {
      fill("events-offcampus", offCampus.map(eventCard).join("") ||
        '<p class="pending">No off-campus trips scheduled yet. These need approval lead time, so they are confirmed a few weeks ahead.</p>');
    }
    if (el("events-past")) {
      fill("events-past", past.map(eventCard).join("") ||
        '<p class="pending">The archive fills up as events finish.</p>');
    }
    if (el("reports-board")) {
      fill("reports-board", REPORTS.length
        ? REPORTS.map(reportRow).join("")
        : '<p class="pending">No reports on the board yet. As farmers and students start sending them in, they will appear here — each one anonymised, with only the mandal and crop shown.</p>');
    }
    if (el("home-reports")) {
      fill("home-reports", REPORTS.length
        ? REPORTS.slice(0, 3).map(reportRow).join("")
        : '<p class="pending">The board is ready and waiting for its first reports.</p>');
    }
    if (el("science-list")) {
      fill("science-list", SCIENCE.map(sciCard).join(""));
    }
    if (el("home-science")) {
      fill("home-science", SCIENCE.slice(0, 1).map(sciCard).join(""));
    }
    if (el("initiatives")) {
      fill("initiatives", INITIATIVES.map(function (i) {
        var planned = /planned/i.test(i.status);
        var badge = '<span class="statusbadge' + (planned ? ' statusbadge--planned' : '') + '">' + esc(i.status) + "</span>";
        return '<article class="card">' + badge +
          "<h3>" + esc(i.title) + "</h3><p>" + esc(i.summary) + "</p></article>";
      }).join(""));
    }
    if (el("news-list")) {
      fill("news-list", NEWS.length
        ? NEWS.map(function (n) {
            return '<article class="card"><div class="card__meta">' + esc(n.date) + "</div>" +
              "<h3>" + esc(n.title) + "</h3><p>" + esc(n.summary) + "</p></article>";
          }).join("")
        : '<p class="pending">No news yet — check back after the first programme.</p>');
    }
    if (el("home-news")) {
      fill("home-news", NEWS.slice(0, 2).map(function (n) {
        return '<article class="card"><div class="card__meta">' + esc(n.date) + "</div>" +
          "<h3>" + esc(n.title) + "</h3><p>" + esc(n.summary) + "</p></article>";
      }).join(""));
    }
    if (el("learn-list")) {
      fill("learn-list", LEARN.map(function (l) {
        return '<article class="card"><div class="card__meta">' + esc(l.kind) + "</div>" +
          "<h3>" + esc(l.title) + "</h3>" +
          (l.byline ? '<p class="muted" style="font-size:13px;margin-bottom:8px">' + esc(l.byline) + "</p>" : "") +
          "<p>" + esc(l.summary) + "</p>" +
          (l.link ? '<div class="card__foot"><a href="' + esc(l.link) + '" target="_blank" rel="noopener">Read the full article &rarr;</a></div>' : "") +
          "</article>";
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
          ? '<ul class="teamlist">' + v.members.map(function (m) {
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
