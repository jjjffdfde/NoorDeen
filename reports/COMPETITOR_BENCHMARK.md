# NoorDeen — Competitor Benchmark

**Date:** 26 October 2026
**Purpose:** compare NoorDeen's actual current state against established Islamic reference sites, and be explicit about where it is behind.
**Method note:** competitor observations come from reading their public pages (most recently on 25 October 2026). They were **not** re-crawled for this report, and no traffic, revenue, or user numbers are claimed for anyone. Where a competitor detail is uncertain it is described qualitatively rather than counted.

---

## 1. Sites compared

| Site | What it is best known for |
| :--- | :--- |
| **IslamWeb** (`islamweb.net`) | Very large fatwa/Q&A archive, multilingual, organised by fiqh subject |
| **Dawat-e-Islami** (`dawateislami.net`) | Structured short courses, large translated booklet library, step-by-step ritual instruction |
| **IslamOnline** (`islamonline.net`) | Editorial essays, Seerah and contemporary-life sections, seasonal hubs |
| **IslamiCity** (`islamicity.org`) | Quran/Hadith search, glossary, calculators, quizzes |
| **Islam360** (`theislam360.com`) | Full hadith databases, Arabic/English/Urdu search, offline mobile app |

NoorDeen is a static, client-side site with an Android wrapper. It is much smaller than all five. The point of this benchmark is not to claim parity; it is to choose which gaps matter.

---

## 2. Capability matrix (NoorDeen figures are measured)

| Capability | IslamWeb | Dawat-e-Islami | IslamOnline | IslamiCity | Islam360 | **NoorDeen today** |
| :--- | :---: | :---: | :---: | :---: | :---: | :--- |
| Quran text, 114 surahs | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ via API — **offline only 10 surahs** |
| Multiple translations | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ English + Urdu |
| Surah thematic profiles | ✅ | ✅ | ✅ | ✅ | ✅ | **32 of 114** |
| Word-by-word / grammar | — | — | — | ✅ | ✅ | Partial (Study Mode) |
| Tafsir | ✅ extensive | ✅ | ✅ | ✅ | ✅ | **6 verses only** |
| Hadith | ✅ large | ✅ | ✅ | ✅ | ✅ full collections | **101 curated records** |
| Hadith grading shown | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Duas / adhkar | ✅ | ✅ | ✅ | ✅ | ✅ | **102** |
| Seerah | ✅ | ✅ | ✅ | ✅ | ✅ | **25 chapters** |
| Prophets | ✅ | ✅ | ✅ | ✅ | ✅ | **30 narratives** |
| Sahaba biographies | ✅ | ✅ | ✅ | ✅ | ✅ | **52 monographs** |
| Islamic history | ✅ | ✅ | ✅ | ✅ | ✅ | **12 eras** |
| Fiqh Q&A / fatwa service | ✅ large | ✅ | ✅ | ✅ | — | ❌ none (deliberate) |
| Structured courses with progress | — | ✅ | — | — | — | ❌ one learning-path article |
| Quizzes | — | — | — | ✅ | — | ❌ none |
| Glossary | ✅ | ✅ | — | ✅ | — | ✅ **135 terms (homepage)** |
| Prayer times / qibla | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ prayer times (no qibla) |
| Zakat calculator | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ dual nisab |
| Hijri calendar | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Tasbih counter | ✅ | ✅ | — | ✅ | ✅ | ✅ |
| **Lecture video library** | partial | ✅ | ✅ | ✅ | ✅ | ✅ **148 records / 147 unique, linked to source** |
| Offline desktop bundle | ❌ | partial | ❌ | ❌ | ❌ | ✅ 1.18 MB ZIP, 47 pages |
| Installable app | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ APK built — **not device-tested** |
| Languages | 6+ | 30+ | EN/AR | EN | EN/UR/AR | EN UI, 11 dictionaries, 40 registered |
| Ads / tracking | yes | yes | yes | yes | yes | **none** |
| Scholar review board | yes | yes | yes | yes | yes | ❌ none |

Legend: ✅ present, — not observed, ❌ absent.

---

## 3. Where NoorDeen is genuinely behind

Ordered by how much it matters for a reader:

1. **Tafsir depth.** 6 verses have commentary. A reader who opens Surah al-Kahf 18:10 and taps Tafsir gets an honest "not bundled" message. Competitors have full tafsir. This is the single largest content gap.
2. **Hadith corpus.** 101 curated narrations versus full collections elsewhere. Useful for study, not a reference library.
3. **Quran offline coverage.** 10 of 114 surahs. Competitors' apps bundle the full text.
4. **Article library.** 20 of 100 planned topics. The roadmap is published; the remaining 80 do not exist yet.
5. **No learning structure with progress.** One "new Muslim path" article is not a course. Dawat-e-Islami's sequenced lessons are better for beginners.
6. **No fatwa/Q&A.** Deliberate — but it means readers with a legal question must go elsewhere.
7. **No scholar review.** Content is source-cited but not endorsed by a recognised board.
8. **No iOS app, no quizzes, no qibla, no full translations of the long-form biographies.**
9. **Android build is untested on hardware.**

---

## 4. Where NoorDeen is genuinely ahead (or at least different)

1. **No advertising or tracking.** No analytics, no ad scripts, no third-party requests until a user clicks a lecture. Several competitors monetise with ads.
2. **Privacy-enhanced video embeds.** `youtube-nocookie.com`, loaded only on click.
3. **Honest failure states.** Missing tafsir says so; the download page says 104 surahs need network; the lecture page says coverage is 10 of 74 archive pages.
4. **A real offline desktop bundle** that a reader can keep, at 1.18 MB.
5. **Source links on every lecture record**, with duplicates flagged instead of hidden.
6. **Small enough to audit.** 47 pages, one JSON catalog, one test suite — a reader can check the whole thing.

---

## 5. What we deliberately do not compete on

| Not doing | Why |
| :--- | :--- |
| Issuing fatwas | Requires institutional authority and accountability NoorDeen does not have |
| Re-hosting video or audio | Copyright; the catalog links to the rights holder instead |
| Scraping competitor content | Plagiarism; all articles are written from cited primary sources |
| Machine-translating sacred text | Unreviewed machine translation of religious content is not acceptable |
| Claiming scholarly endorsement | None has been granted |
| Chasing feature count | A smaller, verifiable site is more useful than a broad, unverified one |

---

## 6. Priorities this benchmark implies

| Priority | Action | Why |
| :--- | :--- | :--- |
| P1 | Extend tafsir coverage beyond 6 verses, with clear attribution | Biggest single credibility gap |
| P1 | Publish article batches 3–10 (80 topics) | The roadmap is public; the content is not |
| P1 | Device-test the APK | An untested build is an unknown |
| P2 | Bundle the full Quran text offline | Removes the biggest offline caveat |
| P2 | Expand hadith toward full collections, or state the selection policy more prominently | Reader expectation |
| P3 | Add a sequenced beginner course with saved progress | Beginner retention |
| P3 | Add quizzes and a qibla direction tool | Engagement, low risk |

---

## 7. Limits of this benchmark

- No competitor was re-crawled for this report; features may have changed.
- No quantitative traffic, audience, or revenue comparison is made.
- "Not observed" in the matrix means it was not seen on the public pages reviewed; it does not prove absence.
- NoorDeen's own figures are measured from the repository (see `reports/CONTENT_INVENTORY.md`) and from the test run (see `reports/WEBSITE_TEST_RESULTS.md`).
