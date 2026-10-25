const ISLAMIC_DATA = require('../public/js/data.js');

console.log('Top-level keys in ISLAMIC_DATA:', Object.keys(ISLAMIC_DATA));

if (ISLAMIC_DATA.hadith) {
  console.log('Hadith count:', ISLAMIC_DATA.hadith.length);
  console.log('Sample hadith:', JSON.stringify(ISLAMIC_DATA.hadith[0], null, 2));
  console.log('Collections in data.js:', [...new Set(ISLAMIC_DATA.hadith.map(h => h.collection))]);
}

if (ISLAMIC_DATA.duas) {
  console.log('Duas count:', ISLAMIC_DATA.duas.length);
  console.log('Sample dua:', JSON.stringify(ISLAMIC_DATA.duas[0], null, 2));
  console.log('Dua categories:', [...new Set(ISLAMIC_DATA.duas.map(d => d.category))]);
}

if (ISLAMIC_DATA.kalimas) {
  console.log('Kalimas count:', ISLAMIC_DATA.kalimas.length);
}

if (ISLAMIC_DATA.pillars) {
  console.log('Pillars count:', ISLAMIC_DATA.pillars.length);
}
