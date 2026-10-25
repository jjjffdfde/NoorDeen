const fs = require('fs');
const vm = require('vm');

const additionalHadiths = [
  {
    id: "bukhari-8",
    collection: "Sahih al-Bukhari",
    number: 8,
    book: "Faith (Kitab al-Iman)",
    ar: "بُنِيَ الإِسْلاَمُ عَلَى خَمْسٍ: شَهَادَةِ أَنْ لاَ إِلَهَ إِلاَّ اللَّهُ وَأَنَّ مُحَمَّدًا رَسُولُ اللَّهِ، وَإِقَامِ الصَّلاَةِ، وَإِيتَاءِ الزَّكَاةِ، وَالْحَجِّ، وَصَوْمِ رَمَضَانَ.",
    en: "Islam is built upon five pillars: testifying that there is no god but Allah and that Muhammad is the Messenger of Allah, establishing regular prayer, paying Zakat, the Hajj pilgrimage, and fasting Ramadan.",
    ur: "اسلام کی بنیاد پانچ چیزوں پر رکھی گئی ہے: اس بات کی گواہی دینا کہ اللہ کے سوا کوئی معبود نہیں اور محمد ﷺ اللہ کے رسول ہیں، نماز قائم کرنا، زکوٰۃ ادا کرنا، حج کرنا اور رمضان کے روزے رکھنا۔",
    narrator: "Abdullah ibn Umar (RA)",
    grade: "Sahih (Authentic)",
    gradeScholar: "Muttafaqun 'Alayh (Bukhari & Muslim)",
    topic: "Iman"
  },
  {
    id: "muslim-137",
    collection: "Sahih Muslim",
    number: 137,
    book: "Prayer (Kitab as-Salah)",
    ar: "إِنَّ أَوَّلَ مَا يُحَاسَبُ بِهِ الْعَبْدُ يَوْمَ الْقِيَامَةِ مِنْ عَمَلِهِ صَلاَتُهُ، فَإِنْ صَلُحَتْ فَقَدْ أَفْلَحَ وَأَنْجَحَ، وَإِنْ فَسَدَتْ فَقَدْ خَابَ وَخَسِرَ.",
    en: "The first matter that the slave will be brought to account for on the Day of Judgment is his prayer. If it is sound, then he has triumphed and succeeded; but if it is corrupt, he has failed and lost.",
    ur: "قیامت کے دن بندے کے اعمال میں سب سے پہلے جس چیز کا حساب لیا جائے گا وہ نماز ہے۔ اگر وہ درست نکلی تو وہ فلاح پا گیا اور کامیاب ہو گیا، اور اگر وہ خراب نکلی تو وہ نامراد اور خسارے میں رہا۔",
    narrator: "Abu Hurairah (RA)",
    grade: "Sahih (Authentic)",
    gradeScholar: "Imam Muslim & Tirmidhi",
    topic: "Salah"
  },
  {
    id: "bukhari-1904",
    collection: "Sahih al-Bukhari",
    number: 1904,
    book: "Fasting (Kitab as-Sawm)",
    ar: "الصِّيَامُ جُنَّةٌ، فَلَا يَرْفُثْ وَلَا يَجْهَلْ، وَإِنِ امْرُؤٌ قَاتَلَهُ أَوْ شَاتَمَهُ فَلْيَقُلْ: إِنِّي صَائِمٌ - مَرَّتَيْنِ. وَالَّذِي نَفْسِي بِيَدِهِ لَخُلُوفُ فَمِ الصَّائِمِ أَطْيَبُ عِنْدَ اللَّهِ تَعَالَى مِنْ رِيحِ الْمِسْكِ.",
    en: "Fasting is a protective shield. So when one of you is fasting, he should neither indulge in obscenity nor act foolishly. If anyone fights him or insults him, let him say twice: 'I am fasting.' By Him in Whose Hand is my soul, the breath of a fasting person is sweeter to Allah than the scent of musk.",
    ur: "روزہ ایک ڈھال ہے۔ پس جب تم میں سے کوئی روزے سے ہو تو نہ بے ہودہ گفتگو کرے اور نہ جہالت والی حرکت۔ اگر کوئی اس سے لڑے یا گالی دے تو وہ دو مرتبہ کہے: 'میں روزے سے ہوں۔' اس ذات کی قسم جس کے ہاتھ میں میری جان ہے، روزہ دار کے منہ کی بو اللہ کے نزدیک کستوری کی خوشبو سے بھی زیادہ پاکیزہ ہے۔",
    narrator: "Abu Hurairah (RA)",
    grade: "Sahih (Authentic)",
    gradeScholar: "Muttafaqun 'Alayh (Bukhari & Muslim)",
    topic: "Fasting"
  },
  {
    id: "bukhari-1395",
    collection: "Sahih al-Bukhari",
    number: 1395,
    book: "Obligatory Charity (Kitab az-Zakat)",
    ar: "مَا نَقَصَتْ صَدَقَةٌ مِنْ مَالٍ، وَمَا زَادَ اللَّهُ عَبْدًا بِعَفْوٍ إِلاَّ عِزًّا، وَمَا تَوَاضَعَ أَحَدٌ لِلَّهِ إِلاَّ رَفَعَهُ اللَّهُ.",
    en: "Charity does not decrease wealth. No one forgives another except that Allah increases him in honor, and no one humbles himself for the sake of Allah except that Allah elevates his status.",
    ur: "صدقہ کسی مال میں کمی نہیں کرتا، اور معاف کر دینے سے اللہ بندے کی عزت میں اضافہ ہی فرماتا ہے، اور جو شخص بھی اللہ کے لیے عاجزی اختیار کرتا ہے اللہ اسے بلندی عطا فرماتا ہے۔",
    narrator: "Abu Hurairah (RA)",
    grade: "Sahih (Authentic)",
    gradeScholar: "Sahih Muslim 2588",
    topic: "Zakat"
  },
  {
    id: "bukhari-1773",
    collection: "Sahih al-Bukhari",
    number: 1773,
    book: "Umrah & Hajj",
    ar: "الْعُمْرَةُ إِلَى الْعُمْرَةِ كَفَّارَةٌ لِمَا بَيْنَهُمَا، وَالْحَجُّ الْمَبْرُورُ لَيْسَ لَهُ جَزَاءٌ إِلَّا الْجَنَّةُ.",
    en: "An Umrah to another Umrah is an expiation for what sins occurred between them, and an accepted, upright Hajj (Hajj Mabrur) has no reward except Paradise.",
    ur: "ایک عمرہ دوسرے عمرے تک کے درمیانی گناہوں کا کفارہ ہے، اور حج مبرور کا بدلہ جنت کے سوا کچھ نہیں۔",
    narrator: "Abu Hurairah (RA)",
    grade: "Sahih (Authentic)",
    gradeScholar: "Muttafaqun 'Alayh (Bukhari & Muslim)",
    topic: "Hajj"
  },
  {
    id: "abudawud-1479",
    collection: "Sunan Abi Dawud",
    number: 1479,
    book: "Prayer (Witr & Dua)",
    ar: "الدُّعَاءُ هُوَ الْعِبَادَةُ، ثُمَّ قَرَأَ: {وَقَالَ رَبُّكُمُ ادْعُونِي أَسْتَجِبْ لَكُمْ}.",
    en: "Supplication is worship itself. Then the Prophet ﷺ recited: 'And your Lord says: Call upon Me; I will respond to you' (Surah Ghafir 40:60).",
    ur: "دعا ہی اصل عبادت ہے۔ پھر آپ ﷺ نے یہ آیت تلاوت فرمائی: 'اور تمہارے پروردگار نے فرمایا مجھ سے دعا کرو میں تمہاری دعا قبول کروں گا۔'",
    narrator: "An-Nu'man ibn Bashir (RA)",
    grade: "Sahih (Al-Albani)",
    gradeScholar: "Abu Dawud & Tirmidhi",
    topic: "Dua"
  },
  {
    id: "tirmidhi-2516",
    collection: "Jami` at-Tirmidhi",
    number: 2516,
    book: "Day of Judgment (Kitab Sifat al-Qiyamah)",
    ar: "يَا غُلاَمُ إِنِّي أُعَلِّمُكَ كَلِمَاتٍ: احْفَظِ اللَّهَ يَحْفَظْكَ، احْفَظِ اللَّهَ تَجِدْهُ تُجَاهَكَ، إِذَا سَأَلْتَ فَاسْأَلِ اللَّهَ، وَإِذَا اسْتَعَنْتَ فَاسْتَعِنْ بِاللَّهِ.",
    en: "O young man, I will teach you some words: Be mindful of Allah, and Allah will protect you. Be mindful of Allah, and you will find Him before you. If you ask, ask Allah; and if you seek assistance, seek help from Allah.",
    ur: "اے لڑکے! میں تمہیں چند باتیں سکھاتا ہوں: تم اللہ کے احکام کی حفاظت کرو اللہ تمہاری حفاظت کرے گا، تم اللہ کو یاد رکھو اسے اپنے سامنے پاؤ گے، جب مانگنا ہو تو اللہ سے مانگو اور جب مدد طلب کرنی ہو تو اللہ سے مدد چاہو۔",
    narrator: "Abdullah ibn Abbas (RA)",
    grade: "Sahih (Al-Albani)",
    gradeScholar: "At-Tirmidhi / Al-Albani",
    topic: "Iman"
  },
  {
    id: "nasai-5431",
    collection: "Sunan an-Nasa'i",
    number: 5431,
    book: "Seeking Refuge (Kitab al-Isti'adhah)",
    ar: "اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا، وَرِزْقًا طَيِّبًا، وَعَمَلًا مُتَقَبَّلًا.",
    en: "O Allah, I ask You for beneficial knowledge, wholesome pure provision, and deeds that are accepted.",
    ur: "اے اللہ! میں تجھ سے نفع بخش علم، پاکیزہ حلال رزق اور قبول ہونے والے عمل کا سوال کرتا ہوں۔",
    narrator: "Umm Salamah (RA)",
    grade: "Sahih (Al-Albani)",
    gradeScholar: "An-Nasa'i / Ibn Majah",
    topic: "Knowledge"
  },
  {
    id: "ibnmajah-224",
    collection: "Sunan Ibn Majah",
    number: 224,
    book: "The Book of the Sunnah (Muqaddimah)",
    ar: "طَلَبُ الْعِلْمِ فَرِيضَةٌ عَلَى كُلِّ مُسْلِمٍ.",
    en: "Seeking knowledge is an absolute religious duty upon every single Muslim.",
    ur: "علم کا حاصل کرنا ہر مسلمان (مرد و عورت) پر فرض ہے۔",
    narrator: "Anas ibn Malik (RA)",
    grade: "Sahih (Al-Albani)",
    gradeScholar: "Ibn Majah / Al-Albani",
    topic: "Knowledge"
  },
  {
    id: "ibnmajah-4251",
    collection: "Sunan Ibn Majah",
    number: 4251,
    book: "Zuhd & Modesty",
    ar: "الْحَيَاءُ لَا يَأْتِي إِلَّا بِخَيْرٍ.",
    en: "Modesty brings forth nothing except goodness.",
    ur: "حیا خیر اور بھلائی کے سوا کچھ نہیں لاتی۔",
    narrator: "Imran ibn Husain (RA)",
    grade: "Sahih (Authentic)",
    gradeScholar: "Muttafaqun 'Alayh (Bukhari & Muslim)",
    topic: "Akhlaq"
  },
  {
    id: "bukhari-6018",
    collection: "Sahih al-Bukhari",
    number: 6018,
    book: "Good Manners (Kitab al-Adab)",
    ar: "مَنْ لاَ يَرْحَمُ لاَ يُرْحَمُ.",
    en: "Whoever does not show mercy to others will not be shown mercy.",
    ur: "جو شخص دوسروں پر رحم نہیں کرتا اس پر بھی رحم نہیں کیا جائے گا۔",
    narrator: "Abu Hurairah (RA)",
    grade: "Sahih (Authentic)",
    gradeScholar: "Muttafaqun 'Alayh (Bukhari & Muslim)",
    topic: "Akhlaq"
  },
  {
    id: "muslim-70",
    collection: "Sahih Muslim",
    number: 70,
    book: "Faith (Kitab al-Iman)",
    ar: "الإِيمَانُ بِضْعٌ وَسَبْعُونَ - أَوْ بِضْعٌ وَسِتُّونَ - شُعْبَةً، فَأَفْضَلُهَا قَوْلُ لاَ إِلَهَ إِلاَّ اللَّهُ، وَأَدْنَاهَا إِمَاطَةُ الأَذَى عَنِ الطَّرِيقِ، وَالْحَيَاءُ شُعْبَةٌ مِنَ الإِيمَانِ.",
    en: "Faith has over seventy branches — the highest of which is the declaration that there is no god but Allah, and the lowest of which is removing a harmful obstacle from the road; and modesty is a branch of faith.",
    ur: "ایمان کی ستر سے کچھ اوپر شاخیں ہیں، جن میں سب سے افضل 'لا الہ الا اللہ' کا اقرار ہے اور ادنیٰ ترین راستے سے تکلیف دہ چیز کو ہٹانا ہے، اور حیا بھی ایمان کی ایک شاخ ہے۔",
    narrator: "Abu Hurairah (RA)",
    grade: "Sahih (Authentic)",
    gradeScholar: "Imam Muslim",
    topic: "Iman"
  },
  {
    id: "abudawud-4985",
    collection: "Sunan Abi Dawud",
    number: 4985,
    book: "Manners (Kitab al-Adab)",
    ar: "لَيْسَ الشَّدِيدُ بِالصُّرَعَةِ، إِنَّمَا الشَّدِيدُ الَّذِي يَمْلِكُ نَفْسَهُ عِنْدَ الْغَضَبِ.",
    en: "The strong person is not the one who overcomes others in wrestling; the strong person is the one who controls himself at the time of anger.",
    ur: "طاقتور وہ شخص نہیں جو دوسروں کو پچھاڑ دے، بلکہ اصل طاقتور وہ ہے جو غصے کے وقت اپنے نفس پر قابو رکھے۔",
    narrator: "Abu Hurairah (RA)",
    grade: "Sahih (Authentic)",
    gradeScholar: "Muttafaqun 'Alayh (Bukhari & Muslim)",
    topic: "Akhlaq"
  },
  {
    id: "ibnmajah-4102",
    collection: "Sunan Ibn Majah",
    number: 4102,
    book: "Asceticism (Kitab az-Zuhd)",
    ar: "ازْهَدْ فِي الدُّنْيَا يُحِبَّكَ اللَّهُ، وَازْهَدْ فِيمَا فِي أَيْدِي النَّاسِ يُحِبَّكَ النَّاسُ.",
    en: "Renounce worldly greed and attachment to materialism and Allah will love you; and renounce what is in the possession of people and people will love you.",
    ur: "دنیا سے بے رغبتی اختیار کرو اللہ تم سے محبت کرے گا، اور جو کچھ لوگوں کے پاس ہے اس سے بے نیازی برتو لوگ تم سے محبت کریں گے۔",
    narrator: "Sahl ibn Sa'd al-Sa'idi (RA)",
    grade: "Hasan (Al-Albani)",
    gradeScholar: "Ibn Majah / Al-Albani",
    topic: "Akhlaq"
  }
];

const additionalDuas = [
  {
    id: "dua-evening",
    cat: "evening",
    title: "Evening Affirmation & Sovereignty",
    ar: "أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ.",
    tr: "Amsaynaa wa amsal-mulku lillaahi, wal-hamdu lillaahi, laa ilaaha illal-laahu wahdahoo laa shareeka lahoo, lahul-mulku wa lahul-hamdu, wa huwa 'alaa kulli shay'in qadeer.",
    en: "We have reached the evening and the kingdom belongs to Allah, and all praise is for Allah. There is no deity worthy of worship except Allah alone, without partner. His is the dominion and His is the praise, and He has power over all things.",
    ur: "ہم نے شام کی اور اللہ کے سارے ملک نے شام کی اور سب تعریف اللہ ہی کے لیے ہے۔ اللہ کے سوا کوئی معبود نہیں وہ اکیلا ہے اس کا کوئی شریک نہیں، اسی کے لیے بادشاہی ہے اور اسی کے لیے تعریف، اور وہ ہر چیز پر قادر ہے۔",
    target: 1,
    ref: "Sahih Muslim 2723"
  },
  {
    id: "dua-after-salah-istighfar",
    cat: "salah",
    title: "After-Salah Seeking Forgiveness & Peace",
    ar: "أَسْتَغْفِرُ اللَّهَ، أَسْتَغْفِرُ اللَّهَ، أَسْتَغْفِرُ اللَّهَ. اللَّهُمَّ أَنْتَ السَّلَامُ وَمِنْكَ السَّلَامُ، تَبَارَكْتَ يَا ذَا الْجَلَالِ وَالإِكْرَامِ.",
    tr: "Astaghfirullaah, Astaghfirullaah, Astaghfirullaah. Allaahumma Antas-Salaamu wa minkas-salaamu, tabaarakta yaa Dhal-Jalaali wal-Ikraam.",
    en: "I seek the forgiveness of Allah (three times). O Allah, You are Peace and from You comes peace. Blessed are You, O Possessor of Glory and Honor.",
    ur: "میں اللہ سے بخشش مانگتا ہوں (تین بار)۔ اے اللہ! تو ہی سلامتی والا ہے اور تجھی سے سلامتی ہے، تو بڑی برکت والا ہے اے عظمت اور بزرگی والے۔",
    target: 3,
    ref: "Sahih Muslim 591"
  },
  {
    id: "dua-after-salah-tasbih",
    cat: "salah",
    title: "Tasbih Fatimi Post-Salah Dhikr",
    ar: "سُبْحَانَ اللَّهِ (٣٣x)، الْحَمْدُ لِلَّهِ (٣٣x)، اللَّهُ أَكْبَرُ (٣٣x). لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ.",
    tr: "Subhaanallaah (33x), Alhamdulillaah (33x), Allaahu Akbar (33x). Laa ilaaha illal-laahu wahdahoo laa shareeka lahoo, lahul-mulku wa lahul-hamdu, wa huwa 'alaa kulli shay'in qadeer.",
    en: "Glory be to Allah (33 times), All praise is for Allah (33 times), Allah is the Greatest (33 times), then seal with: None has the right to be worshipped except Allah alone, without partner; to Him belongs sovereignty and to Him belongs praise, and He has power over all things.",
    ur: "سبحان اللہ (33 مرتبہ)، الحمد للہ (33 مرتبہ)، اللہ اکبر (33 مرتبہ)، اور سو پورا کرنے کے لیے: اللہ کے سوا کوئی معبود نہیں وہ یکتا ہے اس کا کوئی شریک نہیں، اسی کی بادشاہت ہے اور اسی کے لیے تعریف اور وہ ہر چیز پر قادر ہے۔",
    target: 33,
    ref: "Sahih Muslim 597"
  },
  {
    id: "dua-entering-home",
    cat: "home",
    title: "Entering the Home",
    ar: "بِسْمِ اللَّهِ وَلَجْنَا، وَبِسْمِ اللَّهِ خَرَجْنَا، وَعَلَى اللَّهِ رَبِّنَا تَوَكَّلْنَا.",
    tr: "Bismillaahi walajnaa, wa bismillaahi kharajnaa, wa 'alallaahi Rabbinaa tawakkalnaa.",
    en: "In the Name of Allah we enter, in the Name of Allah we leave, and upon Allah our Lord we place our trust.",
    ur: "اللہ کے نام سے ہم داخل ہوئے اور اللہ کے نام سے ہم نکلے اور اپنے پروردگار اللہ پر ہم نے بھروسہ کیا۔",
    target: 1,
    ref: "Sunan Abi Dawud 5096"
  },
  {
    id: "dua-entering-mosque",
    cat: "mosque",
    title: "Entering the Mosque",
    ar: "بِسْمِ اللَّهِ، وَالصَّلَاةُ وَالسَّلَامُ عَلَى رَسُولِ اللَّهِ، اللَّهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ.",
    tr: "Bismillaahi, was-salaatu was-salaamu 'alaa Rasoolillaah. Allaahum-maftah lee abwaaba rahmatik.",
    en: "In the Name of Allah, and blessings and peace be upon the Messenger of Allah. O Allah, open for me the gates of Your mercy.",
    ur: "اللہ کے نام سے، اور درود و سلام ہو اللہ کے رسول پر۔ اے اللہ! میرے لیے اپنی رحمت کے دروازے کھول دے۔",
    target: 1,
    ref: "Sahih Muslim 713, Abu Dawud 465"
  },
  {
    id: "dua-leaving-mosque",
    cat: "mosque",
    title: "Leaving the Mosque",
    ar: "بِسْمِ اللَّهِ، وَالصَّلَاةُ وَالسَّلَامُ عَلَى رَسُولِ اللَّهِ، اللَّهُمَّ إِنِّي أَسْأَلُكَ مِنْ فَضْلِكَ.",
    tr: "Bismillaahi, was-salaatu was-salaamu 'alaa Rasoolillaah. Allaahumma innee as'aluka min fadlik.",
    en: "In the Name of Allah, and blessings and peace be upon the Messenger of Allah. O Allah, I ask You from Your bounty.",
    ur: "اللہ کے نام سے، اور درود و سلام ہو اللہ کے رسول پر۔ اے اللہ! میں تجھ سے تیرے فضل کا سوال کرتا ہوں۔",
    target: 1,
    ref: "Sahih Muslim 713, Ibn Majah 773"
  },
  {
    id: "dua-before-eating",
    cat: "food",
    title: "Before Eating & Drinking",
    ar: "بِسْمِ اللَّهِ، اللَّهُمَّ بَارِكْ لَنَا فِيمَا رَزَقْتَنَا وَقِنَا عَذَابَ النَّارِ.",
    tr: "Bismillaah. Allaahumma baarik lanaa feemaa razaqtanaa wa qinaa 'adhaaban-naar.",
    en: "In the Name of Allah. O Allah, bless for us what You have provided us and protect us from the punishment of the Fire.",
    ur: "اللہ کے نام کے ساتھ۔ اے اللہ! جو تو نے ہمیں رزق دیا اس میں ہمارے لیے برکت عطا فرما اور ہمیں آگ کے عذاب سے بچا۔",
    target: 1,
    ref: "Sahih al-Bukhari 5376, Tirmidhi 1858"
  },
  {
    id: "dua-after-eating",
    cat: "food",
    title: "After Eating & Drinking",
    ar: "الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنَا وَسَقَانَا وَجَعَلَنَا مُسْلِمِينَ.",
    tr: "Alhamdulillaahil-ladhee at'amanaa wa saqaanaa wa ja'alanaa muslimeen.",
    en: "Praise be to Allah Who fed us, gave us drink, and made us among the Muslims.",
    ur: "تمام تعریفیں اللہ کے لیے ہیں جس نے ہمیں کھلایا، پلایا اور ہمیں مسلمانوں میں سے بنایا۔",
    target: 1,
    ref: "Sunan Abi Dawud 3850, Tirmidhi 3457"
  },
  {
    id: "dua-travel",
    cat: "travel",
    title: "Supplication for Traveling (Safar)",
    ar: "سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَٰذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ، وَإِنَّا إِلَىٰ رَبِّنَا لَمُنْقَلِبُونَ. اللَّهُمَّ إِنَّا نَسْأَلُكَ فِي سَفَرِنَا هَٰذَا الْبِرَّ وَالتَّقْوَىٰ، وَمِنَ الْعَمَلِ مَا تَرْضَىٰ.",
    tr: "Subhaanal-ladhee sakh-khara lanaa haadhaa wa maa kunnaa lahoo muqrineen, wa innaa ilaa Rabbinaa lamunqaliboon. Allaahumma innaa nas'aluka fee safarinaa haadhal-birra wat-taqwaa, wa minal-'amali maa tardaa.",
    en: "Glory be to Him Who has subjected this to us, and we could never have achieved it by our own efforts. And surely, unto our Lord is our return. O Allah, we ask You in this journey of ours for righteousness and piety, and for deeds that please You.",
    ur: "پاک ہے وہ ذات جس نے اسے ہمارے قابو میں دے دیا حالانکہ ہم اسے قابو میں لانے والے نہ تھے، اور یقیناً ہم اپنے رب کی طرف لوٹ کر جانے والے ہیں۔ اے اللہ! ہم تجھ سے اپنے اس سفر میں نیکی اور تقویٰ مانگتے ہیں اور ایسا عمل مانگتے ہیں جس سے تو راضی ہو۔",
    target: 1,
    ref: "Surah Az-Zukhruf 43:13-14, Sahih Muslim 1342"
  },
  {
    id: "dua-visiting-sick",
    cat: "health",
    title: "Visiting the Sick",
    ar: "لَا بَأْسَ، طَهُورٌ إِنْ شَاءَ اللَّهُ.",
    tr: "Laa ba's, tahoorun in shaa' Allaah.",
    en: "No harm, it is a purification if Allah wills.",
    ur: "کوئی حرج نہیں، یہ بیماری گناہوں سے پاکیزگی کا ذریعہ ہے، اگر اللہ نے چاہا۔",
    target: 1,
    ref: "Sahih al-Bukhari 3616"
  },
  {
    id: "dua-anxiety-debt",
    cat: "distress",
    title: "Protection from Anxiety, Grief & Overwhelming Debt",
    ar: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ، وَالْعَجْزِ وَالْكَسَلِ، وَالْجُبْنِ وَالْبُخْلِ، وَضَلَعِ الدَّيْنِ، وَغَلَبَةِ الرِّجَالِ.",
    tr: "Allaahumma innee a'oodhu bika minal-hammi wal-hazani, wal-'ajzi wal-kasali, wal-jubni wal-bukhli, wa dala'id-dayni wa ghalabatir-rijaal.",
    en: "O Allah, I seek refuge in You from anxiety and grief, incapacity and laziness, cowardice and stinginess, the burden of debt and the oppression of men.",
    ur: "اے اللہ! میں پریشانی اور غم سے، عاجزی اور سستی سے، بزدلی اور بخل سے، قرض کے بوجھ سے اور لوگوں کے دباؤ و تسلط سے تیری پناہ مانگتا ہوں۔",
    target: 1,
    ref: "Sahih al-Bukhari 2893"
  },
  {
    id: "dua-iftar",
    cat: "fasting",
    title: "Breaking the Fast at Iftar",
    ar: "ذَهَبَ الظَّمَأُ، وَابْتَلَّتِ الْعُرُوقُ، وَثَبَتَ الأَجْرُ إِنْ شَاءَ اللَّهُ.",
    tr: "Dhahabadh-dhama'u, wabtallatil-'urooqu, wa thabatal-ajru in shaa' Allaah.",
    en: "The thirst has gone, the veins are moistened, and the reward is confirmed, if Allah wills.",
    ur: "پیاس چلی گئی، رگیں تر ہو گئیں اور اجر ثابت ہو گیا اگر اللہ نے چاہا۔",
    target: 1,
    ref: "Sunan Abi Dawud 2357 (Hasan)"
  },
  {
    id: "dua-laylatul-qadr",
    cat: "fasting",
    title: "Supplication of Laylat al-Qadr (Night of Power)",
    ar: "اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي.",
    tr: "Allaahumma innaka 'Afuwwun tuhibbul-'afwa fa'fu 'annee.",
    en: "O Allah, You are Most Forgiving and You love to forgive, so forgive me.",
    ur: "اے اللہ! تو بہت معاف فرمانے والا ہے، معافی کو پسند فرماتا ہے، پس مجھے معاف فرما دے۔",
    target: 1,
    ref: "Jami` at-Tirmidhi 3513, Ibn Majah 3850 (Sahih)"
  },
  {
    id: "dua-talbiyah",
    cat: "hajj",
    title: "The Talbiyah of Hajj & Umrah",
    ar: "لَبَّيْكَ اللَّهُمَّ لَبَّيْكَ، لَبَّيْكَ لَا شَرِيكَ لَكَ لَبَّيْكَ، إِنَّ الْحَمْدَ وَالنِّعْمَةَ لَكَ وَالْمُلْكَ، لَا شَرِيكَ لَكَ.",
    tr: "Labbayka Allaahumma labbayk, labbayka laa shareeka laka labbayk, innal-hamda wan-ni'mata laka wal-mulk, laa shareeka lak.",
    en: "Here I am, O Allah, here I am. Here I am, You have no partner, here I am. Verily all praise, grace, and sovereignty belong to You. You have no partner.",
    ur: "میں حاضر ہوں، اے اللہ میں حاضر ہوں! میں حاضر ہوں، تیرا کوئی شریک نہیں، میں حاضر ہوں! یقیناً تمام تعریفیں، تمام نعمتیں اور بادشاہی تیری ہی ہے، تیرا کوئی شریک نہیں۔",
    target: 1,
    ref: "Sahih al-Bukhari 1549, Sahih Muslim 1184"
  },
  {
    id: "dua-parents-mercy",
    cat: "quranic",
    title: "Quranic Supplication of Mercy for Parents",
    ar: "رَبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا.",
    tr: "Rabbir-hamhumaa kamaa rabbayaanee sagheeraa.",
    en: "My Lord, have mercy upon them as they brought me up when I was small.",
    ur: "اے میرے رب! ان دونوں (والدین) پر رحم فرما جیسا کہ انہوں نے بچپن میں میری پرورش کی۔",
    target: 1,
    ref: "Surah Al-Isra 17:24"
  }
];

function formatJsObject(obj, indent = 4) {
  const pad = ' '.repeat(indent);
  const padInner = ' '.repeat(indent + 2);
  const lines = ['{'];
  for (const [k, v] of Object.entries(obj)) {
    const jsonVal = JSON.stringify(v);
    lines.push(`${padInner}${k}: ${jsonVal},`);
  }
  const lastLine = lines[lines.length - 1];
  lines[lines.length - 1] = lastLine.slice(0, -1);
  lines.push(`${pad}}`);
  return lines.join('\n');
}

const hadithBlocks = additionalHadiths.map(h => formatJsObject(h, 4)).join(',\n');
const duaBlocks = additionalDuas.map(d => formatJsObject(d, 4)).join(',\n');

let fileContent = fs.readFileSync('public/js/data.js', 'utf8');
const isCrlf = fileContent.includes('\r\n');
fileContent = fileContent.replace(/\r\n/g, '\n');

// Target 1: Insert additional Hadiths before "kalimas: ["
const hadithTarget = '      topic: "Knowledge"\n    }\n  ],';
const hadithReplacement = `      topic: "Knowledge"\n    },\n${hadithBlocks}\n  ],`;

if (fileContent.includes(hadithTarget)) {
  fileContent = fileContent.replace(hadithTarget, hadithReplacement);
  console.log('Appended additional Hadiths successfully!');
} else {
  console.log('Hadith target not found!');
}

// Target 2: Insert additional Duas before end of duas array
const duaTarget = '      ref: "Surah Ibrahim 14:40-41"\n    }\n  ]';
const duaReplacement = `      ref: "Surah Ibrahim 14:40-41"\n    },\n${duaBlocks}\n  ]`;

if (fileContent.includes(duaTarget)) {
  fileContent = fileContent.replace(duaTarget, duaReplacement);
  console.log('Appended additional Duas successfully!');
} else {
  console.log('Dua target not found!');
}

if (isCrlf) {
  fileContent = fileContent.replace(/\n/g, '\r\n');
}

fs.writeFileSync('public/js/data.js', fileContent, 'utf8');

// Validate syntax
const testSandbox = { window: {} };
vm.createContext(testSandbox);
vm.runInContext(fileContent, testSandbox);
const d = testSandbox.window.ISLAMIC_DATA;
console.log('Successfully validated updated data.js in VM!');
console.log('Total Hadiths:', d.hadiths.length);
console.log('Total Duas:', d.duas.length);
