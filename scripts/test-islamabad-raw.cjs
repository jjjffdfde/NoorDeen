const fs = require('fs');
const vm = require('vm');

const toolsCode = fs.readFileSync('public/js/tools.js', 'utf8');
const context = { window: {}, console };
vm.createContext(context);
vm.runInContext(toolsCode + '; window.IslamicTools = IslamicTools;', context);

const IslamicTools = context.window.IslamicTools;

// Coordinates of Islamabad: Lat 33.6844, Lng 73.0479, Timezone 5
const date = new Date(2026, 9, 25); // Oct 25, 2026
console.log('Date:', date.toISOString());

const times1 = IslamicTools.calculatePrayerTimes(33.6844, 73.0479, 5, date, { method: 'karachi', asrMethod: 'hanafi' });
console.log('Islamabad (lat,lng,tz,date):', times1);

const times2 = IslamicTools.calculatePrayerTimes(date, 33.6844, 73.0479, 5, { method: 'karachi', asrMethod: 'hanafi' });
console.log('Islamabad (date,lat,lng,tz):', times2);
