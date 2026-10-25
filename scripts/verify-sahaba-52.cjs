const fs = require('fs');

const html = fs.readFileSync('public/sahaba.html', 'utf8');
const regex = /<article id="([^"]+)"[^>]*data-category="([^"]+)"/g;
let match;
const found = [];
const catCounts = {};

while ((match = regex.exec(html)) !== null) {
  found.push({ id: match[1], category: match[2] });
  catCounts[match[2]] = (catCounts[match[2]] || 0) + 1;
}

console.log('Total Companions Found:', found.length);
console.log('Category breakdown:', catCounts);
const ids = found.map(f => f.id);
const dupes = ids.filter((item, index) => ids.indexOf(item) !== index);
console.log('Duplicate IDs:', dupes.length > 0 ? dupes : 'None (All Unique)');
