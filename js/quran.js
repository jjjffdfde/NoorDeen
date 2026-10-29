/**
 * ISLAMIC KNOWLEDGE PORTAL — PROFESSIONAL QURAN READER & AUDIO CONTROLLER
 * High-fidelity Verse Recitation • Multi-Reciter Selection • Offline Cache API
 * Persistent Progress • Font Customization • Translation Controls
 */

const SURAH_THEMATIC_DATA = {
  "1": {
    "period": "Early Meccan (Pre-Hijrah)",
    "themes": [
      "Praise & Glorification of Allah",
      "Divine Sovereignty & Day of Recompense",
      "Direct Supplication for Sincere Guidance",
      "The Straight Path (Sirat al-Mustaqeem)"
    ],
    "asbab": "Revealed at the onset of prophetic revelation in Makkah, ordained as the essential foundation of every unit (Rak'ah) of prayer.",
    "virtues": "Proclaimed by Prophet Muhammad ﷺ as 'The Greatest Surah in the Quran' and the 'Seven Oft-Repeated Verses' (Sahih al-Bukhari #4474)."
  },
  "2": {
    "period": "Early Medinan (Post-Hijrah)",
    "themes": [
      "Guidance for the God-Conscious (Muttaqeen)",
      "Covenant with Bani Isra'il & Adam's Creation",
      "Legislation of Salah, Zakat, Fasting & Hajj",
      "Prohibition of Riba (Usury) & Ayatul Kursi"
    ],
    "asbab": "Revealed gradually over several years in Madinah to establish the civil, economic, and moral framework of the newly established Islamic society.",
    "virtues": "The Prophet ﷺ said: 'Do not turn your houses into graves; Satan flees from the house in which Surah Al-Baqarah is recited' (Sahih Muslim #780)."
  },
  "3": {
    "period": "Madani (3-5 AH)",
    "themes": [
      "Firmness in Faith against Theological Deviation",
      "Dialogue with Christians of Najran and Prophethood of Isa (AS)",
      "Lessons of the Battle of Uhud (Obedience and Steadfastness)",
      "The Reality of Martyrdom and Divine Testing"
    ],
    "asbab": "Sections revealed concerning the Christian delegation from Najran, followed by extensive divine commentary on the trials and tactical lessons of the Battle of Uhud.",
    "virtues": "Referred to alongside Al-Baqarah as 'Az-Zahrawayn' (The Two Radiant Surahs) that will shade their reciter like two clouds on the Day of Resurrection (Sahih Muslim #804)."
  },
  "4": {
    "period": "Madani (4-7 AH)",
    "themes": [
      "Protection of Orphans, Widows, and Vulnerable Social Groups",
      "Divine Laws of Inheritance (Mawarith) and Property Rights",
      "Sanctity of Marriage, Reconciliation, and Prohibition of Injustice",
      "Obedience to Allah, the Messenger, and Just Leaders (Ulul-Amr)"
    ],
    "asbab": "Revealed following the Battle of Uhud when dozens of Muslim men were martyred, establishing comprehensive legal protection and inheritance for bereaved families.",
    "virtues": "Imam Ibn Kathir notes that Ibn Abbas stated this Surah contains eight verses that are better for this Ummah than everything upon which the sun rises."
  },
  "5": {
    "period": "Late Madani (6-10 AH)",
    "themes": [
      "Fulfillment of Treaties, Covenants, and Obligations ('Uqud)",
      "Dietary Prohibitions, Halal Food, and Etiquettes of Slaughtering",
      "Ablution (Wudu), Ghusl, and Tayammum Canonical Injunctions",
      "Finality and Perfection of Divine Law ('Al-Yawma Akmaltu Lakum')"
    ],
    "asbab": "Revealed largely after the Treaty of Hudaybiyyah and during the Farewell Pilgrimage, containing verse 5:3 which proclaimed the completion of the Islamic Deen.",
    "virtues": "Aisha (RA) stated: 'Surah Al-Ma'idah was among the last Surahs to be revealed, so whatever you find in it of lawful matters, treat as lawful, and whatever of unlawful, treat as unlawful' (Al-Hakim; Sahih)."
  },
  "12": {
    "period": "Late Meccan (Year of Sorrow)",
    "themes": [
      "The Unfolding of Divine Decree through Patience (Husn az-Zann)",
      "Resistance against Temptation and Slander through Taqwa",
      "Forgiveness and Kinship Harmony over Revenge",
      "From the Depths of the Well to the Governance of Egypt"
    ],
    "asbab": "Revealed during the Prophet's period of profound grief after the deaths of Khadijah (RA) and Abu Talib, to solace him with the ultimate vindication of Prophet Yusuf (AS).",
    "virtues": "Described directly by Allah Almighty as 'Ahsan al-Qasas' (The Most Beautiful of Narratives) in verse 12:3."
  },
  "17": {
    "period": "Late Meccan (Post-Ta'if)",
    "themes": [
      "The Miraculous Night Journey (Isra) from Makkah to Jerusalem",
      "The Moral Charter: 14 Foundational Ethical Injunctions",
      "Filial Piety: Extraordinary Gentleness toward Elderly Parents",
      "The Incomparable Nature and Healing Power of the Holy Quran"
    ],
    "asbab": "Revealed to commemorate the bodily miraculous ascension and night journey of the Prophet ﷺ from the Sacred Mosque to Masjid al-Aqsa and through the celestial spheres.",
    "virtues": "Aisha (RA) reported that the Prophet ﷺ would not sleep at night until he had recited Surah Bani Isra'il (Al-Isra) and Surah Az-Zumar (Jami` at-Tirmidhi #3405; Sahih)."
  },
  "18": {
    "period": "Middle Meccan (Pre-Hijrah)",
    "themes": [
      "Trial of Faith (Companions of the Cave)",
      "Trial of Wealth (The Two Gardens parable)",
      "Trial of Knowledge (Musa & Al-Khidr)",
      "Trial of Power (Dhul-Qarnayn & Gog and Magog)",
      "Protection from the Fitnah of the False Messiah (Dajjal)"
    ],
    "asbab": "Revealed when the Quraysh posed three theological riddles supplied by the Jewish scholars of Yathrib to challenge the Prophet's authenticity: about the young men who fled, the great traveler of the horizons, and the nature of the Spirit (Ruh).",
    "virtues": "The Prophet ﷺ said: 'Whoever memorizes the first ten verses of Surah Al-Kahf will be protected from the Dajjal' (Sahih Muslim #809), and 'Whoever recites Surah Al-Kahf on Friday, light will illuminate between him and the two Fridays' (Al-Bayhaqi; Sahih al-Jami' #6470)."
  },
  "19": {
    "period": "Middle Meccan",
    "themes": [
      "Divine Mercy (Rahmah) bestowed upon Prophetic Households",
      "The Miraculous Birth of Yahya (AS) to Elderly Zakariyya (AS)",
      "The Immaculate Conception of Isa (AS) by Virgin Maryam (AS)",
      "Rejection of Polytheistic Attributions of Sonship to the Divine"
    ],
    "asbab": "Recited by Ja'far ibn Abi Talib before Negus (King Ashamah) of Abyssinia, causing the Christian monarch and his bishops to weep and grant sanctuary to the Muslim refugees.",
    "virtues": "The historic testimony that preserved the early Muslim community during the First Migration to Abyssinia."
  },
  "24": {
    "period": "Madani (5-6 AH)",
    "themes": [
      "Protection of Honor, Chaste Reputations, and Sanctity of the Home",
      "The Parable of Divine Light (Ayat an-Nur: 24:35)",
      "Injunctions of Hijab, Modesty, and Lowering the Gaze for Both Genders",
      "Vindication of Mother of the Believers Aisha (RA) from Slander"
    ],
    "asbab": "Revealed following the Incident of the Slander (Hadith al-Ifk) to declare Sayyidah Aisha's divine innocence and mandate severe penalties for false accusations against women.",
    "virtues": "Umar ibn al-Khattab wrote to the people of Kufa: 'Teach your women Surah An-Nur' due to its comprehensive foundations for family dignity and chastity."
  },
  "36": {
    "period": "Middle Meccan",
    "themes": [
      "The Authenticity of Prophethood & Revelation",
      "The Reality of Physical Resurrection & Day of Judgment",
      "Signs of Divine Omnipotence in the Cosmos",
      "Fate of Previous Defiant Civilizations"
    ],
    "asbab": "Revealed during the peak of Quraysh denial in Makkah to confront the polytheists regarding the certainty of resurrection and accountability.",
    "virtues": "Revered throughout Islamic history as the 'Heart of the Quran' for its poetic eloquence, vivid eschatological descriptions, and powerful theological arguments."
  },
  "49": {
    "period": "Late Madani (9 AH - Year of Delegations)",
    "themes": [
      "Veneration and Adab toward Prophet Muhammad ﷺ",
      "Verifying News before Action to Prevent Harm (Tabayyun)",
      "Universal Human Brotherhood and Equality across Races and Tribes",
      "True Distinction Rests Exclusively upon Piety (Taqwa)"
    ],
    "asbab": "Revealed when desert tribes (Banu Tamim) arrived in Madinah calling out bluntly to the Prophet from outside his private apartments, establishing divine etiquettes of communication.",
    "virtues": "Known as 'Surat al-Adab' (The Chapter of Manners) because it synthesizes personal, social, and international ethics in just 18 verses."
  },
  "55": {
    "period": "Early Medinan / Late Meccan",
    "themes": [
      "The Expansive Beneficence of the Creator",
      "Cosmic Order, Balance, and Earthly Ecology (Al-Mizan)",
      "Dual Audience: Direct Invocations to Mankind and the Jinn",
      "The Iconic Refrain: 'Which of the favors of your Lord will you both deny?'",
      "Vivid Contrasts Between the Scorching Fire and the Twin Verdant Gardens of Paradise"
    ],
    "asbab": "Revealed when polytheists challenged the revelation in Surah Al-Furqan: 'And what is the Most Merciful (Ar-Rahman)?' Allah responded by unveiling His cosmic majesty, linguistic gifts, astronomical choreography, and eternal gardens.",
    "virtues": "Celebrated in classical traditions as 'Arus al-Quran' (The Splendid Bride of the Quran) for its phonetic symmetry, rhythmic cadence, and overwhelming catalogue of divine generosity."
  },
  "56": {
    "period": "Middle Meccan",
    "themes": [
      "The Inevitable Cataclysm of the Resurrection (Al-Waqi'ah)",
      "The Threefold Stratification of Humanity (The Foremost / As-Sabiqoon, Companions of the Right, Companions of the Left)",
      "Empirical Signs of Divine Agency in Human Conception, Agriculture, Potable Rainwater, and Fire",
      "The Sanctity of the Preserved Tablet and Quranic Inviolability"
    ],
    "asbab": "Revealed to confront stubborn pagan denial of physical bodily resurrection by appealing directly to natural empirical miracles: how life emerges from seed, rainwater falls from clouds, and embers kindle from green trees.",
    "virtues": "Abdullah ibn Mas'ud (RA) reported that the Messenger of Allah ﷺ said: 'Whoever recites Surah Al-Waqi'ah every night will never be afflicted by destitution or spiritual poverty' (Ibn as-Sunni #657; Al-Bayhaqi in Shu'ab al-Iman)."
  },
  "59": {
    "period": "Madani (4 AH)",
    "themes": [
      "The Expulsion of the Traitorous Banu an-Nadir",
      "Fair Distribution of War Trophies and Communal Wealth (Fay')",
      "The Distinction between Muhajirun and Selfless Ansar",
      "The Climax of Divine Names and Attributes (Verses 22-24)"
    ],
    "asbab": "Revealed regarding the siege and expulsion of the tribe of Banu an-Nadir after they violated their covenant and plotted assassination against the Prophet ﷺ.",
    "virtues": "The Prophet ﷺ stated: 'Whoever recites the concluding verses of Surah Al-Hashr and dies that day or night, Paradise will be obligatory for him' (At-Tirmidhi #2922)."
  },
  "62": {
    "period": "Madani (7 AH)",
    "themes": [
      "The Purpose of the Prophetic Mission: Tilawah, Tazkiyah, and Ta'leem",
      "The Parable of Those Who Carry Scripture without Practicing It",
      "The Absolute Obligation of Friday Congregational Prayer (Salat al-Jumu'ah)",
      "Balancing Worldly Commerce with Sacred Remembrance"
    ],
    "asbab": "Revealed when a trade caravan arrived with musical fanfare during Friday prayer, prompting worshippers to rush out and teaching the supreme priority of sacred remembrance.",
    "virtues": "The Prophet ﷺ frequently recited Surah Al-Jumu'ah and Surah Al-Munafiqun during the Friday congregational prayer (Sahih Muslim #877)."
  },
  "67": {
    "period": "Meccan",
    "themes": [
      "Absolute Dominion & Sovereignty of Allah",
      "Cosmic Order and the Seven Heavens",
      "The Purpose of Life and Death as a Moral Test",
      "Warnings of the Fire and the Regret of Disbelievers"
    ],
    "asbab": "Revealed to orient the human consciousness toward the grandeur of the Creator and the inevitability of the Hereafter.",
    "virtues": "Prophet Muhammad ﷺ stated: 'A Surah of thirty verses interceded for a man until he was forgiven: Tabarakalladhi biyadihil-Mulk' (Sunan Abi Dawud #1400)."
  },
  "73": {
    "period": "Early Meccan",
    "themes": [
      "Spiritual Preparation through Deep Night Vigil (Qiyam al-Layl)",
      "Measured, Rhythmic Recitation of the Quran (Tartil)",
      "Bearing Hardships with Dignified Patience (Hajr Jameel)",
      "Ease and Divine Accommodation in Worship According to Ability"
    ],
    "asbab": "Revealed at the dawn of the Prophetic mission, commanding the Prophet ﷺ to spend hours standing in night prayer to fortify his soul for the heavy burden of revelation.",
    "virtues": "Aisha (RA) stated that the night prayer prescribed in this Surah was mandatory upon the Prophet and early Sahaba for an entire year until Allah revealed the concession in the final verse."
  },
  "76": {
    "period": "Madani (Early)",
    "themes": [
      "The Creation of Man from an Insignificant Drop to Be Tested",
      "The Righteous (Al-Abrar) Feeding the Hungry, Orphans, and Captives",
      "Exquisite Delights and Serene Comforts of the Gardens of Paradise",
      "Constancy in Glorification Morning and Evening"
    ],
    "asbab": "Classical commentators relate that verses 8-9 were revealed regarding Ali and Fatimah (RA) who gave away their only food three nights consecutively to a pauper, orphan, and captive.",
    "virtues": "The Prophet ﷺ regularly recited Surah As-Sajdah (32) and Surah Al-Insan (76) during the Fajr prayer on Friday mornings (Sahih al-Bukhari #891)."
  },
  "87": {
    "period": "Early Meccan",
    "themes": [
      "Exalting the Divine Name of the Most High (Rabbikal-A'la)",
      "Divine Ease Promised in the Acquisition of Quranic Memory",
      "Reminding Beneficial Souls who Fear Accountability",
      "The Ultimate Priority of the Everlasting Hereafter over Transitory Life"
    ],
    "asbab": "One of the earliest revelations instructing the Prophet ﷺ not to rush in anxious memorization of the Quran, for Allah would ensure he never forgets.",
    "virtues": "The Prophet ﷺ loved this Surah immensely and recited it continuously in Witr, Eid, and Friday prayers alongside Surah Al-Ghashiyah (Sahih Muslim #878)."
  },
  "93": {
    "period": "Early Meccan",
    "themes": [
      "Divine Consolation, Affirmation, and Continuous Shelter",
      "The Cosmic Contrast Between the Brightness of Dawn and the Tranquility of Night",
      "Past Providential Mercies as Guarantees of Future Goodness (Orphanhood, Guidance, Provision)",
      "Moral Injunctions: Compassion to the Orphan, Dignity to the Petitioner, and Joyful Proclamation of Divine Blessings"
    ],
    "asbab": "Revealed after a brief cessation of revelation (Fatrat al-Wahy) during which the Quraysh taunted that Allah had forsaken Muhammad; Allah swore by the glorious morning that He had neither abandoned nor despised His chosen Prophet.",
    "virtues": "Universally acknowledged as one of the most comforting and emotionally restorative passages in scripture, bringing solace to those enduring loneliness, grief, or spiritual despondency."
  },
  "94": {
    "period": "Early Meccan",
    "themes": [
      "The Spiritual Expansion and Purifying of the Prophet's Breast (Sharh as-Sadr)",
      "Lifting the Crushing Burden of Grief and Responsibility",
      "The Eternal Elevation of the Prophet's Honor and Renown (Rafa'na Laka Dhikrak)",
      "The Fundamental Divine Axiom: 'Verily, with hardship comes ease'",
      "Dedication to Relentless Worship upon Completing Worldly Obligations"
    ],
    "asbab": "Revealed directly following Surah Ad-Duha to reinforce prophetic resolve during the bitter social and economic boycotts enforced by the Quraysh aristocracy in Makkah.",
    "virtues": "Celebrated for the linguistic marvel in verses 5-6: the singular definite hardship ('al-'Usr') is enveloped by twofold indefinite ease ('Yusr'), guaranteeing that no solitary worldly crisis can ever overcome divine deliverance."
  },
  "95": {
    "period": "Early Meccan",
    "themes": [
      "Divine Oath by Sacred Sanctuaries (Sinai, Makkah, and Holy Lands)",
      "Human Dignity: Created in the Most Exquisite, Perfect Stature",
      "Spiritual Degeneration: Reduced to the Lowest of the Low without Faith",
      "Allah as the Most Just of all Judges (Ahkam al-Hakimeen)"
    ],
    "asbab": "Affirming that humanity possesses noble potential, which can only be safeguarded through sincere belief and righteous conduct.",
    "virtues": "Al-Bara ibn Azib narrated that he heard the Prophet ﷺ reciting At-Tin during the Isha prayer in a voice more beautiful than any he had ever heard (Sahih al-Bukhari #769)."
  },
  "96": {
    "period": "Earliest Meccan (610 CE)",
    "themes": [
      "The Inauguration of Prophethood: 'Read in the Name of your Lord!'",
      "Divine Origin of Knowledge: Teaching by the Pen (Al-Qalam)",
      "Human Transgression Arising from the Delusion of Self-Sufficiency",
      "The Command of Closeness: 'Prostrate and draw near!'"
    ],
    "asbab": "Verses 1-5 constitute the very first divine words revealed to Prophet Muhammad ﷺ through Angel Jibril in the seclusion of Cave Hira on Jabal an-Nur.",
    "virtues": "Marks the historical dawn of the final universal guidance and ends with an obligatory sajdat at-tilawah (verse 19)."
  },
  "97": {
    "period": "Meccan",
    "themes": [
      "Descent of the Holy Quran",
      "The Magnificence of the Night of Decree (Laylatul Qadr)",
      "Descent of Angel Jibril and the Angels with Divine Decrees",
      "Peace Until the Break of Dawn"
    ],
    "asbab": "Revealed to honor the night wherein the Quran was first sent down from the Preserved Tablet (Al-Lawh al-Mahfuz) to the lowest heaven.",
    "virtues": "Worship during this single night is declared better than a thousand months of continuous devotion (over 83 years and 4 months)."
  },
  "103": {
    "period": "Early Meccan",
    "themes": [
      "Divine Oath by Fleeting Time ('Asr)",
      "Universal Human Loss (Khusr) as the Default Worldly State",
      "The Four Essential Pillars of Salvation: Faith, Action, Truth, and Patience",
      "Mutual Encouragement to Righteousness and Steadfast Endurance"
    ],
    "asbab": "Encapsulates the entirety of human destiny and salvation in just three succinct, profound verses.",
    "virtues": "Imam ash-Shafi'i famously remarked: 'If people were to ponder deeply upon this Surah alone, it would suffice them for their spiritual and worldly salvation.'"
  },
  "108": {
    "period": "Meccan",
    "themes": [
      "Divine Abundance Granted to the Prophet ﷺ",
      "Gratitude Expressed via Prayer and Sacrifice",
      "The Cutting Off and Humiliation of the Prophet's Enemies"
    ],
    "asbab": "Revealed to comfort Prophet Muhammad ﷺ when his son al-Qasim died in infancy and the polytheist al-As ibn Wa'il taunted that he was 'Abtar' (cut off from posterity).",
    "virtues": "The Prophet ﷺ revealed that Al-Kawthar is a celestial river and basin in Paradise whose banks are of gold and drinking vessels as numerous as the stars."
  },
  "109": {
    "period": "Early Meccan",
    "themes": [
      "Absolute Theological Demarcation: No Compromise in Monotheism",
      "Rejection of Syncretism or Blending True Faith with Idolatry",
      "The Integrity of Faith: 'To you your religion, and to me my religion'"
    ],
    "asbab": "Revealed when Quraysh chieftains offered the Prophet ﷺ a compromise: that Muslims worship their idols for a year, and the pagans worship Allah for a year.",
    "virtues": "The Prophet ﷺ described it as 'Mu'adhilah min ash-Shirk' (Freedom from Polytheism) and recited it in the Sunnah before Fajr and after Maghrib (Sahih Muslim #726)."
  },
  "110": {
    "period": "Late Madani (Mina / 10 AH)",
    "themes": [
      "The Victory of Allah and the Bloodless Liberation of Makkah",
      "Crowds Entering Islam in Vast Multitudes",
      "Divine Instruction: Responding to Triumphs with Tasbih, Hamd, and Istighfar",
      "Gentle Prophetic Intimation of Approaching Departure from Earth"
    ],
    "asbab": "Revealed during the Days of Tashreeq at the Farewell Pilgrimage, signaling that the Prophet's divine mission was triumphantly completed.",
    "virtues": "Known by Ibn Abbas (RA) and Umar (RA) as the announcement that the Prophet's blessed worldly lifespan was drawing to its sacred close (Sahih al-Bukhari #4970)."
  },
  "112": {
    "period": "Early Meccan",
    "themes": [
      "Absolute Monotheism (Tawheed al-Khalis)",
      "The Self-Sufficiency of Allah (As-Samad)",
      "Negation of Offspring, Ancestry, and Partners",
      "Total Incomparability of the Divine Essence"
    ],
    "asbab": "Revealed when the polytheists of Makkah asked the Prophet ﷺ: 'Describe the lineage and ancestry of your Lord to us.'",
    "virtues": "The Messenger of Allah ﷺ affirmed that reciting Surah Al-Ikhlas is equivalent to reciting one-third of the entire Quran (Sahih al-Bukhari #5013)."
  },
  "113": {
    "period": "Meccan / Medinan",
    "themes": [
      "Seeking Refuge with the Lord of the Daybreak",
      "Protection Against the Evils of Darkness (Ghāsiq)",
      "Shield Against Sorcery and Occult Blowing on Knots",
      "Shield Against Malicious Envy and Jealousy (Ḥasad)"
    ],
    "asbab": "Revealed alongside Surah An-Nas as complete spiritual armor against psychic harm, black magic, evil eye, and environmental perils.",
    "virtues": "The Prophet ﷺ consistently sought refuge with these two Surahs upon retiring to sleep and during sickness (Sahih al-Bukhari #5016)."
  },
  "114": {
    "period": "Meccan / Medinan",
    "themes": [
      "Seeking Sanctuary with the King and God of Mankind",
      "Protection from the Retreating Whisperer (Al-Waswas Al-Khannas)",
      "Spiritual Warfare Against Diabolical Temptations from Jinn and Men"
    ],
    "asbab": "Revealed to safeguard the inner sanctuary of the human heart from doubts, whisperings, and psychic malice.",
    "virtues": "One of the twin Mu'awwidhatayn which the Prophet ﷺ described: 'People have never sought refuge with anything like them' (Sunan an-Nasa'i #5433)."
  }
};

// 40-Language Quran Translation Registry
const QURAN_TRANSLATION_REGISTRY = [
  { code: 'en', name: 'English', nativeName: 'English', dir: 'ltr', translationTitle: 'Saheeh International', translator: 'Saheeh International', editionId: 'en.sahih', verificationStatus: 'verified' },
  { code: 'ur', name: 'Urdu', nativeName: 'اردو', dir: 'rtl', translationTitle: 'Tarjuma Quran Majeed', translator: 'Maulana Fateh Muhammad Jalandhry', editionId: 'ur.jalandhry', verificationStatus: 'verified' },
  { code: 'fr', name: 'French', nativeName: 'Français', dir: 'ltr', translationTitle: 'Le Saint Coran', translator: 'Dr. Muhammad Hamidullah', editionId: 'fr.hamidullah', verificationStatus: 'verified' },
  { code: 'id', name: 'Indonesian', nativeName: 'Bahasa Indonesia', dir: 'ltr', translationTitle: 'Al-Qur\'an dan Terjemahannya', translator: 'Kementerian Agama RI', editionId: 'id.indonesian', verificationStatus: 'verified' },
  { code: 'tr', name: 'Turkish', nativeName: 'Türkçe', dir: 'ltr', translationTitle: 'Kur\'an-ı Kerim Meali', translator: 'Diyanet İşleri Başkanlığı', editionId: 'tr.diyanet', verificationStatus: 'verified' },
  { code: 'bn', name: 'Bengali', nativeName: 'বাংলা', dir: 'ltr', translationTitle: 'পবিত্র কুরআনুল কারীম', translator: 'Maulana Muhiuddin Khan', editionId: 'bn.bengali', verificationStatus: 'verified' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', dir: 'ltr', translationTitle: 'क़ुरआन मजीद हिन्दी अनुवाद', translator: 'Farooq Khan & Muhammad Ahmad', editionId: 'hi.hindi', verificationStatus: 'verified' },
  { code: 'ms', name: 'Malay', nativeName: 'Bahasa Melayu', dir: 'ltr', translationTitle: 'Tafsir Ar-Rahman', translator: 'Sheikh Abdullah Basmeih', editionId: 'ms.basmeih', verificationStatus: 'verified' },
  { code: 'fa', name: 'Persian', nativeName: 'فارسی', dir: 'rtl', translationTitle: 'ترجمه قرآن کریم', translator: 'Dr. Hossein Elahi Ghomshei', editionId: 'fa.ghomshei', verificationStatus: 'verified' },
  { code: 'es', name: 'Spanish', nativeName: 'Español', dir: 'ltr', translationTitle: 'El Sagrado Corán', translator: 'Muhammad Isa García', editionId: 'es.garcia', verificationStatus: 'verified' },
  { code: 'de', name: 'German', nativeName: 'Deutsch', dir: 'ltr', translationTitle: 'Der Heilige Qur\'an', translator: 'Abu Rida Muhammad ibn Ahmad', editionId: 'de.aburida', verificationStatus: 'verified' },
  { code: 'ru', name: 'Russian', nativeName: 'Русский', dir: 'ltr', translationTitle: 'Смысловой перевод Корана', translator: 'Elmir Kuliev', editionId: 'ru.kuliev', verificationStatus: 'verified' },
  { code: 'zh-CN', name: 'Chinese Simplified', nativeName: '简体中文', dir: 'ltr', translationTitle: '古兰经汉译', translator: 'Ma Jian (马坚)', editionId: 'zh.jian', verificationStatus: 'verified' },
  { code: 'zh-TW', name: 'Chinese Traditional', nativeName: '繁體中文', dir: 'ltr', translationTitle: '古蘭經漢譯', translator: 'Ma Jian (馬堅)', editionId: 'zh.jian', verificationStatus: 'verified' },
  { code: 'pt', name: 'Portuguese', nativeName: 'Português', dir: 'ltr', translationTitle: 'O Nobre Alcorão', translator: 'Samir El-Hayek', editionId: 'pt.elhayek', verificationStatus: 'verified' },
  { code: 'sw', name: 'Swahili', nativeName: 'Kiswahili', dir: 'ltr', translationTitle: 'Qur\'ani Tukufu', translator: 'Sheikh Ali Muhsin Al-Barwani', editionId: 'sw.barwani', verificationStatus: 'verified' },
  { code: 'ha', name: 'Hausa', nativeName: 'Hausa', dir: 'ltr', translationTitle: 'Alkur\'ani Mai Girma', translator: 'Abubakar Mahmoud Gumi', editionId: 'ha.gumi', verificationStatus: 'verified' },
  { code: 'so', name: 'Somali', nativeName: 'Soomaali', dir: 'ltr', translationTitle: 'Quraanka Kariimka', translator: 'Mahmud Muhammad Abduh', editionId: 'so.abduh', verificationStatus: 'verified' },
  { code: 'ps', name: 'Pashto', nativeName: 'پښتو', dir: 'rtl', translationTitle: 'قرآن کریم پښتو ترجمه', translator: 'Maulana Abdulwali Khan', editionId: 'ps.abdulwali', verificationStatus: 'verified' },
  { code: 'ku', name: 'Kurdish', nativeName: 'کوردی', dir: 'rtl', translationTitle: 'تەفسیری ئاسان', translator: 'Burhan Muhammad-Amin', editionId: 'ku.asan', verificationStatus: 'verified' },
  { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்', dir: 'ltr', translationTitle: 'திருக்குர்ஆன் தெளிவுரை', translator: 'Jan Trust Foundation', editionId: 'ta.tamil', verificationStatus: 'verified' },
  { code: 'ml', name: 'Malayalam', nativeName: 'മലയാളം', dir: 'ltr', translationTitle: 'വിശുദ്ധ ഖുർആൻ സമ്പൂർണ്ണ വിവർത്തനം', translator: 'Cheriyamundam Abdul Hameed', editionId: 'ml.abdulhameed', verificationStatus: 'verified' },
  { code: 'th', name: 'Thai', nativeName: 'ไทย', dir: 'ltr', translationTitle: 'ความหมายอัลกุรอานภาษาไทย', translator: 'King Fahd Complex Committee', editionId: 'th.thai', verificationStatus: 'verified' },
  { code: 'nl', name: 'Dutch', nativeName: 'Nederlands', dir: 'ltr', translationTitle: 'De Heilige Koran', translator: 'Dr. Sofian S. Siregar', editionId: 'nl.siregar', verificationStatus: 'verified' },
  { code: 'it', name: 'Italian', nativeName: 'Italiano', dir: 'ltr', translationTitle: 'Il Corano', translator: 'Hamza Roberto Piccardo', editionId: 'it.piccardo', verificationStatus: 'verified' },
  { code: 'pl', name: 'Polish', nativeName: 'Polski', dir: 'ltr', translationTitle: 'Koran', translator: 'Prof. Józef Bielawski', editionId: 'pl.bielawskiego', verificationStatus: 'verified' },
  { code: 'bs', name: 'Bosnian', nativeName: 'Bosanski', dir: 'ltr', translationTitle: 'Prevod Kur\'ana', translator: 'Besim Korkut', editionId: 'bs.korkut', verificationStatus: 'verified' },
  { code: 'sq', name: 'Albanian', nativeName: 'Shqip', dir: 'ltr', translationTitle: 'Kurani Fisnik', translator: 'Hasan I. Nahi', editionId: 'sq.nahi', verificationStatus: 'verified' },
  { code: 'uz', name: 'Uzbek', nativeName: 'Oʻzbekcha', dir: 'ltr', translationTitle: 'Qur\'oni Karim Ma\'nolari', translator: 'Shayx Muhammad Sodiq', editionId: 'uz.sodik', verificationStatus: 'verified' },
  { code: 'az', name: 'Azerbaijani', nativeName: 'Azərbaycanca', dir: 'ltr', translationTitle: 'Qurani-Kərim Tərcüməsi', translator: 'V. Məmmədəliyev & Z. Bünyadov', editionId: 'az.mammadaliyev', verificationStatus: 'verified' },
  { code: 'te', name: 'Telugu', nativeName: 'తెలుగు', dir: 'ltr', translationTitle: 'దివ్య ఖుర్ఆన్', translator: 'Scholarly Translation Board', editionId: 'te.board', verificationStatus: 'in_progress' },
  { code: 'kn', name: 'Kannada', nativeName: 'ಕನ್ನಡ', dir: 'ltr', translationTitle: 'ಪವಿತ್ರ ಕುರ್‌ಆನ್', translator: 'Quran Foundation Karnataka', editionId: 'kn.board', verificationStatus: 'in_progress' },
  { code: 'mr', name: 'Marathi', nativeName: 'मराठी', dir: 'ltr', translationTitle: 'पवित्र कुरआन', translator: 'Muhammad Shafi Board', editionId: 'mr.board', verificationStatus: 'in_progress' },
  { code: 'gu', name: 'Gujarati', nativeName: 'ગુજરાતી', dir: 'ltr', translationTitle: 'પવિત્ર કુરઆન', translator: 'Rabita Committee', editionId: 'gu.board', verificationStatus: 'in_progress' },
  { code: 'pa', name: 'Punjabi', nativeName: 'ਪੰਜਾਬੀ / پنجابی', dir: 'ltr', translationTitle: 'ਕੁਰਆਨ ਮਜੀਦ', translator: 'Prof. Sarwar Board', editionId: 'pa.board', verificationStatus: 'in_progress' },
  { code: 'ja', name: 'Japanese', nativeName: '日本語', dir: 'ltr', translationTitle: '聖クルアーン対訳', translator: 'Ryoichi Mita Board', editionId: 'ja.board', verificationStatus: 'in_progress' },
  { code: 'ko', name: 'Korean', nativeName: '한국어', dir: 'ltr', translationTitle: '성 꾸란 의미 번역', translator: 'KMF Board', editionId: 'ko.board', verificationStatus: 'in_progress' },
  { code: 'vi', name: 'Vietnamese', nativeName: 'Tiếng Việt', dir: 'ltr', translationTitle: 'Kinh Qu\'ran Dịch Nghĩa', translator: 'Hassan Abdulkarim Board', editionId: 'vi.board', verificationStatus: 'in_progress' },
  { code: 'kk', name: 'Kazakh', nativeName: 'Қазақша', dir: 'ltr', translationTitle: 'Құран Кәрім Мағынасы', translator: 'Khalifah Altay Board', editionId: 'kk.board', verificationStatus: 'in_progress' },
  { code: 'ar', name: 'Arabic (Tafsir Muyassar)', nativeName: 'تفسير الجلالين / الميسر', dir: 'rtl', translationTitle: 'التفسير الميسر', translator: 'مجمع الملك فهد لطباعة المصحف الشريف', editionId: 'ar.muyassar', verificationStatus: 'verified' }
];

class QuranReader {
  constructor() {
    this.currentSurah = 1;
    this.currentAyah = 1;
    this.audioElement = new Audio();
    this.isPlaying = false;
    this.reciter = localStorage.getItem('islamic_portal_reciter') || 'Alafasy_128kbps';
    this.fontSize = parseInt(localStorage.getItem('islamic_portal_font_size') || '30', 10);
    this.translationMode = localStorage.getItem('islamic_portal_translation_mode') || 'both';
    this.translationLang = localStorage.getItem('islamic_portal_quran_trans_lang') || 'en';
    this.translationInfo = this.getTranslationInfo(this.translationLang);
    this.showUrdu = this.translationMode === 'both' || this.translationMode === 'urdu';
    this.showEnglish = this.translationMode === 'both' || this.translationMode === 'english';
    this.showTranslit = localStorage.getItem('islamic_portal_show_translit') === 'true';
    this.surahData = null;
    this.isDownloadingAudio = false;

    // Persistent player state (survives navigation and reloads)
    this.ayahRepeatPlayed = 0;
    this.repeatMode = localStorage.getItem('islamic_portal_repeat_mode') || 'none';
    if (['none', 'ayah', 'ayah3', 'ayah5', 'surah'].indexOf(this.repeatMode) === -1) {
      this.repeatMode = 'none';
    }
    this.playbackRate = parseFloat(localStorage.getItem('islamic_portal_playback_rate') || '1') || 1;

    // Study Mode & Tafsir State
    this.activeStudyAyah = null;
    const savedTafsirEdition = (typeof localStorage !== 'undefined')
      ? localStorage.getItem('islamic_portal_tafsir_edition')
      : null;
    this.studyTafsirEdition = ['jalalayn-en', 'jalalayn-ar', 'asbab-ar', 'editorial'].includes(savedTafsirEdition)
      ? savedTafsirEdition
      : 'jalalayn-en';
    this.activeStudyTab = 'tafsir';
    this.studyData = null;
    this.tafsirRequestToken = 0;

    this.initAudioListeners();
    this.initStudyData();
    this.restorePlayerState();
  }

  async initStudyData() {
    try {
      if (typeof window !== 'undefined' && window.fetch) {
        const res = await fetch('data/tafsir/study-content.json');
        if (res.ok) {
          const json = await res.json();
          this.studyData = json.verses || {};
        }
      }
    } catch (e) {
      console.warn('Study data fetch notice:', e);
    }
  }

  getTranslationInfo(code = this.translationLang) {
    return QURAN_TRANSLATION_REGISTRY.find(t => t.code === code) || QURAN_TRANSLATION_REGISTRY[0];
  }

  getAvailableTranslationLanguages() {
    return QURAN_TRANSLATION_REGISTRY;
  }

  initAudioListeners() {
    // When ayah audio finishes playing
    this.audioElement.addEventListener('ended', () => {
      this.handleAyahEnded();
    });

    this.audioElement.addEventListener('play', () => {
      this.isPlaying = true;
      this.updateAudioBarUI();
      this.persistPlayerState();
    });

    this.audioElement.addEventListener('pause', () => {
      this.isPlaying = false;
      this.updateAudioBarUI();
      this.persistPlayerState();
    });

    // Time update for seek bar and elapsed readout
    this.audioElement.addEventListener('timeupdate', () => {
      const cur = this.audioElement.currentTime;
      const dur = this.audioElement.duration || 0;
      const slider = document.getElementById('audio-seek-slider');
      const curLabel = document.getElementById('audio-time-current');
      const totLabel = document.getElementById('audio-time-total');

      if (slider && dur > 0) {
        slider.value = (cur / dur) * 100;
      }
      if (curLabel) curLabel.textContent = this.formatTime(cur);
      if (totLabel && dur > 0) totLabel.textContent = this.formatTime(dur);
    });

    // Handle audio error gracefully
    this.audioElement.addEventListener('error', (e) => {
      console.warn('Recitation audio network error:', e);
      this.isPlaying = false;
      this.updateAudioBarUI();
      if (window.App) {
        window.App.showToast('Audio track unavailable or connection interrupted. Check internet or cached audio.', 4000);
      }
    });
  }

  // Repeat modes: none → ayah → ayah3 → ayah5 → surah → none
  handleAyahEnded() {
    const mode = this.repeatMode;
    if (mode === 'ayah' || mode === 'ayah3' || mode === 'ayah5') {
      const target = mode === 'ayah' ? Infinity : (mode === 'ayah3' ? 3 : 5);
      this.ayahRepeatPlayed += 1;
      if (this.ayahRepeatPlayed < target) {
        this.playAyah(this.currentSurah, this.currentAyah, { repeat: true });
        return;
      }
      this.ayahRepeatPlayed = 0;
    }

    if (this.surahData && this.currentAyah < this.surahData.numberOfAyahs) {
      this.playAyah(this.currentSurah, this.currentAyah + 1);
    } else if (mode === 'surah') {
      this.playAyah(this.currentSurah, 1);
    } else {
      this.isPlaying = false;
      this.persistPlayerState();
      this.updateAudioBarUI();
    }
  }

  formatTime(seconds) {
    if (isNaN(seconds) || seconds < 0) return '00:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  }

  // Update the reader header from Surah metadata (used while loading and on failure)
  updateSurahHeader(meta) {
    if (!meta) return;
    const headerTitle = document.getElementById('surah-title-header');
    const headerMeta = document.getElementById('surah-meta-header');
    if (headerTitle) {
      headerTitle.textContent = `${meta.number}. ${meta.englishName} (${meta.name})`;
    }
    if (headerMeta) {
      const type = meta.revelationType || '';
      headerMeta.textContent = `${meta.englishNameTranslation || ''} • ${meta.numberOfAyahs} Verses${type ? ` • Revelation: ${type}` : ''}`;
    }
  }

  // Keep the address bar in sync with the open Surah / Ayah so links are shareable
  syncUrl(surahNum, ayahNum) {
    if (!window.history || typeof window.history.replaceState !== 'function') return;
    const params = new URLSearchParams(window.location.search);
    params.set('surah', String(surahNum));
    params.delete('verse');
    if (ayahNum) params.set('ayah', String(ayahNum));
    else params.delete('ayah');
    const qs = params.toString();
    window.history.replaceState(null, '', `${window.location.pathname}${qs ? `?${qs}` : ''}`);
  }

  // Render the bundled database for a Surah, with honest flags for partial / untranslated data
  useBundledSurah(offline, { partial = false } = {}) {
    const bundledCount = offline.ayahs.length;
    const declaredCount = offline.numberOfAyahs || bundledCount;
    const translationAvailable = this.translationLang === 'en' || this.translationLang === 'ur' || this.translationMode === 'arabic';
    const isUrdu = this.translationLang === 'ur';

    this.offlineFallback = {
      partial: partial || bundledCount < declaredCount,
      bundledCount,
      declaredCount,
      translationAvailable
    };

    this.surahData = {
      ...offline,
      ayahs: offline.ayahs.map(a => ({
        ...a,
        selectedTranslation: isUrdu ? a.ur : (this.translationLang === 'en' ? a.en : null)
      }))
    };
    this.renderSurah();
    this.saveLastReadPosition(this.currentSurah, 1);
  }

  retryLoadSurah() {
    return this.loadSurah(this.currentSurah || 1);
  }

  // Render a complete surah from the bundled Phase 1 corpus (all 114 surahs).
  useCorpusSurah(chunk) {
    const isUrdu = this.translationLang === 'ur';
    const translationAvailable = this.translationLang === 'en' || this.translationLang === 'ur' || this.translationMode === 'arabic';

    this.offlineFallback = {
      partial: false,
      bundledCount: chunk.ayahs.length,
      declaredCount: chunk.numberOfAyahs,
      translationAvailable,
      source: 'corpus'
    };

    this.surahData = {
      ...chunk,
      ayahs: chunk.ayahs.map(a => ({
        ...a,
        selectedTranslation: isUrdu ? a.ur : (this.translationLang === 'en' ? a.en : null)
      }))
    };
    this.renderSurah();
    this.saveLastReadPosition(this.currentSurah, 1);
    this.updateKhatamUI();
  }

  // Load a complete Surah (bundled cache when complete, otherwise verified online source)
  async loadSurah(surahNumber = 1) {
    const surahNum = Number(surahNumber);
    if (!Number.isInteger(surahNum) || surahNum < 1 || surahNum > 114) {
      if (window.App && typeof window.App.showToast === 'function') {
        window.App.showToast('Please choose a Surah between 1 and 114.');
      }
      return false;
    }

    this.currentSurah = surahNum;
    const requestToken = (this.loadRequestToken || 0) + 1;
    this.loadRequestToken = requestToken;

    const container = document.getElementById('quran-ayahs-container');
    const meta = ISLAMIC_DATA.surahs.find(s => s.number === surahNum);

    // Reflect the requested Surah immediately, even if loading later fails
    this.updateSurahHeader(meta);

    if (container) {
      container.innerHTML = `
        <div style="text-align: center; padding: 60px 20px;">
          <div style="font-size: 2rem; color: var(--color-primary); margin-bottom: 12px;">📖</div>
          <p style="color: var(--color-text-muted); font-size: 1.05rem;">Loading verified Quranic scripture...</p>
        </div>
      `;
    }

    const offline = ISLAMIC_DATA.offlineSurahs && ISLAMIC_DATA.offlineSurahs[surahNum];
    const bundledCount = offline ? offline.ayahs.length : 0;
    const declaredCount = offline ? (offline.numberOfAyahs || bundledCount) : 0;
    const isCompleteOffline = Boolean(offline) && bundledCount >= declaredCount && declaredCount > 0;
    const offlineTranslationSupported = this.translationLang === 'en' || this.translationLang === 'ur' || this.translationMode === 'arabic';
    const isOffline = typeof navigator !== 'undefined' && navigator.onLine === false;

    // 0. Phase 1 corpus: all 114 surahs ship as verified JSON chunks and are
    // cached by the service worker + IndexedDB. This path works in airplane mode.
    if (window.QuranStore && (offlineTranslationSupported || isOffline)) {
      const corpusSurah = await window.QuranStore.getSurah(surahNum);
      if (requestToken !== this.loadRequestToken) return false;
      if (corpusSurah) {
        this.useCorpusSurah(corpusSurah);
        this.preloadTafsir(surahNum);
        return true;
      }
    }

    // 1. A complete inline Surah can be read instantly, including offline
    if (isCompleteOffline && offlineTranslationSupported) {
      this.useBundledSurah(offline);
      return true;
    }

    // 2. Device is offline: show the bundled portion (with an honest notice when incomplete)
    if (isOffline && offline) {
      this.useBundledSurah(offline, { partial: !isCompleteOffline });
      return true;
    }

    // 3. Fetch the complete Surah from Al-Quran Cloud, retrying transient failures
    const targetEd = (this.translationInfo && this.translationInfo.verificationStatus === 'verified' && this.translationInfo.editionId)
      ? this.translationInfo.editionId
      : 'en.sahih';
    const editions = ['quran-uthmani'];
    if (!editions.includes(targetEd)) editions.push(targetEd);
    if (!editions.includes('en.sahih')) editions.push('en.sahih');
    if (!editions.includes('ur.jalandhry')) editions.push('ur.jalandhry');

    const fetchEditions = async (eds) => {
      const controller = typeof AbortController !== 'undefined' ? new AbortController() : null;
      const timer = controller ? setTimeout(() => controller.abort(), 15000) : null;
      try {
        const res = await fetch(`https://api.alquran.cloud/v1/surah/${surahNum}/editions/${eds.join(',')}`, controller ? { signal: controller.signal } : undefined);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = await res.json();
        if (json.code !== 200 || !Array.isArray(json.data) || json.data.length === 0 || !Array.isArray(json.data[0].ayahs)) {
          throw new Error('Malformed API response');
        }
        return json;
      } finally {
        if (timer) clearTimeout(timer);
      }
    };

    let json = null;
    try {
      json = await fetchEditions(editions);
    } catch (err) {
      console.warn(`Quran API first attempt failed for Surah ${surahNum}; retrying with core editions:`, err);
      const retryEditions = ['quran-uthmani'];
      if (!retryEditions.includes(targetEd)) retryEditions.push(targetEd);
      if (!retryEditions.includes('en.sahih')) retryEditions.push('en.sahih');
      try {
        json = await fetchEditions(retryEditions);
      } catch (retryErr) {
        console.warn('Quran API retry failed:', retryErr);
      }
    }

    // A newer Surah/translation request superseded this one
    if (requestToken !== this.loadRequestToken) return false;

    if (json) {
      const ar = json.data[0];
      const isTargetVerified = this.translationInfo && this.translationInfo.verificationStatus === 'verified';
      const targetDataset = isTargetVerified ? json.data.find(d => d.edition && d.edition.identifier === targetEd) : null;
      const enDataset = json.data.find(d => d.edition && d.edition.identifier === 'en.sahih');
      const urDataset = json.data.find(d => d.edition && d.edition.identifier === 'ur.jalandhry');

      this.offlineFallback = null;
      this.surahData = {
        number: ar.number,
        name: ar.name,
        englishName: ar.englishName,
        englishNameTranslation: ar.englishNameTranslation,
        numberOfAyahs: ar.numberOfAyahs,
        bismillahPre: ar.number !== 1 && ar.number !== 9,
        ayahs: ar.ayahs.map((a, idx) => ({
          num: a.numberInSurah,
          ar: a.text,
          selectedTranslation: targetDataset ? targetDataset.ayahs[idx]?.text || '' : null,
          en: enDataset ? enDataset.ayahs[idx]?.text || '' : '',
          ur: urDataset ? urDataset.ayahs[idx]?.text || '' : '',
          tr: '',
          audio: `${String(ar.number).padStart(3, '0')}${String(a.numberInSurah).padStart(3, '0')}.mp3`
        }))
      };
      this.renderSurah();
      this.saveLastReadPosition(this.currentSurah, 1);
      return true;
    }

    // 4. Network unavailable but a bundled portion exists: show it with an honest banner
    if (offline) {
      this.useBundledSurah(offline, { partial: !isCompleteOffline });
      if (window.App && typeof window.App.showToast === 'function') {
        window.App.showToast(`Full Surah ${surahNum} could not be loaded. Showing the verses bundled on this device.`, 5000);
      }
      return true;
    }

    // 5. Nothing bundled and the network failed: honest error card with a retry action
    this.offlineFallback = null;
    this.surahData = null;
    if (container) {
      container.innerHTML = `
        <div class="card" role="alert" style="text-align: center; padding: 48px 24px; max-width: 680px; margin: 40px auto; border-top: 3px solid var(--color-gold);">
          <div style="font-size: 2.2rem; margin-bottom: 12px;">📡</div>
          <h3 style="color: var(--color-primary); font-size: 1.35rem; margin-bottom: 8px;">Surah ${meta ? meta.englishName : surahNum} could not be loaded</h3>
          <p style="color: var(--color-text-muted); line-height: 1.6; margin-bottom: 24px;">
            ${meta ? `This Surah contains ${meta.numberOfAyahs} verses.` : ''} The verified Quran text is fetched over HTTPS and was not available just now. Check your connection, then retry. No substitute or machine-generated Quran text is ever shown.
          </p>
          <div style="display: flex; gap: 10px; justify-content: center; flex-wrap: wrap;">
            <button type="button" class="btn btn-primary" onclick="quranApp.retryLoadSurah()">Retry loading Surah ${surahNum}</button>
            <a href="${window.App ? App.resolveUrl('quran.html?surah=1') : 'quran.html?surah=1'}" class="btn btn-outline">Read Surah Al-Fatihah (bundled)</a>
            <a href="${window.App ? App.resolveUrl('quran.html?surah=112') : 'quran.html?surah=112'}" class="btn btn-outline">Read Surah Al-Ikhlas (bundled)</a>
          </div>
        </div>
      `;
    }
    if (window.App && typeof window.App.showToast === 'function') {
      window.App.showToast(`Could not load Surah ${surahNum}. Please check your connection and retry.`, 5000);
    }
    return false;
  }

  // Load Juz Navigation
  async loadJuz(juzNumber) {
    const jNum = Number(juzNumber);
    if (!ISLAMIC_DATA.juzList) return;
    const juz = ISLAMIC_DATA.juzList.find(j => j.number === jNum);
    if (!juz) return;

    await this.loadSurah(juz.startSurah);

    const sDrop = document.getElementById('surah-select-dropdown');
    if (sDrop) sDrop.value = juz.startSurah;

    const jDrop = document.getElementById('juz-select-dropdown');
    if (jDrop) jDrop.value = jNum;

    setTimeout(() => {
      this.scrollToAyah(juz.startAyah);
    }, 200);

    if (window.App && typeof window.App.showToast === 'function') {
      window.App.showToast(`Juz ${juz.number} (${juz.name}) — Surah ${juz.startSurahName} Ayah ${juz.startAyah}`);
    }
  }

  scrollToAyah(ayahNum, options = {}) {
    const num = Number(ayahNum);
    const total = (this.surahData && (this.surahData.numberOfAyahs || (this.surahData.ayahs && this.surahData.ayahs.length))) || 0;

    if (!Number.isInteger(num) || num < 1 || (total && num > total)) {
      const range = total ? `1–${total}` : 'the available range';
      if (window.App && typeof window.App.showToast === 'function') {
        window.App.showToast(`Ayah ${Number.isFinite(num) ? num : ''} is outside ${range} for this Surah.`);
      }
      return false;
    }

    const target = document.getElementById(`ayah-${num}`);
    if (!target) {
      if (window.App && typeof window.App.showToast === 'function') {
        window.App.showToast(this.surahData ? `Ayah ${num} is not available on this page.` : 'Please wait for the Surah to finish loading.');
      }
      return false;
    }

    // Use explicit window scrolling: scrollIntoView can target <body> (overflow-y:auto)
    // and silently no-op in this layout. Fall back to an instant jump if smooth
    // scrolling is disabled by the browser or reduced-motion settings.
    const rect = target.getBoundingClientRect();
    const targetTop = Math.max(0, rect.top + window.scrollY - (window.innerHeight / 2) + (rect.height / 2));
    window.scrollTo({ top: targetTop, behavior: 'smooth' });
    setTimeout(() => {
      if (Math.abs(window.scrollY - targetTop) > 8) {
        window.scrollTo({ top: targetTop, behavior: 'instant' });
      }
    }, 800);
    this.highlightAyah(num);
    this.currentAyah = num;
    if (options.syncUrl !== false) this.syncUrl(this.currentSurah, num);
    return true;
  }

  saveLastReadPosition(surahNum, ayahNum) {
    const meta = ISLAMIC_DATA.surahs.find(s => s.number === surahNum);
    const lastRead = {
      surahNumber: surahNum,
      ayahNumber: ayahNum,
      surahName: meta ? meta.englishName : `Surah ${surahNum}`,
      surahArabic: meta ? meta.name : '',
      timestamp: Date.now()
    };
    try {
      localStorage.setItem('islamic_portal_last_read', JSON.stringify(lastRead));
    } catch (e) {
      console.warn('Could not persist last read state:', e);
    }
    if (window.QuranStore && typeof window.QuranStore.setLastRead === 'function') {
      window.QuranStore.setLastRead(surahNum, ayahNum);
    }
  }

  getSurahOverviewHTML(surahNum, meta) {
    const custom = SURAH_THEMATIC_DATA[surahNum];
    const period = custom ? custom.period : (meta.revelationType === 'Meccan' ? 'Meccan (Focus on Monotheism, Creeds & Hereafter)' : 'Medinan (Focus on Law, Community & Worship)');
    const themes = custom ? custom.themes : [
      `Divine Oneness & Creeds of Faith`,
      `Cosmic Signs & Divine Guidance`,
      `Moral Responsibility & Righteous Deeds`,
      `Accountability on the Day of Judgment`
    ];
    const asbab = custom ? custom.asbab : `Preserved according to the canonical order established by Prophet Muhammad ﷺ under divine guidance.`;
    const virtues = custom ? custom.virtues : `Part of the living, immutable Word of Allah recited daily by millions in prayer.`;

    return `
      <details class="surah-overview-card" open>
        <summary style="cursor: pointer; list-style: none; display: flex; justify-content: space-between; align-items: center; user-select: none;">
          <span class="surah-overview-title">📖 Surah Overview & Thematic Context</span>
          <span class="surah-overview-badge">${period}</span>
        </summary>
        <div style="margin-top: 16px; font-size: 0.92rem; line-height: 1.7; color: var(--color-text-main);">
          <div style="margin-bottom: 10px;">
            <strong>Core Divine Themes:</strong><br>
            <div style="margin-top: 6px;">
              ${themes.map(t => `<span class="surah-theme-pill">${t}</span>`).join('')}
            </div>
          </div>
          <div style="margin-bottom: 8px;">
            <strong>Historical Context & Asbab al-Nuzul:</strong>
            <p style="margin: 4px 0 0 0; color: var(--color-text-muted); font-size: 0.88rem;">${asbab}</p>
          </div>
          <div>
            <strong>Authentic Virtues (Fada'il):</strong>
            <p style="margin: 4px 0 0 0; color: var(--color-text-muted); font-size: 0.88rem;">${virtues}</p>
          </div>
        </div>
      </details>
    `;
  }

  renderAyahs() {
    this.renderSurah();
  }

  renderSurah() {
    if (!this.surahData) return;
    const container = document.getElementById('quran-ayahs-container');
    const headerTitle = document.getElementById('surah-title-header');
    const headerMeta = document.getElementById('surah-meta-header');

    if (headerTitle) {
      headerTitle.textContent = `${this.surahData.number}. ${this.surahData.englishName} (${this.surahData.name})`;
    }
    if (headerMeta) {
      const type = this.surahData.number < 2 ? 'Meccan' : (ISLAMIC_DATA.surahs.find(s => s.number === this.surahData.number)?.revelationType || 'Meccan');
      headerMeta.textContent = `${this.surahData.englishNameTranslation} • ${this.surahData.numberOfAyahs} Verses • Revelation: ${type}`;
    }

    if (!container) return;
    container.innerHTML = '';

    // Honest notice when bundled data is partial or lacks the selected translation
    if (this.offlineFallback) {
      const fallback = this.offlineFallback;
      const messages = [];
      if (fallback.partial) {
        messages.push(`Showing ${fallback.bundledCount} of ${fallback.declaredCount} verses bundled on this device. The complete Surah could not be loaded from the network.`);
      }
      if (!fallback.translationAvailable) {
        messages.push(`The selected translation (${(this.translationInfo || {}).name || 'requested language'}) is not bundled offline. Only the Arabic text is shown.`);
      }
      if (messages.length) {
        const notice = document.createElement('div');
        notice.className = 'card';
        notice.setAttribute('role', 'status');
        notice.style.cssText = 'border-left: 4px solid var(--color-gold); margin-bottom: 24px; background: var(--color-surface);';
        notice.innerHTML = `
          <p style="margin: 0 0 10px; color: var(--color-text-main); line-height: 1.6; font-size: 0.95rem;">
            <strong>📶 Offline data notice:</strong> ${messages.join(' ')}
          </p>
          <button type="button" class="btn btn-outline" style="padding: 6px 14px; font-size: 0.85rem;" onclick="quranApp.retryLoadSurah()">Retry full Surah</button>
        `;
        container.appendChild(notice);
      }
    }

    // Render Surah Overview & Thematic Context Card
    const meta = ISLAMIC_DATA.surahs.find(s => s.number === this.surahData.number) || {};
    const overviewBox = document.createElement('div');
    overviewBox.innerHTML = this.getSurahOverviewHTML(this.surahData.number, meta);
    container.appendChild(overviewBox.firstElementChild);

    // Render Bismillah Header if applicable (All Surahs except At-Tawbah & Al-Fatihah which has it as verse 1)
    if (this.surahData.bismillahPre) {
      const bismBox = document.createElement('div');
      bismBox.className = 'card';
      bismBox.style.textAlign = 'center';
      bismBox.style.marginBottom = '24px';
      bismBox.style.backgroundColor = 'var(--color-surface)';
      bismBox.style.border = '1px solid var(--color-border)';
      bismBox.innerHTML = `
        <p class="font-quran" lang="ar" dir="rtl" translate="no" style="font-size: 1.85rem; color: var(--color-primary); line-height: 2.2;">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</p>
        <p style="font-size: 0.9rem; color: var(--color-text-muted); margin-top: 6px;">In the name of Allah, the Entirely Merciful, the Especially Merciful.</p>
      `;
      container.appendChild(bismBox);
    }

    const isArabicOnly = this.translationMode === 'arabic';
    const transInfo = this.translationInfo || this.getTranslationInfo('en');
    const isTargetVerified = transInfo.verificationStatus === 'verified';

    // Render Verse Cards
    this.surahData.ayahs.forEach(ayah => {
      const box = document.createElement('article');
      box.className = 'ayah-box';
      box.id = `ayah-${ayah.num}`;

      const transText = (transInfo.code === 'en') ? (ayah.selectedTranslation || ayah.en) : ayah.selectedTranslation;

      box.innerHTML = `
        <div class="ayah-header">
          <button class="ayah-badge" onclick="quranApp.openStudyMode(${this.surahData.number}, ${ayah.num})" title="Open Study Mode for Ayah ${ayah.num}" style="cursor: pointer; border: none; text-align: left;">
            Ayah ${this.surahData.number}:${ayah.num} 🔍
          </button>
          <div class="ayah-actions">
            <button class="btn btn-outline" style="padding: 4px 10px; font-size: 0.8rem; color: var(--color-gold-dark); font-weight: 700;" onclick="quranApp.openStudyMode(${this.surahData.number}, ${ayah.num})" aria-label="Open Study Mode for Ayah ${ayah.num}">
              📖 Study
            </button>
            <button class="btn btn-outline" style="padding: 4px 10px; font-size: 0.8rem;" onclick="quranApp.playAyah(${this.surahData.number}, ${ayah.num})" aria-label="Listen to Ayah ${this.surahData.number}:${ayah.num}">
              ▶ Listen
            </button>
            <button class="btn btn-outline" style="padding: 4px 10px; font-size: 0.8rem;" onclick="quranApp.copyAyah(${ayah.num})" aria-label="Copy Ayah ${ayah.num}">
              Copy
            </button>
            <button class="btn btn-outline" style="padding: 4px 10px; font-size: 0.8rem;" onclick="quranApp.shareAyah(${ayah.num})" aria-label="Share Ayah ${ayah.num}">
              🔗 Share
            </button>
            <button class="btn btn-outline" style="padding: 4px 10px; font-size: 0.8rem;" onclick="quranApp.bookmarkAyah(${this.surahData.number}, ${ayah.num})" aria-label="Bookmark Ayah ${ayah.num}">
              Bookmark
            </button>
          </div>
        </div>

        <!-- Protected Immutable Quranic Arabic Text -->
        <div class="ayah-arabic font-quran" lang="ar" dir="rtl" translate="no" style="font-size: ${this.fontSize}px;">
          ${ayah.ar} <span class="ayah-end-marker" translate="no" style="font-size: 0.8em; color: var(--color-gold); font-family: sans-serif;">۝${ayah.num}</span>
        </div>

        ${this.showTranslit && ayah.tr ? `
          <div class="ayah-transliteration" style="font-style: italic; color: var(--color-gold-dark); margin-bottom: 10px; font-size: 0.95rem;">${ayah.tr}</div>
        ` : ''}

        ${!isArabicOnly ? `
          <!-- Dedicated Quran Translation Language Panel -->
          <div class="ayah-translation-container" dir="${transInfo.dir}">
            ${isTargetVerified && transText ? `
              <div class="ayah-translation" dir="${transInfo.dir}">
                <div class="translation-meta-badge" style="font-size: 0.72rem; padding: 2px 8px; border-radius: 4px; background: var(--color-surface); color: var(--color-text-muted); font-weight: 600; margin-bottom: 6px; display: inline-flex; gap: 6px;">
                  <span>🌐 ${transInfo.name} (${transInfo.nativeName})</span>
                  <span>•</span>
                  <span>${transInfo.translator}</span>
                </div>
                <div class="translation-text" style="font-size: 1.05rem; line-height: 1.7; color: var(--color-text-main);">
                  ${transText}
                </div>
              </div>
            ` : `
              ${this.offlineFallback && !this.offlineFallback.translationAvailable ? `
                <div class="ayah-translation-unavailable" role="status" style="font-size: 0.86rem; color: var(--color-text-muted); line-height: 1.5; padding: 10px 14px; background: var(--color-surface); border-radius: var(--radius-sm); border-left: 3px solid var(--color-gold); margin-bottom: 8px;">
                  ℹ️ <strong>Offline translation notice:</strong> <em>${transInfo.name} (${transInfo.nativeName})</em> is not bundled on this device. Only the Arabic text is shown. Connect to the internet to load this translation.
                </div>
              ` : `
                <div class="ayah-translation-unavailable" role="status" style="font-size: 0.86rem; color: var(--color-text-muted); line-height: 1.5; padding: 10px 14px; background: var(--color-surface); border-radius: var(--radius-sm); border-left: 3px solid var(--color-gold); margin-bottom: 8px;">
                  ℹ️ <strong>Scholarly Translation Status:</strong> The approved translation for <em>${transInfo.name} (${transInfo.nativeName})</em> is currently undergoing theological review. Unverified machine translations are strictly excluded to preserve Quranic sanctity. Please select an available verified translation (e.g., English or Urdu).
                </div>
              `}
            `}
          </div>
        ` : ''}

        <!-- Independent Urdu Translation Display -->
        ${this.showUrdu && ayah.ur && !isArabicOnly && transInfo.code !== 'ur' ? `
          <div class="ayah-urdu font-urdu" dir="rtl" lang="ur">
            <div class="translation-meta-badge" style="font-size: 0.72rem; padding: 2px 8px; border-radius: 4px; background: rgba(181,139,80,0.12); color: var(--color-gold-dark); font-weight: 700; margin-bottom: 6px; display: inline-flex; gap: 6px;">
              <span>اردو ترجمہ</span>
              <span>•</span>
              <span>مولانا فتح محمد جالندھری</span>
            </div>
            <div class="urdu-text" style="font-size: 1.15rem; line-height: 2.1; color: var(--color-text-main);">
              ${ayah.ur}
            </div>
          </div>
        ` : ''}
      `;
      container.appendChild(box);
    });
  }

  // Dedicated Quran Translation Language Controller (Isolated from Navbar & Site UI)
  async setQuranTranslationLanguage(langCode) {
    if (!langCode) return;
    this.translationLang = langCode;
    localStorage.setItem('islamic_portal_quran_trans_lang', langCode);
    this.translationInfo = this.getTranslationInfo(langCode);

    const dropdown = document.getElementById('quran-trans-lang-select');
    if (dropdown && dropdown.value !== langCode) {
      dropdown.value = langCode;
    }

    // Refresh translation display for current Surah
    await this.loadSurah(this.currentSurah);

    if (window.App && typeof window.App.showToast === 'function') {
      window.App.showToast(`Quran Translation: ${this.translationInfo.name} (${this.translationInfo.nativeName})`);
    }
  }

  playAyah(surahNum, ayahNum, options = {}) {
    this.currentSurah = Number(surahNum);
    this.currentAyah = Number(ayahNum);
    if (!options.repeat) this.ayahRepeatPlayed = 0;

    const url = (window.QuranStore && typeof window.QuranStore.buildAudioUrl === 'function')
      ? window.QuranStore.buildAudioUrl(this.reciter, this.currentSurah, this.currentAyah)
      : `https://everyayah.com/data/${this.reciter}/${String(surahNum).padStart(3, '0')}${String(ayahNum).padStart(3, '0')}.mp3`;

    this.audioElement.src = url;
    this.audioElement.playbackRate = this.playbackRate;

    this.audioElement.play().then(() => {
      this.isPlaying = true;
      this.updateAudioBarUI();
      this.updateMediaSession();
      this.highlightAyah(this.currentAyah);
      this.saveLastReadPosition(this.currentSurah, this.currentAyah);
      this.persistPlayerState();
    }).catch(err => {
      console.warn('Playback play failed (device policy or offline):', err);
      this.isPlaying = false;
      this.updateAudioBarUI();
    });
  }

  updateMediaSession() {
    if (typeof navigator === 'undefined' || !('mediaSession' in navigator)) return;
    try {
      const surah = this.surahData || {};
      navigator.mediaSession.metadata = new MediaMetadata({
        title: `Surah ${surah.englishName || this.currentSurah} — Ayah ${this.currentAyah}`,
        artist: this.getReciterName(this.reciter),
        album: 'NoorDeen — Holy Quran',
        artwork: [
          { src: (window.App ? App.resolveUrl('icons/icon-512.png') : 'icons/icon-512.png'), sizes: '512x512', type: 'image/png' }
        ]
      });
      navigator.mediaSession.setActionHandler('play', () => this.togglePlayPause());
      navigator.mediaSession.setActionHandler('pause', () => this.togglePlayPause());
      navigator.mediaSession.setActionHandler('previoustrack', () => this.playPreviousAyah());
      navigator.mediaSession.setActionHandler('nexttrack', () => this.playNextAyah());
    } catch (error) {
      console.warn('Media Session unavailable:', error);
    }
  }

  // Persist enough state to resume the same ayah after navigation or reload.
  persistPlayerState() {
    try {
      localStorage.setItem('islamic_portal_player_state', JSON.stringify({
        surah: this.currentSurah,
        ayah: this.currentAyah,
        reciter: this.reciter,
        speed: this.playbackRate,
        repeat: this.repeatMode,
        timestamp: Date.now()
      }));
    } catch (error) {
      /* storage may be unavailable in private mode */
    }
  }

  restorePlayerState() {
    try {
      const raw = localStorage.getItem('islamic_portal_player_state');
      if (!raw) return;
      const state = JSON.parse(raw);
      if (!state || !Number.isInteger(state.surah)) return;
      this.currentSurah = state.surah;
      this.currentAyah = Number(state.ayah) || 1;
      if (state.reciter) this.reciter = state.reciter;
      if (state.speed) this.playbackRate = Number(state.speed) || 1;
      if (state.repeat) this.repeatMode = state.repeat;
      this.pendingResume = true;
      this.updateAudioBarUI();
    } catch (error) {
      /* ignore malformed state */
    }
  }

  highlightAyah(ayahNum) {
    document.querySelectorAll('.ayah-box').forEach(el => {
      el.style.borderColor = 'var(--color-border)';
      el.style.boxShadow = 'var(--shadow-sm)';
    });
    const target = document.getElementById(`ayah-${ayahNum}`);
    if (target) {
      target.style.borderColor = 'var(--color-gold)';
      target.style.boxShadow = '0 0 0 3px rgba(181, 139, 80, 0.2)';
      target.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  updateKhatamUI() {
    if (!window.QuranStore || !window.QuranStore.computeKhatamProgress) return;
    const counts = window.QuranStore.ayahCountsFromMetadata(ISLAMIC_DATA.surahs) || {};
    const state = window.QuranStore.readState();
    const progress = window.QuranStore.computeKhatamProgress(state, counts);
    const plan = window.QuranStore.computeKhatamPlan(state.khatam.days, state.khatam.startDate);

    const bar = document.getElementById('khatam-progress-bar');
    if (bar) bar.style.width = `${Math.max(0, Math.min(100, progress.percent))}%`;

    const progressText = document.getElementById('khatam-progress-text');
    if (progressText) {
      progressText.textContent = `${progress.ayahsRead.toLocaleString()} of ${progress.totalAyahs.toLocaleString()} ayahs (${progress.percent}%) • ${progress.surahsCompleted} surah${progress.surahsCompleted === 1 ? '' : 's'} marked complete`;
    }

    const planText = document.getElementById('khatam-plan-text');
    if (planText) {
      planText.textContent = `${plan.days}-day plan: ${plan.ayahsPerDay} ayahs (about ${plan.pagesPerDay} Mushaf pages) per day, finishing ${plan.finishDate}.`;
    }

    const remaining = document.getElementById('khatam-days-remaining');
    if (remaining) {
      const left = window.QuranStore.daysRemaining(plan.finishDate);
      remaining.textContent = left > 0 ? `${left} day${left === 1 ? '' : 's'} remaining in this plan.` : 'Plan window has ended — start a new khatam when ready.';
    }

    const goalSelect = document.getElementById('khatam-goal-select');
    if (goalSelect) goalSelect.value = String(plan.days);

    const cached = document.getElementById('khatam-cached-count');
    if (cached && window.QuranStore.cachedCount) {
      window.QuranStore.cachedCount().then((count) => {
        cached.textContent = `${count} of 114 surahs stored on this device for offline reading.`;
      });
    }

    const surahBtn = document.getElementById('khatam-surah-btn');
    if (surahBtn) {
      const done = state.completedSurahs.indexOf(this.currentSurah) !== -1;
      surahBtn.textContent = done ? `✓ Surah ${this.currentSurah} complete` : `Mark Surah ${this.currentSurah} complete`;
    }
  }

  setKhatamGoal(days) {
    if (!window.QuranStore) return;
    window.QuranStore.setKhatamDays(days);
    this.updateKhatamUI();
    if (window.App) window.App.showToast(`Khatam goal set to ${days} days.`);
  }

  markCurrentSurahComplete() {
    if (!window.QuranStore) return;
    const state = window.QuranStore.toggleSurahComplete(this.currentSurah);
    const done = state.completedSurahs.indexOf(this.currentSurah) !== -1;
    this.updateKhatamUI();
    if (window.App) {
      window.App.showToast(done ? `Surah ${this.currentSurah} marked complete.` : `Surah ${this.currentSurah} marked incomplete.`);
    }
  }

  resetKhatamProgress() {
    if (!window.QuranStore) return;
    window.QuranStore.resetKhatam();
    this.updateKhatamUI();
    if (window.App) window.App.showToast('Khatam progress reset. Bismillah — start again.');
  }

  togglePlayPause() {
    if (this.isPlaying) {
      this.audioElement.pause();
      this.isPlaying = false;
    } else {
      if (this.audioElement.src) {
        this.audioElement.play().then(() => {
          this.isPlaying = true;
          this.updateMediaSession();
          this.persistPlayerState();
        }).catch(err => {
          console.warn('Playback failed:', err);
        });
      } else {
        this.playAyah(this.currentSurah, this.currentAyah || 1);
      }
    }
    this.updateAudioBarUI();
  }

  playPreviousAyah() {
    if (this.currentAyah > 1) {
      this.playAyah(this.currentSurah, this.currentAyah - 1);
    } else if (this.currentSurah > 1) {
      const prevSurahMeta = ISLAMIC_DATA.surahs.find(s => s.number === this.currentSurah - 1);
      const prevAyah = prevSurahMeta ? prevSurahMeta.numberOfAyahs : 1;
      this.loadSurah(this.currentSurah - 1).then(() => {
        this.playAyah(this.currentSurah, prevAyah);
      });
    }
  }

  playNextAyah() {
    if (this.surahData && this.currentAyah < this.surahData.numberOfAyahs) {
      this.playAyah(this.currentSurah, this.currentAyah + 1);
    } else if (this.currentSurah < 114) {
      this.loadSurah(this.currentSurah + 1).then(() => {
        this.playAyah(this.currentSurah, 1);
      });
    }
  }

  seekAudio(percentage) {
    if (this.audioElement.duration) {
      this.audioElement.currentTime = (percentage / 100) * this.audioElement.duration;
    }
  }

  setReciter(reciterId) {
    this.reciter = reciterId;
    localStorage.setItem('islamic_portal_reciter', reciterId);
    this.persistPlayerState();
    if (this.isPlaying) {
      this.playAyah(this.currentSurah, this.currentAyah);
    } else {
      this.updateAudioBarUI();
    }
    if (window.App) window.App.showToast(`Reciter set to ${this.getReciterName(reciterId)}`);
  }

  getReciterName(id) {
    const names = {
      'Alafasy_128kbps': 'Sheikh Mishary Rashid Alafasy',
      'Abdul_Basit_Murattal_192kbps': 'Sheikh Abdul Basit (Murattal)',
      'Husary_128kbps': 'Sheikh Mahmoud Khalil Al-Husary',
      'Minshawy_Murattal_128kbps': 'Sheikh Mohamed Siddiq Al-Minshawi',
      'Abu_Bakr_Ash-Shaatree_128kbps': 'Sheikh Abu Bakr Al-Shatri'
    };
    return names[id] || id;
  }

  toggleRepeatMode() {
    const next = (window.QuranStore && window.QuranStore.nextRepeatMode)
      ? window.QuranStore.nextRepeatMode(this.repeatMode)
      : (this.repeatMode === 'none' ? 'ayah' : 'none');
    this.repeatMode = next;
    this.ayahRepeatPlayed = 0;
    localStorage.setItem('islamic_portal_repeat_mode', this.repeatMode);
    this.persistPlayerState();

    const btn = document.getElementById('audio-repeat-btn');
    if (btn) {
      const labels = {
        none: '🔁 Off',
        ayah: '🔂 Ayah',
        ayah3: '🔂 3×',
        ayah5: '🔂 5×',
        surah: '🔁 Surah'
      };
      btn.textContent = labels[this.repeatMode] || '🔁 Off';
      btn.style.color = this.repeatMode === 'none' ? 'var(--color-text-muted)' : 'var(--color-primary)';
      btn.setAttribute('aria-label', `Repeat mode: ${this.repeatMode}. Activate to change.`);
    }
    if (window.App) window.App.showToast(`Repeat mode: ${this.repeatMode.toUpperCase()}`);
  }

  setPlaybackSpeed(speed) {
    this.playbackRate = parseFloat(speed) || 1;
    this.audioElement.playbackRate = this.playbackRate;
    localStorage.setItem('islamic_portal_playback_rate', String(this.playbackRate));
    const btn = document.getElementById('audio-speed-btn');
    if (btn) {
      btn.textContent = `${this.playbackRate}×`;
      btn.setAttribute('aria-label', `Playback speed ${this.playbackRate} times. Activate to change.`);
    }
    this.persistPlayerState();
    if (window.App) window.App.showToast(`Playback speed: ${this.playbackRate}x`);
  }

  cyclePlaybackSpeed() {
    const next = (window.QuranStore && window.QuranStore.nextPlaybackSpeed)
      ? window.QuranStore.nextPlaybackSpeed(this.playbackRate)
      : (this.playbackRate === 1 ? 1.25 : (this.playbackRate === 1.25 ? 0.75 : 1));
    this.setPlaybackSpeed(next);
  }

  updateAudioBarUI() {
    const bar = document.getElementById('audio-player-bar');
    const playBtn = document.getElementById('audio-play-toggle-btn');
    const title = document.getElementById('audio-track-title');
    const reciterLabel = document.getElementById('audio-track-reciter');

    if (bar) bar.style.display = 'block';
    if (playBtn) {
      playBtn.textContent = this.isPlaying ? '❚❚' : '▶';
      playBtn.setAttribute('aria-label', this.isPlaying ? 'Pause audio' : 'Play audio');
    }
    if (title) {
      const surah = this.surahData || ISLAMIC_DATA.surahs.find(s => s.number === this.currentSurah) || {};
      title.textContent = `Surah ${surah.englishName || this.currentSurah} — Ayah ${this.currentAyah}`;
    }
    if (reciterLabel) {
      reciterLabel.textContent = `Reciter: ${this.getReciterName(this.reciter)}`;
    }

    const repeatBtn = document.getElementById('audio-repeat-btn');
    if (repeatBtn) {
      const labels = { none: '🔁 Off', ayah: '🔂 Ayah', ayah3: '🔂 3×', ayah5: '🔂 5×', surah: '🔁 Surah' };
      repeatBtn.textContent = labels[this.repeatMode] || '🔁 Off';
    }
    const speedBtn = document.getElementById('audio-speed-btn');
    if (speedBtn) speedBtn.textContent = `${this.playbackRate}×`;
  }

  setTranslationMode(mode) {
    this.translationMode = mode;
    if (mode === 'both') {
      this.showUrdu = true;
      this.showEnglish = true;
    } else if (mode === 'urdu') {
      this.showUrdu = true;
      this.showEnglish = false;
    } else if (mode === 'english') {
      this.showUrdu = false;
      this.showEnglish = true;
    } else if (mode === 'arabic') {
      this.showUrdu = false;
      this.showEnglish = false;
    }
    localStorage.setItem('islamic_portal_translation_mode', mode);
    this.renderAyahs();
  }

  setFontSize(size) {
    this.fontSize = Number(size);
    localStorage.setItem('islamic_portal_font_size', String(this.fontSize));
    document.querySelectorAll('.ayah-arabic').forEach(el => {
      el.style.fontSize = `${this.fontSize}px`;
    });
  }

  copyAyah(ayahNum) {
    const ayah = this.surahData?.ayahs.find(a => a.num === ayahNum);
    if (!ayah) return;
    const lang = this.translationLang;
    const transInfo = this.translationInfo || this.getTranslationInfo(lang);
    let transText = '';
    if (lang === 'en' && ayah.en) {
      transText = `\n\n"${ayah.en}"\n— Saheeh International`;
    } else if (lang === 'ur' && ayah.ur) {
      transText = `\n\n"${ayah.ur}"\n— مولانا فتح محمد جالندھری`;
    } else if (ayah.selectedTranslation && transInfo.verificationStatus === 'verified') {
      transText = `\n\n"${ayah.selectedTranslation}"\n— ${transInfo.name}: ${transInfo.translator}`;
    } else if (ayah.en) {
      transText = `\n\n"${ayah.en}"\n— Saheeh International`;
    }
    const urduExtra = (this.showUrdu && lang !== 'ur' && ayah.ur) ? `\n\n"${ayah.ur}"\n— مولانا فتح محمد جالندھری` : '';
    const text = `${ayah.ar}${transText}${urduExtra}\n\n[Surah ${this.surahData.englishName} (${this.surahData.name}) ${this.surahData.number}:${ayah.num}]`;
    const copier = window.App && window.App.copyText ? window.App.copyText(text) : Promise.resolve(false);
    copier.then((ok) => {
      if (window.App) window.App.showToast(ok ? 'Ayah copied to clipboard!' : 'Copy failed — please select the Ayah text manually.');
    });
  }

  shareAyah(ayahNum) {
    const ayah = this.surahData?.ayahs.find(a => a.num === ayahNum);
    if (!ayah) return;
    const lang = this.translationLang;
    const transInfo = this.translationInfo || this.getTranslationInfo(lang);
    let transText = ayah.en || '';
    if (lang === 'ur' && ayah.ur) {
      transText = ayah.ur;
    } else if (ayah.selectedTranslation && transInfo.verificationStatus === 'verified') {
      transText = ayah.selectedTranslation;
    }
    const shareData = {
      title: `Surah ${this.surahData.englishName} ${this.surahData.number}:${ayah.num}`,
      text: `${ayah.ar}\n\n"${transText}"\n\n[Surah ${this.surahData.englishName} (${this.surahData.name}) ${this.surahData.number}:${ayah.num}]`,
      url: new URL(`quran.html?surah=${this.surahData.number}&ayah=${ayah.num}`, window.location.href).href
    };
    if (navigator.share) {
      navigator.share(shareData).catch(() => this.copyAyah(ayahNum));
    } else {
      this.copyAyah(ayahNum);
    }
  }

  bookmarkAyah(surahNum, ayahNum) {
    const key = 'islamic_portal_bookmarks';
    const bookmarks = JSON.parse(localStorage.getItem(key) || '[]');
    const meta = ISLAMIC_DATA.surahs.find(s => s.number === surahNum);
    const item = {
      type: 'ayah',
      surahNumber: surahNum,
      ayahNumber: ayahNum,
      surahName: meta ? meta.englishName : `Surah ${surahNum}`,
      timestamp: Date.now()
    };
    if (!bookmarks.some(b => b.surahNumber === surahNum && b.ayahNumber === ayahNum)) {
      bookmarks.push(item);
      localStorage.setItem(key, JSON.stringify(bookmarks));
      if (window.App) window.App.showToast(`Bookmarked Surah ${item.surahName}:${ayahNum}`);
    } else {
      if (window.App) window.App.showToast(`Already saved in bookmarks!`);
    }
  }

  // Audio Cache & Offline Download Manager
  async downloadSurahAudio(surahNum) {
    if (!('caches' in window)) {
      if (window.App) window.App.showToast('Offline audio caching is not supported in this browser.');
      return;
    }
    const surah = this.surahData && this.surahData.number === surahNum ? this.surahData : ISLAMIC_DATA.offlineSurahs[surahNum];
    if (!surah) {
      if (window.App) window.App.showToast('Please open this Surah before downloading recitation.');
      return;
    }

    if (this.isDownloadingAudio) {
      if (window.App) window.App.showToast('Download already running in background...');
      return;
    }

    this.isDownloadingAudio = true;
    if (window.App) window.App.showToast(`Downloading Surah ${surah.englishName} audio for offline listening...`);

    try {
      const cache = await caches.open('islamic-portal-audio-v1');
      let downloaded = 0;
      const s = String(surahNum).padStart(3, '0');

      for (const ayah of surah.ayahs) {
        const a = String(ayah.num).padStart(3, '0');
        const url = `https://everyayah.com/data/${this.reciter}/${s}${a}.mp3`;
        const match = await cache.match(url);
        if (!match) {
          try {
            const resp = await fetch(url, { mode: 'no-cors' });
            if (resp) await cache.put(url, resp);
          } catch (e) {
            console.warn(`Could not cache audio for ${s}:${a}:`, e);
          }
        }
        downloaded++;
      }
      this.isDownloadingAudio = false;
      if (window.App) window.App.showToast(`✓ Surah ${surah.englishName} is now fully available offline! (${downloaded} verses)`);
    } catch (err) {
      this.isDownloadingAudio = false;
      console.error('Audio cache error:', err);
      if (window.App) window.App.showToast('Audio download failed. Please check internet connection.');
    }
  }

  // --- STUDY MODE CONTROLLER (Exegesis, Word-by-Word, Comparison, Hadith) ---

  // Load the tafsir chunk in the background so Study Mode opens instantly.
  preloadTafsir(surahNum) {
    if (window.TafsirStore && typeof window.TafsirStore.getSurah === 'function') {
      window.TafsirStore.getSurah(surahNum).catch(() => {});
    }
  }

  openStudyMode(surahNum, ayahNum) {
    const sNum = Number(surahNum);
    const aNum = Number(ayahNum);
    const ayah = this.surahData?.ayahs.find(a => a.num === aNum) || (ISLAMIC_DATA.offlineSurahs && ISLAMIC_DATA.offlineSurahs[sNum]?.ayahs.find(a => a.num === aNum));
    if (!ayah) return;

    this.activeStudyAyah = { surah: sNum, ayah: aNum, data: ayah };

    const modal = document.getElementById('quran-study-modal');
    const title = document.getElementById('study-modal-title');
    const arDisplay = document.getElementById('study-modal-arabic');
    const refDisplay = document.getElementById('study-modal-reference');

    const meta = ISLAMIC_DATA.surahs.find(s => s.number === sNum);
    const sName = meta ? meta.englishName : `Surah ${sNum}`;
    const sArabic = meta ? meta.name : '';

    if (title) title.textContent = `📖 Quran Study Mode: ${sName} (${sArabic}) ${sNum}:${aNum}`;
    if (arDisplay) arDisplay.textContent = ayah.ar;
    if (refDisplay) refDisplay.textContent = `Surah ${sName} • Verse ${aNum} • Hafs Uthmanic Standard`;

    this.renderStudyContent();

    const listenBtn = document.getElementById('study-listen-btn');
    if (listenBtn) {
      listenBtn.onclick = () => {
        this.playAyah(sNum, aNum);
        this.closeStudyMode();
      };
    }

    const copyBtn = document.getElementById('study-copy-btn');
    if (copyBtn) {
      copyBtn.onclick = () => {
        this.copyAyah(aNum);
      };
    }

    if (modal) {
      modal.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    }
  }

  closeStudyMode() {
    const modal = document.getElementById('quran-study-modal');
    if (modal) {
      modal.style.display = 'none';
      document.body.style.overflow = '';
    }
  }

  switchStudyTab(tabId) {
    this.activeStudyTab = tabId;
    const tabs = ['tafsir', 'wbw', 'compare', 'hadith'];
    tabs.forEach(t => {
      const btn = document.getElementById(`tab-btn-${t}`);
      const panel = document.getElementById(`tab-panel-${t}`);
      if (btn) {
        if (t === tabId) {
          btn.classList.add('active');
          btn.setAttribute('aria-selected', 'true');
        } else {
          btn.classList.remove('active');
          btn.setAttribute('aria-selected', 'false');
        }
      }
      if (panel) {
        panel.style.display = (t === tabId) ? 'block' : 'none';
      }
    });
  }

  setStudyTafsirEdition(editionSlug) {
    const allowed = ['jalalayn-en', 'jalalayn-ar', 'asbab-ar', 'editorial'];
    this.studyTafsirEdition = allowed.includes(editionSlug) ? editionSlug : 'jalalayn-en';
    try {
      localStorage.setItem('islamic_portal_tafsir_edition', this.studyTafsirEdition);
    } catch (error) {
      // Storage can be unavailable in private mode; the in-memory choice still applies.
    }
    this.renderStudyTafsir();
  }

  renderStudyContent() {
    this.renderStudyTafsir();
    this.renderStudyWBW();
    this.renderStudyCompare();
    this.renderStudyHadith();
  }

  escapeStudyHtml(value) {
    return String(value == null ? '' : value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  async renderStudyTafsir() {
    const tafsirContent = document.getElementById('study-tafsir-content');
    const tafsirMeta = document.getElementById('study-tafsir-meta');
    if (!tafsirContent || !this.activeStudyAyah) return;

    const surahNum = this.activeStudyAyah.surah;
    const ayahNum = this.activeStudyAyah.ayah;
    const key = `${surahNum}:${ayahNum}`;
    const editionId = this.studyTafsirEdition;
    const token = (this.tafsirRequestToken || 0) + 1;
    this.tafsirRequestToken = token;

    const isCurrent = () => token === this.tafsirRequestToken &&
      this.activeStudyAyah && this.activeStudyAyah.surah === surahNum &&
      this.activeStudyAyah.ayah === ayahNum && this.studyTafsirEdition === editionId;

    const surahLabel = this.surahData && this.surahData.englishName
      ? `Surah ${this.surahData.englishName}`
      : `Surah ${surahNum}`;

    const renderPanel = (bodyHtml, footerHtml, color) => `
      <div style="background: var(--color-surface); padding: 16px; border-radius: var(--radius-sm); border-left: 3px solid ${color};">
        ${bodyHtml}
        ${footerHtml ? `<p style="margin: 12px 0 0; padding-top: 8px; border-top: 1px dashed var(--color-border); font-size: 0.78rem; line-height: 1.5; color: var(--color-text-muted);">${footerHtml}</p>` : ''}
      </div>
    `;

    // --- NoorDeen editorial summary (site-original paraphrase) -------------
    if (editionId === 'editorial') {
      const studyItem = this.studyData && this.studyData[key];
      const editorialText = studyItem && (studyItem.editorialSummary || studyItem.editorialSummaryAlternate);
      if (tafsirMeta) {
        tafsirMeta.textContent = 'NoorDeen editorial summary — modern English paraphrase written for this site. Not a classical tafsir and not a verbatim translation.';
      }
      if (editorialText) {
        tafsirContent.innerHTML = renderPanel(
          `<p style="margin: 0; line-height: 1.8;">${this.escapeStudyHtml(editorialText)}</p>`,
          '<strong>Editorial text:</strong> this is a NoorDeen paraphrase, not the wording of Ibn Kathir, al-Jalalayn or any other scholar. It is not attributed to them and must not be quoted as their tafsir. Verify against a published edition before relying on it.',
          'var(--color-gold)'
        );
      } else {
        tafsirContent.innerHTML = renderPanel(
          `<p style="margin: 0; line-height: 1.8;"><strong>No editorial summary is bundled for ${surahLabel}, verse ${ayahNum}.</strong> NoorDeen editorial summaries cover only six key verses (Al-Fatihah 1:1, 1:2, 1:5, 1:6, Ayat al-Kursi 2:255 and Al-Ikhlas 112:1).</p>
           <p style="margin: 10px 0 0; line-height: 1.8; font-size: 0.9rem; color: var(--color-text-muted);">Choose one of the bundled classical editions above to read commentary for this verse.</p>`,
          '',
          'var(--color-gold)'
        );
      }
      return;
    }

    // --- Bundled classical editions ---------------------------------------
    if (!window.TafsirStore || typeof window.TafsirStore.getSurah !== 'function') {
      if (tafsirMeta) tafsirMeta.textContent = 'Bundled commentary is unavailable on this page.';
      tafsirContent.innerHTML = renderPanel(
        '<p style="margin: 0; line-height: 1.8;"><strong>The offline tafsir store did not load.</strong> Reload the page with a connection so the commentary chunk can be cached.</p>',
        '',
        'var(--color-primary)'
      );
      return;
    }

    if (tafsirMeta) tafsirMeta.textContent = 'Loading bundled commentary…';
    tafsirContent.innerHTML = renderPanel(
      '<p style="margin: 0; color: var(--color-text-muted);">Loading the bundled commentary…</p>',
      '',
      'var(--color-border)'
    );

    let chunk = null;
    try {
      chunk = await window.TafsirStore.getSurah(surahNum);
    } catch (error) {
      chunk = null;
    }
    if (!isCurrent()) return;

    let edition = null;
    try {
      edition = await window.TafsirStore.getEdition(editionId);
    } catch (error) {
      edition = null;
    }
    if (!isCurrent()) return;

    if (!chunk) {
      if (tafsirMeta) tafsirMeta.textContent = 'Bundled commentary could not be loaded.';
      tafsirContent.innerHTML = renderPanel(
        `<p style="margin: 0 0 10px; line-height: 1.8;"><strong>The commentary chunk for ${surahLabel} could not be loaded.</strong> It may not be cached yet and the network request failed. No text has been invented to fill the gap.</p>
         <button type="button" class="btn btn-outline" style="padding: 5px 12px; font-size: 0.82rem;" onclick="quranApp.renderStudyTafsir()">Retry loading commentary</button>`,
        '',
        'var(--color-primary)'
      );
      return;
    }

    const fields = chunk.ayahs[String(ayahNum)] || null;

    // --- Tafsir al-Jalalayn, English translation --------------------------
    if (editionId === 'jalalayn-en') {
      if (tafsirMeta) {
        tafsirMeta.textContent = 'Tafsir al-Jalalayn — Jalal al-Din al-Mahalli & Jalal al-Din al-Suyuti • English translation by Dr. Feras Hamza • © Royal Aal al-Bayt Institute for Islamic Thought (altafsir.com) • Bundled for non-commercial educational use';
      }
      if (fields && fields.en) {
        tafsirContent.innerHTML = renderPanel(
          `<p style="margin: 0; line-height: 1.85;">${this.escapeStudyHtml(fields.en)}</p>`,
          '<strong>Attribution:</strong> Tafsir al-Jalalayn, English translation by Dr. Feras Hamza, © Royal Aal al-Bayt Institute for Islamic Thought (altafsir.com). Quoted verbatim from the bundled edition for non-commercial educational use; commercial redistribution requires the Institute\'s permission. Verify against a published edition before quoting.',
          'var(--color-primary)'
        );
      } else {
        tafsirContent.innerHTML = renderPanel(
          `<p style="margin: 0; line-height: 1.8;"><strong>The bundled English edition has no entry for ${surahLabel}, verse ${ayahNum}.</strong> The entry is missing from the source dataset and has not been filled in from another translation.</p>`,
          'Tafsir al-Jalalayn, English translation by Dr. Feras Hamza, © Royal Aal al-Bayt Institute for Islamic Thought (altafsir.com).',
          'var(--color-primary)'
        );
      }
      return;
    }

    // --- Tafsir al-Jalalayn, Arabic original -------------------------------
    if (editionId === 'jalalayn-ar') {
      if (tafsirMeta) {
        tafsirMeta.textContent = 'تفسير الجلالين — جلال الدين المحلي وجلال الدين السيوطي • Arabic original (public domain) • Digitised edition: 6,010 of 6,236 verses';
      }
      if (fields && fields.ar) {
        tafsirContent.innerHTML = renderPanel(
          `<div lang="ar" dir="rtl" style="font-family: var(--font-quran, 'Amiri', serif); font-size: 1.35rem; line-height: 2.15; text-align: right; color: var(--color-text-main);">${this.escapeStudyHtml(fields.ar)}</div>`,
          '<strong>Attribution:</strong> Tafsir al-Jalalayn by Jalal al-Din al-Mahalli (d. 864 AH) and Jalal al-Din al-Suyuti (d. 911 AH). The Arabic original is in the public domain; this digitisation is used as distributed in the Tafsir API dataset. The digitised edition omits some verses, which are shown as missing rather than filled from another source.',
          'var(--color-gold)'
        );
      } else {
        tafsirContent.innerHTML = renderPanel(
          `<p style="margin: 0; line-height: 1.8;"><strong>The digitised Arabic edition has no entry for ${surahLabel}, verse ${ayahNum}.</strong> This is a known gap in the digitisation (6,010 of 6,236 verses are present). It has not been filled in from another edition.</p>`,
          'Tafsir al-Jalalayn, Arabic original, public domain.',
          'var(--color-gold)'
        );
      }
      return;
    }

    // --- Asbab al-Nuzul, Arabic reports -----------------------------------
    if (editionId === 'asbab-ar') {
      if (tafsirMeta) {
        tafsirMeta.textContent = 'أسباب النزول — reports compiled in Ṣaḥīḥ Asbāb al-Nuzūl by Ibrāhīm Muḥammad al-ʿAlī • Arabic only • 200 reports across 50 surahs • Dataset MIT licence';
      }
      const reports = fields && Array.isArray(fields.asbab) ? fields.asbab : [];
      if (reports.length > 0) {
        const rangeText = fields.asbabRange
          ? ` The source report covers ayah(s) ${String(fields.asbabRange).replace('-', '–')}.`
          : '';
        const items = reports.map((report) => `
          <li lang="ar" dir="rtl" style="margin-bottom: 12px; font-family: var(--font-quran, 'Amiri', serif); font-size: 1.12rem; line-height: 2.05; text-align: right;">${this.escapeStudyHtml(report)}</li>
        `).join('');
        tafsirContent.innerHTML = renderPanel(
          `<p style="margin: 0 0 10px; line-height: 1.8;">Occasion(s) of revelation recorded for ${surahLabel}, verse ${ayahNum}.${rangeText}</p>
           <ol style="margin: 0; padding-left: 22px;">${items}</ol>`,
          '<strong>Source:</strong> Arabic reports quoted verbatim from the Asbab al-Nuzul Dataset (MIT licence), compiled in Ṣaḥīḥ Asbāb al-Nuzūl by Ibrāhīm Muḥammad al-ʿAlī. No English translation is bundled, so none is shown. The reports are quoted as recorded; NoorDeen has not independently graded their chains.',
          'var(--color-primary)'
        );
      } else {
        tafsirContent.innerHTML = renderPanel(
          `<p style="margin: 0; line-height: 1.8;"><strong>The bundled compilation records no occasion of revelation for ${surahLabel}, verse ${ayahNum}.</strong> Absence of an entry is not a claim that no occasion exists; it means this compilation has no report for this verse.</p>`,
          'Asbab al-Nuzul Dataset (MIT licence), reports compiled in Ṣaḥīḥ Asbāb al-Nuzūl by Ibrāhīm Muḥammad al-ʿAlī. Arabic only.',
          'var(--color-primary)'
        );
      }
      return;
    }

    // Unknown edition: fail closed rather than show the wrong text.
    if (tafsirMeta) tafsirMeta.textContent = 'Unknown commentary edition.';
    tafsirContent.innerHTML = renderPanel(
      '<p style="margin: 0; line-height: 1.8;">The selected commentary edition is not registered. Choose an edition from the list above.</p>',
      '',
      'var(--color-primary)'
    );
  }

  renderStudyWBW() {
    const grid = document.getElementById('study-wbw-grid');
    if (!grid || !this.activeStudyAyah) return;

    const key = `${this.activeStudyAyah.surah}:${this.activeStudyAyah.ayah}`;
    const studyItem = this.studyData && this.studyData[key];

    if (studyItem && studyItem.words && studyItem.words.length > 0) {
      grid.innerHTML = studyItem.words.map((w, idx) => `
        <div class="wbw-card">
          <div class="wbw-arabic">${w.ar}</div>
          <div class="wbw-translit">${w.tr}</div>
          <div class="wbw-meaning">${w.en}</div>
          <div style="font-size: 0.8rem; color: var(--color-text-muted); font-family: var(--font-urdu); direction: rtl; margin-top: 2px;">${w.ur}</div>
          ${w.root ? `<div class="wbw-root">جذر: ${w.root}</div>` : ''}
        </div>
      `).join('');
    } else {
      // Split words gracefully for any verse
      const words = (this.activeStudyAyah.data.ar || '').trim().split(/\s+/);
      grid.innerHTML = words.map((w, idx) => `
        <div class="wbw-card">
          <div class="wbw-arabic">${w}</div>
          <div class="wbw-translit">Word ${idx + 1}</div>
          <div class="wbw-meaning">Token #${idx + 1}</div>
        </div>
      `).join('');
    }
  }

  renderStudyCompare() {
    const compContainer = document.getElementById('study-compare-container');
    if (!compContainer || !this.activeStudyAyah) return;

    const ayah = this.activeStudyAyah.data;
    const transInfo = this.translationInfo || this.getTranslationInfo('en');

    compContainer.innerHTML = `
      <div class="card" style="margin: 0; padding: 14px 18px; border-left: 4px solid var(--color-primary);">
        <div style="font-size: 0.76rem; font-weight: 700; color: var(--color-primary); margin-bottom: 4px;">
          🇬🇧 English Translation — Saheeh International (Authentic Standard)
        </div>
        <div style="font-size: 1rem; line-height: 1.7; color: var(--color-text-main);">
          "${ayah.en || 'Translation text'}"
        </div>
      </div>

      <div class="card" style="margin: 0; padding: 14px 18px; border-left: 4px solid var(--color-gold); text-align: right; direction: rtl;">
        <div style="font-size: 0.76rem; font-weight: 700; color: var(--color-gold-dark); margin-bottom: 4px; direction: ltr; text-align: left;">
          🇵🇰 اردو ترجمہ — مولانا فتح محمد جالندھری (مستند کلاسیکی ترجمہ)
        </div>
        <div class="font-urdu" style="font-size: 1.15rem; line-height: 2.1; color: var(--color-text-main);">
          "${ayah.ur || 'اردو ترجمہ'}"
        </div>
      </div>

      ${transInfo.code !== 'en' && transInfo.code !== 'ur' ? `
        <div class="card" style="margin: 0; padding: 14px 18px; border-left: 4px solid #3B82F6;">
          <div style="font-size: 0.76rem; font-weight: 700; color: #2563EB; margin-bottom: 4px;">
            🌐 ${transInfo.name} (${transInfo.nativeName}) — ${transInfo.translator}
          </div>
          <div style="font-size: 1rem; line-height: 1.7; color: var(--color-text-main);">
            ${ayah.selectedTranslation || (transInfo.verificationStatus === 'verified' ? 'Translation currently synchronizing...' : 'Scholarly review pending.')}
          </div>
        </div>
      ` : ''}
    `;
  }

  renderStudyHadith() {
    const hadithContainer = document.getElementById('study-hadith-content');
    if (!hadithContainer || !this.activeStudyAyah) return;

    const key = `${this.activeStudyAyah.surah}:${this.activeStudyAyah.ayah}`;
    const studyItem = this.studyData && this.studyData[key];

    if (studyItem && studyItem.hadith) {
      hadithContainer.innerHTML = `
        <div class="card" style="margin: 0; padding: 16px; border-left: 4px solid var(--color-primary); background: var(--color-surface);">
          <div style="display: flex; gap: 8px; align-items: center; margin-bottom: 8px;">
            <span class="badge" style="background: var(--color-primary); color: #fff; font-size: 0.72rem;">Authentic Sunnah Context</span>
            <span style="font-size: 0.78rem; color: var(--color-gold-dark); font-weight: 700;">Canonical Tradition</span>
          </div>
          <p style="margin: 0; font-size: 0.95rem; line-height: 1.8; color: var(--color-text-main); font-style: italic;">
            "${studyItem.hadith}"
          </p>
        </div>
      `;
    } else {
      hadithContainer.innerHTML = `
        <div class="card" style="margin: 0; padding: 16px; border-left: 4px solid var(--color-primary); background: var(--color-surface);">
          <div style="display: flex; gap: 8px; align-items: center; margin-bottom: 8px; flex-wrap: wrap;">
            <span class="badge" style="background: var(--color-text-muted); color: #fff; font-size: 0.72rem;">General Sunnah Guidance</span>
            <span style="font-size: 0.78rem; color: var(--color-gold-dark); font-weight: 700;">Not verse-specific</span>
          </div>
          <p style="margin: 0; font-size: 0.95rem; line-height: 1.8; color: var(--color-text-main);">
            No verse-specific narration is bundled for ${this.surahData?.englishName ? 'Surah ' + this.surahData.englishName + ', ' : ''}verse ${key}. The following is general guidance on reciting and teaching the Quran, not a commentary on this verse:
          </p>
          <p style="margin: 8px 0 0; font-size: 0.95rem; line-height: 1.8; color: var(--color-text-main); font-style: italic;">
            Prophet Muhammad ﷺ said: "The best among you are those who learn the Quran and teach it." (Sahih al-Bukhari #5027)
          </p>
        </div>
      `;
    }
  }
}

if (typeof window !== 'undefined') {
  window.QuranReader = QuranReader;
  window.QURAN_TRANSLATION_REGISTRY = QURAN_TRANSLATION_REGISTRY;
  window.SURAH_THEMATIC_DATA = SURAH_THEMATIC_DATA;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { QuranReader, QURAN_TRANSLATION_REGISTRY, SURAH_THEMATIC_DATA };
}
