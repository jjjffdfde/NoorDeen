# ACTUAL PROJECT MAP — NoorDeen

**Commit:** `81de7e4` · **Branch:** `main` · **Tree:** clean at audit start
**Later note (26 October 2026):** this map describes the starting state. Ten articles, `dr-israr-ahmed.html` and `data/dr-israr/catalog.json` were added afterwards; see `reports/CONTENT_INVENTORY.md` for the current 47-page map.
**Live URL:** `https://jjjffdfde.github.io/NoorDeen/`
**Publish root:** `public/`

This map records what exists, where it lives, and whether it is live, generated, or dead code.

---

## 1. Top-level layout

```
E:\islamic websiye\
├── public\                 ← THE LIVE WEBSITE (GitHub Pages root)
├── android\                ← Capacitor Android project
├── test\                   ← Node test suite
├── scripts\                ← Build / sync / deploy helpers
├── reports\                ← Audit and status documents
├── .github\workflows\      ← CI: APK build + Pages deploy
├── server.js               ← Local dev static server
├── capacitor.config.json   ← Capacitor config
├── package.json            ← Scripts + Capacitor deps
├── index.html              ← Redirect only (NOT published)
├── next.config.js          ← DEAD CODE
├── tailwind.config.js      ← DEAD CODE
├── tsconfig.json           ← DEAD CODE
└── src\                    ← DEAD CODE (unused TypeScript)
```

---

## 2. `public/` — live website

### 2.1 Pages (25 root + 11 articles = 36)

| Group | Files |
| :--- | :--- |
| Core | `index.html`, `about.html`, `contact.html`, `sources.html`, `privacy.html`, `terms.html` |
| Quran | `quran.html`, `bookmarks.html` |
| Hadith & Duas | `hadith.html`, `duas.html`, `kalimas.html` |
| Biography & History | `seerah.html`, `prophets.html`, `sahaba.html`, `history.html` |
| Worship guides | `pillars.html`, `salah-guide.html`, `wudu-guide.html`, `janazah-guide.html`, `eid-guide.html` |
| Utilities | `prayer-times.html`, `tasbih.html`, `zakat-calculator.html`, `calendar.html` |
| Distribution | `download-app.html` |
| Articles | `articles/index.html` + 10 article pages |

### 2.2 CSS

- `public/css/main.css` — the single real stylesheet (design tokens, layout, components, dark theme, print styles).
- `public/css/styles.css` — 141-byte stub, effectively unused.

### 2.3 JavaScript modules (load order)

| File | Role |
| :--- | :--- |
| `js/config.js` | Feature flags, AdSense config (disabled), cookie consent |
| `js/data.js` | Canonical datasets (`ISLAMIC_DATA`) |
| `js/i18n.js` | 40 language entries, 11 dictionaries, DOM translation |
| `js/tools.js` | Prayer-time astronomy, Hijri calendar maths, Zakat maths |
| `js/search.js` | Universal phonetic search index |
| `js/quran.js` | Quran reader, audio, bookmarks, study data |
| `js/app.js` | App shell: drawer, theme, PWA install, search modal, daily content |
| `js/sahaba-urdu.js` | Urdu supplements for sahaba profiles |

### 2.4 Assets and data

- `manifest.json` — PWA manifest
- `service-worker.js` — cache `islamic-portal-shell-v4`
- `sitemap.xml` — 36 URLs, all resolvable
- `robots.txt`
- `data/audio/reciters.json`
- `data/quran-translations/registry.json`
- `data/tafsir/registry.json`, `data/tafsir/study-content.json` (32 thematic profiles)
- `icons/`, `images/`
- `downloads/islamic-portal-release.apk`, `downloads/islamic-portal-offline-bundle.zip`, `downloads/CHECKSUMS.sha256`

---

## 3. `android/` — Capacitor wrapper

| Path | Purpose |
| :--- | :--- |
| `android/app/build.gradle` | App ID, SDK levels, signing config (contains plaintext passwords) |
| `android/app/src/main/AndroidManifest.xml` | INTERNET + ACCESS_NETWORK_STATE only |
| `android/app/src/main/assets/public/` | Bundled copy of the website |
| `android/app/src/main/assets/capacitor.config.json` | Copied config |
| `android/app/release.keystore` | Committed signing keystore |
| `android/gradle/wrapper/` | Gradle 8.2.1 wrapper |
| `android/local.properties` | Points to a **non-existent** Unity Android SDK |

**Build blocker:** the SDK path above is invalid, no other SDK exists, `ANDROID_HOME` is empty.

---

## 4. `scripts/`

| Script | Function | Status |
| :--- | :--- | :--- |
| `build-android-assets.cjs` | Copies `public/` → Android assets, skipping `downloads/` | Correct and safe |
| `build-complete-apk.cjs` | Hand-crafts AXML/ZIP to assemble an APK | Legacy/alternate path; treat with suspicion |
| `build-offline-bundle.cjs` | Creates the offline ZIP | Works |
| `deploy-ghpages.cjs` | Deploys to `gh-pages` | Works |
| `seo-pwa-enhancer.js` | SEO/PWA metadata helper | Present |
| `verify-live-deployment.cjs` | Live-site checks | Present |

---

## 5. `test/`

- `test/run-tests.js` — the authoritative suite: **38 suites, 1,250 assertions, all passing** at baseline.
- `test/inspect-nav.cjs`, `test/apply-canonical-header.cjs` — helper utilities.

---

## 6. `reports/` (existing before this session)

25 markdown documents plus `audit-inventory-data.json`. Several contain stale figures that conflict with the actual data:

| Report | Stale claim | Actual |
| :--- | :--- | :--- |
| `CONTENT_COUNTS.md` / `REMAINING_WORK.md` | 45 hadiths, 50 duas | 101 hadiths, 102 duas |
| `ANDROID_BUILD_REPORT.md` | APK 1.16 MB | 8,364,255 bytes (≈8.36 MB) |

New reports created this session: `PROJECT_UNDERSTANDING.md`, `ACTUAL_PROJECT_MAP.md`, `BASELINE_TEST_RESULTS.md`, plus updates to the content/video/test reports.

---

## 7. Source-of-truth rules for future sessions

1. **Edit `public/`, never `android/app/src/main/assets/public/`.** The latter is generated by `scripts/build-android-assets.cjs`.
2. **Never edit `public/downloads/*` by hand.** Those are build artifacts.
3. **`public/js/data.js` is the canonical religious dataset.** Do not duplicate hadith/dua data inside HTML.
4. **`public/sitemap.xml` must list every HTML page.** The test suite checks this.
5. **Keep all links relative.** Absolute `/` paths break on GitHub Pages under `/NoorDeen/`.
6. **Never claim offline audio or video.** The Quran text (114 surahs) is bundled; recitation audio and lecture video are not.
