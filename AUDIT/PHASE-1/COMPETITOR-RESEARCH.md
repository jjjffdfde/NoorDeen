# PHASE 1 — STAGE B & E: COMPETITOR RESEARCH & BENCHMARKING REPORT

**Project:** Islamic Knowledge Portal  
**Audit Phase:** Phase 1 Only  
**Date:** October 24, 2026  
**Auditor Roles:** Principal Software Architect, Islamic Educational Content Strategist, Seerah & Islamic History Research Analyst, Product UX Analyst, Technical SEO Specialist  

---

## 1. Executive Research Overview

To build a world-class, authentic, and search-competitive Islamic educational platform, we conducted external technical and content audits of leading Islamic digital repositories and academic research portals. This research investigates the live user experiences, pedagogical frameworks, content structures, licensing terms, and technical features of primary reference platforms.

### Benchmarked Platforms:
1. **Quran.com** — Benchmark for Quran reading, navigation, audio synchronization, and Study Mode.
2. **QuranEnc.com** — Benchmark for multilingual Quranic translation catalogs, API services, and translation licensing.
3. **Sunnah.com** — Benchmark for canonical Hadith discovery, multi-tier numbering systems, and scholarly grading methodologies.
4. **Yaqeen Institute for Islamic Research** — Benchmark for contemporary Seerah and Sahaba biographical storytelling (*The Firsts*).
5. **IslamHouse.com** — Benchmark for massive multilingual educational libraries and multi-format resource taxonomies.
6. **MIT Libraries & Classical Historiography Guides** — Benchmark for organizing early Arabic historical sources (chronicles vs. biographical dictionaries).
7. **SeekersGuidance** — Benchmark for structured Islamic learning pathways (*The Steps Program*) and cross-Madhhab fiqh guidance.
8. **QuranWBW.com** — Benchmark for word-by-word morphological analysis, root tracking, and multi-script typography.
9. **IslamicFinder.org** — Benchmark for astronomical calculation conventions, prayer times tuning, and Islamic calendar tools.
10. **Google Search Central Helpful Content Guidance** — Technical and editorial benchmark for people-first content quality and E-E-A-T compliance.

---

## 2. Detailed Competitor Inspections

### 2.1. Quran.com — Quran Reading & Study Mode Benchmark
- **Websites Inspected:**
  - Main Platform: [quran.com](https://quran.com/)
  - Study Mode Feature Guide: [quran.com/en/product-updates/new-study-mode-on-quran-com](https://quran.com/en/product-updates/new-study-mode-on-quran-com)
  - About Us & Mission: [quran.com/about-us](https://quran.com/about-us)
- **Observed Features & Mechanics:**
  - **Study Mode Trigger:** Activated across desktop and mobile by clicking directly on any Ayah number while reading.
  - **Navigation:** Seamless back/forth navigation between adjacent ayahs without leaving the focused study view.
  - **Word-by-Word (WBW) Breakdown:** Clicking on individual Arabic words reveals phonetic pronunciation, root word, lemma, and direct literal translation.
  - **Multi-Tab Scholarly Exploration:**
    - *Tafsir Tab:* Multiple exegeses (Tafsir Ibn Kathir, Ma'arif al-Quran, Saadi, Jalalayn) selectable in various languages.
    - *Reflections Tab:* Community insights and verified reflections tied to specific verses.
    - *Hadith Integration Tab:* Connects selected ayahs directly with authenticated Prophetic narrations providing historical and practical context.
    - *Lessons & Answers Tab:* Contextual Q&A and linguistic nuances.
  - **Granular Social Sharing:** Each study tab features its own share button, generating deep links directly to that specific tab and verse.
  - **Audio Player:** Continuous recitation with reciter selection, variable playback speed, repeat modes, and word-by-word visual highlight tracking.
- **Critical Gaps in Our Current Project:**
  - Our reader (`public/quran.html`) is a basic linear verse list. Clicking an Ayah does not open an exegesis view.
  - No Tafsir, word-by-word morphology, or related-verse exploration exists in our codebase.
  - 104 Surahs depend on real-time external API fetching rather than being bundled offline.
- **What to Adopt/Adapt:**
  - Adopt the Study Mode paradigm in Phase 3 as an accessible modal overlay triggered by clicking an Ayah number.
  - Integrate authentic Tafsir (Ibn Kathir / Jalalayn) and cross-link verses to relevant Hadiths.
- **What NOT to Copy:**
  - Do not scrape or copy Quran.com proprietary codebase, user comments, or styling. Use our original 3D spatial design system and public-domain scholarly texts.

---

### 2.2. QuranEnc.com — Multilingual Translations Benchmark
- **Website Inspected:** [quranenc.com/en/home](https://quranenc.com/en/home)
- **Observed Features & Mechanics:**
  - **Coverage:** Catalog contains translations in over 80 world languages under the supervision of Al-Rabwah Call & Guidance Association.
  - **Developer API (`/api/v1/...`):** Provides endpoints for:
    - Translation listings by language ISO code.
    - Verse-by-verse translation payloads in JSON format.
    - Sura-level translation downloads.
  - **Terms & Reuse Policy:**
    - Free for digital reproduction and non-commercial educational distribution.
    - *Strict Rules:* Zero alteration of text; explicit attribution to QuranEnc.com; translation version number must be preserved; metadata transcripts must remain intact.
- **Critical Gaps in Our Current Project:**
  - Our 40-language registry (`data/quran-translations/registry.json`) has only 11 verified cloud editions mapped.
  - 29 languages are labeled "under scholarly review" with fallback notices.
  - Only Urdu and English are bundled in `public/js/data.js`.
- **What to Adopt/Adapt:**
  - Utilize QuranEnc's authorized open dataset and developer guidelines in Phase 3 to acquire verified translation texts for major underserved languages (e.g. Hausa, Swahili, Somali, Pashto, Bengali, Hindi, Russian).
  - Explicitly attribute QuranEnc and preserve translation edition versioning in our metadata.
- **What NOT to Copy:**
  - Do not bundle raw unverified translation drafts. Every translation must have confirmed scholarly provenance.

---

### 2.3. Sunnah.com — Hadith Discovery Benchmark
- **Website Inspected:** [sunnah.com](https://sunnah.com/), [sunnah.com/about](https://sunnah.com/about)
- **Observed Features & Mechanics:**
  - **Collection Breadth:** Complete *Kutub al-Sittah* (Bukhari, Muslim, Abu Dawud, Tirmidhi, Nasa'i, Ibn Majah) plus Muwatta Malik, Musnad Ahmad, Darimi, Mishkat al-Masabih, and 40 Hadith collections.
  - **Numbering Systems:** Distinguishes between historical in-book reference numbers, English translation numbers, and standard unified Arabic numbering (e.g., **Muhammad Fuad Abdul Baaqi** convention).
  - **Grading Methodology:**
    - *Sahihain:* Universal consensus on authenticity; no secondary individual grade label needed.
    - *Sunan & Other Collections:* Explicit scholarly gradings evaluated by recognized verification authorities: **Shaykh Muhammad Nasiruddin al-Albani**, **Darussalam** (Hafiz Zubair Ali Za'i), and **Shaykh Shu'ayb al-Arna'ut**.
  - **Search Capabilities:** Phrase search, wildcards, fuzzy matching, and Boolean query operators across Arabic and English text.
- **Critical Gaps in Our Current Project:**
  - Our Hadith library (`public/hadith.html`) claims to cover canonical collections, but only contains **8 Hadith records** in `ISLAMIC_DATA.hadiths`.
  - Selecting "Sunan Ibn Majah" in the UI dropdown returns an empty list.
  - No text-based search bar exists on `hadith.html`.
- **What to Adopt/Adapt:**
  - Adopt Fuad Abdul Baaqi numbering standard and Darussalam/Al-Albani grading citations.
  - Expand our Hadith dataset in Phase 7 to a foundational verified corpus of 200+ traditions covering core juristic and spiritual topics.
  - Implement full-text and narrator search.
- **What NOT to Copy:**
  - Do not scrape or copy proprietary modern English translations from Sunnah.com without verified licensing. Use public-domain translations and original scholarly summaries.

---

### 2.4. Yaqeen Institute — Seerah & Sahaba Storytelling Benchmark
- **Websites Inspected:**
  - Main Platform: [yaqeeninstitute.org](https://yaqeeninstitute.org/)
  - The Firsts Series: [yaqeeninstitute.org/series/the-firsts](https://yaqeeninstitute.org/series/the-firsts)
- **Observed Pedagogical & Narrative Structure:**
  - **Narrative Arc in *The Firsts*:**
    1. *Thematic Hook:* Opens with a universal spiritual or psychological question connecting early Islam to modern struggles.
    2. *Origins & Pre-Islamic Context:* Explores the companion's genealogy, social status, and tribal vulnerability.
    3. *The Turning Point:* Explores how they embraced Islam and the personal sacrifices incurred.
    4. *Defining Moments in Prophetic Era:* Focuses on their proximity to the Prophet ﷺ, virtues, and battlefield heroism.
    5. *Post-Prophetic Legacy:* Documents their leadership during the Caliphate and circumstances of their death.
    6. *Contemporary Takeaway:* Extracts actionable moral lessons for 21st-century Muslims.
- **Critical Gaps in Our Current Project:**
  - Our Sahaba page (`public/sahaba.html`) contains 14 solid profiles, but they are presented primarily as static historical summaries rather than dynamic educational narratives.
  - Missing 6 of the Ten Promised Paradise (*Ashara Mubashara*), including Sa'd ibn Abi Waqqas, Talha ibn Ubaydillah, Zubayr ibn al-Awwam, Sa'id ibn Zayd, and Abu Ubayda ibn al-Jarrah.
- **What to Adopt/Adapt:**
  - Adopt Yaqeen's pedagogical storytelling structure in Phase 4 & Phase 5: connect historical accounts to actionable spiritual lessons and ethical character traits.
  - Expand Sahaba coverage to 30+ comprehensive profiles including all Ten Promised Paradise.
- **What NOT to Copy:**
  - Do not copy Dr. Omar Suleiman's video scripts, transcripts, or editorial prose. Author original educational biographies based on classical Arabic biographical dictionaries.

---

### 2.5. IslamHouse.com — Multilingual Educational Library Benchmark
- **Website Inspected:** [islamhouse.com/en/main](https://islamhouse.com/en/main)
- **Observed Taxonomy & Distribution Architecture:**
  - **Multilingual Reach:** Provides authentic Islamic resources in over 100 languages.
  - **Categorization Taxonomy:** Organizes materials by content format (Books, Audios, Videos, Articles, Fatawa, Posters) and subject discipline (Quran, Sunnah, Fiqh, Aqidah, Dawah, Biographies).
  - **Clear Licensing & Metadata:** Displays author name, translator name, reviewing committee, and digital download links (PDF, EPUB, MP3).
- **Critical Gaps in Our Current Project:**
  - Our website features separate guides (Salah, Wudu, Janazah, Eid), but lacks a unified downloadable educational resource center.
  - Non-English content is confined to interface UI labels; article bodies are not yet translated.
- **What to Adopt/Adapt:**
  - Adapt IslamHouse's clean categorical taxonomy for our learning resources in Phase 2 & Phase 7.
  - Create downloadable PDF cheatsheets and visual educational infographics for practical worship guides.

---

### 2.6. MIT Libraries & Academic Arabic Historiography Guides
- **Research Reference:** Academic research guides on early Arabic historical sources (e.g. MIT, Princeton, Harvard Middle Eastern Studies guides).
- **Observed Methodological Classification:**
  - **Genre Categorization:**
    1. *Chronicles (Tawārīkh / Akhbār):* Annalistic year-by-year histories (e.g., Al-Tabari’s *Taʾrīkh al-rusul wa-al-mulūk*, Ibn al-Athir’s *Al-Kāmil fi al-Tārīkh*). Multi-chain isnad presentation allows critical comparison of accounts.
    2. *Biographical Dictionaries (Ṭabaqāt / Tarājim):* Generational and prosopographical databases (e.g., Ibn Sa‘d’s *Kitāb al-Ṭabaqāt al-kabīr*, Ibn Hajar’s *Al-Isābah*, Al-Dhahabi’s *Siyar A‘lām al-Nubalā’*).
    3. *Prophetic Biography (Sīrah & Maghāzī):* Specialized early compilations (Ibn Hisham’s edition of Ibn Ishaq).
  - **Academic Rigor:** Distinguishes between the historical authenticity of a compiled text as a legitimate manuscript and the individual reliability (*isnad* / text criticism) of specific narrative reports within that text.
- **Application to Our Project:**
  - In Phase 4, Phase 5, and Phase 6, our historical and Seerah articles must clearly cite classical works by genre (Chronicle vs. Tabaqat vs. Hadith collection) and avoid presenting contested early reports as unanimous theological facts.

---

### 2.7. Additional Competitors Research

#### A. SeekersGuidance (The Global Islamic Seminary)
- **URL:** [seekersguidance.org](https://seekersguidance.org/)
- **Key Features:** Structured educational curricula (*The Steps Program*), comprehensive Q&A fatwa database, traditional scholarship across the 4 Sunni Madhhabs (Hanafi, Shafi'i, Maliki, Hanbali).
- **Takeaway for Our Project:** Emphasize structured, progressive learning pathways rather than disjointed articles. Present juristic differences with academic respect and balance.

#### B. QuranWBW.com (Quran Word by Word)
- **URL:** [quranwbw.com](https://quranwbw.com/)
- **Key Features:** Direct word-by-word literal translation beneath Arabic text, root word exploration, morphological grammatical tags (verbs, nouns, prepositions), multi-script support (Uthmani vs. Indo-Pak).
- **Takeaway for Our Project:** Non-Arabic speakers deeply benefit from word-level engagement. Phase 3 & Phase 8 should introduce word-level tooltips in the Quran reader.

#### C. IslamicFinder.org
- **URL:** [islamicfinder.org](https://islamicfinder.org/)
- **Key Features:** Localized solar prayer times with configurable calculation conventions (MWL, ISNA, Umm al-Qura, University of Islamic Sciences Karachi, Egyptian General Authority).
- **Takeaway for Our Project:** Our `public/prayer-times.html` currently uses fixed 18°/17° angles. In Phase 8, we should add a calculation convention dropdown so users worldwide obtain prayer times matching their local mosques.

---

### 2.8. Technical & Content Strategy Benchmark: Google Helpful Content Guidelines
- **Reference:** [developers.google.com/search/docs/fundamentals/creating-helpful-content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)
- **Core Principles Applied to Our Project:**
  1. **People-First vs. Search Engine-First:** Our articles must solve genuine learning needs (e.g., how to perform Janazah prayer under grief, how to calculate Zakat accurately) rather than stuffing keywords to game search engines.
  2. **Demonstrating Authentic E-E-A-T:**
     - *Experience & Expertise:* Citing recognized classical scholars and primary sources.
     - *Authoritativeness:* Transparent editorial methodology and bibliography on `about.html` and `sources.html`.
     - *Trustworthiness:* Accurate, zero-distortion Quranic text with `translate="no"`, verified Hadith gradings, and zero invasive Android app permissions.
  3. **Comprehensiveness over Arbitrary Word Counts:** Google does not reward thin summaries, nor does it mandate arbitrary word counts. Value is measured by topic completeness, clarity, accuracy, and utility.

---

## 3. Comprehensive Competitor Benchmark Matrix

| Feature / Dimension | Islamic Knowledge Portal (Current) | Quran.com | Sunnah.com | Yaqeen Institute | IslamHouse | SeekersGuidance | QuranWBW |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **Complete 114 Surahs Text** | PARTIALLY PRESENT (10 local, 104 API) | VERIFIED PRESENT | NOT APPLICABLE | NOT APPLICABLE | VERIFIED PRESENT | NOT APPLICABLE | VERIFIED PRESENT |
| **Word-by-Word Morphology** | NOT OBSERVED | VERIFIED PRESENT | NOT APPLICABLE | NOT APPLICABLE | NOT APPLICABLE | NOT APPLICABLE | VERIFIED PRESENT |
| **Integrated Tafsir Exegesis**| NOT OBSERVED | VERIFIED PRESENT | NOT APPLICABLE | NOT APPLICABLE | PARTIALLY PRESENT | PARTIALLY PRESENT | VERIFIED PRESENT |
| **Quran Audio Recitations** | VERIFIED PRESENT (5 reciters) | VERIFIED PRESENT | NOT APPLICABLE | NOT APPLICABLE | VERIFIED PRESENT | NOT APPLICABLE | VERIFIED PRESENT |
| **Multilingual Translations** | VERIFIED PRESENT (40 in registry) | VERIFIED PRESENT | NOT APPLICABLE | NOT APPLICABLE | VERIFIED PRESENT | NOT APPLICABLE | VERIFIED PRESENT |
| **Isolated Quran Trans Selector**| VERIFIED PRESENT | VERIFIED PRESENT | NOT APPLICABLE | NOT APPLICABLE | NOT OBSERVED | NOT APPLICABLE | VERIFIED PRESENT |
| **Kutub al-Sittah Hadiths** | PARTIALLY PRESENT (8 Hadiths total) | NOT APPLICABLE | VERIFIED PRESENT | NOT APPLICABLE | PARTIALLY PRESENT | PARTIALLY PRESENT | NOT APPLICABLE |
| **Hadith Search Engine** | NOT OBSERVED (Filters only) | NOT APPLICABLE | VERIFIED PRESENT | NOT APPLICABLE | PARTIALLY PRESENT | VERIFIED PRESENT | NOT APPLICABLE |
| **Scholarly Hadith Grading** | VERIFIED PRESENT (All 8 graded) | NOT APPLICABLE | VERIFIED PRESENT | NOT APPLICABLE | PARTIALLY PRESENT | VERIFIED PRESENT | NOT APPLICABLE |
| **Chronological Seerah Library**| VERIFIED PRESENT (16 chapters) | NOT APPLICABLE | NOT APPLICABLE | VERIFIED PRESENT | VERIFIED PRESENT | VERIFIED PRESENT | NOT APPLICABLE |
| **Sahaba Biographical Corpus**| VERIFIED PRESENT (14 profiles) | NOT APPLICABLE | NOT APPLICABLE | VERIFIED PRESENT | PARTIALLY PRESENT | PARTIALLY PRESENT | NOT APPLICABLE |
| **Structured Islamic History** | VERIFIED PRESENT (12 eras) | NOT APPLICABLE | NOT APPLICABLE | PARTIALLY PRESENT | PARTIALLY PRESENT | PARTIALLY PRESENT | NOT APPLICABLE |
| **Worship Guides (Salah/Wudu)**| VERIFIED PRESENT (Deep guides) | NOT APPLICABLE | NOT APPLICABLE | PARTIALLY PRESENT | VERIFIED PRESENT | VERIFIED PRESENT | NOT APPLICABLE |
| **Dedicated Janazah & Eid Guides**| VERIFIED PRESENT (Step-by-step) | NOT APPLICABLE | NOT APPLICABLE | PARTIALLY PRESENT | PARTIALLY PRESENT | VERIFIED PRESENT | NOT APPLICABLE |
| **Astronomical Prayer Tools** | VERIFIED PRESENT (tools.js) | NOT APPLICABLE | NOT APPLICABLE | NOT APPLICABLE | NOT APPLICABLE | NOT APPLICABLE | NOT APPLICABLE |
| **Interactive Zakat Calculator**| VERIFIED PRESENT (tools.js) | NOT APPLICABLE | NOT APPLICABLE | NOT APPLICABLE | NOT APPLICABLE | NOT APPLICABLE | NOT APPLICABLE |
| **Digital Tasbih Counter** | VERIFIED PRESENT (Synthesized) | NOT APPLICABLE | NOT APPLICABLE | NOT APPLICABLE | NOT APPLICABLE | NOT APPLICABLE | NOT APPLICABLE |
| **Offline Capable PWA** | VERIFIED PRESENT (Service worker) | PARTIALLY PRESENT | NOT OBSERVED | NOT OBSERVED | NOT OBSERVED | NOT OBSERVED | NOT OBSERVED |
| **Standalone Android App** | PARTIALLY PRESENT (Uncompiled ZIP) | VERIFIED PRESENT | VERIFIED PRESENT | VERIFIED PRESENT | VERIFIED PRESENT | NOT APPLICABLE | VERIFIED PRESENT |
| **Zero External NPM Bloat** | VERIFIED PRESENT (Pure vanilla) | NOT OBSERVED (Next.js) | NOT OBSERVED | NOT OBSERVED | NOT APPLICABLE | NOT OBSERVED | NOT OBSERVED |
