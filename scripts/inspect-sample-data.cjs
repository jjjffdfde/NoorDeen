const fs = require('fs');
const vm = require('vm');

const dataJs = fs.readFileSync('public/js/data.js', 'utf8');
const ctx = {};
vm.createContext(ctx);
vm.runInContext(dataJs + '; this.DATA = ISLAMIC_DATA;', ctx);

console.log('Sample Hadith:', JSON.stringify(ctx.DATA.hadiths[0], null, 2));
console.log('Sample Kalima:', JSON.stringify(ctx.DATA.kalimas[0], null, 2));
console.log('Sample Dua:', JSON.stringify(ctx.DATA.duas[0], null, 2));
