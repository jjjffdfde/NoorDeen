/**
 * ISLAMIC KNOWLEDGE PORTAL — AUTHENTIC DATASETS
 * Quran 114 Surahs & 30 Juz • Hadith Collections • 6 Kalimas • Duas • Seerah • Pillars
 */

const ISLAMIC_DATA = {
  surahs: [
    { number: 1, name: "الفَاتِحَة", englishName: "Al-Fatihah", englishNameTranslation: "The Opening", numberOfAyahs: 7, revelationType: "Meccan", juzStart: 1 },
    { number: 2, name: "البَقَرَة", englishName: "Al-Baqarah", englishNameTranslation: "The Cow", numberOfAyahs: 286, revelationType: "Medinan", juzStart: 1 },
    { number: 3, name: "آل عِمْرَان", englishName: "Ali 'Imran", englishNameTranslation: "Family of Imran", numberOfAyahs: 200, revelationType: "Medinan", juzStart: 3 },
    { number: 4, name: "النِّسَاء", englishName: "An-Nisa", englishNameTranslation: "The Women", numberOfAyahs: 176, revelationType: "Medinan", juzStart: 4 },
    { number: 5, name: "المَائِدَة", englishName: "Al-Ma'idah", englishNameTranslation: "The Table Spread", numberOfAyahs: 120, revelationType: "Medinan", juzStart: 6 },
    { number: 6, name: "الأَنْعَام", englishName: "Al-An'am", englishNameTranslation: "The Cattle", numberOfAyahs: 165, revelationType: "Meccan", juzStart: 7 },
    { number: 7, name: "الأَعْرَاف", englishName: "Al-A'raf", englishNameTranslation: "The Heights", numberOfAyahs: 206, revelationType: "Meccan", juzStart: 8 },
    { number: 8, name: "الأَنْفَال", englishName: "Al-Anfal", englishNameTranslation: "The Spoils of War", numberOfAyahs: 75, revelationType: "Medinan", juzStart: 9 },
    { number: 9, name: "التَّوْبَة", englishName: "At-Tawbah", englishNameTranslation: "The Repentance", numberOfAyahs: 129, revelationType: "Medinan", juzStart: 10 },
    { number: 10, name: "يُونُس", englishName: "Yunus", englishNameTranslation: "Jonah", numberOfAyahs: 109, revelationType: "Meccan", juzStart: 11 },
    { number: 11, name: "هُود", englishName: "Hud", englishNameTranslation: "Hud", numberOfAyahs: 123, revelationType: "Meccan", juzStart: 11 },
    { number: 12, name: "يُوسُف", englishName: "Yusuf", englishNameTranslation: "Joseph", numberOfAyahs: 111, revelationType: "Meccan", juzStart: 12 },
    { number: 13, name: "الرَّعْد", englishName: "Ar-Ra'd", englishNameTranslation: "The Thunder", numberOfAyahs: 43, revelationType: "Medinan", juzStart: 13 },
    { number: 14, name: "إِبْرَاهِيم", englishName: "Ibrahim", englishNameTranslation: "Abraham", numberOfAyahs: 52, revelationType: "Meccan", juzStart: 13 },
    { number: 15, name: "الحِجْر", englishName: "Al-Hijr", englishNameTranslation: "The Rocky Tract", numberOfAyahs: 99, revelationType: "Meccan", juzStart: 14 },
    { number: 16, name: "النَّحْل", englishName: "An-Nahl", englishNameTranslation: "The Bee", numberOfAyahs: 128, revelationType: "Meccan", juzStart: 14 },
    { number: 17, name: "الإِسْرَاء", englishName: "Al-Isra", englishNameTranslation: "The Night Journey", numberOfAyahs: 111, revelationType: "Meccan", juzStart: 15 },
    { number: 18, name: "الكَهْف", englishName: "Al-Kahf", englishNameTranslation: "The Cave", numberOfAyahs: 110, revelationType: "Meccan", juzStart: 15 },
    { number: 19, name: "مَرْيَم", englishName: "Maryam", englishNameTranslation: "Mary", numberOfAyahs: 98, revelationType: "Meccan", juzStart: 16 },
    { number: 20, name: "طه", englishName: "Taha", englishNameTranslation: "Ta-Ha", numberOfAyahs: 135, revelationType: "Meccan", juzStart: 16 },
    { number: 21, name: "الأَنْبِيَاء", englishName: "Al-Anbiya", englishNameTranslation: "The Prophets", numberOfAyahs: 112, revelationType: "Meccan", juzStart: 17 },
    { number: 22, name: "الحَجّ", englishName: "Al-Hajj", englishNameTranslation: "The Pilgrimage", numberOfAyahs: 78, revelationType: "Medinan", juzStart: 17 },
    { number: 23, name: "المُؤْمِنُون", englishName: "Al-Mu'minun", englishNameTranslation: "The Believers", numberOfAyahs: 118, revelationType: "Meccan", juzStart: 18 },
    { number: 24, name: "النُّور", englishName: "An-Nur", englishNameTranslation: "The Light", numberOfAyahs: 64, revelationType: "Medinan", juzStart: 18 },
    { number: 25, name: "الفُرْقَان", englishName: "Al-Furqan", englishNameTranslation: "The Criterion", numberOfAyahs: 77, revelationType: "Meccan", juzStart: 18 },
    { number: 26, name: "الشُّعَرَاء", englishName: "Ash-Shu'ara", englishNameTranslation: "The Poets", numberOfAyahs: 227, revelationType: "Meccan", juzStart: 19 },
    { number: 27, name: "النَّمْل", englishName: "An-Naml", englishNameTranslation: "The Ant", numberOfAyahs: 93, revelationType: "Meccan", juzStart: 19 },
    { number: 28, name: "القَصَص", englishName: "Al-Qasas", englishNameTranslation: "The Stories", numberOfAyahs: 88, revelationType: "Meccan", juzStart: 20 },
    { number: 29, name: "العَنْكَبُوت", englishName: "Al-'Ankabut", englishNameTranslation: "The Spider", numberOfAyahs: 69, revelationType: "Meccan", juzStart: 20 },
    { number: 30, name: "الرُّوم", englishName: "Ar-Rum", englishNameTranslation: "The Romans", numberOfAyahs: 60, revelationType: "Meccan", juzStart: 21 },
    { number: 31, name: "لُقْمَان", englishName: "Luqman", englishNameTranslation: "Luqman", numberOfAyahs: 34, revelationType: "Meccan", juzStart: 21 },
    { number: 32, name: "السَّجْدَة", englishName: "As-Sajdah", englishNameTranslation: "The Prostration", numberOfAyahs: 30, revelationType: "Meccan", juzStart: 21 },
    { number: 33, name: "الأَحْزَاب", englishName: "Al-Ahzab", englishNameTranslation: "The Combined Forces", numberOfAyahs: 73, revelationType: "Medinan", juzStart: 21 },
    { number: 34, name: "سَبَأ", englishName: "Saba", englishNameTranslation: "Sheba", numberOfAyahs: 54, revelationType: "Meccan", juzStart: 22 },
    { number: 35, name: "فَاطِر", englishName: "Fatir", englishNameTranslation: "Originator", numberOfAyahs: 45, revelationType: "Meccan", juzStart: 22 },
    { number: 36, name: "يس", englishName: "Ya-Sin", englishNameTranslation: "Ya Sin", numberOfAyahs: 83, revelationType: "Meccan", juzStart: 22 },
    { number: 37, name: "الصَّافَّات", englishName: "As-Saffat", englishNameTranslation: "Those who set the Ranks", numberOfAyahs: 182, revelationType: "Meccan", juzStart: 23 },
    { number: 38, name: "ص", englishName: "Sad", englishNameTranslation: "The Letter Sad", numberOfAyahs: 88, revelationType: "Meccan", juzStart: 23 },
    { number: 39, name: "الزُّمَر", englishName: "Az-Zumar", englishNameTranslation: "The Troops", numberOfAyahs: 75, revelationType: "Meccan", juzStart: 23 },
    { number: 40, name: "غَافِر", englishName: "Ghafir", englishNameTranslation: "The Forgiver", numberOfAyahs: 85, revelationType: "Meccan", juzStart: 24 },
    { number: 41, name: "فُصِّلَت", englishName: "Fussilat", englishNameTranslation: "Explained in Detail", numberOfAyahs: 54, revelationType: "Meccan", juzStart: 24 },
    { number: 42, name: "الشُّورَى", englishName: "Ash-Shura", englishNameTranslation: "The Consultation", numberOfAyahs: 53, revelationType: "Meccan", juzStart: 25 },
    { number: 43, name: "الزُّخْرُف", englishName: "Az-Zukhruf", englishNameTranslation: "The Ornaments of Gold", numberOfAyahs: 89, revelationType: "Meccan", juzStart: 25 },
    { number: 44, name: "الدُّخَان", englishName: "Ad-Dukhan", englishNameTranslation: "The Smoke", numberOfAyahs: 59, revelationType: "Meccan", juzStart: 25 },
    { number: 45, name: "الجَاثِيَة", englishName: "Al-Jathiyah", englishNameTranslation: "The Crouching", numberOfAyahs: 37, revelationType: "Meccan", juzStart: 25 },
    { number: 46, name: "الأَحْقَاف", englishName: "Al-Ahqaf", englishNameTranslation: "The Wind-Curved Sandhills", numberOfAyahs: 35, revelationType: "Meccan", juzStart: 26 },
    { number: 47, name: "مُحَمَّد", englishName: "Muhammad", englishNameTranslation: "Muhammad", numberOfAyahs: 38, revelationType: "Medinan", juzStart: 26 },
    { number: 48, name: "الفَتْح", englishName: "Al-Fath", englishNameTranslation: "The Victory", numberOfAyahs: 29, revelationType: "Medinan", juzStart: 26 },
    { number: 49, name: "الحُجُرَات", englishName: "Al-Hujurat", englishNameTranslation: "The Rooms", numberOfAyahs: 18, revelationType: "Medinan", juzStart: 26 },
    { number: 50, name: "ق", englishName: "Qaf", englishNameTranslation: "The Letter Qaf", numberOfAyahs: 45, revelationType: "Meccan", juzStart: 26 },
    { number: 51, name: "الذَّارِيَات", englishName: "Adh-Dhariyat", englishNameTranslation: "The Winnowing Winds", numberOfAyahs: 60, revelationType: "Meccan", juzStart: 26 },
    { number: 52, name: "الطُّور", englishName: "At-Tur", englishNameTranslation: "The Mount", numberOfAyahs: 49, revelationType: "Meccan", juzStart: 27 },
    { number: 53, name: "النَّجْم", englishName: "An-Najm", englishNameTranslation: "The Star", numberOfAyahs: 62, revelationType: "Meccan", juzStart: 27 },
    { number: 54, name: "القَمَر", englishName: "Al-Qamar", englishNameTranslation: "The Moon", numberOfAyahs: 55, revelationType: "Meccan", juzStart: 27 },
    { number: 55, name: "الرَّحْمَن", englishName: "Ar-Rahman", englishNameTranslation: "The Beneficent", numberOfAyahs: 78, revelationType: "Medinan", juzStart: 27 },
    { number: 56, name: "الوَاقِعَة", englishName: "Al-Waqi'ah", englishNameTranslation: "The Inevitable", numberOfAyahs: 96, revelationType: "Meccan", juzStart: 27 },
    { number: 57, name: "الحَدِيد", englishName: "Al-Hadid", englishNameTranslation: "The Iron", numberOfAyahs: 29, revelationType: "Medinan", juzStart: 27 },
    { number: 58, name: "المُجَادِلَة", englishName: "Al-Mujadila", englishNameTranslation: "The Pleading Woman", numberOfAyahs: 22, revelationType: "Medinan", juzStart: 28 },
    { number: 59, name: "الحَشْر", englishName: "Al-Hashr", englishNameTranslation: "The Exile", numberOfAyahs: 24, revelationType: "Medinan", juzStart: 28 },
    { number: 60, name: "المُمْتَحَنَة", englishName: "Al-Mumtahanah", englishNameTranslation: "She that is to be examined", numberOfAyahs: 13, revelationType: "Medinan", juzStart: 28 },
    { number: 61, name: "الصَّفّ", englishName: "As-Saff", englishNameTranslation: "The Ranks", numberOfAyahs: 14, revelationType: "Medinan", juzStart: 28 },
    { number: 62, name: "الجُمُعَة", englishName: "Al-Jumu'ah", englishNameTranslation: "Friday", numberOfAyahs: 11, revelationType: "Medinan", juzStart: 28 },
    { number: 63, name: "المُنَافِقُون", englishName: "Al-Munafiqun", englishNameTranslation: "The Hypocrites", numberOfAyahs: 11, revelationType: "Medinan", juzStart: 28 },
    { number: 64, name: "التَّغَابُن", englishName: "At-Taghabun", englishNameTranslation: "The Mutual Disillusion", numberOfAyahs: 18, revelationType: "Medinan", juzStart: 28 },
    { number: 65, name: "الطَّلَاق", englishName: "At-Talaq", englishNameTranslation: "The Divorce", numberOfAyahs: 12, revelationType: "Medinan", juzStart: 28 },
    { number: 66, name: "التَّحْرِيم", englishName: "At-Tahrim", englishNameTranslation: "The Prohibition", numberOfAyahs: 12, revelationType: "Medinan", juzStart: 28 },
    { number: 67, name: "المُلْك", englishName: "Al-Mulk", englishNameTranslation: "The Sovereignty", numberOfAyahs: 30, revelationType: "Meccan", juzStart: 29 },
    { number: 68, name: "القَلَم", englishName: "Al-Qalam", englishNameTranslation: "The Pen", numberOfAyahs: 52, revelationType: "Meccan", juzStart: 29 },
    { number: 69, name: "الحَاقَّة", englishName: "Al-Haqqah", englishNameTranslation: "The Reality", numberOfAyahs: 52, revelationType: "Meccan", juzStart: 29 },
    { number: 70, name: "المَعَارِج", englishName: "Al-Ma'arij", englishNameTranslation: "The Ascending Stairways", numberOfAyahs: 44, revelationType: "Meccan", juzStart: 29 },
    { number: 71, name: "نُوح", englishName: "Nuh", englishNameTranslation: "Noah", numberOfAyahs: 28, revelationType: "Meccan", juzStart: 29 },
    { number: 72, name: "الجِنّ", englishName: "Al-Jinn", englishNameTranslation: "The Jinn", numberOfAyahs: 28, revelationType: "Meccan", juzStart: 29 },
    { number: 73, name: "المُزَّمِّل", englishName: "Al-Muzzammil", englishNameTranslation: "The Enshrouded One", numberOfAyahs: 20, revelationType: "Meccan", juzStart: 29 },
    { number: 74, name: "المُدَّثِّر", englishName: "Al-Muddaththir", englishNameTranslation: "The Cloaked One", numberOfAyahs: 56, revelationType: "Meccan", juzStart: 29 },
    { number: 75, name: "القِيَامَة", englishName: "Al-Qiyamah", englishNameTranslation: "The Resurrection", numberOfAyahs: 40, revelationType: "Meccan", juzStart: 29 },
    { number: 76, name: "الإِنْسَان", englishName: "Al-Insan", englishNameTranslation: "Man", numberOfAyahs: 31, revelationType: "Medinan", juzStart: 29 },
    { number: 77, name: "المُرْسَلَات", englishName: "Al-Mursalat", englishNameTranslation: "The Emissaries", numberOfAyahs: 50, revelationType: "Meccan", juzStart: 29 },
    { number: 78, name: "النَّبَأ", englishName: "An-Naba", englishNameTranslation: "The Tidings", numberOfAyahs: 40, revelationType: "Meccan", juzStart: 30 },
    { number: 79, name: "النَّازِعَات", englishName: "An-Nazi'at", englishNameTranslation: "Those who drag forth", numberOfAyahs: 46, revelationType: "Meccan", juzStart: 30 },
    { number: 80, name: "عَبَسَ", englishName: "'Abasa", englishNameTranslation: "He Frowned", numberOfAyahs: 42, revelationType: "Meccan", juzStart: 30 },
    { number: 81, name: "التَّكْوِير", englishName: "At-Takwir", englishNameTranslation: "The Overthrowing", numberOfAyahs: 29, revelationType: "Meccan", juzStart: 30 },
    { number: 82, name: "الانْفِطَار", englishName: "Al-Infitar", englishNameTranslation: "The Cleaving", numberOfAyahs: 19, revelationType: "Meccan", juzStart: 30 },
    { number: 83, name: "المُطَفِّفِين", englishName: "Al-Mutaffifin", englishNameTranslation: "The Defrauding", numberOfAyahs: 36, revelationType: "Meccan", juzStart: 30 },
    { number: 84, name: "الانْشِقَاق", englishName: "Al-Inshiqaq", englishNameTranslation: "The Splitting Open", numberOfAyahs: 25, revelationType: "Meccan", juzStart: 30 },
    { number: 85, name: "البُرُوج", englishName: "Al-Buruj", englishNameTranslation: "The Mansions of the Stars", numberOfAyahs: 22, revelationType: "Meccan", juzStart: 30 },
    { number: 86, name: "الطَّارِق", englishName: "At-Tariq", englishNameTranslation: "The Morning Star", numberOfAyahs: 17, revelationType: "Meccan", juzStart: 30 },
    { number: 87, name: "الأَعْلَى", englishName: "Al-A'la", englishNameTranslation: "The Most High", numberOfAyahs: 19, revelationType: "Meccan", juzStart: 30 },
    { number: 88, name: "الغَاشِيَة", englishName: "Al-Ghashiyah", englishNameTranslation: "The Overwhelming", numberOfAyahs: 26, revelationType: "Meccan", juzStart: 30 },
    { number: 89, name: "الفَجْر", englishName: "Al-Fajr", englishNameTranslation: "The Dawn", numberOfAyahs: 30, revelationType: "Meccan", juzStart: 30 },
    { number: 90, name: "البَلَد", englishName: "Al-Balad", englishNameTranslation: "The City", numberOfAyahs: 20, revelationType: "Meccan", juzStart: 30 },
    { number: 91, name: "الشَّمْس", englishName: "Ash-Shams", englishNameTranslation: "The Sun", numberOfAyahs: 15, revelationType: "Meccan", juzStart: 30 },
    { number: 92, name: "اللَّيْل", englishName: "Al-Layl", englishNameTranslation: "The Night", numberOfAyahs: 21, revelationType: "Meccan", juzStart: 30 },
    { number: 93, name: "الضُّحَى", englishName: "Ad-Duha", englishNameTranslation: "The Morning Hours", numberOfAyahs: 11, revelationType: "Meccan", juzStart: 30 },
    { number: 94, name: "الشَّرْح", englishName: "Ash-Sharh", englishNameTranslation: "The Relief", numberOfAyahs: 8, revelationType: "Meccan", juzStart: 30 },
    { number: 95, name: "التِّين", englishName: "At-Tin", englishNameTranslation: "The Fig", numberOfAyahs: 8, revelationType: "Meccan", juzStart: 30 },
    { number: 96, name: "العَلَق", englishName: "Al-'Alaq", englishNameTranslation: "The Clot", numberOfAyahs: 19, revelationType: "Meccan", juzStart: 30 },
    { number: 97, name: "القَدْر", englishName: "Al-Qadr", englishNameTranslation: "The Power", numberOfAyahs: 5, revelationType: "Meccan", juzStart: 30 },
    { number: 98, name: "البَيِّنَة", englishName: "Al-Bayyinah", englishNameTranslation: "The Clear Proof", numberOfAyahs: 8, revelationType: "Medinan", juzStart: 30 },
    { number: 99, name: "الزَّلْزَلَة", englishName: "Az-Zalzalah", englishNameTranslation: "The Earthquake", numberOfAyahs: 8, revelationType: "Medinan", juzStart: 30 },
    { number: 100, name: "العَادِيَات", englishName: "Al-'Adiyat", englishNameTranslation: "The Courser", numberOfAyahs: 11, revelationType: "Meccan", juzStart: 30 },
    { number: 101, name: "القَارِعَة", englishName: "Al-Qari'ah", englishNameTranslation: "The Calamity", numberOfAyahs: 11, revelationType: "Meccan", juzStart: 30 },
    { number: 102, name: "التَّكَاثُر", englishName: "At-Takathur", englishNameTranslation: "The Rivalry in World Increase", numberOfAyahs: 8, revelationType: "Meccan", juzStart: 30 },
    { number: 103, name: "العَصْر", englishName: "Al-'Asr", englishNameTranslation: "The Declining Day", numberOfAyahs: 3, revelationType: "Meccan", juzStart: 30 },
    { number: 104, name: "الهُمَزَة", englishName: "Al-Humazah", englishNameTranslation: "The Traducer", numberOfAyahs: 9, revelationType: "Meccan", juzStart: 30 },
    { number: 105, name: "الفِيل", englishName: "Al-Fil", englishNameTranslation: "The Elephant", numberOfAyahs: 5, revelationType: "Meccan", juzStart: 30 },
    { number: 106, name: "قُرَيْش", englishName: "Quraysh", englishNameTranslation: "Quraysh", numberOfAyahs: 4, revelationType: "Meccan", juzStart: 30 },
    { number: 107, name: "المَاعُون", englishName: "Al-Ma'un", englishNameTranslation: "The Small Kindnesses", numberOfAyahs: 7, revelationType: "Meccan", juzStart: 30 },
    { number: 108, name: "الكَوْثَر", englishName: "Al-Kawthar", englishNameTranslation: "The Abundance", numberOfAyahs: 3, revelationType: "Meccan", juzStart: 30 },
    { number: 109, name: "الكَافِرُون", englishName: "Al-Kafirun", englishNameTranslation: "The Disbelievers", numberOfAyahs: 6, revelationType: "Meccan", juzStart: 30 },
    { number: 110, name: "النَّصْر", englishName: "An-Nasr", englishNameTranslation: "The Divine Support", numberOfAyahs: 3, revelationType: "Medinan", juzStart: 30 },
    { number: 111, name: "المَسَد", englishName: "Al-Masad", englishNameTranslation: "The Palm Fiber", numberOfAyahs: 5, revelationType: "Meccan", juzStart: 30 },
    { number: 112, name: "الإِخْلَاص", englishName: "Al-Ikhlas", englishNameTranslation: "The Sincerity", numberOfAyahs: 4, revelationType: "Meccan", juzStart: 30 },
    { number: 113, name: "الفَلَق", englishName: "Al-Falaq", englishNameTranslation: "The Daybreak", numberOfAyahs: 5, revelationType: "Meccan", juzStart: 30 },
    { number: 114, name: "النَّاس", englishName: "An-Nas", englishNameTranslation: "Mankind", numberOfAyahs: 6, revelationType: "Meccan", juzStart: 30 }
  ],

  offlineSurahs: {
    1: {
      number: 1,
      name: "الفَاتِحَة",
      englishName: "Al-Fatihah",
      englishNameTranslation: "The Opening",
      numberOfAyahs: 7,
      bismillahPre: false,
      ayahs: [
        { num: 1, ar: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ", en: "In the name of Allah, the Entirely Merciful, the Especially Merciful.", ur: "شروع اللہ کا نام لے کر جو بڑا مہربان نہایت رحم والا ہے۔", tr: "Bismillaahir Rahmaanir Raheem", audio: "001001.mp3" },
        { num: 2, ar: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ", en: "[All] praise is [due] to Allah, Lord of the worlds -", ur: "سب طرح کی تعریف خدا ہی کو (سزاوار) ہے جو تمام مخلوقات کا پروردگار ہے۔", tr: "Alhamdu lillaahi Rabbil 'aalameen", audio: "001002.mp3" },
        { num: 3, ar: "الرَّحْمَٰنِ الرَّحِيمِ", en: "The Entirely Merciful, the Especially Merciful,", ur: "بڑا مہربان نہایت رحم والا۔", tr: "Ar-Rahmaanir-Raheem", audio: "001003.mp3" },
        { num: 4, ar: "مَالِكِ يَوْمِ الدِّينِ", en: "Sovereign of the Day of Recompense.", ur: "انصاف کے دن کا حاکم۔", tr: "Maaliki Yawmid-Deen", audio: "001004.mp3" },
        { num: 5, ar: "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ", en: "It is You we worship and You we ask for help.", ur: "(اے پروردگار) ہم تیری ہی عبادت کرتے ہیں اور تجھ ہی سے مدد مانگتے ہیں۔", tr: "Iyyaaka na'budu wa lyyaaka nasta'een", audio: "001005.mp3" },
        { num: 6, ar: "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ", en: "Guide us to the straight path -", ur: "ہم کو سیدھے رستے پر چلا۔", tr: "Ihdinas-Siraatal-Mustaqeem", audio: "001006.mp3" },
        { num: 7, ar: "صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ", en: "The path of those upon whom You have bestowed favor, not of those who have evoked [Your] anger or of those who are astray.", ur: "ان لوگوں کے رستے جن پر تو اپنا فضل و کرم کرتا رہا، نہ ان کے جن پر غضب ہوا اور نہ گمراہوں کے۔", tr: "Siraatal-ladheena an'amta 'alayhim ghayril-maghdoobi 'alayhim wa lad-daalleen", audio: "001007.mp3" }
      ]
    },
    36: {
      number: 36,
      name: "يس",
      englishName: "Ya-Sin",
      englishNameTranslation: "Ya Sin",
      numberOfAyahs: 83,
      bismillahPre: true,
      ayahs: [
        { num: 1, ar: "يس", en: "Ya, Seen.", ur: "یسٓ۔", tr: "Yaa-Seeen", audio: "036001.mp3" },
        { num: 2, ar: "وَالْقُرْآنِ الْحَكِيمِ", en: "By the wise Qur'an.", ur: "حکمت والے قرآن کی قسم۔", tr: "Wal-Qur-aanil-Hakeem", audio: "036002.mp3" },
        { num: 3, ar: "إِنَّكَ لَمِنَ الْمُرْسَلِينَ", en: "Indeed you, [O Muhammad], are from among the messengers,", ur: "کہ بے شک آپ پیغمبروں میں سے ہیں۔", tr: "Innaka laminal mursaleen", audio: "036003.mp3" },
        { num: 4, ar: "عَلَىٰ صِرَاطٍ مُسْتَقِيمٍ", en: "On a straight path.", ur: "سیدھے رستے پر۔", tr: "'Alaa Siraatim Mustaqeem", audio: "036004.mp3" },
        { num: 5, ar: "تَنْزِيلَ الْعَزِيزِ الرَّحِيمِ", en: "[This is] a revelation of the Exalted in Might, the Merciful,", ur: "یہ غالب اور مہربان خدا کا اتارا ہوا ہے۔", tr: "Tanzeelal 'Azeezir Raheem", audio: "036005.mp3" },
        { num: 6, ar: "لِتُنْذِرَ قَوْمًا مَا أُنْذِرَ آبَاؤُهُمْ فَهُمْ غَافِلُونَ", en: "That you may warn a people whose forefathers were not warned, so they are unaware.", ur: "تاکہ تم ان لوگوں کو ڈراؤ جن کے باپ دادا کو نہیں ڈرایا گیا تھا تو وہ بے خبر ہیں۔", tr: "Litunzira qawmam maaa unzira aabaaa'uhum fahum ghaafiloon", audio: "036006.mp3" }
      ]
    },
    67: {
      number: 67,
      name: "المُلْك",
      englishName: "Al-Mulk",
      englishNameTranslation: "The Sovereignty",
      numberOfAyahs: 30,
      bismillahPre: true,
      ayahs: [
        { num: 1, ar: "تَبَارَكَ الَّذِي بِيَدِهِ الْمُلْكُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ", en: "Blessed is He in whose hand is dominion, and He is over all things competent -", ur: "بڑی برکت والا ہے وہ جس کے ہاتھ میں بادشاہی ہے اور وہ ہر چیز پر قادر ہے۔", tr: "Tabaarakal lazee biyadihil mulku wa huwa 'alaa kulli shai'in qadeer", audio: "067001.mp3" },
        { num: 2, ar: "الَّذِي خَلَقَ الْمَوْتَ وَالْحَيَاةَ لِيَبْلُوَكُمْ أَيُّكُمْ أَحْسَنُ عَمَلًا ۚ وَهُوَ الْعَزِيزُ الْغَفُورُ", en: "[He] who created death and life to test you [as to] which of you is best in deed - and He is the Exalted in Might, the Forgiving -", ur: "جس نے موت اور زندگی کو پیدا کیا تاکہ تمہیں آزمائے کہ تم میں کس کے عمل اچھے ہیں اور وہ غالب اور بخشنے والا ہے۔", tr: "Allazee khalaqal mawta walhayaata liyabluwakum ayyukum ahsanu 'amalaa", audio: "067002.mp3" },
        { num: 3, ar: "الَّذِي خَلَقَ سَبْعَ سَمَاوَاتٍ طِبَاقًا ۖ مَّا تَرَىٰ فِي خَلْقِ الرَّحْمَٰنِ مِن تَفَاوُتٍ", en: "[And] who created seven heavens in layers. You do not see in the creation of the Most Merciful any inconsistency.", ur: "جس نے سات آسمان اوپر تلے بنائے۔ تو رحمٰن کی آفرینش میں کوئی نقص نہ دیکھے گا۔", tr: "Allazee khalaqa sab'a samaawaatin tibaaqan", audio: "067003.mp3" },
        { num: 4, ar: "ثُمَّ ارْجِعِ الْبَصَرَ كَرَّتَيْنِ يَنقَلِبْ إِلَيْكَ الْبَصَرُ خَاسِئًا وَهُوَ حَسِيرٌ", en: "Then return [your] vision twice again. [Your] vision will return to you humbled while it is fatigued.", ur: "پھر بار بار نگاہ کر، نگاہ تیری طرف ناکام اور تھک کر پلٹ آئے گی۔", tr: "Summar ji'il basara karratayni yanqalib ilaykal basaru khaasi'anw-wa huwa haseer", audio: "067004.mp3" }
      ]
    },
    112: {
      number: 112,
      name: "الإِخْلَاص",
      englishName: "Al-Ikhlas",
      englishNameTranslation: "The Sincerity",
      numberOfAyahs: 4,
      bismillahPre: true,
      ayahs: [
        { num: 1, ar: "قُلْ هُوَ اللَّهُ أَحَدٌ", en: "Say, \"He is Allah, [who is] One,", ur: "کہو کہ وہ (ذات پاک جس کا نام) اللہ (ہے) ایک ہے۔", tr: "Qul Huwal-laahu Ahad", audio: "112001.mp3" },
        { num: 2, ar: "اللَّهُ الصَّمَدُ", en: "Allah, the Eternal Refuge.", ur: "معبود برحق جو بےنیاز ہے۔", tr: "Allaahus-Samad", audio: "112002.mp3" },
        { num: 3, ar: "لَمْ يَلِدْ وَلَمْ يُولَدْ", en: "He neither begets nor is born,", ur: "نہ کسی کا باپ ہے اور نہ کسی کا بیٹا۔", tr: "Lam yalid wa lam yoolad", audio: "112003.mp3" },
        { num: 4, ar: "وَلَمْ يَكُنْ لَهُ كُفُوًا أَحَدٌ", en: "Nor is there to Him any equivalent.\"", ur: "اور کوئی اس کا ہمسر نہیں۔", tr: "Wa lam yakul-lahoo kufuwan ahad", audio: "112004.mp3" }
      ]
    },
    113: {
      number: 113,
      name: "الفَلَق",
      englishName: "Al-Falaq",
      englishNameTranslation: "The Daybreak",
      numberOfAyahs: 5,
      bismillahPre: true,
      ayahs: [
        { num: 1, ar: "قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ", en: "Say, \"I seek refuge in the Lord of daybreak", ur: "کہو کہ میں صبح کے مالک کی پناہ مانگتا ہوں۔", tr: "Qul a'oozu bi rabbil-falaq", audio: "113001.mp3" },
        { num: 2, ar: "مِنْ شَرِّ مَا خَلَقَ", en: "From the evil of that which He created", ur: "ہر چیز کی برائی سے جو اس نے پیدا کی۔", tr: "Min sharri maa khalaq", audio: "113002.mp3" },
        { num: 3, ar: "وَمِنْ شَرِّ غَاسِقٍ إِذَا وَقَبَ", en: "And from the evil of darkness when it settles", ur: "اور اندھیری رات کی برائی سے جب اس کا اندھیرا چھا جائے۔", tr: "Wa min sharri ghaasiqin izaa waqab", audio: "113003.mp3" },
        { num: 4, ar: "وَمِنْ شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ", en: "And from the evil of the blowers in knots", ur: "اور گنڈوں پر (پڑھ پڑھ کر) پھونکنے والیوں کی برائی سے۔", tr: "Wa min sharrin-naffaasaati fil 'uqad", audio: "113004.mp3" },
        { num: 5, ar: "وَمِنْ شَرِّ حَاسِدٍ إِذَا حَسَدَ", en: "And from the evil of an envier when he envies.\"", ur: "اور حسد کرنے والے کی برائی سے جب حسد کرنے لگے۔", tr: "Wa min sharri haasidin izaa hasad", audio: "113005.mp3" }
      ]
    },
    114: {
      number: 114,
      name: "النَّاس",
      englishName: "An-Nas",
      englishNameTranslation: "Mankind",
      numberOfAyahs: 6,
      bismillahPre: true,
      ayahs: [
        { num: 1, ar: "قُلْ أَعُوذُ بِرَبِّ النَّاسِ", en: "Say, \"I seek refuge in the Lord of mankind,", ur: "کہو کہ میں لوگوں کے پروردگار کی پناہ مانگتا ہوں۔", tr: "Qul a'oozu bi rabbin-naas", audio: "114001.mp3" },
        { num: 2, ar: "مَلِكِ النَّاسِ", en: "The Sovereign of mankind,", ur: "(یعنی) لوگوں کے بادشاہ کی۔", tr: "Malikin-naas", audio: "114002.mp3" },
        { num: 3, ar: "إِلَٰهِ النَّاسِ", en: "The God of mankind,", ur: "لوگوں کے معبود برحق کی۔", tr: "Ilaahin-naas", audio: "114003.mp3" },
        { num: 4, ar: "مِنْ شَرِّ الْوَسْوَاسِ الْخَنَّاسِ", en: "From the evil of the retreating whisperer -", ur: "وسوسہ ڈالنے والے (اور پناہ لینے کے وقت) پیچھے ہٹ جانے والے شیطان کی برائی سے۔", tr: "Min sharril-waswaasil khannaas", audio: "114004.mp3" },
        { num: 5, ar: "الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ", en: "Who whispers [evil] into the breasts of mankind -", ur: "جو لوگوں کے دلوں میں وسوسے ڈالتا ہے۔", tr: "Allazee yuwaswisu fee sudoorin-naas", audio: "114005.mp3" },
        { num: 6, ar: "مِنَ الْجِنَّةِ وَالنَّاسِ", en: "From among the jinn and mankind.\"", ur: "خواہ وہ جنات میں سے ہو یا انسانوں میں سے۔", tr: "Minal-jinnati wan-naas", audio: "114006.mp3" }
      ]
    },
    97: {
      number: 97,
      name: "القَدْر",
      englishName: "Al-Qadr",
      englishNameTranslation: "The Power",
      numberOfAyahs: 5,
      bismillahPre: true,
      ayahs: [
        { num: 1, ar: "إِنَّا أَنزَلْنَاهُ فِي لَيْلَةِ الْقَدْرِ", en: "Indeed, We sent the Qur'an down during the Night of Decree.", ur: "بے شک ہم نے اس (قرآن) کو شب قدر میں نازل فرمایا۔", tr: "Innaaa anzalnaahu fee laylatil qadr", audio: "097001.mp3" },
        { num: 2, ar: "وَمَا أَدْرَاكَ مَا لَيْلَةُ الْقَدْرِ", en: "And what can make you know what is the Night of Decree?", ur: "اور آپ کو کیا معلوم کہ شب قدر کیا ہے؟", tr: "Wa maaa adraaka maa laylatul qadr", audio: "097002.mp3" },
        { num: 3, ar: "لَيْلَةُ الْقَدْرِ خَيْرٌ مِّنْ أَلْفِ شَهْرٍ", en: "The Night of Decree is better than a thousand months.", ur: "شب قدر ہزار مہینوں سے بہتر ہے۔", tr: "Laylatul qadri khayrum min alfee shahr", audio: "097003.mp3" },
        { num: 4, ar: "تَنَزَّلُ الْمَلَائِكَةُ وَالرُّوحُ فِيهَا بِإِذْنِ رَبِّهِم مِّن كُلِّ أَمْرٍ", en: "The angels and the Spirit descend therein by permission of their Lord for every matter.", ur: "اس میں فرشتے اور روح (جبریل) اپنے رب کے حکم سے ہر کام کے لیے اترتے ہیں۔", tr: "Tanazzalul malaaa'ikatu war roohu feeha bi izni rabbihim min kulli amr", audio: "097004.mp3" },
        { num: 5, ar: "سَلَامٌ هِيَ حَتَّىٰ مَطْلَعِ الْفَجْرِ", en: "Peace it is until the emergence of dawn.", ur: "یہ (رات) طلوع فجر تک سراسر سلامتی ہے۔", tr: "Salaamun hiya hattaa matla'il fajr", audio: "097005.mp3" }
      ]
    },
    108: {
      number: 108,
      name: "الكَوْثَر",
      englishName: "Al-Kawthar",
      englishNameTranslation: "The Abundance",
      numberOfAyahs: 3,
      bismillahPre: true,
      ayahs: [
        { num: 1, ar: "إِنَّا أَعْطَيْنَاكَ الْكَوْثَرَ", en: "Indeed, We have granted you, [O Muhammad], al-Kawthar.", ur: "بے شک ہم نے آپ کو کوثر عطا فرمائی۔", tr: "Innaaa a'taynaakal kawthar", audio: "108001.mp3" },
        { num: 2, ar: "فَصَلِّ لِرَبِّكَ وَانْحَرْ", en: "So pray to your Lord and sacrifice [to Him alone].", ur: "پس اپنے رب کے لیے نماز پڑھیے اور قربانی کیجیے۔", tr: "Fasalli li rabbika wanhar", audio: "108002.mp3" },
        { num: 3, ar: "إِنَّ شَانِئَكَ هُوَ الْأَبْتَرُ", en: "Indeed, your enemy is the one cut off.", ur: "بے شک آپ کا دشمن ہی بے نام و نشان رہنے والا ہے۔", tr: "Inna shaani'aka huwal abtar", audio: "108003.mp3" }
      ]
    },
    109: {
      number: 109,
      name: "الكَافِرُون",
      englishName: "Al-Kafirun",
      englishNameTranslation: "The Disbelievers",
      numberOfAyahs: 6,
      bismillahPre: true,
      ayahs: [
        { num: 1, ar: "قُلْ يَا أَيُّهَا الْكَافِرُونَ", en: "Say, \"O disbelievers,", ur: "کہہ دیجیے کہ اے کافرو!", tr: "Qul yaaa ayyuhal kaafiroon", audio: "109001.mp3" },
        { num: 2, ar: "لَا أَعْبُدُ مَا تَعْبُدُونَ", en: "I do not worship what you worship.", ur: "میں ان کی عبادت نہیں کرتا جن کی تم عبادت کرتے ہو۔", tr: "Laaa a'budu maa ta'budoon", audio: "109002.mp3" },
        { num: 3, ar: "وَلَا أَنتُمْ عَابِدُونَ مَا أَعْبُدُ", en: "Nor are you worshippers of what I worship.", ur: "اور نہ تم اس کی عبادت کرنے والے ہو جس کی میں عبادت کرتا ہوں۔", tr: "Wa laaa antum 'aabidoona maaa a'bud", audio: "109003.mp3" },
        { num: 4, ar: "وَلَا أَنَا عَابِدٌ مَّا عَبَدتُّمْ", en: "Nor will I be a worshipper of what you worship.", ur: "اور نہ میں ان کی عبادت کرنے والا ہوں جن کی تم نے عبادت کی۔", tr: "Wa laaa ana 'aabidum maa 'abattum", audio: "109004.mp3" },
        { num: 5, ar: "وَلَا أَنتُمْ عَابِدُونَ مَا أَعْبُدُ", en: "Nor will you be worshippers of what I worship.", ur: "اور نہ تم اس کی عبادت کرنے والے ہو جس کی میں عبادت کرتا ہوں۔", tr: "Wa laaa antum 'aabidoona maaa a'bud", audio: "109005.mp3" },
        { num: 6, ar: "لَكُمْ دِينُكُمْ وَلِيَ دِينِ", en: "For you is your religion, and for me is my religion.\"", ur: "تمہارے لیے تمہارا دین ہے اور میرے لیے میرا دین۔", tr: "Lakum deenukum wa liya deen", audio: "109006.mp3" }
      ]
    },
    110: {
      number: 110,
      name: "النَّصْر",
      englishName: "An-Nasr",
      englishNameTranslation: "The Divine Support",
      numberOfAyahs: 3,
      bismillahPre: true,
      ayahs: [
        { num: 1, ar: "إِذَا جَاءَ نَصْرُ اللَّهِ وَالْفَتْحُ", en: "When the victory of Allah has come and the conquest,", ur: "جب اللہ کی مدد اور فتح آ جائے،", tr: "Izaa jaaa'a nasrul laahi wal fath", audio: "110001.mp3" },
        { num: 2, ar: "وَرَأَيْتَ النَّاسَ يَدْخُلُونَ فِي دِينِ اللَّهِ أَفْوَاجًا", en: "And you see the people entering into the religion of Allah in multitudes,", ur: "اور آپ لوگوں کو اللہ کے دین میں فوج در فوج داخل ہوتے دیکھیں،", tr: "Wa ra'aytan naasa yadkhuloona fee deenil laahi afwaajaa", audio: "110002.mp3" },
        { num: 3, ar: "فَسَبِّحْ بِحَمْدِ رَبِّكَ وَاسْتَغْفِرْهُ ۚ إِنَّهُ كَانَ تَوَّابًا", en: "Then exalt [Him] with praise of your Lord and ask forgiveness of Him. Indeed, He is ever Accepting of repentance.", ur: "تو اپنے رب کی حمد کے ساتھ تسبیح کیجیے اور اس سے بخشش مانگیے، بے شک وہ بڑا معاف فرمانے والا ہے۔", tr: "Fasabbih bihamdi rabbika wastaghfirhu innahoo kaana tawwaaba", audio: "110003.mp3" }
      ]
    }
  },

  hadiths: [
    {
      id: "bukhari-1",
      collection: "Sahih al-Bukhari",
      number: 1,
      book: "Revelation",
      ar: "إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى.",
      en: "Actions are according to intentions, and every person will have only that which he intended.",
      ur: "تمام اعمال کا دارومدار نیتوں پر ہے اور ہر انسان کے لیے وہی ہے جس کی اس نے نیت کی۔",
      narrator: "Umar ibn al-Khattab (RA)",
      grade: "Sahih (Authentic)",
      topic: "Iman"
    },
    {
      id: "bukhari-13",
      collection: "Sahih al-Bukhari",
      number: 13,
      book: "Belief",
      ar: "لاَ يُؤْمِنُ أَحَدُكُمْ حَتَّى يُحِبَّ لأَخِيهِ مَا يُحِبُّ لِنَفْسِهِ.",
      en: "None of you truly believes until he loves for his brother that which he loves for himself.",
      ur: "تم میں سے کوئی شخص اس وقت تک سچا مومن نہیں ہو سکتا جب تک کہ وہ اپنے بھائی کے لیے وہی پسند نہ کرے جو اپنے لیے پسند کرتا ہے۔",
      narrator: "Anas ibn Malik (RA)",
      grade: "Sahih (Authentic)",
      topic: "Akhlaq"
    },
    {
      id: "muslim-2564",
      collection: "Sahih Muslim",
      number: 2564,
      book: "Virtue & Character",
      ar: "إِنَّ اللَّهَ لاَ يَنْظُرُ إِلَى صُوَرِكُمْ وَأَمْوَالِكُمْ وَلَكِنْ يَنْظُرُ إِلَى قُلُوبِكُمْ وَأَعْمَالِكُمْ.",
      en: "Verily, Allah does not look at your outward appearance or your wealth, but He looks at your hearts and your deeds.",
      ur: "بے شک اللہ تعالیٰ تمہاری صورتوں اور تمہارے مالوں کی طرف نہیں دیکھتا، بلکہ وہ تمہارے دلوں اور تمہارے اعمال کی طرف دیکھتا ہے۔",
      narrator: "Abu Hurairah (RA)",
      grade: "Sahih (Authentic)",
      topic: "Iman"
    },
    {
      id: "muslim-223",
      collection: "Sahih Muslim",
      number: 223,
      book: "Purification",
      ar: "الطُّهُورُ شَطْرُ الإِيمَانِ، وَالْحَمْدُ لِلَّهِ تَمْلأُ الْمِيزَانَ، وَالصَّلاَةُ نُورٌ، وَالصَّدَقَةُ بُرْهَانٌ.",
      en: "Purification is half of faith, and 'Alhamdulillah' fills the scale, prayer is a light, and charity is proof.",
      ur: "پاکیزگی نصف ایمان ہے، اور الحمد للہ ترازو کو بھر دیتا ہے، نماز نور ہے اور صدقہ دلیل ہے۔",
      narrator: "Abu Malik al-Ash'ari (RA)",
      grade: "Sahih (Authentic)",
      topic: "Salah"
    },
    {
      id: "tirmidhi-1924",
      collection: "Jami` at-Tirmidhi",
      number: 1924,
      book: "Righteousness",
      ar: "الرَّاحِمُونَ يَرْحَمُهُمُ الرَّحْمَنُ، ارْحَمُوا مَنْ فِي الأَرْضِ يَرْحَمْكُمْ مَنْ فِي السَّمَاءِ.",
      en: "The merciful will be shown mercy by the Most Merciful. Be merciful to those on earth, and the One in the heavens will show mercy to you.",
      ur: "رحم کرنے والوں پر رحمن رحم فرماتا ہے۔ تم زمین والوں پر رحم کرو، آسمان والا تم پر رحم فرمائے گا۔",
      narrator: "Abdullah ibn Amr (RA)",
      grade: "Sahih (Al-Albani)",
      topic: "Mercy"
    },
    {
      id: "abudawud-4799",
      collection: "Sunan Abi Dawud",
      number: 4799,
      book: "General Behavior (Adab)",
      ar: "مَنْ لَمْ يَشْكُرِ النَّاسَ لَمْ يَشْكُرِ اللَّهَ.",
      en: "Whoever does not thank people does not thank Allah.",
      ur: "جو لوگوں کا شکر ادا نہیں کرتا، وہ اللہ کا بھی شکر ادا نہیں کرتا۔",
      narrator: "Abu Hurairah (RA)",
      grade: "Sahih (Al-Albani)",
      topic: "Akhlaq"
    },
    {
      id: "nasai-3140",
      collection: "Sunan an-Nasa'i",
      number: 3140,
      book: "Jihad",
      ar: "الْجَنَّةُ تَحْتَ أَقْدَامِ الأُمَّهَاتِ.",
      en: "Paradise lies beneath the feet of mothers.",
      ur: "جنت ماؤں کے قدموں تلے ہے۔",
      narrator: "Mu'awiyah ibn Jahima (RA)",
      grade: "Hasan (Al-Albani)",
      topic: "Akhlaq"
    },
    {
      id: "bukhari-5027",
      collection: "Sahih al-Bukhari",
      number: 5027,
      book: "Virtues of Quran",
      ar: "خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ.",
      en: "The best among you are those who learn the Quran and teach it to others.",
      ur: "تم میں سب سے بہترین شخص وہ ہے جو قرآن مجید سیکھے اور اسے دوسروں کو سکھائے۔",
      narrator: "Uthman ibn Affan (RA)",
      grade: "Sahih (Authentic)",
      topic: "Knowledge"
    }
  ],

  kalimas: [
    {
      id: 1,
      name: "First Kalima (Tayyab)",
      arabicTitle: "الكَلِمَة الطَّيِّبَة",
      ar: "لَا إِلَٰهَ إِلَّا اللَّهُ مُحَمَّدٌ رَسُولُ اللَّهِ",
      tr: "Laa ilaaha illal-laahu Muhammadur-Rasoolul-laah",
      en: "There is no deity worthy of worship except Allah, and Muhammad ﷺ is the Messenger of Allah.",
      ur: "اللہ کے سوا کوئی معبود نہیں، محمد ﷺ اللہ کے رسول ہیں۔",
      meaning: "The foundational statement of Islamic monotheism (Tawhid). It is the key to entering the fold of Islam."
    },
    {
      id: 2,
      name: "Second Kalima (Shahadat)",
      arabicTitle: "كَلِمَة الشَّهَادَة",
      ar: "أَشْهَدُ أَنْ لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ",
      tr: "Ash-hadu al-laa ilaaha illal-laahu wahdahoo laa shareeka lahoo wa ash-hadu anna Muhammadan 'abduhoo wa Rasooluh",
      en: "I bear witness that there is no deity worthy of worship except Allah, alone without partner, and I bear witness that Muhammad ﷺ is His servant and His Messenger.",
      ur: "میں گواہی دیتا ہوں کہ اللہ کے سوا کوئی معبود نہیں، وہ اکیلا ہے، اس کا کوئی شریک نہیں، اور میں گواہی دیتا ہوں کہ محمد ﷺ اس کے بندے اور رسول ہیں۔",
      meaning: "The formal testimony of faith recited upon conversion and in every prayer during Tashahhud."
    },
    {
      id: 3,
      name: "Third Kalima (Tamjeed)",
      arabicTitle: "كَلِمَة التَّمْجِيد",
      ar: "سُبْحَانَ اللَّهِ وَالْحَمْدُ لِلَّهِ وَلَا إِلَٰهَ إِلَّا اللَّهُ وَاللَّهُ أَكْبَرُ وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ الْعَلِيِّ الْعَظِيمِ",
      tr: "Subhaanallaahi wal-hamdu lillaahi wa laa ilaaha illal-laahu wallaahu Akbar; wa laa hawla wa laa quwwata illaa billaahil 'Aliyyil 'Azeem",
      en: "Glory be to Allah, and praise be to Allah, and there is no deity worthy of worship except Allah, and Allah is the Greatest; and there is no power nor might except with Allah, the Most High, the Supreme.",
      ur: "پاک ہے اللہ اور سب تعریف اللہ ہی کے لیے ہے، اور اللہ کے سوا کوئی معبود نہیں اور اللہ سب سے بڑا ہے؛ اور گناہوں سے بچنے کی طاقت اور نیکی کرنے کی قوت اللہ ہی کی طرف سے ہے جو عالی رتبہ اور بزرگ ہے۔",
      meaning: "Glorification of the majesty, perfection, and absolute sovereignty of Allah."
    },
    {
      id: 4,
      name: "Fourth Kalima (Tauheed)",
      arabicTitle: "كَلِمَة التَّوْحِيد",
      ar: "لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، يُحْيِي وَيُمِيتُ، وَهُوَ حَيٌّ لَا يَمُوتُ أَبَدًا أَبَدًا، ذُو الْجَلَالِ وَالْإِكْرَامِ، بِيَدِهِ الْخَيْرُ، وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ",
      tr: "Laa ilaaha illal-laahu wahdahoo laa shareeka lahoo, lahul-mulku wa lahul-hamdu, yuhyee wa yumeetu, wa Huwa Hayyul-laa yamootu abadan abadaa...",
      en: "There is no deity worthy of worship except Allah, alone without partner. His is the sovereignty, and His is all praise. He gives life and causes death, and He is Ever-Living, never to die.",
      ur: "اللہ کے سوا کوئی معبود نہیں، وہ اکیلا ہے، اس کا کوئی شریک نہیں، اسی کی بادشاہی ہے اور اسی کے لیے تمام تعریفیں ہیں۔ وہی جلاتا ہے اور مارتا ہے اور وہ ہمیشہ زندہ ہے۔",
      meaning: "Declaration of the oneness, omnipotence, and eternal nature of Allah."
    },
    {
      id: 5,
      name: "Fifth Kalima (Astaghfar)",
      arabicTitle: "كَلِمَة الِاسْتِغْفَار",
      ar: "أَسْتَغْفِرُ اللَّهَ رَبِّي مِنْ كُلِّ ذَنْبٍ أَذْنَبْتُهُ عَمَدًا أَوْ خَطَأً، سِرًّا أَوْ عَلَانِيَةً، وَأَتُوبُ إِلَيْهِ مِنَ الذَّنْبِ الَّذِي أَعْلَمُ وَمِنَ الذَّنْبِ الَّذِي لَا أَعْلَمُ...",
      tr: "Astaghfirul-laaha Rabbee min kulli zambin aznabtuhoo 'amadan aw khata'an, sirran aw 'alaaniyah, wa atoobu ilayhi...",
      en: "I seek forgiveness from Allah, my Lord, for every sin I committed intentionally or mistakenly, secretly or openly, and I turn to Him in repentance...",
      ur: "میں اللہ سے اپنے گناہوں کی بخشش مانگتا ہوں جو میرا پروردگار ہے، ہر اس گناہ سے جو میں نے جان بوجھ کر کیا یا بھول کر، چھپ کر کیا یا کھلم کھلا...",
      meaning: "The comprehensive prayer for forgiveness and spiritual repentance."
    },
    {
      id: 6,
      name: "Sixth Kalima (Radde Kufr)",
      arabicTitle: "كَلِمَة رَدِّ الكُفْر",
      ar: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ أَنْ أُشْرِكَ بِكَ شَيْئًا وَأَنَا أَعْلَمُ بِهِ، وَأَسْتَغْفِرُكَ لِمَا لَا أَعْلَمُ بِهِ، تُبْتُ عَنْهُ وَتَبَرَّأْتُ مِنَ الْكُفْرِ وَالشِّرْكِ...",
      tr: "Allaahumma innee a'oozu bika min an ushrika bika shay'anw-wa ana a'lamu bih, wa astaghfiruka limaa laa a'lamu bih...",
      en: "O Allah! I seek refuge in You from associating anything with You knowingly, and I seek Your forgiveness for that which I do not know. I repent from disbelief and polytheism...",
      ur: "اے اللہ! میں تیری پناہ مانگتا ہوں اس بات سے کہ میں جان بوجھ کر کسی چیز کو تیرا شریک ٹھہراؤں، اور میں تجھ سے معافی مانگتا ہوں اس گناہ کی جسے میں نہیں جانتا...",
      meaning: "A profound rejection of idolatry and renewal of dedication to pure Tawhid."
    }
  ],

  duas: [
    {
      id: "dua-morning",
      cat: "morning",
      title: "Morning Affirmation & Praise",
      ar: "أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ.",
      tr: "Asbahnaa wa asbahal-mulku lillaahi, wal-hamdu lillaahi, laa ilaaha illal-laahu wahdahoo laa shareeka lahoo...",
      en: "We have reached the morning and the kingdom belongs to Allah, and all praise is for Allah. There is no deity worthy of worship except Allah, alone without partner.",
      ur: "ہم نے صبح کی اور اللہ کے سارے ملک نے صبح کی اور سب تعریف اللہ ہی کے لیے ہے۔ اللہ کے سوا کوئی معبود نہیں وہ اکیلا ہے اس کا کوئی شریک نہیں۔",
      target: 1,
      ref: "Sahih Muslim 2723"
    },
    {
      id: "dua-protection",
      cat: "morning",
      title: "Divine Protection Thrice Daily",
      ar: "بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ.",
      tr: "Bismillaahil-lazee laa yadurru ma'as-mihee shay'un fil-ardi wa laa fis-samaaa'i wa Huwas-Samee'ul-'Aleem.",
      en: "In the name of Allah, with whose name nothing can cause harm in the earth or in the heavens, and He is the All-Hearing, the All-Knowing.",
      ur: "اللہ کے نام کے ساتھ، جس کے نام کی برکت سے زمین اور آسمان میں کوئی چیز نقصان نہیں پہنچا سکتی اور وہ خوب سننے والا، سب کچھ جاننے والا ہے۔",
      target: 3,
      ref: "Abu Dawud 5088, Tirmidhi 3388 (Sahih)"
    },
    {
      id: "dua-sleep",
      cat: "sleep",
      title: "Before Sleeping",
      ar: "بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا.",
      tr: "Bismika Allaahumma amootu wa ahyaa.",
      en: "In Your name, O Allah, I die and I live.",
      ur: "اے اللہ! میں تیرے ہی نام کے ساتھ مرتا (سوتا) ہوں اور جیتا (جاگتا) ہوں۔",
      target: 1,
      ref: "Sahih al-Bukhari 6324"
    },
    {
      id: "dua-waking",
      cat: "sleep",
      title: "Upon Waking Up",
      ar: "الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ.",
      tr: "Alhamdu lillaahil-lazee ahyaanaa ba'da maa amaatanaa wa ilayhin-nushoor.",
      en: "All praise is for Allah who gave us life after having caused us to die, and unto Him is the resurrection.",
      ur: "تمام تعریفیں اللہ کے لیے ہیں جس نے ہمیں مارنے کے بعد زندہ کیا اور اسی کی طرف لوٹ کر جانا ہے۔",
      target: 1,
      ref: "Sahih al-Bukhari 6312"
    },
    {
      id: "dua-distress",
      cat: "protection",
      title: "Supplication in Anxiety and Distress",
      ar: "لَا إِلَٰهَ إِلَّا أَنْتَ سُبْحَانَكَ إِنِّي كُنْتُ مِنَ الظَّالِمِينَ.",
      tr: "Laa ilaaha illaa Anta subhaanaka innee kuntu minaz-zaalimeen.",
      en: "There is no deity except You; exalted are You. Indeed, I have been of the wrongdoers.",
      ur: "تیرے سوا کوئی معبود نہیں، تو پاک ہے، بے شک میں ہی قصوروار تھا۔",
      target: 1,
      ref: "Surah Al-Anbiya 21:87, Tirmidhi 3505"
    },
    {
      id: "dua-home",
      cat: "home",
      title: "Leaving the Home",
      ar: "بِسْمِ اللَّهِ تَوَكَّلْتُ عَلَى اللَّهِ، لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ.",
      tr: "Bismillaahi tawakkaltu 'alal-laah, laa hawla wa laa quwwata illaa billaah.",
      en: "In the name of Allah, I place my trust in Allah; there is no might nor power except with Allah.",
      ur: "اللہ کے نام کے ساتھ، میں نے اللہ پر بھروسہ کیا، گناہوں سے بچنے اور نیکی کرنے کی طاقت صرف اللہ کی مدد سے ہے۔",
      target: 1,
      ref: "Abu Dawud 5095 (Sahih)"
    },
    {
      id: "dua-janazah-adult",
      cat: "janazah",
      title: "Janazah Supplication for Adult Deceased",
      ar: "اللَّهُمَّ اغْفِرْ لِحَيِّنَا وَمَيِّتِنَا، وَشَاهِدِنَا وَغَائِبِنَا، وَصَغِيرِنَا وَكَبِيرِنَا، وَذَكَرِنَا وَأُنْثَانَا. اللَّهُمَّ مَنْ أَحْيَيْتَهُ مِنَّا فَأَحْيِهِ عَلَى الْإِسْلَامِ، وَمَنْ تَوَفَّيْتَهُ مِنَّا فَتَوَفَّهُ عَلَى الْإِيمَانِ. اللَّهُمَّ لَا تَحْرِمْنَا أَجْرَهُ، وَلَا تُضِلَّنَا بَعْدَهُ.",
      tr: "Allahummagh-fir li-hayyinaa wa mayyitinaa, wa shaahidinaa wa ghaa'ibinaa, wa sagheerinaa wa kabeerinaa, wa thakarinaa wa unthaanaa. Allahumma man ahyaytahoo minnaa fa-ahyihee 'alal-Islaam, wa man tawaffaytahoo minnaa fa-tawaffahoo 'alal-Eemaan. Allahumma laa tahrimnaa ajrahoo, wa laa tudillanaa ba'dah.",
      en: "O Allah, forgive our living and our dead, those present and those absent, our young and our old, our males and our females. O Allah, whomsoever You keep alive among us, keep him alive upon Islam, and whomsoever You cause to die among us, cause him to die upon Faith. O Allah, do not deprive us of his reward, and do not cause us to go astray after him.",
      ur: "اے اللہ! بخش دے ہمارے زندوں کو اور ہمارے مُردوں کو، اور ہمارے حاضرین کو اور ہمارے غائبین کو، اور ہمارے چھوٹوں کو اور ہمارے بڑوں کو، اور ہمارے مَردوں کو اور ہماری عورتوں کو۔ اے اللہ! ہم میں سے جسے تو زندہ رکھے اسے اسلام پر زندہ رکھ، اور جسے موت دے اسے ایمان پر موت دے۔ اے اللہ! ہمیں اس کے اجر سے محروم نہ فرما اور اس کے بعد ہمیں گمراہ نہ کر۔",
      target: 1,
      ref: "Sunan Abi Dawud 3201, Tirmidhi 1024 (Sahih)"
    },
    {
      id: "dua-janazah-child",
      cat: "janazah",
      title: "Janazah Supplication for Deceased Child",
      ar: "اللَّهُمَّ اجْعَلْهُ لَنَا فَرَطًا، وَاجْعَلْهُ لَنَا أَجْرًا وَذُخْرًا، وَاجْعَلْهُ لَنَا شَافِعًا وَمُشَفَّعًا.",
      tr: "Allahummaj-'alhu lanaa faratan, waj-'alhu lanaa ajran wa thukhran, waj-'alhu lanaa shaafi'an wa mushaffa'aa.",
      en: "O Allah, make him for us a forerunner and advance herald, and make him for us a source of reward and treasure, and make him for us an intercessor whose intercession is granted.",
      ur: "اے اللہ! اس بچے کو ہمارے لیے آگے بھیجا ہوا توشہ بنا، اور اس کو ہمارے لیے اجر اور ذخیرہ بنا، اور اس کو ہمارے حق میں شفاعت کرنے والا اور مقبول شفاعت بنا۔",
      target: 1,
      ref: "Sahih al-Bukhari (Ta'liqan), Al-Bayhaqi 4/9"
    },
    {
      id: "dua-eid-tashreeq",
      cat: "eid",
      title: "Takbirat al-Tashreeq (Eid al-Adha)",
      ar: "اللَّهُ أَكْبَرُ، اللَّهُ أَكْبَرُ، لَا إِلَٰهَ إِلَّا اللَّهُ، وَاللَّهُ أَكْبَرُ، اللَّهُ أَكْبَرُ، وَلِلَّهِ الْحَمْدُ.",
      tr: "Allāhu Akbar, Allāhu Akbar, Laa ilaaha ill-Allāhu, wallāhu Akbar, Allāhu Akbar, wa lillāhil-hamd.",
      en: "Allah is the Greatest, Allah is the Greatest; there is no deity worthy of worship besides Allah, and Allah is the Greatest, Allah is the Greatest, and to Allah belongs all praise.",
      ur: "اللہ سب سے بڑا ہے، اللہ سب سے بڑا ہے، اللہ کے سوا کوئی معبود نہیں، اور اللہ سب سے بڑا ہے، اللہ سب سے بڑا ہے، اور تمام تعریفیں اللہ ہی کے لیے ہیں۔",
      target: 3,
      ref: "Musannaf Ibn Abi Shaybah 5633, Daruqutni (Authentic Sunnah)"
    },
    {
      id: "dua-istikharah",
      cat: "salah",
      title: "Dua al-Istikharah (Seeking Allah's Guidance in Decisions)",
      ar: "اللَّهُمَّ إِنِّي أَسْتَخِيرُكَ بِعِلْمِكَ، وَأَسْتَقْدِرُكَ بِقُدْرَتِكَ، وَأَسْأَلُكَ مِنْ فَضْلِكَ الْعَظِيمِ، فَإِنَّكَ تَقْدِرُ وَلَا أَقْدِرُ، وَتَعْلَمُ وَلَا أَعْلَمُ، وَأَنْتَ عَلَّامُ الْغُيُوبِ. اللَّهُمَّ إِنْ كُنْتَ تَعْلَمُ أَنَّ هَٰذَا الْأَمْرَ خَيْرٌ لِي فِي دِينِي وَمَعَاشِي وَعَاقِبَةِ أَمْرِي فَاقْدُرْهُ لِي وَيَسِّرْهُ لِي ثُمَّ بَارِكْ لِي فِيهِ.",
      tr: "Allahumma innee astakheeruka bi-'ilmika, wa astaqdiruka bi-qudratika, wa as'aluka min fadlikal-'azeem, fa-innaka taqdiru wa laa aqdir, wa ta'lamu wa laa a'lam, wa Anta 'Allaamul-ghuyoob...",
      en: "O Allah, I seek Your counsel by Your knowledge, and I seek ability by Your power, and I ask You from Your immense favor. For You have power and I have none, and You know and I do not know, and You are the Knower of the unseen...",
      ur: "اے اللہ! میں تیرے علم کی برکت سے تجھ سے خیر طلب کرتا ہوں اور تیری قدرت کے ذریعے تجھ سے طاقت مانگتا ہوں اور تیرے فضل عظیم کا سوال کرتا ہوں، کیونکہ تو قادر ہے اور میں بے بس ہوں، اور تو جانتا ہے اور میں نہیں جانتا، اور تو تمام غیبوں کا خوب جاننے والا ہے۔۔۔",
      target: 1,
      ref: "Sahih al-Bukhari 1162"
    },
    {
      id: "dua-qunut",
      cat: "salah",
      title: "Dua al-Qunut (Witr Prayer Supplication)",
      ar: "اللَّهُمَّ اهْدِنِي فِيمَنْ هَدَيْتَ، وَعَافِنِي فِيمَنْ عَافَيْتَ، وَتَوَلَّنِي فِيمَنْ تَوَلَّيْتَ، وَبَارِكْ لِي فِيمَا أَعْطَيْتَ، وَقِنِي شَرَّ مَا قَضَيْتَ، فَإِنَّكَ تَقْضِي وَلَا يُقْضَىٰ عَلَيْكَ، وَإِنَّهُ لَا يَذِلُّ مَنْ وَالَيْتَ، وَلَا يَعِزُّ مَنْ عَادَيْتَ، تَبَارَكْتَ رَبَّنَا وَتَعَالَيْتَ.",
      tr: "Allahummah-dinee feeman hadayt, wa 'aafinee feeman 'aafayt, wa tawallanee feeman tawallayt, wa baarik lee feemaa a'tayt, wa qinee sharra maa qadayt, fa-innaka taqdee wa laa yuqdaa 'alayk, wa innahoo laa yazillu man waalayt, wa laa ya'izzu man 'aadayt, tabaarakta Rabbanaa wa ta'aalayt.",
      en: "O Allah, guide me among those You have guided, grant me well-being among those You have granted well-being, take me into Your care among those You have taken into care, bless for me what You have given, and protect me from the evil of what You have decreed. Indeed, You decree and none can decree against You...",
      ur: "اے اللہ! مجھے ہدایت دے ان لوگوں میں جنہیں تو نے ہدایت دی، اور مجھے عافیت دے ان میں جنہیں تو نے عافیت بخشی، اور میرا سرپرست بن جا ان میں جن کا تو سرپرست بنا، اور جو کچھ تو نے دیا اس میں میرے لیے برکت ڈال دے، اور مجھے اس برائی سے بچا جو تو نے مقدر فرمائی ہے...",
      target: 1,
      ref: "Sunan Abi Dawud 1425, Tirmidhi 464 (Sahih)"
    },
    {
      id: "dua-tahajjud",
      cat: "salah",
      title: "Supplication upon Rising for Tahajjud (Night Prayer)",
      ar: "اللَّهُمَّ لَكَ الْحَمْدُ أَنْتَ نُورُ السَّمَاوَاتِ وَالْأَرْضِ وَمَنْ فِيهِنَّ، وَلَكَ الْحَمْدُ أَنْتَ قَيِّمُ السَّمَاوَاتِ وَالْأَرْضِ وَمَنْ فِيهِنَّ، وَلَكَ الْحَمْدُ أَنْتَ الْحَقُّ، وَوَعْدُكَ الْحَقُّ، وَقَوْلُكَ الْحَقُّ، وَلِقَاؤُكَ حَقٌّ، وَالْجَنَّةُ حَقٌّ، وَالنَّارُ حَقٌّ، وَالنَّبِيُّونَ حَقٌّ، وَمُحَمَّدٌ حَقٌّ، وَالسَّاعَةُ حَقٌّ.",
      tr: "Allahumma lakal-hamdu Anta noorus-samaawaati wal-ardi wa man feehinna, wa lakal-hamdu Anta qayyimus-samaawaati wal-ardi wa man feehinna, wa lakal-hamdu Antal-Haqqu, wa wa'dukal-haqq, wa qawlukal-haqq, wa liqaa'uka haqq, wal-jannatu haqq, wan-naaru haqq, wan-nabiyyoona haqq, wa Muhammadun haqqun, was-saa'atu haqq.",
      en: "O Allah, to You belongs all praise; You are the Light of the heavens and the earth and all that is within them. To You belongs all praise; You are the Sustainer of the heavens and the earth and all that is within them. To You belongs all praise; You are the Truth, Your promise is true, Your word is true, the meeting with You is true, Paradise is true, the Fire is true, the Prophets are true, Muhammad is true, and the Final Hour is true.",
      ur: "اے اللہ! تیرے ہی لیے تمام تعریفیں ہیں، تو آسمانوں اور زمین اور جو کچھ ان میں ہے ان کا نور ہے۔ تیرے ہی لیے حمد ہے، تو آسمانوں اور زمین اور جو کچھ ان میں ہے ان کا قائم رکھنے والا ہے۔ اور تیرے ہی لیے تعریف ہے، تو ہی حق ہے، تیرا وعدہ سچا ہے، تیرا فرمان سچا ہے، تیری ملاقات برحق ہے، جنت حق ہے، جہنم حق ہے، تمام انبیاء حق ہیں، حضرت محمد ﷺ برحق ہیں، اور قیامت کی گھڑی سچی ہے۔",
      target: 1,
      ref: "Sahih al-Bukhari 1120, Sahih Muslim 769"
    },
    {
      id: "dua-sayyidul-istighfar",
      cat: "forgiveness",
      title: "Sayyidul Istighfar (The Master Supplication for Forgiveness)",
      ar: "اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَٰهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَىٰ عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ بِذَنْبِي فَاغْفِرْ لِي فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ.",
      tr: "Allahumma Anta Rabbee laa ilaaha illaa Anta, khalaqtanee wa ana 'abduka, wa ana 'alaa 'ahdika wa wa'dika mastata'tu, a'oozu bika min sharri maa sana'tu, aboo'u laka bi-ni'matika 'alayya, wa aboo'u bi-zambee faghfir lee fa-innahoo laa yaghfiruz-zunooba illaa Ant.",
      en: "O Allah, You are my Lord; none has the right to be worshipped except You. You created me and I am Your servant, and I remain upon Your covenant and Your promise as much as I am able. I seek refuge in You from the evil of what I have done. I acknowledge before You Your favor upon me, and I acknowledge my sin; so forgive me, for indeed none can forgive sins except You.",
      ur: "اے اللہ! تو ہی میرا رب ہے، تیرے سوا کوئی معبود نہیں، تو نے مجھے پیدا کیا اور میں تیرا بندہ ہوں، اور میں اپنی استطاعت کے مطابق تیرے عہد اور وعدے پر قائم ہوں۔ میں نے جو کچھ کیا اس کی برائی سے تیری پناہ مانگتا ہوں۔ میں اپنے اوپر تیری نعمت کا اعتراف کرتا ہوں اور اپنے گناہ کا اقرار کرتا ہوں، پس مجھے بخش دے کیونکہ تیرے سوا کوئی گناہوں کو نہیں بخش سکتا۔",
      target: 1,
      ref: "Sahih al-Bukhari 6306 (Chief of Supplications)"
    },
    {
      id: "dua-rabbana-dunya",
      cat: "quranic",
      title: "Rabbana: Goodness in this Life and the Hereafter",
      ar: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ.",
      tr: "Rabbanaa aatinaa fid-dunyaa hasanatanw-wa fil-aakhirati hasanatanw-wa qinaa 'azaaban-naar.",
      en: "Our Lord, grant us in this world that which is good and in the Hereafter that which is good, and save us from the punishment of the Fire.",
      ur: "اے ہمارے رب! ہمیں دنیا میں بھی بھلائی عطا فرما اور آخرت میں بھی بھلائی عطا فرما اور ہمیں دوزخ کے عذاب سے بچا۔",
      target: 3,
      ref: "Surah Al-Baqarah 2:201"
    },
    {
      id: "dua-rabbana-hidayah",
      cat: "quranic",
      title: "Rabbana: Protection from Heart Deviation",
      ar: "رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِنْ لَدُنْكَ رَحْمَةً ۚ إِنَّكَ أَنْتَ الْوَهَّابُ.",
      tr: "Rabbanaa laa tuzigh quloobanaa ba'da iz hadaytanaa wa hab lanaa mil-ladunka rahmah, innaka Antal-Wahhaab.",
      en: "Our Lord, let not our hearts deviate after You have guided us and grant us from Yourself mercy. Indeed, You are the Bestower.",
      ur: "اے ہمارے پروردگار! ہمارے دلوں کو ٹیڑھا نہ کر بعد اس کے کہ تو نے ہمیں ہدایت دی اور ہمیں اپنے پاس سے رحمت عطا فرما، بے شک تو ہی سب سے بڑا عطا فرمانے والا ہے۔",
      target: 1,
      ref: "Surah Ali 'Imran 3:8"
    },
    {
      id: "dua-rabbana-family",
      cat: "quranic",
      title: "Rabbana: Comfort in Family and Righteous Leadership",
      ar: "رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ وَاجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا.",
      tr: "Rabbanaa hab lanaa min azwaajinaa wa zurriyyaatinaa qurrata a'yuninw-waj'alnaa lil-muttaqeena imaamaa.",
      en: "Our Lord, grant us from among our spouses and offspring comfort to our eyes and make us a leader for the righteous.",
      ur: "اے ہمارے رب! ہمیں ہماری بیویوں اور ہماری اولاد کی طرف سے آنکھوں کی ٹھنڈک عطا فرما اور ہمیں پرہیزگاروں کا امام بنا۔",
      target: 1,
      ref: "Surah Al-Furqan 25:74"
    },
    {
      id: "dua-rabbana-salah",
      cat: "quranic",
      title: "Supplication of Prophet Ibrahim for Prayer & Parents",
      ar: "رَبِّ اجْعَلْنِي مُقِيمَ الصَّلَاةِ وَمِنْ ذُرِّيَّتِي ۚ رَبَّنَا وَتَقَبَّلْ دُعَاءِ. رَبَّنَا اغْفِرْ لِي وَلِوَالِدَيَّ وَلِلْمُؤْمِنِينَ يَوْمَ يَقُومُ الْحِسَابُ.",
      tr: "Rabbij-'alnee muqeemas-Salaati wa min zurriyyatee, Rabbanaa wa taqabbal du'aaa'. Rabbanagh-fir lee wa li-waalidayya wa lil-mu'mineena yawma yaqoomul-hisaab.",
      en: "My Lord, make me an establisher of prayer, and from my descendants. Our Lord, and accept my supplication. Our Lord, forgive me and my parents and the believers the Day the account is established.",
      ur: "اے میرے رب! مجھے نماز قائم کرنے والا بنا اور میری اولاد میں سے بھی، اے ہمارے پروردگار! میری دعا قبول فرما۔ اے ہمارے رب! مجھے بخش دے اور میرے والدین کو اور تمام مومنوں کو جس دن حساب قائم ہو گا۔",
      target: 1,
      ref: "Surah Ibrahim 14:40-41"
    }
  ]
};

if (typeof window !== 'undefined') {
  window.ISLAMIC_DATA = ISLAMIC_DATA;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = ISLAMIC_DATA;
}
