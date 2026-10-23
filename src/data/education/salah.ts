export interface PrayerTableItem {
  name: string;
  arabicName: string;
  timeWindow: string;
  sunnahBefore: number;
  fard: number;
  sunnahAfter: number;
  witrOrNafl: string;
  totalRakats: number;
}

export const DAILY_PRAYERS_TABLE: PrayerTableItem[] = [
  {
    name: 'Fajr (Dawn Prayer)',
    arabicName: 'الفجر',
    timeWindow: 'From true dawn until shortly before sunrise',
    sunnahBefore: 2,
    fard: 2,
    sunnahAfter: 0,
    witrOrNafl: '-',
    totalRakats: 4
  },
  {
    name: 'Dhuhr (Midday Prayer)',
    arabicName: 'الظهر',
    timeWindow: 'From after the sun passes its zenith (Zawal) until an object\'s shadow equals its length',
    sunnahBefore: 4,
    fard: 4,
    sunnahAfter: 2,
    witrOrNafl: '2 Nafl',
    totalRakats: 12
  },
  {
    name: 'Asr (Late Afternoon Prayer)',
    arabicName: 'العصر',
    timeWindow: 'From when shadow equals length until just before sunset',
    sunnahBefore: 4,
    fard: 4,
    sunnahAfter: 0,
    witrOrNafl: '-',
    totalRakats: 8
  },
  {
    name: 'Maghrib (Sunset Prayer)',
    arabicName: 'المغرب',
    timeWindow: 'Immediately after sunset until the twilight glow disappears',
    sunnahBefore: 0,
    fard: 3,
    sunnahAfter: 2,
    witrOrNafl: '2 Nafl',
    totalRakats: 7
  },
  {
    name: 'Isha (Night Prayer)',
    arabicName: 'العشاء',
    timeWindow: 'From disappearance of twilight until the middle of the night (or dawn)',
    sunnahBefore: 4,
    fard: 4,
    sunnahAfter: 2,
    witrOrNafl: '3 Witr + 2 Nafl',
    totalRakats: 15
  }
];

export interface SalahStep {
  step: number;
  title: string;
  arabicTitle: string;
  posture: string;
  description: string;
  arabicRecitation: string;
  transliteration: string;
  englishMeaning: string;
  urduMeaning: string;
}

export const SALAH_STEPS: SalahStep[] = [
  {
    step: 1,
    title: 'Takbir al-Ihram (Opening Takbir)',
    arabicTitle: 'تكبيرة الإحرام',
    posture: 'Standing upright facing Qiblah, raising hands to earlobes or shoulders',
    description: 'Raise hands palms forward with thumbs near earlobes (or hands to shoulders) while uttering the Takbir with sincere intention.',
    arabicRecitation: 'اللَّهُ أَكْبَرُ',
    transliteration: 'Allaahu Akbar',
    englishMeaning: 'Allah is the Greatest.',
    urduMeaning: 'اللہ سب سے بڑا ہے۔'
  },
  {
    step: 2,
    title: 'Qiyam & Opening Supplication (Thana / Dua al-Istiftah)',
    arabicTitle: 'القيام ودعاء الاستفتاح',
    posture: 'Hands folded on chest or below navel (right hand grasping left wrist)',
    description: 'Fold hands comfortably and softly recite the opening praise of Allah.',
    arabicRecitation: 'سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ، وَتَبَارَكَ اسْمُكَ، وَتَعَالَىٰ جَدُّكَ، وَلَا إِلَٰهَ غَيْرُكَ.',
    transliteration: 'Subhaanakal-laahumma wa bi-hamdika, wa tabaarakas-muka, wa ta\'aalaa jadduka, wa laa ilaaha ghayruk.',
    englishMeaning: 'Glory be to You, O Allah, and all praise is Yours; blessed is Your name, exalted is Your majesty, and there is no deity besides You.',
    urduMeaning: 'پاک ہے تیری ذات اے اللہ! اور تیرے ہی لیے حمد ہے، اور با برکت ہے تیرا نام اور بلند و بالا ہے تیری شان، اور تیرے سوا کوئی معبود نہیں۔'
  },
  {
    step: 3,
    title: 'Surah Al-Fatihah & Quranic Passage',
    arabicTitle: 'قراءة الفاتحة وسورة',
    posture: 'Standing still with eyes looking at the place of prostration',
    description: 'Recite Ta\'awwudh, Basmalah, Surah Al-Fatihah (obligatory in every rak\'ah), followed by "Ameen" and at least three short verses or one surah in the first two rak\'ahs of Fard.',
    arabicRecitation: 'أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ. بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ... [سُورَةُ الفَاتِحَةِ]',
    transliteration: 'A\'oozu billaahi minash-shaytaanir-rajeem. Bismillaahir-Rahmaanir-Raheem...',
    englishMeaning: 'I seek refuge in Allah from the accursed Satan. In the name of Allah, the Entirely Merciful, the Especially Merciful... [Surah Al-Fatihah]',
    urduMeaning: 'میں اللہ کی پناہ مانگتا ہوں شیطان مردود سے۔ شروع اللہ کا نام لے کر جو بڑا مہربان نہایت رحم والا ہے۔۔۔'
  },
  {
    step: 4,
    title: 'Ruku\' (Bowing)',
    arabicTitle: 'الركوع',
    posture: 'Bowing with back horizontal, hands placed firmly on knees, fingers spread',
    description: 'Say "Allahu Akbar", bow flat with spine straight, and repeat the glorification at least three times.',
    arabicRecitation: 'سُبْحَانَ رَبِّيَ الْعَظِيمِ',
    transliteration: 'Subhaana Rabbiyal-\'Azeem',
    englishMeaning: 'Glory be to my Lord, the Supreme.',
    urduMeaning: 'پاک ہے میرا پروردگار جو بڑی عظمت والا ہے۔'
  },
  {
    step: 5,
    title: 'Qawmah (Rising from Bowing)',
    arabicTitle: 'الرفع من الركوع (القومة)',
    posture: 'Standing straight with hands at sides or refolded',
    description: 'Rise up while saying the Tasmee\', and upon standing erect praise Allah with Tahmeed.',
    arabicRecitation: 'سَمِعَ اللَّهُ لِمَنْ حَمِدَهُ. رَبَّنَا وَلَكَ الْحَمْدُ، حَمْدًا كَثِيرًا طَيِّبًا مُبَارَكًا فِيهِ.',
    transliteration: 'Sami\'al-laahu liman hamidah. Rabbanaa wa lakal-hamd, hamdan katheeran tayyiban mubaarakan feeh.',
    englishMeaning: 'Allah hears whoever praises Him. Our Lord, to You belongs all praise, an abundant, beautiful, and blessed praise.',
    urduMeaning: 'اللہ نے سن لی اس کی جس نے اس کی تعریف کی۔ اے ہمارے رب! تیرے ہی لیے تمام تعریف ہے، ایسی تعریف جو کثیر، پاکیزہ اور برکت والی ہو۔'
  },
  {
    step: 6,
    title: 'Sujud (Prostration)',
    arabicTitle: 'السجود',
    posture: 'Prostrating on seven limbs (forehead and nose, both palms, both knees, toes of both feet turned toward Qiblah)',
    description: 'Say "Allahu Akbar" and prostrate humbly before your Lord. The servant is closest to Allah in Sujud. Repeat glorification at least thrice.',
    arabicRecitation: 'سُبْحَانَ رَبِّيَ الْأَعْلَىٰ',
    transliteration: 'Subhaana Rabbiyal-A\'laa',
    englishMeaning: 'Glory be to my Lord, the Most High.',
    urduMeaning: 'پاک ہے میرا رب جو سب سے بلند و بالا ہے۔'
  },
  {
    step: 7,
    title: 'Jalsah (Sitting Between Two Prostrations)',
    arabicTitle: 'الجلسة بين السجدتين',
    posture: 'Sitting upright upon the left foot with right foot upright and toes pointing toward Qibla',
    description: 'Say "Allahu Akbar", sit with tranquility, and pray for forgiveness.',
    arabicRecitation: 'رَبِّ اغْفِرْ لِي، رَبِّ اغْفِرْ لِي، وَارْحَمْنِي، وَاهْدِنِي، وَارْزُقْنِي.',
    transliteration: 'Rabbigh-fir lee, Rabbigh-fir lee, warhamnee, wahdinee, warzuqnee.',
    englishMeaning: 'O my Lord, forgive me; O my Lord, forgive me, have mercy on me, guide me, and grant me sustenance.',
    urduMeaning: 'اے میرے رب! مجھے بخش دے، اے میرے رب! مجھے بخش دے، مجھ پر رحم فرما، مجھے ہدایت دے اور مجھے رزق عطا فرما۔'
  },
  {
    step: 8,
    title: 'Tashahhud (Sitting for Testimony)',
    arabicTitle: 'التشهد',
    posture: 'Sitting after every two rak\'ahs and at the final completion of the prayer',
    description: 'Recite the greetings to Allah, send peace upon the Prophet ﷺ, and raise index finger slightly when uttering the Shahadah.',
    arabicRecitation: 'التَّحِيَّاتُ لِلَّهِ وَالصَّلَوَاتُ وَالطَّيِّبَاتُ، السَّلَامُ عَلَيْكَ أَيُّهَا النَّبِيُّ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ، السَّلَامُ عَلَيْنَا وَعَلَىٰ عِبَادِ اللَّهِ الصَّالِحِينَ، أَشْهَدُ أَنْ لَا إِلَٰهَ إِلَّا اللَّهُ، وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ.',
    transliteration: 'At-tahiyyaatu lillaahi was-salawaatu wat-tayyibaat, as-salaamu \'alayka ayyuhan-Nabiyyu wa rahmatul-laahi wa barakaatuh, as-salaamu \'alaynaa wa \'alaa \'ibaadil-laahis-saaliheen, ash-hadu al-laa ilaaha illal-laahu, wa ash-hadu anna Muhammadan \'abduhoo wa Rasooluh.',
    englishMeaning: 'All verbal greetings, prayers, and pure things belong to Allah. Peace be upon you, O Prophet, and the mercy of Allah and His blessings. Peace be upon us and upon the righteous servants of Allah. I bear witness that there is no deity except Allah, and I bear witness that Muhammad is His servant and Messenger.',
    urduMeaning: 'تمام قولی، بدنی اور مالی عبادتیں اللہ کے لیے ہیں۔ سلام ہو آپ پر اے نبی اور اللہ کی رحمت اور اس کی برکتیں۔ سلام ہو ہم پر اور اللہ کے نیک بندوں پر۔ میں گواہی دیتا ہوں کہ اللہ کے سوا کوئی معبود نہیں اور میں گواہی دیتا ہوں کہ محمد ﷺ اس کے بندے اور رسول ہیں۔'
  },
  {
    step: 9,
    title: 'Durood Ibrahim (Blessings upon the Prophet ﷺ)',
    arabicTitle: 'الصلاة الإبراهيمية',
    posture: 'Final sitting (Qa\'dah Akhirah) before the closing Tasleem',
    description: 'Send blessings upon the Prophet Muhammad ﷺ and Prophet Ibrahim (AS).',
    arabicRecitation: 'اللَّهُمَّ صَلِّ عَلَىٰ مُحَمَّدٍ وَعَلَىٰ آلِ مُحَمَّدٍ، كَمَا صَلَّيْتَ عَلَىٰ إِبْرَاهِيمَ وَعَلَىٰ آلِ إِبْرَاهِيمَ، إِنَّكَ حَمِيدٌ مَجِيدٌ. اللَّهُمَّ بَارِكْ عَلَىٰ مُحَمَّدٍ وَعَلَىٰ آلِ مُحَمَّدٍ، كَمَا بَارَكْتَ عَلَىٰ إِبْرَاهِيمَ وَعَلَىٰ آلِ إِبْرَاهِيمَ، إِنَّكَ حَمِيدٌ مَجِيدٌ.',
    transliteration: 'Allaahumma salli \'alaa Muhammadinw-wa \'alaa aali Muhammad, kamaa sallayta \'alaa Ibraaheema wa \'alaa aali Ibraaheem, innaka Hameedum-Majeed. Allaahumma baarik \'alaa Muhammadinw-wa \'alaa aali Muhammad, kamaa baarakta \'alaa Ibraaheema wa \'alaa aali Ibraaheem, innaka Hameedum-Majeed.',
    englishMeaning: 'O Allah, send prayers upon Muhammad and upon the family of Muhammad, as You sent prayers upon Ibrahim and upon the family of Ibrahim; You are indeed Praiseworthy, Glorious. O Allah, bless Muhammad and the family of Muhammad, as You blessed Ibrahim and the family of Ibrahim; You are indeed Praiseworthy, Glorious.',
    urduMeaning: 'اے اللہ! رحمت نازل فرما محمد ﷺ پر اور ان کی آل پر، جس طرح تو نے رحمت نازل فرمائی ابراہیم علیہ السلام پر اور ان کی آل پر، بے شک تو قابل تعریف اور بڑی بزرگی والا ہے۔ اے اللہ! برکت نازل فرما محمد ﷺ پر اور ان کی آل پر، جس طرح تو نے برکت نازل فرمائی ابراہیم علیہ السلام پر اور ان کی آل پر، بے شک تو تعریف کیا گیا اور بڑی شان والا ہے۔'
  },
  {
    step: 10,
    title: 'Tasleem (Concluding Salutation)',
    arabicTitle: 'التسليم',
    posture: 'Turn face to the right over shoulder, then to the left over shoulder',
    description: 'Conclude the prayer by turning right saying the Tasleem, then turning left and repeating it.',
    arabicRecitation: 'السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللَّهِ',
    transliteration: 'As-Salaamu \'Alaykum wa Rahmatul-laah',
    englishMeaning: 'May the peace and mercy of Allah be upon you.',
    urduMeaning: 'تم پر سلامتی اور اللہ کی رحمت ہو۔'
  }
];
