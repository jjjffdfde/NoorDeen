const fs = require('fs');
const vm = require('vm');

const dataContent = fs.readFileSync('public/js/data.js', 'utf8');
const searchContent = fs.readFileSync('public/js/search.js', 'utf8');

const sandbox = { window: {}, console: console };
vm.createContext(sandbox);
vm.runInContext(dataContent, sandbox);
sandbox.ISLAMIC_DATA = sandbox.window.ISLAMIC_DATA;
vm.runInContext(searchContent, sandbox);

const searchEngine = sandbox.window.UniversalSearch;
console.log('Testing existing search queries:');
console.log('yaseen:', searchEngine.search('surah yaseen')[0]?.url);
console.log('yasin:', searchEngine.search('yasin')[0]?.url);
console.log('char qul length:', searchEngine.search('char qul').length);
console.log('rehman:', searchEngine.search('surah rehman')[0]?.url);
