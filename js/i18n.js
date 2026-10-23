/**
 * ISLAMIC KNOWLEDGE PORTAL — 40-LANGUAGE FRAMEWORK & LOCALIZATION ENGINE
 */

const LANGUAGES = [
  { code: 'ar', name: 'Arabic', nativeName: 'العربية', dir: 'rtl', script: 'Arab', coverage: 'verified' },
  { code: 'ur', name: 'Urdu', nativeName: 'اردو', dir: 'rtl', script: 'Arab', coverage: 'verified' },
  { code: 'en', name: 'English', nativeName: 'English', dir: 'ltr', script: 'Latn', coverage: 'verified' },
  { code: 'bn', name: 'Bengali', nativeName: 'বাংলা', dir: 'ltr', script: 'Beng', coverage: 'authorized_partial' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', dir: 'ltr', script: 'Deva', coverage: 'authorized_partial' },
  { code: 'id', name: 'Indonesian', nativeName: 'Bahasa Indonesia', dir: 'ltr', script: 'Latn', coverage: 'verified' },
  { code: 'ms', name: 'Malay', nativeName: 'Bahasa Melayu', dir: 'ltr', script: 'Latn', coverage: 'authorized_partial' },
  { code: 'tr', name: 'Turkish', nativeName: 'Türkçe', dir: 'ltr', script: 'Latn', coverage: 'verified' },
  { code: 'fa', name: 'Persian', nativeName: 'فارسی', dir: 'rtl', script: 'Arab', coverage: 'authorized_partial' },
  { code: 'fr', name: 'French', nativeName: 'Français', dir: 'ltr', script: 'Latn', coverage: 'verified' },
  { code: 'de', name: 'German', nativeName: 'Deutsch', dir: 'ltr', script: 'Latn', coverage: 'authorized_partial' },
  { code: 'es', name: 'Spanish', nativeName: 'Español', dir: 'ltr', script: 'Latn', coverage: 'authorized_partial' },
  { code: 'pt', name: 'Portuguese', nativeName: 'Português', dir: 'ltr', script: 'Latn', coverage: 'authorized_partial' },
  { code: 'ru', name: 'Russian', nativeName: 'Русский', dir: 'ltr', script: 'Cyrl', coverage: 'authorized_partial' },
  { code: 'zh-CN', name: 'Chinese Simplified', nativeName: '简体中文', dir: 'ltr', script: 'Hans', coverage: 'authorized_partial' },
  { code: 'zh-TW', name: 'Chinese Traditional', nativeName: '繁體中文', dir: 'ltr', script: 'Hant', coverage: 'authorized_partial' },
  { code: 'ja', name: 'Japanese', nativeName: '日本語', dir: 'ltr', script: 'Jpan', coverage: 'in_progress' },
  { code: 'ko', name: 'Korean', nativeName: '한국어', dir: 'ltr', script: 'Kore', coverage: 'in_progress' },
  { code: 'sw', name: 'Swahili', nativeName: 'Kiswahili', dir: 'ltr', script: 'Latn', coverage: 'authorized_partial' },
  { code: 'ha', name: 'Hausa', nativeName: 'Hausa', dir: 'ltr', script: 'Latn', coverage: 'authorized_partial' },
  { code: 'so', name: 'Somali', nativeName: 'Soomaali', dir: 'ltr', script: 'Latn', coverage: 'in_progress' },
  { code: 'ps', name: 'Pashto', nativeName: 'پښتو', dir: 'rtl', script: 'Arab', coverage: 'authorized_partial' },
  { code: 'ku', name: 'Kurdish', nativeName: 'کوردی', dir: 'rtl', script: 'Arab', coverage: 'authorized_partial' },
  { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்', dir: 'ltr', script: 'Taml', coverage: 'authorized_partial' },
  { code: 'te', name: 'Telugu', nativeName: 'తెలుగు', dir: 'ltr', script: 'Telu', coverage: 'in_progress' },
  { code: 'ml', name: 'Malayalam', nativeName: 'മലയാളം', dir: 'ltr', script: 'Mlym', coverage: 'authorized_partial' },
  { code: 'kn', name: 'Kannada', nativeName: 'ಕನ್ನಡ', dir: 'ltr', script: 'Knda', coverage: 'in_progress' },
  { code: 'mr', name: 'Marathi', nativeName: 'मराठी', dir: 'ltr', script: 'Deva', coverage: 'in_progress' },
  { code: 'gu', name: 'Gujarati', nativeName: 'ગુજરાતી', dir: 'ltr', script: 'Gujr', coverage: 'in_progress' },
  { code: 'pa', name: 'Punjabi', nativeName: 'ਪੰਜਾਬੀ / پنجابی', dir: 'ltr', script: 'Guru', coverage: 'in_progress' },
  { code: 'th', name: 'Thai', nativeName: 'ไทย', dir: 'ltr', script: 'Thai', coverage: 'authorized_partial' },
  { code: 'vi', name: 'Vietnamese', nativeName: 'Tiếng Việt', dir: 'ltr', script: 'Latn', coverage: 'in_progress' },
  { code: 'nl', name: 'Dutch', nativeName: 'Nederlands', dir: 'ltr', script: 'Latn', coverage: 'in_progress' },
  { code: 'it', name: 'Italian', nativeName: 'Italiano', dir: 'ltr', script: 'Latn', coverage: 'in_progress' },
  { code: 'pl', name: 'Polish', nativeName: 'Polski', dir: 'ltr', script: 'Latn', coverage: 'in_progress' },
  { code: 'bs', name: 'Bosnian', nativeName: 'Bosanski', dir: 'ltr', script: 'Latn', coverage: 'authorized_partial' },
  { code: 'sq', name: 'Albanian', nativeName: 'Shqip', dir: 'ltr', script: 'Latn', coverage: 'in_progress' },
  { code: 'uz', name: 'Uzbek', nativeName: 'Oʻzbekcha', dir: 'ltr', script: 'Latn', coverage: 'authorized_partial' },
  { code: 'kk', name: 'Kazakh', nativeName: 'Қазақша', dir: 'ltr', script: 'Cyrl', coverage: 'in_progress' },
  { code: 'az', name: 'Azerbaijani', nativeName: 'Azərbaycanca', dir: 'ltr', script: 'Latn', coverage: 'in_progress' }
];

const TRANSLATIONS = {
  en: {
    siteTitle: 'Islamic Knowledge Portal',
    siteSubtitle: 'Authentic Quran, Hadith, Duas, and Islamic Learning',
    navHome: 'Home',
    navQuran: 'Holy Quran',
    navHadith: 'Hadith Library',
    navKalimas: 'Six Kalimas',
    navDuas: 'Duas & Adhkar',
    navSeerah: 'Seerah',
    navProphets: 'Prophets',
    navSahaba: 'Sahaba',
    navEducation: 'Islamic Education',
    navTools: 'Islamic Tools',
    navPrayerTimes: 'Prayer Times',
    navTasbih: 'Digital Tasbih',
    navZakat: 'Zakat Calculator',
    navCalendar: 'Hijri Calendar',
    navBookmarks: 'Bookmarks',
    navSearch: 'Search',
    navLanguage: 'Language',
    navTheme: 'Theme',
    heroTitle: 'Learn Authentic Islam With Peace & Clarity',
    heroSubtitle: 'Explore the Holy Quran with verified translations, authentic Hadith collections, daily supplications, and comprehensive Islamic education.',
    searchPlaceholder: 'Search Surahs, Hadith, Duas, or Islamic topics...',
    searchBtn: 'Search',
    quickAccessTitle: 'Explore Core Pillars & Knowledge',
    quickAccessSubtitle: 'Verified resources curated from authorized traditional Islamic sources',
    allSurahs: 'All Surahs',
    allJuz: '30 Juz',
    revelationMakki: 'Makki',
    revelationMadani: 'Madani',
    versesCount: 'Verses',
    surahNumber: 'Surah',
    juzNumber: 'Juz',
    startReading: 'Read Surah',
    listenAudio: 'Listen',
    arabicText: 'Arabic Text',
    translation: 'Translation',
    transliteration: 'Transliteration',
    copyVerse: 'Copy Verse',
    verseCopied: 'Verse copied to clipboard!',
    bookmarkVerse: 'Bookmark Verse',
    fontSize: 'Font Size',
    aboutUs: 'About Us',
    sourcesAndLicensing: 'Sources & Methodology',
    privacyPolicy: 'Privacy Policy',
    termsOfUse: 'Terms of Service',
    editorialPolicy: 'Editorial Policy',
    contactUs: 'Contact Us',
    copyrightNotice: 'Dedicated to serving the global Ummah with verified, authentic Islamic knowledge.',
    disclaimer: 'Religious content on this website is for educational purposes based on traditional scholarly consensus. It does not replace individualized rulings from qualified local Islamic authorities.'
  },
  ar: {
    siteTitle: 'بوابة المعرفة الإسلامية',
    siteSubtitle: 'القرآن الكريم، الحديث النبوي، الأدعية والعلوم الإسلامية الموثقة',
    navHome: 'الرئيسية',
    navQuran: 'القرآن الكريم',
    navHadith: 'مكتبة الحديث',
    navKalimas: 'الكلمات الست',
    navDuas: 'الأدعية والأذكار',
    navSeerah: 'السيرة النبوية',
    navProphets: 'قصص الأنبياء',
    navSahaba: 'صحابة رسول الله',
    navEducation: 'التعليم الإسلامي',
    navTools: 'أدوات إسلامية',
    navPrayerTimes: 'مواقيت الصلاة',
    navTasbih: 'السبحة الإلكترونية',
    navZakat: 'حاسبة الزكاة',
    navCalendar: 'التقويم الهجري',
    navBookmarks: 'المحفوظات',
    navSearch: 'بحث',
    navLanguage: 'اللغة',
    navTheme: 'المظهر',
    heroTitle: 'تعلم الإسلام الصحيح بصفاء وطمأنينة',
    heroSubtitle: 'تصفح القرآن الكريم مع الترجمات المعتمدة، ومجموعات الحديث النبوي الشريف، وأذكار الصباح والمساء، والدروس الشرعية الموثوقة.',
    searchPlaceholder: 'ابحث عن سور، أحاديث، أدعية، أو موضوعات إسلامية...',
    searchBtn: 'بحث',
    quickAccessTitle: 'استكشف أركان الدين والمعرفة',
    quickAccessSubtitle: 'مصادر موثقة من التراث الإسلامي المعتمد',
    allSurahs: 'جميع السور',
    allJuz: 'الأجزاء الثلاثون',
    revelationMakki: 'مكية',
    revelationMadani: 'مدنية',
    versesCount: 'آيات',
    surahNumber: 'سورة',
    juzNumber: 'الجزء',
    startReading: 'قراءة السورة',
    listenAudio: 'استماع',
    arabicText: 'النص القرآني',
    translation: 'الترجمة',
    transliteration: 'النطق الصوتي',
    copyVerse: 'نسخ الآية',
    verseCopied: 'تم نسخ الآية الكريمة!',
    bookmarkVerse: 'حفظ الآية',
    fontSize: 'حجم الخط',
    aboutUs: 'من نحن',
    sourcesAndLicensing: 'المصادر والمنهجية',
    privacyPolicy: 'سياسة الخصوصية',
    termsOfUse: 'شروط الاستخدام',
    editorialPolicy: 'السياسة التحريرية',
    contactUs: 'اتصل بنا',
    copyrightNotice: 'موقع إسلامي موجه لخدمة الأمة ونشر العلم النافع بالحق والبرهان.',
    disclaimer: 'المحتوى الديني في هذا الموقع مخصص للأغراض التعليمية الشرعية وفق إجماع العلماء المعتبرين، ولا يغني عن الفتوى المباشرة من المفتين المعتمدين.'
  },
  ur: {
    siteTitle: 'اسلامک نالج پورٹل',
    siteSubtitle: 'مستند قرآن، احادیث نبوی، مسنون دعائیں اور دینی تعلیمات',
    navHome: 'صفحہ اول',
    navQuran: 'قرآن کریم',
    navHadith: 'احادیث کتب خانہ',
    navKalimas: 'چھ کلمے',
    navDuas: 'دعائیں و اذکار',
    navSeerah: 'سیرت النبی ﷺ',
    navProphets: 'قصص الانبیاء',
    navSahaba: 'صحابہ کرام',
    navEducation: 'دینی تعلیم',
    navTools: 'اسلامی ٹولز',
    navPrayerTimes: 'اوقات نماز',
    navTasbih: 'ڈیجیٹل تسبیح',
    navZakat: 'زکوٰۃ کیلکولیٹر',
    navCalendar: 'ہجری کیلنڈر',
    navBookmarks: 'محفوظات',
    navSearch: 'تلاش',
    navLanguage: 'زبان',
    navTheme: 'تھیم',
    heroTitle: 'مستند اسلامی علوم کو سکون و رہنمائی کے ساتھ سیکھیں',
    heroSubtitle: 'قرآن مجید کے تمام 114 سورتوں کی تلاوت، اردو ترجمہ، صحیح بخاری و مسلم کی احادیث اور روزمرہ کے مسنون اذکار۔',
    searchPlaceholder: 'سورہ، حدیث، دعا یا اسلامی موضوع تلاش کریں...',
    searchBtn: 'تلاش کریں',
    quickAccessTitle: 'دین کے بنیادی ارکان اور علوم',
    quickAccessSubtitle: 'معتبر اور تصدیق شدہ اسلامی مآخذ سے ماخوذ مواد',
    allSurahs: 'تمام سورتیں',
    allJuz: '30 پارے',
    revelationMakki: 'مکی',
    revelationMadani: 'مدنی',
    versesCount: 'آیات',
    surahNumber: 'سورۃ نمبر',
    juzNumber: 'پارہ نمبر',
    startReading: 'سورہ پڑھیں',
    listenAudio: 'تلاوت سنیں',
    arabicText: 'عربی متن',
    translation: 'ترجمہ',
    transliteration: 'تلفظ',
    copyVerse: 'آیت کاپی کریں',
    verseCopied: 'آیت کاپی ہوگئی!',
    bookmarkVerse: 'محفوظ کریں',
    fontSize: 'فونٹ سائز',
    aboutUs: 'ہمارے متعلق',
    sourcesAndLicensing: 'مآخذ و طریقہ کار',
    privacyPolicy: 'پرائیویسی پالیسی',
    termsOfUse: 'شرائط استعمال',
    editorialPolicy: 'ادارتی پالیسی',
    contactUs: 'رابطہ کریں',
    copyrightNotice: 'امت مسلمہ کی رہنمائی اور صحیح دینی تعلیمات کے فروغ کے لیے وقف۔',
    disclaimer: 'اس ویب سائٹ پر موجود دینی معلومات تعلیمی مقاصد اور جمہور علماء کے مسلک پر مبنی ہیں۔ کسی بھی شرعی فیصلے کے لیے اپنے معتمد مفتیان کرام سے رجوع فرمائیں۔'
  },
  id: {
    siteTitle: 'Portal Ilmu Islam',
    siteSubtitle: 'Al-Quran, Hadis Shahih, Doa Harian, dan Pembelajaran Islam Otentik',
    navHome: 'Beranda',
    navQuran: 'Al-Qur\'an',
    navHadith: 'Hadis',
    navKalimas: 'Kalimat Syahadat',
    navDuas: 'Doa & Dzikir',
    navSeerah: 'Sirah Nabawiyah',
    navProphets: 'Kisah Nabi',
    navSahaba: 'Sahabat Nabi',
    navEducation: 'Pendidikan Islam',
    navTools: 'Alat Islami',
    navPrayerTimes: 'Jadwal Sholat',
    navTasbih: 'Tasbih Digital',
    navZakat: 'Kalkulator Zakat',
    navCalendar: 'Kalender Hijriah',
    navBookmarks: 'Penanda',
    navSearch: 'Cari',
    navLanguage: 'Bahasa',
    navTheme: 'Tema',
    heroTitle: 'Pelajari Islam yang Sahih dengan Damai dan Kejelasan',
    heroSubtitle: 'Jelajahi Al-Qur\'an dengan terjemahan terverifikasi Kemenag, koleksi hadits shahih, dzikir pagi & petang, serta panduan ibadah lengkap.',
    searchPlaceholder: 'Cari Surah, Hadis, Doa, atau topik Islam...',
    searchBtn: 'Cari',
    quickAccessTitle: 'Pelajari Rukun & Ilmu Islam',
    quickAccessSubtitle: 'Sumber terpercaya berdasarkan tradisi keilmuan Islam',
    allSurahs: 'Semua Surah',
    allJuz: '30 Juz',
    revelationMakki: 'Makkiyyah',
    revelationMadani: 'Madaniyyah',
    versesCount: 'Ayat',
    surahNumber: 'Surah',
    juzNumber: 'Juz',
    startReading: 'Baca Surah',
    listenAudio: 'Dengarkan',
    arabicText: 'Teks Arab',
    translation: 'Terjemahan',
    transliteration: 'Transliterasi',
    copyVerse: 'Salin Ayat',
    verseCopied: 'Ayat disalin!',
    bookmarkVerse: 'Tandai Ayat',
    fontSize: 'Ukuran Font',
    aboutUs: 'Tentang Kami',
    sourcesAndLicensing: 'Sumber & Metodologi',
    privacyPolicy: 'Kebijakan Privasi',
    termsOfUse: 'Syarat & Ketentuan',
    editorialPolicy: 'Kebijakan Editorial',
    contactUs: 'Hubungi Kami',
    copyrightNotice: 'Didedikasikan untuk melayani umat Islam sedunia dengan ilmu yang sahih.',
    disclaimer: 'Konten keagamaan di situs ini bersifat edukatif berdasarkan kesepakatan ulama mu\'tabar.'
  },
  tr: {
    siteTitle: 'İslam İlim Portalı',
    siteSubtitle: 'Kur\'an-ı Kerim, Sahih Hadisler, Günlük Dualar ve İslami Eğitim',
    navHome: 'Ana Sayfa',
    navQuran: 'Kur\'an-ı Kerim',
    navHadith: 'Hadis',
    navKalimas: 'Altı Kelime',
    navDuas: 'Dualar ve Zikirler',
    navSeerah: 'Siyer',
    navProphets: 'Peygamberler',
    navSahaba: 'Ashab-ı Kiram',
    navEducation: 'İslami Eğitim',
    navTools: 'İslami Araçlar',
    navPrayerTimes: 'Namaz Vakitleri',
    navTasbih: 'Dijital Tesbih',
    navZakat: 'Zekat Hesaplayıcı',
    navCalendar: 'Hicri Takvim',
    navBookmarks: 'Yer İmleri',
    navSearch: 'Arama',
    navLanguage: 'Dil',
    navTheme: 'Tema',
    heroTitle: 'Sahih İslam İlimlerini Huzurla Öğrenin',
    heroSubtitle: 'Diyanet onaylı meallerle Kur\'an-ı Kerim\'i okuyun, Kütüb-i Sitte hadislerini inceleyin.',
    searchPlaceholder: 'Sure, Hadis, Dua veya konu arayın...',
    searchBtn: 'Ara',
    quickAccessTitle: 'İslam\'ın Temel Esasları ve İlimler',
    quickAccessSubtitle: 'Güvenilir ve ehli sünnet kaynaklardan derlenmiş bilgiler',
    allSurahs: 'Tüm Sureler',
    allJuz: '30 Cüz',
    revelationMakki: 'Mekki',
    revelationMadani: 'Medeni',
    versesCount: 'Ayet',
    surahNumber: 'Sure',
    juzNumber: 'Cüz',
    startReading: 'Sureyi Oku',
    listenAudio: 'Dinle',
    arabicText: 'Arapça Metin',
    translation: 'Meal',
    transliteration: 'Okunuş',
    copyVerse: 'Ayeti Kopyala',
    verseCopied: 'Ayet kopyalandı!',
    bookmarkVerse: 'Ayeti Kaydet',
    fontSize: 'Yazı Boyutu',
    aboutUs: 'Hakkımızda',
    sourcesAndLicensing: 'Kaynaklar ve Metodoloji',
    privacyPolicy: 'Gizlilik Politikası',
    termsOfUse: 'Kullanım Şartları',
    editorialPolicy: 'Yayın İlkeleri',
    contactUs: 'İletişim',
    copyrightNotice: 'Ümmet-i Muhammed\'e sahih İslami ilimleri ulaştırmak amacıyla hazırlanmıştır.',
    disclaimer: 'Bu sitedeki dini bilgiler ehli sünnet alimlerinin icmaı doğrultusunda eğitim amaçlıdır.'
  },
  fr: {
    siteTitle: 'Portail du Savoir Islamique',
    siteSubtitle: 'Le Saint Coran, Hadiths Authentiques, Invocations et Enseignements',
    navHome: 'Accueil',
    navQuran: 'Le Saint Coran',
    navHadith: 'Hadiths',
    navKalimas: 'Six Kalimas',
    navDuas: 'Invocations',
    navSeerah: 'Sîrah',
    navProphets: 'Prophètes',
    navSahaba: 'Compagnons',
    navEducation: 'Éducation',
    navTools: 'Outils',
    navPrayerTimes: 'Horaires de Prière',
    navTasbih: 'Tasbih Numérique',
    navZakat: 'Calculateur de Zakat',
    navCalendar: 'Calendrier Hégirien',
    navBookmarks: 'Favoris',
    navSearch: 'Recherche',
    navLanguage: 'Langue',
    navTheme: 'Thème',
    heroTitle: 'Apprenez l\'Islam Authentique en Toute Clarté',
    heroSubtitle: 'Découvrez le Coran avec des traductions reconnues, les recueils de hadiths authentiques, et des guides pratiques.',
    searchPlaceholder: 'Rechercher une sourate, un hadith, une doua...',
    searchBtn: 'Rechercher',
    quickAccessTitle: 'Les Piliers et Fondements de la Foi',
    quickAccessSubtitle: 'Ressources authentiques fondées sur le consensus savant traditionnel',
    allSurahs: 'Toutes les Sourates',
    allJuz: '30 Jouz',
    revelationMakki: 'Mecquoise',
    revelationMadani: 'Médinoise',
    versesCount: 'Versets',
    surahNumber: 'Sourate',
    juzNumber: 'Jouz',
    startReading: 'Lire la sourate',
    listenAudio: 'Écouter',
    arabicText: 'Texte Arabe',
    translation: 'Traduction',
    transliteration: 'Phonétique',
    copyVerse: 'Copier le verset',
    verseCopied: 'Verset copié!',
    bookmarkVerse: 'Enregistrer le verset',
    fontSize: 'Taille de police',
    aboutUs: 'À Propos',
    sourcesAndLicensing: 'Sources & Méthodologie',
    privacyPolicy: 'Politique de Confidentialité',
    termsOfUse: 'Conditions d\'Utilisation',
    editorialPolicy: 'Politique Éditoriale',
    contactUs: 'Contactez-nous',
    copyrightNotice: 'Dédié à la communauté musulmane avec des sources islamiques authentiques.',
    disclaimer: 'Le contenu religieux de ce site est à vocation éducative selon le consensus savant.'
  }
};

class I18nManager {
  constructor() {
    this.currentLang = localStorage.getItem('islamic_portal_lang') || 'en';
    if (!LANGUAGES.some(l => l.code === this.currentLang)) {
      this.currentLang = 'en';
    }
    this.listeners = [];
  }

  init() {
    this.applyLanguage(this.currentLang, false);
  }

  getLanguageInfo(code = this.currentLang) {
    return LANGUAGES.find(l => l.code === code) || LANGUAGES.find(l => l.code === 'en');
  }

  getAllLanguages() {
    return LANGUAGES;
  }

  setLanguage(code) {
    if (!LANGUAGES.some(l => l.code === code)) return;
    this.currentLang = code;
    localStorage.setItem('islamic_portal_lang', code);
    this.applyLanguage(code, true);
  }

  applyLanguage(code, notify = true) {
    const info = this.getLanguageInfo(code);
    document.documentElement.lang = code;
    document.documentElement.dir = info.dir;

    // Apply translations across data-i18n elements
    this.translateDOM();

    if (notify) {
      this.listeners.forEach(cb => cb(code, info));
    }
  }

  translateDOM() {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      const text = this.t(key);
      if (text) {
        if (el.tagName === 'INPUT' && el.getAttribute('type') === 'text') {
          el.placeholder = text;
        } else {
          el.textContent = text;
        }
      }
    });
  }

  t(key) {
    const langDict = TRANSLATIONS[this.currentLang] || {};
    if (langDict[key]) return langDict[key];
    const enDict = TRANSLATIONS.en || {};
    return enDict[key] || key;
  }

  formatNumber(num) {
    try {
      return new Intl.NumberFormat(this.currentLang).format(num);
    } catch {
      return String(num);
    }
  }

  subscribe(callback) {
    this.listeners.push(callback);
    return () => {
      this.listeners = this.listeners.filter(cb => cb !== callback);
    };
  }
}

window.I18n = new I18nManager();
