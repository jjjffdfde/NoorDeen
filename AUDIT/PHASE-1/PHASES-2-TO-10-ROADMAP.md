# MASTER ROADMAP: PHASES 2 THROUGH 10
## Architectural, Editorial & Technical Blueprint for the Complete Islamic Knowledge Portal

**Document ID:** AUD-P1-011  
**Project:** Islamic Knowledge Portal  
**Audit Baseline:** Phase 1 Only (`4d25143`)  
**Publication Date:** October 24, 2026  
**Auditor Roles:** Principal Software Architect, Islamic Educational Content Strategist, Senior QA Lead  

---

## 1. Master Phasing Architecture & Sequence

```
+---------------------------------------------------------------------------------------------------+
| PHASE 1: Complete Project Discovery, Competitor Research & Gap Roadmap [COMPLETE - THIS PHASE]   |
+---------------------------------------------------------------------------------------------------+
                                                  |
                                                  v
+---------------------------------------------------------------------------------------------------+
| PHASE 2: Information Architecture, Editorial Standards, Review Workflow & Taxonomy Foundation    |
+---------------------------------------------------------------------------------------------------+
                                                  |
                                                  v
+---------------------------------------------------------------------------------------------------+
| PHASE 3: Complete Quran Scripture Offline, Arabic Integrity, Translations & Study Mode Exegesis  |
+---------------------------------------------------------------------------------------------------+
                                                  |
                                                  v
+---------------------------------------------------------------------------------------------------+
| PHASE 4: Comprehensive 25-Chapter Chronological Seerah Library & Classical Provenance Mapping     |
+---------------------------------------------------------------------------------------------------+
                                                  |
                                                  v
+---------------------------------------------------------------------------------------------------+
| PHASE 5: Complete Quranic Prophets (All 25) & Sahaba Biographical Corpus (30+ Profiles)          |
+---------------------------------------------------------------------------------------------------+
                                                  |
                                                  v
+---------------------------------------------------------------------------------------------------+
| PHASE 6: Deep Islamic History Library (12 Eras Deepened, Regional Civilizations & Timelines)      |
+---------------------------------------------------------------------------------------------------+
                                                  |
                                                  v
+---------------------------------------------------------------------------------------------------+
| PHASE 7: Hadith Corpus Expansion (Kutub al-Sittah), Duas (Hisnul Muslim) & Fiqh Encyclopedias     |
+---------------------------------------------------------------------------------------------------+
                                                  |
                                                  v
+---------------------------------------------------------------------------------------------------+
| PHASE 8: Spatial UI/UX Design System, Typography, Word-by-Word Learning & Accessibility Polish    |
+---------------------------------------------------------------------------------------------------+
                                                  |
                                                  v
+---------------------------------------------------------------------------------------------------+
| PHASE 9: Technical SEO, Multilingual Prerendering, PWA Hardening & Native Android SDK Release     |
+---------------------------------------------------------------------------------------------------+
                                                  |
                                                  v
+---------------------------------------------------------------------------------------------------+
| PHASE 10: Independent Scholarly Content Audit, Automated QA Regression & Production Sign-Off      |
+---------------------------------------------------------------------------------------------------+
```

---

## 2. Detailed Phase Specifications (Phases 2 to 10)

### PHASE 2 — Information Architecture, Editorial Standards, Source-Provenance Rules & Review Workflow
- **Strategic Purpose:** Establish rigorous, inviolable academic and religious editorial standards, taxonomy hierarchies, and source-provenance classification before expanding content datasets.
- **Detailed Scope:**
  1. Author the **Master Editorial Style Guide** defining rules for Arabic honorifics, transliteration conventions (ALA-LC standard), and gender-inclusive devotional clarity.
  2. Define **Source-Provenance Rules**: 4-tier evidence classification (Tier 1: Muttafaqun 'Alayh; Tier 2: Sahih/Hasan Sunan; Tier 3: Classical Consensus Historical; Tier 4: Weak/Contested Reports requiring explicit labeling).
  3. Formalize the **5-Stage Verification Pipeline** into an enforceable workflow with peer review logs.
  4. Redesign global site information architecture: eliminate content islands, standardize breadcrumb taxonomies, and establish canonical cross-linking rules between scripture, history, and worship.
- **Dependencies:** Findings from Phase 1 (`COMPETITOR-RESEARCH.md`, `SOURCES-AND-LICENSING.csv`).
- **Deliverables:**
  - `AUDIT/EDITORIAL-STANDARDS.md`
  - `AUDIT/SOURCE-PROVENANCE-GUIDELINES.md`
  - `AUDIT/INFORMATION-ARCHITECTURE-MAP.md`
- **Risks & Mitigation:**
  - *Risk:* Editorial rules might be overly academic, hindering readability for beginners.
  - *Mitigation:* Require a dual-layer presentation: clear pedagogical summaries paired with expandable scholarly citations.
- **Acceptance Criteria:**
  - All classification rules documented and signed off.
  - Zero modifications to website code or production content during Phase 2.

---

### PHASE 3 — Complete Quran Data, Arabic Integrity, Translation Coverage & Study Mode Exegesis
- **Strategic Purpose:** Eliminate external runtime API dependencies by bundling all 114 Surahs offline, preserve 100% immutable Hafs Arabic text, expand verified translations, and implement a focused Study Mode exegesis tool.
- **Detailed Scope:**
  1. Resolve **Issue ISS-001**: Bundle all 114 Surahs (6,236 verses) locally using verified Tanzil / KFGQPC Uthmani text in an optimized offline dataset.
  2. Implement **Quran Study Mode** (benchmark: Quran.com): Clicking any Ayah number opens a modal overlay featuring:
     - *Tafsir Tab:* Verified exegesis from *Tafsir Ibn Kathir* and *Tafsir al-Jalalayn*.
     - *Word-by-Word Tab:* Root word, lemma, and literal translation breakdown.
     - *Related Hadith Tab:* Canonical traditions directly linked to the verse context.
     - *Direct Deep Sharing:* One-click copying and sharing with verse citation.
  3. Expand **40-Language Registry**: Integrate offline verified translation packs for top 10 languages (English, Urdu, Arabic, French, Indonesian, Turkish, Bengali, Hindi, Russian, Persian) via QuranEnc open datasets.
  4. Preserve strict Quran translation isolation in `quran.js`: changing translation language adjusts only the translation layer and persists to `islamic_portal_quran_trans_lang`.
- **Dependencies:** Phase 2 editorial standards; Tanzil Uthmani dataset; QuranEnc translation packs.
- **Deliverables:**
  - `public/data/quran-complete-uthmani.json` (Optimized local dataset)
  - Updated `public/js/quran.js` (Study Mode modal & offline fallback removal)
  - Updated `public/quran.html` (Study Mode DOM container & responsive controls)
- **Risks & Mitigation:**
  - *Risk:* 6,236 verses in multiple languages could create a massive payload.
  - *Mitigation:* Chunk datasets by Surah or Juz; load asynchronously into IndexedDB; keep initial bundle lightweight.
- **Acceptance Criteria:**
  - Complete Quran (114 Surahs, 6,236 verses) renders instantly with network disabled.
  - Clicking any Ayah opens Study Mode with authentic Tafsir and word breakdown.
  - Automated tests verify 6,236 verses tally and Arabic `translate="no"` protection.

---

### PHASE 4 — Comprehensive 25-Chapter Chronological Seerah Library
- **Strategic Purpose:** Transform `public/seerah.html` from a condensed summary into an authoritative, publication-grade 25-chapter educational library covering every documented phase of Prophet Muhammad’s ﷺ life.
- **Detailed Scope:**
  1. Resolve **Issue ISS-010**: Expand narrative from 16 to 25 chronological chapters.
  2. Decompress major military and diplomatic events:
     - Dedicated Chapter: *The Strategic Breakthrough at Badr (2 AH)*.
     - Dedicated Chapter: *The Crucible of Uhud & Lessons of Obedience (3 AH)*.
     - Dedicated Chapter: *The Battle of the Trench (Khandaq) & Siege Warfare (5 AH)*.
     - Dedicated Chapter: *The Treaty of Hudaybiyyah & Diplomatic Mastery (6 AH)*.
     - Dedicated Chapter: *Letters to World Emperors & Universal Proclamation (7 AH)*.
     - Dedicated Chapter: *The Conquest of Mecca (Fath Makkah) & Universal Pardon (8 AH)*.
     - Dedicated Chapter: *The Battles of Hunayn, Ta'if, and Tabuk (8–9 AH)*.
     - Dedicated Chapter: *The Year of Delegations (Sanat al-Wufood) & Farewell Pilgrimage (10 AH)*.
  3. Embed primary classical citations in every chapter header (*Ibn Hisham*, *Ibn Sa'd*, *Sahih al-Bukhari*, *Sahih Muslim*).
  4. Cross-reference revealed Quranic Surahs (e.g., Surah Al-Anfal with Badr, Ali 'Imran with Uhud, Al-Ahzab with Trench, Al-Fath with Hudaybiyyah).
- **Dependencies:** Classical Seerah texts (SRC-012, SRC-013).
- **Deliverables:**
  - Fully rewritten and expanded `public/seerah.html` (25 chapters, 12,000+ words of structured prose).
  - Chronological Table of Contents with reading time estimates and sticky navigation.
- **Risks & Mitigation:**
  - *Risk:* Very long single HTML file could slow mobile rendering.
  - *Mitigation:* Implement collapsible chapter accordions and lazy DOM rendering for offscreen chapters.
- **Acceptance Criteria:**
  - All 25 chapters contain verified classical citations and verification badges.
  - Zero uncited or disputed legendary narrations without clear historical qualification.

---

### PHASE 5 — Complete Quranic Prophets (All 25) & Sahaba Biographical Corpus (30+ Profiles)
- **Strategic Purpose:** Complete the missing Quranic Prophets and expand the Sahaba library to include all Ten Promised Paradise (*Ashara Mubashara*) and prominent scholars/Ansar.
- **Detailed Scope:**
  1. Resolve **Issue ISS-006**: Expand `public/prophets.html` from 10 to all 25 Quranic Prophets:
     - Author comprehensive accounts for the 15 missing Prophets: Idris, Hud, Salih, Lut, Isma'il, Ishaq, Ya'qub, Shu'ayb, Harun, Dhul-Kifl, Ilyas, Al-Yasa', Zakariyya, Yahya, and righteous mentors (Khidr, Luqman).
     - Include exact Quranic Surah and Ayah references for every narrative.
  2. Resolve **Issue ISS-007**: Expand `public/sahaba.html` from 14 to 30+ comprehensive biographies:
     - Integrate the remaining 6 of the Ten Promised Paradise: Sa'd ibn Abi Waqqas, Talha ibn Ubaydillah, Az-Zubayr ibn al-Awwam, Abdur-Rahman ibn Awf, Abu Ubayda ibn al-Jarrah, and Sa'id ibn Zayd.
     - Integrate prominent Ansar chieftains: Sa'd ibn Mu'adh, Abu Ayyub al-Ansari, and Ubayy ibn Ka'b.
     - Integrate master Quranic and Hadith scholars: Abdullah ibn Mas'ud, Abdullah ibn Abbas, Abdullah ibn Umar, Mu'adh ibn Jabal, Zayd ibn Thabit, and Abu Hurayrah.
  3. Apply Yaqeen Institute’s narrative framework: Origins -> Embracing Islam -> Defining Prophetic Moments -> Post-Prophetic Legacy -> Modern Ethical Takeaways.
- **Dependencies:** *Qisas al-Anbiya* (Ibn Kathir, SRC-017); *Al-Isabah* (Ibn Hajar, SRC-014); *Siyar A'lam al-Nubala* (Al-Dhahabi, SRC-015).
- **Deliverables:**
  - Updated `public/prophets.html` (All 25 Prophets cataloged).
  - Updated `public/sahaba.html` (30+ Biographies organized into 5 thematic categories).
- **Risks & Mitigation:**
  - *Risk:* Inadvertent inclusion of unverified Isra'iliyyat (Judeo-Christian folkloric tales) in prophetic stories.
  - *Mitigation:* Strictly adhere to Ibn Kathir’s authenticated Quranic exegesis; exclude uncorroborated folkloric additions.
- **Acceptance Criteria:**
  - Exactly 25 Quranic Prophets present with direct Quranic citations.
  - All Ten Promised Paradise present with verified biographies from *Al-Isabah*.

---

### PHASE 6 — Deep Islamic History Library, Dynastic Timelines & Intellectual Milestones
- **Strategic Purpose:** Elevate `public/history.html` from high-level summaries into a deep, civilizational history library detailing scientific, institutional, legal, and regional developments across 1,400+ years.
- **Detailed Scope:**
  1. Resolve **Issue ISS-012**: Deepen all 12 existing historical eras with structured subsections:
     - Political & Territorial Milestones.
     - Codification of the Four Sunni Legal Schools (Hanafi, Maliki, Shafi'i, Hanbali).
     - Compilation of the Canonical Hadith Corpus (Imams Bukhari, Muslim, and the Sunan authors).
     - Scientific, Mathematical & Medical Achievements (House of Wisdom, Al-Khwarizmi, Ibn al-Haytham, Ibn Sina).
  2. Integrate missing regional civilizations:
     - West African Islamic Civilizations (Mali Empire, Mansa Musa, Timbuktu scholars).
     - Central Asian Islamic Renaissance (Bukhara, Samarkand, Transoxiana).
     - Southeast Asian Islamic Expansion (Sumatra, Malacca, Java).
  3. Build an interactive, responsive chronological timeline slider and historical map gallery.
- **Dependencies:** Historical works (Al-Tabari, Ibn al-Athir, Ibn Khaldun, SRC-016).
- **Deliverables:**
  - Updated `public/history.html` (Deepened 12-era library + regional civilizational chapters).
  - Responsive timeline slider component in `public/js/tools.js`.
- **Risks & Mitigation:**
  - *Risk:* Complex political events (e.g. Fitnah al-Kubra) can elicit sectarian bias.
  - *Mitigation:* Strictly maintain the balanced, orthodox stance of Ahl al-Sunnah wal-Jama'ah as articulated by Imam al-Nawawi and Ibn Taymiyyah (refraining from partisan polemics and honoring all Companions).
- **Acceptance Criteria:**
  - All 12 eras contain deep institutional and intellectual history sections.
  - Interactive timeline functions seamlessly on mobile and desktop.

---

### PHASE 7 — Hadith Corpus Expansion, Duas & Authentic Worship Encyclopedias
- **Strategic Purpose:** Resolve severe content gaps in Hadith and Duas datasets, expand worship guides, and ensure absolute doctrinal authenticity across all practical learning modules.
- **Detailed Scope:**
  1. Resolve **Issues ISS-003 & ISS-004**: Expand `public/js/data.js` Hadith dataset from 8 to **200+ foundational traditions**:
     - Cover all six canonical books (*Kutub al-Sittah*), including authentic traditions for *Sunan Ibn Majah*.
     - Standardize numbering to **Muhammad Fuad Abdul Baaqi**.
     - Provide Darussalam / Shaykh al-Albani authentic gradings for every Sunan tradition.
     - Author comprehensive *Fiqh al-Hadith* commentary for every tradition.
     - Add full-text Hadith search bar on `public/hadith.html`.
  2. Resolve **Issue ISS-009**: Expand `public/js/data.js` Duas dataset from 17 to **100+ authentic supplications** from *Hisnul Muslim*:
     - Morning and evening protection adhkar (*Adhkar al-Sabah wal-Masa*).
     - Categorized supplications: Home, Travel, Sickness, Anxiety, Financial Hardship, Food, Sleep.
  3. Resolve **Issue ISS-008**: Author comprehensive dedicated guides for **Ghusl (Major Ritual Purity)** and **Tayammum (Dry Ablution)** in `public/wudu-guide.html`.
  4. Resolve **Issue ISS-015**: Expand `public/zakat-calculator.html` to include dedicated calculation inputs for 401(k) / retirement funds, tradable commercial stock, and agricultural produce per AAOIFI standards.
  5. Expand `public/salah-guide.html` with voluntary prayers: Tahajjud, Duha, Salat al-Tawbah, and Salat al-Istikharah.
- **Dependencies:** Canonical Hadith texts (SRC-006 to SRC-011); *Hisnul Muslim* (SRC-019); AAOIFI Shariah standards.
- **Deliverables:**
  - Updated `public/js/data.js` (200+ Hadiths, 100+ Duas).
  - Updated `public/hadith.html` (Full-text search, 6-collection verification).
  - Updated `public/duas.html` (Categorized Hisnul Muslim browser).
  - Updated `public/wudu-guide.html`, `public/salah-guide.html`, `public/zakat-calculator.html`.
- **Risks & Mitigation:**
  - *Risk:* Overstating authenticity or confusing da'if (weak) hadiths with sahih.
  - *Mitigation:* Enforce strict verification rules; flag any non-sahih tradition with its exact scholarly classification.
- **Acceptance Criteria:**
  - All 6 canonical Hadith collections return multiple verified traditions with exact grades.
  - Zero empty dropdown filters on `hadith.html`.
  - Comprehensive Ghusl and Tayammum guides live and linked.

---

### PHASE 8 — UI/UX Design System, Typography, Word-by-Word Learning & Accessibility
- **Strategic Purpose:** Perfect the visual and interactive user experience across all devices, enhance typography, implement word-by-word learning aids, and achieve strict WCAG 2.1 AA accessibility compliance.
- **Detailed Scope:**
  1. Resolve **Issue ISS-013**: Add calculation convention selector to `public/prayer-times.html` (MWL, ISNA, Umm al-Qura, Karachi, Egyptian Authority).
  2. Implement **Word-by-Word Quranic Hover/Click Cards**: Interactive root word, transliteration, and grammatical tags (benchmark: QuranWBW.com).
  3. Resolve **Issue ISS-016**: Implement audio reciter synchronization (karaoke highlight tracking).
  4. Resolve **Issue ISS-017**: Generate downloadable, high-resolution vector PDF visual cheatsheets for Salah and Janazah prayers.
  5. Refine Typography: Optimize Urdu Nastaliq font rendering and Indo-Pak script toggles.
  6. Accessibility Hardening: Screen reader `aria-live` announcements for dynamic updates (Tasbih, audio player, prayer times recalculation); full keyboard navigation audit (`Tab`, `Escape`, `Enter`).
- **Dependencies:** Web Audio API, Quranic Arabic Corpus morphology data.
- **Deliverables:**
  - Updated `public/css/main.css` (Accessible typography and print styles).
  - Updated `public/js/tools.js` (Configurable astronomical calculation methods).
  - Downloadable PDF assets in `public/downloads/cheatsheets/`.
- **Risks & Mitigation:**
  - *Risk:* Heavy web fonts can degrade mobile page performance.
  - *Mitigation:* Implement font-display: swap and subset Arabic/Urdu fonts.
- **Acceptance Criteria:**
  - 100% WCAG 2.1 AA compliance verified via automated axe-core / Lighthouse audit.
  - Prayer times calculation convention selector correctly shifts Fajr/Isha times per standard formulas.

---

### PHASE 9 — Technical SEO, Multilingual Prerendering, PWA Hardening & Native Android SDK Release
- **Strategic Purpose:** Transform the platform into an internationally crawlable, lightning-fast PWA with an authentic, compiled, signed Android APK distribution pipeline and complete AdSense readiness.
- **Detailed Scope:**
  1. Resolve **Issue ISS-002**: Replace mock PKZIP script with authentic Android SDK Gradle release build pipeline:
     - Compile Capacitor Android project: `./gradlew assembleRelease`.
     - Sign release APK with valid keystore using `apksigner`.
     - Update `public/downloads/islamic-portal-release.apk` and `CHECKSUMS.sha256`.
  2. Resolve **Issue ISS-014**: Implement static multilingual prerendering:
     - Generate server-rendered or static prerendered HTML pages for core guides in Urdu (`/ur/`) and Arabic (`/ar/`).
     - Inject bidirectional `<link rel="alternate" hreflang="..." href="...">` tags across all language variants.
  3. Structured Data Expansion: Inject `HowTo` schema into `salah-guide.html` and `wudu-guide.html`; inject `Article` schema into all historical pages.
  4. Resolve **Issue ISS-018**: Connect `public/contact.html` feedback form to a secure backend endpoint in `server.js` with rate limiting and input sanitization.
  5. Resolve **Issue ISS-019**: Finalize Google AdSense readiness: verify zero CLS slot dimensions in `public/js/config.js` and validate against Google AdSense Publisher Policies.
- **Dependencies:** Android SDK (API 34), Gradle, JDK 17.
- **Deliverables:**
  - Genuine, signed Android APK in `public/downloads/islamic-portal-release.apk`.
  - Prerendered localized HTML directories (`public/ur/`, `public/ar/`).
  - Updated `server.js` (Contact form submission endpoint with rate limiting).
  - Updated `public/sitemap.xml` with localized hreflang alternates.
- **Risks & Mitigation:**
  - *Risk:* Android SDK may not be installed in all CI/CD environments.
  - *Mitigation:* Document exact SDK setup instructions and provide pre-built signed release artifacts with verified checksums.
- **Acceptance Criteria:**
  - APK passes Android `aapt2 dump badging` and installs cleanly on physical Android devices.
  - Google Rich Results validator reports 0 errors across all schema types.
  - Clean multilingual routes return 200 OK with valid `hreflang` tags.

---

### PHASE 10 — Independent Scholarly Content Audit, Automated QA Regression & Production Sign-Off
- **Strategic Purpose:** Conduct exhaustive, independent dual-track verification (religious content integrity + automated QA regression testing) to certify complete production readiness.
- **Detailed Scope:**
  1. **Independent Scholarly Review:**
     - Meticulous verse-by-verse verification of all 6,236 Quranic verses against the King Fahd Complex standard.
     - Verification of all 200+ Hadith gradings against primary editions.
     - Content audit of all worship rulings to confirm accurate representation of Sunni jurisprudence.
  2. **End-to-End Automated QA Regression:**
     - Expand `test/run-tests.js` to 400+ automated assertions covering all new modules, routes, datasets, and schemas.
     - Execute HTTP route crawler testing all clean routes, API endpoints, and static assets.
     - Offline service worker cache verification.
  3. **Release Governance & Documentation:**
     - Compile the definitive `AUDIT/FINAL-RELEASE-CERTIFICATION.md`.
     - Author operational maintenance documentation for ongoing content updates and security patches.
- **Dependencies:** Completion of Phases 2 through 9.
- **Deliverables:**
  - Expanded `test/run-tests.js` (400+ automated assertions).
  - `AUDIT/SCHOLARLY-VERIFICATION-SIGN-OFF.md`.
  - `AUDIT/FINAL-RELEASE-CERTIFICATION.md`.
- **Risks & Mitigation:**
  - *Risk:* Late discovery of an inaccurate religious citation.
  - *Mitigation:* 2-stage scholarly peer sign-off before tagging final git release.
- **Acceptance Criteria:**
  - 100% test pass rate across 400+ automated tests with 0 failures.
  - Formal certification of Quranic, Hadith, and worship content integrity.
  - Clean git tree tagged `v2.0.0-production-release`.

---

## 3. Strict Execution Protocol

In strict accordance with the Master Prompt instructions:
1. **Phase 1 is now complete.**
2. **Do NOT begin implementing Phase 2 or any subsequent phase.**
3. **Wait for explicit user authorization before initiating Phase 2.**
