const fs = require('fs');
const vm = require('vm');

const updatedHadiths = [
  {
    id: "bukhari-1",
    collection: "Sahih al-Bukhari",
    number: 1,
    book: "Revelation (Bad' al-Wahy)",
    ar: "إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى، فَمَنْ كَانَتْ هِجْرَتُهُ إِلَى دُنْيَا يُصِيبُهَا أَوْ إِلَى امْرَأَةٍ يَنْكِحُهَا فَهِجْرَتُهُ إِلَى مَا هَاجَرَ إِلَيْهِ.",
    en: "Actions are judged by intentions, and every person will have only that which they intended. Whoever emigrates for worldly gain or for marriage, their migration is for that which they migrated.",
    ur: "اعمال کا دارومدار نیتوں پر ہے اور ہر انسان کے لیے وہی ہے جس کی اس نے نیت کی۔ چنانچہ جس کی ہجرت دنیا کے حصول یا کسی عورت سے نکاح کے لیے ہو تو اس کی ہجرت اسی کے لیے شمار ہوگی جس کے لیے اس نے ہجرت کی۔",
    narrator: "Umar ibn al-Khattab (RA)",
    grade: "Sahih (Authentic)",
    gradeScholar: "Muttafaqun 'Alayh (Bukhari & Muslim)",
    topic: "Iman"
  },
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
    id: "bukhari-13",
    collection: "Sahih al-Bukhari",
    number: 13,
    book: "Faith (Kitab al-Iman)",
    ar: "لاَ يُؤْمِنُ أَحَدُكُمْ حَتَّى يُحِبَّ لأَخِيهِ مَا يُحِبُّ لِنَفْسِهِ.",
    en: "None of you truly believes until he loves for his brother that which he loves for himself.",
    ur: "تم میں سے کوئی شخص اس وقت تک سچا مومن نہیں ہو سکتا جب تک وہ اپنے بھائی کے لیے وہی پسند نہ کرے جو اپنے لیے پسند کرتا ہے۔",
    narrator: "Anas ibn Malik (RA)",
    grade: "Sahih (Authentic)",
    gradeScholar: "Muttafaqun 'Alayh (Bukhari & Muslim)",
    topic: "Akhlaq"
  },
  {
    id: "muslim-2564",
    collection: "Sahih Muslim",
    number: 2564,
    book: "Virtue, Manners & Relations (Al-Birr)",
    ar: "إِنَّ اللَّهَ لاَ يَنْظُرُ إِلَى صُوَرِكُمْ وَأَمْوَالِكُمْ، وَلَكِنْ يَنْظُرُ إِلَى قُلُوبِكُمْ وَأَعْمَالِكُمْ.",
    en: "Verily, Allah does not look at your outward appearances or your wealth, but rather He looks at your hearts and your deeds.",
    ur: "بے شک اللہ تمہاری صورتوں اور تمہارے مالوں کو نہیں دیکھتا، بلکہ وہ تمہارے دلوں اور تمہارے اعمال کو دیکھتا ہے۔",
    narrator: "Abu Hurairah (RA)",
    grade: "Sahih (Authentic)",
    gradeScholar: "Imam Muslim",
    topic: "Iman"
  },
  {
    id: "muslim-223",
    collection: "Sahih Muslim",
    number: 223,
    book: "Purification (Kitab at-Taharah)",
    ar: "الطُّهُورُ شَطْرُ الإِيمَانِ، وَالْحَمْدُ لِلَّهِ تَمْلأُ الْمِيزَانَ، وَسُبْحَانَ اللَّهِ وَالْحَمْدُ لِلَّهِ تَمْلآنِ - أَوْ تَمْلأُ - مَا بَيْنَ السَّمَاوَاتِ وَالأَرْضِ، وَالصَّلاَةُ نُورٌ، وَالصَّدَقَةُ بُرْهَانٌ، وَالصَّبْرُ ضِيَاءٌ، وَالْقُرْآنُ حُجَّةٌ لَكَ أَوْ عَلَيْكَ.",
    en: "Purity is half of faith. Alhamdulillah fills the Scale. SubhanAllah and Alhamdulillah fill whatever is between the heavens and the earth. Prayer is light, charity is proof, patience is illumination, and the Quran is an argument for you or against you.",
    ur: "پاکیزگی نصف ایمان ہے۔ الحمد للہ ترازو کو بھر دیتا ہے۔ سبحان اللہ اور الحمد للہ آسمانوں اور زمین کے درمیان کے فاصلے کو بھر دیتے ہیں۔ نماز نور ہے، صدقہ دلیل ہے، صبر روشنی ہے اور قرآن تمہارے حق میں یا تمہارے خلاف حجت ہے۔",
    narrator: "Abu Malik al-Ash'ari (RA)",
    grade: "Sahih (Authentic)",
    gradeScholar: "Imam Muslim",
    topic: "Purification"
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
    book: "Umrah (Kitab al-Umrah)",
    ar: "الْعُمْرَةُ إِلَى الْعُمْرَةِ كَفَّارَةٌ لِمَا بَيْنَهُمَا، وَالْحَجُّ الْمَبْرُورُ لَيْسَ لَهُ جَزَاءٌ إِلَّا الْجَنَّةُ.",
    en: "An Umrah to another Umrah is an expiation for what sins occurred between them, and an accepted, upright Hajj (Hajj Mabrur) has no reward except Paradise.",
    ur: "ایک عمرہ دوسرے عمرے تک کے درمیانی گناہوں کا کفارہ ہے، اور حج مبرور کا بدلہ جنت کے سوا کچھ نہیں۔",
    narrator: "Abu Hurairah (RA)",
    grade: "Sahih (Authentic)",
    gradeScholar: "Muttafaqun 'Alayh (Bukhari & Muslim)",
    topic: "Hajj"
  },
  {
    id: "tirmidhi-1924",
    collection: "Jami` at-Tirmidhi",
    number: 1924,
    book: "Righteousness & Relations",
    ar: "الرَّاحِمُونَ يَرْحَمُهُمُ الرَّحْمَنُ، ارْحَمُوا مَنْ فِي الأَرْضِ يَرْحَمْكُمْ مَنْ فِي السَّمَاءِ.",
    en: "The merciful will be shown mercy by the Most Merciful. Show mercy to those who are on the earth, and the One Who is in the heavens will show mercy to you.",
    ur: "رحم کرنے والوں پر رحمن رحم فرماتا ہے۔ تم زمین والوں پر رحم کرو، آسمان والا تم پر رحم فرمائے گا۔",
    narrator: "Abdullah ibn Amr ibn al-Aas (RA)",
    grade: "Sahih (Al-Albani)",
    gradeScholar: "At-Tirmidhi / Al-Albani",
    topic: "Akhlaq"
  },
  {
    id: "abudawud-4799",
    collection: "Sunan Abi Dawud",
    number: 4799,
    book: "Manners (Kitab al-Adab)",
    ar: "مَا مِنْ شَيْءٍ أَثْقَلُ فِي مِيزَانِ الْمُؤْمِنِ يَوْمَ الْقِيَامَةِ مِنْ حُسْنِ الْخُلُقِ، وَإِنَّ اللَّهَ لَيُبْغِضُ الْفَاحِشَ الْبَذِيءَ.",
    en: "There is nothing heavier upon the balance of a believer on the Day of Judgment than good character. Indeed, Allah hates the vulgar, shameless person.",
    ur: "قیامت کے دن مومن کی میزان میں اچھے اخلاق سے بڑھ کر کوئی چیز وزنی نہیں ہوگی، اور اللہ بے حیا اور بدزبان شخص سے سخت ناراض ہوتا ہے۔",
    narrator: "Abu Darda (RA)",
    grade: "Sahih (Al-Albani)",
    gradeScholar: "Abu Dawud / Al-Albani",
    topic: "Akhlaq"
  },
  {
    id: "nasai-3140",
    collection: "Sunan an-Nasa'i",
    number: 3140,
    book: "Jihad & Devotion",
    ar: "وَيْحَكَ! أَحَيَّةٌ أُمُّكَ؟ قُلْتُ: نَعَمْ. قَالَ: الْزَمْ رِجْلَهَا فَثَمَّ الْجَنَّةُ.",
    en: "Woe to you! Is your mother alive? I replied: 'Yes.' The Prophet ﷺ said: 'Stay at her feet, for Paradise lies there.'",
    ur: "کیا تمہاری والدہ زندہ ہیں؟ میں نے عرض کیا: جی ہاں۔ فرمایا: ان کے قدموں کو لازم پکڑ لو، کیونکہ جنت وہیں ہے۔",
    narrator: "Mu'awiyah ibn Jahima (RA)",
    grade: "Hasan (Al-Albani)",
    gradeScholar: "An-Nasa'i / Al-Albani",
    topic: "Family"
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
    id: "bukhari-5027",
    collection: "Sahih al-Bukhari",
    number: 5027,
    book: "Virtues of the Quran",
    ar: "خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ.",
    en: "The best among you are those who learn the Quran and teach it to others.",
    ur: "تم میں سب سے بہتر وہ شخص ہے جس نے قرآن سیکھا اور اسے دوسروں کو سکھایا۔",
    narrator: "Uthman ibn Affan (RA)",
    grade: "Sahih (Authentic)",
    gradeScholar: "Imam al-Bukhari",
    topic: "Knowledge"
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
    book: "Chapters on the Description of the Day of Judgment",
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

const updatedDuas = [
  {
    id: "dua-morning",
    cat: "morning",
    title: "Morning Affirmation & Praise",
    ar: "أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ.",
    tr: "Asbahnaa wa asbahal-mulku lillaahi, wal-hamdu lillaahi, laa ilaaha illal-laahu wahdahoo laa shareeka lahoo, lahul-mulku wa lahul-hamdu, wa huwa 'alaa kulli shay'in qadeer.",
    en: "We have reached the morning and the kingdom belongs to Allah, and all praise is for Allah. There is no deity worthy of worship except Allah, alone without partner. His is the sovereignty and His is the praise, and He is over all things capable.",
    ur: "ہم نے صبح کی اور اللہ کے سارے ملک نے صبح کی اور سب تعریف اللہ ہی کے لیے ہے۔ اللہ کے سوا کوئی معبود نہیں وہ اکیلا ہے اس کا کوئی شریک نہیں، اسی کی بادشاہی ہے اور اسی کے لیے تعریف ہے، اور وہ ہر چیز پر قادر ہے۔",
    target: 1,
    ref: "Sahih Muslim 2723"
  },
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
    id: "dua-protection-daily",
    cat: "morning",
    title: "Divine Protection Thrice Daily",
    ar: "بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ.",
    tr: "Bismillaahil-ladhee laa yadurru ma'as-mihee shay'un fil-ardi wa laa fis-samaa'i wa huwas-Samee'ul-'Aleem.",
    en: "In the Name of Allah, with Whose Name nothing can cause harm in the earth nor in the heavens, and He is the All-Hearing, the All-Knowing.",
    ur: "اللہ کے نام کے ساتھ جس کے نام کی برکت سے زمین اور آسمان میں کوئی چیز نقصان نہیں پہنچا سکتی اور وہی خوب سننے والا اور جاننے والا ہے۔",
    target: 3,
    ref: "Abu Dawud 5088, Tirmidhi 3388 (Sahih)"
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
    id: "dua-sleep",
    cat: "sleep",
    title: "Before Sleeping",
    ar: "بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا.",
    tr: "Bismika Allaahumma amootu wa ahyaa.",
    en: "In Your Name, O Allah, I die and I live.",
    ur: "اے اللہ! تیرے ہی نام کے ساتھ میں مرتا ہوں (سوتا ہوں) اور جیتا ہوں (جاگتا ہوں)۔",
    target: 1,
    ref: "Sahih al-Bukhari 6324"
  },
  {
    id: "dua-waking",
    cat: "sleep",
    title: "Upon Waking Up",
    ar: "الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ.",
    tr: "Alhamdulillaahil-ladhee ahyaanaa ba'da maa amaatanaa wa ilayhin-nushoor.",
    en: "All praise is for Allah Who gave us life after having caused us to die, and unto Him is the resurrection.",
    ur: "تمام تعریفیں اس اللہ کے لیے ہیں جس نے ہمیں مارنے (سلانے) کے بعد زندہ کیا اور اسی کی طرف لوٹ کر جانا ہے۔",
    target: 1,
    ref: "Sahih al-Bukhari 6312"
  },
  {
    id: "dua-leaving-home",
    cat: "home",
    title: "Leaving the Home",
    ar: "بِسْمِ اللَّهِ، تَوَكَّلْتُ عَلَى اللَّهِ، وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ.",
    tr: "Bismillaahi, tawakkaltu 'alallaahi, wa laa hawla wa laa quwwata illaa billaah.",
    en: "In the Name of Allah, I place my trust in Allah; there is no might and no power except with Allah.",
    ur: "اللہ کے نام کے ساتھ، میں نے اللہ پر بھروسہ کیا، اور گناہوں سے بچنے اور نیکی کرنے کی طاقت اللہ ہی کی توفیق سے ہے۔",
    target: 1,
    ref: "Abu Dawud 5095 (Sahih)"
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
    id: "dua-distress",
    cat: "distress",
    title: "Supplication of Prophet Yunus (Anxiety & Distress)",
    ar: "لَا إِلَٰهَ إِلَّا أَنْتَ سُبْحَانَكَ إِنِّي كُنْتُ مِنَ الظَّالِمِينَ.",
    tr: "Laa ilaaha illaa Anta subhaanaka innee kuntu minaz-zaalimeen.",
    en: "There is no deity worthy of worship except You; glory be to You, truly I have been among the wrongdoers.",
    ur: "تیرے سوا کوئی معبود نہیں، تو پاک ہے، بے شک میں ہی قصورواروں میں سے تھا۔",
    target: 1,
    ref: "Surah Al-Anbiya 21:87, Tirmidhi 3505 (Sahih)"
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
    id: "dua-janazah-adult",
    cat: "janazah",
    title: "Janazah Supplication for Adult Deceased",
    ar: "اللَّهُمَّ اغْفِرْ لِحَيِّنَا وَمَيِّتِنَا، وَشَاهِدِنَا وَغَائِبِنَا، وَصَغِيرِنَا وَكَبِيرِنَا، وَذَكَرِنَا وَأُنْثَانَا. اللَّهُمَّ مَنْ أَحْيَيْتَهُ مِنَّا فَأَحْيِهِ عَلَى الإِسْلاَمِ، وَمَنْ تَوَفَّيْتَهُ مِنَّا فَتَوَفَّهُ عَلَى الإِيمَانِ.",
    tr: "Allaahum-maghfir lihayyinaa wa mayyitinaa, wa shaahidinaa wa ghaa'ibinaa, wa sagheerinaa wa kabeerinaa, wa dhakarinaa wa unthaanaa. Allaahumma man ahyaytahoo minnaa fa-ahyihee 'alal-Islaam, wa man tawaffaytahoo minnaa fa-tawaffahoo 'alal-Eemaan.",
    en: "O Allah, forgive our living and our dead, those present and those absent, our young and our old, our males and our females. O Allah, whomever You keep alive among us, keep him alive upon Islam, and whomever You cause to die among us, cause him to die upon Faith.",
    ur: "اے اللہ! ہمارے زندوں کو بخش دے اور ہمارے مردوں کو، ہمارے حاضر کو اور ہمارے غائب کو، ہمارے چھوٹوں کو اور ہمارے بڑوں کو، اور ہمارے مردوں کو اور ہماری عورتوں کو۔ اے اللہ! ہم میں سے تو جسے زندہ رکھے اسے اسلام پر زندہ رکھ اور جسے تو موت دے اسے ایمان پر موت دے۔",
    target: 1,
    ref: "Sunan Abi Dawud 3201, Tirmidhi 1024 (Sahih)"
  },
  {
    id: "dua-janazah-child",
    cat: "janazah",
    title: "Janazah Supplication for Deceased Child",
    ar: "اللَّهُمَّ اجْعَلْهُ لَنَا فَرَطًا، وَاجْعَلْهُ لَنَا أَجْرًا وَذُخْرًا، وَاجْعَلْهُ لَنَا شَافِعًا وَمُشَفَّعًا.",
    tr: "Allaahum-maj'alhu lanaa faratan, waj'alhu lanaa ajran wa dhukhran, waj'alhu lanaa shaafi'an wa mushaffa'aa.",
    en: "O Allah, make him (or her) for us a forerunner, a source of reward and an asset, and make him an intercessor whose intercession is accepted.",
    ur: "اے اللہ! اس بچے کو ہمارے لیے آگے پہنچانے والا ذخیرہ بنا، اور اسے ہمارے لیے اجر اور ذخیرہ بنا، اور اسے ہمارے لیے شفاعت کرنے والا اور مقبول شفاعت بنا۔",
    target: 1,
    ref: "Sahih al-Bukhari (Ta'liqan), Al-Bayhaqi 4/9"
  },
  {
    id: "dua-tashreeq",
    cat: "eid",
    title: "Takbirat al-Tashreeq (Eid al-Adha)",
    ar: "اللَّهُ أَكْبَرُ، اللَّهُ أَكْبَرُ، لَا إِلَهَ إِلَّا اللَّهُ، وَاللَّهُ أَكْبَرُ، اللَّهُ أَكْبَرُ، وَلِلَّهِ الْحَمْدُ.",
    tr: "Allaahu Akbar, Allaahu Akbar, Laa ilaaha illal-laahu, wal-laahu Akbar, Allaahu Akbar, wa lillaahil-hamd.",
    en: "Allah is the Greatest, Allah is the Greatest, there is no deity worthy of worship except Allah; and Allah is the Greatest, Allah is the Greatest, and to Allah belongs all praise.",
    ur: "اللہ سب سے بڑا ہے، اللہ سب سے بڑا ہے، اللہ کے سوا کوئی معبود نہیں، اور اللہ سب سے بڑا ہے، اللہ سب سے بڑا ہے، اور تمام تعریف اللہ ہی کے لیے ہے۔",
    target: 3,
    ref: "Musannaf Ibn Abi Shaybah 5633, Daruqutni (Authentic Sunnah)"
  },
  {
    id: "dua-istikharah",
    cat: "salah",
    title: "Dua al-Istikharah (Seeking Divine Guidance)",
    ar: "اللَّهُمَّ إِنِّي أَسْتَخِيرُكَ بِعِلْمِكَ، وَأَسْتَقْدِرُكَ بِقُدْرَتِكَ، وَأَسْأَلُكَ مِنْ فَضْلِكَ الْعَظِيمِ، فَإِنَّكَ تَقْدِرُ وَلَا أَقْدِرُ، وَتَعْلَمُ وَلَا أَعْلَمُ، وَأَنْتَ عَلَّامُ الْغُيُوبِ.",
    tr: "Allaahumma innee astakheeruka bi-'ilmika, wa astaqdiruka bi-qudratika, wa as'aluka min fadlikal-'azeem, fa-innaka taqdiru wa laa aqdir, wa ta'lamu wa laa a'lam, wa Anta 'Allaamul-ghuyoob.",
    en: "O Allah, I seek Your counsel through Your knowledge, and I seek power from Your power, and I ask You from Your immense favor. For You are capable and I am not, You know and I do not know, and You are the Knower of the unseen.",
    ur: "اے اللہ! میں تیرے علم کی برکت سے تجھ سے بھلائی طلب کرتا ہوں اور تیری قدرت سے طاقت مانگتا ہوں اور تیرے عظیم فضل کا سوال کرتا ہوں، کیونکہ تو قادر ہے اور میں قادر نہیں، تو جانتا ہے اور میں نہیں جانتا، اور تو تمام پوشیدہ باتوں کا جاننے والا ہے۔",
    target: 1,
    ref: "Sahih al-Bukhari 1162"
  },
  {
    id: "dua-qunut",
    cat: "salah",
    title: "Dua al-Qunut (Witr Prayer Supplication)",
    ar: "اللَّهُمَّ اهْدِنِي فِيمَنْ هَدَيْتَ، وَعَافِنِي فِيمَنْ عَافَيْتَ، وَتَوَلَّنِي فِيمَنْ تَوَلَّيْتَ، وَبَارِكْ لِي فِيمَا أَعْطَيْتَ، وَقِنِي شَرَّ مَا قَضَيْتَ، فَإِنَّكَ تَقْضِي وَلَا يُقْضَىٰ عَلَيْكَ.",
    tr: "Allaahum-mahdinee feeman hadayt, wa 'aafinee feeman 'aafayt, wa tawallanee feeman tawallayt, wa baarik lee feemaa a'tayt, wa qinee sharra maa qadayt, fa-innaka taqdee wa laa yuqda 'alayk.",
    en: "O Allah, guide me among those whom You have guided, grant me well-being among those whom You have granted well-being, take me into Your care among those whom You have taken into care, bless for me what You have given, and protect me from the evil of what You have decreed; for You decree and none can decree over You.",
    ur: "اے اللہ! مجھے ہدایت دے ان لوگوں میں جنہیں تو نے ہدایت دی، اور مجھے عافیت دے ان میں جنہیں تو نے عافیت بخشی، اور میری سرپرستی فرما ان میں جن کی تو نے سرپرستی کی، اور مجھے برکت دے اس میں جو تو نے عطا کیا، اور مجھے اس فیصلے کے شر سے بچا جو تو نے کیا، کیونکہ تو ہی فیصلہ کرتا ہے اور تیرے خلاف کوئی فیصلہ نہیں ہو سکتا۔",
    target: 1,
    ref: "Sunan Abi Dawud 1425, Tirmidhi 464 (Sahih)"
  },
  {
    id: "dua-tahajjud",
    cat: "salah",
    title: "Supplication upon Rising for Tahajjud (Night Prayer)",
    ar: "اللَّهُمَّ لَكَ الْحَمْدُ، أَنْتَ نُورُ السَّمَاوَاتِ وَالأَرْضِ وَمَنْ فِيهِنَّ، وَلَكَ الْحَمْدُ أَنْتَ قَيِّمُ السَّمَاوَاتِ وَالأَرْضِ وَمَنْ فِيهِنَّ، أَنْتَ الْحَقُّ وَوَعْدُكَ الْحَقُّ.",
    tr: "Allaahumma lakal-hamd, Anta noorus-samaawaati wal-ardi wa man feehinn, wa lakal-hamdu Anta qayyimus-samaawaati wal-ardi wa man feehinn, Antal-Haqqu wa wa'dukal-haqq.",
    en: "O Allah, to You belongs all praise: You are the Light of the heavens and the earth and whatever is within them. To You belongs all praise: You are the Maintainer of the heavens and the earth and whatever is within them. You are the Truth and Your promise is true.",
    ur: "اے اللہ! تیرے ہی لیے تمام تعریف ہے، تو آسمانوں اور زمین اور ان میں موجود تمام مخلوق کا نور ہے، اور تیرے ہی لیے تمام تعریف ہے، تو آسمانوں اور زمین اور جو کچھ ان میں ہے ان کو قائم رکھنے والا ہے، تو ہی حق ہے اور تیرا وعدہ سچا ہے۔",
    target: 1,
    ref: "Sahih al-Bukhari 1120, Sahih Muslim 769"
  },
  {
    id: "dua-sayyidul-istighfar",
    cat: "forgiveness",
    title: "Sayyidul Istighfar (The Master Supplication for Forgiveness)",
    ar: "اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَىٰ عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ بِذَنْبِي فَاغْفِرْ لِي فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ.",
    tr: "Allaahumma Anta Rabbee laa ilaaha illaa Ant, khalaqtanee wa anaa 'abduk, wa anaa 'alaa 'ahdika wa wa'dika mas-tata'tu, a'oodhu bika min sharri maa sana'tu, aboo'u laka bi-ni'matika 'alayya, wa aboo'u bi-dhanbee faghfir lee fa-innahoo laa yaghfirudh-dhunooba illaa Ant.",
    en: "O Allah, You are my Lord, there is no deity worthy of worship except You. You created me and I am Your servant, and I uphold Your covenant and Your promise as much as I am able. I seek refuge in You from the evil of what I have done. I acknowledge to You Your blessings upon me, and I confess my sins to You; so forgive me, for indeed none forgives sins except You.",
    ur: "اے اللہ! تو میرا رب ہے، تیرے سوا کوئی معبود نہیں، تو نے مجھے پیدا کیا اور میں تیرا بندہ ہوں، اور میں اپنی استطاعت کے مطابق تیرے عہد اور وعدے پر قائم ہوں۔ میں اپنے کیے کے شر سے تیری پناہ مانگتا ہوں، اپنے اوپر تیری نعمتوں کا اعتراف کرتا ہوں اور اپنے گناہوں کا اعتراف کرتا ہوں، پس مجھے بخش دے کیونکہ تیرے سوا کوئی گناہوں کو نہیں بخش سکتا۔",
    target: 1,
    ref: "Sahih al-Bukhari 6306 (Chief of Supplications)"
  },
  {
    id: "dua-quran-dunya-akhirah",
    cat: "quranic",
    title: "Rabbana: Goodness in this Life and the Hereafter",
    ar: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ.",
    tr: "Rabbanaa aatinaa fid-dunyaa hasanatan wa fil-aakhirati hasanatan wa qinaa 'adhaaban-naar.",
    en: "Our Lord, grant us in this world that which is good and in the Hereafter that which is good, and protect us from the punishment of the Fire.",
    ur: "اے ہمارے رب! ہمیں دنیا میں بھی بھلائی عطا فرما اور آخرت میں بھی بھلائی عطا فرما اور ہمیں آگ کے عذاب سے بچا۔",
    target: 3,
    ref: "Surah Al-Baqarah 2:201"
  },
  {
    id: "dua-quran-guidance",
    cat: "quranic",
    title: "Rabbana: Protection from Heart Deviation",
    ar: "رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِنْ لَدُنْكَ رَحْمَةً إِنَّكَ أَنْتَ الْوَهَّابُ.",
    tr: "Rabbanaa laa tuzigh quloobanaa ba'da idh hadaytanaa wa hab lanaa mil-ladunka rahmatah, innaka Antal-Wahhaab.",
    en: "Our Lord, let not our hearts deviate after You have guided us, and grant us from Yourself mercy. Indeed, You are the Bestower.",
    ur: "اے ہمارے رب! ہمارے دلوں کو ٹیڑھا نہ ہونے دے اس کے بعد کہ تو نے ہمیں ہدایت دی، اور ہمیں اپنے پاس سے رحمت عطا فرما، بے شک تو ہی سب سے بڑا عطا فرمانے والا ہے۔",
    target: 1,
    ref: "Surah Ali 'Imran 3:8"
  },
  {
    id: "dua-quran-family",
    cat: "quranic",
    title: "Rabbana: Comfort in Family and Righteous Leadership",
    ar: "رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ وَاجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا.",
    tr: "Rabbanaa hab lanaa min azwaajinaa wa dhurriyyatinaa qurrata a'yunin waj'alnaa lil-muttaqeena imaamaa.",
    en: "Our Lord, grant us from among our spouses and offspring comfort to our eyes and make us an example for the righteous.",
    ur: "اے ہمارے رب! ہمیں ہماری بیویوں اور ہماری اولاد کی طرف سے آنکھوں کی ٹھنڈک عطا فرما اور ہمیں پرہیزگاروں کا پیشوا بنا۔",
    target: 1,
    ref: "Surah Al-Furqan 25:74"
  },
  {
    id: "dua-quran-parents",
    cat: "quranic",
    title: "Supplication of Prophet Ibrahim for Prayer & Parents",
    ar: "رَبِّ اجْعَلْنِي مُقِيمَ الصَّلَاةِ وَمِنْ ذُرِّيَّتِي رَبَّنَا وَتَقَبَّلْ دُعَاءِ، رَبَّنَا اغْفِرْ لِي وَلِوَالِدَيَّ وَلِلْمُؤْمِنِينَ يَوْمَ يَقُومُ الْحِسَابُ.",
    tr: "Rabbij-'alnee muqeemas-Salaati wa min dhurriyyatee, Rabbanaa wa taqabbal du'aa'. Rabbanagh-fir lee wa li-waalidayya wa lil-mu'mineena yawma yaqoomul-hisaab.",
    en: "My Lord, make me steadfast in prayer, and from my descendants. Our Lord, and accept my prayer. Our Lord, forgive me and my parents and the believers the Day the account is established.",
    ur: "اے میرے رب! مجھے نماز قائم کرنے والا بنا اور میری اولاد میں سے بھی، اے ہمارے پروردگار! میری دعا قبول فرما۔ اے ہمارے رب! مجھے بخش دے اور میرے والدین کو اور تمام مومنوں کو جس دن حساب قائم ہو گا۔",
    target: 1,
    ref: "Surah Ibrahim 14:40-41"
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

// Read current data.js
const originalContent = fs.readFileSync('public/js/data.js', 'utf8');

// Parse current data to ensure we keep everything else
const dataSandbox = { window: {} };
vm.createContext(dataSandbox);
vm.runInContext(originalContent, dataSandbox);
const existingData = dataSandbox.window.ISLAMIC_DATA;

console.log('Existing surahs count:', existingData.surahs.length);
console.log('Existing juzList count:', existingData.juzList.length);
console.log('Existing offlineSurahs count:', Object.keys(existingData.offlineSurahs).length);
console.log('Existing kalimas count:', existingData.kalimas.length);

const newData = {
  surahs: existingData.surahs,
  juzList: existingData.juzList,
  offlineSurahs: existingData.offlineSurahs,
  hadiths: updatedHadiths,
  kalimas: existingData.kalimas,
  duas: updatedDuas
};

const newContent = `/**
 * ISLAMIC KNOWLEDGE PORTAL — AUTHENTIC DATASETS
 * Quran 114 Surahs & 30 Juz • Hadith Collections • 6 Kalimas • Duas • Seerah • Pillars
 * Phase 7 Practical Islamic Learning Library
 */

const ISLAMIC_DATA = ${JSON.stringify(newData, null, 2)};

if (typeof window !== 'undefined') {
  window.ISLAMIC_DATA = ISLAMIC_DATA;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = ISLAMIC_DATA;
}
`;

fs.writeFileSync('public/js/data.js', newContent, 'utf8');
console.log('Successfully written updated data.js! File size:', fs.statSync('public/js/data.js').size);

// Validate by loading into VM
const verifySandbox = { window: {} };
vm.createContext(verifySandbox);
vm.runInContext(newContent, verifySandbox);
const verified = verifySandbox.window.ISLAMIC_DATA;
console.log('Verified surahs count:', verified.surahs.length);
console.log('Verified hadiths count:', verified.hadiths.length);
console.log('Verified duas count:', verified.duas.length);
console.log('Verified kalimas count:', verified.kalimas.length);
