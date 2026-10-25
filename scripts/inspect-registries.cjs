const fs = require('fs');

const sourcesReg = JSON.parse(fs.readFileSync('data/sources/registry.json', 'utf8'));
console.log('Sources registry keys:', Object.keys(sourcesReg));
console.log('Sources count:', sourcesReg.sources ? sourcesReg.sources.length : (Array.isArray(sourcesReg) ? sourcesReg.length : 'not array'));
if (sourcesReg.sources) {
  console.log('Sample source:', sourcesReg.sources[0]);
}

const quranTrans = JSON.parse(fs.readFileSync('data/quran-translations/registry.json', 'utf8'));
console.log('\nQuran translations count:', quranTrans.translations ? quranTrans.translations.length : (Array.isArray(quranTrans) ? quranTrans.length : 'not array'));
if (quranTrans.translations) {
  console.log('Sample translation:', quranTrans.translations[0]);
}
