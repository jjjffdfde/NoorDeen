const fs = require('fs');
let testContent = fs.readFileSync('test/run-tests.js', 'utf8');

testContent = testContent.replace(
  "const mainCssContent = fs.readFileSync(path.join(PUBLIC_DIR, 'css', 'main.css'), 'utf-8');",
  "const phase8CssContent = fs.readFileSync(path.join(PUBLIC_DIR, 'css', 'main.css'), 'utf-8');"
);
testContent = testContent.replace(/mainCssContent\./g, "phase8CssContent.");

testContent = testContent.replace(
  "const appJsContent = fs.readFileSync(path.join(PUBLIC_DIR, 'js', 'app.js'), 'utf-8');",
  "const phase8AppJsContent = fs.readFileSync(path.join(PUBLIC_DIR, 'js', 'app.js'), 'utf-8');"
);
testContent = testContent.replace(/appJsContent\./g, "phase8AppJsContent.");

fs.writeFileSync('test/run-tests.js', testContent, 'utf8');
console.log('Fixed variable names in test/run-tests.js');
