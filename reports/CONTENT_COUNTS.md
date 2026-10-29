# NoorDeen — Reconciled Content Counts

**Reconciled:** 29 October 2026
**Rule:** a "record count" means entries in a dataset; a "unique count" means distinct items after duplicates. They are never mixed.

---

## 1. Master table

| Collection | Route | Records | Unique | Rendered statically? |
| :--- | :--- | --: | --: | :--- |
| Quran surahs | `/quran` | 114 | 114 | Directory yes; text from the bundled corpus |
| Quran juz | `/quran` | 30 | 30 | Yes |
| Quran offline text | `/quran` | **114 surahs / 6,236 ayahs** | 114 | Yes, bundled as JSON chunks |
| Hadith | `/hadith` | **101** | 101 | Yes |
| Duas & adhkar | `/duas` | **102** | 102 | Yes |
| Six kalimas | `/kalimas` | 6 | 6 | Yes |
| Sahaba monographs | `/sahaba` | **52** | 52 | Yes |
| Prophetic narratives | `/prophets` | **30** | 30 | Yes |
| Seerah chapters | `/seerah` | **25** | 25 | Yes |
| History eras | `/history` | **12** | 12 | Yes |
| Worship guides | Salah / Wudu / Janazah / Eid | 4 | 4 | Yes |
| Interactive tools | Prayer times / Zakat / Tasbih / Calendar | 4 | 4 | Client-side |
| Glossary terms | `index.html` | **135** | 135 | Yes |
| Articles | `/articles/` | **33** + index | 33 | Yes |
| Lecture catalog | `/dr-israr-ahmed` | **148** | **147** | Client-side from JSON |
| Study-mode tafsir | `data/tafsir/` + `study-content.json` | **3 editions + 6 editorial verses** | 3 editions | Client-side, on demand |
| Thematic verse index | `public/data/tafsir/themes.json` | **30 themes / 5,639 matches** | 30 | Client-side |
| Surah thematic profiles | `js/quran.js` | **32** | 32 | Client-side |
| HTML pages | site-wide | **61** | 61 | 60 indexable + `offline.html` |

---

## 2. Hadith breakdown

| Collection | Records |
| :--- | --: |
| Sahih al-Bukhari | 42 |
| Sahih Muslim | 25 |
| Jami` at-Tirmidhi | 14 |
| Sunan Abi Dawud | 10 |
| Sunan Ibn Majah | 6 |
| Sunan an-Nasa'i | 4 |
| **Total** | **101** |

Each record has: `id`, `collection`, `number`, `book`, `ar`, `en`, `ur`, `narrator`, `grade`, `topic`.

**Correction:** earlier revisions of this file said 45 hadiths and 50 duas. Those figures were stale by the time the datasets were expanded; the measured values are 101 and 102.

---

## 3. Dua breakdown

102 supplications, each with Arabic, transliteration, English, Urdu, a repetition target and a reference. They cover daily adhkar, prayer, Quranic Rabbana supplications, travel, food, sleep, distress, illness, family, fasting, Hajj, funerals, Eid and protection. All 102 are pre-rendered in `duas.html`; the 17-domain categorisation is applied in the page's filter UI.

---

## 4. Offline Quran text

The complete corpus is bundled in `public/data/quran/surahs/` as one JSON file per surah, indexed by `public/data/quran/manifest.json`.

| Metric | Value |
| :--- | --: |
| Surah chunks | **114** |
| Ayahs | **6,236** |
| Payload | **4,653,659 bytes** |
| Fields per ayah | `num`, `ar`, `en`, `ur`, `tr` (+ `sajda`, `juz`, `page` where present) |
| Source editions | `quran-uthmani`, `en.sahih`, `ur.jalandhry`, `en.transliteration` |
| Service-worker cache | `islamic-portal-quran-v1` (114 entries) |
| IndexedDB store | `noordeen-quran` |

The legacy `ISLAMIC_DATA.offlineSurahs` set (10 surahs / 49 ayahs) is retained only as a last-resort fallback. The reader prefers the corpus; no surah now requires a network connection for its text.

---

## 5. Lecture catalog

| Metric | Value |
| :--- | --: |
| Listing entries retrieved | 150 |
| Records kept | 148 |
| Excluded index pages | 2 |
| Unique YouTube uploads | 147 |
| Duplicate listing records | 1 (`04-002-016` → `04-002-001`) |
| Series | 7 |
| Urdu | 131 |
| English | 17 |

Full detail: `reports/DR_ISRAR_VIDEO_CATALOG.md`.

---

## 6. Site size

| Metric | Value |
| :--- | :--- |
| HTML pages | 61 (26 root + 34 article pages + `offline.html`) |
| Visible words, 60 indexable pages | 241,702 |
| Root pages | 161,929 words (161,829 indexable + 100 offline) |
| Article library | 79,873 whole-page words; 64,160 article-body words |
| Sitemap URLs | 60 |
| Desktop bundle | 4,957,488 bytes / 4.73 MiB / 324 entries / 61 HTML / 114 Quran chunks / 114 tafsir chunks |
| Bundle SHA-256 | `1f206d04bf99683ac1c746aea5c9506e589d390659e5f4a5cc54fe139e52db85` |
| Release APK | 5,096,933 bytes / 4.86 MiB / 333 entries / v1.3.0 |
| APK SHA-256 | `c2337baa1148a874c804ed6e7c45a4ca33349d2e572fae0286377656d5a61a18` |
| Automated assertions | **1,864 passing / 0 failing** (48 suites) |

---

## 7. What these numbers do not mean

- 101 hadiths ≠ the full corpus of any collection.
- 102 duas ≠ the complete *Hisn al-Muslim*.
- 6 editorial tafsir verses ≠ tafsir of the Quran; the three verbatim editions are the bundled commentary.
- The 30-theme index is a keyword finding aid, not a scholarly thematic classification.
- 6,236 bundled ayahs ≠ a critical edition or a substitute for a printed mushaf; it is the Tanzil Uthmani text as served by the declared API.
- 33 articles ≠ the 100-topic library; 67 roadmap topics are unwritten.
- 148 lecture records ≠ Dr. Israr Ahmed's complete body of work; the archive itself has 74 pages and only 10 were retrieved.
