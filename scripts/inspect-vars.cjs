const fs = require('fs');

const dataJs = fs.readFileSync('public/js/data.js', 'utf8');
const dataVarMatches = dataJs.match(/(?:const|let|var)\s+([A-Za-z0-9_]+)\s*=/g);
console.log('Top level variables in data.js:', dataVarMatches ? dataVarMatches.slice(0, 15) : 'None');

const i18nJs = fs.readFileSync('public/js/i18n.js', 'utf8');
const i18nVarMatches = i18nJs.match(/(?:const|let|var)\s+([A-Za-z0-9_]+)\s*=/g);
console.log('Top level variables in i18n.js:', i18nVarMatches ? i18nVarMatches.slice(0, 15) : 'None');

// Inspect LANGUAGES array in i18n.js
const langIdx = i18nJs.indexOf('LANGUAGES');
if (langIdx !== -1) {
  console.log('LANGUAGES excerpt:\n', i18nJs.substring(langIdx, langIdx + 400));
}
