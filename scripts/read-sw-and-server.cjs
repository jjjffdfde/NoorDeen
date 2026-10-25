const fs = require('fs');

console.log('=== public/service-worker.js ===');
console.log(fs.readFileSync('public/service-worker.js', 'utf8'));

console.log('\n=== server.js ===');
console.log(fs.readFileSync('server.js', 'utf8'));
