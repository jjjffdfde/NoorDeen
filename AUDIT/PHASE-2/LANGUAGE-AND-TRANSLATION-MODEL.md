# PHASE 2 DELIVERABLE: LANGUAGE, LOCALIZATION & TRANSLATION ARCHITECTURE
## Decoupled Multilingual Framework, Scriptural Isolation & Translation Provenance

**Document ID:** AUD-P2-006  
**Project:** Islamic Knowledge Portal  
**Phase:** Phase 2  
**Publication Date:** October 24, 2026  
**Auditor Roles:** Localization Architect, Senior Software Engineer, Quran Data Integrity Specialist  
**Registry Reference:** `data/quran-translations/registry.json`  

---

## 1. Executive Localization Strategy

The Islamic Knowledge Portal is architected to serve a global Ummah spanning more than 40 languages and multiple writing systems (LTR and RTL). 

A critical finding of Phase 1 was that previous systems frequently entangled interface button labels with divine scripture translations, causing navigation menus to break or corrupting Arabic text when a user changed languages.

Phase 2 formalizes a **Strict Decoupled Localization Model** that enforces three architectural boundaries:
1. **Total Isolation of Quranic Translation from UI Chrome:** Changing the Quran translation language affects only the verse translation panel and never modifies the global navbar, search bar, or page chrome.
2. **Absolute Protection of Quranic Arabic Text:** Arabic scripture is rendered with `translate="no"` and `dir="rtl"`, completely shielded from browser automated translation extensions.
3. **No Unverified Machine-Generated Translations:** Translations of sacred scripture must originate from recognized human translators and peer-reviewed printing complexes. Any language awaiting verified text renders a scholarly review badge rather than raw AI machine translations.

---

## 2. Decoupled Translation Architecture

```
+---------------------------------------------------------------------------------------------------+
|                                        USER INTERACTION                                           |
+---------------------------------------------------------------------------------------------------+
                  |                                                                 |
                  v                                                                 v
+------------------------------------+             +------------------------------------+
|       GLOBAL UI LANGUAGE TOGGLE    |             |      QURAN TRANSLATION SELECTOR    |
|   (#language-selector-btn in Nav)  |             |  (#quran-trans-lang-select in Bar) |
+------------------------------------+             +------------------------------------+
                  |                                                                 |
                  v                                                                 v
+------------------------------------+             +------------------------------------+
|    public/js/i18n.js Controller    |             |   public/js/quran.js Controller    |
| - Controls UI Chrome Labels        |             | - Controls Verse Translation Text  |
| - 40 Configured Language Codes     |             | - 40 Configured Translation Editions|
| - 11 Complete Dictionaries         |             | - Independent Local Storage Key:   |
| - Snapshots Initial Native DOM     |             |   'islamic_portal_quran_trans_lang'|
| - Reversible via resetToDefault()  |             | - Zero Mutation of Page Navigation |
+------------------------------------+             +------------------------------------+
                  |                                                                 |
                  v                                                                 v
+------------------------------------+             +------------------------------------+
| Affects: Header, Footer, Buttons   |             | Affects: Ayah Translation Layer    |
| Example: "Home" -> "الصفحة الرئيسية"  |             | Example: Surah 1:1 English/Urdu    |
+------------------------------------+             +------------------------------------+
```

---

## 3. Quran Translation Registry (`data/quran-translations/registry.json`)

The platform maintains an authoritative 40-language Quran Translation Registry:

### 3.1. Registry Entry Structure:
```json
{
  "code": "ur",
  "language": "Urdu",
  "nativeName": "اردو",
  "direction": "rtl",
  "translator": "Maulana Fateh Muhammad Jalandhry",
  "sourceEdition": "Darussalam / Taj Company Standard",
  "verificationStatus": "verified",
  "offlineBundled": true,
  "editionId": "ur.jalandhry"
}
```

### 3.2. Verification Status Classifications:
1. **`verified` (Active & Bundled):** Peer-reviewed scholarly translation thoroughly verified against printed editions (e.g., Urdu by *Fateh Muhammad Jalandhry*, English by *Saheeh International*, French by *Muhammad Hamidullah*, Indonesian by *Ministry of Religious Affairs*).
2. **`theological_review` (Pending Scholarly Sign-Off):** Languages where digital open-access editions exist on QuranEnc, but have not yet undergone our formal 5-stage human verification. These display an explicit notice:
   `[Notice: This translation edition is undergoing formal scholarly review. For legal and devotional purposes, refer to verified English or Urdu translations.]`

---

## 4. Directional Layout (RTL vs LTR)

The design system in `public/css/main.css` dynamically accommodates directional flow:
- **Right-to-Left (RTL) Languages:** Arabic (`ar`), Urdu (`ur`), Persian (`fa`), Pashto (`ps`), Kurdish (`ku`).
- **CSS Rules:** RTL mode sets `html[dir="rtl"]`, flipping margin flows, positioning drawer menus to the right, and aligning typography naturally.
- **Bi-Directional Isolation (`<bdi>`):** Mixed content (e.g. Arabic terms within English sentences) is strictly wrapped in `<bdi>` or `<span dir="rtl">` to prevent punctuation inversion on mobile browsers.

---

## 5. Localized URL & SEO Blueprint (Phase 9 Strategy)

To achieve international search engine indexability without breaking existing static routes:
- **Phase 2 Status:** Client-side i18n continues serving dynamic UI labels.
- **Phase 9 Target:** Prerender localized static sub-directories for high-volume languages:
  - English: `https://islamicknowledge.example.com/salah-guide`
  - Urdu: `https://islamicknowledge.example.com/ur/salah-guide`
  - Arabic: `https://islamicknowledge.example.com/ar/salah-guide`
- **Bidirectional Hreflang Tags:** Each page will declare exact language alternates:
  ```html
  <link rel="alternate" hreflang="en" href="https://islamicknowledge.example.com/salah-guide" />
  <link rel="alternate" hreflang="ur" href="https://islamicknowledge.example.com/ur/salah-guide" />
  <link rel="alternate" hreflang="ar" href="https://islamicknowledge.example.com/ar/salah-guide" />
  <link rel="alternate" hreflang="x-default" href="https://islamicknowledge.example.com/salah-guide" />
  ```
