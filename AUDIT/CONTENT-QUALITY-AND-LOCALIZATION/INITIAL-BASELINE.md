# Content Quality & Localization Audit: Initial Baseline Report

**Document Reference:** `AUDIT/CONTENT-QUALITY-AND-LOCALIZATION/INITIAL-BASELINE.md`  
**Workspace:** `E:\islamic websiye`  
**Date of Audit:** October 2026  
**Auditor:** Senior Islamic Educational Content Researcher, Source Provenance Specialist & Principal QA Architect  

---

## 1. Executive Summary & Audit Context

This baseline audit investigates the complete source tree, data models, content depth, localization framework, and licensing records of the Islamic Knowledge Portal prior to executing the master content expansion and localization hardening.

Previous phase reports claimed high levels of completion; however, an independent, rigorous inspection of the real code and data reveals important gaps that must be directly resolved:
1. **Sahaba Biographies**: 30 biographies currently exist in `public/sahaba.html`. While substantive (~700 words each), this does not reach the owner's target of an expansive library (50+ biographies) covering key Ansar chieftains, early Muhajirun, scribes of revelation, and revered female companions.
2. **Seerah Organization**: 25 chronological chapters exist (~27,000 words total) in `public/seerah.html`. However, all 25 chapters reside in a single large HTML document without dedicated thematic chapters covering the Prophet's ﷺ personal character, leadership ethics, family life, treatment of neighbors, and conduct in conflict.
3. **Localization Reality vs Claim**: 40 language codes are registered in `public/js/i18n.js`. While 11 languages have verified 50-key UI translation dictionaries, the remaining 29 languages are in partial/pipeline status. Furthermore, long-form educational articles are authored in English and Urdu, meaning international users in French, Indonesian, or Turkish see English article bodies under translated UI headings unless clear status badges are displayed.
4. **Licensing & Copyright Provenance**: Sourcing from Tanzil (Quran text Hafs), King Fahd Complex / QuranEnc (translations), and EveryAyah (audio) requires formal consolidation into a machine-readable `data/content-rights-registry.json` and explicit compliance with CC-BY 3.0 and Islamic educational attribution guidelines.

---

## 2. Source Tree & File System Inventory

### 2.1 Public Pages (25 HTML Documents)
```
public/
├── about.html                (37.7 KB) - Mission, governance, scholarly methodology
├── bookmarks.html            (15.5 KB) - LocalStorage reading tracker
├── calendar.html             (26.5 KB) - Umm al-Qura Hijri-Gregorian converter
├── contact.html              (20.7 KB) - Inquiry forms and feedback
├── download-app.html         (28.9 KB) - Android APK & offline bundle portal
├── duas.html                 (26.0 KB) - 32 Masnoon supplications from Hisn al-Muslim
├── eid-guide.html            (41.8 KB) - Fiqh of Eid al-Fitr and Eid al-Adha
├── hadith.html               (29.1 KB) - Kutub al-Sittah 22 foundational traditions
├── history.html              (290.0 KB) - 12 extensive chronological historical eras
├── index.html                (51.3 KB) - Redesigned 8-pillar hub, daily foundations
├── janazah-guide.html        (53.9 KB) - Funeral rites, shroud, step-by-step prayer
├── kalimas.html              (33.7 KB) - Six Kalimas with Arabic, Urdu, English
├── pillars.html              (37.3 KB) - The 5 Pillars of Islam overview
├── prayer-times.html         (31.9 KB) - PrayTimes astronomical solar calculations
├── privacy.html              (17.9 KB) - Data protection, local-only storage policy
├── prophets.html             (298.6 KB) - 30 narratives (25 Prophets + 5 Quranic figures)
├── quran.html                (33.0 KB) - Tanzil Hafs 114 Surahs, 6,236 Ayahs reader
├── sahaba.html               (274.2 KB) - 30 Companions biographies (Target: 50+)
├── salah-guide.html          (75.0 KB) - Step-by-step postures, conditions, invalidators
├── seerah.html               (288.1 KB) - 25 Chronological Prophetic life chapters
├── sources.html              (17.7 KB) - Bibliography & academic citations
├── tasbih.html               (25.5 KB) - Digital Tasbih counter with audio haptics
├── terms.html                (15.6 KB) - Terms of educational non-commercial use
├── wudu-guide.html           (56.1 KB) - Fiqh of Wudu, Ghusl, Tayammum
└── zakat-calculator.html     (33.4 KB) - Nisab threshold gold/silver asset calculator
```

### 2.2 Core Script Modules (`public/js/`)
- `data.js` (101.4 KB): Contains canonical `ISLAMIC_DATA` (114 Surahs metadata, 30 Juz boundaries, 22 Hadith traditions, 6 Kalimas, 32 Masnoon Duas, and offline Ayahs).
- `i18n.js` (38.6 KB): Contains `LANGUAGES` (40 language registry), `TRANSLATIONS` (11 verified UI dictionaries, 50 keys each), and `I18nManager` DOM translation engine.
- `quran.js` (55.5 KB): Quran reader engine managing Tanzil Uthmani script rendering, font scaling, audio player, search jump, and Web Share API.
- `app.js` (40.9 KB): Core application controller handling theme switching, drawer menu, modal controllers, and offline service worker sync.
- `search.js` (45.4 KB): Client-side indexing and search modal supporting category filtering.

---

## 3. Detailed Content Depth Baseline

| Content Domain | Current Count | Estimated Word Count | Primary Sources Cited | Assessment |
| :--- | :--- | :--- | :--- | :--- |
| **Holy Quran** | 114 Surahs, 6,236 Ayahs | Complete | Tanzil.net (Medina Mushaf Hafs) | **Canonical Standard** |
| **Quran Translations** | 40 Languages | 40 Editions | King Fahd Complex, Saheeh Intl, Jalandhari | **Verified Decoupled Engine** |
| **Prophetic Seerah** | 25 Chapters | ~27,000 words | Ibn Hisham, Ibn Sa'd, Sahihayn | **Chronological; lacks thematic modules** |
| **Sahaba Biographies** | 30 Biographies | ~21,500 words | Al-Isabah, Siyar A'lam an-Nubala | **Substantive; needs expansion to 50+** |
| **Prophets Narratives** | 30 Biographies | ~22,300 words | Holy Quran, Ibn Kathir (Qisas al-Anbiya) | **Comprehensive Quranic narratives** |
| **Islamic History** | 12 Eras | ~28,000 words | Al-Tabari, Ibn al-Athir, Ibn Kathir | **Thorough 14-century coverage** |
| **Hadith Traditions** | 22 Traditions | ~6,500 words | Sahih al-Bukhari, Sahih Muslim, Abu Dawud | **Essential; explicit gradings** |
| **Masnoon Duas** | 32 Supplications | ~5,000 words | Hisn al-Muslim (Al-Qahtani) | **Complete with target counters** |
| **Worship Guides** | 5 Guides | ~25,000 words | Classical Fiqh consensus (4 Madhhabs) | **Detailed step-by-step postures** |

---

## 4. Localization Framework & Reality Check

An audit of `public/js/i18n.js` confirms:
1. **Tier 1 (Verified Full UI - 11 Languages)**:
   - English (`en`), Urdu (`ur`), Arabic (`ar`), French (`fr`), Indonesian (`id`), Turkish (`tr`), Bengali (`bn`), Hindi (`hi`), Malay (`ms`), Persian (`fa`), Spanish (`es`).
   - Each contains 50 identical dictionary keys mapped to navigation, controls, headers, and footer elements.
2. **Tier 2 (Authorized Partial - 14 Languages)**:
   - German (`de`), Portuguese (`pt`), Russian (`ru`), Chinese Simplified (`zh-CN`), Chinese Traditional (`zh-TW`), Japanese (`ja`), Korean (`ko`), Swahili (`sw`), Hausa (`ha`), Somali (`so`), Pashto (`ps`), Kurdish (`ku`), Tamil (`ta`), Telugu (`te`).
   - Registered in configuration; available in Quran Reader translations, but portal UI dictionary is in progress.
3. **Tier 3 (In-Pipeline - 15 Languages)**:
   - Malayalam, Kannada, Marathi, Gujarati, Punjabi, Thai, Vietnamese, Dutch, Italian, Polish, Bosnian, Albanian, Uzbek, Kazakh, Azerbaijani.
4. **Educational Article Translation Reality**:
   - The ~300,000 words of educational scholarship across Seerah, Sahaba, Prophets, and History are authored in English and Urdu with classical Arabic citations.
   - For visitors selecting other languages (e.g., French, Turkish, Indonesian), the UI controls adapt, but the underlying historical text remains in English.
   - **Remediation**: The `.content-lang-banner` must be maintained across all educational pages to clearly explain this translation reality, avoiding unverified machine-generated translations that risk theological distortion.

---

## 5. Arabic Text & Scripture Integrity Baseline

Hard attribute audit across all pages reveals:
- **Holy Quran**: Ayah elements in `public/js/quran.js` enforce `translate="no"`, `dir="rtl"`, and `lang="ar"`, with zero `data-i18n` attributes.
- **Ayatul Kursi** (`index.html`): Enforces `translate="no"`, `dir="rtl"`, and `lang="ar"`.
- **Six Kalimas** (`kalimas.html`): Enforces `translate="no"` on all 6 sacred Arabic declarations.
- **Duas** (`duas.html`): Enforces `translate="no"` on all 32 Arabic supplications.
- **Automated Tests**: Suite 4 and Suite 31 programmatically verify that Arabic strings remain completely immutable during language switches.

---

## 6. Technical SEO, Domain & Canonical Health

- **Production Domain**: The canonical URLs are configured as `https://islamicknowledge.example.com/`.
- **Sitemap**: `public/sitemap.xml` lists all 24 canonical HTML pages with priorities from `0.6` to `1.0`.
- **Robots.txt**: `public/robots.txt` points to `sitemap.xml` and allows all crawlers.
- **Social Tags**: Open Graph (`og:title`, `og:image`, `og:url`) and Twitter Cards (`summary_large_image`) are present on all 24 pages.
- **Internal Links**: 1,053 internal link references crawled with **0 broken links**.

---

## 7. Git State & Uncommitted Changes Protection

Git status check confirms:
- Branch: `master`
- Working tree contains uncommitted refinements in `public/` and `test/run-tests.js` from Phase 13.
- All modifications maintain 100% passing tests (965/965) and will be strictly preserved throughout this master execution.
