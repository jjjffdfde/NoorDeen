# Phase 0 — Baseline Audit & System Discovery (Master Command V3)

**Audit Date**: October 2026  
**Auditor**: Principal Full-Stack Software Engineer, Localization Specialist & Quran Data Integrity Auditor  
**Repository**: `E:\islamic websiye`  
**Git Commit Baseline**: `b3b5399`  
**Node.js Version**: `v25.6.1`  
**Host OS**: Windows 10/11 x64 (PowerShell)  
**Production Canonical Base URL**: `https://islamicknowledge.example.com`

---

## 1. Executive Summary & Verification of Baseline

A rigorous inspection of all 24 HTML pages, JavaScript controllers, styling systems, Android configuration, and test suites was conducted prior to executing Master Command V3:

1. **Automated Test Suite Status**:
   - Exactly **204 automated tests across 20 test suites** executed via `node test/run-tests.js` with **100% PASS** (0 failures).
   - Test suites cover: required public files, CSS design tokens, 40-language framework, Quran Hafs 6,236 verses standard, astronomical algorithms, HTTP routing, security headers, metadata, PWA/Service Worker, audio licensing, internal link crawling (945 links), Janazah/Eid worship modules, Android release artifacts, Urdu translation modes, authentic supplications, E-E-A-T AdSense compliance, and 3D spatial UI/phonetic search.

2. **Analysis of Current Site Language Selector vs. Quran Translation Selector**:
   - **Site Interface Language Selector (`#language-selector-btn` in navbar)**: Operates via `window.I18n` in `public/js/i18n.js` and `public/js/app.js`. It translates `[data-i18n]` tags on UI elements (navbar, buttons, headings) and applies RTL/LTR to `document.documentElement`.
   - **Current Quran Translation Mode (`#translation-view-select` in `public/quran.html`)**: Currently only offers 4 static view modes: `Urdu & English (both)`, `Urdu (Jalandhry)`, `English (Sahih Int.)`, and `Arabic Only`.
   - **Gap Identified for Phase 1**: The Quran reader does not yet have a dedicated **Quran Translation Language** selector allowing selection among up to 40 authorized translation languages independently of the website's general interface language.
   - **Strict Architectural Separation Required**: Changing the Quran translation language must update **only** the translation display panel within the Quran reader; it must **never** modify the global navbar, page headings, menus, footer, or any other website UI elements. Furthermore, Quranic Arabic text must remain immutable, protected with `lang="ar"` and `translate="no"` attributes.

3. **Android Application & Offline Packaging**:
   - Capacitor configuration: `capacitor.config.json` configured for `com.islamicknowledge.portal`, with web assets pointing to `public/`.
   - Native Android project exists in `android/app/src/main/` with `AndroidManifest.xml` and `MainActivity.java`.
   - Download center in `public/downloads/` contains:
     - `islamic-portal-release.apk` (142,692 bytes, SHA-256 verified)
     - `islamic-portal-offline-bundle.zip` (141,183 bytes)
     - `CHECKSUMS.sha256` manifest.

---

## 2. Complete Inventory of Implemented Pages & Modules

| Page / Route | File Location | Word Count / Content Status | Responsive & SEO Status |
| :--- | :--- | :--- | :--- |
| **Homepage** | `public/index.html` | Rich Bento Grid, Astronomical Countdown, Daily Companion | Responsive, JSON-LD, Meta |
| **Holy Quran Reader** | `public/quran.html` | 114 Surahs, Hafs Arabic, Audio Reciter, Urdu/English | Requires Dedicated Translation Selector |
| **Hadith Library** | `public/hadith.html` | Bukhari, Muslim, Abu Dawud, Tirmidhi, Gradings | Responsive, Searchable |
| **Six Kalimas** | `public/kalimas.html` | Arabic, Transliteration, Translations, Theological Commentary | Responsive, Audio-ready |
| **Duas & Adhkar** | `public/duas.html` | Morning/Evening, Salah, Istikharah, Qunut, Janazah | Responsive, Category Filters |
| **Seerah of the Prophet ﷺ** | `public/seerah.html` | Life of Prophet Muhammad ﷺ | To expand to 16 structured chapters |
| **Stories of the Prophets** | `public/prophets.html` | Adam to Isa (AS), Quranic Citations | Responsive, Rich Text |
| **Companions (Sahaba)** | `public/sahaba.html` | Biographies of Khulafa Rashideen and Companions | To expand with female companions & verified citations |
| **Islamic History & Pillars** | `public/pillars.html` | Five Pillars, Historical Eras | To expand into structured Islamic history library |
| **Salah Guide** | `public/salah-guide.html` | Step-by-step Fiqh of 5 Daily Prayers & Wudu | Responsive, Comprehensive |
| **Janazah Guide** | `public/janazah-guide.html` | 4 Takbirs, Adult/Child Duas, Madhhab comparison | Responsive, Fully referenced |
| **Eid Guide** | `public/eid-guide.html` | Eid al-Fitr & Eid al-Adha prayer methods | Responsive, Fully referenced |
| **Wudu & Ghusl Guide** | `public/wudu-guide.html` | Fard, Sunnah, Nullifiers, Tayammum | Responsive, Diagrammed |
| **Prayer Times** | `public/prayer-times.html` | Offline Astronomical Solar Calculations | Responsive, GPS-free formula |
| **Digital Tasbih** | `public/tasbih.html` | Haptic Web Audio Digital Counter | Responsive, Zero lag |
| **Zakat Calculator** | `public/zakat-calculator.html` | Gold/Silver Nisab, Cash, Business, Debts | Responsive, Live formulas |
| **Hijri Calendar** | `public/calendar.html` | Hijri-Gregorian Converter & Islamic Events | Responsive, Algorithmic |
| **Bookmarks** | `public/bookmarks.html` | Client-side Persistent Saved Ayahs & Hadith | Responsive, LocalStorage |
| **Android Download Center**| `public/download-app.html`| Release APK, SHA-256 verification, Sideload guide| Responsive, Download CTA |
| **About Us & E-E-A-T** | `public/about.html` | 5-Stage Editorial Pipeline, Scholarly Review | Responsive, AdSense Compliant |
| **Contact & Corrections** | `public/contact.html` | Interactive feedback & error reporting form | Responsive, FAQ Schema |
| **Sources & Methodology** | `public/sources.html` | EveryAyah, Tanzil, Al-Quran Cloud, Kutub Sittah | Responsive, Comprehensive |
| **Privacy Policy** | `public/privacy.html` | AdSense, DoubleClick DART, Cookies, User Rights | Responsive, Legal Compliance |
| **Terms of Service** | `public/terms.html` | Content license, religious disclaimer | Responsive, Legal Compliance |

---

## 3. Initial Baseline Findings & Execution Roadmap

1. **Phase 1 (Strict Quran Arabic & Translation Separation)**:
   - Arabic text must remain immutable and protected (`translate="no"`, `lang="ar"`).
   - Create a dedicated **Quran Translation Language** selector with 40 supported languages, native language names, search/filter, and independent storage (`islamic_portal_quran_trans_lang`).
   - Create `data/quran-translations/registry.json` recording language codes, translation titles, translators, editions, license status, online/offline availability, and attribution.
   - For available translations (e.g., English Sahih International, Urdu Fateh Muhammad Jalandhry, French Muhammad Hamidullah, Indonesian Ministry of Religious Affairs, Turkish Diyanet Isleri, etc.), load approved datasets. If an approved translation is not yet verified or available, display an explicit informative message: *"The approved translation for this language is not yet available in our verified repository"*. Do not use AI/machine translation, and never alter Quranic Arabic.
2. **Phase 2 (Protect Navbar & Global UI)**:
   - Ensure the Quran Translation selector touches ONLY the ayah translation panel and never modifies navbar items, page titles, or unrelated UI controls.
3. **Phase 3, 4, 5, 6 (Content Depth & Scholarly Verification)**:
   - Seerah: 16 chronologically structured chapters with classical citations (Ibn Hisham, Ibn Sa'd, authentic Hadith).
   - Sahaba: Comprehensive biographies of Khulafa Rashideen, early companions, and revered female companions (Khadijah, Aisha, Fatima, Umm Salamah, Asma bint Abi Bakr).
   - Islamic History: Structured library covering Pre-Islamic Arabia, Prophetic Era, Rashidun, Umayyad, Abbasid, Andalusia, Islamic Golden Age sciences, Ottoman, and regional histories.
4. **Phase 7 (Daily Routine & Wazaif Claim Audit)**:
   - Review all 5 daily routine items, distinguish authentic Sunnah from traditional pious practices, cite exact primary Hadith, and tag with review status.
5. **Phase 8 (Mobile Responsiveness Audit)**:
   - Validate viewports (320px, 360px, 375px, 390px, 414px, 768px, 1024px, 1280px), check touch targets, audio player wrapping, and mobile drawer accessibility.
6. **Phase 9 (Android Application Audit)**:
   - Inspect Capacitor Android integration, test offline operation, and verify build artifacts.
7. **Phase 10 & 11 (SEO & Comprehensive Verification)**:
   - Add regression tests verifying translation isolation, run all tests, and publish final audit reports.
