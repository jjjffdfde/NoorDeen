# Phase 0 — Baseline Audit & System Discovery

**Audit Date**: October 2026  
**Auditor**: Full-Stack Senior Engineer & Islamic Verification Specialist  
**Repository**: `E:\islamic websiye`  
**Git Commit Baseline**: `9e66214` (Root commit)  
**Node.js Version**: `v25.6.1`  
**Host OS**: Windows 10/11 x64 (PowerShell)  
**Production Canonical Base URL**: `https://islamicknowledge.example.com` (from `.env.example`, `sitemap.xml`, and structured data)

---

## 1. Executive Summary

A comprehensive architectural and content audit was performed on the existing Islamic Knowledge Portal. The repository was constructed as a dual-layer application:
1. **Public Web Distribution (`public/`)**: Standalone, high-performance static web pages with custom CSS design system, modular JavaScript controllers, and native Node.js HTTP server (`server.js`).
2. **TypeScript Engine (`src/`)**: Type-safe data models and translation dictionaries originally designed for Next.js.
3. **Automated Test Suite (`test/run-tests.js`)**: 63 baseline tests verifying basic file existence, route aliases, astronomical calculation algorithms, and 40-language registration.

### Baseline Health Status
- **Automated Tests**: 63/63 passing.
- **Server Execution**: Clean Node.js HTTP server responding on port 3000.
- **Critical Defects & Gaps Discovered**:
  1. **Mobile Navigation Gaps (P1)**: The header navigation hides on viewports `< 900px`, but no mobile hamburger toggle button or slide-out drawer was implemented in the HTML files.
  2. **Offline Quran Completeness (P1)**: `public/js/data.js` only had full verse datasets for Surahs 1, 112, 113, and 114. Core Surahs 36 (Ya-Sin), 67 (Al-Mulk), and Ayatul Kursi were present in `src/` but missing from the client runtime `public/js/data.js`, causing fallback notices when loaded offline.
  3. **PWA / Service Worker Missing (P1)**: No `manifest.json`, no `service-worker.js`, and no asset caching strategy were present, meaning the web application could not function in offline airplane mode.
  4. **SEO Gaps (P2)**: Subpages lacked canonical tags, JSON-LD structured data (Breadcrumbs, Article schema), and OpenGraph tags.
  5. **Text & Multilingual Completeness (P2)**: Multiple subpages (`pillars.html`, `wudu-guide.html`, `salah-guide.html`) contained hardcoded English text lacking `data-i18n` attributes, preventing localization when Arabic or Urdu is selected.
  6. **Android Packaging (P1)**: No standalone Android project existed.

---

## 2. Inventory of Current Modules

| Module Name | File Location | Functional Status | Offline Capability |
| :--- | :--- | :--- | :--- |
| **Homepage** | `public/index.html` | Working | Online-only (needs Service Worker) |
| **Quran Reader** | `public/quran.html` | Partially Complete | Partially offline (Surahs 1, 112-114) |
| **Hadith Library** | `public/hadith.html` | Working | Offline (bundled data) |
| **Six Kalimas** | `public/kalimas.html` | Working | Offline (bundled data) |
| **Duas & Adhkar** | `public/duas.html` | Working | Offline (bundled data) |
| **Seerah** | `public/seerah.html` | Working | Offline (static HTML) |
| **Prophets** | `public/prophets.html` | Working | Offline (static HTML) |
| **Sahaba** | `public/sahaba.html` | Working | Offline (static HTML) |
| **Five Pillars** | `public/pillars.html` | Working | Offline (static HTML) |
| **Salah Guide** | `public/salah-guide.html` | Working | Offline (static HTML) |
| **Wudu Guide** | `public/wudu-guide.html` | Working | Offline (static HTML) |
| **Prayer Times** | `public/prayer-times.html` | Working | Offline (astronomical formula) |
| **Digital Tasbih** | `public/tasbih.html` | Working | Offline (Web Audio synthesis) |
| **Zakat Calculator** | `public/zakat-calculator.html` | Working | Offline (client formula) |
| **Hijri Calendar** | `public/calendar.html` | Working | Offline (Intl API) |
| **Bookmarks** | `public/bookmarks.html` | Working | Offline (`localStorage`) |
| **About Us** | `public/about.html` | Working | Offline (static HTML) |
| **Sources** | `public/sources.html` | Working | Offline (static HTML) |
| **Privacy Policy** | `public/privacy.html` | Working | Offline (static HTML) |
| **Terms of Service** | `public/terms.html` | Working | Offline (static HTML) |

---

## 3. Environment & Tools Audit

- **Java Development Kit**: Not detected in system PATH.
- **Android SDK / Build-Tools**: `adb` and `gradle` not in system PATH.
- **Node.js**: `v25.6.1` installed and functional.
- **Package Manager**: npm `11.9.0` available via `cmd.exe /c "npm ..."`.
- **Winget Package Manager**: `v1.29.380` available.
- **Git**: Initialized at `E:\islamic websiye\.git`.
