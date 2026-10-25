const fs = require('fs');
const vm = require('vm');
const newHadiths = require('./generate-hadiths-expansion.cjs');
const newDuas = require('./generate-duas-expansion.cjs');

const originalCode = fs.readFileSync('public/js/data.js', 'utf8');

// Test run in VM to get full data
const context = {};
vm.createContext(context);
vm.runInContext(originalCode.replace('const ISLAMIC_DATA =', 'globalThis.ISLAMIC_DATA ='), context);

const data = context.ISLAMIC_DATA;
console.log('Original Hadiths:', data.hadiths.length);
console.log('Original Duas:', data.duas.length);

const combinedHadiths = [...data.hadiths, ...newHadiths];
const combinedDuas = [...data.duas, ...newDuas];

console.log('New Hadiths total:', combinedHadiths.length);
console.log('New Duas total:', combinedDuas.length);

// Format clean JavaScript for ISLAMIC_DATA
let fileContent = `/**
 * ISLAMIC KNOWLEDGE PORTAL — CANONICAL DATA REPOSITORY
 * Contains: 114 Surahs, 30 Juz, Offline Surah Texts, 101 Authenticated Hadiths, 6 Kalimas, 102 Masnoon Duas
 * All Arabic source texts adhere strictly to Tanzil Hafs Uthmani and classical Kutub al-Sittah standards.
 */

const ISLAMIC_DATA = {
  surahs: ${JSON.stringify(data.surahs, null, 2)},

  juzList: ${JSON.stringify(data.juzList, null, 2)},

  offlineSurahs: ${JSON.stringify(data.offlineSurahs, null, 2)},

  hadiths: ${JSON.stringify(combinedHadiths, null, 2)},

  kalimas: ${JSON.stringify(data.kalimas, null, 2)},

  duas: ${JSON.stringify(combinedDuas, null, 2)}
};

if (typeof window !== 'undefined') {
  window.ISLAMIC_DATA = ISLAMIC_DATA;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = ISLAMIC_DATA;
}
`;

fs.writeFileSync('public/js/data.js', fileContent, 'utf8');
console.log('Successfully updated public/js/data.js');

// Verify syntax
const verifyContext = {};
vm.createContext(verifyContext);
vm.runInContext(fileContent.replace('const ISLAMIC_DATA =', 'globalThis.ISLAMIC_DATA ='), verifyContext);
console.log('Verified updated ISLAMIC_DATA:');
console.log('- Surahs:', verifyContext.ISLAMIC_DATA.surahs.length);
console.log('- Juz:', verifyContext.ISLAMIC_DATA.juzList.length);
console.log('- Hadiths:', verifyContext.ISLAMIC_DATA.hadiths.length);
console.log('- Kalimas:', verifyContext.ISLAMIC_DATA.kalimas.length);
console.log('- Duas:', verifyContext.ISLAMIC_DATA.duas.length);
