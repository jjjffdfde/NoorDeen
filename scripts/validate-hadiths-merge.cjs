const fs = require('fs');
const vm = require('vm');
const newHadiths = require('./generate-hadiths-expansion.cjs');

const code = fs.readFileSync('public/js/data.js', 'utf8');
const context = {};
vm.createContext(context);
vm.runInContext(code.replace('const ISLAMIC_DATA =', 'globalThis.ISLAMIC_DATA ='), context);
const existingHadiths = context.ISLAMIC_DATA.hadiths;

console.log(`Existing hadiths: ${existingHadiths.length}`);
console.log(`New hadiths: ${newHadiths.length}`);
console.log(`Total combined: ${existingHadiths.length + newHadiths.length}`);

const ids = new Set();
let collisions = 0;
existingHadiths.forEach(h => ids.add(h.id));
newHadiths.forEach(h => {
  if (ids.has(h.id)) {
    console.log(`Collision detected: ${h.id}`);
    collisions++;
  }
  ids.add(h.id);
});

console.log(`Collisions: ${collisions}`);

// Validate required fields
let missingFields = 0;
[...existingHadiths, ...newHadiths].forEach((h, idx) => {
  const req = ['id', 'collection', 'number', 'book', 'ar', 'en', 'ur', 'narrator', 'grade', 'topic'];
  req.forEach(f => {
    if (!h[f]) {
      console.log(`Missing field ${f} in hadith ${h.id || idx}`);
      missingFields++;
    }
  });
});
console.log(`Missing required fields: ${missingFields}`);
