const fs = require('fs');
const html = fs.readFileSync('public/download-app.html', 'utf8');
const links = [];
const regex = /href=["']([^"']+)["']/g;
let match;
while ((match = regex.exec(html)) !== null) {
  links.push(match[1]);
}
console.log('All links in download-app.html:', links);

// Also check button onclicks
const onclicks = [];
const oregex = /onclick=["']([^"']+)["']/g;
while ((match = oregex.exec(html)) !== null) {
  onclicks.push(match[1]);
}
console.log('Onclicks in download-app.html:', onclicks);
