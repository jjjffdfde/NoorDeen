# PHASE 12B — OFFICIAL COMPETITOR RESEARCH

**Research Date:** October 24, 2026  
**Auditor:** Principal Software Architect & Islamic Content Quality Auditor  
**Investigation Methodology:** Direct web investigation, architecture analysis, public documentation review, and functional feature verification across 8 established competitor platforms and 2 supporting references.  

---

## 1. Competitor 1 — Quran.com

- **Official URL:** `https://quran.com/`
- **Domain Focus:** The premier open-source global digital Quran platform.
- **Observed Features & Architecture:**
  1. **Reading & Navigation:** High-resolution digital Mushaf, verse-by-verse view, reading mode (page-by-page mushaf), and Surah / Juz / Ayah jump menus.
  2. **Arabic Typography:** Uthmani script (Hafs), Indo-Pak font options, Tajweed color-coded fonts, adjustable font scaling.
  3. **Translation Selection:** Over 100 translations across 40+ languages. Translators include Saheeh International, Clear Quran (Mustafa Khattab), Yusuf Ali, Pickthall, and Urdu (Taqi Usmani, Maududi, Jalandhari). Translations are selectable independently without mutating Arabic text.
  4. **Tafsir & Study Tools:** Modal and inline commentaries including Tafsir Ibn Kathir, Ma'ariful Quran, Tafsir al-Jalalayn, and contemporary exegeses.
  5. **Audio System:** Multi-reciter playback (Mishary Rashid Alafasy, Abdul Basit, Al-Husary, Abu Bakr Al-Shatri). Features include word-by-word audio highlighting, repeat loops, custom playback speeds (0.75x to 1.5x), and continuous Ayah streaming.
  6. **Word-by-Word Breakdown:** Grammatical analysis, root word links, and English/Urdu word-by-word meanings.
  7. **Search Engine:** Fast instant search supporting Surah names, numbers, Arabic keywords, and translation phrase queries.
  8. **User Progress & Study:** Local and cloud-synced bookmarks, reading goals, pinned verses, and Quran study reflection notes.
  9. **Mobile & Ecosystem:** Progressive Web App, iOS & Android native apps, modern responsive layout.
- **Key Strengths:** Unmatched Quranic study depth, audio synchronization, and word-by-word linguistic tools.
- **Relevance to Our Project:** Provides the gold standard for Surah reading, verse bookmarking, and audio playback. However, Quran.com does not provide Hadith libraries, Seerah monographs, Islamic history, or practical Salah/worship guides.

---

## 2. Competitor 2 — Sunnah.com

- **Official URL:** `https://sunnah.com/`
- **Domain Focus:** Premier digital archive and search engine for Hadith collections.
- **Observed Features & Architecture:**
  1. **Canonical Collections (*Al-Kutub al-Tis'ah*):** Sahih al-Bukhari, Sahih Muslim, Sunan an-Nasa'i, Sunan Abi Dawud, Jami` at-Tirmidhi, Sunan Ibn Majah, Muwatta Malik, Musnad Ahmad, Sunan ad-Darimi.
  2. **Secondary Collections:** Riyad as-Salihin, Al-Adab al-Mufrad, 40 Hadith Nawawi, Ash-Shama'il al-Muhammadiyyah, Hisn al-Muslim.
  3. **Hierarchical Navigation:** Collection $\rightarrow$ Book (e.g. *Book of Prayer*) $\rightarrow$ Chapter $\rightarrow$ Narration Number. Dual reference numbering (e.g., In-book reference vs. USC-MSA web reference).
  4. **Text Display:** Original Arabic text displayed side-by-side or stacked with English translation. Clean, legible typography with toggleable themes.
  5. **Scholarly Authenticity Gradings (*Hukm*):** Explicit gradings (Sahih, Hasan, Da'if, Mawdu') attributed to recognized scholars (such as Shaykh Muhammad Nasiruddin al-Albani, Darussalam scholarly board, or classical authors).
  6. **Search Capabilities:** Advanced search with exact phrase matching (`"..."`), wildcard searches (`*`), fuzzy matching (`~`), and collection-scoped filtering.
  7. **Editorial Stance:** Explicitly disclaims that it is an academic reference archive, not a Fatwa or legal ruling authority.
- **Key Strengths:** Authority in Hadith referencing, standardized numbering, and attribution transparency.
- **Relevance to Our Project:** Our Hadith section mirrors Sunnah.com's strict collection and book citation standards. Adding "Share Hadith" and quick copy actions will enhance user utility.

---

## 3. Competitor 3 — IslamQA.info

- **Official URL:** `https://islamqa.info/en`
- **Domain Focus:** Authoritative question-and-answer platform for Islamic jurisprudence and creed.
- **Observed Features & Architecture:**
  1. **Q&A Structure:** User-submitted practical questions followed by structured scholarly responses containing legal rulings, textual evidences, and practical counsel.
  2. **Topic Categorization:** Multi-tier taxonomy: *Aqeedah* (Creed), *Fiqh* (Worship, Transactions, Family Law), Quran & Hadith Sciences, Manners, and History.
  3. **Supervision & Methodology:** Supervised by Shaykh Muhammad Saalih al-Munajjid following the methodology of *Ahl as-Sunnah wa'l-Jama'ah*. Responses cite Quran, Sahih Sunnah, consensus (*Ijma*), and classical jurisprudence.
  4. **Attribution:** Answers cite primary hadith collections, classical fiqh treatises (Ibn Qudamah, Nawawi, Ibn Taymiyyah), and contemporary rulings.
  5. **Search & Discovery:** Keyword-based query index and rich related-question recommendations.
- **Key Strengths:** Exhaustive depth in practical day-to-day fiqh, marriage, purification, and spiritual guidance.
- **Relevance to Our Project:** While our portal is an educational knowledge base rather than an active fatwa desk, IslamQA.info serves as a model for structured practical answers and detailed textual citations in our worship guides.

---

## 4. Competitor 4 — IslamQA.org

- **Official URL:** `https://islamqa.org/about/`
- **Domain Focus:** Centralized archive aggregating traditional Sunni scholarship across the four orthodox schools of law (*Madhhabs*).
- **Observed Features & Architecture:**
  1. **Archive Model:** Aggregates and indexes fatawa from reputable global institutes (SeekersGuidance, Darul Iftaa, Mathabah, Askimam, etc.).
  2. **Multi-Madhhab Representation:** Explicitly categorizes answers according to Hanafi, Shafi'i, Maliki, and Hanbali schools of thought.
  3. **Attribution Transparency:** Every archived answer explicitly links back to the original issuing scholar (e.g. Mufti Ebrahim Desai, Shaykh Faraz Rabbani) and the source institution.
  4. **Madhhab Adherence Rationale:** Educates users on the importance of adhering to an established school to ensure systematic consistency in worship and avoid picking and choosing rulings based on convenience (*tatabbu' al-rukhas*).
- **Key Strengths:** Preserves multi-madhhab perspectives without syncretic confusion; clear institutional provenance.
- **Relevance to Our Project:** Directly informs our approach to Salah, Wudu, and Janazah guides, where differences between classical madhhabs are presented respectfully and transparently.

---

## 5. Competitor 5 — Yaqeen Institute

- **Official URL:** `https://yaqeeninstitute.org/`
- **Domain Focus:** Islamic research institute and think tank addressing modern intellectual, theological, and societal questions.
- **Observed Features & Architecture:**
  1. **Peer-Reviewed Research:** Long-form academic papers vetted by internal research fellows and external academic reviewers.
  2. **Authorship & Citations:** Roster of distinguished scholars (Dr. Omar Suleiman, Dr. Jonathan Brown, Dr. Nazir Khan). Includes pre-formatted academic citation snippets (APA, MLA, Chicago).
  3. **Educational Series:** Multi-part themed collections (e.g., Proofs of Prophethood, Divine Decree, Ramadan reflection series).
  4. **K-12 Curriculum (Yaqeen Curriculum™):** Lesson plans translating academic research into age-appropriate curricula for schools and homeschooling.
  5. **Free Access:** 100% open access with no subscription barriers or paywalls.
- **Key Strengths:** Intellectual rigor, modern formatting, beautiful typography, and structured educational pathways.
- **Relevance to Our Project:** Sets the benchmark for our 25-chapter Seerah, 17 Prophetic monographs, and 12-era Islamic history library in terms of depth, nuance, and academic citation.

---

## 6. Competitor 6 — SeekersGuidance

- **Official URL:** `https://seekersguidance.org/`
- **Domain Focus:** Global Islamic seminary offering structured, tuition-free traditional education ("Knowledge Without Barriers").
- **Observed Features & Architecture:**
  1. **Structured Learning Tracks:** Step-by-step curricula in Islamic Studies (Level 1 foundational to advanced), Arabic Language (*Itqan* track), Tafsir, and Youth education.
  2. **Traditional Faculty:** Instruction by certified traditional scholars holding classical *Ijazat* (Shaykh Faraz Rabbani, Shaykh Yahya Rhodus, etc.).
  3. **Seekers Answers Archive:** Searchable database of tens of thousands of answered queries on daily worship, spirituality, and transactions.
  4. **Format Variety:** Live online webinars, self-paced courses, podcasts, articles, and downloadable curriculum guides.
- **Key Strengths:** Structured beginner-to-advanced learning progressions and personal mentorship.
- **Relevance to Our Project:** Inspires structured progression in our worship guides (Wudu $\rightarrow$ Salah $\rightarrow$ Janazah $\rightarrow$ Eid $\rightarrow$ Zakat).

---

## 7. Competitor 7 — Al-Islam.org

- **Official URL:** `https://www.al-islam.org/`
- **Domain Focus:** Premier digital library dedicated to Shia Islamic literature, history, and theology.
- **Observed Features & Architecture:**
  1. **Digital Library:** Thousands of digitized books organized chapter-by-chapter with multi-format downloads (PDF, EPUB, MOBI).
  2. **Core Subject Areas:** *Aqaid* (Tawhid, Adl, Nubuwwah, Imamah, Ma'ad), Early Islamic History, Ahlul Bayt accounts, comparative studies.
  3. **Authorship:** Classical and modern Shia scholars (Allamah Hilli, Shaykh al-Mufid, Sayyid Saeed Akhtar Rizvi, Murtada Mutahhari).
- **Key Strengths:** Systematic digitization of long-form theological and historical books.
- **Relevance & Context:** Represents a distinct scholarly perspective. Our portal maintains a non-sectarian Sunnah-grounded editorial approach while preserving academic objectivity in historical descriptions.

---

## 8. Competitor 8 — IslamicFinder.org

- **Official URL:** `https://www.islamicfinder.org/`
- **Domain Focus:** Leading daily utility platform and lifestyle companion for Muslims worldwide.
- **Observed Features & Architecture:**
  1. **Astronomical Prayer Times:** Precision calculation methods (MWL, ISNA, Umm al-Qura, Karachi, Egyptian) with Azan audio notifications.
  2. **Qibla Direction:** Real-time compass and map integration pointing toward the Kaaba.
  3. **Dual Calendars:** Hijri-Gregorian interactive calendar, date converter, and Ramadan timetable generator.
  4. **Spiritual Utilities:** Digital Tasbih counter, Zakat calculator, Masnoon Duas, and Hajj guides.
  5. **Mobile Ecosystem:** Athan mobile application (iOS/Android) with home screen widgets.
- **Key Strengths:** Practical, daily utility features and astronomical calculation accuracy.
- **Relevance to Our Project:** Directly benchmarks our `prayer-times.html`, `tasbih.html`, `zakat-calculator.html`, and `calendar.html` utility suite.

---

## 9. Supporting Reference 9 — Tanzil Project

- **Official URL:** `https://tanzil.net/`
- **Domain Focus:** Standardized digital Quran text repository and verification project.
- **Licensing & Terms:** Creative Commons Attribution 3.0 (CC BY 3.0).
- **Mandatory Requirements:**
  - Strict prohibition against modifying the Quranic Arabic text.
  - Clear attribution to the Tanzil Project.
  - Backlink to `https://tanzil.net/`.
  - Preservation of the official copyright notice.
- **Compliance Status:** Our project strictly adheres to Tanzil licensing, utilizing unmodified Hafs text with full attribution in `public/sources.html`.

---

## 10. Supporting Reference 10 — QuranEnc.com

- **Official URL:** `https://quranenc.com/`
- **Domain Focus:** Peer-reviewed multilingual translations and Tafsir encyclopedia.
- **Licensing & Terms:**
  - Partnerships with King Fahd Complex and Noor International.
  - Content may be redistributed without modification.
  - Explicit attribution to QuranEnc.com, including version numbers and transcript metadata.
  - Strict prohibition of displaying translations alongside inappropriate advertisements.
- **Compliance Status:** Our translation selector respects QuranEnc guidelines, keeping translation metadata intact and maintaining a dedicated, zero-compromise religious presentation.
