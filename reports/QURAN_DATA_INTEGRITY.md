# NoorDeen — Quran Data Integrity

**Audited:** 28 October 2026 (Phase 1 cycle)
**Scope:** canonical Arabic text, surah metadata, the full offline corpus, translations, tafsir, audio and reader URL behaviour.
**Verdict:** all 114 surahs and all 6,236 ayahs are now bundled locally as verified JSON chunks and pre-cached by the service worker. Arabic text, English (Saheeh International), Urdu (Jalandhry) and transliteration are present for every ayah. Tafsir remains intentionally partial (6 verses). No Quranic text, translation or tafsir was invented to fill a gap.

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

**Source standard:** the corpus was retrieved from the Al Quran Cloud API (`api.alquran.cloud`) using the `quran-uthmani` edition (Tanzil Uthmani/Hafs text), `en.sahih` (Saheeh International), `ur.jalandhry` (Maulana Fateh Muhammad Jalandhry) and `en.transliteration`. Each edition was fetched in full, validated against the 114 canonical ayah counts in `public/js/data.js`, and rejected wholesale if any count differed. The site does not claim to be a critical edition or a substitute for a printed mushaf.

**Arabic immutability:** translations are displayed in separate translation slots. Switching translation (including the Arabic Tafsir Muyassar option) does not overwrite the canonical Arabic ayah text. The UI keeps the Arabic first and shows translator/edition attribution next to the translation.

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
| All 114 surahs render from the local corpus with no network call | Yes (36 and 18 exercised in browser; all 114 checked in Suite 45) |

The reader now prefers `QuranStore.getSurah()` (memory → IndexedDB → HTTP through the service-worker cache). The Al-Quran Cloud API remains a fallback for translation editions that are not bundled (for example French or Indonesian). A failed API call still shows an honest error card with `retryLoadSurah()`.

---

## 3. Offline Quran coverage

| Layer | Contents | Result |
| :--- | :--- | :---: |
| `public/data/quran/surahs/NNN.json` | 114 files, 6,236 ayahs, 4.65 MB | PASS |
| `public/data/quran/manifest.json` | Provenance, editions, per-surah byte sizes | PASS |
| Service worker `islamic-portal-quran-v1` | Pre-caches all 114 chunks at install | PASS (114 cache entries observed) |
| IndexedDB `noordeen-quran` | Stores each chunk on first read | PASS (Ya-Sin and Al-Kahf stored) |
| `ISLAMIC_DATA.offlineSurahs` (legacy) | 10 surahs / 49 ayahs retained as a last-resort fallback | Retained |

**Verification:** in a Chromium session against the local server, `caches.open('islamic-portal-quran-v1').keys()` returned **114 entries**, including `036.json`, and the reader rendered **83/83 ayahs of Ya-Sin** and **110/110 ayahs of Al-Kahf** with English and Urdu translations. The legacy 49-ayah inline set is no longer the primary offline source.

**Airplane-mode caveat:** the browser tool cannot toggle the OS network. Offline behaviour is evidenced by the complete service-worker and IndexedDB caches plus cache-first code paths, not by an actual radio-off device test. This distinction is stated in `FINAL_TEST_RESULTS.md`.

---

## 4. Translations

| Check | Value |
| :--- | :--- |
| Configured translation/language entries | 40 |
| Bundled for every ayah | English (Saheeh International), Urdu (Jalandhry), transliteration |
| Declared source standard | Tanzil Hafs Uthmani text; published translations |
| Editions exercised live in this cycle | English, Urdu, transliteration (all 6,236 ayahs validated) |
| Other editions | Registry-validated and fetched on demand; not all live-fetched in this cycle |
| English reset | Restores Saheeh International |
| Attribution | Shown in the reader; not stripped by language switching |

**Limit:** registry presence is not proof that every edition's API endpoint is available or that its text has been proofread in this repository. Only the bundled editions are claimed as complete.

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

Coverage is **6 of 6,236 verses (0.1%)**. Phase 2 of the master plan addresses this gap.

---

## 6. Audio

| Check | Value |
| :--- | :--- |
| Reciters in registry | 5 |
| Reciters | Alafasy, Abdul Basit (Murattal), Al-Husary, Al-Minshawi (Murattal), Abu Bakr Al-Shatri |
| Riwayah | Hafs 'an 'Asim |
| URL pattern | `https://everyayah.com/data/{reciter}/{sss}{aaa}.mp3` |
| 1:1 Alafasy URL | `https://everyayah.com/data/Alafasy_128kbps/001001.mp3` |
| Player controls | Play/pause, previous/next ayah, seek, repeat (off / ayah / 3× / 5× / surah), speed (0.75× / 1× / 1.25×) |
| Persistent state | Surah, ayah, reciter, speed and repeat mode stored in `localStorage`; restored on reload |
| Lock-screen controls | Media Session metadata and play/pause/next/previous handlers wired |
| Playback tested end-to-end | **No** — headless environment has no audio output |
| Offline audio | Per-surah download caches MP3s; audio is not bundled in the repository |

The URL construction, reciter selection, repeat/speed logic and state restoration were verified in the browser. Actual listening was not.

**Cross-page limitation:** NoorDeen is a multi-page application. Audio stops when the browser navigates to another HTML document. The player restores the last surah/ayah/reciter/speed when the reader is reopened, but it does not claim gapless playback across page loads.

---

## 7. What is *not* claimed

- Not a complete tafsir: 6 verses have bundled commentary.
- Not a substitute for a printed mushaf or a qualified teacher.
- Not a scholarly critical edition; the text standard is declared, not independently collated.
- Not proof that all 40 translation editions are live; only the bundled English/Urdu/transliteration were validated for all 6,236 ayahs.
- Not audio-tested; only URL construction, controls and state persistence were verified.
- Not device-tested inside the Android APK.
- Not airplane-mode tested with the radio physically disabled.

---

## 8. Reproducing the checks

```powershell
# Rebuild the corpus from the documented API (idempotent; uses data/quran-raw cache)
node scripts/fetch-quran-corpus.cjs

# Run the full suite (Suite 45 validates the corpus; Suite 46 validates the player/offline shell)
node test/run-tests.js
```

Relevant assertions:

- Suite 4: 114 surahs in canonical order; 6,236 ayahs; hadith/dua/kalima shapes.
- Suite 10: expanded Quran/hadith integrity; Arabic presence.
- Suite 11: reciter registry and everyayah URL construction.
- Suite 21: Arabic immutability and biography libraries.
- Suite 23: reader controls, tafsir fallback, audio architecture.
- Suite 41: deep-link resolution and Ayatul Kursi destination.
- **Suite 45: 114 chunks, 6,236 ayahs, per-surah counts, four fields per ayah, no BOM, no duplicated basmalah, spot checks.**
- **Suite 46: IndexedDB store, khatam maths, repeat/speed cycles, Media Session, service-worker corpus cache and offline fallback.**

Full suite at the time of writing: **1,710 executed / 1,710 passed / 0 failed** across 46 suites.
