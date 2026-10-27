# NoorDeen — Quran Data Integrity

**Audited:** 27 October 2026
**Scope:** canonical Arabic text, surah metadata, offline bundle, translations, tafsir, audio and reader URL behaviour.
**Verdict:** the canonical Quran data and surah metadata are internally consistent and are never replaced by translations. Coverage beyond metadata is explicitly partial: offline text covers 10 surahs / 49 ayahs, tafsir covers 6 verses, and the remaining surah text, audio and video require a network. No Quranic text, translation or tafsir was invented to fill a gap.

---

## 1. Canonical text and metadata

| Check | Expected | Actual | Result |
| :--- | --: | --: | :---: |
| Surahs | 114 | 114 | PASS |
| Surah numbers unique | 114 | 114 | PASS |
| Surah order 1–114 | Strictly ascending | Ascending, no gaps | PASS |
| Total ayahs | 6,236 (Hafs) | 6,236 | PASS |
| First surah | Al-Fatihah, 7 ayahs, Meccan | Al-Fatihah, 7, Meccan | PASS |
| Last surah | An-Nas, 6 ayahs, Meccan | An-Nas, 6, Meccan | PASS |
| Juz divisions | 30 | 30 | PASS |
| Revelation type present | All 114 | All 114 (Meccan/Madinah) | PASS |

**Source standard:** the translation registry declares the Hafs Uthmanic text standard, sourced from the King Fahd Glorious Quran Printing Complex / Tanzil.net. The site does not claim to be a critical edition or a substitute for a printed mushaf.

**Arabic immutability:** translations are displayed in a separate translation slot. Switching translation (including the Arabic Tafsir Muyassar option) does not overwrite the canonical Arabic ayah text. The UI keeps the Arabic first and shows translator/edition attribution next to the translation.

---

## 2. Reader navigation and URL integrity

| Behaviour | Verified |
| :--- | :--- |
| Surah selection updates the header and loads the requested surah | Yes |
| `?surah=2&ayah=255` deep link loads, scrolls and highlights the ayah | Yes |
| Legacy `?verse=` parameter still resolves | Yes |
| `#ayah-N` fragment scrolls and highlights | Yes |
| Invalid ayah (999 for a 286-ayah surah) is rejected, URL unchanged, toast shown | Yes |
| Ayatul Kursi search result deep-links to `surah=2&ayah=255` | Yes |
| Juz navigation maps to a valid surah/ayah start | Yes |
| Offline partial surahs show "Showing X of Y verses bundled" and a retry action | Yes |

The reader uses the Quran Cloud API for surah text that is not bundled. A failed first call is retried with fallback editions and a 15-second timeout; total failure shows an honest error card with `retryLoadSurah()` rather than blank content.

---

## 3. Offline Quran coverage

`ISLAMIC_DATA.offlineSurahs` contains:

| Surah | Ayahs bundled | Ayahs in surah | Complete? |
| --: | --: | --: | :---: |
| 1 Al-Fatihah | 7 | 7 | Yes |
| 36 Ya-Sin | 6 | 83 | **No — labelled partial** |
| 67 Al-Mulk | 4 | 30 | **No — labelled partial** |
| 97 Al-Qadr | 5 | 5 | Yes |
| 108 Al-Kawthar | 3 | 3 | Yes |
| 109 Al-Kafirun | 6 | 6 | Yes |
| 110 An-Nasr | 3 | 3 | Yes |
| 112 Al-Ikhlas | 4 | 4 | Yes |
| 113 Al-Falaq | 5 | 5 | Yes |
| 114 An-Nas | 6 | 6 | Yes |
| **Total** | **49** | — | 8 complete + 2 partial |

This is **49 of 6,236 ayahs (0.8%)**. The UI and download page state that the other 104 surahs need a network. No "full Quran offline" claim remains on the site.

---

## 4. Translations

| Check | Value |
| :--- | :--- |
| Configured translation/language entries | 40 |
| Declared source standard | King Fahd Glorious Quran Printing Complex & Tanzil.net Hafs Uthmanic |
| Editions exercised live in this cycle | English (Saheeh International) and Urdu |
| Other editions | Registry-validated only; not live-fetched in this cycle |
| English reset | Restores Saheeh International |
| Attribution | Shown in the reader; not stripped by language switching |

**Limit:** registry presence is not proof that every edition's API endpoint is available or that its text has been proofread in this repository. Only the editions exercised live are claimed as tested.

---

## 5. Tafsir and word-by-word

| Check | Value |
| :--- | :--- |
| Bundled tafsir verses | **6**: 1:1, 1:2, 1:5, 1:6, 2:255, 112:1 |
| Tafsir registry editions | 3 (Ibn Kathir, al-Jalalayn, al-Muyassar metadata) |
| Word-by-word data | Present for the bundled study verses |
| Verses without bundled commentary | Explicit "No commentary is bundled" message + external Quran.com link |
| Generic hadith panel | Labelled "General Sunnah Guidance / Not verse-specific" |

**Honesty caveat:** the bundled English commentary is an **editorial summary** that follows the named tafsir tradition; it is not a verbatim, line-by-line translation of the Arabic tafsir. The UI labels it accordingly. This report does not claim scholarly verification of the wording.

Coverage is **6 of 6,236 verses (0.1%)**. The site states this limit rather than presenting a fabricated fallback.

---

## 6. Audio

| Check | Value |
| :--- | :--- |
| Reciters in registry | 5 |
| Reciters | Alafasy, Abdul Basit (Murattal), Al-Husary, Al-Minshawi (Murattal), Abu Bakr Al-Shatri |
| Riwayah | Hafs 'an 'Asim |
| URL pattern | `https://everyayah.com/data/{reciter}/{sss}{aaa}.mp3` |
| 1:1 Alafasy URL | `https://everyayah.com/data/Alafasy_128kbps/001001.mp3` |
| Playback tested end-to-end | **No** — headless environment has no audio output |
| Offline audio | **No** — online-only, stated in the UI |

The URL construction, reciter selection and play/pause/repeat wiring were verified; actual listening was not.

---

## 7. What is *not* claimed

- Not a full offline Quran: 49 of 6,236 ayahs are bundled.
- Not a complete tafsir: 6 verses have bundled commentary.
- Not a substitute for a printed mushaf or a qualified teacher.
- Not a scholarly critical edition; the text standard is declared, not independently collated.
- Not proof that all 40 translation editions are live; only English and Urdu were exercised.
- Not audio-tested; only URL construction and controls were verified.
- Not device-tested inside the Android APK.

---

## 8. Reproducing the checks

```powershell
node test/run-tests.js
```

Relevant assertions:

- Suite 4: 114 surahs in canonical order; 6,236 ayahs; hadith/dua/kalima shapes.
- Suite 10: expanded Quran/hadith integrity; Arabic presence.
- Suite 11: reciter registry and everyayah URL construction.
- Suite 21: Arabic immutability and biography libraries.
- Suite 23: reader controls, tafsir fallback, audio architecture.
- Suite 41: deep-link resolution and Ayatul Kursi destination.

Full suite at the time of writing: **1,589 executed / 1,589 passed / 0 failed**.
