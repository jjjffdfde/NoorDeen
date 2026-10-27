# NoorDeen — Module Functional Tests

**Executed:** 27 October 2026
**Harness:** `node test/run-tests.js` (HTTP server on port 3000) + browser automation on `http://localhost:3400`
**Result:** **1,519 assertions executed / 1,519 passed / 0 failed**; browser checks listed below; no console errors on any page exercised.

This report records what was actually exercised. Items that could not be tested are listed separately in section 7 and are not counted as passes.

---

## 1. Automated suite coverage (42 suites)

| Suite | Area | Representative assertions | Result |
| --: | :--- | :--- | :--- |
| 1 | Required files and static assets | 52 HTML pages, CSS, JS, data, manifest, SW, downloads | PASS |
| 2 | Design system and palette | CSS variables, typography, responsive rules | PASS |
| 3 | 40-language framework | Exactly 40 language entries; verified/partial/in-progress split | PASS |
| 4 | Quran and religious data | 114 surahs in canonical order; 6,236 ayahs; hadith/dua/kalima shapes | PASS |
| 5 | Astronomical tools | Prayer-time formula components, Nisab constants | PASS |
| 6 | HTTP routing and API | `/`, clean routes, `/api/health`, `/api/languages`, sitemap, robots, 404 | PASS |
| 7 | PWA, service worker, offline | Manifest fields, cache version, precache list, icons | PASS |
| 8 | Technical SEO and schema | Canonical, OG, Twitter, JSON-LD on all pages | PASS |
| 9 | Mobile drawer and Android scaffold | Drawer markup, Capacitor config | PASS |
| 10 | Expanded Quran/hadith integrity | Collection numbers, gradings, Arabic presence | PASS |
| 11 | Audio recitation and licensing | Reciter registry, everyayah URL construction | PASS |
| 12 | Internal link crawler | All internal links resolve | PASS |
| 13 | Continue-reading and persistence | `localStorage` keys and panel wiring | PASS |
| 14 | Janazah and Eid modules | Four takbirs, both Eid prayers | PASS |
| 15 | Download centre and APK | Links, manifest, size/hash wiring | PASS |
| 16 | Urdu translation architecture | Urdu dictionary and scoped direction | PASS |
| 17 | Dua library and filters | 102 records, categories, references | PASS |
| 18 | Audit reports and methodology | Required reports exist and are non-trivial | PASS |
| 19 | Editorial depth / E-E-A-T / AdSense | Article depth, disclosure, no ad script by default | PASS |
| 20 | Spatial UI, phonetic search, i18n | Search aliases, 24-page nav coverage, zero-lag lookup | PASS |
| 21 | Quran isolation and libraries | Arabic immutability, Seerah/Sahaba/History libraries | PASS |
| 22 | Content taxonomy and schemas | Topic taxonomy, FAQ/Breadcrumb schema | PASS |
| 23 | Quran system, study mode, audio | Reader controls, tafsir fallback, audio architecture | PASS |
| 24 | Seerah 25 chapters and provenance | Chapter count, anchors, source notes | PASS |
| 25 | Sahaba and prophets | 52 companions, 30 narratives | PASS |
| 26 | Islamic history | 12 eras, 66 milestones | PASS |
| 27 | UX, accessibility, responsive consistency | Landmarks, labels, viewport metadata | PASS |
| 28 | SEO, multilingual, PWA, Android release | Sitemap, hreflang policy, APK presence | PASS |
| 29 | Mobile-first boundaries | Breakpoint rules, bottom nav | PASS |
| 30 | Benchmarking, Web Share, search categories | Share API fallback, category labels | PASS |
| 31 | Redesign, localization, Arabic immutability | UI stays English; content scoping | PASS |
| 32 | Prayer times, zakat, tasbih, guides | Formula constants, multi-currency, counter state | PASS |
| 33 | Multilingual invariance and scoped direction | RTL only in content containers | PASS |
| 34 | Master baseline and pre-rendered libraries | Page counts, pre-rendered hadith/duas | PASS |
| 35 | Subpath resilience and network-first navigation | Article subpath links, SW navigation strategy | PASS |
| 36 | P0 defects and trust transparency | Claims removed, Nisab values, 1,519-test statement | PASS |
| 37 | PWA raster icons and offline bundle | PNG icons, bundle metadata, cache `v19` | PASS |
| 38 | Educational articles library | Article depth, TOC, schema, indexing | PASS |
| 39 | Batch 2 articles (topics 11–20) | Search/sitemap/index integration | PASS |
| 40 | Dr. Israr catalogue | 148 records, 147 unique, series sums, no hosted video | PASS |
| 41 | URL resolution, catalog loader, lazy search | `resolveUrl` cases, `catalog.js`, `ensureSearchData`, alias guards | PASS |
| 42 | Daily Companion dates and streaks | Local date key, completion-based streak, Friday optionality | PASS |

---

## 2. Browser functional checks

### 2.1 Global shell

| Check | Result |
| :--- | :--- |
| Search modal opens; input `#modal-search-input` focused | PASS |
| `riba` → 1 result, labelled **📚 Educational Article**, URL `articles/islamic-finance-and-riba.html` | PASS |
| `zakat` → Zakat Calculator (**🧮 Islamic Tool**) first, then the zakat article | PASS |
| `marriage` → marriage article, Seerah chapter 5, hadith Bukhari 5063 | PASS |
| `barzakh` → death/afterlife article; `climate change` → environment article | PASS |
| `halal food` → Surah 87 (keyword) + halal article | PASS |
| Search labels for lecture library, download and article index derive from page type | PASS |
| Mobile drawer: open/close, `aria-expanded`, `aria-hidden`, focus move, Escape | PASS |
| Language modal: 11 verified languages; Urdu switch; English reset | PASS |
| Theme toggle persists across reload | PASS |
| Offline banner appears when `navigator.onLine` is forced false | PASS |
| Skip link present on every page; `#main-content` target and `tabindex="-1"` | PASS (presence/CSS); keyboard focus not emulatable — see §7 |
| No console errors on 26 root pages | PASS |
| Search from an article page (`yaseen`, `intention`, `mercy`, `ayatul kursi`) | PASS after lazy `data.js` load |
| Nested search-result links and quick pills from an article page | PASS (12/12 HTTP 200) |
| `ayatul kursi` → 2:255; reader highlights `#ayah-255` | PASS |
| `سورہ واقعہ` → 56 first; `tabarakallazi` → 67 only | PASS |
| Daily Companion Tuesday 4/4, streak 1; retoggle no double award; gap resets to 0 | PASS |

### 2.2 Quran reader

| Check | Result |
| :--- | :--- |
| Surah 2 loads 286 ayahs after a first-call network failure (3-edition retry + fallback, 15 s timeout) | PASS |
| Honest error card + `retryLoadSurah()` after total failure; header reflects requested surah | PASS |
| `?surah=2&ayah=255`, legacy `?verse=`, `#ayah-7` load, scroll, highlight, sync URL | PASS |
| Invalid ayah 999 → returns false, URL unchanged, toast "Ayah 999 is outside 1–286 for this Surah." | PASS |
| Translation switch to Arabic (Tafsir Muyassar) keeps Arabic canonical + attribution; English reset restores Saheeh International | PASS |
| Audio source for 1:1 = `https://everyayah.com/data/Alafasy_128kbps/001001.mp3` | PASS |
| Study Mode 1:1 and 2:255 render tafsir + word-by-word; 2:1 shows "No commentary is bundled" | PASS |
| Compare and related-hadith tabs render; generic hadith labelled "Not verse-specific" | PASS |
| Bookmark 1:1 → bookmarks page deep link; hash scroll to ayah 7; remove → empty state | PASS |
| Offline: complete surahs 1 (7) and 114 (6) render; 36 shows 6/83 and 67 shows 4/30 with banner + retry; online fetch replaces partial | PASS |

### 2.3 Hadith, duas, kalimas

| Check | Result |
| :--- | :--- |
| Hadith cards | 101 |
| Search "patience" | 1 result |
| Collection filter Sahih al-Bukhari | 42 |
| Empty state and reset | PASS |
| Copy includes citation | PASS |
| Dua cards (Arabic present) | 102 |
| Category buttons | 17 |
| Morning filter | 7 |
| Dua search, counter, copy with fallback | PASS |
| Kalima cards | 6 |
| Kalima copy toast | "Kalima copied with translation!" |
| Kalima share (Web Share / clipboard fallback) | PASS |

### 2.4 Biography libraries

| Check | Result |
| :--- | :--- |
| Seerah chapters | 25 |
| Prophetic narratives | 30 |
| Sahaba monographs | 52 |
| History eras / milestones | 12 / 66 |
| `#` anchors resolve; no duplicate IDs; no NaN/undefined | PASS |

### 2.5 Tools

| Check | Result |
| :--- | :--- |
| Prayer times Lahore default | Fajr 5:06 AM, Dhuhr 11:47 AM, Asr 3:42 PM, Maghrib 5:20 PM, Isha 6:27 PM |
| City / method / Asr change recalculates | PASS, no NaN or Invalid Date |
| Zakat: cash input updates assets and due; below nisab → 0; PKR symbol/equivalents | PASS |
| Zakat: $10,000 → $250 due (earlier check), rate wording "editable indicative defaults" | PASS |
| Tasbih: tap ×3 → 3, undo → 2, custom target/cycle/reset, `ikp_tasbih_state` persists | PASS |
| Hijri calendar live date | "15 Jumada I 1448 AH" (matches `Intl`) |
| Hijri converter output and neutral fallbacks (no `1447 AH`) | PASS |

### 2.6 Lecture library

| Check | Result |
| :--- | :--- |
| Cards rendered | 148 |
| Renders with `window.fetch` forced to reject (embedded `catalog.js`) | 148 |
| Payload removed **and** fetch blocked | Honest error + retry, 0 fabricated cards |
| Search `muntakhab` | 2 |
| Series filter | 2 |
| English language filter | 17 |
| Reset | 148 |
| Duplicate badge on `04-002-016` | PASS |
| No console errors | PASS |

### 2.7 Articles

| Check | Result |
| :--- | :--- |
| Index cards / unique links | 25 / 25 |
| Search `riba` / `marriage` / reset | 1 / 1 / 25 |
| Batch 3 cards | 5 |
| New article pages: h1/title, TOC anchors, JSON-LD | PASS (2 blocks each, 0 missing anchors) |
| Body length range | 1,536–2,114 words |
| Max 5-word shingle similarity | 0.030 (no near-duplicates) |
| Console errors on new pages | 0 |

### 2.8 Download centre

| Check | Result |
| :--- | :--- |
| APK and ZIP links | HTTP 200 |
| `CHECKSUMS.sha256` fetch | HTTP 200 |
| Displayed APK hash | `c699475c5e0e0fb872e92b5f52de522438abd3354ea8d26e531437bf473b9cc0` (matches file) |
| Displayed bundle hash | `5fa610ea33a7754b0dceeb127416c201d366a598b2d54032bfc4b5dedaceb9e4` (matches file) |
| Stale-checksum defect | **Found and fixed**: SW served `downloads/` cache-first; now network-first with cache fallback; cache now `v19` |

### 2.9 Contact

| Check | Result |
| :--- | :--- |
| Required-field and email validation | Blocks invalid submit |
| Valid submit | Honest "no backend" panel with GitHub issue + mailto dispatch |
| No false "message sent" claim | PASS |

---

## 3. Data-integrity checks

| Dataset | Expected | Actual | Result |
| :--- | --: | --: | :--- |
| Surahs | 114 | 114 | PASS |
| Ayahs | 6,236 | 6,236 | PASS |
| Hadith records | 101 | 101 | PASS |
| Hadith collections | 6 | Bukhari 42, Muslim 25, Tirmidhi 14, Abu Dawud 10, Nasa'i 4, Ibn Majah 6 | PASS |
| Hadith grades | All sahih/hasan | 74 Sahih, 22 Sahih (Al-Albani), 3 Hasan (Al-Albani), 1 Hasan (Authentic), 1 Hasan Sahih | PASS |
| Duas | 102 | 102, all with non-empty references (99 unique) | PASS |
| Kalimas | 6 | 6 | PASS |
| Lecture records | 148 | 148 (147 unique) | PASS |
| Tafsir verses | 6 | 6 | PASS |
| Glossary terms | 135 | 135 | PASS |
| Sitemap URLs | 52 | 52 unique (26 article URLs) | PASS |
| HTML pages | 52 | 52 | PASS |

---

## 4. User-journey tests

| Journey | Steps exercised | Result |
| :--- | :--- | :--- |
| New visitor → learn → act | Home → pathways → beginner article → salah guide → prayer times | PASS |
| Quran study | Search modal → surah → ayah deep link → translation switch → Study Mode → bookmark → bookmarks page | PASS |
| Hadith research | Hadith page → search → collection filter → copy citation | PASS |
| Dua routine | Duas → morning filter → counter → copy | PASS |
| Worship prep | Wudu guide → salah guide → prayer times | PASS |
| Zakat calculation | Zakat page → cash entry → due → reset | PASS |
| Lecture discovery | Dr. Israr page → search → series filter → play (embed URL) | PASS (embed URL only; video playback not watched) |
| Download & verify | Download page → APK/ZIP link → checksum display vs file hash | PASS |
| Correction flow | Contact → invalid submit blocked → valid submit → honest dispatch panel | PASS |
| Offline reading | Force offline → cached article/hadith/dua/guide; partial Quran banner | PASS |

---

## 5. Defects found and fixed in this cycle

| Defect | Root cause | Fix | Re-test |
| :--- | :--- | :--- | :--- |
| Search results all labelled "Worship Guide" | Static label in `search.js` | Label derived from URL/page type | PASS |
| Homepage `#guided-learning` dead anchor | Section had no `id` | Added `id="guided-learning"` | PASS |
| Hardcoded `1447 AH` before JS | Static fallbacks in `index.html`, `calendar.html` | Neutral labels; live date renders 1448 AH | PASS |
| Stale download checksums | SW cache-first for `/downloads/` | Network-first for downloads and `.sha256`; SW cache bumped (now `v19`) | PASS |
| Missing theme-color on homepage | Omitted meta tag | Added `#0F5132` | PASS |
| No skip link | Never implemented | Injected globally by `app.js` + CSS | PASS (presence/CSS) |
| About page stale test claim | Text said "1,300+ checks" | Updated to 1,519 assertions; removed WCAG claim | PASS |
| Qibla claims without feature | Copy referenced qibla bearing | Claims removed from home, download, sources | PASS |
| Lecture catalog `Failed to fetch` | `fetch()` blocked under `file://` | Embedded `catalog.js` + schema validation + distinct errors/retry | PASS |
| Article-page search empty | `data.js` omitted, never loaded | `App.ensureSearchData()` lazy load + query re-dispatch | PASS |
| Nested result URLs 404 | Root-relative URLs resolved under `/articles/` | `resolveUrl` on all runtime links | PASS |
| Cookie privacy link 404 | Hard-coded relative href | `getBasePath()` prefix | PASS |
| Daily Companion wrong date / duplicate streak | UTC key, visit-based award, bad `maghrib` ID | Local key, completion-based streak, corrected ID | PASS |
| Wrong dua anchor | `sayyid` vs `sayyidul` | Href corrected | PASS |
| Alias search ranked wrong surah | One-letter containment matches | Minimum 4-character guards | PASS |
| Ayatul Kursi no deep link | Missing `ayah` parameter | `surah=2&ayah=255` + highlight | PASS |

---

## 6. Build verification

| Artefact | Value |
| :--- | :--- |
| Offline bundle | 81 files, 1,312,528 bytes, SHA-256 `5fa610ea33a7754b0dceeb127416c201d366a598b2d54032bfc4b5dedaceb9e4` |
| APK | 1,412,579 bytes, SHA-256 `c699475c5e0e0fb872e92b5f52de522438abd3354ea8d26e531437bf473b9cc0` |
| APK ZIP entries | 90 |
| APK HTML pages | 52 |
| Nested APK/ZIP in APK | None |
| APK signature | Valid v1 JAR signature (SHA256withRSA, 2048-bit); no `APK Sig Block 42` |
| Checksums file | Matches both files byte-for-byte |

---

## 7. Not tested / unavailable

| Item | Reason | Status |
| :--- | :--- | :--- |
| APK installation on Android | `adb` not on PATH; no emulator/device | **BLOCKED** |
| APK v2/v3 signature | `apksigner` and Android SDK build-tools not installed | **BLOCKED** |
| 320/375/768/1024/1440 px visual rendering | Browser tool cannot change viewport (`innerWidth` stays 1000); `window.resizeTo` is a no-op | **UNAVAILABLE** |
| Screen-reader session | No screen reader in the environment | **UNAVAILABLE** |
| Lighthouse / field Core Web Vitals | No Lighthouse or CrUX access | **UNAVAILABLE** |
| End-to-end audio playback | Headless environment has no audio output; URL construction verified only | **PARTIAL** |
| Video playback inside embeds | Requires YouTube network session and user gesture; embed URL verified only | **PARTIAL** |
| All 40 Quran translation editions live | Only a subset fetched; registry validated statically | **PARTIAL** |
| Full WCAG 2.1 AA conformance | Requires manual audit | **UNAVAILABLE** |

These are reported as unavailable, not as passes. The site's own copy now matches this list.
