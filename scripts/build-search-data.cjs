const fs = require('fs');

// 1. Seerah chapters
const seerahData = [
  { id: 'ch1', num: 1, title: 'Pre-Islamic Arabia & Makkan Sanctuary', keywords: ['jahiliyyah', 'mecca', 'sanctuary', 'abrahamic', 'quraysh'], url: 'seerah.html#ch1' },
  { id: 'ch2', num: 2, title: 'Blessed Birth & Desert Infancy', keywords: ['birth', 'year of elephant', 'aminah', 'halimah', 'as-sadiyyah'], url: 'seerah.html#ch2' },
  { id: 'ch3', num: 3, title: 'Childhood & Guardianship of Abu Talib', keywords: ['childhood', 'abu talib', 'shepherding', 'bahira'], url: 'seerah.html#ch3' },
  { id: 'ch4', num: 4, title: 'Hilf al-Fudul & Title Al-Amin', keywords: ['hilf al-fudul', 'al-amin', 'as-sadiq', 'trustworthy'], url: 'seerah.html#ch4' },
  { id: 'ch5', num: 5, title: 'Marriage with Khadijah & Sacred Domesticity', keywords: ['khadijah', 'marriage', 'domestic', 'tahira'], url: 'seerah.html#ch5' },
  { id: 'ch6', num: 6, title: 'Rebuilding of Kaaba & Arbiter of the Black Stone', keywords: ['kaaba', 'black stone', 'hajar al-aswad', 'rebuilding'], url: 'seerah.html#ch6' },
  { id: 'ch7', num: 7, title: 'First Revelation at Cave Hira', keywords: ['hira', 'revelation', 'iqra', 'jibril', 'prophethood'], url: 'seerah.html#ch7' },
  { id: 'ch8', num: 8, title: 'Early Secret Da\'wah & Dar al-Arqam', keywords: ['dar al-arqam', 'dawah', 'early converts', 'secret'], url: 'seerah.html#ch8' },
  { id: 'ch9', num: 9, title: 'Public Proclamation at Mount Safa & Persecution', keywords: ['safa', 'public proclamation', 'persecution', 'quraysh boycott'], url: 'seerah.html#ch9' },
  { id: 'ch10', num: 10, title: 'Migrations to Abyssinia & Negus Justice', keywords: ['abyssinia', 'habasha', 'negus', 'najjashi', 'jafar'], url: 'seerah.html#ch10' },
  { id: 'ch11', num: 11, title: 'The Banu Hashim Boycott at Shib Abi Talib', keywords: ['boycott', 'shib abi talib', 'embargo', 'siege'], url: 'seerah.html#ch11' },
  { id: 'ch12', num: 12, title: 'Year of Sorrow & Mission to Ta\'if', keywords: ['year of sorrow', 'taif', 'ta\'if', 'khadijah death', 'abu talib death'], url: 'seerah.html#ch12' },
  { id: 'ch13', num: 13, title: 'The Miraculous Night Journey (Al-Isra wal-Mi\'raj)', keywords: ['isra', 'miraj', 'night journey', 'masjid al-aqsa', 'five prayers'], url: 'seerah.html#ch13' },
  { id: 'ch14', num: 14, title: 'Pledges of Aqabah & Ansar Allegiance', keywords: ['aqabah', 'pledge of aqabah', 'ansar', 'yathrib'], url: 'seerah.html#ch14' },
  { id: 'ch15', num: 15, title: 'The Great Hijrah to Madinah & Cave Thawr', keywords: ['hijrah', 'cave thawr', 'madinah', 'migration', 'abu bakr'], url: 'seerah.html#ch15' },
  { id: 'ch16', num: 16, title: 'Founding the Madinan State & Constitution', keywords: ['madinah constitution', 'mithaq al-madinah', 'masjid an-nabawi', 'brotherhood'], url: 'seerah.html#ch16' },
  { id: 'ch17', num: 17, title: 'Battle of Badr: The Day of Criterion (Yawm al-Furqan)', keywords: ['badr', 'battle of badr', 'furqan', 'victory'], url: 'seerah.html#ch17' },
  { id: 'ch18', num: 18, title: 'Battle of Uhud: Trial and Steadfastness', keywords: ['uhud', 'battle of uhud', 'hamzah', 'archers'], url: 'seerah.html#ch18' },
  { id: 'ch19', num: 19, title: 'Battle of the Trench (Al-Khandaq / Confederates)', keywords: ['trench', 'khandaq', 'ahzab', 'salman al-farsi', 'confederates'], url: 'seerah.html#ch19' },
  { id: 'ch20', num: 20, title: 'Treaty of Hudaybiyyah & Bay\'at ar-Ridwan', keywords: ['hudaybiyyah', 'hudaybiyah', 'treaty', 'bayat al-ridwan', 'manifest victory'], url: 'seerah.html#ch20' },
  { id: 'ch21', num: 21, title: 'Letters to World Emperors & Kings', keywords: ['letters', 'heraclius', 'chosroes', 'negus', 'muqawqis', 'kings'], url: 'seerah.html#ch21' },
  { id: 'ch22', num: 22, title: 'Expedition to Khaybar & Conquest of Oasis', keywords: ['khaybar', 'oasis', 'ali', 'fortress', 'peace'], url: 'seerah.html#ch22' },
  { id: 'ch23', num: 23, title: 'The Conquest of Makkah (Fath Makkah)', keywords: ['fath makkah', 'conquest of mecca', 'cleansing of kaaba', 'general amnesty'], url: 'seerah.html#ch23' },
  { id: 'ch24', num: 24, title: 'Battle of Hunayn, Siege of Ta\'if & Tabuk', keywords: ['hunayn', 'tabuk', 'delegations', 'year of delegations'], url: 'seerah.html#ch24' },
  { id: 'ch25', num: 25, title: 'Farewell Pilgrimage (Hajjat al-Wada) & Demise', keywords: ['farewell pilgrimage', 'hajjat al-wada', 'farewell sermon', 'demise', 'wafat', 'ar-rafiq al-ala'], url: 'seerah.html#ch25' }
];

// 2. Sahaba Biographies
const sahabaData = [
  { id: 'abu-bakr', name: 'Abu Bakr as-Siddiq', title: 'The First Caliph & As-Siddiq', keywords: ['abu bakr', 'siddiq', 'caliph', 'thawr', 'ridda'], url: 'sahaba.html#abu-bakr' },
  { id: 'umar', name: 'Umar ibn al-Khattab', title: 'Al-Faruq & The Second Caliph', keywords: ['umar', 'farooq', 'faruq', 'khattab', 'caliph', 'justice'], url: 'sahaba.html#umar' },
  { id: 'uthman', name: 'Uthman ibn Affan', title: 'Dhun-Nurayn & The Third Caliph', keywords: ['uthman', 'affan', 'dhun nurayn', 'quran compilation', 'caliph'], url: 'sahaba.html#uthman' },
  { id: 'ali', name: 'Ali ibn Abi Talib', title: 'Asadullah & The Fourth Caliph', keywords: ['ali', 'abu talib', 'asadullah', 'caliph', 'khaybar'], url: 'sahaba.html#ali' },
  { id: 'khadijah', name: 'Khadijah bint Khuwaylid', title: 'Mother of the Believers & At-Tahira', keywords: ['khadijah', 'tahira', 'mother of believers', 'first convert'], url: 'sahaba.html#khadijah' },
  { id: 'aisha', name: 'Aisha bint Abi Bakr', title: 'As-Siddiqah & Scholar of the Ummah', keywords: ['aisha', 'ayesha', 'mother of believers', 'scholar', 'hadith'], url: 'sahaba.html#aisha' },
  { id: 'fatimah', name: 'Fatimah az-Zahra', title: 'Leader of Women of Paradise', keywords: ['fatimah', 'zahra', 'sayyidat nisa al-alameen', 'prophet daughter'], url: 'sahaba.html#fatimah' },
  { id: 'bilal', name: 'Bilal ibn Rabah', title: 'Mu\'adhin of the Messenger ﷺ', keywords: ['bilal', 'habashi', 'muadhin', 'azaan', 'athan', 'perseverance'], url: 'sahaba.html#bilal' },
  { id: 'khalid', name: 'Khalid ibn al-Walid', title: 'Sayfullah (The Sword of Allah)', keywords: ['khalid', 'walid', 'sayfullah', 'sword of allah', 'yarmouk'], url: 'sahaba.html#khalid' },
  { id: 'salman', name: 'Salman al-Farsi', title: 'The Seeker of Truth & Trench Architect', keywords: ['salman', 'farsi', 'persian', 'khandaq', 'trench'], url: 'sahaba.html#salman' },
  { id: 'abu-ubaydah', name: 'Abu Ubaydah ibn al-Jarrah', title: 'Trustee of this Ummah (Amin al-Ummah)', keywords: ['abu ubaydah', 'amin al-ummah', 'asharah'], url: 'sahaba.html#abu-ubaydah' },
  { id: 'saad', name: 'Sa\'d ibn Abi Waqqas', title: 'Knight of Islam & Conqueror of Qadisiyyah', keywords: ['saad', 'abi waqqas', 'qadisiyyah', 'archer'], url: 'sahaba.html#saad' },
  { id: 'talhah', name: 'Talhah ibn Ubaydullah', title: 'The Living Martyr (Ash-Shahid al-Hayy)', keywords: ['talhah', 'living martyr', 'uhud shield'], url: 'sahaba.html#talhah' },
  { id: 'zubayr', name: 'Az-Zubayr ibn al-Awwam', title: 'Disciple of the Messenger ﷺ (Hawari)', keywords: ['zubayr', 'hawari', 'disciple', 'awwam'], url: 'sahaba.html#zubayr' }
];

// 3. Prophets Narratives
const prophetData = [
  { id: 'adam', name: 'Prophet Adam', title: 'Father of Humanity (Abul Bashar)', keywords: ['adam', 'abul bashar', 'first prophet', 'creation', 'repentance'], url: 'prophets.html#adam' },
  { id: 'idris', name: 'Prophet Idris', title: 'Enoch — The Scholar & Elevated One', keywords: ['idris', 'enoch', 'scholar', 'astronomy', 'writing'], url: 'prophets.html#idris' },
  { id: 'nuh', name: 'Prophet Nuh', title: 'Noah — The Ark & Second Father of Humanity', keywords: ['nuh', 'noah', 'ark', 'flood', 'safinah'], url: 'prophets.html#nuh' },
  { id: 'hud', name: 'Prophet Hud', title: 'Prophet to the Tribe of \'Ad', keywords: ['hud', 'ad', 'iram', 'monotheism'], url: 'prophets.html#hud' },
  { id: 'salih', name: 'Prophet Salih', title: 'Prophet to Thamud & The Miracle She-Camel', keywords: ['salih', 'thamud', 'she camel', 'rock'], url: 'prophets.html#salih' },
  { id: 'ibrahim', name: 'Prophet Ibrahim', title: 'Abraham — Friend of Allah (Khalilullah)', keywords: ['ibrahim', 'abraham', 'khalilullah', 'sacrifice', 'kaaba builder', 'hanif'], url: 'prophets.html#ibrahim' },
  { id: 'ismail', name: 'Prophet Ismail', title: 'Ishmael — The Patient Sacrifice (Dhabihullah)', keywords: ['ismail', 'ishmael', 'dhabihullah', 'zamzam', 'makkah'], url: 'prophets.html#ismail' },
  { id: 'musa', name: 'Prophet Musa', title: 'Moses — One Who Spoke to Allah (Kalimullah)', keywords: ['musa', 'moses', 'kalimullah', 'pharaoh', 'firawn', 'torah', 'sinai'], url: 'prophets.html#musa' },
  { id: 'dawud', name: 'Prophet Dawud', title: 'David — The Devout King & Psalmist (Zabur)', keywords: ['dawud', 'david', 'zabur', 'goliath', 'jalut', 'iron'], url: 'prophets.html#dawud' },
  { id: 'isa', name: 'Prophet Isa', title: 'Jesus — Word & Spirit from Allah (Ruhullah)', keywords: ['isa', 'jesus', 'ruhullah', 'maryam', 'miracles', 'injil'], url: 'prophets.html#isa' }
];

// 4. Historical Eras
const historyData = [
  { id: 'era1', eraNum: 1, title: 'Pre-Islamic Arabia & Abrahamic Remnants', keywords: ['jahiliyyah', 'hunafa', 'pre-islamic', 'mecca trade'], url: 'history.html#era1' },
  { id: 'era2', eraNum: 2, title: 'The Prophetic Era: Foundation of Ummah', keywords: ['prophetic era', 'madinah state', 'revelation', 'constitution'], url: 'history.html#era2' },
  { id: 'era3', eraNum: 3, title: 'The Rightly Guided Caliphate (Khulafa Rashidun)', keywords: ['rashidun', 'caliphate', 'khulafa', 'abu bakr', 'umar', 'uthman', 'ali'], url: 'history.html#era3' },
  { id: 'era4', eraNum: 4, title: 'The Umayyad Caliphate (Damascus)', keywords: ['umayyad', 'damascus', 'muawiyah', 'abd al-malik', 'dome of the rock'], url: 'history.html#era4' },
  { id: 'era5', eraNum: 5, title: 'The Abbasid Golden Age & Bayt al-Hikmah', keywords: ['abbasid', 'baghdad', 'bayt al-hikmah', 'house of wisdom', 'harun al-rashid'], url: 'history.html#era5' },
  { id: 'era6', eraNum: 6, title: 'Islamic Spain (Al-Andalus) & Cordoba Caliphate', keywords: ['andalus', 'spain', 'cordoba', 'granada', 'alhambra', 'averroes', 'ibn rushd'], url: 'history.html#era6' },
  { id: 'era7', eraNum: 7, title: 'Seljuk Empire, Crusades & Salahuddin Ayyubi', keywords: ['seljuk', 'crusades', 'salahuddin', 'ayyubi', 'hattin', 'jerusalem', 'nizam al-mulk'], url: 'history.html#era7' },
  { id: 'era8', eraNum: 8, title: 'The Mamluk Sultanate & Defense of Islam', keywords: ['mamluk', 'ain jalut', 'mongols', 'cairo', 'baybars'], url: 'history.html#era8' },
  { id: 'era9', eraNum: 9, title: 'The Ottoman Empire: Constantinople to 3 Continents', keywords: ['ottoman', 'constantinople', 'mehmed', 'suleiman', 'istanbul', 'sinan'], url: 'history.html#era9' },
  { id: 'era10', eraNum: 10, title: 'The Safavid Empire & Persian Renaissance', keywords: ['safavid', 'isfahan', 'shah abbas', 'persian art'], url: 'history.html#era10' },
  { id: 'era11', eraNum: 11, title: 'The Mughal Empire in South Asia', keywords: ['mughal', 'babur', 'akbar', 'shah jahan', 'taj mahal', 'aurangzeb', 'delhi'], url: 'history.html#era11' },
  { id: 'era12', eraNum: 12, title: 'The Modern Muslim World & Renewal (Nahdah)', keywords: ['modern world', 'nahdah', 'shah waliullah', 'colonialism', 'independence'], url: 'history.html#era12' }
];

console.log('Seerah count:', seerahData.length);
console.log('Sahaba count:', sahabaData.length);
console.log('Prophets count:', prophetData.length);
console.log('History count:', historyData.length);
