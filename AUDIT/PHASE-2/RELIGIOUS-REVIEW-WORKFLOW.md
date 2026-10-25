# PHASE 2 DELIVERABLE: RELIGIOUS CONTENT REVIEW WORKFLOW
## Ten-Stage Editorial Lifecycle, Scholarly Accountability & Quality Assurance Governance

**Document ID:** AUD-P2-005  
**Project:** Islamic Knowledge Portal  
**Phase:** Phase 2  
**Publication Date:** October 24, 2026  
**Auditor Roles:** Senior Editorial Systems Designer, Islamic Educational Strategist, QA Lead  
**Workflow Implementation Reference:** `data/workflow/review-workflow.json`  

---

## 1. Executive Review Workflow Mission

An Islamic educational website holds immense spiritual responsibility. Publishing inaccurate religious rulings, misattributed Hadith narrations, or corrupt Arabic text misleads learners and compromises theological trust.

Phase 2 formalizes a strict, traceable **Ten-Stage Editorial Review Lifecycle** that enforces separation of editorial duties, prohibits AI self-certification, and mandates qualified human scholarly review prior to publishing Tier 1 and Tier 2 content.

---

## 2. The Ten-Stage Editorial Lifecycle

Every content item on the portal proceeds through a deterministic, auditable state machine defined in `data/workflow/review-workflow.json`:

```
 [1. DISCOVERED] --------> [2. RESEARCH_REQUIRED] --------> [3. DRAFT]
         |                                                     |
         v                                                     v
   [ARCHIVED] <--------------------------------------- [4. SOURCE_REVIEW]
                                                               |
                                                               v
                                                      [5. LINGUISTIC_REVIEW]
                                                               |
                                                               v
                                                  [6. SCHOLARLY_REVIEW_REQUIRED]
                                                               |
                                                               v
   [10. ARCHIVED] <------- [8. PUBLISHED] <------- [7. APPROVED_FOR_PUBLICATION]
                                  |                            ^
                                  v                            |
                         [9. NEEDS_REVISION] ------------------+
```

### 2.1. Detailed State Definitions:
1. **`DISCOVERED`:** A topic, prophet, companion, historical event, or supplication is identified and cataloged in the taxonomy gap matrix.
2. **`RESEARCH_REQUIRED`:** The topic is queued for primary source gathering, classical Arabic text extraction, and *isnad* evaluation.
3. **`DRAFT`:** Content is actively authored with structured headings, transliterations, and citation links.
4. **`SOURCE_REVIEW`:** Rigorous verification that all claims, Hadith numbers, ayah boundaries, and historical dates match verified printed editions.
5. **`LINGUISTIC_REVIEW`:** Arabic diacritics, Urdu font typography, ALA-LC transliteration, and English readability checks.
6. **`SCHOLARLY_REVIEW_REQUIRED`:** Mandatory evaluation by a formally trained Islamic scholar for theological claims, Hadith authenticity, and Fiqh rulings.
7. **`APPROVED_FOR_PUBLICATION`:** Explicit sign-off documented with reviewer role, verification date, and license clearance.
8. **`PUBLISHED`:** Content is live on the website, bundled in the PWA cache, and accessible to end-users.
9. **`NEEDS_REVISION`:** Triggered when a reader, scholar, or audit identifies an omission, typo, or citation error.
10. **`ARCHIVED`:** Superseded content retired from active publication while retaining version history.

---

## 3. Content Risk Tiers & Minimum Review Requirements

Different subject areas carry different levels of theological risk. Review requirements scale accordingly:

| Content Tier | Scope | Minimum Required Reviewer Role | Automated AI Drafting Permitted? | Review Protocol |
| :--- | :--- | :--- | :---: | :--- |
| **Tier 1: Scriptural Revelation** | Quranic Arabic Text & Translations | Qualified Quranic Verification Committee | **STRICTLY FORBIDDEN** | Verbatim matching against KFGQPC Mushaf. Zero automated or machine translations allowed. |
| **Tier 2: Sunnah & Worship Fiqh** | Hadiths, Salah, Wudu, Janazah, Eid, Zakat | Qualified Islamic Scholar (Alim / Mufti) | **STRICTLY FORBIDDEN** | Primary collection number matching, isnad verification, and multi-Madhhab legal consensus. |
| **Tier 3: Historical Narratives** | Seerah, Prophets, Sahaba, History Eras | Senior Islamic Historian / Academic Editor | Permitted for formatting only | Classical source citations (*Ibn Hisham*, *Ibn Sa'd*, *Al-Isabah*, *Tabari*). Labeling of contested reports. |
| **Tier 4: Technical & UI Strings** | Calculators, Astronomy, UI Navigation | Lead Technical QA Editor | Permitted with human sign-off | Mathematical validation, zero-layout-shift checks, accessibility audits. |

---

## 4. Reviewer Identity, Accountability & Transparency

### 4.1. Strict Prohibition of Fictional Credentials
- **No Fabricated Personas:** It is strictly forbidden to invent fictional editorial board members, pseudonyms, or fake academic endorsements.
- **Transparent Status Logging:** When content has not yet undergone formal human scholarly peer review, it must be explicitly labeled as:
  `[Review Status: Editorial Draft — Pending Qualified Scholarly Sign-Off]`
- **AI Role Transparency:** Generative AI tools may assist with code syntax, JSON formatting, and typo detection. However, AI **must never certify itself** as an authoritative Islamic scholar or sign off on religious doctrine.

### 4.2. Editorial Roles & Responsibilities:
1. **`CONTENT_RESEARCHER`:** Identifies primary Arabic source editions, extracts isnad details, and locates volume/page numbers.
2. **`TECHNICAL_EDITOR`:** Validates JSON schemas, semantic HTML markup, zero console errors, and SEO structured data.
3. **`LINGUISTIC_REVIEWER`:** Verifies Arabic vocalization (Tashkeel), Urdu Nastaliq line heights, and ALA-LC transliteration accuracy.
4. **`QUALIFIED_ISLAMIC_SCHOLAR`:** Formally trained Islamic scholar (graduate of recognized seminary) who verifies theological orthodoxy and issues final approval.

---

## 5. Version Tracking & Revision History

Every significant content modification must record an audit entry:
- `version`: Semantic version string (e.g. `v1.2.0`).
- `date`: ISO 8601 timestamp (`YYYY-MM-DD`).
- `editor`: Role and identity of the editor.
- `changeSummary`: Exact description of what was added, corrected, or refined.
- `sourceOfCorrection`: Trigger for the update (e.g., scholarly feedback, reader submission, primary source re-check).

All version tracking is managed transparently via Git commits and audit logs in `AUDIT/`.
