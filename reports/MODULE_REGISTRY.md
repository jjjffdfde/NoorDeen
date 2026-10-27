# NoorDeen — Module Registry

**Generated:** 26 October 2026
**Scope:** every user-facing module, data service and distribution artefact under `public/`, plus the Android build.
**Method:** modules were discovered by walking `public/**/*.html`, `public/js/*.js`, `public/data/**`, `public/service-worker.js`, `public/manifest.json`, `scripts/build-*.cjs` and `test/run-tests.js`. Status is based on automated assertions plus browser checks performed in this cycle. A module is only marked **PASS** where both its rendering and its primary interaction were exercised. Coverage limits are recorded even when the module works.

**Status legend**

| Status | Meaning |
| :--- | :--- |
| **PASS** | Implemented; primary flow exercised in a browser and/or asserted by the suite; no known functional defect. |
| **PARTIAL** | Works, but a stated part of its scope is missing, limited, or not verified (e.g. partial offline data, catalogue rather than full archive). |
| **BLOCKED** | Cannot be completed or verified in this environment (missing device, SDK, or network capability). |
| **FAIL** | Reproducible defect that affects users. |
| **NOT TESTED** | Present but not exercised. |

---

## 1. Summary

| Metric | Value |
| :--- | --: |
| Modules registered | **52** |
| PASS | **40** |
| PARTIAL | **11** |
| BLOCKED | **1** |
| FAIL | **0** |
| NOT TESTED | **0** |

The single BLOCKED item is Android device verification (installation and v2/v3 signature verification); it is an environment limitation, not a code regression. PARTIAL items are scope limitations that the UI now states honestly.

---

## 2. Global shell

| # | Module | Status | Evidence | Limits / notes |
| --: | :--- | :--- | :--- | :--- |
| 1 | Header navigation, desktop dropdowns | PASS | Present on all 52 pages; links resolve (3,111 local refs checked, 0 real broken); active-state highlighter runs without error. | Dropdown interaction is CSS/JS hover + click; not separately keyboard-audited. |
| 2 | Mobile drawer menu | PASS | Opens/closes; `aria-expanded` toggles `true`/`false`; `aria-hidden` toggles; focus moves into the drawer; Escape closes. | — |
| 3 | Global search modal + `Ctrl+K` | PASS | `riba` → 1 result; `zakat` → Zakat Calculator first; `marriage` → article + Seerah chapter + hadith; `barzakh` → death article; `halal food` → article. Result labels now derive from page type. | Search is client-side over a curated index (52 pages + datasets), not a full-text corpus index. |
| 4 | Language selector + English reset | PASS | Modal offers 11 verified languages; switching to Urdu translates content areas while UI stays `lang="en"` / `dir="ltr"`; reset restores English. | Only 11 of 40 registry languages have UI dictionaries (see `TRANSLATION_AUDIT.md`). |
| 5 | Theme toggle (light/dark) | PASS | `data-theme` persisted in `localStorage`; both palettes defined; contrast pairs present in CSS. | No automated contrast-ratio calculation in this cycle. |
| 6 | Footer, breadcrumbs, internal links | PASS | Footer present on all pages; breadcrumb nav present; 0 broken local links. | — |
| 7 | Cookie consent / config bootstrap | PASS | `js/config.js` loaded on all 52 pages; consent banner initialises. | — |
| 8 | Offline/online banner | PASS | Banner renders when `navigator.onLine === false`; hidden when online. | — |
| 9 | Keyboard skip link | PARTIAL | Injected by `app.js` on every page; targets `#main-content`; `main` gets `tabindex="-1"`; visible-state CSS verified by applying the class. | The headless browser cannot grant document focus, so `:focus` and focus events could not be triggered; real keyboard behaviour is implemented but not machine-verified here. |
| 10 | PWA install prompt / standalone shell | PARTIAL | `manifest.json` valid (`standalone`, theme `#0F5132`, 192/512 PNG + SVG icons); service worker registers and controls the page; install prompt handler present. | Not installed on a device in this environment; installability inferred from manifest + SW, not from Chrome's install criteria audit. |

---

## 3. Quran and study modules

| # | Module | Status | Evidence | Limits / notes |
| --: | :--- | :--- | :--- | :--- |
| 11 | Quran reader shell and surah/juz/ayah navigation | PASS | 114 surahs / 6,236 ayahs in `data.js`; Surah 2 loaded 286 ayahs; header updates to requested surah; invalid ayah 999 rejected with toast and URL unchanged. | Network required for the 104 non-bundled surahs. |
| 12 | Quran deep links and URL sync | PASS | `?surah=N&ayah=M`, legacy `?verse=`, and `#ayah-N` all load, scroll, highlight and sync the URL. | Smooth scroll is disabled in the test browser; an instant-scroll fallback is implemented. |
| 13 | Quran translations and English reset | PASS | Translation switching (including Arabic/Tafsir Muyassar) preserves canonical Arabic and shows translator attribution; English reset restores Saheeh International. | 40-edition registry exists; only a subset was live-fetched in this cycle. |
| 14 | Quran audio controls | PASS | Ayah audio URL built as `https://everyayah.com/data/Alafasy_128kbps/001001.mp3`; play/pause/repeat controls wired; audio cache namespace present. | Audio is online-only and was not played end-to-end in this cycle (no audio device in headless). |
| 15 | Study Mode: tafsir, word-by-word, compare, related hadith | PARTIAL | 1:1 and 2:255 render tafsir + WBW; 2:1 shows the honest "no commentary bundled" state; compare and hadith tabs render; generic hadith is labelled "not verse-specific". | Bundled tafsir covers **6 verses** only; bundled text is an editorial English summary, not a verbatim translation. |
| 16 | Quran bookmarks and continue-reading | PASS | Bookmark 1:1 saved; bookmarks page shows `quran.html?surah=1#ayah-1`; hash link scrolls to ayah 7; removal clears card, storage and shows empty state. | — |
| 17 | Offline Quran bundle | PARTIAL | 10 surahs / 49 ayahs bundled; complete surahs 1 and 114 render without a false banner; partial 36 (6/83) and 67 (4/30) show "Showing X of Y verses bundled" + retry; online fetch replaces partial data. | 104 surahs, all audio and all video need network. |
| 18 | Quran search and surah profiles | PASS | Phonetic aliases and 32 surah thematic profiles; search returns surah and ayah results with Urdu previews. | Search is over metadata/aliases, not a full Arabic concordance. |

---

## 4. Hadith, duas and worship content

| # | Module | Status | Evidence | Limits / notes |
| --: | :--- | :--- | :--- | :--- |
| 19 | Hadith library | PASS | 101 cards; search "patience" → 1; collection filter Bukhari → 42; empty state + reset work; copy includes citation. | Curated selection, not a full collection corpus. |
| 20 | Duas / adhkar library | PASS | 102 entries; 17 category buttons; morning filter narrows the grid; search works; counter increments; copy uses `App.copyText()` with fallback. | — |
| 21 | Kalimas | PASS | 6 cards; per-Kalima Copy and Share; copy toast "Kalima copied with translation!"; Arabic preserved. | — |
| 22 | Salah guide | PASS | Step-by-step guide renders; prayer names, positions and evidences present. | Madhhab differences are noted, not adjudicated. |
| 23 | Wudu / ghusl / tayammum guide | PASS | Three purification methods render with steps and conditions. | — |
| 24 | Janazah guide | PASS | Funeral prayer with four takbirs and practical sequence. | — |
| 25 | Eid guide | PASS | Eid al-Fitr and Eid al-Adha prayer procedures. | — |
| 26 | Five Pillars page | PASS | Shahadah, salah, zakat, sawm, hajj summaries with links. | — |

---

## 5. History and biography libraries

| # | Module | Status | Evidence | Limits / notes |
| --: | :--- | :--- | :--- | :--- |
| 27 | Seerah library | PASS | 25 chapters; counts match headings; all `#` anchors resolve; no duplicate IDs; no NaN/undefined. | Classical reports are cited in prose; not every report is individually graded. |
| 28 | Prophets library | PASS | 30 narratives (25 Quranic prophets + 5 righteous figures); anchors resolve. | Isra'iliyyat-sensitive material is presented with Quranic priority; see source verification report. |
| 29 | Sahaba biographies | PASS | 52 monographs across 6 cohorts; metadata corrected from 30 to 52. | — |
| 30 | Islamic history library | PASS | 12 eras / 66 milestone subsections; anchors resolve. | Civilisational narrative, not a specialist historiography. |

---

## 6. Tools

| # | Module | Status | Evidence | Limits / notes |
| --: | :--- | :--- | :--- | :--- |
| 31 | Prayer times | PARTIAL | Lahore default; Fajr 5:06 AM, Dhuhr 11:47 AM, Asr 3:42 PM (Hanafi), Maghrib 5:20 PM, Isha 6:27 PM; city/method/asr changes recalculate with no NaN/Invalid Date. | **No qibla direction** (claims removed). High-latitude rules are selectable but not independently verified against an external authority. |
| 32 | Zakat calculator | PARTIAL | Cash input recalculates assets/liabilities/due; below-nisab → 0; PKR symbol and equivalents work; $10,000 case produced $250 in the earlier check. | Gold/silver prices are **editable indicative defaults**, not a live market feed. |
| 33 | Digital tasbih | PASS | Tap ×3 → 3; undo → 2; custom target, cycle and reset work; `ikp_tasbih_state` persists. | — |
| 34 | Hijri calendar + converter | PASS | Live date "15 Jumada I 1448 AH" matches `Intl`; converter outputs correct Hijri; hardcoded `1447 AH` fallbacks removed. | Umm al-Qura vs tabular difference is disclosed; local moon sighting can differ. |
| 35 | Bookmarks page | PASS | Renders saved Quran ayahs with deep links; removal updates storage and empty state. | Only Quran ayahs are bookmarkable. |

---

## 7. Lecture library

| # | Module | Status | Evidence | Limits / notes |
| --: | :--- | :--- | :--- | :--- |
| 36 | Dr. Israr Ahmed catalogue | PARTIAL | 148 records / 147 unique uploads / 7 series; 148 cards render; search "Arbaeen" → 73; series filter → 9; reset → 148; duplicate `04-002-016` flagged. | Covers archive pages 1–10 of 74; playback is online-only via `youtube-nocookie.com`; no transcripts or translations. |

---

## 8. Editorial library

| # | Module | Status | Evidence | Limits / notes |
| --: | :--- | :--- | :--- | :--- |
| 37 | Articles index | PASS | 25 cards; search `riba` → 1, `marriage` → 1, reset → 25; roadmap statuses updated; 25 unique links. | 25 of 100 roadmap topics published. |
| 38 | Educational articles (25) | PARTIAL | All 25 render; TOC anchors resolve; 2 JSON-LD blocks each; body length 1,536–2,114 words; max 5-word shingle similarity 0.030. | Coverage is 25/100 topics; no scholarly sign-off. |
| 39 | Glossary | PASS | 135 terms with categories, Arabic script and search. | Definitions are concise, not encyclopaedic. |
| 40 | Learning pathways | PASS | Homepage pathways section now has the previously missing `#guided-learning` anchor; cards link to guides and articles. | — |

---

## 9. Distribution and trust pages

| # | Module | Status | Evidence | Limits / notes |
| --: | :--- | :--- | :--- | :--- |
| 41 | Download centre | PASS | APK and ZIP links return HTTP 200; `CHECKSUMS.sha256` loaded at runtime and now network-first; displayed hashes match files (`d9d59d…` APK, `e4fbde…` ZIP); sizes and page counts corrected. | APK is JAR-signed v1 only; installation not device-tested. |
| 42 | About page | PASS | Test count updated to 1,478; removed WCAG certification and peer-review claims. | — |
| 43 | Sources / methodology | PASS | Bibliography, grading policy, tafsir policy; qibla claim removed. | — |
| 44 | Contact / corrections | PASS | Required and email validation block invalid submit; valid submit shows an honest "no backend" panel with GitHub issue + mailto dispatch. | No server-side inbox. |
| 45 | Privacy and terms | PASS | Static policies render; no analytics or ad scripts active by default. | Legal review not performed. |

---

## 10. Platform and data services

| # | Module | Status | Evidence | Limits / notes |
| --: | :--- | :--- | :--- | :--- |
| 46 | Data layer (`data.js`, `catalog.json`, `study-content.json`) | PASS | 114 surahs / 6,236 ayahs; 101 hadith; 102 duas; 6 kalimas; 148 lecture records; 6 tafsir verses; all parse without error. | Tafsir and lecture coverage are explicitly partial. |
| 47 | Search index and sitemap | PASS | 52 sitemap URLs (52 unique); 26 article URLs; all 52 pages indexed in `search.js`; robots.txt valid. | Client-side index only. |
| 48 | Service worker and offline bundle | PARTIAL | SW `v13`; shell precache; HTML network-first; checksums/downloads now network-first; bundle 80 files / 1,298,402 bytes / `e4fbde…`. | Full offline Quran, audio and video are not included; no device install test. |
| 49 | Android APK | BLOCKED | 89 ZIP entries; 52 HTML pages; no nested APK/ZIP; `jarsigner` reports a valid v1 signature (SHA256withRSA, 2048-bit, expires 2054-03-12); `APK Sig Block 42` absent. | No v2/v3 signing block; `targetSdk 34`; `adb`/`apksigner` unavailable; **installation not tested**. Plaintext signing passwords and a tracked keystore are a P0 issue (not changed by owner instruction). |
| 50 | Accessibility baseline | PARTIAL | 0 `<img>` without `alt`; `:focus-visible` styles; ARIA on drawer/search/language modals; skip link added; single `<h1>` per page. | No full WCAG 2.1 AA audit; no screen-reader session; focus visibility in headless not verifiable. |
| 51 | Responsive layout | PARTIAL | CSS breakpoints at 991/992/1200/1024/960/900/820/768/600/480/360 px; mobile drawer and bottom nav implemented. | Browser tool cannot change viewport (`innerWidth` stays 1000), so 320/375/768/1024/1440 rendering was not visually verified in this cycle. |
| 52 | SEO and structured data | PASS | 52/52 pages have canonical, description, OG, Twitter, JSON-LD, viewport, manifest, theme-color; `BreadcrumbList` / `FAQPage` / `Article` schemas on articles. | No Lighthouse/field Core Web Vitals data; no backlink or ranking evidence. |

---

## 11. Known defects and blockers

| ID | Severity | Item | Status |
| :--- | :--- | :--- | :--- |
| D1 | P0 | Plaintext signing passwords in `android/app/build.gradle`; `android/app/release.keystore` tracked. | **Open** — owner instructed not to change signing config. |
| D2 | P0 | APK has no v2/v3 signing block; `targetSdk 34` may reject installation on modern Android. | **Open / BLOCKED** — no `apksigner` or SDK build-tools. |
| D3 | P1 | APK installation not tested on a real device or emulator. | **BLOCKED** — no `adb`, no device. |
| D4 | P1 | Tafsir bundled for 6 verses only. | **Accepted** — UI states the limit. |
| D5 | P1 | Offline Quran is 10 surahs / 49 ayahs, two of them partial. | **Accepted** — UI labels partial surahs. |
| D6 | P1 | Only 11 of 40 language entries have UI dictionaries. | **Accepted** — selector offers only verified languages. |
| D7 | P2 | No qibla direction feature. | **Accepted** — claims removed from site copy. |
| D8 | P2 | Responsive breakpoints not visually verified in this environment. | **Open** — static/code-level review only. |
| D9 | P2 | 77 roadmap article topics unwritten. | **Open** — tracked in `REMAINING_WORK.md`. |
| D10 | P3 | Skip-link keyboard activation not machine-verified (headless focus limitation). | **Open** — implementation and CSS verified. |

No module is currently in **FAIL** state after the fixes in this cycle (search labels, stale checksum caching, missing homepage anchor, hardcoded Hijri year, article/sitemap/search integration).
