export interface SeerahChapter {
  id: string;
  order: number;
  title: string;
  arabicTitle: string;
  era: 'Pre-Islamic & Early Life' | 'Makkan Period' | 'Madinan Period' | 'Farewell & Legacy';
  period: string;
  summary: string;
  content: string;
  keyEvents: string[];
  references: string[];
}

export const SEERAH_CHAPTERS: SeerahChapter[] = [
  {
    id: 'birth-early-years',
    order: 1,
    title: 'Blessed Lineage, Birth, and Childhood',
    arabicTitle: 'النسب الشريف والمولد المبارك',
    era: 'Pre-Islamic & Early Life',
    period: '570 CE – 595 CE',
    summary: 'The birth of the Final Messenger ﷺ in Makkah, Year of the Elephant, his lineage from Prophet Ibrahim (AS) via Ismail (AS), and his early upbringing.',
    content: 'Prophet Muhammad ﷺ was born on Monday, 12th of Rabi al-Awwal in the Year of the Elephant (570 CE), in the noble Hashimite clan of Quraysh. His father Abdullah passed away before his birth. He was nursed by Halimah as-Sa\'diyyah in the desert, where he acquired pure Arabic speech and robust health. His mother Aminah passed away when he was six years old, after which his grandfather Abdul Muttalib took care of him. Following the death of his grandfather, his uncle Abu Talib assumed his care with great devotion. Even in his youth, he was renowned among the Quraysh as Al-Sadiq (The Truthful) and Al-Amin (The Trustworthy).',
    keyEvents: [
      'Year of the Elephant and preservation of the Ka\'bah',
      'Birth in Makkah and nursing by Halimah as-Sa\'diyyah',
      'The passing of his mother Aminah and grandfather Abdul Muttalib',
      'Trade journeys with uncle Abu Talib and monk Bahira event',
      'Hilf al-Fudul (Pact of the Virtuous) for social justice'
    ],
    references: ['Ar-Raheeq Al-Makhtum (The Sealed Nectar)', 'Ibn Hisham: As-Seerah an-Nabawiyyah', 'Sahih al-Bukhari #3886']
  },
  {
    id: 'marriage-and-reconstruction',
    order: 2,
    title: 'Marriage to Khadijah and Rebuilding of the Ka\'bah',
    arabicTitle: 'الزواج بالسيدة خديجة وبناء الكعبة',
    era: 'Pre-Islamic & Early Life',
    period: '595 CE – 610 CE',
    summary: 'Marriage to the noble lady Khadijah (RA) and his arbitration wisdom during the rebuilding of the Ka\'bah.',
    content: 'At age twenty-five, he conducted successful trading expeditions to Syria for Khadijah bint Khuwaylid (RA). Deeply impressed by his immaculate integrity, character, and honesty, Khadijah sent a proposal of marriage, which was blessed and contracted. She bore him all his children except Ibrahim. When he was thirty-five, floodwaters damaged the Ka\'bah. When Quraysh rebuilt it, a fierce dispute erupted over who would place the Black Stone (Al-Hajar al-Aswad). They agreed that the next person to enter would judge. It was Muhammad ﷺ; he placed the stone on a mantle and invited chiefs of all clans to lift it together, averting civil war through brilliant wisdom.',
    keyEvents: [
      'Marriage to Sayyidah Khadijah bint Khuwaylid (RA)',
      'Birth of children: Al-Qasim, Abdullah, Zaynab, Ruqayyah, Umm Kulthum, Fatima (RA)',
      'Rebuilding of the Holy Ka\'bah and peaceful placement of the Black Stone'
    ],
    references: ['Ar-Raheeq Al-Makhtum', 'Musnad Ahmad #15112', 'Sirat Ibn Kathir']
  },
  {
    id: 'first-revelation',
    order: 3,
    title: 'The First Revelation in Cave Hira',
    arabicTitle: 'بدء الوحي في غار حراء',
    era: 'Makkan Period',
    period: '610 CE (Ramadan)',
    summary: 'The descent of Angel Jibreel with the first words of the Holy Quran: "Read in the name of your Lord who created."',
    content: 'As he approached forty, the Prophet ﷺ loved seclusion for contemplation in Cave Hira on Jabal al-Nur. In Ramadan of 610 CE, Archangel Jibreel appeared, squeezed him, and commanded: "Iqra!" (Read!). The Prophet replied: "I cannot read." After repeating this three times, Jibreel recited Surah Al-Alaq (96:1-5). Trembling with awe, he returned to Khadijah (RA), who wrapped him in blankets and reassured him: "Never! By Allah, Allah will never disgrace you; you keep ties of kinship, help the poor, support the destitute, honor guests, and assist in truthful causes." She then accompanied him to her cousin Waraqah ibn Nawfal, who confirmed this was the same angelic revelation (Namus) given to Prophet Musa (AS).',
    keyEvents: [
      'Spiritual seclusion in Cave Hira',
      'Archangel Jibreel descending with Surah Al-Alaq 1-5',
      'The profound reassurance and faith of Sayyidah Khadijah (RA)',
      'Confirmation from scholar Waraqah ibn Nawfal'
    ],
    references: ['Sahih al-Bukhari #3', 'Sahih Muslim #160']
  },
  {
    id: 'call-and-persecution',
    order: 4,
    title: 'Open Dawah and the Boycott in Shi\'b Abi Talib',
    arabicTitle: 'الجهر بالدعوة وحصار شعب أبي طالب',
    era: 'Makkan Period',
    period: '613 CE – 619 CE',
    summary: 'The proclamation of Tawhid on Mount Safa, steadfastness under severe Quraysh persecution, and the three-year harsh boycott.',
    content: 'Following three years of private invitation, Allah commanded: "And proclaim openly what you are commanded" (Surah Al-Hijr 15:94). Prophet Muhammad ﷺ climbed Mount Safa and invited the clans to abandon idol worship and worship the One True Creator. The pagan Quraysh met this with mockery, slander, and brutal persecution of vulnerable Muslims like Bilal ibn Rabah, Sumayyah, and Yasir (RA). Despite torture, the believers remained resolute. Later, Quraysh enforced a three-year social and economic banishment against Banu Hashim in Shi\'b Abi Talib, which ended when termites consumed the boycott treaty except the name of Allah.',
    keyEvents: [
      'Proclamation on Mount Safa',
      'Torture of early Muslims and martyrdom of Sumayyah and Yasir (RA)',
      'First migration of Muslims to Abyssinia (Habashah) ruled by the just King Negus',
      'Three-year brutal siege in Shi\'b Abi Talib'
    ],
    references: ['Ar-Raheeq Al-Makhtum', 'Ibn Hisham Vol 1', 'Tarikh at-Tabari']
  },
  {
    id: 'isra-miraj',
    order: 5,
    title: 'The Year of Sorrow and Al-Isra wal-Mi\'raj',
    arabicTitle: 'عام الحزن والإسراء والمعراج',
    era: 'Makkan Period',
    period: '619 CE – 621 CE',
    summary: 'The passing of Khadijah (RA) and Abu Talib, the difficult journey to Ta\'if, and the miraculous Night Journey and Heavenly Ascension.',
    content: 'In 619 CE, known as the Year of Sorrow (\'Am al-Huzn), both his protective uncle Abu Talib and his devoted wife Khadijah (RA) passed away. Soon after, he traveled to Ta\'if to invite the Thaqif tribe, but their leaders incited youth and slaves to pelt him with stones until his sandals filled with blood. Despite excruciating pain, when the Angel of the Mountains offered to crush the city, the Prophet ﷺ showed unmatched compassion, praying: "No, rather I hope that Allah will bring from their descendants those who worship Allah alone." Following this sacrifice, Allah granted him the miraculous Night Journey (Al-Isra) from Makkah to Al-Aqsa Mosque in Jerusalem on Buraq, and the Ascension (Al-Mi\'raj) through the seven heavens, where the five daily prayers were ordained.',
    keyEvents: [
      'Passing of Khadijah (RA) and Abu Talib',
      'Supplication of mercy for the people of Ta\'if',
      'Al-Isra from Masjid al-Haram to Masjid al-Aqsa',
      'Al-Mi\'raj ascending to Sidrat al-Muntaha',
      'Gift of the 5 Daily Prayers (Salah)'
    ],
    references: ['Surah Al-Isra 17:1', 'Surah An-Najm 53:1-18', 'Sahih al-Bukhari #3207', 'Sahih Muslim #164']
  },
  {
    id: 'hijrah',
    order: 6,
    title: 'The Great Migration (Hijrah) to Madinah',
    arabicTitle: 'الهجرة النبوية المباركة إلى المدينة المنورة',
    era: 'Madinan Period',
    period: '622 CE',
    summary: 'The Pledges of Aqabah, escape from assassination with Abu Bakr (RA), and the establishment of the first Islamic commonwealth in Madinah.',
    content: 'Following the Pledges of Aqabah with the Ansar of Yathrib, the Prophet ﷺ permitted Muslims to migrate. When Quraysh plotted to assassinate him in his bed, Ali ibn Abi Talib (RA) slept in his place to return trusts to their owners, while the Prophet ﷺ and Abu Bakr (RA) departed for Cave Thawr. When Quraysh stood at the mouth of the cave, Abu Bakr said: "If any of them looks down at his feet, he will see us." The Prophet ﷺ serenely answered: "What do you think of two, where Allah is the third?" (Surah At-Tawbah 9:40). Arriving safely in Yathrib (henceforth Madinat ar-Rasul / Madinah), he built Masjid an-Nabawi, instituted brotherhood (Mu\'akhah) between Muhajirun and Ansar, and authored the Constitution of Madinah.',
    keyEvents: [
      'The Pledges of Aqabah (Bay\'at al-Aqabah)',
      'Ali (RA) resting in the Prophet\'s bed to deliver trusts',
      'Three nights in Cave Thawr with Abu Bakr as-Siddiq (RA)',
      'Establishment of Masjid Quba and Masjid an-Nabawi',
      'Charter of Madinah establishing interfaith justice and civil unity'
    ],
    references: ['Surah At-Tawbah 9:40', 'Sahih al-Bukhari #3905', 'Constitution of Madinah']
  },
  {
    id: 'farewell-pilgrimage',
    order: 7,
    title: 'The Conquest of Makkah, Farewell Pilgrimage, and Legacy',
    arabicTitle: 'فتح مكة وحجة الوداع والرحيل الرفيق الأعلى',
    era: 'Farewell & Legacy',
    period: '630 CE – 632 CE',
    summary: 'The magnanimous peaceful conquest of Makkah, the historic Farewell Sermon on Mount Arafat, and his return to the Supreme Companion.',
    content: 'In 8 AH (630 CE), the Prophet ﷺ led an army of 10,000 to Makkah without bloodshed. Entering with head bowed in deep humility, he cleansed the Ka\'bah of 360 idols and pardoned his former oppressors with the words of Prophet Yusuf (AS): "Go, for you are free." In 10 AH (632 CE), over 120,000 companions joined him for the Farewell Pilgrimage (Hajjat al-Wada\'). Standing at Mount Arafat, he delivered his monumental Universal Human Rights Sermon: proclaiming the sacredness of human life, dignity, equality of all races, rights of women, and abolition of usury and tribal blood feuds. On Monday, 12th Rabi al-Awwal 11 AH, he passed away, his final whisper being: "Bal ar-Rafiq al-A\'la" (Rather, the Supreme Companion in Heaven).',
    keyEvents: [
      'Conquest of Makkah with universal amnesty and destruction of idols',
      'The Farewell Sermon (Khutbat al-Wada\') establishing universal human dignity',
      'Revelation of Surah Al-Ma\'idah 5:3: "Today I have perfected your religion for you..."',
      'Passing away in the room of Sayyidah Aisha (RA) and burial in Madinah'
    ],
    references: ['Sahih al-Bukhari #4437', 'Sahih Muslim #1218', 'Ar-Raheeq Al-Makhtum']
  }
];
