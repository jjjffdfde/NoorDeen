const fs = require('fs');
const vm = require('vm');

const dataJs = fs.readFileSync('public/js/data.js', 'utf8');
const ctx = {};
vm.createContext(ctx);
vm.runInContext(dataJs + '; this.DATA = ISLAMIC_DATA;', ctx);

console.log('ISLAMIC_DATA keys:', Object.keys(ctx.DATA));
