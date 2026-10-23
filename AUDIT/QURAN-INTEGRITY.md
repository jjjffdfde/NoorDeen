# QURAN INTEGRITY & TEXTUAL VERIFICATION REPORT
**Platform:** Islamic Knowledge Portal  
**Standard:** Hafs 'an 'Asim (حَفْص عَنْ عَاصِم) via the Tanzil Canonical Uthmani Corpus  
**Audit Date:** 2026-10-23  
**Status:** 100% Verified & Authenticated  

---

## 1. Executive Summary & Sacred Text Preservation Policy

The Quranic module in the Islamic Knowledge Portal adheres strictly to the canonical recitation standard of **Hafs 'an 'Asim** (the reading adhered to by over 95% of the Muslim world). Under the portal's non-negotiable architectural charter:
1. **Zero Textual Mutation:** Quranic Arabic text is strictly immutable. No automated algorithm, spell-checker, linter, or SEO parser is permitted to alter, normalize, or omit any Arabic consonant, vowel mark (Harakat), Madd sign, Sukun, Shaddah, Tanween, or Waqf (stop) marker.
2. **Authorized Source Alignment:** All online and offline text derives from the Medina Mushaf standard verified by the King Fahd Glorious Quran Printing Complex and the Tanzil Project corpus.
3. **Dual Translation Independence:** The portal guarantees that the **Urdu translation by Maulana Fateh Muhammad Jalandhry** and the **English translation by Sahih International** are always independently accessible to the user, irrespective of the selected interface language.

---

## 2. Canonical Structure Verification

A comprehensive automated verification of `public/js/data.js` validates that all structural parameters match the definitive Islamic standard:

| Structural Parameter | Canonical Standard | Portal Dataset | Verification Status |
| :--- | :--- | :--- | :--- |
| **Total Surahs (Chapters)** | 114 | 114 | **VERIFIED (100%)** |
| **Total Verses (Ayahs)** | 6,236 (Kufan count) | 6,236 | **VERIFIED (100%)** |
| **Total Juz (Parts)** | 30 | 30 | **VERIFIED (100%)** |
| **Bismillah in Surah 1 (Al-Fatihah)** | Verse 1 (Ayah #1) | Verse 1 (Ayah #1) | **VERIFIED** |
| **Bismillah in Surah 9 (At-Tawbah)** | Omitted (Sunnah) | `bismillahPre: false` | **VERIFIED** |
| **Internal Bismillah in Surah 27** | Verse 30 (An-Naml) | Included in 27:30 | **VERIFIED** |
| **Pre-Surah Bismillah Flag** | Active for Surahs 2–8, 10–114 | Flagged across all 112 | **VERIFIED** |

---

## 3. Bundled Offline Quranic Corpus

To ensure uninterrupted spiritual reading during travel, pilgrimage (Hajj/Umrah), flights, or network outages, the portal bundles full Arabic text, transliteration, English translation, and Urdu translation for key daily Surahs directly inside `public/js/data.js`:

| Surah # | Surah Name (English) | Arabic Name | Verses | Traditional Virtues & Purpose |
| :--- | :--- | :--- | :--- | :--- |
| **1** | Al-Fatihah | الفَاتِحَة | 7 | The Opening; obligatory in every Rak'ah of Salah. |
| **2:255** | Ayatul Kursi | آيَةُ الْكُرْسِيِّ | 1 | The Greatest Verse; recited for divine protection after every Fard prayer and before sleep. |
| **36** | Ya-Sin | يس | 83 | The Heart of the Quran; recited for comfort, reflection, and spiritual illumination. |
| **67** | Al-Mulk | المُلْك | 30 | The Dominion; protection from the punishment of the grave (Sunan at-Tirmidhi #2890). |
| **97** | Al-Qadr | القَدْر | 5 | The Night of Decree; commemoration of the Revelation of the Quran. |
| **108** | Al-Kawthar | الكَوْثَر | 3 | The Abundance; prophetic consolation and fountain in Paradise. |
| **109** | Al-Kafirun | الكَافِرُون | 6 | Rejection of idolatry; recitation equal to a fourth of the Quran (Tirmidhi). |
| **110** | An-Nasr | النَّصْر | 3 | Divine Help and Victory; sign of completion of the prophetic mission. |
| **112** | Al-Ikhlas | الإِخْلَاص | 4 | Pure Sincerity; equates to one-third of the Holy Quran (Sahih al-Bukhari #5013). |
| **113** | Al-Falaq | الفَلَق | 5 | The Daybreak; refuge from the mischief of created things and witchcraft. |
| **114** | An-Nas | النَّاس | 6 | Mankind; refuge from the whispering tempter (Waswas) among Jinn and men. |

*For all remaining 104 Surahs, the application fetches verified Uthmani text via HTTPS and seamlessly stores them into the browser Cache API / IndexedDB for permanent offline access.*

---

## 4. Urdu Translation Integrity & Display Architecture

The portal integrates the widely acclaimed translation of **Maulana Fateh Muhammad Jalandhry (مولانا فتح محمد جالندھری)**, recognized throughout the subcontinent and globally for its theological accuracy, linguistic fidelity, and adherence to orthodox Ahl al-Sunnah wal-Jama'ah understanding.

### Architectural Decoupling:
- Unlike platforms that link religious translations to the interface language (e.g., hiding Urdu translations if the UI is set to English or French), the Islamic Knowledge Portal provides an **independent translation selector** in the reader toolbar (`#translation-view-select`).
- Users can choose:
  1. `Urdu & English` (Dual simultaneous display)
  2. `Urdu Only (Jalandhry)`
  3. `English Only (Sahih Int.)`
  4. `Arabic Only (Uthmani Text)`
- The selected display mode is persisted in `localStorage('islamic_portal_translation_mode')`, ensuring user preferences remain constant across browser sessions and offline app launches.

---

## 5. Typography & Readability Safeguards

Arabic calligraphy and Quranic diacritics require specific typographic rules to prevent overlapping or clipping of Harakat:
1. **Font Hierarchy:** `font-family: 'Scheherazade New', 'Amiri', 'Noto Naskh Arabic', 'Traditional Arabic', serif;`
2. **Generous Line Height:** Configured to `2.4` in `main.css`, ensuring ample vertical clearance for superscripts, fathatan, and Madd signs.
3. **Nastaliq Typography:** Urdu verses utilize `Noto Nastaliq Urdu` with an intentional line height of `2.2` and increased letter spacing.
4. **Dynamic Scaling Slider:** Readers can scale Arabic text smoothly from `22px` to `46px` using the toolbar slider, with instant persistence in `localStorage`.
