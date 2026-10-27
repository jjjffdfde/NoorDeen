# NoorDeen — Android Build Report

**Build verified:** 26 October 2026
**Build host:** Windows 11 (AMD64), PowerShell
**Project:** `E:\islamic websiye`
**Package:** `com.islamicknowledge.portal`
**Version:** 1.2.0 (`versionCode` 10200)
**Result:** Release APK builds successfully, is signed, and its structure is verified. **It has not been installed or run on any device or emulator.**

---

## 1. What was actually executed

```powershell
node scripts/build-android-assets.cjs
# "Android assets synced successfully."

cd android
gradlew.bat assembleRelease --console=plain --offline
# BUILD SUCCESSFUL in 10s
# 64 actionable tasks: 3 executed, 61 up-to-date
```

- The Gradle build was run **offline** (`--offline`) against an already-populated dependency cache.
- `--offline` is not a claim that the app works offline; it only describes how Gradle resolved dependencies.
- The web assets were re-synced from `public/` immediately before this build, so the APK contains the current site (including the 10 new articles and the Dr. Israr Ahmed lecture library).

### Toolchain (verified on this machine)

| Component | Value |
| :--- | :--- |
| JDK | Microsoft OpenJDK 17 (`java -version` = 17.x) |
| Gradle wrapper | 8.2.1 |
| Android Gradle Plugin | 8.2.1 |
| Android SDK | `C:\Program Files\Unity\Hub\Editor\6000.6.4f1\Editor\Data\PlaybackEngines\AndroidPlayer\SDK` (declared in `android/local.properties`) |
| Build-tools | 36.0.0 |
| Platform-tools | present (`adb.exe` available) |
| compileSdk / targetSdk / minSdk | 34 / 34 / 22 |

---

## 2. Release artifact

| Field | Value |
| :--- | :--- |
| Gradle output | `android/app/build/outputs/apk/release/app-release.apk` |
| Published copy | `public/downloads/islamic-portal-release.apk` |
| Size | **6,232,774 bytes (5.94 MB)** |
| SHA-256 | `87763ba4b3bea482944dd170cb81b0e47cfe03778213ee0852292a928fbab2ed` |
| Version metadata | `versionCode` 10200, `versionName` 1.2.0 (`output-metadata.json`) |

The published APK in `public/downloads/` is a byte-for-byte copy of the Gradle output above. The hash is also written into `public/downloads/CHECKSUMS.sha256`; the download page reads that manifest at runtime instead of hardcoding a digest.

---

## 3. Structural verification (what was checked, and how)

The APK is a ZIP container, so it was parsed directly (central directory read in Node.js) rather than trusted on file name alone:

| Check | Result |
| :--- | :--- |
| ZIP entries | 997 |
| `AndroidManifest.xml` present | yes |
| `classes.dex` present | yes |
| `resources.arsc` present | yes |
| Nested `.apk` files | **0** |
| Nested `.zip` files | **0** |
| `assets/public/index.html` | present |
| `assets/public/dr-israr-ahmed.html` | present |
| `assets/public/data/dr-israr/catalog.json` | present |
| `assets/public/articles/fasting-and-ramadan.html` | present |
| HTML pages under `assets/public/` | **47** (26 root + 21 article pages) |
| Files under `assets/public/` | 74 |
| `assets/public/downloads/*` | **0** — the downloads folder is deliberately excluded |
| `assets/public/service-worker.js` | present, cache `islamic-portal-shell-v6` |

An earlier published APK in this repo had contained a nested copy of the APK and of the offline ZIP inside `assets/public/downloads/`. That build was replaced. The current artifact contains **no nested archives**, and the build script that copies assets excludes `public/downloads/`.

---

## 4. Signature verification

Verified with `apksigner.bat verify --verbose --print-certs` from build-tools 36.0.0:

```text
Verifies
Verified using v1 scheme (JAR signing): true
Verified using v2 scheme (APK Signature Scheme v2): true
Verified using v3 scheme (APK Signature Scheme v3): false
Verified using v3.1 scheme (APK Signature Scheme v3.1): false
Verified using v4 scheme (APK Signature Scheme v4): false
Number of signers: 1
Signer #1 certificate DN: CN=NoorDeen, OU=Mobile Applications, O=Islamic Knowledge Portal, L=Singapore, C=SG
Signer #1 certificate SHA-256 digest: 3cdfcc28ef87bfe7d73fb05b209802af254d36f1de211782b25673d4d3c1f136
Signer #1 key algorithm: RSA
Signer #1 key size (bits): 2048
```

`apksigner` also printed warnings that a few `META-INF/*` metadata entries are not covered by the JAR signature. That is normal for AGP-produced APKs and does not affect the v2 signature that Android actually verifies at install time.

Notes on honesty:
- The APK is **v1 + v2 signed only**. It is not v3/v3.1/v4 signed.
- PowerShell may report exit code 1 for the `apksigner` invocation because the tool writes warnings to stderr; the tool's own verdict line is `Verifies`.

---

## 5. Device and runtime testing status

| Test | Status |
| :--- | :--- |
| `adb devices` | **No devices attached** (empty list) |
| Install on physical device | **Not performed** |
| Install on emulator / AVD | **Not performed** (no AVD running) |
| Launch app, navigate pages on device | **Not performed** |
| Offline behavior on device (airplane mode) | **Not performed** |
| Screenshots from the running app | **None captured** |

Therefore this report does **not** claim that the app installs, launches, or behaves correctly on Android hardware. What is verified is: it compiles, it packages the current web assets, it is signed, and its archive structure is valid. Runtime behavior on a device remains unverified.

---

## 6. Known limitations of the packaged app

1. **`downloads/` is not inside the APK.** Any in-app link to `downloads/islamic-portal-release.apk`, `downloads/islamic-portal-offline-bundle.zip`, or `downloads/CHECKSUMS.sha256` will not resolve inside the installed app. The download page inside the app will show its "Unavailable — open CHECKSUMS.sha256" fallback for the checksum fields.
2. **Quran coverage offline is partial.** 10 surahs (49 ayahs) are bundled; the other 104 surahs are fetched from the Quran Cloud API and need a network connection.
3. **Audio and video need network.** Recitation audio streams from a CDN, and Dr. Israr Ahmed lectures are YouTube embeds — neither is bundled.
4. **No device-level testing** has been done (see section 5).

---

## 7. Security finding — release signing material is committed (P0, not changed)

- `android/app/build.gradle` contains the release `storePassword` and `keyPassword` as **plaintext string literals**.
- `android/app/release.keystore` is **tracked by git** (`git ls-files` lists it), and `.gitignore` does not exclude it.
- Anyone with repository read access can therefore sign APKs that Android will accept as updates to this app.

The passwords are deliberately **not reproduced in this report**. This was left unchanged because rotating the signing key and rewriting the build configuration is an owner decision (it changes the app's update identity). Recommended remediation is recorded in `reports/REMAINING_WORK.md`.

---

## 8. Reproducing this build

```powershell
# 1. Sync web assets into the Android project
node scripts/build-android-assets.cjs

# 2. Build the release APK
cmd /c "cd android && gradlew.bat assembleRelease --console=plain --offline"

# 3. Publish + hash
Copy-Item android\app\build\outputs\apk\release\app-release.apk public\downloads\islamic-portal-release.apk -Force
Get-FileHash public\downloads\islamic-portal-release.apk -Algorithm SHA256

# 4. Refresh the checksum manifest (also rebuilds the desktop ZIP)
node scripts/build-offline-bundle.cjs
```

To install on a device once one is connected:

```powershell
& "$env:ANDROID_SDK_ROOT\platform-tools\adb.exe" install -r public\downloads\islamic-portal-release.apk
```
