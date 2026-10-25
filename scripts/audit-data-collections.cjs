const fs = require('fs');

const content = fs.readFileSync('public/js/data.js', 'utf8');

const matches = content.match(/const\s+([A-Za-z0-9_]+)\s*=/g) || [];
console.log('Variables defined in data.js:\n', matches.map(m => m.replace(/const\s+|[\s=]/g, '')));

const hadithMatches = content.match(/id:\s*['"]hadith-/g) || [];
console.log('Hadith entries in data.js:', hadithMatches.length);

const duaMatches = content.match(/id:\s*['"]dua-/g) || [];
console.log('Dua entries in data.js:', duaMatches.length);

const sahabaMatches = content.match(/id:\s*['"]sahaba-/g) || [];
console.log('Sahaba entries in data.js:', sahabaMatches.length);

const prophetMatches = content.match(/id:\s*['"]prophet-/g) || [];
console.log('Prophet entries in data.js:', prophetMatches.length);

const kalimaMatches = content.match(/id:\s*['"]kalima-/g) || [];
console.log('Kalima entries in data.js:', kalimaMatches.length);

// Also check quran.js
const quranContent = fs.readFileSync('public/js/quran.js', 'utf8');
const surahMatches = quranContent.match(/id:\s*\d+/g) || [];
console.log('Surah references in quran.js:', surahMatches.length);
