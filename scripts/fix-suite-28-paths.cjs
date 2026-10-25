const fs = require('fs');

let testContent = fs.readFileSync('test/run-tests.js', 'utf8');

testContent = testContent.replace(
  "path.join(__dirname, 'server.js')",
  "path.join(__dirname, '..', 'server.js')"
);
testContent = testContent.replace(
  "path.join(__dirname, 'android'",
  "path.join(__dirname, '..', 'android'"
);
testContent = testContent.replace(
  "path.join(__dirname, 'capacitor.config.json')",
  "path.join(__dirname, '..', 'capacitor.config.json')"
);

fs.writeFileSync('test/run-tests.js', testContent, 'utf8');
console.log('Fixed path references in Suite 28 of run-tests.js');
