const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.join(__dirname, '..', 'public', 'index.html'), 'utf-8');
const start = html.indexOf('<header class="site-header">');
const end = html.indexOf('</header>', start) + 9;
console.log(html.substring(start, end));
