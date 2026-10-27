# NOORDEEN — COMPETITOR CONTENT BENCHMARK & ARCHITECTURAL COMPARISON

> **Superseded:** this file reflects the 25 October 2026 audit, when the site had 45 hadiths, 50 duas, 36 pages and no glossary. Current figures and comparison are in `reports/COMPETITOR_BENCHMARK.md` (26 October 2026). Keep this file for history only.

**Date of Audit:** October 25, 2026  
**Auditor:** NoorDeen Senior Knowledge Engineer & Architectural Reviewer  
**Repository:** [https://github.com/jjjffdfde/NoorDeen](https://github.com/jjjffdfde/NoorDeen)  
**Live Portal:** [https://jjjffdfde.github.io/NoorDeen/](https://jjjffdfde.github.io/NoorDeen/)  

---

## 1. Executive Summary & Objective

This benchmark conducts a rigorous forensic analysis of five prominent international Islamic digital reference platforms:
1. **IslamWeb** ([https://islamweb.net/en/](https://islamweb.net/en/))
2. **Dawat-e-Islami** ([https://www.dawateislami.net/](https://www.dawateislami.net/))
3. **IslamOnline** ([https://islamonline.net/en/home/](https://islamonline.net/en/home/))
4. **IslamiCity** ([https://www.islamicity.org/](https://www.islamicity.org/))
5. **Islam360** ([https://www.theislam360.com/](https://www.theislam360.com/))

The objective is to identify proven architectural models, taxonomy patterns, educational pathways, and feature sets across the global Islamic digital landscape, benchmark NoorDeen's actual current capabilities against them, identify substantive content gaps, and establish a clear, achievable engineering and editorial expansion roadmap.

---

## 2. In-Depth Forensic Analysis of Benchmark Platforms

### A. IslamWeb (islamweb.net/en)

#### 1. Content Categories Observed
- **Fatwa & Q&A Center:** Massive subject-organized archive spanning Aqeedah (Creed), Taharah (Purification), Salah, Zakah, Sawm (Fasting), Hajj, Medical Ethics, Commercial Transactions, Inheritance (Mawarith), and Family Law.
- **Educational Articles:** Deep thematic essays covering Quranic Sciences, Hadith Sciences, Seerah, Islamic History, Moral Virtues (Akhlaq), and Contemporary Societal Challenges.
- **Quran Audio Library:** Multi-reciter audio repository offering complete Surah recitations in *Murattal* and *Mujawwad* styles with downloadable formats.
- **Multimedia Lectures & Audio Reminders:** Audio lectures, Friday khutbah transcripts, and spiritual reflections.

#### 2. Resource Types & Navigation Patterns
- Hierarchical subject taxonomy (Main Category → Sub-Category → Article/Ruling).
- Related question links, cross-referenced Quranic verses, and cited Hadith references.
- High-level multi-language selector (Arabic, English, French, Spanish, German, Indonesian).

#### 3. Strengths & Lessons for NoorDeen
- **Granular Topical Classification:** Demonstrates how thousands of individual knowledge entries can remain navigable when structured under predictable topical hierarchies.
- **Clear Textual Segmentation:** Rigidly separates primary religious quotations (Quran/Hadith) from jurisprudential explanation and contextual commentary.
- **Caution for NoorDeen:** NoorDeen must *never* copy fatwas or present editorial writings as binding legal rulings without a recognized institutional review process.

---

### B. Dawat-e-Islami (dawateislami.net)

#### 1. Content Categories Observed
- **Digital Library (Maktaba-tul-Madinah):** Digital repository of books, booklets, and specialized research papers translated into English, Urdu, Arabic, and 30+ regional languages.
- **Structured Educational Courses (*Farz Uloom*):** Sequential multi-lesson courses covering obligatory knowledge (beliefs, prayer essentials, purification, business ethics).
- **Quran Learning & Tajweed:** Step-by-step phonetics, pronunciation, and basic recitation tutorials.
- **Audience-Specific Learning:** Tailored sections for beginners, children, families, and professionals.

#### 2. Resource Types & Navigation Patterns
- Multi-lesson courses with progress tracking and chapter-by-chapter reading.
- Integrated PDF reader and downloadable offline distribution formats.
- Clear step-by-step instructional flow for rituals (Wudu, Ghusl, Salah).

#### 3. Strengths & Lessons for NoorDeen
- **Structured Learning Journeys:** Breaking complex topics into sequential, bite-sized lessons rather than single exhaustive articles makes foundational learning dramatically more accessible.
- **Practical Ritual Instruction:** Clear diagrams, procedural lists, and common mistakes analysis.

---

### C. IslamOnline (islamonline.net/en)

#### 1. Content Categories Observed
- **About Muhammad ﷺ (Seerah & Character):** Analytical and thematic biographies focusing on leadership, diplomacy, family life, compassion, and historical milestones.
- **Living Shariah (Fiqh of Everyday Life):** Worship, financial ethics, bioethics, food and dietary laws, and new Muslim integration.
- **Spiritual & Emotional Development (Tazkiyah):** Heart softeners, overcoming grief, sincere repentance (Tawbah), patience (Sabr), and gratitude (Shukr).
- **Muslim Family & Society:** Parenting in the modern era, marital rights and responsibilities, youth counseling, and community building.
- **Seasonal Knowledge Hubs:** Dedicated comprehensive portals for Ramadan, Dhul-Hijjah (Hajj), Eid al-Fitr, and Eid al-Adha.

#### 2. Resource Types & Navigation Patterns
- Editorial articles with prominent author bylines, primary citations, and thematic tags.
- Thematic resource hubs grouping articles, videos, and infographics around seasonal themes.

#### 3. Strengths & Lessons for NoorDeen
- **Holistic Life Guidance:** Bridges classical Islamic jurisprudence with practical contemporary personal and family life.
- **Seasonal Learning:** NoorDeen should feature structured hubs for Ramadan, Eid, and Hajj that activate relevant Duas, guides, and historical context.

---

### D. IslamiCity (islamicity.org)

#### 1. Content Categories Observed
- **Quran & Hadith Discovery Engines:** Searchable Arabic text with multiple parallel English translations, word-by-word analysis, and topic indexing.
- **Islamic Glossary & Encyclopedic Concepts:** Alphabetical lexicon defining essential Arabic and theological terminology with transliteration and Quranic citations.
- **Astronomical & Calculation Utilities:** Real-time solar prayer times, Qibla compass, Hijri-Gregorian calendar, and dual-standard Zakat calculators.
- **Educational Quizzes & Interactive Learning:** Conceptual quizzes assessing Quranic knowledge, Prophetic history, and Islamic values.

#### 2. Resource Types & Navigation Patterns
- Search by root word, subject, and transliterated keyword.
- Cross-module linking between Glossary terms, Quranic verses, and biographical profiles.

#### 3. Strengths & Lessons for NoorDeen
- **Integrated Theological Glossary:** Essential for non-Arabic speakers and beginners who encounter terms like *Tawheed*, *Ihsan*, *Nisab*, or *Tazkiyah*.
- **Interactive Utility Tools:** Calculators and calendar converters drive repeated reader engagement.

---

### E. Islam360 (theislam360.com)

#### 1. Content Categories Observed
- **Complete Hadith Database:** Primary Hadith compilations (Sahih al-Bukhari, Sahih Muslim, Sunan Abi Dawud, Jami at-Tirmidhi, Sunan an-Nasa'i, Sunan Ibn Majah) with international numbering and authenticity grading.
- **Quran Thematic Search:** Search by Arabic roots, English and Urdu topics, and verse-by-verse audio recitations.
- **Life-Situation Duas & Azkar:** Comprehensive supplications categorized by daily rituals, distress, illness, travel, and worship.
- **Digital Tasbih & Salah Tracking:** Counters, daily targets, and custom dhikr routines.

#### 2. Resource Types & Navigation Patterns
- Fast client-side and full-text search across Arabic, English, and Urdu datasets.
- Clean category drawers and bookmarking systems.

#### 3. Strengths & Lessons for NoorDeen
- **Exemplary Hadith & Dua Metadata:** Every entry includes verified collection numbers, Arabic vocalized text, English and Urdu translations, narrator chains, and authentic source grades.
- **Offline Reliability:** Full client-side caching enables uninterrupted offline study.

---

## 3. Comprehensive Feature & Architecture Matrix

| Feature / Capability | IslamWeb | Dawat-e-Islami | IslamOnline | IslamiCity | Islam360 | NoorDeen (Current) | NoorDeen (Post-Expansion Goal) |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **Canonical Quran (114 Surahs)** | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ (Canonical Hafs) | ✅ (Canonical Hafs + Thematic Profiles) |
| **Surah Thematic Profiles** | ✅ | ✅ | ✅ | ✅ | ✅ | Partial (10 Surahs) | ✅ **All 114 Surahs Structured Profiles** |
| **Curated Authenticated Hadith** | ✅ | ✅ | ✅ | ✅ | ✅ | 45 records | ✅ **100+ Source-Verified Narrations** |
| **Categorized Daily Duas & Azkar** | ✅ | ✅ | ✅ | ✅ | ✅ | 50 records | ✅ **100+ Verified Supplications (17 Cats)** |
| **Seerah Chronological Timeline** | ✅ | ✅ | ✅ | ✅ | ✅ | 25 Eras (27k words) | ✅ **25 Eras + Cross-References** |
| **Prophet Biographies** | ✅ | ✅ | ✅ | ✅ | ✅ | 30 Prophets (23k words) | ✅ **30 Prophets + Quranic Citations** |
| **Sahaba Biographies** | ✅ | ✅ | ✅ | ✅ | ✅ | 52 Sahaba (33k words) | ✅ **52+ Reconciled & Deepened Biographies** |
| **Islamic History Timeline** | ✅ | ✅ | ✅ | ✅ | ✅ | 12 Epochs (17k words) | ✅ **12 Epochs + 66 Milestone Guides** |
| **Worship Guides (Salah, Wudu, Janazah, Eid)** | ✅ | ✅ | ✅ | ✅ | ✅ | 4 Guides (14k words) | ✅ **Enhanced Guides + School Differences** |
| **Islamic Theological Glossary** | ✅ | ❌ | ❌ | ✅ | ❌ | ❌ (Missing) | ✅ **Comprehensive 100-Term Glossary** |
| **Original Educational Article Library** | ✅ | ✅ | ✅ | ✅ | ❌ | Partial (Fragmented) | ✅ **Structured 20-Pillar Knowledge Hub** |
| **Structured Multi-Lesson Courses** | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ (Missing) | ✅ **New Muslim & Foundations Learning Paths** |
| **Educational Interactive Quizzes** | ❌ | ❌ | ❌ | ✅ | ❌ | ❌ (Missing) | ✅ **Client-side Knowledge Quizzes** |
| **Multi-Language Content Handling** | ✅ (6 langs) | ✅ (30+ langs) | ✅ (English/Arabic) | ✅ (English) | ✅ (Eng/Urdu/Ar) | ✅ (English UI, 40 langs) | ✅ **English UI + Verified Urdu & Arabic** |
| **Offline Desktop & Mobile Installation** | ❌ | Partial (App) | ❌ | ❌ | ✅ (App) | ✅ (PWA + APK + ZIP) | ✅ **PWA + Native APK v1.2.0 + Offline ZIP** |
| **Zero External Tracking / Privacy Focus** | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ (No tracking) | ✅ **Zero Invasive Cookies or Tracking** |

---

## 4. NoorDeen Gap Analysis & Weaknesses Identified

1. **Absence of a Unified Islamic Glossary:**  
   Competitors like IslamiCity provide authoritative definitions for theological and Arabic terminology. NoorDeen currently assumes readers understand terms such as *Tawheed*, *Qadar*, *Taharah*, *Nisab*, and *Takbeerat*. A centralized glossary with phonetics and references is critical.
2. **Hadith Library Depth:**  
   NoorDeen's Hadith library currently has 45 entries in `ISLAMIC_DATA.hadiths` and 23 pre-rendered cards in `hadith.html`. Expanding to 100+ high-value narrations with Arabic, English, Urdu, verified collection numbers, and authenticity grades is required.
3. **Dua Taxonomy Coverage:**  
   Currently, 50 Duas exist across core categories. Competitors feature dedicated supplications for distress, illness, travel, morning/evening, and family life. Expanding to 100+ verified Duas across 17 distinct life situations is needed.
4. **Disjointed Knowledge Architecture:**  
   Currently, NoorDeen consists of 25 standalone HTML pages without a unified thematic hub that organizes articles, guides, and source texts into cohesive learning pathways.
5. **Beginner / New Muslim Learning Journey:**  
   Dawat-e-Islami and IslamOnline excel in guiding newcomers through sequential, structured lessons. NoorDeen needs an organized "Foundations & New Muslim Study Path" covering creed, purification, and daily prayer step-by-step.
6. **Cross-Referencing & Discovery:**  
   Articles, biographies, and guides rarely link to relevant Quranic Surahs or Hadiths already present in the portal, creating dead ends in user exploration.

---

## 5. Architectural Recommendations & Implementation Plan

### Tier 1: High Priority (To Implement Immediately)
1. **Content Architecture & Pillar Hub:** Establish a structured 20-pillar knowledge taxonomy connecting all existing pages and future modules.
2. **Comprehensive Islamic Glossary:** Build a 100+ entry foundational glossary (`glossary.html` / `ISLAMIC_DATA.glossary`) defining core Islamic terminology with transliteration, Arabic script, and Quranic citations.
3. **Hadith Collection Expansion:** Expand the curated Hadith repository to 100+ authenticated narrations across Sahih al-Bukhari, Sahih Muslim, Abu Dawud, and Tirmidhi with full Arabic, English, Urdu, narrator, collection number, and Fiqh commentary.
4. **Dua & Adhkar Expansion:** Expand the supplications library to 100+ verified Duas across 17 life categories with authentic repetition counts and source citations.
5. **New Muslim & Foundational Learning Paths:** Construct structured, multi-lesson beginner learning journeys with clear progress indicators.

### Tier 2: Medium Priority
1. **Interactive Knowledge Quizzes:** Add client-side educational quizzes to reinforce learning on Prophets, Pillars, and Seerah.
2. **Thematic Surah Index:** Enrich all 114 Surahs with themes, historical context, and key passage highlights.
3. **Enhanced Cross-Referencing:** Add bidirectional links between Sahaba biographies, Seerah events, and relevant Quranic verses.

### Tier 3: Excluded Features (Requiring External Infrastructure or Authority)
- **Live Fatwa Issuance:** Excluded. NoorDeen is an educational library, not a legal judiciary. Fiqh matters are presented with attributed classical positions.
- **Server-Side Audio Streaming Infrastructure:** Excluded. Uses static, efficient client-side audio player integrations with verified CDNs.
- **Proprietary Competitor Scraped Content:** Excluded. All educational content must be NoorDeen's original editorial synthesis backed by primary classical sources (Quran, Sahihain, Sunan, Ibn Hisham, Ibn Kathir).
