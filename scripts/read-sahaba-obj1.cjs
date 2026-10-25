const fs = require('fs');

const s1 = fs.readFileSync('scripts/sahaba-data-part1.js', 'utf8');
const firstObjMatch = s1.match(/{\s*id:\s*'abu-bakr'[\s\S]*?},\s*{\s*id:/);
if (firstObjMatch) {
  console.log(firstObjMatch[0]);
}
