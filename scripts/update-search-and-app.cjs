const fs = require('fs');

// 1. Read existing search.js
let searchJs = fs.readFileSync('public/js/search.js', 'utf8');

// Check if SEERAH_SEARCH_CHAPTERS is already present
if (!searchJs.includes('SEERAH_SEARCH_CHAPTERS')) {
  const insertBefore = '// Sample preview translations in Urdu for top popular Surahs';
  const datasetsCode = `
// 3a. Phase 8 Expanded Search Datasets: Seerah, Sahaba, Prophets & History
const SEERAH_SEARCH_CHAPTERS = [
  { num: 1, title: 'Pre-Islamic Arabia & Makkan Sanctuary', keywords: ['jahiliyyah', 'mecca', 'sanctuary', 'abrahamic', 'quraysh'], url: 'seerah.html#ch1' },
  { num: 2, title: 'Blessed Birth & Desert Infancy', keywords: ['birth', 'year of elephant', 'aminah', 'halimah', 'as-sadiyyah'], url: 'seerah.html#ch2' },
  { num: 3, title: 'Childhood & Guardianship of Abu Talib', keywords: ['childhood', 'abu talib', 'shepherding', 'bahira'], url: 'seerah.html#ch3' },
  { num: 4, title: 'Hilf al-Fudul & Title Al-Amin', keywords: ['hilf al-fudul', 'al-amin', 'as-sadiq', 'trustworthy'], url: 'seerah.html#ch4' },
  { num: 5, title: 'Marriage with Khadijah & Sacred Domesticity', keywords: ['khadijah', 'marriage', 'domestic', 'tahira'], url: 'seerah.html#ch5' },
  { num: 6, title: 'Rebuilding of Kaaba & Arbiter of the Black Stone', keywords: ['kaaba', 'black stone', 'hajar al-aswad', 'rebuilding'], url: 'seerah.html#ch6' },
  { num: 7, title: 'First Revelation at Cave Hira', keywords: ['hira', 'revelation', 'iqra', 'jibril', 'prophethood'], url: 'seerah.html#ch7' },
  { num: 8, title: 'Early Secret Da\'wah & Dar al-Arqam', keywords: ['dar al-arqam', 'dawah', 'early converts', 'secret'], url: 'seerah.html#ch8' },
  { num: 9, title: 'Public Proclamation at Mount Safa & Persecution', keywords: ['safa', 'public proclamation', 'persecution', 'quraysh boycott'], url: 'seerah.html#ch9' },
  { num: 10, title: 'Migrations to Abyssinia & Negus Justice', keywords: ['abyssinia', 'habasha', 'negus', 'najjashi', 'jafar'], url: 'seerah.html#ch10' },
  { num: 11, title: 'The Banu Hashim Boycott at Shib Abi Talib', keywords: ['boycott', 'shib abi talib', 'embargo', 'siege'], url: 'seerah.html#ch11' },
  { num: 12, title: 'Year of Sorrow & Mission to Ta\'if', keywords: ['year of sorrow', 'taif', 'ta\'if', 'khadijah death', 'abu talib death'], url: 'seerah.html#ch12' },
  { num: 13, title: 'The Miraculous Night Journey (Al-Isra wal-Mi\'raj)', keywords: ['isra', 'miraj', 'night journey', 'masjid al-aqsa', 'five prayers'], url: 'seerah.html#ch13' },
  { num: 14, title: 'Pledges of Aqabah & Ansar Allegiance', keywords: ['aqabah', 'pledge of aqabah', 'ansar', 'yathrib'], url: 'seerah.html#ch14' },
  { num: 15, title: 'The Great Hijrah to Madinah & Cave Thawr', keywords: ['hijrah', 'cave thawr', 'madinah', 'migration', 'abu bakr'], url: 'seerah.html#ch15' },
  { num: 16, title: 'Founding the Madinan State & Constitution', keywords: ['madinah constitution', 'mithaq al-madinah', 'masjid an-nabawi', 'brotherhood'], url: 'seerah.html#ch16' },
  { num: 17, title: 'Battle of Badr: The Day of Criterion (Yawm al-Furqan)', keywords: ['badr', 'battle of badr', 'furqan', 'victory'], url: 'seerah.html#ch17' },
  { num: 18, title: 'Battle of Uhud: Trial and Steadfastness', keywords: ['uhud', 'battle of uhud', 'hamzah', 'archers'], url: 'seerah.html#ch18' },
  { num: 19, title: 'Battle of the Trench (Al-Khandaq / Confederates)', keywords: ['trench', 'khandaq', 'ahzab', 'salman al-farsi', 'confederates'], url: 'seerah.html#ch19' },
  { num: 20, title: 'Treaty of Hudaybiyyah & Bay\'at ar-Ridwan', keywords: ['hudaybiyyah', 'hudaybiyah', 'treaty', 'bayat al-ridwan', 'manifest victory'], url: 'seerah.html#ch20' },
  { num: 21, title: 'Letters to World Emperors & Kings', keywords: ['letters', 'heraclius', 'chosroes', 'negus', 'muqawqis', 'kings'], url: 'seerah.html#ch21' },
  { num: 22, title: 'Expedition to Khaybar & Conquest of Oasis', keywords: ['khaybar', 'oasis', 'ali', 'fortress', 'peace'], url: 'seerah.html#ch22' },
  { num: 23, title: 'The Conquest of Makkah (Fath Makkah)', keywords: ['fath makkah', 'conquest of mecca', 'cleansing of kaaba', 'general amnesty'], url: 'seerah.html#ch23' },
  { num: 24, title: 'Battle of Hunayn, Siege of Ta\'if & Tabuk', keywords: ['hunayn', 'tabuk', 'delegations', 'year of delegations'], url: 'seerah.html#ch24' },
  { num: 25, title: 'Farewell Pilgrimage (Hajjat al-Wada) & Demise', keywords: ['farewell pilgrimage', 'hajjat al-wada', 'farewell sermon', 'demise', 'wafat', 'ar-rafiq al-ala'], url: 'seerah.html#ch25' }
];

const SAHABA_SEARCH_PROFILES = [
  { name: 'Abu Bakr as-Siddiq', title: 'The First Caliph & As-Siddiq', keywords: ['abu bakr', 'siddiq', 'caliph', 'thawr', 'ridda', 'khulafa'], url: 'sahaba.html#abu-bakr' },
  { name: 'Umar ibn al-Khattab', title: 'Al-Faruq & The Second Caliph', keywords: ['umar', 'farooq', 'faruq', 'khattab', 'caliph', 'justice', 'khulafa'], url: 'sahaba.html#umar' },
  { name: 'Uthman ibn Affan', title: 'Dhun-Nurayn & The Third Caliph', keywords: ['uthman', 'affan', 'dhun nurayn', 'quran compilation', 'caliph', 'khulafa'], url: 'sahaba.html#uthman' },
  { name: 'Ali ibn Abi Talib', title: 'Asadullah & The Fourth Caliph', keywords: ['ali', 'abu talib', 'asadullah', 'caliph', 'khaybar', 'khulafa'], url: 'sahaba.html#ali' },
  { name: 'Khadijah bint Khuwaylid', title: 'Mother of the Believers & At-Tahira', keywords: ['khadijah', 'tahira', 'mother of believers', 'first convert'], url: 'sahaba.html#khadijah' },
  { name: 'Aisha bint Abi Bakr', title: 'As-Siddiqah & Scholar of the Ummah', keywords: ['aisha', 'ayesha', 'mother of believers', 'scholar', 'hadith'], url: 'sahaba.html#aisha' },
  { name: 'Fatimah az-Zahra', title: 'Leader of Women of Paradise', keywords: ['fatimah', 'zahra', 'sayyidat nisa al-alameen', 'prophet daughter'], url: 'sahaba.html#fatimah' },
  { name: 'Bilal ibn Rabah', title: 'Mu\'adhin of the Messenger ﷺ', keywords: ['bilal', 'habashi', 'muadhin', 'azaan', 'athan', 'perseverance'], url: 'sahaba.html#bilal' },
  { name: 'Khalid ibn al-Walid', title: 'Sayfullah (The Sword of Allah)', keywords: ['khalid', 'walid', 'sayfullah', 'sword of allah', 'yarmouk'], url: 'sahaba.html#khalid' },
  { name: 'Salman al-Farsi', title: 'The Seeker of Truth & Trench Architect', keywords: ['salman', 'farsi', 'persian', 'khandaq', 'trench'], url: 'sahaba.html#salman' },
  { name: 'Abu Ubaydah ibn al-Jarrah', title: 'Trustee of this Ummah (Amin al-Ummah)', keywords: ['abu ubaydah', 'amin al-ummah', 'asharah'], url: 'sahaba.html#abu-ubaydah' },
  { name: 'Sa\'d ibn Abi Waqqas', title: 'Knight of Islam & Conqueror of Qadisiyyah', keywords: ['saad', 'abi waqqas', 'qadisiyyah', 'archer'], url: 'sahaba.html#saad' },
  { name: 'Talhah ibn Ubaydullah', title: 'The Living Martyr (Ash-Shahid al-Hayy)', keywords: ['talhah', 'living martyr', 'uhud shield'], url: 'sahaba.html#talhah' },
  { name: 'Az-Zubayr ibn al-Awwam', title: 'Disciple of the Messenger ﷺ (Hawari)', keywords: ['zubayr', 'hawari', 'disciple', 'awwam'], url: 'sahaba.html#zubayr' }
];

const PROPHET_SEARCH_STORIES = [
  { name: 'Prophet Adam', title: 'Father of Humanity (Abul Bashar)', keywords: ['adam', 'abul bashar', 'first prophet', 'creation', 'repentance'], url: 'prophets.html#adam' },
  { name: 'Prophet Idris', title: 'Enoch — The Scholar & Elevated One', keywords: ['idris', 'enoch', 'scholar', 'astronomy', 'writing'], url: 'prophets.html#idris' },
  { name: 'Prophet Nuh', title: 'Noah — The Ark & Second Father of Humanity', keywords: ['nuh', 'noah', 'ark', 'flood', 'safinah'], url: 'prophets.html#nuh' },
  { name: 'Prophet Hud', title: 'Prophet to the Tribe of \'Ad', keywords: ['hud', 'ad', 'iram', 'monotheism'], url: 'prophets.html#hud' },
  { name: 'Prophet Salih', title: 'Prophet to Thamud & The Miracle She-Camel', keywords: ['salih', 'thamud', 'she camel', 'rock'], url: 'prophets.html#salih' },
  { name: 'Prophet Ibrahim', title: 'Abraham — Friend of Allah (Khalilullah)', keywords: ['ibrahim', 'abraham', 'khalilullah', 'sacrifice', 'kaaba builder', 'hanif'], url: 'prophets.html#ibrahim' },
  { name: 'Prophet Ismail', title: 'Ishmael — The Patient Sacrifice (Dhabihullah)', keywords: ['ismail', 'ishmael', 'dhabihullah', 'zamzam', 'makkah'], url: 'prophets.html#ismail' },
  { name: 'Prophet Musa', title: 'Moses — One Who Spoke to Allah (Kalimullah)', keywords: ['musa', 'moses', 'kalimullah', 'pharaoh', 'firawn', 'torah', 'sinai'], url: 'prophets.html#musa' },
  { name: 'Prophet Dawud', title: 'David — The Devout King & Psalmist (Zabur)', keywords: ['dawud', 'david', 'zabur', 'goliath', 'jalut', 'iron'], url: 'prophets.html#dawud' },
  { name: 'Prophet Isa', title: 'Jesus — Word & Spirit from Allah (Ruhullah)', keywords: ['isa', 'jesus', 'ruhullah', 'maryam', 'miracles', 'injil'], url: 'prophets.html#isa' }
];

const HISTORY_SEARCH_ERAS = [
  { eraNum: 1, title: 'Pre-Islamic Arabia & Abrahamic Remnants', keywords: ['jahiliyyah', 'hunafa', 'pre-islamic', 'mecca trade'], url: 'history.html#era1' },
  { eraNum: 2, title: 'The Prophetic Era: Foundation of Ummah', keywords: ['prophetic era', 'madinah state', 'revelation', 'constitution'], url: 'history.html#era2' },
  { eraNum: 3, title: 'The Rightly Guided Caliphate (Khulafa Rashidun)', keywords: ['rashidun', 'caliphate', 'khulafa', 'abu bakr', 'umar', 'uthman', 'ali'], url: 'history.html#era3' },
  { eraNum: 4, title: 'The Umayyad Caliphate (Damascus)', keywords: ['umayyad', 'damascus', 'muawiyah', 'abd al-malik', 'dome of the rock'], url: 'history.html#era4' },
  { eraNum: 5, title: 'The Abbasid Golden Age & Bayt al-Hikmah', keywords: ['abbasid', 'baghdad', 'bayt al-hikmah', 'house of wisdom', 'harun al-rashid'], url: 'history.html#era5' },
  { eraNum: 6, title: 'Islamic Spain (Al-Andalus) & Cordoba Caliphate', keywords: ['andalus', 'spain', 'cordoba', 'granada', 'alhambra', 'averroes', 'ibn rushd'], url: 'history.html#era6' },
  { eraNum: 7, title: 'Seljuk Empire, Crusades & Salahuddin Ayyubi', keywords: ['seljuk', 'crusades', 'salahuddin', 'ayyubi', 'hattin', 'jerusalem', 'nizam al-mulk'], url: 'history.html#era7' },
  { eraNum: 8, title: 'The Mamluk Sultanate & Defense of Islam', keywords: ['mamluk', 'ain jalut', 'mongols', 'cairo', 'baybars'], url: 'history.html#era8' },
  { eraNum: 9, title: 'The Ottoman Empire: Constantinople to 3 Continents', keywords: ['ottoman', 'constantinople', 'mehmed', 'suleiman', 'istanbul', 'sinan'], url: 'history.html#era9' },
  { eraNum: 10, title: 'The Safavid Empire & Persian Renaissance', keywords: ['safavid', 'isfahan', 'shah abbas', 'persian art'], url: 'history.html#era10' },
  { eraNum: 11, title: 'The Mughal Empire in South Asia', keywords: ['mughal', 'babur', 'akbar', 'shah jahan', 'taj mahal', 'aurangzeb', 'delhi'], url: 'history.html#era11' },
  { eraNum: 12, title: 'The Modern Muslim World & Renewal (Nahdah)', keywords: ['modern world', 'nahdah', 'shah waliullah', 'colonialism', 'independence'], url: 'history.html#era12' }
];
`;

  searchJs = searchJs.replace(insertBefore, datasetsCode + '\n' + insertBefore);

  // Now insert search loops inside UniversalSearch.search
  const searchLoopTarget = '    // 3. Search Offline Ayahs (with Urdu Tarjuma)';
  const searchLoopsCode = `
    // 2a. Search Seerah Chapters
    SEERAH_SEARCH_CHAPTERS.forEach(c => {
      let matched = false;
      if (c.title.toLowerCase().includes(rawLower)) matched = true;
      else if (normalized.length >= 2 && normalizeIslamicQuery(c.title).includes(normalized)) matched = true;
      else if (c.keywords) {
        for (const kw of c.keywords) {
          if (rawLower.includes(kw) || kw.includes(rawLower) || (normalized.length >= 2 && normalizeIslamicQuery(kw).includes(normalized))) {
            matched = true;
            break;
          }
        }
      }
      if (matched) {
        results.push({
          type: '🕌 Seerah Chapter',
          title: 'Chapter ' + c.num + ': ' + c.title,
          snippet: 'Authentic chronological biography of Prophet Muhammad ﷺ: ' + c.title,
          url: c.url,
          priority: 75
        });
      }
    });

    // 2b. Search Sahaba Biographies
    SAHABA_SEARCH_PROFILES.forEach(s => {
      let matched = false;
      if (s.name.toLowerCase().includes(rawLower) || s.title.toLowerCase().includes(rawLower)) matched = true;
      else if (normalized.length >= 2 && (normalizeIslamicQuery(s.name).includes(normalized) || normalizeIslamicQuery(s.title).includes(normalized))) matched = true;
      else if (s.keywords) {
        for (const kw of s.keywords) {
          if (rawLower.includes(kw) || kw.includes(rawLower) || (normalized.length >= 2 && normalizeIslamicQuery(kw).includes(normalized))) {
            matched = true;
            break;
          }
        }
      }
      if (matched) {
        results.push({
          type: '👥 Sahaba Biography',
          title: s.name + ' (رضي الله عنه)',
          snippet: s.title + ' — Verified biographical learning archive.',
          url: s.url,
          priority: 72
        });
      }
    });

    // 2c. Search Prophetic Stories
    PROPHET_SEARCH_STORIES.forEach(p => {
      let matched = false;
      if (p.name.toLowerCase().includes(rawLower) || p.title.toLowerCase().includes(rawLower)) matched = true;
      else if (normalized.length >= 2 && (normalizeIslamicQuery(p.name).includes(normalized) || normalizeIslamicQuery(p.title).includes(normalized))) matched = true;
      else if (p.keywords) {
        for (const kw of p.keywords) {
          if (rawLower.includes(kw) || kw.includes(rawLower) || (normalized.length >= 2 && normalizeIslamicQuery(kw).includes(normalized))) {
            matched = true;
            break;
          }
        }
      }
      if (matched) {
        results.push({
          type: '✨ Prophetic Narrative',
          title: p.name + ' (عليه السلام)',
          snippet: p.title + ' — Quranic narrative with classical commentary.',
          url: p.url,
          priority: 70
        });
      }
    });

    // 2d. Search Islamic History Eras
    HISTORY_SEARCH_ERAS.forEach(h => {
      let matched = false;
      if (h.title.toLowerCase().includes(rawLower)) matched = true;
      else if (normalized.length >= 2 && normalizeIslamicQuery(h.title).includes(normalized)) matched = true;
      else if (h.keywords) {
        for (const kw of h.keywords) {
          if (rawLower.includes(kw) || kw.includes(rawLower) || (normalized.length >= 2 && normalizeIslamicQuery(kw).includes(normalized))) {
            matched = true;
            break;
          }
        }
      }
      if (matched) {
        results.push({
          type: '🏛️ Islamic History',
          title: 'Era ' + h.eraNum + ': ' + h.title,
          snippet: 'Comprehensive civilizational history and verified historical milestones.',
          url: h.url,
          priority: 68
        });
      }
    });
`;

  searchJs = searchJs.replace(searchLoopTarget, searchLoopsCode + '\n' + searchLoopTarget);

  fs.writeFileSync('public/js/search.js', searchJs, 'utf8');
  console.log('Successfully updated public/js/search.js with expanded search datasets!');
} else {
  console.log('SEERAH_SEARCH_CHAPTERS already in public/js/search.js');
}
