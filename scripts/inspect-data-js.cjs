const fs = require('fs');

const content = fs.readFileSync('public/js/data.js', 'utf8');

console.log('data.js length:', content.length);

// Check exported or declared variables
const vars = [...content.matchAll(/(?:const|let|var)\s+([A-Za-z0-9_]+)\s*=/g)].map(m => m[1]);
console.log('Variables defined in data.js:', vars);

// Check if HADITH_DATA, DUAS_DATA, etc. exist
vars.forEach(v => {
  if (v.toLowerCase().includes('hadith') || v.toLowerCase().includes('dua') || v.toLowerCase().includes('pillar') || v.toLowerCase().includes('kalima')) {
    console.log(`Matched variable: ${v}`);
  }
});
