const fs = require('fs');

const salah = fs.readFileSync('public/salah-guide.html', 'utf8');
const eid = fs.readFileSync('public/eid-guide.html', 'utf8');

console.log('Salah length:', salah.length, 'Eid length:', eid.length);

// Compare head tags
const salahHead = salah.match(/<head[\s\S]*?<\/head>/i)[0];
const eidHead = eid.match(/<head[\s\S]*?<\/head>/i)[0];

console.log('--- Salah Head stylesheets ---');
console.log(salahHead.match(/<link[^>]*>/gi));

console.log('--- Eid Head stylesheets ---');
console.log(eidHead.match(/<link[^>]*>/gi));

// Compare container wrappers
const salahMain = salah.match(/<main[\s\S]*?>/i)[0];
const eidMain = eid.match(/<main[\s\S]*?>/i)[0];

console.log('Salah main:', salahMain);
console.log('Eid main:', eidMain);

// Check if any tag is unclosed in salah-guide.html
const salahHeader = salah.match(/<header[\s\S]*?<\/header>/i)[0];
const eidHeader = eid.match(/<header[\s\S]*?<\/header>/i)[0];

console.log('Salah header length:', salahHeader.length);
console.log('Eid header length:', eidHeader.length);

// Compare the div structure right after header
const salahAfterHeader = salah.slice(salah.indexOf('</header>') + 9, salah.indexOf('<div class="editorial-page-container">'));
const eidAfterHeader = eid.slice(eid.indexOf('</header>') + 9, eid.indexOf('<div class="editorial-page-container">'));

console.log('--- Salah after header ---');
console.log(salahAfterHeader);

console.log('--- Eid after header ---');
console.log(eidAfterHeader);
