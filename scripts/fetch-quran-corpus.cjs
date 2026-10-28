#!/usr/bin/env node
/**
 * NoorDeen — Full Quran corpus ingestion (Phase 1, Task 1.1)
 *
 * Source: Al Quran Cloud API (api.alquran.cloud), which serves the Tanzil
 * Uthmani text and published translations. Every edition is fetched in full,
 * validated against the canonical ayah counts already stored in
 * public/js/data.js, and split into one JSON chunk per surah.
 *
 * Outputs:
 *   public/data/quran/surahs/NNN.json   (114 files)
 *   public/data/quran/manifest.json     (provenance + per-surah index)
 *
 * The script never invents text: if an edition is incomplete or a surah has the
 * wrong ayah count, it aborts without writing anything.
 */
'use strict';

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.resolve(__dirname, '..');
const OUT_DIR = path.join(ROOT, 'public', 'data', 'quran');
const SURAH_DIR = path.join(OUT_DIR, 'surahs');
const RAW_DIR = path.join(ROOT, 'data', 'quran-raw');

const EDITIONS = [
  { id: 'quran-uthmani', field: 'ar', language: 'ar' },
  { id: 'en.sahih', field: 'en', language: 'en' },
  { id: 'ur.jalandhry', field: 'ur', language: 'ur' },
  { id: 'en.transliteration', field: 'tr', language: 'en' },
];

const API = 'https://api.alquran.cloud/v1/quran/';

function loadSurahMetadata() {
  const source = fs.readFileSync(path.join(ROOT, 'public', 'js', 'data.js'), 'utf8');
  const sandbox = { window: {} };
  vm.createContext(sandbox);
  vm.runInContext(`${source}\n;globalThis.__DATA = ISLAMIC_DATA;`, sandbox, {
    filename: 'data.js',
  });
  const data = sandbox.__DATA;
  if (!data || !Array.isArray(data.surahs) || data.surahs.length !== 114) {
    throw new Error('Could not read 114 surah metadata records from public/js/data.js');
  }
  return data.surahs;
}

async function fetchEdition(editionId) {
  const cacheFile = path.join(RAW_DIR, `${editionId}.json`);
  if (fs.existsSync(cacheFile)) {
    const cached = JSON.parse(fs.readFileSync(cacheFile, 'utf8'));
    if (cached && cached.code === 200) {
      console.log(`  cached  ${editionId}`);
      return cached.data;
    }
  }
  let lastError;
  for (let attempt = 1; attempt <= 4; attempt += 1) {
    try {
      const response = await fetch(`${API}${editionId}`, {
        headers: { 'User-Agent': 'NoorDeen-Corpus-Builder/1.0' },
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const payload = await response.json();
      if (payload.code !== 200 || !payload.data || !Array.isArray(payload.data.surahs)) {
        throw new Error(`Unexpected payload for ${editionId}`);
      }
      fs.mkdirSync(RAW_DIR, { recursive: true });
      fs.writeFileSync(cacheFile, JSON.stringify(payload), 'utf8');
      console.log(`  fetched ${editionId} (${payload.data.surahs.length} surahs)`);
      return payload.data;
    } catch (error) {
      lastError = error;
      console.log(`  retry ${attempt} ${editionId}: ${error.message}`);
      await new Promise((resolve) => setTimeout(resolve, attempt * 1500));
    }
  }
  throw new Error(`Failed to fetch ${editionId}: ${lastError.message}`);
}

function clean(text) {
  return String(text).replace(/^\uFEFF/, '');
}

function stripBasmalah(text, marker) {
  const trimmed = clean(text).trimStart();
  if (trimmed.startsWith(marker)) {
    return trimmed.slice(marker.length).trimStart();
  }
  return trimmed;
}

async function main() {
  console.log('NoorDeen Quran corpus ingestion');
  const metadata = loadSurahMetadata();
  const editions = {};
  for (const edition of EDITIONS) {
    editions[edition.field] = await fetchEdition(edition.id);
  }

  // The Uthmani edition prefixes the basmalah to the first ayah of every surah
  // except Al-Fatihah (where it is ayah 1) and At-Tawbah (which has none). Use
  // the exact text of 1:1 as the canonical prefix so diacritics always match.
  const fatihah = editions.ar.surahs.find((entry) => entry.number === 1);
  const basmalah = clean(fatihah.ayahs[0].text).trim();
  if (!basmalah.startsWith('بِسْمِ')) {
    throw new Error('Al-Fatihah 1:1 does not look like the basmalah');
  }

  fs.mkdirSync(SURAH_DIR, { recursive: true });
  const manifestSurahs = [];
  let totalAyahs = 0;
  let totalBytes = 0;

  for (const surah of metadata) {
    const n = surah.number;
    const expected = surah.numberOfAyahs;
    const records = {};
    for (const edition of EDITIONS) {
      const payload = editions[edition.field];
      const match = payload.surahs.find((entry) => entry.number === n);
      if (!match) throw new Error(`Surah ${n} missing from ${edition.id}`);
      if (match.ayahs.length !== expected) {
        throw new Error(
          `Surah ${n} (${surah.englishName}) has ${match.ayahs.length} ayahs in ${edition.id}, expected ${expected}`,
        );
      }
      records[edition.field] = match.ayahs;
    }

    const bismillahPre = n !== 1 && n !== 9;
    const ayahs = records.ar.map((ayah, index) => {
      const ar = bismillahPre && index === 0 ? stripBasmalah(ayah.text, basmalah) : clean(ayah.text);
      const record = {
        num: ayah.numberInSurah,
        ar,
        en: clean(records.en[index].text),
        ur: clean(records.ur[index].text),
        tr: clean(records.tr[index].text),
      };
      if (ayah.sajda) record.sajda = true;
      if (typeof ayah.juz === 'number') record.juz = ayah.juz;
      if (typeof ayah.page === 'number') record.page = ayah.page;
      return record;
    });

    const chunk = {
      number: n,
      name: surah.name,
      englishName: surah.englishName,
      englishNameTranslation: surah.englishNameTranslation,
      revelationType: surah.revelationType,
      numberOfAyahs: expected,
      juzStart: surah.juzStart,
      bismillahPre,
      ayahs,
    };
    const file = `${String(n).padStart(3, '0')}.json`;
    const json = JSON.stringify(chunk);
    fs.writeFileSync(path.join(SURAH_DIR, file), json, 'utf8');
    const bytes = Buffer.byteLength(json, 'utf8');
    totalBytes += bytes;
    totalAyahs += ayahs.length;
    manifestSurahs.push({
      number: n,
      file,
      ayahs: ayahs.length,
      bytes,
      juzStart: surah.juzStart,
    });
  }

  if (totalAyahs !== 6236) {
    throw new Error(`Total ayah count is ${totalAyahs}, expected 6236`);
  }

  const manifest = {
    catalogVersion: '1.0.0',
    generatedAt: new Date().toISOString(),
    generatedBy: 'scripts/fetch-quran-corpus.cjs',
    source: {
      provider: 'Al Quran Cloud',
      endpoint: 'https://api.alquran.cloud/v1/quran/{edition}',
      license: 'See individual edition metadata; Tanzil Uthmani text and published translations',
      retrievedAt: new Date().toISOString(),
    },
    editions: EDITIONS.map((edition) => ({
      id: edition.id,
      field: edition.field,
      language: edition.language,
    })),
    totalSurahs: 114,
    totalAyahs,
    totalBytes,
    surahs: manifestSurahs,
  };
  fs.writeFileSync(path.join(OUT_DIR, 'manifest.json'), JSON.stringify(manifest, null, 2), 'utf8');

  console.log(`Wrote 114 surah chunks, ${totalAyahs} ayahs, ${(totalBytes / 1024).toFixed(1)} KB`);
}

main().catch((error) => {
  console.error(`FAILED: ${error.message}`);
  process.exit(1);
});
