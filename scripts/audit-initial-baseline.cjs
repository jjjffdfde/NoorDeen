const fs = require('fs');
const path = require('path');

console.log('=== AUDITING SEERAH CHAPTERS ===');
const seerahContent = fs.readFileSync('public/seerah.html', 'utf8');
const seerahArticles = seerahContent.match(/<article[\s\S]*?<\/article>/g) || [];
console.log('Total Seerah articles:', seerahArticles.length);
const seerahInfo = seerahArticles.map((art, idx) => {
  const idMatch = art.match(/id="([^"]+)"/);
  const eraMatch = art.match(/data-era="([^"]+)"/);
  const h2Match = art.match(/<h2[^>]*>([\s\S]*?)<\/h2>/);
  const sourceMatch = art.match(/Primary Classical Sources:<\/strong>([^<]+)/);
  const cleanTitle = h2Match ? h2Match[1].replace(/<[^>]+>/g, '').trim() : 'Unknown';
  const wordCount = art.replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length;
  return {
    num: idx + 1,
    id: idMatch ? idMatch[1] : '',
    era: eraMatch ? eraMatch[1] : '',
    title: cleanTitle,
    words: wordCount,
    hasSources: !!sourceMatch
  };
});
console.log(`Seerah total words: ${seerahInfo.reduce((acc, c) => acc + c.words, 0)} across ${seerahInfo.length} chapters`);

console.log('\n=== AUDITING SAHABA BIOGRAPHIES ===');
const sahabaContent = fs.readFileSync('public/sahaba.html', 'utf8');
const sahabaArticles = sahabaContent.match(/<article[\s\S]*?<\/article>/g) || [];
console.log('Total Sahaba articles:', sahabaArticles.length);
const sahabaInfo = sahabaArticles.map((art, idx) => {
  const idMatch = art.match(/id="([^"]+)"/);
  const catMatch = art.match(/data-category="([^"]+)"/);
  const h2Match = art.match(/<h2[^>]*>([\s\S]*?)<\/h2>/);
  const cleanTitle = h2Match ? h2Match[1].replace(/<[^>]+>/g, '').trim() : 'Unknown';
  const wordCount = art.replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length;
  return {
    num: idx + 1,
    id: idMatch ? idMatch[1] : '',
    category: catMatch ? catMatch[1] : '',
    name: cleanTitle,
    words: wordCount
  };
});
console.log(`Sahaba total words: ${sahabaInfo.reduce((acc, c) => acc + c.words, 0)} across ${sahabaInfo.length} biographies`);

console.log('\n=== AUDITING PROPHETS NARRATIVES ===');
const prophetsContent = fs.readFileSync('public/prophets.html', 'utf8');
const prophetArticles = prophetsContent.match(/<article[\s\S]*?<\/article>/g) || [];
console.log('Total Prophet articles:', prophetArticles.length);
const prophetInfo = prophetArticles.map((art, idx) => {
  const idMatch = art.match(/id="([^"]+)"/);
  const h2Match = art.match(/<h2[^>]*>([\s\S]*?)<\/h2>/);
  const cleanTitle = h2Match ? h2Match[1].replace(/<[^>]+>/g, '').trim() : 'Unknown';
  const wordCount = art.replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length;
  return {
    num: idx + 1,
    id: idMatch ? idMatch[1] : '',
    name: cleanTitle,
    words: wordCount
  };
});
console.log(`Prophets total words: ${prophetInfo.reduce((acc, c) => acc + c.words, 0)} across ${prophetInfo.length} narratives`);

console.log('\n=== AUDITING HISTORY ERAS ===');
const historyContent = fs.readFileSync('public/history.html', 'utf8');
const historyArticles = historyContent.match(/<article[\s\S]*?<\/article>/g) || [];
console.log('Total History articles:', historyArticles.length);

console.log('\n=== AUDITING HADITH & DUAS IN DATA.JS ===');
const dataJs = fs.readFileSync('public/js/data.js', 'utf8');
const hadithMatch = dataJs.match(/HADITH_DATABASE\s*=\s*\[([\s\S]*?)\];/);
const duasMatch = dataJs.match(/DUAS_DATABASE\s*=\s*\[([\s\S]*?)\];/);
console.log('HADITH_DATABASE present:', !!hadithMatch);
console.log('DUAS_DATABASE present:', !!duasMatch);

console.log('\n=== AUDITING I18N LANGUAGES ===');
const i18nJs = fs.readFileSync('public/js/i18n.js', 'utf8');
const langMatches = [...i18nJs.matchAll(/code:\s*'([^']+)',\s*name:\s*'([^']+)',\s*nativeName:\s*'([^']+)',\s*dir:\s*'([^']+)',\s*coverage:\s*'([^']+)'/g)];
console.log('Total languages configured:', langMatches.length);
const verifiedLangs = langMatches.filter(m => m[5] === 'verified');
console.log('Verified languages count:', verifiedLangs.length, verifiedLangs.map(m => m[1]).join(', '));
const partialLangs = langMatches.filter(m => m[5] === 'partial');
console.log('Partial languages count:', partialLangs.length);

fs.writeFileSync('scripts/audit-summary.json', JSON.stringify({
  seerah: seerahInfo,
  sahaba: sahabaInfo,
  prophets: prophetInfo,
  historyCount: historyArticles.length,
  languages: langMatches.map(m => ({ code: m[1], name: m[2], native: m[3], dir: m[4], coverage: m[5] }))
}, null, 2));
console.log('\nAudit summary written to scripts/audit-summary.json');
