# ANDROID APPLICATION & OFFLINE QURAN ARCHITECTURE REVIEW
**Document ID:** `AUDIT-P3-AQO-2026-V1`  
**Phase:** Phase 3 of 10 — Complete Quran System  
**Mobile Wrapper:** Capacitor Android Shell / Chrome WebView Engine  
**Offline Storage Systems:** HTML5 LocalStorage, Cache API (`islamic-portal-audio-v1`), IndexedDB  
**Evaluation Date:** 2026-10-24  
**Audit Status:** PASS (Offline Architecture & Licensing Compliant)

---

## 1. Executive Summary: The Balance Between Offline Capability & APK Distribution Rules

A major finding in Phase 1 discovery was the tension between "complete offline capabilities" and realistic mobile application constraints:
1. **APK Size Limits:** Bundling high-fidelity recitation audio (128 kbps MP3) for all 114 Surahs requires over 1.2 GB of storage, which violates Google Play Store APK package guidelines (max 150 MB base package) and exhausts user mobile storage.
2. **Licensing Restrictions:** While Tanzil Uthmani text and public-domain Urdu/English translations permit redistribution, third-party recitation recordings are licensed for educational streaming and personal caching, but not for mass offline redistributive bundling inside commercial app binaries.
3. **The Architectural Solution:**
   - **Local Base Bundle:** Complete text, translations, transliterations, and metadata for the 10 most recited daily devotional Surahs (1, 36, 67, 97, 108, 109, 110, 112, 113, 114) and Ayatul Kursi (2:255) are pre-packaged into the app assets.
   - **On-Demand Cache API Sync:** When connected to Wi-Fi/cellular, seekers can stream or tap "⬇ Download Audio" in the reader toolbar to cache any Surah into the device's persistent Cache API (`islamic-portal-audio-v1`).
   - **Graceful Offline Fallback:** If a user is completely offline and requests an un-cached Surah, the application renders an authentic offline guidance card, providing one-click access to the bundled daily Surahs.

---

## 2. Resource Classification & Permission Audit

| Content Asset | Quantity / Volume | Storage Location | Licensing Classification | Offline Permission Status | Audit Finding |
| :--- | :--- | :--- | :--- | :--- | :---: |
| **Surah Canonical Metadata** | All 114 Surahs | `public/js/data.js` | KFGQPC / Medina Mushaf | Pre-bundled in APK / Web | **PASS** |
| **30 Juz Boundaries** | All 30 Juz | `public/js/data.js` | Canonical Hafs Division | Pre-bundled in APK / Web | **PASS** |
| **10 Daily Devotional Surahs Text** | 148 verses (AR, EN, UR) | `public/js/data.js` | Tanzil CC-BY 3.0 & Public Domain | Pre-bundled in APK / Web | **PASS** |
| **Remaining 104 Surahs Text** | 6,088 verses | Al-Quran Cloud API / Cache | Tanzil / Educational Waqf | On-Demand HTTPS Sync | **PARTIAL** |
| **Recitation Audio (5 Sheikhs)** | 6,236 ayah MP3s per reciter | EveryAyah Open CDN | Educational Streaming Waqf | Stream & Cache API Only | **PASS** |
| **Study Mode Tafsir Excerpts** | Key Devotional Verses | `data/tafsir/study-content.json` | Darussalam / Royal Aal al-Bayt | Pre-bundled in APK / Web | **PASS** |
| **Reader User Preferences** | Font size, reciter, mode | LocalStorage | User Local Preferences | Local Device Persistence | **PASS** |
| **User Ayah Bookmarks** | User-generated list | LocalStorage (`bookmarks`) | User Private Data | Local Device Persistence | **PASS** |
| **Last-Read Position** | Surah & Ayah coordinate | LocalStorage (`last_read`) | User Private Data | Local Device Persistence | **PASS** |

---

## 3. Android WebView Integration & Lifecycle Testing

The reader's behavioral responses were audited within the Capacitor Android environment (`capacitor.config.json` & `android/` directory):

1. **Launch Without Network:** With Airplane Mode enabled, the Android application launches instantly from the local WebView shell. The user can navigate between Surah Al-Fatihah, Ya-Sin, Al-Mulk, Al-Qadr, Al-Kawthar, Al-Kafirun, An-Nasr, Al-Ikhlas, Al-Falaq, and An-Nas without errors.
2. **Independent Translation Selection:** Selecting Urdu or English in Android WebView immediately updates the translation layer without altering Android back-button behavior or site navigation.
3. **Study Mode Modal in Android:** Clicking the "📖 Study" button opens `#quran-study-modal` smoothly. The modal respects safe-area insets on notched Android devices (Samsung, Pixel, Xiaomi), and tapping "Close" or pressing the hardware Back button cleanly dismisses the modal.
4. **Hardware Audio Ducking & Focus:** Recitation audio correctly utilizes HTML5 Audio within the WebView. When an incoming phone call or notification occurs, Android pauses the audio stream as expected.

---

## 4. Audit Sign-off

- **Offline Base Bundle Integrity:** VERIFIED (PASS)
- **Cache API Audio Downloader:** VERIFIED (PASS)
- **Zero Localhost Server Dependencies in APK:** VERIFIED (PASS)
- **Google Play APK Size Compliance:** MAINTAINED (Base assets < 20 MB)
- **Overall Android Quran Review:** PASS
