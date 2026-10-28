# NoorDeen — Website Test Results

> **Historical snapshot.** Counts, hashes and test totals in this report predate the 28 October 2026 Phase 1 release (1,710 assertions; 61 pages; 114-surah corpus; APK 3,127,079 bytes / `1a7e02…`; bundle 3,010,751 bytes / `4fbb2c…`). See `reports/FINAL_TEST_RESULTS.md` and `reports/FINAL_AUDIT_RESULTS.md` for current figures.

**Date:** 27 October 2026
**Harness:** `test/run-tests.js` (Node.js, run as `node test/run-tests.js`)
**Suites:** 44
**Assertions executed:** **1,663**
**Passed:** **1,663**
**Failed:** **0**
**Harness exit code:** 0
**Verdict:** the automated suite passes. That is a statement about the assertions in the suite, not proof that every page is perfect.

---

## 1. How to reproduce

```powershell
# Port 3000 must be free; the harness starts its own server.
Get-NetTCPConnection -LocalPort 3000 -State Listen -ErrorAction SilentlyContinue |
  ForEach-Object { Stop-Process -Id $_.OwningProcess -Force }

node test/run-tests.js
```

Observed tail of the run:

```text
====================================================
TEST RESULTS SUMMARY:
  Total Tests Executed: 1663
  Passed Tests:         1663
  Failed Tests:         0
  Failed Checks:        0
====================================================

🎉 ALL TESTS PASSED SUCCESSFULLY!
```

**Baseline for comparison:** the previous 27 October run reported **1,589 / 1,589 passing**. This cycle added Suite 44 (Batch 5 law/trade/employment articles) and updated Suite 36 to the current assertion count.

---

## 2. Suite coverage

| Suite | Area | Status |
| :---: | :--- | :---: |
| 1 | Required public files and static assets | Pass |
| 2 | Design system and editorial palette | Pass |
| 3 | 40-language framework, RTL registration | Pass |
| 4 | Quran and religious data integrity (114 surahs, 6,236 ayahs, kalimas, hadith) | Pass |
| 5 | Astronomical and calculation engines | Pass |
| 6 | HTTP server routing and API responses | Pass |
| 7 | PWA, service worker and offline assets | Pass |
| 8 | Technical SEO, canonical, social meta, Schema.org | Pass |
| 9 | Mobile drawer and Capacitor Android scaffolding | Pass |
| 10 | Expanded surah data and Kutub al-Sittah hadiths | Pass |
| 11 | Audio reciter suite and licensing register | Pass |
| 12 | Internal link crawler | Pass |
| 13 | Continue-reading and local persistence | Pass |
| 14 | Janazah and Eid prayer modules | Pass |
| 15 | Android download centre and release APK verification | Pass |
| 16 | Urdu Quran translation mode | Pass |
| 17 | Dua library and filter engine | Pass |
| 18 | Audit documentation and reports | Pass |
| 19 | Editorial depth, E-E-A-T, AdSense compliance | Pass |
| 20 | 3D spatial UI, phonetic search, navigation, i18n | Pass |
| 21 | Translation isolation, protected Arabic, Seerah/Sahaba/History | Pass |
| 22 | Content system, taxonomy and schemas | Pass |
| 23 | Quran system, Study Mode and audio architecture | Pass |
| 24 | Seerah 25-chapter library and provenance | Pass |
| 25 | Sahaba biographies and prophets library | Pass |
| 26 | Islamic history library | Pass |
| 27 | UX, accessibility, responsive consistency | Pass |
| 28 | Technical SEO, multilingual architecture, PWA, Android release | Pass |
| 29 | Mobile responsiveness and app navigation | Pass |
| 30 | Benchmarking, Web Share API, search categories | Pass |
| 31 | Product redesign, localization, Arabic immutability | Pass |
| 32 | Prayer times, zakat engine, tasbih, desktop layout | Pass |
| 33 | Multilingual invariance and scoped direction | Pass |
| 34 | Master baseline, pre-rendered libraries, reports | Pass |
| 35 | Subpath resilience and navigation fallback | Pass |
| 36 | P0 defects, trust transparency, Nisab verification | Pass |
| 37 | PWA raster icons and desktop offline bundle | Pass |
| 38 | Batch 1 articles library (10 articles) | Pass |
| 39 | **Batch 2 articles (topics 11–20)** — new | Pass |
| 40 | **Dr. Israr Ahmed video library and catalog integrity** — new | Pass |
| 41 | **URL resolution, catalog loader, lazy search dataset** — new | Pass |
| 42 | **Daily Companion local dates and streak integrity** | Pass |
| 43 | **Batch 4 family/community articles (4 articles)** | Pass |
| 44 | **Batch 5 law/trade/employment articles (4 articles)** — new | Pass |

Suite 39 checks, for each of the 10 new articles: file exists, ≥30 KB, ≥1,500 words, has a TOC, `FAQPage` + `BreadcrumbList` JSON-LD, a scholarly bibliography, `config.js`, a link to the lecture library, no third-party scripts, and an entry in `search.js`, `sitemap.xml` and `articles/index.html`.

Suite 40 checks: the lecture page exists, uses `youtube-nocookie.com` only, never the tracking embed domain, loads the local catalog, links to `tanzeem.org`, has `BreadcrumbList`; the catalog has 148 records, 7 series, 131 Urdu / 17 English, unique IDs, 11-character YouTube IDs, tanzeem.org source URLs on every record, no orphan series, series counts summing to 148, 147 declared unique uploads, a consistent duplicate flag, and no `.mp4/.m3u8/.webm` URLs anywhere.

Suite 41 checks: `UniversalSearch.resolveUrl` against root, GitHub Pages subpath, fragments, query strings, absolute URLs and `file://` bases; search results, quick pills, the language-modal Quran link and the Quran fallback all use the resolver; the cookie banner builds its privacy link from `getBasePath()`; article pages contain no eager `data.js`; `App.ensureSearchData()` lazy-loads the dataset on first dialog open; alias matching requires at least four characters; Ayatul Kursi resolves to `surah=2&ayah=255`.

Suite 42 checks: Daily Companion uses a local date key rather than UTC, does not require the Friday item outside Friday, records the completion date rather than the page visit, cannot award a second streak day on repeated toggles, and shows an honest zero-streak message after a gap.

Suite 43 checks each Batch 4 article for file existence, ≥30 KB payload, editorial body container, TOC, `FAQPage` + `BreadcrumbList` JSON-LD, scholarly bibliography, `config.js`, no third-party scripts, no stray Markdown, and a body length of 1,500–2,500 words; it also checks search, sitemap and index integration, and a Batch 4 total of 7,000–10,000 words.

Suite 44 applies the same checks to the four Batch 5 articles, adds an explicit "not a fatwa" assertion, and requires a Batch 5 total of 9,000–10,000 words.

---

## 3. Browser verification (Chromium via the automated browser tool)

Checked on a fresh server port with the service worker unregistered, so cached shells could not mask stale files.

| Page | What was verified |
| :--- | :--- |
| `index.html` | 9 knowledge-hub cards render, including the new "Dr. Israr Ahmed Lectures" card; lecture card text shows 148 records / 147 unique / 7 series / 131 Urdu / 17 English |
| `articles/index.html` | 20 article cards total; 10 in the Batch 2 container; all 10 Batch 2 links resolve to the expected slugs |
| `articles/fasting-and-ramadan.html` | H1 renders, 2,043 words of article text, 12 TOC links, **0 broken anchors**, `BreadcrumbList` + `FAQPage` (5 questions) JSON-LD, bibliography present, lecture-library link in nav, **0 console errors** |
| `dr-israr-ahmed.html` | 148 cards render, "148 of 148 lecture records shown", stat row reads 148 / 147 / 7 / 131 / 17, duplicate badge appears on `04-002-016` ("Same upload as 04-002-001"), language filter returns "17 of 148", click-to-load embed URL is `https://www.youtube-nocookie.com/embed/8FXHsF8AigA?autoplay=1&rel=0`, **0 console errors** |
| `download-app.html` | No "100% offline" wording remains; now states 60 pages / ~1.34 MB ZIP, ten bundled surahs and 104 surahs needing network; both SHA-256 fields are filled from `downloads/CHECKSUMS.sha256` at runtime |
| Global search | Opening the search dialog and typing `ramadan` returns the Ramadan article **first**, then `calendar.html`, then a prophet entry; `israr` returns the lecture library; `seerah` returns the Seerah article first. 0 console errors. |

Search ranking change made during this cycle: title/snippet matches now score 90 while keyword-only matches score 80, so an article whose title contains the query outranks incidental keyword hits.

### 3.1 27 October cycle

| Check | Result |
| :--- | :--- |
| `dr-israr-ahmed.html` with `window.fetch` forced to reject | 148 cards rendered from the embedded `catalog.js` payload |
| Same page with payload removed **and** fetch blocked | Distinct error state + retry; **0 fabricated records** |
| Catalog search `muntakhab` / series filter / English filter / reset | 2 / 2 / 17 / 148 |
| Article page search `yaseen`, `intention`, `mercy`, `ayatul kursi` | Results returned after lazy `data.js` load |
| Six `zakat` results + six quick pills from an article page | All HTTP 200 |
| Cookie-banner privacy link from an article page | `/privacy.html` → 200 |
| `ayatul kursi` deep link | `quran.html?surah=2&ayah=255`; `#ayah-255` highlighted and scrolled into view |
| `سورہ واقعہ` / `tabarakallazi` | Surah 56 first / Surah 67 only |
| Daily Companion, Tuesday | 4/4 items, streak 1; retoggle stays 1; continue 3→4; 3-day gap resets to 0 with honest message |
| Rendered link crawl, 60 pages | 3,812 anchors, 80 unique destinations, 0 broken, 0 empty/textless anchors; the four Batch 5 pages were swept separately (41 unique destinations, 0 failures) |

### 3.2 Batch 4 verification

| Check | Result |
| :--- | :--- |
| `honouring-parents-in-islam.html` | H1 correct; 10 TOC links; 2,257 body words; FAQ/Breadcrumb schema; canonical URL; 0 console errors |
| `islamic-parenting-guide.html` | H1 correct; 10 TOC links; 2,107 body words; schema/canonical present; 0 console errors |
| `islamic-inheritance-basics.html` | H1 correct; 9 TOC links; 2,072 body words; schema/canonical present; 0 console errors |
| `rights-of-neighbours-in-islam.html` | H1 correct; 10 TOC links; 1,971 body words; schema/canonical present; 0 console errors |
| Search from article page: `parenting` | Parenting article first; href `/articles/islamic-parenting-guide.html` |
| Search from article page: `inheritance` | Inheritance article; destination HTTP 200 |
| Search from article page: `neighbour` | Neighbours article first, manners article second; destination HTTP 200 |
| `articles/index.html` | Batch 4 details block and cards #26–29 present; 33 cards / 33 unique links |

### 3.3 Batch 5 verification

| Check | Result |
| :--- | :--- |
| `business-ethics-and-honest-trade.html` | H1/title/canonical correct; 11 TOC links; 2,371 body words; FAQ/Breadcrumb schema; "not a fatwa" present; 0 console errors |
| `contracts-and-promises-in-islam.html` | H1/title/canonical correct; 11 TOC links; 2,473 body words; schema present; 0 console errors |
| `debt-and-loans-in-islam.html` | H1/title/canonical correct; 12 TOC links; 2,473 body words; schema present; 0 console errors |
| `workers-rights-in-islam.html` | H1/title/canonical correct; 11 TOC links; 2,411 body words; schema present; 0 console errors |
| Search from article page: `business ethics` | Business article first; href `/articles/business-ethics-and-honest-trade.html` |
| Search from article page: `contract promises` | Contracts article; destination HTTP 200 |
| Search from article page: `debt repayment` | Debt article first; destination HTTP 200 |
| Search from article page: `workers wages` | Workers article; destination HTTP 200 |
| `articles/index.html` | Batch 5 details block and cards #30–33 present; 33 cards / 33 unique links; filter 1 / 3 / 3 / 1 and reset 33 |
| Link sweep of four Batch 5 pages | 41 unique destinations, 0 failures; no duplicate IDs or `undefined`/`NaN`/`${` artefacts |

---

## 4. Defects found and fixed in this cycle

These were real defects surfaced by testing, not cosmetic changes:

1. **Shadowing static search modal (13 pages).** `dr-israr-ahmed.html`, `history.html`, `prophets.html` and the 10 new articles contained a hardcoded `#search-modal` with `#global-search-input`, while `app.js` creates a different dialog with `#modal-search-input`. The static markup made the dialog appear but never search. The markup was removed from all 13 pages and from the article generator template.
2. **Fabricated tafsir fallback.** `quran.js` displayed invented "Tafsir Ibn Kathir" and "Tafsir al-Jalalayn" paragraphs for verses with no bundled commentary. Only 6 verses (1:1, 1:2, 1:5, 1:6, 2:255, 112:1) have real bundled text. The fallback now states plainly that no commentary is bundled and links to Quran.com.
3. **Stale hardcoded APK checksum.** `download-app.html` inlined an old SHA-256. It now loads `downloads/CHECKSUMS.sha256` and shows "Unavailable — open CHECKSUMS.sha256" if the fetch fails. A test now forbids any 64-hex literal in that page.
4. **Duplicate YouTube ID broke a test assumption.** Two archive listings embed the same upload (`c6czfEhWVo8`). Instead of deleting a real source record, records now carry `isDuplicate` / `duplicateOf`, and the catalog declares 147 unique uploads out of 148 records. Suite 40 asserts both numbers.
5. **Service worker served stale pages.** The cache was `v5`; with 13 pages changed, browsers kept the old shell. Cache bumped to `v6` (`islamic-portal-shell-v6`).
6. **Stale page counts.** Several pages and the bundle README still said 36/37 pages; corrected to 47.
7. **Stale checksum test.** Suite 36 asserted the APK hash was inlined in the HTML, which contradicts the runtime-loading fix. The assertion now requires runtime loading and forbids hardcoded digests.

### 4.1 27 October cycle

8. **Lecture catalog `Failed to fetch`.** `fetch()` of local JSON is blocked under `file://`. A generated `catalog.js` payload is now preferred, with schema validation and distinct `file` / `network` / `invalid` / `empty` states plus retry.
9. **Article-page search returned nothing.** Article pages omit `data.js`; `App.ensureSearchData()` now loads it on first dialog open and re-runs the query.
10. **Nested result URLs 404'd.** Root-relative index URLs were inserted directly into `href`; all runtime links now pass through `resolveUrl`.
11. **Cookie-banner privacy link 404'd on articles.** Hard-coded relative link replaced with `getBasePath()`.
12. **Daily Companion date/streak defects.** UTC date key replaced with a local key; nonexistent `maghrib` ID corrected; Friday item made optional outside Friday; streaks award on completion, not visit.
13. **Wrong dua anchor.** `#dua-sayyid-istighfar` corrected to `#dua-sayyidul-istighfar`.
14. **Alias search ranked the wrong surah.** One-letter containment matches are now blocked; `سورہ واقعہ` → 56, `tabarakallazi` → 67 only.
15. **Ayatul Kursi lacked a deep link.** Now returns `surah=2&ayah=255`, and the reader highlights the ayah.
16. **Markdown leakage on library rebuild.** `batch-2b.cjs` stored `*decision*`; a full rebuild would have rendered literal asterisks. Replaced with `<em>decision</em>` and rebuilt; 0 stray Markdown across 33 articles.
17. **Stale page/size/test copy.** Download page said 56 pages / 1.29 MB; About page said 1,589 assertions. Updated to 60 pages / ~1.34 MB and 1,663 assertions, and Suite 36 now asserts the new count.
18. **UTF-8 mojibake in generated titles.** A PowerShell rewrite of `build-articles.cjs` re-encoded em dashes. Restored from git and re-applied the version bump with the `edit` tool; titles now render correctly.

---

## 5. What was *not* tested

Being explicit, because these gaps matter more than the green number:

- **No Android device or emulator test.** `adb devices` returned an empty list. The APK was built and structurally verified, never installed or launched.
- **No cross-browser run.** Verification was Chromium-only. Firefox, Safari/iOS, and Samsung Internet were not exercised.
- **No screen-reader or keyboard-only audit** was performed in this cycle; accessibility assertions in the suite are static-markup checks.
- **No load, performance or Lighthouse run** in this cycle.
- **No live third-party dependency check.** Quran Cloud API, Tanzil audio CDN and YouTube availability were not re-tested; the suite does not depend on them.
- **No scholarly review.** Content accuracy claims rest on the cited printed sources, not on a scholar's sign-off.
- **GitHub Pages deployment was not re-verified**; the site was tested from the local Node server.
