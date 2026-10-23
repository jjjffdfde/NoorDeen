# OFFLINE ARCHITECTURE, ANDROID VERIFICATION & PWA AUDIT

**Audit Date**: October 23, 2026  
**Auditor**: Android Application Engineer & QA Automation Specialist  
**Application ID**: `com.islamicknowledge.portal`  
**Web Directory**: `public`  
**Service Worker Cache**: `islamic-portal-shell-v2` & `islamic-portal-audio-v1`

---

## 1. Offline Architecture Matrix (All 20 Modules)

| Module | Storage Mechanism | Works Without Internet? | Offline Capabilities |
| :--- | :--- | :--- | :--- |
| **Homepage** | Cache API (`shell-v2`) | **YES** | Instant cold launch, search trigger, last-read session card, daily wisdom. |
| **Holy Quran** | Cache API + `data.js` | **YES (Bundled)** | Surahs 1, 36, 67, 97, 108, 109, 110, 112, 113, 114 & Ayatul Kursi fully readable with translations offline. Cloud fallback notice for remaining 104 Surahs. |
| **Hadith Library** | Cache API + `data.js` | **YES** | Complete bundled Kutub al-Sittah collection with Arabic, English, Urdu, and verified gradings. |
| **Six Kalimas** | Cache API + `data.js` | **YES** | All 6 Kalimas with Arabic diacritics, transliteration, English, and Urdu translations. |
| **Duas & Adhkar** | Cache API + `data.js` | **YES** | 16 daily supplication categories with Arabic, translations, and authentic citations. |
| **Prophetic Seerah** | Cache API (`shell-v2`) | **YES** | Full 6-phase chronological narrative (*The Sealed Nectar*). |
| **Stories of the Prophets**| Cache API (`shell-v2`) | **YES** | Complete biographies of Adam, Nuh, Ibrahim, Musa, Isa, and Muhammad ﷺ. |
| **Lives of the Sahaba** | Cache API (`shell-v2`) | **YES** | Biographies of Khulafa-e-Rashideen, Bilal, Salman al-Farsi, and Ten Promised Paradise. |
| **Five Pillars** | Cache API (`shell-v2`) | **YES** | Detailed theological and practical guide to the 5 Pillars of Islam. |
| **Salah Guide** | Cache API (`shell-v2`) | **YES** | Step-by-step positions, recitations, translations, and Rak'ah table. |
| **Wudu Guide** | Cache API (`shell-v2`) | **YES** | Step-by-step ritual ablution guide, Fard, Sunnah, and invalidators. |
| **Prayer Times** | Mathematical Formula | **YES** | Client-side astronomical solar zenith equations calculating Fajr, Dhuhr, Asr, Maghrib, and Isha offline. |
| **Digital Tasbih** | Local Audio / State | **YES** | Offline Dhikr counter with Web Audio sound synthesis and localStorage memory. |
| **Zakat Calculator** | Client Formula | **YES** | Live 2.5% calculation engine with custom Nisab values. |
| **Hijri Calendar** | Intl API / Formula | **YES** | Algorithmic Umm al-Qura calendar conversion. |
| **Bookmarks** | `localStorage` | **YES** | Persistently stored on device; accessible without network. |
| **About Us** | Cache API (`shell-v2`) | **YES** | Mission, methodology, and editorial disclosures. |
| **Sources** | Cache API (`shell-v2`) | **YES** | Scholarly verification citations and references. |
| **Privacy Policy** | Cache API (`shell-v2`) | **YES** | Full privacy policy. |
| **Terms of Use** | Cache API (`shell-v2`) | **YES** | Complete terms of service. |

---

## 2. Audio Offline Capabilities & Boundaries

1. **Online Streaming Mode**: Users connected to the network can stream any verse across all 114 Surahs from EveryAyah & Quran Foundation servers with multiple master reciters (Sheikh Alafasy, Sheikh Abdul Basit, Sheikh Al-Husary, Sheikh Al-Minshawi, Sheikh Al-Shatri).
2. **Offline Download Mode**: Users can click "⬇ Download Audio" on any open Surah. The application uses the Cache API (`islamic-portal-audio-v1`) to store the MP3 audio files on the device.
3. **Offline Playback**: When the device is offline, any downloaded Surah plays seamlessly directly from the local Cache API without consuming mobile data.
4. **Boundary Disclosure**: Un-downloaded Surahs cannot play audio while completely offline. The player shows a clear notification: *"Audio track unavailable or connection interrupted. Check internet or cached audio."*

---

## 3. Android Capacitor Scaffolding & Native Toolchain Audit

### 3.1 Host Toolchain Verification
- **Operating System**: Windows 10/11 x64
- **Node.js**: `v25.6.1`
- **Java Development Kit (`javac`)**: **NOT DETECTED** in host PATH.
- **Android SDK (`gradle`, `adb`)**: **NOT DETECTED** in host PATH.

### 3.2 Concrete Native Scaffolding on Disk
In compliance with Non-Negotiable Rules 8 & 9, the complete Android Capacitor project is scaffolded and verified on disk, but an APK binary was **not compiled** on this host due to the missing compiler:
- `capacitor.config.json`: Configured with appId `com.islamicknowledge.portal`, appName `Islamic Portal`, webDir `public`.
- `android/build.gradle`: Root Gradle script with Google & Maven Central repositories and Android Build Tools 8.2.1.
- `android/settings.gradle`: Includes `:app` module.
- `android/app/build.gradle`: Declares `applicationId "com.islamicknowledge.portal"`, `minSdk 22`, `targetSdk 34`, Java 17 compatibility.
- `android/app/src/main/AndroidManifest.xml`: Declares package, `INTERNET`, `ACCESS_NETWORK_STATE`, and RTL support (`android:supportsRtl="true"`).
- `android/app/src/main/java/com/islamicknowledge/portal/MainActivity.java`: Extends `BridgeActivity`.
- `android/app/src/main/res/values/strings.xml`: Defines app name and custom schemes.
- `android/app/src/main/res/values/colors.xml`: Editorial Deep Jade (`#176B5B`), Midnight Ink (`#142326`), and Muted Brass (`#B58B50`).

### 3.3 Commands to Compile Android APK (On Any System with JDK 17 & Android Studio)
```bash
# 1. Sync public web assets into native Android project
npm run android:sync

# 2. Build Debug APK
cd android
./gradlew assembleDebug

# The generated APK will be at:
# android/app/build/outputs/apk/debug/app-debug.apk
```

### 3.4 PWA Direct Installation on Android Devices
Android users can immediately install the Islamic Knowledge Portal natively via Google Chrome or Microsoft Edge without downloading an external APK:
1. Open the website on an Android phone.
2. Tap the browser menu (⋮) -> **"Install App"** (or tap the bottom "Add to Home Screen" banner).
3. The app installs as a standalone, fullscreen application with the emerald crescent icon, launch splash screen, and offline Service Worker caching.
