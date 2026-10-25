const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');
const files = fs.readdirSync(publicDir).filter(f => f.endsWith('.html'));

console.log(`Checking ${files.length} HTML files for Worship dropdown...`);
files.forEach(f => {
  const content = fs.readFileSync(path.join(publicDir, f), 'utf8');
  const hasWorship = content.includes('Worship Guides') || content.includes('navWorship');
  const hasSalah = content.includes('salah-guide.html');
  const hasWudu = content.includes('wudu-guide.html');
  const hasJanazah = content.includes('janazah-guide.html');
  const hasEid = content.includes('eid-guide.html');
  const hasPillars = content.includes('pillars.html');
  console.log(`${f.padEnd(25)}: WorshipNav=${hasWorship} | Salah=${hasSalah} Wudu=${hasWudu} Janazah=${hasJanazah} Eid=${hasEid} Pillars=${hasPillars}`);
});
