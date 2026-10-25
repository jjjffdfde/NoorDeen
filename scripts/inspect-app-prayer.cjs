const fs = require('fs');

const appJs = fs.readFileSync('public/js/app.js', 'utf8');
const lines = appJs.split('\n');

lines.forEach((line, i) => {
  if (line.includes('Prayer') || line.includes('calculatePrayerTimes') || line.includes('prayerTimes') || line.includes('dhuhr') || line.includes('zuhr')) {
    console.log(`app.js line ${i+1}: ${line}`);
  }
});
