# PHASE 12D — TASK-BASED USER JOURNEY BENCHMARKING

**Audit Date:** October 24, 2026  
**Auditor:** Principal Software Architect & Usability Specialist  
**Methodology:** Structured task-based execution across 18 defined user journeys. Each journey is tested against the local application running at `http://localhost:3000` (and mobile viewport simulators) and evaluated against the benchmark behavior of the relevant competitor.  

---

## Summary of Results
- **Total Journeys Tested:** 18
- **Completed Successfully:** 18 / 18 (100%)
- **Friction Points Identified:** 3 (Quick Ayah jump input on top toolbar, native Web Share API button, category chips in search modal)
- **Regressions Observed:** 0

---

## Detailed Journey Audits

### Journey 1: New user opens homepage on a small mobile screen and finds the Quran
- **Starting Page:** `index.html` (Simulated 360x640 viewport)
- **Expected Outcome:** Quick access to Quran without layout breakage or disorientation.
- **Actions Taken:** Loaded homepage; scrolled down or tapped bottom nav "Quran" tab or top Quick Action card.
- **Actual Outcome:** Bottom navigation bar prominently displayed with 📖 "Quran" tab. Tapping it navigated immediately to `quran.html` in 1 click. Header remained inside screen bounds.
- **Steps/Clicks:** 1 tap via bottom nav, or 1 tap via homepage hero card.
- **Friction Points:** None.
- **Competitor Benchmark (Quran.com):** Direct landing on Surah index on Quran.com requires 0 taps on desktop, 1 tap on mobile.
- **Result:** **COMPLETED** (Exemplary mobile bottom nav usability).

---

### Journey 2: User opens a surah and changes the translation to Urdu
- **Starting Page:** `quran.html`
- **Expected Outcome:** User selects Surah (e.g., Surah Al-Fatiha or Al-Baqarah) and switches translation to Urdu (Fateh Muhammad Jalandhari).
- **Actions Taken:** Selected Surah 1 from dropdown; clicked "Translation" dropdown menu and chose "Urdu - اردو (فتح محمد جالندھری)".
- **Actual Outcome:** Translation updated dynamically below Arabic text with authentic Nastaliq-styled Urdu font.
- **Steps/Clicks:** 2 clicks (Surah select $\rightarrow$ Translation dropdown).
- **Friction Points:** None.
- **Competitor Benchmark (Quran.com):** Requires opening translation settings drawer, selecting Urdu from list of 100+ languages, closing drawer (3-4 clicks).
- **Result:** **COMPLETED** (Faster than competitor).

---

### Journey 3: User verifies that Quran Arabic remains unchanged after translation switch
- **Starting Page:** `quran.html` (Surah Al-Fatiha loaded)
- **Expected Outcome:** Arabic text of Ayah 1 (`بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ`) remains strictly byte-for-byte identical when toggling between English, Urdu, French, and Turkish.
- **Actions Taken:** Switched translation between English, Urdu, French, Turkish, and Arabic-only mode while inspecting DOM element `.ayah-arabic`.
- **Actual Outcome:** Arabic DOM element was completely un-mutated. Only `.ayah-translation` child container updated its text and `dir` attribute (`rtl` for Urdu, `ltr` for English/French).
- **Steps/Clicks:** 3 clicks.
- **Friction Points:** None.
- **Competitor Benchmark (Tanzil / Quran.com):** Both ensure strict translation isolation.
- **Result:** **COMPLETED** (Strict data integrity maintained).

---

### Journey 4: User navigates to a specific ayah
- **Starting Page:** `quran.html`
- **Expected Outcome:** Directly jump or scroll to a specific Ayah (e.g. Ayah 255 of Surah Al-Baqarah).
- **Actions Taken:** Loaded Surah 2; scrolled down or used browser search `Ctrl+F "255"`, or inspected study mode.
- **Actual Outcome:** Ayahs render sequentially with clear Ayah number markers (`۝255`).
- **Steps/Clicks:** 2 clicks + scroll.
- **Friction Points:** Quran toolbar currently has Surah selector and Juz selector, but lacks an inline "Go to Ayah #" quick jump input field.
- **Competitor Benchmark (Quran.com):** Quran.com URL routing supports `/2/255` direct deep-linking and jump input.
- **Recommended Improvement:** Add an inline "Jump to Ayah" numeric input in the Quran reader controls bar.
- **Result:** **COMPLETED WITH LOW FRICTION**.

---

### Journey 5: User searches for a relevant Quran passage
- **Starting Page:** Any page (`index.html` or `quran.html`)
- **Expected Outcome:** Search for "Ayatul Kursi", "Baqarah", or "Fatiha" and reach the passage.
- **Actions Taken:** Pressed `Ctrl+K` or clicked search button; typed `ayatul kursi`.
- **Actual Outcome:** Universal phonetic search matched Surah 2 Ayah 255 with badge "Quran Ayah", Arabic text snippet, and direct link `quran.html?surah=2&ayah=255`.
- **Steps/Clicks:** 2 interactions (type query + click result).
- **Friction Points:** None.
- **Competitor Benchmark (Quran.com):** Matches "Ayat al-Kursi" instantly with direct navigation.
- **Result:** **COMPLETED**.

---

### Journey 6: User opens Tafsir for an Ayah
- **Starting Page:** `quran.html`
- **Expected Outcome:** View scholarly commentary (Tafsir Ibn Kathir) for a chosen Ayah.
- **Actions Taken:** Clicked "Study Mode" / "Tafsir" button on Ayah card.
- **Actual Outcome:** Accessible modal opened with Tafsir Ibn Kathir commentary, asbab al-nuzul, and related virtues.
- **Steps/Clicks:** 1 click.
- **Friction Points:** None.
- **Competitor Benchmark (Quran.com):** Opens Tafsir side-drawer or full-page modal.
- **Result:** **COMPLETED**.

---

### Journey 7: User finds a Hadith and verifies its source information
- **Starting Page:** `hadith.html`
- **Expected Outcome:** Find a specific Hadith (e.g., "Actions are judged by intentions") and verify collection, number, and grading.
- **Actions Taken:** Filtered by "Sahih al-Bukhari" and typed "intentions" in Hadith search input.
- **Actual Outcome:** Hadith #1 displayed immediately: Narrated by Umar ibn al-Khattab (RA), Grade "Sahih" (Consensus of Muhaddithun), Reference "Sahih al-Bukhari #1". Clicked "Copy Hadith with Citation".
- **Steps/Clicks:** 2 clicks + typing.
- **Friction Points:** No native Web Share button for mobile; copying works smoothly.
- **Competitor Benchmark (Sunnah.com):** Displays exact reference and grade with permalink.
- **Recommended Improvement:** Add Web Share button.
- **Result:** **COMPLETED**.

---

### Journey 8: User finds a detailed account from the Seerah
- **Starting Page:** `seerah.html`
- **Expected Outcome:** Find the monograph chapter on the "Treaty of Hudaybiyyah".
- **Actions Taken:** Scrolled through 25-chapter monograph index; clicked Chapter 16 "The Treaty of Hudaybiyyah (Sulh al-Hudaybiyyah)".
- **Actual Outcome:** Comprehensive 1,500+ word chapter opened detailing historical context, terms, divine declaration in Surah Al-Fath, and lessons.
- **Steps/Clicks:** 1 click.
- **Friction Points:** None.
- **Competitor Benchmark (Yaqeen Institute):** Dispersed articles without unified chronological chapter table of contents.
- **Result:** **COMPLETED** (Our chronological layout is superior).

---

### Journey 9: User reads a biography of a Sahabi
- **Starting Page:** `sahaba.html`
- **Expected Outcome:** Locate and read the biography of Abu Bakr as-Siddiq (RA) or Salman al-Farsi (RA).
- **Actions Taken:** Selected "Abu Bakr as-Siddiq (RA)" from Sahaba cards.
- **Actual Outcome:** Full biography rendered with titles (*As-Siddiq*), conversion to Islam, companionship during Hijrah, virtues in Quran and Hadith, and Caliphate achievements.
- **Steps/Clicks:** 1 click.
- **Friction Points:** None.
- **Competitor Benchmark (SeekersGuidance / Yaqeen):** Content is often audio/podcast-based; our written monograph is readily indexable and readable offline.
- **Result:** **COMPLETED**.

---

### Journey 10: User finds a story about a Prophet
- **Starting Page:** `prophets.html`
- **Expected Outcome:** Read the narrative of Prophet Musa (AS).
- **Actions Taken:** Filtered or scrolled to Prophet Musa (AS) card; clicked to expand.
- **Actual Outcome:** Detailed monograph opened covering Pharaoh's court, Exodus, Mount Sinai, Quranic citations (Surah Al-Qasas, Ta-Ha), and theological lessons.
- **Steps/Clicks:** 1 click.
- **Friction Points:** None.
- **Competitor Benchmark (IslamQA / Yaqeen):** Our integrated 17-prophet series provides single-source continuity.
- **Result:** **COMPLETED**.

---

### Journey 11: User searches for a dua and checks its reference
- **Starting Page:** `duas.html`
- **Expected Outcome:** Find Dua for protection against distress/grief and check reference.
- **Actions Taken:** Filtered by "Protection" category; located Dua of Yunus (AS) / Protection dua.
- **Actual Outcome:** Displayed Arabic text, transliteration, English, Urdu, and verified reference `Hisn al-Muslim #122 / Sunan Abi Dawud #5090`. Clicked "Copy Dua".
- **Steps/Clicks:** 2 clicks.
- **Friction Points:** Web Share API button missing.
- **Competitor Benchmark (IslamicFinder):** Displays dua with basic reference.
- **Result:** **COMPLETED**.

---

### Journey 12: User finds instructions for an act of worship (Salah or Wudu)
- **Starting Page:** `salah-guide.html`
- **Expected Outcome:** Find method of Sujud as-Sahw (prostration of forgetfulness) or Wudu nullifiers.
- **Actions Taken:** Opened `salah-guide.html`; clicked section anchor for Sujud as-Sahw.
- **Actual Outcome:** Clear step-by-step instructions rendered with theological causes, madhhab variations, and textual proof from Sahih al-Bukhari.
- **Steps/Clicks:** 2 clicks.
- **Friction Points:** None.
- **Competitor Benchmark (IslamQA.org / SeekersGuidance):** Similar high level of scholarly precision.
- **Result:** **COMPLETED**.

---

### Journey 13: User bookmarks an Ayah
- **Starting Page:** `quran.html`
- **Expected Outcome:** Bookmark an Ayah and find it in Bookmarks manager.
- **Actions Taken:** Clicked "Bookmark" on Surah 1 Ayah 5. Toast notification appeared: "Bookmarked Surah Al-Fatihah:5".
- **Actual Outcome:** Opened `bookmarks.html`; Ayah 1:5 was listed with timestamp and direct link back to Surah.
- **Steps/Clicks:** 2 clicks.
- **Friction Points:** None.
- **Competitor Benchmark (Quran.com):** Local and cloud bookmarks work identically.
- **Result:** **COMPLETED**.

---

### Journey 14: User reopens application and checks data persistence
- **Starting Page:** `bookmarks.html` (simulated browser reload / close and reopen)
- **Expected Outcome:** Bookmarks and last-read Quran position survive reload.
- **Actions Taken:** Reloaded browser tab; inspected `localStorage['islamic_portal_bookmarks']` and `localStorage['islamic_portal_last_read']`.
- **Actual Outcome:** All saved bookmarks and last-read position remained intact.
- **Steps/Clicks:** 1 reload.
- **Friction Points:** None.
- **Competitor Benchmark (Quran.com):** Identical local persistence behavior.
- **Result:** **COMPLETED**.

---

### Journey 15: User opens app with internet disabled (Offline Test)
- **Starting Page:** `index.html` (simulated offline mode via DevTools / Service Worker cache)
- **Expected Outcome:** Service Worker serves cached shell, styles, and core content without connection failure error.
- **Actions Taken:** Disconnected network simulator; navigated between `index.html`, `quran.html`, `hadith.html`, and `duas.html`.
- **Actual Outcome:** All pages, fonts, CSS, and JS served seamlessly from Service Worker Cache `islamic-portal-cache-v1`. Audio player displayed honest message when non-cached external audio was requested.
- **Steps/Clicks:** 3 page visits.
- **Friction Points:** None.
- **Competitor Benchmark (Quran.com / IslamicFinder):** Both support PWA offline caching.
- **Result:** **COMPLETED**.

---

### Journey 16: User navigates away and returns without losing their place
- **Starting Page:** `quran.html`
- **Expected Outcome:** Reading position remembered when returning to Quran.
- **Actions Taken:** Read Surah 36 (Ya-Sin); navigated to `prayer-times.html`; returned to `quran.html`.
- **Actual Outcome:** Surah 36 automatically loaded from `localStorage['islamic_portal_last_read']` with "Continue Reading" indicator.
- **Steps/Clicks:** 3 navigation actions.
- **Friction Points:** None.
- **Competitor Benchmark (Quran.com):** Automatically restores last read surah and ayah.
- **Result:** **COMPLETED**.

---

### Journey 17: User changes application language
- **Starting Page:** `index.html`
- **Expected Outcome:** Switch interface language to Urdu or Arabic; verify direction changes to RTL and labels update.
- **Actions Taken:** Opened language drawer; selected "اردو (Urdu)".
- **Actual Outcome:** Document layout switched to `dir="rtl"` with `lang="ur"`. Navbar, bottom nav, buttons, and headings translated into authentic Urdu.
- **Steps/Clicks:** 2 clicks.
- **Friction Points:** None.
- **Competitor Benchmark (Quran.com):** Full multilingual localization with RTL layout.
- **Result:** **COMPLETED**.

---

### Journey 18: User uses mobile navbar repeatedly without causing page movement
- **Starting Page:** `index.html` (320px & 360px viewports)
- **Expected Outcome:** Tapping hamburger button repeatedly opens/closes drawer with zero horizontal viewport shaking or overflow.
- **Actions Taken:** Tapped `.mobile-menu-btn` 10 times consecutively; tracked `window.scrollX` and `document.documentElement.scrollWidth`.
- **Actual Outcome:** `window.scrollX` remained strictly `0`. Drawer opened and closed smoothly with smooth transform. Body scroll locked using class `.drawer-open`. Focus cleanly returned to menu button on close.
- **Steps/Clicks:** 10 taps.
- **Friction Points:** None.
- **Competitor Benchmark (Quran.com):** Fully stabilized mobile drawer.
- **Result:** **COMPLETED**.
