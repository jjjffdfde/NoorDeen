const fs = require('fs');

const pages = ['salah-guide.html', 'wudu-guide.html', 'janazah-guide.html', 'eid-guide.html', 'pillars.html'];

for (const p of pages) {
  const file = `public/${p}`;
  if (!fs.existsSync(file)) {
    console.log(`Missing: ${file}`);
    continue;
  }
  const content = fs.readFileSync(file, 'utf8');
  console.log(`\n=================== ${p} ===================`);
  const mainMatch = content.match(/<main[\s\S]*?>/);
  console.log('Main Tag:', mainMatch ? mainMatch[0] : 'None');
  
  const hasEditorial = content.includes('editorial-page-container');
  const hasStickyToc = content.includes('sticky-toc-wrapper');
  console.log(`editorial-page-container: ${hasEditorial}, sticky-toc-wrapper: ${hasStickyToc}`);
  
  const styleAttrs = [];
  const regex = /style="([^"]*)"/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    if (match[1].includes('width') || match[1].includes('max-width') || match[1].includes('grid') || match[1].includes('flex')) {
      styleAttrs.push(match[1]);
    }
  }
  console.log(`Layout style attributes count: ${styleAttrs.length}`);
  if (styleAttrs.length > 0) {
    console.log('Sample style attrs:', styleAttrs.slice(0, 3));
  }
}
