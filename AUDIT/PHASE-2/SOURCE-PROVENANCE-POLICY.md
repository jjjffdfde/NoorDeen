# PHASE 2 DELIVERABLE: SOURCE PROVENANCE, CLASSIFICATION & LICENSING POLICY
## Four-Tier Evidence Hierarchy, Rights Clearance Rules & Source Registry Governance

**Document ID:** AUD-P2-004  
**Project:** Islamic Knowledge Portal  
**Phase:** Phase 2  
**Publication Date:** October 24, 2026  
**Auditor Roles:** Research Librarian, Classical Historiography Auditor, Legal & Licensing Specialist  
**Registry Reference:** `data/sources/registry.json`  

---

## 1. Executive Provenance Policy Summary

A fundamental vulnerability of digital Islamic websites is the uncritical conflation of distinct source genres—treating an annalistic historical chronicle, a canonical Sahih Hadith, a weak devotional narration, and a contemporary blog post as interchangeable evidence.

Phase 2 establishes an inviolable **Four-Tier Evidence Classification Policy** that governs every fact, citation, and ruling published on the portal. Furthermore, it enforces a strict **Centralized Source Licensing Registry** (`data/sources/registry.json`) ensuring full legal compliance with digital distribution and offline APK bundling rights.

---

## 2. The Four-Tier Evidence Classification Hierarchy

Every religious and historical claim on the portal must be classified into one of four distinct tiers:

```
+---------------------------------------------------------------------------------------------------+
| TIER 1: DIVINE REVELATION & MUTTAFAQUN 'ALAYH CONSENSUS                                           |
| - Scope: The Holy Quran (Hafs Uthmani text) and universally authenticated Prophetic Sunnah        |
|   narrated concurrently in Sahih al-Bukhari and Sahih Muslim.                                     |
| - Doctrinal Status: Infallible foundation of Islamic creed (Aqidah) and obligatory worship.       |
| - Editorial Rule: Zero deviation, AI mutation, or rephrasing permitted. Quoted verbatim.          |
+---------------------------------------------------------------------------------------------------+
                                                  |
                                                  v
+---------------------------------------------------------------------------------------------------+
| TIER 2: SAHIH & HASAN PROPHETIC TRADITIONS (SUNAN & MUSNAD)                                      |
| - Scope: Authenticated traditions from the Four Sunan (Abu Dawud, Tirmidhi, Nasa'i, Ibn Majah)    |
|   and primary Musnad collections evaluated as Sahih or Hasan by recognized Muhaddithun.           |
| - Doctrinal Status: Authoritative source for worship rulings, ethical conduct, and legal rulings. |
| - Editorial Rule: MUST display collection name, Hadith number, grade, and grading authority.      |
+---------------------------------------------------------------------------------------------------+
                                                  |
                                                  v
+---------------------------------------------------------------------------------------------------+
| TIER 3: CLASSICAL BIOGRAPHICAL & HISTORICAL CONSENSUS                                             |
| - Scope: Primary Seerah, Tabaqat, and Chronicles (*Ibn Hisham*, *Ibn Sa'd*, *Ibn Hajar*, *Tabari*).|
| - Doctrinal Status: Authoritative for chronological events, biographical milestones, and treaties. |
| - Editorial Rule: Cites classical author and recension. Contested or single-chain reports must     |
|   be explicitly labeled as "Historical Report" rather than established theological doctrine.      |
+---------------------------------------------------------------------------------------------------+
                                                  |
                                                  v
+---------------------------------------------------------------------------------------------------+
| TIER 4: JURISTIC IJTIHAD & SECONDARY DEVOTIONAL PRACTICE (MUSTAHABB / AMAL AL-SALAF)              |
| - Scope: Pious practices transmitted through the pious early generations (Amal al-Salaf) or       |
|   supported by weak chains (Da'if) permissible exclusively in virtues of deeds (Fada'il al-A'mal).|
| - Doctrinal Status: Permissible, voluntary actions for spiritual barakah; NOT obligatory Sunnah.  |
| - Editorial Rule: MUST carry explicit badge: [Permissible Pious Practice (Mustahabb/Amal Salaf)]. |
+---------------------------------------------------------------------------------------------------+
```

---

## 3. Centralized Source Registry Governance (`data/sources/registry.json`)

The platform maintains a single source of truth for all content providers in `data/sources/registry.json`, cataloging 21 distinct sources across scripture, hadith, history, exegesis, audio, and algorithms.

### 3.1. Standard Source Attributes:
- `id`: Stable alphanumeric identifier (`SRC-001` through `SRC-021`).
- `title`: Formal publication name.
- `provider`: Organization, compiler, or institution.
- `category`: Specialized taxonomy domain (`quran_scripture`, `hadith_collection`, `seerah_chronicle`, etc.).
- `sourceType`: `primary` (manuscript/canonical), `secondary` (scholarly exegesis/manual), or `tertiary` (astronomical calculations).
- `licenseStatus`:
  - `VERIFIED_PERMISSION`: Formal open license or public domain status independently confirmed.
  - `PERMISSION_REQUIRES_REVIEW`: Fair use or restricted license requiring legal confirmation prior to bulk redistribution.
  - `LICENSE_UNKNOWN`: Cannot be redistributed until licensing terms are secured.
  - `NOT_PERMITTED`: Explicitly restricted; cannot be hosted or bundled.
- `redistributionPermitted`: Boolean flag permitting digital publishing.
- `offlineApkBundlingPermitted`: Boolean flag permitting packaging inside the downloadable Android APK.
- `attributionRequired`: Boolean flag requiring mandatory publisher credit.

---

## 4. Rights Clearance & Redistribution Guidelines

### 4.1. Quranic Text (SRC-001 & SRC-002)
- **Tanzil.net Uthmani Text:** Permitted under Creative Commons Attribution 3.0 (CC-BY 3.0). Full text redistribution and offline APK bundling are authorized provided Tanzil is attributed and the text remains 100% unaltered.
- **KFGQPC Medina Mushaf:** Official public religious dissemination standard.

### 4.2. Recitation Audio (SRC-003)
- **EveryAyah.com Project:** Audio recitations are authorized for non-commercial educational streaming. However, packaging complete MP3 audio sets inside the APK is **not permitted** due to bandwidth and APK size constraints (multi-gigabyte payloads). Selective local caching via the PWA Service Worker (`islamic-portal-audio-v1`) is authorized.

### 4.3. Multilingual Translations (SRC-004)
- **QuranEnc.com Catalog:** Content is authorized for free digital dissemination under strict terms:
  1. Zero text modification.
  2. Mandatory attribution to QuranEnc.com.
  3. Preservation of translation edition version numbers and translator metadata.

### 4.4. Classical Public Domain Heritage (SRC-006 to SRC-018)
- Works authored prior to the 20th century (Imams Bukhari, Muslim, Abu Dawud, Tirmidhi, Ibn Hisham, Ibn Sa'd, Tabari, Ibn Kathir, Ibn Hajar) reside in the universal public domain.
- Modern typographic typesetting by contemporary commercial publishers is respected by prioritizing open-access academic recensions (e.g., Al-Babi al-Halabi, Dar Sadir, Dar Taybah) and standard international numbering conventions (Fuad Abdul Baaqi).
