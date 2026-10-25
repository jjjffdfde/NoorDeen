const fs = require('fs');

const mainCss = fs.readFileSync('public/css/main.css', 'utf8');
console.log('seerah-chapter-card in main.css:', mainCss.includes('seerah-chapter-card'));

const seerahHtml = fs.readFileSync('public/seerah.html', 'utf8');
const headStyleMatch = seerahHtml.match(/<style[^>]*>([\s\S]*?)<\/style>/);
if (headStyleMatch) {
  console.log('seerah.html has internal <style> block, length:', headStyleMatch[1].length);
  console.log('First 500 chars of style:');
  console.log(headStyleMatch[1].substring(0, 500));
} else {
  console.log('No internal <style> in seerah.html');
}
