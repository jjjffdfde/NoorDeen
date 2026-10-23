export interface DuaItem {
  id: string;
  category: 'morning' | 'evening' | 'sleep' | 'food' | 'home' | 'travel' | 'protection' | 'istighfar';
  title: string;
  arabicText: string;
  transliteration: string;
  englishTranslation: string;
  urduTranslation: string;
  targetCount: number;
  reference: string;
  benefits?: string;
}

export const DUAS_DATA: DuaItem[] = [
  // Morning Adhkar
  {
    id: 'morn-1',
    category: 'morning',
    title: 'Morning Praise and Affirmation of Sovereignty',
    arabicText: 'أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ.',
    transliteration: 'Asbahnaa wa asbahal-mulku lillaahi, wal-hamdu lillaahi, laa ilaaha illal-laahu wahdahoo laa shareeka lahoo, lahul-mulku wa lahul-hamdu, wa Huwa \'alaa kulli shai\'in Qadeer.',
    englishTranslation: 'We have reached the morning and the kingdom belongs to Allah, and all praise is for Allah. There is no deity worthy of worship except Allah, alone without partner. His is the sovereignty and His is all praise, and He is over all things competent.',
    urduTranslation: 'ہم نے صبح کی اور اللہ کے سارے ملک نے صبح کی اور سب تعریف اللہ ہی کے لیے ہے۔ اللہ کے سوا کوئی معبود نہیں، وہ اکیلا ہے، اس کا کوئی شریک نہیں، اسی کی بادشاہی ہے اور اسی کی حمد ہے اور وہ ہر چیز پر قادر ہے۔',
    targetCount: 1,
    reference: 'Sahih Muslim 2723 (Hisnul Muslim #75)',
    benefits: 'Affirms that sovereignty over the new day belongs solely to the Creator.'
  },
  {
    id: 'morn-2',
    category: 'morning',
    title: 'Sayyid al-Istighfar (Chief of Prayers for Forgiveness)',
    arabicText: 'اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَٰهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَىٰ عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ لَكَ بِذَنْبِي، فَاغْفِرْ لِي فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ.',
    transliteration: 'Allaahumma Anta Rabbee laa ilaaha illaa Anta, khalaqtanee wa ana \'abduka, wa ana \'alaa \'ahdika wa wa\'dika mas-tata\'tu, a\'oozu bika min sharri maa sana\'tu, aboo\'u laka bi-ni\'matika \'alayya, wa aboo\'u laka bi-zambee, faghfir lee fa-innahoo laa yaghfiruz-zunooba illaa Anta.',
    englishTranslation: 'O Allah, You are my Lord; there is no deity except You. You created me and I am Your servant, and I abide by Your covenant and promise as best I can. I seek refuge in You from the evil of what I have done. I acknowledge Your favor upon me and I acknowledge my sin, so forgive me, for none forgives sins except You.',
    urduTranslation: 'اے اللہ! تو میرا رب ہے، تیرے سوا کوئی معبود نہیں، تو نے مجھے پیدا کیا اور میں تیرا بندہ ہوں، اور میں اپنی طاقت کے مطابق تیرے عہد اور وعدے پر قائم ہوں۔ میں اپنے اعمال کے شر سے تیری پناہ مانگتا ہوں، میں اپنے اوپر تیری نعمتوں کا اعتراف کرتا ہوں اور اپنے گناہوں کا اقرار کرتا ہوں، پس مجھے بخش دے کیونکہ تیرے سوا گناہوں کو کوئی نہیں بخش سکتا۔',
    targetCount: 1,
    reference: 'Sahih al-Bukhari 6306',
    benefits: 'Whoever says it with conviction in the morning and dies before evening will be among the people of Paradise.'
  },
  {
    id: 'morn-3',
    category: 'morning',
    title: 'Protection in the Name of Allah (Recited Morning & Evening)',
    arabicText: 'بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ.',
    transliteration: 'Bismillaahil-lazee laa yadurru ma\'as-mihee shay\'un fil-ardi wa laa fis-samaaa\'i wa Huwas-Samee\'ul-\'Aleem.',
    englishTranslation: 'In the name of Allah, with whose name nothing can cause harm in the earth or in the heavens, and He is the All-Hearing, the All-Knowing.',
    urduTranslation: 'اللہ کے نام کے ساتھ، جس کے نام کی برکت سے زمین اور آسمان میں کوئی چیز نقصان نہیں پہنچا سکتی اور وہ خوب سننے والا، سب کچھ جاننے والا ہے۔',
    targetCount: 3,
    reference: 'Abu Dawud 5088, At-Tirmidhi 3388 (Sahih)',
    benefits: 'Whoever recites it thrice in the morning and evening will not be harmed by anything.'
  },
  // Evening Adhkar
  {
    id: 'eve-1',
    category: 'evening',
    title: 'Evening Praise and Affirmation',
    arabicText: 'أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِیکَ لَهُ.',
    transliteration: 'Amsaynaa wa amsal-mulku lillaahi, wal-hamdu lillaahi, laa ilaaha illal-laahu wahdahoo laa shareeka lahoo.',
    englishTranslation: 'We have reached the evening and the kingdom belongs to Allah, and all praise is for Allah. There is no deity worthy of worship except Allah, alone without partner.',
    urduTranslation: 'ہم نے شام کی اور اللہ کے سارے ملک نے شام کی اور سب تعریف اللہ ہی کے لیے ہے، اللہ کے سوا کوئی معبود نہیں وہ اکیلا ہے اس کا کوئی شریک نہیں۔',
    targetCount: 1,
    reference: 'Sahih Muslim 2723',
    benefits: 'Brings tranquility and gratitude at the conclusion of the daytime.'
  },
  {
    id: 'eve-2',
    category: 'evening',
    title: 'Seeking Protection with the Perfect Words of Allah',
    arabicText: 'أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ.',
    transliteration: 'A\'oozu bi-kalimaatil-laahit-taammaati min sharri maa khalaq.',
    englishTranslation: 'I seek refuge in the perfect words of Allah from the evil of what He has created.',
    urduTranslation: 'میں اللہ کے مکمل کلمات کے ذریعے اس کی پیدا کردہ تمام چیزوں کے شر سے پناہ مانگتا ہوں۔',
    targetCount: 3,
    reference: 'Sahih Muslim 2709',
    benefits: 'No venomous creature or unexpected harm shall afflict the one who recites it.'
  },
  // Sleep & Waking
  {
    id: 'sleep-1',
    category: 'sleep',
    title: 'Supplication Before Sleeping',
    arabicText: 'بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا.',
    transliteration: 'Bismika Allaahumma amootu wa ahyaa.',
    englishTranslation: 'In Your name, O Allah, I die and I live.',
    urduTranslation: 'اے اللہ! میں تیرے ہی نام کے ساتھ مرتا (سوتا) ہوں اور جیتا (جاگتا) ہوں۔',
    targetCount: 1,
    reference: 'Sahih al-Bukhari 6324',
    benefits: 'Surrendering one\'s soul into Allah\'s protection during sleep.'
  },
  {
    id: 'sleep-2',
    category: 'sleep',
    title: 'Supplication Upon Waking Up',
    arabicText: 'الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ.',
    transliteration: 'Alhamdu lillaahil-lazee ahyaanaa ba\'da maa amaatanaa wa ilayhin-nushoor.',
    englishTranslation: 'All praise is for Allah who gave us life after having caused us to die, and unto Him is the resurrection.',
    urduTranslation: 'تمام تعریفیں اللہ کے لیے ہیں جس نے ہمیں مارنے کے بعد زندہ کیا اور اسی کی طرف لوٹ کر جانا ہے۔',
    targetCount: 1,
    reference: 'Sahih al-Bukhari 6312',
    benefits: 'Gratitude for the blessing of consciousness and renewed opportunity for good deeds.'
  },
  // Food & Drink
  {
    id: 'food-1',
    category: 'food',
    title: 'Supplication Before Eating',
    arabicText: 'بِسْمِ اللَّهِ (فَإِنْ نَسِيَ: بِسْمِ اللَّهِ أَوَّلَهُ وَآخِرَهُ)',
    transliteration: 'Bismillaah (If forgotten: Bismillaahi awwalahoo wa aakhirah)',
    englishTranslation: 'In the name of Allah. (If forgotten at start: In the name of Allah at its beginning and end).',
    urduTranslation: 'اللہ کے نام کے ساتھ شروع۔ (اگر شروع میں بھول جائے تو: بِسْمِ اللهِ أَوَّلَهُ وَآخِرَهُ)',
    targetCount: 1,
    reference: 'Abu Dawud 3767, At-Tirmidhi 1858 (Sahih)',
    benefits: 'Prevents Shaytan from sharing food and brings barakah (divine blessing).'
  },
  {
    id: 'food-2',
    category: 'food',
    title: 'Supplication After Finishing a Meal',
    arabicText: 'الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنَا وَسَقَانَا وَجَعَلَنَا مُسْلِمِينَ.',
    transliteration: 'Alhamdu lillaahil-lazee at\'amanaa wa saqaanaa wa ja\'alanaa muslimeen.',
    englishTranslation: 'All praise is for Allah who has fed us, given us drink, and made us Muslims.',
    urduTranslation: 'سب تعریفیں اللہ ہی کے لیے ہیں جس نے ہمیں کھلایا، پلایا اور ہمیں مسلمان بنایا۔',
    targetCount: 1,
    reference: 'Abu Dawud 3850, At-Tirmidhi 3457',
    benefits: 'Expresses gratitude for sustenance and the blessing of faith.'
  },
  // Home
  {
    id: 'home-1',
    category: 'home',
    title: 'Supplication When Leaving the Home',
    arabicText: 'بِسْمِ اللَّهِ تَوَكَّلْتُ عَلَى اللَّهِ، لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ.',
    transliteration: 'Bismillaahi tawakkaltu \'alal-laah, laa hawla wa laa quwwata illaa billaah.',
    englishTranslation: 'In the name of Allah, I place my trust in Allah; there is no might nor power except with Allah.',
    urduTranslation: 'اللہ کے نام کے ساتھ، میں نے اللہ پر بھروسہ کیا، گناہوں سے بچنے اور نیکی کرنے کی طاقت صرف اللہ کی مدد سے ہے۔',
    targetCount: 1,
    reference: 'Abu Dawud 5095, At-Tirmidhi 3426 (Sahih)',
    benefits: 'Angels proclaim: "You have been guided, provided for, and protected," and Shaytan departs from you.'
  },
  // Travel
  {
    id: 'trav-1',
    category: 'travel',
    title: 'Supplication for Travel and Mounting a Vehicle',
    arabicText: 'سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَٰذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ، وَإِنَّا إِلَىٰ رَبِّنَا لَمُنْقَلِبُونَ.',
    transliteration: 'Subhaanal-lazee sakh-khara lanaa haazaa wa maa kunnaa lahoo muqrineen, wa innaaa ilaa Rabbinaa lamunqaliboon.',
    englishTranslation: 'Glory be to Him who has subjected this to us, and we could never have achieved it by ourselves. And indeed, unto our Lord we shall return.',
    urduTranslation: 'پاک ہے وہ ذات جس نے اس کو ہمارے تابع کر دیا، حالانکہ ہم اس پر قابو پانے والے نہ تھے، اور یقیناً ہم اپنے پروردگار ہی کی طرف لوٹ کر جانے والے ہیں۔',
    targetCount: 1,
    reference: 'Surah Az-Zukhruf (43:13-14), Sahih Muslim 1342',
    benefits: 'Invokes divine ease and protection throughout all journeys.'
  }
];
