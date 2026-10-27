/**
 * ISLAMIC KNOWLEDGE PORTAL — UNIVERSAL PHONETIC & MULTI-REGION SEARCH ENGINE
 * Supports: English, Arabic, Urdu Script, Roman Urdu (Pak/India), Common Regional Aliases
 */

// 1. Phonetic Normalizer Function
function normalizeIslamicQuery(str) {
  if (!str) return '';
  let q = str.toLowerCase().trim();

  // Strip prefixes: 'surah', 'surat', 'sura', 'para', 'juz', 'hazrat', 'sayyidina'
  q = q.replace(/^(surah|surat|sura|para|juz|hazrat|sayyidina)\s+/i, '');
  q = q.replace(/^(سورہ|سورة|پارہ|حضرت)\s+/, '');

  // Strip definite articles: 'al-', 'ar-', 'as-', 'ash-', 'at-', 'an-', 'az-', 'ad-', etc.
  q = q.replace(/^(al-|ar-|as-|ash-|at-|an-|az-|ad-|adh-|aj-|akh-|al\s+|ar\s+|as\s+|ash\s+|at\s+|an\s+|az\s+|ad\s+)/i, '');
  q = q.replace(/^(ال)/, '');

  // Strip Harakat / Arabic diacritics
  q = q.replace(/[\u064B-\u065F\u0670\u06D6-\u06ED]/g, '');

  // Normalize Arabic/Urdu characters
  q = q.replace(/[إأآاٱ]/g, 'ا')
       .replace(/[ىيی]/g, 'ی')
       .replace(/[ةهہ]/g, 'ہ')
       .replace(/[كک]/g, 'ک')
       .replace(/[ؤ]/g, 'و')
       .replace(/[ئ]/g, 'ی');

  // Strip punctuation, hyphens, quotes
  q = q.replace(/[-'’`_.,!?()]/g, '');

  // Phonetic English vowel/consonant harmonization
  q = q.replace(/ee+/g, 'i').replace(/ii+/g, 'i');
  q = q.replace(/oo+/g, 'u').replace(/uu+/g, 'u');
  q = q.replace(/aa+/g, 'a')
       .replace(/eh\b/g, 'a')
       .replace(/ah\b/g, 'a');
  q = q.replace(/ph/g, 'f');

  // Deduplicate adjacent identical letters (e.g. bakra / baqarah, muzammil / muzzammil)
  q = q.replace(/(.)\1+/g, '$1');

  return q.trim();
}

// 2. Comprehensive 114 Surahs Regional & Phonetic Alias Registry
const SURAH_SEARCH_ALIASES = {
  1: { urduName: "سورہ فاتحہ", aliases: ["fatiha", "fateha", "alhamd", "alhamdolillah", "ummul quran", "فاتحہ", "سورہ فاتحہ", "ام الکتاب"] },
  2: { urduName: "سورہ بقرہ", aliases: ["baqarah", "baqara", "bakra", "surah bakra", "ayatul kursi", "kursi", "بقرہ", "سورہ بقرہ", "آیت الکرسی", "alif lam meem"] },
  3: { urduName: "سورہ آل عمران", aliases: ["imran", "aal e imran", "ale imran", "عمران", "سورہ آل عمران"] },
  4: { urduName: "سورہ النساء", aliases: ["nisa", "an-nisa", "nisaa", "نساء", "سورہ نساء"] },
  5: { urduName: "سورہ مائدہ", aliases: ["maidah", "maida", "al-maidah", "مائدہ", "سورہ مائدہ"] },
  6: { urduName: "سورہ انعام", aliases: ["anam", "al-anam", "inam", "انعام", "سورہ انعام"] },
  7: { urduName: "سورہ اعراف", aliases: ["araf", "al-araf", "aaraf", "اعراف", "سورہ اعراف"] },
  8: { urduName: "سورہ انفال", aliases: ["anfal", "al-anfal", "انفال", "سورہ انفال"] },
  9: { urduName: "سورہ توبہ", aliases: ["tawbah", "tawba", "tauba", "baraat", "توبہ", "سورہ توبہ"] },
  10: { urduName: "سورہ یونس", aliases: ["yunus", "younus", "یونس", "سورہ یونس"] },
  11: { urduName: "سورہ ہود", aliases: ["hud", "hood", "ہود", "سورہ ہود"] },
  12: { urduName: "سورہ یوسف", aliases: ["yusuf", "yousuf", "یوسف", "سورہ یوسف", "ahsanul qasas"] },
  13: { urduName: "سورہ رعد", aliases: ["rad", "raad", "ar-rad", "رعد", "سورہ رعد"] },
  14: { urduName: "سورہ ابراہیم", aliases: ["ibrahim", "ibraheem", "ابراہیم", "سورہ ابراہیم"] },
  15: { urduName: "سورہ حجر", aliases: ["hijr", "al-hijr", "حجر", "سورہ حجر"] },
  16: { urduName: "سورہ نحل", aliases: ["nahl", "an-nahl", "نحل", "سورہ نحل"] },
  17: { urduName: "سورہ بنی اسرائیل", aliases: ["isra", "al-isra", "bani israel", "اسراء", "بنی اسرائیل", "سورہ بنی اسرائیل"] },
  18: { urduName: "سورہ کہف", aliases: ["kahf", "kahaf", "al-kahf", "surah kahaf", "کہف", "سورہ کہف", "ashab e kahf", "jummah surah", "jumma"] },
  19: { urduName: "سورہ مریم", aliases: ["maryam", "mariam", "مریم", "سورہ مریم"] },
  20: { urduName: "سورہ طٰہٰ", aliases: ["taha", "ta-ha", "طہ", "سورہ طہ"] },
  21: { urduName: "سورہ انبیاء", aliases: ["anbiya", "al-anbiya", "ambiya", "انبیاء", "سورہ انبیاء"] },
  22: { urduName: "سورہ حج", aliases: ["hajj", "al-hajj", "حج", "سورہ حج"] },
  23: { urduName: "سورہ مومنون", aliases: ["muminun", "al-muminun", "mominoon", "مومنون", "سورہ مومنون"] },
  24: { urduName: "سورہ نور", aliases: ["nur", "noor", "an-nur", "surah noor", "نور", "سورہ نور", "ayatun noor"] },
  25: { urduName: "سورہ فرقان", aliases: ["furqan", "al-furqan", "فرقان", "سورہ فرقان"] },
  26: { urduName: "سورہ شعراء", aliases: ["shuara", "ash-shuara", "شعراء", "سورہ شعراء"] },
  27: { urduName: "سورہ نمل", aliases: ["naml", "an-naml", "نمل", "سورہ نمل"] },
  28: { urduName: "سورہ قصص", aliases: ["qasas", "al-qasas", "قصص", "سورہ قصص"] },
  29: { urduName: "سورہ عنکبوت", aliases: ["ankabut", "al-ankabut", "ankboot", "عنکبوت", "سورہ عنکبوت"] },
  30: { urduName: "سورہ روم", aliases: ["rum", "al-rum", "room", "روم", "سورہ روم"] },
  31: { urduName: "سورہ لقمان", aliases: ["luqman", "lokman", "لقمان", "سورہ لقمان"] },
  32: { urduName: "سورہ سجدہ", aliases: ["sajdah", "as-sajdah", "sajda", "سجدہ", "سورہ سجدہ"] },
  33: { urduName: "سورہ احزاب", aliases: ["ahzab", "al-ahzab", "احزاب", "سورہ احزاب"] },
  34: { urduName: "سورہ سبا", aliases: ["saba", "sheba", "سبا", "سورہ سبا"] },
  35: { urduName: "سورہ فاطر", aliases: ["fatir", "faater", "فاطر", "سورہ فاطر"] },
  36: { urduName: "سورہ یٰسین", aliases: ["yasin", "yaseen", "surah yaseen", "surah yasin", "يس", "یسین", "سورہ یٰسین", "سورہ یسین", "quran ka dil", "heart of quran"] },
  37: { urduName: "سورہ صافات", aliases: ["saffat", "as-saffat", "صافات", "سورہ صافات"] },
  38: { urduName: "سورہ ص", aliases: ["sad", "saad", "صاد", "سورہ ص"] },
  39: { urduName: "سورہ زمر", aliases: ["zumar", "az-zumar", "زمر", "سورہ زمر"] },
  40: { urduName: "سورہ غافر", aliases: ["ghafir", "mumin", "غافر", "سورہ غافر"] },
  41: { urduName: "سورہ فصلت", aliases: ["fussilat", "ha meem sajdah", "فصلت", "سورہ فصلت"] },
  42: { urduName: "سورہ شوری", aliases: ["shura", "ash-shura", "شوری", "سورہ شوری"] },
  43: { urduName: "سورہ زخرف", aliases: ["zukhruf", "az-zukhruf", "زخرف", "سورہ زخرف"] },
  44: { urduName: "سورہ دخان", aliases: ["dukhan", "ad-dukhan", "دخان", "سورہ دخان"] },
  45: { urduName: "سورہ جاثیہ", aliases: ["jathiyah", "al-jathiya", "جاثیہ", "سورہ جاثیہ"] },
  46: { urduName: "سورہ احقاف", aliases: ["ahqaf", "al-ahqaf", "احقاف", "سورہ احقاف"] },
  47: { urduName: "سورہ محمد", aliases: ["muhammad", "mohammad", "محمد", "سورہ محمد"] },
  48: { urduName: "سورہ فتح", aliases: ["fath", "al-fath", "fateh", "inna fatahna", "فتح", "سورہ فتح"] },
  49: { urduName: "سورہ حجرات", aliases: ["hujurat", "al-hujurat", "حجرات", "سورہ حجرات"] },
  50: { urduName: "سورہ ق", aliases: ["qaf", "qaaf", "قاف", "سورہ ق"] },
  51: { urduName: "سورہ ذاریات", aliases: ["dhariyat", "adh-dhariyat", "ذاریات", "سورہ ذاریات"] },
  52: { urduName: "سورہ طور", aliases: ["tur", "at-tur", "toor", "طور", "سورہ طور"] },
  53: { urduName: "سورہ نجم", aliases: ["najm", "an-najm", "نجم", "سورہ نجم"] },
  54: { urduName: "سورہ قمر", aliases: ["qamar", "al-qamar", "قمر", "سورہ قمر"] },
  55: { urduName: "سورہ الرحمٰن", aliases: ["rahman", "rehman", "ar-rahman", "surah rehman", "ar-rehman", "رحمن", "رحمٰن", "سورہ رحمن", "سورہ الرحمٰن", "fabi ayyi ala"] },
  56: { urduName: "سورہ واقعہ", aliases: ["waqiah", "waqia", "al-waqiah", "al-waqia", "surah waqia", "surah waqiah", "واقعہ", "سورہ واقعہ", "سورہ الواقعہ", "surah rizq", "surah barakah"] },
  57: { urduName: "سورہ حدید", aliases: ["hadid", "al-hadid", "hadeed", "حدید", "سورہ حدید"] },
  58: { urduName: "سورہ مجادلہ", aliases: ["mujadila", "al-mujadila", "مجادلہ", "سورہ مجادلہ"] },
  59: { urduName: "سورہ حشر", aliases: ["hashr", "al-hashr", "حشر", "سورہ حشر"] },
  60: { urduName: "سورہ ممتحنہ", aliases: ["mumtahanah", "al-mumtahana", "ممتحنہ", "سورہ ممتحنہ"] },
  61: { urduName: "سورہ صف", aliases: ["saff", "as-saff", "صف", "سورہ صف"] },
  62: { urduName: "سورہ جمعہ", aliases: ["jumuah", "al-jumuah", "jumah", "jumma", "جمعہ", "سورہ جمعہ"] },
  63: { urduName: "سورہ منافقون", aliases: ["munafiqun", "al-munafiqun", "منافقون", "سورہ منافقون"] },
  64: { urduName: "سورہ تغابن", aliases: ["taghabun", "at-taghabun", "تغابن", "سورہ تغابن"] },
  65: { urduName: "سورہ طلاق", aliases: ["talaq", "at-talaq", "طلاق", "سورہ طلاق"] },
  66: { urduName: "سورہ تحریم", aliases: ["tahrim", "at-tahrim", "تحریم", "سورہ تحریم"] },
  67: { urduName: "سورہ الملک", aliases: ["mulk", "al-mulk", "surah mulk", "tabarakallazi", "tabarak", "تبارک الذی", "ملک", "سورہ ملک", "سورہ الملک", "surah tabarak", "qabar ka azab"] },
  68: { urduName: "سورہ قلم", aliases: ["qalam", "al-qalam", "noon", "قلم", "سورہ قلم"] },
  69: { urduName: "سورہ حاقہ", aliases: ["haqqah", "al-haqqah", "حاقہ", "سورہ حاقہ"] },
  70: { urduName: "سورہ معارج", aliases: ["maarij", "al-maarij", "معارج", "سورہ معارج"] },
  71: { urduName: "سورہ نوح", aliases: ["nuh", "nooh", "نوح", "سورہ نوح"] },
  72: { urduName: "سورہ جن", aliases: ["jinn", "al-jinn", "جن", "سورہ جن"] },
  73: { urduName: "سورہ مزمل", aliases: ["muzzammil", "muzammil", "al-muzzammil", "مزمل", "سورہ مزمل"] },
  74: { urduName: "سورہ مدثر", aliases: ["muddaththir", "muddassir", "mudassir", "مدثر", "سورہ مدثر"] },
  75: { urduName: "سورہ قیامت", aliases: ["qiyamah", "al-qiyamah", "قیامت", "سورہ قیامت"] },
  76: { urduName: "سورہ انسان", aliases: ["insan", "al-insan", "dahr", "انسان", "سورہ انسان"] },
  77: { urduName: "سورہ مرسلات", aliases: ["mursalat", "al-mursalat", "مرسلات", "سورہ مرسلات"] },
  78: { urduName: "سورہ نباء", aliases: ["naba", "an-naba", "amma", "نباء", "عم", "سورہ نباء", "amma para"] },
  79: { urduName: "سورہ نازعات", aliases: ["naziat", "an-naziat", "نازعات", "سورہ نازعات"] },
  80: { urduName: "سورہ عبس", aliases: ["abasa", "عبس", "سورہ عبس"] },
  81: { urduName: "سورہ تکویر", aliases: ["takwir", "at-takwir", "تکویر", "سورہ تکویر"] },
  82: { urduName: "سورہ انفطار", aliases: ["infitar", "al-infitar", "انفطار", "سورہ انفطار"] },
  83: { urduName: "سورہ مطففین", aliases: ["mutaffifin", "al-mutaffifin", "مطففین", "سورہ مطففین"] },
  84: { urduName: "سورہ انشقاق", aliases: ["inshiqaq", "al-inshiqaq", "انشقاق", "سورہ انشقاق"] },
  85: { urduName: "سورہ بروج", aliases: ["buruj", "al-buruj", "بروج", "سورہ بروج"] },
  86: { urduName: "سورہ طارق", aliases: ["tariq", "at-tariq", "طارق", "سورہ طارق"] },
  87: { urduName: "سورہ اعلیٰ", aliases: ["ala", "al-ala", "اعلی", "سورہ اعلی"] },
  88: { urduName: "سورہ غاشیہ", aliases: ["ghashiyah", "al-ghashiyah", "غاشیہ", "سورہ غاشیہ"] },
  89: { urduName: "سورہ فجر", aliases: ["fajr", "al-fajr", "فجر", "سورہ فجر"] },
  90: { urduName: "سورہ بلد", aliases: ["balad", "al-balad", "بلد", "سورہ بلد"] },
  91: { urduName: "سورہ شمس", aliases: ["shams", "ash-shams", "شمس", "سورہ شمس"] },
  92: { urduName: "سورہ لیل", aliases: ["layl", "al-layl", "لیل", "سورہ لیل"] },
  93: { urduName: "سورہ ضحیٰ", aliases: ["duha", "ad-duha", "ضحی", "سورہ ضحی"] },
  94: { urduName: "سورہ انشراح", aliases: ["sharh", "ash-sharh", "inshirah", "alam nashrah", "شرح", "سورہ انشراح"] },
  95: { urduName: "سورہ تین", aliases: ["tin", "at-tin", "teen", "wa at-teen", "تین", "سورہ تین"] },
  96: { urduName: "سورہ علق", aliases: ["alaq", "al-alaq", "iqra", "علق", "سورہ علق"] },
  97: { urduName: "سورہ قدر", aliases: ["qadr", "al-qadr", "qadar", "laylatul qadr", "قدر", "سورہ قدر"] },
  98: { urduName: "سورہ بینہ", aliases: ["bayyinah", "al-bayyinah", "بینہ", "سورہ بینہ"] },
  99: { urduName: "سورہ زلزلہ", aliases: ["zalzalah", "az-zalzalah", "zilzal", "زلزلہ", "سورہ زلزلہ"] },
  100: { urduName: "سورہ عادیات", aliases: ["adiyat", "al-adiyat", "عادیات", "سورہ عادیات"] },
  101: { urduName: "سورہ قارعہ", aliases: ["qariah", "al-qariah", "قارعہ", "سورہ قارعہ"] },
  102: { urduName: "سورہ تکاثر", aliases: ["takathur", "at-takathur", "تکاثر", "سورہ تکاثر"] },
  103: { urduName: "سورہ عصر", aliases: ["asr", "al-asr", "عصر", "سورہ عصر"] },
  104: { urduName: "سورہ ہمزہ", aliases: ["humazah", "al-humazah", "ہمزہ", "سورہ ہمزہ"] },
  105: { urduName: "سورہ فیل", aliases: ["fil", "al-fil", "feel", "alam tara kayfa", "فیل", "سورہ فیل"] },
  106: { urduName: "سورہ قریش", aliases: ["quraysh", "quraish", "قریش", "سورہ قریش"] },
  107: { urduName: "سورہ ماعون", aliases: ["maun", "al-maun", "ماعون", "سورہ ماعون"] },
  108: { urduName: "سورہ کوثر", aliases: ["kawthar", "al-kawthar", "kausar", "kousar", "inna atayna", "کوثر", "سورہ کوثر"] },
  109: { urduName: "سورہ کافرون", aliases: ["kafirun", "al-kafirun", "kafireen", "char qul", "4 qul", "کافرون", "سورہ کافرون"] },
  110: { urduName: "سورہ نصر", aliases: ["nasr", "an-nasr", "iza ja a nasrullah", "نصر", "سورہ نصر"] },
  111: { urduName: "سورہ لہب", aliases: ["masad", "al-masad", "lahab", "tabbat yada", "مسد", "لہب", "سورہ لہب"] },
  112: { urduName: "سورہ اخلاص", aliases: ["ikhlas", "al-ikhlas", "tauheed", "qul huwallahu ahad", "char qul", "4 qul", "اخلاص", "سورہ اخلاص"] },
  113: { urduName: "سورہ فلق", aliases: ["falaq", "al-falaq", "qul aoodhu bi rabbil falaq", "char qul", "4 qul", "فلق", "سورہ فلق"] },
  114: { urduName: "سورہ ناس", aliases: ["nas", "an-nas", "naas", "qul aoodhu bi rabbin nas", "char qul", "4 qul", "ناس", "سورہ ناس"] }
};

// 3. Educational & Practice Guides with Topic Keywords
const EDUCATIONAL_SEARCH_PAGES = [
  {
    title: "Dr. Israr Ahmed Video Library (Verified Catalog)",
    snippet: "148 verified lecture records across 7 series, including Arbaeen-e-Nawawi, Al-Huda and Muntakhab Nisab, linked to the official Tanzeem-e-Islami archive.",
    url: "dr-israr-ahmed.html",
    keywords: ["dr israr", "israr ahmed", "israr ahmad", "tanzeem", "bayan ul quran", "arbaeen", "arbaeen e nawawi", "al huda", "muntakhab nisab", "lectures", "videos", "taqreer", "bayan", "ڈاکٹر اسرار", "اسرار احمد", "بیان"]
  },
  {
    title: "Complete Janazah (Funeral Prayer) Guide",
    snippet: "4 Takbirs step-by-step, adult and child duas, Madhhab differences, and graveyard etiquette.",
    url: "janazah-guide.html",
    keywords: ["janazah", "funeral", "mayyit", "burial", "takbir", "grave", "death", "condolence", "taziyah", "fard kifayah", "namaz e janaza", "janaza ki dua", "janaze ka tarika"]
  },
  {
    title: "Complete Eid Prayer Guide (Eid al-Fitr & Eid al-Adha)",
    snippet: "Hanafi 6 extra Takbirs vs Shafi'i 12 Takbirs, Takbirat al-Tashreeq, Zakat al-Fitr, Qurbani, and Sunan.",
    url: "eid-guide.html",
    keywords: ["eid", "fitr", "adha", "tashreeq", "qurbani", "udhiyah", "takbeer", "khutbah", "shawwal", "dhul hijjah", "eid ki namaz", "eid ka tarika", "fitrana"]
  },
  {
    title: "Step-by-Step Salah (Five Daily Prayers) Guide",
    snippet: "Visual positions, rak'ahs, recitations in Arabic/Urdu, and meanings for Fajr, Dhuhr, Asr, Maghrib, and Isha.",
    url: "salah-guide.html",
    keywords: ["salah", "namaz", "prayer", "rakah", "ruku", "sujud", "tashahhud", "fard", "sunnah", "namaz ka tarika", "namaz seekhein", "tariqa namaz"]
  },
  {
    title: "Ablution (Wudu) & Purification Guide",
    snippet: "Obligatory steps, sunnah acts, wiping over socks (masah), and nullifiers according to authentic Sunnah.",
    url: "wudu-guide.html",
    keywords: ["wudu", "ablution", "purification", "taharah", "tayammum", "ghusl", "wudu ka tarika", "wudu ke farz", "ghusl ka tarika", "masah"]
  },
  {
    title: "Zakat Calculator & Complete Fiqh Guide",
    snippet: "Calculate 2.5% Zakat on gold, silver, cash, savings, stocks, and business inventory.",
    url: "zakat-calculator.html",
    keywords: ["zakat", "nisab", "charity", "gold", "silver", "wealth", "zakat hisab", "zakat calculator", "zakat ka nisab"]
  },
  {
    title: "Astronomical Solar Prayer Times & Qiblah",
    snippet: "Calculated solar prayer times and Qibla compass direction for major global cities.",
    url: "prayer-times.html",
    keywords: ["prayer times", "salat times", "namaz time", "azan", "fajr", "maghrib", "dhuhr", "asr", "isha", "qibla", "namaz ka waqt"]
  },
  {
    title: "Digital Tasbih Counter & Daily Dhikr",
    snippet: "Interactive counter with vibration/sound feedback and authentic post-prayer supplications.",
    url: "tasbih.html",
    keywords: ["tasbih", "tasbeeh", "dhikr", "zikr", "counter", "subhanallah", "alhamdulillah", "allahu akbar", "astaghfar", "tasbeeh fatimi"]
  },
  {
    title: "Lunar Hijri Calendar & Converter",
    snippet: "Live Islamic date and Gregorian-to-Hijri calendar converter with sacred months.",
    url: "calendar.html",
    keywords: ["calendar", "hijri", "islamic date", "ramadan date", "eid date", "muharram", "tarikh"]
  },
  {
    title: "Download Android APK & Offline Application",
    snippet: "Official release APK download, SHA-256 verification, and 100% offline Quran reading.",
    url: "download-app.html",
    keywords: ["app", "apk", "android", "download", "offline", "install", "mobile", "pwa"]
  },
  {
    title: "Islamic Educational Articles & Knowledge Library",
    snippet: "Curated library of in-depth Islamic treatises, beginner guides, and 100-topic syllabus.",
    url: "articles/index.html",
    keywords: ["articles","library","guides","treatises","learning","study","syllabus","roadmap","knowledge"]
  },
  {
    title: "A Complete Beginner's Guide to Islam",
    snippet: "Foundational beliefs, purpose of worship, 6 articles of faith, 5 pillars, and learning pathway.",
    url: "articles/beginners-guide-to-islam.html",
    keywords: ["beginner","new muslim","convert","revert","basics","beliefs","learning","intro","introduction","islam guide"]
  },
  {
    title: "How to Read and Understand the Quran",
    snippet: "Surah architecture, Makki vs Madani context, Arabic recitation merits, Tadabbur, and 15-minute daily routine.",
    url: "articles/how-to-read-and-understand-quran.html",
    keywords: ["read quran","understand quran","quran guide","tadabbur","tilawah","quran study","makki","madani"]
  },
  {
    title: "Quran Translation vs Tafsir: Understanding the Critical Difference",
    snippet: "Why translation is not the Quran. Explores untranslatability, classical Tafsir, and transliteration pitfalls.",
    url: "articles/quran-translation-vs-tafsir.html",
    keywords: ["tafsir","translation","transliteration","difference","tabari","ibn kathir","meaning of quran","ijaz"]
  },
  {
    title: "Tawhid and the Shahadah: Meaning, Categories & Significance",
    snippet: "Theological treatise on Rububiyyah, Uluhiyyah, Asma' was-Sifat, the 7 conditions of Shahadah, and negating Shirk.",
    url: "articles/tawhid-and-the-shahadah.html",
    keywords: ["tawhid","shahadah","monotheism","rububiyyah","uluhiyyah","asma was sifat","shirk","riya","creed","aqeedah"]
  },
  {
    title: "The Five Pillars of Islam: A Detailed Learning Guide",
    snippet: "Scholarly guide to Shahadah, Salah, Zakat, Sawm, and Hajj with spiritual wisdom and proofs.",
    url: "articles/five-pillars-of-islam.html",
    keywords: ["five pillars","arkan al-islam","pillars","shahadah","salah","zakat","sawm","hajj","arkan"]
  },
  {
    title: "Salah: A Complete Beginner's Learning Guide",
    snippet: "Step-by-step prayer guide with Arabic recitations, meanings, postures, school differences, and Khushu'.",
    url: "articles/salah-complete-beginners-guide.html",
    keywords: ["salah guide","how to pray","namaz guide","prayer steps","rakah","ruku","sujud","tashahhud","fatihah"]
  },
  {
    title: "Wudu, Ghusl and Tayammum: A Practical Study Guide",
    snippet: "Taharah guide covering Quranic obligations, Sunan, nullifiers, footwear wiping, Ghusl bath, and dry ablution.",
    url: "articles/wudu-ghusl-tayammum-guide.html",
    keywords: ["wudu guide","ghusl guide","tayammum guide","taharah","purification","ablution","bath","nawaqid"]
  },
  {
    title: "Hadith and Sunnah: Collections, Numbering Systems & Authenticity",
    snippet: "Mustalah al-Hadith guide: Sunnah vs Hadith, Isnad, Matn, Sahih criteria, Kutub al-Sittah, and numbering.",
    url: "articles/hadith-and-sunnah-authenticity.html",
    keywords: ["hadith guide","authenticity","isnad","matn","kutub al-sittah","bukhari","muslim","numbering","sahih","daif"]
  },
  {
    title: "Daily Adhkar and Supplications: A Source-Based Guide",
    snippet: "Verified daily remembrance: morning, evening, post-prayer, and bedtime Adhkar with vocalized Arabic.",
    url: "articles/daily-adhkar-and-supplications.html",
    keywords: ["daily adhkar","supplications","morning adhkar","evening adhkar","sayyidul istighfar","hisnul muslim","tasbih fatimi"]
  },
  {
    title: "Zakat: A Detailed Educational and Calculation Guide",
    snippet: "Comprehensive Zakat treatise: Gold and Silver Nisab, eligible wealth, debt deductions, and 8 Quranic categories.",
    url: "articles/zakat-educational-calculation-guide.html",
    keywords: ["zakat guide","zakat calculation","nisab","gold nisab","silver nisab","wealth purification","8 recipients","masarif"]
  },
  {
    title: "Seerah of Prophet Muhammad ﷺ: A Guided Journey",
    snippet: "Chronological, source-based introduction to the Prophet's life, the Hijrah, Madinah, and the Farewell Sermon.",
    url: "articles/seerah-of-prophet-muhammad.html",
    keywords: ["seerah","sirah","prophet muhammad","life of prophet","hijrah","makkah","madinah","farewell sermon","biography","seerat"]
  },
  {
    title: "Stories of the Prophets: Quranic Narratives and Their Lessons",
    snippet: "Adam, Nuh, Ibrahim, Yusuf, Musa, Dawud, Sulayman, Ayyub and Isa with verse references and themes.",
    url: "articles/stories-of-the-prophets.html",
    keywords: ["stories of the prophets","qisas al anbiya","adam","nuh","ibrahim","yusuf","musa","isa","ayyub","sulayman","prophet stories"]
  },
  {
    title: "The Sahaba: Lives That Shaped the Ummah",
    snippet: "Abu Bakr, Umar, Uthman, Ali, Khadijah, Aisha, Bilal and Salman, with principles for discussing their differences.",
    url: "articles/sahaba-biographies.html",
    keywords: ["sahaba","companions","abu bakr","umar","uthman","ali","khadijah","aisha","bilal","salman farsi","rashidun","sahabi"]
  },
  {
    title: "Islamic History and Civilization: A Framework for Study",
    snippet: "Rashidun, Umayyad, Abbasid, Al-Andalus, Ottoman, Safavid and Mughal periods, colonialism and modernity.",
    url: "articles/islamic-history-civilization.html",
    keywords: ["islamic history","civilization","rashidun","umayyad","abbasid","andalus","ottoman","mughal","safavid","caliphate","history framework"]
  },
  {
    title: "Islamic Manners and Character: Adab in Daily Life",
    snippet: "Adab with Allah, parents, family, neighbours and guests; speech, anger, humility, gratitude and habits.",
    url: "articles/islamic-manners-and-character.html",
    keywords: ["adab","manners","character","akhlaq","parents","neighbours","backbiting","anger","humility","gratitude","kindness"]
  },
  {
    title: "Understanding Fasting and Ramadan: A Complete Learning Guide",
    snippet: "Obligation, exemptions, suhoor and iftar, invalidators, Tarawih, Laylat al-Qadr, Zakat al-Fitr and I'tikaf.",
    url: "articles/fasting-and-ramadan.html",
    keywords: ["fasting","ramadan","sawm","suhoor","iftar","tarawih","laylat al qadr","zakat al fitr","itikaf","roza"]
  },
  {
    title: "Hajj and Umrah: A Learning Guide",
    snippet: "Conditions, Ihram, the rites of Dhul Hijjah, Tawaf, Sa'i, Arafah, Muzdalifah, Mina, sacrifice and preparation.",
    url: "articles/hajj-and-umrah-guide.html",
    keywords: ["hajj","umrah","ihram","tawaf","sai","arafah","muzdalifah","mina","jamarat","dhul hijjah","pilgrimage","haj guide"]
  },
  {
    title: "Understanding the 99 Names of Allah",
    snippet: "The hadith and its meaning, whether the number is exhaustive, categories of names, and how to memorise properly.",
    url: "articles/ninety-nine-names-of-allah.html",
    keywords: ["99 names","names of allah","asma ul husna","al rahman","al ghafur","al wadud","tawhid al asma","sifat","allah names"]
  },
  {
    title: "Repentance, Dhikr and Spiritual Development",
    snippet: "Conditions of tawbah, dhikr and adhkar, self-accounting, diseases of the heart, and a 30-day plan.",
    url: "articles/repentance-dhikr-spiritual-development.html",
    keywords: ["tawbah","repentance","dhikr","adhkar","istighfar","muhasabah","spirituality","tazkiyah","heart","sins","forgiveness"]
  },
  {
    title: "A Structured Learning Path for New Muslims",
    snippet: "A realistic 12-month path: shahadah, prayer, pillars, Quran, Seerah, hadith, halal and haram, and community.",
    url: "articles/new-muslim-learning-path.html",
    keywords: ["new muslim","convert","revert","learning path","beginner muslim","shahadah","how to become muslim","new shahada","islam journey"]
  },
  {
    title: "Islamic Finance and Riba: A Source-Based Introduction",
    snippet: "Why Islam regulates money, the two classical categories of riba, modern loans and credit cards, halal financing structures, gharar, and zakat on investments.",
    url: "articles/islamic-finance-and-riba.html",
    keywords: ["riba","interest","usury","islamic finance","halal mortgage","murabaha","musharakah","ijarah","sukuk","takaful","gharar","credit card","bank interest","shariah finance"]
  },
  {
    title: "Marriage and Family in Islam: Rights, Contracts and Real Life",
    snippet: "The Quranic purpose of marriage, choosing a spouse, the marriage contract and mahr, mutual rights, conflict resolution, divorce and raising children.",
    url: "articles/marriage-and-family-in-islam.html",
    keywords: ["marriage","nikah","mahr","dowry","wali","guardian","divorce","talaq","khul","iddah","family","parenting","spouse","wife","husband"]
  },
  {
    title: "Death and the Afterlife: A Quranic and Prophetic Overview",
    snippet: "Preparing a will and settling debts, deathbed etiquette, burial rites, the barzakh, resurrection, judgment, and Paradise and Hell.",
    url: "articles/death-and-the-afterlife.html",
    keywords: ["death","afterlife","akhirah","barzakh","grave","resurrection","qiyamah","judgment day","paradise","jannah","hell","jahannam","janazah","will","wasiyyah"]
  },
  {
    title: "Halal and Haram Food: Principles, Practice and Doubts",
    snippet: "The default of permissibility, explicit prohibitions, slaughter conditions, alcohol, seafood differences, additives, and dealing with genuine doubt.",
    url: "articles/halal-and-haram-food.html",
    keywords: ["halal","haram","food","pork","alcohol","khamr","slaughter","zabihah","seafood","shellfish","gelatine","vanilla extract","doubt","tayyib","diet"]
  },
  {
    title: "Environment and Stewardship: The Islamic Case for Caring for the Earth",
    snippet: "Khalifah and mizan, water and waste, kindness to animals, planting trees, moderation in consumption, and practical environmental action.",
    url: "articles/environment-and-stewardship.html",
    keywords: ["environment","stewardship","khalifah","mizan","climate","water","waste","animals","trees","conservation","ecology","moderation","israf","nature"]
  }
];


// 3a. Phase 8 Expanded Search Datasets
const SEERAH_SEARCH_CHAPTERS = [
  {
    "num": 1,
    "title": "Pre-Islamic Arabia & Makkan Sanctuary",
    "keywords": [
      "jahiliyyah",
      "mecca",
      "sanctuary",
      "abrahamic",
      "quraysh"
    ],
    "url": "seerah.html#ch1"
  },
  {
    "num": 2,
    "title": "Blessed Birth & Desert Infancy",
    "keywords": [
      "birth",
      "year of elephant",
      "aminah",
      "halimah",
      "as-sadiyyah"
    ],
    "url": "seerah.html#ch2"
  },
  {
    "num": 3,
    "title": "Childhood & Guardianship of Abu Talib",
    "keywords": [
      "childhood",
      "abu talib",
      "shepherding",
      "bahira"
    ],
    "url": "seerah.html#ch3"
  },
  {
    "num": 4,
    "title": "Hilf al-Fudul & Title Al-Amin",
    "keywords": [
      "hilf al-fudul",
      "al-amin",
      "as-sadiq",
      "trustworthy"
    ],
    "url": "seerah.html#ch4"
  },
  {
    "num": 5,
    "title": "Marriage with Khadijah & Sacred Domesticity",
    "keywords": [
      "khadijah",
      "marriage",
      "domestic",
      "tahira"
    ],
    "url": "seerah.html#ch5"
  },
  {
    "num": 6,
    "title": "Rebuilding of Kaaba & Arbiter of the Black Stone",
    "keywords": [
      "kaaba",
      "black stone",
      "hajar al-aswad",
      "rebuilding"
    ],
    "url": "seerah.html#ch6"
  },
  {
    "num": 7,
    "title": "First Revelation at Cave Hira",
    "keywords": [
      "hira",
      "revelation",
      "iqra",
      "jibril",
      "prophethood"
    ],
    "url": "seerah.html#ch7"
  },
  {
    "num": 8,
    "title": "Early Secret Da'wah & Dar al-Arqam",
    "keywords": [
      "dar al-arqam",
      "dawah",
      "early converts",
      "secret"
    ],
    "url": "seerah.html#ch8"
  },
  {
    "num": 9,
    "title": "Public Proclamation at Mount Safa & Persecution",
    "keywords": [
      "safa",
      "public proclamation",
      "persecution",
      "quraysh boycott"
    ],
    "url": "seerah.html#ch9"
  },
  {
    "num": 10,
    "title": "Migrations to Abyssinia & Negus Justice",
    "keywords": [
      "abyssinia",
      "habasha",
      "negus",
      "najjashi",
      "jafar"
    ],
    "url": "seerah.html#ch10"
  },
  {
    "num": 11,
    "title": "The Banu Hashim Boycott at Shib Abi Talib",
    "keywords": [
      "boycott",
      "shib abi talib",
      "embargo",
      "siege"
    ],
    "url": "seerah.html#ch11"
  },
  {
    "num": 12,
    "title": "Year of Sorrow & Mission to Ta'if",
    "keywords": [
      "year of sorrow",
      "taif",
      "ta'if",
      "khadijah death",
      "abu talib death"
    ],
    "url": "seerah.html#ch12"
  },
  {
    "num": 13,
    "title": "The Miraculous Night Journey (Al-Isra wal-Mi'raj)",
    "keywords": [
      "isra",
      "miraj",
      "night journey",
      "masjid al-aqsa",
      "five prayers"
    ],
    "url": "seerah.html#ch13"
  },
  {
    "num": 14,
    "title": "Pledges of Aqabah & Ansar Allegiance",
    "keywords": [
      "aqabah",
      "pledge of aqabah",
      "ansar",
      "yathrib"
    ],
    "url": "seerah.html#ch14"
  },
  {
    "num": 15,
    "title": "The Great Hijrah to Madinah & Cave Thawr",
    "keywords": [
      "hijrah",
      "cave thawr",
      "madinah",
      "migration",
      "abu bakr"
    ],
    "url": "seerah.html#ch15"
  },
  {
    "num": 16,
    "title": "Founding the Madinan State & Constitution",
    "keywords": [
      "madinah constitution",
      "mithaq al-madinah",
      "masjid an-nabawi",
      "brotherhood"
    ],
    "url": "seerah.html#ch16"
  },
  {
    "num": 17,
    "title": "Battle of Badr: The Day of Criterion (Yawm al-Furqan)",
    "keywords": [
      "badr",
      "battle of badr",
      "furqan",
      "victory"
    ],
    "url": "seerah.html#ch17"
  },
  {
    "num": 18,
    "title": "Battle of Uhud: Trial and Steadfastness",
    "keywords": [
      "uhud",
      "battle of uhud",
      "hamzah",
      "archers"
    ],
    "url": "seerah.html#ch18"
  },
  {
    "num": 19,
    "title": "Battle of the Trench (Al-Khandaq / Confederates)",
    "keywords": [
      "trench",
      "khandaq",
      "ahzab",
      "salman al-farsi",
      "confederates"
    ],
    "url": "seerah.html#ch19"
  },
  {
    "num": 20,
    "title": "Treaty of Hudaybiyyah & Bay'at ar-Ridwan",
    "keywords": [
      "hudaybiyyah",
      "hudaybiyah",
      "treaty",
      "bayat al-ridwan",
      "manifest victory"
    ],
    "url": "seerah.html#ch20"
  },
  {
    "num": 21,
    "title": "Letters to World Emperors & Kings",
    "keywords": [
      "letters",
      "heraclius",
      "chosroes",
      "negus",
      "muqawqis",
      "kings"
    ],
    "url": "seerah.html#ch21"
  },
  {
    "num": 22,
    "title": "Expedition to Khaybar & Conquest of Oasis",
    "keywords": [
      "khaybar",
      "oasis",
      "ali",
      "fortress",
      "peace"
    ],
    "url": "seerah.html#ch22"
  },
  {
    "num": 23,
    "title": "The Conquest of Makkah (Fath Makkah)",
    "keywords": [
      "fath makkah",
      "conquest of mecca",
      "cleansing of kaaba",
      "general amnesty"
    ],
    "url": "seerah.html#ch23"
  },
  {
    "num": 24,
    "title": "Battle of Hunayn, Siege of Ta'if & Tabuk",
    "keywords": [
      "hunayn",
      "tabuk",
      "delegations",
      "year of delegations"
    ],
    "url": "seerah.html#ch24"
  },
  {
    "num": 25,
    "title": "Farewell Pilgrimage (Hajjat al-Wada) & Demise",
    "keywords": [
      "farewell pilgrimage",
      "hajjat al-wada",
      "farewell sermon",
      "demise",
      "wafat",
      "ar-rafiq al-ala"
    ],
    "url": "seerah.html#ch25"
  }
];

const SAHABA_SEARCH_PROFILES = [
  {
    "name": "Abu Bakr as-Siddiq",
    "title": "The First Caliph & As-Siddiq",
    "keywords": [
      "abu bakr",
      "siddiq",
      "caliph",
      "thawr",
      "ridda",
      "khulafa"
    ],
    "url": "sahaba.html#abu-bakr"
  },
  {
    "name": "Umar ibn al-Khattab",
    "title": "Al-Faruq & The Second Caliph",
    "keywords": [
      "umar",
      "farooq",
      "faruq",
      "khattab",
      "caliph",
      "justice",
      "khulafa"
    ],
    "url": "sahaba.html#umar"
  },
  {
    "name": "Uthman ibn Affan",
    "title": "Dhun-Nurayn & The Third Caliph",
    "keywords": [
      "uthman",
      "affan",
      "dhun nurayn",
      "quran compilation",
      "caliph",
      "khulafa"
    ],
    "url": "sahaba.html#uthman"
  },
  {
    "name": "Ali ibn Abi Talib",
    "title": "Asadullah & The Fourth Caliph",
    "keywords": [
      "ali",
      "abu talib",
      "asadullah",
      "caliph",
      "khaybar",
      "khulafa"
    ],
    "url": "sahaba.html#ali"
  },
  {
    "name": "Khadijah bint Khuwaylid",
    "title": "Mother of the Believers & At-Tahira",
    "keywords": [
      "khadijah",
      "tahira",
      "mother of believers",
      "first convert"
    ],
    "url": "sahaba.html#khadijah"
  },
  {
    "name": "Aisha bint Abi Bakr",
    "title": "As-Siddiqah & Scholar of the Ummah",
    "keywords": [
      "aisha",
      "ayesha",
      "mother of believers",
      "scholar",
      "hadith"
    ],
    "url": "sahaba.html#aisha"
  },
  {
    "name": "Fatimah az-Zahra",
    "title": "Leader of Women of Paradise",
    "keywords": [
      "fatimah",
      "zahra",
      "sayyidat nisa al-alameen",
      "prophet daughter"
    ],
    "url": "sahaba.html#fatimah"
  },
  {
    "name": "Bilal ibn Rabah",
    "title": "Mu'adhin of the Messenger ﷺ",
    "keywords": [
      "bilal",
      "habashi",
      "muadhin",
      "azaan",
      "athan",
      "perseverance"
    ],
    "url": "sahaba.html#bilal"
  },
  {
    "name": "Khalid ibn al-Walid",
    "title": "Sayfullah (The Sword of Allah)",
    "keywords": [
      "khalid",
      "walid",
      "sayfullah",
      "sword of allah",
      "yarmouk"
    ],
    "url": "sahaba.html#khalid"
  },
  {
    "name": "Salman al-Farsi",
    "title": "The Seeker of Truth & Trench Architect",
    "keywords": [
      "salman",
      "farsi",
      "persian",
      "khandaq",
      "trench"
    ],
    "url": "sahaba.html#salman"
  },
  {
    "name": "Abu Ubaydah ibn al-Jarrah",
    "title": "Trustee of this Ummah (Amin al-Ummah)",
    "keywords": [
      "abu ubaydah",
      "amin al-ummah",
      "asharah"
    ],
    "url": "sahaba.html#abu-ubaydah"
  },
  {
    "name": "Sa'd ibn Abi Waqqas",
    "title": "Knight of Islam & Conqueror of Qadisiyyah",
    "keywords": [
      "saad",
      "abi waqqas",
      "qadisiyyah",
      "archer"
    ],
    "url": "sahaba.html#saad"
  },
  {
    "name": "Talhah ibn Ubaydullah",
    "title": "The Living Martyr (Ash-Shahid al-Hayy)",
    "keywords": [
      "talhah",
      "living martyr",
      "uhud shield"
    ],
    "url": "sahaba.html#talhah"
  },
  {
    "name": "Az-Zubayr ibn al-Awwam",
    "title": "Disciple of the Messenger ﷺ (Hawari)",
    "keywords": [
      "zubayr",
      "hawari",
      "disciple",
      "awwam"
    ],
    "url": "sahaba.html#zubayr"
  }
];

const PROPHET_SEARCH_STORIES = [
  {
    "name": "Prophet Adam",
    "title": "Father of Humanity (Abul Bashar)",
    "keywords": [
      "adam",
      "abul bashar",
      "first prophet",
      "creation",
      "repentance"
    ],
    "url": "prophets.html#adam"
  },
  {
    "name": "Prophet Idris",
    "title": "Enoch — The Scholar & Elevated One",
    "keywords": [
      "idris",
      "enoch",
      "scholar",
      "astronomy",
      "writing"
    ],
    "url": "prophets.html#idris"
  },
  {
    "name": "Prophet Nuh",
    "title": "Noah — The Ark & Second Father of Humanity",
    "keywords": [
      "nuh",
      "noah",
      "ark",
      "flood",
      "safinah"
    ],
    "url": "prophets.html#nuh"
  },
  {
    "name": "Prophet Hud",
    "title": "Prophet to the Tribe of 'Ad",
    "keywords": [
      "hud",
      "ad",
      "iram",
      "monotheism"
    ],
    "url": "prophets.html#hud"
  },
  {
    "name": "Prophet Salih",
    "title": "Prophet to Thamud & The Miracle She-Camel",
    "keywords": [
      "salih",
      "thamud",
      "she camel",
      "rock"
    ],
    "url": "prophets.html#salih"
  },
  {
    "name": "Prophet Ibrahim",
    "title": "Abraham — Friend of Allah (Khalilullah)",
    "keywords": [
      "ibrahim",
      "abraham",
      "khalilullah",
      "sacrifice",
      "kaaba builder",
      "hanif"
    ],
    "url": "prophets.html#ibrahim"
  },
  {
    "name": "Prophet Ismail",
    "title": "Ishmael — The Patient Sacrifice (Dhabihullah)",
    "keywords": [
      "ismail",
      "ishmael",
      "dhabihullah",
      "zamzam",
      "makkah"
    ],
    "url": "prophets.html#ismail"
  },
  {
    "name": "Prophet Musa",
    "title": "Moses — One Who Spoke to Allah (Kalimullah)",
    "keywords": [
      "musa",
      "moses",
      "kalimullah",
      "pharaoh",
      "firawn",
      "torah",
      "sinai"
    ],
    "url": "prophets.html#musa"
  },
  {
    "name": "Prophet Dawud",
    "title": "David — The Devout King & Psalmist (Zabur)",
    "keywords": [
      "dawud",
      "david",
      "zabur",
      "goliath",
      "jalut",
      "iron"
    ],
    "url": "prophets.html#dawud"
  },
  {
    "name": "Prophet Isa",
    "title": "Jesus — Word & Spirit from Allah (Ruhullah)",
    "keywords": [
      "isa",
      "jesus",
      "ruhullah",
      "maryam",
      "miracles",
      "injil"
    ],
    "url": "prophets.html#isa"
  }
];

const HISTORY_SEARCH_ERAS = [
  {
    "eraNum": 1,
    "title": "Pre-Islamic Arabia & Abrahamic Remnants",
    "keywords": [
      "jahiliyyah",
      "hunafa",
      "pre-islamic",
      "mecca trade"
    ],
    "url": "history.html#era1"
  },
  {
    "eraNum": 2,
    "title": "The Prophetic Era: Foundation of Ummah",
    "keywords": [
      "prophetic era",
      "madinah state",
      "revelation",
      "constitution"
    ],
    "url": "history.html#era2"
  },
  {
    "eraNum": 3,
    "title": "The Rightly Guided Caliphate (Khulafa Rashidun)",
    "keywords": [
      "rashidun",
      "caliphate",
      "khulafa",
      "abu bakr",
      "umar",
      "uthman",
      "ali"
    ],
    "url": "history.html#era3"
  },
  {
    "eraNum": 4,
    "title": "The Umayyad Caliphate (Damascus)",
    "keywords": [
      "umayyad",
      "damascus",
      "muawiyah",
      "abd al-malik",
      "dome of the rock"
    ],
    "url": "history.html#era4"
  },
  {
    "eraNum": 5,
    "title": "The Abbasid Golden Age & Bayt al-Hikmah",
    "keywords": [
      "abbasid",
      "baghdad",
      "bayt al-hikmah",
      "house of wisdom",
      "harun al-rashid"
    ],
    "url": "history.html#era5"
  },
  {
    "eraNum": 6,
    "title": "Islamic Spain (Al-Andalus) & Cordoba Caliphate",
    "keywords": [
      "andalus",
      "spain",
      "cordoba",
      "granada",
      "alhambra",
      "averroes",
      "ibn rushd"
    ],
    "url": "history.html#era6"
  },
  {
    "eraNum": 7,
    "title": "Seljuk Empire, Crusades & Salahuddin Ayyubi",
    "keywords": [
      "seljuk",
      "crusades",
      "salahuddin",
      "ayyubi",
      "hattin",
      "jerusalem",
      "nizam al-mulk"
    ],
    "url": "history.html#era7"
  },
  {
    "eraNum": 8,
    "title": "The Mamluk Sultanate & Defense of Islam",
    "keywords": [
      "mamluk",
      "ain jalut",
      "mongols",
      "cairo",
      "baybars"
    ],
    "url": "history.html#era8"
  },
  {
    "eraNum": 9,
    "title": "The Ottoman Empire: Constantinople to 3 Continents",
    "keywords": [
      "ottoman",
      "constantinople",
      "mehmed",
      "suleiman",
      "istanbul",
      "sinan"
    ],
    "url": "history.html#era9"
  },
  {
    "eraNum": 10,
    "title": "The Safavid Empire & Persian Renaissance",
    "keywords": [
      "safavid",
      "isfahan",
      "shah abbas",
      "persian art"
    ],
    "url": "history.html#era10"
  },
  {
    "eraNum": 11,
    "title": "The Mughal Empire in South Asia",
    "keywords": [
      "mughal",
      "babur",
      "akbar",
      "shah jahan",
      "taj mahal",
      "aurangzeb",
      "delhi"
    ],
    "url": "history.html#era11"
  },
  {
    "eraNum": 12,
    "title": "The Modern Muslim World & Renewal (Nahdah)",
    "keywords": [
      "modern world",
      "nahdah",
      "shah waliullah",
      "colonialism",
      "independence"
    ],
    "url": "history.html#era12"
  }
];

// Sample preview translations in Urdu for top popular Surahs
const SURAH_URDU_PREVIEWS = {
  1: "سب تعریفیں اللہ ہی کے لیے ہیں جو تمام جہانوں کا پالنے والا ہے... (فاتحہ)",
  2: "الف، لام، میم۔ یہ وہ کتاب ہے جس میں کوئی شک نہیں، پرہیزگاروں کے لیے ہدایت ہے... (بقرہ)",
  18: "سب تعریفیں اللہ ہی کے لیے ہیں جس نے اپنے بندے پر کتاب نازل کی اور اس میں کوئی کجی نہیں رکھی... (کہف)",
  36: "یٰسٓ۔ قسم ہے حکمت والے قرآن کی کہ تم یقیناً پیغمبروں میں سے ہو، سیدھے راستے پر... (یٰسین)",
  55: "رحمٰن نے قرآن سکھایا، انسان کو پیدا کیا اور اسے بولنا سکھایا... پس تم اپنے رب کی کون کون سی نعمتوں کو جھٹلاؤ گے؟ (الرحمٰن)",
  56: "جب واقع ہونے والی واقع ہو جائے گی، اس کے واقع ہونے میں کوئی جھوٹ نہیں... (واقعہ)",
  67: "بڑی برکت والا ہے وہ جس کے ہاتھ میں بادشاہی ہے اور وہ ہر چیز پر قادر ہے... جس نے موت اور زندگی کو پیدا کیا (الملک)",
  112: "کہہ دیجیے: وہ اللہ ایک ہے، اللہ بے نیاز ہے، نہ اس کی کوئی اولاد ہے اور نہ وہ کسی کی اولاد ہے... (اخلاص)"
};

// 4. Universal Search Engine Object
const UniversalSearch = {
  normalize: normalizeIslamicQuery,
  aliases: SURAH_SEARCH_ALIASES,

  /**
   * Resolve a site-root-relative path (e.g. "articles/x.html") against the
   * deployment root ("/", "/NoorDeen/", or a file:// bundle directory).
   * Absolute URLs, protocol-relative URLs and in-page anchors pass through.
   */
  resolveUrl(url, basePath) {
    if (!url) return url;
    if (/^(?:[a-z][a-z0-9+.-]*:|\/\/|#)/i.test(url)) return url;
    const base = basePath || '/';
    return base + String(url).replace(/^\.?\//, '');
  },

  search(query) {
    if (!query || query.trim().length < 2) return [];
    const raw = query.trim();
    const rawLower = raw.toLowerCase();
    const normalized = normalizeIslamicQuery(raw);
    const results = [];
    const matchedSurahNumbers = new Set();
    // "Ayatul Kursi" is a verse (2:255), not just Surah Al-Baqarah. Deep-link
    // to the verse so the reader scrolls to it instead of opening the surah top.
    const ayatulKursiQuery = /ayat[\s-]*(ul|al)?[\s-]*kursi|kursi/i.test(rawLower)
      || /آیت\s*الکرسی|آیۃ\s*الکرسی|اية\s*الكرسي/.test(raw);

    // 1. Search Surahs using Exact Aliases and Normalized Phonetics
    if (typeof ISLAMIC_DATA !== 'undefined' && ISLAMIC_DATA.surahs) {
      ISLAMIC_DATA.surahs.forEach(s => {
        const aliasInfo = SURAH_SEARCH_ALIASES[s.number];
        const urduName = aliasInfo ? aliasInfo.urduName : `سورہ ${s.name}`;
        let isMatch = false;
        let matchReason = '';

        // Exact number match (e.g. "36" or "surah 36")
        if (raw === String(s.number) || rawLower === `surah ${s.number}` || rawLower === `sura ${s.number}`) {
          isMatch = true;
          matchReason = `Surah #${s.number}`;
        }

        // Direct standard fields match
        if (!isMatch && (
          s.englishName.toLowerCase().includes(rawLower) ||
          s.englishNameTranslation.toLowerCase().includes(rawLower) ||
          s.name.includes(raw)
        )) {
          isMatch = true;
          matchReason = s.englishName;
        }

        // Normalized phonetic match (e.g. "yaseen" === "yasin", "rehman" === "rahman")
        if (!isMatch && normalized.length >= 2) {
          const normEnglish = normalizeIslamicQuery(s.englishName);
          const normArabic = normalizeIslamicQuery(s.name);
          // Never let a 1–2 character name (e.g. Surah Qaf "ق") match as a
          // substring of a longer query such as "واقعہ".
          const contains = (haystack, needle) => needle.length >= 4 && haystack.includes(needle);
          if (contains(normEnglish, normalized) || contains(normArabic, normalized) ||
              contains(normalized, normEnglish) || contains(normalized, normArabic)) {
            isMatch = true;
            matchReason = s.englishName;
          }
        }

        // Alias matching (e.g. "tabarakallazi", "char qul", "ayatul kursi", "سورہ یسین")
        let aliasExactMatch = false;
        if (!isMatch && aliasInfo && aliasInfo.aliases) {
          for (const alias of aliasInfo.aliases) {
            const normAlias = normalizeIslamicQuery(alias);
            const aliasLower = alias.toLowerCase();
            if (rawLower === aliasLower || (normalized.length >= 2 && normAlias === normalized)) {
              isMatch = true;
              aliasExactMatch = true;
              matchReason = alias;
              break;
            } else if (
              // Only allow containment for aliases long enough to be meaningful;
              // a 3-letter alias such as "ala" must not match inside
              // "tabarakallazi".
              (aliasLower.length >= 4 && rawLower.includes(aliasLower)) ||
              (normalized.length >= 4 && normAlias.length >= 4 && normAlias.includes(normalized))
            ) {
              isMatch = true;
              matchReason = alias;
              break;
            }
          }
        }

        if (isMatch) {
          matchedSurahNumbers.add(s.number);
          const urduPreview = SURAH_URDU_PREVIEWS[s.number] || `اردو ترجمہ مولانا فتح محمد جالندھری • ${s.numberOfAyahs} آیات`;
          const isAyatulKursi = s.number === 2 && ayatulKursiQuery;
          results.push({
            type: `📖 Surah #${s.number}`,
            title: isAyatulKursi
              ? `Ayat al-Kursi (2:255) • Surah Al-Baqarah • ${urduName}`
              : `Surah ${s.englishName} (${s.name}) • ${urduName}`,
            subtitle: `${s.englishNameTranslation} • ${s.numberOfAyahs} Verses • ${s.revelationType}`,
            urduPreview: urduPreview,
            snippet: `${s.englishNameTranslation} • ${s.numberOfAyahs} Verses • ${s.revelationType} • ${urduPreview}`,
            url: isAyatulKursi ? 'quran.html?surah=2&ayah=255' : `quran.html?surah=${s.number}`,
            priority: aliasExactMatch ? 150 : 100
          });
        }
      });
    }

    // 2. Search Educational & Practice Modules
    EDUCATIONAL_SEARCH_PAGES.forEach(page => {
      let matched = false;
      let titleMatch = false;
      const pageTitle = page.title.toLowerCase();
      const titleHasTerm = pageTitle.includes(rawLower) ||
        (normalized.length >= 2 && normalizeIslamicQuery(page.title).includes(normalized));
      const snippetHasTerm = page.snippet.toLowerCase().includes(rawLower);

      if (titleHasTerm || snippetHasTerm) {
        matched = true;
        // Title matches must outrank pages that only mention the term in their summary.
        titleMatch = titleHasTerm;
      } else if (page.keywords) {
        for (const kw of page.keywords) {
          if (rawLower.includes(kw) || kw.includes(rawLower) || (normalized.length >= 2 && normalizeIslamicQuery(kw).includes(normalized))) {
            matched = true;
            break;
          }
        }
      }

      if (matched) {
        const pageType = page.url === 'dr-israr-ahmed.html'
          ? '🎬 Lecture Library'
          : page.url === 'download-app.html'
            ? '📱 Download'
            : page.url === 'articles/index.html'
              ? '📚 Article Library'
              : page.url.startsWith('articles/')
                ? '📚 Educational Article'
                : ['zakat-calculator.html', 'prayer-times.html', 'tasbih.html', 'calendar.html'].includes(page.url)
                  ? '🧮 Islamic Tool'
                  : '📖 Worship Guide';
        results.push({
          type: pageType,
          title: page.title,
          snippet: page.snippet,
          url: page.url,
          priority: titleMatch ? 90 : 80
        });
      }
    });

    // 2a. Search Seerah Chapters
    SEERAH_SEARCH_CHAPTERS.forEach(c => {
      let matched = false;
      if (c.title.toLowerCase().includes(rawLower)) matched = true;
      else if (normalized.length >= 2 && normalizeIslamicQuery(c.title).includes(normalized)) matched = true;
      else if (c.keywords) {
        for (const kw of c.keywords) {
          if (rawLower.includes(kw) || kw.includes(rawLower) || (normalized.length >= 2 && normalizeIslamicQuery(kw).includes(normalized))) {
            matched = true;
            break;
          }
        }
      }
      if (matched) {
        results.push({
          type: '🕌 Seerah Chapter',
          title: 'Chapter ' + c.num + ': ' + c.title,
          snippet: 'Authentic chronological biography of Prophet Muhammad ﷺ: ' + c.title,
          url: c.url,
          priority: 75
        });
      }
    });

    // 2b. Search Sahaba Biographies
    SAHABA_SEARCH_PROFILES.forEach(s => {
      let matched = false;
      if (s.name.toLowerCase().includes(rawLower) || s.title.toLowerCase().includes(rawLower)) matched = true;
      else if (normalized.length >= 2 && (normalizeIslamicQuery(s.name).includes(normalized) || normalizeIslamicQuery(s.title).includes(normalized))) matched = true;
      else if (s.keywords) {
        for (const kw of s.keywords) {
          if (rawLower.includes(kw) || kw.includes(rawLower) || (normalized.length >= 2 && normalizeIslamicQuery(kw).includes(normalized))) {
            matched = true;
            break;
          }
        }
      }
      if (matched) {
        results.push({
          type: '👥 Sahaba Biography',
          title: s.name + ' (رضي الله عنه)',
          snippet: s.title + ' — Verified biographical learning archive.',
          url: s.url,
          priority: 72
        });
      }
    });

    // 2c. Search Prophetic Stories
    PROPHET_SEARCH_STORIES.forEach(p => {
      let matched = false;
      if (p.name.toLowerCase().includes(rawLower) || p.title.toLowerCase().includes(rawLower)) matched = true;
      else if (normalized.length >= 2 && (normalizeIslamicQuery(p.name).includes(normalized) || normalizeIslamicQuery(p.title).includes(normalized))) matched = true;
      else if (p.keywords) {
        for (const kw of p.keywords) {
          if (rawLower.includes(kw) || kw.includes(rawLower) || (normalized.length >= 2 && normalizeIslamicQuery(kw).includes(normalized))) {
            matched = true;
            break;
          }
        }
      }
      if (matched) {
        results.push({
          type: '✨ Prophetic Narrative',
          title: p.name + ' (عليه السلام)',
          snippet: p.title + ' — Quranic narrative with classical commentary.',
          url: p.url,
          priority: 70
        });
      }
    });

    // 2d. Search Islamic History Eras
    HISTORY_SEARCH_ERAS.forEach(h => {
      let matched = false;
      if (h.title.toLowerCase().includes(rawLower)) matched = true;
      else if (normalized.length >= 2 && normalizeIslamicQuery(h.title).includes(normalized)) matched = true;
      else if (h.keywords) {
        for (const kw of h.keywords) {
          if (rawLower.includes(kw) || kw.includes(rawLower) || (normalized.length >= 2 && normalizeIslamicQuery(kw).includes(normalized))) {
            matched = true;
            break;
          }
        }
      }
      if (matched) {
        results.push({
          type: '🏛️ Islamic History',
          title: 'Era ' + h.eraNum + ': ' + h.title,
          snippet: 'Comprehensive civilizational history and verified historical milestones.',
          url: h.url,
          priority: 68
        });
      }
    });

    // 3. Search Offline Ayahs (with Urdu Tarjuma)
    if (typeof ISLAMIC_DATA !== 'undefined' && ISLAMIC_DATA.offlineSurahs) {
      Object.values(ISLAMIC_DATA.offlineSurahs).forEach(s => {
        s.ayahs.forEach(a => {
          if (
            (a.en && a.en.toLowerCase().includes(rawLower)) ||
            (a.ur && a.ur.includes(raw)) ||
            (a.ar && a.ar.includes(raw))
          ) {
            results.push({
              type: '✨ Quranic Verse',
              title: `Surah ${s.englishName} [${s.number}:${a.num}]`,
              snippet: a.ur ? `اردو: ${a.ur}` : (a.en || a.ar),
              urduPreview: a.ur || '',
              url: `quran.html?surah=${s.number}#ayah-${a.num}`,
              priority: 60
            });
          }
        });
      });
    }

    // 4. Search Hadith Collections
    if (typeof ISLAMIC_DATA !== 'undefined' && ISLAMIC_DATA.hadiths) {
      ISLAMIC_DATA.hadiths.forEach(h => {
        if (
          (h.en && h.en.toLowerCase().includes(rawLower)) ||
          (h.ur && h.ur.includes(raw)) ||
          (h.narrator && h.narrator.toLowerCase().includes(rawLower)) ||
          (h.collection && h.collection.toLowerCase().includes(rawLower)) ||
          (h.topic && h.topic.toLowerCase().includes(rawLower))
        ) {
          results.push({
            type: '📜 Authentic Hadith',
            title: `${h.collection} #${h.number} (${h.topic || 'General'})`,
            snippet: h.ur ? `اردو: ${h.ur} — [${h.narrator}]` : `"${h.en}" — [${h.narrator}]`,
            urduPreview: h.ur || '',
            url: `hadith.html?id=${h.id}`,
            priority: 50
          });
        }
      });
    }

    // 5. Search Six Kalimas
    if (typeof ISLAMIC_DATA !== 'undefined' && ISLAMIC_DATA.kalimas) {
      ISLAMIC_DATA.kalimas.forEach(k => {
        if (
          k.name.toLowerCase().includes(rawLower) ||
          (k.en && k.en.toLowerCase().includes(rawLower)) ||
          (k.ur && k.ur.includes(raw)) ||
          rawLower.includes('kalima')
        ) {
          results.push({
            type: '⭐ Six Kalimas',
            title: `${k.name} (${k.arabicTitle || ''})`,
            snippet: k.ur ? `اردو ترجمہ: ${k.ur}` : k.en,
            urduPreview: k.ur || '',
            url: `kalimas.html#kalima-${k.id}`,
            priority: 45
          });
        }
      });
    }

    // 6. Search Duas & Supplications
    if (typeof ISLAMIC_DATA !== 'undefined' && ISLAMIC_DATA.duas) {
      ISLAMIC_DATA.duas.forEach(d => {
        if (
          d.title.toLowerCase().includes(rawLower) ||
          (d.en && d.en.toLowerCase().includes(rawLower)) ||
          (d.ur && d.ur.includes(raw)) ||
          rawLower.includes('dua')
        ) {
          results.push({
            type: '🤲 Daily Supplication',
            title: d.title,
            snippet: d.ur ? `اردو: ${d.ur} [${d.ref}]` : `"${d.en}" [${d.ref}]`,
            urduPreview: d.ur || '',
            url: `duas.html#${d.id}`,
            priority: 40
          });
        }
      });
    }

    // Sort by priority descending
    results.sort((a, b) => (b.priority || 0) - (a.priority || 0));

    // Return top 25 results
    return results.slice(0, 25);
  }
};

if (typeof window !== 'undefined') {
  window.UniversalSearch = UniversalSearch;
  window.normalizeIslamicQuery = normalizeIslamicQuery;
  window.SURAH_SEARCH_ALIASES = SURAH_SEARCH_ALIASES;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { UniversalSearch, normalizeIslamicQuery, SURAH_SEARCH_ALIASES };
}
