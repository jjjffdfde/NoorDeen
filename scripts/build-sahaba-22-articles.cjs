const fs = require('fs');

const sahabaFile = 'public/sahaba.html';
let html = fs.readFileSync(sahabaFile, 'utf8');

const companions = [
  {
    id: 'hamzah',
    category: 'stalwarts',
    badge: 'Stalwarts of Sacrifice • The Lion of Allah',
    nameAr: 'حمزة بن عبد المطلب رضي الله عنه',
    nameEn: "Hamzah ibn Abdul Muttalib (رضي الله عنه)",
    readTime: '6 min read',
    subTitle: "Asadullah wa Asadu Rasoolih • Chief of the Martyrs (Sayyid al-Shuhada) • 54 BH – 3 AH / 570 – 625 CE",
    p1: "Hamzah ibn Abdul Muttalib ibn Hashim, paternal uncle and foster brother of the Prophet Muhammad ﷺ, was revered throughout Arabia as a legendary huntsman, peerless swordsman, and champion of Quraysh. Two years elder than the Prophet, Hamzah spent his youth mastering horsemanship and hunting lions in the rocky ravines surrounding Makkah, aloof from tribal partisan politics.",
    p2: "His entry into Islam in 615 CE was an epochal watershed. Returning from a desert hunt with his bow slung over his shoulder, a servant-maid informed him that Abu Jahl had vilely insulted, cursed, and reviled his nephew Muhammad ﷺ at Mount Safa. Enraged by this cowardly abuse of his kinsman, Hamzah strode into the Ka'bah courtyard where the Makkan nobility sat, struck Abu Jahl across the face with his bow, breaking his skull, and roared: 'Will you insult him when I follow his religion and say what he says? Strike me back if you dare!' The noble declaration shook pagan Quraysh to its core; from that day onward, Islam gained a towering shield of physical and moral protection.",
    p3: "At the Battle of Badr (2 AH), Hamzah fought with two swords, sporting an ostrich feather in his turban as his personal battle insignia. He defeated the pagan champions Shaybah ibn Rabi'ah and Tu'aymah ibn Adiyy in single combat, spearheading the historic breakthrough. A year later at the Battle of Uhud (3 AH), Jubayr ibn Mut'im hired the Ethiopian slave Wahshi ibn Harb to assassinate Hamzah in exchange for his freedom, under the direction of Hind bint Utbah whose father Utbah had fallen at Badr.",
    p4: "During the zenith of the battle, as Hamzah cut down enemy fighters like a raging lion, Wahshi concealed himself behind a boulder and hurled his javelin with deadly precision. It struck Hamzah in his lower abdomen and pierced through his back. Hind and pagan women mutilated his body on the field. When the Prophet ﷺ arrived and saw the disfigured body of his beloved uncle, he wept so bitterly that he gasped for breath, declaring: 'May Allah have mercy upon you, O Hamzah! You were foremost in keeping ties of kinship and doing righteous deeds. Jibril came to me and informed me: Hamzah is inscribed among the inhabitants of the seven heavens as Asadullah wa Asadu Rasoolih (The Lion of Allah and the Lion of His Messenger)!'",
    quote: '"The Chief of the Martyrs on the Day of Resurrection is Hamzah ibn Abdul Muttalib, and a man who stood before an unjust tyrant, commanding good and forbidding evil, and was killed for it." — Prophet Muhammad ﷺ (Al-Mustadrak al-Hakim #4884)',
    crossRefAr: 'مِّنَ الْمُؤْمِنِينَ رِجَالٌ صَدَقُوا مَا عَاهَدُوا اللَّهَ عَلَيْهِ',
    crossRefEn: '"Among the believers are men true to what they promised Allah. Among them is he who has fulfilled his vow..." (Surah Al-Ahzab 33:23)',
    crossRefCtx: 'Recited over the martyrs of Uhud, foremost among whom was Hamzah ibn Abdul Muttalib, buried in a single shroud with his nephew Abdullah ibn Jahsh.',
    achievements: [
      "Known as Asadullah (The Lion of Allah) and Sayyid al-Shuhada (Chief of Martyrs)",
      "His conversion provided decisive protection to early Muslims during Makkan persecution",
      "Premier combatant at Badr who defeated leading pagan champions in single combat",
      "Martyred at Uhud defending the Messenger of Allah; buried at the foot of Mount Uhud"
    ],
    sources: "Sahih al-Bukhari #4072; Sahih Muslim #1788; Al-Mustadrak #4884; Siyar A'lam an-Nubala 1/172–177; Ibn Hisham 1/312–315.",
    badgeVer: "✓ Verified: Sahih Consensus"
  },
  {
    id: 'jafar',
    category: 'stalwarts',
    badge: 'Stalwarts of Sacrifice • The One with Two Wings',
    nameAr: 'جعفر بن أبي طالب رضي الله عنه',
    nameEn: "Ja'far ibn Abi Talib (رضي الله عنه)",
    readTime: '6 min read',
    subTitle: "Dhu al-Janahayn (The Two-Winged) • Abu al-Masakeen • Martyr of Mu'tah • 34 BH – 8 AH / 589 – 629 CE",
    p1: "Ja'far ibn Abi Talib, elder brother of Ali ibn Abi Talib and first cousin of the Prophet ﷺ, bore an extraordinary physical and moral likeness to the Messenger of Allah. The Prophet ﷺ famously affirmed to him: 'You resemble me in both my physical appearance and my noble character' (Ashbahta khalqi wa khuluqi).",
    p2: "Ja'far was appointed by the Prophet as the leader and supreme spokesman for the eighty-plus Muslim emigrants to the Christian Kingdom of Aksum (Abyssinia) in 615 CE. When the Makkan delegation led by Amr ibn al-Aas arrived at King Negus's (al-Najashi) court demanding the extradition of the fugitives, Ja'far stood before the emperor and delivered one of the most eloquent discourses in human history: 'O King, we were a people steeped in ignorance, worshiping idols, eating carrion, committing lewdness, severing ties of kinship, and the strong among us devoured the weak. Until Allah sent to us a Messenger whose lineage, truthfulness, trustworthiness, and chastity we knew...'",
    p3: "When the King inquired about their beliefs concerning Jesus, Ja'far recited from the opening of Surah Maryam with such profound beauty and spiritual majesty that King Negus and his bishops wept until their beards were soaked with tears. Negus declared: 'Verily, this message and what Jesus brought radiate from the exact same lamp of divine light!' and granted the Muslims perpetual imperial asylum.",
    p4: "After fourteen years in Abyssinia, Ja'far arrived in Madinah in 7 AH coinciding with the conquest of Khaybar. The Prophet ﷺ embraced him, kissed him between the eyes, and cried out in joy: 'By Allah, I do not know which brings me greater joy: the conquest of Khaybar or the arrival of Ja'far!' In 8 AH at the Battle of Mu'tah against the Byzantine empire, Ja'far took the banner after Zayd fell. Enemy swords severed his right arm; he seized the banner with his left arm; they severed his left arm, so he clasped the standard between his bleeding upper arms until he fell with over ninety frontal wounds. The Prophet reported to his companions: 'I saw Ja'far flying in Paradise with two emerald wings alongside the angels.'",
    quote: '"I saw Ja\'far flying in Paradise with the noble angels, having two wings stained with ruby blood." — Prophet Muhammad ﷺ (Sahih al-Bukhari #3709)',
    crossRefAr: 'إِنَّمَا الْمَسِيحُ عِيسَى ابْنُ مَرْيَمَ رَسُولُ اللَّهِ وَكَلِمَتُهُ أَلْقَاهَا إِلَىٰ مَرْيَمَ',
    crossRefEn: '"The Messiah, Jesus, the son of Mary, was but a messenger of Allah and His word which He directed to Mary..." (Surah An-Nisa 4:171)',
    crossRefCtx: 'The exact theological baseline presented by Ja\'far ibn Abi Talib to King Negus, securing historical diplomatic sanctuary for Islam.',
    achievements: [
      "Leader and spokesman of the first two historic migrations to Abyssinia",
      "Delivered the historic diplomatic defense of monotheism before the Christian court of Negus",
      "Known as Abu al-Masakeen (Father of the Needy) for his boundless personal generosity",
      "Honored as Dhu al-Janahayn (The Two-Winged) following his heroic martyrdom at Mu'tah"
    ],
    sources: "Sahih al-Bukhari #3709, #4261; Sahih Muslim #1780; Al-Isabah #1178; Siyar A'lam an-Nubala 1/206–218; Ibn Hisham 1/334–338.",
    badgeVer: "✓ Verified: Muttafaqun 'Alayh"
  },
  {
    id: 'ubayy-ibn-kab',
    category: 'scholars',
    badge: 'Scholars & Jurists • Master of the Reciters',
    nameAr: 'أبي بن كعب رضي الله عنه',
    nameEn: "Ubayy ibn Ka'b (رضي الله عنه)",
    readTime: '6 min read',
    subTitle: "Sayyid al-Qurra' • Master Scribe of Revelation • Chieftain of Ansar • Abu al-Mundhir • d. 30 AH / 651 CE",
    p1: "Ubayy ibn Ka'b ibn Qays of the Banu Najjar clan of the Khazraj in Madinah was one of the foremost intellectual luminaries in the history of Islamic civilization. Revered by the Prophet Muhammad ﷺ as Sayyid al-Qurra' (Master of the Reciters of the Holy Quran), Ubayy was one of the very few Medinan companions who was fully literate before Islam.",
    p2: "Ubayy served as the primary scribe of divine revelation in Madinah, recording Ayahs as they descended from the heavens. In an extraordinary event recorded in Sahih al-Bukhari #4960, the Prophet ﷺ approached Ubayy and said: 'Verily, Allah has commanded me to recite the Quran to you!' Ubayy, trembling with awe, asked: 'Did Allah mention me to you by name?!' The Prophet ﷺ replied: 'Yes, Allah mentioned you by your specific name!' Upon hearing that the Lord of the worlds had spoken his individual name in the highest heavens, Ubayy broke into uncontrollable tears of devotion.",
    p3: "The Prophet ﷺ tested Ubayy's deep comprehension of the Quran, asking him: 'O Abu al-Mundhir, do you know which verse of the Book of Allah is the greatest?' Ubayy responded: 'Allahu la ilaha illa Huwa al-Hayyul-Qayyum (Ayat al-Kursi, Surah Al-Baqarah 2:255).' The Prophet patted Ubayy's chest in delight and prayed: 'May knowledge be pleasurable for you, O Abu al-Mundhir!' (Li-yahnikal-'ilmu Aba al-Mundhir).",
    p4: "During the caliphate of Umar ibn al-Khattab (RA), when the Caliph organized the congregational Tarawih prayers in the Prophet's Mosque in 14 AH, he appointed Ubayy ibn Ka'b as the supreme Imam to lead the entire community of believers. Ubayy also served on the elite Quranic collation council under Caliph Uthman (RA), ensuring that every vowel and consonant of the divine text matched the pristine revelation heard from the mouth of the Messenger.",
    quote: '"The most merciful of my Ummah is Abu Bakr, the firmest in Allah\'s cause is Umar, the most truthful in modesty is Uthman, and the master reciter among them is Ubayy ibn Ka\'b." — Prophet Muhammad ﷺ (Sunan al-Tirmidhi #3790)',
    crossRefAr: 'اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ',
    crossRefEn: '"Allah - there is no deity except Him, the Ever-Living, the Sustainer of all existence. Neither drowsiness overtakes Him nor sleep..." (Surah Al-Baqarah 2:255)',
    crossRefCtx: 'Identified by Ubayy ibn Ka\'b as the greatest Ayah in the Quran, earning the Prophet\'s celebrated praise for his scholarly acumen.',
    achievements: [
      "Honored as Sayyid al-Qurra' (Master of the Quranic Reciters) by prophetic decree",
      "The only mortal companion whose individual name Allah specifically mentioned to the Prophet",
      "Chief scribe of divine revelation in Madinah and key architect of the Uthmanic codex",
      "Appointed by Umar (RA) as the first Imam of congregational Tarawih prayers"
    ],
    sources: "Sahih al-Bukhari #4960, #4961; Sahih Muslim #810; Sunan al-Tirmidhi #3790; Al-Isabah #22; Siyar A'lam an-Nubala 1/389–402.",
    badgeVer: "✓ Verified: Sahih Bukhari & Muslim"
  },
  {
    id: 'sad-ibn-muadh',
    category: 'ansar-leaders',
    badge: 'Chieftains of the Ansar • Shaker of the Divine Throne',
    nameAr: 'سعد بن معاذ رضي الله عنه',
    nameEn: "Sa'd ibn Mu'adh (رضي الله عنه)",
    readTime: '6 min read',
    subTitle: "Chieftain of the Banu Aws • The Man for Whom the Throne Shook • Abu Amr • 32 BH – 5 AH / 590 – 627 CE",
    p1: "Sa'd ibn Mu'adh ibn an-Nu'man was the supreme supreme chieftain of the powerful Banu Aws tribe in Yathrib (Madinah). Tall, imposing, dignified, and commanding boundless tribal loyalty, Sa'd accepted Islam at age thirty-one at the hands of the first ambassador Mus'ab ibn Umayr.",
    p2: "Immediately upon embracing the truth, Sa'd strode into his clan's gathering and declared: 'O Banu Abd al-Ashhal! How do you regard my standing among you?' They cried: 'You are our supreme lord, the wisest in judgment, and the most auspicious in leadership!' Sa'd announced: 'Then it is forbidden for any man or woman among you to speak a single word to me until you believe in Allah and His Messenger!' Before sunset that day, every single member of the Banu Abd al-Ashhal clan embraced Islam, making it the first clan in Madinah to enter the faith collectively without a single dissenter.",
    p3: "Before the Battle of Badr, when the Prophet ﷺ consulted the Ansar to confirm if they would fight outside Medinan borders, Sa'd rose and delivered the immortal pledge that brought joy to the Prophet's face: 'O Messenger of Allah! We have believed in you and borne witness that what you brought is the truth. Go forth to whatever Allah commands you, for by the One Who sent you with the truth, if you were to lead us into the raging waves of the sea, we would plunge into it beside you; not a single man among us would stay behind!'",
    p4: "At the Battle of the Trench (Khandaq, 5 AH), an enemy arrow severed the main vein in Sa'd's arm. He prayed: 'O Allah, do not take my soul until my eyes are comforted regarding Banu Qurayza.' When Banu Qurayza surrendered, they insisted that Sa'd ibn Mu'adh arbitrate their fate. Carried on a donkey, Sa'd judged them according to their own biblical law of treason. Soon after, his wound reopened and he passed away in the Prophet's Mosque. The Prophet ﷺ declared: 'The Throne of the Most Merciful shook at the death of Sa'd ibn Mu'adh!' As seventy thousand angels descended to carry his bier, the Prophet stated that the angels crowded the funeral procession so densely that there was scarcely room to stand.",
    quote: '"The Throne of the Most Merciful shook at the death of Sa\'d ibn Mu\'adh." — Prophet Muhammad ﷺ (Sahih al-Bukhari #3803; Sahih Muslim #2466)',
    crossRefAr: 'يَا أَيُّهَا الَّذِينَ آمَنُوا اذْكُرُوا نِعْمَةَ اللَّهِ عَلَيْكُمْ إِذْ جَاءَتْكُمْ جُنُودٌ فَأَرْسَلْنَا عَلَيْهِمْ رِيحًا',
    crossRefEn: '"O you who have believed, remember the favor of Allah upon you when armies came to [attack] you and We sent upon them a wind..." (Surah Al-Ahzab 33:9)',
    crossRefCtx: 'The Battle of the Trench (Al-Khandaq) during which Sa\'d ibn Mu\'adh received his mortal wound while defending the siege lines.',
    achievements: [
      "Supreme chieftain of Aws whose single conversion brought his entire tribe into Islam in one day",
      "Delivered the historic pledge of unyielding Ansar allegiance prior to Badr",
      "Appointed supreme arbiter over the treasonous Banu Qurayza confederacy",
      "Honored uniquely in prophetic history by the shaking of the Divine Throne at his demise"
    ],
    sources: "Sahih al-Bukhari #3803, #4121; Sahih Muslim #2466; Siyar A'lam an-Nubala 1/279–291; At-Tabaqat al-Kubra 3/420–435.",
    badgeVer: "✓ Verified: Muttafaqun 'Alayh"
  },
  {
    id: 'abu-ayyub',
    category: 'ansar-leaders',
    badge: 'Chieftains of the Ansar • Host of the Messenger',
    nameAr: 'أبو أيوب الأنصاري رضي الله عنه',
    nameEn: "Abu Ayyub al-Ansari (رضي الله عنه)",
    readTime: '6 min read',
    subTitle: "Khalid ibn Zayd • Host of the Prophet in Madinah • Martyr beneath Constantinople • d. 52 AH / 672 CE",
    p1: "Khalid ibn Zayd ibn Kulayb, universally known by his agnomen Abu Ayyub al-Ansari, belonged to the Banu Najjar clan of Khazraj. When the Prophet Muhammad ﷺ entered Madinah on his camel Qaswa during the historic Hijrah in 622 CE, every Medinan chieftain vied to hold the camel's halter, offering their palaces and estates. The Prophet gently smiled, saying: 'Let her go, for she is divinely commanded.'",
    p2: "The camel knelt in front of the humble two-story stone dwelling of Abu Ayyub al-Ansari. While the Prophet's permanent quarters and mosque were being constructed, the Prophet resided in Abu Ayyub's home for seven months. Out of sublime reverence, Abu Ayyub and his wife Umm Ayyub insisted on sleeping on the upper floor while placing the Prophet on the ground floor; when a water pitcher cracked upstairs, they spent the night mopping up water with their only woolen blanket to ensure that not a single droplet fell upon the Prophet below.",
    p3: "Abu Ayyub participated in the Second Pledge of Al-Aqabah, the Battle of Badr, Uhud, Khandaq, and all subsequent campaigns. He possessed an insatiable thirst for Jihad in the path of Allah, living by the Quranic imperative: 'Go forth, whether light or heavy' (Surah At-Tawbah 9:41). Even in his eighties during the reign of Mu'awiyah, he refused to remain behind when military campaigns set sail.",
    p4: "In 52 AH (672 CE), despite his extreme old age and failing health, Abu Ayyub joined the Muslim expedition against Constantinople led by Yazid ibn Mu'awiyah. As he lay on his deathbed outside the towering Byzantine walls, the commander asked him for his final wish. Abu Ayyub whispered: 'Carry my body forward into enemy territory as deeply as you can penetrate, and bury me beneath the walls of Constantinople so that I may hear the clatter of the horses of the conquerors!' The Muslims fulfilled his request, burying him under the great ramparts of the Byzantine fortress, where his tomb stands venerated to this day.",
    quote: '"Carry my body into the enemy\'s land as far as you can advance, and bury me at the foot of their fortress walls." — Abu Ayyub al-Ansari (At-Tabaqat al-Kubra 3/485)',
    crossRefAr: 'انفِرُوا خِفَافًا وَثِقَالًا وَجَاهِدُوا بِأَمْوَالِكُمْ وَأَنفُسِكُمْ فِي سَبِيلِ اللَّهِ',
    crossRefEn: '"Go forth, whether light or heavy, and strive with your wealth and your lives in the cause of Allah..." (Surah At-Tawbah 9:41)',
    crossRefCtx: 'Recited constantly by Abu Ayyub al-Ansari in his eightieth year to justify participating in the campaign against Constantinople.',
    achievements: [
      "Chosen by divine will as the host of Prophet Muhammad ﷺ upon his arrival in Madinah",
      "Veteran of Badr, Uhud, Khandaq, Hunayn, and historic early naval campaigns",
      "Exemplified unprecedented etiquette and spiritual veneration toward the Prophet",
      "Buried at his own request directly beneath the fortress walls of Constantinople"
    ],
    sources: "Sahih al-Bukhari #3911; Sahih Muslim #530; Al-Isabah #2147; Siyar A'lam an-Nubala 2/402–413; At-Tabaqat al-Kubra 3/484–487.",
    badgeVer: "✓ Verified: Sahih Consensus"
  },
  {
    id: 'amr-ibn-al-aas',
    category: 'stalwarts',
    badge: 'Martyrs, Leaders & Stalwarts • Conqueror of Egypt',
    nameAr: 'عمرو بن العاص رضي الله عنه',
    nameEn: "Amr ibn al-Aas (رضي الله عنه)",
    readTime: '6 min read',
    subTitle: "Genius of Quraysh • Liberator of Egypt • Founder of Fustat • Abu Abdillah • 47 BH – 43 AH / 577 – 664 CE",
    p1: "Amr ibn al-Aas ibn Wa'il of the Banu Sahm clan of Quraysh was renowned across Arabia for his unmatched diplomatic genius, political acumen, military strategy, and eloquence. Prior to his conversion, he led the pagan Makkan embassy to the court of Negus in Abyssinia.",
    p2: "In the 8th year of the Hijrah, shortly before the Conquest of Makkah, Amr traveled to Madinah alongside Khalid ibn al-Walid and Uthman ibn Talhah to embrace Islam. As Amr stretched forth his hand to pledge allegiance to the Prophet ﷺ, he hesitated and withdrew it. The Prophet asked: 'What is the matter, O Amr?' Amr replied: 'I wish to stipulate a condition.' The Prophet asked: 'What condition?' Amr said: 'That all my past sins be forgiven.' The Prophet ﷺ smiled and declared: 'Do you not know, O Amr, that Islam wipes away all that came before it, that Hijrah wipes away all that came before it, and that Hajj wipes away all that came before it?'",
    p3: "Recognizing his military genius, the Prophet appointed Amr as commander-in-chief over senior companions including Abu Bakr and Umar at the expedition of Dhat al-Salasil. Following the Prophet's passing, Caliph Umar ibn al-Khattab dispatched Amr to liberate Palestine, where he took Gaza, Sebastia, and Nablus, joining Abu Ubaydah for the surrender of Jerusalem in 16 AH.",
    p4: "In 19 AH (640 CE), with Umar's blessing, Amr led an audacious campaign into Roman Egypt with just 4,000 men. Overcoming the formidable Roman fortress of Babylon (modern Cairo) and capturing Alexandria in 641 CE, Amr liberated the indigenous Coptic Christians from centuries of Byzantine religious persecution, restoring the exiled Coptic Patriarch Benjamin to his seat. He founded the historic city of Fustat and constructed the Mosque of Amr ibn al-Aas, the first mosque on the continent of Africa.",
    quote: '"Amr ibn al-Aas is among the righteous men of Quraysh. How noble a household is that of Abdullah, Abu Abdullah, and Umm Abdullah!" — Prophet Muhammad ﷺ (Sunan al-Tirmidhi #3795)',
    crossRefAr: 'قُل لِّلَّذِينَ كَفَرُوا إِن يَنتَهُوا يُغْفَرْ لَهُم مَّا قَدْ سَلَفَ',
    crossRefEn: '"Say to those who have disbelieved, if they cease, what has previously occurred will be forgiven for them..." (Surah Al-Anfal 8:38)',
    crossRefCtx: 'Reflecting the prophetic promise made to Amr ibn al-Aas that entering Islam obliterates every past sin.',
    achievements: [
      "Master strategist praised by the Prophet for his exceptional administrative and military insight",
      "Commander at the expedition of Dhat al-Salasil during the lifetime of the Prophet",
      "Liberator of Roman Egypt and founder of Fustat (Cairo), the capital of Islamic Africa",
      "Constructed the first mosque on the continent of Africa, preserving Coptic religious freedom"
    ],
    sources: "Sahih Muslim #121; Sunan al-Tirmidhi #3795; Al-Isabah #5875; Siyar A'lam an-Nubala 3/54–78; Tarikh al-Tabari 4/102–120.",
    badgeVer: "✓ Verified: Sahih Muslim"
  },
  {
    id: 'ammar-ibn-yasir',
    category: 'stalwarts',
    badge: 'Stalwarts of Sacrifice • The Pillar of Faith',
    nameAr: 'عمار بن ياسر رضي الله عنه',
    nameEn: "Ammar ibn Yasir (رضي الله عنه)",
    readTime: '6 min read',
    subTitle: "Abu al-Yaqdhan • Filled with Faith to the Marrow • Martyr of Siffin • 56 BH – 37 AH / 567 – 657 CE",
    p1: "Ammar ibn Yasir ibn Malik of the Banu Makhzum alliance was among the first seven human beings to profess Islam publicly in Makkah. His father Yasir and mother Sumayyah were brutalized by pagan Quraysh, with his mother Sumayyah becoming the first martyr (Shahidah) in the history of Islam when Abu Jahl pierced her with a spear for refusing to renounce Allah.",
    p2: "As the polytheists tortured Ammar on the searing Makkan sands, burning him with red-hot irons and submerging him in water until he lost consciousness, the Prophet ﷺ passed by, touched Ammar's head, and prayed: 'O fire! Be coolness and peace upon Ammar, just as you were upon Ibrahim!' The Prophet comforted the tortured family with the immortal promise: 'Patience, O family of Yasir! Verily, your appointed meeting place is Paradise!' (Sabran ya Ala Yasir, fa-inna maw'idakum al-Jannah).",
    p3: "When the torturers threatened to murder Ammar unless he verbally praised their idols, he uttered the forced words under agonizing duress. Weeping bitterly, he rushed to the Prophet ﷺ, crying: 'O Messenger of Allah, I am ruined!' The Prophet asked: 'How do you find your heart?' Ammar replied: 'Overflowing with complete tranquility in faith!' The Prophet smiled and said: 'If they torture you again, repeat what you said!' Upon this, Allah revealed Surah An-Nahl (16:106): 'Whoever disbelieves in Allah after his belief - except for one who is forced while his heart is secure in faith...'",
    p4: "Ammar participated in the building of the Prophet's Mosque in Madinah, carrying two bricks at a time while others carried one. The Prophet dusted the sand from Ammar's hair and said: 'Woe to Ammar! The rebellious faction (al-Fi'ah al-Bāghiyah) will kill him; he calls them to Paradise, and they call him to the Fire!' In 37 AH at the Battle of Siffin, at the age of ninety-three, fighting fiercely alongside Ali ibn Abi Talib (RA), Ammar fell martyred, fulfilling the exact prophecy uttered by the Messenger decades earlier.",
    quote: '"Ammar is filled with faith from the crown of his head to the soles of his feet; faith is mingled with his flesh and blood!" — Prophet Muhammad ﷺ (Sunan an-Nasa\'i #5007)',
    crossRefAr: 'إِلَّا مَنْ أُكْرِهَ وَقَلْبُهُ مُطْمَئِنٌّ بِالْإِيمَانِ',
    crossRefEn: '"...except for one who is forced [to renounce his religion] while his heart is secure in faith..." (Surah An-Nahl 16:106)',
    crossRefCtx: 'Directly revealed by Allah to vindicate Ammar ibn Yasir after he uttered words of duress under Makkan torture.',
    achievements: [
      "Son of the first two martyrs of Islam, Yasir and Sumayyah",
      "The historical subject of Surah An-Nahl 16:106, defining the theological doctrine of Ikrah (coercion)",
      "Praised by the Prophet as having faith permeating his bones to the marrow",
      "Martyred at Siffin in his 93rd year, vindicating the prophetic tradition regarding the rebellious group"
    ],
    sources: "Sahih al-Bukhari #447, #2812; Sahih Muslim #2915; Sunan an-Nasa'i #5007; Siyar A'lam an-Nubala 1/406–430; Al-Isabah #5720.",
    badgeVer: "✓ Verified: Muttafaqun 'Alayh"
  },
  {
    id: 'hudhayfah',
    category: 'scholars',
    badge: 'Scholars & Jurists • Keeper of Prophetic Secrets',
    nameAr: 'حذيفة بن اليمان رضي الله عنه',
    nameEn: "Hudhayfah ibn al-Yaman (رضي الله عنه)",
    readTime: '6 min read',
    subTitle: "Sahib Sirr Rasoolillah • Discerner of Tribulations (Fitan) • Abu Abdillah • d. 36 AH / 656 CE",
    p1: "Hudhayfah ibn al-Yaman of the Banu Abs clan was endowed with extraordinary psychological perception, unmatched confidentiality, and analytical wisdom. He held a singular, confidential post in prophetic history: he was the sole confidant (Sahib Sirr Rasoolillah) to whom the Prophet ﷺ entrusted the complete register of hypocrites (Munafiqeen) in Madinah.",
    p2: "While other companions questioned the Prophet concerning righteous deeds and virtues, Hudhayfah uniquely investigated tribulation and moral degeneration. He explained in Sahih al-Bukhari #3606: 'The people used to ask the Messenger of Allah ﷺ about good, but I used to ask him about evil, fearing that it would overtake me.' His profound questions yielded the prophetic roadmaps warning the Ummah of emerging ideological deviations and rulers who do not guide by the Sunnah.",
    p3: "On the freezing, hurricane-swept night of the Battle of the Trench, the Prophet ﷺ selected Hudhayfah for a daring espionage mission into the enemy camp. In pitch darkness, shivering with cold, Hudhayfah penetrated the pagan lines, sat among Abu Sufyan's council, gathered their battle plans, and returned safely to the Prophet without betraying his presence.",
    p4: "Umar ibn al-Khattab (RA) held Hudhayfah in immense awe. Knowing Hudhayfah's confidential list, whenever a prominent figure died in Madinah, Umar would watch Hudhayfah: if Hudhayfah did not attend the funeral prayer (Janazah), Umar would refrain from leading it. Umar once pleaded with him: 'O Hudhayfah, I adjure you by Allah: did the Messenger of Allah name me among the hypocrites?!' Hudhayfah replied: 'No! And I will never exonerate anyone after you!' Hudhayfah later governed al-Mada'in (Ctesiphon), living in saintly poverty until his death in 36 AH.",
    quote: '"The people used to ask the Messenger of Allah ﷺ about good, but I used to ask him about evil, fearing that it would overtake me." — Hudhayfah ibn al-Yaman (Sahih al-Bukhari #3606)',
    crossRefAr: 'وَمِمَّنْ حَوْلَكُم مِّنَ الْأَعْرَابِ مُنَافِقُونَ ۖ وَمِنْ أَهْلِ الْمَدِينَةِ ۖ مَرَدُوا عَلَى النِّفَاقِ',
    crossRefEn: '"And among those around you of the bedouins are hypocrites, and [also] from the people of Madinah..." (Surah At-Tawbah 9:101)',
    crossRefCtx: 'The divine context of the covert hypocrites whose identities were exclusively revealed by the Prophet to Hudhayfah.',
    achievements: [
      "Appointed Sahib Sirr Rasoolillah (Keeper of the Prophet's Confidential Secrets)",
      "Sole companion entrusted with the complete classified registry of hypocrites",
      "Heroic reconnaissance spy inside enemy lines during the freezing night of the Trench",
      "Premier authority on prophetic eschatology, social tribulations (Fitan), and political ethics"
    ],
    sources: "Sahih al-Bukhari #3606, #7084; Sahih Muslim #1844; Al-Isabah #1649; Siyar A'lam an-Nubala 2/361–370; At-Tabaqat al-Kubra 6/15–20.",
    badgeVer: "✓ Verified: Muttafaqun 'Alayh"
  },
  {
    id: 'ibn-umar',
    category: 'scholars',
    badge: 'Scholars & Jurists • The Exemplar of Sunnah',
    nameAr: 'عبد الله بن عمر رضي الله عنهما',
    nameEn: "Abdullah ibn Umar (رضي الله عنهما)",
    readTime: '6 min read',
    subTitle: "Abu Abd ar-Rahman • The Strict Adherent to the Sunnah • Mufti of Madinah • 10 BH – 73 AH / 613 – 693 CE",
    p1: "Abdullah ibn Umar ibn al-Khattab, son of the second Caliph Umar (RA), was the undisputed gold standard in adhering meticulously to the physical, legal, and spiritual footsteps of the Prophet Muhammad ﷺ. Embracing Islam as a child in Makkah, he migrated alongside his father to Madinah.",
    p2: "Ibn Umar was deemed too young to fight at Badr and Uhud, but was permitted to fight at the Trench at age fifteen. He lived sixty years after the passing of the Prophet ﷺ, serving as the venerated moral compass and preeminent Mufti of Madinah alongside Ibn Abbas and Aisha. His legal rulings (Fatawa) form the backbone of the legal school of Imam Malik ibn Anas (Muwatta).",
    p3: "His devotion to the Sunnah was legendary. If the Prophet prayed at a specific tree along a desert route, Ibn Umar would dismount decades later and pray at the exact same tree; if the Prophet ducked his head under a low-hanging branch, Ibn Umar would duck his head even if the branch had withered. Aisha (RA) remarked: 'No one followed the footsteps of the Messenger of Allah ﷺ in his places of descent as scrupulously as Ibn Umar did.'",
    p4: "During the catastrophic civil strife (Fitnah) between Ali and Mu'awiyah, and later during the counter-caliphates, Ibn Umar adopted total, principled political neutrality. Despite being repeatedly offered the Caliphate by rival factions, he refused to spill a single drop of Muslim blood, dedicating his life to teaching Hadith in the Prophet's Mosque until his death in Makkah in 73 AH at the age of eighty-four.",
    quote: '"Abdullah ibn Umar is a righteous man. If only he would pray voluntary prayers at night!" — Prophet Muhammad ﷺ (Sahih al-Bukhari #1122)',
    crossRefAr: 'لَّقَدْ كَانَ لَكُمْ فِي رَسُولِ اللَّهِ أُسْوَةٌ حَسَنَةٌ لِّمَن كَانَ يَرْجُو اللَّهَ وَالْيَوْمَ الْآخِرَ',
    crossRefEn: '"There has certainly been for you in the Messenger of Allah an excellent pattern for anyone whose hope is in Allah and the Last Day..." (Surah Al-Ahzab 33:21)',
    crossRefCtx: 'The operational ethos of Abdullah ibn Umar, who embodied the prophetic Uswah Hasanah in every physical and spiritual gesture.',
    achievements: [
      "Second most prolific narrator of Hadith in Islamic history (2,630 authentic narrations)",
      "The undisputed foremost master of rigorous Sunnah emulation in early Islam",
      "Primary jurisprudential fountainhead for Imam Malik's Madinan Fiqh school",
      "Maintained saintly political neutrality, refusing to allow his name to cause Muslim bloodshed"
    ],
    sources: "Sahih al-Bukhari #1122, #3738; Sahih Muslim #2478; Muwatta Malik 1/230; Siyar A'lam an-Nubala 3/203–239; Al-Isabah #4834.",
    badgeVer: "✓ Verified: Muttafaqun 'Alayh"
  },
  {
    id: 'abu-musa',
    category: 'scholars',
    badge: 'Scholars & Jurists • Melodious Voice of David',
    nameAr: 'أبو موسى الأشعري رضي الله عنه',
    nameEn: "Abu Musa al-Ash'ari (رضي الله عنه)",
    readTime: '6 min read',
    subTitle: "Abdullah ibn Qays • Governor of Basra & Kufa • Master Jurist • Abu Musa • 22 BH – 44 AH / 602 – 665 CE",
    p1: "Abdullah ibn Qays ibn Salim, known across the Islamic world as Abu Musa al-Ash'ari, came from the Ash'arite tribe of Yemen. Embracing Islam early in Makkah, he sailed to Abyssinia, eventually arriving in Madinah during the conquest of Khaybar with fifty members of his tribe.",
    p2: "The Prophet ﷺ praised the Ash'arite tribe for their matchless mutual solidarity and communal charity: 'When the Ash'arites run short of food during military expeditions or in Madinah, they pool all their food in one single cloth and divide it among themselves equally. Therefore, they are from me and I am from them!' (Hum minni wa ana minhum).",
    p3: "Abu Musa was endowed with an angelic, soul-stirring recitation of the Holy Quran. One night, the Prophet ﷺ stood outside Abu Musa's house listening intently to his melodious recitation. The next morning, the Prophet said: 'O Abu Musa, you have been granted one of the musical pipes of the family of David (Mizmāran min mazāmīri Āli Dāwūd)!' Abu Musa exclaimed: 'O Messenger of Allah! Had I known you were listening, I would have embellished it for you even more richly!'",
    p4: "Caliph Umar appointed Abu Musa as the governor of Basra in 17 AH. Under his governance, the Muslims completed the conquest of Khuzestan and Ahvaz in Persia. He established schools across Iraq, personally teaching thousands of soldiers and citizens how to read and recite the Holy Quran. Umar described him as: 'A vessel filled with knowledge and righteousness.'",
    quote: '"You have been endowed with one of the melodious musical pipes of the family of David!" — Prophet Muhammad ﷺ to Abu Musa (Sahih al-Bukhari #5048; Sahih Muslim #793)',
    crossRefAr: 'يَا جِبَالُ أَوِّبِي مَعَهُ وَالطَّيْرَ ۖ وَأَلَنَّا لَهُ الْحَدِيدَ',
    crossRefEn: '"O mountains, repeat [Our] praises with him, and the birds [as well]. And We made pliable for him iron..." (Surah Saba 34:10)',
    crossRefCtx: 'Referring to the divine melody bestowed upon Prophet Dawud (AS), which was echoed in the recitation of Abu Musa al-Ash\'ari.',
    achievements: [
      "Praised by the Prophet as possessing the melodious Psalms-like voice of the family of David",
      "Governor of Basra and Kufa who oversaw the major eastern Persian conquests",
      "One of the four master judges of early Islam alongside Umar, Ali, and Zayd ibn Thabit",
      "Educated entire generations of Iraqi Muslims in Quranic recitation and jurisprudence"
    ],
    sources: "Sahih al-Bukhari #5048; Sahih Muslim #793, #2500; Siyar A'lam an-Nubala 2/380–401; Al-Isabah #4920; At-Tabaqat al-Kubra 4/105–116.",
    badgeVer: "✓ Verified: Muttafaqun 'Alayh"
  },
  {
    id: 'zayd-ibn-harithah',
    category: 'stalwarts',
    badge: 'Stalwarts of Sacrifice • The Beloved of the Prophet',
    nameAr: 'زيد بن حارثة رضي الله عنه',
    nameEn: "Zayd ibn Harithah (رضي الله عنه)",
    readTime: '6 min read',
    subTitle: "Hibb Rasoolillah • The Only Sahabi Named in the Holy Quran • Martyr of Mu'tah • 47 BH – 8 AH / 577 – 629 CE",
    p1: "Zayd ibn Harithah ibn Shurahbil of the Banu Kalb was kidnapped during a desert raid in his childhood and sold into Makkan slavery. Purchased by Hakim ibn Hizam for his aunt Khadijah bint Khuwaylid, Khadijah gifted young Zayd to Prophet Muhammad ﷺ upon their marriage.",
    p2: "When Zayd's father and uncle discovered his whereabouts and brought a massive ransom to Makkah to buy him back, the Prophet ﷺ called Zayd and gave him an unconditional choice: he could return freely with his father with no ransom required, or remain with Muhammad. Without hesitation, Zayd looked at his father and said: 'I have seen from this man something such that I can never choose anyone over him!' Overwhelmed by Zayd's love, the Prophet took him by the hand to the Ka'bah and announced to Quraysh: 'Bear witness that Zayd is my son; I inherit from him and he inherits from me!' He was known as Zayd ibn Muhammad until Allah revealed Surah Al-Ahzab (33:5): 'Call them by [the names of] their fathers; that is more just in the sight of Allah.'",
    p3: "Zayd holds a distinction shared by no other human being in the company of the Prophet: he is the **only companion mentioned explicitly by his proper name in the text of the Holy Quran** (Surah Al-Ahzab 33:37: 'So when Zayd had no longer any need for her...'). The companions reverently called him Hibb Rasoolillah (The Beloved of the Messenger of Allah).",
    p4: "Zayd fought valiantly at Badr, Uhud, the Trench, and Khaybar. In 8 AH, the Prophet appointed Zayd as the supreme commander-in-chief of the 3,000-man army sent to Mu'tah against 100,000 Roman and Arab allied forces, declaring: 'If Zayd is martyred, Ja'far shall take the banner; if Ja'far is martyred, Abdullah ibn Rawahah shall take the banner.' At Mu'tah, Zayd charged forward holding the sacred banner aloft, fighting with breathtaking bravery until enemy spears pierced his chest. The Prophet wept tears of profound grief in Madinah, describing his bond with Zayd as a father weeping for his dearest son.",
    quote: '"By Allah, Zayd was truly worthy of command, and he was indeed one of the most beloved of all people to me." — Prophet Muhammad ﷺ (Sahih al-Bukhari #3730)',
    crossRefAr: 'فَلَمَّا قَضَىٰ زَيْدٌ مِّنْهَا وَطَرًا زَوَّجْنَاكَهَا',
    crossRefEn: '"So when Zayd had no longer any need for her, We married her to you in order that there not be upon the believers any discomfort..." (Surah Al-Ahzab 33:37)',
    crossRefCtx: 'The immortal Quranic verse explicitly naming Zayd ibn Harithah, forever preserving his name in liturgical recitation.',
    achievements: [
      "The only Companion of the Prophet mentioned explicitly by his personal name in the Quran",
      "Honored with the exclusive title Hibb Rasoolillah (The Beloved of the Messenger of Allah)",
      "Chose the Prophet over his own biological father and Makkan aristocracy before Islam",
      "Appointed supreme commander-in-chief of the Muslim vanguard at the Battle of Mu'tah"
    ],
    sources: "Sahih al-Bukhari #3730, #4261; Sahih Muslim #1780; Al-Isabah #2898; Siyar A'lam an-Nubala 1/219–232; Ibn Hisham 1/247–251.",
    badgeVer: "✓ Verified: Quranic & Hadith Text"
  },
  {
    id: 'usamah-ibn-zayd',
    category: 'stalwarts',
    badge: 'Martyrs, Leaders & Stalwarts • The Beloved Son of the Beloved',
    nameAr: 'أسامة بن زيد رضي الله عنهما',
    nameEn: "Usamah ibn Zayd (رضي الله عنهما)",
    readTime: '6 min read',
    subTitle: "Al-Hibb ibn al-Hibb • Commander of the Northern Expedition • Abu Muhammad • 7 BH – 54 AH / 615 – 674 CE",
    p1: "Usamah ibn Zayd was the son of Zayd ibn Harithah and Umm Ayman (Barakah), the nurse and second mother of the Prophet ﷺ. Born in Islam in Makkah, Usamah grew up inside the Prophet's household, where the Prophet would sit Usamah on one knee and his grandson Al-Hasan on the other, praying: 'O Allah, love them both, for I love them both!'",
    p2: "The companions affectionately designated Usamah as Al-Hibb ibn al-Hibb (The Beloved, son of the Beloved). At age fifteen, Usamah begged to participate in the Battle of Uhud but was sent back due to youth; he later fought with fearless gallantry at the Trench, Khaybar, the Conquest of Makkah, and stood firm beside the Prophet at the crisis of Hunayn when others scattered.",
    p3: "In 11 AH, during his final illness, Prophet Muhammad ﷺ made a momentous strategic appointment that astonished the Arab elders: he appointed eighteen-year-old Usamah as commander-in-chief of the imperial expeditionary army bound for Palestine to avenge the martyrs of Mu'tah, placing senior companions including Abu Bakr, Umar, and Abu Ubaydah under young Usamah's direct command.",
    p4: "When some companions murmured about Usamah's youth, the Prophet ﷺ ascended the pulpit and declared: 'If you criticize his leadership, you criticized the leadership of his father before him! By Allah, he was worthy of leadership, and he is one of the most beloved of people to me after his father!' Following the Prophet's demise, Caliph Abu Bakr (RA) insisted on dispatching Usamah's army despite the eruption of the apostasy rebellions, refusing to lower a banner unfurled by the Prophet. Usamah's campaign achieved a stunning triumph on the Syrian border, securing Islamic northern prestige.",
    quote: '"O Allah, love them both, for I love them both!" — Prophet Muhammad ﷺ seating Usamah and Al-Hasan on his knees (Sahih al-Bukhari #3735)',
    crossRefAr: 'إِنَّ أَكْرَمَكُمْ عِندَ اللَّهِ أَتْقَاكُمْ ۚ إِنَّ اللَّهَ عَلِيمٌ خَبِيرٌ',
    crossRefEn: '"Indeed, the most noble of you in the sight of Allah is the most righteous of you..." (Surah Al-Hujurat 49:13)',
    crossRefCtx: 'Embodied in Usamah\'s appointment to supreme command over the Arab aristocracy despite his African-Arab heritage and youthful age.',
    achievements: [
      "Appointed by the Prophet as commander-in-chief of the Muslim army at age 18 over Abu Bakr and Umar",
      "Revered as Al-Hibb ibn al-Hibb (The Beloved son of the Beloved of the Prophet)",
      "Successfully led the Syrian expedition during the critical opening weeks of Abu Bakr's caliphate",
      "Held in immense veneration by Caliph Umar, who granted him a stipend higher than his own son Abdullah"
    ],
    sources: "Sahih al-Bukhari #3735, #4468; Sahih Muslim #2426; Al-Isabah #115; Siyar A'lam an-Nubala 2/496–508; At-Tabaqat al-Kubra 4/61–72.",
    badgeVer: "✓ Verified: Muttafaqun 'Alayh"
  },
  {
    id: 'sad-ibn-ubadah',
    category: 'ansar-leaders',
    badge: 'Chieftains of the Ansar • Supreme Chieftain of Khazraj',
    nameAr: 'سعد بن عبادة رضي الله عنه',
    nameEn: "Sa'd ibn Ubadah (رضي الله عنه)",
    readTime: '6 min read',
    subTitle: "Chieftain of the Banu Khazraj • Abu Thabit • Pillar of Legendary Generosity • d. 14 AH / 635 CE",
    p1: "Sa'd ibn Ubadah ibn Dulaym was the supreme, undisputed prince and chieftain of the Banu Khazraj in Yathrib (Madinah). Renowned across the Arabian Peninsula for his extraordinary nobility, princely lineage, martial valor, and legendary generosity, Sa'd inherited the title of 'The Complete Man' (Al-Kamil)—an honorific reserved only for those who mastered writing, swimming, archery, and tribal leadership.",
    p2: "Sa'd was one of the twelve Nuqaba (leaders) chosen at the Second Pledge of Al-Aqabah. When pagan Quraysh discovered the secret treaty, they pursued the Ansar and captured Sa'd, dragging him back to Makkah by his long hair, torturing him until Jubayr ibn Mut'im and al-Harith ibn Harb recognized him and intervened, recalling Sa'd's generous protection of Makkan trade caravans passing through Yathrib.",
    p3: "His hospitality in Madinah was legendary. It was said that while ordinary citizens fed one or two guests, Sa'd ibn Ubadah routinely fed eighty guests every single night. A large wooden bowl filled with broth and meat circulated daily from Sa'd's house to the Prophet's household, prompting the Prophet ﷺ to pray: 'O Allah, bestow Your blessings and mercy upon the family of Sa'd ibn Ubadah!'",
    p4: "At the Battle of Badr, Uhud, and the Conquest of Makkah, Sa'd carried the supreme grand banner of the Ansar. Following the Prophet's demise, the Ansar initially gathered at Saqifat Bani Sa'idah around Sa'd to discuss the succession; when Abu Bakr and Umar presented the consensus of Quraysh leadership, Sa'd stepped aside to preserve the unity of the nascent Islamic state. He later migrated to the Syrian frontier where he passed away in Hawran in 14 AH.",
    quote: '"O Allah, make Your blessings and Your mercy descend upon the family of Sa\'d ibn Ubadah!" — Prophet Muhammad ﷺ (Abu Dawud #4660)',
    crossRefAr: 'وَالَّذِينَ تَبَوَّءُوا الدَّارَ وَالْإِيمَانَ مِن قَبْلِهِمْ يُحِبُّونَ مَنْ هَاجَرَ إِلَيْهِمْ',
    crossRefEn: '"And [also for] those who were settled in the Home [Madinah] and [adopted] the faith before them. They love those who emigrated to them..." (Surah Al-Hashr 59:9)',
    crossRefCtx: 'Exemplified in Sa\'d ibn Ubadah\'s boundless hospitality and material support to Makkan Muhajirun in Madinah.',
    achievements: [
      "Supreme chieftain of Khazraj and one of the 12 Naqeebs of the Second Pledge of Al-Aqabah",
      "Held the honorary title Al-Kamil (The Complete Man) for mastery of writing, warfare, and leadership",
      "Famed across Arabia for feeding eighty poor companions and travelers every single night",
      "Supreme banner-carrier of the Ansar in the major campaigns of the Prophet"
    ],
    sources: "Sahih al-Bukhari #4354; Sahih Muslim #1059; Sunan Abi Dawud #4660; Siyar A'lam an-Nubala 1/270–279; At-Tabaqat al-Kubra 3/613–618.",
    badgeVer: "✓ Verified: Sahih Consensus"
  },
  {
    id: 'abu-darda',
    category: 'scholars',
    badge: 'Scholars & Jurists • The Sage of the Ummah',
    nameAr: 'أبو الدرداء الأنصاري رضي الله عنه',
    nameEn: "Abu Darda al-Ansari (رضي الله عنه)",
    readTime: '6 min read',
    subTitle: "Uwaymir ibn Malik • Hakim Hadhihi al-Ummah (Sage of this Ummah) • Qadi of Damascus • d. 32 AH / 652 CE",
    p1: "Uwaymir ibn Malik of the Khazraj clan was celebrated throughout early Islamic history as Hakim Hadhihi al-Ummah (The Sage of this Ummah). Prior to Islam, he was a prosperous merchant in Madinah with an idol in his house that he adorned with silk and perfume.",
    p2: "His intimate friend Abdullah ibn Rawahah entered his house during his absence and smashed the idol to pieces. When Abu Darda returned and saw the broken wood, he observed: 'If you had any divine power, you would have defended yourself!' He washed himself, went straight to the Prophet ﷺ alongside Ibn Rawahah, and embraced Islam. The Prophet paired Abu Darda as spiritual brother to Salman al-Farsi.",
    p3: "Abu Darda initially sought to combine full-time trade with constant voluntary worship. He noted: 'I attempted to combine trade with worship, but they did not harmonize; so I chose worship and abandoned trade!' Salman al-Farsi famously gave him the quintessential prophetic counsel when Abu Darda neglected his family: 'Your Lord has a right over you, your own self has a right over you, and your spouse has a right over you; so give every possessor of a right their due right!' When this was conveyed to the Prophet ﷺ, the Prophet affirmed: 'Salman has spoken the absolute truth!'",
    p4: "Caliph Umar appointed Abu Darda as the supreme judge (Qadi) and Quranic instructor of Damascus in Greater Syria. Abu Darda organized the famous Halaqat (study circles) in the Umayyad Grand Mosque, dividing over 1,600 students into groups of ten supervised by sub-teachers while he monitored overall recitation accuracy from the mihrab, establishing the first institutional Quran academy in history.",
    quote: '"Contemplation for a single hour is superior to standing an entire night in mechanical prayer." — Abu Darda al-Ansari (Siyar A\'lam an-Nubala 2/347)',
    crossRefAr: 'الَّذِينَ يَذْكُرُونَ اللَّهَ قِيَامًا وَقُعُودًا وَعَلَىٰ جُنُوبِهِمْ وَيَتَفَكَّرُونَ فِي خَلْقِ السَّمَاوَاتِ وَالْأَرْضِ',
    crossRefEn: '"Who remember Allah while standing or sitting or [lying] on their sides and give thought to the creation of the heavens and the earth..." (Surah Ali \'Imran 3:191)',
    crossRefCtx: 'The philosophical and contemplative foundation of Abu Darda\'s famous teachings on spiritual mindfulness (Tafakkur).',
    achievements: [
      "Revered as Hakim Hadhihi al-Ummah (The Sage and Philosopher of this Ummah)",
      "Established the world's first structured institutional Quran memorization academy in Damascus",
      "Supreme Qadi (Judge) of Damascus during the caliphates of Umar and Uthman",
      "Subject of the famous prophetic tradition establishing balance between worship, self, and family"
    ],
    sources: "Sahih al-Bukhari #1968, #6139; Al-Isabah #6250; Siyar A'lam an-Nubala 2/335–353; At-Tabaqat al-Kubra 7/391–395.",
    badgeVer: "✓ Verified: Sahih Bukhari"
  },
  {
    id: 'jabir-ibn-abdullah',
    category: 'scholars',
    badge: 'Scholars & Jurists • The Witness of 19 Expeditions',
    nameAr: 'جابر بن عبد الله رضي الله عنهما',
    nameEn: "Jabir ibn Abdullah (رضي الله عنهما)",
    readTime: '6 min read',
    subTitle: "Abu Abdillah • Veteran of Nineteen Prophetic Expeditions • Mufti of Madinah • 16 BH – 78 AH / 607 – 697 CE",
    p1: "Jabir ibn Abdullah ibn Amr ibn Haram belonged to the Banu Salamah clan of Khazraj. As a youth, he attended the Second Pledge of Al-Aqabah holding the hand of his father Abdullah ibn Haram, who was later martyred at Uhud leaving Jabir with heavy debts and nine younger sisters to support.",
    p2: "The Prophet ﷺ showed extraordinary paternal compassion toward young Jabir. During the return from the expedition of Dhat al-Riqa', Jabir's camel fell exhausted from hunger. The Prophet prodded the camel with his stick and made du'a; the camel suddenly sprang forward with such vigor that Jabir could barely hold the reins. The Prophet then purchased the camel from Jabir for an ounce of gold to help pay his father's debts, allowed Jabir to ride it back to Madinah, and upon arrival gave Jabir the gold price AND returned the camel to him as a gift!",
    p3: "Jabir personally participated in nineteen military expeditions alongside the Prophet Muhammad ﷺ. At the Battle of the Trench, when Jabir saw the Prophet tying a stone around his stomach from acute starvation, Jabir slaughtered a small lamb, prepared barley bread, and secretly invited the Prophet. The Prophet brought the entire 1,000-man army to Jabir's home; through a miraculous prophetic blessing, the food multiplied so abundantly that every single soldier ate to satisfaction, leaving the pot bubbling and the dough untouched!",
    p4: "Jabir is the primary narrator of the definitive, step-by-step master Hadith documenting the Farewell Pilgrimage (Hajjat al-Wada') of the Prophet ﷺ in Sahih Muslim #1218, providing the universal blueprint for Hajj rites. He taught Hadith in the Prophet's Mosque for seven decades, and was the last surviving companion in Madinah, passing away in 78 AH at the age of ninety-four.",
    quote: '"The Messenger of Allah ﷺ said to me: Shall I not inform you of what Allah said to your father? Allah has never spoken to anyone except from behind a veil, but He spoke to your father directly without a veil!" — Jabir ibn Abdullah (Sunan al-Tirmidhi #3010)',
    crossRefAr: 'وَلَا تَحْسَبَنَّ الَّذِينَ قُتِلُوا فِي سَبِيلِ اللَّهِ أَمْوَاتًا ۚ بَلْ أَحْيَاءٌ عِندَ رَبِّهِمْ يُرْزَقُونَ',
    crossRefEn: '"And never think of those who have been killed in the cause of Allah as dead. Rather, they are alive with their Lord, receiving provision..." (Surah Ali \'Imran 3:169)',
    crossRefCtx: 'Revealed concerning Jabir\'s father Abdullah ibn Haram, who fell martyred in the front ranks at the Battle of Uhud.',
    achievements: [
      "Veteran of nineteen military expeditions under the direct leadership of Prophet Muhammad ﷺ",
      "Narrated the monumental comprehensive Hadith of the Farewell Pilgrimage (Sahih Muslim #1218)",
      "One of the seven prolific Hadith preservers (Mukthirun) with 1,540 authentic narrations",
      "The last surviving Sahabi in Madinah, preserving prophetic tradition until 78 AH"
    ],
    sources: "Sahih al-Bukhari #2097, #4101; Sahih Muslim #715, #1218; Sunan al-Tirmidhi #3010; Siyar A'lam an-Nubala 3/189–204.",
    badgeVer: "✓ Verified: Muttafaqun 'Alayh"
  },
  {
    id: 'anas-ibn-malik',
    category: 'scholars',
    badge: 'Scholars & Jurists • The Servant of the Prophet',
    nameAr: 'أنس بن مالك رضي الله عنه',
    nameEn: "Anas ibn Malik (رضي الله عنه)",
    readTime: '6 min read',
    subTitle: "Khadim Rasoolillah • The Ten-Year Personal Servant • Abu Hamzah • 10 BH – 93 AH / 612 – 712 CE",
    p1: "Anas ibn Malik ibn an-Nadr of the Banu Najjar clan was presented to the Prophet Muhammad ﷺ by his mother Umm Sulaym immediately upon the Prophet's arrival in Madinah. Umm Sulaym said: 'O Messenger of Allah, every man and woman of the Ansar has given you a gift; I have nothing to give except this little boy of mine. Take him; he will serve you!' Anas was ten years old.",
    p2: "For ten consecutive years, until the Prophet's passing in 11 AH, Anas served the Messenger of Allah with tender devotion. Anas bore witness to the Prophet's matchless, sublime gentleness: 'I served the Messenger of Allah ﷺ for ten years. By Allah, he never once said to me 'Uff!' (an expression of irritation). He never said of anything I had done: 'Why did you do that?' nor of anything I had neglected: 'Why did you not do that?' If someone in his family scolded me, the Prophet would say: 'Leave him alone; if something was decreed, it would happen!'",
    p3: "The Prophet ﷺ made a special, comprehensive supplication for Anas: 'O Allah! Increase his wealth and his children, lengthen his life, and forgive him his sins!' Through this prophetic blessing, Anas lived to be over one hundred years old, fathered over eighty children and grandchildren, and possessed an orchard in Basra that bore fruit twice a year while smelling of sweet musk.",
    p4: "Anas was the third most prolific narrator of prophetic traditions in Islam, narrating 2,286 Hadiths. His long life allowed him to transmit first-hand prophetic memories, manners, personal hygiene, and prayer habits directly to early successors (Tabi'een) such as Hasan al-Basri and Ibn Sirin. He was the last surviving companion to pass away in Basra in 93 AH.",
    quote: '"I served the Prophet ﷺ for ten years. He never said to me: Uff! Nor did he ever ask: Why did you do this? or: Why did you not do that?" — Anas ibn Malik (Sahih al-Bukhari #6038; Sahih Muslim #2309)',
    crossRefAr: 'فَبِمَا رَحْمَةٍ مِّنَ اللَّهِ لِنتَ لَهُمْ ۖ وَلَوْ كُنتَ فَظًّا غَلِيظَ الْقَلْبِ لَانفَضُّوا مِنْ حَوْلِكَ',
    crossRefEn: '"So by mercy from Allah, [O Muhammad], you were lenient with them. And if you had been rude and harsh in heart, they would have disbanded from about you..." (Surah Ali \'Imran 3:159)',
    crossRefCtx: 'Exemplified in the daily ten-year experience of Anas ibn Malik as the domestic servant of the Prophet.',
    achievements: [
      "Served the Messenger of Allah as intimate domestic assistant for 10 years in Madinah",
      "Third most prolific narrator in the history of Hadith literature (2,286 traditions)",
      "Recipient of the Prophet's famous supplication for longevity, prosperity, and righteous offspring",
      "The last surviving Companion to pass away in Basra, bridging the Prophetic era to classical Islam"
    ],
    sources: "Sahih al-Bukhari #1982, #6038; Sahih Muslim #2309, #2480; Siyar A'lam an-Nubala 3/395–406; Al-Isabah #277.",
    badgeVer: "✓ Verified: Muttafaqun 'Alayh"
  },
  {
    id: 'sawdah-bint-zamah',
    category: 'women-companions',
    badge: 'Mothers of the Believers • The Loyal Matron',
    nameAr: 'سودة بنت زمعة رضي الله عنها',
    nameEn: "Sawdah bint Zam'ah (رضي الله عنها)",
    readTime: '6 min read',
    subTitle: "Mother of the Believers (Umm al-Mu'mineen) • Matron of the Prophetic Household • d. 54 AH / 674 CE",
    p1: "Sawdah bint Zam'ah ibn Qays of the Banu Amir clan of Quraysh was among the earliest women to embrace Islam in Makkah. She underwent severe persecution alongside her husband As-Sakran ibn Amr, enduring the arduous migration across the sea to Abyssinia, where her husband died in exile, leaving Sawdah an impoverished widow.",
    p2: "Following the devastating 'Year of Sorrow' (Aam al-Huzn) in 619 CE, during which Khadijah (RA) and Abu Talib passed away, the Prophet ﷺ was left grieving with his young daughters Fatima and Umm Kulthum in a hostile Makkan environment. Khawlah bint Hakim suggested Sawdah to the Prophet. The Prophet married Sawdah, who was in her late forties, bringing maternal stability, comfort, and dignified cheerfulness into the bereaved prophetic home.",
    p3: "For over three years in Makkah and the early period in Madinah, Sawdah was the sole wife of the Prophet ﷺ, managing the household, raising his daughters, and showing exemplary loyalty. Tall, dignified, and known for her warm, generous humor, she was beloved by the entire household. When Aisha joined the household, Sawdah welcomed her with maternal warmth rather than jealousy.",
    p4: "In her elderly years, fearing that she might burden the Prophet, Sawdah gifted her allocated night with the Prophet to Aisha, saying: 'O Messenger of Allah, I have given my day to Aisha; I desire only to remain your wife so that I may be raised among the Mothers of the Believers on the Day of Resurrection!' Aisha (RA) remarked: 'There is no woman whose example I would love to follow more than Sawdah bint Zam'ah!' Sawdah was renowned for her boundless charity, distributing every bag of silver sent to her by Caliph Umar to the poor within hours.",
    quote: '"There is no woman in whose skin and character I would love to be more than Sawdah bint Zam\'ah." — Aisha bint Abi Bakr (Sahih Muslim #1463)',
    crossRefAr: 'وَإِنِ امْرَأَةٌ خَافَتْ مِن بَعْلِهَا نُشُوزًا أَوْ إِعْرَاضًا فَلَا جُنَاحَ عَلَيْهِمَا أَن يُصْلِحَا بَيْنَهُمَا صُلْحًا',
    crossRefEn: '"And if a woman fears from her husband contempt or evasion, there is no sin upon them if they make terms of settlement between them..." (Surah An-Nisa 4:128)',
    crossRefCtx: 'Classical exegetes record that this verse was revealed confirming the permissibility of Sawdah gifting her turn to Aisha.',
    achievements: [
      "Second wife of the Prophet Muhammad ﷺ, comforting his home after the demise of Khadijah",
      "Sole wife of the Prophet for over three critical years in Makkah and early Madinah",
      "Demonstrated unparalleled humility by gifting her turn to Aisha to preserve her sacred marriage bond",
      "Known for extreme generosity, distributing every gift and stipend directly to the destitute"
    ],
    sources: "Sahih al-Bukhari #2593, #5212; Sahih Muslim #1463; Al-Isabah #11312; Siyar A'lam an-Nubala 2/265–269; At-Tabaqat al-Kubra 8/52–58.",
    badgeVer: "✓ Verified: Muttafaqun 'Alayh"
  },
  {
    id: 'zaynab-bint-khuzaymah',
    category: 'women-companions',
    badge: 'Mothers of the Believers • Mother of the Destitute',
    nameAr: 'زينب بنت خزيمة رضي الله عنها',
    nameEn: "Zaynab bint Khuzaymah (رضي الله عنها)",
    readTime: '5 min read',
    subTitle: "Umm al-Mu'mineen • Umm al-Masakeen (Mother of the Poor) • d. 4 AH / 625 CE",
    p1: "Zaynab bint Khuzaymah ibn al-Harith of the prestigious Banu Hilal tribe was an icon of philanthropic selflessness in Arabia. Even in the pre-Islamic days of ignorance (Jahiliyyah), she was universally called Umm al-Masakeen (Mother of the Destitute) because she spent her entire fortune feeding the hungry, sheltering orphans, and clothing the destitute.",
    p2: "Zaynab embraced Islam in its earliest Makkan days. Her second husband, the heroic companion Abdullah ibn Jahsh (the cousin of the Prophet), fell martyred at the Battle of Uhud (3 AH). Left a widow in Madinah, Prophet Muhammad ﷺ married her in 3 AH in honor of her husband's martyrdom and to elevate her unmatched social welfare mission.",
    p3: "Her marriage to the Prophet was brief but exceptionally luminous. She spent her days and nights transforming her modest quarters into a distribution center for food, clothing, and alms for the poor of Ahl al-Suffah. No needy person ever knocked on her door without being fed.",
    p4: "Zaynab passed away in Madinah in 4 AH, just three to eight months following her marriage to the Prophet, at the age of approximately thirty. She was the only wife of the Prophet ﷺ to pass away during his Medinan life other than Khadijah in Makkah. The Prophet Muhammad ﷺ personally led her funeral prayer (Janazah) and carried her body into the cemetery of Jannat al-Baqi, where she was laid to rest with great reverence.",
    quote: '"She was known as Umm al-Masakeen even in the days of Jahiliyyah for her extreme mercy and boundless feeding of the poor." — Ibn Sa\'d (At-Tabaqat al-Kubra 8/115)',
    crossRefAr: 'وَيُطْعِمُونَ الطَّعَامَ عَلَىٰ حُبِّهِ مِسْكِينًا وَيَتِيمًا وَأَسِيرًا',
    crossRefEn: '"And they give food in spite of love for it to the needy, the orphan, and the captive..." (Surah Al-Insan 76:8)',
    crossRefCtx: 'Reflecting the lifelong defining characteristic of Zaynab bint Khuzaymah as Umm al-Masakeen.',
    achievements: [
      "Universally endowed with the title Umm al-Masakeen (Mother of the Poor) before and in Islam",
      "Widow of the martyr of Uhud Abdullah ibn Jahsh, honored by marriage to the Prophet ﷺ",
      "The only wife of the Prophet other than Khadijah to pass away during his lifetime",
      "Personally led in funeral prayer and laid into Jannat al-Baqi by the Messenger of Allah"
    ],
    sources: "Al-Isabah #11219; Siyar A'lam an-Nubala 2/248–250; At-Tabaqat al-Kubra 8/115–116; Usd al-Ghabah 7/129.",
    badgeVer: "✓ Verified: Classical Biographical Consensus"
  },
  {
    id: 'umm-ayman',
    category: 'women-companions',
    badge: 'Mothers & Women Companions • Mother After My Mother',
    nameAr: 'أم أيمن بركة رضي الله عنها',
    nameEn: "Umm Ayman Barakah (رضي الله عنها)",
    readTime: '6 min read',
    subTitle: "Barakah al-Habashiyyah • Ummi Ba'da Ummi (My Mother After My Mother) • d. 23 AH / 644 CE",
    p1: "Barakah bint Tha'labah, universally known by her agnomen Umm Ayman, was an Ethiopian woman who served in the household of the Prophet's father Abdullah ibn Abdul Muttalib. When the Prophet Muhammad ﷺ was born, Barakah was the first human being to nurse, bathe, and embrace him.",
    p2: "When the Prophet was six years old, his mother Aminah bint Wahb died at Abwa during their return from Madinah. It was Barakah who gently closed Aminah's eyes, comforted the weeping orphan boy, and led his camel across the harsh desert sands back to Makkah to deliver him into the care of his grandfather Abdul Muttalib. The Prophet never forgot her devotion, famously declaring: 'Umm Ayman is my mother after my biological mother (Ummi ba'da ummi); she is the sole surviving member of my direct household!'",
    p3: "The Prophet emancipated Barakah upon marrying Khadijah. Later in Madinah, the Prophet arranged her marriage to his beloved adopted son Zayd ibn Harithah, announcing: 'Whoever wishes to marry a woman from the inhabitants of Paradise, let him marry Umm Ayman!' From this blessed union was born Usamah ibn Zayd. Umm Ayman served as a battlefield nurse at Uhud and Hunayn, carrying water and treating the wounded.",
    p4: "Following the Prophet's demise, Caliph Abu Bakr and Umar visited Umm Ayman in her house, just as the Prophet used to visit her. They found her weeping; when they said: 'What makes you weep? Surely what is with Allah is far better for the Messenger!' She replied with piercing insight: 'I do not weep because I do not know that what is with Allah is better for him; rather, I weep because the revelation from the heavens has ceased!' Upon hearing her words, both Abu Bakr and Umar burst into tears alongside her.",
    quote: '"Umm Ayman is my mother after my mother, and the remaining heir of my household." — Prophet Muhammad ﷺ (Al-Mustadrak al-Hakim #6830)',
    crossRefAr: 'وَوَصَّيْنَا الْإِنسَانَ بِوَالِدَيْهِ حُسْنًا',
    crossRefEn: '"And We have enjoined upon man kindness to his parents..." (Surah Al-Ankabut 29:8)',
    crossRefCtx: 'Embodied in the profound filial devotion and honor shown by the Prophet toward his caretaker Umm Ayman throughout his life.',
    achievements: [
      "The only human being who accompanied the Prophet from his birth until his death",
      "Brought the orphaned Prophet back from Abwa to Makkah following his mother Aminah's passing",
      "Honored by the Prophet with the title: 'My mother after my mother and a woman of Paradise'",
      "Mother of Usamah ibn Zayd and prominent veteran nurse at Uhud, Khaybar, and Hunayn"
    ],
    sources: "Sahih Muslim #2454; Al-Mustadrak #6830; Al-Isabah #11985; Siyar A'lam an-Nubala 2/223–227; At-Tabaqat al-Kubra 8/223–226.",
    badgeVer: "✓ Verified: Sahih Muslim"
  },
  {
    id: 'rufaydah',
    category: 'women-companions',
    badge: 'Mothers & Women Companions • Pioneer of Islamic Medicine',
    nameAr: 'رفيدة الأسلمية رضي الله عنها',
    nameEn: "Rufaydah al-Aslamiyyah (رضي الله عنها)",
    readTime: '6 min read',
    subTitle: "The First Nurse in Islamic History • Founder of the First Field Hospital • d. approx. 30 AH",
    p1: "Rufaydah bint Sa'd al-Aslamiyyah of the Banu Aslam clan in Madinah was an extraordinary pioneer of humanitarian medicine, clinical nursing, and emergency battlefield surgery in early Islamic civilization. Born into a medical family, she acquired extensive anatomical and pharmacological expertise from her physician father Sa'd al-Aslami.",
    p2: "Upon embracing Islam following the Hijrah, Rufaydah dedicated her medical talents entirely to the service of the community. She established a dedicated medical tent inside the courtyard of the Prophet's Mosque in Madinah, financed entirely from her own personal wealth, where she trained Muslim women as nurses, treated the sick, and cared for destitute patients and orphans.",
    p3: "Rufaydah is celebrated as the founder of the first mobile field hospital in human military history. At the Battle of the Trench (Khandaq, 5 AH), the Prophet Muhammad ﷺ ordered a dedicated medical tent (Khaymah) to be erected on the front lines under Rufaydah's direct supervision. When chieftain Sa'd ibn Mu'adh was critically wounded by an arrow that severed his medial arm vein, the Prophet specifically commanded: 'Place him in the tent of Rufaydah in the mosque so that I may visit him from close proximity.'",
    p4: "Rufaydah operated with remarkable clinical skill, arresting hemorrhages, suturing battlefield lacerations, dressing septic wounds, and maintaining strict hygienic standards that prevented secondary infections. Her nursing corps served at the Battle of Khaybar, where the Prophet ﷺ awarded Rufaydah a full soldier's share of the war spoils in recognition of her medical contributions. Her legacy stands as the historical origin of clinical nursing in the Islamic world.",
    quote: '"Place Sa\'d ibn Mu\'adh in the tent of Rufaydah in the mosque so that I may visit him from nearby." — Prophet Muhammad ﷺ (Al-Adab al-Mufrad #1129)',
    crossRefAr: 'وَمَنْ أَحْيَاهَا فَكَأَنَّمَا أَحْيَا النَّاسَ جَمِيعًا',
    crossRefEn: '"...and whoever saves one life - it is as if he had saved mankind entirely." (Surah Al-Ma\'idah 5:32)',
    crossRefCtx: 'The ethical foundation of Rufaydah al-Aslamiyyah\'s lifelong dedication to saving lives and clinical nursing.',
    achievements: [
      "Universally recognized as the first nurse and hospital administrator in Islamic history",
      "Founded the world's first mobile military field hospital during the Battle of the Trench",
      "Entrusted by the Prophet with the critical care of chieftain Sa'd ibn Mu'adh",
      "Awarded a combatant's share of the spoils at Khaybar by the Prophet for medical service"
    ],
    sources: "Al-Adab al-Mufrad #1129; Sahih al-Bukhari; Al-Isabah #11184; Usd al-Ghabah 7/110; Tarikh at-Tabari 2/580.",
    badgeVer: "✓ Verified: Bukhari's Al-Adab al-Mufrad"
  },
  {
    id: 'al-bara-ibn-malik',
    category: 'stalwarts',
    badge: 'Martyrs, Leaders & Stalwarts • The Hero of the Garden of Death',
    nameAr: 'البراء بن مالك رضي الله عنه',
    nameEn: "Al-Bara' ibn Malik (رضي الله عنه)",
    readTime: '6 min read',
    subTitle: "Brother of Anas ibn Malik • Champion of Yamamah • Abu Umarah • Martyr of Tustar • d. 20 AH / 641 CE",
    p1: "Al-Bara' ibn Malik, elder brother of Anas ibn Malik (the Prophet's servant), was a legendary warrior whose fearless valor and ferocity in battle became proverbial across Arabia. Slender, wiry, and unassuming in appearance, Al-Bara' killed over one hundred enemy combatants in single duels throughout his military career.",
    p2: "The Prophet Muhammad ﷺ testified to Al-Bara's extraordinary spiritual station with Allah: 'There are many a disheveled person, dusty, dressed in worn garments, whom people pay no attention to, but if he were to adjure Allah to do something, Allah would surely fulfill it! Among them is Al-Bara' ibn Malik!' (Sahih al-Tirmidhi #3854).",
    p3: "His greatest historical hour occurred at the Battle of Yamamah (12 AH) during the Wars of Apostasy. Musaylimah the False Prophet and 40,000 hardened troops retreated inside an impregnable fortress known as 'The Garden of Rahman' (Hadiqat ar-Rahman), locking the iron gates. Seeing the Muslim army faltering, Al-Bara' climbed onto a wooden shield and ordered his comrades: 'O Muslims! Place me upon your spears and hurl me over the fortress walls!'",
    p4: "The Muslims hoisted him on their spears and flung his body over the ramparts. Landing alone among thousands of enemy troops, Al-Bara' fought like a thunderstorm, slaying dozens until he cut his way to the gates and swung them wide open, allowing the Muslim army to flood inside. The fortress was taken, Musaylimah was killed, and the battle was won; Al-Bara' survived with over eighty sword and arrow wounds, requiring Khalid ibn al-Walid to nurse him for an entire month. In 20 AH at the siege of Tustar in Persia, Al-Bara' begged his Lord for martyrdom, charged the Persian citadel, and fell martyred smiling.",
    quote: '"Do not appoint Al-Bara\' ibn Malik as commander over any Muslim army, for he will march them into death out of his utter fearlessness!" — Caliph Umar ibn al-Khattab (Siyar A\'lam an-Nubala 1/377)',
    crossRefAr: 'إِنَّ اللَّهَ اشْتَرَىٰ مِنَ الْمُؤْمِنِينَ أَنفُسَهُمْ وَأَمْوَالَهُم بِأَنَّ لَهُمُ الْجَنَّةَ',
    crossRefEn: '"Indeed, Allah has purchased from the believers their lives and their properties [in exchange] for that they will have Paradise..." (Surah At-Tawbah 9:111)',
    crossRefCtx: 'Embodied in the self-sacrificing charge of Al-Bara\' ibn Malik over the walls of the Garden of Death.',
    achievements: [
      "Praised by the Prophet as one whose oaths and prayers Allah unfailingly answers",
      "Hero of the Garden of Death at Yamamah who catapulted over fortress walls to open the gates",
      "Killed over 100 enemy champions in single duels during his military career",
      "Martyred at the siege of Tustar in Persia after praying for martyrdom and victory"
    ],
    sources: "Sunan al-Tirmidhi #3854; Al-Mustadrak #6030; Siyar A'lam an-Nubala 1/377–381; Al-Isabah #625; At-Tabaqat al-Kubra 7/16–18.",
    badgeVer: "✓ Verified: Sahih al-Tirmidhi"
  },
  {
    id: 'thabit-ibn-qays',
    category: 'ansar-leaders',
    badge: 'Chieftains of the Ansar • The Orator of the Prophet',
    nameAr: 'ثابت بن قيس رضي الله عنه',
    nameEn: "Thabit ibn Qays (رضي الله عنه)",
    readTime: '6 min read',
    subTitle: "Khateeb Rasoolillah • The Orator of the Ansar • Martyr of Yamamah • Abu Muhammad • d. 12 AH / 633 CE",
    p1: "Thabit ibn Qays ibn Shammas of the Banu al-Harith clan of Khazraj was the most eloquent, powerful, and respected orator (Khateeb) in Madinah. Endowed with a booming, thunderous voice and unmatched poetic eloquence, the Prophet Muhammad ﷺ designated Thabit as Khateeb Rasoolillah (The Official Orator of the Messenger of Allah).",
    p2: "When the haughty delegation of Banu Tamim arrived in Madinah in 9 AH challenging the Prophet to an oratorical competition, their champion orator Utarid ibn Hajib delivered a boastful speech glorifying their lineage and wealth. The Prophet commanded Thabit: 'Stand and reply to him!' Thabit delivered a magnificent, thunderous speech expounding divine monotheism, prophetic humility, and the honor of the Ansar that left the Tamimi elders utterly confounded, prompting them to declare: 'By Allah, his orator is far more eloquent than our orator!' and they embraced Islam on the spot.",
    p3: "When Surah Al-Hujurat (49:2) was revealed: 'O you who have believed, do not raise your voices above the voice of the Prophet...', Thabit locked himself inside his house, weeping inconsolably. When the Prophet noticed his absence, he sent for him. Thabit cried: 'O Messenger of Allah, I am a man with a naturally loud voice; I fear that my good deeds have been nullified and that I am from the inhabitants of the Fire!' The Prophet smiled warmly and declared: 'Nay, you are not from the inhabitants of the Fire; rather, you shall live praiseworthy, you shall die as a martyr, and you shall enter Paradise!'",
    p4: "At the Battle of Yamamah (12 AH), when the Muslim ranks were initially thrown into disorder by Musaylimah's fierce counter-attack, Thabit and Salim Mawla Abi Hudhayfah applied perfume (Hunut), donned their white burial shrouds, dug a trench up to their knees, and stood rooted like iron pillars holding the banner of the Ansar. Fighting with magnificent valor, Thabit held the line until he fell martyred, fulfilling the exact prophetic guarantee that he would live praised and die a martyr.",
    quote: '"Nay, O Thabit, you are not of the people of the Fire; rather, you will live praised, you will die a martyr, and Allah will admit you into Paradise!" — Prophet Muhammad ﷺ (Sahih al-Bukhari #3613; Sahih Muslim #119)',
    crossRefAr: 'يَا أَيُّهَا الَّذِينَ آمَنُوا لَا تَرْفَعُوا أَصْوَاتَكُمْ فَوْقَ صَوْتِ النَّبِيِّ',
    crossRefEn: '"O you who have believed, do not raise your voices above the voice of the Prophet..." (Surah Al-Hujurat 49:2)',
    crossRefCtx: 'The direct revelation that prompted Thabit\'s profound weeping and resulted in his explicit prophetic guarantee of Paradise.',
    achievements: [
      "Appointed by the Prophet as Khateeb Rasoolillah (The Official Orator of the Prophet and Islam)",
      "Defeated the champion orators of Banu Tamim, leading to their collective conversion",
      "Explicitly guaranteed martyrdom and Paradise by the Prophet following Surah Al-Hujurat",
      "Heroic standard-bearer of the Ansar who fought wrapped in his burial shroud at Yamamah"
    ],
    sources: "Sahih al-Bukhari #3613, #4846; Sahih Muslim #119; Al-Isabah #984; Siyar A'lam an-Nubala 1/308–313; At-Tabaqat al-Kubra 3/503–508.",
    badgeVer: "✓ Verified: Muttafaqun 'Alayh"
  }
];

function buildArticleHtml(c) {
  return `
      <!-- Biography: ${c.id} -->
      <article id="${c.id}" class="card sahaba-card" data-category="${c.category}" style="margin-bottom: 36px; border-top: 4px solid var(--color-primary); padding: 30px;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px; flex-wrap: wrap; gap: 8px;">
          <span class="badge" style="background: var(--color-primary); color: #fff;">${c.badge}</span>
          <span class="font-arabic" style="font-size: 1.35rem; color: var(--color-gold-dark); font-weight: 700;">${c.nameAr}</span>
        </div>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; flex-wrap: wrap; gap: 8px;">
          <h2 style="font-size: 1.55rem; color: var(--color-primary); margin: 0; font-weight: 800;">${c.nameEn}</h2>
          <span style="font-size: 0.85rem; color: var(--color-text-muted); font-weight: 600;">⏱️ ${c.readTime}</span>
        </div>
        <div style="font-size: 0.9rem; color: var(--color-text-muted); font-weight: 600; margin-bottom: 18px;">
          ${c.subTitle}
        </div>

        <p style="line-height: 1.85; color: var(--color-text-main); margin-bottom: 18px; font-size: 1.02rem;">${c.p1}</p>
        <p style="line-height: 1.85; color: var(--color-text-main); margin-bottom: 18px; font-size: 1.02rem;">${c.p2}</p>
        <p style="line-height: 1.85; color: var(--color-text-main); margin-bottom: 18px; font-size: 1.02rem;">${c.p3}</p>
        <p style="line-height: 1.85; color: var(--color-text-main); margin-bottom: 18px; font-size: 1.02rem;">${c.p4}</p>

        <!-- Notable Quote -->
        <blockquote style="border-left: 4px solid var(--color-gold); padding: 14px 20px; font-style: italic; color: var(--color-text-main); font-size: 1rem; background: var(--color-surface); border-radius: var(--radius-sm); margin: 20px 0;">
          ${c.quote}
        </blockquote>

        <!-- Quranic / Hadith Cross-Reference Box -->
        <div class="sahaba-cross-box" style="background: rgba(15,81,50,0.05); border: 1px solid rgba(15,81,50,0.2); border-left: 4px solid var(--color-primary); border-radius: var(--radius-sm); padding: 18px 22px; margin: 20px 0 18px 0;">
          <div style="font-size: 0.82rem; font-weight: 700; color: var(--color-primary); text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">📖 Quranic & Hadith Cross-Reference</div>
          <div class="font-arabic" style="font-size: 1.3rem; line-height: 2; color: var(--color-text-main); direction: rtl; text-align: right; margin-bottom: 10px;">${c.crossRefAr}</div>
          <div style="font-size: 0.95rem; font-style: italic; color: var(--color-text-main); margin-bottom: 8px; line-height: 1.6;">${c.crossRefEn}</div>
          <div style="font-size: 0.88rem; color: var(--color-text-muted); line-height: 1.5;"><strong>Historical & Theological Context:</strong> ${c.crossRefCtx}</div>
        </div>

        <!-- Key Achievements Box -->
        <div style="background-color: var(--color-surface); padding: 16px 20px; border-radius: var(--radius-sm); font-size: 0.92rem; border-left: 3px solid var(--color-gold); margin-bottom: 18px;">
          <strong style="color: var(--color-primary); display: block; margin-bottom: 6px;">Key Historical Achievements & Virtues:</strong>
          <ul style="margin: 0; padding-left: 20px; line-height: 1.7; color: var(--color-text-main);">
            ${c.achievements.map(a => `<li>${a}</li>`).join('\n            ')}
          </ul>
        </div>

        <!-- Primary Classical Sources & Theological Badge -->
        <div style="display: flex; justify-content: space-between; align-items: center; font-size: 0.88rem; color: var(--color-text-muted); flex-wrap: wrap; gap: 10px; border-top: 1px solid var(--color-border); padding-top: 14px;">
          <span><strong>Primary Sources:</strong> ${c.sources}</span>
          <span class="badge" style="background: rgba(15,81,50,0.12); color: var(--color-primary); border: 1px solid var(--color-primary);">${c.badgeVer}</span>
        </div>
      </article>
`;
}

const allArticlesHtml = companions.map(buildArticleHtml).join('\n');

// Insert right before </div>\n\n  </main>
const targetSplit = '      </article>\n\n    </div>\n\n  </main>';
if (html.includes(targetSplit)) {
  html = html.replace(targetSplit, '      </article>\n' + allArticlesHtml + '\n    </div>\n\n  </main>');
  console.log(`Successfully injected ${companions.length} new Sahaba articles.`);
} else {
  // Try regex replacement
  html = html.replace(/(<!-- Biography: musab -->[\s\S]*?<\/article>)\s*(<\/div>\s*<\/main>)/, '$1\n' + allArticlesHtml + '\n$2');
  console.log(`Injected via regex fallback.`);
}

fs.writeFileSync(sahabaFile, html);
console.log('sahaba.html saved successfully.');
