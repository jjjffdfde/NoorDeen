# NoorDeen — Content Source Register

**Updated:** 26 October 2026
**Purpose:** record where each category of content comes from, so a reader can check it.
**Limitation stated up front:** this register lists the sources the content was written from. It is not a scholarly certification, and it does not imply that a qualified scholar has reviewed every sentence.

---

## 1. Primary scripture

| Content | Source | Scope in this project | Safeguards |
| :--- | :--- | :--- | :--- |
| Quranic Arabic text | Tanzil Project (Uthmani, Hafs 'an 'Asim) served via the Quran Cloud API | All 114 surahs / 6,236 ayahs at runtime | Arabic kept in its own field, `lang="ar"`, `translate="no"`; translation switching never rewrites Arabic |
| Quranic Arabic text (offline) | Same Tanzil text, bundled in `js/data.js` | 10 surahs / 49 ayahs | Static, not regenerated at build time |
| English translation | Saheeh International (as served by the API edition used) | Reader translation mode | Attributed in the reader, never merged into Arabic |
| Urdu translation | Fateh Muhammad Jalandhari (as served by the API edition used) | Reader translation mode | Attributed, RTL-scoped |
| Six Kalimas | Standard creed compilations | 6 entries | Arabic + transliteration + English + Urdu |

**Known gap:** the Arabic text is only offline for 10 surahs. The other 104 require the API. No claim of a fully offline mushaf is made anywhere on the site.

---

## 2. Hadith

| Collection | Compiler (d.) | Records here | Grading recorded |
| :--- | :--- | --: | :--- |
| Sahih al-Bukhari | al-Bukhari (256 AH) | 42 | Sahih |
| Sahih Muslim | Muslim ibn al-Hajjaj (261 AH) | 25 | Sahih |
| Jami` at-Tirmidhi | at-Tirmidhi (279 AH) | 14 | Sahih / Hasan as graded |
| Sunan Abi Dawud | Abu Dawud (275 AH) | 10 | Sahih / Hasan |
| Sunan an-Nasa'i | an-Nasa'i (303 AH) | 4 | Sahih / Hasan |
| Sunan Ibn Majah | Ibn Majah (273 AH) | 6 | Sahih / Hasan |
| **Total** | | **101** | |

Each record carries `collection`, `number`, `book`, Arabic (`ar`), English (`en`), Urdu (`ur`), `narrator`, `grade` and `topic`. The 101 records are a curated selection for study, **not** the complete corpus of any collection.

---

## 3. Duas and adhkar

| Corpus | Compiler | Use here |
| :--- | :--- | :--- |
| *Hisn al-Muslim* (Fortress of the Muslim) | Sa'id ibn Ali ibn Wahf al-Qahtani | Daily adhkar, travel, sleep, food, distress |
| Quranic supplications | Quran | Rabbana supplications with verse references |
| Salah and janazah supplications | Bukhari, Muslim | Thana, ruku, sujud, tashahhud, durood, qunut, janazah takbirat |

102 supplications are stored with Arabic, transliteration, English, Urdu, repetition target and a reference string. Where a reference could not be pinned to a specific number, the entry cites the collection rather than inventing a number.

---

## 4. Seerah, prophets, companions, history

| Domain | Classical sources | Modern works |
| :--- | :--- | :--- |
| Seerah | Ibn Hisham, *al-Sirah al-Nabawiyyah*; al-Tabari, *Tarikh al-Rusul wa al-Muluk*; Ibn Kathir, *al-Bidaya wa al-Nihaya* | Safiur Rahman Mubarakpuri, *ar-Raheeq al-Makhtum* |
| Stories of the prophets | Ibn Kathir, *Qisas al-Anbiya*; al-Tabari, *Jami' al-Bayan* | — |
| Companions | Ibn Sa'd, *Kitab al-Tabaqat al-Kabir*; al-Dhahabi, *Siyar A'lam al-Nubala*; Ibn Abd al-Barr, *al-Isti'ab*; Ibn al-Athir, *Usd al-Ghabah* | — |
| Islamic history | al-Tabari, *Tarikh*; Ibn Khaldun, *al-Muqaddimah* | Hodgson, *The Venture of Islam*; Lapidus, *A History of Islamic Societies*; Kennedy, *The Prophet and the Age of the Caliphates* |

---

## 5. Calculation engines

| Engine | Standard | Parameters |
| :--- | :--- | :--- |
| Prayer times | University of Islamic Sciences, Karachi | Fajr 18°, Isha 18°, Hanafi Asr (2× shadow), `Asia/Karachi` default |
| Zakat nisab | Hanafi / OIC dual standard | Silver 612.36 g; gold 87.48 g |
| Gold purity | Bullion convention | 24K 100%, 22K 91.6%, 21K 87.5%, 18K 75% |
| Hijri calendar | Umm al-Qura arithmetic + manual adjustment | Julian Day conversion |

These are arithmetic implementations. They are not a fatwa and are labelled as estimates in the UI.

---

## 6. Article library — Batch 1 (topics 1–10)

| Article | Sources used |
| :--- | :--- |
| Beginner's Guide to Islam | Quran; al-Tabari, *Jami' al-Bayan*; al-Baghawi, *Sharh al-Sunnah*; *al-Aqidah al-Tahawiyyah*; Hadith Jibril (Muslim) |
| How to Read and Understand the Quran | al-Zarkashi, *al-Burhan*; al-Suyuti, *al-Itqan*; Ibn Hajar, *Fath al-Bari* |
| Quran Translation vs Tafsir | al-Tabari; Ibn Kathir; al-Raghib, *Mu'jam Mufradat Alfaz al-Qur'an* |
| Tawhid and the Shahadah | Ibn Khuzaymah, *Kitab al-Tawhid*; *Fath al-Majid*; classical lexicons |
| Five Pillars of Islam | Bukhari, Muslim; Ibn Rushd, *Bidayat al-Mujtahid* |
| Salah: Beginner's Guide | al-Nawawi, *al-Majmu'*; Ibn Qudamah, *al-Mughni*; al-Shawkani, *Nayl al-Awtar* |
| Wudu, Ghusl, Tayammum | Quran 5:6; al-Shafi'i, *al-Umm*; al-Marghinani, *al-Hidayah*; Sayyid Sabiq, *Fiqh al-Sunnah* |
| Hadith and Sunnah Authenticity | Ibn al-Salah, *Muqaddimah*; Ibn Hajar, *Nukhbat al-Fikar*; al-Suyuti, *Tadrib al-Rawi* |
| Daily Adhkar | al-Nawawi, *al-Adhkar*; Ibn al-Qayyim, *al-Wabil al-Sayyib*; *Hisn al-Muslim* |
| Zakat Guide | Abu 'Ubayd, *al-Amwal*; al-Qaradawi, *Fiqh al-Zakat*; AAOIFI Shariah Standard 35; Quran 9:60 |

---

## 7. Article library — Batch 2 (topics 11–20)

| Article | Quran references used | Classical / modern sources cited |
| :--- | :--- | :--- |
| Seerah of Prophet Muhammad ﷺ | 96, 74, 73, 17, 33, 48, 60 | Ibn Hisham; al-Tabari, *Tarikh*; Ibn Kathir, *al-Bidaya*; Mubarakpuri, *ar-Raheeq al-Makhtum* |
| Stories of the Prophets | 2, 3, 6, 11, 12, 19, 20, 21, 28, 34, 38, 40 | Ibn Kathir, *Qisas al-Anbiya*; al-Tabari, *Jami' al-Bayan* and *Tarikh*; Ibn Hisham |
| The Sahaba | 8, 9, 49, 48 | Ibn Sa'd, *al-Tabaqat*; al-Dhahabi, *Siyar*; Ibn Abd al-Barr, *al-Isti'ab*; Ibn al-Athir, *Usd al-Ghabah*; Bukhari, Muslim |
| Islamic History and Civilization | 3, 6, 11, 12, 18, 34 | al-Tabari; Ibn Khaldun, *al-Muqaddimah*; Hodgson; Lapidus; Kennedy |
| Islamic Manners and Character | 17, 49, 31, 25, 5 | Bukhari, Muslim (Books of Manners/Virtues); al-Nawawi, *Riyad al-Salihin*; al-Ghazali, *Ihya'*; Ibn al-Qayyim, *Madarij al-Salikin* |
| Fasting and Ramadan | 2:183–187, 2:196–203, 2:185, 97 | Bukhari, Muslim (Fasting, Night Prayer, Zakat al-Fitr); al-Nawawi; Ibn Rushd; Ibn Qudamah; al-Shawkani |
| Hajj and Umrah | 2:196–203, 3:97, 22:26–29, 5:95–97 | Bukhari, Muslim (Hajj); Ibn Rushd; al-Nawawi; Ibn Qudamah; al-Shawkani; Saudi Ministry of Hajj guidance |
| The 99 Names of Allah | 7:180, 17:110, 20:8, 59:22–24, 112, 2:255 | Bukhari, Muslim (hadith of the 99 names); Tirmidhi's enumerated list; Ibn al-Qayyim, *al-Asma' wa al-Sifat* and *Madarij*; al-Ghazali, *al-Maqsad al-Asna* |
| Repentance, Dhikr, Spiritual Development | 39:53, 25:70, 66:8, 13:28, 33:41–42, 2:152 | Bukhari, Muslim (Supplication, Repentance); al-Nawawi, *al-Adhkar*; Ibn al-Qayyim, *al-Wabil al-Sayyib*; al-Ghazali, *Ihya'* |
| A Structured Learning Path for New Muslims | 1, 2, 112, 49 | Bukhari, Muslim; al-Nawawi, *Riyad al-Salihin* and *al-Arba'un al-Nawawiyyah*; Mubarakpuri; al-Ghazali; a beginner fiqh manual |

Each Batch 2 article ends with a rendered bibliography block (`.scholarly-bibliography`), and the sources above are the ones actually listed there.

**Deliberate caution in these articles:** where scholars differ (e.g. whether the 99 names are exhaustive, or the number of takbirs in the Eid prayer), the article presents the disagreement instead of picking a winner silently. Where a hadith number could not be verified, the text cites the collection and book rather than a fabricated number.

---

## 8. Dr. Israr Ahmed lecture catalog

| Field | Value |
| :--- | :--- |
| Source | `https://www.tanzeem.org/videos/` (official Tanzeem-e-Islami archive) |
| Pages retrieved | 10 listing pages (site reports 74 pages total) |
| Listing entries seen | 150 |
| Records kept | 148 (2 index pages excluded) |
| Unique YouTube uploads | 147 |
| Series | 7 |
| Languages | Urdu 131, English 17 |
| Hosting | **None.** No video files are stored or re-hosted; playback is a click-to-load `youtube-nocookie.com` embed and every card links to its tanzeem.org page |

See `reports/DR_ISRAR_VIDEO_CATALOG.md` for the full methodology and per-series breakdown.

---

## 9. What is *not* sourced, and is labelled as such

- **Tafsir for 6,230 verses.** Only 6 verses have bundled commentary. The UI now says "no commentary is bundled for this verse" instead of showing invented text.
- **Fatwas.** The site does not issue rulings. Fiqh pages present attributed positions.
- **Audio for hadith/duas.** None recorded.
- **Translations of the long-form biographies** into languages other than English/Urdu.
- **Any claim of peer review or scholarly endorsement.** None is made.

If you find a citation that looks wrong, the correction channel is the public issue tracker linked from `contact.html` and `about.html`.
