const fs = require('fs');
const vm = require('vm');

let code = fs.readFileSync('public/js/data.js', 'utf8');
code = code.replace(/^const ISLAMIC_DATA/m, 'globalThis.ISLAMIC_DATA');

const context = { globalThis: {} };
vm.createContext(context);
vm.runInContext(code, context);

const data = context.globalThis.ISLAMIC_DATA;
console.log('Surahs count in data.js:', data.surahs ? data.surahs.length : 0);
console.log('Juz count in data.js:', data.juzList ? data.juzList.length : 0);
console.log('Offline Surahs keys:', Object.keys(data.offlineSurahs || {}));
console.log('Hadiths count in data.js:', data.hadiths ? data.hadiths.length : 0);
console.log('Kalimas count in data.js:', data.kalimas ? data.kalimas.length : 0);
console.log('Duas count in data.js:', data.duas ? data.duas.length : 0);

if (data.hadiths && data.hadiths.length > 0) {
  console.log('Sample Hadith fields:', Object.keys(data.hadiths[0]));
  console.log('Sample Hadith #1 title/narrator:', data.hadiths[0].title, '|', data.hadiths[0].narrator);
}

if (data.duas && data.duas.length > 0) {
  console.log('Sample Dua fields:', Object.keys(data.duas[0]));
  console.log('Sample Dua #1 title/category:', data.duas[0].title, '|', data.duas[0].category);
}
