# NoorDeen — Offline Verification Report

**Date:** 26 October 2026
**Scope verified:** service worker shell, desktop offline bundle, Android asset package
**Headline:** the site is **partially** offline. Articles, hadith, duas, guides, biographies, history and 10 bundled surahs work without a network. The other 104 surahs, recitation audio, and all lecture videos do **not**.

Earlier versions of this report claimed "100% offline". That claim was wrong and has been removed from the site and from this report.

---

## 1. What works offline, and what does not

| Capability | Offline? | Detail |
| :--- | :---: | :--- |
| Homepage, articles index, 20 articles | ✅ | Static HTML, no network needed |
| Hadith library (101 traditions) | ✅ | Dataset bundled in `js/data.js`, pre-rendered in `hadith.html` |
| Duas & adhkar (102 supplications) | ✅ | Same pattern |
| Six Kalimas | ✅ | Static |
| Sahaba (52 monographs), Prophets (30), Seerah (25 chapters), History (12 eras) | ✅ | Static HTML |
| Worship guides (Salah, Wudu, Ghusl/Tayammum, Janazah, Eid) | ✅ | Static HTML |
| Prayer times, zakat calculator, Hijri calendar, tasbih, bookmarks | ✅ | Client-side computation and `localStorage` |
| Quran text — **10 surahs, 49 ayahs** | ✅ | Bundled in `ISLAMIC_DATA.offlineSurahs`: 1, 36, 67, 97, 108, 109, 110, 112, 113, 114 |
| Quran text — **remaining 104 surahs** | ❌ | Fetched from `api.alquran.cloud`; unavailable offline unless previously cached by the service worker |
| Recitation audio | ❌ | Streamed from a CDN; only files you played before may be in the audio cache |
| Dr. Israr Ahmed lectures (148 records) | ❌ | YouTube embeds; catalog and metadata load offline, video does not |
| Study Mode tafsir beyond 6 bundled verses | ❌ | Only 1:1, 1:2, 1:5, 1:6, 2:255, 112:1 have bundled commentary; the UI says so explicitly |
| Download centre checksums inside the APK | ❌ | `downloads/` is excluded from both the ZIP and the APK |

---

## 2. Service worker (PWA)

- **File:** `public/service-worker.js`
- **Cache:** `islamic-portal-shell-v6` (`CACHE_VERSION = 'v6'`), audio cache `islamic-portal-audio-v1`
- **Pre-cached on install:** 44 entries — all 26 root HTML pages, `manifest.json`, `css/main.css`, 8 JS modules, 6 icons, plus `dr-israr-ahmed.html` and `data/dr-israr/catalog.json`.
- **Article pages are not pre-cached.** They use a network-first navigation strategy: a page you visit online is cached on the way through, so it opens offline afterwards. A page you have **never** visited falls back to `index.html` when offline. This is deliberate (keeps install light) and is a real limitation.
- **Activation** deletes any cache that is not the current shell or the audio cache, which is why the version bump to `v6` clears stale `v5` shells.
- **Audio requests** (`everyayah.com`, `*.mp3`) are cache-first; a miss returns a 503 "Audio unavailable offline" response rather than hanging.
- **External API calls** are network-first with cache fallback.

A stale-cache incident was observed during testing: after 13 pages were changed, the browser kept serving the old shell from `v5`. Verification was therefore repeated on a fresh port with the service worker unregistered and caches cleared. The `v6` bump fixes this for real users.

---

## 3. Desktop offline bundle

| Field | Value |
| :--- | :--- |
| Path | `public/downloads/islamic-portal-offline-bundle.zip` |
| Size | **1,241,211 bytes (1.18 MB)** |
| SHA-256 | `137cd7b22e659a1a846ad8dc4486b3f9eb261ee467a8e5abee42ffb8af01498a` |
| ZIP entries | 75 |
| HTML pages | **47** (26 root + 21 article pages) |
| Nested `.apk` | 0 |
| Nested `.zip` | 0 |
| Included | `islamic-portal-web/` tree, `OFFLINE-INSTRUCTIONS.txt` at root and inside the folder |
| Excluded | `public/downloads/` (prevents a bundle that contains itself) |

Contents spot-checked inside the archive: `islamic-portal-web/dr-israr-ahmed.html`, `islamic-portal-web/data/dr-israr/catalog.json`, `islamic-portal-web/articles/fasting-and-ramadan.html`, and `OFFLINE-INSTRUCTIONS.txt` are all present.

Because it is a static site, opening `index.html` from disk works for reading, but `fetch()`-based features (Quran API, YouTube embeds, checksum manifest) are blocked by `file://` origin rules in most browsers. Serving the folder with a tiny local server is the reliable path; the instructions file says so.

---

## 4. Android package

- **Path:** `public/downloads/islamic-portal-release.apk`
- **Size:** 6,232,774 bytes (5.94 MB)
- **SHA-256:** `87763ba4b3bea482944dd170cb81b0e47cfe03778213ee0852292a928fbab2ed`
- **Bundled web assets:** 47 HTML pages + 74 files under `assets/public/`, service worker `v6`
- **Excluded:** `assets/public/downloads/*` — 0 files. Links to the APK/ZIP/checksums from inside the app will not resolve.
- **Not verified on a device.** `adb devices` returned no attached devices and no emulator was running, so "works in airplane mode" is an expectation from the architecture, not an observation. See `reports/ANDROID_BUILD_REPORT.md`.

---

## 5. Local data and privacy

| Data | Storage | Leaves the device? |
| :--- | :--- | :---: |
| Bookmarks | `localStorage` (`noordeen_bookmarks`) | No |
| Tasbih count | `localStorage` (`noordeen_tasbih_count`) | No |
| Prayer coordinates | `localStorage` (`noordeen_user_coords`) | No |
| Language/theme preference | `localStorage` | No |
| Reading position | `localStorage` | No |

No analytics, advertising, or tracking scripts are loaded by the site. External requests are limited to: Quran Cloud API (surah text), a recitation CDN (audio), and `youtube-nocookie.com` (lecture embeds, only after a click).

---

## 6. How this was verified

1. Parsed the bundle ZIP central directory in Node.js and counted entries, HTML pages and nested archives.
2. Parsed the APK the same way (997 entries) and confirmed 47 HTML pages, no nested archives, no `downloads/` files.
3. Read `service-worker.js` and confirmed cache name, pre-cache list and fetch strategies.
4. Loaded the site in Chromium, unregistered the service worker, cleared caches, and re-tested on a fresh port to avoid stale-shell false positives.
5. Confirmed the download page's wording and that both checksum fields are populated from `CHECKSUMS.sha256`.

**Not verified:** airplane-mode behaviour on a real phone, offline audio playback after a first play, and PWA install prompts on iOS.
