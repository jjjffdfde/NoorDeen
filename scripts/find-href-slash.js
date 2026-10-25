import fs from 'fs';
import path from 'path';

const files = fs.readdirSync('./public').filter(f => f.endsWith('.html'));
const found = [];

files.forEach(f => {
  const c = fs.readFileSync(path.join('./public', f), 'utf8');
  if (c.includes('href="/"') || c.includes("href='/'")) {
    found.push(f);
  }
});

console.log('Files with href="/" or href=\'/\':', found);
