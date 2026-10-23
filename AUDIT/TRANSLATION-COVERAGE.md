# MULTILINGUAL FRAMEWORK & TRANSLATION COVERAGE AUDIT
**Platform:** Islamic Knowledge Portal  
**Framework Version:** 2.0 (40-Language Scalable Registry)  
**Audit Date:** 2026-10-23  
**Status:** 40 Registered Languages • 11 Complete Offline Dictionaries • 5 RTL Languages Verified  

---

## 1. Architectural Overview

The multilingual architecture of the Islamic Knowledge Portal is implemented in `public/js/i18n.js`. It is designed as a modular, lightweight internationalization engine capable of scaling across 40 distinct languages while maintaining zero external dependencies.

### Core Design Principles:
1. **Dynamic Directional Layout (RTL & LTR):** The engine monitors language metadata and automatically sets `dir="rtl"` and `lang="[code]"` on `document.documentElement`, activating CSS mirroring rules for Arabic, Urdu, Persian, Pashto, and Kurdish.
2. **Safe Fallback Chain:** If a specific key is missing in a target language, the engine gracefully falls back to English (`en`) without breaking page rendering or throwing JavaScript exceptions.
3. **Persisted Preference:** User selection is recorded in `localStorage.setItem('islamic_portal_lang', code)` and restored immediately before initial layout paint.

---

## 2. Comprehensive 40-Language Matrix

| # | Language Name | Native Name | Code | Direction | UI Dictionary Status | Quran Translation Authority |
|---|:---|:---|:---|:---|:---|:---|
| 1 | **Arabic** | العَرَبِيَّة | `ar` | **RTL** | **Complete Bundled** | Al-Quran Al-Kareem (King Fahd Complex) |
| 2 | **Urdu** | اُردُو | `ur` | **RTL** | **Complete Bundled** | Fateh Muhammad Jalandhry (Verified) |
| 3 | **English** | English | `en` | **LTR** | **Complete Bundled** | Sahih International (Assami, Bantley, Kennedy) |
| 4 | **Bengali** | বাংলা | `bn` | **LTR** | **Complete Bundled** | Muhiuddin Khan (Islamic Foundation Bangladesh) |
| 5 | **Hindi** | हिन्दी | `hi` | **LTR** | **Complete Bundled** | Maulana Farooq Khan & Maulana Ahmed |
| 6 | **Indonesian** | Bahasa Indonesia | `id` | **LTR** | **Complete Bundled** | Kementerian Agama Republik Indonesia (Kemenag) |
| 7 | **Malay** | Bahasa Melayu | `ms` | **LTR** | **Complete Bundled** | Abdullah Muhammad Basmeih |
| 8 | **Turkish** | Türkçe | `tr` | **LTR** | **Complete Bundled** | Diyanet İşleri Başkanlığı (Turkish Directorate) |
| 9 | **Persian** | فَارْسِی | `fa` | **RTL** | **Complete Bundled** | Mohammad Mahdi Fooladvand |
| 10 | **French** | Français | `fr` | **LTR** | **Complete Bundled** | Dr. Muhammad Hamidullah |
| 11 | **German** | Deutsch | `de` | **LTR** | Configured / Online | Frank Bubenheim & Nadeem Elyas |
| 12 | **Spanish** | Español | `es` | **LTR** | **Complete Bundled** | Muhammad Isa García |
| 13 | **Portuguese** | Português | `pt` | **LTR** | Configured / Online | Samir El-Hayek |
| 14 | **Russian** | Русский | `ru` | **LTR** | Configured / Online | Elmir Kuliev |
| 15 | **Chinese (Simplified)**| 简体中文 | `zh` | **LTR** | Configured / Online | Muhammad Ma Jian |
| 16 | **Chinese (Traditional)**| 繁體中文 | `zh-TW`| **LTR** | Configured / Online | Muhammad Ma Jian |
| 17 | **Japanese** | 日本語 | `ja` | **LTR** | Configured / Online | Ryoichi Mita (Japan Muslim Association) |
| 18 | **Korean** | 한국어 | `ko` | **LTR** | Configured / Online | Dr. Hamid Choi Yeong-kil |
| 19 | **Swahili** | Kiswahili | `sw` | **LTR** | Configured / Online | Ali Muhsin Al-Barwani |
| 20 | **Hausa** | Harshen Hausa | `ha` | **LTR** | Configured / Online | Abubakar Mahmoud Gumi |
| 21 | **Somali** | Af-Soomaali | `so` | **LTR** | Configured / Online | Mahmud Muhammad Abduh |
| 22 | **Pashto** | پښتو | `ps` | **RTL** | Configured / Online | Abdul Wali Khan & Mawlana Asim |
| 23 | **Kurdish** | کوردی | `ku` | **RTL** | Configured / Online | Burhan Muhammad Amin |
| 24 | **Tamil** | தமிழ் | `ta` | **LTR** | Configured / Online | Jan Turst Foundation |
| 25 | **Telugu** | తెలుగు | `te` | **LTR** | Configured / Online | Abdul Raheem Mohammed Moulana |
| 26 | **Malayalam** | മലയാളം | `ml` | **LTR** | Configured / Online | Cheriyamundam Abdul Hameed & Kunhi Mohammed |
| 27 | **Kannada** | ಕನ್ನಡ | `kn` | **LTR** | Configured / Online | Shafiullah & Abdur Rahman |
| 28 | **Marathi** | मराठी | `mr` | **LTR** | Configured / Online | Muhammad Shafi'i Khan |
| 29 | **Gujarati** | ગુજરાતી | `gu` | **LTR** | Configured / Online | Rabita-e-Alam-e-Islami |
| 30 | **Punjabi** | ਪੰਜਾਬੀ | `pa` | **LTR** | Configured / Online | Maulana Abdul Sattar |
| 31 | **Thai** | ภาษาไทย | `th` | **LTR** | Configured / Online | King Fahd Complex Thai Translation |
| 32 | **Vietnamese** | Tiếng Việt | `vi` | **LTR** | Configured / Online | Hassan Abdul Karim |
| 33 | **Filipino** | Tagalog | `fil` | **LTR** | Configured / Online | Darussalam Tagalog Edition |
| 34 | **Italian** | Italiano | `it` | **LTR** | Configured / Online | Hamza Roberto Piccardo |
| 35 | **Dutch** | Nederlands | `nl` | **LTR** | Configured / Online | Sofian S. Siregar |
| 36 | **Polish** | Polski | `pl` | **LTR** | Configured / Online | Jozef Bielawski |
| 37 | **Bosnian** | Bosanski | `bs` | **LTR** | Configured / Online | Besim Korkut |
| 38 | **Albanian** | Shqip | `sq` | **LTR** | Configured / Online | Hasan I. Nahi |
| 39 | **Uzbek** | Oʻzbekcha | `uz` | **LTR** | Configured / Online | Muhammad Sodiq Muhammad Yusuf |
| 40 | **Azerbaijani** | Azərbaycan | `az` | **LTR** | Configured / Online | Alikhan Musayev |

---

## 3. UI Translation Completeness (The 11 Offline Languages)

For the 11 tier-one languages representing the majority of the world's Muslim population (`en`, `ur`, `ar`, `fr`, `id`, `tr`, `bn`, `hi`, `ms`, `fa`, `es`), full UI localization dictionaries are bundled directly into `public/js/i18n.js`:
- Navigation bar items (`Home`, `Quran`, `Hadith`, `Kalimas`, `Duas`, `Seerah`, `Education`, `Bookmarks`)
- Hero headings, subtitles, and search bar placeholders
- Quick access category descriptions
- Quran reader action buttons, reciter selectors, and playback controls
- Audio player UI states (`Play`, `Pause`, `Repeat`, `Speed`, `Download`)
- Prayer times calculation parameters and Hijri calendar labels

---

## 4. Directional Bi-Di Support (RTL & LTR)

RTL support is thoroughly implemented across `public/css/main.css`:
- `[dir="rtl"] { direction: rtl; text-align: right; }`
- Left/right margins and paddings are automatically flipped using logical CSS properties or directional overrides.
- Search icons and chevron indicators reverse direction cleanly.
- Header actions, logo layout, and footer columns align naturally with Semitic reading flow.
