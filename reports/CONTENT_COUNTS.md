# NOORDEEN KNOWLEDGE LIBRARY — RECONCILED CONTENT COUNTS & COLLECTION BASELINE

**Audit & Reconciliation Date:** 25 October 2026  
**Repository:** `https://github.com/jjjffdfde/NoorDeen`  
**Live Site:** `https://jjjffdfde.github.io/NoorDeen/`  
**Audit Standard:** Strict separation between underlying dataset records, pre-rendered static DOM nodes, and dynamic runtime arrays.

---

## 1. Executive Summary of Reconciled Counts

| Collection / Module | Primary Route | Source Dataset Record Count | Pre-rendered Static HTML Count | Verification & Reconciliation Status |
| :--- | :--- | :--- | :--- | :--- |
| **Holy Quran Surahs** | [`/quran` (`quran.html`)](file:///e:/islamic%20websiye/public/quran.html) | **114 Surahs** (`ISLAMIC_DATA.surahs`) | 114 Surahs interactive directory | **Reconciled (100%)** — Exact Hafs standard (6,236 Ayahs) |
| **Quran Juz (Ajza)** | [`/quran` (`quran.html`)](file:///e:/islamic%20websiye/public/quran.html) | **30 Juz** (`ISLAMIC_DATA.juzList`) | 30 Juz quick-access tabs | **Reconciled (100%)** — Exact traditional boundary divisions |
| **Offline Quran Surahs** | [`/quran` (`quran.html`)](file:///e:/islamic%20websiye/public/quran.html) | **10 Complete Surahs** (Surahs 1, 36, 67, 97, 108, 110, 111, 112, 113, 114) | Static text & Tanzil offline fallback | **Reconciled (100%)** — Stored in `ISLAMIC_DATA.offlineSurahs` |
| **Hadith Traditions** | [`/hadith` (`hadith.html`)](file:///e:/islamic%20websiye/public/hadith.html) | **45 Authenticated Traditions** (`ISLAMIC_DATA.hadiths`) | 23 Static crawlable HTML cards | **Expansion Active** — Expanding dataset to 100+ traditions & pre-rendering all |
| **Masnoon Duas & Adhkar** | [`/duas` (`duas.html`)](file:///e:/islamic%20websiye/public/duas.html) | **50 Verified Supplications** (`ISLAMIC_DATA.duas`) | 33 Static crawlable HTML cards | **Expansion Active** — Expanding dataset to 100+ supplications & pre-rendering all |
| **Six Kalimas** | [`/kalimas` (`kalimas.html`)](file:///e:/islamic%20websiye/public/kalimas.html) | **6 Kalimas** (`ISLAMIC_DATA.kalimas`) | 6 Static cards with Arabic/Urdu/English | **Reconciled (100%)** — Complete with transliteration, translation, and Fiqh notes |
| **Lives of the Sahaba** | [`/sahaba` (`sahaba.html`)](file:///e:/islamic%20websiye/public/sahaba.html) | **52 Comprehensive Monographs** (`sahaba.html`) | 52 Static articles with cohort classification | **Reconciled & Corrected** — Title and metadata updated from obsolete "30" to exact 52 |
| **Stories of the Prophets** | [`/prophets` (`prophets.html`)](file:///e:/islamic%20websiye/public/prophets.html) | **30 Prophetic Narratives** (`prophets.html`) | 30 Static articles | **Reconciled (100%)** — 25 Quranic Prophets + 5 classical righteous figures |
| **Prophetic Seerah** | [`/seerah` (`seerah.html`)](file:///e:/islamic%20websiye/public/seerah.html) | **25 Chronological Chapters** (`seerah.html`) | 25 Static articles | **Reconciled (100%)** — Pre-Islamic Arabia to Farewell Pilgrimage |
| **Islamic History Eras** | [`/history` (`history.html`)](file:///e:/islamic%20websiye/public/history.html) | **12 Civilization Epochs** (`history.html`) | 12 Static articles, 66 milestone subsections | **Reconciled (100%)** — Caliphate to Modern Eras |
| **Five Pillars of Islam** | [`/pillars` (`pillars.html`)](file:///e:/islamic%20websiye/public/pillars.html) | **5 Foundational Pillars** (`pillars.html`) | 5 Deep pedagogical guides | **Reconciled (100%)** — Shahadah, Salah, Zakat, Sawm, Hajj |
| **Step-by-Step Worship Guides** | Guides: Salah, Wudu, Janazah, Eid | **4 Comprehensive Guides** (4 HTML files) | 4 Dedicated procedural guides | **Reconciled (100%)** — Fardh, Sunnah, Adab, common mistakes |
| **Astronomical Calculators & Tools** | Prayer Times, Zakat, Tasbih, Calendar | **4 Dedicated Interactive Tools** | 4 Dynamic calculation engines | **Reconciled (100%)** — Solar UISK math, Dual Nisab, Hijri sync |
| **Institutional & Trust Pages** | About, Contact, Sources, Privacy, Terms | **5 Compliance & Citation Pages** | 5 Fully accessible crawlable pages | **Reconciled (100%)** — Zero fake emails, GitHub Issues linked, verified test disclosures |

---

## 2. Granular Inventory of Key Collections

### A. Holy Quran
- **Surahs:** Exactly 114 Surahs, ordered sequentially according to the Uthmani codex (1: Al-Fatihah to 114: An-Nas).
- **Ayahs:** 6,236 Ayahs (standard Kufic counting system transmitted through Hafs 'an 'Asim).
- **Juz Divisions:** 30 Juz with designated starting Surah, starting Ayah, ending Surah, and ending Ayah.
- **Offline Text Cache:** 10 essential Surahs stored locally in memory for instant offline reading without network requests.

### B. Hadith Traditions
- **Current Dataset (`ISLAMIC_DATA.hadiths`):** 45 authenticated traditions.
- **Current HTML Pre-rendered Cards:** 23 cards in `hadith.html`.
- **Target Expansion:** 100+ traditions spanning:
  1. *Sahih al-Bukhari*
  2. *Sahih Muslim*
  3. *Sunan Abi Dawud*
  4. *Jami` at-Tirmidhi*
  5. *Sunan an-Nasa'i*
  6. *Sunan Ibn Majah*
  7. *Muwatta Malik*
  8. *Riyad as-Salihin*
- **Data Attributes per Record:** `id`, `collection`, `number`, `book`, `ar` (Arabic text with tashkeel), `en` (English translation), `ur` (Urdu translation), `narrator`, `grade` (with scholarly authority), `topic`, `explanation`, `lessons`.

### C. Masnoon Duas & Adhkar
- **Current Dataset (`ISLAMIC_DATA.duas`):** 50 supplications.
- **Current HTML Pre-rendered Cards:** 33 cards in `duas.html`.
- **Target Expansion:** 100+ supplications categorized across 17 life domains:
  1. Morning and evening adhkar (Adhkar as-Sabah wal-Masa)
  2. Daily worship and prayer preparation
  3. Before and after Salah (Adhkar ba'd as-Salah)
  4. Quranic Rabbana supplications
  5. Repentance and forgiveness (Istighfar)
  6. Travel and journeys (Dua as-Safar)
  7. Eating, drinking, and sustenance
  8. Entering and leaving home and mosque
  9. Sleep and waking (Adhkar an-Nawm)
  10. Distress, grief, anxiety, and hardship
  11. Illness, pain, and visiting the sick (Dua al-Marid)
  12. Family, marital harmony, and children
  13. Fasting and Ramadan (Dua al-Iftar)
  14. Hajj and Umrah (Talbiyah, Tawaf, Safa/Marwa)
  15. Funerals and bereavement (Janazah)
  16. Eid and seasonal blessings
  17. Daily interpersonal manners and protection from evil eye

### D. Sahaba Biographies (Companions)
- **Total Monograph Count:** Exactly **52 monographs** rendered in `public/sahaba.html`.
- **Cohort Breakdown:**
  - *Rightly-Guided Caliphs (Khulafa ar-Rashidun):* 4 (Abu Bakr, Umar, Uthman, Ali)
  - *Ten Promised Paradise (Asharah Mubasharah):* 6 additional (Talhah, Az-Zubayr, Abdur-Rahman ibn Awf, Sa'd ibn Abi Waqqas, Abu Ubaydah ibn al-Jarrah, Sa'id ibn Zayd)
  - *Mothers of the Believers (Ummahat al-Mu'minin) & Women Companions:* 12 (Khadijah, Aisha, Fatimah, Umm Salamah, Asma bint Abi Bakr, Hafsah, Umm Sulaym, Sawdah, Zaynab bint Khuzaymah, Umm Ayman, Rufaydah al-Aslamiyyah, Umm Haram)
  - *Foremost Scholars, Jurists & Reciters:* 14 (Ibn Abbas, Ibn Mas'ud, Mu'adh ibn Jabal, Abu Hurairah, Zayd ibn Thabit, Abu ad-Darda, Jabir ibn Abdullah, Anas ibn Malik, Ubayy ibn Ka'b, Abdullah ibn Umar, Abdullah ibn Amr, Abu Musa al-Ash'ari, Salman al-Farsi, Hudhayfah ibn al-Yaman)
  - *Stalwarts, Commanders & Martyrs:* 10 (Hamzah ibn Abdul-Muttalib, Mus'ab ibn Umayr, Bilal ibn Rabah, Khalid ibn al-Walid, Abu Dharr al-Ghifari, Ammar ibn Yasir, Zayd ibn Harithah, Usamah ibn Zayd, Al-Bara ibn Malik, Thabit ibn Qays)
  - *Ansar Leaders & Stalwarts:* 6 (Sa'd ibn Mu'adh, As'ad ibn Zurarah, Sa'd ibn Ubadah, Ubadah ibn as-Samit, Abu Ayyub al-Ansari, Qatadah ibn an-Nu'man)
- **Total Word Count:** 33,527 rendered words in `sahaba.html`.

### E. Stories of the Prophets (Qisas al-Anbiya)
- **Total Prophetic Narratives:** Exactly **30 narratives** rendered in `public/prophets.html`.
- **Quranic Prophets (25):** Adam, Idris, Nuh, Hud, Salih, Ibrahim, Lut, Ismail, Ishaq, Yaqub, Yusuf, Ayyub, Shu'ayb, Musa, Harun, Dawud, Sulayman, Ilyas, Al-Yasa, Yunus, Dhul-Kifl, Zakariyya, Yahya, Isa, Muhammad ﷺ.
- **Additional Righteous / Prophetic Figures (5):** Sheeth (Seth), Yusha ibn Nun (Joshua), Khidr, Uzayr (Ezra), Luqman the Wise.
- **Total Word Count:** 23,267 rendered words in `prophets.html`.

### F. Prophetic Seerah
- **Total Chronological Chapters:** Exactly **25 chapters** in `public/seerah.html`.
- **Span:** From Pre-Islamic Arabia and Ancestry of the Prophet ﷺ to the Farewell Pilgrimage and Completion of the Divine Message.
- **Total Word Count:** 27,656 rendered words.

### G. Islamic History
- **Total Historical Epochs:** Exactly **12 epochs** in `public/history.html`.
- **Subsections / Milestones:** 66 structured milestone analyses.
- **Span:** Rashidun Caliphate (632 CE) through Umayyads, Abbasids, Andalus, Crusades era, Mamluks, Seljuks, Ottomans, Safavids, Mughals, Islamic contributions to science and philosophy, to the Modern Era.
- **Total Word Count:** 17,884 rendered words.

---

## 3. Discrepancy Reconciliation Summary

1. **Sahaba Count Inconsistency:**  
   - *Previous Defect:* `sahaba.html` HTML `<title>` stated `(30 Monographs)` and meta tags stated `30 foremost Sahaba`, whereas the document body contained 52 full biographical monographs.  
   - *Correction Executed:* Updated `<title>`, `<meta name="description">`, Open Graph, Twitter cards, and hero banner to state `52 Monographs` and `33,500+ Words`.

2. **Hadith & Dua Pre-rendering vs Dataset:**  
   - *Previous State:* `data.js` contained 45 Hadiths and 50 Duas, while `hadith.html` had 23 pre-rendered cards and `duas.html` had 33 pre-rendered cards.  
   - *Resolution Plan:* Expand `data.js` to 100+ Hadiths and 100+ Duas with complete classical citations, and sync the static pre-rendered HTML cards so search crawlers and users without JavaScript receive the full encyclopedic depth.
