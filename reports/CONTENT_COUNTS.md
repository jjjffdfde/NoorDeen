# NoorDeen — Reconciled Content Counts

**Reconciled:** 26 October 2026
**Rule:** a "record count" means entries in a dataset; a "unique count" means distinct items after duplicates. They are never mixed.

---

## 1. Master table

| Collection | Route | Records | Unique | Rendered statically? |
| :--- | :--- | --: | --: | :--- |
| Quran surahs | `/quran` | 114 | 114 | Directory yes; text via API |
| Quran juz | `/quran` | 30 | 30 | Yes |
| Quran offline text | `/quran` | 10 surahs / 49 ayahs | 10 | Yes, bundled |
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
| Articles | `/articles/` | **20** + index | 20 | Yes |
| Lecture catalog | `/dr-israr-ahmed` | **148** | **147** | Client-side from JSON |
| Study-mode tafsir | `data/tafsir/study-content.json` | **6 verses** | 6 | Client-side |
| Surah thematic profiles | `js/quran.js` | **32** | 32 | Client-side |
| HTML pages | site-wide | **47** | 47 | — |

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

Bundled in `ISLAMIC_DATA.offlineSurahs`:

| Surah | Name | Ayahs |
| --: | :--- | --: |
| 1 | Al-Fatihah | 7 |
| 36 | Ya-Sin | 6 |
| 67 | Al-Mulk | 4 |
| 97 | Al-Qadr | 5 |
| 108 | Al-Kawthar | 3 |
| 109 | Al-Kafirun | 6 |
| 110 | An-Nasr | 3 |
| 112 | Al-Ikhlas | 4 |
| 113 | Al-Falaq | 5 |
| 114 | An-Nas | 6 |
| | **10 surahs** | **49 ayahs** |

**Correction:** an earlier revision listed Surah 111 and omitted Surah 109. The list above matches `js/data.js`.

The remaining **104 surahs** are fetched from the Quran Cloud API and need a network connection.

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
| HTML pages | 47 (26 root + 21 article) |
| Visible words, all pages | 209,021 |
| Root pages | 161,370 words |
| Article pages | 47,651 words (44,673 across the 20 articles) |
| Sitemap URLs | 47 |
| Desktop bundle | 1,241,211 bytes / 1.18 MB / 75 entries / 47 HTML |
| Bundle SHA-256 | `137cd7b22e659a1a846ad8dc4486b3f9eb261ee467a8e5abee42ffb8af01498a` |
| Release APK | 6,232,774 bytes / 5.94 MB |
| APK SHA-256 | `87763ba4b3bea482944dd170cb81b0e47cfe03778213ee0852292a928fbab2ed` |
| Automated assertions | 1,473 passing / 0 failing |

**Correction:** earlier revisions quoted a 1.16 MB APK and a 1.07 MB bundle. Both artifacts were rebuilt with the current 47 pages and the 10 new articles.

---

## 7. What these numbers do not mean

- 101 hadiths ≠ the full corpus of any collection.
- 102 duas ≠ the complete *Hisn al-Muslim*.
- 6 tafsir verses ≠ tafsir of the Quran.
- 10 offline surahs ≠ an offline mushaf.
- 20 articles ≠ the 100-topic library; 80 topics are unwritten.
- 148 lecture records ≠ Dr. Israr Ahmed's complete body of work; the archive itself has 74 pages and only 10 were retrieved.
