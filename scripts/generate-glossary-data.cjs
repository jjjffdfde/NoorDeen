// Comprehensive 102-term Islamic Glossary dataset and HTML component generator
const fs = require('fs');

const GLOSSARY_TERMS = [
  // 1. Aqeedah & Creed (Theology)
  {
    term: "Tawheed",
    ar: "تَوْحِيد",
    tr: "Tawḥīd",
    cat: "creed",
    def: "The foundational doctrine of the absolute, indivisible oneness and uniqueness of Allah. Comprises three classical dimensions: Tawheed ar-Rububiyyah (Oneness in Lordship and creation), Tawheed al-Uluhiyyah (Oneness in exclusive worship), and Tawheed al-Asma wa-s-Sifat (Oneness in His pristine Names and Attributes).",
    ref: "Surah Al-Ikhlas 112:1-4; Kitab at-Tawhid by Imam Muhammad ibn Abd al-Wahhab"
  },
  {
    term: "Shirk",
    ar: "شِرْك",
    tr: "Shirk",
    cat: "creed",
    def: "The ultimate unforgivable theological transgression of associating partners, equals, or intermediaries with Allah in His divine essence, lordship, or exclusive worship. Categorized into Major Shirk (Shirk Akbar) which nullifies faith, and Minor Shirk (Shirk Asghar) such as showing off (Riya').",
    ref: "Surah An-Nisa 4:48, 116; Sahih al-Bukhari #4777"
  },
  {
    term: "Iman",
    ar: "إِيمَان",
    tr: "Īmān",
    cat: "creed",
    def: "Faith consisting of firm conviction of the heart (I'tiqad), verbal affirmation upon the tongue (Qawl), and practical demonstration through bodily limbs (Amal). Increases with righteous obedience and decreases with disobedience.",
    ref: "Surah Al-Hujurat 49:15; Sahih al-Bukhari #9"
  },
  {
    term: "Ihsan",
    ar: "إِحْسَان",
    tr: "Iḥsān",
    cat: "creed",
    def: "Spiritual perfection and mindfulness defined by Prophet Muhammad ﷺ as: 'To worship Allah as though you see Him, and if you do not see Him, truly He sees you.' Represents the apex of spiritual realization.",
    ref: "Sahih Muslim #8 (Hadith Jibril); Sahih al-Bukhari #50"
  },
  {
    term: "Nifaq",
    ar: "نِفَاق",
    tr: "Nifāq",
    cat: "creed",
    def: "Hypocrisy. Divided into doctrinal hypocrisy (Nifaq I'tiqadi), which conceals inner disbelief while feigning Islam, and practical hypocrisy (Nifaq 'Amali), involving traits such as lying when speaking, breaking promises, and betraying trusts.",
    ref: "Surah An-Nisa 4:145; Sahih al-Bukhari #33"
  },
  {
    term: "Qadar",
    ar: "قَدَر",
    tr: "Qadar",
    cat: "creed",
    def: "The sixth pillar of faith: divine predestination and measurement. Comprises four levels: divine eternal knowledge ('Ilm), divine recording in the Preserved Tablet (Kitabah), divine sovereign will (Mashi'ah), and divine creation of all events (Khalq).",
    ref: "Surah Al-Qamar 54:49; Sahih Muslim #8"
  },
  {
    term: "Tawakkul",
    ar: "تَوَكُّل",
    tr: "Tawakkul",
    cat: "creed",
    def: "True reliant trust in Allah while actively pursuing legitimate physical means (Asbab). Exemplified by the Prophetic adage: 'Tie your camel, and then place your trust in Allah.'",
    ref: "Surah Ali 'Imran 3:159; Jami` at-Tirmidhi #2517"
  },
  {
    term: "Ghayb",
    ar: "غَيْب",
    tr: "Ghayb",
    cat: "creed",
    def: "The unseen realm inaccessible to physical human senses, known comprehensively only to Allah. Encompasses the angels, the Preserved Tablet, the Day of Judgment, Paradise, Hellfire, and the nature of the soul.",
    ref: "Surah Al-Baqarah 2:3; Surah Al-An'am 6:59"
  },
  {
    term: "Barzakh",
    ar: "بَرْزَخ",
    tr: "Barzakh",
    cat: "creed",
    def: "The intermediate realm and barrier between physical earthly demise and the universal bodily Resurrection on the Day of Judgment, where souls experience a foretaste of their ultimate eternal destination.",
    ref: "Surah Al-Mu'minun 23:100; Sahih al-Bukhari #1374"
  },
  {
    term: "Mizan",
    ar: "مِيزَان",
    tr: "Mīzān",
    cat: "creed",
    def: "The cosmic literal Scale established on the Day of Resurrection upon which human intentions, records of deeds, and the doers themselves will be weighed with absolute divine justice.",
    ref: "Surah Al-Anbiya 21:47; Sahih al-Bukhari #6405"
  },
  {
    term: "Sirat",
    ar: "صِرَاط",
    tr: "Ṣirāṭ",
    cat: "creed",
    def: "The razor-sharp, narrow bridge suspended over the abyss of Hellfire which every soul must cross on the Day of Resurrection. Believers traverse it with the speed of lightning, wind, or running horses in proportion to their righteous deeds.",
    ref: "Surah Maryam 19:71-72; Sahih Muslim #195"
  },
  {
    term: "Hawd",
    ar: "حَوْض",
    tr: "Ḥawḍ",
    cat: "creed",
    def: "The celestial drinking fountain granted to Prophet Muhammad ﷺ on the Day of Judgment. Its water is whiter than milk, cooler than snow, and sweeter than honey; whoever drinks from it will never thirst again.",
    ref: "Sahih al-Bukhari #6579; Sahih Muslim #2292"
  },
  {
    term: "Shafa'ah",
    ar: "شَفَاعَة",
    tr: "Shafā'ah",
    cat: "creed",
    def: "Intercession granted by divine permission on the Day of Judgment. The greatest is Al-Maqam al-Mahmud (the Praised Station) reserved for Prophet Muhammad ﷺ to inaugurate universal divine reckoning.",
    ref: "Surah Al-Baqarah 2:255; Sahih al-Bukhari #4718"
  },
  {
    term: "Rububiyyah",
    ar: "رُبُوبِيَّة",
    tr: "Rubūbiyyah",
    cat: "creed",
    def: "The belief that Allah alone is the Lord, Creator, Sustainer, Sovereign, and Controller of all existence without partner.",
    ref: "Surah Al-Fatihah 1:2; Surah Al-A'raf 7:54"
  },
  {
    term: "Uluhiyyah",
    ar: "أُلُوهِيَّة",
    tr: "Ulūhiyyah",
    cat: "creed",
    def: "The doctrine that Allah alone is worthy of all worship, prayer, sacrifice, vows, and devotional hope and fear.",
    ref: "Surah An-Nahl 16:36; Surah Al-Anbiya 21:25"
  },
  {
    term: "Asma wa Sifat",
    ar: "أَسْمَاء وَصِفَات",
    tr: "Asmā' wa-ṣ-Ṣifāt",
    cat: "creed",
    def: "Affirming all the Names and Attributes that Allah and His Messenger ﷺ have affirmed for Him, without distortion (Tahreef), denial (Ta'teel), asking how (Takyif), or likening to creation (Tamthil).",
    ref: "Surah Ash-Shura 42:11 ('There is nothing like unto Him')"
  },
  {
    term: "Fitrah",
    ar: "فِطْرَة",
    tr: "Fiṭrah",
    cat: "creed",
    def: "The primordial innate natural disposition imprinted upon every human soul at creation, innately recognizing the existence of the One Creator.",
    ref: "Surah Ar-Rum 30:30; Sahih al-Bukhari #1358"
  },
  {
    term: "Wahy",
    ar: "وَحْي",
    tr: "Waḥy",
    cat: "creed",
    def: "Divine inspiration and revelation communicated from Allah to His chosen prophets through Angel Jibril, direct divine speech, or truthful dreams.",
    ref: "Surah Ash-Shura 42:51; Sahih al-Bukhari #1-3"
  },
  {
    term: "Khatam an-Nabiyyin",
    ar: "خَاتَم النَّبِيِّين",
    tr: "Khātam an-Nabiyyīn",
    cat: "creed",
    def: "The Seal and Finality of the Prophets: the decisive Islamic dogma establishing Prophet Muhammad ﷺ as the ultimate and final messenger of Allah, after whom no prophet will ever appear.",
    ref: "Surah Al-Ahzab 33:40; Sahih Muslim #2286"
  },
  {
    term: "Yawm al-Qiyamah",
    ar: "يَوْم القِيَامَة",
    tr: "Yawm al-Qiyāmah",
    cat: "creed",
    def: "The Day of Resurrection: the universal cosmic reckoning when all humanity is raised bodily from their graves to stand before Allah.",
    ref: "Surah Al-Qiyamah 75:1-40; Sahih al-Bukhari #6526"
  },
  {
    term: "Ba'th",
    ar: "بَعْث",
    tr: "Ba'th",
    cat: "creed",
    def: "The universal bodily resurrection of all dead beings from the earth upon the second sounding of the celestial Horn (Soor) by Angel Israfil.",
    ref: "Surah Ya-Sin 36:51-53; Surah Al-Hajj 22:7"
  },

  // 2. Worship & Fiqh
  {
    term: "Salah",
    ar: "صَلَاة",
    tr: "Ṣalāh",
    cat: "fiqh",
    def: "The ritual prescribed prayer performed five times daily. Constitutes the second pillar of Islam and the primary daily communion between the created servant and the Creator.",
    ref: "Surah Al-Baqarah 2:43; Sahih al-Bukhari #8"
  },
  {
    term: "Wudu",
    ar: "وُضُوء",
    tr: "Wuḍū'",
    cat: "fiqh",
    def: "Ritual ablution performed with pure water prior to prayer, circumambulation, and handling scripture. Includes washing the face, arms to elbows, wiping the head, and washing feet to ankles.",
    ref: "Surah Al-Ma'idah 5:6; Sahih Muslim #223"
  },
  {
    term: "Ghusl",
    ar: "غُسْل",
    tr: "Ghusl",
    cat: "fiqh",
    def: "Complete full-body ritual purification washing every hair and surface of the skin with water, mandatory after marital relations, seminal emission, menstruation, or post-partum bleeding.",
    ref: "Surah An-Nisa 4:43; Sahih al-Bukhari #248"
  },
  {
    term: "Tayammum",
    ar: "تَيَمُّم",
    tr: "Tayammum",
    cat: "fiqh",
    def: "Dry purification performed using clean wholesome earth or dust when pure water is unavailable, insufficient, or medically harmful to use, substituting for Wudu and Ghusl.",
    ref: "Surah Al-Ma'idah 5:6; Sahih al-Bukhari #335"
  },
  {
    term: "Niyyah",
    ar: "نِيَّة",
    tr: "Niyyah",
    cat: "fiqh",
    def: "Conscious intention of the heart to perform an act of worship purely for the sake of Allah. An indispensable prerequisite (Shart) for the legal validity of all religious rites.",
    ref: "Sahih al-Bukhari #1; Sahih Muslim #1907"
  },
  {
    term: "Qibla",
    ar: "قِبْلَة",
    tr: "Qiblah",
    cat: "fiqh",
    def: "The precise geographical direction toward the Holy Ka'bah in Makkah, which all Muslims across the globe must face during obligatory and voluntary prayers.",
    ref: "Surah Al-Baqarah 2:144; Sahih al-Bukhari #399"
  },
  {
    term: "Khushoo'",
    ar: "خُشُوع",
    tr: "Khushū'",
    cat: "fiqh",
    def: "Deep spiritual humility, serenity, awe, and focused mental attentiveness during prayer and supplication, recognized as the inward soul of Salah.",
    ref: "Surah Al-Mu'minun 23:1-2; Sunan an-Nasa'i #1210"
  },
  {
    term: "Fardh",
    ar: "فَرْض",
    tr: "Farḍ",
    cat: "fiqh",
    def: "Strictly obligatory duty established by definitive, unambiguous scriptural proof (e.g. the five daily prayers). Performance earns divine reward, intentional neglect warrants punishment, and denying its obligation constitutes disbelief.",
    ref: "Bada'i' as-Sana'i' by Al-Kasani; Al-Majmu' by An-Nawawi"
  },
  {
    term: "Wajib",
    ar: "وَاجِب",
    tr: "Wājib",
    cat: "fiqh",
    def: "Mandatory religious obligation. In the Hanafi school, it is distinguished from Fardh as being established by probable (Zanni) rather than definitive (Qat'i) textual proof, such as Witr and Eid prayers.",
    ref: "Radd al-Muhtar by Ibn Abidin; Al-Hidayah by Al-Marghinani"
  },
  {
    term: "Sunnah Mu'akkadah",
    ar: "سُنَّة مُؤَكَّدَة",
    tr: "Sunnah Mu'akkadah",
    cat: "fiqh",
    def: "Emphasized Sunnah practice that Prophet Muhammad ﷺ performed continuously and rarely abandoned, such as the two Rak'ahs before Fajr and four before Dhuhr.",
    ref: "Sahih Muslim #728; Sahih al-Bukhari #1180"
  },
  {
    term: "Mustahabb",
    ar: "مُسْتَحَبّ",
    tr: "Mustaḥabb",
    cat: "fiqh",
    def: "Recommended or virtuous action whose performance is rewarded by Allah, but whose omission incurs no sin or penalty (also termed Mandub or Nafilah).",
    ref: "Al-Mustasfa by Imam al-Ghazali; Usul al-Fiqh by Al-Amidi"
  },
  {
    term: "Makruh",
    ar: "مَكْرُوه",
    tr: "Makrūh",
    cat: "fiqh",
    def: "Disliked or detested action. Divided in Hanafi jurisprudence into Makruh Tanzihi (slightly disliked without sin) and Makruh Tahrimi (severely disliked, approaching Haram).",
    ref: "Al-Bahr ar-Ra'iq; Hashiyat Ibn Abidin"
  },
  {
    term: "Haram",
    ar: "حَرَام",
    tr: "Ḥarām",
    cat: "fiqh",
    def: "Strictly forbidden and prohibited by unambiguous divine scripture. Engaging in it earns sin and divine retribution, while refraining out of piety is divinely rewarded.",
    ref: "Surah Al-An'am 6:151; Sahih al-Bukhari #52"
  },
  {
    term: "Halal",
    ar: "حَلَال",
    tr: "Ḥalāl",
    cat: "fiqh",
    def: "Permissible, lawful, and wholesome in accordance with divine law, encompassing food, earnings, transactions, and lifestyle.",
    ref: "Surah Al-Baqarah 2:168; Sahih al-Bukhari #52"
  },
  {
    term: "Takbirat al-Ihram",
    ar: "تَكْبِيرَة الإِحْرَام",
    tr: "Takbīrat al-Iḥrām",
    cat: "fiqh",
    def: "The opening proclamation of 'Allahu Akbar' that officially commences the prayer, rendering all mundane worldly actions (speaking, eating, walking) temporarily prohibited.",
    ref: "Sunan Abi Dawud #618; Sahih Muslim #397"
  },
  {
    term: "Ruku'",
    ar: "رُكُوع",
    tr: "Rukū'",
    cat: "fiqh",
    def: "The bowing posture in prayer where the worshiper bends horizontally with hands grasping the knees, glorifying Allah with 'Subhana Rabbiyal-Azeem'.",
    ref: "Surah Al-Hajj 22:77; Sahih al-Bukhari #792"
  },
  {
    term: "Sujud",
    ar: "سُجُود",
    tr: "Sujūd",
    cat: "fiqh",
    def: "Prostration with seven bodily bones touching the earth (forehead/nose, two palms, two knees, two sets of toes), representing the closest state a servant reaches to Allah.",
    ref: "Sahih Muslim #482; Sahih al-Bukhari #812"
  },
  {
    term: "I'tidal",
    ar: "اعْتِدَال",
    tr: "I'tidāl",
    cat: "fiqh",
    def: "Standing completely upright with tranquility after rising from bowing (Ruku'), uttering 'Sami'allahu liman hamidah, Rabbana wa lakal-hamd'.",
    ref: "Sahih al-Bukhari #799; Sahih Muslim #477"
  },
  {
    term: "Tashahhud",
    ar: "تَشَهُّد",
    tr: "Tashahhud",
    cat: "fiqh",
    def: "The sitting recitation of greetings, peace upon the Prophet and righteous servants, and the dual testimony of faith at the conclusion of prayer.",
    ref: "Sahih al-Bukhari #831; Sahih Muslim #402"
  },
  {
    term: "Taslim",
    ar: "تَسْلِيم",
    tr: "Taslīm",
    cat: "fiqh",
    def: "The concluding salutation of prayer uttered turning the head right and left: 'As-Salamu 'alaykum wa rahmatullah', exiting the sacred state of Salah.",
    ref: "Sahih Muslim #582; Sunan Abi Dawud #996"
  },
  {
    term: "Istiwa'",
    ar: "اسْتِوَاء",
    tr: "Istiwā'",
    cat: "fiqh",
    def: "The exact solar zenith when the sun reaches its highest meridian in the sky. During this brief window (typically 5-10 minutes before true solar noon / Zawal), prayers are strictly prohibited.",
    ref: "Sahih Muslim #831; University of Islamic Sciences Karachi astronomical tables"
  },
  {
    term: "Zawal",
    ar: "زَوَال",
    tr: "Zawāl",
    cat: "fiqh",
    def: "The initial post-zenith declination of the sun past the local meridian toward the west, officially inaugurating the canonical entry of Dhuhr prayer time.",
    ref: "Surah Al-Isra 17:78; Sahih al-Bukhari #541"
  },
  {
    term: "Nisab",
    ar: "نِصَاب",
    tr: "Niṣāb",
    cat: "fiqh",
    def: "The minimum threshold of qualifying wealth one must possess above basic survival necessities for one full lunar year (Hawl) before mandatory Zakat becomes due. Defined as 87.48g gold or 612.36g silver.",
    ref: "Sahih al-Bukhari #1454; OIC Fiqh Academy Resolution #24"
  },
  {
    term: "Hawl",
    ar: "حَوْل",
    tr: "Ḥawl",
    cat: "fiqh",
    def: "The passage of one uninterrupted lunar year (approximately 354 days) during which wealth remains above the Nisab threshold, finalizing the liability for Zakat.",
    ref: "Sunan Abi Dawud #1573; Jami` at-Tirmidhi #631"
  },
  {
    term: "Zakat al-Fitr",
    ar: "زَكَاة الفِطْر",
    tr: "Zakāt al-Fiṭr",
    cat: "fiqh",
    def: "Mandatory charitable contribution of staple food (one Sa' / ~2.5-3kg grain or dates per household member) distributed to the poor before the Eid al-Fitr morning prayer to purify the fasting person.",
    ref: "Sahih al-Bukhari #1503; Sahih Muslim #984"
  },
  {
    term: "Sadaqah Jariyah",
    ar: "صَدَقَة جَارِيَة",
    tr: "Ṣadaqah Jāriyah",
    cat: "fiqh",
    def: "Continuous, recurring voluntary charity whose spiritual rewards perpetuate for the donor long after death, such as building wells, schools, mosques, or funding endowments.",
    ref: "Sahih Muslim #1631"
  },
  {
    term: "Sawm",
    ar: "صَوْم",
    tr: "Ṣawm",
    cat: "fiqh",
    def: "Fasting: complete abstinence from food, drink, marital relations, and sinful conduct from the true dawn (Fajr) until sunset (Maghrib), observed as the fourth pillar of Islam during Ramadan.",
    ref: "Surah Al-Baqarah 2:183-187; Sahih al-Bukhari #1891"
  },
  {
    term: "Iftar",
    ar: "إِفْطَار",
    tr: "Ifṭār",
    cat: "fiqh",
    def: "The meal eaten immediately at sunset to break the fast, traditionally initiated with fresh dates or water in accordance with the prophetic practice.",
    ref: "Sahih al-Bukhari #1957; Sunan Abi Dawud #2356"
  },
  {
    term: "Suhoor",
    ar: "سَحُور",
    tr: "Saḥūr",
    cat: "fiqh",
    def: "The blessed pre-dawn meal consumed before the inception of Fajr to fortify the fasting individual for the day's worship.",
    ref: "Sahih al-Bukhari #1908; Sahih Muslim #1095"
  },
  {
    term: "Itikaf",
    ar: "اعْتِكَاف",
    tr: "I'tikāf",
    cat: "fiqh",
    def: "Spiritual retreat in a mosque during the last ten nights of Ramadan, detaching from worldly engagements to engage exclusively in prayer, Quran recitation, and seeking Laylat al-Qadr.",
    ref: "Sahih al-Bukhari #2026; Sahih Muslim #1172"
  },
  {
    term: "Ihram",
    ar: "إِحْرَام",
    tr: "Iḥrām",
    cat: "fiqh",
    def: "The sacred ritual state entered into at designated boundary points (Miqat) for Hajj or Umrah, accompanied by specific garments (two unstitched white cloths for men) and prohibitions.",
    ref: "Sahih al-Bukhari #1542; Sahih Muslim #1177"
  },
  {
    term: "Tawaf",
    ar: "طَوَاف",
    tr: "Ṭawāf",
    cat: "fiqh",
    def: "Circumambulating the Holy Ka'bah counter-clockwise seven times, beginning and ending at the Black Stone (Hajar al-Aswad) with prayer and devotion.",
    ref: "Surah Al-Hajj 22:29; Sahih Muslim #1218"
  },
  {
    term: "Sa'i",
    ar: "سَعْي",
    tr: "Sa'y",
    cat: "fiqh",
    def: "The walking ritual of pacing seven laps between the historical hills of As-Safa and Al-Marwah in Makkah, commemorating Hajar's desperate search for water for infant Ismail.",
    ref: "Surah Al-Baqarah 2:158; Sahih al-Bukhari #1648"
  },
  {
    term: "Talbiyah",
    ar: "تَلْبِيَة",
    tr: "Talbiyah",
    cat: "fiqh",
    def: "The sacred chanted pilgrimage anthem declaring supreme submission to Allah: 'Labbayk Allahumma Labbayk...' (Here I am at Your service, O Allah, here I am...).",
    ref: "Sahih al-Bukhari #1549; Sahih Muslim #1184"
  },
  {
    term: "Wuquf",
    ar: "وُقُوف",
    tr: "Wuqūf",
    cat: "fiqh",
    def: "The supreme integral pillar of Hajj: standing on the plains of Arafat from solar noon to sunset on the 9th of Dhul-Hijjah engaged in tearful repentance and supplication.",
    ref: "Sunan at-Tirmidhi #889 ('Hajj is Arafah'); Sahih Muslim #1218"
  },
  {
    term: "Janazah",
    ar: "جَنَازَة",
    tr: "Janāzah",
    cat: "fiqh",
    def: "The communal funeral prayer (Fardh Kifayah) offered over a deceased Muslim, comprising four Takbirat without bowing or prostrating, seeking divine pardon for the deceased.",
    ref: "Sahih al-Bukhari #1325; Sahih Muslim #945"
  },

  // 3. Quranic Sciences
  {
    term: "Ayah",
    ar: "آيَة",
    tr: "Āyah",
    cat: "quran",
    def: "Literally a divine sign or miracle; technically an individual verse of the Holy Quran. The complete text of the Quran contains exactly 6,236 Ayahs according to the canonical Hafs/Kufic transmission.",
    ref: "Tanzil Project; Al-Itqan fi 'Ulum al-Qur'an by As-Suyuti"
  },
  {
    term: "Surah",
    ar: "سُورَة",
    tr: "Sūrah",
    cat: "quran",
    def: "A distinct chapter of the Holy Quran, beginning with Bismillah (except Surah At-Tawbah). The Quran comprises exactly 114 Surahs, from Al-Fatihah to An-Nas.",
    ref: "Sahih al-Bukhari #4987; Al-Burhan fi 'Ulum al-Qur'an by Az-Zarkashi"
  },
  {
    term: "Juz",
    ar: "جُزْء",
    tr: "Juz'",
    cat: "quran",
    def: "One of the thirty equal divisions of the Quranic text established to facilitate structured daily recitation and completion over thirty days (e.g. during Ramadan).",
    ref: "Sunan Abi Dawud #1393"
  },
  {
    term: "Hizb",
    ar: "حِزْب",
    tr: "Ḥizb",
    cat: "quran",
    def: "A subunit of the Quran; each of the 30 Juz is divided into two Ahzab (total 60 Ahzab across the Quran), further subdivided into quarters (Rub' al-Hizb).",
    ref: "Al-Itqan by As-Suyuti"
  },
  {
    term: "Makki",
    ar: "مَكِّي",
    tr: "Makkī",
    cat: "quran",
    def: "A Surah or passage revealed prior to the historical migration (Hijrah) to Madinah, characterized by emphasis on Tawheed, Day of Judgment, moral dignity, and stories of past prophets.",
    ref: "Al-Itqan by As-Suyuti; Tafsir Ibn Kathir"
  },
  {
    term: "Madani",
    ar: "مَدَنِي",
    tr: "Madanī",
    cat: "quran",
    def: "A Surah or passage revealed after the historical migration (Hijrah) to Madinah, emphasizing legislative rulings, civil governance, commercial ethics, treaties, and interfaith relations.",
    ref: "Al-Itqan by As-Suyuti; Al-Muharrar al-Wajiz by Ibn Atiyyah"
  },
  {
    term: "Asbab al-Nuzul",
    ar: "أَسْبَاب النُّزُول",
    tr: "Asbāb an-Nuzūl",
    cat: "quran",
    def: "The specific historical occasions, events, or inquiries in response to which particular verses or Surahs of the Holy Quran were revealed to Prophet Muhammad ﷺ.",
    ref: "Kitab Asbab al-Nuzul by Al-Wahidi; Lubab an-Nuqul by As-Suyuti"
  },
  {
    term: "Tafsir",
    ar: "تَفْسِير",
    tr: "Tafsīr",
    cat: "quran",
    def: "Exegesis and scholarly commentary on the Holy Quran, elucidating linguistic meanings, context of revelation, legal injunctions, and theological lessons.",
    ref: "Tafsir at-Tabari; Tafsir Ibn Kathir; Tafsir al-Qurtubi"
  },
  {
    term: "Tajweed",
    ar: "تَجْوِيد",
    tr: "Tajwīd",
    cat: "quran",
    def: "The science of articulate, correct Quranic recitation according to established rules of pronunciation, points of articulation (Makharij), and phonetic attributes (Sifat).",
    ref: "Surah Al-Muzzammil 73:4; Al-Muqaddimah al-Jazariyyah by Ibn al-Jazari"
  },
  {
    term: "Tartil",
    ar: "تَرْتِيل",
    tr: "Tartīl",
    cat: "quran",
    def: "Slow, measured, contemplative recitation of the Quran, giving each letter and pause its full due with reflection on the meanings.",
    ref: "Surah Al-Muzzammil 73:4; Sahih al-Bukhari #5046"
  },
  {
    term: "Qira'at",
    ar: "قِرَاءَات",
    tr: "Qirā'āt",
    cat: "quran",
    def: "The seven or ten canonical authentic methods of reciting the Quran transmitted with verified mass-chains (Tawatur) back to Prophet Muhammad ﷺ.",
    ref: "Kitab as-Sab'ah by Ibn Mujahid; An-Nashr fi al-Qira'at al-Ashr by Ibn al-Jazari"
  },
  {
    term: "Hafs 'an 'Asim",
    ar: "حَفْص عَنْ عَاصِم",
    tr: "Ḥafṣ 'an 'Āṣim",
    cat: "quran",
    def: "The most widely transmitted and printed canonical recitation (Qira'ah) of the Quran worldwide, transmitted by Hafs ibn Sulayman from his teacher Asim ibn Abi an-Nujud.",
    ref: "King Fahd Glorious Quran Printing Complex; Tanzil Standard"
  },
  {
    term: "Mushaf",
    ar: "مُصْحَف",
    tr: "Muṣḥaf",
    cat: "quran",
    def: "The physical written volume, codex, or manuscript containing the complete revealed Arabic text of the Holy Quran bound between two covers.",
    ref: "Sahih al-Bukhari #4986 (Compilation of Uthman RA)"
  },
  {
    term: "Muhkam",
    ar: "مُحْكَم",
    tr: "Muḥkam",
    cat: "quran",
    def: "Clear, decisive, unambiguous verses of the Quran whose legal meanings and directives are plain and undisputed, serving as the foundational mother of the Book (Umm al-Kitab).",
    ref: "Surah Ali 'Imran 3:7"
  },
  {
    term: "Mutashabih",
    ar: "مُتَشَابِه",
    tr: "Mutashābih",
    cat: "quran",
    def: "Allegorical or intricate verses whose absolute reality is known fully only to Allah (such as the disjointed letters or specific descriptions of the unseen).",
    ref: "Surah Ali 'Imran 3:7"
  },
  {
    term: "Sajdat at-Tilawah",
    ar: "سَجْدَة التِّلَاوَة",
    tr: "Sajdat at-Tilāwah",
    cat: "quran",
    def: "The prostration of recitation performed upon reading or hearing any of the 14 or 15 designated verses of prostration in the Holy Quran.",
    ref: "Sahih Muslim #81; Sahih al-Bukhari #1077"
  },

  // 4. Hadith Sciences
  {
    term: "Hadith",
    ar: "حَدِيث",
    tr: "Ḥadīth",
    cat: "hadith",
    def: "Any reported statement, action, tacit approval, or physical and moral description attributed directly to Prophet Muhammad ﷺ.",
    ref: "Muqaddimah Ibn as-Salah; Tadrib ar-Rawi by As-Suyuti"
  },
  {
    term: "Sunnah",
    ar: "سُنَّة",
    tr: "Sunnah",
    cat: "hadith",
    def: "The normative established lifestyle, teachings, spiritual practice, and jurisprudential precedent of Prophet Muhammad ﷺ, serving as the secondary primary source of Islam after the Quran.",
    ref: "Surah Al-Hashr 59:7; Sunan Abi Dawud #4607"
  },
  {
    term: "Isnad",
    ar: "إِسْنَاد",
    tr: "Isnād",
    cat: "hadith",
    def: "The unbroken chain of authenticated transmitters (narrators) through whom a Hadith tradition has been conveyed generation by generation from the Prophet ﷺ.",
    ref: "Sahih Muslim Introduction (Imam Ibn al-Mubarak: 'The Isnad is from the religion')"
  },
  {
    term: "Matn",
    ar: "مَتْن",
    tr: "Matn",
    cat: "hadith",
    def: "The actual textual content, words, and substance of a Hadith narration that follows the chain of narration (Isnad).",
    ref: "Nukhbat al-Fikar by Ibn Hajar al-Asqalani"
  },
  {
    term: "Sahih",
    ar: "صَحِيح",
    tr: "Ṣaḥīḥ",
    cat: "hadith",
    def: "Authentic, rigorously verified Hadith whose chain is continuous through upright, precise, trustworthy narrators without hidden defects ('Illah) or conflict with more reliable narrations (Shudhudh).",
    ref: "Muqaddimah Ibn as-Salah; Sahih al-Bukhari & Sahih Muslim"
  },
  {
    term: "Hasan",
    ar: "حَسَن",
    tr: "Ḥasan",
    cat: "hadith",
    def: "A sound Hadith that meets the conditions of Sahih but whose transmitters have slightly lesser memory precision, legally valid for establishing Islamic rulings.",
    ref: "Jami` at-Tirmidhi; Nukhbat al-Fikar by Ibn Hajar"
  },
  {
    term: "Da'if",
    ar: "ضَعِيف",
    tr: "Ḍa'īf",
    cat: "hadith",
    def: "A weak Hadith that fails to satisfy the criteria of Sahih or Hasan due to a broken chain, poor memory of a narrator, or suspect reliability; not acceptable for primary creedal or legal proof.",
    ref: "Tadrib ar-Rawi; Fath al-Mughith by As-Sakhawi"
  },
  {
    term: "Mawdu'",
    ar: "مَوْضُوع",
    tr: "Mawḍū'",
    cat: "hadith",
    def: "A completely fabricated, forged Hadith falsely attributed to the Prophet ﷺ; strictly prohibited to narrate except when warning people against its falsehood.",
    ref: "Sahih Muslim Introduction ('Whoever narrates from me a tradition seeing that it is a lie is one of the liars')"
  },
  {
    term: "Mutawatir",
    ar: "مُتَوَاتِر",
    tr: "Mutawātir",
    cat: "hadith",
    def: "A narration transmitted by so many independent trustworthy narrators in every generation that it is logically and customarily impossible for them to have colluded in a fabrication, yielding certainty of knowledge.",
    ref: "Nuzhat an-Nazar by Ibn Hajar al-Asqalani"
  },
  {
    term: "Ahad",
    ar: "آحَاد",
    tr: "Āḥād",
    cat: "hadith",
    def: "Solitary narrations that do not reach the threshold of Mutawatir, categorized into Mashhur (famous), Aziz (conveyed by two narrators), and Gharib (conveyed by one).",
    ref: "Nukhbat al-Fikar"
  },
  {
    term: "Marfu'",
    ar: "مَرْفُوع",
    tr: "Marfū'",
    cat: "hadith",
    def: "A narration whose text is explicitly traced and elevated directly to Prophet Muhammad ﷺ, whether through statement, action, or tacit approval.",
    ref: "Al-Ba'ith al-Hathith by Ahmad Shakir"
  },
  {
    term: "Mawquf",
    ar: "مَوْقُوف",
    tr: "Mawqūf",
    cat: "hadith",
    def: "A narration whose chain terminates at a Companion (Sahabi) of the Prophet ﷺ, conveying their statement, ruling, or action.",
    ref: "Muqaddimah Ibn as-Salah"
  },
  {
    term: "Kutub al-Sittah",
    ar: "الكُتُب السِّتَّة",
    tr: "Al-Kutub as-Sittah",
    cat: "hadith",
    def: "The six canonical classical Hadith collections: Sahih al-Bukhari, Sahih Muslim, Sunan Abi Dawud, Jami` at-Tirmidhi, Sunan an-Nasa'i, and Sunan Ibn Majah.",
    ref: "Tahdhib al-Kamal by Al-Mizzi; Siyar A'lam an-Nubala"
  },
  {
    term: "Jarh wa Ta'dil",
    ar: "جَرْح وَتَعْدِيل",
    tr: "Jarḥ wa-Ta'dīl",
    cat: "hadith",
    def: "The science of narrator evaluation and biographical critique: examining the moral uprightness ('Adalah) and memory accuracy (Dabt) of Hadith transmitters.",
    ref: "Kitab al-Jarh wa at-Ta'dil by Ibn Abi Hatim ar-Razi"
  },
  {
    term: "Bid'ah",
    ar: "بِدْعَة",
    tr: "Bid'ah",
    cat: "hadith",
    def: "In religious terminology, an invented novelty or modification introduced into the sacred creed, ritual worship, or Deen without foundation from the Quran or authentic Sunnah.",
    ref: "Sahih Muslim #867; Sahih al-Bukhari #2697"
  },

  // 5. Ethics, Spirituality & Character (Akhlaq & Tazkiyah)
  {
    term: "Tazkiyah",
    ar: "تَزْكِيَة",
    tr: "Tazkiyah",
    cat: "character",
    def: "Spiritual purification of the soul (Nafs) from vices such as arrogance, envy, greed, and malice, adorning it with virtue, love of Allah, and moral excellence.",
    ref: "Surah Ash-Shams 91:9-10; Ihya' 'Ulum al-Din by Imam al-Ghazali"
  },
  {
    term: "Taqwa",
    ar: "تَقْوَى",
    tr: "Taqwā",
    cat: "character",
    def: "God-consciousness, piety, and protective reverence. Described by Ali (RA) as: 'Fearing the Almighty, acting upon divine revelation, being content with little, and preparing for the Day of Departure.'",
    ref: "Surah Al-Baqarah 2:197; Surah Al-Hujurat 49:13"
  },
  {
    term: "Ikhlas",
    ar: "إِخْلَاص",
    tr: "Ikhlāṣ",
    cat: "character",
    def: "Purity of intention, directing every act of devotion, charity, and righteous living solely to attain the pleasure of Allah, completely free of ostentation (Riya') or self-praise.",
    ref: "Surah Al-Bayyinah 98:5; Madarij as-Salikin by Ibn al-Qayyim"
  },
  {
    term: "Sabr",
    ar: "صَبْر",
    tr: "Ṣabr",
    cat: "character",
    def: "Patience and spiritual steadfastness across three domains: patience in performing obligatory obedience, patience in abstaining from forbidden temptations, and patience in accepting difficult divine decrees.",
    ref: "Surah Al-Baqarah 2:155-156; Sahih al-Bukhari #1469"
  },
  {
    term: "Shukr",
    ar: "شُكْر",
    tr: "Shukr",
    cat: "character",
    def: "Active gratitude to Allah expressed with the heart (recognizing blessings), the tongue (praising the Giver), and the limbs (employing blessings exclusively in righteous channels).",
    ref: "Surah Ibrahim 14:7; Surah Luqman 31:12"
  },
  {
    term: "Sidq",
    ar: "صِدْق",
    tr: "Ṣidq",
    cat: "character",
    def: "Truthfulness and integrity in speech, actions, intentions, and commitments, serving as the foundational rock of prophetic character.",
    ref: "Surah At-Tawbah 9:119; Sahih al-Bukhari #6094"
  },
  {
    term: "Haya'",
    ar: "حَيَاء",
    tr: "Ḥayā'",
    cat: "character",
    def: "Sacred modesty, spiritual shame, and moral self-respect that recoils from indecency and unseemly behavior. Proclaimed by the Prophet ﷺ as: 'A core branch of faith.'",
    ref: "Sahih al-Bukhari #9; Sahih Muslim #35"
  },
  {
    term: "Rahmah",
    ar: "رَحْمَة",
    tr: "Raḥmah",
    cat: "character",
    def: "Compassion, mercy, and loving-kindness demonstrated universally toward all creation: human beings, family members, orphans, the poor, and animals.",
    ref: "Surah Al-Anbiya 21:107; Sunan Abi Dawud #4941"
  },
  {
    term: "Amanah",
    ar: "أَمَانَة",
    tr: "Amānah",
    cat: "character",
    def: "Sacred trustworthiness and accountability regarding deposits, confidences, duties, contracts, and moral covenants entrusted to a human being.",
    ref: "Surah Al-Anfal 8:27; Sahih al-Bukhari #6496"
  },
  {
    term: "Silat ar-Rahim",
    ar: "صِلَة الرَّحِم",
    tr: "Ṣilat ar-Raḥim",
    cat: "character",
    def: "Upholding and honoring the sacred ties of kinship, proactively maintaining warm relations with parents, siblings, and extended family even when they fall short.",
    ref: "Sahih al-Bukhari #5984, 5986; Sahih Muslim #2556"
  },
  {
    term: "Kibr",
    ar: "كِبْر",
    tr: "Kibr",
    cat: "character",
    def: "Arrogance and haughtiness. Defined by the Prophet ﷺ as: 'Rejecting the truth and looking down upon people with contempt.'",
    ref: "Sahih Muslim #140"
  },
  {
    term: "Hasad",
    ar: "حَسَد",
    tr: "Ḥasad",
    cat: "character",
    def: "Destructive envy: wishing that a blessing bestowed by Allah upon another person be removed or ruined. Contrasted with Ghibtah (noble aspiration without ill will).",
    ref: "Sunan Abi Dawud #4903; Sahih al-Bukhari #73"
  },
  {
    term: "Riya'",
    ar: "رِيَاء",
    tr: "Riyā'",
    cat: "character",
    def: "Ostentation and performing acts of righteous worship to impress, please, or be praised by people rather than seeking the sole pleasure of Allah.",
    ref: "Surah Al-Ma'un 107:4-6; Sahih Muslim #2985"
  },
  {
    term: "Zuhd",
    ar: "زُهْد",
    tr: "Zuhd",
    cat: "character",
    def: "Spiritual asceticism and detachment: maintaining worldly wealth in one's hand rather than letting it control one's heart, focusing ultimate longing upon the eternal Hereafter.",
    ref: "Sunan Ibn Majah #4102; Jami` at-Tirmidhi #2340"
  },
  {
    term: "Wara'",
    ar: "وَرَع",
    tr: "Wara'",
    cat: "character",
    def: "Scrupulous piety: leaving aside doubtful or ambiguous matters out of caution to protect oneself from falling into what is unlawful.",
    ref: "Sahih al-Bukhari #52; Jami` at-Tirmidhi #2518"
  },
  {
    term: "Muraqabah",
    ar: "مُرَاقَبَة",
    tr: "Murāqabah",
    cat: "character",
    def: "Continuous inner spiritual vigilance: maintaining perpetual awareness of Allah's watchful presence over one's private thoughts, speech, and conduct.",
    ref: "Surah An-Nisa 4:1; Madarij as-Salikin by Ibn al-Qayyim"
  },
  {
    term: "Muhasabah",
    ar: "مُحَاسَبَة",
    tr: "Muḥāsabah",
    cat: "character",
    def: "Daily spiritual self-examination. Umar (RA) famously instructed: 'Hold yourselves to account before you are held to account, and weigh your deeds before they are weighed.'",
    ref: "Jami` at-Tirmidhi #2459"
  },
  {
    term: "Hilam",
    ar: "حِلْم",
    tr: "Ḥilm",
    cat: "character",
    def: "Gentle forbearance, magnanimity, and emotional calmness when provoked, restraining impulses of vengeful anger.",
    ref: "Sahih Muslim #17; Sunan Abi Dawud #4798"
  },
  {
    term: "Afw",
    ar: "عَفْو",
    tr: "'Afw",
    cat: "character",
    def: "Pardoning and wiping away the offenses of others when one has the full power to retaliate, following the divine model of Allah al-'Afuww.",
    ref: "Surah Ali 'Imran 3:134; Sahih al-Bukhari #6104"
  },
  {
    term: "Adab",
    ar: "أَدَب",
    tr: "Adab",
    cat: "character",
    def: "Exquisite spiritual etiquette, refined manners, propriety, and respect shown toward Allah, the Prophet ﷺ, parents, scholars, and fellow human beings.",
    ref: "Al-Adab al-Mufrad by Imam al-Bukhari; Risalat al-Mustarshidin"
  }
,
  {
  "term": "Mala'ikah",
  "ar": "مَلَائِكَة",
  "tr": "Malā'ikah",
  "cat": "creed",
  "def": "The angels of Allah created from light (Noor), possessing no free will to disobey, dedicated perpetually to executing divine commands (e.g. Jibril, Mika'il, Israfil, Malak al-Mawt).",
  "ref": "Surah Al-Baqarah 2:285; Sahih Muslim #2996"
},
  {
  "term": "Kutub",
  "ar": "كُتُب",
  "tr": "Kutub",
  "cat": "creed",
  "def": "The revealed divine scriptures sent down to prophets, including the Suhuf of Ibrahim, Tawrat of Musa, Zabur of Dawud, Injeel of Isa, and the Holy Quran as the final protected revelation.",
  "ref": "Surah An-Nisa 4:136; Surah Al-A'la 87:18-19"
},
  {
  "term": "Rusul",
  "ar": "رُسُل",
  "tr": "Rusul",
  "cat": "creed",
  "def": "The Messengers of Allah: human men chosen by divine election to convey divine law, guidance, and scripture to humanity, from Adam to Muhammad ﷺ.",
  "ref": "Surah An-Nisa 4:163-165; Surah Al-Baqarah 2:285"
},
  {
  "term": "Jannah",
  "ar": "جَنَّة",
  "tr": "Jannah",
  "cat": "creed",
  "def": "The eternal celestial Gardens of Paradise prepared for the righteous believers, containing delights that no eye has ever seen, no ear has ever heard, and no human heart has ever conceived.",
  "ref": "Surah As-Sajdah 32:17; Sahih al-Bukhari #4779"
},
  {
  "term": "Jahannam",
  "ar": "جَهَنَّم",
  "tr": "Jahannam",
  "cat": "creed",
  "def": "Hellfire: the eternal abode of divine punishment prepared for obstinate disbelievers and tyrants, featuring intense fires, darkness, and anguish.",
  "ref": "Surah Al-Mulk 67:6-8; Sahih Muslim #2843"
},
  {
  "term": "Hisab",
  "ar": "حِسَاب",
  "tr": "Ḥisāb",
  "cat": "creed",
  "def": "The universal divine reckoning and accountability on the Day of Judgment when each individual's record of deeds is presented.",
  "ref": "Surah Al-Inshiqaq 84:7-8; Sahih al-Bukhari #6536"
},
  {
  "term": "Kaffarah",
  "ar": "كَفَّارَة",
  "tr": "Kaffārah",
  "cat": "fiqh",
  "def": "Prescribed religious expiation required to rectify an intentional violation, such as breaking an oath, deliberately breaking a Ramadan fast without excuse, or accidental manslaughter.",
  "ref": "Surah Al-Ma'idah 5:89; Sahih al-Bukhari #1936"
},
  {
  "term": "Fidyah",
  "ar": "فِدْيَة",
  "tr": "Fidyah",
  "cat": "fiqh",
  "def": "Compensation paid by individuals permanently unable to fast due to chronic illness or frail old age, feeding one poor person per day of missed fasting.",
  "ref": "Surah Al-Baqarah 2:184; Sahih al-Bukhari #4505"
},
  {
  "term": "Tahajjud",
  "ar": "تَهَجُّد",
  "tr": "Tahajjud",
  "cat": "fiqh",
  "def": "Voluntary night prayer offered after waking from sleep during the final third of the night (Qiyam al-Layl), recognized as the most virtuous prayer after the obligatory prayers.",
  "ref": "Surah Al-Isra 17:79; Sahih Muslim #758"
},
  {
  "term": "Witr",
  "ar": "وِتْر",
  "tr": "Witr",
  "cat": "fiqh",
  "def": "The odd-numbered prayer (typically 1 or 3 Rak'ahs) offered at the close of the night following Isha, containing the special Dua al-Qunut.",
  "ref": "Sahih al-Bukhari #998; Sahih Muslim #749"
},
  {
  "term": "Duha",
  "ar": "ضُحَى",
  "tr": "Ḍuḥā",
  "cat": "fiqh",
  "def": "The forenoon voluntary prayer (2 to 8 Rak'ahs) performed when the sun has risen well above the horizon until before zenith, fulfilling the daily charity due upon all 360 bodily joints.",
  "ref": "Sahih Muslim #720; Sahih al-Bukhari #1178"
},
  {
  "term": "Tarawih",
  "ar": "تَرَاوِيح",
  "tr": "Tarāwīḥ",
  "cat": "fiqh",
  "def": "The special voluntary congregational night prayers offered in pairs of Rak'ahs throughout the blessed month of Ramadan following the Isha prayer.",
  "ref": "Sahih al-Bukhari #2010; Sahih Muslim #759"
},
  {
  "term": "Khutbah",
  "ar": "خُطْبَة",
  "tr": "Khuṭbah",
  "cat": "fiqh",
  "def": "The formal Islamic sermon delivered by the Imam or Khatib prior to the Friday (Jumu'ah) prayer, and following the Eid prayers, reminding listeners of piety and civic virtue.",
  "ref": "Sahih al-Bukhari #920; Sahih Muslim #867"
},
  {
  "term": "Adhan",
  "ar": "أَذَان",
  "tr": "Adhān",
  "cat": "fiqh",
  "def": "The formal public call to prayer proclaimed by the Mu'adh-dhin from the mosque to notify the community of the entry of canonical prayer time.",
  "ref": "Sahih al-Bukhari #604; Sahih Muslim #377"
},
  {
  "term": "Iqamah",
  "ar": "إِقَامَة",
  "tr": "Iqāmah",
  "cat": "fiqh",
  "def": "The secondary call proclaimed immediately inside the prayer hall signaling the immediate alignment of rows and commencement of congregational prayer.",
  "ref": "Sahih al-Bukhari #605; Sahih Muslim #379"
},
  {
  "term": "Imam",
  "ar": "إِمَام",
  "tr": "Imām",
  "cat": "fiqh",
  "def": "The religious leader who stands at the front to lead the congregation in prayer, or more broadly a recognized scholarly authority in Islamic jurisprudence.",
  "ref": "Sahih al-Bukhari #689; Sahih Muslim #411"
},
  {
  "term": "Ma'moom",
  "ar": "مَأْمُوم",
  "tr": "Ma'mūm",
  "cat": "fiqh",
  "def": "The individual worshiper standing in the congregation who follows the lead and postures of the Imam during prayer.",
  "ref": "Sahih al-Bukhari #690"
},
  {
  "term": "Awrah",
  "ar": "عَوْرَة",
  "tr": "'Awrah",
  "cat": "fiqh",
  "def": "The parts of the body that are legally obligatory to conceal from public view and during prayer: for men, conventionally from the navel to the knees; for women, the entire body except face and hands.",
  "ref": "Surah An-Nur 24:31; Sunan Abi Dawud #4104"
},
  {
  "term": "Taharah",
  "ar": "طَهَارَة",
  "tr": "Ṭahārah",
  "cat": "fiqh",
  "def": "Physical and ritual purification from physical filth (Najasah) and spiritual states of impurity (Hadath), representing the indispensable prerequisite for prayer.",
  "ref": "Sahih Muslim #223; Bidayat al-Mujtahid by Ibn Rushd"
},
  {
  "term": "Najasah",
  "ar": "نَجَاسَة",
  "tr": "Najāsah",
  "cat": "fiqh",
  "def": "Ritual filth or impurity (e.g. blood, urine, swine, intoxicants) that must be physically washed off the body, garments, and prayer area before Salah.",
  "ref": "Surah Al-Muddaththir 74:4; Sahih al-Bukhari #227"
},
  {
  "term": "Kafan",
  "ar": "كَفَن",
  "tr": "Kafan",
  "cat": "fiqh",
  "def": "The simple, unstitched white shroud (traditionally three sheets for men, five for women) used to wrap the washed deceased body prior to burial.",
  "ref": "Sahih al-Bukhari #1264; Sahih Muslim #943"
},
  {
  "term": "Ramy",
  "ar": "رَمْي",
  "tr": "Ramy",
  "cat": "fiqh",
  "def": "The Hajj ritual of stoning the three pillars (Jamarat) in Mina with seven pebbles each, commemorating Prophet Ibrahim's rejection of Satan's temptations.",
  "ref": "Sahih Muslim #1218; Sahih al-Bukhari #1751"
},
  {
  "term": "Muzdalifah",
  "ar": "مُزْدَلِفَة",
  "tr": "Muzdalifah",
  "cat": "fiqh",
  "def": "The sacred open plain between Arafat and Mina where Hajj pilgrims spend the night of the 10th of Dhul-Hijjah under the open sky and collect pebbles.",
  "ref": "Surah Al-Baqarah 2:198; Sahih Muslim #1218"
},
  {
  "term": "Mina",
  "ar": "مِنَى",
  "tr": "Minā",
  "cat": "fiqh",
  "def": "The historic valley of tents outside Makkah where pilgrims spend the Days of Tashreeq (10th-13th of Dhul-Hijjah) performing sacrifices and stoning the Jamarat.",
  "ref": "Sahih al-Bukhari #1742; Sahih Muslim #1218"
},
  {
  "term": "Ukhuwwah",
  "ar": "أُخُوَّة",
  "tr": "Ukhuwwah",
  "cat": "character",
  "def": "The sacred bond of Islamic brotherhood and sisterhood transcending all ethnic, national, racial, and socioeconomic divides.",
  "ref": "Surah Al-Hujurat 49:10; Sahih al-Bukhari #6011"
},
  {
  "term": "Khuluq Hasan",
  "ar": "خُلُق حَسَن",
  "tr": "Khuluq Ḥasan",
  "cat": "character",
  "def": "Noble moral character, gentle speech, benevolence, and forbearance, which weighs heaviest upon the cosmic Scale on the Day of Judgment.",
  "ref": "Jami` at-Tirmidhi #2003; Sahih al-Bukhari #6035"
},
  {
  "term": "Muqatta'at",
  "ar": "مُقَطَّعَات",
  "tr": "Muqaṭṭa'āt",
  "cat": "quran",
  "def": "The disjointed, mystical Arabic letters appearing at the beginning of 29 Surahs of the Holy Quran (e.g. Alif-Lam-Mim, Ha-Mim, Ya-Sin), symbolizing the divine inimitable miracle of the Quran.",
  "ref": "Tafsir Ibn Kathir 1/157; Al-Itqan by As-Suyuti"
}
];

console.log(`GLOSSARY_TERMS defined: ${GLOSSARY_TERMS.length} terms.`);
module.exports = GLOSSARY_TERMS;
