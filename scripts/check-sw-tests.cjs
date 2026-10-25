const fs = require('fs');
const testJs = fs.readFileSync('test/run-tests.js', 'utf8');

const regex = /service-worker|CACHE_NAME|STATIC_ASSETS/g;
let m;
console.log('=== Service Worker in test/run-tests.js ===');
while ((m = regex.exec(testJs)) !== null) {
  console.log(testJs.substring(m.index - 20, m.index + 200));
  console.log('---');
}
