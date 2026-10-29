// scripts/fetch-tafsir.cjs
// Fetches authentic classical tafsir and asbab al-nuzul, validates coverage
// against the bundled Quran corpus, and writes per-surah chunks plus a manifest
// with edition, translator, source and rights metadata.
//
// Nothing here is generated or paraphrased: text is stored verbatim from the
// named editions (HTML stripped, whitespace normalised).
//
// Sources
//   Tafsir al-Jalalayn (English + Arabic)  spa5k/tafsir_api
//   Asbab al-Nuzul (Arabic reports)        mostafaahmed97/asbab-al-nuzul-dataset (MIT)
//
// Usage:
//   node scripts/fetch-tafsir.cjs                  # full run
//   node scripts/fetch-tafsir.cjs --resume         # keep valid existing chunks
//   node scripts/fetch-tafsir.cjs --limit 3        # first 3 surahs only
//   node scripts/fetch-tafsir.cjs --check          # validate existing output only

const fs = require('fs');
const path = require('path');
const https = require('https');

const ROOT = path.resolve(__dirname, '..');
const QURAN_MANIFEST = path.join(ROOT, 'public', 'data', 'quran', 'manifest.json');
const OUT_DIR = path.join(ROOT, 'public', 'data', 'tafsir');
const CHUNK_DIR = path.join(OUT_DIR, 'surahs');

const JALALAYN_BASE = 'https://raw.githubusercontent.com/spa5k/tafsir_api/main/tafsir/';
const JALALAYN_FALLBACK = 'https://cdn.jsdelivr.net/gh/spa5k/tafsir_api@main/tafsir/';
const ASBAB_BASE = 'https://raw.githubusercontent.com/mostafaahmed97/asbab-al-nuzul-dataset/main/data/structured/json/';

const EDITIONS = [
  {
    id: 'jalalayn-en',
    field: 'en',
    source: 'jalalayn',
    slug: 'en-al-jalalayn',
    title: 'Tafsir al-Jalalayn (English translation)',
    arabicTitle: 'تفسير الجلالين',
    author: 'Jalal al-Din al-Mahalli (d. 864 AH) and Jalal al-Din al-Suyuti (d. 911 AH)',
    language: 'en',
    dir: 'ltr',
    translator: 'Dr. Feras Hamza',
    publisher: 'Royal Aal al-Bayt Institute for Islamic Thought (altafsir.com)',
    rightsStatus: 'attributed-copyright',
    rightsNote:
      "English translation © Royal Aal al-Bayt Institute for Islamic Thought. Bundled with attribution for non-commercial educational use; commercial redistribution requires the Institute's permission.",
    coverageNote: 'Verse-by-verse concise classical commentary. Every verse of the Quran has an entry.'
  },
  {
    id: 'jalalayn-ar',
    field: 'ar',
    source: 'jalalayn',
    slug: 'ar-tafsir-al-jalalayn',
    title: 'Tafsir al-Jalalayn (Arabic original)',
    arabicTitle: 'تفسير الجلالين',
    author: 'Jalal al-Din al-Mahalli (d. 864 AH) and Jalal al-Din al-Suyuti (d. 911 AH)',
    language: 'ar',
    dir: 'rtl',
    translator: null,
    publisher: 'Classical text; digitised text distributed in the Tafsir API dataset',
    rightsStatus: 'public-domain',
    rightsNote:
      'The Arabic original is a classical work whose authors died in 864 AH and 911 AH; the text itself is in the public domain. The digitisation is used as distributed by the Tafsir API dataset.',
    coverageNote: 'Arabic original. The digitised edition omits a few verses; gaps are shown explicitly.'
  },
  {
    id: 'asbab-ar',
    field: 'asbab',
    source: 'asbab',
    slug: 'data/structured/json',
    title: 'Asbab al-Nuzul — occasions of revelation (Arabic reports)',
    arabicTitle: 'أسباب النزول',
    author: 'Reports compiled in Ṣaḥīḥ Asbāb al-Nuzūl by Ibrāhīm Muḥammad al-ʿAlī',
    language: 'ar',
    dir: 'rtl',
    translator: null,
    publisher: 'Asbab al-Nuzul Dataset (MIT licence)',
    rightsStatus: 'mit',
    rightsNote:
      'Dataset released under the MIT licence. The reports themselves are classical hadith and reports quoted in the named compilation; no English translation is bundled.',
    coverageNote:
      'Only verses for which the compilation records an authentic occasion have an entry. Absence of an entry is not a claim that no occasion exists. Reports are Arabic only.'
  }
];

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

function get(url) {
  return new Promise((resolve, reject) => {
    const req = https.get(url, { headers: { 'User-Agent': 'NoorDeen-tafsir-ingest/1.0' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        res.resume();
        get(res.headers.location).then(resolve, reject);
        return;
      }
      const chunks = [];
      res.on('data', (c) => chunks.push(c));
      res.on('end', () => {
        if (res.statusCode !== 200) {
          reject(new Error(`HTTP ${res.statusCode} for ${url}`));
          return;
        }
        resolve(Buffer.concat(chunks));
      });
    });
    req.on('error', reject);
    req.setTimeout(30000, () => req.destroy(new Error('timeout')));
  });
}

async function getWithRetry(url, attempts = 3) {
  let lastError;
  for (let i = 0; i < attempts; i++) {
    try {
      return await get(url);
    } catch (err) {
      lastError = err;
      await sleep(700 * (i + 1));
    }
  }
  throw lastError;
}

function decodeEntities(text) {
  return text
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&#x27;/g, "'")
    .replace(/&#(\d+);/g, (_, d) => String.fromCharCode(Number(d)));
}

function cleanText(raw) {
  if (typeof raw !== 'string') return '';
  let text = raw;
  text = text.replace(/<\s*br\s*\/?>/gi, '\n');
  text = text.replace(/<\s*\/\s*p\s*>/gi, '\n\n');
  text = text.replace(/<[^>]+>/g, '');
  text = decodeEntities(text);
  text = text.replace(/\r\n?/g, '\n');
  text = text.replace(/[ \t\u00a0]+/g, ' ');
  text = text.replace(/ *\n */g, '\n');
  text = text.replace(/\n{3,}/g, '\n\n');
  return text.trim();
}

function isBlank(text) {
  return !text || !text.replace(/[\s\u200b-\u200f]/g, '');
}

function readQuranManifest() {
  const manifest = JSON.parse(fs.readFileSync(QURAN_MANIFEST, 'utf8'));
  const counts = new Map();
  for (const surah of manifest.surahs) counts.set(surah.number, surah.ayahs);
  return counts;
}

async function fetchJalalayn(edition, surahNumber) {
  const fileName = `${surahNumber}.json`;
  const urls = [
    JALALAYN_BASE + edition.slug + '/' + fileName,
    JALALAYN_FALLBACK + edition.slug + '/' + fileName
  ];
  let lastError;
  for (const url of urls) {
    try {
      const buffer = await getWithRetry(url);
      const parsed = JSON.parse(buffer.toString('utf8'));
      const items = Array.isArray(parsed) ? parsed : parsed.ayahs;
      if (!Array.isArray(items)) throw new Error('unexpected shape');
      return items.map((item) => ({ ayah: Number(item.ayah), text: item.text }));
    } catch (err) {
      lastError = err;
    }
  }
  throw lastError;
}

async function fetchAsbab(surahNumber) {
  const fileName = String(surahNumber).padStart(3, '0') + '.json';
  const buffer = await getWithRetry(ASBAB_BASE + fileName);
  const records = JSON.parse(buffer.toString('utf8'));
  const out = [];
  for (const record of records) {
    const ayahs = (record.ayahs || []).map(Number).filter(Number.isInteger);
    const occasions = (record.occasions || []).map(cleanText).filter((t) => !isBlank(t));
    if (!ayahs.length || !occasions.length) continue;
    out.push({ ayahs, occasions });
  }
  return out;
}

function chunkPath(surahNumber) {
  return path.join(CHUNK_DIR, String(surahNumber).padStart(3, '0') + '.json');
}

function coverageOf(payload) {
  const counts = Object.fromEntries(EDITIONS.map((e) => [e.id, 0]));
  for (const fields of Object.values(payload.ayahs || {})) {
    for (const edition of EDITIONS) {
      if (fields[edition.field] !== undefined) counts[edition.id] += 1;
    }
  }
  return counts;
}

function asbabGroupCount(payload) {
  const ranges = new Set();
  for (const fields of Object.values(payload.ayahs || {})) {
    if (fields.asbabRange) ranges.add(fields.asbabRange);
  }
  return ranges.size;
}

async function processSurah(surahNumber, expected, resume) {
  const problems = [];
  const anomalies = [];
  let payload;
  let counts;
  let groups = 0;

  if (resume && fs.existsSync(chunkPath(surahNumber))) {
    try {
      payload = JSON.parse(fs.readFileSync(chunkPath(surahNumber), 'utf8'));
      if (payload.surah !== surahNumber) throw new Error('surah mismatch');
      counts = coverageOf(payload);
      groups = asbabGroupCount(payload);
      return { payload, counts, groups, problems, anomalies, resumed: true };
    } catch (err) {
      problems.push(`surah ${surahNumber}: existing chunk unusable (${err.message}); refetching`);
    }
  }

  const ayahs = {};
  counts = {};

  for (const edition of EDITIONS) {
    if (edition.source === 'asbab') {
      let records;
      try {
        records = await fetchAsbab(surahNumber);
      } catch (err) {
        if (/HTTP 404/.test(err.message)) {
          counts[edition.id] = 0;
          continue;
        }
        problems.push(`surah ${surahNumber} edition ${edition.id}: ${err.message}`);
        counts[edition.id] = 0;
        continue;
      }
      let kept = 0;
      for (const record of records) {
        const valid = record.ayahs.filter((a) => a >= 1 && a <= expected);
        if (valid.length !== record.ayahs.length) {
          anomalies.push(
            `surah ${surahNumber} asbab: dataset lists ayah(s) ${record.ayahs.join(',')} but the surah has ${expected}; kept ${valid.join(',') || 'none'}`
          );
        }
        if (!valid.length) continue;
        const range = valid.join('-');
        for (const ayah of valid) {
          ayahs[String(ayah)] = ayahs[String(ayah)] || {};
          ayahs[String(ayah)][edition.field] = ayahs[String(ayah)][edition.field] || [];
          ayahs[String(ayah)][edition.field].push(...record.occasions);
          ayahs[String(ayah)].asbabRange = range;
          kept += 1;
        }
        groups += 1;
      }
      counts[edition.id] = kept;
      continue;
    }

    let items;
    try {
      items = await fetchJalalayn(edition, surahNumber);
    } catch (err) {
      problems.push(`surah ${surahNumber} edition ${edition.id}: ${err.message}`);
      counts[edition.id] = 0;
      continue;
    }

    let kept = 0;
    for (const item of items) {
      const ayah = item.ayah;
      if (!Number.isInteger(ayah) || ayah < 1 || ayah > expected) {
        problems.push(`surah ${surahNumber} edition ${edition.id}: ayah out of range (${item.ayah})`);
        continue;
      }
      const text = cleanText(item.text);
      if (isBlank(text)) continue;
      ayahs[String(ayah)] = ayahs[String(ayah)] || {};
      ayahs[String(ayah)][edition.field] = text;
      kept += 1;
    }
    counts[edition.id] = kept;
  }

  payload = { surah: surahNumber, ayahs };
  const json = JSON.stringify(payload);
  fs.writeFileSync(chunkPath(surahNumber), json, 'utf8');
  return { payload, counts, groups, problems, anomalies, resumed: false };
}

async function pool(items, worker, size = 4) {
  const results = new Array(items.length);
  let next = 0;
  const runners = Array.from({ length: Math.min(size, items.length) }, async () => {
    while (next < items.length) {
      const index = next++;
      results[index] = await worker(items[index]);
    }
  });
  await Promise.all(runners);
  return results;
}

async function build({ limit, resume } = {}) {
  const canonicalCounts = readQuranManifest();
  fs.mkdirSync(CHUNK_DIR, { recursive: true });

  const surahNumbers = [...canonicalCounts.keys()].sort((a, b) => a - b).slice(0, limit || undefined);
  const editionTotals = new Map(EDITIONS.map((e) => [e.id, { verses: 0, surahs: 0 }]));
  const perSurah = new Array(surahNumbers.length);
  const problems = [];
  const anomalies = [];
  let asbabGroups = 0;
  let resumedCount = 0;
  let done = 0;

  await pool(
    surahNumbers,
    async (surahNumber) => {
      const index = surahNumbers.indexOf(surahNumber);
      const expected = canonicalCounts.get(surahNumber);
      const result = await processSurah(surahNumber, expected, resume);
      problems.push(...result.problems);
      anomalies.push(...result.anomalies);
      if (result.resumed) resumedCount += 1;
      for (const [id, kept] of Object.entries(result.counts)) {
        if (kept > 0) editionTotals.get(id).surahs += 1;
        editionTotals.get(id).verses += kept;
      }
      asbabGroups += result.groups;
      const json = JSON.stringify(result.payload);
      perSurah[index] = {
        number: surahNumber,
        file: String(surahNumber).padStart(3, '0') + '.json',
        ayahs: expected,
        bytes: Buffer.byteLength(json),
        coverage: result.counts
      };
      done += 1;
      const summary = EDITIONS.map((e) => `${e.id}=${result.counts[e.id]}/${expected}`).join(' ');
      console.log(`[${String(done).padStart(3, ' ')}/${surahNumbers.length}] surah ${String(surahNumber).padStart(3, '0')}: ${summary}`);
    },
    4
  );

  const manifest = {
    catalogVersion: '1.0.0',
    generatedAt: new Date().toISOString(),
    generatedBy: 'scripts/fetch-tafsir.cjs',
    sources: [
      {
        provider: 'Tafsir API dataset',
        repository: 'https://github.com/spa5k/tafsir_api',
        baseUrl: JALALAYN_BASE
      },
      {
        provider: 'Asbab al-Nuzul Dataset',
        repository: 'https://github.com/mostafaahmed97/asbab-al-nuzul-dataset',
        baseUrl: ASBAB_BASE,
        licence: 'MIT'
      }
    ],
    editions: EDITIONS.map((e) => ({
      id: e.id,
      field: e.field,
      title: e.title,
      arabicTitle: e.arabicTitle,
      author: e.author,
      language: e.language,
      dir: e.dir,
      translator: e.translator,
      publisher: e.publisher,
      rightsStatus: e.rightsStatus,
      rightsNote: e.rightsNote,
      coverageNote: e.coverageNote
    })),
    totalSurahs: perSurah.length,
    totalAyahs: perSurah.reduce((sum, s) => sum + s.ayahs, 0),
    totalBytes: perSurah.reduce((sum, s) => sum + s.bytes, 0),
    asbabGroups,
    editionTotals: Object.fromEntries([...editionTotals.entries()]),
    surahs: perSurah,
    anomalies,
    problems
  };

  fs.writeFileSync(path.join(OUT_DIR, 'manifest.json'), JSON.stringify(manifest, null, 2) + '\n', 'utf8');

  console.log('\n--- totals ---');
  for (const [id, total] of editionTotals) {
    console.log(`${id}: ${total.verses} verses across ${total.surahs} surahs`);
  }
  console.log(`asbab reports: ${asbabGroups}`);
  console.log(`chunks: ${perSurah.length}, payload: ${manifest.totalBytes} bytes, resumed: ${resumedCount}`);
  if (anomalies.length) {
    console.log(`\nSOURCE ANOMALIES (${anomalies.length}, recorded in the manifest):`);
    anomalies.slice(0, 10).forEach((a) => console.log(' - ' + a));
  }
  if (problems.length) {
    console.log(`\nPROBLEMS (${problems.length}):`);
    problems.slice(0, 30).forEach((p) => console.log(' - ' + p));
    process.exitCode = 1;
  }
}

function check() {
  const manifestPath = path.join(OUT_DIR, 'manifest.json');
  if (!fs.existsSync(manifestPath)) {
    console.error('manifest missing; run the fetch first');
    process.exit(1);
  }
  const canonicalCounts = readQuranManifest();
  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
  const problems = [];
  if (manifest.totalSurahs !== 114) problems.push(`expected 114 surahs, found ${manifest.totalSurahs}`);
  if (manifest.totalAyahs !== 6236) problems.push(`expected 6,236 ayahs, found ${manifest.totalAyahs}`);

  for (const entry of manifest.surahs) {
    const file = path.join(CHUNK_DIR, entry.file);
    if (!fs.existsSync(file)) {
      problems.push(`missing chunk ${entry.file}`);
      continue;
    }
    const payload = JSON.parse(fs.readFileSync(file, 'utf8'));
    if (payload.surah !== entry.number) problems.push(`${entry.file}: surah mismatch`);
    const expected = canonicalCounts.get(entry.number);
    for (const [ayah, fields] of Object.entries(payload.ayahs)) {
      const n = Number(ayah);
      if (!Number.isInteger(n) || n < 1 || n > expected) problems.push(`${entry.file}: ayah ${ayah} out of range`);
      for (const [field, value] of Object.entries(fields)) {
        if (field === 'asbabRange') continue;
        const texts = Array.isArray(value) ? value : [value];
        if (!texts.length) problems.push(`${entry.file}:${ayah} empty ${field}`);
        for (const text of texts) {
          if (typeof text !== 'string' || isBlank(text)) problems.push(`${entry.file}:${ayah} empty ${field}`);
          if (/<[a-z/][^>]*>/i.test(text)) problems.push(`${entry.file}:${ayah} raw HTML in ${field}`);
        }
      }
    }
  }

  if (problems.length) {
    console.log(`CHECK FAILED (${problems.length}):`);
    problems.slice(0, 40).forEach((p) => console.log(' - ' + p));
    process.exit(1);
  }
  console.log(`CHECK OK: ${manifest.totalSurahs} chunks, ${manifest.totalAyahs} ayahs, ${manifest.totalBytes} bytes`);
  for (const [id, total] of Object.entries(manifest.editionTotals)) {
    console.log(`  ${id}: ${total.verses} verses / ${total.surahs} surahs`);
  }
  console.log(`  asbab reports: ${manifest.asbabGroups}`);
}

(async () => {
  const args = process.argv.slice(2);
  if (args.includes('--check')) {
    check();
    return;
  }
  const limitIndex = args.indexOf('--limit');
  const limit = limitIndex !== -1 ? Number(args[limitIndex + 1]) : undefined;
  await build({ limit, resume: args.includes('--resume') });
})();
