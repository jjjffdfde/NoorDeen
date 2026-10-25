const fs = require('fs');
const vm = require('vm');

const dataContent = fs.readFileSync('public/js/data.js', 'utf8');
const dataSandbox = { window: {} };
vm.createContext(dataSandbox);
vm.runInContext(dataContent, dataSandbox);
const parsedData = dataSandbox.window.ISLAMIC_DATA;

console.log('Duas list:');
parsedData.duas.forEach((d, idx) => {
  console.log(`${idx + 1}. [${d.cat}] ${d.title} - Ref: ${d.ref} - Target: ${d.target}`);
});
