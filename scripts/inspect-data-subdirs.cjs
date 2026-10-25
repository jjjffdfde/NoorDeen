const fs = require('fs');
const path = require('path');

const dirs = ['data/audio', 'data/quran-translations', 'data/schemas', 'data/sources', 'data/tafsir', 'data/taxonomy', 'data/workflow'];
dirs.forEach(d => {
  if (fs.existsSync(d)) {
    console.log('\n=== ' + d + ' ===');
    const items = fs.readdirSync(d);
    items.slice(0, 15).forEach(item => {
      const p = path.join(d, item);
      const isDir = fs.statSync(p).isDirectory();
      console.log('  ' + item + (isDir ? ' [DIR]' : ' (' + (fs.statSync(p).size/1024).toFixed(1) + ' KB)'));
    });
    if (items.length > 15) console.log('  ... and ' + (items.length - 15) + ' more items');
  }
});
