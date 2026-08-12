# Prakriti website

The website of Prakriti, the Conservation Club of IISER Tirupati.

Plain HTML, CSS and JavaScript. **No build step, no npm, no framework.** Open any
`.html` file in a browser and it works. This is deliberate: it means whoever
inherits this repo in three years can still edit it without installing anything.

---

## Updating the site

**Edit `assets/js/content.js`. That is the only file you need.**

Everything the club changes lives there: programmes, reports, science entries,
campus initiatives, team members, contact details and the announcement strip.
The `.html` files hold layout only, and you should not need to touch them.

### How to make an edit

1. Go to the repository on github.com
2. Open `assets/js/content.js`
3. Click the pencil icon
4. Make the change
5. Click **Commit changes**

The website updates itself in about a minute. If you break something, click the
commit history and revert — nothing is ever lost.

### Rules that keep it from breaking

- Keep every comma and quote mark exactly where it is
- Text goes inside `"double quotes"`
- Each entry sits inside `{ curly braces }` and ends with a comma
- To delete something, remove its whole `{ ... }` block

If the page goes blank after an edit, a quote or comma is missing. Revert the
commit and try again.

---

## Before launch

Search the project for `TO FILL` and replace each one. Then:

- [ ] `SITE.whatsapp` in `content.js` — the WhatsApp button does nothing until this is set
- [ ] Replace the three sample rows in `REPORTS` with real anonymised reports
- [ ] Fill in the guest talk details in `EVENTS` and `ANNOUNCE`
- [ ] Write at least one real `SCIENCE` entry, with a source
- [ ] Add core team members and past coordinators to `TEAM`
- [ ] Get Dr. Rajamani's written okay before publishing her name and photo
- [ ] Get written permission from SAC before adding the IISER Tirupati logo
- [ ] Have a Telugu speaker proofread the Telugu on `field-notes.html`

---

## Publishing

Hosted free on GitHub Pages.

1. Create the repository under a **GitHub organisation**, not a personal account,
   so it can be handed to the next coordinator
2. Push these files to the `main` branch
3. Settings → Pages → Source: `main`, folder: `/ (root)`
4. The site goes live at `https://ORGNAME.github.io/REPONAME/`

### Pointing the institute subdomain at it

Once IT creates the DNS record:

1. Settings → Pages → Custom domain → enter `prakriti.sac.iisertirupati.ac.in`
2. GitHub writes a `CNAME` file into the repo — leave it there
3. Tick **Enforce HTTPS** once the certificate is issued (usually under an hour)

Ask IT for exactly this, and nothing more:

```
Type:       CNAME
Host:       prakriti
Points to:  ORGNAME.github.io
TTL:        default
```

---

## Privacy rules

These are not optional. Minors collect these reports and the source data
contains farmers' phone numbers.

- **Never** put a name, phone number or exact address in `REPORTS`. Mandal-level
  location only.
- Personal details stay in the private Google Sheet, which is never published
  and never linked from the site.
- Get consent before photographing anyone's face or land, and before publishing
  any photograph of a person.

---

## File map

```
index.html          Home
programmes.html     Calendar and archive
field-notes.html    Farmer intake form, report board, researcher and school sign-up
science.html        Problems and solutions, National Science Day format
our-work.html       Campus initiatives
about.html          Mentor, team, past coordinators, contact

assets/js/content.js   ← edit this
assets/js/site.js      header, footer, search, section rendering
assets/css/style.css   all styling
assets/img/            logo and icons
```

## Design notes

Palette: millet `#F5F0E6`, laterite `#8C3A24`, ochre `#C9853F`, deep green
`#1B6B2E` (taken from the club logo), ink `#1E1A16`. The layered band on the
left of the hero is a soil profile — the one recurring motif. Type is Source
Serif 4, Public Sans, IBM Plex Mono, and Noto Sans Telugu.

The logo in `assets/img/` was rebuilt from the supplied file, which was a 2.1 MB
raster wrapped in SVG markup. The versions here are true transparent PNGs at
138 KB and 50 KB. If someone can supply a real vector SVG, swap it in — the
filenames are referenced in `assets/js/site.js`.
