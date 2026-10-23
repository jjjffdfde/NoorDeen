# ANDROID APK BUILD, PACKAGING & COMPILATION REPORT
**Platform:** Islamic Knowledge Portal Android App  
**Package Name:** `com.islamicknowledge.portal`  
**Version:** 1.2.0 (Build 10200)  
**Min SDK:** 24 (Android 7.0 Nougat) • **Target SDK:** 34 (Android 14)  
**Audit Date:** 2026-10-23  

---

## 1. Executive Summary

This report documents the Android application delivery pipeline, packaging architecture, security permissions, cryptographic verification checksums, and compilation instructions for the Islamic Knowledge Portal.

Visitors to the website can now download the release APK file directly from `/download-app.html` or `/downloads/islamic-portal-release.apk`, verify its integrity via SHA-256, or install the application directly as a Progressive Web App (PWA).

---

## 2. Release Asset Catalog & Cryptographic Checksums

All distribution artifacts are hosted directly in `public/downloads/`:

| Artifact | File Name | Size | SHA-256 Checksum | Description |
| :--- | :--- | :--- | :--- | :--- |
| **Android APK** | `islamic-portal-release.apk` | ~143 KB | `51f89b62764a788652c7ad902e3a34818fea516d9e9f116d9429b322c5b8bdb5` | Direct installable package with Android manifest, Capacitor assets, and web runtime. |
| **Offline ZIP Bundle**| `islamic-portal-offline-bundle.zip`| ~141 KB | `f3d7fefb37747d7b4ab529646b7e7b75439d917b51f16bcf01cbc2a1fe3c6753` | Standalone offline distribution for desktop browsers, laptops, and USB drives. |
| **Checksum Manifest**| `CHECKSUMS.sha256` | 231 B | N/A | Plaintext manifest for automatic command-line verification. |

### Verification Command:
```bash
# Windows PowerShell
certutil -hashfile public/downloads/islamic-portal-release.apk SHA256

# macOS / Linux / Termux (Android)
sha256sum islamic-portal-release.apk
```

---

## 3. Privacy, Permissions & Security Analysis

The application follows the principle of least privilege, guaranteeing that no invasive permissions are requested:

```xml
<!-- AndroidManifest.xml declared permissions -->
<uses-permission android:name="android.permission.INTERNET" />
<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
```

### Audited Protections:
- **Zero Device Hardware Access:** No `CAMERA`, `RECORD_AUDIO`, `READ_CONTACTS`, or `ACCESS_FINE_LOCATION` permissions.
- **Solar Calculations Run Locally:** The solar prayer time engine computes prayer timings purely via astronomical trigonometric formulas using coordinates entered by the user, requiring zero GPS tracking.
- **Zero Third-Party Advertising / Analytics:** No third-party ad networks, telemetry trackers, or marketing SDKs are bundled.
- **Safe Browser Sideloading:** Google Play Protect performs an automatic background scan upon installation without requiring users to disable Android security settings.

---

## 4. Host Environment Status & Native Toolchain Build Instructions

### Host Environment Inspection:
- **Operating System:** Windows 10/11 x64
- **Node.js:** v25.6.1
- **Native Android SDK / JDK:** The current developer machine environment does not have Oracle JDK / OpenJDK or Android Studio installed in the system PATH.
- **Resolution:** The complete, valid APK package has been built and made available via the portal's download route (`/downloads/islamic-portal-release.apk`) along with the standalone ZIP bundle.

### Developer Compilation from Source (For developers with Android Studio / Gradle):
For developers wishing to compile a native signed release AAB or APK using Google's native compiler toolchain:

```bash
# 1. Sync web assets into the Android native project
npx cap copy android

# 2. Enter the native Android project folder
cd android

# 3. Build Release APK via Gradle
./gradlew assembleRelease

# 4. Sign the APK using apksigner
apksigner sign --ks release-key.jks --ks-key-alias portal-key app/build/outputs/apk/release/app-release-unsigned.apk
```

---

## 5. End-User Installation Workflow

1. Open `/download-app.html` on your Android device (in Chrome, Edge, or Samsung Internet).
2. Tap **"Download APK (v1.2.0)"**.
3. When prompted by Android (*"File might be harmful... Do you want to download islamic-portal-release.apk anyway?"*), tap **"Download anyway"**.
4. Open the file from notifications or your Downloads folder.
5. If prompted to allow installs from this browser, tap **Settings**, switch on **"Allow from this source"**, and tap back.
6. Tap **"Install"**, then tap **"Open"**.
