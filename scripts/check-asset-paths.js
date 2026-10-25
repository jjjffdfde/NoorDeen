import fs from 'fs';
import path from 'path';

const files = fs.readdirSync('./public').filter(f => f.endsWith('.html'));
const issues = [];

files.forEach(file => {
  const content = fs.readFileSync(path.join('./public', file), 'utf8');
  
  // check href="/" or src="/" or href="/css" etc.
  const rootRelative = content.match(/(href|src)=["']\/[^"']*["']/g) || [];
  if (rootRelative.length > 0) {
    issues.push({ file, rootRelative: Array.from(new Set(rootRelative)) });
  }
});

console.log('Total files checked:', files.length);
console.log('Files with root-relative paths:', JSON.stringify(issues, null, 2));
