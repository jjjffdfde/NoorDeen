const fs = require('fs');
const pages = ['salah-guide.html', 'wudu-guide.html', 'janazah-guide.html', 'eid-guide.html', 'pillars.html'];

pages.forEach(p => {
  const html = fs.readFileSync('public/' + p, 'utf8');
  console.log(`=== ${p} ===`);
  console.log('Size:', html.length, 'bytes');
  console.log('Has editorial-page-container:', html.includes('editorial-page-container'));
  console.log('Has sticky-toc-wrapper:', html.includes('sticky-toc-wrapper'));
  console.log('Has editorial-content-body:', html.includes('editorial-content-body'));
  
  const tables = html.match(/<table[\s\S]*?<\/table>/gi);
  console.log('Table count:', tables ? tables.length : 0);
  
  const grids = html.match(/class="[^"]*grid[^"]*"/gi);
  console.log('Grid classes count:', grids ? grids.length : 0);
  
  const cardClasses = html.match(/class="[^"]*card[^"]*"/gi);
  console.log('Card classes count:', cardClasses ? cardClasses.length : 0);
});
