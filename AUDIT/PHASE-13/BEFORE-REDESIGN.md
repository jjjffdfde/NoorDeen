# PHASE 13 — BEFORE REDESIGN AUDIT & BASELINE VERIFICATION

**Audit Date:** October 24, 2026  
**Auditor:** Principal Software Architect, UI/UX Lead & Islamic Content Quality Auditor  
**Project Path:** `E:\islamic websiye`  
**Git Branch:** `master`  
**Current Test Status:** 931 / 931 Assertions Passing (Suite 1 through 30)  

---

## 1. Owner Dissatisfaction & Problem Statement

Despite previous phase audits certifying technical readiness and passing automated unit tests, the website owner has expressed genuine, valid dissatisfaction with the real product experience:

1. **Aesthetic Fragmentation & Visual Clutter:**  
   The homepage suffers from an overloaded mixture of competing design paradigms: a large decorative mandala SVG background, a gamified daily habit checklist with circular SVG progress rings, followed immediately by an asymmetrical "Bento grid", followed by a third grid of popular surahs, followed by reciter cards. It lacks the quiet, dignified, scholarly elegance expected of a world-class Islamic library.
2. **Superficial "40-Language" Experience:**  
   While 40 language codes are registered in `public/js/i18n.js`, the language selector was artificially restricted to only 3 choices (`en`, `ur`, `ar`). Furthermore, full translation dictionaries already exist for 11 languages (English, Urdu, Arabic, French, Indonesian, Turkish, Bengali, Hindi, Malay, Persian, Spanish), but were not exposed to visitors in the UI language modal.
3. **Language Architecture Deficit:**  
   The system lacked a strict separation between:
   - **UI Language:** Strings controlling menus, buttons, filters, and labels.
   - **Educational Content Language:** The language in which Seerah articles, Sahaba biographies, and worship guides are rendered.
   - **Quran Arabic Text:** Sacred, immutable original Hafs text with diacritics.
   - **Quran Translation Edition:** Independently selectable translation of the meanings with transparent translator attribution.
4. **Information Architecture Friction:**  
   The primary knowledge assets of the portal (25 Seerah chapters, 17 Prophetic stories, 14 Sahaba biographies, 12 Islamic history eras, and practical worship guides) were buried under tertiary widgets rather than being prominent, intuitive entry points.
5. **Lack of Honest Content Availability Status:**  
   For languages where complete educational translations are still in preparation, the interface did not clearly indicate whether an article was available in that language or displayed an honest fallback.

---

## 2. Source Code & Infrastructure Baseline

### A. Core File Inventory
- **25 Public HTML Pages:** All pages exist in `public/` and load via clean URL routes defined in `server.js`.
- **Primary Stylesheet:** `public/css/main.css` (57,029 bytes). Contains base palette, responsive tokens, mobile bottom navigation bar, and reset rules.
- **JavaScript Modules:**
  - `public/js/app.js` (38,162 bytes): Navigation, drawer, modals, search, offline banner, bookmarks.
  - `public/js/quran.js` (56,835 bytes): Quran reader, translation selector, audio engine, word-by-word study mode.
  - `public/js/data.js` (103,867 bytes): Canonical 114 Surahs, Hadith collections, Duas, Kalimas, historical timelines.
  - `public/js/search.js` (46,480 bytes): Universal phonetic search engine with regional aliases.
  - `public/js/i18n.js` (38,025 bytes): 40-language framework and translation dictionaries.
  - `public/js/tools.js` (4,753 bytes): Astronomical prayer times and Zakat calculations.
  - `public/js/config.js` (3,896 bytes): AdSense slot placeholders and cookie consent bar.

### B. Current Test Results
- Executed `node test/run-tests.js`.
- Total Tests: **931**
- Passed: **931**
- Failed: **0**
- Previous phases established functional correctness, but this does not equal premium aesthetic quality, long-form reading comfort, or transparent global localization.

---

## 3. Core Religious Data Integrity Constraints

In accordance with strict religious editorial guidelines:

> [!IMPORTANT]
> **The Immutable Arabic Standard:**  
> The original Arabic text of the Holy Quran (Tanzil Hafs 6,236 Ayahs), original Arabic Hadith narrations, and original Arabic Duas must NEVER be modified, translated, rewritten, normalized, truncated, or machine-altered when a user switches the interface or content language.  
> Only approved translation/meaning fields, explanatory notes, and UI strings may change.

---

## 4. Phase 13 Action Plan

1. **Refined Islamic Educational-Library Design System (`public/css/main.css`):**
   - Palette: Deep Emerald (`#0A3D24`), Warm Ivory (`#FBF9F4`), Restrained Gold (`#C59B27`), Charcoal Ink (`#1A2421`).
   - Clean, content-first typography with generous line heights and high-contrast readability.
   - Unified card, button, badge, and navigation components.
2. **Redesigned Homepage (`public/index.html`):**
   - Focused, dignified hero without distracting mandala clutter.
   - Clear 8-pillar Knowledge Gateway (Quran, Hadith, Seerah, Sahaba, Prophets, History, Worship, Duas).
   - Balanced Daily Foundations (Ayat/Hadith wisdom + Solar Observatory prayer countdown).
   - Clean, accessible footer with structured navigation.
3. **Four-Tier Localization Architecture (`public/js/i18n.js` & `public/js/app.js`):**
   - Strict separation of UI language, Content language, Quran Arabic immutable text, and Quran translation edition.
   - Expose all 11 verified languages in the language modal with native script names and verified badges.
   - Display honest fallback badges for languages currently undergoing scholarly review.
4. **Content & Reading Template Enhancements:**
   - Unified layout across `quran.html`, `hadith.html`, `duas.html`, `seerah.html`, `prophets.html`, `sahaba.html`, `history.html`, and worship guides.
5. **Automated Regression Suite 31:**
   - Add new tests verifying the design tokens, 4-tier localization architecture, and Arabic immutability under language switches.
