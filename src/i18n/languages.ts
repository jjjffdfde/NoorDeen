export interface LanguageInfo {
  code: string;
  name: string;
  nativeName: string;
  dir: 'ltr' | 'rtl';
  script: string;
  fontFamily?: string;
  coverage: {
    ui: 'complete' | 'standard' | 'basic';
    quran: 'verified' | 'authorized_partial' | 'in_progress';
    hadith: 'verified' | 'authorized_partial' | 'in_progress';
    articles: 'complete' | 'in_progress';
  };
  translatorAttribution?: string;
}

export const LANGUAGES: LanguageInfo[] = [
  {
    code: 'ar',
    name: 'Arabic',
    nativeName: 'العربية',
    dir: 'rtl',
    script: 'Arab',
    fontFamily: 'quran',
    coverage: { ui: 'complete', quran: 'verified', hadith: 'verified', articles: 'complete' },
    translatorAttribution: 'Original Tanzil / King Fahd Complex Uthmani Script'
  },
  {
    code: 'ur',
    name: 'Urdu',
    nativeName: 'اردو',
    dir: 'rtl',
    script: 'Arab',
    fontFamily: 'urdu',
    coverage: { ui: 'complete', quran: 'verified', hadith: 'verified', articles: 'complete' },
    translatorAttribution: 'Fateh Muhammad Jalandhry / Syed Abul A\'la Maududi'
  },
  {
    code: 'en',
    name: 'English',
    nativeName: 'English',
    dir: 'ltr',
    script: 'Latn',
    coverage: { ui: 'complete', quran: 'verified', hadith: 'verified', articles: 'complete' },
    translatorAttribution: 'Saheeh International / Dr. Mustafa Khattab (The Clear Quran)'
  },
  {
    code: 'bn',
    name: 'Bengali',
    nativeName: 'বাংলা',
    dir: 'ltr',
    script: 'Beng',
    coverage: { ui: 'standard', quran: 'verified', hadith: 'authorized_partial', articles: 'in_progress' },
    translatorAttribution: 'Muhiuddin Khan'
  },
  {
    code: 'hi',
    name: 'Hindi',
    nativeName: 'हिन्दी',
    dir: 'ltr',
    script: 'Deva',
    coverage: { ui: 'standard', quran: 'verified', hadith: 'authorized_partial', articles: 'in_progress' },
    translatorAttribution: 'Muhammad Farooq Khan / Dr. Suhel Farooq Khan'
  },
  {
    code: 'id',
    name: 'Indonesian',
    nativeName: 'Bahasa Indonesia',
    dir: 'ltr',
    script: 'Latn',
    coverage: { ui: 'standard', quran: 'verified', hadith: 'verified', articles: 'in_progress' },
    translatorAttribution: 'Kementerian Agama Republik Indonesia (Kemenag)'
  },
  {
    code: 'ms',
    name: 'Malay',
    nativeName: 'Bahasa Melayu',
    dir: 'ltr',
    script: 'Latn',
    coverage: { ui: 'standard', quran: 'verified', hadith: 'authorized_partial', articles: 'in_progress' },
    translatorAttribution: 'Abdullah Muhammad Basmeih'
  },
  {
    code: 'tr',
    name: 'Turkish',
    nativeName: 'Türkçe',
    dir: 'ltr',
    script: 'Latn',
    coverage: { ui: 'standard', quran: 'verified', hadith: 'verified', articles: 'in_progress' },
    translatorAttribution: 'Diyanet İşleri Başkanlığı'
  },
  {
    code: 'fa',
    name: 'Persian',
    nativeName: 'فارسی',
    dir: 'rtl',
    script: 'Arab',
    coverage: { ui: 'standard', quran: 'verified', hadith: 'authorized_partial', articles: 'in_progress' },
    translatorAttribution: 'Hussein Elahi Ghomshei / Mohammad Mahdi Fooladvand'
  },
  {
    code: 'fr',
    name: 'French',
    nativeName: 'Français',
    dir: 'ltr',
    script: 'Latn',
    coverage: { ui: 'standard', quran: 'verified', hadith: 'authorized_partial', articles: 'in_progress' },
    translatorAttribution: 'Muhammad Hamidullah'
  },
  {
    code: 'de',
    name: 'German',
    nativeName: 'Deutsch',
    dir: 'ltr',
    script: 'Latn',
    coverage: { ui: 'standard', quran: 'verified', hadith: 'authorized_partial', articles: 'in_progress' },
    translatorAttribution: 'Amir Zaidan / Frank Bubenheim & Nadeem Elyas'
  },
  {
    code: 'es',
    name: 'Spanish',
    nativeName: 'Español',
    dir: 'ltr',
    script: 'Latn',
    coverage: { ui: 'standard', quran: 'verified', hadith: 'authorized_partial', articles: 'in_progress' },
    translatorAttribution: 'Muhammad Isa García'
  },
  {
    code: 'pt',
    name: 'Portuguese',
    nativeName: 'Português',
    dir: 'ltr',
    script: 'Latn',
    coverage: { ui: 'basic', quran: 'verified', hadith: 'authorized_partial', articles: 'in_progress' },
    translatorAttribution: 'Samir El-Hayek'
  },
  {
    code: 'ru',
    name: 'Russian',
    nativeName: 'Русский',
    dir: 'ltr',
    script: 'Cyrl',
    coverage: { ui: 'basic', quran: 'verified', hadith: 'verified', articles: 'in_progress' },
    translatorAttribution: 'Elmir Kuliev'
  },
  {
    code: 'zh-CN',
    name: 'Chinese Simplified',
    nativeName: '简体中文',
    dir: 'ltr',
    script: 'Hans',
    coverage: { ui: 'basic', quran: 'verified', hadith: 'authorized_partial', articles: 'in_progress' },
    translatorAttribution: 'Muhammad Makin'
  },
  {
    code: 'zh-TW',
    name: 'Chinese Traditional',
    nativeName: '繁體中文',
    dir: 'ltr',
    script: 'Hant',
    coverage: { ui: 'basic', quran: 'verified', hadith: 'authorized_partial', articles: 'in_progress' },
    translatorAttribution: 'Muhammad Makin'
  },
  {
    code: 'ja',
    name: 'Japanese',
    nativeName: '日本語',
    dir: 'ltr',
    script: 'Jpan',
    coverage: { ui: 'basic', quran: 'verified', hadith: 'in_progress', articles: 'in_progress' },
    translatorAttribution: 'Ryoichi Mita'
  },
  {
    code: 'ko',
    name: 'Korean',
    nativeName: '한국어',
    dir: 'ltr',
    script: 'Kore',
    coverage: { ui: 'basic', quran: 'verified', hadith: 'in_progress', articles: 'in_progress' },
    translatorAttribution: 'Hamid Choi'
  },
  {
    code: 'sw',
    name: 'Swahili',
    nativeName: 'Kiswahili',
    dir: 'ltr',
    script: 'Latn',
    coverage: { ui: 'basic', quran: 'verified', hadith: 'authorized_partial', articles: 'in_progress' },
    translatorAttribution: 'Ali Muhsin Al-Barwani'
  },
  {
    code: 'ha',
    name: 'Hausa',
    nativeName: 'Hausa',
    dir: 'ltr',
    script: 'Latn',
    coverage: { ui: 'basic', quran: 'verified', hadith: 'authorized_partial', articles: 'in_progress' },
    translatorAttribution: 'Abubakar Mahmoud Gumi'
  },
  {
    code: 'so',
    name: 'Somali',
    nativeName: 'Soomaali',
    dir: 'ltr',
    script: 'Latn',
    coverage: { ui: 'basic', quran: 'verified', hadith: 'in_progress', articles: 'in_progress' },
    translatorAttribution: 'Mahmud Muhammad Abduh'
  },
  {
    code: 'ps',
    name: 'Pashto',
    nativeName: 'پښتو',
    dir: 'rtl',
    script: 'Arab',
    coverage: { ui: 'basic', quran: 'verified', hadith: 'authorized_partial', articles: 'in_progress' },
    translatorAttribution: 'Abdulwali Khan'
  },
  {
    code: 'ku',
    name: 'Kurdish',
    nativeName: 'کوردی',
    dir: 'rtl',
    script: 'Arab',
    coverage: { ui: 'basic', quran: 'verified', hadith: 'authorized_partial', articles: 'in_progress' },
    translatorAttribution: 'Burhan Muhammad-Amin'
  },
  {
    code: 'ta',
    name: 'Tamil',
    nativeName: 'தமிழ்',
    dir: 'ltr',
    script: 'Taml',
    coverage: { ui: 'basic', quran: 'verified', hadith: 'authorized_partial', articles: 'in_progress' },
    translatorAttribution: 'Jan Turst Foundation'
  },
  {
    code: 'te',
    name: 'Telugu',
    nativeName: 'తెలుగు',
    dir: 'ltr',
    script: 'Telu',
    coverage: { ui: 'basic', quran: 'verified', hadith: 'in_progress', articles: 'in_progress' },
    translatorAttribution: 'Abdul-Raheem Mohammad Moulana'
  },
  {
    code: 'ml',
    name: 'Malayalam',
    nativeName: 'മലയാളം',
    dir: 'ltr',
    script: 'Mlym',
    coverage: { ui: 'basic', quran: 'verified', hadith: 'authorized_partial', articles: 'in_progress' },
    translatorAttribution: 'Cheriyamundam Abdul Hameed and Kunhi Mohammed Parappoor'
  },
  {
    code: 'kn',
    name: 'Kannada',
    nativeName: 'ಕನ್ನಡ',
    dir: 'ltr',
    script: 'Knda',
    coverage: { ui: 'basic', quran: 'verified', hadith: 'in_progress', articles: 'in_progress' },
    translatorAttribution: 'Karnataka Islamic Academy'
  },
  {
    code: 'mr',
    name: 'Marathi',
    nativeName: 'मराठी',
    dir: 'ltr',
    script: 'Deva',
    coverage: { ui: 'basic', quran: 'verified', hadith: 'in_progress', articles: 'in_progress' },
    translatorAttribution: 'Muhammad Shafi Khan'
  },
  {
    code: 'gu',
    name: 'Gujarati',
    nativeName: 'ગુજરાતી',
    dir: 'ltr',
    script: 'Gujr',
    coverage: { ui: 'basic', quran: 'verified', hadith: 'in_progress', articles: 'in_progress' },
    translatorAttribution: 'Rabwah Islamic Mission'
  },
  {
    code: 'pa',
    name: 'Punjabi',
    nativeName: 'ਪੰਜਾਬੀ / پنجابی',
    dir: 'ltr',
    script: 'Guru',
    coverage: { ui: 'basic', quran: 'authorized_partial', hadith: 'in_progress', articles: 'in_progress' },
    translatorAttribution: 'Hafiz Salahuddin Yusuf'
  },
  {
    code: 'th',
    name: 'Thai',
    nativeName: 'ไทย',
    dir: 'ltr',
    script: 'Thai',
    coverage: { ui: 'basic', quran: 'verified', hadith: 'in_progress', articles: 'in_progress' },
    translatorAttribution: 'King Fahd Quran Printing Complex'
  },
  {
    code: 'vi',
    name: 'Vietnamese',
    nativeName: 'Tiếng Việt',
    dir: 'ltr',
    script: 'Latn',
    coverage: { ui: 'basic', quran: 'verified', hadith: 'in_progress', articles: 'in_progress' },
    translatorAttribution: 'Hassan Abdul-Karim'
  },
  {
    code: 'nl',
    name: 'Dutch',
    nativeName: 'Nederlands',
    dir: 'ltr',
    script: 'Latn',
    coverage: { ui: 'basic', quran: 'verified', hadith: 'in_progress', articles: 'in_progress' },
    translatorAttribution: 'Sofian S. Siregar'
  },
  {
    code: 'it',
    name: 'Italian',
    nativeName: 'Italiano',
    dir: 'ltr',
    script: 'Latn',
    coverage: { ui: 'basic', quran: 'verified', hadith: 'in_progress', articles: 'in_progress' },
    translatorAttribution: 'Hamza Roberto Piccardo'
  },
  {
    code: 'pl',
    name: 'Polish',
    nativeName: 'Polski',
    dir: 'ltr',
    script: 'Latn',
    coverage: { ui: 'basic', quran: 'verified', hadith: 'in_progress', articles: 'in_progress' },
    translatorAttribution: 'Józef Bielawski'
  },
  {
    code: 'bs',
    name: 'Bosnian',
    nativeName: 'Bosanski',
    dir: 'ltr',
    script: 'Latn',
    coverage: { ui: 'basic', quran: 'verified', hadith: 'authorized_partial', articles: 'in_progress' },
    translatorAttribution: 'Besim Korkut'
  },
  {
    code: 'sq',
    name: 'Albanian',
    nativeName: 'Shqip',
    dir: 'ltr',
    script: 'Latn',
    coverage: { ui: 'basic', quran: 'verified', hadith: 'in_progress', articles: 'in_progress' },
    translatorAttribution: 'Hasan Efendi Nahi'
  },
  {
    code: 'uz',
    name: 'Uzbek',
    nativeName: 'Oʻzbekcha',
    dir: 'ltr',
    script: 'Latn',
    coverage: { ui: 'basic', quran: 'verified', hadith: 'authorized_partial', articles: 'in_progress' },
    translatorAttribution: 'Alauddin Mansur / Muhammad Sodiq Muhammad Yusuf'
  },
  {
    code: 'kk',
    name: 'Kazakh',
    nativeName: 'Қазақша',
    dir: 'ltr',
    script: 'Cyrl',
    coverage: { ui: 'basic', quran: 'verified', hadith: 'in_progress', articles: 'in_progress' },
    translatorAttribution: 'Khalifah Altai'
  },
  {
    code: 'az',
    name: 'Azerbaijani',
    nativeName: 'Azərbaycanca',
    dir: 'ltr',
    script: 'Latn',
    coverage: { ui: 'basic', quran: 'verified', hadith: 'in_progress', articles: 'in_progress' },
    translatorAttribution: 'Alikhan Musayev / Vasim Mammadaliyev'
  }
];

export const DEFAULT_LANGUAGE = 'en';

export function getLanguage(code: string): LanguageInfo {
  return LANGUAGES.find((l) => l.code === code) || LANGUAGES.find((l) => l.code === 'en')!;
}
