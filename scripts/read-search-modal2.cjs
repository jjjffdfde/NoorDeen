const fs = require('fs');
const appJs = fs.readFileSync('public/js/app.js', 'utf8');

const start = appJs.indexOf('openSearchModal');
if (start !== -1) {
  console.log(appJs.substring(start, start + 2500));
}
