const fs = require('fs');

const content = fs.readFileSync('public/salah-guide.html', 'utf8');

const checks = [
  'Thana',
  'Subhanaka',
  'Wajjahtu',
  'Fatihah',
  'Subhana Rabbiyal Azeem',
  'Sami Allahu Liman Hamidah',
  'Rabbana Lakal Hamd',
  'Subhana Rabbiyal A\'la',
  'Rabbighfirli',
  'Attahiyyatu',
  'Allahumma Salli Ala Muhammad',
  'Allahumma Inni Zalamtu',
  'Allahumma Inni A\'udhu Bika Min Adhabi Jahannam',
  'Tasleem',
  'Witr',
  'Qunut',
  'Hanafi',
  'Shafi',
  'Maliki',
  'Hanbali'
];

console.log('Salah Guide content checks:');
checks.forEach(c => {
  const present = content.toLowerCase().includes(c.toLowerCase());
  console.log(`  ${c}: ${present ? 'YES' : 'NO'}`);
});
