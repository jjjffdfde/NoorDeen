# NoorDeen — Religious Source Verification

**Audited:** 28 October 2026
**Scope:** Quran Arabic, translations, tafsir, hadith, duas, kalimas, Seerah, prophets, Sahaba, history, worship guides, articles, and the Dr. Israr Ahmed lecture catalogue.
**Principle:** canonical text is never invented or silently "corrected"; where a source cannot be verified, the UI says so or the claim is removed. No item in this report is presented as a fatwa.

---

## 1. Verification summary

| Content class | Records | Source basis | Verification status |
| :--- | --: | :--- | :--- |
| Quran Arabic text | 114 surahs / 6,236 ayahs, all bundled | Hafs ʿUthmani text via `api.alquran.cloud` (`quran-uthmani`); text stored verbatim per ayah | Verified structurally; canonical ayah total and per-surah counts match |
| Quran translations | 40 editions registered; English, Urdu and transliteration bundled for all 6,236 ayahs | Named translator per edition; Saheeh International (EN), Fateh Muhammad Jalandhry (UR) | Bundled editions validated for every ayah; remaining editions registry-verified only |
| Tafsir | 6 verses | Editorial English summary of classical commentary | **Labelled as a summary, not a verbatim translation** |
| Hadith | 101 | Bukhari 42, Muslim 25, Tirmidhi 14, Abu Dawud 10, Nasa'i 4, Ibn Majah 6 | All graded Sahih or Hasan; numbers retained |
| Duas | 102 | Qur'anic verses and six hadith collections | 102/102 non-empty references; 99 unique |
| Kalimas | 6 | Standard six kalima formulary | Arabic, transliteration, English, Urdu present |
| Seerah | 25 chapters | Ibn Hisham, Ibn Sa'd, al-Tabari, Ibn Kathir, Sahihayn, Musnad Ahmad, al-Bayhaqi, al-Hakim | Per-chapter "Primary Classical Sources" lines |
| Prophets | 30 narratives | Qur'anic citations; 25 prophets + 5 righteous figures | Quranic priority; Isra'iliyyat handled cautiously |
| Sahaba | 52 monographs | Classical biographical corpora and hadith | Cohort structure; no fabricated rank claims |
| History | 12 eras / 66 milestones | al-Tabari, Ibn al-Athir, Ibn Kathir and modern scholarship | Narrative history, not a specialist historiography |
| Worship guides | Salah, wudu/ghusl/tayammum, janazah, Eid | Qur'an and hadith; madhhab differences noted | Practical steps checked; no AI fatwa |
| Articles | 33 | Per-article bibliography section | 33/33 have a "Sources & Further Reading" section |
| Lecture catalogue | 148 records / 147 unique | tanzeem.org source pages + YouTube IDs | No media hosted; every record links back |

---

## 2. Quran

### 2.1 Arabic text
- The reader requests the **Hafs ʿUthmani** edition and never rewrites the Arabic.
- Canonical metadata is checked by the suite: 114 surahs in order and 6,236 ayahs total.
- **All 114 surahs and 6,236 ayahs are bundled** as JSON chunks in `public/data/quran/surahs/`. Suite 45 verifies every per-surah ayah count against the canonical metadata, that every ayah carries Arabic/English/Urdu/transliteration, that no byte-order mark remains, and that the basmalah is not duplicated into the first ayah.
- The corpus was fetched once from `api.alquran.cloud` and validated wholesale before writing; the ingestion script aborts without writing if any count differs.
- Translation switching changes only the translation field; the Arabic verse remains in place.

### 2.2 Translations
- Each edition carries a translator/authority label (e.g. Saheeh International, Fateh Muhammad Jalandhry, Hamidullah, Diyanet, Kemenag, Basmeih, Ghomshei, García, Kuliev, Ma Jian).
- English reset restores Saheeh International.
- **Not claimed:** that all 40 editions were reviewed for theological accuracy by this project. They are published translations fetched from the upstream edition.

### 2.3 Tafsir
- Only **6 verses** have bundled commentary: 1:1, 1:2, 1:5, 1:6, 2:255, 112:1.
- The panel labels bundled text as an **"Editorial English summary of the classical commentary"** and states it is **not a verbatim translation**.
- Verses without bundled commentary show an explicit **"No commentary is bundled for this verse"** message. The previous fabricated Ibn Kathir/Jalalayn fallback was removed.
- No tafsir is generated at runtime.

### 2.4 Audio
- Ayah audio is constructed from the EveryAyah Alafasy 128 kbps path (e.g. `001001.mp3`).
- Audio is **not** re-hosted. Playback is online-only and was not listened to end-to-end in the headless environment; URL construction and control wiring were verified.

---

## 3. Hadith

| Collection | Records |
| :--- | --: |
| Sahih al-Bukhari | 42 |
| Sahih Muslim | 25 |
| Jami` at-Tirmidhi | 14 |
| Sunan Abi Dawud | 10 |
| Sunan an-Nasa'i | 4 |
| Sunan Ibn Majah | 6 |
| **Total** | **101** |

**Grading distribution:** 74 "Sahih (Authentic)", 22 "Sahih (Al-Albani)", 3 "Hasan (Al-Albani)", 1 "Hasan (Authentic)", 1 "Hasan Sahih (Al-Albani)".

- Every record retains its collection and number where available.
- No fabricated (*mawdu'*) or severely weak (*da'if jiddan*) narration is included; the About page states this policy and the data matches it.
- The library is a **curated selection**, not the complete corpus of any collection. It is described as such.
- Copy output includes the citation so a shared excerpt can be checked.

**Residual risk:** grading labels are transcribed from the cited editions/Al-Albani; they were not re-graded by a hadith specialist within this project. A scholar review pass is still outstanding.

---

## 4. Duas and adhkar

- **102 records**, each with Arabic, transliteration, English, Urdu and a reference.
- **102/102 references are non-empty**; 99 unique references.
- Reference families include Sahih al-Bukhari, Sahih Muslim, Sunan Abi Dawud, Jami` at-Tirmidhi, Sunan an-Nasa'i, Musannaf Ibn Abi Shaybah, al-Bayhaqi, al-Daruqutni, and Qur'anic citations (e.g. 21:87, 2:201, 3:8).
- Categories: morning, evening, sleep, protection, home, mosque, food, travel, health, distress, forgiveness, fasting, hajj, salah, janazah, eid, quranic, daily, nature.
- **Honest limit:** a reference string is not the same as a full takhrij. Where a reference says "(Sahih)" it reflects the cited grading, not an independent re-check.

---

## 5. Seerah, prophets, Sahaba, history

### 5.1 Seerah (25 chapters)
Each chapter ends with a **"Primary Classical Sources"** line. Examples observed:
- Ch. 1: Ibn Hisham, *As-Seerah an-Nabawiyyah* 1/1–150; al-Tabari, *Tarikh* 2/1–45; Sahih al-Bukhari.
- Ch. 5 (marriage to Khadijah): Ibn Hisham 1/190–192; Ibn Sa'd, *al-Tabaqat al-Kubra* 1/131–134, 8/14–19; Sahih al-Bukhari #3815.
- Ch. 8: Sahih al-Bukhari #3, #4953; Sahih Muslim #160; Ibn Hisham 1/235–242.
- Ch. 11: Sahih al-Bukhari #4770, #4971; Sahih Muslim #208; Ibn Hisham 1/263–270; al-Tabari 2/318–325.

**Caveat:** the project has not produced a full takhrij for every narrative detail. Where sources differ, the prose generally notes the difference rather than asserting one version.

### 5.2 Prophets (30 narratives)
- 25 are Qur'anic prophets; 5 are righteous figures who are not prophets. The page says so.
- Narratives prioritise Qur'anic text; extra-Qur'anic reports are used cautiously and not presented as scripture.
- **Not claimed:** that every extra-Qur'anic detail is authentic. The page avoids detailed Isra'iliyyat chains.

### 5.3 Sahaba (52 monographs)
- Six cohorts (e.g. the Ten Promised Paradise, the Four Caliphs, early converts, etc.).
- Titles and metadata were corrected from an earlier "30" claim to the actual 52.
- Rank and virtue statements are kept to well-known reports; the project does not invent rankings.

### 5.4 History (12 eras / 66 milestones)
- Eras run from the Prophetic period through the caliphates, Umayyads, Abbasids, Andalusia, the Mamluks, the Ottomans, and modern period.
- Named sources in the page: al-Tabari, Ibn al-Athir, Ibn Kathir, plus modern scholarship.
- **Honest limit:** this is a civilisational overview, not a specialist historiographical work; disputed interpretations are not adjudicated.

---

## 6. Worship guides and tools

| Guide/tool | Verification | Religious caution |
| :--- | :--- | :--- |
| Salah guide | Steps, recitations, positions and evidences render | Madhhab differences in posture/hand position are noted, not resolved |
| Wudu / ghusl / tayammum | Three methods with conditions and nullifiers | Differences in details are acknowledged |
| Janazah guide | Four takbirs and sequence | Juristic variations noted |
| Eid guide | Both Eid prayers and takbirs | Local practice varies |
| Prayer times | Solar calculations for Fajr/Dhuhr/Asr/Maghrib/Isha; Hanafi and Shafi'i Asr | **No qibla direction**; high-latitude rules are selectable but not independently verified |
| Zakat calculator | 2.5% on eligible assets; gold/silver nisab; below-nisab → 0 | Prices are **editable indicative defaults**, not a live market feed |
| Tasbih | Counter, cycles, custom target, persistence | Dhikr phrases are standard; no reward counts are invented |
| Hijri calendar | Live date and converter; 1448 AH rendered | Umm al-Qura vs local moon sighting difference is disclosed |

No tool issues a fatwa. The zakat page states it is an estimate and refers specific cases to a qualified scholar.

---

## 7. Articles (33)

- **33/33** articles contain a "Sources & Further Reading" section.
- Citations are by surah:ayah for the Qur'an and by collection (and often number) for hadith.
- Articles explicitly state they are educational overviews, not personal fatwas.
- Bibliographies name classical works (e.g. al-Nawawi's *al-Majmu'*, Ibn Rushd's *Bidayat al-Mujtahid*) and contemporary standards (AAOIFI) rather than linking every title.
- **Gap:** bibliography entries are mostly plain text, not hyperlinks. A future pass should add stable URLs/ISBNs.

**Batch 4 (parents, parenting, inheritance, neighbours):** all four cite Qur'an by surah:ayah and hadith by collection, use a bibliography, and state that they are educational overviews. The inheritance article explicitly warns that fixed shares are a specialist field and that individual cases need a qualified scholar; it does not issue a fatwa or calculate a distribution. The parenting article distinguishes the Prophetic model from cultural custom and does not present corporal punishment as a religious obligation.

**Batch 5 (business ethics, contracts, debt, workers' rights):** all four cite Qur'an by surah:ayah and hadith by collection, carry a bibliography and an explicit "not a fatwa" statement, and direct specific modern cases (mortgages, credit cards, buy-now-pay-later, employment disputes) to a qualified scholar. The debt article does not declare any specific modern product halal or haram. Where a hadith number could not be stated with confidence, the article uses collection-level attribution instead of inventing a number.

**Content-quality defect found and fixed this cycle:** 57 lines across `history.html`, `sahaba.html` and 10 older articles contained literal Markdown emphasis markers (`**text**`, `*text*`) in rendered HTML. These were converted to `<strong>`/`<em>` and re-verified in the browser (0 stray asterisks, balanced tags, no console errors). A related generator defect (`*decision*` in `batch-2b.cjs`) was fixed before rebuilding, so the 33-article library contains no stray Markdown.

---

## 8. Dr. Israr Ahmed lecture catalogue

- **148 records / 147 unique YouTube uploads / 7 series.**
- Every record carries the tanzeem.org source URL and a YouTube ID.
- **No video is downloaded, stored or re-uploaded.** Embeds use `youtube-nocookie.com` and load only on click.
- The duplicate upload (`c6czfEhWVo8`) appears in two source listings; both records are retained and the duplicate is flagged rather than hidden.
- Coverage is **pages 1–10 of 74** on the source archive — a substantial sample, not the complete corpus. The page states this.
- **Not claimed:** transcripts, translations, or scholarly endorsement of every lecture.

---

## 9. Items requiring further review (flagged, not hidden)

| Item | Why it needs review | Current handling |
| :--- | :--- | :--- |
| Hadith gradings | Transcribed, not re-graded by a specialist | Labels retained with collection/number; About page states the policy |
| Dua references | Reference strings, not full takhrij | Every entry cites a source; no grading certainty is invented |
| Seerah details | Classical reports vary in strength | Per-chapter source lines; differences generally noted |
| Prophetic narratives | Extra-Qur'anic material | Qur'anic priority; cautious use |
| History interpretations | Civilisational overview | Named sources; no adjudication of disputed history |
| Tafsir | 6 editorial summaries | Explicitly labelled as summaries, not translations |
| 40 Quran editions | Only EN/UR live-tested | Registry labels translator; error state instead of invented text |
| Zakat rates | Indicative defaults | Editable; labelled non-live |
| Prayer times | No external authority comparison | Method labels (MWL/ISNA/Umm al-Qura) shown; no certification claim |

---

## 10. What this project does not claim

- It does **not** claim scholarly endorsement, ijazah, or a formal fatwa authority.
- It does **not** claim the hadith library is exhaustive or that every grading was independently re-derived.
- It does **not** claim the tafsir is a complete or verbatim translation.
- It does **not** claim the 40 Quran editions were all reviewed here.
- It does **not** claim the offline bundle contains the full Quran.
- It does **not** host or own the Dr. Israr lectures.

These limits are stated on `about.html`, `sources.html`, the relevant module pages and in this report.
