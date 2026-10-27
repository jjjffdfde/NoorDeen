const P = t => `<p style="line-height:1.8; color:var(--color-text-main); margin-bottom:14px;">${t}</p>`;
const H3 = t => `<h3 style="font-size:1.15rem; color:var(--color-primary); margin:22px 0 10px;">${t}</h3>`;
const UL = items => `<ul style="line-height:1.9; color:var(--color-text-main); padding-left:20px; margin-bottom:14px;">${items.map(i => `<li>${i}</li>`).join('')}</ul>`;
const Q = (text, cite) => `<blockquote style="background:var(--color-card); border-left:4px solid var(--color-gold); padding:16px 22px; margin:18px 0; border-radius:0 8px 8px 0;"><div style="font-style:italic; color:var(--color-text-main); line-height:1.8;">&ldquo;${text}&rdquo;</div><div style="margin-top:6px; font-size:0.85rem; color:var(--color-gold); font-weight:600;">${cite}</div></blockquote>`;
const NOTE = t => `<div style="background:var(--color-surface); border:1px solid var(--color-border); border-radius:10px; padding:16px 18px; margin:18px 0; font-size:0.92rem; line-height:1.75;">${t}</div>`;

const commonRelated = [
  { href: 'index.html', label: 'Articles Library — full catalogue' },
  { href: '../seerah.html', label: 'Seerah library — 25 chapters' },
  { href: '../prophets.html', label: 'Stories of the Prophets' },
  { href: '../sahaba.html', label: 'Lives of the Sahaba — 52 biographies' },
  { href: '../history.html', label: 'Islamic History — 12 eras' }
];

module.exports = [
  {
    slug: 'seerah-of-prophet-muhammad',
    title: 'Seerah of Prophet Muhammad ﷺ: A Guided Journey',
    metaTitle: 'Seerah of Prophet Muhammad ﷺ: A Guided Journey',
    description: 'A source-based introduction to the life of Prophet Muhammad ﷺ: the Makkan revelation, the Hijrah, the Madinan community, the farewell pilgrimage, and the lessons of the Seerah for Muslims today.',
    category: 'Seerah',
    readTime: '11 min',
    intro: P('The <strong>Seerah</strong> (السيرة) is the recorded life of Prophet Muhammad ﷺ — his birth, character, mission, community-building, conflicts, treaties, family life and final sermon. It is not a collection of inspiring anecdotes. It is the historical framework within which the Qur\'an was revealed, and therefore the context that makes the Qur\'an intelligible. This guide gives a chronological overview, identifies the primary sources, and explains how to study the Seerah without turning it into legend.') + P('It is written for readers who want a trustworthy starting point, not a devotional substitute for the classical works. Where dates are conventional rather than certain, they are described as such.'),
    keyTakeaways: [
      'The Seerah is the historical context of the Qur\'an, not a separate scripture.',
      'The Makkan period emphasises patience and tawhid; the Madinan period emphasises law, community and coexistence.',
      'The earliest surviving full biography is Ibn Ishaq\'s, preserved through Ibn Hisham.',
      'Muslims study the Prophet ﷺ as a human messenger, not as a divine figure.',
      'The Farewell Sermon is a compact statement of universal rights and responsibilities.'
    ],
    sections: [
      {
        id: 'what-is-seerah',
        heading: 'What the Seerah Is and Why It Matters',
        html: P('The word <em>seerah</em> means a path or a way of life, and in Islamic scholarship it refers to the biography of the Prophet ﷺ. It differs from the <em>hadith</em> corpus: a hadith records a saying, action or approval used to derive law, while the Seerah narrates the sequence of events. The two overlap constantly, and serious study uses both.') +
          P('The Qur\'an repeatedly anchors its message in history: it refers to the Prophet\'s childhood, the migration, the battles, his marriages, and the accusations of his opponents. Without the Seerah, those references become abstract. With it, the reader sees revelation descending into a real society with real pressures.') +
          Q('Indeed, Allah has favoured the believers by sending among them a Messenger from themselves, reciting to them His verses and purifying them and teaching them the Book and wisdom, although they were before in clear error.', 'Qur\'an 3:164') +
          P('The Seerah also protects against two errors: reducing the Prophet ﷺ to a legendary figure with no human limitations, or treating him as a mere social reformer with no prophetic authority. Sunni theology holds both truths together — a fully human messenger, protected in his delivery of revelation, and the final Prophet.')
      },
      {
        id: 'arabia-before',
        heading: 'Arabia Before the Revelation',
        html: P('The Arabian Peninsula in the sixth century was not an isolated vacuum. It sat between the Byzantine and Sasanian empires, carried trade through Makkah and Yemen, and hosted Jewish and Christian communities in the north and south. Makkah itself was a pilgrimage and commercial centre centred on the Ka\'bah.') +
          P('Politically it was fragmented into tribes. Morally, the society combined genuine virtues — hospitality, courage, loyalty to kin — with practices Islam would confront: tribal vengeance, the burial of infant daughters, usury, and the worship of idols alongside Allah. The Qur\'an describes this as <em>jahiliyyah</em>, a condition of ignorance and heedlessness rather than a simple lack of information.') +
          NOTE('<strong>Source note:</strong> Reconstructions of pre-Islamic Arabia draw on the Qur\'an, early poetry, genealogy, and later histories such as al-Tabari. Details vary; the broad picture above is uncontested.')
      },
      {
        id: 'birth-and-character',
        heading: 'Birth, Childhood and the Trustworthy One',
        html: P('Muhammad ﷺ was born in Makkah around 570 CE, according to the conventional dating, into the clan of Banu Hashim of Quraysh. His father Abdullah died before his birth, and his mother Aminah died when he was a young child. He was raised first by his grandfather Abd al-Muttalib and then by his uncle Abu Talib.') +
          P('As a young man he worked in trade, and his honesty earned him the title <em>al-Amin</em>, the trustworthy. His marriage to Khadijah bint Khuwaylid, a respected businesswoman, provided stability, affection and — crucially — the first person to believe in his mission.') +
          P('These decades are not filler. They establish the character that the revelation would later confirm. The Prophet ﷺ was known for truthfulness before he was known for prophethood, which is why his opponents struggled to call him a liar even while rejecting his message.') +
          Q('And indeed, you are of a great moral character.', 'Qur\'an 68:4')
      },
      {
        id: 'first-revelation',
        heading: 'The First Revelation at the Cave of Hira',
        html: P('Around 610 CE, at the age of forty, the Prophet ﷺ was in retreat in the cave of Hira on Jabal al-Nur near Makkah. The first revelation came there. The Qur\'an describes the beginning of revelation in Surah al-Alaq, and the encounter is narrated in detail in the hadith collections.') +
          Q('Recite in the name of your Lord who created — created man from a clinging substance. Recite, and your Lord is the most Generous — who taught by the pen — taught man that which he knew not.', 'Qur\'an 96:1–5') +
          P('The experience was overwhelming. He returned to Khadijah trembling, and she reassured him, wrapped him, and took him to her cousin Waraqah ibn Nawfal, a Christian scholar who recognised the pattern of revelation. The first converts were Khadijah, Abu Bakr, Ali and Zayd ibn Harithah.') +
          P('After an initial pause, Surah al-Muddaththir commissioned him to warn: <em>“Arise and warn”</em> (74:2). The mission had begun, and with it the public confrontation with Makkan idolatry.')
      },
      {
        id: 'makkan-period',
        heading: 'The Makkan Period: Patience Under Persecution',
        html: P('For roughly thirteen years the Prophet ﷺ preached in Makkah. The message was uncompromisingly theological: Allah alone deserves worship, and the idols are powerless. This threatened not only religious sensibilities but the economic and political order built around the pilgrimage trade.') +
          P('Opposition escalated from mockery to social boycott to physical torture of vulnerable converts. Bilal ibn Rabah, a slave, was tortured and later freed by Abu Bakr. The Prophet\'s own clan was boycotted for years. Yet the Qur\'an\'s Makkan surahs consistently answer persecution with patience, steadfastness and trust in Allah rather than with retaliation.') +
          P('Two migrations mark this period. Some Muslims migrated to Abyssinia, where the Christian king Negus offered protection. Later, the Prophet ﷺ travelled to Ta\'if seeking support and was rejected and stoned; he did not curse the city. These are not minor episodes — they define the prophetic method under pressure.') +
          NOTE('<strong>Chronology caution:</strong> The exact order of Makkan surahs is debated among scholars. The broad division into Makkan and Madinan revelation is agreed; precise dating of individual verses is not.')
      },
      {
        id: 'hijrah',
        heading: 'The Hijrah and the Madinan Community',
        html: P('In 622 CE the Prophet ﷺ and his companions migrated to Yathrib, later Madinah. The Hijrah was not a flight in panic but a negotiated relocation. Representatives from Yathrib had already pledged allegiance, and the Prophet ﷺ arrived to a community expecting him.') +
          P('One of the first acts was the construction of the mosque — a place of prayer, consultation and education. The second was the document often called the Constitution of Madinah, which regulated relations between the Muhajirun (migrants), the Ansar (helpers), and the Jewish tribes of the city. It established mutual obligations, freedom of religion, and procedures for dispute resolution.') +
          P('The Hijrah marks the start of the Islamic calendar for a reason: it is the moment the message moved from proclamation to the construction of a society. The Madinan surahs accordingly contain detailed legislation on prayer, fasting, zakat, marriage, inheritance, war and peace.') +
          Q('And those who emigrated for the cause of Allah and then were killed or died — Allah will surely provide for them a good provision.', 'Qur\'an 22:58')
      },
      {
        id: 'madinah-state',
        heading: 'Worship, Law and Coexistence in Madinah',
        html: P('The Madinan period is often reduced to battles, but its core is institution-building. The Prophet ﷺ led prayer, adjudicated disputes, appointed teachers, sent letters to neighbouring rulers, and trained a generation in both worship and public responsibility.') +
          P('The battles themselves must be read in context. Badr, Uhud, the Trench, Khaybar and Hunayn were not campaigns of conquest for their own sake; they were defensive and strategic responses to existential threats. The treaties — notably Hudaybiyyah — show a willingness to accept unfavourable terms for the sake of peace.') +
          P('The Prophet\'s ﷺ treatment of prisoners, his prohibition of harming non-combatants, and his instructions about trees and animals are part of the Seerah\'s ethical content. They are not optional decorations; classical jurists derived rules of war from them.') +
          P('His family life also belongs here. His marriages after Khadijah were largely political and social alliances, and the Qur\'an addresses the household directly. A serious Seerah does not ignore this material, nor does it sensationalise it.')
      },
      {
        id: 'farewell-and-passing',
        heading: 'The Farewell Pilgrimage and the Passing',
        html: P('In 632 CE the Prophet ﷺ performed Hajj and delivered what is known as the Farewell Sermon at Arafah. It is a compact charter: the sanctity of life and property, the abolition of usury, the rights of women, the equality of believers, and the obligation to hold fast to the Qur\'an and Sunnah.') +
          Q('O people, your lives and your property are sacred until you meet your Lord, as sacred as this day, this month and this city.', 'Farewell Sermon, narrated in Sahih Muslim, Book of Hajj') +
          P('He fell ill shortly afterwards and died in Madinah, buried in the room of Aisha. His death confronted the community with its first great crisis, resolved when Abu Bakr reminded them that whoever worshipped Muhammad should know he had died, but whoever worshipped Allah should know that Allah is ever-living.') +
          P('The Prophet ﷺ did not leave a successor by explicit designation, a fact that shaped the political history of the Ummah. He did leave a completed religion, a trained community, and a written scripture.')
      },
      {
        id: 'lessons',
        heading: 'How to Study the Seerah Today',
        html: P('Begin with the Qur\'an, then read a reliable modern biography alongside a classical source. The earliest full biography is Ibn Ishaq\'s, preserved in Ibn Hisham\'s recension; al-Tabari\'s history and Ibn Kathir\'s <em>al-Bidaya wa al-Nihaya</em> provide broader context. Modern works such as Safiur Rahman Mubarakpuri\'s <em>ar-Raheeq al-Makhtum</em> are widely used but should be read critically.') +
          UL([
            'Distinguish between established events, later reports, and hagiographic additions.',
            'Read the Seerah as a whole, not as isolated proof-texts for contemporary arguments.',
            'Pay attention to the Prophet\'s ﷺ character under pressure — that is the heart of the message.',
            'Avoid visual depictions of the Prophet ﷺ, in line with mainstream Islamic tradition.',
            'Use the Seerah to understand the Qur\'an, not to replace it.'
          ]) +
          P('The Seerah is ultimately a study in how revelation transforms a person, a community and a civilisation. That is why it remains relevant fourteen centuries later.')
      }
    ],
    faqs: [
      { q: 'Is the Seerah historically reliable?', a: 'The broad outline — birth in Makkah, revelation at forty, migration to Madinah, battles, treaties, farewell pilgrimage, death in 632 CE — is established across early sources and non-Muslim records. Individual reports vary in strength, and scholars of hadith applied their own grading methods to biographical reports. A careful reader distinguishes the secure outline from disputed details.' },
      { q: 'What are the best primary sources for the Seerah?', a: 'The earliest surviving full biography is Ibn Ishaq (d. 767 CE), preserved through Ibn Hisham (d. 833 CE). Al-Tabari\'s <em>Tarikh</em> and Ibn Kathir\'s <em>al-Bidaya wa al-Nihaya</em> are major later compilations. The Qur\'an and the canonical hadith collections remain the most authoritative sources for the Prophet\'s words and actions.' },
      { q: 'Why do Muslims not depict the Prophet ﷺ?', a: 'Mainstream Islamic tradition prohibits visual representation of prophets, to safeguard against idolatry and to preserve the distinction between the messenger and the divine. This is a religious norm, not merely a cultural preference, and it is respected in this library.' },
      { q: 'How long was the prophetic mission?', a: 'Approximately twenty-three years: about thirteen years in Makkah after the first revelation, followed by about ten years in Madinah until his death in 632 CE.' },
      { q: 'Was the Prophet ﷺ a political leader as well as a religious one?', a: 'Yes. In Madinah he led the community in worship, law, diplomacy and defence. Islamic tradition does not separate the religious and political dimensions of his role, though later scholars debated how that model should be applied in different historical circumstances.' }
    ],
    bibliography: [
      'The Qur\'an — especially Surahs al-Alaq (96), al-Muddaththir (74), al-Muzzammil (73), al-Isra (17), al-Ahzab (33), al-Fath (48) and al-Mumtahanah (60).',
      'Ibn Hisham, <em>al-Sirah al-Nabawiyyah</em>, based on Ibn Ishaq.',
      'Al-Tabari, <em>Tarikh al-Rusul wa al-Muluk</em>.',
      'Ibn Kathir, <em>al-Bidaya wa al-Nihaya</em>.',
      'Safiur Rahman Mubarakpuri, <em>ar-Raheeq al-Makhtum</em> (modern biography; read alongside classical sources).',
      'Martin Lings, <em>Muhammad: His Life Based on the Earliest Sources</em> (secondary English biography).',
      'Sahih al-Bukhari and Sahih Muslim — Books of Revelation, Faith, Virtues, Hajj and Maghazi.'
    ],
    related: commonRelated
  },

  {
    slug: 'stories-of-the-prophets',
    title: 'Stories of the Prophets: Quranic Narratives and Their Lessons',
    metaTitle: 'Stories of the Prophets: Quranic Narratives and Their Lessons',
    description: 'A guided study of the prophetic narratives in the Qur\'an — Adam, Nuh, Ibrahim, Yusuf, Musa, Dawud, Sulayman, Ayyub and Isa — with verse references, theological themes and lessons for readers today.',
    category: 'Prophets',
    readTime: '12 min',
    intro: P('The Qur\'an is not a sequential history book. It retells the lives of earlier prophets in purposeful, repeated narratives, each time selecting the details that serve the message of the surah. This article follows the major prophetic stories in Qur\'anic order of importance, cites the primary passages, and draws out the recurring themes: tawhid, patience, repentance, justice and deliverance.') + P('The aim is not to replace the Qur\'an with a summary. It is to help a reader enter the narratives with the right questions and the right sources.'),
    keyTakeaways: [
      'Qur\'anic prophetic stories are theological arguments, not merely entertainment.',
      'The same prophet may appear in several surahs with different emphasis.',
      'The Qur\'an affirms the prophethood of figures also found in the Bible, while correcting key doctrines.',
      'The stories consistently contrast prophetic patience with human arrogance.',
      'Details not found in the Qur\'an or authentic Sunnah should be treated cautiously.'
    ],
    sections: [
      {
        id: 'why-stories',
        heading: 'Why the Qur\'an Tells These Stories',
        html: P('The Qur\'an calls its narratives <em>qasas</em>, and it states its purpose explicitly: to strengthen the heart of the Prophet ﷺ and the believers, and to confront humanity with the consequences of belief and denial.') +
          Q('And We have certainly sent messengers before you; among them are those whose story We have related to you, and among them are those whose story We have not related to you.', 'Qur\'an 40:78') +
          P('This verse is important. The Qur\'an does not claim to record every prophet, and it does not supply a complete biography of those it does mention. Where later storytellers filled gaps with elaborate detail, scholars distinguished between what is established and what is <em>isra\'iliyyat</em> — material drawn from Jewish and Christian sources and not verifiable through Islamic chains.') +
          NOTE('<strong>Method:</strong> This article cites the Qur\'an directly. Where a detail is not in the Qur\'an or authentic hadith, it is omitted rather than invented.')
      },
      {
        id: 'adam',
        heading: 'Adam: Creation, Trust and Repentance',
        html: P('The story of Adam opens the human drama. Allah created him, taught him the names, honoured him, and commanded the angels to prostrate. Iblis refused out of arrogance. Adam and his wife were placed in the Garden, warned about the tree, deceived by Iblis, and then forgiven after repentance.') +
          Q('Then Adam received from his Lord words, and He accepted his repentance. Indeed, it is He who is the Accepting of repentance, the Merciful.', 'Qur\'an 2:37') +
          P('Several doctrines emerge. Humans are dignified by knowledge and divine appointment as stewards. Sin is possible, but repentance is available. Iblis\'s sin was not merely disobedience but arrogance — he believed his nature made him superior.') +
          P('The Qur\'an does not teach original sin in the Christian sense. Every person is accountable for their own deeds, and Adam\'s repentance is a model rather than a permanent inheritance of guilt.')
      },
      {
        id: 'nuh',
        heading: 'Nuh: Patience Over Centuries',
        html: P('Nuh called his people to worship Allah alone for a very long period. The Qur\'an mentions nine hundred and fifty years before the flood, and describes his people\'s mockery and rejection. He built the ark under divine instruction, and the believers and pairs of animals were saved.') +
          Q('And We certainly sent Nuh to his people, and he remained among them a thousand years minus fifty years. Then the flood seized them while they were wrongdoers.', 'Qur\'an 29:14') +
          P('The story is a study in perseverance. Nuh does not abandon his mission when results are absent. The ark is a physical act of obedience in the face of ridicule. The flood is presented as justice, not caprice.') +
          P('The Qur\'an also corrects a common assumption: Nuh\'s own son was not saved, because salvation is not inherited through lineage. Faith and action are personal.')
      },
      {
        id: 'ibrahim',
        heading: 'Ibrahim: The Friend of Allah and the Trial of Faith',
        html: P('Ibrahim is the most frequently mentioned prophet after Muhammad ﷺ, and the Qur\'an presents him as a model of pure monotheism. He questioned the worship of idols, confronted his people, and was thrown into a fire from which Allah saved him.') +
          Q('They said, "Burn him and support your gods, if you are to act." We said, "O fire, be coolness and safety upon Ibrahim."', 'Qur\'an 21:68–69') +
          P('His story includes the migration, the birth of Isma\'il and Ishaq, the trial of the sacrifice, and the construction of the Ka\'bah with Isma\'il. The Qur\'an describes him as <em>khalil Allah</em>, the friend of Allah, and as a <em>hanif</em>, one who turns away from polytheism.') +
          P('The trial of the sacrifice is not a story about child abuse or divine cruelty. It is a test of whether love for Allah can be absolute, and it ends with a ransom and a lesson in submission. Muslims commemorate it annually, but the Qur\'an is explicit that the point was Ibrahim\'s willingness, not the taking of a life.') +
          P('Ibrahim also exemplifies critical thinking: he observes the stars, moon and sun, and concludes that none can be divine because all are transient (6:75–79). Faith and reason are not presented as enemies.')
      },
      {
        id: 'yusuf',
        heading: 'Yusuf: Patience, Chastity and Forgiveness',
        html: P('Surah Yusuf is the only surah that tells a single prophet\'s story from beginning to end. It is a masterclass in narrative theology: betrayal by brothers, slavery, false accusation, imprisonment, interpretation of dreams, rise to authority, and reconciliation.') +
          Q('We relate to you the best of stories in what We have revealed to you of this Qur\'an although you were, before it, among the unaware.', 'Qur\'an 12:3') +
          P('Yusuf\'s response to temptation is a model of self-control: he chooses imprisonment over sin. His patience in prison is not passive; he continues to call to tawhid. His eventual forgiveness of his brothers — <em>“No blame upon you today”</em> (12:92) — is one of the most striking acts of mercy in scripture.') +
          P('The surah also teaches that apparent setbacks can be part of a larger plan. What looked like ruin became the means of saving a nation from famine.')
      },
      {
        id: 'musa',
        heading: 'Musa: Confronting Pharaoh',
        html: P('Musa\'s story is the longest and most politically charged prophetic narrative in the Qur\'an. Born under a decree of infanticide, placed in a river, raised in Pharaoh\'s palace, exiled after killing an Egyptian, called at the burning bush, and sent back to confront the tyrant.') +
          Q('Go to Pharaoh. Indeed, he has transgressed. And speak to him with gentle speech that perhaps he may be reminded or fear [Allah].', 'Qur\'an 20:43–44') +
          P('The confrontation with Pharaoh is a contest between prophetic authority and political absolutism. The magicians, initially allies of Pharaoh, recognise the truth and accept faith despite threats. The Exodus, the parting of the sea, and the deliverance of the Children of Israel follow.') +
          P('Musa is also shown as a human being who struggles: he asks for his brother Harun\'s support, he fears, he grows angry when his people worship the calf. The Qur\'an does not flatten prophets into superhumans; it shows them relying on Allah.')
      },
      {
        id: 'dawud-sulayman-ayyub',
        heading: 'Dawud, Sulayman and Ayyub: Power and Patience',
        html: P('Dawud receives kingship, wisdom and the Psalms. Sulayman inherits his kingdom and is given extraordinary authority over wind, jinn and the language of birds — yet the Qur\'an emphasises that his power was a test, not a reward for entitlement.') +
          Q('And We had certainly given Dawud and Sulayman knowledge. And they said, "Praise to Allah, who has favoured us over many of His believing servants."', 'Qur\'an 27:15') +
          P('Ayyub is the paradigm of patience in affliction. He loses wealth, children and health, yet does not curse Allah. His prayer is not a demand for explanation but a plea for mercy, and he is restored.') +
          Q('And remember Our servant Ayyub, when he called to his Lord, "Indeed, Satan has touched me with hardship and pain."', 'Qur\'an 38:41') +
          P('These three stories together answer a question every believer faces: how should power and suffering be carried? With gratitude, accountability and patience — not with arrogance in the first case or despair in the second.')
      },
      {
        id: 'isa',
        heading: 'Isa: The Messiah and His Miracles',
        html: P('The Qur\'an honours Isa ibn Maryam as a mighty messenger, born miraculously to Maryam, speaking in the cradle, healing the blind and the leper, and raising the dead by Allah\'s permission.') +
          Q('Indeed, the example of Isa to Allah is like that of Adam. He created him from dust; then He said to him, "Be," and he was.', 'Qur\'an 3:59') +
          P('The Qur\'an explicitly rejects the doctrine of the Trinity and the claim that Isa is divine, while affirming his prophethood and his mother\'s purity. It also states that he was not crucified in the way his opponents claimed, a point of significant theological difference with Christianity.') +
          P('Muslims believe Isa will return before the end of time, a belief grounded in authentic hadith. The Qur\'anic portrait is thus neither a rejection of Isa nor an acceptance of later Christian doctrine: it is a correction that restores him to the prophetic line.')
      },
      {
        id: 'reading-today',
        heading: 'How to Read These Stories Today',
        html: P('Read each narrative in its surah context. Ask what the passage is arguing, to whom, and why. Note the repeated phrases — mercy, signs, gratitude, rejection — because repetition is part of the Qur\'an\'s pedagogy.') +
          UL([
            'Prefer the Qur\'an and authentic hadith over popular storybooks.',
            'Treat extra-Qur\'anic detail cautiously; much of it is unverifiable.',
            'Look for the theological point, not just the plot.',
            'Notice how the stories comfort and warn at the same time.',
            'Avoid using narratives to settle contemporary political disputes without scholarly context.'
          ]) +
          P('The prophets are presented as a single brotherhood carrying one message: worship Allah alone, live justly, and prepare for accountability. That unity is the deepest lesson of the stories.')
      }
    ],
    faqs: [
      { q: 'Are the Qur\'anic stories of the prophets literal history?', a: 'Sunni Islam treats them as true accounts of real prophets, though the Qur\'an often omits chronological detail and uses narrative emphasis rather than reportage. The theological claims are held to be true; the precise reconstruction of every event is not always specified.' },
      { q: 'Why does the Qur\'an repeat the same story in different surahs?', a: 'Repetition serves different audiences and purposes. A story told in a Makkan surah may emphasise patience under persecution, while the same story in a Madinan surah may emphasise law or community. Each telling selects details suited to its context.' },
      { q: 'Where do details not in the Qur\'an come from?', a: 'Some come from authentic hadith; much comes from <em>isra\'iliyyat</em>, material transmitted from Jewish and Christian sources, and from later popular storytelling. Scholars classify these reports and do not treat them as authoritative.' },
      { q: 'Do Muslims believe in the prophets of the Bible?', a: 'Muslims believe in the prophets named in the Qur\'an, including Adam, Nuh, Ibrahim, Musa, Dawud, Sulayman, Ayyub and Isa. The Qur\'an affirms their prophethood while correcting doctrines it regards as later distortions.' },
      { q: 'Can prophets be depicted in art?', a: 'Mainstream Islamic tradition prohibits visual depiction of prophets. This is intended to prevent idolatry and to preserve the distinction between the messenger and the divine.' }
    ],
    bibliography: [
      'The Qur\'an — Surahs al-Baqarah (2), Al Imran (3), al-An\'am (6), Hud (11), Yusuf (12), Maryam (19), Ta-Ha (20), al-Anbiya (21), al-Qasas (28), Saba (34), Sad (38) and Ghafir (40).',
      'Ibn Kathir, <em>Qisas al-Anbiya</em> (Stories of the Prophets).',
      'Al-Tabari, <em>Jami\' al-Bayan</em> and <em>Tarikh al-Rusul wa al-Muluk</em>.',
      'Ibn Hisham, <em>al-Sirah al-Nabawiyyah</em> (for the Prophet\'s ﷺ engagement with earlier prophetic traditions).',
      'Sahih al-Bukhari and Sahih Muslim — Books of the Prophets and Virtues.'
    ],
    related: commonRelated
  },

  {
    slug: 'sahaba-biographies',
    title: 'The Sahaba: Lives That Shaped the Ummah',
    metaTitle: 'The Sahaba: Lives That Shaped the Ummah',
    description: 'An introduction to the companions of Prophet Muhammad ﷺ — Abu Bakr, Umar, Uthman, Ali, Khadijah, Aisha, Bilal and Salman al-Farsi — with their contributions, sacrifices and the scholarly principles for discussing their differences.',
    category: 'Sahaba',
    readTime: '11 min',
    intro: P('The <strong>Sahaba</strong> (الصحابة) are the companions of Prophet Muhammad ﷺ — the generation that received the Qur\'an directly, witnessed the Prophet\'s ﷺ conduct, and carried the message beyond Arabia. Their lives are not a gallery of heroes to be admired from a distance. They are the first laboratory of Islamic practice, and their disagreements, mistakes and recoveries are as instructive as their victories.') + P('This article introduces the most influential companions, explains their collective rank in Sunni Islam, and sets out the principles for discussing their political conflicts honestly without descending into sectarian polemic.'),
    keyTakeaways: [
      'A Sahabi is anyone who met the Prophet ﷺ as a believer and died as a believer.',
      'The companions are praised collectively in the Qur\'an, but they were not sinless.',
      'Abu Bakr, Umar, Uthman and Ali led the Rashidun caliphate in succession.',
      'Women companions such as Khadijah and Aisha played decisive roles in preservation and teaching.',
      'Sunni scholarship advises restraint in discussing the political conflicts among companions.'
    ],
    sections: [
      {
        id: 'who-are-sahaba',
        heading: 'Who the Sahaba Are and Why They Matter',
        html: P('The term <em>Sahabi</em> (companion) is defined by scholars of hadith as a person who met the Prophet ﷺ, believed in him, and died upon that belief. This includes people who spent years with him and those who saw him briefly. The number is not precisely known; the total is generally estimated in the tens of thousands, with the strongest narrators numbering in the hundreds.') +
          Q('And the first forerunners among the Muhajirun and the Ansar and those who followed them with good conduct — Allah is pleased with them and they are pleased with Him.', 'Qur\'an 9:100') +
          P('Their importance is structural. They transmitted the Qur\'an, preserved the hadith, established the schools of law, and led the early conquests. Without their work, the religion would not have reached later generations in the form it did.') +
          P('But the Qur\'an also corrects them, and some companions made serious errors. Sunni theology holds that they were the best generation without claiming infallibility. That balance is essential: veneration without exaggeration, criticism without contempt.')
      },
      {
        id: 'abu-bakr',
        heading: 'Abu Bakr al-Siddiq: The First Caliph',
        html: P('Abu Bakr was a wealthy Makkan merchant, the first adult free man to accept Islam, and the Prophet\'s ﷺ closest companion. He accompanied him on the Hijrah, sheltered in the cave with him, and was mentioned in the Qur\'an as the second of the two.') +
          P('His caliphate lasted about two years. He faced the Ridda wars, the refusal of some tribes to pay zakat, and the decision to compile the Qur\'an into a single written collection after many reciters died at Yamamah. That decision preserved the scripture for all later generations.') +
          P('He was known for generosity — he spent his wealth in the cause of Islam — and for a gentle but firm temperament. On his deathbed he nominated Umar, avoiding a vacuum. His short rule set the pattern for a caliphate based on consultation and continuity rather than dynastic inheritance.')
      },
      {
        id: 'umar',
        heading: 'Umar ibn al-Khattab: Justice and Expansion',
        html: P('Umar accepted Islam after a dramatic confrontation and became one of its most forceful defenders. His caliphate (634–644 CE) saw the expansion of the Muslim state into Syria, Iraq, Egypt and Persia, and the creation of enduring institutions: the <em>diwan</em> (registry of stipends), a treasury, a calendar beginning with the Hijrah, and appointed judges.') +
          P('He was famous for his justice and austerity. Stories of him carrying food to a widow, or refusing special treatment, are widely transmitted. He also made decisions that later jurists debated, such as the distribution of conquered land rather than its division among fighters.') +
          P('Umar was assassinated by a Persian captive, Abu Lu\'lu\'ah, while leading prayer. His appointment of a six-member council to choose his successor reflected his concern for consultation over personal preference.')
      },
      {
        id: 'uthman',
        heading: 'Uthman ibn Affan: The Standardised Scripture',
        html: P('Uthman was an early convert, a wealthy merchant, and the Prophet\'s ﷺ son-in-law. He funded the army at Tabuk and purchased a well for the Muslims. His caliphate (644–656 CE) continued the expansion and saw the compilation of the Qur\'an into a standard written <em>mushaf</em>, with copies sent to major centres.') +
          P('That standardisation is one of the most consequential acts in Islamic history. Variant recitations that had caused confusion were reconciled by aligning the community on one written text, while preserving authentic oral recitation.') +
          P('His later years were marked by political unrest and accusations about nepotism. He was besieged in his house and killed while reciting the Qur\'an. Sunni scholarship presents him as a martyr and rejects the claim that his caliphate was illegitimate, while acknowledging the genuine grievances that fuelled the crisis.')
      },
      {
        id: 'ali',
        heading: 'Ali ibn Abi Talib: Knowledge and Trial',
        html: P('Ali was the Prophet\'s ﷺ cousin, raised in his household, among the first to accept Islam as a child, and the husband of Fatimah. He was renowned for bravery at Badr, Uhud and Khandaq, and for his deep knowledge of the Qur\'an and law.') +
          P('His caliphate (656–661 CE) was consumed by civil conflict: the Battle of the Camel, Siffin, and the rise of the Kharijites. Ali\'s letters and sermons, collected in <em>Nahj al-Balagha</em>, are studied for their eloquence and ethical teaching, though the compilation\'s attribution is debated by scholars.') +
          P('He was assassinated by a Kharijite. Sunni Muslims honour him as the fourth caliph and as one of the ten promised Paradise, without accepting later claims that elevate him above Abu Bakr and Umar or attribute divine status to him.') +
          NOTE('<strong>Historical restraint:</strong> The conflicts between companions were real and tragic. Sunni scholarship discourages cursing any companion and encourages withholding judgement where the evidence is unclear, while still analysing the historical record.')
      },
      {
        id: 'women',
        heading: 'Khadijah and Aisha: The Women Who Preserved the Message',
        html: P('Khadijah bint Khuwaylid was the Prophet\'s ﷺ first wife, the first believer, and his support during the most vulnerable years. She financed the mission, reassured him after the first revelation, and stood with him through the boycott. Her death was a profound loss.') +
          P('Aisha bint Abi Bakr was a scholar, narrator and teacher. She transmitted a large number of hadiths, taught jurisprudence, and corrected misunderstandings. Her intellectual contribution is central to the preservation of the Sunnah, particularly in matters of household life, worship and women\'s rulings.') +
          P('Their lives challenge the assumption that women were marginal in early Islam. Khadijah was an independent businesswoman; Aisha was a public teacher and legal authority. Later cultural restrictions should not be read back into the prophetic period.')
      },
      {
        id: 'bilal-salman',
        heading: 'Bilal and Salman: Race, Class and the Search for Truth',
        html: P('Bilal ibn Rabah was an Abyssinian slave tortured for his faith and freed by Abu Bakr. He became the first muezzin of Islam, and his call to prayer became a symbol of the new community\'s rejection of tribal hierarchy.') +
          P('Salman al-Farsi was a Persian seeker of truth who travelled through Zoroastrianism, Christianity and Judaism before meeting the Prophet ﷺ. His long journey illustrates that sincere seeking is honoured, and his military advice at Khandaq — digging a trench — saved Madinah.') +
          P('The Prophet ﷺ said that Bilal was from him and he from Bilal, and he described Salman as part of the family. These statements dismantled the tribal and racial logic of pre-Islamic Arabia.')
      },
      {
        id: 'other-companions',
        heading: 'Other Companions Worth Studying',
        html: P('The Sahaba library on NoorDeen contains 52 biographies. Among the most important for beginners are:') +
          UL([
            '<strong>Hamza ibn Abd al-Muttalib</strong> — the Prophet\'s ﷺ uncle, a fierce defender, martyred at Uhud.',
            '<strong>Khalid ibn al-Walid</strong> — the military commander who never lost a battle, later dismissed by Umar for reasons of principle.',
            '<strong>Abu Hurayrah</strong> — the most prolific narrator of hadith, whose memory shaped the Sunnah.',
            '<strong>Anas ibn Malik</strong> — the Prophet\'s ﷺ servant for ten years, a key source on his daily conduct.',
            '<strong>Zayd ibn Thabit</strong> — the scribe who helped compile the Qur\'an.',
            '<strong>Sa\'d ibn Abi Waqqas</strong> — commander at Qadisiyyah and one of the ten promised Paradise.',
            '<strong>Abd al-Rahman ibn Awf</strong> — a successful merchant whose generosity funded the community.'
          ]) +
          P('Studying a range of companions prevents hagiography. They were farmers, merchants, slaves, soldiers, scholars and administrators, and their sanctity lay in serving the message, not in social status.')
      },
      {
        id: 'principles',
        heading: 'Principles for Discussing the Companions',
        html: P('The early community\'s political conflicts are among the most sensitive topics in Islamic history. A few principles keep study honest and respectful:') +
          UL([
            'Honour the companions collectively, as the Qur\'an and Prophet ﷺ did.',
            'Do not claim infallibility for any companion; the Qur\'an corrected some of them.',
            'Recognise that political disputes involved sincere people on multiple sides.',
            'Refuse to curse or demonise any companion, especially the caliphs and the Prophet\'s family.',
            'Distinguish historical reports from theological claims; not every narration is authentic.',
            'Read sectarian sources critically, including those that flatter your own position.'
          ]) +
          P('The goal is neither a sanitised myth nor a cynical debunking. It is to understand how a community of ordinary people, transformed by revelation, carried an extraordinary trust — and how their successes and failures still speak to us.')
      }
    ],
    faqs: [
      { q: 'Are all the companions guaranteed Paradise?', a: 'Sunni Islam honours the companions collectively and affirms the promise of Paradise for specific individuals, including the ten given that glad tidings. It does not teach that every companion was infallible or that every act was correct. The Qur\'an praises the believers among them while also correcting mistakes.' },
      { q: 'How should Muslims discuss the conflicts between Ali and Muawiyah?', a: 'Sunni scholarship generally advises restraint, recognising the sincerity and interpretative effort of both sides while not declaring either a disbeliever. The historical details are reported with varying reliability. The priority is to avoid sectarian hatred and to learn from the political crisis.' },
      { q: 'How many companions were there?', a: 'There is no precise count. Estimates of those who met the Prophet ﷺ range into the tens of thousands, while the number of companions who narrated hadiths and are known to hadith scholars is much smaller — roughly a few thousand, with a core of several hundred.' },
      { q: 'Were any companions women?', a: 'Yes. Women companions are central: Khadijah, Aisha, Hafsa, Umm Salamah, Fatimah, Sumayyah, Nusaybah bint Ka\'b and many others. They narrated hadiths, fought in battles, taught and contributed to law.' },
      { q: 'Why does NoorDeen have a separate Sahaba library?', a: 'Because biography is one of the most accessible ways to learn Islamic history and character. The library contains 52 profiles with sourced material, and it is designed to be read alongside the Qur\'an and hadith rather than as a substitute for them.' }
    ],
    bibliography: [
      'The Qur\'an — Surahs al-Anfal (8), al-Tawbah (9), al-Hujurat (49) and al-Fath (48).',
      'Ibn Sa\'d, <em>Kitab al-Tabaqat al-Kabir</em>.',
      'Al-Dhahabi, <em>Siyar A\'lam al-Nubala</em>.',
      'Ibn Abd al-Barr, <em>al-Isti\'ab fi Ma\'rifat al-Ashab</em>.',
      'Ibn al-Athir, <em>Usd al-Ghabah fi Ma\'rifat al-Sahabah</em>.',
      'Sahih al-Bukhari and Sahih Muslim — Books of the Companions\' Virtues and Maghazi.'
    ],
    related: commonRelated
  },

  {
    slug: 'islamic-history-civilization',
    title: 'Islamic History and Civilization: A Framework for Study',
    metaTitle: 'Islamic History and Civilization: A Framework for Study',
    description: 'A clear framework for studying Islamic history: the Rashidun, Umayyad and Abbasid periods, Al-Andalus, the Ottoman, Safavid and Mughal empires, Africa and Southeast Asia, colonialism, and the modern nation-state.',
    category: 'History',
    readTime: '12 min',
    intro: P('Islamic history is often taught as a list of dynasties and battles. That approach produces dates without understanding. This article offers a framework: the major periods, the institutional and intellectual developments within each, the reasons for both flourishing and fracture, and the historiographical questions a careful reader should ask.') + P('It is deliberately an overview. Each era named here has its own specialist literature, and NoorDeen\'s history library provides a deeper chronological treatment.'),
    keyTakeaways: [
      'The Rashidun caliphate (632–661) established the political and legal template.',
      'The Umayyads (661–750) expanded the empire and built lasting administrative structures.',
      'The Abbasids (750–1258) presided over a major translation and scientific movement.',
      'Al-Andalus, the Ottomans, Safavids and Mughals produced distinct intellectual cultures.',
      'Islamic civilisation was never a single unified political entity after the early caliphate.',
      'Decline narratives are often oversimplified; institutional, ecological and geopolitical factors mattered.'
    ],
    sections: [
      {
        id: 'why-history',
        heading: 'Why History Matters',
        html: P('The Qur\'an repeatedly commands reflection on the fate of earlier peoples. History in Islam is not neutral data; it is a field of moral and theological lessons. But moral reflection requires accurate facts, and accurate facts require source criticism.') +
          Q('Have they not travelled through the land and observed how was the end of those before them? They were greater than them in strength.', 'Qur\'an 40:82') +
          P('A believer studies history to understand the present, to avoid repeating injustice, and to recognise that the Ummah\'s story is larger than any single state or sect. That requires resisting both romantic nostalgia and cynical despair.')
      },
      {
        id: 'rashidun',
        heading: 'The Rashidun Caliphate (632–661)',
        html: P('After the Prophet\'s ﷺ death, Abu Bakr was chosen through consultation. His short caliphate stabilised the community, suppressed the Ridda, and initiated the compilation of the Qur\'an. Umar succeeded him and oversaw rapid expansion into Syria, Iraq, Egypt and Persia.') +
          P('Uthman standardised the Qur\'anic text and continued expansion, but his later years saw political tension. Ali\'s caliphate was dominated by civil war. By 661 the political centre had shifted to Damascus under Muawiyah.') +
          P('The Rashidun period is idealised in Sunni memory as the golden age of rightly guided rule. Historically it was also a time of intense debate about succession, governance and the distribution of wealth. Both truths belong in the account.')
      },
      {
        id: 'umayyad',
        heading: 'The Umayyad Period (661–750)',
        html: P('The Umayyads moved the capital to Damascus and governed an empire stretching from Spain to the Indus. They built administrative institutions: a postal system, a mint, provincial governors, and Arabic as the language of administration. The Dome of the Rock and the Great Mosque of Damascus date from this period.') +
          P('Their rule was contested. The second civil war, the revolt of Ibn al-Zubayr, the Karbala tragedy, and the treatment of non-Arab converts (<em>mawali</em>) generated lasting grievances. The Abbasid revolution of 750 overthrew them, though an Umayyad branch survived in Al-Andalus.') +
          NOTE('<strong>Source caution:</strong> Much of what is written about the Umayyads comes from Abbasid-era historians. Their accounts must be read with attention to political bias.')
      },
      {
        id: 'abbasid',
        heading: 'The Abbasid Golden Age (750–1258)',
        html: P('The Abbasids moved the capital to Baghdad and presided over one of the most remarkable intellectual periods in world history. The <em>Bayt al-Hikmah</em> (House of Wisdom) supported translation of Greek, Persian and Indian works into Arabic. Mathematics, astronomy, medicine, optics, chemistry and philosophy flourished.') +
          P('Al-Khwarizmi\'s algebra, Ibn al-Haytham\'s optics, al-Razi\'s and Ibn Sina\'s medicine, and al-Biruni\'s geography are not isolated curiosities; they were products of a cosmopolitan, multilingual scholarly culture.') +
          P('Politically, Abbasid power fragmented. Regional dynasties emerged, the Buyids and Seljuks exercised real control, and the Mongol sack of Baghdad in 1258 ended the caliphate in its classical form. The intellectual legacy outlived the state.')
      },
      {
        id: 'andalus',
        heading: 'Al-Andalus: Convivencia and Its Limits',
        html: P('Muslim rule in Iberia lasted from 711 to 1492. Cordoba became one of Europe\'s largest and most cultured cities, with libraries, mosques, baths and a diverse population of Muslims, Christians and Jews.') +
          P('The period is often romanticised as <em>convivencia</em>, a harmonious coexistence. The reality was more complex: periods of genuine cultural exchange alternated with persecution, forced conversion and revolt. The expulsion of Jews in 1492 and the forced conversion of Muslims were part of the same history.') +
          P('Al-Andalus matters because it shows both the possibilities and the limits of pluralistic governance. It also produced Ibn Rushd (Averroes), whose commentaries on Aristotle shaped medieval European philosophy, and Ibn Arabi, whose mystical thought remains influential and contested.')
      },
      {
        id: 'gunpowder',
        heading: 'Ottomans, Safavids and Mughals',
        html: P('Three major empires dominated the early modern Islamic world. The Ottomans (1299–1922) conquered Constantinople in 1453, ruled the Balkans, Anatolia, the Levant, Egypt and the Hijaz, and developed a sophisticated legal and administrative system. The Safavids (1501–1736) established Twelver Shi\'ism as the state religion of Iran, shaping its modern identity. The Mughals (1526–1857) ruled much of India and produced the Taj Mahal and a rich Persianate culture.') +
          P('These empires were rivals as much as peers. Their competition shaped borders, trade routes and sectarian identities. Their legal systems varied, and none was a simple theocracy: pragmatic governance, taxation and diplomacy were central.') +
          P('Their decline was uneven and multi-causal: military technology, fiscal crisis, ecological stress, corruption, and the rise of European colonial power.')
      },
      {
        id: 'africa-asia',
        heading: 'Africa and Southeast Asia',
        html: P('Islamic history is not only Middle Eastern. Timbuktu in Mali was a centre of scholarship, with manuscript libraries that survive today. The Sokoto Caliphate in West Africa, the Swahili city-states of East Africa, and the Sultanates of Indonesia and Malaysia produced distinctive Islamic cultures.') +
          P('Islam spread through trade, scholarship and marriage as much as through conquest. In Southeast Asia, the process was largely peaceful, carried by merchants and Sufi teachers. This diversity challenges the equation of Islamic civilisation with a single Arab centre.')
      },
      {
        id: 'colonial-modern',
        heading: 'Colonialism and the Modern Nation-State',
        html: P('From the eighteenth century, European powers colonised most of the Muslim world. Colonialism reshaped borders, economies, education and legal systems. It also produced reform movements: the Salafi revival, Islamic modernism, nationalism, and later Islamist political movements.') +
          P('The abolition of the Ottoman caliphate in 1924 and the creation of nation-states after the World Wars transformed political identity. The OIC, the Gulf states, and post-colonial republics are modern creations, not continuations of the classical caliphate.') +
          P('Modern Islamic history includes both impressive development and serious conflict. Understanding it requires attention to oil, Cold War geopolitics, decolonisation, and internal authoritarianism — not only to religion.')
      },
      {
        id: 'study-critically',
        heading: 'How to Study Islamic History Critically',
        html: UL([
          'Read multiple sources, including ones that challenge your assumptions.',
          'Distinguish primary sources from later compilations and modern polemics.',
          'Ask who wrote a source, when, for whom, and under what patronage.',
          'Avoid golden-age nostalgia that erases conflict and injustice.',
          'Avoid decline narratives that ignore continued intellectual and social vitality.',
          'Remember that history explains circumstances, not the truth of the religion itself.'
        ]) + P('The point of studying history is not to win arguments about the past. It is to understand how Muslims have lived with revelation across time, and to act more wisely in the present.')
      }
    ],
    faqs: [
      { q: 'Was there ever a single unified Islamic caliphate?', a: 'Only briefly. The Rashidun caliphate was a unified polity, but after the Umayyad rise and especially after the Abbasid fragmentation, multiple Muslim states existed simultaneously. The idea of a single caliphate has been more a normative ideal than a continuous historical reality.' },
      { q: 'What caused the decline of Islamic civilisation?', a: 'There is no single cause. Historians point to military and technological change, fiscal crisis, ecological stress, political fragmentation, colonialism and internal authoritarianism. The question itself is contested, because "decline" is measured differently depending on whether one looks at political power, economic output, or intellectual production.' },
      { q: 'Did Islamic civilisation contribute to modern science?', a: 'Yes. The translation movement, algebra, optics, medicine, astronomy and geography were major contributions. The relationship between that heritage and the European Scientific Revolution is complex and still debated by historians.' },
      { q: 'How should Muslims view the Ottoman Empire?', a: 'As a major Islamic state with genuine achievements and serious flaws. It defended the Hijaz, codified law, and held off European expansion for centuries, but it also practised slavery, suppressed dissent, and eventually collapsed under internal and external pressures. Neither romanticism nor wholesale condemnation is adequate.' },
      { q: 'Why does NoorDeen include pre-modern history?', a: 'Because understanding the present requires knowing how legal schools, sectarian identities, institutions and cultural patterns formed. The history library provides a chronological entry point, and this article provides the interpretive framework.' }
    ],
    bibliography: [
      'The Qur\'an — Surahs Al Imran (3), al-An\'am (6), Hud (11), Yusuf (12), al-Kahf (18) and Saba (34) for prophetic and civilisational lessons.',
      'Al-Tabari, <em>Tarikh al-Rusul wa al-Muluk</em>.',
      'Ibn Khaldun, <em>al-Muqaddimah</em>.',
      'Marshall G. S. Hodgson, <em>The Venture of Islam</em>.',
      'Ira M. Lapidus, <em>A History of Islamic Societies</em>.',
      'Hugh Kennedy, <em>The Prophet and the Age of the Caliphates</em>.',
      'Ibn Kathir, <em>al-Bidaya wa al-Nihaya</em>.'
    ],
    related: commonRelated
  },

  {
    slug: 'islamic-manners-and-character',
    title: 'Islamic Manners and Character: Adab in Daily Life',
    metaTitle: 'Islamic Manners and Character: Adab in Daily Life',
    description: 'A practical guide to Islamic character and manners (adab): duties to Allah, parents, family, neighbours and guests; controlling speech and anger; humility, gratitude and generosity; and building lasting habits.',
    category: 'Character',
    readTime: '11 min',
    intro: P('In Islam, <strong>adab</strong> (أدب) is not a list of etiquette rules for formal occasions. It is the habitual disposition of a person who is conscious of Allah. The Prophet ﷺ summarised his mission as perfecting noble character, and the Qur\'an describes the believer\'s conduct in detail. This article translates that guidance into practical areas of daily life without reducing it to cultural custom.') + P('Where a practice is cultural rather than religious, the article says so. Where scholars differ, it notes the difference.'),
    keyTakeaways: [
      'Good character is a central objective of the prophetic mission, not an optional extra.',
      'Adab begins with Allah: sincerity, gratitude, trust and taqwa.',
      'Parents, family, neighbours and guests have enforceable rights.',
      'Speech is the most common arena of both virtue and sin.',
      'Anger management and humility are trainable habits, not fixed personality traits.',
      'Islamic adab is universal in principle, not limited to one culture.'
    ],
    sections: [
      {
        id: 'character-and-faith',
        heading: 'Character as the Fruit of Faith',
        html: P('The Qur\'an links worship with conduct repeatedly. Prayer is not merely a ritual performed five times; it is meant to restrain indecency and wrongdoing (29:45). Fasting trains self-control. Zakat purifies wealth and reduces attachment. The pillars are means, and character is the fruit.') +
          Q('And indeed, you are of a great moral character.', 'Qur\'an 68:4') +
          P('The Prophet ﷺ said, <em>“I was sent to perfect noble character”</em> (narrated in Musnad Ahmad and graded authentic by scholars). He also said, <em>“The best of you are those who have the best character”</em> (Sahih al-Bukhari and Sahih Muslim). These are not decorative sayings; they define the standard by which a Muslim\'s practice is measured.') +
          P('A person can perform many rituals and still be harsh, dishonest or arrogant. The tradition consistently warns against this gap.')
      },
      {
        id: 'adab-with-allah',
        heading: 'Adab with Allah',
        html: P('The first relationship is with the Creator. Its components are sincerity (<em>ikhlas</em>), gratitude (<em>shukr</em>), trust (<em>tawakkul</em>), hope and fear, and consciousness of Allah (<em>taqwa</em>).') +
          UL([
            '<strong>Sincerity:</strong> acting for Allah rather than for praise. The Prophet ﷺ warned that ostentation can nullify good deeds.',
            '<strong>Gratitude:</strong> recognising that every provision is from Allah. Ingratitude is repeatedly condemned in the Qur\'an.',
            '<strong>Trust:</strong> taking the means while relying on Allah for outcomes.',
            '<strong>Taqwa:</strong> a settled awareness that shapes choices even when no one is watching.'
          ]) +
          Q('And whoever fears Allah — He will make for him a way out and provide for him from where he does not expect.', 'Qur\'an 65:2–3') +
          P('Adab with Allah also includes respecting His names, His Book, and His messengers. Mockery of sacred things is not a mark of sophistication; the Qur\'an treats it as a serious matter (9:65–66).')
      },
      {
        id: 'parents-family',
        heading: 'Adab with Parents and Family',
        html: P('The Qur\'an places kindness to parents immediately after the command to worship Allah alone:') +
          Q('And your Lord has decreed that you not worship except Him, and to parents, good treatment. Whether one or both of them reach old age with you, say not to them a word of contempt and do not repel them but speak to them a noble word.', 'Qur\'an 17:23') +
          P('This is not conditional on the parents being Muslim or agreeable. The default is respect and care. The Prophet ﷺ taught that a man asked which deed was most beloved to Allah, and he answered prayer on time, then kindness to parents, then struggle in the path of Allah (Sahih al-Bukhari and Sahih Muslim).') +
          P('Within marriage, the Qur\'an describes spouses as garments for one another (2:187) and commands <em>ma\'ruf</em> — fair, kind treatment (4:19). It also permits divorce, but the Prophet ﷺ said that the most disliked permissible thing to Allah is divorce (narrated by Abu Dawud and Ibn Majah, graded authentic by some scholars).') +
          P('With children, adab means affection, education, justice between them, and not burdening them with adult conflicts.')
      },
      {
        id: 'neighbours-guests',
        heading: 'Neighbours, Guests and the Wider Community',
        html: P('The Prophet ﷺ linked faith to neighbourly conduct: <em>“Whoever believes in Allah and the Last Day, let him not harm his neighbour”</em> (Sahih al-Bukhari and Sahih Muslim). The Qur\'an commands kindness to neighbours near and far, whether related or not (4:36).') +
          P('Guests have a recognised right. The Prophet ﷺ said that whoever believes in Allah and the Last Day should honour his guest (Sahih al-Bukhari and Sahih Muslim). Hospitality in many Muslim cultures is generous, but the religious minimum is to receive guests kindly and not to inconvenience them.') +
          P('Adab also extends to strangers, employees, animals and the environment. The Prophet ﷺ forbade overloading animals, wasting water, and cutting trees unnecessarily. He said that a woman entered Paradise because of a dog she gave water to, and another was punished for starving a cat (Sahih al-Bukhari and Sahih Muslim). Kindness is not species-specific.')
      },
      {
        id: 'speech',
        heading: 'Speech: Truthfulness, Backbiting and Gossip',
        html: P('The tongue is the most common source of both reward and ruin. The Qur\'an commands believers to speak truthfully and avoid suspicion, spying and backbiting:') +
          Q('O you who have believed, avoid much suspicion. Indeed, some suspicion is sin. And do not spy or backbite each other. Would one of you like to eat the flesh of his brother when dead? You would detest it.', 'Qur\'an 49:12') +
          P('Backbiting (<em>ghibah</em>) is defined as mentioning something true about a person that they would dislike. If it is false, it is slander (<em>buhtan</em>), which is worse. The Prophet ﷺ warned that a person may utter a word without thinking and fall into the Fire (Sahih al-Bukhari and Sahih Muslim).') +
          P('Practical adab of speech includes: verifying news before spreading it (49:6), avoiding mockery (49:11), not calling people by offensive nicknames, and speaking gently even in disagreement. The Qur\'an commands Musa and Harun to speak to Pharaoh with gentle words (20:44) — a striking standard for confrontation.')
      },
      {
        id: 'anger',
        heading: 'Anger and Self-Control',
        html: P('Anger is natural, but uncontrolled anger destroys relationships and judgement. The Prophet ﷺ advised a man who asked for advice: <em>“Do not become angry”</em> (Sahih al-Bukhari). He also said that the strong person is not the one who overcomes others, but the one who controls himself when angry (Sahih al-Bukhari and Sahih Muslim).') +
          P('Practical remedies from the tradition include: seeking refuge in Allah, remaining silent, changing posture (sitting or lying down), performing wudu, and delaying response until the physiological surge passes.') +
          P('Islamic adab does not require suppressing legitimate grievances. It requires expressing them justly, without insult, revenge or disproportionate response. The Qur\'an permits retaliation but praises forgiveness and reconciliation (42:40–43).')
      },
      {
        id: 'humility',
        heading: 'Humility and the Danger of Arrogance',
        html: P('Arrogance (<em>kibr</em>) is the sin of Iblis. The Prophet ﷺ said that no one who has an atom\'s weight of arrogance in his heart will enter Paradise (Sahih Muslim). He defined arrogance as rejecting the truth and looking down on people.') +
          P('Humility does not mean self-erasure. It means accurate self-assessment before Allah and fair treatment of others. A person can be confident, skilled and ambitious without believing they are inherently superior.') +
          Q('And do not walk upon the earth exultantly. Indeed, you will never tear the earth open, nor reach the mountains in height.', 'Qur\'an 17:37') +
          P('Practical humility: listen more than you speak, admit mistakes, ask for help, credit others, and avoid comparing yourself to people you consider beneath you.')
      },
      {
        id: 'generosity-gratitude',
        heading: 'Generosity, Gratitude and Contentment',
        html: P('Generosity is not limited to money. Time, attention, knowledge and encouragement are all forms of giving. The Prophet ﷺ was described as more generous than the wind, especially in Ramadan (Sahih al-Bukhari and Sahih Muslim).') +
          P('Gratitude is the antidote to envy. The Qur\'an promises that gratitude increases blessing (14:7), and the Prophet ﷺ said that whoever does not thank people has not thanked Allah (narrated by Abu Dawud and al-Tirmidhi).') +
          P('Contentment (<em>qana\'ah</em>) does not mean passivity or accepting injustice. It means not allowing material comparison to corrode the heart while still working for improvement.')
      },
      {
        id: 'habits',
        heading: 'Building Character as a Habit',
        html: P('Character is formed by repeated action. The tradition understands this: the Prophet ﷺ said that the deeds most beloved to Allah are those done consistently, even if small (Sahih al-Bukhari and Sahih Muslim).') +
          UL([
            'Choose one area at a time — for example, truthful speech or controlling anger.',
            'Link the new habit to an existing ritual, such as reviewing your day after Isha.',
            'Keep a private journal of successes and failures; self-accounting is a prophetic practice.',
            'Ask a trustworthy friend to hold you accountable without exposing your sins publicly.',
            'Return to repentance quickly when you fail; despair is a bigger danger than the slip itself.',
            'Study the lives of the Prophet ﷺ and the companions as concrete models, not abstractions.'
          ]) +
          P('The goal is not perfection in a week. It is steady movement toward a heart that is conscious of Allah and a tongue and hand that do no harm.')
      }
    ],
    faqs: [
      { q: 'Is adab religious or cultural?', a: 'Some adab is explicitly religious — truthfulness, kindness to parents, avoiding backbiting. Other forms, such as specific greetings, dress or seating customs, are cultural and vary by society. The religion sets principles; cultures express them differently.' },
      { q: 'Must Muslims be kind to non-Muslims?', a: 'Yes. The Qur\'an commands justice and kindness toward those who do not fight Muslims or expel them from their homes (60:8). It prohibits unjust aggression. Good character is a universal obligation, not a sectarian privilege.' },
      { q: 'Is joking forbidden?', a: 'No. The Prophet ﷺ joked with his companions, but he never lied and never mocked or humiliated people. Humour that degrades, lies, or mocks religion is not permitted.' },
      { q: 'How do I repent from habitual bad character?', a: 'Repentance requires stopping the behaviour, regretting it, resolving not to return, and making amends where possible. Habits usually need practical replacement, not only intention: change your environment, avoid triggers, and build alternative responses.' },
      { q: 'What is the single most important character trait?', a: 'Scholars often point to sincerity (<em>ikhlas</em>) because it purifies every other act, and to truthfulness because it anchors speech and conduct. The Prophet ﷺ said that truthfulness leads to righteousness and righteousness leads to Paradise (Sahih al-Bukhari and Sahih Muslim).' }
    ],
    bibliography: [
      'The Qur\'an — especially Surahs al-Isra (17), al-Hujurat (49), Luqman (31), al-Furqan (25) and al-Ma\'idah (5).',
      'Sahih al-Bukhari and Sahih Muslim — Books of Manners, Virtues and Heart-Melting Traditions.',
      'Al-Nawawi, <em>Riyad al-Salihin</em>.',
      'Al-Ghazali, <em>Ihya\' Ulum al-Din</em> (especially the sections on the tongue, anger, arrogance and gratitude).',
      'Ibn al-Qayyim, <em>Madarij al-Salikin</em>.',
      'Al-Tirmidhi, <em>Shama\'il al-Nabi</em> (the Prophet\'s ﷺ character and appearance).'
    ],
    related: commonRelated
  }
];
