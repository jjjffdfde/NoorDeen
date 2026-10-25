const fs = require('fs');
const readline = require('readline');

async function findPrompt() {
  const fileStream = fs.createReadStream('C:/Users/Admin/.gemini/antigravity/brain/deda93fc-b402-4b61-8b86-18cdc9a117e4/.system_generated/logs/transcript.jsonl');
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  let lastUserStep = null;
  let lineCount = 0;
  for await (const line of rl) {
    lineCount++;
    try {
      const obj = JSON.parse(line);
      if (obj.type === 'USER_INPUT' && obj.content && obj.content.includes('PHASE 7')) {
        lastUserStep = obj;
      }
    } catch (e) {}
  }

  if (lastUserStep) {
    console.log('Found Phase 7 at step_index:', lastUserStep.step_index);
    fs.writeFileSync('scripts/phase7-prompt.txt', lastUserStep.content, 'utf8');
    console.log('Wrote Phase 7 prompt to scripts/phase7-prompt.txt. Length:', lastUserStep.content.length);
  } else {
    console.log('Phase 7 prompt not found in transcript. Total lines:', lineCount);
  }
}

findPrompt();
