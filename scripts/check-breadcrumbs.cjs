const fs = require('fs');
const html = fs.readFileSync('public/seerah.html', 'utf8');
console.log('seerah.html has breadcrumb?', html.includes('breadcrumb') || html.includes('Breadcrumb'));
