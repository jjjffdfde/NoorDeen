# Phase 1 — Content & Text Quality Audit Report

**Audit Date**: October 2026  
**Auditor**: Senior Islamic Content Specialist & Multilingual Quality Engineer  
**Scope**: All user-facing texts, sacred Quranic Arabic text, Hadith collections, supplications, translations, and navigational UI strings.

---

## 1. Quranic Text & Integrity Audit

- **Arabic Quranic Source**: Verified against the Tanzil Uthmani text.
  - Vowelization, shaddahs, sukun, and maddah marks were checked on all bundled offline ayahs (Surah 1 Al-Fatihah, Surah 112 Al-Ikhlas, Surah 113 Al-Falaq, Surah 114 An-Nas, and Ayatul Kursi 2:255).
  - **Integrity Rule Adherence**: Zero modifications were made to the sacred Quranic Arabic text. No automated spellchecking or grammar changes were applied to Quranic verses.
  - **Surah 1 Al-Fatihah**: Complete 7 ayahs verified. Bismillah is counted as Ayah 1 according to the standard Hafs an Asim reading.
  - **Surahs 112, 113, 114**: Pre-ayah Bismillah displayed as an introductory header, not counted as verse 1, matching the canonical Uthmani standard.
  - **Surahs 36 (Ya-Sin) & 67 (Al-Mulk)**: Need to be fully mirrored from `src/data/quran/offline-surahs.ts` into `public/js/data.js` to ensure 100% offline readability.

---

## 2. Hadith Library Verification

- **Collections Evaluated**:
  1. *Sahih al-Bukhari* (Imam al-Bukhari, d. 256 AH) — Verified Hadiths #1, #13, #1421, #5027, #6491.
  2. *Sahih Muslim* (Imam Muslim, d. 261 AH) — Verified Hadiths #223, #2564.
  3. *Jami\` at-Tirmidhi* (Imam at-Tirmidhi, d. 279 AH) — Verified Hadiths #1924, #2003 with grading explicitly attributed to Imam at-Tirmidhi and Sheikh al-Albani.
  4. *Sunan Ibn Majah* — Verified Hadith #224.
- **Verification Result**: No invented Hadiths, narrators, or fabricated chains. Every Hadith lists the companion narrator (e.g. Umar ibn al-Khattab, Anas ibn Malik, Abu Hurairah, Abu Malik al-Ash'ari, Abu ad-Darda, Uthman ibn Affan).
- **Required Fix**: Add additional narrations representing Sunan Abi Dawud and Sunan an-Nasa'i to ensure all 6 major collections are represented in the client data layer.

---

## 3. The Six Kalimas Verification

- **Kalima 1 (Tayyab)**: *Laa ilaaha illal-laahu Muhammadur-Rasoolul-laah* — Verified.
- **Kalima 2 (Shahadat)**: *Ash-hadu al-laa ilaaha illal-laahu wahdahoo...* — Verified.
- **Kalima 3 (Tamjeed)**: *Subhaanallaahi wal-hamdu lillaahi...* — Verified.
- **Kalima 4 (Tauheed)**: *Laa ilaaha illal-laahu wahdahoo laa shareeka lahoo...* — Verified.
- **Kalima 5 (Astaghfar)**: *Astaghfirul-laaha Rabbee min kulli zambin...* — Verified.
- **Kalima 6 (Radde Kufr)**: *Allaahumma innee a'oozu bika min an ushrika bika...* — Verified.
- **Result**: Arabic diacritics, English transliterations, English meanings, and Urdu translations are authentic and free from typographical errors.

---

## 4. Daily Duas & Supplications (Hisnul Muslim)

- Morning Adhkar: *Asbahnaa wa asbahal-mulku lillaahi* & Sayyid al-Istighfar.
- Protection: *Bismillaahil-lazee laa yadurru ma'as-mihee shay'un*.
- Sleep & Waking: *Bismika Allaahumma amootu wa ahyaa* & *Alhamdu lillaahil-lazee ahyaanaa*.
- Travel: *Subhaanal-lazee sakh-khara lanaa haazaa*.
- References: Sourced from Sahih al-Bukhari, Sahih Muslim, Abu Dawud, and At-Tirmidhi via *Hisnul Muslim*.

---

## 5. Multilingual Text & Translations Quality

- **Supported Languages**: 40 configurable interface languages in `public/js/i18n.js` and `src/i18n/languages.ts`.
- **RTL Language Review**:
  - Arabic (`ar`), Urdu (`ur`), Persian (`fa`), Pashto (`ps`), and Kurdish (`ku`) correctly configured with `dir: 'rtl'`.
  - Font styling properly separates Quranic Arabic (`Amiri`, `Noto Naskh Arabic`) and Urdu typography (`Noto Nastaliq Urdu`).
- **Translation Completeness Review**:
  - Dictionaries for English (`en`), Arabic (`ar`), and Urdu (`ur`) contain comprehensive UI translations.
  - Secondary languages: Indonesian (`id`), Turkish (`tr`), French (`fr`) implemented.
  - Remaining 34 languages cleanly fall back to authorized English rather than pseudo-translations.
- **UI Gaps Found**:
  - Subpages `pillars.html`, `salah-guide.html`, `wudu-guide.html`, `kalimas.html` contained static English labels without `data-i18n` attributes.
  - When switching language to Arabic or Urdu, these headings stayed in English.
  - **Resolution**: Add `data-i18n` attributes and matching translation keys to support full multilingual translation on all subpages.
