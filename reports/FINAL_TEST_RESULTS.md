# NoorDeen — Final Test Results

**Run date:** 28 October 2026
**Tree state:** `main` after Phase 1 (full offline Quran corpus, persistent player state, khatam planner, offline fallback); SW `v22`, assets `?v=20261027h`.
**Server:** local Node server (`node server.js`), browser automation on `http://localhost:3400`, test harness on port 3000.

---

## 1. Result summary

| Category | Count | Status |
| :--- | --: | :--- |
| Automated assertions executed | **1,710** | **1,710 passed, 0 failed** |
| Test suites | **46** | 46 passed |
| Root pages smoke-tested in browser | 26 + offline page | Passed |
| Article pages browser-tested | 4 Batch 5 pages + representative earlier batches | Passed |
| Console errors observed | 0 | Passed |
| Quran corpus ayahs verified | 6,236 | Passed |
| Unavailable checks (environment limits) | 12 categories | Reported, not counted as passes |

**No assertion was skipped.** The unavailable items in section 6 could not be executed in this environment and are listed separately rather than claimed.

---

## 2. Automated suite

Command:

```powershell
node test/run-tests.js
```

Final output:

```
TEST RESULTS SUMMARY:
  Total Tests Executed: 1710
  Passed Tests:         1710
  Failed Tests:         0

ALL TESTS PASSED SUCCESSFULLY! The portal is production-ready.
```

The suite runs 46 groups covering files, design tokens, the 40-language framework, Quran and hadith data, astronomy, HTTP routing, PWA/service worker, SEO/schema, Android scaffolding, internal links, persistence, worship modules, downloads, Urdu translation, dua filters, audit reports, editorial depth, search/i18n, biography libraries, content taxonomy, Quran study mode, UX/accessibility, mobile boundaries, benchmarks, redesign invariants, tools, multilingual scoping, pre-rendered libraries, subpath resilience, P0 transparency, PWA icons/offline bundle, the article library, Batch 2 integration, the Dr. Israr catalogue, URL resolution/catalog loading/lazy search, Daily Companion dates/streaks, Batch 4 family/community articles, Batch 5 law/trade/employment articles, the **full 114-surah offline corpus**, and the **Phase 1 player/khatam/offline shell**.

**Defects found by the suite during this cycle and fixed:**

| Failure | Cause | Fix |
| :--- | :--- | :--- |
| Suite 45: Al-Ikhlas/2:255 spot checks | Test compared raw diacritics that differ between Uthmani renderings | Added a diacritic-insensitive normaliser to the assertion |
| Suite 35: offline fallback expected `index.html` | The audit correctly identified the blind homepage redirect as a defect | Fallback now serves `offline.html`; test updated |
| Suites 27/28/36 counted `offline.html` as an indexable page | Offline fallback is intentionally `noindex` and absent from the sitemap | Excluded from indexable-page loops; added explicit noindex/cache assertions |

---

## 3. Browser functional verification

### 3.1 Global shell

| Check | Result |
| :--- | :--- |
| Skip link injected on every page, targets `#main-content`, `main` has `tabindex="-1"` | Pass |
| Skip-link visible-state CSS applies (`left: 0`, 3 px gold outline) when the class is present | Pass |
| `theme-color` present on all 60 pages (`#0F5132`) | Pass |
| Search modal: `riba` → 1 article result; `zakat` → calculator first; `marriage` → article + Seerah + hadith | Pass |
| Search result labels are page-type-specific | Pass |
| Language modal: 11 verified languages; Urdu switch; English reset | Pass |
| Theme toggle persists | Pass |
| Mobile drawer: open/close, `aria-expanded`, `aria-hidden`, Escape | Pass |
| Offline banner toggles with `navigator.onLine` | Pass |
| 26 root pages: 0 console errors, 0 duplicate IDs, 0 unresolved anchors, 0 `NaN`/`undefined`/`Invalid Date` | Pass |
| Article-page search (`yaseen`, `intention`, `mercy`, `ayatul kursi`) after lazy `data.js` load | Pass |
| Nested results + quick pills from an article page | 12/12 HTTP 200 |
| `ayatul kursi` → 2:255, `#ayah-255` highlighted | Pass |
| `سورہ واقعہ` → 56 first; `tabarakallazi` → 67 only | Pass |
| Daily Companion: 4/4, streak 1, retoggle no double award, gap resets to 0 | Pass |

### 3.2 Quran reader

| Check | Result |
| :--- | :--- |
| All 114 surahs available from the local corpus (Suite 45) | Pass — 6,236 ayahs |
| Ya-Sin renders 83/83 ayahs from IndexedDB/SW cache | Pass |
| Al-Kahf renders 110/110 ayahs with English + Urdu | Pass |
| Surah 2 loads 286 ayahs after a transient API failure (retry then success) | Pass |
| Total-failure error card + retry | Pass |
| Deep links `?surah=2&ayah=255`, legacy `?verse=`, `#ayah-7` load, scroll, highlight, sync URL | Pass |
| Invalid ayah 999 rejected; URL unchanged; toast shown | Pass |
| Translation switch preserves Arabic + attribution; English reset restores Saheeh International | Pass |
| Study Mode: tafsir + word-by-word for 1:1 and 2:255; honest "no commentary bundled" for 2:1 | Pass |
| Compare and related-hadith tabs; generic hadith labelled "not verse-specific" | Pass |
| Bookmark 1:1 → bookmarks page deep link; remove → empty state | Pass |
| Offline cache contains 114 surah chunks + `offline.html` | Pass |
| `offline.html` renders the offline explanation, links to the cached Quran and is `noindex` | Pass |
| Khatam planner: 30-day → 208 ayahs/21 pages; 15-day → 416/41; 60-day → 104 | Pass |
| Mark surah complete → progress 110 ayahs / 1.8% | Pass |
| Player state survives reload (surah 18, repeat `ayah`, speed 1.25×) | Pass |
| Audio URL for 1:1 = `https://everyayah.com/data/Alafasy_128kbps/001001.mp3` | Pass (URL only; playback not listened to) |
| Console errors while loading Ya-Sin / Al-Kahf | 0 |

### 3.3 Hadith, duas, kalimas

| Check | Result |
| :--- | :--- |
| Hadith cards | 101 |
| Search "patience" | 1 result |
| Collection filter "Sahih al-Bukhari" | 42 |
| Clear search | restores 42 (filter still active) |
| Copy includes citation | Pass |
| Dua cards with Arabic | 102 |
| Category buttons | 17 |
| Morning filter | 7 |
| Dua counter, copy fallback | Pass |
| Kalimas | 6 |
| Kalima copy toast and share fallback | Pass |

### 3.4 Biography libraries (after encoding repair)

| Check | Result |
| :--- | :--- |
| `sahaba.html` H1 | "Lives of the Noble Sahaba (رضي الله عنهم)" — Arabic correct |
| Arabic characters rendered | 6,696 |
| Mojibake characters | 0 |
| Stray Markdown asterisks | 0 |
| Duplicate IDs / unresolved anchors | 0 / 0 |
| Companion cards | 52 |
| Cohort filter: "Mothers & Women Companions" | 14, first card `khadijah` |
| Reset to "All 52 Companions" | 52 |
| `history.html` H1 | "Islamic History & Civilizations (تاريخ الإسلام)" — Arabic correct |
| View switcher: Eras → Timeline → Regions → Eras | Correct container visibility each time |
| Console errors on both pages | 0 |
| `history.html` orphan search modal | Removed; test passes |

### 3.5 Tools

| Check | Result |
| :--- | :--- |
| Prayer times, Lahore default | Fajr 5:06 AM, Dhuhr 11:47 AM, Asr 3:42 PM (Hanafi), Maghrib 5:20 PM, Isha 6:27 PM |
| City/method/Asr changes | Recalculate without `NaN`/`Invalid Date` |
| Zakat: cash 10,000 | Assets ₨10,000.00, due ₨0.00 (below nisab) |
| Tasbih: tap ×3 → undo | 3 → 2; cycles 0; state persisted |
| Hijri date | "Jumada I 15, 1448 AH" |

### 3.6 Lecture library

| Check | Result |
| :--- | :--- |
| Cards | 148 |
| Cards with `window.fetch` forced to reject (embedded `catalog.js`) | 148 |
| Payload removed **and** fetch blocked | Honest error + retry, 0 fabricated cards |
| Search `muntakhab` | 2 |
| Series filter | 2 |
| English filter | 17 |
| Clear search | 148 |
| Duplicate badge on `04-002-016` | Present |
| Console errors | 0 |

### 3.7 Articles

| Check | Result |
| :--- | :--- |
| Index cards / unique links | 33 / 33 |
| Search `business` → 1; reset → 33 | Pass |
| Body length range (all 33) | 1,538–2,473 words |
| TOC anchors resolve | 0 missing |
| JSON-LD blocks | 2 per article |
| Stray Markdown | 0 |
| Console errors on Batch 5 pages | 0 |
| Batch 5 H1/title/canonical | Correct on all four |
| Batch 5 TOC links | 11 / 11 / 12 / 11 |
| Batch 5 search destinations | 200 |
| Batch 5 page link sweep | 41 unique destinations, 0 failures |

### 3.8 Download centre

| Check | Result |
| :--- | :--- |
| APK and ZIP links | HTTP 200 |
| `CHECKSUMS.sha256` | HTTP 200; `Cache-Control: max-age=0, must-revalidate` |
| Displayed APK hash | `1a7e021da147303a6e60c6fef8fa05e638f28df0d6c583af192d36ef0bd567d4` (matches file) |
| Displayed bundle hash | `4fbb2c649e15bb19ac4eeaedf977ef6b5f62c5ada0886268a570f7c2aaada3e0` (matches file) |
| APK size / version | 3,127,079 bytes; v1.3.0 (build 10300) |
| Bundle size / file count | 3,010,751 bytes; 206 files; 61 HTML pages; 114 Quran chunks |
| Service worker cache after load | `islamic-portal-shell-v22` |
| Stale-hash defect | Fixed: downloads and `.sha256` are network-first; page fetches with `{cache:'no-store'}` |
| Previous false "v1, v2 and v3 signed" copy | Corrected to state the v1 JAR signature only |

### 3.9 Contact

| Check | Result |
| :--- | :--- |
| Required/email validation | Blocks invalid submit |
| Valid submit | Honest "no backend" panel with GitHub issue + mailto dispatch |
| False "message sent" claim | None |

---

## 4. Data integrity

| Dataset | Expected | Actual | Result |
| :--- | --: | --: | :--- |
| Surahs | 114 | 114 | Pass |
| Ayahs | 6,236 | 6,236 | Pass |
| Offline Quran chunks | 114 files / 6,236 ayahs | 114 files / 6,236 ayahs (4.65 MB) | Pass |
| Hadith | 101 | 101 | Pass |
| Duas | 102 | 102, all with references (99 unique) | Pass |
| Kalimas | 6 | 6 | Pass |
| Sahaba monographs | 52 | 52 | Pass |
| Seerah chapters | 25 | 25 | Pass |
| Prophets narratives | 30 | 30 | Pass |
| History eras / milestones | 12 / 66 | 12 / 66 | Pass |
| Lecture records | 148 (147 unique) | 148 (147 unique) | Pass |
| Tafsir verses | 6 | 6 | Pass |
| Glossary terms | 135 | 135 | Pass |
| Sitemap URLs | 60 unique | 60 unique (offline fallback is `noindex`) | Pass |
| HTML pages | 61 (60 indexable + offline fallback) | 61 | Pass |
| Article body words | 1,500–2,500 each | 1,538–2,473 (33 articles) | Pass |

---

## 5. Build verification

| Artefact | Value |
| :--- | :--- |
| Offline bundle | 206 files, **3,010,751 bytes**, SHA-256 `4fbb2c649e15bb19ac4eeaedf977ef6b5f62c5ada0886268a570f7c2aaada3e0` |
| APK | **3,127,079 bytes**, SHA-256 `1a7e021da147303a6e60c6fef8fa05e638f28df0d6c583af192d36ef0bd567d4` |
| APK version | 1.3.0 (build 10300) |
| APK ZIP entries | 215 (including 114 Quran corpus chunks) |
| APK HTML pages | 61 |
| Nested APK/ZIP inside APK | None |
| APK signature | Valid JAR v1 (`jar verified`, SHA256withRSA, 2048-bit, expires 2054-03-12); `APK Sig Block 42` absent |
| `CHECKSUMS.sha256` | Matches both files byte-for-byte |

Both artefacts were rebuilt after the final content changes. The bundle contains the full 114-surah corpus; the APK embeds the same 114 chunks under `assets/public/`.

---

## 6. Unavailable / not tested

These were **not** executed. They are not counted as passes.

| Item | Reason | Status |
| :--- | :--- | :--- |
| APK installation on Android | `adb` not on PATH; no device/emulator | **BLOCKED** |
| APK v2/v3 signature | `apksigner` / SDK build-tools unavailable | **BLOCKED** |
| 320/375/768/1024/1440 px visual rendering | Browser tool cannot change viewport (`innerWidth` stays 1000) | **UNAVAILABLE** |
| Skip-link `:focus` / focus events | Headless browser cannot grant document focus | **UNAVAILABLE** |
| Screen-reader session (NVDA/JAWS/VoiceOver) | No assistive technology available | **UNAVAILABLE** |
| Lighthouse / Core Web Vitals | No Lighthouse or CrUX access | **UNAVAILABLE** |
| Contrast-ratio calculation | Not performed | **UNAVAILABLE** |
| Audio playback | No audio output in headless environment | **PARTIAL** (URL + wiring verified) |
| Airplane-mode navigation | Browser tool cannot disable the OS network | **UNAVAILABLE** (cache contents verified instead) |
| Video playback in embeds | Requires YouTube session and user gesture | **PARTIAL** (embed URL verified) |
| All 40 Quran editions live | English, Urdu and transliteration are bundled for all 6,236 ayahs; the other 37 registry editions were not fetched | **PARTIAL** |
| Cross-browser (Firefox/Safari/Samsung) | Only Chromium available | **UNAVAILABLE** |

---

## 7. Reproducing

```powershell
# 1. Free port 3000, then run the suite
node test/run-tests.js

# 2. Rebuild distribution artefacts
node scripts/build-offline-bundle.cjs
node scripts/build-complete-apk.cjs

# 3. Verify hashes
Get-Content public/downloads/CHECKSUMS.sha256
Get-FileHash public/downloads/islamic-portal-release.apk -Algorithm SHA256
Get-FileHash public/downloads/islamic-portal-offline-bundle.zip -Algorithm SHA256
```

The test harness requires port 3000 to be free; otherwise it fails while reading the server port.
