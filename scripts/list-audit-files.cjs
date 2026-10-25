const fs = require('fs');

console.log('=== Audit Root Files ===');
fs.readdirSync('AUDIT').forEach(f => {
  const stat = fs.statSync('AUDIT/' + f);
  if (!stat.isDirectory()) {
    console.log(`- ${f} (${stat.size} bytes)`);
  }
});

for (let i = 1; i <= 7; i++) {
  const dir = `AUDIT/PHASE-${i}`;
  if (fs.existsSync(dir)) {
    console.log(`\n=== ${dir} ===`);
    fs.readdirSync(dir).forEach(f => {
      const stat = fs.statSync(dir + '/' + f);
      console.log(`- ${f} (${stat.size} bytes)`);
    });
  }
}
