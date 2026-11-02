const P = t => `<p style="line-height:1.8; color:var(--color-text-main); margin-bottom:14px;">${t}</p>`;
const H3 = t => `<h3 style="font-size:1.15rem; color:var(--color-primary); margin:22px 0 10px;">${t}</h3>`;
const UL = items => `<ul style="line-height:1.9; color:var(--color-text-main); padding-left:20px; margin-bottom:14px;">${items.map(i => `<li>${i}</li>`).join('')}</ul>`;
const Q = (text, cite) => `<blockquote style="background:var(--color-card); border-left:4px solid var(--color-gold); padding:16px 22px; margin:18px 0; border-radius:0 8px 8px 0;"><div style="font-style:italic; color:var(--color-text-main); line-height:1.8;">&ldquo;${text}&rdquo;</div><div style="margin-top:6px; font-size:0.85rem; color:var(--color-gold); font-weight:600;">${cite}</div></blockquote>`;
const NOTE = t => `<div style="background:var(--color-surface); border:1px solid var(--color-border); border-radius:10px; padding:16px 18px; margin:18px 0; font-size:0.92rem; line-height:1.75;">${t}</div>`;

const relatedBase = [
  { href: 'index.html', label: 'Articles Library — full catalogue' },
  { href: '../sources.html', label: 'Sources and verification policy' }
];

module.exports = [
  {
    slug: 'musa-pharaoh-the-exodus-and-the-law',
    title: 'Musa: Pharaoh, the Exodus and the Law',
    metaTitle: 'Musa in the Qur’an: Pharaoh, the Exodus, the Sea and the Giving of the Law',
    description: 'The Qur’anic story of Musa: the infant in the river, the flight to Madyan, the burning bush, the confrontation with Pharaoh, the magicians, the plagues, the crossing of the sea, the tablets, the golden calf, the water from the rock, Khidr, Qarun and the limits of the sources.',
    category: 'Prophets',
    readTime: '15 min',
    intro: P(`Musa is the prophet most often named in the Qur’an. His story runs from the slaughter of the male infants in Egypt to the giving of the law at the mountain, and it is retold in several surahs with different emphases: the rescue of a condemned child, the call at the fire, the contest with the sorcerers, the judgement of Pharaoh, the crossing of the sea, the covenant and the golden calf.`) +
      P(`It is also the story in which the Qur’an most directly confronts political power. Pharaoh is not merely a bad king; he is the archetype of a ruler who claims divinity and treats a people as expendable. Musa is not merely a miracle-worker; he is a reluctant messenger who asks for help, doubts his own tongue and is sustained by his brother. This article follows the Qur’anic text, separates the layers of later narrative, and marks clearly where the evidence stops.`),
    keyTakeaways: [
      `Musa is the most frequently named prophet in the Qur’an, and his story is distributed across several surahs rather than told once.`,
      `The Qur’an does not name Pharaoh, his wife, the Egyptian killed by Musa, or the mountain of the law.`,
      `The confrontation with Pharaoh turns on the difference between sorcery and a sign from Allah, not on a contest of political programmes.`,
      `The crossing of the sea is presented as a divine rescue of an oppressed people and a judgement on the pursuer.`,
      `The golden calf episode shows that deliverance does not guarantee obedience, and that leadership must confront the community’s failures.`,
      `The Khidr passage is a lesson in the limits of human knowledge; the Qur’an does not name the servant or define his status.`,
      `Qarun is the Qur’anic archetype of wealth that forgets its source and refuses social responsibility.`,
      `Later elaborations — the exact date of the exodus, the identification of Sinai, the names of Pharaoh’s magicians and the “split-sea” archaeology — are not established by revelation.`
    ],
    sections: [
      {
        id: 'why-musa-matters',
        heading: 'Why Musa Matters',
        html: P(`Musa is named more than a hundred and thirty times in the Qur’an, more than any other prophet. His story is a cycle of scenes rather than a single biography: the child condemned by the state, the call at the fire, the contest with the sorcerers, the crossing of the sea, the covenant at the mountain and the golden calf. The longest passages are 7:103–162, 20:9–98, 26:10–68 and 28:3–46, with further material in 2:49–61, 5:20–26, 10:75–93, 17:101–104, 18:60–82, 27:7–14, 28:76–82, 37:114–122, 44:17–33 and 79:15–26.`) +
          P(`The story rewards close reading rather than a single chronological summary, and it demands source discipline. The Qur’an gives the theological spine; the hadith add a few details; the commentaries and the qisas al-anbiya literature add much more, some edifying and some unverifiable. This article keeps those layers distinct.`)
      },
      {
        id: 'birth-and-the-river',
        heading: 'The Child in the River',
        html: P(`Pharaoh has ordered the killing of the sons of the Children of Israel because he fears a challenger. Allah inspires Musa’s mother to place him in a chest and cast it into the river, promising to return him and make him one of the messengers (28:7). The command is terrifying, and the Qur’an says her heart was nearly empty of everything except the promise (28:10).`) +
          P(`The chest floats to Pharaoh’s household. His wife sees the child and loves him: “A comfort of the eye for me and for you. Do not kill him; perhaps he may benefit us, or we may adopt him as a son” (28:9). The one who decreed death for the children of Israel becomes the guardian of the child who will confront him.`) +
          P(`The child refuses the wet-nurses. His sister, watching from a distance, suggests the family who bore him, and he is returned to his mother so that her eye might be comforted and she might know that the promise of Allah is true (28:13). The narrative names neither the mother, the sister, Pharaoh nor his wife.`) +
          NOTE(`<strong>Source caution.</strong> The name “Asiya” for Pharaoh’s wife and the names given to Musa’s mother appear in later narrative literature, not in the Qur’an or the authentic hadith. They may be used as traditional labels, but they are not part of the revealed text.`)
      },
      {
        id: 'flight-to-madyan',
        heading: 'The Killing, the Flight and Madyan',
        html: P(`When Musa reaches maturity, he enters the city and finds two men fighting, one from his own people and one from his enemies. He strikes the Egyptian and kills him. The text says this was “from the work of Satan” and that Musa prayed, “My Lord, I have wronged myself, so forgive me” (28:15–16). He is forgiven.`) +
          P(`He reaches Madyan, waters the flocks of two women who cannot compete with the shepherds, and prays for help. One of them returns to say that her father invites him. The old man offers marriage to one of his daughters in exchange for eight years of service, with ten as a completion rather than a condition (28:27). The Qur’an does not name the father; identifying him with Shu‘ayb is a later interpretive tradition.`)
      },
      {
        id: 'the-burning-bush',
        heading: 'The Fire, the Call and the Signs',
        html: P(`On the journey Musa sees a fire and tells his family to wait while he brings news or a brand to warm them (28:29). When he reaches it, he is called from the right side of the valley, from the blessed tree: “O Musa, indeed I am Allah, Lord of the worlds” (28:30). He is commanded to remove his sandals because he is in the sacred valley of Tuwa (20:12).`) +
          P(`The first sign is the staff: he throws it and it becomes a serpent, and he is told to take it and not fear. The second is his hand: he puts it under his arm and it comes out white without disease (20:17–22; 28:31–32). These are not magic tricks. They are signs given so that Pharaoh may believe, and they are accompanied by the command to establish prayer and remember Allah (20:14).`) +
          P(`Musa immediately asks for help: “My Lord, expand for me my breast, and ease for me my task, and untie the knot from my tongue, that they may understand my speech” (20:25–28). He asks that Harun share the burden because he is more eloquent (28:34), and the request is granted. Prophethood is a burden carried with support, not a solitary performance of power.`)
      },
      {
        id: 'before-pharaoh',
        heading: 'Before Pharaoh: Dialogue and Demand',
        html: P(`Musa and Harun are commanded to go to Pharaoh and to speak with gentle words so that he may remember or fear (20:43–44). They ask, “Who is the Lord of the worlds?” and Pharaoh answers by pointing to his court and his own claim: “I am your lord, the most high” (79:24). The exchange is a confrontation between a messenger who speaks for Allah and a ruler who has made himself the final authority.`) +
          P(`Musa reminds Pharaoh of the favours shown to the Children of Israel and of the signs. Pharaoh responds by recounting his own kindness in raising Musa, and by accusing him of ingratitude and of the killing (26:18–19). Musa answers that he did the deed while astray and that Allah forgave him. The argument then moves to the staff and the hand, which Pharaoh calls “clear magic” before assembling the sorcerers (26:34–38).`) +
          NOTE(`<strong>Source caution.</strong> The Qur’an calls the ruler “Pharaoh” (Fir‘awn), a title rather than a personal name. The identification of the Pharaoh of the exodus with a specific Egyptian king, and the dating of the event, are historical questions on which the Qur’an is silent and the evidence disputed.`)
      },
      {
        id: 'the-magicians',
        heading: 'The Contest with the Sorcerers',
        html: P(`The sorcerers assemble on a day of festival and throw their ropes and staffs, which appear to the audience to move. The Qur’an is careful with the language: “their ropes and staffs seemed to him, by their magic, to be moving” (20:66). The effect is real enough to frighten Musa, but it is an illusion produced by magic, not a transformation of nature.`) +
          P(`Musa throws his staff, and it devours what they have produced. The sorcerers recognise the difference immediately. They fall in prostration and say, “We have believed in the Lord of the worlds, the Lord of Musa and Harun” (20:70). Pharaoh threatens to cut off their hands and feet and crucify them. They answer that they will not prefer him to what has come to them, and ask their Lord for patience (20:71–76; 7:120–126).`) +
          P(`The scene is the moral centre of the Egyptian narrative. The professional magicians, whose livelihood depends on illusion, are the first to see that this is not a greater illusion. They choose death over recantation. The Qur’an does not report their names, and later lists of magician names are not reliable historical data.`)
      },
      {
        id: 'plagues-and-exodus',
        heading: 'The Plagues, the Night Departure and the Sea',
        html: P(`After the sorcerers believe, Pharaoh persists. The Qur’an describes years of drought, then flood, locusts, lice, frogs and blood, “distinct signs”, yet the people remain arrogant (7:130–133). Each time they promise to believe if the punishment is lifted, and each time they break the promise. The narrative is a study in the failure of punishment to produce genuine change.`) +
          P(`Musa is commanded to depart with the believers at night. Pharaoh discovers the departure and gathers his forces. At the sea the people fear that they will be overtaken. Musa says, “No! Indeed, with me is my Lord; He will guide me” (26:62). He is commanded to strike the sea with his staff, and it parts, each side like a great mountain. The believers cross. Pharaoh and his army follow and are drowned while Musa and his people watch (26:63–66; 2:50; 20:77–78).`) +
          P(`Pharaoh’s end is described in 10:90–92: when drowning he says, “I believe that there is no deity except Him in whom the Children of Israel believe, and I am of the Muslims.” The answer comes: “Now? But you disobeyed before and were of the corrupters.” His body is saved as a sign for those who come after. The Qur’an does not say his repentance was accepted; the confession is too late.`)
      },
      {
        id: 'the-mountain-and-the-tablets',
        heading: 'The Mountain, the Tablets and the Covenant',
        html: P(`After the crossing, Musa is summoned to the mountain for forty nights and leaves Harun in charge. The Qur’an says that Allah spoke to Musa and gave him the tablets containing instruction and explanation for everything (7:142–145). The covenant of the Children of Israel is renewed, and they are commanded to hold fast to what has been given.`) +
          P(`The Qur’an describes the mountain being raised above the people as a sign of the seriousness of the covenant (2:63; 7:171). It also records their reluctance: they are told to enter the gate prostrating and to say “forgiveness”, but they change the word and refuse (2:58–59; 7:161–162). Deliverance from Egypt does not produce a community of automatic obedience.`) +
          P(`The tablets are not described in detail. The Qur’an calls them “the tablets” and says they contain guidance and mercy. It does not give their material, number, language or complete contents. The later stories that fill in these details are not revelation. What matters is the covenant, the law and the community’s response.`)
      },
      {
        id: 'the-golden-calf',
        heading: 'The Golden Calf and the Failure of Leadership',
        html: P(`While Musa is on the mountain, the people make a calf from their ornaments and worship it. The Qur’an says the Samiri cast something into the fire and produced a calf that lowed (20:87–88). Harun had warned them, but they did not listen. When Musa returns, he is angry and grieved, and seizes his brother by the head. Harun explains that he feared the people would divide and that Musa would blame him (20:92–94).`) +
          P(`The account is more complex than a simple story of a prophet punishing idolaters. It shows the weakness of a community that had just witnessed the sea, the failure of a leader left in charge, and the rage of a prophet who must carry both the law and the people. Musa prays for forgiveness for himself and his brother and for mercy for the people (7:151–152).`) +
          P(`The Samiri is given a distinctive punishment: Musa tells him to go, and in this world he will have a life of isolation and a promise of reckoning (20:97). The Qur’an does not identify the Samiri with a historical person or tribe, and the name should not be treated as a verified proper name.`)
      },
      {
        id: 'water-rock-and-quail',
        heading: 'Water, Manna and the Wilderness Tests',
        html: P(`In the wilderness the people complain about food and water. The Qur’an says they were given shade from clouds, manna and quail (2:57; 7:160), and that water came from the rock when Musa struck it with his staff. Twelve springs flowed, one for each tribe, so that no group would fight over the water (2:60; 7:160).`) +
          P(`The gifts come with a warning: “Eat and drink from the provision of Allah, and do not commit abuse on the earth, spreading corruption” (2:60). The Qur’an repeatedly links material provision to moral responsibility. The wilderness is a school in which the community learns dependence on Allah and the limits of its demands.`) +
          P(`The people ask for the vegetables of Egypt — cucumbers, garlic, lentils and onions — and are told to go down to a city where they can find what they ask (2:61). The request expresses a nostalgia for the familiar, even when the familiar was a life of oppression. The Qur’an diagnoses the psychology of a people who prefer known slavery to unknown freedom.`)
      },
      {
        id: 'khidr-and-the-unknown',
        heading: 'Musa and the Servant of Allah',
        html: P(`Surah al-Kahf contains a journey that has fascinated readers for centuries. Musa says he will not stop until he reaches the confluence of the two seas, and travels with his young companion. They lose a fish, which returns to the sea, and meet a servant of Allah whom Allah has taught mercy and knowledge (18:60–65). Musa asks to follow him and is warned that he will not bear what he will see.`) +
          P(`The servant makes a hole in a boat, kills a boy, and repairs a wall in a town that refused hospitality. Each time Musa objects and is reminded of his promise of patience. At the end the servant explains: the boat belonged to poor people and was being taken by a king; the boy’s parents were believers and he would have oppressed them; the wall concealed a treasure left for two orphans (18:71–82).`) +
          P(`The Qur’an does not name the servant. The name “Khidr” comes from later tradition. Nor does the Qur’an settle his status as a prophet, an angel or a righteous servant; the classical scholars disagreed. What the passage teaches is clear: human knowledge is partial, and a believer may not judge a divine plan by the fragment he can see.`)
      },
      {
        id: 'qarun',
        heading: 'Qarun and the Ethics of Wealth',
        html: P(`Qarun is introduced in Surah al-Qasas as a man from the people of Musa who is given so much treasure that its keys would burden a group of strong men (28:76). He is warned not to exult, and told to seek the home of the Hereafter while not forgetting his share of the world, and to do good as Allah has done good to him. He refuses, claiming his wealth came from knowledge he possesses.`) +
          P(`The Qur’an’s answer is that Allah knows best who deserves what, and that Qarun’s wealth is a test, not proof of favour. He goes out among his people in his adornment, and those who desire this world wish they had the like. The knowledgeable among them say that the reward of Allah is better for those who believe and do righteous deeds (28:79–80).`) +
          P(`Qarun is then swallowed by the earth with his dwelling. The next morning those who had envied him say that it is as if Allah extends provision to whom He wills and restricts it. The story is not a celebration of poverty; it warns against reading wealth as a sign of divine approval and against arrogance that refuses social obligation.`)
      },
      {
        id: 'lessons-and-limits',
        heading: 'Lessons and the Limits of the Sources',
        html: P(`The Musa cycle is a sustained meditation on liberation and its aftermath. The Qur’an does not end the story with the crossing of the sea. It follows the freed people into the wilderness and shows that political liberation is not the same as moral transformation. The community that leaves Egypt must still learn to worship one God, obey the law, accept leadership and resist the temptation to manufacture a comfortable idol.`) +
          P(`The cycle also insists that prophets are human. Musa asks for help, fears, becomes angry, makes a mistake and seeks forgiveness. The Qur’an does not present him as a demigod. His authority comes from Allah, and his strength is exercised through signs, patience and the support of his brother.`) +
          NOTE(`<strong>Source caution.</strong> The Qur’an is the primary source for this article. Authentic hadith are cited only where they add a specific point. The names of Pharaoh, Asiya, Musa’s mother, the magicians and Khidr, the exact date of the exodus, the identification of Mount Sinai and the location of the sea crossing come from later tradition, archaeology or modern speculation and are not part of the revealed text.`) +
          NOTE(`<strong>Editorial note:</strong> this is an educational synthesis, not a critical edition of the commentaries. The article distinguishes the Qur’anic text, the authentic hadith and later narrative, and it does not adjudicate every classical dispute.`)
      }
    ],
    faqs: [


      { q: 'Who was Pharaoh in the Qur’an?', a: 'The Qur’an uses “Pharaoh” (Fir‘awn) as a title, not a personal name. It does not identify him with a specific Egyptian king, and the dating of the exodus is a historical question on which the Qur’an is silent. The later attempts to match him with a particular dynasty are hypotheses, not revelation.' },
      { q: 'Did Musa really split the sea?', a: 'The Qur’an states that the sea was parted for the Children of Israel and that Pharaoh and his army were drowned (2:50; 26:63–66). It does not describe the mechanism, the location or the width of the path. A believer accepts the Qur’anic account; the attempt to explain it by a natural event is speculation, not a requirement of faith.' },
      { q: 'Who was Khidr?', a: 'The Qur’an does not name him. It calls him “a servant from among Our servants” (18:65). The name Khidr and the claim that he is a prophet, an angel or a saint come from later tradition, and classical scholars disagreed about his status. The passage’s lesson is the limits of human knowledge, not the existence of a secret hierarchy of saints.' },
      { q: 'Was the Torah given at Mount Sinai?', a: 'The Qur’an says that Musa was given the tablets at the mountain (al-tur) and that Allah spoke to him there. It does not identify the mountain with a specific peak. The identification of Jabal Musa in the Sinai peninsula is a later tradition and a modern tourist designation, not a Qur’anic statement.' },
      { q: 'Did Musa commit a sin when he killed the Egyptian?', a: 'The Qur’an records the killing, Musa’s immediate repentance and Allah’s forgiveness (28:15–16). Classical theology distinguishes between the protection of prophets from major sins and the possibility of lesser mistakes followed by repentance. The Qur’an presents the event as a wrong that was forgiven, not as a model to imitate.' }
    ],
    bibliography: [
      `The Qur’an — especially 2:49–61, 5:20–26, 7:103–162, 10:75–93, 17:101–104, 18:60–82, 20:9–98, 26:10–68, 27:7–14, 28:3–46, 28:76–82, 37:114–122, 44:17–33, 79:15–26. Translations adapted from Saheeh International unless stated.`,
      `Sahih al-Bukhari — the reports on Musa, the night journey and the prophets’ ranks.`,
      `Sahih Muslim — the reports on Musa and the signs of prophethood.`,
      `Al-Tabari, <em>Jami‘ al-Bayan ‘an Ta’wil Ay al-Qur’an</em> — the classical commentary on the Musa passages.`,
      `Al-Qurtubi, <em>al-Jami‘ li Ahkam al-Qur’an</em> — legal and theological discussion.`,
      `Ibn Kathir, <em>Tafsir al-Qur’an al-‘Azim</em> and <em>al-Bidayah wa al-Nihayah</em> — later synthesis with grading.`,
      `Al-Kisa’i, <em>Qisas al-Anbiya</em> — later narrative material, used only with explicit caution.`,
      `Modern studies of Qur’anic narrative, the exodus traditions and the history of Isra’iliyyat in tafsir.`
    ],
    related: [
      ...relatedBase,
      { href: 'stories-of-the-prophets.html', label: 'Stories of the Prophets: an overview of the Qur’anic narratives' },
      { href: 'ibrahim-friend-of-allah-and-the-trial.html', label: 'Ibrahim: the friend of Allah and the trial of faith' },
      { href: 'yusuf-beauty-of-forgiveness.html', label: 'Yusuf: beauty, chastity and forgiveness' },
      { href: 'isa-the-messiah-and-the-quranic-correction.html', label: 'Isa: the Messiah, the miracles and the Qur’anic correction' },
      { href: '../prophets.html', label: 'Prophetic narratives library' }
    ]
  },
  {
    slug: 'dawud-and-sulayman-power-justice-and-gratitude',
    title: 'Dawud and Sulayman: Power, Justice and Gratitude',
    metaTitle: 'Dawud and Sulayman in the Qur’an: Prophethood, Kingship, Justice and the Limits of Legend',
    description: 'The Qur’anic story of Dawud and Sulayman: the victory over Jalut, the Psalms, the mountains and birds, the judgement of the field, the litigants, the hoopoe and the Queen of Sheba, the glass palace, the wind and the jinn, the staff and the lesson on gratitude.',
    category: 'Prophets',
    readTime: '13 min',
    intro: P(`Dawud and Sulayman are the two prophet-kings of the Qur’an. Dawud is the shepherd who defeats a giant and receives a book, a kingdom and a voice that the mountains and birds answer. Sulayman inherits both the prophecy and the throne, is taught the language of birds, commands the wind and the jinn, and judges with a wisdom that his father recognises.`) +
      P(`Their story is also a warning about power. The Qur’an gives them extraordinary gifts, then shows them tested by those gifts: a disputed judgement, a pair of litigants, a missing bird, a queen who worships the sun, a throne that arrives before its owner, and a death that no one notices. This article follows the Qur’anic text and marks where the famous legends begin.`),
    keyTakeaways: [
      `Dawud kills Jalut, receives the kingdom and wisdom, and is given the Zabur (Psalms).`,
      `The mountains and birds join Dawud in praise, and iron is softened for him to make armour.`,
      `Dawud and Sulayman both judge a dispute over a field; the Qur’an says Sulayman understood it and that both were given judgement and knowledge.`,
      `Sulayman is taught the language of birds and commands an army of jinn, humans and birds.`,
      `The Queen of Sheba is not named in the Qur’an; “Bilqis” is later tradition.`,
      `Sulayman’s throne is brought by one with knowledge of the Book, and the queen submits after seeing the glass palace.`,
      `The jinn did not know the unseen: Sulayman’s death was discovered only when a creature ate through his staff.`,
      `The Qur’an explicitly denies that Sulayman taught magic (2:102); the ring, the demon and the forty-year legends are not revelation.`
    ],
    sections: [
      {
        id: 'why-they-matter',
        heading: 'Why Dawud and Sulayman Matter',
        html: P(`Dawud and Sulayman are named in the Qur’an as recipients of prophecy, scripture, kingdom and judgement. Dawud is mentioned in 2:251, 4:163, 5:78, 6:84, 17:55, 21:78–80, 27:15, 34:10–11 and 38:17–26. Sulayman appears in 2:102, 4:163, 6:84, 21:78–82, 27:15–44, 34:12–14 and 38:30–40.`) +
          P(`The passages are not a court chronicle. They are selected scenes that teach three things at once: that prophethood and political power can coexist, that power is a test, and that knowledge, justice and gratitude are the qualities that make rule legitimate. The Qur’an is as interested in Sulayman’s prayer for a grateful heart as in his command of the wind.`) +
          P(`The story also has a long afterlife in legend. The ring that controlled the jinn, the demon who stole the throne, the forty years of wandering, the marriage of Sulayman and Bilqis, and the exact identity of the hoopoe’s news are later narrative, not Qur’anic revelation. This article keeps the text and the legend apart.`)
      },
      {
        id: 'dawud-and-jalut',
        heading: 'Dawud, Talut and the Giant',
        html: P(`The Qur’an introduces Dawud in the context of the Children of Israel’s demand for a king. They ask their prophet to appoint a king so that they may fight in the way of Allah, then hesitate when Talut is chosen because he is not wealthy enough. Their prophet answers that Allah has chosen him and increased him in knowledge and stature (2:246–247).`) +
          P(`The sign of the appointment is the ark (tabut) containing tranquillity (sakinah) from their Lord and relics of the family of Musa and Harun, carried by angels (2:248). Talut leads the army, tests his soldiers at a river, and advances with a small faithful remnant against Jalut and his forces (2:249–250).`) +
          P(`Dawud, a young man in the army, kills Jalut. The Qur’an says that Allah gave him the kingdom and wisdom and taught him what He willed (2:251). The verse is careful: the victory is not a celebration of military prowess but a demonstration that Allah repels some people by means of others, and that the earth would be corrupted if He did not.`)
      },
      {
        id: 'psalms-mountains-and-iron',
        heading: 'The Psalms, the Mountains and the Softened Iron',
        html: P(`Dawud is given the Zabur, the Psalms (4:163; 17:55). The Qur’an does not quote the Zabur or describe its contents in detail; it presents it as a revealed book given to Dawud alongside the Torah and the Gospel in the chain of revelation. The existing Psalms of the Hebrew Bible are not identical with the Qur’anic Zabur, and the Qur’an does not claim that they are.`) +
          P(`The mountains and birds are subjected to join Dawud in praise: “We subjected the mountains to glorify with him in the evening and at sunrise, and the birds gathered” (38:18–19; see 34:10). The image is not a nature poem. It presents all creation as participating in the worship that human beings so often neglect.`) +
          P(`Allah also softened iron for Dawud and taught him to make coats of mail, commanding him to measure the links well (21:80; 34:10–11). The Qur’an presents technology as a divine gift and a form of mercy: armour protects the body, and the skill to make it is part of the provision by which a society survives.`) +
          NOTE(`<strong>Source caution.</strong> The Qur’an does not preserve the text of the Zabur, and it does not identify the existing biblical Psalms as the book given to Dawud. The relationship between the two is a question for historians of scripture, not something the Qur’an settles.`)
      },
      {
        id: 'the-judgement-of-the-field',
        heading: 'The Judgement of the Field',
        html: P(`The Qur’an gives one of its clearest pictures of prophetic justice in 21:78–79. Two parties bring a dispute: the sheep of one group have strayed into the field of another at night. Dawud gives a judgement, and Sulayman gives another. The Qur’an says that Allah made Sulayman understand the case, while giving both of them judgement and knowledge.`) +
          P(`The passage is remarkable for what it does not say. It does not describe the field, the number of sheep, the damage, or the exact ruling of either prophet. It does not say that Dawud was wrong in a moral sense; it says that Sulayman understood the case better. Both are praised. The lesson is that a judge may be sincere and still be corrected by a deeper understanding.`) +
          P(`The story also shows a father and son in a shared vocation. Sulayman is not presented as a rival who displaces Dawud. He is a younger prophet whose insight is recognised, and the Qur’an uses the episode to teach that wisdom is not a function of age or office. The later elaborations that supply the exact verdict are commentary, not revelation.`)
      },
      {
        id: 'the-litigants',
        heading: 'The Litigants and the Ninety-Nine Sheep',
        html: P(`Surah Sad presents a different scene. Two litigants climb into Dawud’s private chamber (mihrab) and ask him to judge between them. One says that his brother has ninety-nine sheep and he has one, and that the brother demands he give it up. Dawud tells him that he has been wronged by the demand for his single sheep to add to the ninety-nine (38:21–24).`) +
          P(`Then Dawud realises that he has been tested. He asks forgiveness, falls bowing, and is forgiven. The Qur’an says that he has nearness to Allah and a good return (38:25). The passage does not explain the exact nature of his error. The later story that he gave a hasty judgement without hearing the other side is a plausible reading, but the text does not state it.`) +
          P(`What is clear is the moral: a judge must not decide on the basis of one party’s account, however sympathetic it sounds. The episode is a warning to anyone with authority, and it is placed immediately before the Qur’an’s praise of Dawud’s devotion and his kingdom. The two themes belong together: the ruler who is close to Allah is the ruler who is willing to be corrected.`) +
          NOTE(`<strong>Source caution.</strong> The Qur’an does not specify Dawud’s mistake in this episode. The detailed stories that explain it — the wife of Uriah, the hasty verdict, the exact number of the sheep — are later narrative and should not be presented as the plain sense of the Qur’an.`)
      },
      {
        id: 'sulayman-the-heir',
        heading: 'Sulayman the Heir and the Language of Birds',
        html: P(`Sulayman inherits Dawud in prophecy and kingship. He says, “O people, we have been taught the language of birds, and we have been given of all things. Indeed, this is clear favour” (27:16). The Qur’an presents the gift as a sign of Allah’s favour, not as a personal achievement.`) +
          P(`His army includes jinn, humans and birds, and it is marshalled in ranks (27:17). When they reach the valley of the ants, an ant warns the others to enter their dwellings lest Sulayman and his soldiers crush them. Sulayman smiles at her words and prays, “My Lord, enable me to be grateful for Your favour which You have bestowed upon me and upon my parents, and to do righteousness of which You approve” (27:18–19).`) +
          P(`The scene is easy to sentimentalise, but its point is serious. The king who commands the wind and the jinn is taught gratitude by an ant. The Qur’an places the prayer for thankfulness at the moment of greatest power, not after a defeat. That is the ethical centre of the Sulayman cycle.`)
      },
      {
        id: 'hoopoe-and-saba',
        heading: 'The Hoopoe and the Queen of Sheba',
        html: P(`Sulayman inspects the birds and finds the hoopoe absent. He threatens to punish or slaughter it unless it brings a clear authority (27:20–21). The hoopoe arrives with news of a city called Saba: its queen rules over a people who prostrate to the sun instead of Allah, and Satan has made their deeds attractive to them (27:22–24).`) +
          P(`The Qur’an does not name the queen. The name “Bilqis” comes from later tradition, and the detailed descriptions of her throne, her palace and her conversion are partly Qur’anic and partly legendary. The Qur’anic text says that she has a great throne (27:23) and that she and her people worship the sun (27:24).`) +
          P(`The hoopoe is not the hero of the story. It is a messenger whose report must be verified, and Sulayman does not act on it immediately. He sends a letter, waits for a response, and tests what he hears. The episode is a model of intelligence-gathering that refuses both credulity and arrogance.`)
      },
      {
        id: 'letter-and-gift',
        heading: 'The Letter, the Council and the Gift',
        html: P(`The letter is one of the most quoted passages in the Qur’an: “Indeed, it is from Sulayman, and indeed, it is ‘In the name of Allah, the Entirely Merciful, the Especially Merciful. Do not exalt yourselves above me, but come to me in submission’” (27:30–31). It is a summons to monotheism and to political submission, and it begins with the name of Allah rather than with the king’s titles.`) +
          P(`The queen consults her nobles. They say that they are strong and that the decision belongs to her. She answers that kings, when they enter a city, ruin it and humiliate its honoured people (27:32–34). She sends a gift, hoping to test Sulayman or to buy peace.`) +
          P(`Sulayman rejects the gift. “Allah has given me better than what He has given you,” he says, and warns that he will come with an army they cannot resist (27:36–37). The refusal is not contempt for wealth; it is a refusal to let political relations be reduced to bribery. The queen’s wisdom and Sulayman’s firmness are both on display.`)
      },
      {
        id: 'throne-and-palace',
        heading: 'The Throne and the Palace of Glass',
        html: P(`Before the queen arrives, Sulayman asks which of his court can bring her throne. A powerful jinn offers to bring it before Sulayman rises from his seat; one who has knowledge of the Book offers to bring it before the blink of an eye (27:38–40). Sulayman receives it and says, “This is from the favour of my Lord to test me whether I will be grateful or ungrateful” (27:40).`) +
          P(`The Qur’an does not name the one who brought the throne. The later identification with Asif ibn Barkhiya is tradition, not revelation. Nor does the Qur’an explain the mechanism. The point is theological: knowledge and power are gifts, and the test is gratitude.`) +
          P(`When the queen arrives, she is asked whether her throne is like this. She says, “It is as if it is it” (27:42). She is then invited into a palace whose floor is made of glass. Thinking it is water, she uncovers her shins; Sulayman tells her that it is a palace paved with glass. She responds, “My Lord, I have wronged myself, and I submit with Sulayman to Allah, Lord of the worlds” (27:44). The story ends with her conversion, not with a marriage or a conquest.`)
      },
      {
        id: 'wind-jinn-and-gratitude',
        heading: 'The Wind, the Jinn and the Command to Be Grateful',
        html: P(`The Qur’an subjects the wind to Sulayman, blowing by his command toward the land that Allah has blessed (21:81), and gives him a month’s journey in the morning and a month’s in the evening (34:12). The jinn build for him mihrabs, statues, basins like reservoirs and fixed cauldrons (34:13).`) +
          P(`The command that follows is the key to the whole cycle: “Work, O family of Dawud, in gratitude” (34:13). The gifts are not rewards for piety that can be enjoyed without responsibility. They are a commission. The family of Dawud is addressed as a household of prophets and kings whose public work is an act of thanksgiving.`) +
          P(`The Qur’an also insists that Sulayman did not disbelieve. In 2:102 it rejects the claim that he taught magic: “Sulayman did not disbelieve, but the devils disbelieved, teaching people magic.” The verse is a direct correction of a slander that had attached itself to his name. The later legends of a magic ring and a demonic double contradict the Qur’an’s own defence of his prophethood.`) +
          NOTE(`<strong>Source caution.</strong> The Qur’an does not describe the jinn as a technology that believers can harness, and it explicitly denies that Sulayman practised magic (2:102). The ring, the demon, the forty years and the building projects attributed to him in later literature are not revelation and should not be treated as historical fact.`)
      },
      {
        id: 'death-and-the-staff',
        heading: 'The Death and the Staff',
        html: P(`Surah Saba ends the Sulayman cycle with an extraordinary image. When Allah decrees his death, nothing indicates it to the jinn except a creature of the earth eating through his staff. When his body falls, the jinn realise that if they had known the unseen they would not have remained in humiliating torment (34:14).`) +
          P(`The passage is a polemic against the idea that jinn or any creature share knowledge of the unseen. The jinn were working for Sulayman and did not know that he had died. Their labour continued because they assumed he was alive. The staff was the only thing holding him upright, and a small creature brought the whole illusion down.`) +
          P(`The Qur’an does not say how long he remained standing, and the later figure of forty years is tradition. Nor does it identify the creature precisely; the Arabic dabbah means a small crawling creature, often translated “termite” or “worm”. The theological point does not depend on the zoology.`)
      },
      {
        id: 'horses-and-the-test',
        heading: 'The Horses, the Test and the Kingdom',
        html: P(`Surah Sad presents two difficult passages about Sulayman. In the first, horses are presented to him; he says, “I have preferred the love of good over the remembrance of my Lord” until they are hidden from view, then orders them brought back and wipes their legs and necks (38:30–33). The Arabic allows more than one reading, and the classical commentators disagreed about whether he was distracted from prayer, whether he was admiring the horses, or whether he was stroking them in affection.`) +
          P(`The second passage says, “We tested Sulayman and placed upon his throne a body; then he returned. He said, ‘My Lord, forgive me and grant me a kingdom such as will not belong to anyone after me’” (38:34–35). The “body” is not explained. The later story that a jinn took his form and sat on the throne while Sulayman wandered is a legend, not the plain text.`) +
          P(`What the Qur’an does say is that Sulayman was tested, that he turned back to Allah, that he asked forgiveness, and that he was given a kingdom unlike any other. The passage is not a celebration of unlimited power. It is a prayer for a unique gift accompanied by an acknowledgement of dependence.`) +
          NOTE(`<strong>Source caution.</strong> The identity of the “body” on Sulayman’s throne, the nature of his mistake with the horses, and the story of the ring and the demon are not explained in the Qur’an. The classical commentaries preserve several readings; the popular legends are later and should be labelled as such.`)
      },
      {
        id: 'lessons-and-limits',
        heading: 'Lessons and the Limits of the Sources',
        html: P(`Dawud and Sulayman show that power can be compatible with prophethood, but only when power is understood as a trust. Dawud is corrected by his son’s judgement; Sulayman is taught gratitude by an ant and tested by the gifts themselves. The Qur’an does not present them as philosopher-kings who never err. It presents them as prophets who are corrected, forgiven and taught.`) +
          P(`The cycle also insists on the limits of knowledge. The jinn do not know the unseen. The hoopoe’s report must be verified. The queen’s throne arrives by a knowledge that is not named. Human beings are not invited to build a technology of the unseen; they are invited to worship the One who knows it.`) +
          P(`Finally, the story is a case study in source discipline. The Qur’an gives the theological core and refuses to satisfy curiosity about dates, names and mechanisms. The legends of the ring, the demon, the forty years and the marriage to Bilqis are not in the Qur’an. They may be interesting as literature, but they are not evidence for the lives of the prophets.`) +
          NOTE(`<strong>Editorial note:</strong> this article distinguishes the Qur’anic text, the authentic hadith and later narrative. It does not endorse the magical legends attached to Sulayman, and it does not treat the biblical or folkloric expansions as revelation.`)
      }
    ],
    faqs: [
      { q: 'Were Dawud and Sulayman prophets or only kings?', a: 'Both. The Qur’an names them among the prophets (4:163; 6:84) and also describes them as kings with armies, judgement and building projects. Their kingship is part of their prophetic vocation, not a separate career.' },
      { q: 'Did Sulayman understand the language of birds and ants?', a: 'The Qur’an says that Sulayman was taught the language of birds (27:16) and reports the speech of an ant (27:18–19). It does not describe the mechanism or extend the gift to every creature. The text presents it as a divine favour, not a natural skill.' },
      { q: 'Who was the Queen of Sheba?', a: 'The Qur’an calls her the queen of Saba and does not name her. “Bilqis” is a later tradition. The Qur’an describes her throne, her consultation with her nobles, her gift to Sulayman and her eventual submission to Allah (27:22–44).' },
      { q: 'Did Sulayman marry the Queen of Sheba?', a: 'The Qur’an does not say. It ends the episode with her acknowledgement of Allah (27:44). The marriage and the later stories about her are extra-Qur’anic tradition.' },
      { q: 'What was the “body” placed on Sulayman’s throne?', a: 'The Qur’an does not explain it (38:34). The classical commentators offered several readings, and the popular story of a demon taking Sulayman’s form is a later legend. The verse’s point is that Sulayman was tested and turned back to Allah.' }
    ],
    bibliography: [
      `The Qur’an — especially 2:102, 2:246–251, 4:163, 6:84, 17:55, 21:78–82, 27:15–44, 34:10–14, 38:17–40. Translations adapted from Saheeh International unless stated.`,
      `Sahih al-Bukhari — the reports on Dawud’s fasting and night prayer.`,
      `Sahih Muslim — the reports on Dawud’s devotion and the prophets’ virtues.`,
      `Al-Tabari, <em>Jami‘ al-Bayan ‘an Ta’wil Ay al-Qur’an</em> — the classical commentary on the Dawud and Sulayman passages.`,
      `Al-Qurtubi, <em>al-Jami‘ li Ahkam al-Qur’an</em> — legal and theological discussion.`,
      `Ibn Kathir, <em>Tafsir al-Qur’an al-‘Azim</em> and <em>al-Bidayah wa al-Nihayah</em> — later synthesis with grading.`,
      `Al-Kisa’i, <em>Qisas al-Anbiya</em> — later narrative material, used only with explicit caution.`,
      `Modern studies of Qur’anic narrative and the reception of the Dawud–Sulayman cycle in Islamic literature.`
    ],
    related: [
      ...relatedBase,
      { href: 'stories-of-the-prophets.html', label: 'Stories of the Prophets: an overview of the Qur’anic narratives' },
      { href: 'musa-pharaoh-the-exodus-and-the-law.html', label: 'Musa: Pharaoh, the exodus and the law' },
      { href: 'yunus-the-prophet-who-fled.html', label: 'Yunus: the prophet who fled' },
      { href: 'isa-the-messiah-and-the-quranic-correction.html', label: 'Isa: the Messiah, the miracles and the Qur’anic correction' },
      { href: '../prophets.html', label: 'Prophetic narratives library' }
    ]
  },
  {
    slug: 'yunus-the-prophet-who-fled',
    title: 'Yunus: The Prophet Who Fled',
    metaTitle: 'Yunus in the Qur’an: The Flight, the Fish, the Prayer in the Darkness and the Mercy That Followed',
    description: 'The Qur’anic story of Yunus: the call to his people, his departure in anger, the ship and the lot, the great fish, the prayer in the darkness, the people who believed, the gourd tree and the Qur’anic rebuke that made him a lesson for every caller.',
    category: 'Prophets',
    readTime: '12 min',
    intro: P(`Yunus is the shortest prophetic narrative in the Qur’an and one of the most intimate. He is a messenger who calls his people, is rejected, leaves in anger, is swallowed by a great fish, prays in the darkness, is saved, and returns to a people who finally believe. The story is told in a few dozen verses, but it has become one of the most beloved episodes in Islamic devotion.`) +
      P(`It is also a story about failure and mercy. The Qur’an does not hide the prophet’s mistake. It records his anger, his departure without permission, his confession of wrongdoing and the divine correction that follows. This article follows the Qur’anic text, notes where the famous details come from later tradition, and draws out why the story matters for anyone who speaks about faith.`),
    keyTakeaways: [
      `Yunus is named among the prophets and is also called Dhul-Nun, the companion of the fish.`,
      `He left his people in anger before receiving permission, and the Qur’an records his confession of wrongdoing.`,
      `He was swallowed by a great fish after the lot was cast and he was among those rejected.`,
      `His prayer in the darkness — “There is no deity except You; exalted are You; indeed, I have been of the wrongdoers” — is the centre of the story.`,
      `His people are the one city in the Qur’an said to have believed and benefited from faith (10:98).`,
      `The Qur’an uses Yunus as a warning to the Prophet Muhammad ﷺ not to abandon patience.`,
      `The name of the city, the name of the fish, the forty days and the exact duration are later tradition, not revelation.`
    ],
    sections: [
      {
        id: 'why-yunus-matters',
        heading: 'Why Yunus Matters',
        html: P(`Yunus is mentioned by name in 4:163, 6:86, 10:98 and 37:139, and alluded to as Dhul-Nun in 21:87 and as “the companion of the fish” in 68:48. The passages are brief, but together they give a complete arc: a messenger, a rejection, a flight, a ship, a lot, a fish, a prayer, a rescue and a people who believe.`) +
          P(`The story matters because it is about a prophet who fails. The Qur’an presents prophets as protected in their message and truthful in their teaching, but it does not present them as people who never make mistakes. Yunus leaves his post, is corrected, repents and is restored. The episode is therefore a source of hope for every believer who has run away from a duty.`) +
          P(`It is also a warning. The Qur’an addresses the Prophet Muhammad ﷺ directly: “Be patient for the decision of your Lord and do not be like the companion of the fish” (68:48). The story is not only a biography of Yunus; it is a lesson for the one who recites it.`)
      },
      {
        id: 'the-quranic-account',
        heading: 'The Qur’anic Account and Where It Is Found',
        html: P(`Surah al-Saffat gives the narrative sequence. Yunus is among the messengers. He runs away to the laden ship, draws lots, and is among those rejected. The great fish swallows him while he is blameworthy. Had he not been among those who glorify Allah, he would have remained in its belly until the Day of Resurrection. He is cast on a barren shore while ill, and a gourd tree grows over him. He is sent to a hundred thousand or more, and they believe (37:139–148).`) +
          P(`Surah al-Anbiya gives the prayer. Dhul-Nun goes off in anger and thinks that Allah will not decree anything upon him. He calls out in the darkness: “There is no deity except You; exalted are You. Indeed, I have been of the wrongdoers.” Allah responds, saves him from distress, and says that He saves the believers in the same way (21:87–88).`) +
          P(`Surah Yunus gives the outcome for his people: no city believed and benefited except the people of Yunus; when they believed, Allah removed from them the punishment of disgrace in this world and gave them enjoyment for a while (10:98). Surah al-Qalam adds the divine rebuke and the assurance that Yunus was chosen and made righteous (68:48–50).`)
      },
      {
        id: 'mission-and-departure',
        heading: 'The Mission and the Departure',
        html: P(`The Qur’an does not describe Yunus’s call or the content of his preaching in detail. It says that he was sent to a people, that they rejected him, and that he left. The text calls his departure “running away” (abaqa) to a laden ship (37:140), and it says that he went off in anger (21:87).`) +
          P(`The anger is usually understood as anger at his people’s rejection, not anger at Allah. The Qur’an does not accuse him of disbelief. It says that he thought Allah would not decree anything upon him — a phrase the commentators explained in several ways: that he thought his Lord would not constrain him, or would not punish him, or would not hold him to account for leaving. The exact nuance is debated, but the Qur’an is clear that he was wrong to leave without waiting for permission.`) +
          P(`The story thus begins with a failure of patience. Yunus had preached, had been rejected, and had reached the limit of his endurance. He left the field before the divine command to leave. The Qur’an does not present this as a small matter; it is the mistake that sets the whole drama in motion.`)
      },
      {
        id: 'lot-and-the-fish',
        heading: 'The Ship, the Lot and the Great Fish',
        html: P(`Yunus boards a laden ship. The Qur’an does not say why the ship was in danger, how many passengers it carried or where it was going. It says only that lots were cast and that Yunus was among those rejected (37:141). The image is stark: the prophet who left his people is now one of the losers in a game of chance.`) +
          P(`The great fish swallows him. The Qur’an calls him “blameworthy” (37:142). It does not say that the fish was a punishment in the ordinary sense; it presents the whole sequence as a divine arrangement by which Yunus is saved, corrected and returned. The fish is both a prison and a refuge.`) +
          P(`The text does not name the fish, describe its size or say how long Yunus remained inside. The popular word “whale” is a translation choice, not a Qur’anic identification. The Arabic hut means a large fish, and the story does not depend on the species.`)
      },
      {
        id: 'prayer-in-the-darkness',
        heading: 'The Prayer in the Darkness',
        html: P(`The prayer of Yunus is one of the most concentrated expressions of tawhid and repentance in the Qur’an: “There is no deity except You; exalted are You. Indeed, I have been of the wrongdoers” (21:87). It contains three movements: the affirmation of Allah’s uniqueness, the declaration of His transcendence, and the confession of the speaker’s own fault.`) +
          P(`The Qur’an says that Yunus called out “in the darknesses” (fi al-zulumat). The plural has been read as the darkness of the night, the darkness of the sea and the darkness of the fish’s belly. The text does not specify, but the image is powerful: a prophet in total obscurity, with no audience and no resources, calling on the One who sees.`) +
          P(`Allah responds and saves him from distress. The verse then generalises: “And thus do We save the believers” (21:88). The story is not a special case reserved for prophets. It is a pattern of rescue for anyone who turns to Allah in the darkness, and it is why the prayer is recited in times of fear and difficulty.`) +
          NOTE(`<strong>Source caution.</strong> The prayer itself is Qur’anic and is the most reliable part of the story. The report that whoever recites it will be answered is found in later hadith collections, but its chain is debated; it should be treated as a well-known supplication rather than a definitively authenticated promise.`)
      },
      {
        id: 'the-people-who-believed',
        heading: 'The People Who Believed',
        html: P(`The most striking detail in the Yunus story is the fate of his people. The Qur’an says that no city believed and benefited from its faith except the people of Yunus: when they believed, Allah removed from them the punishment of disgrace in this world and gave them enjoyment for a while (10:98).`) +
          P(`This is the one clear exception to the Qur’an’s pattern of destroyed cities. The people of Yunus are not wiped out. They respond to the warning, and the punishment is lifted. The text does not say that they became a model community or that their faith was perfect; it says that they believed and were spared.`) +
          P(`The Qur’an does not name their city. The identification with Nineveh comes from the Bible and from later Islamic tradition. It may be historically plausible, but it is not a Qur’anic statement. The number of the people is given as “a hundred thousand or more” (37:147), which is a literary way of saying that they were many, not a census figure.`) +
          NOTE(`<strong>Source caution.</strong> The Qur’an does not name Nineveh, and it does not say that the whole city converted overnight. The identification of the city and the detailed chronology of the revival are later tradition.`)
      },
      {
        id: 'the-gourd-and-the-shore',
        heading: 'The Gourd Tree and the Barren Shore',
        html: P(`After the fish, Yunus is cast onto a barren shore “while he was ill” (37:145). The Qur’an says that Allah caused a gourd tree (sha’jara min yaqtin) to grow over him (37:146). The gourd is a fast-growing plant with broad leaves; it provides shade and shelter for a sick man in an exposed place.`) +
          P(`The image is one of gentle care. The prophet who had been in the belly of a fish is now on dry land, weak and exposed, and Allah provides a plant for shade. The Qur’an does not say that Yunus built a shelter or that a community nursed him. It says that the gourd grew over him.`) +
          P(`The scene is a counterpoint to the darkness of the fish. The same God who hears in the depths provides shade on the shore. The story moves from confinement to openness, from the belly of the fish to the leaves of a plant, and from the prophet’s despair to his restoration.`)
      },
      {
        id: 'the-rebuke',
        heading: 'The Rebuke in Surah al-Qalam',
        html: P(`Surah al-Qalam addresses the Prophet Muhammad ﷺ: “So be patient for the decision of your Lord and do not be like the companion of the fish when he called out while he was distressed. Had not a favour from his Lord reached him, he would have been cast out on the barren shore while blameworthy. But his Lord chose him and made him among the righteous” (68:48–50).`) +
          P(`The passage is a direct link between the two prophets. Muhammad ﷺ is told to wait for Allah’s decision and not to imitate Yunus’s impatience. The rebuke is not a denial of Yunus’s prophethood; the same passage says that Allah chose him and made him righteous. It is a warning about a particular action, not a judgement on his whole mission.`) +
          P(`The verse also shows how the Qur’an uses earlier prophets to instruct the final prophet. Yunus’s story is not told for curiosity. It is told so that the Messenger ﷺ and his community may learn patience, and so that anyone who is tempted to abandon a difficult task may see both the danger and the mercy.`)
      },
      {
        id: 'the-hadith-and-humility',
        heading: 'The Hadith and the Prophet’s Humility',
        html: P(`The Prophet Muhammad ﷺ is reported to have said, “No one should say that I am better than Yunus ibn Matta” (Sahih al-Bukhari and Sahih Muslim). The report is authentic and is part of the Prophet’s teaching on humility. It does not deny his own rank; it forbids a believer from making a claim of superiority over Yunus.`) +
          P(`The classical scholars discussed how this report relates to the Prophet’s status as the seal of the prophets and to the hadith that he is the master of the children of Adam. One explanation is that the prohibition is about the way the claim is made, or about a particular occasion, or about not using Yunus’s mistake as a reason to look down on him. The report is best read as a lesson in adab, not as a ranking of prophets.`) +
          P(`The name “Yunus ibn Matta” comes from this hadith. The Qur’an calls him Yunus and Dhul-Nun but does not give his father’s name. The hadith supplies the name Matta, and the tradition is accepted in Islamic literature.`)
      },
      {
        id: 'lessons-for-callers',
        heading: 'Lessons for Anyone Who Calls to Faith',
        html: P(`The first lesson is that rejection is not a verdict on the caller. Yunus preached and was rejected, and the rejection did not mean that his message was false. The Qur’an honours him as a messenger even while recording his mistake. A person who invites others to faith should not measure the truth of the message by the response.`) +
          P(`The second lesson is that patience is part of the work. Yunus left before permission, and the Qur’an tells the Prophet ﷺ not to repeat that impatience. The desire to see results can become a reason to abandon the task, or to force an outcome that belongs to Allah. The story warns against both.`) +
          P(`The third lesson is that mercy can arrive after failure. Yunus confesses, is saved, is shaded by a gourd and is sent back to a people who believe. The Qur’an does not say that his mistake disqualified him. It says that Allah chose him and made him righteous. That is the hope the story offers to every believer who has failed and wants to return.`)
      },
      {
        id: 'later-legends-and-limits',
        heading: 'Later Legends and the Limits of the Sources',
        html: P(`The Yunus story has attracted a large body of legend. The fish is given a name, the duration in its belly is fixed at forty days, the city is identified with Nineveh, the king is named, and the gourd is explained as a plant with miraculous properties. None of this is in the Qur’an, and most of it is not in the authentic hadith.`) +
          P(`The Qur’an is deliberately spare. It gives the theological arc and leaves the rest. That spareness is not a gap to be filled with speculation; it is a invitation to focus on the prayer, the repentance and the mercy. The details that satisfy curiosity are not the details that transform the reader.`) +
          P(`The story also warns against treating a prophet’s mistake as a licence for one’s own. Yunus’s failure is recorded, but it is also corrected. The Qur’an does not say that because he was a prophet he could do as he pleased. It says that he called out, was answered, and was made righteous.`) +
          NOTE(`<strong>Editorial note:</strong> this article distinguishes the Qur’anic text, the authentic hadith and later narrative. It does not treat the name of the fish, the forty days or the identification of Nineveh as revelation, and it does not use the story to justify abandoning a duty.`)
      }
    ],
    faqs: [
      { q: 'Was Yunus swallowed by a whale?', a: 'The Qur’an says a “great fish” (hut) swallowed him (37:142). “Whale” is a common translation and interpretation, but the Qur’an does not identify the species or give its name.' },
      { q: 'Did the people of Nineveh believe?', a: 'The Qur’an says that the people of Yunus believed and that the punishment was removed from them (10:98). It does not name their city. The identification with Nineveh comes from the Bible and later Islamic tradition, not from the Qur’an.' },
      { q: 'How long was Yunus in the fish?', a: 'The Qur’an does not say. The figure of forty days is later tradition. The text says that he would have remained until the Day of Resurrection had he not been among those who glorify Allah (37:143–144).' },
      { q: 'Is the prayer of Yunus authentic?', a: 'The prayer is Qur’anic (21:87). The report that whoever recites it will be answered is found in later hadith collections, but its chain is debated. It is best treated as a well-known supplication rather than a definitively authenticated promise.' },
      { q: 'Why did Yunus leave his people?', a: 'The Qur’an says he went off in anger and ran away to a laden ship (21:87; 37:140). The anger is usually understood as anger at their rejection. He left before receiving permission, and the Qur’an records his confession of wrongdoing.' }
    ],
    bibliography: [
      `The Qur’an — especially 4:163, 6:86, 10:98, 21:87–88, 37:139–148, 68:48–50. Translations adapted from Saheeh International unless stated.`,
      `Sahih al-Bukhari — the report “No one should say that I am better than Yunus ibn Matta”.`,
      `Sahih Muslim — the same report and the chapters on the prophets’ virtues.`,
      `Al-Tabari, <em>Jami‘ al-Bayan ‘an Ta’wil Ay al-Qur’an</em> — the classical commentary on the Yunus passages.`,
      `Al-Qurtubi, <em>al-Jami‘ li Ahkam al-Qur’an</em> — legal and theological discussion.`,
      `Ibn Kathir, <em>Tafsir al-Qur’an al-‘Azim</em> and <em>al-Bidayah wa al-Nihayah</em> — later synthesis with grading.`,
      `Al-Kisa’i, <em>Qisas al-Anbiya</em> — later narrative material, used only with explicit caution.`,
      `Modern studies of Qur’anic narrative and the reception of the Yunus story in Islamic literature.`
    ],
    related: [
      ...relatedBase,
      { href: 'stories-of-the-prophets.html', label: 'Stories of the Prophets: an overview of the Qur’anic narratives' },
      { href: 'musa-pharaoh-the-exodus-and-the-law.html', label: 'Musa: Pharaoh, the exodus and the law' },
      { href: 'dawud-and-sulayman-power-justice-and-gratitude.html', label: 'Dawud and Sulayman: power, justice and gratitude' },
      { href: 'isa-the-messiah-and-the-quranic-correction.html', label: 'Isa: the Messiah, the miracles and the Qur’anic correction' },
      { href: '../prophets.html', label: 'Prophetic narratives library' }
    ]
  },
  {
    slug: 'isa-the-messiah-and-the-quranic-correction',
    title: 'Isa: The Messiah, the Miracles and the Qur’anic Correction',
    metaTitle: 'Isa in the Qur’an: The Messiah, Maryam, the Miracles, the Crucifixion and the Correction of the Trinity',
    description: 'The Qur’anic account of Isa: the annunciation to Maryam, the birth under the palm, the speech in the cradle, the miracles by Allah’s permission, the Injil, the crucifixion that did not happen, the correction of the Trinity, the second coming and the ethics of Muslim–Christian relations.',
    category: 'Prophets',
    readTime: '14 min',
    intro: P(`Isa is the prophet around whom the Qur’an draws some of its sharpest theological lines. It honours him as the Messiah, the son of Maryam, a word from Allah and a spirit from Him. It records his miracles: speech in the cradle, a bird of clay, the healing of the blind and the leper, the raising of the dead. And it denies, in unambiguous terms, that he was God, the son of God, or one of a Trinity.`) +
      P(`The story is therefore both an affirmation and a correction. It affirms the virgin birth, the messiahship and the miracles. It corrects the claims that grew up around him. This article follows the Qur’anic text closely, notes where the hadith add details, and refuses to let later polemic or later legend replace the words of the Qur’an.`),
    keyTakeaways: [
      `Isa is called al-Masih (the Messiah), the son of Maryam, a word from Allah and a spirit from Him.`,
      `The Qur’an affirms the virgin birth and the miracles performed by Allah’s permission.`,
      `Isa is a servant and messenger, not God and not the son of God.`,
      `The Qur’an denies that Isa was killed or crucified: “it was made to appear so” (4:157–158).`,
      `The Injil was given to Isa as guidance and light, confirming the Torah.`,
      `The Qur’an corrects the Trinity and the worship of Isa (4:171; 5:72–75, 116–117).`,
      `The authentic hadith speak of his return; the detailed chronology is hadith, not Qur’an.`,
      `Muslims are commanded to argue with the People of the Book in the best manner (29:46).`
    ],
    sections: [
      {
        id: 'why-isa-matters',
        heading: 'Why Isa Matters',
        html: P(`Isa is named twenty-five times in the Qur’an, and Maryam is the only woman named in the book. His story appears in 3:35–59, 4:157–159, 4:171–172, 5:46–47, 5:72–75, 5:110–120, 19:16–36, 21:91, 23:50, 43:57–65, 57:27, 61:6 and 66:12. It is one of the longest and most theologically loaded prophetic cycles.`) +
          P(`The Qur’an treats Isa as part of the chain of prophets that includes Nuh, Ibrahim, Musa and Muhammad ﷺ. It does not treat him as a foreign figure or an afterthought. It presents him as a sign for humanity, a mercy, and a messenger sent to the Children of Israel with a book and clear proofs.`) +
          P(`At the same time, the Qur’an is engaged in a sustained correction of Christian doctrine. It denies the incarnation, the Trinity and the crucifixion as Christians understand them. That correction is not an insult to Isa; it is presented as obedience to the truth about him. This article keeps the affirmation and the correction together, because the Qur’an does.`)
      },
      {
        id: 'the-quranic-account',
        heading: 'The Qur’anic Account and Where It Is Found',
        html: P(`The fullest narrative is in Surah Al ‘Imran and Surah Maryam. Al ‘Imran begins with the birth of Maryam, her dedication to the temple, her upbringing under Zakariyya, the annunciation, the birth of Isa and his speech in the cradle (3:35–59). Surah Maryam tells the same story with a more intimate focus on Maryam’s withdrawal, the angel’s appearance, the pain of childbirth and the palm tree (19:16–36).`) +
          P(`The passages are not a single biography. They are a set of arguments, and each one selects the details it needs. The reader who wants the full picture must read them together, and must resist the temptation to import the Gospel narratives wholesale into the Qur’anic text.`)
      },
      {
        id: 'maryam',
        heading: 'Maryam, the Chosen One',
        html: P(`The story begins with the family of Imran. The wife of Imran vows to dedicate her child to Allah, and when she gives birth to a girl she says, “My Lord, I have delivered a female,” and names her Maryam (3:35–36). The Qur’an says that Allah accepted her with a good acceptance, caused her to grow in a good manner, and placed her under the care of Zakariyya (3:37).`) +
          P(`Maryam is described as chosen and purified above the women of the worlds (3:42). She is given provision in her chamber, and when Zakariyya asks where it comes from she answers, “It is from Allah. Indeed, Allah provides for whom He wills without account” (3:37). The scene establishes her as a person of worship, purity and trust, not as a passive vessel.`) +
          P(`The Qur’an also calls her “the one who guarded her chastity” (21:91; 66:12) and “the daughter of Imran” (3:35; 66:12). It does not accept the later Christian doctrine that she is the mother of God. She is a righteous servant, chosen for a unique role, and her son is a servant and messenger.`) +
          NOTE(`<strong>Source caution.</strong> The Qur’an calls her “the sister of Harun” (19:28). This is not the Harun who was the brother of Musa; the name is understood as a family or tribal designation. The attempt to identify her with the Old Testament Miriam is a later interpretive move, not a Qur’anic statement.`)
      },
      {
        id: 'the-annunciation',
        heading: 'The Annunciation',
        html: P(`The angels announce to Maryam that Allah gives her good tidings of a word from Him, whose name is the Messiah, Isa son of Maryam, honoured in this world and the Hereafter and among those brought near (3:45). She asks how she can have a child when no man has touched her. The answer is, “Thus Allah creates what He wills. When He decrees a matter, He only says to it, ‘Be,’ and it is” (3:47).`) +
          P(`Surah Maryam describes the annunciation more intimately. She withdraws from her family to a place in the east, takes a veil, and the Spirit appears to her in the form of a well-proportioned man. She seeks refuge in the Most Merciful. He says that he is only a messenger of her Lord, sent to give her a pure boy (19:16–21).`) +
          P(`The Qur’an is careful with the language. Isa is a “word” from Allah and a “spirit” from Him (4:171), but the text does not say that Allah became flesh. The creation of Isa is compared to the creation of Adam: “He created him from dust, then said to him, ‘Be,’ and he was” (3:59). The miracle is real, and it is a miracle of creation, not an incarnation.`)
      },
      {
        id: 'birth-and-the-palm',
        heading: 'The Birth and the Palm Tree',
        html: P(`Maryam gives birth in a remote place. The Qur’an describes the pain of childbirth and her cry, “Would that I had died before this and had been a thing forgotten” (19:23). Then a voice calls from beneath her: “Do not grieve; your Lord has provided beneath you a stream. And shake toward you the trunk of the palm tree; it will drop upon you ripe, fresh dates” (19:24–25).`) +
          P(`She is told to eat, drink and be comforted, and if she sees anyone, to say that she has vowed a fast of silence and will not speak to any person that day (19:26). The silence is a narrative device: when she returns with the child, she does not defend herself. The child speaks instead.`)
      },
      {
        id: 'the-cradle-speech',
        heading: 'The Speech in the Cradle',
        html: P(`When Maryam brings the child to her people, they accuse her. She points to the child, and he speaks: “Indeed, I am a servant of Allah. He has given me the Scripture and made me a prophet. And He has made me blessed wherever I am, and has enjoined upon me prayer and charity as long as I remain alive, and has made me dutiful to my mother, and has not made me a tyrant or wretched. And peace is upon me the day I was born, the day I die, and the day I am raised alive” (19:30–33).`) +
          P(`The first words of Isa in the Qur’an are “I am a servant of Allah.” That is the answer to every later claim that he was divine. He identifies himself as a servant, a recipient of Scripture, a prophet, a worshipper and a dutiful son. The speech is a summary of the Qur’anic doctrine of prophethood.`) +
          P(`The Qur’an also says that he will speak to the people in the cradle and in maturity (3:46). The miracle is not a childish trick; it is a sign that the child is a messenger, and it vindicates his mother before her accusers. The story then moves to his mission to the Children of Israel.`)
      },
      {
        id: 'the-miracles',
        heading: 'The Miracles and the Permission of Allah',
        html: P(`The Qur’an lists the miracles of Isa in 3:49 and 5:110. He makes the form of a bird from clay, breathes into it, and it becomes a bird by Allah’s permission. He heals the blind and the leper, and raises the dead by Allah’s permission. He tells people what they eat and what they store in their houses. Each miracle is accompanied by the phrase “by the permission of Allah.”`) +
          P(`Surah al-Ma’idah adds the table from heaven. The disciples ask for a table to be sent down as a sign and a festival. Isa prays, and Allah sends it with a warning: whoever disbelieves after it will be punished as no one else has been punished (5:112–115). The passage is a reminder that a sign increases responsibility rather than removing it.`)
      },
      {
        id: 'the-injil',
        heading: 'The Injil and the Mission to the Children of Israel',
        html: P(`Isa is sent to the Children of Israel, confirming the Torah that came before him and bringing the Injil as guidance and light (3:3–4; 5:46). The Qur’an says that the Injil contains guidance, light and admonition for the righteous, and that the People of the Gospel should judge by what Allah has revealed in it (5:46–47).`) +
          P(`The Qur’an does not claim that the existing Gospels are identical to the Injil. It distinguishes the revelation given to Isa from the books that later communities compiled. It also says that some of the People of the Book altered words from their places and forgot a portion of what they were reminded of (4:46; 5:13–14). The exact extent of textual corruption is a matter of scholarly discussion, not a point the Qur’an quantifies.`) +
          P(`Isa’s mission is also described as a confirmation of what came before and a clarification of some of the matters about which the Children of Israel differed (3:49–50; 43:63). He does not abolish the law; he comes within the prophetic chain. The Qur’an presents him as a messenger with a book, not as the founder of a new religion called Christianity.`) +
          NOTE(`<strong>Source caution.</strong> The Qur’an does not say that every copy of the Gospel is corrupt in every word, nor does it preserve the text of the Injil. It affirms that the Injil was given to Isa and that some People of the Book altered and forgot. The relationship between the Injil and the canonical Gospels is a historical and theological question, not a simple Qur’anic formula.`)
      },
      {
        id: 'the-crucifixion',
        heading: 'The Crucifixion That Did Not Happen',
        html: P(`The Qur’an’s denial is explicit: “They did not kill him, nor did they crucify him, but it was made to appear so to them. And indeed, those who differ about it are in doubt. They have no knowledge of it except the following of assumption. And they did not kill him, for certain. Rather, Allah raised him to Himself, and Allah is Exalted in Might, Wise” (4:157–158).`) +
          P(`The Qur’an also records the divine words, “I will take you and raise you to Myself” (3:55). The Arabic verb tawaffa can mean to take in death or to take fully, and the classical commentators discussed whether Isa died before being raised or was raised alive. The dominant reading is that he was raised alive and will return. The Qur’an does not give a chronology.`) +
          NOTE(`<strong>Source caution.</strong> The Qur’an does not name the substitute, describe the scene of the crucifixion or say that Isa died on the cross. The “substitution” stories are later narrative. The text affirms that he was not killed and that Allah raised him.`)
      },
      {
        id: 'the-trinity-correction',
        heading: 'The Correction of the Trinity',
        html: P(`The Qur’an addresses the People of the Book directly: “O People of the Scripture, do not exceed limits in your religion, and do not say about Allah except the truth. The Messiah, Isa son of Maryam, was but a messenger of Allah and His word which He directed to Maryam and a spirit from Him. So believe in Allah and His messengers, and do not say, ‘Three.’ Desist; it is better for you. Allah is but one God. Exalted is He above having a son” (4:171).`) +
          P(`The denial is repeated in Surah al-Ma’idah: “They have disbelieved who say, ‘Allah is the Messiah, the son of Maryam.’ But the Messiah said, ‘O Children of Israel, worship Allah, my Lord and your Lord.’ Indeed, whoever associates others with Allah, Allah has forbidden him Paradise” (5:72). The Qur’an also rejects the idea that Allah is the third of three (5:73).`) +
          P(`On the Day of Judgement, Isa will be asked whether he told people to worship him and his mother. He will answer that he only told them to worship Allah, his Lord and their Lord, and that he was a witness over them while he was among them (5:116–117). The passage is a dramatic vindication of tawhid and a warning against turning a prophet into a god.`) +
          P(`The Qur’an’s alternative is simple: “Say, He is Allah, the One; Allah, the Eternal Refuge; He neither begets nor is born, nor is there to Him any equivalent” (112:1–4). Isa is honoured as a servant and messenger within that framework, not excluded from it.`)
      },
      {
        id: 'the-second-coming',
        heading: 'The Second Coming and the Signs of the Hour',
        html: P(`The Qur’an contains allusions that Muslims have understood as referring to Isa’s return. Surah al-Zukhruf says, “And indeed, he is a knowledge of the Hour, so do not doubt it and follow Me” (43:61). The pronoun and the reading are debated; some read it as “a sign” and some as “knowledge.” Surah al-Nisa’ says that every one of the People of the Scripture will believe in him before his death (4:159), which is also interpreted in more than one way.`) +
          P(`The detailed picture comes from the authentic hadith. The Prophet ﷺ is reported to have said that Isa will descend, kill the Dajjal, break the cross, kill the pig, abolish the jizya, and that wealth will be abundant. The reports are in Sahih al-Bukhari and Sahih Muslim, and they are accepted by the mainstream tradition.`) +
          NOTE(`<strong>Source caution.</strong> The Qur’anic allusions to Isa’s return are interpreted, not explicit narratives. The detailed chronology comes from authentic hadith, and the popular end-times timelines that add names, dates and political predictions are later material.`)
      },
      {
        id: 'muslims-and-christians',
        heading: 'Muslims and Christians',
        html: P(`The Qur’an does not command hostility toward Christians as people. It says that the nearest in affection to the believers are those who say, “We are Christians,” because among them are priests and monks who are not arrogant (5:82–83). It commands Muslims to argue with the People of the Book in the best manner, except those who do wrong, and to say, “We believe in what was revealed to us and what was revealed to you; our God and your God is one” (29:46).`) +
          P(`It also invites them to a common word: “O People of the Scripture, come to a word that is equitable between us: that we will not worship except Allah and not associate anything with Him and not take one another as lords besides Allah” (3:64). The invitation is to tawhid, not to a vague unity that ignores theological differences.`) +
          P(`The verse that Jews and Christians who do good will have their reward (2:62; 5:69) has been read in different ways. The classical view is that it refers to those who followed their prophets before the final message, or to those who accept the truth when it reaches them. It is not a licence to ignore the Qur’an’s correction of the Trinity, and it is not a command to treat every Christian as an enemy.`) +
          P(`The Qur’an’s model is therefore clear: affirm the truth, correct the error, and engage with justice and mercy. The polemic that turns every Christian into a hostile actor is not the Qur’an’s language, and the indifference that pretends the theological differences do not matter is not the Qur’an’s either.`)
      },
      {
        id: 'lessons-and-limits',
        heading: 'Lessons and the Limits of the Sources',
        html: P(`Isa’s story teaches that a miracle does not make a person divine. The virgin birth, the speech in the cradle, the bird of clay and the raising of the dead are all signs of Allah’s power, and all of them are accompanied by the phrase “by Allah’s permission.” The Qur’an honours Isa precisely by keeping him within the category of servanthood.`) +
          P(`The story also teaches that theological language matters. The difference between “servant and messenger” and “son of God” is not a minor quibble. It is the difference between tawhid and shirk, and the Qur’an treats it with absolute seriousness while still commanding respectful argument.`) +
          P(`Finally, the story warns against both legends and polemics. The Qur’an does not give the name of the substitute on the cross, the details of the return, the date of the birth or the contents of the Injil. The hadith add some details, and the later literature adds much more. A honest reader distinguishes the three, and refuses to make a weapon of what has not been revealed.`) +
          NOTE(`<strong>Editorial note:</strong> this article distinguishes the Qur’anic text, the authentic hadith and later narrative. It affirms the Qur’anic correction of the Trinity and the crucifixion while rejecting abusive polemic against Christians, and it does not treat later legends as revelation.`)
      }
    ],
    faqs: [
      { q: 'Do Muslims believe Isa was crucified?', a: 'No. The Qur’an says that they did not kill him or crucify him, but it was made to appear so, and that Allah raised him to Himself (4:157–158). The Qur’an does not name a substitute; that detail comes from later narrative.' },
      { q: 'Was Isa the son of God?', a: 'No. The Qur’an says that Isa was a messenger of Allah, His word directed to Maryam and a spirit from Him, and it commands, “Do not say, ‘Three’” (4:171). It affirms that Allah is one and has no son (5:72–75; 112).' },
      { q: 'Did Isa bring the Gospel?', a: 'Yes. The Qur’an says that Allah gave Isa the Injil as guidance and light, confirming the Torah (3:3–4; 5:46). The Qur’an does not claim that the existing canonical Gospels are identical to the Injil, and it does not preserve the Injil’s text.' },
      { q: 'Will Isa return?', a: 'The authentic hadith speak of his descent, and the mainstream tradition accepts them. The Qur’an contains allusions that have been interpreted as referring to his return (43:61; 4:159), but the detailed chronology comes from the hadith, not the Qur’an.' },
      { q: 'Who was Maryam?', a: 'Maryam was the daughter of Imran, chosen and purified above the women of the worlds (3:42), who conceived Isa without a father by Allah’s command. The Qur’an honours her as a righteous servant and the mother of a messenger, not as the mother of God.' }
    ],
    bibliography: [
      `The Qur’an — especially 3:35–59, 4:157–172, 5:46–47, 5:72–75, 5:110–120, 19:16–36, 21:91, 43:57–65, 57:27, 61:6, 66:12, 112. Translations adapted from Saheeh International unless stated.`,
      `Sahih al-Bukhari — the reports on the descent of Isa and the signs of the Hour.`,
      `Sahih Muslim — the reports on Isa’s return, the Dajjal and the end-times.`,
      `Al-Tabari, <em>Jami‘ al-Bayan ‘an Ta’wil Ay al-Qur’an</em> — the classical commentary on the Isa passages.`,
      `Al-Qurtubi, <em>al-Jami‘ li Ahkam al-Qur’an</em> — legal and theological discussion.`,
      `Ibn Kathir, <em>Tafsir al-Qur’an al-‘Azim</em> and <em>al-Bidayah wa al-Nihayah</em> — later synthesis with grading.`,
      `Ibn Taymiyyah, <em>al-Jawab al-Sahih li-man Baddala Din al-Masih</em> — the classical Muslim response to Christian doctrine.`,
      `Modern studies of Qur’anic Christology, the Injil and Muslim–Christian relations.`
    ],
    related: [
      ...relatedBase,
      { href: 'stories-of-the-prophets.html', label: 'Stories of the Prophets: an overview of the Qur’anic narratives' },
      { href: 'musa-pharaoh-the-exodus-and-the-law.html', label: 'Musa: Pharaoh, the exodus and the law' },
      { href: 'dawud-and-sulayman-power-justice-and-gratitude.html', label: 'Dawud and Sulayman: power, justice and gratitude' },
      { href: 'yunus-the-prophet-who-fled.html', label: 'Yunus: the prophet who fled' },
      { href: '../prophets.html', label: 'Prophetic narratives library' }
    ]
  }
];
