# NOORDEEN — MASTER REPOSITORY BASELINE & ARCHITECTURAL AUDIT

> **Historical baseline:** figures here (1,250 assertions, 36 pages, 1.16 MB APK, 1.07 MB bundle) describe commit `77010d5` on 25 October 2026. Current state: 47 pages, 1,473 assertions, 5.94 MB APK, 1.18 MB bundle — see `reports/CONTENT_COUNTS.md` and `reports/WEBSITE_TEST_RESULTS.md`.

**Audit Date:** 25 October 2026  
**Auditor / Agent:** Antigravity Advanced Agentic Coding System  
**Repository:** `https://github.com/jjjffdfde/NoorDeen`  
**Live Website:** `https://jjjffdfde.github.io/NoorDeen/`  
**Target Benchmark:** Islam360, IslamWeb, Dawat-e-Islami, IslamOnline, IslamiCity  
**Current Git Branch:** `main` (Tracking `origin/main`)  
**Baseline Git Commit:** `77010d5` (Batch 1 Deep Knowledge Content Expansion)  
**Deployment Method:** Dedicated `gh-pages` branch deployment via `scripts/deploy-ghpages.cjs`  
**Automated Tests Baseline:** **38 Suites, 1,250 Assertions, 0 Failures (100% Pass Rate)**  

---

## 1. Project Directory Structure & Component Inventory

```text
E:\islamic websiye/
├── android/                           # Native Android Capacitor Project
│   ├── app/                           # Android Application Module
│   │   ├── build.gradle               # Gradle build config (compileSdk 34, minSdk 22, targetSdk 34)
│   │   ├── release.keystore           # RSA-2048 signing keystore (alias: noordeen)
│   │   └── src/main/
│   │       ├── AndroidManifest.xml    # App ID: com.islamicknowledge.portal, Version 1.2.0 (10200)
│   │       ├── assets/public/         # Packaged web frontend for 100% offline runtime
│   │       └── res/                   # App icons (mipmap mdpi, hdpi, xhdpi, xxhdpi, xxxhdpi)
│   ├── build.gradle                   # Top-level Gradle configuration (AGP 8.2.1)
│   ├── gradlew.bat / gradlew          # Gradle Wrapper v8.2.1
│   ├── local.properties               # Configured Android SDK directory
│   └── settings.gradle                # Project settings and Capacitor module include
├── AUDIT/                             # Artifact metadata and integrity records
│   ├── apk-metadata.json              # Version, size, SHA-256, build timestamps
│   └── offline-bundle-metadata.json   # Offline distribution bundle inventory
├── data/                              # Canonical raw data sources (Tanzil, Hadith, Duas)
├── public/                            # Live web root served on GitHub Pages
│   ├── articles/                      # Deep Educational Articles Library (Batch 1)
│   │   ├── index.html                 # Master Library Portal & 100-Topic Syllabus
│   │   └── [10 HTML Treatises]        # 10 comprehensive treatises (28,890 words)
│   ├── css/
│   │   └── main.css                   # Unified Editorial Design System & Dark/Light modes
│   ├── downloads/                     # Downloadable distribution artifacts
│   │   ├── CHECKSUMS.sha256           # Cryptographic SHA-256 checksum manifest
│   │   ├── islamic-portal-offline-bundle.zip # Standalone desktop bundle (1.07 MB, 63 files)
│   │   └── islamic-portal-release.apk # Genuine signed Android APK v1.2.0 (1.16 MB)
│   ├── js/                            # Core client-side JavaScript architecture
│   │   ├── app.js                     # Global Application Controller & Subpath Resolver
│   │   ├── config.js                  # Global configuration, base paths, and metadata
│   │   ├── data.js                    # ISLAMIC_DATA: Hadiths, Duas, Prophets, Sahaba, Glossary
│   │   ├── i18n.js                    # 40-Language Framework & 11 Verified Localizations
│   │   ├── quran.js                   # Quranic reader, 114 Surahs, 32 Tafsir profiles
│   │   ├── sahaba-urdu.js             # Companion monographs Urdu localization registry
│   │   ├── search.js                  # Universal client-side search engine (Ctrl+K)
│   │   └── tools.js                   # UISK Prayer engine, Nisab Zakat, Hijri lunar calendar
│   ├── [25 Root HTML Pages]           # Canonical worship guides, tools, and reading portals
│   ├── manifest.json                  # PWA Web Application Manifest (standalone, theme colors)
│   ├── service-worker.js              # Service Worker v5 (offline cache, navigation fallback)
│   └── sitemap.xml                    # 36 indexed canonical URLs with weekly update frequency
├── reports/                           # Comprehensive audit, expansion, and test reports
├── scripts/                           # Build, testing, packaging, and verification automations
│   ├── articles/                      # Modular article generation and content builders
│   ├── build-complete-apk.cjs         # End-to-end Android APK compiler, packager, and signer
│   ├── build-offline-bundle.cjs       # Standalone desktop ZIP bundler
│   ├── deploy-ghpages.cjs             # Automated GitHub Pages tree deployment
│   └── verify-live.cjs                # CDN live response and header verifier
├── test/
│   └── run-tests.js                   # Master 38-suite automated test harness (1,250 assertions)
├── capacitor.config.json              # Capacitor app ID, name, and Android runtime config
├── package.json                       # Project dependencies, scripts, and engine specifications
└── server.js                          # Local development HTTP server with clean routing
```

---

## 2. Technical Stack & Environmental Baseline

| Subsystem | Tool / Technology | Version / Configuration | Verification Status |
|:---|:---|:---|:---|
| **Runtime Environment** | Node.js | v20+ / Windows 11 AMD64 | Verified active |
| **Package Manager** | npm | v11.9.0 (`npm.cmd`) | Verified active |
| **Java JDK** | Microsoft OpenJDK | `17.0.10+7-LTS` (Java 17) | Verified (`java`, `javac`, `jarsigner`, `keytool`) |
| **Android SDK** | Android SDK 34 | Platforms: `android-34`, `android-36`; Build-Tools: `36.0.0` | Located in Unity Hub PlaybackEngines; `local.properties` configured |
| **Build System** | Gradle Wrapper | Gradle 8.2.1 / AGP 8.2.1 | Downloaded, verified working |
| **Cross-Platform Bridge** | @capacitor/core & @capacitor/android | ^5.7.0 | Verified in `package.json` & `android/` |
| **Web Server / Dev** | Native Node.js `http` | Zero external server dependencies (`server.js`) | Verified in Test Suite 6 |
| **Offline Caching** | Service Worker Cache API | Cache Name: `noordeen-v5` | Verified in Test Suites 16 & 35 |
| **Search Engine** | Pure Client-side JS | Multi-token search with Roman Urdu aliases (`search.js`) | Verified in Test Suite 13 |

---

## 3. Reader-Facing Content Inventory Baseline

As of Commit `77010d5`, NoorDeen contains **201,759 visible content words** across **36 HTML pages**:

### A. Core Religious Data Foundations
- **Holy Quran:** Complete 114 Surahs, 6,236 Hafs verses, immutable Arabic Tashkeel, Saheeh International English translation, Fateh Muhammad Jalandhari Urdu translation.
- **Thematic Tafsir Profiles:** 32 comprehensive Surah exegesis profiles in `public/js/quran.js`.
- **Hadith & Sunnah Library:** Exactly **101 authenticated traditions** in `ISLAMIC_DATA.hadiths` and pre-rendered in `hadith.html` with Arabic text, English/Urdu translations, narrators, canonical references (*Bukhari, Muslim, Abu Dawud, Tirmidhi, Nasa'i, Ibn Majah*), authenticity gradings, and Fiqh al-Hadith commentaries.
- **Masnoon Duas & Adhkar:** Exactly **102 source-verified supplications** across 17 life domains in `ISLAMIC_DATA.duas` and pre-rendered in `duas.html` with Arabic, transliterations, translations, repetition counts, and *Hisn al-Muslim* citations.
- **Six Kalimas:** Complete Arabic text, transliteration, English, and Urdu translations in `kalimas.html`.
- **Prophetic Seerah:** Complete 25 chronological chapters in `seerah.html`.
- **Stories of the Prophets:** 30 comprehensive prophetic narratives in `prophets.html`.
- **Sahaba Biographies:** Exactly **52 companion monographs** (33,527 words) in `sahaba.html` with Urdu localization in `sahaba-urdu.js`.
- **Islamic Civilizations:** Comprehensive historical timeline spanning 12 epochs in `history.html`.
- **Encyclopedic Glossary:** Exactly **135 theological and Arabic terms** with Arabic script, transliterations, and classical definitions on `index.html`.

### B. Educational Articles Library (Batch 1)
- 10 in-depth educational treatises in `public/articles/` totaling **28,890 words** (~2,400+ words per article), plus master hub `public/articles/index.html`.
- 100-Topic Master Educational Syllabus documented in `reports/KNOWLEDGE_LIBRARY_ROADMAP_100.md`.

---

## 4. Mobile & Desktop App Distribution Baseline

1. **Android APK Release:**
   - **Path:** `public/downloads/islamic-portal-release.apk`
   - **Version:** `1.2.0` (Version Code: `10200`)
   - **Application ID:** `com.islamicknowledge.portal`
   - **File Size:** `1,215,824 bytes (1.16 MB)`
   - **SHA-256:** `69912a1f6fb5890309fb72307cde94d3bc9696b7b32ae171bf03e8fb08993b06`
   - **Signature:** RSA-2048 self-signed release key (`android/app/release.keystore`), verified by `jarsigner`.
   - **Packaging:** Packages all 36 web pages and assets directly in `assets/public/` for 100% offline standalone usage.

2. **Standalone Desktop Offline Bundle:**
   - **Path:** `public/downloads/islamic-portal-offline-bundle.zip`
   - **File Size:** `1,118,398 bytes (1.07 MB)`
   - **Total Files:** 63 files (includes all 25 root tools + 11 article pages + styles + scripts)
   - **SHA-256:** `fef62da5dd2a975eb12cec895daf04084b6651a3be44f7f7dc47c76176a7f73d`

3. **Progressive Web App (PWA):**
   - Web App Manifest: `public/manifest.json`
   - Service Worker: `public/service-worker.js` (Cache `v5`)
   - Responsive design tested from 320px mobile to 1440px desktop screens.

---

## 5. Automated Quality Verification Baseline

- **Test Suite:** `test/run-tests.js`
- **Total Suites:** 38 Comprehensive Test Suites
- **Total Assertions:** 1,250 Assertions
- **Pass Rate:** **1,250 / 1,250 Passed (100%)**
- **Defects:** 0 Failures, 0 Skipped
- **Live Deployment:** Published on GitHub Pages (`gh-pages` branch) and verified active with HTTP 200 OK responses across all endpoints.
