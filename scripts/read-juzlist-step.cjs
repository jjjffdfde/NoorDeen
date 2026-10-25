const fs = require('fs');

const step = JSON.parse(fs.readFileSync('scripts/found-juzlist-step.json', 'utf8'));

if (step.tool_calls) {
  step.tool_calls.forEach(tc => {
    console.log('Tool call:', tc.name);
    if (tc.args && tc.args.Target) {
      console.log('Target:', tc.args.Target);
      console.log('Replacement length:', tc.args.Replacement ? tc.args.Replacement.length : 0);
      fs.writeFileSync('scripts/juzlist-replacement.txt', tc.args.Replacement, 'utf8');
    }
  });
}
