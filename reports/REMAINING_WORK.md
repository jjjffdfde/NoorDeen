# NoorDeen — Remaining Work

**Updated:** 27 October 2026
**Status:** Batch 5 (four law/employment articles) is integrated and verified; the lecture-catalog, search, URL-resolution and Daily Companion defects remain fixed. The site is usable. It is not complete; content expansion and device-level Android verification are the largest open items.

**Last successful test:** `node test/run-tests.js` → **1,663 executed / 1,663 passed / 0 failed** (Suites 1–44). Browser checks: all four Batch 5 pages render with correct H1/TOC/schema and 0 console errors; `business ethics`, `contract promises`, `debt repayment` and `workers wages` return the correct first result; the article index filter returns 1 / 3 / 3 / 1 and resets to 33; lecture catalog still renders 148 cards with `fetch` blocked. Post-change static/HTTP recheck of the four new pages: 41 unique destinations, 0 failures.

**Live deployment:** the previous Batch 4 deployment (`gh-pages` `044fea4`) was verified live; the Batch 5 deployment is pending in this cycle (see `FINAL_AUDIT_RESULTS.md` for the final commit and hashes).

---

## 1. Done in this cycle (for context)

| Item | Verified outcome |
| :--- | :--- |
| Lecture catalog | Embedded `catalog.js`; 148 cards with fetch blocked; honest error + retry when payload missing; search/filters 2/2/17/148 |
| Article-page search | `App.ensureSearchData()` lazy-loads `data.js`; `yaseen`, `intention`, `mercy`, `ayatul kursi` return results |
| Nested result URLs | `resolveUrl` applied; six `zakat` results and six pills HTTP 200 |
| Cookie privacy link | `getBasePath()`; `/privacy.html` 200 from article pages |
| Daily Companion | Local date key; completion-based streak; Friday optional; gap resets to 0 |
| Dua anchor | `#dua-sayyidul-istighfar` corrected |
| Alias ranking | `سورہ واقعہ` → 56; `tabarakallazi` → 67 only |
| Ayatul Kursi | Deep link `surah=2&ayah=255`, highlighted |
| Batch 5 articles | 4 new pages, 9,728 body words total; integrated into search/sitemap/index; browser-verified |
| Stale copy | Download page corrected to 60 pages / ~1.34 MB; About page corrected to 1,663 assertions |
| Tests | 1,663 assertions, 0 failures |
| Builds | Bundle 89 files / 1,401,639 bytes / `a34935…`; APK 98 entries / 1,503,077 bytes / `29ede4…`; version `20261027h`, SW `v21` |

---

## 2. P0 — must be fixed before wider distribution

### 2.1 Release signing material is committed to git

- `android/app/build.gradle` holds the release `storePassword` and `keyPassword` as plaintext literals.
- `android/app/release.keystore` is tracked by git and is not in `.gitignore`.

Anyone with repo access can sign an APK that Android accepts as an update. This was **not** changed in this cycle because rotating the key changes the app's update identity and is an owner decision.

Recommended fix:
1. Move credentials to `~/.gradle/gradle.properties` or environment variables (`NORDEEN_STORE_PASSWORD`), referenced from `build.gradle`.
2. `git rm --cached android/app/release.keystore`, add it and `*.keystore` / `*.jks` to `.gitignore`.
3. Decide whether to keep the existing key (already public — treat as compromised) or generate a new one and accept a new app identity.
4. If the key is rotated, publish the new APK hash and note the identity change on `download-app.html`.

### 2.2 The APK has never been installed

`adb` is not on PATH and no device or emulator is available. Before claiming the app works:

1. Connect a device or start an AVD.
2. `adb install -r public/downloads/islamic-portal-release.apk`
3. Launch, navigate every root page and 2–3 articles, rotate the screen, background/foreground.
4. Enable airplane mode and repeat: verify the 10 bundled surahs, hadith, duas, guides and articles render; verify network-only pages fail with a visible message rather than a blank screen.
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
| Tafsir | 6 verses | All 6,236, or a clearly scoped selection | Largest credibility gap; requires licensed text or a public-domain edition with attribution |
| Articles | 33 published / 23 roadmap topics | 67 more roadmap topics | ~1,500–2,500 body words each; the roadmap already exists |
| Offline Quran | 10 surahs / 49 ayahs | 114 surahs | Full text is a few MB; feasible to bundle once licensing is confirmed |
| Hadith | 101 curated | Full collections or an explicit selection policy | Full Sahih al-Bukhari alone is thousands of records |
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
3. **Performance.** No Lighthouse or Web Vitals run. `data.js` is 246 KB and parsed on every page; `sahaba.html` (431 KB), `hadith.html` (410 KB) and `duas.html` (400 KB) are large single documents.
4. **Deployment verification.** The site was tested from the local Node server, not from GitHub Pages. Canonicals and absolute URLs assume the Pages path.
5. **External dependency check.** Quran Cloud API, the audio CDN and YouTube availability were not re-tested end-to-end.
6. **Responsive verification.** The browser tool cannot change viewport (`innerWidth` stays 1000); breakpoints were reviewed in CSS only.
7. **Translation review.** 11 UI dictionaries exist, but no native-speaker review is recorded; 29 language entries have no dictionary; articles are English-only.
8. **Quran editions.** Only English and Urdu were exercised live; the other 38 are registry-verified only.
9. **Report hygiene.** Older reports (`CONTENT_QUALITY_AUDIT.md`, `MASTER_AUDIT.md`, `APP_INSTALLATION_AND_DISTRIBUTION_REPORT.md`, `TEST_RESULTS.md`, `PAGES_DEPLOYMENT_REPORT.md`) still contain superseded counts and claims. They should be marked historical or rewritten.

---

## 5. P3 — features deliberately deferred

| Feature | Why deferred |
| :--- | :--- |
| Fatwa / Q&A service | Requires institutional authority; NoorDeen is an educational library |
| Sequenced course with saved progress | Needs a content model and progress store |
| Quizzes | Nice-to-have; no content yet |
| Qibla direction | Requires device orientation handling; claims were removed |
| iOS app | Needs Apple Developer membership, macOS/Xcode, App Store review |
| Full translations of the biography libraries | Requires qualified human translators; machine translation of religious text is not acceptable |
| Scholar review board | Requires real scholars agreeing to review; cannot be simulated |
| Audio for hadith and duas | Requires recording or licensing |

---

## 6. Content and claims policy (keep enforcing)

1. Never invent Quran text, translations, hadith numbers, gradings, citations, counts, or test results.
2. If a feature is not bundled, say so in the UI. The tafsir panel is the model.
3. Distinguish records from unique items (148 vs 147) instead of rounding away duplicates.
4. Do not describe a build as device-tested until it has been installed and used.
5. Do not describe the site as fully offline while 104 surahs, audio and video require a network.
6. Keep Arabic source text immutable and separate from translations.

---

## 7. Exact next task

**Write Batch 6: four articles on the Seerah epochs (roadmap topics 41–50).** Use a new `scripts/article-content/batch-6a.cjs`, generate through `scripts/build-articles.cjs`, keep every article between 1,500 and 2,500 body words, cite Qur'anic verses and hadith collections, and add an explicit "not a fatwa / consult a qualified scholar" section where rulings are discussed. Register each in `js/search.js`, `sitemap.xml` and `articles/index.html` (cards #34–37, details block 114–117), then add Suite 45.

Before starting: run `node test/run-tests.js` to confirm the **1,663-assertion** baseline is still green. After the batch: bump the asset version, rebuild the bundle and APK, re-run the suite and the link recheck, and update `CONTENT_INVENTORY.md` / `CONTENT_EXPANSION_LOG.md` / `MODULE_REGISTRY.md` / `MODULE_FUNCTIONAL_TESTS.md` / `FINAL_TEST_RESULTS.md` / `WEBSITE_TEST_RESULTS.md`.
