export interface Pillar {
  number: number;
  name: string;
  arabicName: string;
  transliteration: string;
  summary: string;
  description: string;
  quranicEvidence: string;
  hadithEvidence: string;
  keyRequirements: string[];
}

export const PILLARS: Pillar[] = [
  {
    number: 1,
    name: 'Shahadah (Declaration of Faith)',
    arabicName: 'الشهادة',
    transliteration: 'Ash-Shahadah',
    summary: 'Bearing witness that none has the right to be worshipped except Allah, and that Muhammad ﷺ is His Messenger.',
    description: 'The foundation of all Islam. It requires sincere internal conviction, verbal proclamation, and behavioral alignment. Rejecting all false deities, superstitions, and idolatry while submitting entirely to Allah\'s guidance revealed through His Final Messenger ﷺ.',
    quranicEvidence: 'Surah Muhammad (47:19): "So know that there is no deity except Allah and ask forgiveness for your sin."',
    hadithEvidence: 'Sahih al-Bukhari #8: "Islam is built upon five: testifying that none is worthy of worship except Allah and that Muhammad is His Messenger..."',
    keyRequirements: [
      'Knowledge (\'Ilm) of its meaning as opposed to ignorance',
      'Certainty (Yaqeen) without doubts',
      'Sincerity (Ikhlas) avoiding ostentation or polytheism',
      'Love (Mahabbah) for Allah, His Messenger, and the believers'
    ]
  },
  {
    number: 2,
    name: 'Salah (The Five Daily Prayers)',
    arabicName: 'الصلاة',
    transliteration: 'As-Salah',
    summary: 'The five mandatory prayers performed each day: Fajr, Dhuhr, Asr, Maghrib, and Isha.',
    description: 'The direct lifeline between the servant and the Creator. Established five times across the day and night to reset spiritual focus, cleanse hearts of worldly distraction, and unite believers in congregational harmony.',
    quranicEvidence: 'Surah Al-Baqarah (2:43): "And establish prayer and give zakah and bow with those who bow [in worship and obedience]."',
    hadithEvidence: 'Sahih Muslim #223: "Prayer is a light (Nur)."',
    keyRequirements: [
      'Ritual purity (Taharah / Wudu)',
      'Covering the Awrah (prescribed modesty)',
      'Facing the Qibla (Ka\'bah in Makkah)',
      'Entering within the prescribed astronomical prayer time'
    ]
  },
  {
    number: 3,
    name: 'Zakat (Obligatory Almsgiving)',
    arabicName: 'الزكاة',
    transliteration: 'Az-Zakat',
    summary: 'The annual 2.5% contribution of surplus wealth distributed to designated needy categories of society.',
    description: 'Literally meaning \'purification\' and \'growth\'. Zakat cleanses the soul from greed and purifies wealth by recognizing that all possessions are a trust from Allah. It guarantees social welfare, supports the impoverished, and prevents wealth hoarding.',
    quranicEvidence: 'Surah At-Tawbah (9:60): "Zakah expenditures are only for the poor and for the needy and for those employed to collect [zakah]..."',
    hadithEvidence: 'Sahih al-Bukhari #1395: "Taken from their rich and given to their poor."',
    keyRequirements: [
      'Possession of wealth exceeding the Nisab threshold (87.48g gold or 612.36g silver)',
      'Holding this surplus wealth for one full lunar year (Hawl)',
      'Distribution to the 8 categories specified in Surah At-Tawbah 9:60'
    ]
  },
  {
    number: 4,
    name: 'Sawm (Fasting the Month of Ramadan)',
    arabicName: 'الصوم',
    transliteration: 'As-Sawm',
    summary: 'Abstaining from food, drink, and marital relations from dawn (Fajr) to sunset (Maghrib) during Ramadan.',
    description: 'A month-long spiritual school for cultivating Taqwa (God-consciousness), self-restraint, empathy for the hungry, and intensive devotion through extra Quran recitation and Taraweeh night prayers.',
    quranicEvidence: 'Surah Al-Baqarah (2:183): "O you who have believed, decreed upon you is fasting as it was decreed upon those before you that you may become righteous."',
    hadithEvidence: 'Sahih al-Bukhari #1901: "Whoever fasts Ramadan out of faith and hope for reward, his past sins will be forgiven."',
    keyRequirements: [
      'Intention (Niyyah) formed before dawn',
      'Total abstinence from dawn to sunset',
      'Guarding tongue and actions from foul speech, anger, and gossip'
    ]
  },
  {
    number: 5,
    name: 'Hajj (The Pilgrimage to Makkah)',
    arabicName: 'الحج',
    transliteration: 'Al-Hajj',
    summary: 'The once-in-a-lifetime pilgrimage to the Sacred House in Makkah for those physically and financially able.',
    description: 'The supreme gathering of the global Ummah where millions stand together at Mount Arafat dressed in identical simple white Ihram garments, stripping away all worldly divisions of nationality, race, wealth, and status before the One Creator.',
    quranicEvidence: 'Surah Ali \'Imran (3:97): "And [due] to Allah from the people is a pilgrimage to the House - for whoever is able to find thereto a way."',
    hadithEvidence: 'Sahih al-Bukhari #1773: "An accepted Hajj (Hajj Mabrur) has no reward except Paradise."',
    keyRequirements: [
      'Physical health and safe passage',
      'Financial capability without leaving dependents destitute',
      'Performance of core rites: Ihram, Tawaf, Sa\'i, Standing at Arafat, and Rami al-Jamarat'
    ]
  }
];
