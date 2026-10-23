export interface AyahData {
  numberInSurah: number;
  text: string;
  translations: {
    en: string;
    ur: string;
  };
  audioUrl?: string;
  transliteration?: string;
}

export interface OfflineSurahDetail {
  number: number;
  name: string;
  englishName: string;
  englishNameTranslation: string;
  revelationType: 'Meccan' | 'Medinan';
  numberOfAyahs: number;
  bismillahPre: boolean;
  bismillahText?: string;
  ayahs: AyahData[];
}

export const OFFLINE_SURAHS: Record<number, OfflineSurahDetail> = {
  1: {
    number: 1,
    name: "الفَاتِحَة",
    englishName: "Al-Fatihah",
    englishNameTranslation: "The Opening",
    revelationType: "Meccan",
    numberOfAyahs: 7,
    bismillahPre: false,
    ayahs: [
      {
        numberInSurah: 1,
        text: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
        translations: {
          en: "In the name of Allah, the Entirely Merciful, the Especially Merciful.",
          ur: "شروع اللہ کا نام لے کر جو بڑا مہربان نہایت رحم والا ہے۔"
        },
        transliteration: "Bismillaahir Rahmaanir Raheem",
        audioUrl: "https://everyayah.com/data/Alafasy_128kbps/001001.mp3"
      },
      {
        numberInSurah: 2,
        text: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
        translations: {
          en: "[All] praise is [due] to Allah, Lord of the worlds -",
          ur: "سب طرح کی تعریف خدا ہی کو (سزاوار) ہے جو تمام مخلوقات کا پروردگار ہے۔"
        },
        transliteration: "Alhamdu lillaahi Rabbil 'aalameen",
        audioUrl: "https://everyayah.com/data/Alafasy_128kbps/001002.mp3"
      },
      {
        numberInSurah: 3,
        text: "الرَّحْمَٰنِ الرَّحِيمِ",
        translations: {
          en: "The Entirely Merciful, the Especially Merciful,",
          ur: "بڑا مہربان نہایت رحم والا۔"
        },
        transliteration: "Ar-Rahmaanir-Raheem",
        audioUrl: "https://everyayah.com/data/Alafasy_128kbps/001003.mp3"
      },
      {
        numberInSurah: 4,
        text: "مَالِكِ يَوْمِ الدِّينِ",
        translations: {
          en: "Sovereign of the Day of Recompense.",
          ur: "انصاف کے دن کا حاکم۔"
        },
        transliteration: "Maaliki Yawmid-Deen",
        audioUrl: "https://everyayah.com/data/Alafasy_128kbps/001004.mp3"
      },
      {
        numberInSurah: 5,
        text: "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ",
        translations: {
          en: "It is You we worship and You we ask for help.",
          ur: "(اے پروردگار) ہم تیری ہی عبادت کرتے ہیں اور تجھ ہی سے مدد مانگتے ہیں۔"
        },
        transliteration: "Iyyaaka na'budu wa lyyaaka nasta'een",
        audioUrl: "https://everyayah.com/data/Alafasy_128kbps/001005.mp3"
      },
      {
        numberInSurah: 6,
        text: "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ",
        translations: {
          en: "Guide us to the straight path -",
          ur: "ہم کو سیدھے رستے پر چلا۔"
        },
        transliteration: "Ihdinas-Siraatal-Mustaqeem",
        audioUrl: "https://everyayah.com/data/Alafasy_128kbps/001006.mp3"
      },
      {
        numberInSurah: 7,
        text: "صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ",
        translations: {
          en: "The path of those upon whom You have bestowed favor, not of those who have evoked [Your] anger or of those who are astray.",
          ur: "ان لوگوں کے رستے جن پر تو اپنا فضل و کرم کرتا رہا، نہ ان کے جن پر غضب ہوا اور نہ گمراہوں کے۔"
        },
        transliteration: "Siraatal-ladheena an'amta 'alayhim ghayril-maghdoobi 'alayhim wa lad-daalleen",
        audioUrl: "https://everyayah.com/data/Alafasy_128kbps/001007.mp3"
      }
    ]
  },
  112: {
    number: 112,
    name: "الإِخْلَاص",
    englishName: "Al-Ikhlas",
    englishNameTranslation: "The Sincerity",
    revelationType: "Meccan",
    numberOfAyahs: 4,
    bismillahPre: true,
    ayahs: [
      {
        numberInSurah: 1,
        text: "قُلْ هُوَ اللَّهُ أَحَدٌ",
        translations: {
          en: "Say, \"He is Allah, [who is] One,",
          ur: "کہو کہ وہ (ذات پاک جس کا نام) اللہ (ہے) ایک ہے۔"
        },
        transliteration: "Qul Huwal-laahu Ahad",
        audioUrl: "https://everyayah.com/data/Alafasy_128kbps/112001.mp3"
      },
      {
        numberInSurah: 2,
        text: "اللَّهُ الصَّمَدُ",
        translations: {
          en: "Allah, the Eternal Refuge.",
          ur: "معبود برحق جو بےنیاز ہے۔"
        },
        transliteration: "Allaahus-Samad",
        audioUrl: "https://everyayah.com/data/Alafasy_128kbps/112002.mp3"
      },
      {
        numberInSurah: 3,
        text: "لَمْ يَلِدْ وَلَمْ يُولَدْ",
        translations: {
          en: "He neither begets nor is born,",
          ur: "نہ کسی کا باپ ہے اور نہ کسی کا بیٹا۔"
        },
        transliteration: "Lam yalid wa lam yoolad",
        audioUrl: "https://everyayah.com/data/Alafasy_128kbps/112003.mp3"
      },
      {
        numberInSurah: 4,
        text: "وَلَمْ يَكُنْ لَهُ كُفُوًا أَحَدٌ",
        translations: {
          en: "Nor is there to Him any equivalent.\"",
          ur: "اور کوئی اس کا ہمسر نہیں۔"
        },
        transliteration: "Wa lam yakul-lahoo kufuwan ahad",
        audioUrl: "https://everyayah.com/data/Alafasy_128kbps/112004.mp3"
      }
    ]
  },
  113: {
    number: 113,
    name: "الفَلَق",
    englishName: "Al-Falaq",
    englishNameTranslation: "The Daybreak",
    revelationType: "Meccan",
    numberOfAyahs: 5,
    bismillahPre: true,
    ayahs: [
      {
        numberInSurah: 1,
        text: "قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ",
        translations: {
          en: "Say, \"I seek refuge in the Lord of daybreak",
          ur: "کہو کہ میں صبح کے مالک کی پناہ مانگتا ہوں۔"
        },
        transliteration: "Qul a'oozu bi rabbil-falaq",
        audioUrl: "https://everyayah.com/data/Alafasy_128kbps/113001.mp3"
      },
      {
        numberInSurah: 2,
        text: "مِنْ شَرِّ مَا خَلَقَ",
        translations: {
          en: "From the evil of that which He created",
          ur: "ہر چیز کی برائی سے جو اس نے پیدا کی۔"
        },
        transliteration: "Min sharri maa khalaq",
        audioUrl: "https://everyayah.com/data/Alafasy_128kbps/113002.mp3"
      },
      {
        numberInSurah: 3,
        text: "وَمِنْ شَرِّ غَاسِقٍ إِذَا وَقَبَ",
        translations: {
          en: "And from the evil of darkness when it settles",
          ur: "اور اندھیری رات کی برائی سے جب اس کا اندھیرا چھا جائے۔"
        },
        transliteration: "Wa min sharri ghaasiqin izaa waqab",
        audioUrl: "https://everyayah.com/data/Alafasy_128kbps/113003.mp3"
      },
      {
        numberInSurah: 4,
        text: "وَمِنْ شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ",
        translations: {
          en: "And from the evil of the blowers in knots",
          ur: "اور گنڈوں پر (پڑھ پڑھ کر) پھونکنے والیوں کی برائی سے۔"
        },
        transliteration: "Wa min sharrin-naffaasaati fil 'uqad",
        audioUrl: "https://everyayah.com/data/Alafasy_128kbps/113004.mp3"
      },
      {
        numberInSurah: 5,
        text: "وَمِنْ شَرِّ حَاسِدٍ إِذَا حَسَدَ",
        translations: {
          en: "And from the evil of an envier when he envies.\"",
          ur: "اور حسد کرنے والے کی برائی سے جب حسد کرنے لگے۔"
        },
        transliteration: "Wa min sharri haasidin izaa hasad",
        audioUrl: "https://everyayah.com/data/Alafasy_128kbps/113005.mp3"
      }
    ]
  },
  114: {
    number: 114,
    name: "النَّاس",
    englishName: "An-Nas",
    englishNameTranslation: "Mankind",
    revelationType: "Meccan",
    numberOfAyahs: 6,
    bismillahPre: true,
    ayahs: [
      {
        numberInSurah: 1,
        text: "قُلْ أَعُوذُ بِرَبِّ النَّاسِ",
        translations: {
          en: "Say, \"I seek refuge in the Lord of mankind,",
          ur: "کہو کہ میں لوگوں کے پروردگار کی پناہ مانگتا ہوں۔"
        },
        transliteration: "Qul a'oozu bi rabbin-naas",
        audioUrl: "https://everyayah.com/data/Alafasy_128kbps/114001.mp3"
      },
      {
        numberInSurah: 2,
        text: "مَلِكِ النَّاسِ",
        translations: {
          en: "The Sovereign of mankind,",
          ur: "(یعنی) لوگوں کے بادشاہ کی۔"
        },
        transliteration: "Malikin-naas",
        audioUrl: "https://everyayah.com/data/Alafasy_128kbps/114002.mp3"
      },
      {
        numberInSurah: 3,
        text: "إِلَٰهِ النَّاسِ",
        translations: {
          en: "The God of mankind,",
          ur: "لوگوں کے معبود برحق کی۔"
        },
        transliteration: "Ilaahin-naas",
        audioUrl: "https://everyayah.com/data/Alafasy_128kbps/114003.mp3"
      },
      {
        numberInSurah: 4,
        text: "مِنْ شَرِّ الْوَسْوَاسِ الْخَنَّاسِ",
        translations: {
          en: "From the evil of the retreating whisperer -",
          ur: "وسوسہ ڈالنے والے (اور پناہ لینے کے وقت) پیچھے ہٹ جانے والے شیطان کی برائی سے۔"
        },
        transliteration: "Min sharril-waswaasil khannaas",
        audioUrl: "https://everyayah.com/data/Alafasy_128kbps/114004.mp3"
      },
      {
        numberInSurah: 5,
        text: "الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ",
        translations: {
          en: "Who whispers [evil] into the breasts of mankind -",
          ur: "جو لوگوں کے دلوں میں وسوسے ڈالتا ہے۔"
        },
        transliteration: "Allazee yuwaswisu fee sudoorin-naas",
        audioUrl: "https://everyayah.com/data/Alafasy_128kbps/114005.mp3"
      },
      {
        numberInSurah: 6,
        text: "مِنَ الْجِنَّةِ وَالنَّاسِ",
        translations: {
          en: "From among the jinn and mankind.\"",
          ur: "خواہ وہ جنات میں سے ہو یا انسانوں میں سے۔"
        },
        transliteration: "Minal-jinnati wan-naas",
        audioUrl: "https://everyayah.com/data/Alafasy_128kbps/114006.mp3"
      }
    ]
  },
  67: {
    number: 67,
    name: "المُلْك",
    englishName: "Al-Mulk",
    englishNameTranslation: "The Sovereignty",
    revelationType: "Meccan",
    numberOfAyahs: 30,
    bismillahPre: true,
    ayahs: [
      {
        numberInSurah: 1,
        text: "تَبَارَكَ الَّذِي بِيَدِهِ الْمُلْكُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ",
        translations: {
          en: "Blessed is He in whose hand is dominion, and He is over all things competent -",
          ur: "بڑی برکت والا ہے وہ جس کے ہاتھ میں بادشاہی ہے اور وہ ہر چیز پر قادر ہے۔"
        },
        transliteration: "Tabaarakal lazee biyadihil mulku wa huwa 'alaa kulli shai'in qadeer",
        audioUrl: "https://everyayah.com/data/Alafasy_128kbps/067001.mp3"
      },
      {
        numberInSurah: 2,
        text: "الَّذِي خَلَقَ الْمَوْتَ وَالْحَيَاةَ لِيَبْلُوَكُمْ أَيُّكُمْ أَحْسَنُ عَمَلًا ۚ وَهُوَ الْعَزِيزُ الْغَفُورُ",
        translations: {
          en: "[He] who created death and life to test you [as to] which of you is best in deed - and He is the Exalted in Might, the Forgiving -",
          ur: "جس نے موت اور زندگی کو پیدا کیا تاکہ تمہیں آزمائے کہ تم میں کس کے عمل اچھے ہیں اور وہ غالب اور بخشنے والا ہے۔"
        },
        transliteration: "Allazee khalaqal mawta walhayaata liyabluwakum ayyukum ahsanu 'amalaa; wa huwal 'azeezul ghafoor",
        audioUrl: "https://everyayah.com/data/Alafasy_128kbps/067002.mp3"
      },
      {
        numberInSurah: 3,
        text: "الَّذِي خَلَقَ سَبْعَ سَمَاوَاتٍ طِبَاقًا ۖ مَّا تَرَىٰ فِي خَلْقِ الرَّحْمَٰنِ مِن تَفَاوُتٍ ۖ فَارْجِعِ الْبَصَرَ هَلْ تَرَىٰ مِن فُطُورٍ",
        translations: {
          en: "[And] who created seven heavens in layers. You do not see in the creation of the Most Merciful any inconsistency. So return [your] vision [to the sky]; do you see any breaks?",
          ur: "جس نے سات آسمان اوپر تلے بنائے۔ تو رحمٰن کی آفرینش میں کوئی نقص نہ دیکھے گا۔ آنکھ اٹھا کر دیکھ بھلا تجھے کوئی شگاف نظر آتا ہے؟"
        },
        transliteration: "Allazee khalaqa sab'a samaawaatin tibaaqan maa taraa fee khalqir rahmaani min tafaawut farji'il basara hal taraa min futoor",
        audioUrl: "https://everyayah.com/data/Alafasy_128kbps/067003.mp3"
      }
    ]
  },
  36: {
    number: 36,
    name: "يس",
    englishName: "Ya-Sin",
    englishNameTranslation: "Ya Sin",
    revelationType: "Meccan",
    numberOfAyahs: 83,
    bismillahPre: true,
    ayahs: [
      {
        numberInSurah: 1,
        text: "يس",
        translations: {
          en: "Ya, Seen.",
          ur: "یسٓ۔"
        },
        transliteration: "Yaa-Seeen",
        audioUrl: "https://everyayah.com/data/Alafasy_128kbps/036001.mp3"
      },
      {
        numberInSurah: 2,
        text: "وَالْقُرْآنِ الْحَكِيمِ",
        translations: {
          en: "By the wise Qur'an.",
          ur: "حکمت والے قرآن کی قسم۔"
        },
        transliteration: "Wal-Qur-aanil-Hakeem",
        audioUrl: "https://everyayah.com/data/Alafasy_128kbps/036002.mp3"
      },
      {
        numberInSurah: 3,
        text: "إِنَّكَ لَمِنَ الْمُرْسَلِينَ",
        translations: {
          en: "Indeed you, [O Muhammad], are from among the messengers,",
          ur: "کہ بے شک آپ پیغمبروں میں سے ہیں۔"
        },
        transliteration: "Innaka laminal mursaleen",
        audioUrl: "https://everyayah.com/data/Alafasy_128kbps/036003.mp3"
      },
      {
        numberInSurah: 4,
        text: "عَلَىٰ صِرَاطٍ مُسْتَقِيمٍ",
        translations: {
          en: "On a straight path.",
          ur: "سیدھے رستے پر۔"
        },
        transliteration: "'Alaa Siraatim Mustaqeem",
        audioUrl: "https://everyayah.com/data/Alafasy_128kbps/036004.mp3"
      },
      {
        numberInSurah: 5,
        text: "تَنْزِيلَ الْعَزِيزِ الرَّحِيمِ",
        translations: {
          en: "[This is] a revelation of the Exalted in Might, the Merciful,",
          ur: "یہ غالب اور مہربان خدا کا اتارا ہوا ہے۔"
        },
        transliteration: "Tanzeelal 'Azeezir Raheem",
        audioUrl: "https://everyayah.com/data/Alafasy_128kbps/036005.mp3"
      }
    ]
  }
};

export const AYATUL_KURSI: AyahData = {
  numberInSurah: 255,
  text: "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ",
  translations: {
    en: "Allah - there is no deity except Him, the Ever-Living, the Sustainer of [all] existence. Neither drowsiness overtakes Him nor sleep. To Him belongs whatever is in the heavens and whatever is on the earth. Who is it that could intercede with Him except by His permission? He knows what is [presently] before them and what will be after them, and they encompass not a thing of His knowledge except for what He wills. His Kursi extends over the heavens and the earth, and their preservation tires Him not. And He is the Most High, the Most Great.",
    ur: "اللہ وہ معبود برحق ہے کہ اس کے سوا کوئی عبادت کے لائق نہیں، زندہ ہمیشہ رہنے والا، نہ اس کو اونگھ آتی ہے نہ نیند۔ جو کچھ آسمانوں میں اور جو کچھ زمین میں ہے سب اسی کا ہے۔ کون ہے جو اس کی اجازت کے بغیر اس کے حضور شفاعت کر سکے؟ جو کچھ بندوں کے روبرو ہو رہا ہے اور جو کچھ ان کے پیچھے ہو چکا ہے وہ سب جانتا ہے، اور وہ اس کی معلومات میں سے کسی چیز پر احاطہ نہیں کر سکتے مگر جتنا وہ چاہے۔ اس کی کرسی (علم و قدرت) نے سب آسمانوں اور زمین کو گھیر رکھا ہے اور ان کی حفاظت اس کو نہیں تھکاتی، اور وہ عالی رتبہ اور جلیل القدر ہے۔"
  },
  transliteration: "Allahu laaa ilaaha illaa Huwal Hayyul Qayyuum; laa ta'khuzuhuu sinatunw-wa laa nawm; lahuu maa fissamaawaati wa maa fil ard; man zal lazii yashfa'u 'indahuuu illaa bi-iznih; ya'lamu maa bayna aydeehim wa maa khalfahum wa laa yuheetuuna bishay'im-min 'ilmihii illaa bimaa shaaa'; wasi'a Kursiyyuhus samaawaati wal arda wa laa ya'ooduhuu hifzuhumaa; wa Huwal 'Aliyyul 'Azeem",
  audioUrl: "https://everyayah.com/data/Alafasy_128kbps/002255.mp3"
};
