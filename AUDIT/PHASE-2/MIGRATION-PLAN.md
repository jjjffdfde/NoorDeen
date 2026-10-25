# PHASE 2 DELIVERABLE: LEGACY CONTENT MIGRATION PLAN
## Staged Evolution, Data Mapping & Zero-Downtime Transition Strategy

**Document ID:** AUD-P2-008  
**Project:** Islamic Knowledge Portal  
**Phase:** Phase 2  
**Publication Date:** October 24, 2026  
**Auditor Roles:** Senior Database Architect, Technical Lead, Release Engineer  

---

## 1. Executive Migration Strategy Summary

The Islamic Knowledge Portal currently serves users and automated tests through static HTML pages and client-side JavaScript stores (`public/js/data.js`). 

A core non-negotiable directive of Phase 2 is: **"Preserve all existing working pages, routes, content, data, translations, bookmarks and application behavior. Do not delete existing content merely because it does not fit the proposed structure immediately."**

Therefore, Phase 2 implements a **Zero-Downtime Staged Migration Strategy**. The new taxonomy and JSON schemas exist as a parallel, governing architecture. Legacy files continue operating undisturbed, and each content domain will be systematically migrated, validated, and enriched during its dedicated future phase.

---

## 2. Legacy Content Inventory & Target Mapping

| Current File / Dataset | Current Format | Legacy Limitations | Target Schema | Migration Phase |
| :--- | :--- | :--- | :--- | :---: |
| `public/js/data.js` (surahs) | JS Object Array (114 items) | Metadata only; missing full verse text for 104 Surahs | `data/schemas/base-content.schema.json` | **Phase 3** |
| `public/js/data.js` (offlineSurahs) | JS Object (10 Surahs) | Hardcoded JS strings in memory | `data/data/quran/` (Compressed JSON) | **Phase 3** |
| `data/quran-translations/` | `registry.json` | 11 verified cloud editions; 29 review stubs | `data/schemas/source-registry.schema.json` | **Phase 3** |
| `public/seerah.html` | Static HTML (16 chapters) | Compressed campaigns; missing Treaties & Maps | `data/schemas/seerah-chapter.schema.json` | **Phase 4** |
| `public/prophets.html` | Static HTML (10 prophets) | 15 Quranic Prophets missing | `data/schemas/prophet-narrative.schema.json`| **Phase 5** |
| `public/sahaba.html` | Static HTML (14 profiles) | Missing 6 of Ten Promised Paradise | `data/schemas/sahaba-biography.schema.json` | **Phase 5** |
| `public/history.html` | Static HTML (12 eras) | High-level summaries; lacks deep timelines | `data/schemas/history-era.schema.json` | **Phase 6** |
| `public/js/data.js` (hadiths) | JS Object Array (8 items) | Only 8 traditions; 0 records for Ibn Majah | `data/schemas/hadith-tradition.schema.json` | **Phase 7** |
| `public/js/data.js` (duas) | JS Object Array (17 items) | Missing morning/evening Hisnul Muslim corpus | `data/schemas/dua-supplication.schema.json`| **Phase 7** |
| `public/wudu-guide.html` | Static HTML | Focuses on Wudu; missing dedicated Ghusl/Tayammum | `data/schemas/worship-guide.schema.json` | **Phase 7** |
| `public/downloads/release.apk` | PKZIP Mock Archive | Cannot install on real Android devices | Compiled Gradle Dalvik Binary (`.apk`) | **Phase 9** |

---

## 3. The 6-Step Migration Protocol for Future Phases

Every domain migration in Phases 3 through 9 must execute according to this safe protocol:

```
+---------------------------------------------------------------------------------------------------+
| STEP 1: SOURCE EXTRACTION & PROVENANCE VALIDATION                                                 |
| - Extract verified text from approved classical source (SRC-001 to SRC-021).                      |
| - Verify permissions, edition numbers, and licensing terms in data/sources/registry.json.        |
+---------------------------------------------------------------------------------------------------+
                                                  |
                                                  v
+---------------------------------------------------------------------------------------------------+
| STEP 2: JSON ENTITY COMPILATION                                                                   |
| - Format new records according to specific schema in data/schemas/.                               |
| - Assign immutable IDs (e.g., seerah-ch-17, prophet-idris, hadith-bukhari-0042).                  |
+---------------------------------------------------------------------------------------------------+
                                                  |
                                                  v
+---------------------------------------------------------------------------------------------------+
| STEP 3: AUTOMATED VALIDATION SCRIPT EXECUTION                                                     |
| - Run node scripts/validate-content-system.js.                                                    |
| - Assert zero schema violations, zero duplicate IDs, and zero broken cross-references.           |
+---------------------------------------------------------------------------------------------------+
                                                  |
                                                  v
+---------------------------------------------------------------------------------------------------+
| STEP 4: PRESENTATION LAYER ENRICHMENT (HTML & JS)                                                 |
| - Render verified content into corresponding public HTML page or client module.                   |
| - Maintain existing CSS classes, canonical nav structure, and responsive mobile safeguards.       |
+---------------------------------------------------------------------------------------------------+
                                                  |
                                                  v
+---------------------------------------------------------------------------------------------------+
| STEP 5: REGRESSION TESTING                                                                        |
| - Execute node test/run-tests.js across all 22 test suites.                                       |
| - Assert 100% pass rate with zero broken internal links and zero server route errors.             |
+---------------------------------------------------------------------------------------------------+
                                                  |
                                                  v
+---------------------------------------------------------------------------------------------------+
| STEP 6: AUDIT LOGGING & DOCUMENTATION                                                             |
| - Record all changes, source citations, and verification statuses in AUDIT/.                      |
+---------------------------------------------------------------------------------------------------+
```

---

## 4. Preservation of Local Storage & User State

During all future data migrations, user state stored in the client's browser must be preserved without data loss:
- **`islamic_portal_bookmarks`:** User's personal saved ayahs and dua bookmarks.
- **`islamic_portal_last_read`:** User's reading progress (Surah and Ayah position).
- **`islamic_portal_quran_trans_lang`:** User's isolated Quran translation language preference.
- **`theme`:** User's dark/light theme mode selection.

The validation script verifies that legacy keys remain operational and backward compatible.
