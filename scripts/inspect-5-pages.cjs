const fs = require('fs');
const path = require('path');

const pages = ['salah-guide.html', 'wudu-guide.html', 'janazah-guide.html', 'eid-guide.html', 'pillars.html'];

pages.forEach(p => {
  const content = fs.readFileSync(path.join('public', p), 'utf8');
  console.log(`\n=== PAGE: ${p} ===`);
  const hasContainer = content.includes('editorial-page-container');
  const hasToc = content.includes('sticky-toc-wrapper');
  const hasBody = content.includes('editorial-content-body');
  const tables = (content.match(/<table/g) || []).length;
  const h2s = (content.match(/<h2/g) || []).length;
  const cards = (content.match(/class=["'][^"']*card[^"']*["']/g) || []).length;
  console.log(`editorial-page-container: ${hasContainer}`);
  console.log(`sticky-toc-wrapper: ${hasToc}`);
  console.log(`editorial-content-body: ${hasBody}`);
  console.log(`Tables: ${tables}, H2s: ${h2s}, Cards: ${cards}`);
});
