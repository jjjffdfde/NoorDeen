const fs = require('fs');
const vm = require('vm');
const newHadiths = require('./generate-hadiths-expansion.cjs');
const newDuas = require('./generate-duas-expansion.cjs');

function formatObject(obj, indent = 4) {
  const pad = ' '.repeat(indent);
  const innerPad = ' '.repeat(indent + 2);
  const entries = Object.entries(obj).map(([key, val]) => {
    return `${innerPad}${key}: ${JSON.stringify(val)}`;
  });
  return `${pad}{\n${entries.join(',\n')}\n${pad}}`;
}

let content = fs.readFileSync('public/js/data.js', 'utf8');

// 1. Append Hadiths before kalimas: [
const kalimasIdx = content.indexOf('kalimas: [');
if (kalimasIdx === -1) throw new Error('Could not find kalimas: [ in data.js');

// Look backwards from kalimasIdx to find the closing bracket of hadiths: [
const beforeKalimas = content.slice(0, kalimasIdx);
const lastClosingBracketIdx = beforeKalimas.lastIndexOf(']');
if (lastClosingBracketIdx === -1) throw new Error('Could not find closing bracket before kalimas');

const hadithsFormatted = newHadiths.map(h => formatObject(h, 4)).join(',\n');
const newBeforeKalimas = beforeKalimas.slice(0, lastClosingBracketIdx) + ',\n' + hadithsFormatted + '\n  ' + beforeKalimas.slice(lastClosingBracketIdx);
content = newBeforeKalimas + content.slice(kalimasIdx);

// 2. Append Duas before the closing of duas: [
const windowExportIdx = content.indexOf('if (typeof window');
if (windowExportIdx === -1) throw new Error('Could not find window export in data.js');

const beforeExport = content.slice(0, windowExportIdx);
const lastDuaBracketIdx = beforeExport.lastIndexOf(']');
if (lastDuaBracketIdx === -1) throw new Error('Could not find closing bracket for duas');

const duasFormatted = newDuas.map(d => formatObject(d, 4)).join(',\n');
const newBeforeExport = beforeExport.slice(0, lastDuaBracketIdx) + ',\n' + duasFormatted + '\n  ' + beforeExport.slice(lastDuaBracketIdx);
content = newBeforeExport + content.slice(windowExportIdx);

fs.writeFileSync('public/js/data.js', content, 'utf8');
console.log('Successfully appended expanded data to public/js/data.js');

// Verify in VM sandbox
const context = {};
vm.createContext(context);
vm.runInContext(content.replace('const ISLAMIC_DATA =', 'globalThis.ISLAMIC_DATA ='), context);
const data = context.ISLAMIC_DATA;

console.log('VM Verification:');
console.log('- Total Surahs:', data.surahs.length);
console.log('- Total Juz:', data.juzList.length);
console.log('- Total Hadiths:', data.hadiths.length);
console.log('- Total Kalimas:', data.kalimas.length);
console.log('- Total Duas:', data.duas.length);
