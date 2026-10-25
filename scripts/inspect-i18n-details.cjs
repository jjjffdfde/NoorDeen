const fs = require('fs');
const i18nJs = fs.readFileSync('public/js/i18n.js', 'utf8');

console.log('i18n.js size:', i18nJs.length, 'bytes');

// Check languages registered
const langMatches = [...i18nJs.matchAll(/([a-zA-Z-]+)\s*:\s*\{\s*name\s*:\s*['"]([^'"]+)['"]/g)];
console.log('Registered languages in i18n:', langMatches.map(m => ({ code: m[1], name: m[2] })));

// Check translation dictionaries
const dictMatches = [...i18nJs.matchAll(/(?:const|let|var)\s+TRANSLATIONS\s*=\s*\{([\s\S]*?)\n\};/g)];
if (dictMatches.length) {
  console.log('Has TRANSLATIONS object');
}

// Find methods in I18n
const methods = [...i18nJs.matchAll(/([a-zA-Z0-9_]+)\s*\([^)]*\)\s*\{/g)].map(m => m[1]);
console.log('I18n methods:', [...new Set(methods)].slice(0, 20));
