const fs = require('fs');
const css = fs.readFileSync('public/css/main.css', 'utf8');

const targetClasses = ['.btn', '.btn-icon', '.btn-sm', '.search-trigger-btn', '.nav-link', '.mobile-menu-btn', '.theme-toggle-btn'];
targetClasses.forEach(cls => {
  const regex = new RegExp(`\\${cls}\\s*\\{([^}]+)\\}`, 'g');
  let m;
  console.log(`=== Rules for ${cls} ===`);
  while ((m = regex.exec(css)) !== null) {
    console.log(m[0]);
  }
});
