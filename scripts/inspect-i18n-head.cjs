const fs = require('fs');

console.log('--- Inspecting i18n and language mechanism ---');
const i18n = fs.readFileSync('public/js/i18n.js', 'utf8');
console.log('i18n.js length:', i18n.length);

// Check applyLanguage or translation functions
const lines = i18n.split('\n');
lines.slice(0, 50).forEach((l, i) => console.log(`${i+1}: ${l}`));
