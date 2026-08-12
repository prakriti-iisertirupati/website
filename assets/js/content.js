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
  whatsapp: "", // country code + number, e.g. "919876543210"
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
  tag: "Next",
  text: "Guest talk — speaker name, title, venue and date to be announced",
  link: "programmes.html",
};

/* ---- 3. PROGRAMMES ---------------------------------------
   kind:   Talk / Field / School / Workshop / Drive / Exhibition
   status: "upcoming" or "past"                                 */
const EVENTS = [
  {
    title: "Opening guest talk",
    kind: "Talk",
    when: "August 2026",
    venue: "IISER Tirupati campus",
    status: "upcoming",
    summary:
      "Speaker, title, venue and date to be announced. This is the club's first talk of the academic year.",
  },
  {
    title: "Village field visit",
    kind: "Field",
    when: "September 2026",
    venue: "Mandal to be confirmed",
    status: "upcoming",
    summary:
      "First round of farmer interviews. Off-campus approval required — planning starts ten weeks ahead.",
  },
  {
    title: "School student training batch",
    kind: "School",
    when: "October 2026",
    venue: "Partner school, Tirupati",
    status: "upcoming",
    summary:
      "Two-hour session on interviewing farmers, taking consent, photographing damage, and writing a report without jargon.",
  },
];

/* ---- 4. NEWS ---------------------------------------------
   Short items announcing what happened or what's coming up.
   Empty [] and the section shows a friendly placeholder.       */
const NEWS = [
  {
    date: "August 2026",
    title: "The website is live",
    summary:
      "Prakriti's website goes online. We are actively looking for researchers who can answer field reports, and for schools around Tirupati interested in partnering on the student-collector programme.",
  },
];

/* ---- 5. OPEN PROBLEMS BOARD ------------------------------
   status: "new" / "routed" / "answered"
   NEVER put a farmer's name, phone number or exact address here.
   Village-level detail only — mandal is enough.                */
const REPORTS = [
  // Delete these three samples once real reports come in.
  {
    id: "PRK-0000",
    problem: "Sample entry — replace once the first real reports arrive",
    mandal: "Sample mandal",
    crop: "Sample crop",
    status: "new",
  },
  {
    id: "PRK-0000",
    problem: "Sample entry — a report that has been sent to a researcher",
    mandal: "Sample mandal",
    crop: "Sample crop",
    status: "routed",
  },
  {
    id: "PRK-0000",
    problem: "Sample entry — a report that has been answered and returned",
    mandal: "Sample mandal",
    crop: "Sample crop",
    status: "answered",
  },
];

/* ---- 6. SCIENCE, PLAINLY --------------------------------- */
const SCIENCE = [
  {
    title: "Why borewells keep going dry even after a good monsoon",
    problem:
      "TO FILL: state the problem in two or three sentences, the way a farmer would describe it, not the way a paper would.",
    science:
      "TO FILL: what the science actually says, in three sentences. Name the mechanism. Cite the source at the end so a reader can check it.",
    actions: {
      home: "TO FILL: what one household or one farm can do",
      campus: "TO FILL: what the club or the institute can do",
      policy: "TO FILL: what needs a panchayat, department or scheme",
    },
    ask: "TO FILL: which department, KVK or researcher to approach",
  },
];

/* ---- 7. LEARN --------------------------------------------
   Teaching resources — problems, solutions, guides, explainers.
   kind: Explainer / Guide / Reading list / Video / Field note   */
const LEARN = [
  {
    kind: "Explainer",
    title: "This section is being built",
    summary:
      "We are collecting teaching material on ecology and conservation — problems and their solutions, in plain language. If you would like to write or contribute, get in touch.",
  },
];

/* ---- 8. WORK ON CAMPUS ----------------------------------- */
const INITIATIVES = [
  {
    title: "Waste management",
    cadence: "Ongoing",
    summary:
      "Tracking what leaves the campus, where it goes, and where segregation is breaking down. Small audits, done regularly.",
  },
  {
    title: "Cartography",
    cadence: "Ongoing",
    summary:
      "Mapping campus green cover, water bodies, and species distribution — a record that grows every semester.",
  },
  {
    title: "Campus tree census",
    cadence: "Ongoing",
    summary:
      "Counting, identifying and tagging trees across the campus. The dataset outlasts every batch that works on it.",
  },
  {
    title: "Bird survey",
    cadence: "Seasonal",
    summary:
      "Seasonal walks recording what is on campus and when. Data goes into public citizen-science platforms.",
  },
  {
    title: "Native sapling drive",
    cadence: "Monsoon",
    summary:
      "Species that belong to this landscape, planted where they will actually survive — with someone taking responsibility for watering.",
  },
  {
    title: "Farmer–researcher network",
    cadence: "New initiative",
    summary:
      "Our newest project — carrying farmers' problems from the villages around Tirupati to researchers who can help. See the Field notes page.",
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
