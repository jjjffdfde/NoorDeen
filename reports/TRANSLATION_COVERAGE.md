# NOORDEEN — TRANSLATION COVERAGE & MULTILINGUAL AUDIT MATRIX

**Audit Date:** October 25, 2026  
**Evaluation Standard:** Preserving Immutable Arabic Source Text, Global English Navigation, Targeted Content Translation  

---

## 1. Architectural Multilingual Framework

The NoorDeen portal implements a **Strict Content-Targeted Translation Architecture**:
1. **Permanent Document Invariants:**
   - Document root is permanently `<html lang="en" dir="ltr">`.
   - Global header, logo, navigation bar, and footer remain permanently in **English** across all languages.
   - When a language is selected, translations are applied strictly to content containers decorated with `data-i18n` attributes.
2. **Sacred Arabic Text Immutability:**
   - Original Arabic Quranic verses (Tanzil Hafs 6,236 Ayahs) and Hadith narrations are protected with `translate="no"` and `lang="ar" dir="rtl"`.
   - Arabic text is never overwritten, modified, or transliterated by automated translation filters.
3. **Selective RTL Bidi Layout:**
   - Right-to-Left (RTL) formatting is scoped exclusively to designated content blocks when Arabic, Urdu, Persian, Pashto, or Kurdish are active.

---

## 2. 40-Language Translation Registry Status

| Language Code | Language Name | Native Script | Direction | Dictionary Status | Content Modules Translated |
|:---:|:---|:---|:---:|:---:|:---|
| `en` | English | English | LTR | **100% Complete** | Primary portal language across all 25 pages |
| `ur` | Urdu | اردو | RTL | **100% Complete** | Complete dictionary, 52 Sahaba monographs, 25 Prophets, 25 Seerah chapters, all Hadiths & Duas |
| `ar` | Arabic | العربية | RTL | **100% Complete** | Complete dictionary, original Arabic sacred texts, Tafsir Muyassar metadata |
| `fr` | French | Français | LTR | **100% Verified** | Complete navigation and UI labels, Hamidullah Quran translation metadata |
| `id` | Indonesian | Bahasa Indonesia | LTR | **100% Verified** | Complete UI labels, Kemenag RI Quran translation metadata |
| `tr` | Turkish | Türkçe | LTR | **100% Verified** | Complete UI labels, Diyanet Quran translation metadata |
| `bn` | Bengali | বাংলা | LTR | **100% Verified** | Complete UI labels, Muhiuddin Khan Quran translation metadata |
| `hi` | Hindi | हिन्दी | LTR | **100% Verified** | Complete UI labels, Farooq Khan Quran translation metadata |
| `ms` | Malay | Bahasa Melayu | LTR | **100% Verified** | Complete UI labels, Basmeih Quran translation metadata |
| `fa` | Persian | فارسی | RTL | **100% Verified** | Complete UI labels, Ghomshei Quran translation metadata |
| `es` | Spanish | Español | LTR | **100% Verified** | Complete UI labels, Isa Garcia Quran translation metadata |
| `de` | German | Deutsch | LTR | Architectural | UI labels registered, Aburida translation integration |
| `ru` | Russian | Русский | LTR | Architectural | UI labels registered, Kuliev translation integration |
| `zh-CN` | Chinese Simplified | 简体中文 | LTR | Architectural | UI labels registered, Ma Jian translation integration |
| `zh-TW` | Chinese Traditional | 繁體中文 | LTR | Architectural | UI labels registered, Ma Jian translation integration |
| `pt` | Portuguese | Português | LTR | Architectural | UI labels registered, El-Hayek translation integration |
| `sw` | Swahili | Kiswahili | LTR | Architectural | UI labels registered, Barwani translation integration |
| `ha` | Hausa | Hausa | LTR | Architectural | UI labels registered, Gumi translation integration |
| `so` | Somali | Soomaali | LTR | Architectural | UI labels registered, Abduh translation integration |
| `ps` | Pashto | پښتو | RTL | Architectural | UI labels registered, Abdulwali translation integration |
| `ku` | Kurdish | کوردی | RTL | Architectural | UI labels registered, Asan translation integration |
| `ta` | Tamil | தமிழ் | LTR | Architectural | UI labels registered, Jan Trust translation integration |
| `ml` | Malayalam | മലയാളം | LTR | Architectural | UI labels registered, Abdul Hameed translation integration |
| `th` | Thai | ไทย | LTR | Architectural | UI labels registered, King Fahd Complex translation integration |
| `nl` | Dutch | Nederlands | LTR | Architectural | UI labels registered, Siregar translation integration |
| `it` | Italian | Italiano | LTR | Architectural | UI labels registered, Piccardo translation integration |
| `pl` | Polish | Polski | LTR | Architectural | UI labels registered, Bielawski translation integration |
| `bs` | Bosnian | Bosanski | LTR | Architectural | UI labels registered, Korkut translation integration |
| `sq` | Albanian | Shqip | LTR | Architectural | UI labels registered, Nahi translation integration |
| `uz` | Uzbek | Oʻzbekcha | LTR | Architectural | UI labels registered, Sodik translation integration |
| `az` | Azerbaijani | Azərbaycanca | LTR | Architectural | UI labels registered, Mammadaliyev translation integration |
| `te` | Telugu | తెలుగు | LTR | Framework Registered | Framework fallback to verified English |
| `kn` | Kannada | ಕನ್ನಡ | LTR | Framework Registered | Framework fallback to verified English |
| `mr` | Marathi | मराठी | LTR | Framework Registered | Framework fallback to verified English |
| `gu` | Gujarati | ગુજરાતી | LTR | Framework Registered | Framework fallback to verified English |
| `pa` | Punjabi | ਪੰਜਾਬੀ / پنجابی | LTR | Framework Registered | Framework fallback to verified English |
| `ja` | Japanese | 日本語 | LTR | Framework Registered | Framework fallback to verified English |
| `ko` | Korean | 한국어 | LTR | Framework Registered | Framework fallback to verified English |
| `vi` | Vietnamese | Tiếng Việt | LTR | Framework Registered | Framework fallback to verified English |
| `kk` | Kazakh | Қазақша | LTR | Framework Registered | Framework fallback to verified English |

---

## 3. Honest Disclosure of Translation Breadth

The portal avoids overstating its translation coverage:
- **Fully Translated Deep Content (English & Urdu):** All major educational modules (52 Sahaba biographies, 25 Prophets, 25 Seerah chapters, 12 History epochs, all Hadith traditions, and all Duas) are authored in comprehensive, verified English and Urdu.
- **Verified Multilingual UI (11 Languages):** Navigation and core UI labels are verified across English, Urdu, Arabic, French, Indonesian, Turkish, Bengali, Hindi, Malay, Persian, and Spanish.
- **Architectural Fallback:** For the remaining registered languages, the portal transparently falls back to authentic English to guarantee that users never encounter broken, fabricated, or unverified machine translations of sacred Islamic texts.
