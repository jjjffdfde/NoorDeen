# PROJECT UNDERSTANDING — NoorDeen Islamic Knowledge Portal

**Document status:** Verified against the working tree at commit `81de7e4` (branch `main`, clean tree).
**Later note (26 October 2026):** this is a snapshot of the *starting* state. The tree has since gained 10 articles, a lecture library and a rebuilt APK. Current figures are in `reports/CONTENT_COUNTS.md` (47 pages, 1,473 assertions, 5.94 MB APK).
**Audit date:** 26 October 2026
**Method:** Direct filesystem inspection, `git` inspection, execution of the existing test suite, and reading of every source module. No file was modified during the audit that produced this document.

---

## 1. What this project actually is

NoorDeen is a **static, zero-build-step website** written in plain HTML, CSS and vanilla JavaScript. It is published from the `public/` directory to GitHub Pages at:

`https://jjjffdfde.github.io/NoorDeen/`

A **Capacitor 5** Android wrapper bundles the same `public/` directory into an APK. There is no server-side rendering, no framework runtime, and no database. `server.js` is a small development/static file server only; it is not required for production hosting.

### Verified runtime topology

| Layer | Real source | Notes |
| :--- | :--- | :--- |
| Website | `public/**/*.html`, `public/css/main.css`, `public/js/*.js` | Published verbatim by GitHub Pages |
| Dev server | `server.js` (140 lines, zero dependencies) | Clean-route aliases, `/api/health`, `/api/languages` |
| PWA | `public/manifest.json`, `public/service-worker.js` | Cache `islamic-portal-shell-v4` |
| Android | `android/` + `capacitor.config.json` | `appId com.islamicknowledge.portal`, `webDir public` |
| CI | `.github/workflows/deploy-pages.yml` | Builds APK with Gradle, copies to `public/downloads/`, deploys `public/` |
| Tests | `test/run-tests.js` | 38 suites, 1,250 assertions |

### Dead / unused code (verified)

The following files exist but are **not part of the shipped product**:

- `next.config.js`, `tailwind.config.js`, `tsconfig.json`
- `src/` TypeScript files
- `package.json` lists no `next` or `react` dependency, and there is no `app/` or `pages/` directory.

`index.html` at the repository root is only a redirect to `public/index.html`; it is **not** published (GitHub Pages serves `public/`).

---

## 2. Page inventory (verified)

- **25 root HTML pages** in `public/`
- **11 article pages** in `public/articles/` (10 published articles + 1 library index)
- **Total: 36 HTML pages**, matching exactly the 36 `<loc>` entries in `public/sitemap.xml`

Root pages: `index`, `quran`, `hadith`, `duas`, `kalimas`, `seerah`, `prophets`, `sahaba`, `history`, `pillars`, `salah-guide`, `wudu-guide`, `janazah-guide`, `eid-guide`, `prayer-times`, `tasbih`, `zakat-calculator`, `calendar`, `bookmarks`, `download-app`, `about`, `contact`, `sources`, `privacy`, `terms`.

Article pages: `beginners-guide-to-islam`, `how-to-read-and-understand-quran`, `quran-translation-vs-tafsir`, `tawhid-and-the-shahadah`, `five-pillars-of-islam`, `salah-complete-beginners-guide`, `wudu-ghusl-tayammum-guide`, `hadith-and-sunnah-authenticity`, `daily-adhkar-and-supplications`, `zakat-educational-calculation-guide`.

### Link integrity (verified programmatically)

- Broken internal link targets: **0**
- Root-relative links that would break under the `/NoorDeen/` subpath: **0**
- Sitemap URLs with no local file: **0**
- HTML files missing from the sitemap: **0**

---

## 3. Data layer

All canonical data lives in `public/js/data.js` as a single global `ISLAMIC_DATA` object (no ES module exports; it is loaded via a classic `<script>` tag).

| Dataset | Verified count | Notes |
| :--- | ---: | :--- |
| `surahs` | 114 | Metadata only (name, English name, ayah count, revelation type, juz start) |
| `juzList` | 30 | Start/end surah and ayah boundaries |
| `offlineSurahs` | 10 surahs / **49 ayahs** (legacy fallback) | Superseded by the bundled corpus; retained only if a chunk cannot be loaded |
| Bundled Quran corpus | **114 surahs / 6,236 ayahs** | `public/data/quran/surahs/*.json` + `manifest.json`; Arabic, English, Urdu, transliteration |
| `hadiths` | 101 | Fields: `id, collection, number, book, ar, en, ur, narrator, grade, topic` |
| `kalimas` | 6 | — |
| `duas` | 102 | Fields: `id, cat, title, ar, tr, en, ur, target, ref`; 19 categories |

### Quran reader behaviour (`public/js/quran.js`)

- The reader first asks `QuranStore.getSurah(n)` (memory → IndexedDB → service-worker cache → network) for the bundled corpus.
- If a chunk is unavailable, it falls back to the legacy `offlineSurahs` entry, then to `https://api.alquran.cloud/v1/surah/{n}/editions/{editions}`.
- Audio streams from `https://everyayah.com/data/{reciter}/{surah}{ayah}.mp3`.
- Therefore **the Quran text is fully offline** (114 surahs / 6,236 ayahs); recitation audio and lecture video are not.

### Search (`public/js/search.js`)

Hand-built index covering: surah aliases, 20 educational pages, seerah chapters, sahaba profiles, prophet stories, history eras, offline ayahs, hadiths, kalimas and duas. Includes a phonetic normaliser for Roman Urdu and Arabic/Urdu script normalisation. It is **not** a full-text index of the long-form articles.

---

## 4. Internationalisation

`public/js/i18n.js` defines **40 language entries**, but only **11 translation dictionaries** (`en, ar, ur, id, tr, fr, bn, hi, ms, fa, es`), each with roughly 50 keys. Every page carries only **9–13 `data-i18n` attributes**, and the article bodies are English-only. The honest description is:

> The global UI chrome supports partial translation; the educational content is English-first.

Any claim of a fully localised 40-language library is inaccurate.

---

## 5. PWA and offline behaviour

- `public/manifest.json` declares the app name, icons and theme.
- `public/service-worker.js` uses **relative `./` paths**, which is correct for the `/NoorDeen/` subpath.
- Strategy: network-first for navigation, cache-first for static assets, separate audio cache.
- Cache version: `islamic-portal-shell-v4`.
- **Offline reality:** the shell, CSS, JS, all HTML pages and the 10 bundled surahs work offline. Quran text for the other 104 surahs, recitation audio and the whole video library require a network connection.

The homepage and `download-app.html` previously implied a complete offline Quran and Tafsir Ibn Kathir. These claims were inaccurate and are corrected in this work (see `reports/OFFLINE_VERIFICATION.md`).

---

## 6. Android

| Property | Verified value |
| :--- | :--- |
| `applicationId` | `com.islamicknowledge.portal` |
| `versionCode` / `versionName` | `10200` / `1.2.0` |
| `minSdk` / `targetSdk` / `compileSdk` | `22` / `34` / `34` |
| `buildToolsVersion` | `36.0.0` |
| Web assets | `android/app/src/main/assets/public` (copy of `public/`, excluding `downloads/`) |
| Published APK | `public/downloads/islamic-portal-release.apk`, 8,364,255 bytes, SHA-256 `a5f86e4f54829d379d9d5055e0cf4d07d73ef65b8f08da4bafa7f007419edd61` |

### Verified Android defects

1. **Plaintext signing credentials** are committed in `android/app/build.gradle` (`storePassword`, `keyPassword`). This is a security defect. It was **not** changed in this session because rotating keys is an owner decision and would invalidate existing installs; it is recorded as a P0 risk in `reports/REMAINING_WORK.md`.
2. **The shipped APK is stale.** It embeds a nested copy of itself and the offline ZIP under `assets/public/downloads/`. `scripts/build-android-assets.cjs` now skips `downloads/`, and the current source tree has no such folder, so the *source* is fixed — but the published binary predates the fix and cannot be rebuilt locally.
3. **Local build is blocked.** `android/local.properties` points to `C:\Program Files\Unity\Hub\Editor\6000.6.4f1\Editor\Data\PlaybackEngines\AndroidPlayer\SDK`, which does not exist. No Android SDK was found in common locations, and `ANDROID_HOME` is empty. Java 17 is present and Gradle 8.2.1 is cached, but an APK cannot be produced without the SDK.

---

## 7. Test suite

`test/run-tests.js` runs 38 suites / **1,250 assertions**. Baseline result on the unmodified tree:

```
1,250 tests executed, 1,250 passed, 0 failed
```

The suite covers file integrity, CSS tokens, i18n, Quran data, astronomy maths, HTTP routing, PWA, SEO metadata, Android scaffolding, content depth, and the first article batch.

---

## 8. Verified content-integrity issues found during audit

1. Homepage and download page overclaimed offline Quran coverage and Tafsir Ibn Kathir availability.
2. `reports/REMAINING_WORK.md` and `reports/CONTENT_COUNTS.md` contained stale figures (e.g. 45 hadiths / 50 duas; APK size 1.16 MB) that contradict the actual data (101 / 102; 8.36 MB).
3. No `AGENTS.md` exists anywhere in the repository, despite the brief assuming one. This is reported as absent, not invented.
4. The video library for Dr. Israr Ahmed did not exist as a route, despite being a core requirement.

---

## 9. Build and run commands (verified)

```powershell
node server.js            # local static server on :3000
node test/run-tests.js    # 38 suites / 1,250 assertions
node scripts/build-android-assets.cjs   # sync public/ into Android assets
```

`npm` scripts exist in `package.json`, but PowerShell execution policy blocks `npm.ps1` on this machine; invoke `node <file>` directly instead.

---

## 10. Summary judgement

NoorDeen is a real, functioning static Islamic library with genuine content and a genuine (if stale) Android build. Its strengths are breadth of pages, a working Quran reader with audio, 101 hadiths, 102 duas, 10 long-form articles and a passing test suite. Its weaknesses are an over-broad offline claim, partial localisation, a stale APK, committed signing secrets, and — before this session — no Dr. Israr Ahmed video library.
