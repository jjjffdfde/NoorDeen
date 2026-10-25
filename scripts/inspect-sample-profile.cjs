const fs = require('fs');
const vm = require('vm');

const code = fs.readFileSync('public/js/quran.js', 'utf8');
const context = { window: {}, document: { addEventListener: () => {} } };
vm.createContext(context);

// Extract SURAH_THEMATIC_DATA
const match = code.match(/const SURAH_THEMATIC_DATA = (\{[\s\S]*?\n\};)/);
if (match) {
  vm.runInContext('globalThis.THEMATIC = ' + match[1], context);
  console.log('Sample Surah 1 profile:\n', JSON.stringify(context.THEMATIC[1], null, 2));
  console.log('Sample Surah 18 profile:\n', JSON.stringify(context.THEMATIC[18], null, 2));
}
