const fs = require('fs');
const vm = require('vm');

const i18n = fs.readFileSync('public/js/i18n.js', 'utf8');
const ctx = { window: {}, console };
vm.createContext(ctx);
vm.runInContext(i18n + '; this.TRANSLATIONS = TRANSLATIONS;', ctx);

console.log('TRANSLATIONS languages:', Object.keys(ctx.TRANSLATIONS));
console.log('Sample EN keys (first 25):', Object.keys(ctx.TRANSLATIONS.en).slice(0, 25));
console.log('Total EN keys:', Object.keys(ctx.TRANSLATIONS.en).length);
console.log('Total UR keys:', Object.keys(ctx.TRANSLATIONS.ur || {}).length);
console.log('All keys in UR:', Object.keys(ctx.TRANSLATIONS.ur || {}));
