const fs = require('fs');
const appJs = fs.readFileSync('public/js/app.js', 'utf8');

const regex = /setupMobileDrawer\s*\(\)\s*\{/g;
let m;
while ((m = regex.exec(appJs)) !== null) {
  console.log('Match at', m.index);
  console.log(appJs.substring(m.index, m.index + 2000));
}
