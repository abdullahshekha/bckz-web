# Bahria College Karsaz — CLAUDE.md

## Project Overview

Static website for **Bahria College Karsaz (BCKz)**, a premier educational institution under Pakistan Navy. Deployed on Vercel via GitHub. No build tools, no frameworks — pure HTML + CSS + vanilla JS only.

## Tech Stack

- **HTML5** — semantic markup, one file per page
- **CSS3** — single stylesheet at `css/style.css`, BEM naming convention
- **Vanilla JS** — single script at `js/main.js`
- **Fonts** — Playfair Display (headings) + Roboto (body), loaded via Google Fonts in each HTML `<head>`
- **Hosting** — Vercel (static), connected via GitHub

## Design System

| Token | Value |
|-------|-------|
| Primary (Navy) | `#000080` |
| Accent (Gold) | `#C9A033` |
| Heading font | Playfair Display |
| Body font | Roboto |

## File Structure

```
BCKz/
├── index.html              ← Home page (complete)
├── about.html              ← About Us
├── wings.html              ← Wings overview
├── wings/
│   ├── boys-morning.html
│   ├── girls-morning.html
│   ├── boys-afternoon.html
│   ├── girls-afternoon.html
│   ├── cambridge.html
│   ├── middle.html
│   ├── primary.html
│   └── secondary.html
├── academics.html
├── admissions.html
├── administration.html
├── facilities.html
├── achievements.html
├── alumni.html
├── downloads.html
├── gallery.html
├── contact.html
├── css/
│   └── style.css           ← All styles (BEM)
├── js/
│   └── main.js             ← Navbar, lightbox, news modal, scroll animations
└── Images/
    ├── BCKz Logo.png
    ├── Navy Logo.png
    ├── Facilities/         ← Facility photos
    └── ...
```

## Key Content Facts

- **Principal:** Captain Muhammad Imran Khan PN, Principal, Bahria College Karsaz
- **Founded:** 1997 | **Campus:** 24 acres | **Students:** 3,000+ | **Faculty:** 200+
- **Awards:** 12× Best Bahria College
- **YouTube video ID:** `bFrxx4GZCA0` — used in hero background and Virtual Campus Tour lightbox

### Wings (8 total)

| Wing | Notes |
|------|-------|
| Boys Wing Morning | |
| Girls Wing Morning | |
| Boys Wing Afternoon | |
| Girls Wing Afternoon | |
| Cambridge Wing | O/A Level — since 2011 |
| Middle Wing | Classes VI–VIII — since 2017 |
| Primary Wing | Classes I–V |
| Secondary Wing | SSC / HSSC |

### Admissions (Session 2026)

- **Eligibility:** Min 65% in Matric; 70% for O-Level stream
- **Selection:** 60% Class IX % + 40% entrance test
- **Programmes:** HSSC Pre-Medical, Pre-Engineering, Computer Science, Commerce, Humanities; O-Level; A-Level

## Page Layout Pattern

Every page shares the same shell:

1. **Utility bar** — social icons (left) + quick links (right)
2. **Header/Navbar** — BCKz logo (left), nav links with dropdowns (centre), Pakistan Navy logo (right)
3. **Page content**
4. **Footer** (to be built)

The navbar scrolls sticky and adds a `scrolled` class via JS. The active `navbar__link` class must match the current page.

## JS Architecture (`js/main.js`)

- `initNavbar()` — sticky scroll, mobile toggle, active link
- `initLightbox()` — YouTube lightbox for Virtual Campus Tour button (`#tourBtn`)
- `initNewsModal()` — popup modal for news ticker items (`NEWS_DATA` array at top of file)
- `initScrollAnimations()` — IntersectionObserver fade-in for `.animate-on-scroll` elements
- `initDropdownMobile()` — touch-friendly dropdown toggle on mobile

To add news items, append to the `NEWS_DATA` array in `main.js` and add a matching `<button class="hero__ticker-item" data-news="N">` in the ticker.

## Page Build Order

Homepage ✅ → About Us → Wings (individual pages) → Academics → Admissions → Administration → Facilities → Achievements → Alumni → Downloads → Gallery → Contact

When continuing, always pick up with the **next unbuilt page** in this order.

## Rules

- Never use frameworks, npm packages, or build steps.
- Keep all styles in `css/style.css` — no inline styles on new elements.
- Keep all JS in `js/main.js` — no additional script files unless explicitly agreed.
- Copy the navbar and utility bar HTML exactly from `index.html` for every new page; update the `active` class on the correct `navbar__link`.
- Images go in `Images/` (or a relevant subfolder). Reference with relative paths.
- Google Fonts link must be the first `<link>` inside `<head>` on every page.
