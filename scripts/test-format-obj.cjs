const newHadiths = require('./generate-hadiths-expansion.cjs');

function formatObject(obj, indent = 4) {
  const pad = ' '.repeat(indent);
  const innerPad = ' '.repeat(indent + 2);
  const entries = Object.entries(obj).map(([key, val]) => {
    return `${innerPad}${key}: ${JSON.stringify(val)}`;
  });
  return `${pad}{\n${entries.join(',\n')}\n${pad}}`;
}

console.log('Sample formatted hadith:\n', formatObject(newHadiths[0]));
