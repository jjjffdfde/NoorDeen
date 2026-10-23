export interface HadithCollection {
  id: string;
  name: string;
  arabicName: string;
  author: string;
  deathYearHijri: number;
  totalHadith: number;
  description: string;
  importance: string;
}

export const HADITH_COLLECTIONS: HadithCollection[] = [
  {
    id: 'bukhari',
    name: 'Sahih al-Bukhari',
    arabicName: 'صحيح البخاري',
    author: 'Imam Muhammad al-Bukhari (رحمه الله)',
    deathYearHijri: 256,
    totalHadith: 7563,
    description: 'Universally recognized by the Muslim Ummah as the most authentic book of Hadith after the Holy Quran.',
    importance: 'First among the Kutub al-Sittah (Six Major Hadith Books).'
  },
  {
    id: 'muslim',
    name: 'Sahih Muslim',
    arabicName: 'صحيح مسلم',
    author: 'Imam Muslim ibn al-Hajjaj (رحمه الله)',
    deathYearHijri: 261,
    totalHadith: 7500,
    description: 'Renowned for its rigorous thematic arrangement and strict criteria for continuous chains of transmission.',
    importance: 'The second most authentic book of Hadith in Islamic scholarship.'
  },
  {
    id: 'tirmidhi',
    name: 'Jami` at-Tirmidhi',
    arabicName: 'جامع الترمذي',
    author: 'Imam Abu Isa Muhammad at-Tirmidhi (رحمه الله)',
    deathYearHijri: 279,
    totalHadith: 3956,
    description: 'Celebrated for providing scholarly authenticity gradings (Sahih, Hasan, Da\'if) and legal opinions of the Jurists for each narration.',
    importance: 'Essential reference for comparative Islamic jurisprudence and hadith grading methodology.'
  },
  {
    id: 'abudawud',
    name: 'Sunan Abi Dawud',
    arabicName: 'سنن أبي داود',
    author: 'Imam Abu Dawud Sulayman ibn al-Ash\'ath (رحمه الله)',
    deathYearHijri: 275,
    totalHadith: 5274,
    description: 'Focused primarily on legal traditions (Ahkam) that serve as foundational proofs for rulings in Islamic jurisprudence.',
    importance: 'Core legal reference across all classical schools of Islamic law.'
  },
  {
    id: 'nasai',
    name: 'Sunan an-Nasa\'i (Al-Mujtaba)',
    arabicName: 'سنن النسائي',
    author: 'Imam Ahmad ibn Shu\'ayb an-Nasa\'i (رحمه الله)',
    deathYearHijri: 303,
    totalHadith: 5758,
    description: 'Known for its rigorous conditions on transmitters and deep analysis of hidden defects (\'Ilal) in chains.',
    importance: 'Ranks third in strictness of authenticity after Bukhari and Muslim.'
  },
  {
    id: 'ibnmajah',
    name: 'Sunan Ibn Majah',
    arabicName: 'سنن ابن ماجه',
    author: 'Imam Ibn Majah Muhammad ibn Yazid (رحمه الله)',
    deathYearHijri: 273,
    totalHadith: 4341,
    description: 'Praised for its clear chapter structure and inclusion of rare beneficial narrations not found in other collections.',
    importance: 'The sixth book of the canonical Kutub al-Sittah.'
  }
];
