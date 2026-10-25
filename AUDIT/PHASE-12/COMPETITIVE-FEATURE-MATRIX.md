# PHASE 12C — DIRECT FEATURE-BY-FEATURE COMPETITIVE MATRIX

**Audit Date:** October 24, 2026  
**Auditor:** Principal Software Architect & Islamic Content Quality Auditor  
**Scope:** Direct evidence-backed comparison between Islamic Knowledge Portal and 8 established competitors across 10 core functional domains.  

---

## Evaluation Legend
- **Our Status:** `Working` | `Partial` | `Missing` | `Broken` | `Not Applicable` | `Not Verified`
- **Relative Assessment:** `Better` | `Comparable` | `Weaker` | `Insufficient Evidence`
- **Impact / Effort / Risk:** `Low` | `Medium` | `High`

---

## Category A: Quran Reading and Study

| Feature / User Task | Our Project Actual Behavior | Relevant Competitor & Page | Competitor Observed Behavior | Evidence URL | Our Status | Relative Assessment | User Impact | Effort | Risk | Recommendation & Justification |
|---|---|---|---|---|---|---|---|---|---|---|
| Complete 114 Surahs & 6,236 Ayahs | Hafs text loaded by Surah or Juz; full 6,236 Ayah canonical standard verified | Quran.com (`/`) | Full text with multiple mushaf layouts (Indo-Pak, Madani) | https://quran.com/ | Working | Comparable | High | Low | Low | Maintain strict Tanzil text integrity. |
| Independent Translation Selector | Translation switcher dropdown isolates translation from Arabic text; includes Urdu, English, French, etc. | Quran.com (`/1`) | Dynamic translation drawer with 100+ translations | https://quran.com/1 | Working | Comparable | High | Low | Low | Current isolated architecture successfully prevents Arabic corruption. |
| Tafsir Commentary | Modal Tafsir Ibn Kathir with contextual background | Quran.com (`/1/tafsirs`) | Multi-Tafsir comparison panel (Ibn Kathir, Jalalayn, Maududi) | https://quran.com/1/tafsirs | Working | Comparable | Medium | Medium | Low | Maintain reliable Ibn Kathir commentary; consider expanding to Jalalayn. |
| Audio Playback & Reciter Control | Verse-by-verse recitation with play/pause, repeat, and speed controls | Quran.com (`/`) | Continuous audio stream, word highlighting, 30+ reciters | https://quran.com/ | Working | Comparable | High | Medium | Low | Add download-audio indicators and offline cache status. |
| Word-by-Word Study Mode | Interactive Study Mode modal with word breakdown | Quran.com (`/1`) | Inline word-by-word with grammatical roots | https://quran.com/1 | Working | Comparable | Medium | High | Low | Retain modal study view for clean reading experience. |
| Copy & Share Ayah | `copyAyah(num)` copies Arabic + translation + citation to clipboard; Web Share API missing | Quran.com (`/1`) | Copy link, copy Arabic/translation, native share dialog | https://quran.com/1 | Partial | Weaker | High | Low | Low | **Implement Web Share API with clipboard fallback** for instant mobile sharing. |

---

## Category B: Hadith and Sunnah

| Feature / User Task | Our Project Actual Behavior | Relevant Competitor & Page | Competitor Observed Behavior | Evidence URL | Our Status | Relative Assessment | User Impact | Effort | Risk | Recommendation & Justification |
|---|---|---|---|---|---|---|---|---|---|---|
| Canonical Collection Coverage | Bukhari, Muslim, Abu Dawud, Tirmidhi, Nasa'i, Ibn Majah, Muwatta, 40 Nawawi | Sunnah.com (`/`) | Full *Kutub al-Tis'ah* plus secondary collections | https://sunnah.com/ | Working | Comparable | High | High | Low | Core authentic traditions are properly represented with complete references. |
| Authenticity Gradings (*Hukm*) | Explicit badges for Sahih, Hasan with scholar attribution (Albani, Darussalam) | Sunnah.com (`/bukhari`) | Individual Hadith grades displayed with scholar attribution | https://sunnah.com/bukhari/1 | Working | Comparable | High | Low | Low | Retain clear gradings; never display unauthenticated reports without disclaimer. |
| Collection & Topic Filtering | Dual dropdown filters (Collection + Thematic Topic) + search field | Sunnah.com (`/`) | Hierarchical navigation (Collection $\rightarrow$ Book $\rightarrow$ Chapter) | https://sunnah.com/ | Working | Comparable | Medium | Low | Low | Current thematic filters provide superior topical discovery for non-specialists. |
| Copy & Share Hadith | `copyHadith(id)` copies text and full citation; native share missing | Sunnah.com (`/bukhari/1`) | Permalink sharing, copy text, social share | https://sunnah.com/ | Partial | Weaker | Medium | Low | Low | **Implement Web Share button** for one-tap sharing on mobile. |

---

## Category C: Seerah, Sahaba and Prophets

| Feature / User Task | Our Project Actual Behavior | Relevant Competitor & Page | Competitor Observed Behavior | Evidence URL | Our Status | Relative Assessment | User Impact | Effort | Risk | Recommendation & Justification |
|---|---|---|---|---|---|---|---|---|---|---|
| Chronological Seerah Coverage | 25 detailed biographical monograph chapters from Pre-Islamic Arabia to Wafat | Yaqeen Institute (`/series`) | Multi-part themed articles and Ramadan video series | https://yaqeeninstitute.org/ | Working | Better | High | Low | Low | Our structured 25-chapter monograph is more coherent than scattered blog posts. |
| Prophetic Narratives (Qisas al-Anbiya) | 17 comprehensive monographs with Quranic Ayahs and Ibn Kathir citations | Yaqeen Institute (`/articles`) | Individual papers on prophetic character and lessons | https://yaqeeninstitute.org/ | Working | Better | High | Low | Low | Full chronological coverage from Adam (AS) to Isa (AS) provides unified learning. |
| Sahaba Biographies | 14 comprehensive monographs (10 Promised Paradise, Mothers of Believers, Ansar) | SeekersGuidance (`/articles`) | Occasional biographical articles and podcasts | https://seekersguidance.org/ | Working | Better | High | Low | Low | Cohesive biographies with virtues and classical source citations. |

---

## Category D: Islamic History and Knowledge Library

| Feature / User Task | Our Project Actual Behavior | Relevant Competitor & Page | Competitor Observed Behavior | Evidence URL | Our Status | Relative Assessment | User Impact | Effort | Risk | Recommendation & Justification |
|---|---|---|---|---|---|---|---|---|---|---|
| Historical Eras Coverage | 12 historical eras (Early Islam, Caliphates, Spain, Seljuks, Ottomans, Mughals) | Al-Islam.org (`/library`) | Digital library of digitized historical books | https://www.al-islam.org/ | Working | Comparable | High | Medium | Low | Structured eras provide accessible bird's-eye educational perspective. |
| Source References & Objectivity | Academic citations from Ibn Kathir, Tabari, Ibn Khaldun, and modern scholarship | Yaqeen Institute (`/research`) | Peer-reviewed academic papers with formal citations | https://yaqeeninstitute.org/ | Working | Comparable | High | Low | Low | Maintain academic neutrality and clear distinctions between verified events and popular lore. |

---

## Category E: Worship, Duas and Daily Practice

| Feature / User Task | Our Project Actual Behavior | Relevant Competitor & Page | Competitor Observed Behavior | Evidence URL | Our Status | Relative Assessment | User Impact | Effort | Risk | Recommendation & Justification |
|---|---|---|---|---|---|---|---|---|---|---|
| Practical Salah Guide | Illustrated steps, Rak'ah charts, Arabic recitations, Madhhab comparisons | SeekersGuidance (`/courses`) | Multi-week courses on Hanafi/Shafi'i fiqh | https://seekersguidance.org/ | Working | Better | High | Low | Low | Instant practical reference guide without mandatory course enrollment. |
| Purification (Wudu, Ghusl, Tayammum) | Complete step-by-step Fara'id, Sunan, nullifiers, and practical scenarios | IslamQA.info (`/en/categories`) | Detailed fatwa answers on specific purification queries | https://islamqa.info/en | Working | Better | High | Low | Low | Single unified purification page serves beginners better than fragmented Q&As. |
| Janazah & Eid Guides | Funeral rulings, 4 Takbeers, Eid prayers, Zakat-ul-Fitr, Qurbani rules | IslamQA.info (`/en`) | Dispersed individual legal rulings | https://islamqa.info/en | Working | Better | High | Low | Low | Highly valuable practical guides that most portals lack as dedicated pages. |
| Masnoon Duas & Adhkar | Categorized daily duas with Arabic, transliteration, Urdu, and references | IslamicFinder (`/duas`) | List of daily supplications | https://islamicfinder.org/duas | Working | Comparable | High | Low | Low | **Add Web Share button** to facilitate daily sharing of morning/evening adhkar. |

---

## Category F: Search and Discovery

| Feature / User Task | Our Project Actual Behavior | Relevant Competitor & Page | Competitor Observed Behavior | Evidence URL | Our Status | Relative Assessment | User Impact | Effort | Risk | Recommendation & Justification |
|---|---|---|---|---|---|---|---|---|---|---|
| Phonetic Search & Aliases | Strips diacritics, prefixes (`surah`, `al-`), handles Roman Urdu (`bakra`, `fatiha`) | Quran.com (`/search`) | Algolia-powered verse search with instant auto-complete | https://quran.com/search | Working | Better | High | Medium | Low | Regional phonetic normalization significantly outperforms standard keyword engines for South Asian / diaspora users. |
| Cross-Content Discovery | Global modal search indexes Quran, Hadiths, Duas, Seerah, Sahaba, and Guides | Sunnah.com (`/search`) | Hadith-only search | https://sunnah.com/search | Working | Better | High | Low | Low | Unified search allows finding related Quran and Hadith topics simultaneously. |
| Search Filter Category Chips | Global search currently mixes all content types in single results stream | Quran.com (`/search`) | Filter tabs: All, Verses, Tafsir | https://quran.com/search | Partial | Weaker | Medium | Low | Low | **Add category filter chips** (All, Quran, Hadith, Duas, Guides) to search modal. |

---

## Category G: Website User Experience

| Feature / User Task | Our Project Actual Behavior | Relevant Competitor & Page | Competitor Observed Behavior | Evidence URL | Our Status | Relative Assessment | User Impact | Effort | Risk | Recommendation & Justification |
|---|---|---|---|---|---|---|---|---|---|---|
| Mobile Navbar & Horizontal Stability | Fixed in Phase 11; header constrained to 100vw, hamburger inside bounds, zero shake | Quran.com (`/`) | Highly polished responsive layout | https://quran.com/ | Working | Comparable | High | Low | Low | Independently verified at 16 viewports ($320\text{px}$ to $1920\text{px}$). |
| Mobile Bottom Navigation Bar | Fixed 5-tab bottom navigation (Home, Quran, Prayer, Duas, Menu) on $\le 768\text{px}$ | IslamicFinder (Mobile Web) | Bottom app bar on mobile web | https://islamicfinder.org/ | Working | Comparable | High | Low | Low | Elevates mobile web experience to native app parity. |
| Dark Mode Support | Toggleable dark mode with warm charcoal and deep gold accents | Quran.com (`/`) | Multi-theme toggle (Light, Dark, Sepia) | https://quran.com/ | Working | Comparable | Medium | Low | Low | Persistent theme preference stored in localStorage. |

---

## Category H: Android Application

| Feature / User Task | Our Project Actual Behavior | Relevant Competitor & Page | Competitor Observed Behavior | Evidence URL | Our Status | Relative Assessment | User Impact | Effort | Risk | Recommendation & Justification |
|---|---|---|---|---|---|---|---|---|---|---|
| Native Shell Integration | Capacitor targetSdk 34 (Android 14), splash screen, native webview settings | Quran.com (Google Play App) | Full native Kotlin/Java application | https://play.google.com/ | Working | Comparable | High | Medium | Low | Standalone APK download center with SHA-256 verification provides direct distribution. |
| Offline Reading & Asset Cache | Service Worker Cache-First for static assets, bundled offline bundle ZIP | Quran.com App | Offline audio & text download manager | https://quran.com/ | Working | Comparable | High | Medium | Low | Full offline functionality for core texts without internet dependency. |

---

## Category I: Content Trust, Editorial Standards and Licensing

| Feature / User Task | Our Project Actual Behavior | Relevant Competitor & Page | Competitor Observed Behavior | Evidence URL | Our Status | Relative Assessment | User Impact | Effort | Risk | Recommendation & Justification |
|---|---|---|---|---|---|---|---|---|---|---|
| Quran Text Provenance | Verified Tanzil CC BY 3.0 Hafs text; full attribution in `sources.html` | Tanzil.net | Primary text verification source | https://tanzil.net/ | Working | Comparable | High | Low | Low | Unmodified Quran text strictly preserved. |
| Scholarly Disclaimers | Explicit terms and disclaimer stating portal is educational, not a personal Mufti fatwa | IslamQA.org (`/about`) | Explicit institutional attribution and fatwa scope | https://islamqa.org/about/ | Working | Better | High | Low | Low | Clear legal and religious boundary protection. |

---

## Category J: Technical SEO and Discoverability

| Feature / User Task | Our Project Actual Behavior | Relevant Competitor & Page | Competitor Observed Behavior | Evidence URL | Our Status | Relative Assessment | User Impact | Effort | Risk | Recommendation & Justification |
|---|---|---|---|---|---|---|---|---|---|---|
| Canonical URLs & OpenGraph | Canonical URLs defined on all 25 pages, OG title, description, image tags | Quran.com (`/`) | Comprehensive OpenGraph, Twitter cards, Schema.org | https://quran.com/ | Working | Comparable | High | Low | Low | All 25 pages have verified valid metadata and sitemap registration. |
| Clean URL Server Routing | `server.js` serves clean URLs (`/quran`, `/hadith`) with automatic `.html` fallback | Sunnah.com (`/bukhari`) | Clean RESTful URLs | https://sunnah.com/ | Working | Comparable | High | Low | Low | Clean URLs work seamlessly across local server and production static servers. |
