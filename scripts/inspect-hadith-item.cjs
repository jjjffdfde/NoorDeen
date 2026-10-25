const fs = require('fs');
const vm = require('vm');

const code = fs.readFileSync('public/js/data.js', 'utf8');
const context = {};
vm.createContext(context);
vm.runInContext(code.replace('const ISLAMIC_DATA =', 'globalThis.ISLAMIC_DATA ='), context);

const hadiths = context.ISLAMIC_DATA.hadiths;
console.log('Hadith 0 structure:', JSON.stringify(hadiths[0], null, 2));
