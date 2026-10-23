# Islamic Knowledge Portal (بوابة المعرفة الإسلامية)

A complete, production-quality, multilingual Islamic knowledge website built to serve Muslims and seekers of knowledge worldwide with authentic, verified Islamic content, high-performance web architecture, and search-engine-friendly discoverability.

---

## 🌟 Key Features

### 1. The Holy Quran
- **All 114 Surahs & 30 Juz (Paras)** with metadata (Revelation type, number of Ayahs, Arabic and English transliterated names).
- **Authentic Uthmani Script**: Preserved strictly with diacritics (Harakat) from Tanzil / King Fahd Glorious Quran Printing Complex.
- **Verse-by-Verse Translations**: English (Saheeh International) and Urdu (Fateh Muhammad Jalandhry) bundled with fallback mechanisms.
- **Audio Recitation**: Integrated audio player streaming high-definition verse-by-verse recitations from EveryAyah (Mishary Rashid Alafasy, Abdul Basit, Abu Bakr Ash-Shatri, Saad Al-Ghamadi, Mahmoud Khalil Al-Husary).
- **Reading Controls**: Arabic font size scaling slider, reciter selection, copy verse with citation, and local bookmarking.

### 2. Authentic Hadith Library
- Major collections represented: **Sahih al-Bukhari**, **Sahih Muslim**, **Jami\` at-Tirmidhi**, **Sunan Abi Dawud**, **Sunan an-Nasa'i**, **Sunan Ibn Majah**.
- Every Hadith record includes Arabic text, English translation, Urdu translation, book and hadith numbers, narrator attribution, and verified authenticity gradings (Sahih, Hasan with scholar attribution).
- Filterable by collection and thematic topics (Iman, Salah, Akhlaq, Knowledge, Mercy, Zakat).

### 3. The Six Kalimas
- All Six Kalimas: First (Tayyab), Second (Shahadat), Third (Tamjeed), Fourth (Tauheed), Fifth (Astaghfar), Sixth (Radde Kufr).
- Complete Arabic with vowel marks, Latin transliteration, English translation, Urdu translation, and theological significance.

### 4. Daily Duas & Prophetic Adhkar (Hisnul Muslim)
- Sourced from *Hisnul Muslim (Fortress of the Muslim)* by Dr. Sa'id bin Wahf Al-Qahtani.
- Categories: Morning Adhkar, Evening Adhkar, Sleep & Waking, Food & Drink, Entering & Leaving Home, Travel (Safar).
- Interactive tap-to-count recital buttons with target cycles (1x, 3x, 33x, 100x), synthetic audio feedback chime, and vibration support.

### 5. Seerah, Prophets & Sahaba
- **Prophetic Biography (Seerah)**: Chronological chapters spanning from the Pre-Islamic Era and Birth in Makkah, First Revelation in Cave Hira, Year of Sorrow and Al-Isra wal-Mi'raj, Hijrah to Madinah, to the Conquest of Makkah and the historic Farewell Sermon.
- **Stories of the Prophets (عليهم السلام)**: Profiles of Adam, Nuh, Ibrahim, Musa, and Isa (AS) with Quranic verses and spiritual lessons.
- **Biographies of the Companions (رضي الله عنهم)**: The Rightly Guided Caliphs (Abu Bakr, Umar, Uthman, Ali) and Bilal ibn Rabah.

### 6. Foundations of Islamic Practice & Education
- **The Five Pillars of Islam**: Detailed guide for Shahadah, Salah, Zakat, Sawm (Ramadan), and Hajj.
- **Step-by-Step Salah Guide**: Daily prayer breakdown table (Fajr, Dhuhr, Asr, Maghrib, Isha rak'ahs), detailed postures, Arabic recitations, transliteration, and meanings.
- **Step-by-Step Wudu Guide**: The 4 obligatory acts (Fara'id), Sunnah acts, nullifiers, and supplication after ablution.

### 7. Interactive Islamic Tools
- **Astronomical Prayer Times**: Exact calculation of Fajr, Sunrise, Dhuhr, Asr, Maghrib, and Isha using solar orbital mechanics and equation of time, with major city selection or automatic geolocation detection.
- **Digital Tasbih Counter**: Presets for Subhanallah (33x), Alhamdulillah (33x), Allahu Akbar (34x), Astaghfirullah (100x), and La ilaha illallah (100x), with sound synthesis and completed cycles tracker.
- **Live Zakat Calculator**: Calculates annual 2.5% obligatory charity on qualifying assets (Cash, Gold, Silver, Stocks, Business merchandise) minus debts, evaluated against the live Silver Nisab threshold.
- **Hijri Calendar Converter**: Gregorian to Islamic lunar date conversion with upcoming sacred Islamic events.
- **Local Bookmarks**: View and manage saved verses and supplications stored privately on the local device.

### 8. 40-Language Multilingual Architecture
- Configurable framework supporting 40 global languages.
- Searchable language modal with native names.
- Directional layout support: **RTL** (Right-to-Left) for Arabic, Urdu, Persian, Pashto, Kurdish; **LTR** (Left-to-Right) for all other languages.
- Complete translation dictionaries for core languages (English, Arabic, Urdu, Indonesian, Turkish, French) with automatic English fallback.

### 9. SEO & AdSense Readiness
- **Search Engine Discoverability**: Schema.org JSON-LD structured data (`WebSite`, `SearchAction`), OpenGraph social tags, canonical tags, `sitemap.xml`, and `robots.txt`.
- **AdSense Compliance**: Clean design, responsive card layouts, no intrusive ads obscuring Quranic texts, and complete legal compliance pages (`About Us`, `Sources & Methodology`, `Privacy Policy`, `Terms of Service`).

---

## 💻 Tech Stack & Architecture

- **Runtime**: Node.js (ES Modules, standard library `http`, `fs`, `path`, `url`).
- **Zero-Dependency Core**: Runs out of the box on any system without downloading massive third-party binary dependencies.
- **Styling**: Custom responsive CSS design system in `public/css/main.css` implementing the Islamic emerald & gold palette, bidirectional typography, and light/dark theme variables.
- **Client Scripts**: Modular ES modules in `public/js/` managing i18n, search, prayer times calculation, audio playback, and storage.
- **Audio Engine**: HTML5 Audio streaming from EveryAyah CDN + Web Audio API synthesizer for the Tasbih chime.

---

## 🚀 Getting Started

### Prerequisites
- Node.js (version 18 or newer recommended).

### Running Locally
```bash
# Clone the repository
git clone <repo-url>
cd "islamic websiye"

# Start the web server (defaults to http://localhost:3000)
npm start
# or: node server.js
```

Open your browser and navigate to:
```
http://localhost:3000
```

### Running Automated Tests
```bash
npm test
# or: node test/run-tests.js
```

The test runner will execute all 63 unit, integration, data integrity, and server tests.

---

## 📁 Project Structure

```
.
├── public/                     # Static assets and HTML pages
│   ├── index.html              # Homepage with hero, daily verse/hadith, quick access
│   ├── quran.html              # Full Holy Quran reader with 114 surahs & audio
│   ├── hadith.html             # Authentic Hadith library with filters & gradings
│   ├── kalimas.html            # The Six Kalimas with translations & meanings
│   ├── duas.html               # Daily Duas & Adhkar with interactive counters
│   ├── seerah.html             # Seerah of Prophet Muhammad ﷺ
│   ├── prophets.html           # Stories of the Prophets (Qisas al-Anbiya)
│   ├── sahaba.html             # Biographies of the Companions
│   ├── pillars.html            # The Five Pillars of Islam in depth
│   ├── salah-guide.html        # Step-by-step prayer guide with rak'ah table
│   ├── wudu-guide.html         # Step-by-step ablution guide
│   ├── prayer-times.html       # Astronomical prayer times calculator
│   ├── tasbih.html             # Digital Tasbih counter
│   ├── zakat-calculator.html   # Live Zakat calculator with Nisab evaluation
│   ├── calendar.html           # Hijri calendar converter & sacred dates
│   ├── bookmarks.html          # Local bookmarks viewer
│   ├── about.html              # About Us & mission statement
│   ├── sources.html            # Content sources, attribution & methodology
│   ├── privacy.html            # Privacy Policy
│   ├── terms.html              # Terms of Service
│   ├── sitemap.xml             # XML sitemap for search engines
│   ├── robots.txt              # Search engine crawler instructions
│   ├── css/
│   │   └── main.css            # Unified design system & responsive styling
│   └── js/
│       ├── i18n.js             # 40-language registry & translation dictionaries
│       ├── data.js             # 114 Surahs, Hadiths, Kalimas, Duas, Seerah
│       ├── tools.js            # Astronomical calculations, Tasbih audio, Zakat formula
│       ├── quran.js            # Quran reader controller & audio player
│       ├── search.js           # Universal instant search engine
│       └── app.js              # Theme manager, mobile nav, modals, toasts
├── test/
│   └── run-tests.js            # Automated verification test suite (63 tests)
├── server.js                   # High-performance Node.js HTTP server & API
├── package.json                # Project configuration & npm scripts
├── .env.example                # Environment variables template
└── README.md                   # Complete documentation
```

---

## 🌐 40-Language Coverage Matrix

| Language | Code | Direction | UI Status | Quran Translation | Hadith Coverage |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Arabic** | `ar` | RTL | Complete | Original Tanzil Uthmani | Complete |
| **Urdu** | `ur` | RTL | Complete | Fateh M. Jalandhry | Complete |
| **English** | `en` | LTR | Complete | Saheeh International | Complete |
| **Indonesian** | `id` | LTR | Complete | Kemenag RI | Authorized / Curated |
| **Turkish** | `tr` | LTR | Complete | Diyanet İşleri | Authorized / Curated |
| **French** | `fr` | LTR | Complete | Dr. M. Hamidullah | Authorized / Curated |
| **Bengali** | `bn` | LTR | Standard | Muhiuddin Khan | In Progress |
| **Hindi** | `hi` | LTR | Standard | Farooq Khan | In Progress |
| **Persian** | `fa` | RTL | Standard | Fooladvand | In Progress |
| **German** | `de` | LTR | Standard | Amir Zaidan | In Progress |
| **Spanish** | `es` | LTR | Standard | Isa García | In Progress |
| *Other 29 Languages* | *Various* | LTR/RTL | Configurable | Pending Scholarly Review | In Progress |

*When a translation for a specific language is pending review, the platform automatically presents the authorized English translation as a clear fallback.*

---

## 📜 Content Provenance & Licensing

- **Quranic Text**: Tanzil Project (Creative Commons BY 3.0).
- **Quran Audio**: EveryAyah / Quran Central. Free for non-commercial educational use.
- **Hadith Collections**: Numbering and authentic gradings cross-referenced against standard Islamic scholarship and Sunnah.com standards.
- **Supplications**: Hisnul Muslim (Dr. Sa'id bin Ali bin Wahf Al-Qahtani).

---

## 🔒 Security & Privacy

- No user accounts or personal data collection required.
- Bookmarks and reading settings are kept 100% client-side in browser `localStorage`.
- Security headers enabled: `X-Content-Type-Options: nosniff`, `X-Frame-Options: SAMEORIGIN`, `Referrer-Policy: strict-origin-when-cross-origin`.
