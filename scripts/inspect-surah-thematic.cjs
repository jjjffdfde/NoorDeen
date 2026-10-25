const fs = require('fs');
const content = fs.readFileSync('public/js/quran.js', 'utf8');

const match = content.match(/const SURAH_THEMATIC_DATA = \{[\s\S]*?\n\};/);
if (match) {
  console.log('Found SURAH_THEMATIC_DATA');
  const keys = match[0].match(/^\s*['"]?(\d+)['"]?\s*:/gm);
  console.log('Surah keys in SURAH_THEMATIC_DATA:\n', keys ? keys.map(k => k.trim()) : 'none');
} else {
  console.log('SURAH_THEMATIC_DATA not found as const');
}
