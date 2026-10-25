const fs = require('fs');
const vm = require('vm');

const code = fs.readFileSync('public/js/data.js', 'utf8');
const context = {};
vm.createContext(context);
vm.runInContext(code.replace('const ISLAMIC_DATA =', 'globalThis.ISLAMIC_DATA ='), context);
const existingDuas = context.ISLAMIC_DATA.duas;

console.log(`Existing Duas count: ${existingDuas.length}`);
const categories = {};
existingDuas.forEach(d => {
  categories[d.cat] = (categories[d.cat] || 0) + 1;
});
console.log('Categories breakdown:', categories);
console.log('Existing Dua IDs:');
console.log(existingDuas.map(d => `${d.id} (${d.cat}: ${d.title})`).join('\n'));
