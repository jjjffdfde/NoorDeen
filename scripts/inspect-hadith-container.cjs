const fs = require('fs');
const content = fs.readFileSync('public/hadith.html', 'utf8');
const lines = content.split('\n');
const startIdx = lines.findIndex(l => l.includes('id="hadith-list-container"'));
console.log('hadith-list-container start line:', startIdx + 1);

// Find end of hadith-list-container
// Look for </main> or next section
const endIdx = lines.findIndex((l, i) => i > startIdx && (l.includes('</main>') || l.includes('<!-- Pagination') || l.includes('<!-- Footer') || l.includes('<footer')));
console.log('Container ends around line:', endIdx + 1);
console.log('Lines around end:\n', lines.slice(endIdx - 5, endIdx + 5).join('\n'));
