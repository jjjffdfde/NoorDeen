const fs = require('fs');
const vm = require('vm');

const dataContent = fs.readFileSync('public/js/data.js', 'utf8');
const dataSandbox = { window: {} };
vm.createContext(dataSandbox);
vm.runInContext(dataContent, dataSandbox);
const parsedData = dataSandbox.window.ISLAMIC_DATA;

console.log('Hadiths count:', parsedData.hadiths.length);
console.log('Sample hadith:', parsedData.hadiths[0]);
console.log('Hadiths collections:', [...new Set(parsedData.hadiths.map(h => h.collection))]);
console.log('Hadith fields in item 0:', Object.keys(parsedData.hadiths[0]));
console.log('Hadiths list:');
parsedData.hadiths.forEach((h, idx) => {
  console.log(`${idx + 1}. [${h.collection}] #${h.number} - Grade: ${h.grade} - Topic: ${h.topic || h.category}`);
});
