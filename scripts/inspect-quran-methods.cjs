const fs = require('fs');
const code = fs.readFileSync('public/js/quran.js', 'utf8');

const classMatch = code.match(/class QuranReader\s*\{([\s\S]*)\n\}/);
if (classMatch) {
  const body = classMatch[1];
  const methods = [...body.matchAll(/^\s*(?:async\s+)?([a-zA-Z0-9_]+)\s*\([^)]*\)\s*\{/gm)].map(m => m[1]);
  console.log('QuranReader methods:', methods);
}
