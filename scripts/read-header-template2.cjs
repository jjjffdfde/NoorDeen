const fs = require('fs');

const content = fs.readFileSync('public/salah-guide.html', 'utf8');
const headerMatch = content.match(/<header[^>]*>[\s\S]*?<\/header>/i);
if (headerMatch) {
  console.log('Found header with tag:', headerMatch[0].slice(0, 150));
  fs.writeFileSync('scripts/template-header.html', headerMatch[0], 'utf8');
} else {
  console.log('No header tag found');
}
const footerMatch = content.match(/<footer[^>]*>[\s\S]*?<\/footer>/i);
if (footerMatch) {
  console.log('Found footer with tag:', footerMatch[0].slice(0, 150));
  fs.writeFileSync('scripts/template-footer.html', footerMatch[0], 'utf8');
}
