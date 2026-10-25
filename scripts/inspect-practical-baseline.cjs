const fs = require('fs');
const path = require('path');

const targetFiles = [
  'public/hadith.html',
  'public/duas.html',
  'public/salah-guide.html',
  'public/wudu-guide.html',
  'public/janazah-guide.html',
  'public/eid-guide.html',
  'public/zakat-calculator.html',
  'public/tasbih.html',
  'public/prayer-times.html',
  'public/kalimas.html',
  'public/pillars.html'
];

console.log('=== PRACTICAL ISLAMIC MODULES BASELINE INSPECTION ===\n');

targetFiles.forEach(file => {
  const fullPath = path.resolve(file);
  if (fs.existsSync(fullPath)) {
    const stats = fs.statSync(fullPath);
    const content = fs.readFileSync(fullPath, 'utf8');
    const titleMatch = content.match(/<title>([^<]+)<\/title>/i);
    const h1Match = content.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
    const scriptMatches = [...content.matchAll(/<script[^>]*src="([^"]+)"/gi)].map(m => m[1]);
    const cleanH1 = h1Match ? h1Match[1].replace(/<[^>]+>/g, '').trim() : 'None';
    
    console.log(`FILE: ${file}`);
    console.log(`  Size: ${stats.size} bytes`);
    console.log(`  Title: ${titleMatch ? titleMatch[1] : 'None'}`);
    console.log(`  H1: ${cleanH1}`);
    console.log(`  Scripts: ${scriptMatches.join(', ')}`);
    console.log('---');
  } else {
    console.log(`FILE NOT FOUND: ${file}`);
  }
});
