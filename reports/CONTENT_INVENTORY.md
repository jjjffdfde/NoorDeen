# NoorDeen — Content Inventory

**Audited:** 30 October 2026 (Batch 6b Seerah articles added; page and word counts re-measured)
**Method:** every `.html` file under `public/` was read, `<script>`/`<style>` blocks stripped, tags removed, and remaining tokens counted. Article body counts cover the `<article class="editorial-content-body">` region — article prose, tables, callouts and bibliography — while excluding shared navigation, table of contents, related-reading block and footer. Numbers are measured from the current tree, not estimated.
**Pages:** **69** — 26 root pages + 42 pages in `public/articles/` (41 articles + the library index) + `offline.html` (noindex fallback)
**Visible words across the 68 indexable pages (whole-page tokenisation):** **270,778** (root 163,557 + article library 107,221); the offline fallback adds 96 words
**Article body words (41 articles, excluding page chrome):** **89,244** — average **2,177**, minimum **1,538**, maximum **3,538**
**Sitemap URLs:** **68** (`public/sitemap.xml`, 68 unique `<loc>` entries)
**Full test suite:** **2,185 executed / 2,185 passed / 0 failed** (50 suites; last run 30 October 2026)

---

## 1. Root pages (26)

| # | File | Visible words | Size | Purpose |
| --: | :--- | --: | --: | :--- |
| 1 | `sahaba.html` | 33,527 | 441 KB | 52 companion biographies |
| 2 | `seerah.html` | 27,658 | 295 KB | 25-chapter Prophetic biography |
| 3 | `prophets.html` | 23,258 | 304 KB | 30 prophetic narratives |
| 4 | `history.html` | 18,204 | 299 KB | 12 civilisational eras |
| 5 | `hadith.html` | 12,060 | 420 KB | 101 traditions, pre-rendered |
| 6 | `duas.html` | 11,316 | 409 KB | 102 supplications, pre-rendered |
| 7 | `index.html` | 7,501 | 315 KB | Homepage, hubs, 20-pillar taxonomy, glossary |
| 8 | `salah-guide.html` | 4,168 | 78 KB | Step-by-step prayer guide |
| 9 | `wudu-guide.html` | 3,218 | 59 KB | Wudu, ghusl, tayammum |
| 10 | `janazah-guide.html` | 2,672 | 56 KB | Funeral prayer |
| 11 | `pillars.html` | 2,445 | 48 KB | Five pillars |
| 12 | `eid-guide.html` | 2,310 | 43 KB | Eid al-Fitr / al-Adha |
| 13 | `about.html` | 1,562 | 38 KB | Mission, methodology, verification pipeline |
| 14 | `kalimas.html` | 1,528 | 44 KB | Six kalimas + copy/share |
| 15 | `download-app.html` | 1,482 | 42 KB | PWA install, APK/ZIP download, checksums |
| 16 | `zakat-calculator.html` | 1,411 | 49 KB | Zakat engine + fiqh |
| 17 | `prayer-times.html` | 1,363 | 50 KB | Solar prayer times |
| 18 | `calendar.html` | 965 | 29 KB | Hijri converter |
| 19 | `tasbih.html` | 885 | 33 KB | Digital counter |
| 20 | `privacy.html` | 755 | 19 KB | Privacy policy |
| 21 | `sources.html` | 725 | 18 KB | Bibliography and methodology |
| 22 | `dr-israr-ahmed.html` | 626 | 33 KB | Lecture library shell (cards render from JSON) |
| 23 | `quran.html` | 731 | 41 KB | Quran reader shell, khatam planner, thematic index |
| 24 | `terms.html` | 601 | 16 KB | Terms of use |
| 25 | `contact.html` | 579 | 25 KB | Contact / corrections form |
| 26 | `bookmarks.html` | 356 | 16 KB | Saved items |
| 27 | `offline.html` | 100 | 3 KB | Offline fallback (`noindex`) |

Root total: **163,653 words** (163,557 across the 26 indexable root pages, plus 96 in the offline fallback).

Note: `dr-israr-ahmed.html` has a small static word count because its cards render from `catalog.json`. `quran.html` now loads all surah text from the bundled corpus, so its static count only covers the shell. `hadith.html`, `duas.html`, `sahaba.html`, `seerah.html`, `prophets.html` and `history.html` are largely pre-rendered static text, which is why their counts are high.

---

## 2. Article library (42 pages, 41 articles)

The index is not an article. Article body counts below exclude the shared navigation, table of contents, related-reading block and footer; whole-page counts are higher.

| # | File | Body words | Size | Topic |
| --: | :--- | --: | --: | :--- |
| 27 | `articles/index.html` | — (4,191 whole page) | 154 KB | Library index + 100-topic syllabus |
| 28 | `articles/madinah-society-and-first-muslim-state.html` | 3,538 | 49 KB | Madinah society and polity (topic 57) |
| 29 | `articles/pre-islamic-arabia-jahiliyyah.html` | 3,391 | 48 KB | Pre-Islamic Arabia (topic 53) |
| 30 | `articles/farewell-sermon-and-final-years.html` | 3,327 | 46 KB | Farewell sermon and final years (topic 60) |
| 31 | `articles/battles-of-badr-uhud-and-the-trench.html` | 3,279 | 47 KB | Badr, Uhud and the Trench (topic 58) |
| 32 | `articles/hudaybiyyah-and-conquest-of-makkah.html` | 3,148 | 46 KB | Hudaybiyyah and the conquest (topic 59) |
| 33 | `articles/makkan-persecution-and-resilience.html` | 2,965 | 44 KB | Makkan persecution (topic 54) |
| 34 | `articles/hijrah-to-madinah.html` | 2,772 | 43 KB | Hijrah to Madinah (topic 56) |
| 35 | `articles/isra-and-miraj-night-journey.html` | 2,664 | 42 KB | Isra’ wal-Mi’raj (topic 55) |
| 36 | `articles/contracts-and-promises-in-islam.html` | 2,473 | 41 KB | Contracts and promises (Batch 5) |
| 37 | `articles/debt-and-loans-in-islam.html` | 2,473 | 40 KB | Debt and loans (Batch 5) |
| 38 | `articles/workers-rights-in-islam.html` | 2,411 | 39 KB | Workers’ rights (Batch 5) |
| 39 | `articles/business-ethics-and-honest-trade.html` | 2,371 | 39 KB | Business ethics (Batch 5) |
| 40 | `articles/honouring-parents-in-islam.html` | 2,257 | 40 KB | Parents and family (Batch 4) |
| 41 | `articles/seerah-of-prophet-muhammad.html` | 2,124 | 40 KB | Seerah (topic 11) |
| 42 | `articles/islamic-parenting-guide.html` | 2,107 | 39 KB | Parenting (Batch 4) |
| 43 | `articles/fasting-and-ramadan.html` | 2,084 | 39 KB | Fasting and Ramadan (topic 16) |
| 44 | `articles/islamic-inheritance-basics.html` | 2,072 | 37 KB | Inheritance (Batch 4) |
| 45 | `articles/salah-complete-beginners-guide.html` | 1,975 | 49 KB | Salah (topic 6) |
| 46 | `articles/beginners-guide-to-islam.html` | 1,974 | 49 KB | Foundations (topic 1) |
| 47 | `articles/rights-of-neighbours-in-islam.html` | 1,971 | 38 KB | Neighbours (Batch 4) |
| 48 | `articles/stories-of-the-prophets.html` | 1,961 | 39 KB | Prophetic narratives (topic 12) |
| 49 | `articles/ninety-nine-names-of-allah.html` | 1,955 | 39 KB | Names of Allah (topic 18) |
| 50 | `articles/zakat-educational-calculation-guide.html` | 1,954 | 51 KB | Zakat (topic 10) |
| 51 | `articles/wudu-ghusl-tayammum-guide.html` | 1,944 | 47 KB | Purification (topic 7) |
| 52 | `articles/quran-translation-vs-tafsir.html` | 1,933 | 48 KB | Translation vs tafsir (topic 3) |
| 53 | `articles/hajj-and-umrah-guide.html` | 1,926 | 38 KB | Hajj and Umrah (topic 17) |
| 54 | `articles/hadith-and-sunnah-authenticity.html` | 1,913 | 48 KB | Hadith sciences (topic 8) |
| 55 | `articles/daily-adhkar-and-supplications.html` | 1,886 | 46 KB | Adhkar (topic 9) |
| 56 | `articles/tawhid-and-the-shahadah.html` | 1,854 | 45 KB | Tawhid (topic 4) |
| 57 | `articles/sahaba-biographies.html` | 1,846 | 37 KB | Companions (topic 13) |
| 58 | `articles/islamic-manners-and-character.html` | 1,800 | 38 KB | Adab (topic 15) |
| 59 | `articles/islamic-finance-and-riba.html` | 1,798 | 37 KB | Riba and finance (topic 96 / published #101) |
| 60 | `articles/how-to-read-and-understand-quran.html` | 1,785 | 46 KB | Quran study (topic 2) |
| 61 | `articles/marriage-and-family-in-islam.html` | 1,726 | 37 KB | Marriage and family (topic 92 / #102) |
| 62 | `articles/death-and-the-afterlife.html` | 1,722 | 37 KB | Death and afterlife (#103) |
| 63 | `articles/repentance-dhikr-spiritual-development.html` | 1,709 | 37 KB | Tawbah and dhikr (topic 19) |
| 64 | `articles/environment-and-stewardship.html` | 1,700 | 38 KB | Environment and stewardship (#105) |
| 65 | `articles/new-muslim-learning-path.html` | 1,676 | 37 KB | New Muslim path (topic 20) |
| 66 | `articles/halal-and-haram-food.html` | 1,649 | 36 KB | Halal and haram food (topic 95 / #104) |
| 67 | `articles/five-pillars-of-islam.html` | 1,593 | 43 KB | Five pillars (topic 5) |
| 68 | `articles/islamic-history-civilization.html` | 1,538 | 35 KB | History framework (topic 14) |


**Article body total: 89,244 words across 41 articles**, averaging **2,177** words each. The eight Seerah articles measure 2,664–3,538 body words on this whole-body convention (which includes FAQ, bibliography and related reading); their prose core (intro plus numbered sections, excluding FAQ and apparatus) is 2,226–3,049 words. They exceed the 2,500-word editorial guide deliberately, because the brief required full source-critical treatment of each topic.

Duplicate check: 5-word shingle Jaccard similarity across the 41 article bodies peaked at **0.0290** (99 Names vs Repentance). The closest Batch 5 pair was **0.0255** (Business Ethics vs Workers’ Rights), driven by shared Quranic quotations and shared economic vocabulary rather than copied prose. The Batch 6b Seerah articles do not appear in the top five pairs.

---

## 3. Datasets

| Dataset | Location | Count | Notes |
| :--- | :--- | --: | :--- |
| Surahs | `js/data.js` → `ISLAMIC_DATA.surahs` | 114 | Names, ayah counts, revelation type |
| Juz | `ISLAMIC_DATA.juzList` | 30 | Traditional divisions |
| Offline Quran corpus | `public/data/quran/surahs/NNN.json` | **114 surahs / 6,236 ayahs** | 4,653,659 bytes; Arabic (Uthmani), English (Saheeh International), Urdu (Jalandhry), transliteration for every ayah |
| Quran corpus manifest | `public/data/quran/manifest.json` | 114 records | Provenance, editions, per-surah byte sizes |
| Legacy offline surah text | `ISLAMIC_DATA.offlineSurahs` | 10 surahs / 49 ayahs | Retained only as a last-resort fallback; the reader prefers the corpus |
| Hadith | `ISLAMIC_DATA.hadiths` | **101** | Bukhari 42, Muslim 25, Tirmidhi 14, Abu Dawud 10, Nasa'i 4, Ibn Majah 6 |
| Duas | `ISLAMIC_DATA.duas` | **102** | Arabic, transliteration, English, Urdu, reference |
| Kalimas | `ISLAMIC_DATA.kalimas` | 6 | Copy and share per entry |
| Sahaba monographs | `sahaba.html` | 52 | 6 cohorts |
| Prophetic narratives | `prophets.html` | 30 | 25 Quranic prophets + 5 righteous figures |
| Seerah chapters | `seerah.html` | 25 | Pre-Islamic Arabia → farewell pilgrimage |
| History eras | `history.html` | 12 | 66 milestone subsections |
| Lecture catalog | `data/dr-israr/catalog.json` | **148 records / 147 unique uploads** | 7 series, 131 Urdu, 17 English; 1 flagged duplicate |
| Study-mode editorial summaries | `data/tafsir/study-content.json` | 6 verses | 1:1, 1:2, 1:5, 1:6, 2:255, 112:1; labelled NoorDeen editorial summaries, not verbatim translations |
| Tafsir al-Jalalayn — English | `public/data/tafsir/surahs/NNN.json` (`en`) | **6,236 verses / 114 surahs** | Verbatim translation by Dr. Feras Hamza, © Royal Aal al-Bayt Institute; attributed non-commercial use |
| Tafsir al-Jalalayn — Arabic | `public/data/tafsir/surahs/NNN.json` (`ar`) | **6,010 verses / 114 surahs** | Public-domain Arabic original; 226 digitisation gaps shown as missing |
| Asbab al-Nuzul — Arabic | `public/data/tafsir/surahs/NNN.json` (`asbab`) | **275 verses / 50 surahs / 200 reports** | MIT dataset; Arabic only; one Surah 96 anomaly recorded |
| Tafsir manifest | `public/data/tafsir/manifest.json` | 3 editions | Per-surah coverage, rights metadata, source anomalies |
| Tafsir registry | `public/data/tafsir/registry.json` | 4 editions | Three verbatim editions plus the NoorDeen editorial option; lists Ibn Kathir and Muyassar as not bundled |
| Thematic verse index | `public/data/tafsir/themes.json` | **30 themes / 5,639 matches** | Keyword finding aid over the bundled English text; up to 40 refs per theme |
| Glossary terms | `index.html` | 135 | Searchable, category-filtered |

---

## 4. Distribution artefacts

| Artefact | Size | SHA-256 |
| :--- | --: | :--- |
| `downloads/islamic-portal-release.apk` | 5,204,216 bytes (4.96 MiB) | `86096c12cdcc6c9add0f1d33b3c07e0c75ab1acaace3a6b593d917095846f259` |
| `downloads/islamic-portal-offline-bundle.zip` | 5,063,079 bytes (4.83 MiB) | `bed3ef77672b38c09836428555a600acd43d495b7813ebbfffd404568461c626` |

Both are rebuilt from the current tree; `CHECKSUMS.sha256` matches the files byte-for-byte. The APK is v1.3.0 (build 10300) with 341 ZIP entries including the 114 Quran chunks, 114 tafsir chunks and 69 HTML pages; the bundle holds 332 files, 69 HTML pages and the same chunks. Extracted APK and bundle entries were hash-compared against `public/` with 0 missing and 0 differing files.

**Live deployment:** Phase 2 was verified live at `gh-pages` commit `5c135b90732c3b3357aab442be70f2d77ea5c411` (tree from `71350d1:public`) on 29 October 2026. Batch 6a was verified live at `b930b7df756aba7456ae50d93b56c1a8df63cd03` on 29 October 2026. The Batch 6b artefacts above are prepared locally; their deployment and live verification are recorded in `FINAL_AUDIT_RESULTS.md` §6.6.

---

## 5. What this inventory does *not* claim

- Whole-page word counts include navigation and footer. Article body counts are reported separately above so the two are not confused.
- 41 long-form articles are published; they map to a subset of the 100 roadmap topics. The index advertises the roadmap and marks unwritten topics as pending.
- Hadith and dua counts are counts of records in this repository, not a claim to represent the full corpus of any collection. 101 traditions is a curated selection, not Sahih al-Bukhari's 7,000+.
- Tafsir is now bundled verbatim in three editions: Jalalayn English (6,236 verses), Jalalayn Arabic (6,010 of 6,236) and asbab al-nuzul Arabic (275 verses / 200 reports). Six further verses carry a NoorDeen editorial summary. The UI states every gap and never fills one from another edition.
- The thematic index is a keyword finding aid, not a scholarly thematic classification. Its counts are recomputed by Suite 48.
- Quran text is complete offline (114 surahs / 6,236 ayahs). Recitation audio and the lecture video catalogue still require a network.
- The article library is educational prose, not a fatwa service. Specific legal and medical questions are referred to qualified scholars and professionals.
- The APK is JAR-signed (v1) only and has not been installed on a device in this environment.
