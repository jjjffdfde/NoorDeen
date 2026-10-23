export interface Kalima {
  id: number;
  name: string;
  arabicTitle: string;
  arabicText: string;
  transliteration: string;
  englishTranslation: string;
  urduTranslation: string;
  significance: string;
}

export const KALIMAS: Kalima[] = [
  {
    id: 1,
    name: 'First Kalima (Tayyab)',
    arabicTitle: 'الكَلِمَة الطَّيِّبَة',
    arabicText: 'لَا إِلَٰهَ إِلَّا اللَّهُ مُحَمَّدٌ رَسُولُ اللَّهِ',
    transliteration: 'Laa ilaaha illal-laahu Muhammadur-Rasoolul-laah',
    englishTranslation: 'There is no deity worthy of worship except Allah, and Muhammad ﷺ is the Messenger of Allah.',
    urduTranslation: 'اللہ کے سوا کوئی معبود نہیں، محمد ﷺ اللہ کے رسول ہیں۔',
    significance: 'The foundational statement of Islamic monotheism (Tawhid). It is the key to entering the fold of Islam and the core truth upon which all faith rests.'
  },
  {
    id: 2,
    name: 'Second Kalima (Shahadat)',
    arabicTitle: 'كَلِمَة الشَّهَادَة',
    arabicText: 'أَشْهَدُ أَنْ لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ',
    transliteration: 'Ash-hadu al-laa ilaaha illal-laahu wahdahoo laa shareeka lahoo wa ash-hadu anna Muhammadan \'abduhoo wa Rasooluh',
    englishTranslation: 'I bear witness that there is no deity worthy of worship except Allah, alone without partner, and I bear witness that Muhammad ﷺ is His servant and His Messenger.',
    urduTranslation: 'میں گواہی دیتا ہوں کہ اللہ کے سوا کوئی معبود نہیں، وہ اکیلا ہے، اس کا کوئی شریک نہیں، اور میں گواہی دیتا ہوں کہ محمد ﷺ اس کے بندے اور رسول ہیں۔',
    significance: 'The formal testimony of faith recited upon conversion, in every prayer during Tashahhud, and upon hearing the call to prayer (Adhan).'
  },
  {
    id: 3,
    name: 'Third Kalima (Tamjeed)',
    arabicTitle: 'كَلِمَة التَّمْجِيد',
    arabicText: 'سُبْحَانَ اللَّهِ وَالْحَمْدُ لِلَّهِ وَلَا إِلَٰهَ إِلَّا اللَّهُ وَاللَّهُ أَكْبَرُ وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ الْعَلِيِّ الْعَظِيمِ',
    transliteration: 'Subhaanallaahi wal-hamdu lillaahi wa laa ilaaha illal-laahu wallaahu Akbar; wa laa hawla wa laa quwwata illaa billaahil \'Aliyyil \'Azeem',
    englishTranslation: 'Glory be to Allah, and praise be to Allah, and there is no deity worthy of worship except Allah, and Allah is the Greatest; and there is no power nor might except with Allah, the Most High, the Supreme.',
    urduTranslation: 'پاک ہے اللہ اور سب تعریف اللہ ہی کے لیے ہے، اور اللہ کے سوا کوئی معبود نہیں اور اللہ سب سے بڑا ہے؛ اور گناہوں سے بچنے کی طاقت اور نیکی کرنے کی قوت اللہ ہی کی طرف سے ہے جو عالی رتبہ اور بزرگ ہے۔',
    significance: 'Glorification of the majesty, perfection, and absolute sovereignty of Allah. Praised by the Prophet ﷺ as beloved words to the Most Merciful.'
  },
  {
    id: 4,
    name: 'Fourth Kalima (Tauheed)',
    arabicTitle: 'كَلِمَة التَّوْحِيد',
    arabicText: 'لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، يُحْيِي وَيُمِيتُ، وَهُوَ حَيٌّ لَا يَمُوتُ أَبَدًا أَبَدًا، ذُو الْجَلَالِ وَالْإِكْرَامِ، بِيَدِهِ الْخَيْرُ، وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ',
    transliteration: 'Laa ilaaha illal-laahu wahdahoo laa shareeka lahoo, lahul-mulku wa lahul-hamdu, yuhyee wa yumeetu, wa Huwa Hayyul-laa yamootu abadan abadaa, Zul-Jalaali wal-Ikraam, biyadihil-khayr, wa Huwa \'alaa kulli shai\'in Qadeer',
    englishTranslation: 'There is no deity worthy of worship except Allah, alone without partner. His is the sovereignty, and His is all praise. He gives life and causes death, and He is Ever-Living, never to die. Possessor of Majesty and Honor. In His hand is all goodness, and He is over all things competent.',
    urduTranslation: 'اللہ کے سوا کوئی معبود نہیں، وہ اکیلا ہے، اس کا کوئی شریک نہیں، اسی کی بادشاہی ہے اور اسی کے لیے تمام تعریفیں ہیں۔ وہی جلاتا ہے اور مارتا ہے، اور وہ ہمیشہ زندہ ہے اسے کبھی موت نہیں آئے گی۔ وہ جلال اور بزرگی والا ہے، اسی کے ہاتھ میں تمام بھلائی ہے اور وہ ہر چیز پر کامل قدرت رکھتا ہے۔',
    significance: 'Declaration of the oneness, omnipotence, and eternal nature of Allah. Mentioned in Hadith as carrying immense reward when recited in daily life and markets.'
  },
  {
    id: 5,
    name: 'Fifth Kalima (Astaghfar)',
    arabicTitle: 'كَلِمَة الِاسْتِغْفَار',
    arabicText: 'أَسْتَغْفِرُ اللَّهَ رَبِّي مِنْ كُلِّ ذَنْبٍ أَذْنَبْتُهُ عَمَدًا أَوْ خَطَأً، سِرًّا أَوْ عَلَانِيَةً، وَأَتُوبُ إِلَيْهِ مِنَ الذَّنْبِ الَّذِي أَعْلَمُ وَمِنَ الذَّنْبِ الَّذِي لَا أَعْلَمُ، إِنَّكَ أَنْتَ عَلَّامُ الْغُيُوبِ وَسَتَّارُ الْعُيُوبِ وَغَفَّارُ الذُّنُوبِ، وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ الْعَلِيِّ الْعَظِيمِ',
    transliteration: 'Astaghfirul-laaha Rabbee min kulli zambin aznabtuhoo \'amadan aw khata\'an, sirran aw \'alaaniyah, wa atoobu ilayhi minaz-zambil-lazee a\'lamu wa minaz-zambil-lazee laa a\'lam, innaka Anta \'Allaamul-Ghuyoobi wa Sattaarul-\'Uyoobi wa Ghaffaaruz-Zunoob, wa laa hawla wa laa quwwata illaa billaahil \'Aliyyil \'Azeem',
    englishTranslation: 'I seek forgiveness from Allah, my Lord, for every sin I committed intentionally or mistakenly, secretly or openly, and I turn to Him in repentance from the sins I know and the sins I do not know. Truly, You are the Knower of the unseen, the Concealer of faults, and the Forgiver of sins; and there is no power nor might except with Allah, the Most High, the Supreme.',
    urduTranslation: 'میں اللہ سے اپنے گناہوں کی بخشش مانگتا ہوں جو میرا پروردگار ہے، ہر اس گناہ سے جو میں نے جان بوجھ کر کیا یا بھول کر، چھپ کر کیا یا کھلم کھلا، اور میں اس کی بارگاہ میں توبہ کرتا ہوں اس گناہ سے جسے میں جانتا ہوں اور اس گناہ سے جسے میں نہیں جانتا۔ بے شک تو غیبوں کا جاننے والا، عیبوں کو چھپانے والا اور گناہوں کو بخشنے والا ہے؛ اور گناہوں سے بچنے اور نیکی کرنے کی طاقت صرف اللہ ہی کی طرف سے ہے جو عالی رتبہ اور بزرگ ہے۔',
    significance: 'The comprehensive prayer for forgiveness, acknowledging human imperfection and seeking refuge in Allah\'s boundless mercy and pardoning.'
  },
  {
    id: 6,
    name: 'Sixth Kalima (Radde Kufr)',
    arabicTitle: 'كَلِمَة رَدِّ الكُفْر',
    arabicText: 'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ أَنْ أُشْرِكَ بِكَ شَيْئًا وَأَنَا أَعْلَمُ بِهِ، وَأَسْتَغْفِرُكَ لِمَا لَا أَعْلَمُ بِهِ، تُبْتُ عَنْهُ وَتَبَرَّأْتُ مِنَ الْكُفْرِ وَالشِّرْكِ وَالْكِذْبِ وَالْغِيبَةِ وَالْبِدْعَةِ وَالنَّمِيمَةِ وَالْفَوَاحِشِ وَالْبُهْتَانِ وَالْمَعَاصِي كُلِّهَا، وَأَسْلَمْتُ وَأَقُولُ: لَا إِلَٰهَ إِلَّا اللَّهُ مُحَمَّدٌ رَسُولُ اللَّهِ',
    transliteration: 'Allaahumma innee a\'oozu bika min an ushrika bika shay\'anw-wa ana a\'lamu bih, wa astaghfiruka limaa laa a\'lamu bih, tubtu \'anhu wa tabarra\'tu minal-kufri wash-shirki wal-kizbi wal-gheebati wal-bid\'ati wan-nameemati wal-fawaahishi wal-buhtaani wal-ma\'aasee kullihaa, wa aslamtu wa aqoolu: Laa ilaaha illal-laahu Muhammadur-Rasoolul-laah',
    englishTranslation: 'O Allah! I seek refuge in You from associating anything with You knowingly, and I seek Your forgiveness for that which I do not know. I repent from it and disassociate myself from disbelief, polytheism, falsehood, backbiting, unlawful innovations, tale-bearing, lewdness, slander, and all acts of disobedience. I submit to Your will and declare: There is no deity worthy of worship except Allah, and Muhammad ﷺ is the Messenger of Allah.',
    urduTranslation: 'اے اللہ! میں تیری پناہ مانگتا ہوں اس بات سے کہ میں جان بوجھ کر کسی چیز کو تیرا شریک ٹھہراؤں، اور میں تجھ سے معافی مانگتا ہوں اس گناہ کی جسے میں نہیں جانتا۔ میں نے اس سے توبہ کی اور بیزاری کا اظہار کیا کفر سے، شرک سے، جھوٹ سے، غیبت سے، بدعت سے، چغل خوری سے، بے حیائی کے کاموں سے، بہتان سے اور تمام نافرمانیوں سے۔ اور میں اسلام لایا اور اقرار کرتا ہوں کہ اللہ کے سوا کوئی معبود نہیں، محمد ﷺ اللہ کے رسول ہیں۔',
    significance: 'A profound pledge of spiritual renewal, rejecting all forms of idolatry, major sins, and moral corruption while reaffirming dedication to pristine faith.'
  }
];
