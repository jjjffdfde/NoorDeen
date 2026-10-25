# ISLAMIC KNOWLEDGE PORTAL — DESIGN, UX & ACCESSIBILITY BASELINE
## Phase 8 of 10: Complete Website UX, UI, Content Presentation, Mobile Responsiveness, Search and Accessibility Audit

---

## 1. Executive Summary & Purpose

Phase 8 establishes a rigorous design system, visual polish, information architecture refinement, mobile touch optimization, search discoverability expansion, and WCAG 2.2 AA accessibility compliance across all 25 public pages of the Islamic Knowledge Portal.

This baseline audit assesses the actual state of the application following the completion of Phases 1 through 7 (Discovery, Information Architecture & Content System, Quran Integrity & Recitation, Seerah Monographs, Sahaba & Prophets Biographies, Islamic History & Timeline, and Practical Worship Education).

### Key Baseline Findings:
1. **Design Tokens & Palette**:
   - The design system uses an authentic classical Islamic palette: Deep Jade (`#176B5B`), Midnight Ink (`#142326`), Warm Ivory (`#F7F4EC`), Muted Brass (`#B58B50`), Brass Dark (`#8F6932`), and Soft Sage (`#E6EEE8`).
   - Contrast analysis reveals that Muted Brass (`#B58B50`) on Warm Ivory has a contrast ratio of **2.82:1**, which fails WCAG AA (< 4.5:1) when applied to body text. However, Brass Dark (`#8F6932`) achieves **4.51:1** (PASS AA), and Deep Jade achieves **5.81:1** (PASS AA). Dark mode achieves **16.10:1** for body text and **8.10:1** for gold accents.
2. **Reduced Motion Accessibility**:
   - `public/css/main.css` previously lacked a `@media (prefers-reduced-motion: reduce)` block, leaving users with vestibular disorders vulnerable to transition animations.
3. **Keyboard & Focus Management**:
   - The `:focus-visible` outline was configured with `var(--color-gold)`, resulting in insufficient focus contrast (2.82:1) on light surfaces.
   - The global search modal and language modal lacked modal accessibility semantics (`role="dialog"`, `aria-modal="true"`, `aria-label`), keyboard focus traps, and programmatic focus restoration upon closure.
4. **Search Discoverability Gap**:
   - `public/js/search.js` (`UniversalSearch`) comprehensively indexed 114 Surahs, 11 worship guides, offline verses, 22 Hadiths, 6 Kalimas, and 32 Duas, but **lacked index coverage** for the 25 Seerah chapters, 14 Sahaba biographies, 10 Prophetic narratives, and 12 Historical eras developed in Phases 4–6.
5. **Mobile Responsiveness & Touch Ergonomics**:
   - Navigation drawer and header buttons (`.btn-icon`, `.mobile-menu-btn`) measured 40×40px. While meeting the WCAG 2.2 AA minimum pointer target size of 24×24px (SC 2.5.8), mobile touch guidelines recommend a 44×44px touch area for comfortable thumb interaction.
   - Long-form monographs (Seerah, Prophets, Sahaba, History) stretched to full card widths on large desktop viewports without an optimal reading measure constraint (68ch–75ch).

---

## 2. Complete Page & Module Inventory

All 25 HTML endpoints in `public/` were audited for layout integrity, visual hierarchy, mobile viewport adaptability, and semantic structure:

| # | Route / File | Category | Content Scope | Desktop Width | Mobile (320px) Behavior | Focus / A11y Status |
|---|---|---|---|---|---|---|
| 1 | `index.html` | Portal Gateway | Hero, Daily Quran, Quick Access, Worship Hub, APK CTA | 1200px max | Stacks gracefully, no overflow | Passable; needs search trap |
| 2 | `quran.html` | Quran System | 114 Surahs, Study Mode, Dual-script, Audio, Tafsir | 1200px max | Reader adapts; font controls work | Passes; isolated translation mode |
| 3 | `hadith.html` | Hadith Library | 22 Kutub al-Sittah traditions, filters, commentary | 960px max | Card stack, filter pills scroll | High contrast; search responsive |
| 4 | `duas.html` | Supplications | 32 Daily/Prophetic Duas, copy tool, 15 categories | 960px max | Category buttons wrap cleanly | Passes; audio controls accessible |
| 5 | `seerah.html` | Prophetic Biography | 25 Chronological chapters, era filter, TOC | 1000px max | Sticky TOC collapses; cards stack | Heading hierarchy clear; line measure needs bound |
| 6 | `prophets.html` | Qisas al-Anbiya | 10 Major Prophetic monographs, Quranic verses | 1120px max | Monograph cards stack cleanly | Semantic tags present; quotes isolated |
| 7 | `sahaba.html` | Biographies | 14 Companions (Khulafa, Mothers, Asharah) | 1000px max | Bio cards responsive; tags clean | Clean layout; contrast validated |
| 8 | `history.html` | Islamic History | 12 Eras, 54-event timeline, 12 regions | 1120px max | View switcher adapts; timeline reflows | Timeline dots accessible; tables wrap |
| 9 | `salah-guide.html` | Worship Guide | 5 Daily prayers, step-by-step posture & audio | 960px max | Steps stack vertically; postures clear | Step order clear; Arabic isolated |
| 10 | `wudu-guide.html` | Purification | Wudu steps, Ghusl section, Tayammum method | 960px max | Sticky TOC adapts; illustrations stack | Bukhari/Muslim references visible |
| 11 | `janazah-guide.html` | Funeral Prayer | 4-Takbir guide, du'as, zero Ruku/Sujud rules | 900px max | Step cards stack cleanly | Clear distinction of madhhab differences |
| 12 | `eid-guide.html` | Eid Celebration | 6/12 Takbir Hanafi vs Shafi'i/Hanbali guide | 900px max | Comparison boxes wrap neatly | Madhhab tabs clear |
| 13 | `zakat-calculator.html` | Wealth Tool | Gold/Silver Nisab, asset breakdown, calculation | 1000px max | Inputs fit 320px; summary reactive | Form inputs labeled; live calculation |
| 14 | `prayer-times.html` | Astronomical Tool | Solar calculation, 5 methods, Fajr/Isha angles | 950px max | Daily table reflows; cards stack | Dynamic countdown accessible |
| 15 | `tasbih.html` | Dhikr Counter | Interactive bead counter, vibration, reset | 850px max | Dial fits 320px viewport | Button targets large (64px+) |
| 16 | `kalimas.html` | Six Kalimas | Arabic text, transliteration, English/Urdu | 900px max | Cards stack vertically | Arabic font rendering verified |
| 17 | `pillars.html` | Foundation | Arkan al-Islam 5 pillars overview | 900px max | Cards wrap neatly | Clear headings |
| 18 | `calendar.html` | Hijri Calendar | Umm al-Qura conversion, Islamic events | 900px max | Month grid fits 320px | Date controls accessible |
| 19 | `bookmarks.html` | User Progress | Saved ayahs, reading history, local storage | 900px max | List items stack | Empty state helpful |
| 20 | `download-app.html` | Android Center | APK v1.0.0 release, SHA-256 hash, QR code | 960px max | Direct button fits 320px | Hash copy button verified |
| 21 | `about.html` | Institutional | Mission, E-E-A-T, editorial methodology | 900px max | Prose layout | Clear readability |
| 22 | `contact.html` | Feedback | Contact channels, editorial corrections | 1000px max | Form fields fit 320px | Input labels connected |
| 23 | `sources.html` | Bibliography | Primary classical source catalog & editions | 900px max | Reference list | Scholarly editions cited |
| 24 | `privacy.html` | Legal & Privacy | Zero-tracking, GDPR, local-only storage | 900px max | Legal prose | Headings clear |
| 25 | `terms.html` | Terms of Use | Permitted educational use, attribution rules | 900px max | Legal prose | Headings clear |

---

## 3. Shared Component & Architectural Analysis

### 3.1 Global Header & Navigation
- **Desktop Navbar**:
  - Horizontal list of 24 navigation items organized via clean dropdowns (`Quran & Hadith`, `Biography & History`, `Worship & Tools`).
  - Search trigger button with keyboard shortcut badge (`Ctrl K`).
  - Language selection trigger (`🌐 English`).
  - Theme toggle button (`🌙` / `☀️`).
  - Mobile hamburger trigger button (`☰`).
- **Mobile Navigation Drawer**:
  - Off-canvas sidebar (`#mobile-drawer`) with semi-transparent overlay (`#mobile-drawer-overlay`).
  - Contains icons and translated titles for core pages.
  - Closes on backdrop click and via close button (`✕`).
  - Baseline limitation: did not automatically restore focus to `.mobile-menu-btn` upon closing.

### 3.2 Global Search Engine (`public/js/search.js` & `app.js`)
- Universal phonetic query normalizer handles Arabic harakat removal, prefix stripping, Urdu digraphs, and regional spelling variants (e.g. "yaseen", "rehman", "waqiah", "bakra").
- Baseline search modal opened with `Ctrl+K` or search button click.
- Baseline limitations:
  - Missing ARIA modal semantics: `role="dialog"`, `aria-modal="true"`, `aria-label="Global Islamic Search"`.
  - Missing focus trapping (pressing `Tab` leaked focus into background DOM).
  - Missing Escape key dismissal while inside modal input.
  - Search data lacked the 25 Seerah chapters, 14 Sahaba biographies, 10 Prophetic stories, and 12 Historical eras.

### 3.3 Typography & Readability Baseline
- Font families:
  - Latin text: `'Plus Jakarta Sans', 'Inter', -apple-system, sans-serif`.
  - Arabic text: `'Noto Naskh Arabic', 'Amiri', 'Traditional Arabic', serif`.
  - Urdu text: `'Noto Nastaliq Urdu', 'Jameel Noori Nastaleeq', 'Urdu Typesetting', serif`.
- Reading line-height:
  - English body: `1.6` to `1.85`.
  - Arabic verses: `2.0` to `2.4` with `font-size: 1.6rem`–`2.0rem`.
  - Urdu translations: `1.8` to `2.2`.
- Baseline gap: Long-form monograph articles (`seerah.html`, `prophets.html`, `history.html`) lacked a CSS class enforcing optimal line measure (`max-width: 72ch`), causing lines to stretch to 110+ characters on ultrawide monitors.

---

## 4. Accessibility (WCAG 2.2 AA) Baseline Audit

| WCAG 2.2 AA Criterion | Level | Baseline Status | Analysis & Required Action |
|---|---|---|---|
| **1.1.1 Non-text Content** | A | PASS | Decorative icons use text emojis or proper alt attributes. QR code on download page has alt text. |
| **1.3.1 Info and Relationships** | A | PASS | Semantic headings (`h1`–`h4`), `<article>`, `<section>`, `<nav>`, `<aside>` properly structured. |
| **1.4.3 Contrast (Minimum)** | AA | PARTIAL | Jade on Ivory (5.81:1) PASS. Text Muted (6.28:1) PASS. Brass text on Ivory (2.82:1) FAIL -> Restrict Brass text to `--color-brass-dark` (4.51:1 PASS). |
| **1.4.10 Reflow (320px)** | AA | PASS | Flexible grid, percentage widths, no horizontal scrolling on 320px viewports. |
| **1.4.11 Non-text Contrast** | AA | PARTIAL | Focus outline in gold had 2.82:1 contrast -> Switch to `--color-primary` (5.81:1) in light mode. |
| **2.1.1 Keyboard** | A | PASS | All interactive buttons, links, inputs, and selectors operate via keyboard. |
| **2.1.2 No Keyboard Trap** | A | PARTIAL | Search modal lacked Tab cycle trap; Tab could leave dialog while open -> Implement modal focus trap. |
| **2.3.3 Animation from Interactions** | AAA / AA | PARTIAL | Missing `@media (prefers-reduced-motion: reduce)` in `main.css` -> Implement zero duration override. |
| **2.4.3 Focus Order** | A | PASS | Natural DOM tab order preserved across all pages. |
| **2.4.7 Focus Visible** | AA | PASS | Visible outline provided on all interactive controls via `*:focus-visible`. |
| **2.5.8 Target Size (Minimum)** | AA | PASS | All controls meet 24×24px minimum. Mobile buttons enhanced to 44×44px for thumb accessibility. |
| **3.1.2 Language of Parts** | AA | PASS | Arabic passages use `class="font-arabic" lang="ar" dir="rtl"`. Urdu uses `class="font-urdu" lang="ur" dir="rtl"`. |
| **4.1.2 Name, Role, Value** | A | PARTIAL | Search modal and language modal missing `role="dialog"` and `aria-modal="true"`. |

---

## 5. Prioritized Implementation Roadmap for Phase 8

1. **Design Tokens & Contrast Fixes**:
   - Refine `:focus-visible` to use `--color-primary` (5.81:1 contrast) on light theme and `--color-gold` (8.10:1 contrast) on dark theme.
   - Enforce `--color-brass-dark` (`#8F6932`) for any brass-toned readable text to guarantee > 4.5:1 contrast.
   - Add `@media (prefers-reduced-motion: reduce)` to disable transitions and animations for users requesting reduced motion.
2. **Mobile Touch Ergonomics & Responsiveness**:
   - Upgrade `.btn-icon` and `.mobile-menu-btn` to `min-width: 44px; min-height: 44px;` on mobile breakpoints.
   - Ensure touch targets in search modal pills and quick links have comfortable padding.
3. **Typography & Article Reading Width**:
   - Add `.article-prose` / `.monograph-body` styles with `max-width: 72ch; margin: 0 auto; line-height: 1.8;` for enhanced long-form reading on desktop monitors.
4. **Global Search Architecture Expansion**:
   - Expand `UniversalSearch` dataset in `public/js/search.js` to include 25 Seerah chapters, 14 Sahaba biographies, 10 Prophetic stories, and 12 Historical eras.
   - Upgrade search modal with `role="dialog"`, `aria-modal="true"`, `aria-label="Global Islamic Search"`, Escape key handling, keyboard focus trapping, and focus restoration to the trigger button.
5. **Language & Drawer Modal Accessibility**:
   - Add `role="dialog"`, `aria-modal="true"`, focus trap, and Escape key handling to the language selector modal.
   - Ensure mobile navigation drawer properly returns focus when closed.
6. **Automated Verification**:
   - Author Test Suite 27/28 in `test/run-tests.js` to verify responsive tokens, touch targets, reduced motion support, search modal accessibility, expanded search indexing, and 320px reflow across all pages.
