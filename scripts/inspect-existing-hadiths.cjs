const fs = require('fs');
const vm = require('vm');

const code = fs.readFileSync('public/js/data.js', 'utf8');
const context = {};
vm.createContext(context);
vm.runInContext(code.replace('const ISLAMIC_DATA =', 'globalThis.ISLAMIC_DATA ='), context);

const hadiths = context.ISLAMIC_DATA.hadiths;
console.log(`Total existing hadiths: ${hadiths.length}`);
const collections = {};
hadiths.forEach(h => {
  collections[h.collection] = (collections[h.collection] || 0) + 1;
});
console.log('Collections breakdown:', collections);
console.log('Sample hadith ID and topic:', hadiths[0].id, hadiths[0].topic, hadiths[0].collection, hadiths[0].number);
console.log('Last hadith ID and topic:', hadiths[hadiths.length - 1].id, hadiths[hadiths.length - 1].topic, hadiths[hadiths.length - 1].collection, hadiths[hadiths.length - 1].number);
