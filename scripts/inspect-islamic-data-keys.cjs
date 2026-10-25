const fs = require('fs');
const vm = require('vm');

const code = fs.readFileSync('public/js/data.js', 'utf8');
const context = {};
vm.createContext(context);
vm.runInContext(code.replace('const ISLAMIC_DATA =', 'globalThis.ISLAMIC_DATA ='), context);

const data = context.ISLAMIC_DATA;
console.log('Keys in ISLAMIC_DATA:', Object.keys(data));

for (const key of Object.keys(data)) {
  if (Array.isArray(data[key])) {
    console.log(`- ${key}: Array of ${data[key].length} items`);
    if (data[key].length > 0) {
      console.log(`  Sample item keys: ${Object.keys(data[key][0]).join(', ')}`);
    }
  } else if (typeof data[key] === 'object' && data[key] !== null) {
    console.log(`- ${key}: Object with keys: ${Object.keys(data[key]).slice(0, 5).join(', ')}...`);
  } else {
    console.log(`- ${key}: ${typeof data[key]}`);
  }
}
