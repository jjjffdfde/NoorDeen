const fs = require('fs');
const vm = require('vm');

const dataContent = fs.readFileSync('public/js/data.js', 'utf8');
const dataSandbox = { window: {} };
vm.createContext(dataSandbox);
vm.runInContext(dataContent, dataSandbox);
const parsedData = dataSandbox.window.ISLAMIC_DATA;

console.log('Top keys in ISLAMIC_DATA:', Object.keys(parsedData));

if (parsedData.hadith) {
  console.log('Hadith count:', parsedData.hadith.length);
  console.log('Sample hadith:', parsedData.hadith[0]);
  console.log('Hadith collections:', [...new Set(parsedData.hadith.map(h => h.collection))]);
}

if (parsedData.duas) {
  console.log('Duas count:', parsedData.duas.length);
  console.log('Sample dua:', parsedData.duas[0]);
  console.log('Dua categories:', [...new Set(parsedData.duas.map(d => d.category))]);
}

if (parsedData.kalimas) {
  console.log('Kalimas count:', parsedData.kalimas.length);
}

if (parsedData.pillars) {
  console.log('Pillars count:', parsedData.pillars.length);
}
