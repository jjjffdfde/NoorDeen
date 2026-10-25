const fs = require('fs');
const vm = require('vm');

const toolsCode = fs.readFileSync('public/js/tools.js', 'utf8');
const context = { window: {}, console };
vm.createContext(context);
vm.runInContext(toolsCode + '; window.IslamicTools = IslamicTools;', context);

const IslamicTools = context.window.IslamicTools;

// Test date: October 25, 2026
const date = new Date(2026, 9, 25);

const cities = [
  { name: 'Islamabad', lat: 33.6844, lng: 73.0479, tz: 5 },
  { name: 'Lahore', lat: 31.5204, lng: 74.3587, tz: 5 },
  { name: 'Gujranwala', lat: 32.1877, lng: 74.1945, tz: 5 },
  { name: 'Multan', lat: 30.1575, lng: 71.4524, tz: 5 },
  { name: 'Karachi', lat: 24.8607, lng: 67.0011, tz: 5 },
  { name: 'Quetta', lat: 30.1798, lng: 66.9750, tz: 5 },
  { name: 'Peshawar', lat: 34.0151, lng: 71.5249, tz: 5 }
];

console.log('Results on 25 October 2026:');
cities.forEach(c => {
  const res = IslamicTools.calculatePrayerTimes(date, c.lat, c.lng, c.tz, { method: 'karachi', asrMethod: 'hanafi' });
  console.log(`${c.name.padEnd(12)}: Fajr=${res.fajr} Sunrise=${res.sunrise} Dhuhr=${res.dhuhr} Asr=${res.asr} Maghrib=${res.maghrib} Isha=${res.isha}`);
});
