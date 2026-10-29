# NoorDeen — Religious Source Verification

**Audited:** 29 October 2026
**Scope:** Quran Arabic, translations, tafsir, asbab al-nuzul, thematic index, hadith, duas, kalimas, Seerah, prophets, Sahaba, history, worship guides, articles, and the Dr. Israr Ahmed lecture catalogue.
**Principle:** canonical text is never invented or silently "corrected"; where a source cannot be verified, the UI says so or the claim is removed. No item in this report is presented as a fatwa.

---

## 1. Verification summary

| Content class | Records | Source basis | Verification status |
| :--- | --: | :--- | :--- |
| Quran Arabic text | 114 surahs / 6,236 ayahs, all bundled | Hafs ʿUthmani text via `api.alquran.cloud` (`quran-uthmani`); text stored verbatim per ayah | Verified structurally; canonical ayah total and per-surah counts match |
| Quran translations | 40 editions registered; English, Urdu and transliteration bundled for all 6,236 ayahs | Named translator per edition; Saheeh International (EN), Fateh Muhammad Jalandhry (UR) | Bundled editions validated for every ayah; remaining editions registry-verified only |
| Tafsir | 3 verbatim editions + 6 editorial summaries | Tafsir al-Jalalayn EN (6,236 verses, tr. Feras Hamza, © Royal Aal al-Bayt Institute); Jalalayn AR (6,010 verses, public domain); asbab al-nuzul AR (275 verses / 200 reports, MIT dataset) | Downloaded verbatim; coverage, blanks, HTML and replacement characters checked. English translation licence flagged for owner review. Not independently collated against a printed edition |
| Thematic index | 30 themes / 5,639 keyword matches | Keyword match over the bundled Saheeh International English text | **Labelled a finding aid, not a scholarly thematic classification** |
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

### 2.3 Tafsir and asbab al-nuzul
- Three editions are bundled verbatim in `public/data/tafsir/surahs/`, with edition, translator, publisher, rights and coverage metadata in `public/data/tafsir/manifest.json` and `registry.json`.
- **Tafsir al-Jalalayn, English** — 6,236 of 6,236 verses across 114 surahs. Translated by Dr. Feras Hamza, published by the Royal Aal al-Bayt Institute for Islamic Thought (altafsir.com). The translation is © the Institute and is bundled with attribution for non-commercial educational use; commercial redistribution requires permission. **This licence is flagged for owner review.**
- **Tafsir al-Jalalayn, Arabic** — 6,010 of 6,236 verses across 114 surahs. The classical Arabic original is public domain. The digitised edition has 226 gaps; the UI names each gap and never fills it from another edition.
- **Asbab al-Nuzul, Arabic** — 275 verses across 50 surahs, comprising 200 reports from the MIT-licensed Asbab al-Nuzul Dataset, compiled in *Ṣaḥīḥ Asbāb al-Nuzūl* by Ibrāhīm Muḥammad al-ʿAlī. Reports are Arabic only; no English translation is bundled. Absence of an entry is explicitly not a claim that no occasion exists.
- One source anomaly is recorded rather than silently repaired: the asbab dataset lists Surah 96 ayahs 6–20 although the surah has 19 verses. Ayahs 6–19 were kept and ayah 20 discarded.
- The six pre-existing NoorDeen editorial summaries remain, now clearly labelled **"NoorDeen editorial summary"** and stored under editorial field names. They are not attributed to Ibn Kathir, al-Jalalayn or any other scholar.
- Every panel shows its edition and rights note. Missing text produces an explicit missing-entry message; no tafsir is generated at runtime.
- **Verification limit:** the text was downloaded verbatim and checked structurally (coverage, blank fields, raw HTML, U+FFFD). It has not been independently collated against a printed edition, and the asbab report chains have not been re-graded by a specialist.

### 2.4 Thematic verse index
- `public/data/tafsir/themes.json` contains 30 themes and 5,639 keyword matches generated by `scripts/build-thematic-index.cjs` over the bundled Saheeh International English text.
- Each theme records its keywords, total match count and up to 40 verse references. Suite 48 recomputes every count from the corpus.
- The page labels the index a **finding aid, not a scholarly thematic classification**; keyword matching can miss relevant verses or include imperfect matches.

### 2.5 Audio
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
| Tafsir English translation | © Royal Aal al-Bayt Institute; non-commercial educational use only | Attribution and rights note shown with every English entry; flagged for owner review |
| Tafsir Arabic text | 226 digitisation gaps | Gaps named explicitly; never filled from another edition |
| Asbab reports | Arabic only; chains not re-graded | No English translation shown; source and dataset licence stated |
| Thematic index | Keyword matching is not tafsir | Labelled a finding aid; counts recomputed by the test suite |
| 40 Quran editions | Only EN/UR live-tested | Registry labels translator; error state instead of invented text |
| Zakat rates | Indicative defaults | Editable; labelled non-live |
| Prayer times | No external authority comparison | Method labels (MWL/ISNA/Umm al-Qura) shown; no certification claim |

---

## 10. What this project does not claim

- It does **not** claim scholarly endorsement, ijazah, or a formal fatwa authority.
- It does **not** claim the hadith library is exhaustive or that every grading was independently re-derived.
- It does **not** claim the tafsir is complete, independently collated or free of digitisation gaps.
- It does **not** claim the English Jalalayn translation may be redistributed commercially; that permission has not been obtained.
- It does **not** claim the asbab reports are exhaustive or that their chains were re-graded here.
- It does **not** claim the thematic index is a scholarly thematic classification.
- It does **not** claim the 40 Quran editions were all reviewed here.
- It does **not** claim the offline bundle contains the full Quran.
- It does **not** host or own the Dr. Israr lectures.

These limits are stated on `about.html`, `sources.html`, the relevant module pages and in this report.
