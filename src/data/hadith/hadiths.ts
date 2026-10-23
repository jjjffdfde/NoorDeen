export interface HadithItem {
  id: string;
  collectionId: 'bukhari' | 'muslim' | 'tirmidhi' | 'abudawud' | 'nasai' | 'ibnmajah';
  collectionName: string;
  hadithNumber: number;
  bookName: string;
  arabicText: string;
  englishTranslation: string;
  urduTranslation: string;
  narrator: string;
  grade: 'Sahih' | 'Hasan';
  gradeSource: string;
  topic: 'Iman' | 'Salah' | 'Akhlaq' | 'Dhikr' | 'Zakat' | 'Knowledge' | 'Mercy';
}

export const HADITH_DATA: HadithItem[] = [
  {
    id: 'bukhari-1',
    collectionId: 'bukhari',
    collectionName: 'Sahih al-Bukhari',
    hadithNumber: 1,
    bookName: 'Revelation (Bad\' al-Wahy)',
    arabicText: 'إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى، فَمَنْ كَانَتْ هِجْرَتُهُ إِلَى دُنْيَا يُصِيبُهَا أَوْ إِلَى امْرَأَةٍ يَنْكِحُهَا فَهِجْرَتُهُ إِلَى مَا هَاجَرَ إِلَيْهِ.',
    englishTranslation: 'Actions are according to intentions, and every person will have only that which he intended. So whoever emigrated for worldly benefits or for a woman to marry, his emigration was for that for which he emigrated.',
    urduTranslation: 'تمام اعمال کا دارومدار نیتوں پر ہے اور ہر انسان کے لیے وہی ہے جس کی اس نے نیت کی۔ پس جس کی ہجرت دنیا حاصل کرنے کے لیے ہو یا کسی عورت سے نکاح کے لیے، تو اس کی ہجرت اسی کے لیے ہے جس کی طرف اس نے ہجرت کی۔',
    narrator: 'Umar ibn al-Khattab (رضي الله عنه)',
    grade: 'Sahih',
    gradeSource: 'Sahih al-Bukhari',
    topic: 'Iman'
  },
  {
    id: 'bukhari-13',
    collectionId: 'bukhari',
    collectionName: 'Sahih al-Bukhari',
    hadithNumber: 13,
    bookName: 'Belief (Kitab al-Iman)',
    arabicText: 'لاَ يُؤْمِنُ أَحَدُكُمْ حَتَّى يُحِبَّ لأَخِيهِ مَا يُحِبُّ لِنَفْسِهِ.',
    englishTranslation: 'None of you truly believes until he loves for his brother that which he loves for himself.',
    urduTranslation: 'تم میں سے کوئی شخص اس وقت تک سچا مومن نہیں ہو سکتا جب تک کہ وہ اپنے بھائی کے لیے وہی پسند نہ کرے جو اپنے لیے پسند کرتا ہے۔',
    narrator: 'Anas ibn Malik (رضي الله عنه)',
    grade: 'Sahih',
    gradeSource: 'Sahih al-Bukhari',
    topic: 'Akhlaq'
  },
  {
    id: 'muslim-2564',
    collectionId: 'muslim',
    collectionName: 'Sahih Muslim',
    hadithNumber: 2564,
    bookName: 'Virtue, Enjoining Good Manners, and Joining the Ties of Kinship',
    arabicText: 'إِنَّ اللَّهَ لاَ يَنْظُرُ إِلَى صُوَرِكُمْ وَأَمْوَالِكُمْ وَلَكِنْ يَنْظُرُ إِلَى قُلُوبِكُمْ وَأَعْمَالِكُمْ.',
    englishTranslation: 'Verily, Allah does not look at your outward appearance or your wealth, but He looks at your hearts and your deeds.',
    urduTranslation: 'بے شک اللہ تعالیٰ تمہاری صورتوں اور تمہارے مالوں کی طرف نہیں دیکھتا، بلکہ وہ تمہارے دلوں اور تمہارے اعمال کی طرف دیکھتا ہے۔',
    narrator: 'Abu Hurairah (رضي الله عنه)',
    grade: 'Sahih',
    gradeSource: 'Sahih Muslim',
    topic: 'Iman'
  },
  {
    id: 'muslim-223',
    collectionId: 'muslim',
    collectionName: 'Sahih Muslim',
    hadithNumber: 223,
    bookName: 'Purification (Kitab at-Taharah)',
    arabicText: 'الطُّهُورُ شَطْرُ الإِيمَانِ، وَالْحَمْدُ لِلَّهِ تَمْلأُ الْمِيزَانَ، وَسُبْحَانَ اللَّهِ وَالْحَمْدُ لِلَّهِ تَمْلآنِ - أَوْ تَمْلأُ - مَا بَيْنَ السَّمَاوَاتِ وَالأَرْضِ، وَالصَّلاَةُ نُورٌ، وَالصَّدَقَةُ بُرْهَانٌ، وَالصَّبْرُ ضِيَاءٌ، وَالْقُرْآنُ حُجَّةٌ لَكَ أَوْ عَلَيْكَ.',
    englishTranslation: 'Purity is half of faith, and \'Alhamdulillah\' (praise be to Allah) fills the scale, and \'Subhanallah\' (glory be to Allah) and \'Alhamdulillah\' fill that which is between heaven and earth. Prayer is a light, charity is proof, patience is illumination, and the Quran is an argument for you or against you.',
    urduTranslation: 'پاکیزگی نصف ایمان ہے، اور \'الحمد للہ\' ترازو کو بھر دیتا ہے، اور \'سبحان اللہ\' اور \'الحمد للہ\' آسمان اور زمین کے درمیانی خلا کو بھر دیتے ہیں۔ اور نماز ایک نور ہے، صدقہ دلیل ہے، صبر روشنی ہے، اور قرآن تمہارے حق میں دلیل ہے یا تمہارے خلاف۔',
    narrator: 'Abu Malik al-Ash\'ari (رضي الله عنه)',
    grade: 'Sahih',
    gradeSource: 'Sahih Muslim',
    topic: 'Salah'
  },
  {
    id: 'tirmidhi-2003',
    collectionId: 'tirmidhi',
    collectionName: 'Jami` at-Tirmidhi',
    hadithNumber: 2003,
    bookName: 'Righteousness and Relations',
    arabicText: 'مَا شَيْءٌ أَثْقَلُ فِي مِيزَانِ الْمُؤْمِنِ يَوْمَ الْقِيَامَةِ مِنْ خُلُقٍ حَسَنٍ، وَإِنَّ اللَّهَ لَيُبْغِضُ الْفَاحِشَ الْبَذِيءَ.',
    englishTranslation: 'There is nothing heavier on the scale of a believer on the Day of Resurrection than good character. Verily, Allah hates the obscene and foul-mouthed person.',
    urduTranslation: 'قیامت کے دن مومن کے ترازو میں حسن اخلاق سے زیادہ وزنی کوئی چیز نہیں ہوگی، اور بے شک اللہ تعالیٰ بے حیا اور بدزبان شخص سے نفرت فرماتا ہے۔',
    narrator: 'Abu ad-Darda (رضي الله عنه)',
    grade: 'Sahih',
    gradeSource: 'At-Tirmidhi & Al-Albani',
    topic: 'Akhlaq'
  },
  {
    id: 'ibnmajah-224',
    collectionId: 'ibnmajah',
    collectionName: 'Sunan Ibn Majah',
    hadithNumber: 224,
    bookName: 'The Book of Sunnah',
    arabicText: 'طَلَبُ الْعِلْمِ فَرِيضَةٌ عَلَى كُلِّ مُسْلِمٍ.',
    englishTranslation: 'Seeking knowledge is an obligation upon every Muslim.',
    urduTranslation: 'علم حاصل کرنا ہر مسلمان پر فرض ہے۔',
    narrator: 'Anas ibn Malik (رضي الله عنه)',
    grade: 'Sahih',
    gradeSource: 'Al-Albani (Sahih Sunan Ibn Majah)',
    topic: 'Knowledge'
  },
  {
    id: 'bukhari-5027',
    collectionId: 'bukhari',
    collectionName: 'Sahih al-Bukhari',
    hadithNumber: 5027,
    bookName: 'Virtues of the Quran',
    arabicText: 'خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ.',
    englishTranslation: 'The best among you are those who learn the Quran and teach it to others.',
    urduTranslation: 'تم میں سب سے بہترین شخص وہ ہے جو قرآن مجید سیکھے اور اسے دوسروں کو سکھائے۔',
    narrator: 'Uthman ibn Affan (رضي الله عنه)',
    grade: 'Sahih',
    gradeSource: 'Sahih al-Bukhari',
    topic: 'Knowledge'
  },
  {
    id: 'bukhari-6491',
    collectionId: 'bukhari',
    collectionName: 'Sahih al-Bukhari',
    hadithNumber: 6491,
    bookName: 'Heart-Melting Traditions (Kitab ar-Riqaq)',
    arabicText: 'مَثَلُ الَّذِي يَذْكُرُ رَبَّهُ وَالَّذِي لاَ يَذْكُرُ رَبَّهُ مَثَلُ الْحَىِّ وَالْمَيِّتِ.',
    englishTranslation: 'The example of the one who remembers his Lord and the one who does not remember his Lord is like that of the living and the dead.',
    urduTranslation: 'جو شخص اپنے رب کا ذکر کرتا ہے اور جو اپنے رب کا ذکر نہیں کرتا، ان دونوں کی مثال زندہ اور مردہ کی سی ہے۔',
    narrator: 'Abu Musa al-Ash\'ari (رضي الله عنه)',
    grade: 'Sahih',
    gradeSource: 'Sahih al-Bukhari',
    topic: 'Dhikr'
  },
  {
    id: 'tirmidhi-1924',
    collectionId: 'tirmidhi',
    collectionName: 'Jami` at-Tirmidhi',
    hadithNumber: 1924,
    bookName: 'Righteousness and Relations',
    arabicText: 'الرَّاحِمُونَ يَرْحَمُهُمُ الرَّحْمَنُ، ارْحَمُوا مَنْ فِي الأَرْضِ يَرْحَمْكُمْ مَنْ فِي السَّمَاءِ.',
    englishTranslation: 'The merciful will be shown mercy by the Most Merciful. Be merciful to those on earth, and the One in the heavens will show mercy to you.',
    urduTranslation: 'رحم کرنے والوں پر رحمن رحم فرماتا ہے۔ تم زمین والوں پر رحم کرو، آسمان والا تم پر رحم فرمائے گا۔',
    narrator: 'Abdullah ibn Amr (رضي الله عنه)',
    grade: 'Sahih',
    gradeSource: 'At-Tirmidhi & Al-Albani',
    topic: 'Mercy'
  },
  {
    id: 'bukhari-1421',
    collectionId: 'bukhari',
    collectionName: 'Sahih al-Bukhari',
    hadithNumber: 1421,
    bookName: 'Obligatory Charity (Kitab az-Zakat)',
    arabicText: 'اتَّقُوا النَّارَ وَلَوْ بِشِقِّ تَمْرَةٍ، فَمَنْ لَمْ يَجِدْ فَبِكَلِمَةٍ طَيِّبَةٍ.',
    englishTranslation: 'Protect yourselves from the Fire, even with half a date (given in charity); and whoever cannot find even that, then with a kind and good word.',
    urduTranslation: 'جہنم کی آگ سے بچو خواہ کھجور کے ایک ٹکڑے کے صدقہ کے ذریعے ہی سہی، اور اگر کسی کے پاس یہ بھی نہ ہو تو اچھی اور نرم گفتگو کے ذریعے۔',
    narrator: '\'Adi ibn Hatim (رضي الله عنه)',
    grade: 'Sahih',
    gradeSource: 'Sahih al-Bukhari',
    topic: 'Zakat'
  }
];
