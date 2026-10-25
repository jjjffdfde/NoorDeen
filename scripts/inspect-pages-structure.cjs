const fs = require('fs');

const pages = ['public/seerah.html', 'public/sahaba.html', 'public/prophets.html', 'public/history.html', 'public/hadith.html', 'public/duas.html'];

pages.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  console.log('\n=== FILE: ' + file + ' (' + (content.length/1024).toFixed(1) + ' KB) ===');
  
  // Count articles, chapters, sections
  const articleMatches = content.match(/<article/g) || [];
  const sectionMatches = content.match(/<section/g) || [];
  const h2Matches = content.match(/<h2[^>]*>(.*?)<\/h2>/g) || [];
  const scriptMatches = content.match(/<script/g) || [];
  
  console.log('  <article> tags: ' + articleMatches.length);
  console.log('  <section> tags: ' + sectionMatches.length);
  console.log('  <h2> headings : ' + h2Matches.length);
  console.log('  <script> tags : ' + scriptMatches.length);
  
  if (h2Matches.length > 0) {
    console.log('  Sample <h2> (first 5):');
    h2Matches.slice(0, 5).forEach((h, i) => console.log('    ' + (i+1) + ': ' + h.replace(/<[^>]+>/g, '').trim()));
  }
});
