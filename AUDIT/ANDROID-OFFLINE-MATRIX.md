# Phase 4 — Android & Offline Support Matrix

**Audit Date**: October 2026  
**Auditor**: Senior Mobile & Android Applications Engineer  
**Target Platform**: Android 8.0+ (API Level 26+)  
**Packaging Architecture**: Capacitor 6 / Web Hybrid Standalone Application

---

## 1. Offline Capability by Module

| Module | Offline Status | Storage Mechanism | User Experience in Airplane Mode |
| :--- | :--- | :--- | :--- |
| **App Shell & Nav** | Full Bundled | Service Worker / Local Webview | Instant load, zero network required |
| **All 114 Surahs Meta** | Full Bundled | `public/js/data.js` | Full directory, search, metadata offline |
| **Key Surahs Text** | Full Bundled | `public/js/data.js` | Complete Arabic, EN & UR translations for Surahs 1, 36, 67, 112, 113, 114 & Ayatul Kursi |
| **Other Surahs Text** | Online + Cached | Al-Quran Cloud API + IndexedDB | Loaded via API when online; cached locally for subsequent offline reading |
| **Quran Audio** | Downloadable / Cached | EveryAyah CDN + Cache API | Streams online; download button allows storing individual Surah MP3s locally for offline playback |
| **Hadith Library** | Full Bundled | `public/js/data.js` | 100% functional offline with search & filters |
| **Six Kalimas** | Full Bundled | `public/js/data.js` | 100% functional offline with translations |
| **Daily Duas & Adhkar** | Full Bundled | `public/js/data.js` | 100% functional offline with interactive counter |
| **Digital Tasbih** | Full Bundled | Web Audio API Synth | 100% functional offline with audio chime synthesis |
| **Prayer Times** | Full Offline | Solar Math Engine | Calculated on-device without network |
| **Zakat Calculator** | Full Offline | Formula Engine | Calculated on-device without network |
| **Hijri Calendar** | Full Offline | Intl.DateTimeFormat | Calculated on-device without network |
| **Bookmarks** | Full Offline | Browser `localStorage` | Stored locally, persists across launches |
| **Seerah & History** | Full Bundled | Static HTML | 100% readable offline |
| **Prophets & Sahaba** | Full Bundled | Static HTML | 100% readable offline |
| **Salah & Wudu Guides**| Full Bundled | Static HTML | 100% readable offline |
| **Five Pillars** | Full Bundled | Static HTML | 100% readable offline |

---

## 2. Progressive Web App (PWA) Offline Engine

To ensure full offline capabilities across both standard browsers and mobile WebViews:
1. **Web App Manifest (`public/manifest.json`)**: Configures application name, theme colors (`#0F5132`), icons (192x192, 512x512), standalone display mode, and orientation lock.
2. **Service Worker (`public/service-worker.js`)**:
   - **Cache-First Strategy** for application shell, stylesheets, icons, and JavaScript bundles.
   - **Network-First with Cache Fallback** for external APIs.
   - **Audio Cache**: Dedicated cache storage (`islamic-portal-audio-v1`) for downloaded offline recitation files.
   - **Offline Fallback**: Displays dedicated offline interface when a remote asset is requested while disconnected.

---

## 3. Standalone Android Project (`android/`)

- Built using modern Capacitor Android architecture.
- Package ID: `com.islamicknowledge.portal`
- App Name: `Islamic Knowledge Portal`
- Zero server dependency: Points directly to local bundled assets (`capacitor.config.json` configured with `webDir: "public"`).
