const fs = require('fs');
const path = require('path');

console.log('=== INSPECTING PUBLIC HTML FILES ===');
const publicFiles = fs.readdirSync('public').filter(f => f.endsWith('.html'));
publicFiles.forEach(f => {
  const stat = fs.statSync(path.join('public', f));
  console.log(f.padEnd(25) + ': ' + (stat.size / 1024).toFixed(1) + ' KB');
});

console.log('\n=== DATA DIRECTORY CONTENTS ===');
if (fs.existsSync('data')) {
  fs.readdirSync('data').forEach(d => {
    const p = path.join('data', d);
    const isDir = fs.statSync(p).isDirectory();
    console.log(d.padEnd(25) + ': ' + (isDir ? 'DIR' : 'FILE (' + (fs.statSync(p).size/1024).toFixed(1) + ' KB)'));
  });
}

console.log('\n=== CHECKING JS MODULE SIZES ===');
fs.readdirSync('public/js').filter(f => f.endsWith('.js')).forEach(f => {
  const stat = fs.statSync(path.join('public/js', f));
  console.log(f.padEnd(25) + ': ' + (stat.size / 1024).toFixed(1) + ' KB');
});
