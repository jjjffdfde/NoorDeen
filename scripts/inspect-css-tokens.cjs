const fs = require('fs');
const css = fs.readFileSync('public/css/main.css', 'utf8');
const rootMatch = css.match(/:root\s*\{([\s\S]*?)\}/);
console.log('--- :root tokens ---');
console.log(rootMatch ? rootMatch[1].trim() : 'No :root found');

const darkMatch = css.match(/\[data-theme=["']dark["']\]\s*\{([\s\S]*?)\}/);
console.log('\n--- Dark theme tokens ---');
console.log(darkMatch ? darkMatch[1].trim() : 'No dark theme found');
