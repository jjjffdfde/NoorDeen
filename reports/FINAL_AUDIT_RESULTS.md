# NoorDeen — Final Audit Results (27 October 2026 cycle)

**Audit date:** 27 October 2026
**Commit baseline at start:** `a3ae83d` (working tree clean)
**Environment:** Windows, Node.js local server on `http://localhost:3400`, Chromium via the automated browser tool, test harness on port 3000.
**Verdict:** the reported blockers for this cycle are fixed and verified. The site is not finished; content expansion and device-level Android verification remain open.

---

## 1. What this cycle set out to fix

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
| HTML pages scanned | 56 |
| Unique internal destinations requested | 85 |
| Non-200 | **1** — the literal JS template `' + escapeHtml(v.sourceUrl) + '` in `dr-israr-ahmed.html`; every rendered card uses a real Tanzeem URL |
| Empty / hash-only href | 0 |
| `javascript:` href | 0 |
| Textless anchors | 0 |
| Fragment mismatches | 7 — all known runtime-generated IDs (`kalima-1…6`, bookmark template) |

The single non-200 and all seven fragment flags are the same documented false positives recorded in `BROKEN_LINKS_AND_EMPTY_CONTENT.md`; no new defect was introduced.

---

## 4. Automated tests

```
node test/run-tests.js

Total Tests Executed: 1589
Passed Tests:         1589
Failed Tests:         0
```

- Suites: 43 (Suite 43 added for Batch 4).
- Suite 41: URL resolution, catalog parity/loader, cookie banner, lazy search, alias guards.
- Suite 42: Daily Companion local date, streak award/reset, Friday optionality, honest zero state.
- Suite 43: Batch 4 file/TOC/schema/bibliography/word-count/search/sitemap/index integration.
- No assertion was skipped.

---

## 5. Build artefacts

Version `?v=20261027g`, service-worker cache `v20`.

| Artefact | Bytes | SHA-256 |
| :--- | --: | :--- |
| `public/downloads/islamic-portal-offline-bundle.zip` | 1,355,278 | `67cdee83dc4c4d31aa73c9e35545c85e06e406d53857f3612dbbfa7c1dbd5d94` |
| `public/downloads/islamic-portal-release.apk` | 1,456,011 | `3acfb6d6411f144de475735d5825d788af29ed914acca04457f58fd243b3e1f6` |

- APK: 94 ZIP entries (3 core + 5 icons + 86 public assets); bundle: 85 files.
- `catalog.js`, `catalog.json`, `app.js`, `search.js`, `quran.js`, `config.js`, all HTML and the service worker hash-match `public/` inside both artefacts.
- All four Batch 4 pages are present in both artefacts; the embedded `honouring-parents-in-islam.html` hash-matches the source byte-for-byte.
- APK contains `?v=20261027g`, the lazy search loader, the alias guards and the 2:255 deep link.
- `jarsigner -verify` → `jar verified` (v1 only; no v2/v3 block).
- `CHECKSUMS.sha256` matches both files.

---

## 6. Live deployment verification (GitHub Pages)

Deployed commit: `18f7f93` on `gh-pages` (tree from `74a1546:public`).

| Live URL | Result |
| :--- | :--- |
| `https://jjjffdfde.github.io/NoorDeen/index.html` | 200; references `?v=20261027f` |
| `.../data/dr-israr/catalog.js` | 200; byte-identical to local (SHA-256 `2ebaa3ec7dfa30433a5a804a25fc1610dfa620a27e184f8187932a58d8c3db17`) |
| `.../js/search.js` | 200; contains the 4-character alias guard |
| `.../about.html` | 200; states 1,519 assertions |
| `.../service-worker.js` | 200; `CACHE_VERSION = 'v19'` |
| `.../articles/islamic-finance-and-riba.html` | 200; references `?v=20261027f` |
| `.../downloads/islamic-portal-release.apk` | 200; 1,412,579 bytes; live SHA-256 `c699475c…` matches local |
| `.../downloads/islamic-portal-offline-bundle.zip` | 200; live SHA-256 `5fa610ea…` matches local |

The deployment push reported `0050117..18f7f93 -> gh-pages`. GitHub Pages served the new content on first re-check.

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
| Scholarship | Content is source-cited but has no scholar sign-off. |

---

## 8. Required follow-up

1. Batch 4 articles (topics 21–30): family, parenting, inheritance, neighbours.
2. Continue module repair per `MODULE_REGISTRY.md` PARTIAL items.
3. Device-test the APK when a device is available; add v2/v3 signing.
4. Remove signing secrets from the repository (owner action).
5. Cross-browser and screen-reader passes.
