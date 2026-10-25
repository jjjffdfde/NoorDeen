const fs = require('fs');

const fn = new Function('window', fs.readFileSync('public/js/i18n.js', 'utf8') + '; return TRANSLATIONS;');
const trans = fn({});
console.log('Available languages in TRANSLATIONS:', Object.keys(trans));
Object.keys(trans).forEach(l => {
  console.log(`  ${l}: ${Object.keys(trans[l]).length} keys`);
});
console.log('\nKeys in EN:', Object.keys(trans.en));
