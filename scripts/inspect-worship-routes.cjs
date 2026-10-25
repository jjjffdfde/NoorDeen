const fs = require('fs');

const html = fs.readFileSync('public/index.html', 'utf8');
const regex = /<li[^>]*class=["']nav-item nav-dropdown["'][^>]*>[\s\S]*?<\/li>/gi;
let m;
while ((m = regex.exec(html)) !== null) {
  if (m[0].includes('Worship') || m[0].includes('navWorship')) {
    console.log('--- Worship Dropdown Found ---');
    console.log(m[0]);
  }
}
