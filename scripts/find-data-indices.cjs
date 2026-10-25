const fs = require('fs');

const content = fs.readFileSync('public/js/data.js', 'utf8');

const hadithsIndex = content.indexOf('hadiths: [');
const duasIndex = content.indexOf('duas: [');

console.log('hadiths: [ starts at index:', hadithsIndex);
console.log('duas: [ starts at index:', duasIndex);
console.log('Data around hadiths:\n', content.substring(hadithsIndex, hadithsIndex + 300));
