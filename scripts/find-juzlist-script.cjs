const fs = require('fs');

// Check scripts for juzList
const scriptFiles = fs.readdirSync('scripts');
scriptFiles.forEach(f => {
  try {
    const c = fs.readFileSync('scripts/' + f, 'utf8');
    if (c.includes('juzList')) {
      console.log('Found juzList in script:', f);
    }
  } catch(e){}
});
