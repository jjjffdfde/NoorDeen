# NoorDeen — Content Expansion Log

**Last updated:** 27 October 2026 (Batch 4 integrated; distribution rebuilt)
**Counting method:** rendered text only — `<script>`, `<style>` and tags removed, then tokens counted. Two figures are reported where they differ:
- **Whole-page words** include navigation, table of contents, related-reading block and footer.
- **Article body words** cover the `<article class="editorial-content-body">` region and exclude that shared chrome; they are the honest measure of article length.

Historical Batch 1/2 figures below are whole-page counts. Batch 3 reports body counts explicitly.

---

## 1. Expansion history at a glance

| Stage | What was added | Verified outcome |
| :--- | :--- | :--- |
| Hadith expansion | 56 traditions added to the existing set | **101 records** in `js/data.js`, all pre-rendered in `hadith.html` |
| Dua expansion | 52 supplications added | **102 records**, all pre-rendered in `duas.html` |
| Sahaba metadata repair | Titles/meta said 30; body had 52 | Metadata corrected to **52 monographs** |
| Quran thematic profiles | 14 → 32 surah profiles | `SURAH_THEMATIC_DATA` in `js/quran.js` |
| Homepage taxonomy | 20-pillar knowledge taxonomy | Live on `index.html` |
| Glossary | 135 searchable terms | Live on `index.html` |
| **Batch 1 articles** | 10 articles (topics 1–10) + library index + 100-topic roadmap | 22,348 whole-page words across 10 articles |
| **Batch 2 articles** | 10 articles (topics 11–20) | 22,325 whole-page words; **18,218 body words**, 1,822 average |
| **Dr. Israr Ahmed library** | New route + catalog + search/sitemap/nav/SW integration | **148 records / 147 unique uploads / 7 series** |
| **Batch 3 articles** | 5 articles (finance/riba, marriage, death/afterlife, halal food, environment) | **8,547 body words**, 1,709 average; all ≥1,637 body words |
| **Batch 4 articles** | 4 articles (parents, parenting, inheritance, neighbours) | **8,407 body words**, 2,102 average; all ≥1,971 body words |
| **Content-trust fixes** | Search modal, tafsir fallback, checksums, page counts, SW cache, kalima copy/share, drawer ARIA, result labels, missing anchor, skip link, theme-color | See section 4 |

---

## 2. Batch 4 detail (this cycle)

Generated from `scripts/article-content/batch-4a.cjs` through `scripts/build-articles.cjs`, so all four share the Batch 1/2/3 template, TOC, schema, navigation and footer.

| # | Topic | Slug | Body words | Whole-page words |
| --: | :--- | :--- | --: | --: |
| 26 | Honouring parents (`birr al-walidayn`) | `honouring-parents-in-islam` | 2,257 | 2,620 |
| 27 | Islamic parenting | `islamic-parenting-guide` | 2,107 | 2,448 |
| 28 | Islamic inheritance (`mawarith`) | `islamic-inheritance-basics` | 2,072 | 2,411 |
| 29 | Rights of neighbours | `rights-of-neighbours-in-islam` | 1,971 | 2,320 |
| | **Total** | | **8,407** | **9,799** |

Each article includes: a table of contents with working anchors, `BreadcrumbList` and `FAQPage` JSON-LD, a rendered bibliography, a "not a personal fatwa" disclaimer, and links to related libraries. All four are indexed in `js/search.js`, `sitemap.xml` and `articles/index.html` (cards #26–29, details block 106–109), and are reachable from the article library.

**Quality gate:** all four are inside the 1,500–2,500 body-word target. Batch 4 was checked for stray Markdown, third-party scripts, canonical URLs, FAQ/Breadcrumb schema, TOC anchors and body-container integrity. The closest shingle similarity between any two of the 29 articles is **0.030** (99 Names vs Repentance); the closest Batch 4 pair is **0.029** (Honouring Parents vs Neighbours), consistent with shared Quranic quotations rather than copied prose.

**Batch 4 verification:** each of the four pages was loaded in Chromium at `http://localhost:3400`, with H1, title, TOC link count, body-word count, JSON-LD presence, canonical URL, config.js load and console output checked. Search from an article page returned the correct first result for `parenting`, `inheritance` and `neighbour`; destination pages returned HTTP 200.

**Honest note on numbering:** the library now contains 29 articles. Twenty cover roadmap topics 1–20; three map to topics 92, 95 and 96; two additional topics (death/afterlife and environment) are recorded as 103 and 105; Batch 4 adds four family/community topics as publication numbers 106–109. Those publication numbers are not a claim that 109 roadmap topics are written.

---

## 3. Lecture library (unchanged this cycle)

- Retrieved 10 listing pages from the official Tanzeem-e-Islami archive (the archive itself reports 74 pages).
- 150 listing entries seen; 2 were index pages with no video and were excluded.
- 148 records kept. Two records embed the same YouTube upload (`c6czfEhWVo8`), so unique videos = **147**. Both records are retained and the duplicate is flagged rather than hidden.
- 7 series: `03-003` (2), `03-004` (72), `04-001` (9), `04-002` (16), `04-003` (47), `04-004` (1), `04-005` (1).
- 131 Urdu, 17 English.
- No video files are hosted. Embeds are `youtube-nocookie.com`, loaded only on click, and every card links back to its tanzeem.org source page.

Full breakdown: `reports/DR_ISRAR_VIDEO_CATALOG.md`.

---

## 4. Corrections made in this cycle

| Defect | Impact | Fix |
| :--- | :--- | :--- |
| Static `#search-modal` on 13 pages | Search dialog opened but returned nothing | Removed the static modal from all 13 pages and the generator; the dialog is created by `app.js`. `history.html` was still carrying one after a restore and was cleaned again in this cycle |
| Invented tafsir fallback | Fabricated commentary attributed to Ibn Kathir/Jalalayn | Replaced with an explicit "no commentary bundled" message; bundled text is labelled "Editorial English summary", not a verbatim translation |
| Generic hadith presented as verse-specific | Misleading "Prophetic Guidance" for any verse | Relabelled "General Sunnah Guidance / Not verse-specific" with a caveat |
| Stale inlined APK SHA-256 | Download page showed an old hash | Page fetches `CHECKSUMS.sha256` with `{cache:'no-store'}`; hashes match the served files |
| Duplicate YouTube ID | Suite 40 failed on "unique YouTube ID" | Catalog records `isDuplicate` / `duplicateOf` and declares 147 unique uploads |
| Stale service worker cache | Browsers served pre-fix pages | Cache bumped through `v10` → `v12` → **`v13`**; activation deletes older shells |
| "36/37 pages" and "1.19 MB" copy | Wrong page count and size | Updated to **52 pages** and current bundle size |
| Search ranking | Keyword-only hits outranked title matches | Title/snippet match = 90, keyword-only = 80 |
| Search result type labels | Every result said "Worship Guide" | Articles now say "Educational Article", tools say "Islamic Tool", lecture library says "Lecture Library", downloads say "Download" |
| "100% offline" claims | False for 104 surahs, audio and video | Rewritten on homepage, download page and bundle README |
| Zakat rates described as live/automatic | Static defaults presented as market data | Relabelled "editable indicative defaults"; reset button and toast corrected |
| Language modal claimed "100% Scholarly Verified" | Unverifiable claim | Softened to "Community-reviewed interface translations — coverage varies by language" |
| Kalimas had no copy/share | Inconsistent with hadith/duas/Quran | Added per-Kalima Copy and Share using `App.copyText()` with fallback |
| Mobile drawer had no `aria-expanded` | Screen-reader state missing | `openMobileDrawer` / `closeMobileDrawer` now set `aria-expanded` and `aria-hidden` |
| Homepage `#guided-learning` anchor missing | One taxonomy card went nowhere | Added `id="guided-learning"` to the pathways section |
| Hardcoded `1447 AH` fallbacks | Wrong Hijri year before JS runs | Replaced with neutral labels; live date renders **15 Jumada I 1448 AH** |
| `theme-color` missing on `index.html` | 51/52 pages had it | Added `#0F5132`; now 52/52 |
| No keyboard skip link | Keyboard users had to tab through the whole header | `app.js` injects a skip link targeting `#main-content`; `main` receives `tabindex="-1"`; visible-state CSS added |
| Literal Markdown in rendered HTML | `**bold**` / `*italic*` shown as asterisks on `history.html`, `sahaba.html` and 10 articles | Converted to `<strong>` / `<em>`; 0 stray asterisks remain (contact page's 4 are required-field markers) |
| Mojibake in `sahaba.html` and `history.html` | Arabic text rendered as `╪ú╪¿┘ê…` after a PowerShell-based restore from the offline ZIP; ~1,145 words appeared missing | Both files were re-extracted from git HEAD as UTF-8, Markdown was converted, asset versions re-applied, and the orphan search modal removed. Arabic characters restored (6,696 in sahaba, 733 visible in history), 0 mojibake, 0 console errors |
| Markdown leakage on rebuild | `scripts/article-content/batch-2b.cjs` stored `*decision*`; rebuilding the whole library would have rendered literal asterisks | Replaced with `<em>decision</em>` and rebuilt; 0 stray Markdown across the 29 articles |
| Stale distribution copy | Download page still said 52 pages / 1.24 MB; About page said 1,519 assertions | Updated to 56 pages / ~1.29 MB ZIP and 1,589 assertions; both are now asserted by Suite 36 |

---

## 5. Where the content stands now

| Metric | Value |
| :--- | :--- |
| HTML pages | **56** (26 root + 30 article) |
| Visible words, all pages | **230,190** |
| Articles published | **29** (23 roadmap topics + 6 additional topics) |
| Article body words | **54,432**, average **1,877**, min **1,538**, max **2,257** |
| Hadith records | 101 |
| Dua records | 102 |
| Kalimas | 6 |
| Lecture records | 148 (147 unique) |
| Automated assertions | **1,589 passing, 0 failing** |
| Sitemap URLs | 56 |
| Release APK | 1,456,011 bytes (1.39 MiB), 56 HTML pages, JAR-signed v1 only, **not device-tested** |
| Offline bundle | 1,355,278 bytes (1.29 MiB), 85 files |

---

## 6. What is still missing

- **77 roadmap topics** remain unwritten (the 100-topic list minus the 23 covered).
- **Tafsir** covers 6 verses, not the full Quran.
- **Offline Quran** covers 10 surahs / 49 ayahs, not 114.
- **No lecture transcripts or translations**; the library is a catalog of embeds.
- **No scholarly sign-off** on any content; the site says so.
- **No device test** of the Android build; no v2/v3 signature block.
