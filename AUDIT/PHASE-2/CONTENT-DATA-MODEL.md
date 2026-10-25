# PHASE 2 DELIVERABLE: CONTENT DATA MODEL & METADATA SCHEMAS
## Structural Specifications, Entity Descriptors & Validation Infrastructure

**Document ID:** AUD-P2-002  
**Project:** Islamic Knowledge Portal  
**Phase:** Phase 2  
**Publication Date:** October 24, 2026  
**Auditor Roles:** Senior Software Architect, Database Architect, QA Automation Specialist  
**Schema Implementation Directory:** `data/schemas/`  
**Validator Script:** `scripts/validate-content-system.js`  

---

## 1. Executive Content Data Model Summary

To ensure long-term architectural stability, zero data corruption of religious texts, and consistent presentation across 25 pages, Phase 2 implements a strict, JSON-based content data model. 

The architecture adheres to three core design principles:
1. **Zero External Dependencies:** Built using native JSON Schema Draft-07 specifications. No heavyweight databases, CMS platforms, or third-party npm libraries are required.
2. **Backward Compatibility First:** The new schemas define the target model for all future content additions (Phases 3–7) while maintaining full compatibility with the existing legacy structure in `public/js/data.js` and static HTML files.
3. **Automated Schema Verification:** Every schema is programmatically validated by `scripts/validate-content-system.js` and integrated into the primary test suite (`test/run-tests.js`).

---

## 2. Universal Base Content Schema (`base-content.schema.json`)

All educational content entities inherit from a shared base schema that standardizes lifecycle tracking, licensing, multilingual metadata, and SEO attributes:

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "https://islamicknowledge.example.com/schemas/base-content.schema.json",
  "title": "Base Islamic Content Entity",
  "type": "object",
  "required": [
    "id",
    "contentType",
    "title",
    "slug",
    "language",
    "category",
    "reviewStatus"
  ],
  "properties": {
    "id": {
      "type": "string",
      "pattern": "^[a-z0-9]+(-[a-z0-9]+)+$",
      "description": "Unique stable identifier (e.g. seerah-ch-01, sahaba-abu-bakr, hadith-bukhari-0001)."
    },
    "contentType": {
      "type": "string",
      "enum": [
        "quran_verse", "quran_surah", "hadith_tradition", "seerah_chapter",
        "prophet_narrative", "sahaba_biography", "history_era", "dua_supplication",
        "worship_guide", "fiqh_guide", "kalima", "tool_utility", "educational_article"
      ]
    },
    "title": { "type": "string", "minLength": 3, "maxLength": 200 },
    "arabicTitle": { "type": "string" },
    "slug": { "type": "string", "pattern": "^[a-z0-9]+(-[a-z0-9]+)*$" },
    "language": { "type": "string", "pattern": "^[a-z]{2}(-[A-Z]{2})?$", "default": "en" },
    "category": { "type": "string", "description": "ID of parent category in content-taxonomy.json" },
    "topics": { "type": "array", "items": { "type": "string" }, "uniqueItems": true },
    "summary": { "type": "string", "maxLength": 500 },
    "sources": {
      "type": "array",
      "items": {
        "type": "object",
        "required": ["sourceId", "citation"],
        "properties": {
          "sourceId": { "type": "string" },
          "citation": { "type": "string" },
          "volume": { "type": "string" },
          "page": { "type": "string" },
          "hadithNumber": { "type": "string" },
          "ayahReference": { "type": "string" }
        }
      }
    },
    "relatedIds": { "type": "array", "items": { "type": "string" }, "uniqueItems": true },
    "reviewStatus": {
      "type": "string",
      "enum": [
        "DISCOVERED", "RESEARCH_REQUIRED", "DRAFT", "SOURCE_REVIEW",
        "LINGUISTIC_REVIEW", "SCHOLARLY_REVIEW_REQUIRED", "APPROVED_FOR_PUBLICATION",
        "PUBLISHED", "NEEDS_REVISION", "ARCHIVED"
      ]
    },
    "license": { "type": "string", "default": "CC-BY-NC-4.0" },
    "seo": {
      "type": "object",
      "properties": {
        "metaTitle": { "type": "string" },
        "metaDescription": { "type": "string" },
        "canonicalUrl": { "type": "string" },
        "structuredDataType": { "type": "string" }
      }
    }
  }
}
```

---

## 3. Subject-Specific Schemas

Ten specialized schema descriptors are maintained in `data/schemas/`:

### 3.1. Seerah Chapter Schema (`seerah-chapter.schema.json`)
- **Key Fields:** `chapterNumber` (1–50), `period` (`meccan` vs `medinan`), `historicalYearCe`, `historicalYearAh`, `location`, `learningObjectives`, `revealedSurahs` (array of Surah numbers), `keyHistoricalEvents`, `theologicalVerificationBadge`.

### 3.2. Sahaba Biography Schema (`sahaba-biography.schema.json`)
- **Key Fields:** `name`, `arabicName`, `honorific` (default: "رضي الله عنه"), `titleKunya`, `category` (caliph, promised_paradise, mother_of_believers, ansar, muhajir, scholar), `conversionOrder`, `majorBattlesParticipated`, `hadithNarratedCount`, `alIsabahEntryNumber`.

### 3.3. Prophet Narrative Schema (`prophet-narrative.schema.json`)
- **Key Fields:** `name`, `arabicName`, `biblicalEquivalent`, `lineage`, `peopleSentTo`, `miraclesGranted`, `quranicCitations` (array of `{ surah, surahName, ayahRange }`), `theologicalLessons`.

### 3.4. Hadith Tradition Schema (`hadith-tradition.schema.json`)
- **Key Fields:** `collection`, `bookName`, `bookNumber`, `hadithNumber` (Fuad Abdul Baaqi standard), `narrator`, `arabicText`, `translations` (`{ en, ur }`), `grade` (Sahih, Hasan Sahih, Hasan, Da'if), `gradingAuthority` (*Al-Albani*, *Darussalam*), `fiqhCommentary` (`{ title, content }`).

### 3.5. Dua & Supplication Schema (`dua-supplication.schema.json`)
- **Key Fields:** `title`, `category` (morning_evening, salah, janazah, etc.), `arabicText` with Harakat, `transliteration` (ALA-LC), `translations`, `sourceCitation` (*Hisnul Muslim*), `canonicalHadithReference`, `recitationCount`, `virtueAndContext`.

### 3.6. Worship Guide Schema (`worship-guide.schema.json`)
- **Key Fields:** `worshipType` (salah, wudu, ghusl, tayammum, janazah, eid, zakat, etc.), `prerequisites`, `steps` (array of `{ stepNumber, title, instruction, arabicRecitation, transliteration, translation, rulingClassification }`), `nullifiers`, `comparativeMadhhabAnalysis` (`{ hanafi, shafii, maliki, hanbali }`).

### 3.7. History Era Schema (`history-era.schema.json`)
- **Key Fields:** `eraNumber`, `title`, `arabicTitle`, `periodCe`, `periodAh`, `geographicScope`, `capitalCities`, `majorDynasties`, `keyRulers`, `intellectualMilestones`.

---

## 4. Automated Content System Validator (`scripts/validate-content-system.js`)

Phase 2 introduces a dedicated, zero-dependency validation script that executes structural and relational audits:

```powershell
node scripts/validate-content-system.js
```

### Verification Checks Performed:
1. **Taxonomy Integrity:**
   - Asserts all 20 domains in `content-taxonomy.json` exist and have valid IDs (`dom-*`).
   - Asserts all 73 subcategories follow the `cat-*` naming pattern with unique slugs.
   - Detects circular references or orphan entities.
2. **Source Registry & Permission Verification:**
   - Asserts all 21 sources in `data/sources/registry.json` have unique IDs (`SRC-xxx`).
   - Asserts license statuses match approved enums (`VERIFIED_PERMISSION`, etc.).
   - Validates boolean flags for text redistribution and offline APK bundling permissions.
3. **Review Workflow States:**
   - Verifies all 10 lifecycle stages are present.
   - Asserts Tier 1 (Divine Text) has `aiGenerationAllowed: false`.
   - Asserts Tier 2 (Hadith & Fiqh) has `minimumApprovalRole: "QUALIFIED_ISLAMIC_SCHOLAR"`.
4. **Schema Syntax Check:**
   - Verifies that all 11 schema files in `data/schemas/` are valid, well-formed JSON Schema Draft-07 specifications.
5. **Legacy Data Store Audit:**
   - Asserts `public/js/data.js` retains existing `offlineSurahs`, `hadiths`, `kalimas`, and `duas` keys to guarantee 100% backward compatibility for live pages.

---

## 5. Backward Compatibility & Migration Strategy

Existing data in `public/js/data.js` continues to power the live web application without interruption:
- **Phase 2 Status:** Read-only schema introduction. No existing file is overwritten or mutated.
- **Phased Migration:** As subsequent phases expand datasets (Phase 3 for Quran, Phase 4 for Seerah, Phase 5 for Sahaba/Prophets, Phase 7 for Hadith/Duas), new records will be formatted according to these validated schemas and bundled into optimized JSON packages.
