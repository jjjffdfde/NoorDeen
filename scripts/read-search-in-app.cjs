const fs = require('fs');
const appJs = fs.readFileSync('public/js/app.js', 'utf8');

const start = appJs.indexOf('setupSearchModal');
if (start !== -1) {
  console.log(appJs.substring(start - 50, start + 3000));
}
