const fs = require('fs');
let code = fs.readFileSync('scripts/generate-glossary-data.cjs', 'utf8');

const EXTRA_TERMS = [
  {
    term: "Mala'ikah",
    ar: "مَلَائِكَة",
    tr: "Malā'ikah",
    cat: "creed",
    def: "The angels of Allah created from light (Noor), possessing no free will to disobey, dedicated perpetually to executing divine commands (e.g. Jibril, Mika'il, Israfil, Malak al-Mawt).",
    ref: "Surah Al-Baqarah 2:285; Sahih Muslim #2996"
  },
  {
    term: "Kutub",
    ar: "كُتُب",
    tr: "Kutub",
    cat: "creed",
    def: "The revealed divine scriptures sent down to prophets, including the Suhuf of Ibrahim, Tawrat of Musa, Zabur of Dawud, Injeel of Isa, and the Holy Quran as the final protected revelation.",
    ref: "Surah An-Nisa 4:136; Surah Al-A'la 87:18-19"
  },
  {
    term: "Rusul",
    ar: "رُسُل",
    tr: "Rusul",
    cat: "creed",
    def: "The Messengers of Allah: human men chosen by divine election to convey divine law, guidance, and scripture to humanity, from Adam to Muhammad ﷺ.",
    ref: "Surah An-Nisa 4:163-165; Surah Al-Baqarah 2:285"
  },
  {
    term: "Jannah",
    ar: "جَنَّة",
    tr: "Jannah",
    cat: "creed",
    def: "The eternal celestial Gardens of Paradise prepared for the righteous believers, containing delights that no eye has ever seen, no ear has ever heard, and no human heart has ever conceived.",
    ref: "Surah As-Sajdah 32:17; Sahih al-Bukhari #4779"
  },
  {
    term: "Jahannam",
    ar: "جَهَنَّم",
    tr: "Jahannam",
    cat: "creed",
    def: "Hellfire: the eternal abode of divine punishment prepared for obstinate disbelievers and tyrants, featuring intense fires, darkness, and anguish.",
    ref: "Surah Al-Mulk 67:6-8; Sahih Muslim #2843"
  },
  {
    term: "Hisab",
    ar: "حِسَاب",
    tr: "Ḥisāb",
    cat: "creed",
    def: "The universal divine reckoning and accountability on the Day of Judgment when each individual's record of deeds is presented.",
    ref: "Surah Al-Inshiqaq 84:7-8; Sahih al-Bukhari #6536"
  },
  {
    term: "Kaffarah",
    ar: "كَفَّارَة",
    tr: "Kaffārah",
    cat: "fiqh",
    def: "Prescribed religious expiation required to rectify an intentional violation, such as breaking an oath, deliberately breaking a Ramadan fast without excuse, or accidental manslaughter.",
    ref: "Surah Al-Ma'idah 5:89; Sahih al-Bukhari #1936"
  },
  {
    term: "Fidyah",
    ar: "فِدْيَة",
    tr: "Fidyah",
    cat: "fiqh",
    def: "Compensation paid by individuals permanently unable to fast due to chronic illness or frail old age, feeding one poor person per day of missed fasting.",
    ref: "Surah Al-Baqarah 2:184; Sahih al-Bukhari #4505"
  },
  {
    term: "Tahajjud",
    ar: "تَهَجُّد",
    tr: "Tahajjud",
    cat: "fiqh",
    def: "Voluntary night prayer offered after waking from sleep during the final third of the night (Qiyam al-Layl), recognized as the most virtuous prayer after the obligatory prayers.",
    ref: "Surah Al-Isra 17:79; Sahih Muslim #758"
  },
  {
    term: "Witr",
    ar: "وِتْر",
    tr: "Witr",
    cat: "fiqh",
    def: "The odd-numbered prayer (typically 1 or 3 Rak'ahs) offered at the close of the night following Isha, containing the special Dua al-Qunut.",
    ref: "Sahih al-Bukhari #998; Sahih Muslim #749"
  },
  {
    term: "Duha",
    ar: "ضُحَى",
    tr: "Ḍuḥā",
    cat: "fiqh",
    def: "The forenoon voluntary prayer (2 to 8 Rak'ahs) performed when the sun has risen well above the horizon until before zenith, fulfilling the daily charity due upon all 360 bodily joints.",
    ref: "Sahih Muslim #720; Sahih al-Bukhari #1178"
  },
  {
    term: "Tarawih",
    ar: "تَرَاوِيح",
    tr: "Tarāwīḥ",
    cat: "fiqh",
    def: "The special voluntary congregational night prayers offered in pairs of Rak'ahs throughout the blessed month of Ramadan following the Isha prayer.",
    ref: "Sahih al-Bukhari #2010; Sahih Muslim #759"
  },
  {
    term: "Khutbah",
    ar: "خُطْبَة",
    tr: "Khuṭbah",
    cat: "fiqh",
    def: "The formal Islamic sermon delivered by the Imam or Khatib prior to the Friday (Jumu'ah) prayer, and following the Eid prayers, reminding listeners of piety and civic virtue.",
    ref: "Sahih al-Bukhari #920; Sahih Muslim #867"
  },
  {
    term: "Adhan",
    ar: "أَذَان",
    tr: "Adhān",
    cat: "fiqh",
    def: "The formal public call to prayer proclaimed by the Mu'adh-dhin from the mosque to notify the community of the entry of canonical prayer time.",
    ref: "Sahih al-Bukhari #604; Sahih Muslim #377"
  },
  {
    term: "Iqamah",
    ar: "إِقَامَة",
    tr: "Iqāmah",
    cat: "fiqh",
    def: "The secondary call proclaimed immediately inside the prayer hall signaling the immediate alignment of rows and commencement of congregational prayer.",
    ref: "Sahih al-Bukhari #605; Sahih Muslim #379"
  },
  {
    term: "Imam",
    ar: "إِمَام",
    tr: "Imām",
    cat: "fiqh",
    def: "The religious leader who stands at the front to lead the congregation in prayer, or more broadly a recognized scholarly authority in Islamic jurisprudence.",
    ref: "Sahih al-Bukhari #689; Sahih Muslim #411"
  },
  {
    term: "Ma'moom",
    ar: "مَأْمُوم",
    tr: "Ma'mūm",
    cat: "fiqh",
    def: "The individual worshiper standing in the congregation who follows the lead and postures of the Imam during prayer.",
    ref: "Sahih al-Bukhari #690"
  },
  {
    term: "Awrah",
    ar: "عَوْرَة",
    tr: "'Awrah",
    cat: "fiqh",
    def: "The parts of the body that are legally obligatory to conceal from public view and during prayer: for men, conventionally from the navel to the knees; for women, the entire body except face and hands.",
    ref: "Surah An-Nur 24:31; Sunan Abi Dawud #4104"
  },
  {
    term: "Taharah",
    ar: "طَهَارَة",
    tr: "Ṭahārah",
    cat: "fiqh",
    def: "Physical and ritual purification from physical filth (Najasah) and spiritual states of impurity (Hadath), representing the indispensable prerequisite for prayer.",
    ref: "Sahih Muslim #223; Bidayat al-Mujtahid by Ibn Rushd"
  },
  {
    term: "Najasah",
    ar: "نَجَاسَة",
    tr: "Najāsah",
    cat: "fiqh",
    def: "Ritual filth or impurity (e.g. blood, urine, swine, intoxicants) that must be physically washed off the body, garments, and prayer area before Salah.",
    ref: "Surah Al-Muddaththir 74:4; Sahih al-Bukhari #227"
  },
  {
    term: "Kafan",
    ar: "كَفَن",
    tr: "Kafan",
    cat: "fiqh",
    def: "The simple, unstitched white shroud (traditionally three sheets for men, five for women) used to wrap the washed deceased body prior to burial.",
    ref: "Sahih al-Bukhari #1264; Sahih Muslim #943"
  },
  {
    term: "Ramy",
    ar: "رَمْي",
    tr: "Ramy",
    cat: "fiqh",
    def: "The Hajj ritual of stoning the three pillars (Jamarat) in Mina with seven pebbles each, commemorating Prophet Ibrahim's rejection of Satan's temptations.",
    ref: "Sahih Muslim #1218; Sahih al-Bukhari #1751"
  },
  {
    term: "Muzdalifah",
    ar: "مُزْدَلِفَة",
    tr: "Muzdalifah",
    cat: "fiqh",
    def: "The sacred open plain between Arafat and Mina where Hajj pilgrims spend the night of the 10th of Dhul-Hijjah under the open sky and collect pebbles.",
    ref: "Surah Al-Baqarah 2:198; Sahih Muslim #1218"
  },
  {
    term: "Mina",
    ar: "مِنَى",
    tr: "Minā",
    cat: "fiqh",
    def: "The historic valley of tents outside Makkah where pilgrims spend the Days of Tashreeq (10th-13th of Dhul-Hijjah) performing sacrifices and stoning the Jamarat.",
    ref: "Sahih al-Bukhari #1742; Sahih Muslim #1218"
  },
  {
    term: "Ukhuwwah",
    ar: "أُخُوَّة",
    tr: "Ukhuwwah",
    cat: "character",
    def: "The sacred bond of Islamic brotherhood and sisterhood transcending all ethnic, national, racial, and socioeconomic divides.",
    ref: "Surah Al-Hujurat 49:10; Sahih al-Bukhari #6011"
  },
  {
    term: "Khuluq Hasan",
    ar: "خُلُق حَسَن",
    tr: "Khuluq Ḥasan",
    cat: "character",
    def: "Noble moral character, gentle speech, benevolence, and forbearance, which weighs heaviest upon the cosmic Scale on the Day of Judgment.",
    ref: "Jami` at-Tirmidhi #2003; Sahih al-Bukhari #6035"
  },
  {
    term: "Muqatta'at",
    ar: "مُقَطَّعَات",
    tr: "Muqaṭṭa'āt",
    cat: "quran",
    def: "The disjointed, mystical Arabic letters appearing at the beginning of 29 Surahs of the Holy Quran (e.g. Alif-Lam-Mim, Ha-Mim, Ya-Sin), symbolizing the divine inimitable miracle of the Quran.",
    ref: "Tafsir Ibn Kathir 1/157; Al-Itqan by As-Suyuti"
  }
];

// Append before module.exports
const lastBracket = code.lastIndexOf('];');
if (lastBracket === -1) throw new Error('Could not find ]; in generate-glossary-data.cjs');

const formattedExtra = EXTRA_TERMS.map(t => '  ' + JSON.stringify(t, null, 2)).join(',\n');
const updatedCode = code.slice(0, lastBracket) + ',\n' + formattedExtra + '\n];\n\nconsole.log(`GLOSSARY_TERMS defined: ${GLOSSARY_TERMS.length} terms.`);\nmodule.exports = GLOSSARY_TERMS;\n';

fs.writeFileSync('scripts/generate-glossary-data.cjs', updatedCode, 'utf8');
console.log('Appended 27 extra terms to scripts/generate-glossary-data.cjs');
