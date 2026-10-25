const fs = require('fs');

console.log('--- Inspecting prayer time calculation in tools.js ---');
const tools = fs.readFileSync('public/js/tools.js', 'utf8');
const lines = tools.split('\n');

lines.slice(0, 180).forEach((l, i) => console.log(`${i+1}: ${l}`));
