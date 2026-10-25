const fs = require('fs');

const content = fs.readFileSync('public/salah-guide.html', 'utf8');

const headerMatch = content.match(/<header class="header">[\s\S]*?<\/header>/i);
if (headerMatch) {
  console.log('Header length:', headerMatch[0].length);
  fs.writeFileSync('scripts/template-header.html', headerMatch[0], 'utf8');
  console.log('Saved template header to scripts/template-header.html');
}

const footerMatch = content.match(/<footer class="footer">[\s\S]*?<\/footer>/i);
if (footerMatch) {
  console.log('Footer length:', footerMatch[0].length);
  fs.writeFileSync('scripts/template-footer.html', footerMatch[0], 'utf8');
  console.log('Saved template footer to scripts/template-footer.html');
}
