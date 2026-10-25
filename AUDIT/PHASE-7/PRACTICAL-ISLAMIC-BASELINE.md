# Practical Islamic Learning Library — Baseline Audit & Gap Analysis
**Islamic Knowledge Portal — Phase 7 of 10**
*Date: October 2026 | Document Status: Verified Complete Baseline*

---

## 1. Executive Summary

Phase 7 establishes a verified, source-backed, highly usable, and beginner-friendly **Practical Islamic Learning Library**. Practical worship (*Ibadat*) constitutes the daily living reality of a Muslim. Errors in purification, prayer sequences, fasting regulations, Zakat thresholds, or funeral rites can compromise religious observance or mislead new learners. 

This baseline audit evaluates all existing practical learning modules, datasets, calculators, and pedagogical interfaces across the portal against classical primary sources, verified Hadith collections (*Kutub al-Sittah*), the four recognized Sunni legal schools (*Hanafi*, *Shafi'i*, *Maliki*, *Hanbali*), accessibility guidelines (WCAG 2.1 AA), and mobile responsiveness.

---

## 2. Inventory of Practical Modules & Baseline Status

| Module / File | Current Size | Baseline Purpose | Content Depth & Status | Identified Deficiencies & Gaps |
| :--- | :--- | :--- | :--- | :--- |
| `public/hadith.html` | 21,311 bytes | Hadith reading & search | **PARTIAL**: 8 traditions in `data.js` across Bukhari, Muslim, Abu Dawud, Tirmidhi, Nasa'i. | Dataset is too small; missing Ibn Majah; missing granular search by narrator, topic, grade; needs expanded verified entries with full Arabic tashkeel, exact references, and grading provenance. |
| `public/duas.html` | 20,146 bytes | Daily supplications & adhkar | **PARTIAL**: 17 duas in `data.js` with interactive counter. | Covers morning, sleep, janazah, salah, forgiveness; needs morning/evening adhkar expansion, after-salah adhkar, travel, distress, eating, entering/leaving home & mosque, fasting, and Hajj supplications. |
| `public/salah-guide.html` | 76,042 bytes | Daily prayer learning | **PASS**: Extensive 8-section guide with postures, recitations, breakdown table, and chair prayer. | Needs clear, transparent documentation of Madhhab variations (Raf' al-Yadayn, Ameen aloud/silent, Qunut in Witr) and explicit recitations for Witr and Tahajjud. |
| `public/wudu-guide.html` | 43,492 bytes | Ablution & purification | **PARTIAL**: Excellent on Wudu (Fard & Sunan acts, socks, nullifiers). | Lacks dedicated, comprehensive sections for **Ghusl** (Fard & Sunnah procedures) and **Tayammum** (dry ablution prerequisites & sequence). |
| `public/janazah-guide.html` | 55,227 bytes | Funeral prayer & burial | **PASS**: 4 Takbirs sequence, explicit prohibition of Ruku/Sujud, adult and child duas, cemetery etiquette. | Well structured; needs verification against test suite and cross-linking with Hadith/Dua libraries. |
| `public/eid-guide.html` | 42,794 bytes | Eid al-Fitr & Eid al-Adha | **PASS**: Dual Madhhab methods (Hanafi 6 Takbirs vs Shafi'i/Hanbali 12 Takbirs), Takbirat al-Tashreeq schedule. | Well structured; needs verified cross-links with Fasting, Zakat al-Fitr, and Hajj guides. |
| `public/zakat-calculator.html` | 34,200 bytes | Wealth & Nisab calculator | **PASS**: Interactive calculator, Gold & Silver Nisab, modern assets, 8 recipient categories. | Needs validation of input edge-cases (negative numbers, zero inputs, debt offsets) and explicit formula transparency. |
| `public/tasbih.html` | 26,097 bytes | Digital dhikr counter | **PASS**: Interactive counter, haptics, post-salah adhkar guide. | Functions reliably; verify offline operation and audio permissions. |
| `public/prayer-times.html` | 32,550 bytes | Solar astronomical times | **PASS**: Mathematical solar algorithms in `tools.js`, Hanafi vs Shafi'i Asr calculation, Qiblah. | Functions reliably. |
| `public/kalimas.html` | 34,455 bytes | Six Kalimas of Islam | **PASS**: Complete Arabic vocalization, transliteration, English, Urdu, fiqh commentary. | Verified complete. |
| `public/pillars.html` | 38,227 bytes | The Five Pillars overview | **PARTIAL**: Covers Shahadah, Salah, Zakat, Sawm, Hajj concisely. | Pillar 4 (Sawm) and Pillar 5 (Hajj) require dedicated, comprehensive, step-by-step practical guides for learners. |
| *Missing: Fasting Guide* | *N/A* | Ramadan & Fasting Hub | **MISSING**: Currently only a summary section in `pillars.html`. | Needs dedicated page (`public/fasting-guide.html`) covering Suhoor, Iftar, Qada, Fidyah, Kaffarah, Taraweeh, Laylat al-Qadr, Itikaf. |
| *Missing: Hajj & Umrah* | *N/A* | Hajj & Umrah Learning Hub | **MISSING**: Currently only a summary section in `pillars.html`. | Needs dedicated page (`public/hajj-guide.html`) covering 3 Hajj forms, Miqat, Ihram, Tawaf, Sa'i, Arafah, Muzdalifah, Mina, Jamarat, and Umrah sequence. |

---

## 3. Dataset Audit: Hadith & Duas in `public/js/data.js`

### 3.1 Hadith Dataset Baseline
The baseline `public/js/data.js` file contains 8 Hadith records under `ISLAMIC_DATA.hadiths`:
1. `bukhari-1`: Bukhari #1 (Revelation / Intentions) — Sahih
2. `bukhari-13`: Bukhari #13 (Faith / Love for brother) — Sahih
3. `muslim-2564`: Muslim #2564 (Piety / Allah looks at hearts) — Sahih
4. `muslim-223`: Muslim #223 (Purification is half of faith) — Sahih
5. `tirmidhi-1924`: Tirmidhi #1924 (Mercy to mankind) — Sahih (Al-Albani)
6. `abudawud-4799`: Abu Dawud #4799 (Good character weighs heaviest) — Sahih (Al-Albani)
7. `nasai-3140`: Nasa'i #3140 (Kindness to mother is Paradise) — Hasan (Al-Albani)
8. `bukhari-5027`: Bukhari #5027 (Best of you learns & teaches Quran) — Sahih

**Assessment**:
- All 8 existing records have authentic Arabic, English, Urdu, narrator, and verifiable reference numbers.
- **Deficiency**: Kutub al-Sittah requires representation of Sunan Ibn Majah. The dataset must be expanded to provide broader thematic coverage (Salah, Fasting, Zakat, Character, Dua, Knowledge, Family) across all six canonical collections with rigorous grading metadata.

### 3.2 Duas Dataset Baseline
The baseline contains 17 Duas under `ISLAMIC_DATA.duas`:
- Categories covered: `morning` (2), `sleep` (2), `protection` (1), `home` (1), `janazah` (2), `eid` (1), `salah` (3), `forgiveness` (1), `quranic` (4).
- **Assessment**:
  - Arabic text is properly vocalized with tashkeel.
  - References are sound (*Hisn al-Muslim*, Bukhari, Muslim, Abu Dawud, Quran).
  - Target counters (1x, 3x) and reset mechanics function smoothly.
  - **Deficiency**: Crucial daily prophetic supplications are missing, including after-salah adhkar (*Astaghfirullah x3, Allahumma Antas-Salam*, Tasbih Fatimi), eating & drinking, entering/leaving mosque, restroom etiquettes, travel (*Subhanalladhi sakh-khara lana hadha*), severe distress (*Dua Yunus*), visiting the sick, fasting/Iftar, and Hajj Talbiyah.

---

## 4. Purification & Worship Fiqh Audit

### 4.1 Salah Guide (`salah-guide.html`)
- **Strengths**: Comprehensive posture guide with authentic Arabic recitations (Thana, Fatihah, Ruku, Qawmah, Sujud, Jalsah, Tashahhud, Durood Ibrahim, concluding supplications). Accurately defines the 14 Arkan (Pillars) vs Wajibaat. Covers chair prayer and traveler prayer.
- **Madhhab Integrity**: Notes that the method presented follows the majority Prophetic traditions while transparently clarifying where the legal schools differ:
  - *Raf' al-Yadayn* (raising hands only at Opening Takbir in Hanafi vs at Ruku & rising in Shafi'i/Hanbali).
  - Recitation of Surah Al-Fatihah behind the Imam (silent/obligatory in Shafi'i vs listened to silently in Hanafi).
  - Saying *Ameen* aloud vs silently.
  - *Witr*: 3 connected Rak'ahs with Qunut before Ruku (Hanafi) vs 2+1 Rak'ahs with Qunut after Ruku (Shafi'i/Hanbali).

### 4.2 Wudu, Ghusl, and Tayammum Guide (`wudu-guide.html`)
- **Strengths**: Clear distinction between the 4 Quranic Fard acts (Surah Al-Ma'idah 5:6) and the 14 Sunan acts. Accurate rules on wiping over socks (*Masah alal-Khuffayn*).
- **Major Gap**:
  - The page is titled "Wudu Guide" but must serve as the portal's purification hub. Learners specifically need clear, distinct, step-by-step guides for **Ghusl** (Major Ritual Purity) and **Tayammum** (Dry Ablution).
  - **Ghusl Requirements**:
    1. Quranic basis (Surah An-Nisa 4:43, Surah Al-Ma'idah 5:6).
    2. Obligatory causes (*Janabah*, cessation of menses/postnatal bleeding).
    3. Mandatory acts (*Fara'id*): Thorough rinsing of the mouth, sniffing water into nostrils, washing the entire body with water reaching roots of hair.
    4. Sunnah Prophetic procedure based on the narration of Sayyidah Aishah (RA) in Sahih al-Bukhari #248 and Sahih Muslim #316.
  - **Tayammum Requirements**:
    1. Quranic mandate (4:43, 5:6).
    2. Valid conditions: genuine lack of water, illness/medical risk, severe danger.
    3. Sequential method: Intention, striking pure dry earth/stone, blowing off excess dust, wiping the entire face, wiping hands and forearms.
    4. Nullifiers of Tayammum (finding water or anything that invalidates Wudu).

---

## 5. Funeral & Festive Prayers Audit

### 5.1 Janazah Guide (`janazah-guide.html`)
- Verified: Explicitly states that Janazah contains **ZERO Ruku and ZERO Sujud**.
- Verified: The 4 Takbirs sequence is accurately detailed:
  1. 1st Takbir: *Thana* / Surah Al-Fatihah.
  2. 2nd Takbir: *Durood Ibrahimiyyah*.
  3. 3rd Takbir: Sincere supplication for the deceased (distinct texts for adult male/female vs minor child).
  4. 4th Takbir: Concluding dua and Tasleem.
- Verified: Graveyard manners (*Ziyarat al-Qubur*) and prohibition of wailing (*Niyāḥah*).

### 5.2 Eid Guide (`eid-guide.html`)
- Verified: Accurately explains both classical Sunni methods:
  - **Hanafi**: 6 extra Takbirs (3 in 1st Rak'ah before Qira'ah, 3 in 2nd Rak'ah after Qira'ah before Ruku).
  - **Shafi'i & Hanbali**: 12 extra Takbirs (7 in 1st Rak'ah after opening Takbir, 5 in 2nd Rak'ah after rising).
- Verified: Takbirat al-Tashreeq schedule (23 consecutive prayers from 9th Dhul Hijjah Fajr to 13th Dhul Hijjah Asr).
- Verified: Zakat al-Fitr (Fitrana) obligation before the Eid prayer.

---

## 6. Financial Worship Audit: Zakat Calculator (`zakat-calculator.html`)

- **Nisab Thresholds**:
  - Gold Nisab: 87.48 grams (7.5 tola / 2.8125 troy oz).
  - Silver Nisab: 612.36 grams (52.5 tola / 19.6875 troy oz).
  - Rate: 2.5% (1/40th) of net Zakatable wealth above Nisab held for one lunar year (*Hawl*).
- **Calculation Logic Verification**:
  - Sums Zakatable assets: Cash & bank balances, gold & silver jewelry/bullion, tradable stock shares, business inventory, cryptocurrency.
  - Subtracts immediate liabilities: Unpaid monthly living bills, commercial short-term debts due immediately.
  - Ensures net Zakatable assets cannot be negative.
  - Applies 2.5% only when Net Wealth $\ge$ Nisab.
  - Documents the eight Qur'anic recipient categories (*Masarif az-Zakat*, Surah At-Tawbah 9:60).

---

## 7. Major Gap: Fasting & Ramadan Education Hub

While `pillars.html` briefly touches upon Sawm, the portal lacks a dedicated, comprehensive **Ramadan & Fasting Educational Hub** (`public/fasting-guide.html`). Learners require:
1. **Quranic Mandate**: Surah Al-Baqarah 2:183-187 with theological explanation of *Taqwa*.
2. **Prerequisites & Definition of Fasting**: *Imsak* (abstinence from food, drink, and conjugal relations from true dawn / Fajr until sunset / Maghrib with intention).
3. **Suhoor & Iftar**: Prophetic sunnah of taking the pre-dawn meal (*Suhoor*) and hastening the break of fast (*Iftar*), with authentic supplications (*Dhahaba adh-Dhama'u...*).
4. **Legitimate Exemptions**: Ill persons, travelers, pregnant or nursing mothers fearing harm, the elderly and chronically ill.
5. **Restitution Framework**:
   - *Qada* (Making up missed fasts day-for-day).
   - *Fidyah* (Feeding an indigent person for each missed fast for permanent incapacity).
   - *Kaffarah* (Major expiation for deliberate, unlawful invalidation of a Ramadan fast).
6. **Taraweeh & Qiyam al-Layl**: Historical background, Sunnah status, congregational recitation.
7. **The Last Ten Nights & Laylat al-Qadr**: Seeking the Night of Power on odd nights, *Itikaf* (spiritual retreat in the mosque), and the prophetic supplication taught to Sayyidah Aishah (*Allahumma innaka 'Afuwwun...*).
8. **Zakat al-Fitr**: Purpose (purifying the faster from idle talk and feeding the poor) and timing before Eid prayer.

---

## 8. Major Gap: Hajj & Umrah Educational Hub

Similarly, learners and pilgrims need a dedicated, comprehensive **Hajj & Umrah Practical Learning Hub** (`public/hajj-guide.html`). It must cover:
1. **The Three Forms of Hajj**:
   - *Hajj al-Tamattu'* (Performing Umrah, exiting Ihram, then entering Ihram for Hajj — most common).
   - *Hajj al-Qiran* (Entering Ihram for Umrah and Hajj together without exiting Ihram in between).
   - *Hajj al-Ifrad* (Entering Ihram for Hajj only).
2. **Miqat Boundaries**: Dhul Hulayfah, Al-Juhfah, Qarn al-Manazil, Yalamlam, Dhat 'Irq.
3. **Ihram Protocols**: Spiritual intention, physical purification, prohibited acts during Ihram (perfume, cutting hair/nails, marital relations, hunting, head coverings for men, face veils/gloves for women).
4. **Talbiyah**: Authentic text (*Labbayk Allahumma labbayk...*), pronunciation, meaning, and continuous recitation.
5. **Step-by-Step Umrah**:
   - Ihram & Intention at Miqat.
   - Entry into Al-Masjid al-Haram.
   - *Tawaf* (7 anti-clockwise circuits of the Ka'bah, starting at the Black Stone / *Hajar al-Aswad*, Idtiba' and Raml for men in first 3 circuits, 2 Rak'ahs behind Maqam Ibrahim, drinking Zamzam).
   - *Sa'i* (7 laps between Safa and Marwah, starting at Safa, supplications, green light running for men).
   - *Halq* (Shaving) or *Taqsir* (Trimming hair) — exiting Ihram.
6. **Step-by-Step Hajj Day-by-Day**:
   - *8th Dhul Hijjah (Yawm al-Tarwiyah)*: Entering Ihram, proceeding to Mina, praying 5 prayers shortened (Qasr).
   - *9th Dhul Hijjah (Yawm Arafah)*: Standing at Arafah from Zawwal to Maghrib (the grand pillar of Hajj), combined Dhuhr and Asr, intense supplication, moving to Muzdalifah after sunset, combining Maghrib and Isha, sleeping under open sky, collecting pebbles.
   - *10th Dhul Hijjah (Yawm al-Nahr)*: Stoning Jamarat al-Aqaba (7 pebbles), animal sacrifice (*Hady*), Halq or Taqsir (Tahallul al-Asghar), Tawaf al-Ifadah and Sa'i in Makkah (Tahallul al-Akbar).
   - *11th–13th Dhul Hijjah (Ayyam al-Tashreeq)*: Staying in Mina, stoning all three Jamarat daily (Sughra, Wusta, Kubra with 7 pebbles each).
   - *Tawaf al-Wada'*: Farewell circumambulation before departing Makkah.

---

## 9. Action Plan for Phase 7 Execution

1. **Stage 2: Hadith Library Enhancement** (`public/js/data.js` & `public/hadith.html`):
   - Expand `hadiths` array with authentic Kutub al-Sittah narrations (Bukhari, Muslim, Abu Dawud, Tirmidhi, Nasa'i, Ibn Majah) covering core Islamic worship and manners.
   - Include Arabic tashkeel, English, Urdu, narrator, grading attribution, and topics.
   - Enable advanced filtering by collection, topic, narrator, and text search.
   - Create `AUDIT/PHASE-7/HADITH-COVERAGE-AND-SOURCES.csv`.
2. **Stage 3: Duas & Adhkar Library Expansion** (`public/js/data.js` & `public/duas.html`):
   - Expand `duas` array to include essential daily morning/evening, after-salah, eating, travel, illness, distress, and fasting supplications.
   - Ensure vocalized Arabic, transliteration, English, Urdu, and source citations.
   - Create `AUDIT/PHASE-7/DUA-COVERAGE-AND-SOURCES.csv`.
3. **Stage 4 & 5: Salah & Purification Upgrades** (`public/salah-guide.html`, `public/wudu-guide.html`):
   - Augment `wudu-guide.html` with complete standalone sections for **Ghusl** (Fard vs Sunnah) and **Tayammum** (Conditions & Procedure).
   - Refine `salah-guide.html` with transparent Madhhab comparisons and special prayers (Witr, Tahajjud, Jumu'ah).
   - Create `AUDIT/PHASE-7/SALAH-AND-PURIFICATION-REVIEW.md`.
4. **Stage 6 & 7: Janazah & Eid Guides Review** (`public/janazah-guide.html`, `public/eid-guide.html`):
   - Verify safeguards (no Ruku/Sujud in Janazah, Takbirat al-Tashreeq timing, Zakat al-Fitr due dates).
   - Create `AUDIT/PHASE-7/JANAZAH-AND-EID-REVIEW.md`.
5. **Stage 8, 9 & 10: Fasting Hub & Zakat Validation**:
   - Construct comprehensive `public/fasting-guide.html` with full Ramadan educational curriculum.
   - Validate Zakat calculation engine in `tools.js` and `zakat-calculator.html`.
   - Create `AUDIT/PHASE-7/RAMADAN-FASTING-REVIEW.md` and `AUDIT/PHASE-7/ZAKAT-CALCULATOR-VALIDATION.md`.
6. **Stage 11: Hajj & Umrah Learning Hub**:
   - Construct comprehensive `public/hajj-guide.html` with full pedagogical guide for Hajj and Umrah.
   - Create `AUDIT/PHASE-7/HAJJ-UMRAH-COVERAGE-AND-SOURCES.md`.
7. **Stage 12–15: Multilingual, Licensing, UX & SEO**:
   - Generate `TRANSLATION-AND-LICENSING-STATUS.csv`, `CONTENT-CHANGES.md`, `HUMAN-REVIEW-REQUIRED.md`, `SEO-ACCESSIBILITY-AND-UX.md`.
8. **Stage 16: Automated Testing**:
   - Author Test Suite 27 in `test/run-tests.js` covering all Phase 7 modules.
   - Verify 100% test pass rate with zero regressions.
9. **Stage 17 & 18: Final Reports & Verification**:
   - Complete `AUDIT/PHASE-7/TEST-RESULTS.md` and `AUDIT/PHASE-7/FINAL-VERIFICATION.md`.
