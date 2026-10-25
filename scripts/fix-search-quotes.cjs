const fs = require('fs');

let searchJs = fs.readFileSync('public/js/search.js', 'utf8');

// Replace single-quoted titles that contain apostrophes with double-quoted strings
searchJs = searchJs.replace(/title: '([^']*)'([^']*)'/g, (m, p1, p2) => {
  return `title: "${p1}'${p2}"`;
});

// Also manually fix the specific known titles:
searchJs = searchJs.replace(
  "title: 'Early Secret Da'wah & Dar al-Arqam'",
  'title: "Early Secret Da\'wah & Dar al-Arqam"'
);
searchJs = searchJs.replace(
  "title: 'Year of Sorrow & Mission to Ta'if'",
  'title: "Year of Sorrow & Mission to Ta\'if"'
);
searchJs = searchJs.replace(
  "title: 'The Miraculous Night Journey (Al-Isra wal-Mi'raj)'",
  'title: "The Miraculous Night Journey (Al-Isra wal-Mi\'raj)"'
);
searchJs = searchJs.replace(
  "title: 'Treaty of Hudaybiyyah & Bay'at ar-Ridwan'",
  'title: "Treaty of Hudaybiyyah & Bay\'at ar-Ridwan"'
);
searchJs = searchJs.replace(
  "title: 'Battle of Hunayn, Siege of Ta'if & Tabuk'",
  'title: "Battle of Hunayn, Siege of Ta\'if & Tabuk"'
);
searchJs = searchJs.replace(
  "title: 'Prophet to the Tribe of 'Ad'",
  'title: "Prophet to the Tribe of \'Ad"'
);

fs.writeFileSync('public/js/search.js', searchJs, 'utf8');
console.log('Fixed quotes in search.js');
