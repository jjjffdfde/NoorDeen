export interface Sahabi {
  id: string;
  name: string;
  arabicName: string;
  title: string;
  role: string;
  passingYearHijri: number;
  virtues: string[];
  biography: string;
  famousQuote: string;
}

export const SAHABA: Sahabi[] = [
  {
    id: 'abu-bakr',
    name: 'Abu Bakr as-Siddiq (رضي الله عنه)',
    arabicName: 'أبو بكر الصديق رضي الله عنه',
    title: 'As-Siddiq (The Upright / Truthful), Al-Atiq',
    role: 'First Caliph of Islam (11–13 AH)',
    passingYearHijri: 13,
    virtues: [
      'The first adult free male to accept Islam without hesitation',
      'The companion of the Prophet ﷺ in Cave Thawr during Hijrah',
      'Ransomed and freed Bilal (RA) and numerous persecuted slaves',
      'Spent his entire wealth in preparation for the Tabuk expedition'
    ],
    biography: 'Abdullah ibn Abi Quhafah, known as Abu Bakr, was the dearest companion to Prophet Muhammad ﷺ. Known for profound gentleness yet unshakeable resolve, he unified the Muslim Ummah following the Prophet\'s passing, organized the compilation of the Quran into a single volume (Mushaf), and dispatched the armies that secured the borders of the young commonwealth.',
    famousQuote: 'Whoever worshipped Muhammad, know that Muhammad has passed away; but whoever worships Allah, know that Allah is Ever-Living and does not die.'
  },
  {
    id: 'umar-ibn-khattab',
    name: 'Umar ibn al-Khattab (رضي الله عنه)',
    arabicName: 'عمر بن الخطاب رضي الله عنه',
    title: 'Al-Faruq (The Criterion Between Truth and Falsehood), Amir al-Mu\'minin',
    role: 'Second Caliph of Islam (13–23 AH)',
    passingYearHijri: 23,
    virtues: [
      'His conversion to Islam brought strength and public prayer to the Ka\'bah',
      'The Prophet ﷺ said: "If there were a prophet after me, it would be Umar"',
      'Established state administration, courts, treasury (Bayt al-Mal), and Hijri calendar',
      'Renowned across human history for legendary impartiality and justice'
    ],
    biography: 'Umar was a towering figure whose leadership expanded Islamic rule across the Levant, Egypt, and Persia, ending centuries of Byzantine and Sassanid oppression while granting the Treaty of Jerusalem that protected Christian holy sites. Despite governing an empire, he slept on palm mats and wore patched garments.',
    famousQuote: 'Since when did you enslave the people, when their mothers gave birth to them as free human beings?'
  },
  {
    id: 'uthman-ibn-affan',
    name: 'Uthman ibn Affan (رضي الله عنه)',
    arabicName: 'عثمان بن عفان رضي الله عنه',
    title: 'Dhun-Nurayn (Possessor of the Two Lights)',
    role: 'Third Caliph of Islam (23–35 AH)',
    passingYearHijri: 35,
    virtues: [
      'Married two daughters of the Prophet ﷺ (Ruqayyah and Umm Kulthum)',
      'Financed the expansion of Masjid an-Nabawi and bought the Well of Rumah for Muslims',
      'Standardized the official written copy of the Holy Quran for the global Ummah',
      'Renowned for his profound modesty and generosity; angels were shy before him'
    ],
    biography: 'Uthman brought unprecedented economic prosperity and naval development to the Islamic world. His enduring legacy is the compilation and distribution of the canonical Uthmanic Mushaf, ensuring the preservation of the Quranic text with identical vowelization and spelling across all continents.',
    famousQuote: 'If our hearts were truly pure, they would never have enough of the words of our Lord (the Holy Quran).'
  },
  {
    id: 'ali-ibn-abi-talib',
    name: 'Ali ibn Abi Talib (رضي الله عنه)',
    arabicName: 'علي بن أبي طالب رضي الله عنه',
    title: 'Asadullah (Lion of Allah), Bab Madinat al-Ilm (Gate to the City of Knowledge)',
    role: 'Fourth Caliph of Islam (35–40 AH)',
    passingYearHijri: 40,
    virtues: [
      'First youth to embrace Islam at age ten',
      'Cousin and son-in-law of the Prophet ﷺ (husband of Sayyidah Fatima)',
      'Father of Hasan and Husayn (the leaders of the youth of Paradise)',
      'Standard-bearer at Khaybar and renowned for peerless bravery and eloquence'
    ],
    biography: 'Ali was raised in the household of the Prophet ﷺ and was saturated with spiritual insight, philosophical depth, and battlefield courage. His letters and discourses on justice, asceticism, and righteous governance remain masterworks of Arabic literature and Islamic political ethics.',
    famousQuote: 'People are of two types: either your brothers in faith, or your equals in humanity.'
  },
  {
    id: 'bilal-ibn-rabah',
    name: 'Bilal ibn Rabah (رضي الله عنه)',
    arabicName: 'بلال بن رباح رضي الله عنه',
    title: 'Mu\'adhin ar-Rasul (The Caller to Prayer of the Messenger ﷺ)',
    role: 'First Mu\'adhin in Islam',
    passingYearHijri: 20,
    virtues: [
      'Endured crushing stones and desert heat in Makkah, chanting "Ahad, Ahad" (One, One)',
      'Chosen by the Prophet ﷺ to deliver the first Adhan in Madinah and atop the Ka\'bah',
      'Emblem of Islam\'s abolition of racial hierarchy and prejudice'
    ],
    biography: 'Born into slavery of Ethiopian heritage, Bilal rose through faith to become one of the most honored figures in Islam. Umar (RA) famously remarked: "Abu Bakr is our master, and he freed our master (Bilal)." He called the Adhan until the Prophet\'s ﷺ death, after which grief prevented him from continuing.',
    famousQuote: 'Ahad! Ahad! (Allah is One! Allah is One!)'
  }
];
