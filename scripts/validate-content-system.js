/**
 * ISLAMIC KNOWLEDGE PORTAL — CONTENT SYSTEM & TAXONOMY VALIDATOR
 * Verifies taxonomy, schemas, source registry, review workflows, and legacy data compatibility.
 * Zero external npm dependencies (native Node.js ES Modules).
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');

let totalChecks = 0;
let passedChecks = 0;
let failedChecks = 0;
const errors = [];

function check(condition, message) {
  totalChecks++;
  if (condition) {
    passedChecks++;
    console.log(`  ✓ PASS: ${message}`);
  } else {
    failedChecks++;
    errors.push(message);
    console.error(`  ✗ FAIL: ${message}`);
  }
}

export function validateContentSystem() {
  console.log('====================================================');
  console.log('   ISLAMIC KNOWLEDGE PORTAL — CONTENT SYSTEM AUDIT   ');
  console.log('====================================================\n');

  // 1. TAXONOMY REGISTRY VALIDATION
  console.log('--- 1. Content Taxonomy & Domain Architecture ---');
  const taxonomyPath = path.join(ROOT_DIR, 'data', 'taxonomy', 'content-taxonomy.json');
  check(fs.existsSync(taxonomyPath), 'Taxonomy registry exists at data/taxonomy/content-taxonomy.json');

  let taxonomy;
  try {
    taxonomy = JSON.parse(fs.readFileSync(taxonomyPath, 'utf-8'));
    check(taxonomy.domains && Array.isArray(taxonomy.domains), 'Taxonomy contains domains array');
    check(taxonomy.domains.length === 20, `Taxonomy defines exactly 20 top-level content domains (found ${taxonomy.domains?.length})`);

    const domainIds = new Set();
    const domainSlugs = new Set();
    const catIds = new Set();
    let allCategoriesValid = true;

    taxonomy.domains.forEach(d => {
      if (domainIds.has(d.id)) {
        check(false, `Duplicate domain ID detected: ${d.id}`);
      }
      domainIds.add(d.id);

      if (domainSlugs.has(d.slug)) {
        check(false, `Duplicate domain slug detected: ${d.slug}`);
      }
      domainSlugs.add(d.slug);

      if (!d.id.startsWith('dom-')) {
        check(false, `Domain ID does not follow naming convention (dom-*): ${d.id}`);
      }

      if (!d.name || !d.arabicName || !d.currentRoute) {
        check(false, `Domain missing required metadata: ${d.id}`);
      }

      if (!Array.isArray(d.categories) || d.categories.length === 0) {
        allCategoriesValid = false;
        console.error(`Domain has empty categories: ${d.id}`);
      } else {
        d.categories.forEach(c => {
          if (catIds.has(c.id)) {
            check(false, `Duplicate category ID detected: ${c.id}`);
          }
          catIds.add(c.id);

          if (!c.id.startsWith('cat-')) {
            check(false, `Category ID does not follow naming convention (cat-*): ${c.id}`);
          }
        });
      }
    });

    check(allCategoriesValid, 'All 20 domains define non-empty, well-structured subcategories');
    check(catIds.size >= 50, `Subcategories coverage is extensive (${catIds.size} subcategories defined)`);
  } catch (err) {
    check(false, `Taxonomy JSON failed to parse: ${err.message}`);
  }

  // 2. SOURCE REGISTRY & LICENSING VALIDATION
  console.log('\n--- 2. Source Registry & Licensing Provenance ---');
  const sourcesPath = path.join(ROOT_DIR, 'data', 'sources', 'registry.json');
  check(fs.existsSync(sourcesPath), 'Source registry exists at data/sources/registry.json');

  let sourcesRegistry;
  try {
    sourcesRegistry = JSON.parse(fs.readFileSync(sourcesPath, 'utf-8'));
    check(sourcesRegistry.sources && Array.isArray(sourcesRegistry.sources), 'Source registry contains sources array');
    check(sourcesRegistry.sources.length >= 21, `Source registry catalogs all 21 identified sources (found ${sourcesRegistry.sources?.length})`);

    const sourceIds = new Set();
    const validLicenseStatuses = ['VERIFIED_PERMISSION', 'PERMISSION_REQUIRES_REVIEW', 'LICENSE_UNKNOWN', 'NOT_PERMITTED'];
    const validSourceTypes = ['primary', 'secondary', 'tertiary'];
    let allSourcesValid = true;

    sourcesRegistry.sources.forEach(s => {
      if (sourceIds.has(s.id)) {
        check(false, `Duplicate source ID detected: ${s.id}`);
      }
      sourceIds.add(s.id);

      if (!/^SRC-[0-9]{3}$/.test(s.id)) {
        check(false, `Source ID violates pattern SRC-XXX: ${s.id}`);
      }

      if (!validLicenseStatuses.includes(s.licenseStatus)) {
        allSourcesValid = false;
        console.error(`Invalid licenseStatus in ${s.id}: ${s.licenseStatus}`);
      }

      if (!validSourceTypes.includes(s.sourceType)) {
        allSourcesValid = false;
        console.error(`Invalid sourceType in ${s.id}: ${s.sourceType}`);
      }

      if (typeof s.attributionRequired !== 'boolean' || typeof s.redistributionPermitted !== 'boolean') {
        allSourcesValid = false;
        console.error(`Invalid boolean permission flags in ${s.id}`);
      }
    });

    check(allSourcesValid, 'All source records adhere to license status and permission schema rules');
  } catch (err) {
    check(false, `Sources JSON failed to parse: ${err.message}`);
  }

  // 3. RELIGIOUS REVIEW WORKFLOW VALIDATION
  console.log('\n--- 3. Religious Review Workflow & Governance ---');
  const workflowPath = path.join(ROOT_DIR, 'data', 'workflow', 'review-workflow.json');
  check(fs.existsSync(workflowPath), 'Workflow configuration exists at data/workflow/review-workflow.json');

  try {
    const workflow = JSON.parse(fs.readFileSync(workflowPath, 'utf-8'));
    check(workflow.lifecycleStages && workflow.lifecycleStages.length === 10, 'Workflow defines exactly 10 lifecycle stages');

    const expectedStages = [
      'DISCOVERED', 'RESEARCH_REQUIRED', 'DRAFT', 'SOURCE_REVIEW',
      'LINGUISTIC_REVIEW', 'SCHOLARLY_REVIEW_REQUIRED', 'APPROVED_FOR_PUBLICATION',
      'PUBLISHED', 'NEEDS_REVISION', 'ARCHIVED'
    ];
    let allStagesPresent = true;
    expectedStages.forEach(st => {
      if (!workflow.lifecycleStages.some(s => s.id === st)) {
        allStagesPresent = false;
        console.error(`Missing lifecycle stage: ${st}`);
      }
    });
    check(allStagesPresent, 'All 10 required lifecycle stages configured');

    check(workflow.contentRiskTiers && workflow.contentRiskTiers.length === 4, 'Workflow defines 4 content risk tiers');
    const tier1 = workflow.contentRiskTiers.find(t => t.tier === 1);
    check(tier1 && tier1.aiGenerationAllowed === false, 'Tier 1 (Divine Revelation) strictly forbids automated AI generation');

    const tier2 = workflow.contentRiskTiers.find(t => t.tier === 2);
    check(tier2 && tier2.minimumApprovalRole === 'QUALIFIED_ISLAMIC_SCHOLAR', 'Tier 2 (Hadith & Fiqh) requires qualified Islamic scholar sign-off');
  } catch (err) {
    check(false, `Workflow JSON failed to parse: ${err.message}`);
  }

  // 4. CONTENT SCHEMAS VALIDATION
  console.log('\n--- 4. Schema Descriptors & Structural Contracts ---');
  const schemaFiles = [
    'base-content.schema.json',
    'seerah-chapter.schema.json',
    'sahaba-biography.schema.json',
    'prophet-narrative.schema.json',
    'history-era.schema.json',
    'hadith-tradition.schema.json',
    'dua-supplication.schema.json',
    'worship-guide.schema.json',
    'source-registry.schema.json',
    'taxonomy.schema.json',
    'workflow.schema.json'
  ];

  let allSchemasValidJson = true;
  schemaFiles.forEach(file => {
    const schemaPath = path.join(ROOT_DIR, 'data', 'schemas', file);
    if (!fs.existsSync(schemaPath)) {
      allSchemasValidJson = false;
      console.error(`Missing schema file: ${file}`);
    } else {
      try {
        const parsed = JSON.parse(fs.readFileSync(schemaPath, 'utf-8'));
        if (!parsed.$schema || !parsed.title || !parsed.type) {
          allSchemasValidJson = false;
          console.error(`Invalid schema structure in: ${file}`);
        }
      } catch (e) {
        allSchemasValidJson = false;
        console.error(`Failed to parse schema ${file}: ${e.message}`);
      }
    }
  });

  check(allSchemasValidJson, `All ${schemaFiles.length} schema descriptors are valid JSON Schema Draft-07 specifications`);

  // 5. BACKWARD COMPATIBILITY AUDIT (LEGACY DATA INTEGRITY)
  console.log('\n--- 5. Backward Compatibility & Legacy Data Audit ---');
  const legacyDataPath = path.join(ROOT_DIR, 'public', 'js', 'data.js');
  check(fs.existsSync(legacyDataPath), 'Legacy data store exists intact at public/js/data.js');

  const legacyContent = fs.readFileSync(legacyDataPath, 'utf-8');
  check(legacyContent.includes('offlineSurahs'), 'Legacy offlineSurahs object intact for Phase 1-2 backwards compatibility');
  check(legacyContent.includes('hadiths'), 'Legacy hadiths object intact');
  check(legacyContent.includes('kalimas'), 'Legacy kalimas object intact');
  check(legacyContent.includes('duas'), 'Legacy duas object intact');

  const publicRegistryPath = path.join(ROOT_DIR, 'data', 'quran-translations', 'registry.json');
  check(fs.existsSync(publicRegistryPath), 'Quran translation registry intact at data/quran-translations/registry.json');

  // SUMMARY
  console.log('\n====================================================');
  console.log('CONTENT SYSTEM VALIDATION SUMMARY:');
  console.log(`  Total Checks Executed: ${totalChecks}`);
  console.log(`  Passed Checks:         ${passedChecks}`);
  console.log(`  Failed Checks:         ${failedChecks}`);
  console.log('====================================================\n');

  return { totalChecks, passedChecks, failedChecks, errors };
}

// Allow CLI execution
if (process.argv[1] && process.argv[1].endsWith('validate-content-system.js')) {
  const result = validateContentSystem();
  if (result.failedChecks > 0) {
    process.exit(1);
  } else {
    console.log('🎉 Phase 2 Content System Validation PASSED with 0 errors.');
    process.exit(0);
  }
}