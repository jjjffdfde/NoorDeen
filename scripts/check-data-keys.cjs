const fs = require('fs');
const dataJs = fs.readFileSync('public/js/data.js', 'utf8');

const keys = [];
const regex = /^\s*([a-zA-Z0-9_$]+)\s*:\s*(\[|\{)/gm;
let m;
while ((m = regex.exec(dataJs)) !== null) {
  keys.push(m[1]);
}
console.log('Top-level / prominent keys in data.js:', [...new Set(keys)]);
