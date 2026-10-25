const fs = require('fs');

const dataJs = fs.readFileSync('public/js/data.js', 'utf8');
const vm = require('vm');
const sandbox = {};
vm.createContext(sandbox);
vm.runInContext(dataJs, sandbox);
console.log('Keys in ISLAMIC_DATA:', Object.keys(sandbox.ISLAMIC_DATA || {}));
if (sandbox.ISLAMIC_DATA) {
  Object.keys(sandbox.ISLAMIC_DATA).forEach(k => {
    const val = sandbox.ISLAMIC_DATA[k];
    console.log(`  ${k}: ${Array.isArray(val) ? val.length + ' items' : typeof val}`);
  });
}
