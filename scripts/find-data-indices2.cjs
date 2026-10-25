const fs = require('fs');

const content = fs.readFileSync('public/js/data.js', 'utf8');
const kalimasIndex = content.indexOf('kalimas: [');
const duasIndex = content.indexOf('duas: [');

console.log('kalimas: [ starts at index:', kalimasIndex);
console.log('duas: [ starts at index:', duasIndex);
