const fs = require('fs');
const vm = require('vm');

const code = fs.readFileSync('public/js/data.js', 'utf8');
const context = {};
vm.createContext(context);
vm.runInContext(code.replace('const ISLAMIC_DATA =', 'globalThis.ISLAMIC_DATA ='), context);
const existingHadiths = context.ISLAMIC_DATA.hadiths;

console.log('Existing Hadith IDs:');
console.log(existingHadiths.map(h => `${h.id} (${h.collection} #${h.number})`).join('\n'));
