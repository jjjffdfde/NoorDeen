const fs = require('fs');
const readline = require('readline');

async function extractFullPrompt() {
  const fileStream = fs.createReadStream('C:/Users/Admin/.gemini/antigravity/brain/deda93fc-b402-4b61-8b86-18cdc9a117e4/.system_generated/logs/transcript_full.jsonl');
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  for await (const line of rl) {
    try {
      const obj = JSON.parse(line);
      if (obj.step_index === 2435) {
        fs.writeFileSync('scripts/phase7-prompt-full.txt', obj.content, 'utf8');
        console.log('Saved full prompt, length:', obj.content.length);
        break;
      }
    } catch (e) {}
  }
}

extractFullPrompt();
