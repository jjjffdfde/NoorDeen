const fs = require('fs');

console.log('--- Inspecting search.js ---');
const searchJs = fs.readFileSync('public/js/search.js', 'utf8');
console.log('search.js length:', searchJs.length);
console.log('Has escape key listener:', searchJs.includes('Escape') || searchJs.includes('27'));
console.log('Has focus trap/management:', searchJs.includes('focus'));
console.log('Has role="dialog":', searchJs.includes('role="dialog"') || searchJs.includes("role', 'dialog'"));
console.log('Has aria-modal:', searchJs.includes('aria-modal'));
console.log('Has search categories:', searchJs.match(/category|dataset|surah|hadith|dua/gi)?.length);

console.log('\n--- Inspecting app.js ---');
const appJs = fs.readFileSync('public/js/app.js', 'utf8');
console.log('app.js length:', appJs.length);
console.log('Has mobile drawer toggle:', appJs.includes('nav-drawer') || appJs.includes('mobile-menu') || appJs.includes('drawer'));
console.log('Has theme toggle:', appJs.includes('theme'));
console.log('Has dropdown keyboard handling:', appJs.includes('dropdown'));
