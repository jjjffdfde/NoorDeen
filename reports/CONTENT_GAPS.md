# NoorDeen — Content Gaps

**Updated:** 28 October 2026
**Scope:** what is still missing or limited after the Batch 5 release. Closed items are listed briefly in section 1 so this file is not mistaken for a stale wish-list.

---

## 1. Closed since the first audit

| Gap | Closed with | Verified |
| :--- | :--- | :--- |
| Hadith library too small | 101 curated records across 6 collections | 101 cards; search, collection/topic/grade filters, copy |
| Duas too few | 102 entries, 17 category filters | 102 cards; morning filter → 7; counter and copy |
| No glossary | 135 searchable terms with categories and Arabic | Homepage glossary search |
| No long-form library | 37 articles, 75,952 body words | 1,538–3,391 words each; TOC, schema, bibliography |
| No lecture library | 148 Dr. Israr records / 147 unique uploads | Search "Arbaeen" → 73; series filter → 9 |
| Sahaba count mislabelled | 52 monographs, 6 cohorts | Filter → 14 women, reset → 52 |
| Missing Arabic in sahaba/history | Restored from git HEAD as UTF-8 | 6,696 Arabic chars in sahaba; 0 mojibake |
| Stale download hashes | Network-first `CHECKSUMS.sha256` + `{cache:'no-store'}` | Displayed hashes match files |
| No keyboard skip link | Global injection by `app.js` | Present on all pages; target and CSS verified |
| Offline Quran only 10 surahs / 49 ayahs | 114 surahs / 6,236 ayahs bundled as JSON chunks and pre-cached by the service worker | Suite 45 (114 files, 6,236 ayahs) + browser render of Ya-Sin (83/83) and Al-Kahf (110/110) |
| No persistent player state or khatam tracking | Player state in `localStorage`; khatam planner with 15/30/60-day goals | Reload restored surah 18 / repeat / 1.25×; khatam showed 110 ayahs / 1.8% |

---

## 2. Open gaps, ranked

### P1 — credibility and coverage

| Gap | Current | What would close it | Why it is not closed |
| :--- | :--- | :--- | :--- |
| **Tafsir** | 3 verbatim editions (Jalalayn EN 6,236; Jalalayn AR 6,010; asbab AR 275) + 6 editorial summaries | English asbab translation if a licensed one is found; owner decision on the Jalalayn EN licence | Licensing and editorial review; inventing text is not an option |
| **Roadmap articles** | 27 of 100 topics (37 articles incl. additional topics) | 73 more roadmap articles at 1,500–2,500 body words | Time; each needs sources and review |
| **Hadith corpus** | 101 curated records | Explicit selection policy plus a larger reviewed set | Full collections are thousands of records and need grading review |
| **Lecture archive** | 10 of 74 tanzeem.org pages | Continue the same scrape-and-verify method | Time; must preserve duplicate handling and source links |
| **Scholar review** | None | Named reviewers with dates per module | Cannot be simulated |

### P2 — product and verification

| Gap | Detail |
| :--- | :--- |
| **APK install not tested** | No `adb`, emulator or device in this environment. Build structure and v1 signature verified only. |
| **No v2/v3 signature** | `apksigner` and Android SDK build-tools are unavailable. `targetSdk 34` devices may reject a v1-only APK. |
| **In-app download links** | `downloads/` is excluded from APK and ZIP; the download page's file links cannot resolve inside the app. |
| **Responsive verification** | Breakpoints exist (991/768/600/480/360), but the browser tool cannot change viewport (`innerWidth` stays 1000). 320/375/768/1024/1440 were reviewed in code, not visually. |
| **Screen reader** | No NVDA/JAWS/VoiceOver session. Heading-level jumps exist on 23 pages (`h2 → h4`). |
| **Contrast** | Palette pairs were not measured with a contrast calculator. |
| **Cross-browser** | Only Chromium was exercised. Firefox, Safari/iOS and Samsung Internet are untested. |
| **Performance measurement** | No Lighthouse or CrUX data. `data.js` is 246 KB and parsed on every page; `sahaba.html` is 441 KB. |
| **Translation** | 11 of 40 language entries have UI dictionaries; articles are English-only. No native review recorded. |
| **Quran editions** | 40 registered; English, Urdu and transliteration bundled for all 6,236 ayahs; the other 37 validated structurally only. |
| **Audio/video playback** | URL construction verified; playback not watched end-to-end (headless environment). |

### P3 — deliberately deferred

Fatwa/Q&A service, sequenced courses with progress, quizzes, qibla direction, iOS app, full human translation of the biography libraries, audio for hadith/duas. Each needs authority, licensing or platform access that the project does not have.

---

## 3. Claim discipline

The site must not claim:

- that tafsir is complete or verbatim;
- that the offline bundle contains recitation audio or lecture video;
- that 40 languages are fully translated;
- that the APK has been device-tested or is v2/v3 signed;
- that any content carries scholarly endorsement or a fatwa;
- that performance or accessibility has been certified.

Where a limit exists, the UI states it. The tafsir panel, download page, language modal and lecture page are the reference implementations of this policy.
