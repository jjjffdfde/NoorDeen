# NoorDeen — Final Audit Results (29 October 2026, Batch 6a cycle)

**Audit date:** 29 October 2026
**Commit baseline at start:** `5f3facd`
**Environment:** Windows, Node.js local server on `http://localhost:3400`, Chromium via the automated browser tool, test harness on port 3000.
**Verdict:** Phase 1 (complete offline Quran), Phase 2 (verbatim tafsir, asbab al-nuzul and a thematic verse index) and Batch 6a (four Seerah articles, roadmap topics 53–56) are implemented and verified in Chromium and by 2,023 assertions. The English Jalalayn translation licence still needs owner confirmation, and device-level Android verification remains blocked by the environment.

---

## 0. Phase 1 — full offline Quran corpus

| # | Deliverable | Evidence | Status |
| --: | :--- | :--- | :---: |
| 1 | 114-surah corpus | 114 JSON chunks, 6,236 ayahs, 4,653,659 bytes; per-surah counts validated against canonical metadata | **Done** |
| 2 | Four fields per ayah | Arabic (Uthmani), English (Saheeh International), Urdu (Jalandhry), transliteration; 0 missing | **Done** |
| 3 | Reproducible ingestion | `scripts/fetch-quran-corpus.cjs` aborts without writing if any count differs | **Done** |
| 4 | Offline store | `public/js/quran-store.js`: IndexedDB `noordeen-quran`, manifest/download helpers, khatam maths | **Done** |
| 5 | Reader integration | Ya-Sin 83/83 and Al-Kahf 110/110 rendered in Chromium; 0 console errors | **Done** |
| 6 | Persistent player | Surah/ayah/reciter/speed/repeat stored and restored after reload; Media Session handlers | **Done** |
| 7 | Khatam planner | 15/30/60-day goals; 30-day → 208 ayahs / 21 pages per day; mark-surah-complete → 110 ayahs / 1.8% | **Done** |
| 8 | Offline shell | `offline.html` pre-cached and `noindex`; SW `v22`; corpus cache holds 114 entries | **Done** |
| 9 | Copy corrections | Homepage, About and download page now state 114 surahs; false v2/v3 signing claim removed | **Done** |
| 10 | Tests | 1,710 assertions across 46 suites, 0 failures | **Done** |

**Not done in Phase 1:** tafsir beyond 6 verses, asbab al-nuzul, thematic verse index, audio bundling, airplane-mode radio-off test, device install. Phase 2 addresses the first three below.

---

## 0A. Phase 2 — authentic tafsir, asbab al-nuzul and thematic index

| # | Deliverable | Evidence | Status |
| --: | :--- | :--- | :---: |
| 1 | Verbatim tafsir corpus | 114 per-surah chunks; Jalalayn English **6,236/6,236** verses, Jalalayn Arabic **6,010/6,236**, asbab Arabic **275 verses / 50 surahs / 200 reports** | **Done** |
| 2 | Reproducible ingestion | `scripts/fetch-tafsir.cjs` with `--resume`, `--check` and `--limit`; validates ayah ranges, blanks, raw HTML and U+FFFD; records source anomalies | **Done** |
| 3 | Rights and provenance | `manifest.json` + rewritten `registry.json` record author, translator, publisher, licence, rights note and measured coverage per edition | **Done** |
| 4 | Offline store | `public/js/tafsir-store.js`: IndexedDB `noordeen-tafsir`, memory → IDB → HTTP, chunk validation, manifest/edition/coverage APIs | **Done** |
| 5 | Study Mode integration | Four options: Jalalayn English, Jalalayn Arabic, asbab Arabic, NoorDeen editorial summary; edition/rights notes, RTL Arabic, honest gap states, race-safe async rendering | **Done** |
| 6 | Thematic index | `scripts/build-thematic-index.cjs` → 30 themes / 5,639 matches; searchable UI in `quran.html`; Suite 48 recomputes every count | **Done** |
| 7 | Service worker | `v23` at Phase 2 close (now `v24` after Batch 6a); `islamic-portal-tafsir-v1`; manifest + themes pre-cached, surah chunks cached on demand | **Done** |
| 8 | Tests | 1,864 assertions across 48 suites at Phase 2 close (now 2,023 across 49 after Suite 49); Suites 47–48 added | **Done** |

**Honest limits:** the English Jalalayn translation is © Royal Aal al-Bayt Institute and bundled for attributed non-commercial use only — **owner review required**. The Arabic digitisation omits 226 verses; every gap is named and never filled from another edition. Asbab reports are Arabic only and their chains were not re-graded. The thematic index is a keyword finding aid, not a scholarly classification.

---

## 1. What the previous cycle set out to fix

| # | Reported problem | Root cause | Status |
| --: | :--- | :--- | :---: |
| 1 | Lecture catalog showed `Failed to fetch` | `fetch()` of local JSON is blocked under `file://` | **Fixed** |
| 2 | Search results from article pages 404'd | Root-relative URLs resolved against `/articles/` | **Fixed** |
| 3 | Search from article pages returned nothing | `data.js` intentionally absent; no lazy load | **Fixed** |
| 4 | Cookie-banner privacy link 404'd on articles | Hard-coded `href="privacy.html"` | **Fixed** |
| 5 | Daily Companion linked to a missing dua anchor | ID mismatch (`sayyid` vs `sayyidul`) | **Fixed** |
| 6 | Alias search ranked wrong surahs first | One-letter containment matches | **Fixed** |
| 7 | Daily Companion reset/duplicated streaks | UTC date key + visit-based award | **Fixed** |
| 8 | Ayatul Kursi search did not deep-link to 2:255 | Missing `ayah` parameter | **Fixed** |

---

## 2. Evidence per fix

### 2.1 Lecture catalog (`dr-israr-ahmed.html`)

- `scripts/build-lecture-catalog-js.cjs` generates `public/data/dr-israr/catalog.js` exposing `window.__DR_ISRAR_CATALOG__` from `catalog.json`.
- Loader prefers the embedded payload, then falls back to `fetch`, validates the schema, and distinguishes `file` / `network` / `invalid` / `empty`.
- With `window.fetch` stubbed to reject, the page still rendered **148 cards**.
- With the payload removed **and** fetch blocked, the page showed a specific error and a retry control, with **0 fabricated records**.
- Search `muntakhab` → 2/148; series filter → 2/148; English filter → 17/148; reset → 148/148.
- Service worker pre-caches `catalog.js`.

### 2.2 URL resolution

- Added `UniversalSearch.resolveUrl(url, basePath)` and `App.resolveUrl(url)`.
- Applied to search result links, quick pills, language-modal Quran link, Quran offline fallback.
- Six `zakat` results and six quick pills, clicked from an article page, returned **HTTP 200**.
- `getBasePath()` returns `/` locally, `/NoorDeen/` on GitHub Pages, and the bundle directory under `file://`.

### 2.3 Lazy search dataset

- `App.ensureSearchData()` injects `js/data.js` on first dialog open and re-runs the query.
- Verified `yaseen`, `intention`, `mercy`, `ayatul kursi` from an article page.
- Article pages still ship without `data.js` (asserted).

### 2.4 Daily Companion

- Local date key (`getLocalDateKey()`) replaces UTC `toISOString()`.
- Nonexistent `maghrib` ID corrected to `prayer`.
- Friday item required only on Friday.
- Streak records the completion date, not the page visit; repeated toggles cannot double-award.
- Verified: Tuesday 4/4, streak 1; retoggle stays 1; continue 3→4; a 3-day gap resets to 0 and shows "Start your streak today".

### 2.5 Ayatul Kursi

- Search returns `quran.html?surah=2&ayah=255`.
- Reader highlights `#ayah-255` and scrolls to it.

### 2.6 Batch 4 articles

- Four new pages generated from `scripts/article-content/batch-4a.cjs`: `honouring-parents-in-islam`, `islamic-parenting-guide`, `islamic-inheritance-basics`, `rights-of-neighbours-in-islam`.
- Body words: 2,257 / 2,107 / 2,072 / 1,971 (8,407 total); all inside 1,500–2,500.
- Each page loaded in Chromium: correct H1 and title, 9–10 TOC links, `FAQPage` + `BreadcrumbList` JSON-LD, canonical URL, `config.js`, no stray Markdown, 0 console errors.
- Search from an article page: `parenting` → parenting article first; `inheritance` → inheritance article; `neighbour` → neighbours article first. All destinations HTTP 200.
- Integrated into `js/search.js`, `sitemap.xml` (56 URLs) and `articles/index.html` (cards #26–29, details block 106–109).
- Rebuild regression found and fixed: `batch-2b.cjs` contained `*decision*`, which would have rendered literal asterisks; replaced with `<em>decision</em>`.
- Stale copy found and fixed: download page now says 56 pages / ~1.29 MB; About page now says 1,589 assertions.

### 2.7 Batch 5 articles

- Four new pages generated from `scripts/article-content/batch-5a.cjs`: `business-ethics-and-honest-trade`, `contracts-and-promises-in-islam`, `debt-and-loans-in-islam`, `workers-rights-in-islam`.
- Body words: 2,371 / 2,473 / 2,473 / 2,411 (9,728 total); all inside 1,500–2,500.
- Each page loaded in Chromium: correct H1 and title, 11 TOC links, `FAQPage` + `BreadcrumbList` JSON-LD, canonical URL, `config.js`, no stray Markdown, an explicit "not a fatwa" statement, 0 console errors.
- Search from an article page: `business ethics` → business article first; `contract promises` → contracts article; `debt repayment` → debt article first; `workers wages` → workers article. All destinations HTTP 200.
- Integrated into `js/search.js`, `sitemap.xml` (60 URLs) and `articles/index.html` (cards #30–33, details block 110–113).
- Link sweep of the four pages: 41 unique destinations, 0 failures; no duplicate IDs or `undefined`/`NaN`/`${` artefacts.
- UTF-8 regression found and fixed: a PowerShell rewrite of `build-articles.cjs` corrupted the em dash in generated titles; restored from git and re-applied the version bump with the `edit` tool.
- Stale copy updated: download page now says 60 pages / ~1.34 MB; About page now says 1,663 assertions.

---

## 3. Link and fragment audit

### 3.1 Rendered crawl (Chromium, all pages)

| Metric | Result |
| :--- | --: |
| Pages loaded | 52 |
| Page load errors | 0 |
| Unique same-origin destinations (including JS-created links) | 123 |
| Broken destinations (non-200) | **0** |
| Empty `href` / `href="#"` / `javascript:` | **0** |
| Anchors with no text | **0** |

### 3.2 Post-change static + HTTP re-check

Re-run after the final edits and rebuild:

| Metric | Result |
| :--- | --: |
| HTML pages scanned | 60 |
| Unique internal destinations requested | 80 |
| Non-200 | **0** |
| Empty / hash-only href | 0 |
| `javascript:` href | 0 |
| Textless anchors | 0 |
| Anchors scanned | 3,812 |

The single non-200 and all seven fragment flags are the same documented false positives recorded in `BROKEN_LINKS_AND_EMPTY_CONTENT.md`; no new defect was introduced.

---

## 4. Automated tests

```
node test/run-tests.js

Total Tests Executed: 2023
Passed Tests:         2023
Failed Tests:         0
```

- Suites: 49 (Suites 45–46 added for the offline corpus and the Phase 1 player/khatam/offline shell; Suites 47–48 added for the Phase 2 tafsir corpus and thematic index; Suite 49 added for the Batch 6a Seerah articles).
- Suite 41: URL resolution, catalog parity/loader, cookie banner, lazy search, alias guards.
- Suite 42: Daily Companion local date, streak award/reset, Friday optionality, honest zero state.
- Suite 43: Batch 4 file/TOC/schema/bibliography/word-count/search/sitemap/index integration.
- Suite 44: Batch 5 file/TOC/schema/bibliography/word-count/"not a fatwa"/search/sitemap/index integration.
- Suite 45: 114 chunks, 6,236 ayahs, canonical per-surah counts, four fields per ayah, no BOM, no duplicated basmalah, spot checks.
- Suite 46: IndexedDB store, khatam maths, repeat/speed cycles, Media Session, corpus precache, offline fallback.
- Suite 47: 114 tafsir chunks, measured edition coverage, rights metadata, Surah 96 anomaly, honest registry, editorial relabelling, Study Mode wiring, tafsir cache.
- Suite 48: 30 themes, fresh keyword recount, reference validity, 40-reference cap, snippet integrity, UI wiring and deep links.
- Suite 49: Batch 6a file depth, prose core, TOC anchors, H2/H3, FAQ/Breadcrumb schema, bibliography, source-caution labelling, no third-party scripts, unique IDs, search/sitemap/catalogue registration and roadmap status.
- No assertion was skipped.

---

## 5. Build artefacts

Version `?v=20261029b`, app version 1.3.0 (build 10300), service-worker cache `v24`.

| Artefact | Bytes | SHA-256 |
| :--- | --: | :--- |
| `public/downloads/islamic-portal-offline-bundle.zip` | 5,008,445 | `3bbc577e83f8cc8023623aee606890f751311c3f18a619197c83af0230e46cd2` |
| `public/downloads/islamic-portal-release.apk` | 5,148,693 | `019002cf75f63a18bf2ca5b544b22ccbab0da9ab9ff240e44906a9f9e84ed32b` |

- APK: 337 ZIP entries including 114 Quran corpus chunks, **114 tafsir chunks** and 65 HTML pages; bundle: 328 files including the same 114 Quran chunks, 114 tafsir chunks and 65 pages.
- `catalog.js`, `catalog.json`, `app.js`, `search.js`, `quran.js`, `quran-store.js`, `tafsir-store.js`, `thematic-index.js`, `config.js`, `offline.html`, all HTML and the service worker hash-match `public/` inside both artefacts.
- All four Batch 6a pages are present in both artefacts and hash-match the working tree.
- APK contains `?v=20261029b`, the tafsir store, the thematic index, the lazy search loader, the alias guards, the 2:255 deep link, the full Quran corpus and the full tafsir corpus.
- `jarsigner -verify` → `jar verified` (v1 only; no v2/v3 block).
- `CHECKSUMS.sha256` matches both files.

---

## 6. Live deployment verification (GitHub Pages)

### 6.1 Phase 1 deployment (this cycle) — verified

Deployed commit: `0fe41f0b9ec8310907614413733463dbb720fb47` on `gh-pages` (tree from `732c221:public`), pushed as `fe31138..0fe41f0`.

Every check below was run against the live origin with a cache-busting query string, after the first poll still served the previous build (GitHub Pages CDN `max-age=600`).

| Live URL | Result |
| :--- | :--- |
| `https://jjjffdfde.github.io/NoorDeen/service-worker.js` | 200; `CACHE_VERSION = 'v22'` |
| `.../about.html` | 200; states **1,710 assertions**; the old 1,663 figure is gone |
| `.../data/quran/manifest.json` | 200; 114 surah records |
| `.../data/quran/surahs/001.json` … `114.json` | **all 114 return 200**; 6,236 ayahs and **4,653,659 bytes** total, byte-identical to the local corpus |
| Spot counts | 001 = 7 ayahs, 036 = 83, 114 = 6 — matching canonical metadata |
| `.../download-app.html` | 200; states 114 surahs; no "ten bundled / 49 ayahs / 1.34 MB" text; v1 JAR signature wording present; hashes populated at runtime from `CHECKSUMS.sha256` |
| `.../downloads/islamic-portal-release.apk` | 200; **3,127,079 bytes**; live SHA-256 `1a7e021da147303a6e60c6fef8fa05e638f28df0d6c583af192d36ef0bd567d4` |
| `.../downloads/islamic-portal-offline-bundle.zip` | 200; **3,010,751 bytes**; live SHA-256 `4fbb2c649e15bb19ac4eeaedf977ef6b5f62c5ada0886268a570f7c2aaada3e0` |
| `.../downloads/CHECKSUMS.sha256` | 200; both hashes match the served files |
| `.../offline.html` | 200; `noindex` present |
| `.../sitemap.xml` | 200; 60 `<loc>` entries; `offline.html` correctly absent |

The corpus check downloaded all 114 chunks over HTTPS, parsed each one and summed the ayah counts — no failures, no parse errors.

### 6.4 Phase 2 deployment (this cycle) — verified

Deployed commit: `5c135b90732c3b3357aab442be70f2d77ea5c411` on `gh-pages` (tree from `71350d1:public`), pushed as `9aed31f..5c135b9`.

| Live URL | Result |
| :--- | :--- |
| `https://jjjffdfde.github.io/NoorDeen/service-worker.js` | 200; `CACHE_VERSION = 'v23'` |
| `.../about.html` | 200; states **1,864 assertions** and describes the tafsir/asbab and thematic-index validation |
| `.../quran.html` | 200; loads `js/tafsir-store.js?v=20261029a` and `js/thematic-index.js?v=20261029a`; contains the thematic-index section and four tafsir options |
| `.../data/tafsir/manifest.json` | 200; 114 surahs, 6,236 ayahs, 3 verbatim editions |
| `.../data/tafsir/themes.json` | 200; 30 themes / 5,639 keyword matches |
| `.../data/tafsir/surahs/001.json` | 200; 7 ayahs with English and Arabic Jalalayn text |
| `.../downloads/islamic-portal-release.apk` | 200; **5,096,957 bytes**; live SHA-256 `e1b2d5b2bfcc5f3fdf9a03744b6ae51db2b6f783f223ff087cbb491676d8f08d` |
| `.../downloads/islamic-portal-offline-bundle.zip` | 200; **4,957,506 bytes**; live SHA-256 `9dde2ee31be92339b639d85d12bc17c357afb6693d8c428184f2e8941e37f162` |
| `.../downloads/CHECKSUMS.sha256` | 200; both hashes match the served files |
| `.../sitemap.xml` | 200; 60 `<loc>` entries; `offline.html` correctly absent |
| `.../offline.html` | 200; `noindex` present |

The GitHub Pages CDN continued to serve the previous `about.html` for several minutes after the push (`max-age=600`), while the new artefacts and tafsir data were already live. The check was repeated after cache expiry and served the Phase 2 build.

Chromium check on the live origin (after the service worker activated): `v23` controlled the page; the shell cache held 53 entries, `islamic-portal-quran-v1` held all **114** Quran chunks, and `islamic-portal-tafsir-v1` held the manifest, themes and study content. Study Mode rendered the Jalalayn English text with the Royal Aal al-Bayt attribution; the mercy theme rendered 40 capped references linking to `/NoorDeen/quran.html?surah=1&ayah=1`; 0 console errors.

### 6.5 Batch 6a deployment (this cycle) — verified

Deployed commit: `b930b7df756aba7456ae50d93b56c1a8df63cd03` on `gh-pages` (tree from `444377f:public`), pushed as `5c135b9..b930b7d`.

| Live URL | Result |
| :--- | :--- |
| `.../articles/pre-islamic-arabia-jahiliyyah.html` | 200; 50,133 bytes; H1 “Pre-Islamic Arabia: The World That Received the Qur’an” |
| `.../articles/makkan-persecution-and-resilience.html` | 200; 45,490 bytes; correct H1 |
| `.../articles/isra-and-miraj-night-journey.html` | 200; 42,975 bytes; correct H1 |
| `.../articles/hijrah-to-madinah.html` | 200; 44,012 bytes; correct H1 |
| `.../articles/index.html` | 200; 152,684 bytes; Batch 6a block present and all four pages linked |
| `.../service-worker.js` | 200; `CACHE_VERSION = 'v24'` |
| `.../about.html` | 200; states **2,023 assertions** |
| `.../sitemap.xml` | 200; **64** `<loc>` entries, including all four new URLs; `offline.html` absent |
| `.../offline.html` | 200; `noindex` present |
| `.../downloads/islamic-portal-release.apk` | 200; **5,148,693 bytes**; SHA-256 `019002cf75f63a18bf2ca5b544b22ccbab0da9ab9ff240e44906a9f9e84ed32b` |
| `.../downloads/islamic-portal-offline-bundle.zip` | 200; **5,008,445 bytes**; SHA-256 `3bbc577e83f8cc8023623aee606890f751311c3f18a619197c83af0230e46cd2` |

The first live check, run immediately after the push, still served the Phase 2 build (four 404s, 60 sitemap URLs, old APK). A re-check roughly three minutes later served the Batch 6a build; this is the same GitHub Pages CDN `max-age=600` behaviour recorded in §6.4, not a deployment failure.

Chromium check on the live origin after the service worker updated: `v24` controlled the page and `islamic-portal-shell-v24` replaced the v23 shell cache (58 entries); `islamic-portal-quran-v1` still held all **114** Quran chunks and `islamic-portal-tafsir-v1` held 2 entries. The Hijrah article rendered with 13 TOC links and 2 JSON-LD blocks; search for `hijrah` returned the new article first; 0 console errors.

Local integrity checks: the APK (337 entries) and bundle (328 entries) were both extracted and compared byte-for-byte against `public/`; the four articles, `articles/index.html`, `service-worker.js` and `sitemap.xml` all matched, and `CHECKSUMS.sha256` matches both served files.

### 6.2 Batch 5 deployment (previous cycle, historical) — verified

Deployed commit: `fe311386d8bbc16ccc46096baa7c252a96ae28b5` on `gh-pages` (tree from `b61587d:public`).

| Live URL | Result |
| :--- | :--- |
| `https://jjjffdfde.github.io/NoorDeen/index.html` | 200; references `?v=20261027h` |
| `.../articles/business-ethics-and-honest-trade.html` | 200; 40,300 bytes |
| `.../articles/contracts-and-promises-in-islam.html` | 200; 42,573 bytes |
| `.../articles/debt-and-loans-in-islam.html` | 200; 41,627 bytes |
| `.../articles/workers-rights-in-islam.html` | 200; 39,794 bytes |
| `.../articles/index.html` | 200; 140,587 bytes; links all four Batch 5 pages |
| `.../sitemap.xml` | 200; 60 `<loc>` entries including all four Batch 5 URLs |
| `.../about.html` | 200; states 1,663 assertions |
| `.../service-worker.js` | 200; `CACHE_VERSION = 'v21'` |
| `.../downloads/islamic-portal-release.apk` | 200; 1,503,077 bytes; live SHA-256 `29ede4bd82d086fa…` matches local |
| `.../downloads/islamic-portal-offline-bundle.zip` | 200; 1,401,639 bytes; live SHA-256 `a3493559328723c1…` matches local |
| `.../downloads/CHECKSUMS.sha256` | 200; both hashes match the served files |

The deployment push reported `044fea4..fe31138 -> gh-pages`. The GitHub Pages CDN served the previous build for several minutes (`max-age=600`); a re-check after cache expiry served `?v=20261027h` / SW `v21` and all four Batch 5 pages.

### 6.3 Batch 4 deployment (historical)

Deployed commit: `044fea4` on `gh-pages` (tree from `8d9b903:public`).

| Live URL | Result |
| :--- | :--- |
| `https://jjjffdfde.github.io/NoorDeen/index.html` | 200; references `?v=20261027g` |
| `.../articles/honouring-parents-in-islam.html` | 200; Batch 4 content live |
| `.../articles/islamic-parenting-guide.html` | 200; H1, canonical and 2,064 rendered body words verified in Chromium; 0 console errors |
| `.../articles/islamic-inheritance-basics.html` | 200; Batch 4 content live |
| `.../articles/rights-of-neighbours-in-islam.html` | 200; Batch 4 content live |
| `.../articles/index.html` | 200; links all four Batch 4 pages |
| `.../sitemap.xml` | 200; 56 `<loc>` entries including all four Batch 4 URLs |
| `.../js/search.js` | 200; contains all four Batch 4 slugs; live search `inheritance` returned the inheritance article with an absolute Pages URL (destination 200) |
| `.../about.html` | 200; states 1,589 assertions |
| `.../service-worker.js` | 200; `CACHE_VERSION = 'v20'` |
| `.../downloads/islamic-portal-release.apk` | 200; 1,456,011 bytes; live SHA-256 `3acfb6d6…` matches local |
| `.../downloads/islamic-portal-offline-bundle.zip` | 200; 1,355,278 bytes; live SHA-256 `67cdee83…` matches local |
| `.../downloads/CHECKSUMS.sha256` | 200; both hashes match the served files |

The Batch 4 deployment push reported `18f7f93..044fea4 -> gh-pages`. The first live poll still served the previous build; a re-check after the Pages build completed served `?v=20261027g` / SW `v20` and all Batch 4 pages.

---

## 7. Honest limitations

| Area | Limitation |
| :--- | :--- |
| Android install | No device/emulator; `adb` unavailable. APK structurally verified, never installed. |
| APK signature | v1 JAR signature only; `apksigner`/build-tools unavailable. |
| Signing secrets | Plaintext passwords in `android/app/build.gradle` and a tracked keystore — P0, intentionally not modified this cycle. |
| Viewports | Browser tool cannot resize (`innerWidth` stays 1000); responsive checks are CSS/code-level only. |
| Keyboard focus | Headless browser cannot grant document focus; skip-link `:focus` not machine-verified. |
| `file://` | Browser tool rejects `file://` URLs; catalog `file://` behaviour proven by fetch-blocked simulation. |
| External sites | Tanzeem returns 406 and Sunnah.com 403 to automated clients; not re-verified live. |
| Cross-browser | Chromium only. |
| Performance | No Lighthouse/Web Vitals run this cycle. |
| Scholarship | Content is source-cited but has no scholar sign-off. The English Jalalayn translation licence is not cleared for commercial distribution. |

---

## 8. Required follow-up

1. Batch 6 articles: Seerah epochs (roadmap topics 41–50).
2. Owner decision on the English Jalalayn translation licence before any commercial distribution.
3. Continue module repair per `MODULE_REGISTRY.md` PARTIAL items.
4. Device-test the APK when a device is available; add v2/v3 signing.
5. Remove signing secrets from the repository (owner action).
6. Cross-browser and screen-reader passes.
