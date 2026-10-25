const fs = require('fs');

const i18n = fs.readFileSync('public/js/i18n.js', 'utf8');

// Find all languages registered
const langMatches = [...i18n.matchAll(/code:\s*['"]([a-z]{2,3})['"]\s*,\s*name:\s*['"]([^'"]+)['"]\s*,\s*nativeName:\s*['"]([^'"]+)['"]\s*,\s*dir:\s*['"]([^'"]+)['"]/g)];
console.log('Total languages registered in i18n.js:', langMatches.length);

// Check dictionaries
const dictMatches = [...i18n.matchAll(/const\s+([A-Z_]+_TRANSLATIONS|translations)\s*=/g)];
console.log('Dictionaries found in i18n.js:', dictMatches.map(m => m[0]));

// Check languages with dictionary entries
const supportedLangs = ['en', 'ur', 'ar', 'fr', 'id', 'tr', 'bn', 'hi', 'ms', 'fa', 'es'];
supportedLangs.forEach(lang => {
  const hasDict = i18n.includes(`'${lang}':`) || i18n.includes(`"${lang}":`) || i18n.includes(`${lang}:`);
  console.log(`Language ${lang} has translation dictionary:`, hasDict);
});
