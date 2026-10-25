const fs = require('fs');

function inspectHeadings(file) {
  const content = fs.readFileSync(file, 'utf8');
  console.log(`=== ${file} Headings ===`);
  const headings = [...content.matchAll(/<(h[1-4])[^>]*>([\s\S]*?)<\/\1>/gi)].map(m => {
    return `${m[1].toUpperCase()}: ${m[2].replace(/<[^>]+>/g, '').trim()}`;
  });
  console.log(headings.slice(0, 30).join('\n'));
  console.log(`Total headings: ${headings.length}\n`);
}

inspectHeadings('public/salah-guide.html');
inspectHeadings('public/wudu-guide.html');
inspectHeadings('public/janazah-guide.html');
inspectHeadings('public/eid-guide.html');
inspectHeadings('public/zakat-calculator.html');
