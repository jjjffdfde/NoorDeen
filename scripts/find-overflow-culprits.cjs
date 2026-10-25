const fs = require('fs');
const path = require('path');

const pub = path.join(__dirname, '..', 'public');
const cssPath = path.join(pub, 'css', 'main.css');
const css = fs.readFileSync(cssPath, 'utf-8');

console.log('=== SCANNING CSS FOR POTENTIAL OVERFLOW CULPRITS ===');

// Check fixed widths > 300px in CSS
const cssLines = css.split('\n');
cssLines.forEach((l, idx) => {
  // Check width: XXXpx where XXX >= 300
  const m = l.match(/(?:min-width|width)\s*:\s*(\d+)px/);
  if (m && parseInt(m[1]) >= 300) {
    // Check if inside media query or modal
    console.log(`CSS line ${idx + 1}: ${l.trim()}`);
  }
  // Check 100vw
  if (l.includes('100vw')) {
    console.log(`CSS 100vw at line ${idx + 1}: ${l.trim()}`);
  }
});

// Check HTML files for inline styles with width >= 300px or no-wrap
console.log('\n=== SCANNING HTML FILES FOR INLINE FIXED WIDTHS >= 300px ===');
const htmlFiles = fs.readdirSync(pub).filter(f => f.endsWith('.html'));
htmlFiles.forEach(f => {
  const content = fs.readFileSync(path.join(pub, f), 'utf-8');
  const lines = content.split('\n');
  lines.forEach((l, idx) => {
    const m = l.match(/style=["'][^"']*(?:min-width|width)\s*:\s*(\d+)px/i);
    if (m && parseInt(m[1]) >= 300) {
      if (!l.includes('max-width') && !l.includes('modal') && parseInt(m[1]) > 320) {
        console.log(`${f}:${idx + 1} -> ${l.trim().substring(0, 100)}`);
      }
    }
    // Check pre or table without table-responsive
    if (l.includes('<table') && !l.includes('table-responsive')) {
      // check if parent has table-responsive
    }
  });
});
