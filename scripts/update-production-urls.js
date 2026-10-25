import fs from 'fs';
import path from 'path';

const OLD_URL = 'https://islamicknowledge.example.com';
const NEW_URL = 'https://jjjffdfde.github.io/NoorDeen';

// 1. Update public directory files
const publicDir = './public';
const files = fs.readdirSync(publicDir);

let count = 0;
files.forEach(f => {
  const full = path.join(publicDir, f);
  if (fs.statSync(full).isFile() && (f.endsWith('.html') || f.endsWith('.xml') || f.endsWith('.txt') || f.endsWith('.json'))) {
    let content = fs.readFileSync(full, 'utf8');
    if (content.includes(OLD_URL)) {
      content = content.replaceAll(OLD_URL, NEW_URL);
      fs.writeFileSync(full, content, 'utf8');
      console.log(`Updated URLs in: ${full}`);
      count++;
    }
  }
});

console.log(`Total public files updated: ${count}`);

// 2. Update test/run-tests.js assertions
const testPath = './test/run-tests.js';
let testContent = fs.readFileSync(testPath, 'utf8');
if (testContent.includes(OLD_URL)) {
  testContent = testContent.replaceAll(OLD_URL, NEW_URL);
  fs.writeFileSync(testPath, testContent, 'utf8');
  console.log(`Updated test/run-tests.js assertions to match ${NEW_URL}`);
}

// 3. Update reports
const reportsDir = './reports';
if (fs.existsSync(reportsDir)) {
  fs.readdirSync(reportsDir).forEach(rf => {
    const rfull = path.join(reportsDir, rf);
    if (fs.statSync(rfull).isFile() && rf.endsWith('.md')) {
      let rcontent = fs.readFileSync(rfull, 'utf8');
      if (rcontent.includes(OLD_URL)) {
        rcontent = rcontent.replaceAll(OLD_URL, NEW_URL);
        fs.writeFileSync(rfull, rcontent, 'utf8');
        console.log(`Updated URLs in: ${rfull}`);
      }
    }
  });
}
