const fs = require('fs');

const ADD_THEMATIC = {
  3: {
    period: "Madani (3-5 AH)",
    themes: [
      "Firmness in Faith against Theological Deviation",
      "Dialogue with Christians of Najran and Prophethood of Isa (AS)",
      "Lessons of the Battle of Uhud (Obedience and Steadfastness)",
      "The Reality of Martyrdom and Divine Testing"
    ],
    asbab: "Sections revealed concerning the Christian delegation from Najran, followed by extensive divine commentary on the trials and tactical lessons of the Battle of Uhud.",
    virtues: "Referred to alongside Al-Baqarah as 'Az-Zahrawayn' (The Two Radiant Surahs) that will shade their reciter like two clouds on the Day of Resurrection (Sahih Muslim #804)."
  },
  4: {
    period: "Madani (4-7 AH)",
    themes: [
      "Protection of Orphans, Widows, and Vulnerable Social Groups",
      "Divine Laws of Inheritance (Mawarith) and Property Rights",
      "Sanctity of Marriage, Reconciliation, and Prohibition of Injustice",
      "Obedience to Allah, the Messenger, and Just Leaders (Ulul-Amr)"
    ],
    asbab: "Revealed following the Battle of Uhud when dozens of Muslim men were martyred, establishing comprehensive legal protection and inheritance for bereaved families.",
    virtues: "Imam Ibn Kathir notes that Ibn Abbas stated this Surah contains eight verses that are better for this Ummah than everything upon which the sun rises."
  },
  5: {
    period: "Late Madani (6-10 AH)",
    themes: [
      "Fulfillment of Treaties, Covenants, and Obligations ('Uqud)",
      "Dietary Prohibitions, Halal Food, and Etiquettes of Slaughtering",
      "Ablution (Wudu), Ghusl, and Tayammum Canonical Injunctions",
      "Finality and Perfection of Divine Law ('Al-Yawma Akmaltu Lakum')"
    ],
    asbab: "Revealed largely after the Treaty of Hudaybiyyah and during the Farewell Pilgrimage, containing verse 5:3 which proclaimed the completion of the Islamic Deen.",
    virtues: "Aisha (RA) stated: 'Surah Al-Ma'idah was among the last Surahs to be revealed, so whatever you find in it of lawful matters, treat as lawful, and whatever of unlawful, treat as unlawful' (Al-Hakim; Sahih)."
  },
  12: {
    period: "Late Meccan (Year of Sorrow)",
    themes: [
      "The Unfolding of Divine Decree through Patience (Husn az-Zann)",
      "Resistance against Temptation and Slander through Taqwa",
      "Forgiveness and Kinship Harmony over Revenge",
      "From the Depths of the Well to the Governance of Egypt"
    ],
    asbab: "Revealed during the Prophet's period of profound grief after the deaths of Khadijah (RA) and Abu Talib, to solace him with the ultimate vindication of Prophet Yusuf (AS).",
    virtues: "Described directly by Allah Almighty as 'Ahsan al-Qasas' (The Most Beautiful of Narratives) in verse 12:3."
  },
  17: {
    period: "Late Meccan (Post-Ta'if)",
    themes: [
      "The Miraculous Night Journey (Isra) from Makkah to Jerusalem",
      "The Moral Charter: 14 Foundational Ethical Injunctions",
      "Filial Piety: Extraordinary Gentleness toward Elderly Parents",
      "The Incomparable Nature and Healing Power of the Holy Quran"
    ],
    asbab: "Revealed to commemorate the bodily miraculous ascension and night journey of the Prophet ﷺ from the Sacred Mosque to Masjid al-Aqsa and through the celestial spheres.",
    virtues: "Aisha (RA) reported that the Prophet ﷺ would not sleep at night until he had recited Surah Bani Isra'il (Al-Isra) and Surah Az-Zumar (Jami` at-Tirmidhi #3405; Sahih)."
  },
  19: {
    period: "Middle Meccan",
    themes: [
      "Divine Mercy (Rahmah) bestowed upon Prophetic Households",
      "The Miraculous Birth of Yahya (AS) to Elderly Zakariyya (AS)",
      "The Immaculate Conception of Isa (AS) by Virgin Maryam (AS)",
      "Rejection of Polytheistic Attributions of Sonship to the Divine"
    ],
    asbab: "Recited by Ja'far ibn Abi Talib before Negus (King Ashamah) of Abyssinia, causing the Christian monarch and his bishops to weep and grant sanctuary to the Muslim refugees.",
    virtues: "The historic testimony that preserved the early Muslim community during the First Migration to Abyssinia."
  },
  24: {
    period: "Madani (5-6 AH)",
    themes: [
      "Protection of Honor, Chaste Reputations, and Sanctity of the Home",
      "The Parable of Divine Light (Ayat an-Nur: 24:35)",
      "Injunctions of Hijab, Modesty, and Lowering the Gaze for Both Genders",
      "Vindication of Mother of the Believers Aisha (RA) from Slander"
    ],
    asbab: "Revealed following the Incident of the Slander (Hadith al-Ifk) to declare Sayyidah Aisha's divine innocence and mandate severe penalties for false accusations against women.",
    virtues: "Umar ibn al-Khattab wrote to the people of Kufa: 'Teach your women Surah An-Nur' due to its comprehensive foundations for family dignity and chastity."
  },
  49: {
    period: "Late Madani (9 AH - Year of Delegations)",
    themes: [
      "Veneration and Adab toward Prophet Muhammad ﷺ",
      "Verifying News before Action to Prevent Harm (Tabayyun)",
      "Universal Human Brotherhood and Equality across Races and Tribes",
      "True Distinction Rests Exclusively upon Piety (Taqwa)"
    ],
    asbab: "Revealed when desert tribes (Banu Tamim) arrived in Madinah calling out bluntly to the Prophet from outside his private apartments, establishing divine etiquettes of communication.",
    virtues: "Known as 'Surat al-Adab' (The Chapter of Manners) because it synthesizes personal, social, and international ethics in just 18 verses."
  },
  59: {
    period: "Madani (4 AH)",
    themes: [
      "The Expulsion of the Traitorous Banu an-Nadir",
      "Fair Distribution of War Trophies and Communal Wealth (Fay')",
      "The Distinction between Muhajirun and Selfless Ansar",
      "The Climax of Divine Names and Attributes (Verses 22-24)"
    ],
    asbab: "Revealed regarding the siege and expulsion of the tribe of Banu an-Nadir after they violated their covenant and plotted assassination against the Prophet ﷺ.",
    virtues: "The Prophet ﷺ stated: 'Whoever recites the concluding verses of Surah Al-Hashr and dies that day or night, Paradise will be obligatory for him' (At-Tirmidhi #2922)."
  },
  62: {
    period: "Madani (7 AH)",
    themes: [
      "The Purpose of the Prophetic Mission: Tilawah, Tazkiyah, and Ta'leem",
      "The Parable of Those Who Carry Scripture without Practicing It",
      "The Absolute Obligation of Friday Congregational Prayer (Salat al-Jumu'ah)",
      "Balancing Worldly Commerce with Sacred Remembrance"
    ],
    asbab: "Revealed when a trade caravan arrived with musical fanfare during Friday prayer, prompting worshippers to rush out and teaching the supreme priority of sacred remembrance.",
    virtues: "The Prophet ﷺ frequently recited Surah Al-Jumu'ah and Surah Al-Munafiqun during the Friday congregational prayer (Sahih Muslim #877)."
  },
  73: {
    period: "Early Meccan",
    themes: [
      "Spiritual Preparation through Deep Night Vigil (Qiyam al-Layl)",
      "Measured, Rhythmic Recitation of the Quran (Tartil)",
      "Bearing Hardships with Dignified Patience (Hajr Jameel)",
      "Ease and Divine Accommodation in Worship According to Ability"
    ],
    asbab: "Revealed at the dawn of the Prophetic mission, commanding the Prophet ﷺ to spend hours standing in night prayer to fortify his soul for the heavy burden of revelation.",
    virtues: "Aisha (RA) stated that the night prayer prescribed in this Surah was mandatory upon the Prophet and early Sahaba for an entire year until Allah revealed the concession in the final verse."
  },
  76: {
    period: "Madani (Early)",
    themes: [
      "The Creation of Man from an Insignificant Drop to Be Tested",
      "The Righteous (Al-Abrar) Feeding the Hungry, Orphans, and Captives",
      "Exquisite Delights and Serene Comforts of the Gardens of Paradise",
      "Constancy in Glorification Morning and Evening"
    ],
    asbab: "Classical commentators relate that verses 8-9 were revealed regarding Ali and Fatimah (RA) who gave away their only food three nights consecutively to a pauper, orphan, and captive.",
    virtues: "The Prophet ﷺ regularly recited Surah As-Sajdah (32) and Surah Al-Insan (76) during the Fajr prayer on Friday mornings (Sahih al-Bukhari #891)."
  },
  87: {
    period: "Early Meccan",
    themes: [
      "Exalting the Divine Name of the Most High (Rabbikal-A'la)",
      "Divine Ease Promised in the Acquisition of Quranic Memory",
      "Reminding Beneficial Souls who Fear Accountability",
      "The Ultimate Priority of the Everlasting Hereafter over Transitory Life"
    ],
    asbab: "One of the earliest revelations instructing the Prophet ﷺ not to rush in anxious memorization of the Quran, for Allah would ensure he never forgets.",
    virtues: "The Prophet ﷺ loved this Surah immensely and recited it continuously in Witr, Eid, and Friday prayers alongside Surah Al-Ghashiyah (Sahih Muslim #878)."
  },
  95: {
    period: "Early Meccan",
    themes: [
      "Divine Oath by Sacred Sanctuaries (Sinai, Makkah, and Holy Lands)",
      "Human Dignity: Created in the Most Exquisite, Perfect Stature",
      "Spiritual Degeneration: Reduced to the Lowest of the Low without Faith",
      "Allah as the Most Just of all Judges (Ahkam al-Hakimeen)"
    ],
    asbab: "Affirming that humanity possesses noble potential, which can only be safeguarded through sincere belief and righteous conduct.",
    virtues: "Al-Bara ibn Azib narrated that he heard the Prophet ﷺ reciting At-Tin during the Isha prayer in a voice more beautiful than any he had ever heard (Sahih al-Bukhari #769)."
  },
  96: {
    period: "Earliest Meccan (610 CE)",
    themes: [
      "The Inauguration of Prophethood: 'Read in the Name of your Lord!'",
      "Divine Origin of Knowledge: Teaching by the Pen (Al-Qalam)",
      "Human Transgression Arising from the Delusion of Self-Sufficiency",
      "The Command of Closeness: 'Prostrate and draw near!'"
    ],
    asbab: "Verses 1-5 constitute the very first divine words revealed to Prophet Muhammad ﷺ through Angel Jibril in the seclusion of Cave Hira on Jabal an-Nur.",
    virtues: "Marks the historical dawn of the final universal guidance and ends with an obligatory sajdat at-tilawah (verse 19)."
  },
  103: {
    period: "Early Meccan",
    themes: [
      "Divine Oath by Fleeting Time ('Asr)",
      "Universal Human Loss (Khusr) as the Default Worldly State",
      "The Four Essential Pillars of Salvation: Faith, Action, Truth, and Patience",
      "Mutual Encouragement to Righteousness and Steadfast Endurance"
    ],
    asbab: "Encapsulates the entirety of human destiny and salvation in just three succinct, profound verses.",
    virtues: "Imam ash-Shafi'i famously remarked: 'If people were to ponder deeply upon this Surah alone, it would suffice them for their spiritual and worldly salvation.'"
  },
  109: {
    period: "Early Meccan",
    themes: [
      "Absolute Theological Demarcation: No Compromise in Monotheism",
      "Rejection of Syncretism or Blending True Faith with Idolatry",
      "The Integrity of Faith: 'To you your religion, and to me my religion'"
    ],
    asbab: "Revealed when Quraysh chieftains offered the Prophet ﷺ a compromise: that Muslims worship their idols for a year, and the pagans worship Allah for a year.",
    virtues: "The Prophet ﷺ described it as 'Mu'adhilah min ash-Shirk' (Freedom from Polytheism) and recited it in the Sunnah before Fajr and after Maghrib (Sahih Muslim #726)."
  },
  110: {
    period: "Late Madani (Mina / 10 AH)",
    themes: [
      "The Victory of Allah and the Bloodless Liberation of Makkah",
      "Crowds Entering Islam in Vast Multitudes",
      "Divine Instruction: Responding to Triumphs with Tasbih, Hamd, and Istighfar",
      "Gentle Prophetic Intimation of Approaching Departure from Earth"
    ],
    asbab: "Revealed during the Days of Tashreeq at the Farewell Pilgrimage, signaling that the Prophet's divine mission was triumphantly completed.",
    virtues: "Known by Ibn Abbas (RA) and Umar (RA) as the announcement that the Prophet's blessed worldly lifespan was drawing to its sacred close (Sahih al-Bukhari #4970)."
  }
};

let quranJs = fs.readFileSync('public/js/quran.js', 'utf8');

// Check if SURAH_THEMATIC_DATA exists
const match = quranJs.match(/const SURAH_THEMATIC_DATA = \{[\s\S]*?\n\};/);
if (!match) throw new Error('SURAH_THEMATIC_DATA block not found in quran.js');

// Parse existing and merge
const vm = require('vm');
const sandbox = {};
vm.createContext(sandbox);
vm.runInContext(match[0].replace('const SURAH_THEMATIC_DATA =', 'globalThis.THEMATIC ='), sandbox);
const merged = Object.assign({}, sandbox.THEMATIC, ADD_THEMATIC);

console.log('Total merged thematic profiles:', Object.keys(merged).length);

// Format replacement block
const newBlock = `const SURAH_THEMATIC_DATA = ${JSON.stringify(merged, null, 2)};`;
quranJs = quranJs.replace(match[0], newBlock);

fs.writeFileSync('public/js/quran.js', quranJs, 'utf8');
console.log('Successfully updated public/js/quran.js with 32 Surah thematic profiles!');
