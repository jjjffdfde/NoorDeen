const fs = require('fs');

const sahabaHtml = fs.readFileSync('public/sahaba.html', 'utf8');
const articles = sahabaHtml.match(/<article[\s\S]*?<\/article>/g) || [];

console.log('=== CURRENT 30 SAHABA BIOGRAPHIES ===');
articles.forEach((art, i) => {
  const id = (art.match(/id="([^"]+)"/) || [])[1];
  const cat = (art.match(/data-category="([^"]+)"/) || [])[1];
  const h2 = (art.match(/<h2[^>]*>([\s\S]*?)<\/h2>/) || [])[1].replace(/<[^>]+>/g, '').trim();
  const arTitle = (art.match(/class="font-arabic"[^>]*>([\s\S]*?)<\/span>/) || [])[1] || '';
  console.log(`${(i+1).toString().padStart(2)}. [${cat}] id="${id}": ${h2} | ${arTitle}`);
});
