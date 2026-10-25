const fs = require('fs');
const path = require('path');

const appJs = fs.readFileSync(path.join(__dirname, '..', 'public', 'js', 'app.js'), 'utf-8');
const lines = appJs.split('\n');
lines.forEach((l, idx) => {
  if (l.includes('toggleMobileDrawer') || l.includes('mobile-drawer') || l.includes('drawer')) {
    console.log(`${idx + 1}: ${l}`);
  }
});
