const fs = require('fs');
const path = require('path');

const testPath = path.join(__dirname, '..', 'test', 'run-tests.js');
let content = fs.readFileSync(testPath, 'utf8');

const suite30Code = `
  // --- TEST SUITE 30: Phase 12 Competitive Benchmarking, Web Share API & Search Categories ---
  console.log('\\n--- TEST SUITE 30: Phase 12 Competitive Benchmarking, Web Share API & Search Categories ---');
  const suite30QuranJs = fs.readFileSync(path.join(PUBLIC_DIR, 'js', 'quran.js'), 'utf-8');
  assert(suite30QuranJs.includes('shareAyah('), 'QuranReader implements shareAyah method with Web Share API');
  assert(suite30QuranJs.includes('🔗 Share'), 'Quran Ayah cards render 🔗 Share action button');
  assert(suite30QuranJs.includes('Saheeh International') && suite30QuranJs.includes('جالندھری'), 'Quran copyAyah dynamically formats translator attribution');

  const suite30QuranHtml = fs.readFileSync(path.join(PUBLIC_DIR, 'quran.html'), 'utf-8');
  assert(suite30QuranHtml.includes('id="ayah-jump-input"') && suite30QuranHtml.includes('id="ayah-jump-btn"'), 'Quran toolbar includes Direct Jump to Ayah number input and button');
  assert(suite30QuranHtml.includes('executeAyahJump'), 'Quran toolbar binds executeAyahJump event listener');

  const suite30HadithHtml = fs.readFileSync(path.join(PUBLIC_DIR, 'hadith.html'), 'utf-8');
  assert(suite30HadithHtml.includes('shareHadith('), 'Hadith library defines shareHadith function with Web Share API');
  assert(suite30HadithHtml.includes('🔗 Share'), 'Hadith cards render 🔗 Share action button');
  assert(suite30HadithHtml.includes('copyHadith('), 'Hadith library defines copyHadith function');

  const suite30DuasHtml = fs.readFileSync(path.join(PUBLIC_DIR, 'duas.html'), 'utf-8');
  assert(suite30DuasHtml.includes('shareDua('), 'Duas library defines shareDua function with Web Share API');
  assert(suite30DuasHtml.includes('🔗 Share'), 'Dua cards render 🔗 Share action button');
  assert(suite30DuasHtml.includes('copyDua('), 'Duas library defines copyDua function');

  const suite30AppJs = fs.readFileSync(path.join(PUBLIC_DIR, 'js', 'app.js'), 'utf-8');
  assert(suite30AppJs.includes('search-category-chips'), 'Search modal includes search-category-chips bar');
  assert(suite30AppJs.includes('data-category="quran"') && suite30AppJs.includes('data-category="hadith"'), 'Search modal defines category filter chips');
  assert(suite30AppJs.includes('activeCategory'), 'Search modal tracks activeCategory for topical filtering');
`;

const target = `  // SUMMARY\n  console.log('\\n====================================================');`;
content = content.replace(target, suite30Code + '\n' + target);

fs.writeFileSync(testPath, content, 'utf8');
console.log('Appended Suite 30 successfully!');
