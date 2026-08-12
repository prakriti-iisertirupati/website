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
  email:     "prakriti@sac.iisertirupati.ac.in",
  whatsapp:  "",   // TO FILL: country code + number, e.g. "919876543210"
  instagram: "https://instagram.com/prakriti_iisertpt",
  linkedin:  "https://www.linkedin.com/in/prakriti-club-iiser-tirupati-a6b5a6213/",
  twitter:   "https://twitter.com/PrakritiIiser",
  address:   "Karakambadi Road, Rami Reddy Nagar, Tirupati 517507, Andhra Pradesh"
};


/* ---- 2. ANNOUNCEMENT STRIP -------------------------------
   Shows at the top of every page. Set show to false to hide it. */
const ANNOUNCE = {
  show: true,
  tag:  "Next",
  text: "Guest talk — speaker name, title, venue and date to be announced",
  link: "programmes.html"
};


/* ---- 3. PROGRAMMES ---------------------------------------
   kind:   Talk / Field / School / Workshop / Drive / Exhibition
   status: "upcoming" or "past"                                 */
const EVENTS = [
  {
    title:   "Opening guest talk",
    kind:    "Talk",
    when:    "August 2026",
    venue:   "IISER Tirupati campus",
    status:  "upcoming",
    summary: "TO FILL: speaker name, affiliation, talk title, and one line on why it matters to the people filing reports on this site."
  },
  {
    title:   "Village field visit",
    kind:    "Field",
    when:    "September 2026",
    venue:   "Mandal to be confirmed",
    status:  "upcoming",
    summary: "First round of farmer interviews. Requires off-campus approval — planning starts ten weeks ahead."
  },
  {
    title:   "School student training batch",
    kind:    "School",
    when:    "October 2026",
    venue:   "Partner school, Tirupati",
    status:  "upcoming",
    summary: "Two-hour session on interviewing farmers, taking consent, photographing damage, and writing a report without jargon."
  }
];


/* ---- 4. OPEN PROBLEMS BOARD ------------------------------
   status: "new" / "routed" / "answered"
   NEVER put a farmer's name, phone number or exact address here.
   Village-level detail only — mandal is enough.                */
const REPORTS = [
  // Delete these three samples once real reports come in.
  { id:"PRK-0000", problem:"Sample entry — replace once the first real reports arrive", mandal:"Sample mandal", crop:"Sample crop", status:"new" },
  { id:"PRK-0000", problem:"Sample entry — a report that has been sent to a researcher", mandal:"Sample mandal", crop:"Sample crop", status:"routed" },
  { id:"PRK-0000", problem:"Sample entry — a report that has been answered and returned", mandal:"Sample mandal", crop:"Sample crop", status:"answered" }
];


/* ---- 5. SCIENCE, PLAINLY ---------------------------------
   Same four headings every time. This is the National Science
   Day exhibit format: state the problem, say what the science
   says, say what can be done, say who to ask.                  */
const SCIENCE = [
  {
    title:   "Why borewells keep going dry even after a good monsoon",
    problem: "TO FILL: state the problem in two or three sentences, the way a farmer would describe it, not the way a paper would.",
    science: "TO FILL: what the science actually says, in three sentences. Name the mechanism. Cite the source at the end so a reader can check it.",
    actions: {
      home:   "TO FILL: what one household or one farm can do",
      campus: "TO FILL: what the club or the institute can do",
      policy: "TO FILL: what needs a panchayat, department or scheme"
    },
    ask:     "TO FILL: which department, KVK or researcher to approach"
  }
];


/* ---- 6. WORK ON CAMPUS ----------------------------------- */
const INITIATIVES = [
  { title:"Campus tree census",  cadence:"Ongoing",  summary:"TO FILL: what is being counted, by whom, and what the data is used for." },
  { title:"Waste audit",         cadence:"Ongoing",  summary:"TO FILL: what is measured and how often." },
  { title:"Bird survey",         cadence:"Seasonal", summary:"TO FILL: which season, which method, where the records go." },
  { title:"Native sapling drive",cadence:"Monsoon",  summary:"TO FILL: which species, planted where, and who waters them afterwards." }
];


/* ---- 7. PEOPLE -------------------------------------------
   photo: put the image file in assets/img/ and write its
   filename here, e.g. "nandini.jpg". Leave "" for a placeholder.
   Always get a person's permission before adding their photo. */
const TEAM = {
  mentor: {
    name:  "Dr. Nandini Rajamani",
    role:  "Faculty mentor — Associate Professor, Department of Biology, IISER Tirupati",
    photo: "",
    note:  "TO FILL: one or two sentences, in your own words, on why her work on species ecology and human-altered landscapes matters to this programme.",
    link:  ""   // her institute or personal page
  },

  coordinators: [
    { name:"Prajwal",       role:"Coordinator",    batch:"", photo:"", note:"" },
    { name:"Satyajit Rath", role:"Co-coordinator", batch:"BSMS 2024", photo:"", note:"" }
  ],

  /* Five verticals from the club's operating structure.
     Add members as { name:"", role:"" } inside each list. */
  core: [
    { vertical:"Programming and content",  members:[] },
    { vertical:"Outreach and partnerships",members:[] },
    { vertical:"Operations and logistics", members:[] },
    { vertical:"Finance and sponsorship",  members:[] },
    { vertical:"Media and documentation",  members:[] }
  ],

  /* Past coordinators register. Keep this growing — it is what
     makes the club look like an institution rather than a batch. */
  past: [
    // { years:"2025–26", name:"", role:"Coordinator", work:"One or two lines on what shipped during this tenure." }
  ]
};
