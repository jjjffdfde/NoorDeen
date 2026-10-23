export interface Prophet {
  id: string;
  name: string;
  arabicName: string;
  title: string;
  era: string;
  quranMentionsCount: number;
  mission: string;
  summary: string;
  keyLessons: string[];
  quranicReferences: string[];
}

export const PROPHETS: Prophet[] = [
  {
    id: 'adam',
    name: 'Adam (عليه السلام)',
    arabicName: 'آدم عليه السلام',
    title: 'Abu al-Bashar (Father of Mankind)',
    era: 'Dawn of Humanity',
    quranMentionsCount: 25,
    mission: 'The first human and prophet created by Allah from clay, endowed with knowledge of the names of all things, and appointed as khalifah (steward) on earth.',
    summary: 'Allah created Adam from soil and breathed life into him. The angels bowed in respect by Allah\'s command, but Iblis refused out of pride. After being deceived by Shaytan regarding the forbidden tree in Paradise, Adam and Hawwa (Eve) turned in sincere repentance: "Our Lord, we have wronged ourselves, and if You do not forgive us and have mercy upon us, we will surely be among the losers" (7:23). Allah accepted their repentance and settled them on earth.',
    keyLessons: [
      'The supreme dignity of knowledge bestowed by Allah',
      'The danger of pride (Kibr) as demonstrated by Iblis',
      'The boundless door of repentance (Tawbah) that erases transgression'
    ],
    quranicReferences: ['Surah Al-Baqarah 2:30-39', 'Surah Al-A\'raf 7:11-25', 'Surah Taha 20:115-124']
  },
  {
    id: 'nuh',
    name: 'Nuh / Noah (عليه السلام)',
    arabicName: 'نوح عليه السلام',
    title: 'Shaikh al-Anbiya (Elder of the Prophets)',
    era: 'Circa 3000 BCE',
    quranMentionsCount: 43,
    mission: 'Preached pure Tawhid for 950 years to an idol-worshipping people who venerated statues of Wadd, Suwa\', Yaghuth, Ya\'uq, and Nasr.',
    summary: 'Prophet Nuh preached patiently day and night with immense love and rational arguments. Despite continuous rejection and mocking by elite oligarchs, he built the Ark under divine instruction. When the great deluge erupted from the earth and skies, the believers and pairs of animals aboard were saved, while the disbelievers—including Nuh\'s rebellious son—perished.',
    keyLessons: [
      'Unyielding perseverance in conveying the truth regardless of numbers',
      'Spiritual kinship transcends biological bloodlines',
      'Divine justice always prevails against systematic arrogance'
    ],
    quranicReferences: ['Surah Nuh 71:1-28', 'Surah Hud 11:25-49', 'Surah Al-Mu\'minun 23:23-30']
  },
  {
    id: 'ibrahim',
    name: 'Ibrahim / Abraham (عليه السلام)',
    arabicName: 'إبراهيم عليه السلام',
    title: 'Khalilullah (The Intimate Friend of Allah)',
    era: 'Circa 2000 BCE (Ur / Mesopotamia & Canaan)',
    quranMentionsCount: 69,
    mission: 'The patriarch of monotheism, builder of the Holy Ka\'bah with his son Ismail, and archetype of complete submission to the Creator.',
    summary: 'From youth, Ibrahim rejected idol worship through observation of celestial bodies and rational debate. Cast into a blazing furnace by Nimrod, Allah commanded: "O fire, be coolness and peace upon Ibrahim." He later faced monumental trials: leaving Hajar and baby Ismail in the barren valley of Makkah, and submitting to the sacrifice of Ismail, which Allah ransomed with a magnificent ram. Together, they raised the foundations of the Ka\'bah.',
    keyLessons: [
      'Complete trust (Tawakkul) in the Creator under extreme trials',
      'Rational proof as the bedrock of monotheistic belief',
      'Sacrifice of worldly attachments for the pleasure of the Divine'
    ],
    quranicReferences: ['Surah Al-Baqarah 2:124-132', 'Surah Al-An\'am 6:74-83', 'Surah As-Saffat 37:100-111']
  },
  {
    id: 'musa',
    name: 'Musa / Moses (عليه السلام)',
    arabicName: 'موسى عليه السلام',
    title: 'Kalimullah (The One Spoken to by Allah)',
    era: 'Circa 1300 BCE (Ancient Egypt & Sinai)',
    quranMentionsCount: 136,
    mission: 'Sent with the Torah, nine signs, and miracles to liberate the Children of Israel from Pharaoh\'s tyrannical slavery and establish the Divine Law.',
    summary: 'Placed as an infant in a basket on the Nile, Musa was raised in Pharaoh\'s palace. Called by Allah at Mount Tur with the miraculous staff and radiant hand, he and his brother Harun confronted Pharaoh, demanding justice and freedom for the oppressed. When trapped between Pharaoh\'s army and the Red Sea, Musa declared: "No! Indeed, with me is my Lord; He will guide me!" (26:62). Allah parted the sea, saving the believers and drowning Pharaoh.',
    keyLessons: [
      'Courage to speak truth against totalitarian tyranny',
      'Firm conviction that Allah never abandons the oppressed',
      'Patience in dealing with internal community frailties and murmuring'
    ],
    quranicReferences: ['Surah Al-Qasas 28:1-44', 'Surah Taha 20:9-98', 'Surah Ash-Shu\'ara 26:10-68']
  },
  {
    id: 'isa',
    name: 'Isa / Jesus (عليه السلام)',
    arabicName: 'عيسى عليه السلام',
    title: 'Ruhullah & Kalimatullah (Spirit and Word from Allah)',
    era: '1st Century CE (Jerusalem & Galilee)',
    quranMentionsCount: 25,
    mission: 'Born miraculously of the virgin Maryam (Mary), sent with the Injil (Gospel) to confirm the Torah, revive spiritual sincerity, and foretell the coming of Prophet Muhammad ﷺ (Ahmad).',
    summary: 'Prophet Isa spoke from the cradle in defense of his virtuous mother Maryam. Granted spectacular miracles by Allah\'s permission—healing the blind and leper, raising the dead, and fashioning clay birds that breathed life—he called the Children of Israel back to the pure love and worship of Allah. When enemies plotted to crucify him, Allah raised him alive unto Himself, and he shall return in the end times as a just leader.',
    keyLessons: [
      'Spiritual purity over superficial legalism',
      'The miraculous power of the Creator who says "Be" and it is',
      'Rejection of deification: Isa is a revered prophet and servant of Allah, not divine'
    ],
    quranicReferences: ['Surah Ali \'Imran 3:45-59', 'Surah Maryam 19:16-36', 'Surah An-Nisa 4:156-159']
  }
];
