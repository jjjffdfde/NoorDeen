# NoorDeen — Offline Verification Report

**Date:** 28 October 2026 (Phase 1 cycle)
**Scope verified:** service worker shell, full Quran corpus cache, desktop offline bundle, Android asset package
**Headline:** the site is **fully offline for reading**. Articles, hadith, duas, guides, biographies, history and **all 114 surahs / 6,236 ayahs** work without a network. Recitation audio, lecture video and the 37 unbundled translation editions do **not**.

Earlier versions of this report claimed "100% offline" and later "10 surahs offline". Both are superseded: the Quran text is now complete offline, while audio and video are still online-only.

---

## 1. What works offline, and what does not

| Capability | Offline? | Detail |
| :--- | :---: | :--- |
| Homepage, articles index, 33 articles | ✅ | Static HTML; pages are cached on first visit and pre-cached in the bundle/APK |
| Hadith library (101 traditions) | ✅ | Dataset bundled in `js/data.js`, pre-rendered in `hadith.html` |
| Duas & adhkar (102 supplications) | ✅ | Same pattern |
| Six Kalimas | ✅ | Static |
| Sahaba (52 monographs), Prophets (30), Seerah (25 chapters), History (12 eras) | ✅ | Static HTML |
| Worship guides (Salah, Wudu, Ghusl/Tayammum, Janazah, Eid) | ✅ | Static HTML |
| Prayer times, zakat calculator, Hijri calendar, tasbih, bookmarks | ✅ | Client-side computation and `localStorage` |
| Quran text — **all 114 surahs / 6,236 ayahs** | ✅ | `public/data/quran/surahs/NNN.json`; Arabic, English (Saheeh International), Urdu (Jalandhry), transliteration |
| Quran reading position and khatam progress | ✅ | `localStorage` (`islamic_portal_quran_state`, `islamic_portal_player_state`) |
| Quran audio repeat/speed and Media Session controls | ✅ | Logic and state work offline; the audio file itself must be cached |
| Recitation audio | ❌ | Streamed from EveryAyah; only files you played or downloaded before are in the audio cache |
| Dr. Israr Ahmed lectures (148 records) | ❌ | YouTube embeds; catalog and metadata load offline, video does not |
| Study Mode tafsir beyond 6 bundled verses | ❌ | Only 1:1, 1:2, 1:5, 1:6, 2:255, 112:1 have bundled commentary; the UI says so explicitly |
| Download centre checksums inside the APK | ❌ | `downloads/` is excluded from both the ZIP and the APK |

---

## 2. Service worker (PWA)

- **File:** `public/service-worker.js`
- **Cache:** `islamic-portal-shell-v22` (`CACHE_VERSION = 'v22'`), audio cache `islamic-portal-audio-v1`, Quran corpus cache `islamic-portal-quran-v1`
- **Pre-cached on install:** 48 shell entries — all root HTML pages including `offline.html`, `manifest.json`, `css/main.css`, JS modules (including `quran-store.js`), icons, and the Dr. Israr catalogue.
- **Quran corpus pre-cached on install:** all **114** surah chunks in `islamic-portal-quran-v1` (114 cache entries observed in Chromium). Corpus caching is best-effort so one slow chunk cannot abort installation.
- **Article pages are not pre-cached.** They use a network-first navigation strategy: a page you visit online is cached on the way through, so it opens offline afterwards. A page you have **never** visited falls back to `offline.html`, which explains the state and links to the cached Quran and homepage.
- **Activation** deletes legacy shell caches while preserving the audio and Quran corpus caches.
- **Audio requests** (`everyayah.com`, `*.mp3`) are cache-first; a miss returns a 503 "Audio unavailable offline" response rather than hanging.
- **Quran chunk requests** are served from `islamic-portal-quran-v1` first, then network, then a 503 JSON error.
- **External API calls** are network-first with cache fallback.

---

## 3. Desktop offline bundle

| Field | Value |
| :--- | :--- |
| Path | `public/downloads/islamic-portal-offline-bundle.zip` |
| Size | **3,010,751 bytes (2.87 MiB)** |
| SHA-256 | `4fbb2c649e15bb19ac4eeaedf977ef6b5f62c5ada0886268a570f7c2aaada3e0` |
| ZIP entries | 206 |
| HTML pages | **61** (26 root + 34 article pages + `offline.html`) |
| Quran chunks | **114** |
| Nested `.apk` | 0 |
| Nested `.zip` | 0 |
| Included | `islamic-portal-web/` tree, `OFFLINE-INSTRUCTIONS.txt` at root and inside the folder |
| Excluded | `public/downloads/` (prevents a bundle that contains itself) |

Contents spot-checked inside the archive: `islamic-portal-web/quran.html`, `islamic-portal-web/offline.html`, `islamic-portal-web/data/quran/manifest.json`, all 114 files under `islamic-portal-web/data/quran/surahs/`, `islamic-portal-web/js/quran-store.js` and `OFFLINE-INSTRUCTIONS.txt` are present.

Because it is a static site, opening `index.html` from disk works for reading, but `fetch()`-based features (Quran chunk loading, YouTube embeds, checksum manifest) may be blocked by `file://` origin rules in most browsers. Serving the folder with a tiny local server is the reliable path; the instructions file says so.

---

## 4. Android package

- **Path:** `public/downloads/islamic-portal-release.apk`
- **Size:** 3,127,079 bytes (2.98 MiB)
- **SHA-256:** `1a7e021da147303a6e60c6fef8fa05e638f28df0d6c583af192d36ef0bd567d4`
- **Version:** 1.3.0 (build 10300)
- **ZIP entries:** 215, including **114 Quran corpus chunks** under `assets/public/` and 61 HTML pages
- **Excluded:** `assets/public/downloads/*` — links to the APK/ZIP/checksums from inside the app will not resolve.
- **Signature:** v1 JAR only (`jar verified`, SHA256withRSA, 2048-bit); no APK Signature Scheme v2/v3 block.
- **Not verified on a device.** `adb` is unavailable and no emulator/device was attached, so "works in airplane mode" is an expectation from the architecture, not an observation. See `reports/ANDROID_BUILD_REPORT.md`.

---

## 5. Local data and privacy

| Data | Storage | Leaves the device? |
| :--- | :--- | :---: |
| Quran surah chunks | IndexedDB `noordeen-quran` | No |
| Reading position, khatam progress, player state | `localStorage` | No |
| Bookmarks | `localStorage` (`noordeen_bookmarks`) | No |
| Tasbih count | `localStorage` (`noordeen_tasbih_count`) | No |
| Prayer coordinates | `localStorage` (`noordeen_user_coords`) | No |
| Language/theme preference | `localStorage` | No |

No analytics, advertising, or tracking scripts are loaded by the site. External requests are limited to: Quran Cloud API (the 37 unbundled translation editions), the EveryAyah recitation CDN, and `youtube-nocookie.com` (lecture embeds, only after a click).

---

## 6. How this was verified

1. Parsed the bundle ZIP central directory in Node.js: 206 entries, 61 HTML pages, 114 Quran chunks, no nested archives.
2. Parsed the APK the same way: 215 entries, 61 HTML pages, 114 Quran chunks, no nested archives, no `downloads/` files.
3. Read `service-worker.js` and confirmed cache names, pre-cache list, corpus pre-cache and fetch strategies.
4. Loaded the site in Chromium against `http://localhost:3400`, confirmed `islamic-portal-quran-v1` held **114 entries**, the shell held 48, and Ya-Sin rendered 83/83 and Al-Kahf 110/110 ayahs with English and Urdu.
5. Reloaded after setting surah 18 / repeat `ayah` / 1.25× and confirmed the player state and khatam progress were restored.
6. Confirmed the download page's wording and that both checksum fields are populated from `CHECKSUMS.sha256`.

**Not verified:** airplane-mode behaviour with the radio physically disabled on a phone, offline audio playback after a first play, PWA install prompts on iOS, and installation of the APK on a device.
