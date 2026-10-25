const fs = require('fs');
const readline = require('readline');

async function searchTranscript() {
  const fileStream = fs.createReadStream('C:/Users/Admin/.gemini/antigravity/brain/deda93fc-b402-4b61-8b86-18cdc9a117e4/.system_generated/logs/transcript_full.jsonl');
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  for await (const line of rl) {
    if (line.includes('juzList') && line.includes('startSurah')) {
      const obj = JSON.parse(line);
      console.log('Found in step:', obj.step_index, 'type:', obj.type);
      // save snippet
      fs.writeFileSync('scripts/found-juzlist-step.json', JSON.stringify(obj, null, 2), 'utf8');
      break;
    }
  }
}

searchTranscript();
