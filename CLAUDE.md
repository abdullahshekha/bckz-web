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
│   ├── uniform.html         ← Dress Code detail (Summer/Winter Uniform + Sport Kit, by class & gender)
│   ├── college-timings.html ← Daily class schedule + gate timings (added in a later pass; nav-positioned
│   │                            directly after Uniform — was previously folded into guidelines.html's
│   │                            "College Routine & Gate Timings" accordion item, now extracted to its own page)
│   ├── scholarships.html
│   ├── calendar.html        ← Academic Calendar table
│   ├── clubs.html           ← Clubs & Societies by wing
│   ├── guidelines.html      ← "Guidelines for Students and Parents" accordion (renamed from "Student &
│   │                            Parent Guidelines" in a later pass — update the display name everywhere,
│   │                            not just this file, if you touch it again)
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
├── achievements.html         ← Hub page: card grid linking to all 7 achievements/*.html nav items
│                                  below (flat single-level hub — see "Achievements IA")
├── achievements/            ← `overview.html` ("Achievements at a Glance") and `medals.html`
│   │                            ("Award of Medals") were DELETED in a later pass — don't recreate
│   │                            them; see "Achievements IA" for the flat structure that replaced them
│   ├── international-level.html   ← placeholder, no real data yet
│   ├── national-level.html        ← placeholder, no real data yet
│   ├── provincial-level.html      ← placeholder, no real data yet
│   ├── intercollegiate-level.html ← placeholder, no real data yet
│   ├── best-bahria-college.html   ← "Best Bahria College Awards"; breadcrumb/back-link point
│   │                                 directly at achievements.html
│   ├── position-holders.html      ← Board Position Holders table (131 rows, 2007–2025); breadcrumb/
│   │                                 back-link point directly at achievements.html
│   ├── board-results-summary.html ← hub, card-links the 3 pages below; the only achievements dropdown
│   │                                 entry with its own `.has-submenu` flyout
│   ├── hssc-results.html          ← merges the old federal-board-hssc.html (1 row) + karachi-board-
│   │                                 hssc.html (130 rows) into one page, two `.section-subheading` blocks
│   ├── ssc-results.html           ← merges the old federal-board-ssc.html + karachi-board-ssc.html
│   │                                 (both placeholders — zero real SSC rows for either board)
│   └── caie-results.html          ← merges the old caie-o-level.html (real, since 2013) + caie-a-
│                                      level.html (placeholder, first results ~2027) into one page
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
│   ├── Facilities/         ← Facility photos (older set, still used by `facilities/*.html` and the homepage)
│   │   └── Wings/          ← Newer, uniform 9-photo "State-of-the-Art Facilities" set used identically on
│   │       │                    all 9 `wings/*.html` pages (Library, Auditorium, Medical Facility, Sports
│   │       │                    Facilities, Cafeteria & Canteens, Solar System, Electric Cart, CCTV Coverage,
│   │       │                    Parking) — sourced from `New-Content-4/4. Facilities/` (excludes Laboratories).
│   │       │                    Don't conflate with the older `Images/Facilities/*.JPG` set above.
│   │       └── Labs/       ← Wing-specific laboratory/activity-room photos for each wing's separate
│   │                            "Laboratories" (or "Activity Rooms" for Junior) section — see "Wing Pages"
│   │                            section below for which image set each wing uses.
│   ├── VP/                 ← Named VP photos (e.g. "Imran Safdar.jpg", "Sadia Khanam.jpg")
│   ├── Alumni/             ← 15 named alumni photos used by success-stories.html's story cards/modal
│   │   └── Events/
│   │       ├── Get-Together/  ← 12 photos, Alumni Get-Together 2017, used by alumni/events.html
│   │       └── Home-Coming/   ← 14 photos (`1.jpg`–`14.jpg`), Alumni Home Coming 2025, used by
│   │                                alumni/events.html — replaced wholesale in a later pass with the
│   │                                real event set from `New-Content-4/3. Alumni event 2025 to be
│   │                                replaced/` (previously 23 misc/incorrectly-sourced photos)
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
│   │   Federal Board of Intermediate & Secondary Education, Islamabad.png, British Council.png
│   │                       ← Real board-affiliation logos, used in each wing's "Affiliated Board" section.
│   │                            `British Council.png` (from `New-Content-4/`) replaced the original
│   │                            `British Council Logo.webp` on `wings/cambridge.html` in a later pass —
│   │                            the old .webp file is still on disk but no longer referenced anywhere.
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
│                               (9 hero photos, one per wing, numbered 1–9), copied into `Images/Banners/` and
│                               `Images/Banners/Wings/` with clean filenames — see File Structure above. Also
│                               contains `3. Alumni event 2025 to be replaced/` (14 real photos + a
│                               `CONTENT.docx` confirming they're the 01 Feb 2025 Alumni Home Coming —
│                               actioned: replaced all 23 old `Images/Alumni/Events/Home-Coming/*` photos
│                               with these 14, renamed `1.jpg`–`14.jpg`), `4. Facilities/`
│                               (10 subfolders — `01. LABORATORIES/` split into Junior/Middle/Primary/`SSC & HSSC
│                               Labs` subfolders, plus Libraries/Auditorium/Medical/Cafeteria/Sports/Solar
│                               System/Electric Cart/CCTV/Parkings — source for the wing-page Facilities +
│                               Laboratories rebuild, see "Wing Pages" section below; copied into
│                               `Images/Facilities/Wings/` and `Images/Facilities/Wings/Labs/`), `5.Summer Camp/`
│                               (not yet actioned), a standalone `Board of Secondary Education Karachi.jpg` (a
│                               duplicate of the already-committed `Images/Board of Secondary Education
│                               Karachi.png` — the existing PNG was reused instead of re-copying this one), an
│                               updated `GUIDELINES` docx (actioned — see the Academics sub-pages bullet under
│                               "Hub + Sub-Page Pattern" for `guidelines.html`/`uniform.html`/`college-timings.html`),
│                               and a `To-Do.pdf`. Untracked, same convention as New-Content-2/ and New-Content-3/.
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

`admissions.html` is built around a single **"Admission Details by Wing"** accordion (`.guidelines-accordion`, same `<details>`/`<summary>` component as `academics/guidelines.html`) with exactly 6 items — **Junior Wing, Primary Wing, Middle Wing, Secondary Wing — SSC, Higher Secondary Wing — HSSC, Cambridge Wing**. In a later pass this was deliberately stripped back down to use **only** the content in `New-Content-3/ADMISSION SUMMARY.docx` — a prior version had accumulated extra "How to Apply" steps, a "Documents Required" checklist and "Important" callout boxes per wing that were **not** sourced from that doc; all of that was removed. Each accordion item's body (`.adm-detail-body`) now has exactly this shape, don't add more:
- An `.adm-wing-meta` line at the top with two badges — **Classes** and **Shift** (plain text, not a table).
- A **3-column** `.adm-detail-grid.adm-detail-grid--three` (stacks to 1 column ≤860px) with exactly three `.adm-detail-block` cards: **Admission Announcement**, **Eligibility Criteria**, **Entrance Test**. `.adm-detail-block` is styled as an actual visual card (off-white background, gold top border, box-shadow) — a later pass added this; it started as unstyled plain text blocks with no visual card treatment.
  - **Entrance Test**'s per-group/per-class subject breakdown (e.g. HSSC's Pre-Medical/Pre-Engineering/Computer Science/Humanities/Commerce groups) renders as a real `<table class="adm-detail-table">` inside `.adm-detail-table-wrap` — matching the nested tables actually present inside the corresponding cells of `ADMISSION SUMMARY.docx`. Junior, Secondary (SSC), HSSC and Cambridge Wing are the 4 items with a subject table; Primary and Middle just have a one-line `.adm-detail-text` since their docx cells aren't tabular. An `.adm-detail-aside` line follows for footnotes where present (e.g. "Humanities group is offered to girls in the morning shift only").
  - **Admission Announcement** and **Eligibility Criteria** render as an `.adm-detail-list` `<ul>` whenever the source docx cell has more than one paragraph (each Word paragraph → one `<li>`) — e.g. Junior's Eligibility is genuinely two separate lines in the docx ("Age requirement" / "Qualifying of Entrance Test"), not one sentence. Only cells that are a single paragraph in the docx (e.g. Primary's/Middle's/HSSC's Announcement) render as a single `.adm-detail-text` `<p>`. An earlier pass merged every cell's paragraphs into one run-on sentence regardless of how many distinct lines the docx actually had — this read as "content not correctly copied" (Junior's Eligibility looked like it was missing something) and was corrected. When re-deriving this content, always check `cell.paragraphs` (not just `cell.text`) to get the real paragraph count before deciding `<ul>` vs `<p>`.

The old `.adm-detail-steps`, `.adm-docs__list`/`.adm-doc-item` and `.adm-detail-callout` CSS components are no longer used anywhere on the site (dead CSS, left in `style.css` — safe to remove if you're doing cleanup, but not load-bearing for anything currently rendered).

Key facts, straight from `ADMISSION SUMMARY.docx`'s single 7-row table (columns: Description/Classes/Announcement/Eligibility/Entrance Test, with a nested subject-breakdown table inside several Entrance Test cells):
- **Junior:** Montessori Beginners, Advance & Prep — Morning only. Beginners announced Dec–Jan; Advance/Prep seat-availability only.
- **Primary:** I–V — Morning only. Min 60% previous class + 60%/subject entrance test (English, Urdu, Math).
- **Middle:** VI–VIII — Both shifts. Afternoon announced Feb–Mar. Same 60%/60% pattern; test adds General Science.
- **Secondary (SSC):** IX–X — Both shifts, Federal & Karachi Boards. Afternoon announced Feb–Mar; Morning is seat-availability only. Entrance test groups: Biology, Computer, Humanities (girls, morning shift only).
- **HSSC:** XI–XII — Both shifts, Federal & Karachi Boards. Announced Apr–May. Min 65% SSC-I / 70% O-Level to apply; merit = 60% Class IX + 40% entrance test; provisional until 65% SSC / 70% O-Level confirmed result. Entrance test groups: Pre-Engineering, Pre-Medical, Computer Science, Humanities (girls only), Commerce (boys, Karachi Board morning shift only).
- **Cambridge:** Pre-O Level, O-Level & A-Level — Morning only. Pre-O/A-Level are seat-availability only except A-Level intake, announced May–Jun. A-Level eligibility: min 1×A, 1×B, 1×C. Entrance test by class (Pre-O Level, SR-I/IX, SR-II/X); A-Level is by interview only, no written test.

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

- **Administration sub-pages** (`administration/*.html`): hero banner with the (renamed — see "Administration Department Names") department name, then a `.subpage-back` link, then a two-column `.dept-detail__grid` section (`align-items: start`) — left column (`.dept-detail__text`) holds the department's mini section-header (`.section-header.section-header--left` — a short label + one-line desc, e.g. "Executive Office") FOLLOWED by its body paragraphs (from `05. Administration.docx`), all in one column; right column is `.dept-detail__side` (`align-self: start`, so the photo column stays pinned to the top of the section rather than centering against a taller text column) with a real photo (`.dept-detail__photo`) and the department head's name/title. **The mini section-header used to sit full-width ABOVE the two-column grid** (so the photo column visually started level with the body paragraphs, disconnected from the heading above it) — a later pass moved it inside `.dept-detail__text`, as the first child, so it's part of the same left column as the paragraphs and the photo now aligns level with the heading instead. All 11 admin pages (including `board-coordinators.html`'s two-head `.dept-detail__side-group` variant) follow this shape identically — if you add a 12th department page, copy this same left-column-header-then-paragraphs structure, don't put the header outside the grid. The photo box uses `aspect-ratio: 1 / 1.2` (20% taller than a square) with `object-fit: cover` + `object-position: top` so the crop favours the top of the photo. `board-coordinators.html` has two heads (SSC & HSSC / CAIE) so its side column uses a `.dept-detail__side-group` wrapper (also `align-self: start`) holding two `.dept-detail__side` cards instead of one. **A prior pass tried "fixing" the photo's alignment** by pulling it flush to the top of its own `.dept-detail__side` box (`margin-top: -28px` cancelling the box's `padding: 28px`, plus `overflow: hidden` to clip the corners) — this was the WRONG fix and was reverted: the actual ask was for the **two columns** to start at the same height (already true via `align-items`/`align-self: start`), not for the photo to be flush against its own card's edge. `.dept-detail__side`/`.dept-detail__photo`/`.dept-detail__photo-placeholder` are back to plain uniform padding — don't reintroduce the negative-margin trick.
- **Academics sub-pages** (`academics/*.html`): content lifted directly from `04. Academics.docx`, reusing whatever CSS component fits (`.data-table` for tables, `.uniform-card`, `.clubs-tag`, etc.). Exception: `academics/guidelines.html` was later fully replaced with the far more comprehensive `GUIDELINES.docx` (from `New-Content-2/`) — Code of Conduct, Dress Code, ID Cards, House System, Disciplinary Measures, Awards & Recognition, etc. — using `.guidelines-accordion` throughout. It was re-synced against a newer `New-Content-4/GUIDELINES updated 27 JUl 26.docx` in a later pass — same structure/facts, verified against the newer doc, with the "College Routine & Gate Timings" item shrunk to a summary + link (its full table moved to the new `college-timings.html`), matching the existing Dress Code item's summary + link (to `uniform.html`) pattern. `academics/uniform.html`'s Summer/Winter Uniform cards were expanded in that same pass to match the docx's actual per-class-group breakdown (Girls Advance & Prep / I–V / VI–XII, Boys Advance & Prep / I & Above) instead of the older, coarser Beginners-to-V / VI-to-XII / Boys grouping — don't collapse it back down.
- **Facilities sub-pages** (`facilities/*.html`): content from `06. Facilities.docx` using `.fac-page-card`/`.fac-page-grid`. The per-facility photo gallery section (`.facility-gallery__grid` placeholder tiles) was removed site-wide — these pages now end with the facility content itself, no gallery placeholder. `facilities/labs.html` was restructured in a later pass from one flat 6-card grid (with wrong/reused placeholder images) into **three labelled groups**, each its own `.fac-page-grid` under an `.section-subheading`: "Intermediate & Secondary Level Labs" (5 cards: Botany/Chemistry/Physics/Zoology/Computer, reusing the same `Images/Facilities/Wings/Labs/HSSC - *` photos as the wing pages), "Middle Level Labs" (2 cards) and "Primary Level Labs" (2 cards) — reusing the wing pages' own lab photo set rather than sourcing separate images, since they're the same real rooms. `facilities/library.html`'s Primary & Middle Wing library photo and `facilities/auditorium.html`'s Hall/New-Auditorium photos were swapped from generic placeholder images (`Bahria College Main Building.JPG`, `Drone View.JPG`, a duplicated `Library.JPG`) to real photos from `New-Content-4/4. Facilities/` (`Images/Facilities/Library Primary and Middle.JPG`, `Auditorium Hall.jpeg`, `Auditorium New.jpeg`) — `facilities/library.html`'s Main Campus photo was deliberately left untouched (only the Primary/Middle one was in scope). **`.fac-page-card__img` box-model gotcha:** the class is applied to a `<div>` wrapper around the `<img>` (not the `<img>` itself) on every facilities sub-page, but the CSS used to put `aspect-ratio`/`object-fit` directly on `.fac-page-card__img` — `object-fit` has no effect on a `<div>` (only on replaced elements like `<img>`), so every card's image rendered at its own native aspect ratio instead of a uniform height; most visible on `facilities/labs.html` once its photos came from varied real camera sources. Fixed site-wide by moving `width/height: 100%; object-fit: cover` onto `.fac-page-card__img img` and keeping only `aspect-ratio`/`overflow: hidden` on the wrapper `div` — this fixed every facilities sub-page using this component, not just Labs.

Every facilities sub-page's bottom CTA ("Experience BCKz") originally read "Take a virtual campus tour to explore our world-class facilities." — this was changed sitewide (all 10 `facilities/*.html` sub-pages plus the `facilities.html` hub) to "Explore our world-class facilities.", since the phrase overstated a tour feature these pages don't actually offer. `gallery.html`'s own separate "Take a Virtual Campus Tour" CTA (with the `#tourBtn` lightbox trigger) was removed entirely in the same pass and replaced with the site's standard generic bottom CTA (Admissions/Contact Us) — `facilities.html` is now the only page with a working `#tourBtn` lightbox trigger.
- **Achievements sub-pages** (`achievements/*.html`): `achievements.html` card-links all 7 top-level siblings directly — a normal flat hub, same pattern as every other section. See "Achievements IA" below for the one exception (`board-results-summary.html`'s own 3-item submenu).
- **Alumni sub-pages** (`alumni/*.html`): `welcome.html`, `success-stories.html` (alumni cards + modal — `alumni/success-stories.html` is the only alumni sub-page that includes the `.alumni-modal` markup), `where-alumni-excel.html`, `events.html` (photo record of past alumni reunions — reuses `gallery.html`'s `.gallery-grid`/`.gallery-item` classes, no filter buttons or lightbox; the Home Coming 2025 gallery uses `Images/Alumni/Events/Home-Coming/1.jpg`–`14.jpg`, the real event photos from `New-Content-4/3. Alumni event 2025 to be replaced/` — the Get-Together 2017 gallery is untouched), `stay-connected.html` (its "Connect With Us" list of `.governance__callout` cards must sit inside `.stay-connected__list` — a plain flex column — NOT `.governance__inner`, which is a 2-column CSS grid built for the About Us page; wrapping 5 stacked cards in a 2-column grid auto-placed them into a zigzag instead of a vertical list, which is what "disoriented" the Email/Instagram/Facebook/WhatsApp/Alumni-Department cards in a prior version — if this page's cards ever look misaligned again, check the wrapper class before touching the cards themselves), `give-back.html` (donation/sponsorship form, renamed from `give-away.html`; real bank details now filled in — Account Number `10119921`, IBAN `PK85 UNIL 0112 0620 1011 9921`, United Bank Limited (Ameen), Karsaz Branch code 0620, Karachi).
- Every sub-page includes a `.subpage-back` link ("← Back to Administration/Academics/Facilities/Achievements/Alumni") right under the hero, pointing at the hub page. `achievements/hssc-results.html`/`ssc-results.html`/`caie-results.html` are the one exception — nested one level deeper, their back-link/breadcrumb points to `board-results-summary.html` ("Back to Summary of Board Results") instead of straight to `achievements.html`.

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

## Achievements IA

The 3-level nested structure this section used to have (`achievements/overview.html` "Achievements at a Glance" as a second-level hub, plus a separate `achievements/medals.html` "Award of Medals") was **deliberately removed** in a later pass — both pages are deleted, don't recreate them. `achievements.html` is now a normal single-level hub, matching every other section's Hub + Sub-Page pattern, with a flat 7-item navbar dropdown (site-wide, on every page):

- `international-level.html`, `national-level.html`, `provincial-level.html`, `intercollegiate-level.html` — **no real data exists yet**; these are placeholder shells (`.dept-detail__photo-placeholder`-style "Content Coming Soon" block). Don't invent achievement claims for these — wait for real data.
- `best-bahria-college.html`, `position-holders.html` — breadcrumb + `.subpage-back` point directly at `achievements.html` (no intermediate crumb).
- `board-results-summary.html` — the **only** item with its own one-level submenu flyout now (`<li class="has-submenu">` + `.submenu`, the same CSS/JS mechanism `.has-submenu` used for the old `overview.html` entry — `.has-submenu`/`.submenu` in `css/style.css`, plus the `.has-submenu` mobile-accordion branch in `initDropdownMobile()` in `js/main.js`; every other dropdown site-wide is still single-level `.has-dropdown`/`.dropdown`). It's a hub page card-linking its 3 children: `hssc-results.html`, `ssc-results.html`, `caie-results.html`.

**`hssc-results.html` / `ssc-results.html` / `caie-results.html`** each merge what used to be 2 separate pages (Federal Board + Karachi Board, or O-Level + A-Level) into one page with two `.section-subheading` blocks, reusing the same `.ach-table`/`.ach-table-wrap` and `.dept-detail__photo-placeholder` components as before — nothing about the underlying table markup changed, only the page-level grouping. This was done specifically so the navbar submenu stays at exactly 3 items (HSSC/SSC/CAIE) instead of the old 3-level Federal/Karachi nesting. Facts, unchanged: `hssc-results.html` is filtered from the same 131-row position-holders dataset (130 Karachi-HSSC rows, 1 Federal-HSSC row); `ssc-results.html` has **zero real rows for either board** — both halves are honest placeholders, not fabricated; `caie-results.html`'s O-Level half has run since 2013, its A-Level half is a placeholder (launched 2025, a 2-year qualification, so first results are expected ~2027 — don't fabricate interim results).

The medal-count icon summary and the derived Gold=10/Silver=9/Bronze=7 stat (counts of `.ach-table__pos--1`/`--2`/`--3` rows in `position-holders.html`, since CNS Gold = 1st, Chairman BOG = 2nd, President MC = 3rd) lived only on the now-deleted `overview.html` — it is **not** currently displayed anywhere on the site. If a similar summary strip is wanted again, it would need a new home (e.g. on `achievements.html` itself or a new page), not a resurrection of `overview.html`.

## Wing Pages — List of Faculty, Clubs & Societies, Facilities, CTA

Every `wings/*.html` page has a `.wing-faculty` section (`id="faculty"`, heading **"List of Faculty"** — renamed from "List of Teachers" in a later pass, text-only change, id/class unchanged) — a `.teacher-cards-grid` of `.teacher-card`s (Name / Qualification / Designation / Remarks, one card per teacher — **not a table**, converted from the original `.data-table` in a later pass), sourced from `LIST OF TEACHERS FOR WEBSITE.docx` (`New-Content-2/`). `wings/middle.html` has two card grids (Morning Shift + Afternoon Shift, since the source doc splits Middle Wing that way). **`wings/girls-afternoon.html` and `wings/secondary.html` have no faculty data in that docx** — they show a "Faculty list for this wing will be published soon" placeholder instead; don't invent names or duplicate another wing's list into them. When new teacher data arrives for those two wings, follow the same `.teacher-cards-grid` structure as the other wings' `.wing-faculty` sections.

Wings with club data available in `academics/clubs.html`'s `.clubs-wing-block`s (Boys Wing, Girls Wing — shared across morning/afternoon shifts, Cambridge, Middle, Primary) also have a `.wing-clubs-tags` section reusing that same club list verbatim (`.clubs-tag-list`/`.clubs-tag`, pills center-aligned via `justify-content: center` — a later pass, applies everywhere `.clubs-tag-list` is used including `academics/clubs.html`), titled "Clubs & Societies at [Wing Name]". **Section order is Clubs & Societies *then* Facilities, then the CTA** (Clubs was moved above Facilities in a later pass, on the 6 wing pages that have both sections: boys-morning, girls-morning, boys-afternoon, girls-afternoon, middle, primary) — don't revert the order back to Facilities-then-Clubs. **Secondary and Junior Wings have no club data** — don't invent one. `boys-morning.html`/`boys-afternoon.html` had an older generic 3-card `.wing-clubs` section (Sports/IT/Science Club, not sourced from real per-wing data) that was removed in favor of the authoritative `.wing-clubs-tags` section — don't reintroduce it.

Boys/Girls Morning & Afternoon, Secondary and Cambridge Wing have an "Affiliated Board" section (`.wing-boards`) between the Programmes and List of Faculty sections — Cambridge's is its own dedicated "British Council Affiliation" instance of the same `.wing-boards` class, showing the real British Council logo. **Middle, Primary and Junior Wings have no Affiliated Board section at all** (not examination-board-affiliated levels) — don't add one. Boys/Girls Morning show all **three** logos — FBISE Islamabad, BIEK Karachi, and (added in a later pass) BSEK Karachi (`Images/Board of Secondary Education Karachi.png`, the same asset Secondary Wing uses — a `New-Content-4` duplicate of this file was supplied but the already-committed PNG was reused instead) — with heading/body copy naming all three boards. Boys/Girls Afternoon still show only FBISE + BIEK (unchanged, HSSC-only wings). Secondary Wing still shows FBISE + BSEK only. `.wing-boards__logo` is a fixed 140×140px box (`object-fit: contain`, white background) so every board logo — regardless of native aspect ratio or file type (PNG/SVG/WEBP) — renders at the same visual size; don't go back to the old `width: 100%; max-width: 180px` rule, which let wide/narrow logos display at different apparent sizes.

**Facilities are now split into two sections per wing**, both reusing the `.wing-fac-grid`/`.wing-fac-item` component: "State-of-the-Art Facilities" (`.wing-facilities`, off-white bg) uses one **uniform, identical 9-card set on every wing** — Library, Auditorium & Multipurpose Hall, Medical Facility, Sports Facilities, Cafeteria & Canteens, Solar System, Electric Cart, CCTV Coverage, Parking (images in `Images/Facilities/Wings/`) — no lab cards belong here anymore. Immediately after it, a **"Laboratories" section** (`.wing-labs`, white bg, its own `<section>` with the same section-header/grid pattern) holds wing-specific lab photos from `Images/Facilities/Wings/Labs/`: Boys/Girls Morning & Afternoon, Secondary, and Cambridge all share the same 5-card **"SSC & HSSC Labs"** set (Botany/Chemistry/Physics/Zoology/Computer Laboratory); Middle Wing gets its own 2-card set (Computer Lab, Social Science Lab); Primary Wing gets its own 2-card set (Computer Lab, Art Room); **Junior Wing's section is titled "Activity Rooms" instead of "Laboratories"** (2-card set: Activity Room, Classroom) since it's a Montessori/early-childhood wing with no real laboratories. Cambridge Wing previously had **no Facilities section at all** — both the uniform Facilities section and its Laboratories section were newly added there, not just re-imaged.

Every wing page's final CTA (`.wing-cta`, right before the footer) is just a heading ("Ready to Join [Wing Name]?") + generic supportive sub-line + two buttons (Admissions, Contact Us). It intentionally does **not** claim live/rolling admissions ("Session 2026", "Limited seats available…") — this college's admissions are seasonal per class, not always-open; don't reintroduce that copy.

### Message from the Vice Principal

The VP section's `.wing-vp__photo-col` (left column) now holds the photo **plus** the `.wing-vp__name`/`.wing-vp__designation` lines directly underneath it (centered); the right `.wing-vp__text-col` holds only the section header and the message paragraphs. Don't move the name/designation back into the text column. The photo column (`.wing-vp__inner` grid-template-columns) was widened from `240px` to `480px` in one pass, then explicitly set back down to `360px` in a later pass (the site owner's final call on photo width) — `360px` is current, don't "fix" it back to `480px`. Mobile `.wing-vp__photo` max-width matches at `360px` (was `180px` originally).

### Admissions CTA convention (site-wide)

Every page's final "Apply for Admission" button — both the `.btn--gold` and `.btn--outline-white` variants, wherever they appear as the CTA-strip/wing-cta admissions link — was normalized in a later pass to display text **"Admissions"** and link to the **absolute URL** `https://bckz-web.vercel.app/admissions.html`, not a relative `admissions.html`/`../admissions.html` path. This is intentionally different from every other internal link on the site (navbar dropdowns, footer Quick Links, breadcrumbs), which all correctly stay relative — **only this specific bottom-of-page CTA button uses the absolute production URL.** Don't "fix" it back to relative, and don't apply the absolute-URL treatment to any other link.

## JS Architecture (`js/main.js`)

- `initNavbar()` — sticky scroll, mobile toggle, active link
- `initLightbox()` — YouTube lightbox for Virtual Campus Tour button (`#tourBtn`). Only `facilities.html` has a working trigger now — `gallery.html`'s `#tourBtn` was removed in a later pass (see "Facilities sub-pages" note above); the guard clause `if (!tourBtn || !lightbox) return;` means the still-present lightbox markup on other pages is inert, not broken.
- `initNewsModal()` — popup modal for news ticker items and news cards (`NEWS_DATA` array at top of file)
- `initAlumniModal()` — "Full Story" popup for Alumni page cards (`ALUMNI_DATA` array at top of file; buttons are `.alumni-card__btn[data-alumni="N"]`, index into the array)
- `initNewsSlider()` — homepage News & Events horizontal slider (prev/next buttons, `#newsSlider`)
- `initGalleryFilter()` — category filter buttons on `gallery.html` (`.gallery-filter__btn`, `data-category` on `.gallery-item`)
- `initScrollAnimations()` — IntersectionObserver fade-in for `.animate-on-scroll` elements
- `initDropdownMobile()` — touch-friendly dropdown toggle on mobile; also handles the `.has-submenu`/`.submenu` second-level flyout (currently only used by `achievements/board-results-summary.html`'s navbar entry — see "Achievements IA")
- `initVisitCounter()` — `#visitCounter` span; fetches a hit count from the free `api.countapi.xyz` service (namespace `bckz-website-karsaz`) and adds it to a `BASE_COUNT` of 227,477, so the number increments per real page load. Fails silently (leaves the static fallback in place) if the third-party API is unreachable — there's no real backend, so this is the best available approximation of a "real" site-wide visit counter on a static site. It now lives inside `.footer__counter` (`css/style.css`) in the footer's "Get In Touch" column. In a later pass it was redesigned as a digital "odometer" — `initVisitCounter()` no longer sets `el.textContent` directly; it calls an internal `renderDigits()` helper (on load with the static `BASE_COUNT`, then again once the fetch resolves) that splits the formatted number into characters and wraps each digit in its own `<span class="footer__counter-digit">` box (boxed, `tabular-nums`, gold-on-dark) while commas render as plain `.footer__counter-sep` spacers between boxes. If you need to change the displayed format, edit `renderDigits()`, not `el.textContent` — writing plain text back into `#visitCounter` would lose the digit-box markup. It used to be a small pill (`.footer__visits`) centered under the copyright line in `.footer__bottom`; that pill and its dedicated CSS specificity workaround (see the CSS specificity gotcha above) were removed when the counter moved — `.footer__bottom` now holds only the copyright `<p>`.

To add news items, append to the `NEWS_DATA` array in `main.js`, add a matching `<button class="hero__ticker-item" data-news="N">` in the ticker, and add a card to both the homepage slider and `news.html`'s full listing (`news-grid--static`).

## Content Source of Truth

`New-Content/` holds the first batch of official Word docs (Home, About Us, Wings, Academics, Administration, Facilities, plus a site-outline doc). `New-Content-2/` holds a second batch (`Achievements/BOARD POSITIONS.docx`, `Achievements/CAIE RESULTS OVERALL.docx`, `Alumni/Welcome to the Alumni Network.docx`, `Alumni/Give Away Form.docx`, `Alumni/Alumni Details.docx` + 9 alumni photos, `GUIDELINES.docx`, `H.  Contact Us.docx`, `LIST OF TEACHERS FOR WEBSITE.docx`). `New-Content-3/` holds a third batch — see the File Structure entry above for its contents (admission details, real enrollment figures, round-2 admin photos, board logos, footer/principal images). All three are the canonical source for factual content — founding years, programmes, department descriptions, board results, faculty names, enrollment figures, etc. `*.docx`/`*.pdf` are gitignored, and by convention none of `New-Content/`, `New-Content-2/`, or `New-Content-3/` is pushed to the repo at all (see File Structure above). When asked to update content, check these docs first rather than guessing; when the current site conflicts with the docs, the docs win unless the user says otherwise (established convention from a prior session).

`.docx` files can't be read directly — convert with `python-docx` (`/c/Python314/python`, not the WindowsApps `python3` shim, which lacks the package) to extract paragraphs and tables; watch for `UnicodeEncodeError` on checkbox/bullet glyphs when printing to the Windows console (redirect to a file or set `PYTHONIOENCODING=utf-8`).

## Page Build Status

All pages are built out with real content; large sections were reworked to match `New-Content/` in a subsequent pass (About Us Core Values/Governance, all 9 Wings' facts, Academics Fee/Timings/Uniform/Calendar/Clubs/Guidelines/Summer Camp, Administration's departments, Facilities' 10 categories, Admissions' detailed per-wing tables). Academics, Administration, and Facilities were subsequently split into hub + sub-page structures — see "Hub + Sub-Page Pattern" above. Administration later gained an 11th department, Principal's Secretariat. A further pass using `New-Content-2/` added the full Board Position Holders/CAIE tables on Achievements, the Alumni Welcome copy/Success Story cards/Give Away form, per-wing teacher lists, the Contact Us extension directory, and a full rewrite of the Guidelines sub-page.

A later editorial + restructuring pass: removed duplicate hero/first-section headings and trailing full stops under hero subtitles site-wide, dropped the comma before "and" throughout, added hero background photos to every banner that lacked one, converted wing faculty tables to `.teacher-card` grids, added per-wing Clubs & Societies sections, removed the `academics/programmes.html` "Explore Programmes" page, rewrote the Admissions intro copy, dropped the Fee Structure page's College Timings table, added a footer visit counter and updated WhatsApp/Virtual Library links site-wide, renamed Alumni's "Give Away" to "Give Back" (with a file rename), and restructured Achievements into the nested "Achievements at a Glance" hierarchy that a later pass subsequently removed entirely (see "Achievements IA" below).

A `New-Content-3/`-driven pass: corrected several wing-card facts (Boys/Girls Afternoon classes to XI–XII, Secondary Wing renamed "(Afternoon)" everywhere, Cambridge Wing's shift list), swapped in real board-affiliation logos and a new Secondary Wing "Affiliated Board" section, standardized every wing's "Wing at a Glance" card down to Classes/Students/Established only, reordered Clubs & Societies above Facilities on the 6 wing pages that have both, replaced all "700+/900+ Students" placeholders with real per-wing enrollment figures (6,445 total), renamed all Administration department display names to a consistent "___ Department" scheme (see "Administration Department Names"), swapped in 10 of 11 department-head photos, restructured `admissions.html` into the per-wing accordion described in "Admissions (Session 2026)" with a richer labeled-block/callout body layout, swapped the footer logo for a white variant, and reworked the Administration department-photo column (top-aligned, 20% taller box, top-cropped image).

A `New-Content-4/`-driven editorial + design pass: replaced the mailto Email icon in the utility bar with a "Follow Us:" label site-wide; widened the homepage Principal's Message photo column (340px → 460px, aspect-ratio 3/4 → 4/3.6); added a `?` to the homepage "Why Choose Bahria College Karsaz" heading, dropped a redundant "the" from the hero subtitle, and rewrote the Academic Excellence feature-card copy; rounded every previously-exact enrollment/faculty figure sitewide down to the nearest hundred/ten with a trailing "+" (see the Wings table note above) — the underlying real figures are unchanged and still recorded in `New-Content-3/STATET OF STUDENTS - 21 JUL 26.docx`; gave each of the 5 hub pages (About Us already had one) and all 9 wing pages a dedicated real hero photo from `New-Content-4/` instead of the shared generic `--building`/`--campus`/placeholder backgrounds; and redesigned the footer — swapped the plain white-logo image for `Images/BCKz Logo.png` in a white `.footer__logo-wrap` box, and moved the visit counter out of the small `.footer__bottom` pill into a large `.footer__counter` block inside the "Get In Touch" column.

A second `New-Content-4/`-driven pass, focused on the Wings section and site-wide admissions CTAs: widened the homepage Principal's Message photo further still (460px → 550px, aspect-ratio changed to the photo's exact natural ratio `1142/1600` so the full portrait shows with no cropping — see "Key Content Facts" note above, supersedes the previous pass's 4/3.6 figure); redesigned the footer visit counter as a boxed digital odometer (see `initVisitCounter()` note above); normalized every "Apply for Admission" CTA button sitewide to read "Admissions" and link to the absolute `https://bckz-web.vercel.app/admissions.html` (see "Admissions CTA convention" under "Wing Pages" above); reworded `wings.html`'s intro sub-line; increased every wing hero banner's height by 150px (340px → 490px, via a shared rule targeting all `.page-hero--wing-*` classes); restructured every wing's "Message from the Vice Principal" section (name/designation moved under the photo, photo column doubled in width) and renamed "List of Teachers" to "List of Faculty"; centered the Clubs & Societies pills; added a third affiliated-board logo (BSEK) plus updated copy for Boys/Girls Morning, and normalized every wing's board-logo sizing to a fixed 140×140px box; split each wing's Facilities section into a uniform "State-of-the-Art Facilities" (no labs) plus a new, wing-specific "Laboratories"/"Activity Rooms" section (added a Facilities section to Cambridge Wing for the first time, since it previously had none); and added a "Pre-O'Level Classes" card to Cambridge Wing's Programmes Offered.

A third pass, spanning Academics/Administration/Facilities: rebuilt `admissions.html` down to only the fields present in `ADMISSION SUMMARY.docx` (see "Admissions (Session 2026)" above — dropped the previously-added How to Apply/Documents/Important content); added `academics/college-timings.html` (nav-positioned after Uniform) and extracted the daily schedule + gate timings out of `academics/guidelines.html` into it; renamed "Student & Parent Guidelines" to "Guidelines for Students and Parents" everywhere (nav dropdowns on every page, the hub card, and the page's own title/H1/breadcrumb); re-synced `academics/guidelines.html` and expanded `academics/uniform.html`'s Summer/Winter Uniform cards against `New-Content-4/GUIDELINES updated 27 JUl 26.docx`; replaced the Summer Camp page's intro copy and added an "IT Courses Offered" card above Sports Offered; attempted (then, in a later pass, reverted) a photo/text top-alignment fix on Administration department pages (see the Administration sub-pages bullet above); restructured `facilities/labs.html` into three labelled level-groups and swapped in real Library/Auditorium photos; and removed the redundant "Take a virtual campus tour" sub-line from `facilities.html`'s bottom CTA.

A fourth pass restructured Achievements and touched three Alumni pages: deleted `achievements/overview.html` and `achievements/medals.html`, flattened the Achievements navbar dropdown to 7 items site-wide (the old 3-level nesting collapsed to a single `.has-submenu` flyout under "Summary of Board Results" only — see "Achievements IA" above), merged the old Federal/Karachi-board and O-Level/A-Level page pairs into `hssc-results.html`/`ssc-results.html`/`caie-results.html`, rebuilt `achievements.html`'s hub card grid, and fixed the resulting dangling breadcrumbs on `best-bahria-college.html`/`position-holders.html`/the 4 placeholder level pages; replaced `alumni/events.html`'s Home Coming 2025 photos with the real set from `New-Content-4/3. Alumni event 2025 to be replaced/`; filled in `alumni/give-back.html`'s real bank Account Number; and fixed `alumni/stay-connected.html`'s card layout (see the Alumni sub-pages bullet above for the `.governance__inner`-grid-vs-`.stay-connected__list`-flex root cause).

A fifth, corrective pass fixed several things the fourth pass got wrong or left rough: reverted the Administration photo-alignment "fix" back to plain padding (see Administration sub-pages bullet above — the real request was column-level alignment, already satisfied by `align-items: start`, not photo-flush-to-box-edge); reduced the Vice Principal photo column from `480px` back down to `360px` per the site owner's final call; swapped `wings/cambridge.html`'s British Council logo from `British Council Logo.webp` to the real `British Council.png` supplied in `New-Content-4/`; fixed the root `.fac-page-card__img` box-model bug that gave every facilities sub-page inconsistent card image heights (see Facilities sub-pages bullet above); extended the "Explore our world-class facilities." CTA-text fix to all 10 `facilities/*.html` sub-pages (not just the hub) and removed `gallery.html`'s Virtual Campus Tour CTA entirely; and rebuilt the Admissions accordion's Entrance Test content to render each wing's subject breakdown as a real `<table>` (matching the nested tables actually in `ADMISSION SUMMARY.docx`, not a bullet list) plus gave `.adm-detail-block` real visual card styling (background, gold top border, shadow) — see "Admissions (Session 2026)" above.

Known gaps / next work:
- Real PDF downloads on `downloads.html` when available.
- Faculty lists for `wings/girls-afternoon.html` and `wings/secondary.html` (not present in `LIST OF TEACHERS FOR WEBSITE.docx` — currently a "coming soon" placeholder instead of teacher cards).
- The generic placeholder email `info@bckz.edu.pk` is still used in the utility bar and footer on every page, but `contact.html` now shows the real addresses (`bahria_collegekarsaz@yahoo.com`, `bckzinfo@gmail.com`) from `H.  Contact Us.docx` — site-wide mailto links were intentionally left alone pending a decision on whether to update them everywhere.
- Real content for `achievements/international-level.html`, `national-level.html`, `provincial-level.html`, `intercollegiate-level.html` (all placeholder shells — no source data exists yet, don't fabricate achievement claims).
- Real position-holder data for `achievements/ssc-results.html` (both its Federal Board and Karachi Board halves are placeholders — the source table has zero SSC-level rows for either board).
- ~~Real bank account number for `alumni/give-back.html`~~ — resolved: Account Number `10119921`, IBAN `PK85 UNIL 0112 0620 1011 9921`, United Bank Limited (Ameen), Karsaz Branch (code 0620), Karachi.
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
- Site-wide navbar dropdowns are single-level (`.has-dropdown`/`.dropdown`) by convention — the one exception is `achievements/board-results-summary.html`'s entry, which uses `.has-submenu`/`.submenu` for a second-level flyout (see "Achievements IA"). Don't add further nesting levels without a strong reason; prefer the existing Hub + Sub-Page pattern (a hub page's own card grid) over deeper navbar flyouts.
- Don't fabricate factual claims (achievement records, headcounts, financial details) to fill a gap — use a clearly-labeled placeholder ("Content Coming Soon", "Number Coming Soon", etc., matching the existing `.dept-detail__photo-placeholder` convention) and list it under "Known gaps" instead.
- Displayed enrollment and faculty figures are rounded down to the nearest hundred (students) or ten (faculty) with a trailing "+" — never print an exact headcount like "812" or "42" in new copy; round it first (see the Wings table note under "Key Content Facts"). Exception: one-time historical figures (a wing's founding-year headcount) stay exact, since they're not describing current enrollment.
