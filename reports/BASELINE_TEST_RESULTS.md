# BASELINE TEST RESULTS — NoorDeen

> **Historical snapshot.** Counts, hashes and test totals in this report predate the 28 October 2026 Phase 1 release (1,710 assertions; 61 pages; 114-surah corpus; APK 3,127,079 bytes / `1a7e02…`; bundle 3,010,751 bytes / `4fbb2c…`). See `reports/FINAL_TEST_RESULTS.md` and `reports/FINAL_AUDIT_RESULTS.md` for current figures.

**Baseline commit:** `81de7e4`
**Branch:** `main`
**Working tree:** clean
**Date:** 26 October 2026
**Command:** `node test/run-tests.js`
**Node:** v25.6.1
**Java:** OpenJDK 17.0.10 (present)
**Android SDK:** absent (see `ANDROID_BUILD_REPORT.md`)

---

## 1. Result

```
Total Tests Executed: 1250
Passed Tests:         1250
Failed Tests:         0

ALL TESTS PASSED SUCCESSFULLY
```

The suite is `test/run-tests.js` and contains **38 suites**. It is the authoritative regression gate for this project.

---

## 2. What the 38 suites cover

| Suite | Area |
| ---: | :--- |
| 1 | Required public files and static assets |
| 2 | Design system and CSS tokens |
| 3 | 40-language framework |
| 4 | Quran and religious data integrity |
| 5 | Astronomical tools and mathematics |
| 6 | HTTP server clean routing and APIs |
| 7 | PWA, service worker and offline assets |
| 8 | Technical SEO, canonical and social metadata |
| 9 | Mobile drawer and Android Capacitor scaffolding |
| 10–20 | Quran data, prayer times, Hijri calendar, Zakat maths, search |
| 21–31 | Page-level content and navigation checks |
| 32 | Zakat calculation correctness |
| 33–37 | Accessibility, PWA, manifest, service worker, sitemap |
| 38 | Article batch depth, schema, bibliography and search indexing |

Representative assertions observed in the baseline run:

- `Suite 38: Batch 1 articles total over 23,000 words (actual: 26,385 words)`
- `Suite 38: articles/... has comprehensive educational depth (>= 2,000 words)`
- `Suite 38: articles/... includes Schema.org FAQPage structured data`
- `Suite 38: search.js indexes articles/...`
- `Suite 32: Zakat total assets calculated accurately`
- `Content system validation passed with zero errors (22/22 checks passed)`

---

## 3. Independent checks run outside the suite

| Check | Result |
| :--- | :--- |
| Broken internal link targets (all 36 HTML pages) | **0** |
| Root-relative links that break on `/NoorDeen/` subpath | **0** |
| Sitemap URLs with no local file | **0** |
| HTML files absent from sitemap | **0** |
| `ISLAMIC_DATA.surahs` | 114 |
| `ISLAMIC_DATA.juzList` | 30 |
| `ISLAMIC_DATA.offlineSurahs` | 10 surahs / 49 ayahs |
| `ISLAMIC_DATA.hadiths` | 101 |
| `ISLAMIC_DATA.duas` | 102 |
| `ISLAMIC_DATA.kalimas` | 6 |
| i18n language entries | 40 |
| i18n translation dictionaries | 11 |
| `data-i18n` attributes per page | 9–13 |
| Published APK size | 8,364,255 bytes |
| APK SHA-256 | `a5f86e4f54829d379d9d5055e0cf4d07d73ef65b8f08da4bafa7f007419edd61` |

---

## 4. Known gaps the passing suite does **not** catch

A green suite does not mean the product is complete. The following were verified manually and are **not** covered by the baseline assertions:

1. The homepage and `download-app.html` overclaimed a complete offline Quran and Tafsir Ibn Kathir.
2. Only 10 of 114 surahs are bundled; the rest need `api.alquran.cloud`.
3. Only 11 of 40 advertised languages have translation dictionaries.
4. The published APK embeds a nested copy of itself and the offline ZIP.
5. The APK cannot be rebuilt locally because the Android SDK is missing.
6. Signing passwords are committed in plaintext.
7. No Dr. Israr Ahmed video library existed.
8. Only 10 of the 100-topic roadmap are published.

These gaps are the subject of the implementation batches that follow. Post-change test results are recorded in `reports/WEBSITE_TEST_RESULTS.md`.
