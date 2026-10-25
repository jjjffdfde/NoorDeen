# PHASE 2 DELIVERABLE: CONTENT DISCOVERY & INTERNAL LINKING BLUEPRINT
## Relational Mapping, Learning Pathways, Semantic Search & Topic Indexing Strategy

**Document ID:** AUD-P2-007  
**Project:** Islamic Knowledge Portal  
**Phase:** Phase 2  
**Publication Date:** October 24, 2026  
**Auditor Roles:** Information Architect, Senior UX Researcher, Technical SEO Specialist  

---

## 1. Executive Discovery Blueprint Summary

A world-class educational portal must not function as a disconnected cluster of isolated articles. A learner reading about the Battle of Badr in the Seerah must effortlessly discover the revelation of Surah Al-Anfal in the Quran, the heroism of Sayyiduna Ali and Hamzah in the Sahaba library, and the exact military rulings in the Hadith corpus.

Phase 2 establishes an **Evidence-Based Internal Linking & Discovery Blueprint** that:
1. Replaces mindless automated keyword tagging with curated, semantically valid relationship graphs.
2. Constructs structured, sequential **Learning Pathways** for new Muslims and students.
3. Enhances full-text and phonetic search discoverability across all 25 content modules.

---

## 2. The Semantic Cross-Reference Graph

All internal relationships are based on verified subject relevance, connecting four foundational pillars:

```
+---------------------------------------------------------------------------------------------------+
|                                 THE ISLAMIC KNOWLEDGE GRAPH                                       |
+---------------------------------------------------------------------------------------------------+
|                                                                                                   |
|    [ QURANIC SCRIPTURE ] <===============================> [ PROPHETIC SEERAH ]                   |
|    - Example: Surah Al-Anfal (8)                           - Example: Battle of Badr (2 AH)       |
|    - Example: Surah Ali 'Imran (3)                         - Example: Battle of Uhud (3 AH)       |
|    - Example: Surah Al-Fath (48)                           - Example: Treaty of Hudaybiyyah (6 AH)|
|               ^                                                        ^                          |
|               | (Revealed Context)                                     | (Participated in)        |
|               v                                                        v                          |
|    [ HADITH & FIQH ] <===================================> [ LIVES OF THE SAHABA ]                |
|    - Example: Bukhari #1 (Niyyah / Intention)              - Example: Umar ibn al-Khattab (RA)    |
|    - Example: Muslim #975 (Cemetery Visitation)            - Example: Sayyidah Aisha (RA)         |
|    - Example: Abu Dawud #1400 (Surah Al-Mulk)              - Example: Bilal ibn Rabah (RA)        |
|               ^                                                        ^                          |
|               | (Legal Foundations)                                    | (Chronological Era)      |
|               v                                                        v                          |
|    [ WORSHIP GUIDES ] <==================================> [ ISLAMIC CIVILIZATIONS ]              |
|    - Step-by-Step Salah Guide                              - 12 Historical Eras                   |
|    - Funeral Rites (Janazah) Guide                         - Compilation of Hadith Corpus         |
|    - Zakat & Nisab Calculator                              - Golden Age of Baghdad & Cordoba      |
|                                                                                                   |
+---------------------------------------------------------------------------------------------------+
```

---

## 3. Structured Learning Pathways

To assist beginners, new Muslims, and structured learners, the portal defines three sequential curriculum pathways:

### Pathway 1: The New Muslim’s First Steps
1. **The Creed:** Understanding Tawheed & The Six Kalimas (`/kalimas`).
2. **Ritual Purification:** The Step-by-Step Wudu & Ghusl Guide (`/wudu-guide`).
3. **The Daily Prayer:** Performing the Five Obligatory Prayers (`/salah-guide`).
4. **Essential Scripture:** Reading Surah Al-Fatihah & The 4 Qul Surahs (`/quran`).
5. **Daily Spiritual Devotion:** Morning & Evening Protection Adhkar (`/duas`).

### Pathway 2: Journey Through the Noble Seerah
1. **Pre-Islamic Context:** The World into which the Messenger ﷺ was Born (`/seerah#ch1`).
2. **The Dawn of Prophethood:** Cave Hira and the Earliest Believers (`/seerah#ch5`).
3. **The Crucible of Persecution:** Safa, Abyssinian Migrations, and Boycott (`/seerah#ch7`).
4. **The Miraculous Ascents:** Al-Isra' wal-Mi'raj and the Pledges of Aqabah (`/seerah#ch11`).
5. **The Great Migration:** Establishing the Madinan State (`/seerah#ch13`).
6. **The Decisive Encounters:** Badr, Uhud, Trench, and Hudaybiyyah (`/seerah#ch15`).
7. **The Universal Proclamation:** Fath Makkah and Farewell Pilgrimage (`/seerah#ch16`).

### Pathway 3: Foundations of Worship & Purification
1. **Purification Hierarchy:** Wudu -> Ghusl -> Tayammum -> Masah (`/wudu-guide`).
2. **Daily Worship:** Conditions, Postures, Recitations & Forgetfulness Sajdah (`/salah-guide`).
3. **Congregational Grace:** Friday (Jumu'ah) and Eid Prayers (`/eid-guide`).
4. **Bereavement & Eternity:** Complete Funeral (Janazah) Protocols (`/janazah-guide`).
5. **Financial Devotion:** Zakat Calculation & Nisab Standards (`/zakat-calculator`).

---

## 4. Search & Discoverability Architecture

### 4.1. Multi-Region Phonetic Search (`public/js/search.js`)
The search engine indexes all 114 Surahs, Hadith topics, guides, tools, and classical figures:
- **Phonetic & Dialectal Tolerance:** Handles Roman Urdu and Subcontinent phonetic spellings:
  - `"surah bakra"` -> Surah Al-Baqarah (2).
  - `"surah rehman"` -> Surah Ar-Rahman (55).
  - `"char qul"` -> Surahs 109, 112, 113, 114.
  - `"tabarakallazi"` -> Surah Al-Mulk (67).
- **Direct Arabic & Urdu Script Queries:** Native Arabic (`"الفاتحة"`) and Urdu (`"سورہ یسین"`).
- **Global Shortcut:** `Ctrl+K` / `Cmd+K` keyboard shortcut triggers instant modal overlay.

### 4.2. In-Article Contextual Cards
Substantive guides feature embedded contextual cards that recommend natural next steps:
- At the conclusion of the **Wudu Guide**, a prominent card leads directly to the **Salah Guide**.
- In the **Janazah Guide**, explicit buttons link directly to **Adult Janazah Duas** and **Child Janazah Duas** in the Duas library.
- In the **Seerah**, chapter footnotes link directly to the **Biographies of the Sahaba** who played leading roles in those events.

---

## 5. Anti-Spam & Navigation Hygiene Rules

To protect website quality and comply with search engine guidelines:
1. **No Automated Tag Generation:** Tags are selected exclusively from the approved 73 categories in `data/taxonomy/content-taxonomy.json`.
2. **Zero Empty Category Pages:** Category links are published only when they contain multiple verified content entities.
3. **No Keyword Cannibalization:** Internal anchor text must describe the target resource accurately (e.g. *"Complete Step-by-Step Janazah Guide"* rather than repetitive generic *"click here"* links).
