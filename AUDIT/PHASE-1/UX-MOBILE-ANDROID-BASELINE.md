# PHASE 1 — STAGE I: UX, MOBILE RESPONSIVENESS & ANDROID APPLICATION BASELINE

**Document ID:** AUD-P1-008  
**Scope:** Frontend UI/UX, Spatial Design System, Mobile Viewports, Typography, PWA Offline Caching & Capacitor Android APK Audit  
**Audit Date:** October 24, 2026  
**Auditor Roles:** Principal Product UX Designer, Senior Mobile/Android Engineer, Accessibility Auditor, QA Automation Specialist  

---

## 1. Executive UX & Design System Assessment

The website implements a customized, modern Islamic design system in `public/css/main.css` utilizing CSS variables, 3D spatial depth micro-interactions, and glassmorphic elevations.

### 1.1. Core Color Token Palette
- **Deep Jade (`--color-primary`, `--color-jade`):** `#176B5B` (Primary Islamic green; passes WCAG AA contrast against white and ivory backgrounds).
- **Muted Brass / Antique Gold (`--color-gold`, `--color-brass`):** `#B58B50` (Secondary accent for badges, icons, and borders).
- **Midnight Ink (`--color-midnight`, `--color-card-dark`):** `#142326` (Deep surface color used in dark theme and hero overlays).
- **Warm Ivory (`--color-ivory`, `--color-bg`):** `#F7F4EC` (Default daytime background, reducing eye strain compared to harsh `#FFFFFF`).
- **Soft Sage (`--color-sage`, `--color-surface`):** `#E6EEE8` (Card background and input field elevation).

### 1.2. Typography System
- **Quranic Scripture Font (`--font-quran`):** `'Amiri Quran', 'Scheherazade New', 'Traditional Arabic', serif`. Provides clear diacritics (Harakat) and ligatures for classical Uthmani script.
- **Urdu Translation Font (`--font-urdu`):** `'Jameel Noori Nastaleeq', 'Noto Nastaliq Urdu', 'Urdu Typesetting', serif`.
- **Interface / Latin Text (`--font-main`):** `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`. Clean, highly legible sans-serif for UI labels and educational guides.

---

## 2. Responsive Viewport Inspection & Layout Safeguards

A code-level and styling inspection was conducted against standard mobile, tablet, and desktop viewports: `320px`, `360px`, `390px`, `414px`, `768px`, `1024px`, and `1280px+`.

```
Viewport Width     Layout Behavior & Observed CSS Rules
-----------------  ------------------------------------------------------------------------
320px - 360px      - Container padding drops to 12px; font sizes scale via clamp().
(Small Mobile)     - Table horizontal overflow protected with overflow-x: auto.
                   - Desktop navigation hidden; mobile hamburger trigger activated.
                   - Sticky headers compress height to avoid obstructing small screens.

375px - 414px      - Card layouts transition to single-column flex/grid.
(Standard Mobile)  - Button touch targets maintain minimum 44px x 44px for accessibility.
                   - Popular surah quick-access row scrolls horizontally via flex-nowrap.

768px - 1024px     - Tablet multi-column layouts activate (2-column card decks).
(Tablets / iPads)  - Sidebar containers become sticky or float alongside content.
                   - Reading toolbars span full container width.

1280px+            - Full desktop spatial layout; max container width 1200px.
(Desktop Displays) - 3D spatial hover effects (perspective: 1000px, transform: translateZ).
                   - Desktop dropdown menus activate with accessible keyboard focus.
```

### 2.1. Identified Layout Concerns:
1. **Long Arabic Text Overflow Risk:** Extremely long Arabic verses in Surah Al-Baqarah (e.g. Ayah al-Dayn 2:282) require guaranteed line-breaking (`word-break: break-word`, `overflow-wrap: anywhere`) on small 320px screens to prevent horizontal scrollbar appearance.
2. **Table Display on Mobile:** The comparative Madhhab tables in `janazah-guide.html` and the Tashreeq schedule in `eid-guide.html` rely on `.table-responsive` wrappers. On 320px screens, while horizontal scrolling works, an accordion card view would be significantly more readable than horizontal table panning.

---

## 3. Quran Reader UX & Audio Playback Workflow

### 3.1. Reading Toolbar & User Controls
- **Sticky Header:** The reading toolbar docks cleanly at the top of `public/quran.html`, offering instant surah selection, translation toggling (English vs. Urdu vs. Both), and font size scaling (`A-` / `A+`).
- **Translation Isolation:** Toggling translation language updates only the translation text block, preserving Arabic script and site navigation completely intact.

### 3.2. Audio Recitation Engine
- **CDN Provider:** Streams MP3 audio from the `everyayah.com` open educational CDN.
- **Reciter Suite:**
  1. *Sheikh Mishary Rashid Alafasy* (128 kbps)
  2. *Sheikh Abdul Basit Abdul Samad* (Murattal, 192 kbps)
  3. *Sheikh Mahmoud Khalil Al-Husary* (128 kbps)
  4. *Sheikh Mohamed Siddiq Al-Minshawi* (Murattal, 128 kbps)
  5. *Sheikh Abu Bakr Al-Shatri* (128 kbps)
- **Player Controls:** Play, pause, previous ayah, next ayah, repeat mode, playback speed (0.75x, 1.0x, 1.25x, 1.5x), and audio seek slider.
- **Identified Audio Gaps:**
  - Player highlights the current verse card, but lacks word-level synchronization (karaoke highlight).
  - No batch download feature exists for users wishing to download a complete Surah's audio for offline playback.

---

## 4. PWA Infrastructure & Offline Capabilities

### 4.1. Manifest & Service Worker Specifications
- **Manifest (`public/manifest.json`):**
  - `name`: "Islamic Knowledge Portal"
  - `short_name`: "IslamicPortal"
  - `start_url`: "/"
  - `display`: "standalone"
  - `background_color`: "#F7F4EC"
  - `theme_color`: "#0F5132"
  - `icons`: Scalable SVG vectors configured at 192x192 and 512x512.
- **Service Worker (`public/service-worker.js`):**
  - Cache name: `islamic-portal-shell-v2`.
  - Strategy: Cache-first with network fallback for all static assets (HTML, CSS, JS, icons).
  - Dedicated audio cache: `islamic-portal-audio-v1` for streamed MP3 audio segments.
  - Offline Banner: `App.setupOfflineBanner()` displays a non-intrusive notification when `navigator.onLine === false`.

### 4.2. Critical Offline Limitation (Discovered & Verified):
- While the shell, styles, guides, and tools operate completely offline, **only 10 Quran Surahs are bundled in `public/js/data.js`**.
- If a user is disconnected and attempts to load Surah Al-Kahf (18), Surah Yusuf (12), or Surah Al-Baqarah (2), the reader cannot reach `api.alquran.cloud` and displays an offline fallback warning card.
- **Remediation for Phase 3:** Complete local offline bundling of all 114 Surahs via indexed storage or compressed local datasets.

---

## 5. Android Architecture & APK Reality

### 5.1. Capacitor Bridge Architecture
- **Configuration (`capacitor.config.json`):**
  - `appId`: `com.islamicknowledge.portal`
  - `appName`: "Islamic Portal"
  - `webDir`: "public"
  - `android.allowMixedContent`: false
  - `android.webContentsDebuggingEnabled`: false
- **Native Android Wrapper (`android/`):**
  - `MainActivity.java` extends Capacitor's `BridgeActivity`.
  - Gradle configuration sets `targetSdk 34` and `minSdk 24` (Android 7.0+ compatibility covering ~95% of active global Android devices).
  - Declares only 2 permissions in `AndroidManifest.xml`:
    - `android.permission.INTERNET`
    - `android.permission.ACCESS_NETWORK_STATE`
    - **Zero invasive permissions** (guaranteed no GPS, camera, contacts, or storage surveillance).

### 5.2. Critical APK Packaging Finding:
- The file currently hosted at `public/downloads/islamic-portal-release.apk` (142,692 bytes) is **not a valid compiled Dalvik binary**.
- It was created by a custom Node.js script (`scripts/package-apk.js`) that zips the web files into a PKZIP format and names the archive `.apk`.
- **Why this fails on real Android devices:**
  - Real Android OS package installers (`PackageInstaller`) require the `AndroidManifest.xml` to be compiled into binary AXML format by `aapt2`.
  - Real APKs require compiled Dalvik bytecode (`classes.dex`) compiled from Java/Kotlin source code by the `d8`/`r8` compiler.
  - Real APKs require an APK Signature Scheme v2 or v3 signing block generated by `apksigner`.
- Sideloading the current file on a real Android phone will trigger `"There was a problem parsing the package"` or `"App not installed"`.
- **Required Remediation (Target: Phase 9):**
  - Build the real release APK using the Android SDK Gradle wrapper:
    `cd android && ./gradlew assembleRelease`
  - Sign the resulting binary with a valid release keystore via `apksigner`.
  - Update `public/downloads/CHECKSUMS.sha256` with the authentic compiled APK hash.

---

## 6. Real-Device Verification Checklist (For Future Phases)

The following tests cannot be verified in the current command-line environment and require physical hardware or an Android emulator in future phases:
1. **Real Android Sideloading:** Install authentic signed APK on Android 10, 12, and 14 devices; verify permissions prompt and splash screen transition.
2. **PWA "Add to Home Screen":** Test Web App install prompt in mobile Chrome and Safari on iOS.
3. **Touch Audio Latency:** Test Web Audio API synthesized tasbih clicks on low-end MediaTek/Snapdragon chipsets.
4. **Offline Flight Mode Test:** Switch physical device to airplane mode; verify full Quran navigation and audio playback from cache.
5. **RTL Font Rendering:** Verify Arabic diacritics alignment on older Android versions where system fonts may conflict with web fonts.
