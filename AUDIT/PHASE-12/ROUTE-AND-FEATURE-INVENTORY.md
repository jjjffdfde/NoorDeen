# PHASE 12A — ROUTE AND FEATURE INVENTORY

**Audit Date:** October 24, 2026  
**Total Routes Audited:** 25 Public HTML Routes + 2 API Endpoints + Static Assets  
**Evaluation Standard:** Production Readiness, Functional Integrity & Competitor Comparison Baseline  

---

## 1. Complete Route Inventory

| # | Clean Route | Physical File | Page Title | Key Features & Modules | Competitor Benchmark Target |
|---|---|---|---|---|---|
| 1 | `/` | `public/index.html` | Islamic Knowledge Portal — Comprehensive Islamic Learning Platform | Hero search trigger, Quick Action Deck, Daily Ayat/Hadith/Dua cards, Prayer Times Widget, App Download Banner | Quran.com, IslamicFinder |
| 2 | `/quran` | `public/quran.html` | The Holy Quran Pak — Read, Listen, Study & Understand with Translations | 114 Surahs, Hafs 6,236 Ayahs, Independent Translation Selector, Tafsir Ibn Kathir modal, Audio Player, Word-by-Word Study, Bookmarks | Quran.com, Tanzil.net |
| 3 | `/hadith` | `public/hadith.html` | Authentic Hadith Library — Bukhari, Muslim, Sunan with Gradings | Canonical Hadith collections, Book/Narration numbering, Scholarly Gradings (Sahih/Hasan), Collection & Topic filters, Search, Copy with citation | Sunnah.com |
| 4 | `/duas` | `public/duas.html` | Masnoon Duas & Daily Adhkar — Authentic Supplications with References | Categorized Duas (Morning/Evening, Salah, Protection, Travel), Arabic, Transliteration, English & Urdu translations, Hisn al-Muslim citations, Copy | IslamicFinder, Sunnah.com |
| 5 | `/kalimas` | `public/kalimas.html` | Six Kalimas of Islam — Arabic Text, Pronunciation & Translation | 6 Fundamental Kalimas (Tayyibah to Radde Kufr), Pronunciation guides, Translations, Doctrinal context | SeekersGuidance |
| 6 | `/seerah` | `public/seerah.html` | Complete Chronological Seerah of Prophet Muhammad ﷺ | 25 In-depth Biographical Chapters (Pre-Islamic Arabia to Wafat), Quranic cross-references, Ibn Hisham & Ar-Raheeq citations | Yaqeen Institute, SeekersGuidance |
| 7 | `/prophets` | `public/prophets.html` | Stories of the Prophets (Qisas al-Anbiya) — Authentic Quranic Narratives | 17 Prophetic Monograph Chapters (Adam to Muhammad ﷺ), Lessons, Historical context, Ibn Kathir citations | Yaqeen Institute |
| 8 | `/sahaba` | `public/sahaba.html` | Biographies of the Sahaba (Companions) — Virtues, Sacrifices & Legacies | 14 Extensive Biographies (Ashara Mubashshara, Ummahat al-Mu'minin, Ansar), Classical citations (Al-Isabah, Siyar A'lam an-Nubala) | Yaqeen Institute |
| 9 | `/history` | `public/history.html` | Comprehensive Islamic History Library — Dynasties, Eras & Civilizations | 12 Historical Eras (Rashidun, Umayyad, Abbasid, Andalusia, Ottomans, Mughals, Golden Age Sciences), Interactive timeline | Al-Islam.org, Yaqeen Institute |
| 10 | `/pillars` | `public/pillars.html` | The Five Pillars of Islam (Arkan al-Islam) — Foundations of Faith | Detailed breakdown of Shahadah, Salah, Zakat, Sawm, and Hajj with spiritual, legal, and communal dimensions | SeekersGuidance |
| 11 | `/salah-guide` | `public/salah-guide.html` | Complete Step-by-Step Practical Salah Guide — Method, Rulings & Duas | Prerequisites, Rak'ah breakdowns, Postures with Arabic recitations & meanings, Sujud as-Sahw, Madhhab comparisons | SeekersGuidance, IslamQA.info |
| 12 | `/wudu-guide` | `public/wudu-guide.html` | Complete Purification Guide — Wudu, Ghusl & Tayammum | Fara'id, Sunan, Step-by-step instructions, Nullifiers (Nawaqid), Ghusl requirements, Tayammum method | SeekersGuidance, IslamQA.org |
| 13 | `/janazah-guide` | `public/janazah-guide.html` | Practical Janazah (Funeral) Prayer Guide — Rulings & Duas | Ghusl Mayyit, Kafan, 4 Takbeers Janazah prayer recitations with Arabic & translations, Burial etiquettes, Condolences | IslamQA.info, SeekersGuidance |
| 14 | `/eid-guide` | `public/eid-guide.html` | Eid-ul-Fitr & Eid-ul-Adha Prayer Guide — Sunnahs, Khutbah & Rulings | Sunnahs of Eid, 6 additional Takbeers prayer method, Takbeerat-e-Tashreeq, Zakat-ul-Fitr, Qurbani/Udhiyah rules | IslamQA.info, SeekersGuidance |
| 15 | `/prayer-times` | `public/prayer-times.html` | Astronomical Solar Prayer Times & Qibla Direction Calculator | Precise Fajr, Sunrise, Dhuhr, Asr, Maghrib, Isha, Qiyam times; MWL, ISNA, Umm al-Qura, Karachi, Egyptian calculation methods, Countdown timer | IslamicFinder.org |
| 16 | `/tasbih` | `public/tasbih.html` | Digital Tasbih Counter & Dhikr Tracker — Daily Adhkar Companion | Interactive digital counter with tactile feedback, Common Adhkar presets, Custom dhikr creation, Daily targets, Persistence | IslamicFinder.org |
| 17 | `/zakat-calculator` | `public/zakat-calculator.html` | Comprehensive Islamic Zakat Calculator — Gold, Silver & Wealth | Real-time gold & silver Nisab threshold calculations, Cash, Business stock, Investments, Agricultural produce, Liabilities deductions | IslamicFinder.org |
| 18 | `/calendar` | `public/calendar.html` | Islamic Hijri & Gregorian Calendar Converter — Dates & Holidays | Accurate Umm al-Qura calendar conversion, Key Islamic dates and events (Ramadan, Eids, Mawlid, Ashura) | IslamicFinder.org |
| 19 | `/bookmarks` | `public/bookmarks.html` | Saved Bookmarks & Notes — Islamic Knowledge Portal | LocalStorage-based bookmark organizer for Ayahs, Hadiths, Duas, and Articles; Export/Import JSON capability | Quran.com |
| 20 | `/download-app` | `public/download-app.html` | Download Android APK & Offline Islamic Portal App | Direct release APK download, SHA-256 verification hash, Offline ZIP bundle, PWA installation instructions | Quran.com, IslamicFinder |
| 21 | `/about` | `public/about.html` | About Us — Mission, Methodology & Editorial Standards | Statement of Ahlus-Sunnah wal-Jama'ah methodology, Non-sectarian commitment, Data integrity, Scholarly oversight | IslamQA.info, Yaqeen Institute |
| 22 | `/contact` | `public/contact.html` | Contact Us & Religious Content Correction Submissions | Content correction submission channel, Academic inquiry forms, Response timelines | IslamQA.org |
| 23 | `/sources` | `public/sources.html` | Source Provenance, Bibliographic Citations & Content Licenses | Primary sources (Tanzil, King Fahd Complex, Sunnah.com), Academic bibliography, Creative Commons licenses | Tanzil.net, Sunnah.com |
| 24 | `/privacy` | `public/privacy.html` | Privacy Policy & Data Protection Notice | Zero-tracking policy, Local-only bookmark storage, AdSense cookie disclosure, GDPR & CCPA compliance | All competitors |
| 25 | `/terms` | `public/terms.html` | Terms of Service & Religious Information Disclaimer | Educational purpose disclaimer (not a replacement for local Mufti fatwa), Permitted usage, Intellectual property | All competitors |

---

## 2. API Endpoints

1. **`GET /api/health`**:
   - Response: `200 OK` JSON (`{"status": "healthy", "timestamp": "...", "version": "1.0.0"}`)
   - Purpose: Continuous monitoring, Docker healthchecks, uptime tracking.
2. **`GET /api/languages`**:
   - Response: `200 OK` JSON (`{"count": 40, "note": "Complete 40-language framework implemented..."}`)
   - Purpose: Internationalization registry verification.

---

## 3. High-Priority Comparison Candidates

Based on the route inventory, the primary competitors for each major section are:
- **Quran Section (`quran.html`, `bookmarks.html`):** Benchmark against **Quran.com** and **Tanzil.net**.
- **Hadith Section (`hadith.html`):** Benchmark against **Sunnah.com**.
- **Biographical & Educational Section (`seerah.html`, `prophets.html`, `sahaba.html`, `history.html`):** Benchmark against **Yaqeen Institute**, **Al-Islam.org**, and **SeekersGuidance**.
- **Worship & Practical Guides (`salah-guide.html`, `wudu-guide.html`, `janazah-guide.html`, `eid-guide.html`):** Benchmark against **SeekersGuidance**, **IslamQA.info**, and **IslamQA.org**.
- **Daily Practice & Astronomical Tools (`prayer-times.html`, `zakat-calculator.html`, `calendar.html`, `tasbih.html`):** Benchmark against **IslamicFinder.org**.
- **Search Engine (`public/js/search.js`):** Benchmark against **Quran.com** and **Sunnah.com**.
