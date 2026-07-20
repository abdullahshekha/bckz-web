# Bahria College Karsaz — CLAUDE.md

## Project Overview

Static website for **Bahria College Karsaz (BCKz)**, a premier educational institution under Pakistan Navy. Deployed on Vercel via GitHub. No build tools, no frameworks — pure HTML + CSS + vanilla JS only.

## Tech Stack

- **HTML5** — semantic markup, one file per page
- **CSS3** — single stylesheet at `css/style.css`, BEM naming convention
- **Vanilla JS** — single script at `js/main.js`
- **Fonts** — `--font: Arial, Helvetica, sans-serif` (system font). Every HTML `<head>` still links Google Fonts (Playfair Display + Roboto) as the first `<link>`, but `style.css` does not currently reference those font-family names anywhere — the Google Fonts link is effectively unused. Don't assume Playfair/Roboto render; check `--font` in `style.css` before relying on a look that depends on them.
- **Hosting** — Vercel (static), connected via GitHub

## Design System

| Token | Value |
|-------|-------|
| Primary (Navy) | `#000080` |
| Accent (Gold) | `#C9A033` |
| Body font | Arial (see note above) |

## File Structure

```
BCKz/
├── index.html              ← Home page
├── about.html               ← About Us
├── wings.html                ← Wings overview (9 cards)
├── news.html                  ← News & Events listing (linked from homepage slider's "See All")
├── wings/
│   ├── boys-morning.html
│   ├── girls-morning.html
│   ├── boys-afternoon.html
│   ├── girls-afternoon.html
│   ├── middle.html
│   ├── secondary.html      ← Real Secondary Wing (Classes VI–X, Afternoon, since 2018)
│   ├── cambridge.html
│   ├── primary.html
│   └── junior.html         ← Montessori/early-childhood wing (renamed from old secondary.html)
├── academics.html            ← Hub page: card grid linking to academics/*.html
├── academics/
│   ├── fees.html            ← Fee Structure (College Timings table removed)
│   ├── uniform.html
│   ├── scholarships.html
│   ├── calendar.html        ← Academic Calendar table
│   ├── clubs.html           ← Clubs & Societies by wing
│   ├── guidelines.html      ← Student & Parent Guidelines accordion
│   └── summer-camp.html
├── admissions.html
├── administration.html      ← Hub page: card grid linking to administration/*.html
├── administration/
│   ├── principals-secretariat.html
│   ├── admin-department.html
│   ├── medical.html
│   ├── counselling.html
│   ├── bursar.html
│   ├── sports-office.html
│   ├── librarian.html
│   ├── board-coordinators.html
│   ├── security.html
│   ├── transport.html
│   └── alumni-coordinator.html
├── facilities.html          ← Hub page: card grid linking to facilities/*.html
├── facilities/
│   ├── labs.html
│   ├── library.html
│   ├── auditorium.html
│   ├── medical-facility.html
│   ├── sports.html
│   ├── cafeteria.html
│   ├── solar-system.html
│   ├── electric-cart.html
│   ├── cctv.html
│   └── parking.html
├── achievements.html         ← Hub page: card grid linking to overview.html + medals.html only
├── achievements/
│   ├── overview.html        ← "Achievements at a Glance" — now a SECOND-LEVEL hub: icon/symbol
│   │                            stats summary (Gold/Silver/Bronze medal counts, Board Positions,
│   │                            Best Bahria College, Alumni) + a card grid linking to the 8
│   │                            sub-pages below (see "Achievements Nested IA" section)
│   ├── medals.html          ← Award of Medals (CNS / Chairman BOG / President MC) — stays a
│   │                            top-level sibling of "Achievements at a Glance", not nested
│   ├── international-level.html   ← placeholder, no real data yet
│   ├── national-level.html        ← placeholder, no real data yet
│   ├── provincial-level.html      ← placeholder, no real data yet
│   ├── intercollegiate-level.html ← placeholder, no real data yet
│   ├── best-bahria-college.html   ← renamed heading "Best Bahria College Awards"; now nested
│   │                                 under overview.html (breadcrumb/back-link updated)
│   ├── position-holders.html      ← Board Position Holders table (131 rows, 2007–2025); now
│   │                                 nested under overview.html (breadcrumb/back-link updated)
│   ├── board-results-summary.html ← hub: Federal Board / Karachi Board
│   ├── federal-board.html         ← hub: HSSC / SSC
│   ├── federal-board-hssc.html    ← real data (1 row, filtered from position-holders table)
│   ├── federal-board-ssc.html     ← placeholder ("no SSC position holders recorded yet")
│   ├── karachi-board.html         ← hub: HSSC / SSC
│   ├── karachi-board-hssc.html    ← real data (130 rows, filtered from position-holders table)
│   ├── karachi-board-ssc.html     ← placeholder ("no SSC position holders recorded yet")
│   ├── caie-summary.html          ← hub: O Level / A Level (replaces old caie-results.html)
│   ├── caie-o-level.html          ← real data (moved from the old caie-results.html table)
│   └── caie-a-level.html          ← placeholder ("A-Level launched 2025, first results ~2027")
├── alumni.html               ← Hub page: card grid linking to alumni/*.html
├── alumni/
│   ├── welcome.html         ← "Welcome to Alumni Family" copy (renamed from "...the Network")
│   ├── success-stories.html ← Success Story cards + modal, ordered oldest-first by batch year
│   ├── where-alumni-excel.html
│   ├── events.html          ← Alumni Events: Get-Together (2017) + Home Coming (2025), each with
│   │                            a date/description block and a full photo grid (`.gallery-grid`)
│   ├── stay-connected.html  ← includes a "Connect With Us" block (social/WhatsApp/Alumni Coordinator link)
│   └── give-back.html       ← Give Back (donation/sponsorship) form — renamed from give-away.html;
│                                includes both Account Number and IBAN fields
├── downloads.html
├── gallery.html
├── contact.html              ← Postal address, college emails, full extension directory table
├── css/
│   └── style.css           ← All styles (BEM)
├── js/
│   └── main.js             ← Navbar, lightbox, news modal/slider, alumni modal, gallery filter, scroll animations
├── Images/
│   ├── BCKz Logo.png
│   ├── Navy Logo.png
│   ├── Facilities/         ← Facility photos
│   ├── VP/                 ← Named VP photos (e.g. "Imran Safdar.jpg", "Sadia Khanam.jpg")
│   ├── Alumni/             ← 15 named alumni photos used by success-stories.html's story cards/modal
│   │   └── Events/
│   │       ├── Get-Together/  ← 12 photos, Alumni Get-Together 2017, used by alumni/events.html
│   │       └── Home-Coming/   ← 23 photos, Alumni Home Coming 2025, used by alumni/events.html
│   ├── Administration/     ← Named department-head photos used by administration/*.html
│   │                            (sourced from Admin-Staff-Pics/, e.g. "Syed Rizwan Hussain.jpeg")
│   └── ...
├── New-Content/             ← Source Word docs (canonical content reference) + reference photos.
│                               *.docx/*.pdf are gitignored — not pushed to the repo.
├── New-Content-2/           ← Second batch of source docs (Achievements, Alumni, Contact Us, Guidelines,
│                               teacher list) + raw alumni photos. Not committed at all (like VP-Images/
│                               below) — only the *.docx/*.pdf are gitignore-matched, but by convention this
│                               whole staging folder is left untracked; only the processed copies that make
│                               it into Images/ are committed.
├── VP-Images/                ← Raw VP photo originals as supplied (not committed; copied/renamed into Images/VP/)
└── Admin-Staff-Pics/         ← Raw department-head photo originals as supplied, named "NAME, TITLE.jpeg"
                                  (not committed; copied/renamed into Images/Administration/)
```

## CSS gotcha: `url()` paths are relative to `style.css`, not the HTML page

Any `background-image: url(...)` written in `css/style.css` resolves relative to the **CSS file's own location** (`css/`), regardless of which HTML page includes that class. Since `Images/` is a sibling of `css/`, every image reference in `style.css` must be `../Images/...` — never `Images/...` — even for classes only used by root-level pages like `about.html`. Getting this wrong silently fails (no image, no console error) and is easy to miss. This bit us once with `.page-hero--about`.

## Key Content Facts

- **Principal:** Captain Muhammad Imran Khan PN, Principal, Bahria College Karsaz
- **Founded:** 1997 | **Campus:** 24 acres | **Students:** 6,000+ | **Faculty:** 450+
- **Awards:** 12× Best Bahria College
- **YouTube video ID:** `bFrxx4GZCA0` — used in the homepage hero background (no Virtual Campus Tour CTA on homepage anymore; the lightbox/tour button still exists on `gallery.html` and `facilities.html`)
- **Core Values (About Us):** Faith, Character, Courage & Commitment — the Pakistan Navy's own ethos framework (4 cards), not the old generic Excellence/Integrity/Discipline/Innovation/Service/Patriotism set
- **Governance chain (About Us / Administration):** Board of Governors (chaired by VCNS/Chief of Staff) → Managing Committee (headed by Commander Karachi) → Principal → Vice Principals / Admin Officer / Bursar

### Wings (9 total)

| Wing | Notes |
|------|-------|
| Boys Wing Morning | Est. March 2002. 700+ students. FBISE Islamabad & BIEK. |
| Girls Wing Morning | Est. March 2002. 900+ students. |
| Boys Wing Afternoon | Est. 2020. 700+ students. |
| Girls Wing Afternoon | Est. 2020. 700+ students. Has its own VP section (Ms. Asma Neelam). |
| Middle Wing | Classes VI–VIII — independent wing since 2017, Afternoon Shift added 2019. |
| Secondary Wing | Classes VI–X, Afternoon shift, both boys & girls — since 2018. VP Ms. Sadia Khanam (shared with Middle Wing). |
| Cambridge Wing | Pre-O, O-Level & A-Level — wing established 2011, O-Level classes began 2012, A-Level since 2025. |
| Primary Wing | Classes I–V — since 1997. Foundation stone laid 17 Jul 2009; inaugurated 6 Apr 2011. |
| Junior Wing | Montessori Beginner/Advance/Prep — since 1997, relocated to purpose-built campus Feb 2023. VP Ms. Farah Sarfraz. |

Student counts are only confirmed for Boys/Girls Morning & Afternoon (4 wings). The other 5 wing cards on `index.html`/`wings.html` show a **"700+ Students" placeholder** (previously "Contact for Details") — swap in real numbers when the user provides them.

Every wing card (on `index.html` and `wings.html`) follows a fixed 4-line format: **icon → wing name → classes → student count**. Don't reintroduce shift labels, founding years, or curriculum blurbs into that card format — those live on the wing's own page instead.

### Admissions (Session 2026)

- **Eligibility to apply:** Min 65% in Matric (SSC) for general stream; 70% *per subject* for Cambridge O-Level entrance test (not aggregate)
- **Confirmation threshold:** Provisional admission is confirmed once the candidate secures min 60% in the actual SSC/equivalent result (distinct from the 65% needed to apply)
- **Selection:** 60% Class IX % + 40% entrance test
- **Programmes:** HSSC Pre-Medical, Pre-Engineering, Computer Science, Commerce (board/shift/gender-specific — see `admissions.html` tables), Humanities (girls only, board-specific subject combos differ), O-Level, A-Level
- **Documents Required** is split into two distinct lists on `admissions.html`: (a) Montessori/other classes, (b) Class XI — don't merge them back into one generic list.

## Page Layout Pattern

Every page shares the same shell:

1. **Utility bar** — social icons (left) + quick links (right)
2. **Header/Navbar** — two-row structure inside `.navbar__inner`:
   - Top row (`.navbar__top-row`): BCKz logo (left), centered `.navbar__title` text ("BAHRIA COLLEGE KARSAZ", uppercase, 3em), Pakistan Navy logo (right), mobile toggle
   - Second row: `.navbar__menu` nav links with dropdowns, centered
3. **News ticker** — standalone strip between `</header>` and page hero (NOT inside hero)
4. **Page content**
5. **Footer** — 4-column grid (brand, quick links, resources, contact). No "Apply for Admission" button in the footer contact column (removed site-wide) — the CTA-strip "Apply for Admission" buttons on individual pages are a separate thing and were NOT removed.

The navbar scrolls sticky and adds a `scrolled` class via JS. The active `navbar__link` class must match the current page.

> **Important:** Copy the navbar and utility bar HTML from `index.html` (root pages) or `wings/boys-morning.html` (any one-level-deep sub-page — `wings/`, `academics/`, `administration/`, `facilities/` are all siblings and use `../` prefix identically). When adding/renaming a wing, department, or topic, update **that** dropdown in every page's navbar — root pages use `subdir/xxx.html`, one-level-deep pages use `../subdir/xxx.html` **except** for their own dropdown, which uses bare sibling filenames (e.g. `wings/boys-morning.html`'s Wings dropdown links to `boys-morning.html`, not `../wings/boys-morning.html`). This is done via a scripted find/replace across all files rather than by hand, since the block is identical everywhere except the path prefix.

## Hub + Sub-Page Pattern (Academics / Administration / Facilities / Achievements / Alumni)

`academics.html`, `administration.html`, `facilities.html`, `achievements.html`, and `alumni.html` are all **hub pages** — none of them hold full section content. Each shows a card grid (reusing `.admin-services__grid` / `.admin-service-card.card-link`) where every card links to a standalone sub-page in the matching directory. Don't reintroduce full inline content on any of these five hub pages — add a new sub-page instead and link to it from the hub's card grid. Every one of the 5 subdirectories also has its own navbar dropdown (site-wide, on every page) linking directly to its sub-pages.

- **Administration sub-pages** (`administration/*.html`): hero banner with the department name, then a two-column `.dept-detail__grid` section — left column is the department's text (from `05. Administration.docx`), right column is `.dept-detail__side` with a real photo (`.dept-detail__photo`, sourced from `Admin-Staff-Pics/`, copied into `Images/Administration/`) and the department head's name/title. `board-coordinators.html` has two heads (SSC & HSSC / CAIE) so its side column uses a `.dept-detail__side-group` wrapper holding two `.dept-detail__side` cards instead of one.
- **Academics sub-pages** (`academics/*.html`): content lifted directly from `04. Academics.docx`, reusing whatever CSS component fits (`.data-table` for tables, `.uniform-card`, `.clubs-tag`, etc.). Exception: `academics/guidelines.html` was later fully replaced with the far more comprehensive `GUIDELINES.docx` (from `New-Content-2/`) — Code of Conduct, Dress Code, ID Cards, House System, Disciplinary Measures, Awards & Recognition, etc. — using `.guidelines-accordion` throughout.
- **Facilities sub-pages** (`facilities/*.html`): content from `06. Facilities.docx` using `.fac-page-card`/`.fac-page-grid`. The per-facility photo gallery section (`.facility-gallery__grid` placeholder tiles) was removed site-wide — these pages now end with the facility content itself, no gallery placeholder.
- **Achievements sub-pages** (`achievements/*.html`): `achievements.html` only card-links to two top-level siblings — `overview.html` ("Achievements at a Glance") and `medals.html` ("Award of Medals"). `overview.html` is itself a second-level hub — see "Achievements Nested IA" below for its 8 children and the 3-level `board-results-summary.html`/`caie-summary.html` sub-hubs.
- **Alumni sub-pages** (`alumni/*.html`): `welcome.html`, `success-stories.html` (alumni cards + modal — `alumni/success-stories.html` is the only alumni sub-page that includes the `.alumni-modal` markup), `where-alumni-excel.html`, `events.html` (photo record of past alumni reunions — reuses `gallery.html`'s `.gallery-grid`/`.gallery-item` classes, no filter buttons or lightbox), `stay-connected.html`, `give-back.html` (donation/sponsorship form, renamed from `give-away.html`).
- Every sub-page includes a `.subpage-back` link ("← Back to Administration/Academics/Facilities/Achievements/Alumni") right under the hero, pointing at the hub page — except `achievements/best-bahria-college.html` and `achievements/position-holders.html`, whose back-link/breadcrumb now points to `overview.html` ("Back to Achievements at a Glance") since they're nested one level deeper.

## Achievements Nested IA

`achievements/overview.html` ("Achievements at a Glance") is a **second-level hub** — the only spot on the site with 3 levels of navbar nesting (Achievements ▸ Achievements at a Glance ▸ child). Its navbar dropdown entry is `<li class="has-submenu">` with a `.submenu` flyout (new CSS added specifically for this — `.has-submenu`/`.submenu` in `css/style.css`, plus a `.has-submenu` mobile-accordion branch in `initDropdownMobile()` in `js/main.js`; every other dropdown site-wide is still single-level `.has-dropdown`/`.dropdown`). Its 8 children:

- `international-level.html`, `national-level.html`, `provincial-level.html`, `intercollegiate-level.html` — **no real data exists yet**; these are placeholder shells (`.dept-detail__photo-placeholder`-style "Content Coming Soon" block). Don't invent achievement claims for these — wait for real data.
- `best-bahria-college.html`, `position-holders.html` — pre-existing pages, just reparented (breadcrumb + `.subpage-back` now point to `overview.html` instead of `achievements.html`).
- `board-results-summary.html` → hub → `federal-board.html` / `karachi-board.html` → each a hub → `-hssc.html` / `-ssc.html`. All filtered from the same 131-row `position-holders.html` table (130 Karachi-HSSC rows, 1 Federal-HSSC row, **zero SSC rows in either board** — the SSC pages are honest placeholders, not fabricated).
- `caie-summary.html` → hub → `caie-o-level.html` (the old `caie-results.html` table, moved wholesale — O-Level has run since 2013) / `caie-a-level.html` (placeholder: A-Level launched 2025, a 2-year qualification, so first results are expected ~2027 — don't fabricate interim results).

The medal-count icon summary on `overview.html` (Gold=10/Silver=9/Bronze=7) is **derived, real data** — counts of `.ach-table__pos--1`/`--2`/`--3` (1st/2nd/3rd position) rows in `position-holders.html`, since CNS Gold = 1st, Chairman BOG = 2nd, President MC = 3rd (see `achievements/medals.html`). "Alumni: 700+" on that same strip is a placeholder, not derived — update when a real count is available.

## Wing Pages — List of Teachers, Clubs & Societies, CTA

Every `wings/*.html` page has a `.wing-faculty` section (`id="faculty"`) — a `.teacher-cards-grid` of `.teacher-card`s (Name / Qualification / Designation / Remarks, one card per teacher — **not a table**, converted from the original `.data-table` in a later pass), sourced from `LIST OF TEACHERS FOR WEBSITE.docx` (`New-Content-2/`). `wings/middle.html` has two card grids (Morning Shift + Afternoon Shift, since the source doc splits Middle Wing that way). **`wings/girls-afternoon.html` and `wings/secondary.html` have no faculty data in that docx** — they show a "Faculty list for this wing will be published soon" placeholder instead; don't invent names or duplicate another wing's list into them. When new teacher data arrives for those two wings, follow the same `.teacher-cards-grid` structure as the other wings' `.wing-faculty` sections.

Wings with club data available in `academics/clubs.html`'s `.clubs-wing-block`s (Boys Wing, Girls Wing — shared across morning/afternoon shifts, Cambridge, Middle, Primary) also have a `.wing-clubs-tags` section reusing that same club list verbatim (`.clubs-tag-list`/`.clubs-tag`), titled "Clubs & Societies at [Wing Name]", placed just before the CTA. **Secondary and Junior Wings have no club data** — don't invent one. `boys-morning.html`/`boys-afternoon.html` had an older generic 3-card `.wing-clubs` section (Sports/IT/Science Club, not sourced from real per-wing data) that was removed in favor of the authoritative `.wing-clubs-tags` section — don't reintroduce it.

Every wing page's final CTA (`.wing-cta`, right before the footer) is just a heading ("Ready to Join [Wing Name]?") + generic supportive sub-line + two buttons (Admissions → `../admissions.html`, Contact Us → `../contact.html`). It intentionally does **not** claim live/rolling admissions ("Session 2026", "Limited seats available…") — this college's admissions are seasonal per class, not always-open; don't reintroduce that copy.

## JS Architecture (`js/main.js`)

- `initNavbar()` — sticky scroll, mobile toggle, active link
- `initLightbox()` — YouTube lightbox for Virtual Campus Tour button (`#tourBtn`, present on `gallery.html`/`facilities.html`)
- `initNewsModal()` — popup modal for news ticker items and news cards (`NEWS_DATA` array at top of file)
- `initAlumniModal()` — "Full Story" popup for Alumni page cards (`ALUMNI_DATA` array at top of file; buttons are `.alumni-card__btn[data-alumni="N"]`, index into the array)
- `initNewsSlider()` — homepage News & Events horizontal slider (prev/next buttons, `#newsSlider`)
- `initGalleryFilter()` — category filter buttons on `gallery.html` (`.gallery-filter__btn`, `data-category` on `.gallery-item`)
- `initScrollAnimations()` — IntersectionObserver fade-in for `.animate-on-scroll` elements
- `initDropdownMobile()` — touch-friendly dropdown toggle on mobile; also handles the `.has-submenu`/`.submenu` second-level flyout (currently only used by `achievements/overview.html`'s navbar entry)
- `initVisitCounter()` — footer `#visitCounter` span; fetches a hit count from the free `api.countapi.xyz` service (namespace `bckz-website-karsaz`) and adds it to a `BASE_COUNT` of 227,477, so the number increments per real page load. Fails silently (leaves the static "227,477" fallback) if the third-party API is unreachable — there's no real backend, so this is the best available approximation of a "real" site-wide visit counter on a static site.

To add news items, append to the `NEWS_DATA` array in `main.js`, add a matching `<button class="hero__ticker-item" data-news="N">` in the ticker, and add a card to both the homepage slider and `news.html`'s full listing (`news-grid--static`).

## Content Source of Truth

`New-Content/` holds the first batch of official Word docs (Home, About Us, Wings, Academics, Administration, Facilities, plus a site-outline doc). `New-Content-2/` holds a second batch (`Achievements/BOARD POSITIONS.docx`, `Achievements/CAIE RESULTS OVERALL.docx`, `Alumni/Welcome to the Alumni Network.docx`, `Alumni/Give Away Form.docx`, `Alumni/Alumni Details.docx` + 9 alumni photos, `GUIDELINES.docx`, `H.  Contact Us.docx`, `LIST OF TEACHERS FOR WEBSITE.docx`). Both are the canonical source for factual content — founding years, programmes, department descriptions, board results, faculty names, etc. `*.docx`/`*.pdf` are gitignored, and by convention neither `New-Content/` nor `New-Content-2/` is pushed to the repo at all (see File Structure above). When asked to update content, check these docs first rather than guessing; when the current site conflicts with the docs, the docs win unless the user says otherwise (established convention from a prior session).

`.docx` files can't be read directly — convert with `python-docx` (`/c/Python314/python`, not the WindowsApps `python3` shim, which lacks the package) to extract paragraphs and tables; watch for `UnicodeEncodeError` on checkbox/bullet glyphs when printing to the Windows console (redirect to a file or set `PYTHONIOENCODING=utf-8`).

## Page Build Status

All pages are built out with real content; large sections were reworked to match `New-Content/` in a subsequent pass (About Us Core Values/Governance, all 9 Wings' facts, Academics Fee/Timings/Uniform/Calendar/Clubs/Guidelines/Summer Camp, Administration's departments, Facilities' 10 categories, Admissions' detailed per-wing tables). Academics, Administration, and Facilities were subsequently split into hub + sub-page structures — see "Hub + Sub-Page Pattern" above. Administration later gained an 11th department, Principal's Secretariat. A further pass using `New-Content-2/` added the full Board Position Holders/CAIE tables on Achievements, the Alumni Welcome copy/Success Story cards/Give Away form, per-wing teacher lists, the Contact Us extension directory, and a full rewrite of the Guidelines sub-page.

A later editorial + restructuring pass: removed duplicate hero/first-section headings and trailing full stops under hero subtitles site-wide, dropped the comma before "and" throughout, added hero background photos to every banner that lacked one, converted wing faculty tables to `.teacher-card` grids, added per-wing Clubs & Societies sections, removed the `academics/programmes.html` "Explore Programmes" page, rewrote the Admissions intro copy, dropped the Fee Structure page's College Timings table, added a footer visit counter and updated WhatsApp/Virtual Library links site-wide, renamed Alumni's "Give Away" to "Give Back" (with a file rename), and restructured Achievements into the nested "Achievements at a Glance" hierarchy described in "Achievements Nested IA" above.

Known gaps / next work:
- Real student counts for Middle, Secondary, Cambridge, Primary, and Junior Wings (currently a "700+ Students" placeholder on the wing cards, and on `alumni/welcome.html`'s Board Position/Current Students stats).
- Real PDF downloads on `downloads.html` when available.
- Faculty lists for `wings/girls-afternoon.html` and `wings/secondary.html` (not present in `LIST OF TEACHERS FOR WEBSITE.docx` — currently a "coming soon" placeholder instead of teacher cards).
- The generic placeholder email `info@bckz.edu.pk` is still used in the utility bar and footer on every page, but `contact.html` now shows the real addresses (`bahria_collegekarsaz@yahoo.com`, `bckzinfo@gmail.com`) from `H.  Contact Us.docx` — site-wide mailto links were intentionally left alone pending a decision on whether to update them everywhere.
- Real content for `achievements/international-level.html`, `national-level.html`, `provincial-level.html`, `intercollegiate-level.html` (all placeholder shells — no source data exists yet, don't fabricate achievement claims).
- Real position-holder data for `achievements/federal-board-ssc.html` and `achievements/karachi-board-ssc.html` (both placeholders — the source table has zero SSC-level rows for either board).
- Real bank account number for `alumni/give-back.html`'s "Account Number" field (currently "Number Coming Soon"; IBAN is real).
- Real alumni data table content and corrected Board Position/Current Students figures for `alumni/welcome.html` (currently "700+" placeholders per the site owner — the old figures were confirmed wrong).
- An Alumni Coordinator extension number for `contact.html`'s directory table (no such row currently exists — `alumni/stay-connected.html` links to `administration/alumni-coordinator.html` instead of showing a number).

## Rules

- Never use frameworks, npm packages, or build steps.
- Keep all styles in `css/style.css` — no inline styles on new elements.
- Keep all JS in `js/main.js` — no additional script files unless explicitly agreed.
- Copy the navbar and utility bar HTML exactly from `index.html` for every new page; update the `active` class on the correct `navbar__link`.
- Images go in `Images/` (or a relevant subfolder). Reference with relative paths, and remember the CSS `url()` gotcha above.
- Google Fonts link must be the first `<link>` inside `<head>` on every page (kept for consistency even though currently unused by `--font`).
- When making the same mechanical edit across many pages (navbar dropdown, footer links, etc.), verify the exact existing string first and script the replacement — a partial/approximate match risks silently skipping files or creating duplicates (this has happened before: a careless replace target once matched both the navbar dropdown and the footer, producing a duplicate "Fee Structure" link in the navbar).
- Site-wide navbar dropdowns are single-level (`.has-dropdown`/`.dropdown`) by convention — the one exception is `achievements/overview.html`'s entry, which uses `.has-submenu`/`.submenu` for a second-level flyout (see "Achievements Nested IA"). Don't add further nesting levels without a strong reason; prefer the existing Hub + Sub-Page pattern (a hub page's own card grid) over deeper navbar flyouts.
- Don't fabricate factual claims (achievement records, headcounts, financial details) to fill a gap — use a clearly-labeled placeholder ("Content Coming Soon", "Number Coming Soon", etc., matching the existing `.dept-detail__photo-placeholder` convention) and list it under "Known gaps" instead.
