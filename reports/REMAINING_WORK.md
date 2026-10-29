# NoorDeen — Remaining Work

**Updated:** 29 October 2026
**Status:** Phase 1 (full offline Quran) and Phase 2 (verbatim tafsir, asbab al-nuzul and thematic index) are complete and verified. The site is usable offline. It is not complete: article expansion, Android device verification, signing and the English Jalalayn licence decision remain the largest open items.

**Last successful test:** `node test/run-tests.js` → **1,864 executed / 1,864 passed / 0 failed** (Suites 1–48). Browser checks: Study Mode rendered Jalalayn English with attribution, asbab Arabic RTL reports, the explicit Arabic gap state, and the labelled NoorDeen editorial summary; the thematic index rendered 30 chips and 40 capped mercy references; tafsir chunk 003 was cached on demand with 0 console errors.

**Live deployment:** Phase 2 is live at `gh-pages` commit `5c135b90732c3b3357aab442be70f2d77ea5c411` (tree from `71350d1:public`) on `https://jjjffdfde.github.io/NoorDeen/`: SW `v23`, About states 1,864 assertions, tafsir manifest/themes/chunks served, APK `e1b2d5b2…` / 5,096,957 bytes, bundle `9dde2ee3…` / 4,957,506 bytes, 60 sitemap URLs, `offline.html` live with `noindex`. The GitHub Pages CDN served the previous About page for several minutes (`max-age=600`); the re-check after cache expiry passed.

---

## 1. Done in Phase 1 (historical; current counts in §1A)

| Item | Verified outcome |
| :--- | :--- |
| Quran corpus | 114 chunks, 6,236 ayahs, 4,653,659 bytes; per-surah counts validated against canonical metadata |
| Translation coverage | Arabic (Uthmani), English (Saheeh International), Urdu (Jalandhry), transliteration for every ayah |
| Offline storage | IndexedDB `noordeen-quran` + `islamic-portal-quran-v1` cache with 114 entries |
| Reader integration | `QuranStore.getSurah()` preferred; Ya-Sin 83/83 and Al-Kahf 110/110 rendered |
| Player | Persistent surah/ayah/reciter/speed/repeat; repeat off/ayah/3×/5×/surah; speeds 0.75×/1×/1.25×; Media Session handlers |
| Khatam planner | 15/30/60-day goals; 30-day → 208 ayahs / 21 pages per day; mark-surah-complete, reset, cached-surah count |
| Offline shell | `offline.html` pre-cached, `noindex`, linked to the cached Quran; SW `v22` |
| Copy corrections | Homepage FAQ/meta, About, download page and bundle README now state 114 surahs; removed the false "v1, v2 and v3 signed" claim |
| Tests | 1,710 assertions, 0 failures, 46 suites |
| Builds | Bundle 206 files / 3,010,751 bytes / `4fbb2c…`; APK 215 entries / 3,127,079 bytes / `1a7e02…`; version 1.3.0 (build 10300), SW `v22` |

---

## 1A. Done in this cycle (Phase 2)

| Item | Verified outcome |
| :--- | :--- |
| Tafsir corpus | 114 chunks; Jalalayn English 6,236/6,236, Jalalayn Arabic 6,010/6,236, asbab 275 verses / 50 surahs / 200 reports; 5,781,739 bytes |
| Ingestion | `scripts/fetch-tafsir.cjs` (`--resume`, `--check`, `--limit`); coverage, range, blank, HTML and U+FFFD checks; Surah 96 anomaly recorded |
| Rights metadata | `manifest.json` + rewritten `registry.json`: author, translator, publisher, licence, rights note and measured coverage per edition |
| Offline store | `tafsir-store.js`: IndexedDB `noordeen-tafsir`, memory → IDB → HTTP, chunk validation, manifest/edition/coverage APIs |
| Study Mode | Jalalayn EN, Jalalayn AR, asbab AR and NoorDeen editorial summary; edition/rights notes, RTL Arabic, explicit gap states, race-safe async rendering |
| Thematic index | 30 themes / 5,639 keyword matches; searchable UI in `quran.html`; Suite 48 recomputes every count |
| Service worker | `v23`; `islamic-portal-tafsir-v1`; manifest + themes pre-cached, surah chunks cached on demand |
| Tests | 1,864 assertions, 0 failures, 48 suites |
| Builds | APK 333 entries / 5,096,957 bytes / `e1b2d5b2…`; bundle 324 files / 4,957,506 bytes / `9dde2ee3…`; version 1.3.0 (build 10300), SW `v23` |

---

## 2. P0 — must be fixed before wider distribution

### 2.1 Release signing material is committed to git

- `android/app/build.gradle` holds the release `storePassword` and `keyPassword` as plaintext literals.
- `android/app/release.keystore` is tracked by git and is not in `.gitignore`.

Anyone with repo access can sign an APK that Android accepts as an update. This was **not** changed because rotating the key changes the app's update identity and is an owner decision.

Recommended fix:
1. Move credentials to `~/.gradle/gradle.properties` or environment variables (`NOORDEEN_STORE_PASSWORD`), referenced from `build.gradle`.
2. `git rm --cached android/app/release.keystore`, add it and `*.keystore` / `*.jks` to `.gitignore`.
3. Decide whether to keep the existing key (already public — treat as compromised) or generate a new one and accept a new app identity.
4. If the key is rotated, publish the new APK hash and note the identity change on `download-app.html`.

### 2.2 The APK has never been installed

`adb` is not on PATH and no device or emulator is available. Before claiming the app works:

1. Connect a device or start an AVD.
2. `adb install -r public/downloads/islamic-portal-release.apk`
3. Launch, navigate every root page and 2–3 articles, rotate the screen, background/foreground.
4. Enable airplane mode and repeat: verify all 114 surahs, hadith, duas, guides and articles render; verify network-only pages fail with a visible message rather than a blank screen.
5. Check that in-app links to `downloads/*` fail gracefully (they will 404 — see 2.3).

### 2.3 In-app download links cannot resolve

`public/downloads/` is excluded from both the APK assets and the ZIP bundle. Inside the installed app, the download page's APK/ZIP/checksum links point at files that are not there. The checksum fields already fall back to "Unavailable — open CHECKSUMS.sha256", but the buttons still look clickable.

Fix options: hide the download section when running inside the app, or point those links at the live website.

### 2.4 APK has no v2/v3 signature

The APK carries a valid JAR signature (v1, SHA256withRSA, 2048-bit, certificate valid to 2054-03-12) but no `APK Sig Block 42`. `apksigner` and the Android SDK build-tools are not installed here, so this could not be added or verified. Modern Android generally requires v2 or later for install; treat installability as unproven until 2.2 is done.

---

## 3. P1 — biggest content gaps

| Gap | Current | Target | Notes |
| :--- | :--- | :--- | :--- |
| Tafsir | **Done (Phase 2)** — Jalalayn EN 6,236; Jalalayn AR 6,010; 6 editorial summaries | Owner decision on the English translation licence; optional collation against a printed edition | English translation is © Royal Aal al-Bayt, attributed non-commercial use only |
| Asbab al-nuzul | **Done (Phase 2)** — 275 verses / 50 surahs / 200 Arabic reports | English translation if a licensed one is found | Arabic only; absence is stated as absence, not non-existence |
| Thematic index | **Done (Phase 2)** — 30 themes / 5,639 matches | Optional scholarly review of theme definitions | Keyword finding aid, not a thematic tafsir |
| Articles | 33 published / 23 roadmap topics | 67 more roadmap topics | Phase 5; ~1,500–2,500 body words each |
| Hadith | 101 curated | 500+ reviewed records plus narrator (rijaal) notes | Phase 3 |
| Nawawi 40 | Partial (within the 101) | Complete 40 with commentary | Phase 3 |
| Lecture catalog | 10 of 74 archive pages | Remaining 64 pages | Same scrape-and-verify method; keep duplicate handling |

### Article batches still to write

| Batch | Topics | Focus |
| :--- | :--- | :--- |
| 4 | 21–30 | Family, parenting, inheritance, neighbours — **DONE** (4 articles) |
| 5 | 31–40 | Business ethics, contracts, debt and workers' rights — **DONE** (4 articles) |
| 6 | 41–50 | Seerah epochs in depth — **NEXT** |
| 7 | 51–60 | Rightly-guided caliphs |
| 8 | 61–70 | Islamic golden age: science, philosophy, medicine |
| 9 | 71–80 | Death, barzakh, resurrection |
| 10 | 81–90 | Tazkiyah, akhlaq, mental health |
| 11 | 91–100 | Contemporary challenges, science and faith, youth and da'wah |

---

## 4. P2 — quality and verification

1. **Cross-browser testing.** Only Chromium was exercised. Firefox, Safari/iOS and Samsung Internet are untested.
2. **Accessibility audit.** No screen-reader session; 23 pages jump heading levels; contrast ratios were not calculated. The skip link's `:focus` state cannot be triggered in the headless browser, so keyboard activation is implemented but not machine-verified.
3. **Performance.** No Lighthouse or Web Vitals run. `data.js` is 200 KB and parsed on every page; `sahaba.html` (441 KB), `hadith.html` (420 KB) and `duas.html` (409 KB) are large single documents. The Quran corpus adds 4.65 MB, but it is chunked per surah and lazily read.
4. **Deployment verification.** Local-server results and the live GitHub Pages check are recorded separately; canonicals and absolute URLs assume the Pages path.
5. **External dependency check.** Quran Cloud API, the EveryAyah CDN and YouTube availability were not re-tested end-to-end.
6. **Responsive verification.** The browser tool cannot change viewport (`innerWidth` stays 1000); breakpoints were reviewed in CSS only.
7. **Translation review.** 11 UI dictionaries exist, but no native-speaker review is recorded; 29 language entries have no dictionary; articles are English-only.
8. **Quran editions.** English, Urdu and transliteration are bundled for all 6,236 ayahs; the other 37 editions are registry-verified only.
9. **Offline audio.** Audio is cached per surah on play/download; there is no whole-Quran audio bundle, and playback stops on cross-document navigation.
10. **Report hygiene.** Older reports (`CONTENT_QUALITY_AUDIT.md`, `MASTER_AUDIT.md`, `APP_INSTALLATION_AND_DISTRIBUTION_REPORT.md`, `TEST_RESULTS.md`, `PAGES_DEPLOYMENT_REPORT.md`, `BASELINE_TEST_RESULTS.md`, `WEBSITE_TEST_RESULTS.md`) still contain superseded counts. Treat them as historical or rewrite them.

---

## 5. P3 — features deliberately deferred

| Feature | Why deferred |
| :--- | :--- |
| Fatwa / Q&A service | Requires institutional authority; NoorDeen is an educational library |
| Sequenced course with saved progress | Needs a content model and progress store |
| Quizzes | Nice-to-have; no content yet |
| Qibla direction | Requires device orientation handling; claims were removed (Phase 7 target) |
| iOS app | Needs Apple Developer membership, macOS/Xcode, App Store review |
| Full translations of the biography libraries | Requires qualified human translators; machine translation of religious text is not acceptable |
| Scholar review board | Requires real scholars agreeing to review; cannot be simulated |
| Audio for hadith and duas | Requires recording or licensing |

---

## 6. Content and claims policy (keep enforcing)

1. Never invent Quran text, translations, hadith numbers, gradings, citations, counts, or test results.
2. If a feature is not bundled, say so in the UI. The tafsir and asbab panels are the model.
3. Distinguish records from unique items (148 vs 147) instead of rounding away duplicates.
4. Do not describe a build as device-tested until it has been installed and used.
5. The Quran text is complete offline; do not extend that claim to audio, video or the 37 unbundled translations.
6. Keep Arabic source text immutable and separate from translations.
7. Do not claim v2/v3 signing while the APK has only a v1 JAR signature.
8. Do not describe the thematic index as a scholarly thematic classification; it is a keyword finding aid.
9. Do not describe the English Jalalayn translation as public domain; it is © Royal Aal al-Bayt and cleared only for attributed non-commercial use.

---

## 7. Exact next task

**Next task:** **Batch 6 — four articles on the Seerah epochs (roadmap topics 41–50)**, via `scripts/article-content/batch-6a.cjs`, registered in `js/search.js`, `sitemap.xml` and `articles/index.html`.

Alternative: begin Phase 3 (hadith expansion) or obtain the owner's decision on the English Jalalayn translation licence before commercial distribution.

Before starting either: run `node test/run-tests.js` to confirm the **1,864-assertion** baseline is still green. After the batch: bump the asset version, rebuild the bundle and APK, re-run the suite and the link recheck, and update `CONTENT_INVENTORY.md` / `CONTENT_EXPANSION_LOG.md` / `MODULE_REGISTRY.md` / `MODULE_FUNCTIONAL_TESTS.md` / `FINAL_TEST_RESULTS.md`.
