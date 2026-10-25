# PHASE 2 DELIVERABLE: INFORMATION ARCHITECTURE SPECIFICATION
## Comprehensive Domain Taxonomy, Category Hierarchies & URL Routing Strategy

**Document ID:** AUD-P2-001  
**Project:** Islamic Knowledge Portal  
**Phase:** Phase 2 (Information Architecture, Editorial Standards & Review Workflow)  
**Publication Date:** October 24, 2026  
**Auditor Roles:** Principal Information Architect, Senior Software Architect, Islamic Content Strategist  
**Taxonomy Schema Reference:** `data/taxonomy/content-taxonomy.json`  

---

## 1. Executive Information Architecture Summary

The Islamic Knowledge Portal is designed to serve as an authoritative, authentic digital library and daily spiritual companion for Muslims worldwide. Phase 1 revealed that while 25 static HTML pages existed, content relationships were loosely coupled and lacked a unified taxonomic model.

Phase 2 establishes a scalable, 20-domain information architecture that:
1. **Preserves 100% of Existing Routes:** Maintains zero breaking changes to existing clean URLs (`/`, `/quran`, `/hadith`, `/seerah`, `/prophets`, `/sahaba`, `/history`, `/pillars`, `/salah-guide`, `/wudu-guide`, `/janazah-guide`, `/eid-guide`, `/download-app`, `/prayer-times`, `/tasbih`, `/zakat-calculator`, `/calendar`, `/bookmarks`, `/about`, `/contact`, `/sources`, `/privacy`, `/terms`).
2. **Defines 20 Top-Level Content Domains:** Encompasses scripture, historical narratives, worship guides, foundational creed, sacred utilities, and institutional governance.
3. **Establishes 73 Subcategories with Stable IDs:** Standardizes parent-child entity hierarchies using stable string patterns (`dom-*`, `cat-*`, `content-*`) rather than volatile page titles.
4. **Decouples Technical Utilities from Theological Learning:** Organizes interactive calculators and astronomical tools into dedicated operational spaces while tightly cross-referencing their religious justifications.

---

## 2. The 20 Top-Level Content Domains

The master taxonomy is formally registered in `data/taxonomy/content-taxonomy.json`. Below is the complete domain specification:

```
+---------------------------------------------------------------------------------------------------+
|                                  ISLAMIC KNOWLEDGE PORTAL TAXONOMY                                |
+---------------------------------------------------------------------------------------------------+
| 1. SCRIPTURAL FOUNDATIONS                                                                         |
|    ├── dom-quran               (Holy Quran: 114 Surahs, Hafs Standard, Recitations, Translations)|
|    ├── dom-quran-study         (Quran Study & Exegesis: Tafsir Ibn Kathir, Word-by-Word, Asbab)   |
|    └── dom-hadith              (Hadith & Sunnah: Kutub al-Sittah, Gradings, Fiqh al-Hadith)       |
|                                                                                                   |
| 2. HISTORICAL & BIOGRAPHICAL NARRATIVES                                                           |
|    ├── dom-seerah              (Prophetic Biography: 25-Chapter Chronology, 610–632 CE)           |
|    ├── dom-prophets            (Stories of the Prophets: All 25 Named Quranic Prophets)           |
|    ├── dom-sahaba              (Lives of the Sahaba: Ashara Mubashara, Mothers of Believers)      |
|    └── dom-history             (Islamic Civilizations: 12 Dynastic Eras, 1400+ Years)             |
|                                                                                                   |
| 3. WORSHIP, RITUAL PURITY & DEVOTION                                                              |
|    ├── dom-duas                (Daily Duas & Adhkar: Hisnul Muslim, Situational Invocations)     |
|    ├── dom-salah               (Daily Prayer Education: Postures, Recitations, Fard vs Sunan)     |
|    ├── dom-purification        (Taharah: Step-by-Step Wudu, Ghusl, Tayammum, Masah Nullifiers)    |
|    ├── dom-janazah             (Funeral Rites: 4 Takbirs, Adult/Child Duas, Cemetery Adab)        |
|    ├── dom-eid                 (Eid Prayers: 6 vs 12 Takbirs, Tashreeq, Fitr & Qurbani)           |
|    ├── dom-jumuah              (Friday Congregation: Khutbah Adab, Surah Al-Kahf Sunnah)         |
|    ├── dom-fasting             (Fasting & Ramadan: Sawm Rulings, Taraweeh, Laylatul Qadr)         |
|    ├── dom-zakat               (Zakat & Wealth Purification: Nisab Standards, 2.5% Calculation)   |
|    └── dom-hajj                (Hajj & Umrah: Ritual Sequence, Day of Arafah, Tawaf, Sa'i)        |
|                                                                                                   |
| 4. CREED, YOUTH & GOVERNANCE                                                                      |
|    ├── dom-creed               (Aqidah: Six Articles of Faith, Five Pillars, Six Kalimas)         |
|    ├── dom-youth               (Youth & Beginner Learning: New Muslim Essentials, Moral Adab)     |
|    ├── dom-scholarship         (Sources, E-E-A-T Standards, Four Madhhabs & Editorial Oversight)  |
|    └── dom-tools               (Sacred Utilities: Solar Times, Digital Tasbih, Hijri Calendar)    |
+---------------------------------------------------------------------------------------------------+
```

---

## 3. Subject-Specific Content Structures

Different Islamic subjects require fundamentally distinct metadata schemas and validation rules. Imposing a single generic blog template destroys religious fidelity. The architecture enforces specific structural contracts:

| Content Domain | Primary Entity Type | Structural Components & Metadata Attributes |
| :--- | :--- | :--- |
| **Holy Quran** | `quran_surah`, `quran_verse` | Surah number, Ayah number, Juz, revelation type (Meccan/Medinan), Hafs Uthmani Arabic text (`translate="no"`), verified translation editions, audio CDN reciter mappings. |
| **Hadith** | `hadith_tradition` | Collection, Book name & number, canonical Hadith number (Fuad Abdul Baaqi standard), narrator (Isnad terminus), Arabic Matn, English/Urdu translations, authenticated grade, grading authority (*Al-Albani*, *Darussalam*), Fiqh al-Hadith commentary. |
| **Seerah** | `seerah_chapter` | Chronological chapter number, historical era (Meccan/Medinan), year (CE & AH), geographic coordinates, primary sources (*Ibn Hisham*, *Ibn Sa'd*), revealed Surahs cross-references, moral lessons. |
| **Prophets** | `prophet_narrative` | Prophet name, Arabic script, Quranic chapter/verse index, miracles granted, people addressed, theological virtues, Ibn Kathir *Qisas al-Anbiya* citations. |
| **Sahaba** | `sahaba_biography` | Companion name, Kunya/title, category (Caliph, Ashara Mubashara, Mother of the Believers, Ansar, Scholar), conversion sequence, narrated hadith count, *Al-Isabah* entry number. |
| **History** | `history_era` | Era number, dynastic name, chronological range (CE/AH), geographic boundaries, major rulers, intellectual milestones, architectural monuments, classical chronicle references. |
| **Duas** | `dua_supplication` | Situational category, Arabic text with full diacritics, ALA-LC transliteration, English/Urdu meanings, *Hisnul Muslim* reference, canonical Hadith citation, recommended repetition count. |
| **Worship** | `worship_guide` | Worship type, prerequisites (Taharah), sequential physical postures, recited formulas with translations, comparative Madhhab analysis (Hanafi, Shafi'i, Maliki, Hanbali), nullifiers. |

---

## 4. Entity Relationship Model & Taxonomy Rules

To prevent content silos and orphaned pages, the information architecture establishes deterministic relationship rules:

```
             +--------------------+
             |   Holy Quran       |
             |   (Surahs/Ayahs)   |
             +--------------------+
                       ^
                       | (Revealed during / Exegesis)
                       v
             +--------------------+            +--------------------+
             |   Prophetic Seerah |<---------->|  Lives of Sahaba   |
             |   (Chronology)     | (Narrated) |  (Biographies)     |
             +--------------------+            +--------------------+
                       ^                                 ^
                       | (Historical context)            | (Transmitters)
                       v                                 v
             +--------------------+            +--------------------+
             |  Islamic History   |            |   Hadith Corpus    |
             |  (Civilizations)   |            |  (Sunnah & Fiqh)   |
             +--------------------+            +--------------------+
                                                         ^
                                                         | (Legal evidence)
                                                         v
                                               +--------------------+
                                               |  Worship Guides    |
                                               | (Salah/Zakat/Duas) |
                                               +--------------------+
```

### Relationship Rules:
1. **Seerah -> Quran Surahs:** Every major Seerah chapter detailing a military expedition or revelation milestone must link directly to the Quranic Surahs revealed during that event (e.g., Chapter 15 *Battle of Badr* links to Surah Al-Anfal; *Treaty of Hudaybiyyah* links to Surah Al-Fath).
2. **Hadith -> Worship Guides:** Every practical instruction in the Salah, Wudu, Janazah, and Eid guides must embed clickable citation references to the underlying Hadith tradition in `data/hadith/`.
3. **Sahaba -> Hadith Narrations:** Sahaba biographical profiles must cross-reference the traditions they narrated in the Hadith library (e.g. Sayyidah Aisha, Abu Hurayrah, Abdullah ibn Umar).
4. **Duas -> Situational Routines:** Duas must link bidirectionally to the Homepage Daily Spiritual Companion deck and the relevant worship guide.

---

## 5. URL Strategy & Routing Policy

### 5.1. Preserved Public Clean Routes
The platform uses clean route aliases configured in `server.js`. These canonical URLs must **never be broken or altered**:

```
Public Canonical Route       Resolves to Server Asset
-----------------------      -------------------------
/                            /index.html
/quran                       /quran.html
/hadith                      /hadith.html
/kalimas                     /kalimas.html
/duas                        /duas.html
/seerah                      /seerah.html
/prophets                    /prophets.html
/sahaba                      /sahaba.html
/history                     /history.html
/pillars                     /pillars.html
/salah-guide                 /salah-guide.html
/wudu-guide                  /wudu-guide.html
/janazah-guide               /janazah-guide.html
/eid-guide                   /eid-guide.html
/download-app                /download-app.html
/prayer-times                /prayer-times.html
/tasbih                      /tasbih.html
/zakat-calculator            /zakat-calculator.html
/calendar                    /calendar.html
/bookmarks                   /bookmarks.html
/about                       /about.html
/contact                     /contact.html
/sources                     /sources.html
/privacy                     /privacy.html
/terms                       /terms.html
```

### 5.2. Future Nested Routing Conventions (Phase 9 Readiness)
When localized sub-pages or deep-link entity views are generated in later phases, they must follow this predictable structure:
- Localized Root: `/{lang}/` (e.g. `/ur/`, `/ar/`, `/fr/`)
- Localized Guides: `/{lang}/{guide-slug}` (e.g. `/ur/salah-guide`, `/ar/seerah`)
- Sub-Entities: `/{domain}/{entity-id}` (e.g. `/quran/surah-036`, `/seerah/ch-15-badr`)

---

## 6. Navigation & Discovery Architecture

### 6.1. Canonical Global Header Navigation
The unified `<header class="site-header">` structure is maintained identically across all 25 pages, providing five logical drop-down menus:
1. **Holy Quran:** Complete Quran (114 Surahs), Quran Study Mode, Bookmarked Ayahs.
2. **Hadith & Duas:** Authentic Hadith Collections, Daily Duas & Adhkar, Six Kalimas, Prophetic Seerah, Stories of the Prophets, Lives of the Sahaba.
3. **Worship Guides:** Five Daily Prayers (Salah), Ablution (Wudu/Ghusl/Tayammum), Funeral Prayer (Janazah), Eid Prayer Guide, Five Pillars.
4. **Tools:** Solar Prayer Times, Digital Tasbih Counter, Zakat Calculator, Hijri Calendar Converter.
5. **Civilization & Trust:** 14 Centuries of Islamic History, Sources & Bibliography, About Us & Methodology, Contact & Corrections, Offline Android App.

### 6.2. In-Page Sticky Navigation & Section Rails
For high-density educational guides (`seerah.html`, `salah-guide.html`, `history.html`):
- A sticky **Table of Contents (ToC)** rail enables instant jumping between chapters or postures without excessive vertical scrolling.
- Clear, readable typography and breadcrumbs ensure visitors arriving from search engines immediately know where they are in the curriculum.
