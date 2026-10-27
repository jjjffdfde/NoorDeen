# NoorDeen — Content Inventory

**Audited:** 26 October 2026 (after Batch 3 integration and the sahaba/history encoding repair)
**Method:** every `.html` file under `public/` was read, `<script>`/`<style>` blocks stripped, tags removed, and remaining tokens counted. Article body counts cover the whole `<article class="editorial-content-body">` region — article prose, tables, callouts and bibliography — while excluding shared navigation, table of contents, related-reading block and footer. Numbers are measured, not estimated.
**Pages:** **52** — 26 root pages + 26 pages in `public/articles/`
**Visible words across all pages (whole-page count):** **220,829**
**Article body words (25 articles, excluding page chrome):** **45,901** — average **1,836**, minimum **1,536**, maximum **2,114**
**Sitemap URLs:** **52** (`public/sitemap.xml`, 52 unique `<loc>` entries)
**Full test suite:** **1,478 executed / 1,478 passed / 0 failed** (last run after these content changes)

---

## 1. Root pages (26)

| # | File | Visible words | Size | Purpose |
| --: | :--- | --: | --: | :--- |
| 1 | `sahaba.html` | 34,008 | 431 KB | 52 companion biographies |
| 2 | `seerah.html` | 28,420 | 288 KB | 25-chapter Prophetic biography |
| 3 | `prophets.html` | 23,890 | 297 KB | 30 prophetic narratives |
| 4 | `history.html` | 18,316 | 292 KB | 12 civilisational eras |
| 5 | `hadith.html` | 11,918 | 410 KB | 101 traditions, pre-rendered |
| 6 | `duas.html` | 11,535 | 400 KB | 102 supplications, pre-rendered |
| 7 | `index.html` | 7,806 | 315 KB | Homepage, hubs, 20-pillar taxonomy, glossary |
| 8 | `salah-guide.html` | 4,227 | 76 KB | Step-by-step prayer guide |
| 9 | `wudu-guide.html` | 3,207 | 57 KB | Wudu, ghusl, tayammum |
| 10 | `janazah-guide.html` | 2,702 | 54 KB | Funeral prayer |
| 11 | `pillars.html` | 2,398 | 47 KB | Five pillars |
| 12 | `eid-guide.html` | 2,306 | 42 KB | Eid al-Fitr / al-Adha |
| 13 | `kalimas.html` | 1,454 | 43 KB | Six kalimas + copy/share |
| 14 | `about.html` | 1,452 | 38 KB | Mission, methodology, verification pipeline |
| 15 | `download-app.html` | 1,413 | 42 KB | PWA install, APK/ZIP download, checksums |
| 16 | `prayer-times.html` | 1,344 | 49 KB | Solar prayer times |
| 17 | `zakat-calculator.html` | 1,332 | 48 KB | Zakat engine + fiqh |
| 18 | `calendar.html` | 931 | 28 KB | Hijri converter |
| 19 | `tasbih.html` | 843 | 32 KB | Digital counter |
| 20 | `privacy.html` | 723 | 18 KB | Privacy policy |
| 21 | `sources.html` | 683 | 18 KB | Bibliography and methodology |
| 22 | `dr-israr-ahmed.html` | 570 | 29 KB | Lecture library shell (cards render from JSON) |
| 23 | `contact.html` | 540 | 25 KB | Contact / corrections form |
| 24 | `terms.html` | 537 | 16 KB | Terms of use |
| 25 | `quran.html` | 510 | 35 KB | Quran reader shell |
| 26 | `bookmarks.html` | 291 | 16 KB | Saved items |

Root total: **163,356 words**.

Note: `dr-israr-ahmed.html` and `quran.html` have small static word counts because their content is rendered from `catalog.json` and the Quran API respectively. `hadith.html`, `duas.html`, `sahaba.html`, `seerah.html`, `prophets.html` and `history.html` are largely pre-rendered static text, which is why their counts are high.

---

## 2. Article library (26 pages, 25 articles)

The index is not an article. Article body counts below exclude the shared navigation, table of contents, related-reading block and footer; whole-page counts are higher.

| # | File | Body words | Size | Topic |
| --: | :--- | --: | --: | :--- |
| 27 | `articles/index.html` | — (3,074 whole page) | 114 KB | Library index + 100-topic syllabus |
| 28 | `articles/seerah-of-prophet-muhammad.html` | 2,114 | 40 KB | Seerah (topic 11) |
| 29 | `articles/fasting-and-ramadan.html` | 2,078 | 40 KB | Fasting and Ramadan (topic 16) |
| 30 | `articles/salah-complete-beginners-guide.html` | 1,975 | 50 KB | Salah (topic 6) |
| 31 | `articles/beginners-guide-to-islam.html` | 1,974 | 49 KB | Foundations (topic 1) |
| 32 | `articles/zakat-educational-calculation-guide.html` | 1,954 | 52 KB | Zakat (topic 10) |
| 33 | `articles/wudu-ghusl-tayammum-guide.html` | 1,944 | 47 KB | Purification (topic 7) |
| 34 | `articles/stories-of-the-prophets.html` | 1,943 | 40 KB | Prophetic narratives (topic 12) |
| 35 | `articles/ninety-nine-names-of-allah.html` | 1,939 | 40 KB | Names of Allah (topic 18) |
| 36 | `articles/quran-translation-vs-tafsir.html` | 1,933 | 49 KB | Translation vs tafsir (topic 3) |
| 37 | `articles/hajj-and-umrah-guide.html` | 1,922 | 38 KB | Hajj and Umrah (topic 17) |
| 38 | `articles/hadith-and-sunnah-authenticity.html` | 1,913 | 48 KB | Hadith sciences (topic 8) |
| 39 | `articles/daily-adhkar-and-supplications.html` | 1,886 | 47 KB | Adhkar (topic 9) |
| 40 | `articles/tawhid-and-the-shahadah.html` | 1,854 | 46 KB | Tawhid (topic 4) |
| 41 | `articles/sahaba-biographies.html` | 1,844 | 37 KB | Companions (topic 13) |
| 42 | `articles/islamic-finance-and-riba.html` | 1,792 | 37 KB | Riba and finance (topic 96 / published #101) |
| 43 | `articles/islamic-manners-and-character.html` | 1,790 | 38 KB | Adab (topic 15) |
| 44 | `articles/how-to-read-and-understand-quran.html` | 1,785 | 46 KB | Quran study (topic 2) |
| 45 | `articles/marriage-and-family-in-islam.html` | 1,722 | 37 KB | Marriage and family (topic 92 / #102) |
| 46 | `articles/death-and-the-afterlife.html` | 1,712 | 37 KB | Death and afterlife (#103) |
| 47 | `articles/repentance-dhikr-spiritual-development.html` | 1,701 | 38 KB | Tawbah and dhikr (topic 19) |
| 48 | `articles/environment-and-stewardship.html` | 1,684 | 38 KB | Environment and stewardship (#105) |
| 49 | `articles/new-muslim-learning-path.html` | 1,676 | 37 KB | New Muslim path (topic 20) |
| 50 | `articles/halal-and-haram-food.html` | 1,637 | 37 KB | Halal and haram food (topic 95 / #104) |
| 51 | `articles/five-pillars-of-islam.html` | 1,593 | 44 KB | Five pillars (topic 5) |
| 52 | `articles/islamic-history-civilization.html` | 1,536 | 35 KB | History framework (topic 14) |

**Article body total: 45,901 words across 25 articles**, averaging **1,836** words each. All 25 are inside the 1,500–2,500 word target.

Duplicate check: 5-word shingle Jaccard similarity across the 25 article bodies peaked at **0.030** (99 Names vs Repentance). The closest Batch 3 pair was **0.027** (Environment vs Halal). This is consistent with shared Quranic quotations and shared vocabulary, not copied prose.

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
| `downloads/islamic-portal-release.apk` | 1,398,233 bytes (1.4 MB) | `d9d59d18c164567bea648f6c9d1907c890ce61118c4cac85f85c41651c9e02dc` |
| `downloads/islamic-portal-offline-bundle.zip` | 1,298,402 bytes (1.24 MB) | `e4fbdeeb0eac24f309d0a10d46f2b11880049b2bc5f017db777c738f646f94d6` |

Both are rebuilt from the current tree; `CHECKSUMS.sha256` matches the files byte-for-byte.

---

## 5. What this inventory does *not* claim

- Whole-page word counts include navigation and footer. Article body counts are reported separately above so the two are not confused.
- 25 of the 100 roadmap topics are published. The index advertises the roadmap and marks unwritten topics as pending.
- Hadith and dua counts are counts of records in this repository, not a claim to represent the full corpus of any collection. 101 traditions is a curated selection, not Sahih al-Bukhari's 7,000+.
- Tafsir coverage is 6 verses, not 6,236. The UI states this and offers an honest "no commentary bundled" message for other verses.
- Offline Quran coverage is 10 surahs / 49 ayahs, with two partial surahs explicitly labelled. The remaining 104 surahs, audio and video require a network.
- The article library is educational prose, not a fatwa service. Specific legal and medical questions are referred to qualified scholars and professionals.
- The APK is JAR-signed (v1) only and has not been installed on a device in this environment.
