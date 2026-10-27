# NoorDeen — Content Inventory

**Audited:** 27 October 2026 (Batch 5 integrated; full re-measure of every page)
**Method:** every `.html` file under `public/` was read, `<script>`/`<style>` blocks stripped, tags removed, and remaining tokens counted. Article body counts cover the `<article class="editorial-content-body">` region — article prose, tables, callouts and bibliography — while excluding shared navigation, table of contents, related-reading block and footer. Numbers are measured from the current tree, not estimated.
**Pages:** **60** — 26 root pages + 34 pages in `public/articles/` (33 articles + the library index)
**Visible words across all pages (whole-page count):** **242,186**
**Article body words (33 articles, excluding page chrome):** **64,160** — average **1,944**, minimum **1,538**, maximum **2,473**
**Sitemap URLs:** **60** (`public/sitemap.xml`, 60 unique `<loc>` entries)
**Full test suite:** **1,663 executed / 1,663 passed / 0 failed** (last run 27 October 2026)

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
| 7 | `index.html` | 7,497 | 322 KB | Homepage, hubs, 20-pillar taxonomy, glossary |
| 8 | `salah-guide.html` | 4,168 | 78 KB | Step-by-step prayer guide |
| 9 | `wudu-guide.html` | 3,218 | 59 KB | Wudu, ghusl, tayammum |
| 10 | `janazah-guide.html` | 2,672 | 56 KB | Funeral prayer |
| 11 | `pillars.html` | 2,445 | 48 KB | Five pillars |
| 12 | `eid-guide.html` | 2,310 | 43 KB | Eid al-Fitr / al-Adha |
| 13 | `about.html` | 1,532 | 39 KB | Mission, methodology, verification pipeline |
| 14 | `kalimas.html` | 1,528 | 44 KB | Six kalimas + copy/share |
| 15 | `download-app.html` | 1,464 | 43 KB | PWA install, APK/ZIP download, checksums |
| 16 | `zakat-calculator.html` | 1,411 | 49 KB | Zakat engine + fiqh |
| 17 | `prayer-times.html` | 1,363 | 50 KB | Solar prayer times |
| 18 | `calendar.html` | 965 | 29 KB | Hijri converter |
| 19 | `tasbih.html` | 885 | 33 KB | Digital counter |
| 20 | `privacy.html` | 755 | 19 KB | Privacy policy |
| 21 | `sources.html` | 725 | 18 KB | Bibliography and methodology |
| 22 | `dr-israr-ahmed.html` | 626 | 33 KB | Lecture library shell (cards render from JSON) |
| 23 | `quran.html` | 617 | 35 KB | Quran reader shell |
| 24 | `terms.html` | 601 | 16 KB | Terms of use |
| 25 | `contact.html` | 579 | 25 KB | Contact / corrections form |
| 26 | `bookmarks.html` | 356 | 16 KB | Saved items |

Root total: **161,740 words**.

Note: `dr-israr-ahmed.html` and `quran.html` have small static word counts because their content is rendered from `catalog.json` and the Quran API respectively. `hadith.html`, `duas.html`, `sahaba.html`, `seerah.html`, `prophets.html` and `history.html` are largely pre-rendered static text, which is why their counts are high.

---

## 2. Article library (34 pages, 33 articles)

The index is not an article. Article body counts below exclude the shared navigation, table of contents, related-reading block and footer; whole-page counts are higher.

| # | File | Body words | Size | Topic |
| --: | :--- | --: | --: | :--- |
| 27 | `articles/index.html` | — (3,603 whole page) | 137 KB | Library index + 100-topic syllabus |
| 28 | `articles/contracts-and-promises-in-islam.html` | 2,473 | 42 KB | Contracts and promises (Batch 5) |
| 29 | `articles/debt-and-loans-in-islam.html` | 2,473 | 41 KB | Debt and loans (Batch 5) |
| 30 | `articles/workers-rights-in-islam.html` | 2,411 | 39 KB | Workers’ rights (Batch 5) |
| 31 | `articles/business-ethics-and-honest-trade.html` | 2,371 | 39 KB | Business ethics (Batch 5) |
| 32 | `articles/honouring-parents-in-islam.html` | 2,257 | 41 KB | Parents and family (Batch 4) |
| 33 | `articles/seerah-of-prophet-muhammad.html` | 2,124 | 40 KB | Seerah (topic 11) |
| 34 | `articles/islamic-parenting-guide.html` | 2,107 | 39 KB | Parenting (Batch 4) |
| 35 | `articles/fasting-and-ramadan.html` | 2,084 | 40 KB | Fasting and Ramadan (topic 16) |
| 36 | `articles/islamic-inheritance-basics.html` | 2,072 | 37 KB | Inheritance (Batch 4) |
| 37 | `articles/salah-complete-beginners-guide.html` | 1,975 | 50 KB | Salah (topic 6) |
| 38 | `articles/beginners-guide-to-islam.html` | 1,974 | 49 KB | Foundations (topic 1) |
| 39 | `articles/rights-of-neighbours-in-islam.html` | 1,971 | 38 KB | Neighbours (Batch 4) |
| 40 | `articles/stories-of-the-prophets.html` | 1,961 | 40 KB | Prophetic narratives (topic 12) |
| 41 | `articles/ninety-nine-names-of-allah.html` | 1,955 | 40 KB | Names of Allah (topic 18) |
| 42 | `articles/zakat-educational-calculation-guide.html` | 1,954 | 52 KB | Zakat (topic 10) |
| 43 | `articles/wudu-ghusl-tayammum-guide.html` | 1,944 | 47 KB | Purification (topic 7) |
| 44 | `articles/quran-translation-vs-tafsir.html` | 1,933 | 49 KB | Translation vs tafsir (topic 3) |
| 45 | `articles/hajj-and-umrah-guide.html` | 1,926 | 38 KB | Hajj and Umrah (topic 17) |
| 46 | `articles/hadith-and-sunnah-authenticity.html` | 1,913 | 48 KB | Hadith sciences (topic 8) |
| 47 | `articles/daily-adhkar-and-supplications.html` | 1,886 | 47 KB | Adhkar (topic 9) |
| 48 | `articles/tawhid-and-the-shahadah.html` | 1,854 | 46 KB | Tawhid (topic 4) |
| 49 | `articles/sahaba-biographies.html` | 1,846 | 37 KB | Companions (topic 13) |
| 50 | `articles/islamic-manners-and-character.html` | 1,800 | 38 KB | Adab (topic 15) |
| 51 | `articles/islamic-finance-and-riba.html` | 1,798 | 37 KB | Riba and finance (topic 96 / published #101) |
| 52 | `articles/how-to-read-and-understand-quran.html` | 1,785 | 46 KB | Quran study (topic 2) |
| 53 | `articles/marriage-and-family-in-islam.html` | 1,726 | 37 KB | Marriage and family (topic 92 / #102) |
| 54 | `articles/death-and-the-afterlife.html` | 1,722 | 37 KB | Death and afterlife (#103) |
| 55 | `articles/repentance-dhikr-spiritual-development.html` | 1,709 | 38 KB | Tawbah and dhikr (topic 19) |
| 56 | `articles/environment-and-stewardship.html` | 1,700 | 38 KB | Environment and stewardship (#105) |
| 57 | `articles/new-muslim-learning-path.html` | 1,676 | 37 KB | New Muslim path (topic 20) |
| 58 | `articles/halal-and-haram-food.html` | 1,649 | 37 KB | Halal and haram food (topic 95 / #104) |
| 59 | `articles/five-pillars-of-islam.html` | 1,593 | 44 KB | Five pillars (topic 5) |
| 60 | `articles/islamic-history-civilization.html` | 1,538 | 35 KB | History framework (topic 14) |

**Article body total: 64,160 words across 33 articles**, averaging **1,944** words each. All 33 are inside the 1,500–2,500 word target.

Duplicate check: 5-word shingle Jaccard similarity across the 33 article bodies peaked at **0.0290** (99 Names vs Repentance). The closest Batch 5 pair was **0.0255** (Business Ethics vs Workers’ Rights), driven by shared Quranic quotations and shared economic vocabulary rather than copied prose.

---

## 3. Datasets

| Dataset | Location | Count | Notes |
| :--- | :--- | --: | :--- |
| Surahs | `js/data.js` → `ISLAMIC_DATA.surahs` | 114 | Names, ayah counts, revelation type |
| Juz | `ISLAMIC_DATA.juzList` | 30 | Traditional divisions |
| Offline surah text | `ISLAMIC_DATA.offlineSurahs` | 10 surahs / 49 ayahs | 1, 36 (6/83), 67 (4/30), 97, 108, 109, 110, 112, 113, 114; 36 and 67 are partial and labelled in the UI |
| Hadith | `ISLAMIC_DATA.hadiths` | **101** | Bukhari 42, Muslim 25, Tirmidhi 14, Abu Dawud 10, Nasa'i 4, Ibn Majah 6 |
| Duas | `ISLAMIC_DATA.duas` | **102** | Arabic, transliteration, English, Urdu, reference |
| Kalimas | `ISLAMIC_DATA.kalimas` | 6 | Copy and share per entry |
| Sahaba monographs | `sahaba.html` | 52 | 6 cohorts |
| Prophetic narratives | `prophets.html` | 30 | 25 Quranic prophets + 5 righteous figures |
| Seerah chapters | `seerah.html` | 25 | Pre-Islamic Arabia → farewell pilgrimage |
| History eras | `history.html` | 12 | 66 milestone subsections |
| Lecture catalog | `data/dr-israr/catalog.json` | **148 records / 147 unique uploads** | 7 series, 131 Urdu, 17 English; 1 flagged duplicate |
| Study-mode tafsir | `data/tafsir/study-content.json` | 6 verses | 1:1, 1:2, 1:5, 1:6, 2:255, 112:1; labelled as editorial summaries, not verbatim translations |
| Glossary terms | `index.html` | 135 | Searchable, category-filtered |

---

## 4. Distribution artefacts

| Artefact | Size | SHA-256 |
| :--- | --: | :--- |
| `downloads/islamic-portal-release.apk` | 1,503,077 bytes (1.43 MiB) | `29ede4bd82d086fa17f516bf1ed24165697a700bbb065fbc39191259b5f620a9` |
| `downloads/islamic-portal-offline-bundle.zip` | 1,401,639 bytes (1.34 MiB) | `a3493559328723c1e8cf7eeabac7af7a395f8d60f6a713ba24a6dc0cbb801c68` |

Both are rebuilt from the current tree; `CHECKSUMS.sha256` matches the files byte-for-byte.

---

## 5. What this inventory does *not* claim

- Whole-page word counts include navigation and footer. Article body counts are reported separately above so the two are not confused.
- 33 of the 100 roadmap topics are published. The index advertises the roadmap and marks unwritten topics as pending.
- Hadith and dua counts are counts of records in this repository, not a claim to represent the full corpus of any collection. 101 traditions is a curated selection, not Sahih al-Bukhari's 7,000+.
- Tafsir coverage is 6 verses, not 6,236. The UI states this and offers an honest "no commentary bundled" message for other verses.
- Offline Quran coverage is 10 surahs / 49 ayahs, with two partial surahs explicitly labelled. The remaining 104 surahs, audio and video require a network.
- The article library is educational prose, not a fatwa service. Specific legal and medical questions are referred to qualified scholars and professionals.
- The APK is JAR-signed (v1) only and has not been installed on a device in this environment.
