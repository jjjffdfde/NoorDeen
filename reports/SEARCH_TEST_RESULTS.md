# NoorDeen — Search Test Results

**Date:** 27 October 2026
**Scope:** global search modal (`Ctrl+K`), quick-search pills, article-page search, lecture-catalog search and filters, deep-link destinations, alias/phonetic ranking.
**Method:** browser automation against `http://localhost:3400` with the service worker unregistered and caches cleared, plus 41 automated assertions in `test/run-tests.js` (Suite 41).
**Verdict:** the three reported search defects were reproduced, root-caused and fixed. All tested queries now return relevant results and every tested result destination returns HTTP 200.

---

## 1. Defects reproduced and fixed

### 1.1 Search from article pages returned nothing

**Reproduction:** open `/articles/islamic-finance-and-riba.html`, press `Ctrl+K`, type `yaseen`.

**Observed before fix:** "No results" for `yaseen`, `intention`, `mercy` and `ayatul kursi`. The same queries worked from `/index.html`.

**Root cause:** article pages deliberately omit `js/data.js` to keep page weight down. `search.js` reads the lexical global `ISLAMIC_DATA`, which was therefore `undefined`, so the Quran/hadith/dua sections of the index could not be built.

**Fix:** `App.ensureSearchData()` lazily injects `js/data.js` (version-qualified, deployment-root aware) the first time the search dialog opens, then re-dispatches the current query. `data.js` is not fetched on page load.

**Verified after fix (from an article page):**

| Query | Top result | Destination status |
| :--- | :--- | :--- |
| `yaseen` | Surah 36 (Ya-Sin) | 200 |
| `intention` | Hadith on intentions | 200 |
| `mercy` | Article + Quran + dua results | 200 |
| `ayatul kursi` | Quran 2:255 | 200 |

Article pages still do **not** contain a static `js/data.js` tag; the assertion in Suite 41 enforces the lightweight page and the lazy loader together.

### 1.2 Results and pills pointed into `/articles/articles/…`

**Reproduction:** from `/articles/islamic-finance-and-riba.html`, search `zakat`.

**Observed before fix:**

- `http://localhost:3400/articles/articles/zakat-educational-calculation-guide.html` → 404
- `http://localhost:3400/articles/zakat-calculator.html` → 404
- Quick pill `http://localhost:3400/articles/quran.html?surah=36` → 404

**Root cause:** the search index stores site-root-relative URLs (`articles/foo.html`, `quran.html`). The modal inserted them straight into `href`, so the browser resolved them against the current `/articles/` directory.

**Fix:** `UniversalSearch.resolveUrl(url, basePath)` and `App.resolveUrl(url)` prefix the deployment root (`/`, `/NoorDeen/` on GitHub Pages, or the bundle directory under `file://`). Applied to result links, quick pills, the language-modal Quran link and the Quran offline fallback.

**Verified after fix:** six `zakat` results and six quick pills, clicked from an article page, all returned HTTP 200.

### 1.3 Alias ranking matched single letters inside words

**Reproduction:** search `سورہ واقعہ`; search `tabarakallazi`.

**Observed before fix:**

- `سورہ واقعہ` ranked **Surah 50 (Qaf)** first, because the one-letter Arabic alias `ق` matched inside the Urdu word `واقعہ`.
- `tabarakallazi` also matched **Surah 87 (Al-A'la)** through the substring `ala`.

**Fix:** alias containment and needle matching now require at least four characters (`needle.length >= 4`, alias `>= 4`) before a containment match is scored.

**Verified after fix:**

| Query | Result | Correct? |
| :--- | :--- | :--- |
| `سورہ واقعہ` | Surah 56 (Al-Waqi'ah) first | Yes |
| `tabarakallazi` | Surah 67 (Al-Mulk) only | Yes |
| `ayatul kursi` | Quran 2:255 first, deep link `quran.html?surah=2&ayah=255` | Yes |

The 2:255 destination was opened and the reader highlighted `#ayah-255` and scrolled to it.

---

## 2. Global search behaviour matrix

Tested from the home page and from an article page.

| Query | Expected | Observed | Status |
| :--- | :--- | :--- | :---: |
| `riba` | Islamic finance article first | Article first | Pass |
| `zakat` | Zakat calculator first, then article | Calculator first | Pass |
| `marriage` | Marriage article, Seerah, hadith | All three present | Pass |
| `ramadan` | Ramadan article first | Article first, then calendar | Pass |
| `seerah` | Seerah article first | Article first | Pass |
| `israr` | Lecture library | Lecture library | Pass |
| `barzakh` | Death and afterlife article | Article | Pass |
| `halal food` | Halal/haram food article | Article | Pass |
| `yaseen` (article page) | Surah 36 | Surah 36 | Pass |
| `intention` (article page) | Hadith on intentions | Hadith | Pass |
| `mercy` (article page) | Mixed results | Article + Quran + dua | Pass |
| `ayatul kursi` | 2:255 with deep link | 2:255, highlighted | Pass |
| `سورہ واقعہ` | Surah 56 | Surah 56 | Pass |
| `tabarakallazi` | Surah 67 | Surah 67 only | Pass |
| `parenting` (Batch 4 article page) | Parenting article first | Parenting article first | Pass |
| `inheritance` (Batch 4 article page) | Inheritance article | Inheritance article | Pass |
| `neighbour` (Batch 4 article page) | Neighbours article first | Neighbours article, then manners article | Pass |
| `business ethics` (Batch 5 article page) | Business ethics article first | Business ethics article | Pass |
| `contract promises` (Batch 5 article page) | Contracts article | Contracts article | Pass |
| `debt repayment` (Batch 5 article page) | Debt article first | Debt article, then workers article | Pass |
| `workers wages` (Batch 5 article page) | Workers article | Workers article | Pass |

**Snippets:** results show text drawn from the matching record (title, translation, or snippet field), not a generic label. Page-type labels are specific: "Educational Article", "Islamic Tool", "Lecture Library", "Download", "Quran", "Hadith", "Dua".

**Keyboard:** `Ctrl+K` opens the dialog; `Escape` closes it; focus moves to the input on open and returns to the trigger on close.

**Language reset:** after switching to Urdu, resetting to English restores English results and the English placeholder.

---

## 3. Lecture catalog search and filters

Page: `dr-israr-ahmed.html`. Catalog: 148 records, 147 unique uploads, 7 series, 131 Urdu / 17 English.

| Action | Expected | Observed |
| :--- | :--- | :--- |
| Search `muntakhab` | 2 matches | 2 of 148 |
| Series filter (selected series) | 2 matches | 2 of 148 |
| Language filter English | 17 matches | 17 of 148 |
| Reset filters | All records | 148 of 148 |
| Fetch blocked, embedded payload present | Cards still render | 148 cards rendered |
| Payload removed **and** fetch blocked | Honest error + retry, no fabricated rows | Distinct error state, 0 cards, retry button |

The catalog distinguishes `file`, `network`, `invalid` and `empty` failure modes rather than showing one generic "Failed to fetch". Search and filters operate on the embedded payload, so they work under `file://` where `fetch()` of local JSON is blocked.

---

## 4. Automated coverage (Suite 41)

`test/run-tests.js` Suite 41 asserts, among other things:

- `UniversalSearch.resolveUrl` handles root, GitHub Pages subpath, fragments, query strings, absolute URLs, bare `#` anchors and `file://` bases.
- Search results, quick pills, language-modal Quran link and Quran fallback all use the resolver.
- No document-relative search-result `href` remains in `app.js`.
- The cookie-banner privacy link is root-aware (`getBasePath()`), not `href="privacy.html"`.
- `App.ensureSearchData()` exists, loads `this.resolveUrl('js/data.js')`, and is called when the dialog opens.
- Article pages contain no eager `js/data.js` tag.
- Alias matching guards (`needle.length >= 4`) are present.
- Ayatul Kursi returns the `surah=2&ayah=255` destination.

Full suite result after these changes: **1,663 executed / 1,663 passed / 0 failed**.

Batch 4 adds four article records to the index (`honouring-parents-in-islam`, `islamic-parenting-guide`, `islamic-inheritance-basics`, `rights-of-neighbours-in-islam`); Batch 5 adds four more (`business-ethics-and-honest-trade`, `contracts-and-promises-in-islam`, `debt-and-loans-in-islam`, `workers-rights-in-islam`). Search from an article page returned the correct first result for each Batch 5 query; each destination returned HTTP 200. Suite 44 asserts that all four Batch 5 slugs are present in `search.js`, `sitemap.xml` and `articles/index.html`.

---

## 5. Not tested

- No screen-reader announcement of result counts was verified.
- Search is client-side and lexical; there is no stemming, fuzzy typo tolerance beyond the curated aliases, or server-side full-text index. A misspelling outside the alias table will miss.
- Non-Latin queries other than the tested Arabic/Urdu aliases and the 11 dictionary languages were not exercised.
- No load test with a very large query string or rapid successive queries.
- External destination availability (Quran.com, Sunnah.com, Tanzeem) was not re-tested; bot protection blocks automated clients.
