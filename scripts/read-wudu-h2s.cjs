const fs = require('fs');

const content = fs.readFileSync('public/wudu-guide.html', 'utf8');
const h2s = [...content.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/gi)];
h2s.forEach((h, idx) => {
  console.log(`${idx + 1}. ${h[1].replace(/<[^>]+>/g, '').trim()}`);
});
