const fs = require('fs');

const seerahHtml = fs.readFileSync('public/seerah.html', 'utf8');
const firstArticle = seerahHtml.match(/<article[\s\S]*?<\/article>/);
if (firstArticle) {
  console.log('=== SAMPLE ARTICLE IN SEERAH.HTML ===');
  console.log('Length:', firstArticle[0].length, 'chars');
  console.log('Preview first 800 chars:\n', firstArticle[0].substring(0, 800));
  console.log('\nPreview last 600 chars:\n', firstArticle[0].substring(firstArticle[0].length - 600));
}

const sahabaHtml = fs.readFileSync('public/sahaba.html', 'utf8');
const firstSahaba = sahabaHtml.match(/<article[\s\S]*?<\/article>/);
if (firstSahaba) {
  console.log('\n=== SAMPLE ARTICLE IN SAHABA.HTML ===');
  console.log('Length:', firstSahaba[0].length, 'chars');
  console.log('Preview first 800 chars:\n', firstSahaba[0].substring(0, 800));
  console.log('\nPreview last 600 chars:\n', firstSahaba[0].substring(firstSahaba[0].length - 600));
}
