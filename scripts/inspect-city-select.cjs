const fs = require('fs');

const pt = fs.readFileSync('public/prayer-times.html', 'utf8');
const citySelectMatch = pt.match(/<select[^>]*id=["']city-select["'][^>]*>([\s\S]*?)<\/select>/i);
if (citySelectMatch) {
  console.log('--- #city-select in prayer-times.html ---');
  console.log(citySelectMatch[1]);
} else {
  console.log('No #city-select found in prayer-times.html');
}
