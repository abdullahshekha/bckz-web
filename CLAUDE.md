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
│   ├── programmes.html      ← Explore Programmes + Affiliated Boards
│   ├── fees.html            ← Fee Structure + College Timings
│   ├── uniform.html
│   ├── scholarships.html
│   ├── calendar.html        ← Academic Calendar table
│   ├── clubs.html           ← Clubs & Societies by wing
│   ├── guidelines.html      ← Student & Parent Guidelines accordion
│   └── summer-camp.html
├── admissions.html
├── administration.html      ← Hub page: card grid linking to administration/*.html
├── administration/
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
├── achievements.html
├── alumni.html
├── downloads.html
├── gallery.html
├── contact.html
├── css/
│   └── style.css           ← All styles (BEM)
├── js/
│   └── main.js             ← Navbar, lightbox, news modal/slider, gallery filter, scroll animations
├── Images/
│   ├── BCKz Logo.png
│   ├── Navy Logo.png
│   ├── Facilities/         ← Facility photos
│   ├── VP/                 ← Named VP photos (e.g. "Imran Safdar.jpg", "Sadia Khanam.jpg")
│   └── ...
├── New-Content/             ← Source Word docs (canonical content reference) + reference photos.
│                               *.docx/*.pdf are gitignored — not pushed to the repo.
└── VP-Images/                ← Raw VP photo originals as supplied (not committed; copied/renamed into Images/VP/)
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

Student counts are only confirmed for Boys/Girls Morning & Afternoon (4 wings). The other 5 wing cards on `index.html`/`wings.html` show a "Contact for Details" placeholder — swap in real numbers when the user provides them.

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

## Hub + Sub-Page Pattern (Academics / Administration / Facilities)

`academics.html`, `administration.html`, and `facilities.html` are **hub pages** — they no longer hold full section content. Each shows a card grid (reusing `.admin-services__grid` / `.admin-service-card.card-link`) where every card links to a standalone sub-page in the matching directory. Don't reintroduce full inline content on these three hub pages — add a new sub-page instead and link to it from the hub's card grid.

- **Administration sub-pages** (`administration/*.html`): hero banner with the department name, then a two-column `.dept-detail__grid` section — left column is the department's text (from `05. Administration.docx`), right column is `.dept-detail__side` with a `.dept-detail__photo-placeholder` (no real photos yet) and a placeholder department-head name/title. Swap in a real photo + name when the user provides them.
- **Academics sub-pages** (`academics/*.html`): content lifted directly from `04. Academics.docx`, reusing whatever CSS component fits (`.data-table` for tables, `.uniform-card`, `.clubs-tag`, `.guidelines-accordion`, etc. — same classes the old inline sections used).
- **Facilities sub-pages** (`facilities/*.html`): content from `06. Facilities.docx` using `.fac-page-card`/`.fac-page-grid`, plus a dedicated `.facility-gallery__grid` placeholder section reserved for that facility's photos (currently `.facility-gallery__placeholder` tiles — swap in real images per facility when available, don't reuse one image across multiple facilities' galleries).
- Every sub-page includes a `.subpage-back` link ("← Back to Administration/Academics/Facilities") right under the hero, pointing at the hub page.

## JS Architecture (`js/main.js`)

- `initNavbar()` — sticky scroll, mobile toggle, active link
- `initLightbox()` — YouTube lightbox for Virtual Campus Tour button (`#tourBtn`, present on `gallery.html`/`facilities.html`)
- `initNewsModal()` — popup modal for news ticker items and news cards (`NEWS_DATA` array at top of file)
- `initNewsSlider()` — homepage News & Events horizontal slider (prev/next buttons, `#newsSlider`)
- `initGalleryFilter()` — category filter buttons on `gallery.html` (`.gallery-filter__btn`, `data-category` on `.gallery-item`)
- `initScrollAnimations()` — IntersectionObserver fade-in for `.animate-on-scroll` elements
- `initDropdownMobile()` — touch-friendly dropdown toggle on mobile

To add news items, append to the `NEWS_DATA` array in `main.js`, add a matching `<button class="hero__ticker-item" data-news="N">` in the ticker, and add a card to both the homepage slider and `news.html`'s full listing (`news-grid--static`).

## Content Source of Truth

`New-Content/` holds the official Word docs (Home, About Us, Wings, Academics, Administration, Facilities, plus a site-outline doc) that are the canonical source for factual content — founding years, programmes, admission criteria, department descriptions, etc. `*.docx`/`*.pdf` are gitignored (not pushed). When asked to update content, check these docs first rather than guessing; when the current site conflicts with the docs, the docs win unless the user says otherwise (established convention from a prior session).

## Page Build Status

All pages are built out with real content; large sections were reworked to match `New-Content/` in a subsequent pass (About Us Core Values/Governance, all 9 Wings' facts, Academics Fee/Timings/Uniform/Calendar/Clubs/Guidelines/Summer Camp, Administration's 10 departments, Facilities' 10 categories, Admissions' detailed per-wing tables). Academics, Administration, and Facilities were subsequently split into hub + sub-page structures — see "Hub + Sub-Page Pattern" above.

Known gaps / next work:
- Real student counts for Middle, Secondary, Cambridge, Primary, and Junior Wings (currently "Contact for Details" placeholders on the wing cards).
- Real PDF downloads on `downloads.html` when available.
- Department head photos/names on `administration/*.html` (currently `.dept-detail__photo-placeholder` + "Name Coming Soon").
- Real photos in the `.facility-gallery__grid` placeholder sections on `facilities/*.html`.

## Rules

- Never use frameworks, npm packages, or build steps.
- Keep all styles in `css/style.css` — no inline styles on new elements.
- Keep all JS in `js/main.js` — no additional script files unless explicitly agreed.
- Copy the navbar and utility bar HTML exactly from `index.html` for every new page; update the `active` class on the correct `navbar__link`.
- Images go in `Images/` (or a relevant subfolder). Reference with relative paths, and remember the CSS `url()` gotcha above.
- Google Fonts link must be the first `<link>` inside `<head>` on every page (kept for consistency even though currently unused by `--font`).
- When making the same mechanical edit across many pages (navbar dropdown, footer links, etc.), verify the exact existing string first and script the replacement — a partial/approximate match risks silently skipping files or creating duplicates (this has happened before: a careless replace target once matched both the navbar dropdown and the footer, producing a duplicate "Fee Structure" link in the navbar).
