const fs = require('fs');
const path = require('path');

const i18nContent = fs.readFileSync(path.join(__dirname, '..', 'public', 'js', 'i18n.js'), 'utf-8');
const quranContent = fs.readFileSync(path.join(__dirname, '..', 'public', 'js', 'quran.js'), 'utf-8');
const sitemapContent = fs.readFileSync(path.join(__dirname, '..', 'public', 'sitemap.xml'), 'utf-8');

// Extract LANGUAGES
const start = i18nContent.indexOf('const LANGUAGES = [');
const end = i18nContent.indexOf('];', start) + 1;
const langStr = i18nContent.substring(start, end).replace('const LANGUAGES = ', '');
const langs = eval(langStr);

// Extract QURAN_TRANSLATION_REGISTRY
const qStart = quranContent.indexOf('const QURAN_TRANSLATION_REGISTRY = [');
const qEnd = quranContent.indexOf('];', qStart) + 1;
const qStr = quranContent.substring(qStart, qEnd).replace('const QURAN_TRANSLATION_REGISTRY = ', '');
const qReg = eval(qStr);

const qMap = {};
qReg.forEach(q => {
  qMap[q.code] = q;
});

// Verified translation keys in TRANSLATIONS
const verifiedKeys = ['en', 'ar', 'ur', 'id', 'tr', 'fr', 'bn', 'hi', 'ms', 'fa', 'es'];

// Hreflangs in sitemap
// <xhtml:link rel="alternate" hreflang="ar" href="https://islamicknowledge.example.com/?lang=ar" />
const hreflangRegex = /hreflang="([^"]+)"/g;
const hreflangs = new Set();
let hm;
while ((hm = hreflangRegex.exec(sitemapContent)) !== null) {
  hreflangs.add(hm[1]);
}

function escapeCsv(str) {
  if (str === null || str === undefined) return '""';
  const clean = String(str).replace(/"/g, '""').replace(/\r?\n|\r/g, ' ');
  return `"${clean}"`;
}

const rows = [
  [
    'Language Code',
    'English Name',
    'Native Name',
    'Direction',
    'Script',
    'UI Dictionary Status',
    'Quran Translation Available',
    'Quran Translator / Edition',
    'Translation Verification Status',
    'Hreflang in Sitemap'
  ]
];

langs.forEach(l => {
  const isVerifiedUI = verifiedKeys.includes(l.code);
  const uiStatus = isVerifiedUI ? 'Verified Complete (100%)' : (l.coverage === 'authorized_partial' ? 'Authorized Partial' : 'In Progress (Fallback to EN)');
  
  const qData = qMap[l.code];
  let qAvail = 'No';
  let qTrans = 'Not Yet Available';
  let qStatus = 'N/A';

  if (qData) {
    qAvail = 'Yes';
    qTrans = `${qData.translator} (${qData.translationTitle})`;
    qStatus = qData.verificationStatus === 'verified' ? 'Scholarly Verified' : 'In Progress Review';
  }

  const inHreflang = hreflangs.has(l.code) ? 'Yes (Homepage Query)' : 'No (Client-Side Param)';

  rows.push([
    l.code,
    l.name,
    l.nativeName,
    l.dir.toUpperCase(),
    l.script,
    uiStatus,
    qAvail,
    qTrans,
    qStatus,
    inHreflang
  ]);
});

const csvContent = rows.map(r => r.map(escapeCsv).join(',')).join('\n');
const outPath = path.join(__dirname, '..', 'AUDIT', 'PHASE-9', 'MULTILINGUAL-SEO-AND-COVERAGE.csv');
fs.writeFileSync(outPath, csvContent, 'utf-8');
console.log(`Generated ${outPath} with ${rows.length - 1} languages.`);
