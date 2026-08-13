/* ============================================================
   PRAKRITI — SITE CONTENT
   ------------------------------------------------------------
   This is the ONLY file you need to edit to update the website.
   Do not edit the .html files or site.js unless you are changing
   the layout itself.

   Rules that keep the site from breaking:
     - Keep every comma and quote mark exactly where it is.
     - Text goes inside "double quotes".
     - Each entry sits inside { curly braces } and ends with a comma.
     - To remove something, delete its whole { ... } block.
   ============================================================ */

/* ---- 1. CLUB DETAILS ------------------------------------- */
const SITE = {
  email: "prakriti@sac.iisertirupati.ac.in",
  instagram: "https://instagram.com/prakriti_iisertpt",
  linkedin:
    "https://www.linkedin.com/in/prakriti-club-iiser-tirupati-a6b5a6213/",
  twitter: "https://twitter.com/PrakritiIiser",
  address:
    "IISER Tirupati, Srinivasapuram, Yerpedu Mandal, Tirupati District, Andhra Pradesh, India — 517619",
};

/* ---- 2. ANNOUNCEMENT STRIP ------------------------------- */
const ANNOUNCE = {
  show: true,
  tag: "This semester",
  text: "A new season of screenings, talks, a campus ecology walk, the EcoVoices debate and a field trip is underway",
  link: "events.html",
};

/* ---- 3. EVENTS & ACTIVITIES ------------------------------
   scope:  "on"  = on campus,  "off" = off campus
   status: "upcoming" or "past"
   kind:   Talk / Field / Screening / Workshop / Debate /
           Walk / Social / Exhibition / Session                */
const EVENTS = [
  /* ---- UPCOMING ---- */
  {
    title: "Film screening 1",
    kind: "Screening",
    when: "Fri 28 August",
    venue: "IISER Tirupati campus",
    scope: "on",
    status: "upcoming",
    summary:
      "The first screening of the semester, followed by an open discussion. We pick a film that opens up a real environmental question rather than one that simply informs.",
  },
  {
    title: "Ice breaker session",
    kind: "Session",
    when: "Fri 11 September",
    venue: "IISER Tirupati campus",
    scope: "on",
    status: "upcoming",
    summary:
      "An informal evening to welcome the new batch and introduce what the club does across the year.",
  },
  {
    title: "Campus ecology walk",
    kind: "Walk",
    when: "Sat 19 September",
    venue: "IISER Tirupati campus",
    scope: "on",
    status: "upcoming",
    summary:
      "A morning walk mapping the campus's own biodiversity — what grows and lives here, and where.",
  },
  {
    title: "Guest talk 1 — waste management",
    kind: "Talk",
    when: "Wed 30 September",
    venue: "IISER Tirupati campus",
    scope: "on",
    status: "upcoming",
    summary:
      "A practitioner's view of how waste actually moves and where it ends up. The EcoVoices debate motions are released at this talk.",
  },
  {
    title: "Film screening 2 — Kiss the Ground",
    kind: "Screening",
    when: "Fri 9 October",
    venue: "IISER Tirupati campus",
    scope: "on",
    status: "upcoming",
    summary:
      "On soil health and regenerative agriculture — the groundwork for the hardware workshop and the field trip that follow.",
  },
  {
    title: "Hardware workshop — conservation technology",
    kind: "Workshop",
    when: "Sat 17 October",
    venue: "IISER Tirupati campus",
    scope: "on",
    status: "upcoming",
    summary:
      "A hands-on session building low-cost sensing hardware for environmental and agricultural monitoring.",
  },
  {
    title: "Guest talk 2 — agricultural challenges",
    kind: "Talk",
    when: "Wed 21 October",
    venue: "IISER Tirupati campus",
    scope: "on",
    status: "upcoming",
    summary:
      "On the real problems facing farmers in this region, connecting the workshop to the field trip.",
  },
  {
    title: "EcoVoices debate",
    kind: "Debate",
    when: "Sat 24 October",
    venue: "IISER Tirupati campus",
    scope: "on",
    status: "upcoming",
    summary:
      "The club's marquee event — a full-day inter-batch debate on questions of campus ecology and environmental policy.",
  },
  {
    title: "Film screening 3 — semester wrap",
    kind: "Screening",
    when: "Fri 20 November",
    venue: "IISER Tirupati campus",
    scope: "on",
    status: "upcoming",
    summary:
      "The closing screening of the semester, paired with a look back at the year's work.",
  },
  {
    title: "Field trip & social campaign",
    kind: "Field",
    when: "Sat 31 October – Sun 1 November",
    venue: "Off campus — site to be confirmed",
    scope: "off",
    status: "upcoming",
    summary:
      "A two-day trip taking students out to a working site, paired with a public campaign. Requires off-campus approval; planning begins ten weeks ahead.",
  },

  /* ---- PAST ---- */
  {
    title: "EcoQuest — National Science Day showcase",
    kind: "Exhibition",
    when: "Earlier work",
    venue: "IISER Tirupati campus",
    scope: "on",
    status: "past",
    summary:
      "Prakriti's flagship public science event: nineteen interactive environmental exhibits for school students, families and the public. Highlights included a working microbial fuel cell lighting LEDs, a food-web Jenga tower showing how removing a keystone species collapses an ecosystem, a decomposition timeline of everyday waste buried in soil, a tragedy-of-the-commons fishery game, and a saponin-based microplastic filter.",
  },
  {
    title: "Founding-era outreach",
    kind: "Social",
    when: "Earlier work",
    venue: "IISER Tirupati & online",
    scope: "on",
    status: "past",
    summary:
      "The club's first phase of work: awareness posters, a flower-gardening event on the permanent campus, a waste-management activity, and a blog carrying student-written articles on insect conservation and sustainable architecture.",
  },
];

/* ---- 4. NEWS & ANNOUNCEMENTS -----------------------------
   Announcements and news in one place. This is also your
   publicity feed. Set "promote": true on the ONE item you
   want shown in the strip at the top of every page.
   date: free text, e.g. "August 2026" or "Coming up"          */
const NEWS = [
  {
    date: "August 2026",
    title: "The website is live",
    summary:
      "Prakriti's website is now online. We are actively looking for researchers who can answer field reports, and for schools around Tirupati interested in the student-collector programme.",
    promote: false,
  },
  {
    date: "Coming up",
    title: "New semester of events begins",
    summary:
      "Film screenings, guest talks, a campus ecology walk, the EcoVoices debate, a hardware workshop and a field trip are all coming this semester. See the Events page for dates.",
    promote: false,
  },
];

/* ---- 5. OPEN PROBLEMS BOARD ------------------------------
   status: "new" / "routed" / "answered"
   NEVER put a farmer's name, phone number or exact address here.
   Village-level detail only — mandal is enough.
   Add a real report as:
   { id:"PRK-0001", problem:"...", mandal:"...", crop:"...", status:"new" }, */
const REPORTS = [];

/* ---- 6. SCIENCE, PLAINLY --------------------------------- */
const SCIENCE = [
  {
    title: "Why borewells keep going dry even after a good monsoon",
    problem:
      "Farmers across Rayalaseema report the same thing: a borewell that gave water for years slows to a trickle, and the answer everyone reaches for is to drill deeper. The next borewell goes down further, hits water for a season or two, and then it fails as well. A good monsoon does not seem to fix it.",
    science:
      "The water these borewells draw is stored in hard rock, in cracks and fractures rather than a continuous underground layer, so there is far less of it than the depth suggests. When wells are pumped faster than the rain can refill those fractures, the shared water table drops for everyone nearby, and drilling deeper only reaches an even smaller, older store that recharges more slowly. Rayalaseema is one of the most groundwater-stressed regions in the country, and the pattern is well documented by the Central Ground Water Board in its district assessments.",
    actions: {
      home: "On a single farm, the highest-return step is usually to slow how fast water is used, not to find more of it — drip irrigation, mulching to cut evaporation, and shifting the most water-hungry crops to the wettest part of the year.",
      campus:
        "The club can help map where borewells are failing and where water is standing after rain, building a simple local picture of recharge that a village or a panchayat can actually act on.",
      policy:
        "Real recovery needs shared recharge structures — check dams, farm ponds, and restored tanks — planned at the level of a whole catchment, which means a panchayat or a watershed scheme rather than any one farmer acting alone.",
    },
    ask: "The district office of the Central Ground Water Board, the local Krishi Vigyan Kendra, and researchers working on hydrology and watershed management are the right people to bring specific questions to.",
  },
];

/* ---- 7. LEARN --------------------------------------------
   Teaching resources — problems, solutions, guides, explainers.
   kind: Explainer / Guide / Reading list / Video / Field note
   link: an external URL to the full piece, or "" for none        */
const LEARN = [
  {
    kind: "Article",
    title: "Disappearing insects",
    byline: "Tejaswini Venkatramanan & Bhavya Subi · BS-MS 2020",
    summary:
      "Insects are among the most abundant animals on the planet and quietly do the heavy lifting in every ecosystem — pollinating crops, recycling soil nutrients, feeding the food chain. Their numbers are now collapsing: a review in Biological Conservation estimates around 40% of insect species could go extinct in the coming years, driven by pesticides, habitat loss and climate change. Part two lays out what can actually be done, from global strategy down to leaving your lawn unmown and planting native species.",
    link: "https://iisertirupatiprakriticlub.wordpress.com/2021/06/13/disappearing-insects/",
  },
  {
    kind: "Article",
    title: "Sustainable architecture",
    byline: "Nithish G. S. · BS-MS 2019",
    summary:
      "Buildings account for roughly 38% of energy-related CO2 emissions, which makes how we design them a climate question, not just an aesthetic one. This piece walks through real examples — Singapore cooling its streets with vegetation, a Lebanese architect building schools from local earth and clay, Mick Pearce's Eastgate Centre in Harare that cools itself by copying termite mounds — and the principle running through all of them: work with the local climate instead of against it.",
    link: "https://iisertirupatiprakriticlub.wordpress.com/2021/05/30/sustainable-architecture/",
  },
  {
    kind: "Interview series",
    title: "Interview 1 — Sustainable architecture",
    byline: "Prakriti archive · 2021",
    summary:
      "A three-part written interview on sustainable architecture, published as part of the club's early interview series. Archived from the original blog.",
    link: "https://iisertirupatiprakriticlub.wordpress.com/2021/06/05/interview-1-a/",
  },
];

/* ---- 8. SUSTAINABILITY ON CAMPUS -------------------------
   Standing projects and infrastructure the club runs, not
   one-off events. status: "Active" / "Ongoing" / "Seasonal"
   / "Planned" / "Monsoon"                                      */
const INITIATIVES = [
  {
    title: "E-waste collection bins",
    status: "Planned",
    summary:
      "Dedicated bins for electronic waste — old cables, chargers, batteries and dead devices — so campus e-waste is collected and routed to proper recycling instead of general trash.",
  },
  {
    title: "Recycling & reuse corner",
    status: "Planned",
    summary:
      "A common space where unused but usable things — stationery, books, supplies — can be left for others to take, cutting waste and helping students who need them.",
  },
  {
    title: "Waste management",
    status: "Ongoing",
    summary:
      "Tracking what leaves the campus, where it goes, and where segregation is breaking down. Small audits, done regularly.",
  },
  {
    title: "Cartography",
    status: "Ongoing",
    summary:
      "Mapping campus green cover, water bodies, and species distribution — a record that grows every semester.",
  },
  {
    title: "Campus tree census",
    status: "Ongoing",
    summary:
      "Counting, identifying and tagging trees across the campus. The dataset outlasts every batch that works on it.",
  },
  {
    title: "Native sapling drive",
    status: "Monsoon",
    summary:
      "Species that belong to this landscape, planted where they will actually survive — with someone taking responsibility for watering them afterwards.",
  },
];

/* ---- 9. PEOPLE ------------------------------------------- */
const TEAM = {
  mentor: {
    name: "Dr. Nandini Rajamani",
    role: "Faculty mentor — Associate Professor, Department of Biology, IISER Tirupati",
    photo: "nandini-rajamani.jpg",
    note: "Dr. Rajamani's work sits at the intersection of ecology and human-altered landscapes — exactly the ground this club stands on. She studies how species respond to environmental change and to the pressures humans put on their habitats, and she brings both a research lens and a science-communication practice to how the club approaches its projects.",
    link: "",
  },

  coordinators: [
    {
      name: "Prajwal Yadav",
      role: "Coordinator",
      batch: "BSMS 2024",
      photo: "prajwal-yadav.jpg",
      note: "",
    },
    {
      name: "Satyajit Rath",
      role: "Co-coordinator",
      batch: "BSMS 2024",
      photo: "satyajit-rath.jpg",
      note: "",
    },
  ],

  /* Five verticals from the club's operating structure. */
  core: [
    {
      vertical: "Programming and content",
      members: [
        { name: "Aryan Dhanger", role: "" },
        { name: "Sneha Raj", role: "" },
      ],
    },
    {
      vertical: "Outreach and partnerships",
      members: [
        { name: "Purhaan Dhabhai", role: "" },
        { name: "Harshini Navya Teja Popuri", role: "" },
      ],
    },
    {
      vertical: "Operations and logistics",
      members: [
        { name: "Archit Dahake", role: "" },
        { name: "Himesh Choudhary", role: "" },
      ],
    },
    {
      vertical: "Finance and sponsorship",
      members: [
        { name: "Joseph John", role: "" },
        { name: "Kiran Surya BS", role: "" },
      ],
    },
    {
      vertical: "Media and documentation",
      members: [
        { name: "Vanshika Raina", role: "" },
        { name: "Sumit Kumar", role: "" },
      ],
    },
  ],

  past: [
    // { years:"2025–26", name:"", role:"Coordinator", work:"One or two lines on what shipped during this tenure." }
  ],
};
