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
├── admissions.html            ← Accordion of 6 wing-specific admission items (see "Admissions (Session 2026)" section)
├── administration.html      ← Hub page: card grid linking to administration/*.html
├── administration/            ← Filenames below are unchanged, but DISPLAYED department names were
│                                  renamed site-wide (navbar dropdown, hub cards, page headings) — see
│                                  "Administration Department Names" section. Filename ≠ displayed name
│                                  for several of these; don't assume otherwise when editing.
│   ├── principals-secretariat.html  ← "Principal's Secretariat"
│   ├── admin-department.html        ← "Admin Department"
│   ├── medical.html                 ← "Medical Department"
│   ├── counselling.html             ← "Student Counselling Department" (was "...& Psychological Department")
│   ├── bursar.html                  ← "Bursar Department"
│   ├── sports-office.html           ← "Sports Department" (was "Sports Office")
│   ├── librarian.html               ← "Library Department" (was "Librarian")
│   ├── board-coordinators.html      ← "Board Coordinators" (unchanged)
│   ├── security.html                ← "Security Department" (was "Security Office")
│   ├── transport.html               ← "Transport Department" (was "Transport Coordinator")
│   └── alumni-coordinator.html      ← "Alumni Department" (was "Alumni Coordinator")
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
│   ├── BCKz Logo.png                  ← Used in the navbar/header logo (all pages), the browser favicon, AND
│   │                                        (since a later pass) the footer brand column, inside a white
│   │                                        `.footer__logo-wrap` box — see "Footer" note below.
│   │                                        `bahria-logo-white.png` (the old footer logo) is no longer
│   │                                        referenced anywhere; it can stay on disk but isn't linked from any page.
│   ├── Banners/                       ← Dedicated hero photos for the 5 hub pages (About Us.png,
│   │   │                                   Achievements.png, Administration.png, Alumni.png, Facilities.jpg)
│   │   │                                   sourced from `New-Content-4/1. Main Banner Pics/`, each wired to
│   │   │                                   its own `.page-hero--*` class (`--about`, `--achievements-hub`,
│   │   │                                   `--administration-hub`, `--alumni-hub`, `--facilities-hub`) so they
│   │   │                                   don't affect the generic `--building`/`--campus` classes shared by
│   │   │                                   sub-pages.
│   │   └── Wings/                     ← Dedicated hero photos for all 9 `wings/*.html` pages, sourced from
│   │                                       `New-Content-4/2. Wings Banner Pics/`, wired into the pages'
│   │                                       pre-existing `.page-hero--wing-*` classes (no HTML changes needed —
│   │                                       only the CSS `url()`s were repointed).
│   ├── Navy Logo.png
│   ├── Facilities/         ← Facility photos
│   ├── VP/                 ← Named VP photos (e.g. "Imran Safdar.jpg", "Sadia Khanam.jpg")
│   ├── Alumni/             ← 15 named alumni photos used by success-stories.html's story cards/modal
│   │   └── Events/
│   │       ├── Get-Together/  ← 12 photos, Alumni Get-Together 2017, used by alumni/events.html
│   │       └── Home-Coming/   ← 23 photos, Alumni Home Coming 2025, used by alumni/events.html
│   ├── Administration/     ← Named department-head photos used by administration/*.html. First-round
│   │                            photos (all .jpeg) came from Admin-Staff-Pics/; a later round replaced
│   │                            10 of 11 with new photos from New-Content-3/ADMIN DEPTT PICS/ (all .png,
│   │                            same base filename, e.g. "Syed Rizwan Hussain.png") — kept the ORIGINAL
│   │                            filenames/on-page names even though two new photos are labelled with
│   │                            different names than the site (Bursar photo says "M Rizwan", site still
│   │                            says "Mr. Syed Rizwan Hussain"; Sports photo says "M Ikram", site still
│   │                            says "Mr. Muhammad Akram") — a probable personnel change the site owner
│   │                            asked NOT to rename yet. `Zinhar Siddiqui.jpeg` (Librarian) was never
│   │                            replaced — no new photo was supplied for that role.
│   ├── Board of Secondary Education Karachi.png, Board of Intermediate Education Karachi Logo.svg,
│   │   Federal Board of Intermediate & Secondary Education, Islamabad.png, British Council Logo.webp
│   │                       ← Real board-affiliation logos, used in each wing's "Affiliated Board" section
│   │                            (`wings/*.html`'s `.wing-boards__logo`/`.wing-boards__logo-col--multi`)
│   └── ...
├── New-Content/             ← Source Word docs (canonical content reference) + reference photos.
│                               *.docx/*.pdf are gitignored — not pushed to the repo.
├── New-Content-2/           ← Second batch of source docs (Achievements, Alumni, Contact Us, Guidelines,
│                               teacher list) + raw alumni photos. Not committed at all (like VP-Images/
│                               below) — only the *.docx/*.pdf are gitignore-matched, but by convention this
│                               whole staging folder is left untracked; only the processed copies that make
│                               it into Images/ are committed.
├── New-Content-3/           ← Third batch: `ADMISSION SUMMARY.docx` (real per-wing admission-timing/
│                               eligibility/entrance-test table — source for the current `admissions.html`
│                               accordion), `STATET OF STUDENTS - 21 JUL 26.docx` (real wing-wise
│                               enrollment figures, 6,445 total — resolved the old "700+ Students"
│                               placeholders), `ADMIN DEPTT PICS/` (round-2 department-head photos, see
│                               Images/Administration/ above), board logo images, `bahria-logo-white.png`,
│                               a hi-res principal photo, and a vector logo PDF. `Admissions Page.docx` in
│                               this batch turned out to be just a screenshot of the OLD admissions.html
│                               for reference, not new design content — don't treat it as a content source.
│                               Untracked, same convention as New-Content-2/.
├── New-Content-4/           ← Fourth batch: `1. Main Banner Pics/` (5 hero photos for the hub pages — About Us,
│                               Achievements, Administration, Alumni1, Facilities1) and `2. Wings Banner Pics/`
│                               (9 hero photos, one per wing, numbered 1–9). Copied into `Images/Banners/` and
│                               `Images/Banners/Wings/` with clean filenames — see File Structure above.
│                               Untracked, same convention as New-Content-2/ and New-Content-3/.
├── VP-Images/                ← Raw VP photo originals as supplied (not committed; copied/renamed into Images/VP/)
└── Admin-Staff-Pics/         ← Raw department-head photo originals as supplied, named "NAME, TITLE.jpeg"
                                  (not committed; copied/renamed into Images/Administration/)
```

## CSS gotcha: `url()` paths are relative to `style.css`, not the HTML page

Any `background-image: url(...)` written in `css/style.css` resolves relative to the **CSS file's own location** (`css/`), regardless of which HTML page includes that class. Since `Images/` is a sibling of `css/`, every image reference in `style.css` must be `../Images/...` — never `Images/...` — even for classes only used by root-level pages like `about.html`. Getting this wrong silently fails (no image, no console error) and is easy to miss. This bit us once with `.page-hero--about`.

## CSS gotcha: specificity silently defeats a later, more-specific-looking rule

`.footer__bottom p { font-size: 0.78rem; ... }` (an element+class selector, specificity 0,1,1) was overriding `.footer__visits { font-size: ...; }` (a single class, specificity 0,1,0) the whole time, even though `.footer__visits` appeared *after* it in the file and looked more targeted. CSS resolves conflicting declarations by specificity first, then source order only as a tiebreaker — so a later, more-specific-looking single-class rule can still lose to an earlier lower-specificity-looking-but-actually-higher combinator rule. When a font-size/color change on a class "doesn't seem to apply," check for a more specific selector matching the same element before assuming the edit itself is wrong. The fix here was raising specificity explicitly: `.footer__bottom .footer__visits { ... }`.

## Key Content Facts

- **Principal:** Captain Muhammad Imran Khan PN, Principal, Bahria College Karsaz
- **Founded:** 1997 | **Campus:** 24 acres | **Students:** 6,000+ (displayed, rounded down from the real 6,445 total — see rounding note below) | **Faculty:** 450+
- **Awards:** 12× Best Bahria College
- **YouTube video ID:** `bFrxx4GZCA0` — used in the homepage hero background (no Virtual Campus Tour CTA on homepage anymore; the lightbox/tour button still exists on `gallery.html` and `facilities.html`)
- **Core Values (About Us):** Faith, Character, Courage & Commitment — the Pakistan Navy's own ethos framework (4 cards), not the old generic Excellence/Integrity/Discipline/Innovation/Service/Patriotism set
- **Governance chain (About Us / Administration):** Board of Governors (chaired by VCNS/Chief of Staff) → Managing Committee (headed by Commander Karachi) → Principal → Vice Principals / Admin Officer / Bursar

### Wings (9 total)

| Wing | Classes | Students (real) | Displayed | Notes |
|------|---------|------------------|-----------|-------|
| Boys Wing Morning | IX–XII | 812 | 800+ | Est. March 2002. FBISE Islamabad & BIEK. |
| Girls Wing Morning | IX–XII | 1,001 | 1,000+ | Est. 2002. |
| Boys Wing Afternoon | XI–XII | 543 | 500+ | Est. 2020. (Corrected from IX–XII — this wing is HSSC-only.) |
| Girls Wing Afternoon | XI–XII | 958 | 900+ | Est. 2020. Has its own VP section (Ms. Asma Neelam). |
| Middle Wing | VI–VIII | 561 | 500+ | Independent wing since 2017, Afternoon Shift added 2019. |
| Secondary Wing (Afternoon) | VI–X | 677 | 600+ | Since 2018, both boys & girls. VP Ms. Sadia Khanam (shared with Middle Wing). Display name now includes "(Afternoon)" everywhere (cards, page heading, navbar dropdown, breadcrumb) — the file stays `secondary.html`. |
| Cambridge Wing | Pre-O-Level, O-Level & A-Level | 375 | 300+ | Wing established 2011, O-Level classes began 2012, A-Level since 2025. |
| Primary Wing | I–V | 985 | 900+ | Since 1997. Foundation stone laid 17 Jul 2009; inaugurated 6 Apr 2011. |
| Junior Wing | Beginner, Advance & Prep | 533 | 500+ | Since 1997, relocated to purpose-built campus Feb 2023. VP Ms. Farah Sarfraz. |

All 9 wing-card student counts (`index.html`/`wings.html`, plus each wing's own "Wing at a Glance" card) are sourced from `New-Content-3/STATET OF STUDENTS - 21 JUL 26.docx` — the old "700+/900+ Students" placeholders were first fully resolved to the exact real figures above, then (in a later editorial pass) rounded DOWN to the nearest hundred with a trailing "+" for display (e.g. real 812 → displayed "800+"), matching the site owner's preference for approximate rather than exact headcounts. **The "Students (real)" column above is the source of truth for the underlying figure — always round down from it, don't invent a new number.** The sitewide total is real 6,445, displayed as "6,000+" (same rounding rule) on `index.html`'s stats strip, `about.html`'s stat block, every `about-cta__sub` "Join a community of X students..." line, and `alumni/welcome.html`'s "Current Students" stat. Founding-era historical figures (Junior Wing's "190 students and nine teachers" in 1997, Primary Wing's "just 22 students") are exact and NOT rounded — they're one-time historical facts, not current enrollment.

Faculty counts follow the same don't-be-exact convention: the sitewide "450+" was already approximate and is unchanged. Per-wing faculty mentions inside `wings/*.html` overview paragraphs were normalized to "N0+ members" phrasing (e.g. Boys Wing Morning's old "42-member teaching staff" → "teaching staff of 40+ members"; Girls Wing Morning's old "more than 55 members" → "50+ members"). When adding new wing content, don't state an exact faculty headcount — round down to the nearest ten and add "+".

Every wing card (on `index.html` and `wings.html`) follows a fixed 4-line format: **icon → wing name → classes → student count**. Don't reintroduce shift labels, founding years, or curriculum blurbs into that card format — those live on the wing's own page instead.

### Wing at a Glance card (on each `wings/*.html` page)

Standardized to exactly **3 fields, in this order: Classes → Students → Established** (`.wing-info-card__list` of 3 `.wing-info-card__item`s). All other fields that used to appear here (Shift, Programmes/Streams, Classrooms, Teaching Staff, Boards, Curriculum, Affiliation, Disciplines, Levels, Library, Facilities) were deliberately removed for consistency — don't reintroduce any of them, and don't add a 4th field (a "Focus" field was tried and then explicitly removed per the site owner). Board affiliation info lives instead in each page's separate "Affiliated Board" (`.wing-boards`) section further down.

### Admissions (Session 2026)

`admissions.html` is now built around a single **"Admission Details by Wing"** accordion (`.guidelines-accordion`, same `<details>`/`<summary>` component as `academics/guidelines.html`) with exactly 6 items, sourced from `New-Content-3/ADMISSION SUMMARY.docx`: **Junior Wing, Primary Wing, Middle Wing, Secondary Wing (SSC, Classes IX–X), Higher Secondary Wing (HSSC, Classes XI–XII), Cambridge Wing**. There is no separate flat "Eligibility Criteria" / "Programmes" / "Entrance Test Subjects" / "How to Apply" / "Required Documents" / "Important Notes" section anymore — all of that content was folded into each wing's accordion item, scoped so it doesn't apply to every wing indiscriminately. Only `id="intro"`, `id="admission-details"` (the accordion) and the CTA strip remain as top-level sections.

Each accordion item's body uses a dedicated, admissions-only class set (`.adm-detail-body`, `.adm-detail-grid`, `.adm-detail-block`, `.adm-detail-label`, `.adm-detail-list`, `.adm-detail-steps`, `.adm-detail-callout`, `.adm-detail-aside` — all in `css/style.css` under "Admission Details by Wing accordion"), layered on top of (not replacing) the shared `.guidelines-item__body` class so `academics/guidelines.html` is unaffected:
- **Admission Announcement** + **Eligibility Criteria** sit side-by-side in a 2-column `.adm-detail-grid` (stacks to 1 column ≤640px).
- **Entrance Test** is a plain list/paragraph; Secondary and HSSC additionally get a **Programmes by Board, Shift & Gender** `.data-table` block.
- **How to Apply** is a numbered `.adm-detail-steps` list (small navy circular badges, lighter-weight version of the top-level `.adm-step` component).
- **Documents Required** reuses the existing checklist-card grid (`.adm-docs__list`/`.adm-doc-item`, gold checkmark) instead of a plain bullet list.
- **Important** notes render as a highlighted gold-tinted `.adm-detail-callout` box with a left accent border and info icon — not italic text.

Key facts (now distributed per-wing inside the accordion rather than centralized):
- **Eligibility to apply:** Min 65% in Matric (SSC) for general stream (HSSC); 60% for Middle/Secondary/Primary/Cambridge-O-Level entrance tests
- **Confirmation threshold:** HSSC provisional admission is confirmed once the candidate secures min 60% in the actual SSC/equivalent result (distinct from the 65% needed to apply)
- **Selection:** 60% Class IX % + 40% entrance test (HSSC only)
- **Programmes:** HSSC Pre-Medical, Pre-Engineering, Computer Science, Commerce (board/shift/gender-specific — see the HSSC accordion item's table), Humanities (girls only, board-specific subject combos differ), O-Level, A-Level
- **Documents Required** differs by wing inside the accordion: HSSC gets a Class-XI-specific list (Marks Sheet, Migration Certificate, etc.); every other wing reuses the same Montessori/Prep & Other Classes list — don't merge them into one generic list.

## Page Layout Pattern

Every page shares the same shell:

1. **Utility bar** — a "Follow Us:" label (`.utility-bar__follow`) + social icons (Facebook, Instagram, WhatsApp only — the mailto Email icon was removed site-wide in a later pass) on the left, quick links on the right
2. **Header/Navbar** — two-row structure inside `.navbar__inner`:
   - Top row (`.navbar__top-row`): BCKz logo (left), centered `.navbar__title` text ("BAHRIA COLLEGE KARSAZ", uppercase, 3em), Pakistan Navy logo (right), mobile toggle
   - Second row: `.navbar__menu` nav links with dropdowns, centered
3. **News ticker** — standalone strip between `</header>` and page hero (NOT inside hero)
4. **Page content**
5. **Footer** — 4-column grid (brand, quick links, resources, contact). No "Apply for Admission" button in the footer contact column (removed site-wide) — the CTA-strip "Apply for Admission" buttons on individual pages are a separate thing and were NOT removed. The brand column's logo is `Images/BCKz Logo.png` (same file as the header) inside a white rounded `.footer__logo-wrap` box, not the old `bahria-logo-white.png`. The "Get In Touch" (contact) column ends with a large `.footer__counter` block (big gold number + "Website Visits" label) — this is where `#visitCounter` now lives; it used to be a small pill in `.footer__bottom` under the copyright line, which now holds only the copyright text.

The navbar scrolls sticky and adds a `scrolled` class via JS. The active `navbar__link` class must match the current page.

> **Important:** Copy the navbar and utility bar HTML from `index.html` (root pages) or `wings/boys-morning.html` (any one-level-deep sub-page — `wings/`, `academics/`, `administration/`, `facilities/` are all siblings and use `../` prefix identically). When adding/renaming a wing, department, or topic, update **that** dropdown in every page's navbar — root pages use `subdir/xxx.html`, one-level-deep pages use `../subdir/xxx.html` **except** for their own dropdown, which uses bare sibling filenames (e.g. `wings/boys-morning.html`'s Wings dropdown links to `boys-morning.html`, not `../wings/boys-morning.html`). This is done via a scripted find/replace across all files rather than by hand, since the block is identical everywhere except the path prefix.

## Hub + Sub-Page Pattern (Academics / Administration / Facilities / Achievements / Alumni)

`academics.html`, `administration.html`, `facilities.html`, `achievements.html`, and `alumni.html` are all **hub pages** — none of them hold full section content. Each shows a card grid (reusing `.admin-services__grid` / `.admin-service-card.card-link`) where every card links to a standalone sub-page in the matching directory. Don't reintroduce full inline content on any of these five hub pages — add a new sub-page instead and link to it from the hub's card grid. Every one of the 5 subdirectories also has its own navbar dropdown (site-wide, on every page) linking directly to its sub-pages.

- **Administration sub-pages** (`administration/*.html`): hero banner with the (renamed — see "Administration Department Names") department name, then a two-column `.dept-detail__grid` section (`align-items: start`) — left column is the department's text (from `05. Administration.docx`), right column is `.dept-detail__side` (`align-self: start`, so the photo column stays pinned to the top of the section rather than centering against a taller text column) with a real photo (`.dept-detail__photo`) and the department head's name/title. The photo box uses `aspect-ratio: 1 / 1.2` (20% taller than a square) with `object-fit: cover` + `object-position: top` so the crop favours the top of the photo. `board-coordinators.html` has two heads (SSC & HSSC / CAIE) so its side column uses a `.dept-detail__side-group` wrapper (also `align-self: start`) holding two `.dept-detail__side` cards instead of one.
- **Academics sub-pages** (`academics/*.html`): content lifted directly from `04. Academics.docx`, reusing whatever CSS component fits (`.data-table` for tables, `.uniform-card`, `.clubs-tag`, etc.). Exception: `academics/guidelines.html` was later fully replaced with the far more comprehensive `GUIDELINES.docx` (from `New-Content-2/`) — Code of Conduct, Dress Code, ID Cards, House System, Disciplinary Measures, Awards & Recognition, etc. — using `.guidelines-accordion` throughout.
- **Facilities sub-pages** (`facilities/*.html`): content from `06. Facilities.docx` using `.fac-page-card`/`.fac-page-grid`. The per-facility photo gallery section (`.facility-gallery__grid` placeholder tiles) was removed site-wide — these pages now end with the facility content itself, no gallery placeholder.
- **Achievements sub-pages** (`achievements/*.html`): `achievements.html` only card-links to two top-level siblings — `overview.html` ("Achievements at a Glance") and `medals.html` ("Award of Medals"). `overview.html` is itself a second-level hub — see "Achievements Nested IA" below for its 8 children and the 3-level `board-results-summary.html`/`caie-summary.html` sub-hubs.
- **Alumni sub-pages** (`alumni/*.html`): `welcome.html`, `success-stories.html` (alumni cards + modal — `alumni/success-stories.html` is the only alumni sub-page that includes the `.alumni-modal` markup), `where-alumni-excel.html`, `events.html` (photo record of past alumni reunions — reuses `gallery.html`'s `.gallery-grid`/`.gallery-item` classes, no filter buttons or lightbox), `stay-connected.html`, `give-back.html` (donation/sponsorship form, renamed from `give-away.html`).
- Every sub-page includes a `.subpage-back` link ("← Back to Administration/Academics/Facilities/Achievements/Alumni") right under the hero, pointing at the hub page — except `achievements/best-bahria-college.html` and `achievements/position-holders.html`, whose back-link/breadcrumb now points to `overview.html` ("Back to Achievements at a Glance") since they're nested one level deeper.

## Administration Department Names

Displayed department names (navbar dropdown, `administration.html` hub cards, each sub-page's `<title>`/H1/breadcrumb) were standardized to a consistent "___ Department" naming scheme, site-wide, without renaming any files:

| File | Current displayed name | Old name |
|------|------------------------|----------|
| `principals-secretariat.html` | Principal's Secretariat | (unchanged) |
| `admin-department.html` | Admin Department | (unchanged) |
| `medical.html` | Medical Department | (unchanged) |
| `counselling.html` | Student Counselling Department | Student Counselling & Psychological Department |
| `bursar.html` | Bursar Department | (unchanged) |
| `sports-office.html` | Sports Department | Sports Office |
| `librarian.html` | Library Department | Librarian |
| `board-coordinators.html` | Board Coordinators | (unchanged) |
| `security.html` | Security Department | Security Office |
| `transport.html` | Transport Department | Transport Coordinator |
| `alumni-coordinator.html` | Alumni Department | Alumni Coordinator |

When touching any of these names again with a scripted find/replace, watch for **substring collisions** with unrelated text on the same page — a prior pass here replacing "Sports Office" → "Sports Department" with `replace_all: true` on `sports-office.html` accidentally also matched inside "College Sports **Office**r" (the department head's job title), mangling it to "College Sports Departmentr". Always grep the target file afterward for the old substring to catch this class of bug before moving on.

## Achievements Nested IA

`achievements/overview.html` ("Achievements at a Glance") is a **second-level hub** — the only spot on the site with 3 levels of navbar nesting (Achievements ▸ Achievements at a Glance ▸ child). Its navbar dropdown entry is `<li class="has-submenu">` with a `.submenu` flyout (new CSS added specifically for this — `.has-submenu`/`.submenu` in `css/style.css`, plus a `.has-submenu` mobile-accordion branch in `initDropdownMobile()` in `js/main.js`; every other dropdown site-wide is still single-level `.has-dropdown`/`.dropdown`). Its 8 children:

- `international-level.html`, `national-level.html`, `provincial-level.html`, `intercollegiate-level.html` — **no real data exists yet**; these are placeholder shells (`.dept-detail__photo-placeholder`-style "Content Coming Soon" block). Don't invent achievement claims for these — wait for real data.
- `best-bahria-college.html`, `position-holders.html` — pre-existing pages, just reparented (breadcrumb + `.subpage-back` now point to `overview.html` instead of `achievements.html`).
- `board-results-summary.html` → hub → `federal-board.html` / `karachi-board.html` → each a hub → `-hssc.html` / `-ssc.html`. All filtered from the same 131-row `position-holders.html` table (130 Karachi-HSSC rows, 1 Federal-HSSC row, **zero SSC rows in either board** — the SSC pages are honest placeholders, not fabricated).
- `caie-summary.html` → hub → `caie-o-level.html` (the old `caie-results.html` table, moved wholesale — O-Level has run since 2013) / `caie-a-level.html` (placeholder: A-Level launched 2025, a 2-year qualification, so first results are expected ~2027 — don't fabricate interim results).

The medal-count icon summary on `overview.html` (Gold=10/Silver=9/Bronze=7) is **derived, real data** — counts of `.ach-table__pos--1`/`--2`/`--3` (1st/2nd/3rd position) rows in `position-holders.html`, since CNS Gold = 1st, Chairman BOG = 2nd, President MC = 3rd (see `achievements/medals.html`). "Alumni: 700+" on that same strip is a placeholder, not derived — update when a real count is available.

## Wing Pages — List of Teachers, Clubs & Societies, CTA

Every `wings/*.html` page has a `.wing-faculty` section (`id="faculty"`) — a `.teacher-cards-grid` of `.teacher-card`s (Name / Qualification / Designation / Remarks, one card per teacher — **not a table**, converted from the original `.data-table` in a later pass), sourced from `LIST OF TEACHERS FOR WEBSITE.docx` (`New-Content-2/`). `wings/middle.html` has two card grids (Morning Shift + Afternoon Shift, since the source doc splits Middle Wing that way). **`wings/girls-afternoon.html` and `wings/secondary.html` have no faculty data in that docx** — they show a "Faculty list for this wing will be published soon" placeholder instead; don't invent names or duplicate another wing's list into them. When new teacher data arrives for those two wings, follow the same `.teacher-cards-grid` structure as the other wings' `.wing-faculty` sections.

Wings with club data available in `academics/clubs.html`'s `.clubs-wing-block`s (Boys Wing, Girls Wing — shared across morning/afternoon shifts, Cambridge, Middle, Primary) also have a `.wing-clubs-tags` section reusing that same club list verbatim (`.clubs-tag-list`/`.clubs-tag`), titled "Clubs & Societies at [Wing Name]". **Section order is Clubs & Societies *then* Facilities, then the CTA** (Clubs was moved above Facilities in a later pass, on the 6 wing pages that have both sections: boys-morning, girls-morning, boys-afternoon, girls-afternoon, middle, primary) — don't revert the order back to Facilities-then-Clubs. **Secondary and Junior Wings have no club data** — don't invent one. `boys-morning.html`/`boys-afternoon.html` had an older generic 3-card `.wing-clubs` section (Sports/IT/Science Club, not sourced from real per-wing data) that was removed in favor of the authoritative `.wing-clubs-tags` section — don't reintroduce it.

Every wing page (except Junior and Cambridge) also has an "Affiliated Board" section (`.wing-boards`) between the Programmes and List of Teachers sections. Boys/Girls Morning & Afternoon show **both** FBISE Islamabad and BIEK Karachi logos (dual affiliation, `.wing-boards__logo-col--multi`); Secondary Wing shows FBISE + the *Secondary*-level Karachi board (BSEK, "Board of Secondary Education Karachi.png" — a distinct entity from BIEK, since Karachi runs separate SSC and HSSC boards); Cambridge Wing shows the real British Council logo (a former inline-styled placeholder `<div>` was replaced with an actual `<img>`). Don't swap these board-logo assignments between wings — SSC-level wings (Secondary) use BSEK, HSSC-level wings (Boys/Girls Morning & Afternoon) use BIEK, both alongside FBISE.

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
- `initVisitCounter()` — `#visitCounter` span; fetches a hit count from the free `api.countapi.xyz` service (namespace `bckz-website-karsaz`) and adds it to a `BASE_COUNT` of 227,477, so the number increments per real page load. Fails silently (leaves the static "227,477" fallback) if the third-party API is unreachable — there's no real backend, so this is the best available approximation of a "real" site-wide visit counter on a static site. It now lives inside `.footer__counter` (`css/style.css`) in the footer's "Get In Touch" column — a large gold `.footer__counter-number` (2.4rem) above a small uppercase `.footer__counter-label` ("Website Visits"). It used to be a small pill (`.footer__visits`) centered under the copyright line in `.footer__bottom`; that pill and its dedicated CSS specificity workaround (see the CSS specificity gotcha above) were removed when the counter moved — `.footer__bottom` now holds only the copyright `<p>`.

To add news items, append to the `NEWS_DATA` array in `main.js`, add a matching `<button class="hero__ticker-item" data-news="N">` in the ticker, and add a card to both the homepage slider and `news.html`'s full listing (`news-grid--static`).

## Content Source of Truth

`New-Content/` holds the first batch of official Word docs (Home, About Us, Wings, Academics, Administration, Facilities, plus a site-outline doc). `New-Content-2/` holds a second batch (`Achievements/BOARD POSITIONS.docx`, `Achievements/CAIE RESULTS OVERALL.docx`, `Alumni/Welcome to the Alumni Network.docx`, `Alumni/Give Away Form.docx`, `Alumni/Alumni Details.docx` + 9 alumni photos, `GUIDELINES.docx`, `H.  Contact Us.docx`, `LIST OF TEACHERS FOR WEBSITE.docx`). `New-Content-3/` holds a third batch — see the File Structure entry above for its contents (admission details, real enrollment figures, round-2 admin photos, board logos, footer/principal images). All three are the canonical source for factual content — founding years, programmes, department descriptions, board results, faculty names, enrollment figures, etc. `*.docx`/`*.pdf` are gitignored, and by convention none of `New-Content/`, `New-Content-2/`, or `New-Content-3/` is pushed to the repo at all (see File Structure above). When asked to update content, check these docs first rather than guessing; when the current site conflicts with the docs, the docs win unless the user says otherwise (established convention from a prior session).

`.docx` files can't be read directly — convert with `python-docx` (`/c/Python314/python`, not the WindowsApps `python3` shim, which lacks the package) to extract paragraphs and tables; watch for `UnicodeEncodeError` on checkbox/bullet glyphs when printing to the Windows console (redirect to a file or set `PYTHONIOENCODING=utf-8`).

## Page Build Status

All pages are built out with real content; large sections were reworked to match `New-Content/` in a subsequent pass (About Us Core Values/Governance, all 9 Wings' facts, Academics Fee/Timings/Uniform/Calendar/Clubs/Guidelines/Summer Camp, Administration's departments, Facilities' 10 categories, Admissions' detailed per-wing tables). Academics, Administration, and Facilities were subsequently split into hub + sub-page structures — see "Hub + Sub-Page Pattern" above. Administration later gained an 11th department, Principal's Secretariat. A further pass using `New-Content-2/` added the full Board Position Holders/CAIE tables on Achievements, the Alumni Welcome copy/Success Story cards/Give Away form, per-wing teacher lists, the Contact Us extension directory, and a full rewrite of the Guidelines sub-page.

A later editorial + restructuring pass: removed duplicate hero/first-section headings and trailing full stops under hero subtitles site-wide, dropped the comma before "and" throughout, added hero background photos to every banner that lacked one, converted wing faculty tables to `.teacher-card` grids, added per-wing Clubs & Societies sections, removed the `academics/programmes.html` "Explore Programmes" page, rewrote the Admissions intro copy, dropped the Fee Structure page's College Timings table, added a footer visit counter and updated WhatsApp/Virtual Library links site-wide, renamed Alumni's "Give Away" to "Give Back" (with a file rename), and restructured Achievements into the nested "Achievements at a Glance" hierarchy described in "Achievements Nested IA" above.

A `New-Content-3/`-driven pass: corrected several wing-card facts (Boys/Girls Afternoon classes to XI–XII, Secondary Wing renamed "(Afternoon)" everywhere, Cambridge Wing's shift list), swapped in real board-affiliation logos and a new Secondary Wing "Affiliated Board" section, standardized every wing's "Wing at a Glance" card down to Classes/Students/Established only, reordered Clubs & Societies above Facilities on the 6 wing pages that have both, replaced all "700+/900+ Students" placeholders with real per-wing enrollment figures (6,445 total), renamed all Administration department display names to a consistent "___ Department" scheme (see "Administration Department Names"), swapped in 10 of 11 department-head photos, restructured `admissions.html` into the per-wing accordion described in "Admissions (Session 2026)" with a richer labeled-block/callout body layout, swapped the footer logo for a white variant, and reworked the Administration department-photo column (top-aligned, 20% taller box, top-cropped image).

A `New-Content-4/`-driven editorial + design pass: replaced the mailto Email icon in the utility bar with a "Follow Us:" label site-wide; widened the homepage Principal's Message photo column (340px → 460px, aspect-ratio 3/4 → 4/3.6); added a `?` to the homepage "Why Choose Bahria College Karsaz" heading, dropped a redundant "the" from the hero subtitle, and rewrote the Academic Excellence feature-card copy; rounded every previously-exact enrollment/faculty figure sitewide down to the nearest hundred/ten with a trailing "+" (see the Wings table note above) — the underlying real figures are unchanged and still recorded in `New-Content-3/STATET OF STUDENTS - 21 JUL 26.docx`; gave each of the 5 hub pages (About Us already had one) and all 9 wing pages a dedicated real hero photo from `New-Content-4/` instead of the shared generic `--building`/`--campus`/placeholder backgrounds; and redesigned the footer — swapped the plain white-logo image for `Images/BCKz Logo.png` in a white `.footer__logo-wrap` box, and moved the visit counter out of the small `.footer__bottom` pill into a large `.footer__counter` block inside the "Get In Touch" column.

Known gaps / next work:
- Real PDF downloads on `downloads.html` when available.
- Faculty lists for `wings/girls-afternoon.html` and `wings/secondary.html` (not present in `LIST OF TEACHERS FOR WEBSITE.docx` — currently a "coming soon" placeholder instead of teacher cards).
- The generic placeholder email `info@bckz.edu.pk` is still used in the utility bar and footer on every page, but `contact.html` now shows the real addresses (`bahria_collegekarsaz@yahoo.com`, `bckzinfo@gmail.com`) from `H.  Contact Us.docx` — site-wide mailto links were intentionally left alone pending a decision on whether to update them everywhere.
- Real content for `achievements/international-level.html`, `national-level.html`, `provincial-level.html`, `intercollegiate-level.html` (all placeholder shells — no source data exists yet, don't fabricate achievement claims).
- Real position-holder data for `achievements/federal-board-ssc.html` and `achievements/karachi-board-ssc.html` (both placeholders — the source table has zero SSC-level rows for either board).
- Real bank account number for `alumni/give-back.html`'s "Account Number" field (currently "Number Coming Soon"; IBAN is real).
- Real alumni data table content for `alumni/welcome.html`. Its "Current Students" stat is now resolved (real 6,445, displayed as "6,000+" per the rounding convention); "Board Position Holders" is still a "700+" placeholder — don't confuse the two when this gap is next addressed.
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
- Displayed enrollment and faculty figures are rounded down to the nearest hundred (students) or ten (faculty) with a trailing "+" — never print an exact headcount like "812" or "42" in new copy; round it first (see the Wings table note under "Key Content Facts"). Exception: one-time historical figures (a wing's founding-year headcount) stay exact, since they're not describing current enrollment.
