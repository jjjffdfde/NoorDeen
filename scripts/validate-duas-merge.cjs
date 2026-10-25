const fs = require('fs');
const vm = require('vm');
const newDuas = require('./generate-duas-expansion.cjs');

const code = fs.readFileSync('public/js/data.js', 'utf8');
const context = {};
vm.createContext(context);
vm.runInContext(code.replace('const ISLAMIC_DATA =', 'globalThis.ISLAMIC_DATA ='), context);
const existingDuas = context.ISLAMIC_DATA.duas;

console.log(`Existing Duas: ${existingDuas.length}`);
console.log(`New Duas: ${newDuas.length}`);
console.log(`Total combined Duas: ${existingDuas.length + newDuas.length}`);

const ids = new Set();
let collisions = 0;
existingDuas.forEach(d => ids.add(d.id));
newDuas.forEach(d => {
  if (ids.has(d.id)) {
    console.log(`Collision detected: ${d.id}`);
    collisions++;
  }
  ids.add(d.id);
});

console.log(`Collisions: ${collisions}`);

let missingFields = 0;
[...existingDuas, ...newDuas].forEach((d, idx) => {
  const req = ['id', 'cat', 'title', 'ar', 'tr', 'en', 'ur', 'target', 'ref'];
  req.forEach(f => {
    if (d[f] === undefined || d[f] === null || d[f] === '') {
      console.log(`Missing field ${f} in dua ${d.id || idx}`);
      missingFields++;
    }
  });
});
console.log(`Missing required fields: ${missingFields}`);
