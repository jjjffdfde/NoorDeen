# PHASE 11 INITIAL BASELINE REPORT
**Mobile Layout Stability, Navbar Protrusion & Horizontal Wobble Audit**
*Date: 2026-10-24 | Target Engine: Chromium Headless CDP Emulation (Android Pixel 7, 360×640)*

---

## 1. Executive Summary

At the start of Phase 11, automated empirical diagnostics using Google Chrome DevTools Protocol (CDP) under exact mobile emulation (`360×640` viewport, DPR `2.625`, Android 14 User-Agent) were conducted across all 25 public HTML routes of the Islamic Knowledge Portal (`E:\islamic websiye`).

The automated CDP test (`scripts/diagnose-all-pages-overflow.cjs`) confirmed a critical **100% failure rate** across all 25 pages regarding mobile viewport containment:
- **Baseline Viewport Width**: `360px`
- **Measured Document ScrollWidth (`document.documentElement.scrollWidth`)**: **`505px`** on 21 of 25 pages, and up to **`634px`** on 4 pages.
- **Measured Header Inner ScrollWidth (`.header-inner.scrollWidth`)**: **`505px`** on **all 25 pages**.
- **Mobile Hamburger Button Coordinate (`.mobile-menu-btn.getBoundingClientRect().right`)**: **`505px`**, pushed **145px completely off the visible screen** into an invisible, unreachable horizontal gutter.
- **Primary Root Cause**: Rigid flexbox inline layout in `.header-inner` and `.header-actions` with `nowrap`, unconstrained text widths in the logo, and an overflowing language selector pill.
- **Secondary Root Causes**: Hardcoded inline two-column CSS grids (`grid-template-columns: 1fr 1fr`), unconstrained decorative background SVGs (`.hero-mandala-bg`), and grid containers lacking `min-width: 0` / `minmax(0, 1fr)`.

---

## 2. Empirical 25-Page Baseline Measurement Table

All measurements were captured via native Chrome CDP DOM inspection at viewport `360 × 640 px`:

| Route | Page Title / Purpose | Document scrollWidth | Header scrollWidth | Hamburger Menu Right | Status | Observed Symptom |
|---|---|:---:|:---:|:---:|:---:|---|
| `/about.html` | About Platform | `505px` | `505px` | `505px` | **FAIL** | Horizontal sway, menu pushed off-screen |
| `/bookmarks.html` | User Bookmarks | `505px` | `505px` | `505px` | **FAIL** | Horizontal sway, menu pushed off-screen |
| `/calendar.html` | Hijri Calendar | `505px` | `505px` | `505px` | **FAIL** | Horizontal sway, menu pushed off-screen |
| `/contact.html` | Editorial Feedback | `571px` | `505px` | `505px` | **FAIL** | Menu off-screen; inline 2-col grid blowout |
| `/download-app.html` | Android Release & PWA | `505px` | `505px` | `505px` | **FAIL** | Horizontal sway, menu pushed off-screen |
| `/duas.html` | Daily Adhkar Library | `505px` | `505px` | `505px` | **FAIL** | Horizontal sway, menu pushed off-screen |
| `/eid-guide.html` | Eid Prayer Guide | `505px` | `505px` | `505px` | **FAIL** | Horizontal sway, menu pushed off-screen |
| `/hadith.html` | Canonical Hadith Browser | `505px` | `505px` | `505px` | **FAIL** | Horizontal sway, menu pushed off-screen |
| `/history.html` | Islamic History Archive | `505px` | `505px` | `505px` | **FAIL** | Horizontal sway, menu pushed off-screen |
| `/` (`index.html`) | Portal Home Dashboard | `505px` | `505px` | `505px` | **FAIL** | Menu off-screen; mandala SVG protrusion |
| `/janazah-guide.html` | Funeral Prayer Guide | `561px` | `505px` | `505px` | **FAIL** | Menu off-screen; editorial container overflow |
| `/kalimas.html` | Six Kalimas of Islam | `505px` | `505px` | `505px` | **FAIL** | Horizontal sway, menu pushed off-screen |
| `/pillars.html` | Five Pillars of Islam | `505px` | `505px` | `505px` | **FAIL** | Horizontal sway, menu pushed off-screen |
| `/prayer-times.html` | Solar Prayer Engine | `505px` | `505px` | `505px` | **FAIL** | Horizontal sway, menu pushed off-screen |
| `/privacy.html` | Privacy Policy | `505px` | `505px` | `505px` | **FAIL** | Horizontal sway, menu pushed off-screen |
| `/prophets.html` | Stories of the Prophets | `568px` | `505px` | `505px` | **FAIL** | Menu off-screen; badges pushed wide |
| `/quran.html` | Quran Reader & Audio | `505px` | `505px` | `505px` | **FAIL** | Horizontal sway, menu pushed off-screen |
| `/sahaba.html` | Companions Biographies | `505px` | `505px` | `505px` | **FAIL** | Horizontal sway, menu pushed off-screen |
| `/salah-guide.html` | Step-by-Step Salah Guide | `634px` | `505px` | `505px` | **FAIL** | Menu off-screen; rak'ah table & grid overflow |
| `/seerah.html` | Prophetic Seerah Library | `505px` | `505px` | `505px` | **FAIL** | Horizontal sway, menu pushed off-screen |
| `/sources.html` | Academic Provenance | `505px` | `505px` | `505px` | **FAIL** | Horizontal sway, menu pushed off-screen |
| `/tasbih.html` | Digital Tasbih Counter | `505px` | `505px` | `505px` | **FAIL** | Horizontal sway, menu pushed off-screen |
| `/terms.html` | Terms of Service | `505px` | `505px` | `505px` | **FAIL** | Horizontal sway, menu pushed off-screen |
| `/wudu-guide.html` | Step-by-Step Wudu Guide | `505px` | `505px` | `505px` | **FAIL** | Horizontal sway, menu pushed off-screen |
| `/zakat-calculator.html`| Zakat Engine | `505px` | `505px` | `505px` | **FAIL** | Horizontal sway, menu pushed off-screen |

---

## 3. Key Findings

1. **Every Page Suffers from Header Sizing Explosion**:
   Because `.site-header` is globally shared across all 25 pages, every page's horizontal boundary is instantly ruptured by the navbar before page content is even evaluated.
2. **The Bandage Approach (`overflow-x: hidden`) Masked Rather Than Solved The Defect**:
   Previous phases included a temporary rule `@media (max-width: 480px) { body { overflow-x: hidden; } }`. In practice:
   - On mobile touch screens, horizontal pan gestures still wobble and drag horizontally.
   - The `.mobile-menu-btn` at coordinate `x = 505px` was clipped and rendered **entirely unreachable** to touch taps on small viewports! Users could not open the navigation drawer unless they rotated to landscape.
3. **Four Pages Contain Independent Content Overflows**:
   - `contact.html`: Hardcoded `<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 32px;">` in main content forces two equal columns even at 360px.
   - `janazah-guide.html` and `salah-guide.html`: `.editorial-page-container` has `grid-template-columns: 1fr;` at $\le$ 1024px without `min-width: 0`, and the Rak'ah breakdown table forces a width of `620px`.
   - `prophets.html`: Top cohort filter and chronology badges flex across wide boundaries.
4. **Target Criteria for Phase 11 Resolution**:
   - `document.documentElement.scrollWidth === document.documentElement.clientWidth` across all 16 viewports (from 320px to 1920px).
   - `.mobile-menu-btn` positioned securely inside the visible screen (`getBoundingClientRect().right <= 360` with safe 12px right margin).
   - Zero horizontal scrollbar or gesture wobble on iOS Safari, Android Chrome, and Capacitor Android WebView.
