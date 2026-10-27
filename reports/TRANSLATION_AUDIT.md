# NoorDeen — Translation Audit

**Audited:** 26 October 2026
**Scope:** interface localisation (`js/i18n.js`), Quran translation editions (`js/quran.js`), multilingual content fields (`js/data.js`), RTL/LTR behaviour, and the honesty of every public claim about language coverage.

---

## 1. Executive summary

| Layer | Count | Status |
| :--- | --: | :--- |
| Language entries in the framework | **40** | Registered |
| Languages with a UI dictionary | **11** | Verified / selectable |
| Languages with framework metadata only | **29** | Not selectable; no dictionary |
| UI strings per verified dictionary | **50** | Complete for the defined key set |
| Total translated UI strings | **550** | 11 × 50 |
| Quran translation editions registered | **40** | Registry complete; subset live-tested |
| Quran editions with offline support | **2** (English, Urdu) + Arabic tafsir mode | Bundled |

The public language selector offers **only the 11 verified languages**. The other 29 entries exist so that language metadata, direction and script are available to future work; selecting them is not exposed. The site no longer claims "100% scholarly verified" or "fully verified dictionaries" for all 40.

---

## 2. The 11 verified UI languages

Each has a dictionary of 50 keys in `TRANSLATIONS`.

| Code | Language | Direction | Script | Dictionary keys |
| :--- | :--- | :--- | :--- | --: |
| `en` | English | LTR | Latn | 50 |
| `ar` | Arabic | RTL | Arab | 50 |
| `ur` | Urdu | RTL | Arab | 50 |
| `id` | Indonesian | LTR | Latn | 50 |
| `tr` | Turkish | LTR | Latn | 50 |
| `fr` | French | LTR | Latn | 50 |
| `bn` | Bengali | LTR | Beng | 50 |
| `hi` | Hindi | LTR | Deva | 50 |
| `ms` | Malay | LTR | Latn | 50 |
| `fa` | Persian | RTL | Arab | 50 |
| `es` | Spanish | LTR | Latn | 50 |

**Key set covered:** navigation labels, search placeholder and hints, Quran controls (surah, juz, ayah, translation, reciter, play), hadith/dua/kalima headings, prayer-time labels, zakat labels, calendar labels, common actions (search, close, copy, share, reset), and footer labels.

**What "verified" means here:** the dictionary is present, parses, has all 50 keys, and was exercised in the browser (at minimum Urdu and Arabic switching plus English reset). It does **not** mean a native-speaking scholar reviewed every string. That stronger claim has been removed from the UI.

---

## 3. The 29 metadata-only languages

These entries carry `code`, `name`, `nativeName`, `dir`, `script` and a coverage label (`authorized_partial` or `in_progress`). They have **no dictionary**.

| Coverage label | Count | Behaviour |
| :--- | --: | :--- |
| `authorized_partial` | 14 | Not offered in the UI selector. Metadata reserved for future dictionaries. |
| `in_progress` | 15 | Not offered in the UI selector. Metadata reserved for future dictionaries. |

Because `getUISelectableLanguages()` filters on `coverage === 'verified'`, a user cannot select a language that would silently render English strings under a foreign label. This was a deliberate honesty fix.

**Consequence:** the claim "40-language architecture" is accurate only as a framework statement. The download page now says: "40 language entries: 11 verified dictionaries, 14 authorized partial dictionaries, and 15 still in progress." The homepage and About page do not claim 40 translated interfaces.

---

## 4. Quran translation editions

`QURAN_TRANSLATION_REGISTRY` contains **40 editions** with translator, edition ID and direction. Examples:

| Code | Edition ID | Translator / source |
| :--- | :--- | :--- |
| `en` | `en.sahih` | Saheeh International |
| `ur` | `ur.jalandhry` | Maulana Fateh Muhammad Jalandhry |
| `fr` | `fr.hamidullah` | Dr. Muhammad Hamidullah |
| `id` | `id.indonesian` | Kementerian Agama RI |
| `tr` | `tr.diyanet` | Diyanet İşleri Başkanlığı |
| `bn` | `bn.bengali` | Maulana Muhiuddin Khan |
| `hi` | `hi.hindi` | Farooq Khan & Muhammad Ahmad |
| `ms` | `ms.basmeih` | Sheikh Abdullah Basmeih |
| `fa` | `fa.ghomshei` | Dr. Hossein Elahi Ghomshei |
| `es` | `es.garcia` | Muhammad Isa García |
| `de` | `de.aburida` | Abu Rida Muhammad ibn Ahmad |
| `ru` | `ru.kuliev` | Elmir Kuliev |
| `zh-CN` / `zh-TW` | `zh.jian` | Ma Jian (same edition for both scripts) |

**Verified in this cycle:** English (Saheeh International) and Urdu (Jalandhry) render and switch correctly; Arabic tafsir mode (Tafsir Muyassar) renders with attribution; English reset restores Saheeh International. Other editions were validated structurally (unique codes, edition IDs, translator labels) but **not all 40 were fetched live**.

**Honest limit:** the reader fetches translation text from `api.alquran.cloud`; if an edition is unavailable upstream, the reader shows its error state rather than inventing text. Offline, only English, Urdu and the Arabic tafsir mode are available.

---

## 5. Direction and layout behaviour

- **Global UI stays English and LTR.** `document.documentElement.lang` is forced to `en` and `dir` to `ltr` on every language switch. This is intentional: navigation, search, buttons and footer remain stable and readable for all users.
- **Content scoping:** only `.content-area`, `.editorial-content-body`, `.article-content`, `.card-content-body`, `.localized-content-scope` and `.hero-content` receive `dir="rtl"` and the `rtl-content` class for Arabic/Urdu/Persian.
- **Arabic source text is never replaced** by a translation. Quran Arabic, hadith Arabic, dua Arabic and kalima Arabic are separate fields from the translated text.
- **English reset:** `resetToDefault()` removes the stored language and calls `setLanguage('en')`; verified in the browser — content returns to English and the label reads "English".
- **Persistence:** `islamic_portal_lang` stores the choice; invalid stored codes fall back to `en`.

---

## 6. Content-level multilingual fields

| Dataset | English | Urdu | Arabic | Notes |
| :--- | :--- | :--- | :--- | :--- |
| Hadith | Yes (101) | Yes (101) | Yes (101) | Urdu field present for every record; English and Arabic likewise |
| Duas | Yes (102) | Yes (102) | Yes (102) | All three fields present |
| Kalimas | Yes (6) | Yes (6) | Yes (6) | Arabic immutable |
| Quran ayahs (bundled) | English + Urdu for 10 surahs | Yes | Yes | Other languages require network |
| Articles (33) | English only | No | No | Educational prose is English-only |
| Seerah / Prophets / Sahaba / History | English only | No | No | Proper names and Quranic quotations retain Arabic |
| UI dictionaries | 11 languages | Yes | Yes | 50 keys each |

**Gap:** the long-form editorial library is English-only. The site does not claim otherwise. Translating 45,901 words of article prose would require a reviewed translation workflow that does not exist yet.

---

## 7. Claims audit

| Claim location | Previous wording | Current wording | Verdict |
| :--- | :--- | :--- | :--- |
| Language modal subtitle | "100% Scholarly Verified" | "Community-reviewed interface translations — coverage varies by language" | Honest |
| Language modal section | implied all 40 selectable | "Verified Portal Translations (11 Languages)" | Honest |
| Download page | "fully verified dictionaries for English, Urdu, and Arabic, and architectural framework support for 40 global languages" | "40 language entries: 11 verified dictionaries, 14 authorized partial dictionaries, and 15 still in progress" | Honest |
| Download page | "Quran Translations in 40 Global Languages" | retained, because the Quran registry does contain 40 editions | Accurate for the Quran layer, not the UI layer |
| About page | implied broad multilingual delivery | describes 40-language framework without claiming 40 translated interfaces | Honest |

---

## 8. Remaining translation work

1. **29 UI dictionaries** are missing. Priority order by likely audience: German, Russian, Portuguese, Swahili, Hausa, Somali, Pashto, Turkish (already verified), Chinese, French (verified), Malay (verified).
2. **Native review** of the 11 existing dictionaries has not been recorded. A reviewer name/date should be attached to each before calling them "reviewed".
3. **Article translation** is absent. A pilot of 2–3 foundational articles into Urdu and Arabic would test the workflow.
4. **Quran edition live-testing** should be extended to all 40, with a recorded pass/fail per edition.
5. **RTL QA** for Arabic/Urdu content blocks on narrow screens was not visually verified (viewport limitation).

No translation was machine-generated and presented as human-reviewed in this cycle.
