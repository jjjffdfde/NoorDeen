const fs = require('fs');
const lines = fs.readFileSync('reports/full_prompt.txt', 'utf8').split('\n');
lines.forEach((l, i) => {
  const trimmed = l.trim();
  if (trimmed.startsWith('===') || trimmed.startsWith('PHASE') || trimmed.startsWith('##') || trimmed.startsWith('# ') || trimmed.startsWith('FINAL DELIVERABLES')) {
    console.log(`${i+1}: ${trimmed}`);
  }
});
