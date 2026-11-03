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
    slug: 'khadijah-the-first-believer-and-pillar-of-the-mission',
    title: 'Khadijah: The First Believer and the Pillar of the Early Mission',
    metaTitle: 'Khadijah bint Khuwaylid: The Merchant, the First Muslim and the Prophet’s Partner',
    description: 'The life of Khadijah bint Khuwaylid: her merchant household in Makkah, her marriage to Muhammad ﷺ, the first revelation in the cave of Hira, her support of the mission, her children, the boycott, the year of sorrow, her rank in the hadith and the limits of the later legends.',
    category: 'Sahaba',
    readTime: '14 min',
    intro: P(`Khadijah bint Khuwaylid is the first person to believe in the message of Muhammad ﷺ and the woman whose wealth, judgement and courage made the first years of the mission survivable. Before revelation, she was a successful merchant in Makkah who employed Muhammad ﷺ to trade on her behalf. After revelation, she became the first Muslim, the first confidante of the Prophet ﷺ, and the mother of most of his children.`) +
      P(`Her story is often reduced to a single scene: the Prophet ﷺ returns from the cave of Hira, trembling, and she wraps him in a cloak and takes him to her cousin Waraqa ibn Nawfal. That scene is authentic and important, but it is not the whole of her life. She was a mature woman of business and standing, a widow before her marriage to the Prophet ﷺ, and a partner who spent her fortune on a mission that the powerful of Makkah were trying to crush.`) +
      P(`This article follows the established sources and marks the line between what the Qur’an and the authentic hadith establish and what later biography, poetry and preaching have added. It does not claim that every detail of her age, her previous marriages or her funeral is settled. It does claim that her place in the story of Islam is not decorative. Without her, the first community might not have survived its first decade.`),
    keyTakeaways: [
      `Khadijah was a Qurayshi merchant of the Banu Asad, known for her trading caravans and her reputation for integrity.`,
      `She employed Muhammad ﷺ before revelation and later proposed marriage to him; the sources report her age as forty, though the figure belongs to later tradition.`,
      `She was the first person to accept Islam, before any man or child in the standard Sunni account.`,
      `She supported the Prophet ﷺ emotionally and financially through the boycott and the years of persecution.`,
      `She bore the Prophet ﷺ six children: Qasim, Abdullah, Zaynab, Ruqayyah, Umm Kulthum and Fatima, with some variation in the reports about the sons.`,
      `The year of sorrow, around 619–620 CE, took both Abu Talib and Khadijah and left the Prophet ﷺ exposed to new dangers.`,
      `The authentic hadith praise her as one of the best women of the worlds and record the Prophet’s lasting love for her.`,
      `Later stories about her exact age, her previous husbands and the details of her funeral are not all equally attested.`
    ],
    sections: [
      {
        id: 'why-khadijah-matters',
        heading: 'Why Khadijah Matters',
        html: P(`Khadijah matters because she is the first test of the new revelation. When the Prophet ﷺ came down from the cave of Hira, he did not go to a council of elders or to a wealthy patron. He went to his wife. She was the first to hear the account of the encounter, the first to believe it, and the first to help him interpret it. Her faith was not a formality; it was the human foundation on which the mission rested in its most fragile hours.`) +
          P(`She also matters because her life complicates the caricature of pre-Islamic Makkah as a world in which women had no public role. Khadijah was a merchant who sent caravans, hired agents, negotiated contracts and maintained a household of considerable standing. The sources do not present her as an exception who had to fight for the right to trade; they present her as a successful participant in the commercial life of the city.`)
      },
      {
        id: 'the-merchant-of-makkah',
        heading: 'The Merchant of Makkah',
        html: P(`Khadijah was born into the Banu Asad, a clan of Quraysh. Her father was Khuwaylid ibn Asad, and her mother is named in the sources as Fatima bint Za’idah. The family was not among the poorest of Quraysh, and Khadijah inherited wealth and a trading business. The sources describe her as a woman of beauty, intelligence and strong character, but they are more interested in her reputation than in her appearance.`) +
          P(`She traded with Syria and Yemen, sending caravans under the management of trusted agents. The sources say that she hired Muhammad ﷺ because of his reputation for honesty and fair dealing. He travelled with her goods, returned with a profit, and impressed her with the way he handled the journey. The exact terms of the partnership are not preserved in detail, but the pattern is clear: she was the principal, he was the agent, and the relationship was commercial before it was personal.`) +
          NOTE(`<strong>Source caution.</strong> The sources differ on Khadijah’s previous marriages and on the number of children from those marriages. Some reports mention a marriage to Abu Halah al-Tamimi and another to Atiq ibn Abid; the details are not uniform. This article does not treat those reports as a settled family tree.`)
      },
      {
        id: 'the-marriage',
        heading: 'The Marriage to Muhammad ﷺ',
        html: P(`The marriage of Khadijah and Muhammad ﷺ is one of the best-known events of the pre-revelation period. The sources report that she proposed to him, or that she sent a trusted woman to sound him out, and that he accepted. Her father is said to have opposed the match, while her uncle or another relative acted on her behalf. The accounts differ on who spoke at the wedding and what was said.`) +
          P(`The age reports are also uneven. The most common figure in later biography is that Khadijah was forty and Muhammad ﷺ was twenty-five. Some early reports give her a lower age, and modern historians have questioned the round number. The Qur’an does not mention the marriage or her age. The hadith collections mention her virtues but do not provide a birth certificate. The honest position is that the marriage took place when Muhammad ﷺ was a young man, that Khadijah was older than him, and that the exact ages are later estimates.`) +
          P(`What matters more than the numbers is the character of the marriage. It lasted about twenty-five years, until Khadijah’s death. The Prophet ﷺ did not marry another woman during her lifetime. The sources present the relationship as one of mutual trust, consultation and affection. Khadijah was not a passive wife who supported a man’s career; she was a partner who helped him discern the meaning of his experience.`) +
          NOTE(`<strong>Source caution.</strong> The figure “forty” is traditional, not Qur’anic, and not established by a sound hadith with a precise age. It should be presented as the most common later report, not as a measured fact.`)
      },
      {
        id: 'the-first-revelation',
        heading: 'The First Revelation and the Cave of Hira',
        html: P(`The first revelation is described in Sahih al-Bukhari and other collections. The Prophet ﷺ used to retreat to the cave of Hira, on the mountain of light outside Makkah, to reflect and worship. One night the angel Jibril appeared to him and said, “Read.” He replied that he could not read. The angel pressed him, then recited the opening verses of Surah al-Alaq: “Read in the name of your Lord who created, created man from a clinging substance. Read, and your Lord is the most generous, who taught by the pen, taught man that which he knew not” (96:1–5).`) +
          P(`The Prophet ﷺ returned home trembling and asked Khadijah to cover him. She wrapped him in a cloak and calmed him. When he told her what had happened, she did not dismiss him or accuse him of madness. She said that Allah would not disgrace him, because he maintained family ties, bore the burdens of others, gave to the poor and helped those in distress. Her words are preserved in the hadith literature and are one of the earliest summaries of his character.`) +
          P(`Khadijah then took him to her cousin Waraqa ibn Nawfal, a Christian who had studied the scriptures and was advanced in years. Waraqa recognised the pattern of revelation and said that the angel who had come to Muhammad ﷺ was the same angel who had come to Musa. He warned that the Prophet’s people would oppose him and drive him out. The report is in Sahih al-Bukhari and is one of the strongest pieces of evidence for Khadijah’s role in the first days.`) +
          Q(`“Never, by Allah, will Allah disgrace you. You keep good relations with your kin, you bear the burdens of the weak, you give to the poor, you honour the guest and you help those who are afflicted.”`, `Khadijah’s words to the Prophet ﷺ, reported in Sahih al-Bukhari`)
      },
      {
        id: 'the-first-muslim',
        heading: 'The First Muslim',
        html: P(`The standard Sunni account places Khadijah as the first person to accept Islam. Unlike the question of the first man, which is disputed between Abu Bakr, Ali and Zayd ibn Harithah, the question of the first woman is not seriously contested in the classical sources. She believed before the public call, before the mosque, before the community had a name. Her faith was the first fruit of the revelation.`) +
          P(`This priority is not a competition for rank. It is a statement about the nature of her response. She heard the account of the cave and believed it because she knew the man who told it. Her faith was not credulity; it was the trust of a person who had tested his character over years of marriage and business. The Qur’an praises those who believe without demanding a sign, and Khadijah is the first example of that disposition in the life of the Prophet ﷺ.`)
      },
      {
        id: 'the-household-and-children',
        heading: 'The Household and the Children',
        html: P(`Khadijah bore the Prophet ﷺ six children according to the most common reports: Qasim, Abdullah, Zaynab, Ruqayyah, Umm Kulthum and Fatima. The sons died in infancy or early childhood. The daughters lived into adulthood, and three of them were married before the hijrah or shortly after. The sources differ on whether Abdullah was also called al-Tayyib or al-Tahir, and whether those were separate sons who died young.`) +
          P(`The household in Makkah was not a wealthy palace. The sources describe a modest home, hard work and the pressures of the boycott. Khadijah’s wealth supported the family and the mission, but it did not buy immunity from persecution. Her daughters experienced the hostility of Quraysh, and the sources report that Ruqayyah and Umm Kulthum were divorced by the sons of Abu Lahab before their marriages to Uthman ibn Affan.`) +
          NOTE(`<strong>Source caution.</strong> The number and names of Khadijah’s children are reported with variation, especially the sons. The article follows the most common list without claiming that every name belongs to a separate child.`)
      },
      {
        id: 'support-and-sacrifice',
        heading: 'Support, Wealth and Sacrifice',
        html: P(`Khadijah’s support was not only emotional. She spent her wealth on the mission, on the poor and on the persecuted. The sources report that she freed slaves, helped the weak and financed the early community. Her money gave the Prophet ﷺ a measure of independence from the powerful families of Makkah. It allowed him to refuse their bribes and to continue preaching when the boycott made ordinary life impossible.`) +
          P(`The Prophet ﷺ later remembered her generosity in a hadith reported in Sahih Muslim and other collections: she believed in him when people disbelieved, she trusted him when people rejected him, and she supported him with her wealth when people withheld theirs. The wording varies, but the substance is consistent. He called her the best of women, and he compared her to Maryam, Asiya and Fatima in different reports.`) +
          Q(`“She believed in me when the people disbelieved, she trusted me when they rejected me, and she supported me with her wealth when they withheld theirs.”`, `The Prophet ﷺ on Khadijah, reported in Sahih Muslim and other collections`)
      },
      {
        id: 'the-boycott-and-the-year-of-sorrow',
        heading: 'The Boycott and the Year of Sorrow',
        html: P(`The Quraysh imposed a social and commercial boycott on the Banu Hashim and the Muslims, probably around 616–619 CE. The sources describe the boycott as a written agreement hung in the Ka‘bah, the cutting off of trade and marriage, and the suffering of the vulnerable. Khadijah’s wealth was spent supporting those trapped in the valley. The episode ended when the document was found eaten by insects, a detail that later sources preserve with dramatic embellishment.`) +
          P(`Around 619–620 CE, two deaths changed the Prophet’s life. His uncle Abu Talib, who had protected him from the worst of Quraysh, died. Khadijah died shortly afterwards, in the same year according to the most common reports. The year is called the year of sorrow. The Prophet ﷺ lost both his political protector and his closest companion within a short period.`) +
          NOTE(`<strong>Source caution.</strong> The story of the boycott document being eaten by insects is a later biographical detail. The boycott itself is early and widely reported; the miraculous document is not in the Qur’an or the earliest hadith.`)
      },
      {
        id: 'rank-in-the-hadith',
        heading: 'Her Rank in the Hadith',
        html: P(`The authentic hadith give Khadijah a rank that no other wife of the Prophet ﷺ shares. In Sahih al-Bukhari and Sahih Muslim, the Prophet ﷺ says that the best of women are Maryam bint Imran, Khadijah bint Khuwaylid, Fatima bint Muhammad and Asiya bint Muzahim. The exact wording and the number of women vary, but Khadijah is consistently among them.`) +
          P(`The Prophet ﷺ also said that he was given love for her, and that he never found a replacement for her. A’ishah reported that he used to remember Khadijah often and send gifts to her friends. When A’ishah asked why he remembered a woman who had died, he replied that she had been his wife when no one else was, and that she had believed in him when others rejected him. The report is in Sahih Muslim and is one of the most human passages in the literature.`) +
          NOTE(`<strong>Editorial note.</strong> The hadith that list “the best women of the worlds” vary in their wording and number. Khadijah’s inclusion is stable; the exact list is not. The article does not use the lists to diminish A’ishah or Fatima.`)
      },
      {
        id: 'aisha-and-khadijah',
        heading: 'A’ishah’s Memory of Khadijah',
        html: P(`A’ishah’s reports about Khadijah are among the most important sources for the Prophet’s domestic life. She never met Khadijah, but she lived in the house that Khadijah’s memory still filled. A’ishah said that she was not jealous of any of the Prophet’s wives as much as she was jealous of Khadijah, because he remembered her so often. The reports are in Sahih al-Bukhari and Sahih Muslim.`) +
          P(`In one report, A’ishah said that she asked the Prophet ﷺ about Khadijah, and he praised her. A’ishah replied that she was an old woman and that Allah had given him better than her. The Prophet ﷺ became angry and said that he had not been given better than her: she had believed in him when people disbelieved, she had trusted him when people rejected him, and she had borne his children when others did not. A’ishah later said that she never spoke of Khadijah in that way again.`) +
          NOTE(`<strong>Source caution.</strong> The dialogue is reported with variations in wording. It should not be turned into a polemic against A’ishah, who is the narrator and whose honesty in preserving the correction is part of her own virtue.`)
      },
      {
        id: 'death-and-burial',
        heading: 'Death and Burial',
        html: P(`Khadijah died in Makkah, probably in 619 or 620 CE, and was buried at al-Hajun, the graveyard above the city. The sources report that the Prophet ﷺ buried her himself or supervised the burial, and that he grieved for her deeply. Her grave became a place of remembrance, though the exact location is not certain today.`) +
          P(`She was about sixty-five years old according to the common reports, which is consistent with the figure of forty at the time of her marriage and twenty-five years of marriage. The numbers are later estimates, not contemporary records. The important fact is that she died before the hijrah, before the mosque in Madinah, before the community became a state. She never saw the public triumph of the mission she had supported in its private infancy.`) +
          P(`The Prophet ﷺ named a year after her sorrow, remembered her friends, and defended her memory. The sources also report that he sent a cloak or a garment to her sister or to a woman who had been close to her. These small acts of remembrance are more revealing than the later legends. They show a man who did not forget the woman who had believed in him when no one else did.`)
      },
      {
        id: 'the-later-legends',
        heading: 'The Later Legends and Their Limits',
        html: P(`Khadijah’s story has attracted many later additions. The most common are the exact age of forty, the detailed account of her previous marriages, the story of the jinn or the monk who recognised the Prophet ﷺ before the marriage, and the elaborate descriptions of her funeral. Some of these details may preserve early memories; others are clearly later edification.`) +
          P(`The age of forty is a round number that may reflect a symbolic rather than a documentary tradition. The previous marriages are reported in some biographical works but not in the earliest layers with consistent detail. The story of the monk Bahira, which is sometimes attached to the marriage narrative, belongs to a different cycle of reports about the Prophet’s youth and is not part of the Khadijah story in the earliest sources.`) +
          NOTE(`<strong>Source caution.</strong> The “forty years old” figure, the previous-marriage details and the funeral descriptions are later biographical traditions. They are not Qur’anic and are not uniformly attested in the sound hadith.`)
      },
      {
        id: 'lessons-and-limits',
        heading: 'Lessons and the Limits of the Sources',
        html: P(`Khadijah’s life offers four lessons. The first is the dignity of work: she was a merchant who managed capital, agents and risk, and her competence was part of her virtue. The second is the courage of belief: she accepted the revelation before it had a community, a mosque or a state. The third is the power of partnership: she supported the Prophet ﷺ not as a follower who obeyed without thought but as a confidante who helped him interpret his experience. The fourth is the honesty of grief: the Prophet ﷺ mourned her, remembered her and defended her memory without turning her into an idol.`) +
          P(`The limits of the sources are also a lesson. We do not know her exact age, the exact date of her death or the full details of her business. The later biographies fill the gaps with edifying stories, and some of those stories are beautiful. But the historian’s discipline is to distinguish the beautiful from the established. Khadijah does not need the legends. Her place is secure in the Qur’an’s first audience, in the hadith, and in the memory of the community.`) +
          NOTE(`<strong>Editorial note:</strong> this article distinguishes the Qur’anic text, the authentic hadith, the early biographical reports and later narrative. It does not claim that every detail about Khadijah is historically established, and it does not use her rank to silence legitimate historical questions.`)
      }
    ],
    faqs: [
      { q: 'Was Khadijah the first Muslim?', a: 'Yes, in the standard Sunni account she was the first person to accept Islam, before any man or child. The question of the first man is disputed, but the first woman is not seriously contested in the classical sources.' },
      { q: 'How old was Khadijah when she married the Prophet ﷺ?', a: 'The most common later report says she was forty and he was twenty-five. Some early reports give a lower age, and modern historians have questioned the round number. The Qur’an and the sound hadith do not give a precise age, so the figure should be presented as a later tradition rather than a measured fact.' },
      { q: 'How many children did Khadijah have?', a: 'The most common list is six: Qasim, Abdullah, Zaynab, Ruqayyah, Umm Kulthum and Fatima. The sources differ on the names of the sons and on whether Abdullah was also called al-Tayyib or al-Tahir. The daughters are consistently named.' },
      { q: 'Did the Prophet ﷺ marry anyone else during Khadijah’s lifetime?', a: 'No. The sources are consistent that he remained married to Khadijah alone until her death, after about twenty-five years of marriage. He married other women after her death.' },
      { q: 'What is the year of sorrow?', a: 'It is the year around 619–620 CE in which both Abu Talib, the Prophet’s uncle and protector, and Khadijah died. The Prophet ﷺ called it the year of sorrow because it removed both his political protection and his closest companion.' }
    ],
    bibliography: [
      `The Qur’an — especially 96:1–5 and the passages on the Prophet’s household. Translations adapted from Saheeh International unless stated.`,
      `Sahih al-Bukhari — the beginning of revelation, the first revelation in the cave of Hira, and the reports on Khadijah’s virtues.`,
      `Sahih Muslim — the virtues of Khadijah and the reports on the Prophet’s love for her.`,
      `Ibn Ishaq, <em>Sirat Rasul Allah</em>, as transmitted by Ibn Hisham — the earliest surviving biographical narrative.`,
      `Al-Tabari, <em>Tarikh al-Rusul wa al-Muluk</em> — the Makkan period and the year of sorrow.`,
      `Ibn Kathir, <em>al-Bidayah wa al-Nihayah</em> — later synthesis with grading.`,
      `Modern academic studies of the Makkan period, women in pre-Islamic Arabia and the transmission of early biography.`
    ],
    related: [
      ...relatedBase,
      { href: 'aisha-mother-of-the-believers-scholar-and-fitna.html', label: 'Aisha: the Mother of the Believers, the scholar and the fitna' },
      { href: 'abu-bakr-the-truthful-and-the-first-caliph.html', label: 'Abu Bakr: the truthful and the first caliph' },
      { href: 'pre-islamic-arabia-jahiliyyah.html', label: 'Pre-Islamic Arabia and the world of the Prophet’s youth' },
      { href: '../sahaba.html', label: 'Companions library' }
    ]
  },
  {
    slug: 'aisha-mother-of-the-believers-scholar-and-fitna',
    title: 'Aisha: The Mother of the Believers, the Scholar and the Fitna',
    metaTitle: 'Aisha bint Abi Bakr: The Prophet’s Wife, the Scholar of Hadith and the Battle of the Camel',
    description: 'The life of Aisha bint Abi Bakr: her family and marriage, the household of the Prophet ﷺ, the slander and Qur’an 24:11–20, her scholarship and legal opinions, the fitna and the Battle of the Camel, her later teaching in Madinah, and the source-critical questions around her age and the politics of memory.',
    category: 'Sahaba',
    readTime: '15 min',
    intro: P(`Aisha bint Abi Bakr is the most influential woman in the transmission of early Islam. She was the daughter of Abu Bakr, the wife of the Prophet ﷺ, the narrator of over two thousand reports, a legal scholar whose opinions were sought by senior companions, and a political actor in the first civil war. No other woman in the tradition combines those roles.`) +
      P(`Her life is also the most contested. The age at which she married, the meaning of the slander episode, her opposition to Uthman and her role at the Battle of the Camel are all subjects of intense debate. Some of that debate is scholarly; much of it is polemical. This article follows the established sources, distinguishes the Qur’anic, hadith and historical layers, and refuses to turn her into either a symbol of pure domesticity or a villain of sectarian narrative.`) +
      P(`The result is a portrait of a brilliant, brave, sometimes impulsive woman who was close to revelation, learned from it, and was corrected by it. Her scholarship is part of the religion’s intellectual foundation. Her political decisions are part of its painful history. Both belong in an honest account.`),
    keyTakeaways: [
      `Aisha was the daughter of Abu Bakr and Umm Ruman, born in Makkah and raised in the first Muslim household.`,
      `She married the Prophet ﷺ in Makkah and the marriage was consummated in Madinah; the age reports in the hadith collections are discussed below.`,
      `She was the Prophet’s closest wife in the later years and the narrator of a large portion of the Sunnah.`,
      `The slander episode (al-Ifk) is addressed in Qur’an 24:11–20, which declares her innocence and condemns the spread of falsehood.`,
      `She was a scholar of Qur’an, hadith, fiqh and Arabic poetry, and her students included senior successors.`,
      `She opposed Uthman’s policies and fought at the Battle of the Camel in 36 AH; the sources report her later regret.`,
      `She spent her last years teaching in Madinah and died in 58 AH.`,
      `Her age at marriage and her political role are debated; the article separates the reported texts from later polemic.`
    ],
    sections: [
      {
        id: 'why-aisha-matters',
        heading: 'Why Aisha Matters',
        html: P(`Aisha matters first as a source. The Prophet’s domestic life, his night prayer, his fasting, his treatment of his wives, his words in private and his habits at home are known largely through her. Without her reports, the Sunnah would be thinner and the Muslim understanding of the Prophet’s humanity would be poorer. She was not a passive observer; she asked questions, challenged answers and remembered what she heard.`) +
          P(`She matters second as a scholar. The classical biographical dictionaries list her among the muftis of the companions. Senior figures such as Umar, Uthman and Ali are said to have consulted her, and her students included Urwa ibn al-Zubayr, al-Qasim ibn Muhammad, Amra bint Abd al-Rahman and others who shaped the early legal tradition. Her opinions on inheritance, prayer, fasting and the treatment of women are preserved in the hadith and fiqh literature.`)
      },
      {
        id: 'family-and-early-life',
        heading: 'Family and Early Life',
        html: P(`Aisha was born in Makkah to Abu Bakr al-Siddiq and Umm Ruman. Her father was one of the first Muslims and the closest companion of the Prophet ﷺ; her mother was a woman of the Banu Amir ibn Lu’ayy. Her sister Asma was older and became the wife of al-Zubayr ibn al-Awwam. The family was close to the Prophet ﷺ before the hijrah, and Aisha grew up in a household where revelation was discussed.`) +
          P(`The sources differ on whether she was born before or after the beginning of the mission. Some reports say she was born in the pre-Islamic period, others that she was born after her father accepted Islam. The exact year is not established. What is clear is that she was a child when the Prophet ﷺ married her and that she grew into adulthood in Madinah.`) +
          NOTE(`<strong>Source caution.</strong> The reports about Aisha’s birth year are inconsistent. The article does not give a precise date and treats the chronological details as later estimates.`)
      },
      {
        id: 'the-marriage',
        heading: 'The Marriage and the Age Reports',
        html: P(`The Prophet ﷺ married Aisha after the death of Khadijah. The betrothal took place in Makkah, and the marriage was consummated in Madinah, probably in the first or second year after the hijrah. The sources agree on the sequence but differ on the dates and on Aisha’s age.`) +
          P(`The most widely cited reports in Sahih al-Bukhari and Sahih Muslim say that she was six when the betrothal took place and nine when the marriage was consummated. Other early reports give different figures: some say she was ten, twelve, fifteen or older. The discrepancies are not modern inventions; they are in the classical sources. Modern scholars have approached them in different ways. Some accept the Bukhari/Muslim reports as literally accurate and place the marriage in the cultural context of seventh-century Arabia. Others argue that the age reports are unreliable, that the numbers were shaped by later transmission, and that Aisha was older.`) +
          P(`This article does not pretend to settle the debate. It states the reports, notes the disagreement and refuses to use the marriage as a weapon in modern polemics. The Prophet’s marriage to Aisha was a historical event in a society with different norms; the sources also show a relationship of affection, teaching and mutual respect. The reader should consult the scholarly literature for the full arguments rather than relying on a single number.`) +
          NOTE(`<strong>Source caution.</strong> The age reports are not Qur’anic and are not uniform across the earliest sources. The article presents the main positions without claiming that one is beyond dispute. It rejects both the sensationalist use of the reports and the attempt to erase them.`)
      },
      {
        id: 'the-household',
        heading: 'The Household of the Prophet ﷺ',
        html: P(`Aisha’s room in Madinah was one of the centres of the Prophet’s life. The sources describe the simple furnishings, the palm-fibre mattress, the curtain and the small space in which the Prophet ﷺ prayed, slept and received visitors. Aisha’s reports preserve the intimacy of that life: the Prophet ﷺ praying at night, reciting in a measured voice, fasting and breaking his fast, laughing with his wives and teaching them.`) +
          P(`The household was not free of tension. The sources report jealousy among the wives, disputes about time and attention, and the famous incident of the honey drink in which two wives conspired to make the Prophet ﷺ think that he had eaten something that smelled. The Qur’an addresses the wives collectively in Surah al-Ahzab and Surah al-Tahrim, praising their status but also warning them. The household was close to revelation, but it was still a human household.`) +
          P(`Aisha’s position was special because she was the daughter of Abu Bakr and because the Prophet ﷺ loved her. The hadith report that he said he was shown her in a dream before the marriage, wrapped in silk, and that he understood the dream as a sign. The report is in Sahih al-Bukhari and Sahih Muslim. It is a sign of affection, not a claim that the marriage was free of human difficulty.`) +
          NOTE(`<strong>Source caution.</strong> The stories of jealousy and household conflict are human and are reported in the sound collections. They should not be used to diminish the wives of the Prophet ﷺ or to turn their lives into entertainment.`)
      },
      {
        id: 'the-slander',
        heading: 'The Slander and Qur’an 24:11–20',
        html: P(`The slander episode, known as al-Ifk, is one of the most important events in Aisha’s life. On a journey with the Prophet ﷺ, she was left behind when the caravan moved on because she had gone to look for a lost necklace. She was brought back to Madinah by Safwan ibn al-Mu‘attal, a companion who had stayed behind. The hypocrites, led by Abdullah ibn Ubayy ibn Salul, spread a false rumour about her. The community was shaken, and the Prophet ﷺ was deeply distressed.`) +
          P(`Aisha fell ill and remained at home while the rumour spread. She did not know what was being said until she heard it from another woman. She asked the Prophet ﷺ for permission to go to her parents’ house, and he allowed her. She wept for days. The Prophet ﷺ consulted his companions, including Ali and Usama, and delayed a decision until revelation came.`) +
          P(`Qur’an 24:11–20 then declared her innocence and condemned those who spread the lie. The passage is one of the strongest statements in the Qur’an against gossip and the destruction of reputation. It says that those who brought the falsehood are a group among the believers, that it was evil, and that they should have produced four witnesses. It also rebukes those who repeated the rumour without knowledge and promises forgiveness to those who repent.`) +
          Q(`“Indeed, those who came with the falsehood are a group among you. Do not think it bad for you; rather it is good for you. For every person among them is what he earned of the sin, and the one who took upon himself the greater part of it will have a painful punishment.”`, `Qur’an 24:11`)
      },
      {
        id: 'scholarship-and-hadith',
        heading: 'Scholarship and the Transmission of Hadith',
        html: P(`Aisha’s greatest legacy is her scholarship. The classical sources attribute more than two thousand reports to her, making her one of the most prolific narrators of the Sunnah. She narrated the Prophet’s words and actions, but she also gave legal opinions, interpreted dreams, corrected other narrators and explained the occasions of revelation. Her reports are found in all six canonical collections.`) +
          P(`She was especially important for the details of the Prophet’s private worship. The night prayer, the witr, the supererogatory fasts, the etiquette of marital intimacy, the washing of the dead and the treatment of menstruation are all known through her. She also preserved the Prophet’s comments on women, family life and the household, which is why her reports are central to the fiqh of marriage.`) +
          P(`Her students included Urwa ibn al-Zubayr, al-Qasim ibn Muhammad, Amra bint Abd al-Rahman, Abu Salama ibn Abd al-Rahman and others. They transmitted her opinions to the next generation, and her legal reasoning became part of the early Madinan school. The later claim that she was merely a transmitter of domestic anecdotes ignores the breadth of her legal and exegetical work.`) +
          NOTE(`<strong>Source caution.</strong> The figure “over two thousand reports” is a classical estimate, not a precise count of independent hadith. Many reports are repeated with different chains. The point is her centrality, not the exact number.`)
      },
      {
        id: 'legal-opinions',
        heading: 'Legal Opinions and Corrections',
        html: P(`Aisha was not afraid to disagree with senior companions. The sources report her corrections of Umar, Uthman, Ibn Abbas and others on points of inheritance, prayer and ritual purity. She insisted, for example, that a woman could see the Prophet ﷺ in a dream, that the Prophet ﷺ did not forbid certain forms of dress, and that the Qur’anic verse about adoption did not mean that a adopted child became a biological child. Her opinions were not always followed, but they were taken seriously.`) +
          P(`She was also a critic of excessive asceticism and of the misuse of religion to burden people. The sources report her disapproval of extreme vows, her defence of the Prophet’s moderation, and her insistence that the religion was easy. Her legal reasoning was grounded in the Qur’an, the Sunnah and the practice of the early community, and she was willing to say “I do not know” when she did not.`)
      },
      {
        id: 'the-fitna',
        heading: 'The Fitna and the Battle of the Camel',
        html: P(`The political crisis of Uthman’s caliphate divided the companions. Aisha was among those who criticised Uthman’s appointment of relatives and his financial policies, though the sources differ on the extent of her opposition. When Uthman was killed in 35 AH, the community split between those who supported Ali as the new caliph and those who demanded that the killers be punished before allegiance was given.`) +
          P(`Aisha went to Basra with Talha ibn Ubaydillah and al-Zubayr ibn al-Awwam. They hoped to rally support for a settlement and for the punishment of Uthman’s killers. Ali marched to Basra, and negotiations failed. The Battle of the Camel took place in 36 AH. Talha and al-Zubayr were killed, and Aisha’s camel was surrounded; she was escorted back to Madinah. The sources report that she regretted the battle and that she wept when she remembered it.`) +
          P(`The battle is one of the most painful events in Islamic history. It was not a simple conflict between good and evil. It involved sincere companions on both sides, political miscalculation, the agitation of the killers of Uthman and the difficulty of restoring order after a caliph’s murder. The later Sunni and Shia narratives turn the event into a test of loyalty; the historical sources are more complex.`) +
          NOTE(`<strong>Source caution.</strong> The reports about Aisha’s role in the fitna are shaped by later political loyalties. The article follows the broad outline accepted by most historians but does not claim that every speech or motive in the sources is authentic.`)
      },
      {
        id: 'quran-66',
        heading: 'Surah al-Tahrim and the Household',
        html: P(`Qur’an 66:3–5 addresses a domestic incident involving the Prophet ﷺ and two of his wives. The passage begins with the Prophet confiding something to one of his wives, who then told it to another. The Qur’an rebukes the disclosure and warns the wives that if they support each other against the Prophet, Allah, Jibril and the righteous believers are with him. It then offers a conditional warning: if he divorces them, Allah may give him better wives in their place.`) +
          P(`The passage is not a permanent condemnation of Aisha or any other wife. It is a correction of a specific behaviour and a reminder that proximity to the Prophet ﷺ brings responsibility. The classical commentators identify the wives involved in different ways, and the reports are not uniform. What is clear is that the Qur’an treats the household as a moral community, not as a court of infallible saints.`) +
          P(`Aisha’s own reports show that she understood the passage as a warning, not as a rejection. She remained the Prophet’s wife until his death, and he died in her room, in her arms, according to the well-known reports. The verse is part of the Qur’an’s honest portrayal of the Prophet’s household: close to revelation, tested by it, and never exempt from correction.`)
      },
      {
        id: 'later-life-and-death',
        heading: 'Later Life and Death',
        html: P(`After the Battle of the Camel, Aisha returned to Madinah and withdrew from politics. She devoted herself to teaching, to the transmission of hadith and to the pilgrimage. The sources report that she continued to give legal opinions and that her house became a centre of learning. She also maintained a close relationship with the family of the Prophet ﷺ, despite the pain of the fitna.`) +
          P(`She died in 58 AH during the caliphate of Muawiyah, according to the most common reports. She was buried in al-Baqi, the cemetery of Madinah, and the sources report that Abu Hurayra prayed over her. Her death marked the end of an era: the last of the Prophet’s wives who had been a child in his household, the last major female narrator of the first generation, and one of the last living links to the Prophet’s private life.`) +
          P(`Her legacy is not limited to the reports she transmitted. She represents a model of female scholarship that the later tradition often forgot. She was not a silent saint or a domestic decoration. She was a woman who argued, taught, corrected, fought and repented. The community’s memory of her should be large enough to hold all of that.`) +
          NOTE(`<strong>Source caution.</strong> The date of her death is reported as 57, 58 or 59 AH. The article follows the most common figure without claiming certainty.`)
      },
      {
        id: 'politics-of-memory',
        heading: 'The Politics of Memory',
        html: P(`Aisha is a contested figure because she stands at the intersection of three sensitive subjects: the Prophet’s household, the transmission of hadith and the first civil war. Sunni tradition honours her as a Mother of the Believers and a scholar, while some Shia polemic focuses on her opposition to Ali. Modern secular writers sometimes reduce her to the age controversy or to the Battle of the Camel. Each of these readings captures a part of her and misses the whole.`) +
          P(`The Sunni tradition does not claim that Aisha was infallible. It honours her as a companion, a wife of the Prophet ﷺ and a narrator, while acknowledging that she made political decisions that she later regretted. The Shia tradition has its own narrative of the succession and the fitna, and it does not accept the Sunni ranking of the companions. A respectful conversation between the traditions requires acknowledging those differences rather than pretending they do not exist.`) +
          NOTE(`<strong>Editorial note.</strong> This article does not adjudicate the Sunni–Shia dispute over the succession or the fitna. It presents the Sunni sources’ portrayal of Aisha while noting that other traditions read the same events differently.`)
      },
      {
        id: 'lessons-and-limits',
        heading: 'Lessons and the Limits of the Sources',
        html: P(`Aisha’s life offers lessons about knowledge, courage and repentance. She shows that a woman can be a primary source of religious knowledge, that a scholar can disagree with the powerful, and that a political actor can admit regret. She also shows the danger of certainty: the slander episode began with a rumour and ended with a Qur’anic rebuke. The community learned that reputation is sacred and that gossip is not a harmless pastime.`) +
          P(`The limits of the sources are equally important. We do not have a contemporary biography of Aisha. The reports about her age, her motives and her speeches were transmitted by later generations with their own concerns. The historian can reconstruct the broad outline but not every detail. The believer can honour her without pretending that the reconstruction is complete.`) +
          P(`The best way to remember Aisha is to read her reports. They are full of questions, observations, corrections and humour. They show a woman who loved the Prophet ﷺ, learned from him and continued to teach after him. That is a more honest tribute than either the polemic that demonises her or the hagiography that turns her into a flawless symbol.`) +
          NOTE(`<strong>Editorial note:</strong> this article distinguishes the Qur’anic text, the authentic hadith, the early historical reports and later polemic. It does not claim that every detail about Aisha is historically established, and it does not use her rank to silence legitimate historical questions.`)
      }
    ],
    faqs: [
      { q: 'Was Aisha a scholar?', a: 'Yes. The classical sources attribute over two thousand reports to her, and she gave legal opinions on inheritance, prayer, fasting, marriage and ritual purity. Her students included senior successors, and she is listed among the companions who issued fatwas.' },
      { q: 'What was Aisha’s age when she married the Prophet ﷺ?', a: 'The most widely cited reports in Sahih al-Bukhari and Sahih Muslim say she was six at betrothal and nine at consummation. Other early reports give different ages, and modern scholars disagree about how to interpret them. The article presents the reports and the debate without claiming that the question is settled.' },
      { q: 'What was the slander episode?', a: 'It was a false rumour spread about Aisha after a journey. Qur’an 24:11–20 declares her innocence and condemns those who spread the lie. The episode is one of the Qur’an’s strongest statements against gossip and the destruction of reputation.' },
      { q: 'Did Aisha fight against Ali?', a: 'She opposed Ali’s immediate caliphate and went to Basra with Talha and al-Zubayr. The Battle of the Camel took place in 36 AH. The sources report that she later regretted the battle. The event is part of the first fitna and is interpreted differently by Sunni and Shia traditions.' },
      { q: 'How did Aisha die?', a: 'She died in 58 AH, according to the most common reports, and was buried in al-Baqi in Madinah. The sources report that Abu Hurayra prayed over her.' }
    ],
    bibliography: [
      `The Qur’an — especially 24:11–20 and 66:3–5. Translations adapted from Saheeh International unless stated.`,
      `Sahih al-Bukhari — the reports on the slander, the Prophet’s household and Aisha’s virtues.`,
      `Sahih Muslim — the reports on Aisha’s virtues and the Prophet’s affection for her.`,
      `Ibn Ishaq, <em>Sirat Rasul Allah</em>, as transmitted by Ibn Hisham — the early biographical narrative.`,
      `Al-Tabari, <em>Tarikh al-Rusul wa al-Muluk</em> — the fitna and the Battle of the Camel.`,
      `Ibn Kathir, <em>al-Bidayah wa al-Nihayah</em> — later synthesis with grading.`,
      `Classical biographical dictionaries (Ibn Sa‘d, al-Dhahabi) — Aisha’s students and legal opinions.`,
      `Modern academic studies of the first fitna, the transmission of hadith and the age reports.`
    ],
    related: [
      ...relatedBase,
      { href: 'khadijah-the-first-believer-and-pillar-of-the-mission.html', label: 'Khadijah: the first believer and pillar of the mission' },
      { href: 'abu-bakr-the-truthful-and-the-first-caliph.html', label: 'Abu Bakr: the truthful and the first caliph' },
      { href: 'ali-the-gate-of-knowledge-and-the-fitna.html', label: 'Ali: knowledge, courage and the fitna' },
      { href: '../sahaba.html', label: 'Companions library' }
    ]
  },
  {
    slug: 'bilal-ibn-rabah-the-voice-of-the-adhan',
    title: 'Bilal ibn Rabah: The Voice of the First Adhan',
    metaTitle: 'Bilal ibn Rabah: Slavery, Torture, Freedom and the First Call to Prayer',
    description: 'The life of Bilal ibn Rabah: his enslavement in Makkah, the torture he endured for saying “One”, his manumission by Abu Bakr, the first adhan in Madinah, Badr and the battles, the conquest of Makkah, his grief after the Prophet ﷺ, his years in Syria, his death and the limits of the later legends.',
    category: 'Sahaba',
    readTime: '14 min',
    intro: P(`Bilal ibn Rabah is the companion whose voice became the sound of the new religion. He was an enslaved man in Makkah, tortured for saying that Allah is one, bought and freed by Abu Bakr, and then chosen by the Prophet ﷺ to call the believers to prayer. His life is a compressed history of what Islam did to the social order of the peninsula: it took a man whom the powerful regarded as property and made him the first voice of the community’s public worship.`) +
      P(`His story is also a story about race. Bilal was of Abyssinian descent, and the sources remember the insults that were thrown at him. The Qur’an answered those insults with a verse that made piety, not lineage or colour, the measure of nobility (49:13). Bilal’s place in the tradition is therefore not a decorative detail. He is evidence that the early community’s claim of equality was tested on the bodies of the weak.`) +
      P(`This article follows the established sources and marks the line between what the hadith and early biography report and what later storytelling added. It does not claim to know Bilal’s inner life, the exact price of his freedom or the precise date of his death. It does claim that his story is one of the most important in the first generation, and that it should be told without either sentimental exaggeration or embarrassed silence about slavery.`),
    keyTakeaways: [
      `Bilal was an enslaved man of Abyssinian descent in Makkah, owned by Umayyah ibn Khalaf al-Jumahi.`,
      `He was among the earliest Muslims and was tortured for his faith; the report that he repeated “Ahad, Ahad” is preserved in early biography.`,
      `Abu Bakr bought and freed him, and the sources differ on the price.`,
      `After the hijrah he became the muezzin of the Prophet ﷺ in Madinah, and the adhan was instituted in that period.`,
      `He fought at Badr and was present through the main campaigns of the Madinan period.`,
      `On the day of the conquest of Makkah the sources report that he gave the adhan from the Ka‘bah.`,
      `He left Madinah after the Prophet’s death and spent his later years in Syria, where he died around 20 AH according to the most common report.`,
      `The stories of his dream-visit to the grave and of his refusal ever to give the adhan again are later traditions and are not uniformly attested.`
    ],
    sections: [
      {
        id: 'why-bilal-matters',
        heading: 'Why Bilal Matters',
        html: P(`Bilal matters because he is the first test of the community’s claim that faith abolishes rank. The Quraysh measured a man by his tribe, his wealth and his birth. Bilal had none of those things in the eyes of Makkah. He was enslaved, dark-skinned and without protection. Yet the Prophet ﷺ chose him to stand above the congregation and call it to prayer, and the community accepted his voice as the signal of worship.`) +
          P(`He also matters because his story preserves the memory of the persecuted. The Qur’an speaks repeatedly of those who were weak and oppressed in the land, and Bilal is one of the few whose torture is described in detail. His suffering is not an embarrassment to the tradition; it is part of its moral record. The same society that produced the persecution produced the man who ended it for Bilal.`) +
          P(`Finally, Bilal matters as a reminder that the sources are not a single voice. The hadith collections preserve his virtues, the biographical works preserve the narrative of his torture and freedom, and the later preaching tradition added stories that are edifying but not always sound. An honest account holds those layers apart.`)
      },
      {
        id: 'slavery-and-origins',
        heading: 'Slavery and Origins in Makkah',
        html: P(`The sources describe Bilal as a man of Abyssinian descent, and his name is often given as Bilal ibn Rabah al-Habashi. His mother is named as Hamamah, and his father as Rabah. The biographical works do not agree on every detail of his parentage or on whether he was born in Makkah or brought there as a child. What is clear is that he was born into slavery and that his owner was Umayyah ibn Khalaf, a leading man of the Banu Jumah.`) +
          P(`Slavery in Makkah was not a marginal institution. Enslaved people worked in households, herds and caravans, and they had no legal standing of their own. A slave could be bought, sold, inherited and punished without a hearing. Bilal’s position was therefore not merely poor; it was legally helpless. The sources say that he was known for his honesty and his strength, but those qualities did not protect him.`) +
          NOTE(`<strong>Source caution.</strong> The details of Bilal’s parentage, birthplace and early years vary across the biographical works. The article follows the common outline without claiming that every name and date is settled.`)
      },
      {
        id: 'the-first-believers-and-the-torture',
        heading: 'The First Believers and the Torture',
        html: P(`Bilal was among the earliest converts to Islam. The sources place him in the first group of believers, alongside Abu Bakr, Zayd ibn Harithah, Ammar ibn Yasir and others. He did not come to the Prophet ﷺ as a man of influence seeking an alliance. He came as a slave who heard the message and accepted it, and his acceptance cost him more than it cost almost anyone else.`) +
          P(`When Umayyah learned of his conversion, he subjected Bilal to punishment. The reports describe him being dragged over the hot sand of Makkah, a heavy stone placed on his chest, and his repeated refusal to renounce his faith. In the best-known version, Bilal could only say “Ahad, Ahad” — “One, One.” The torture did not break him, and the sources present his endurance as one of the earliest acts of heroic faith.`) +
          P(`The Qur’an honours those who were persecuted for their belief. It speaks of the weak and oppressed who were wronged and who cried out to God (4:75), and it promises that those who emigrated after being tried will be rewarded (16:110). Bilal’s story is not the only one behind those verses, but it is one of the clearest illustrations of what they meant in practice.`) +
          NOTE(`<strong>Source caution.</strong> The “Ahad, Ahad” detail and the scene of the stone on the chest are preserved in early biography, especially Ibn Ishaq, rather than in a sound hadith with a detailed chain. The torture itself is widely reported; the exact staging is not.`)
      },
      {
        id: 'abu-bakr-and-freedom',
        heading: 'Abu Bakr and the Price of Freedom',
        html: P(`Abu Bakr al-Siddiq bought Bilal from Umayyah and freed him. The sources describe the transaction as a public act: Umayyah mocked Abu Bakr for paying a high price for a slave, and Abu Bakr replied that he would have paid more if necessary. The exact sum is reported differently in different works, and the article does not pretend that one figure is certain.`) +
          P(`The purchase was not a casual charity. It was a deliberate use of wealth to remove a believer from the reach of his persecutor, and it became a model for the early community’s practice of manumission. The Qur’an lists the freeing of slaves among the acts of the steep path (90:11–13) and among the marks of righteousness (2:177). Abu Bakr’s money turned a verse into a lived action.`) +
          NOTE(`<strong>Source caution.</strong> The reports on the price of Bilal’s manumission differ widely. The article treats the purchase and release as established and the amount as uncertain.`)
      },
      {
        id: 'hijrah-and-the-first-adhan',
        heading: 'The Hijrah and the First Adhan',
        html: P(`Bilal migrated to Madinah with the Muslims. In the new city the community needed a public signal for the prayer, and the sources describe the institution of the adhan in that period. The best-known account involves a dream seen by Abdullah ibn Zayd, which the Prophet ﷺ recognised as a true dream and used as the basis for the call. Bilal was chosen to give it because of his powerful voice.`) +
          P(`The choice was symbolic as well as practical. The man who had been told that his voice did not matter was now the man whose voice gathered the community five times a day. The adhan was not a private devotion; it was a public declaration of belief, heard by Muslims, Jews, Christians and polytheists alike. Bilal’s voice carried the shahadah across the rooftops of Madinah.`) +
          P(`The sources also report that the Prophet ﷺ said, “O Bilal, comfort us with the prayer.” The phrase treats the call as a source of rest rather than a burden. Bilal’s task was to summon others to that rest, and the tradition remembers him as the muezzin of the Prophet ﷺ par excellence.`) +
          NOTE(`<strong>Source caution.</strong> The dream of Abdullah ibn Zayd is reported in the hadith literature, but the details of the adhan’s institution vary. The “comfort us with the prayer” report is preserved in Abu Dawud and has been discussed by scholars of hadith.`)
      },
      {
        id: 'badr-and-the-battles',
        heading: 'Badr, Uhud and the Battles',
        html: P(`Bilal fought at Badr, and the sources preserve a report about his encounter with Umayyah on the battlefield. When he saw his former owner among the prisoners or the fallen, he is said to have declared that he would not be safe while Umayyah was safe. The report is dramatic, and it belongs to the early biographical narrative rather than to a calm legal text.`) +
          P(`He was present at Uhud, the Trench, Hudaybiyyah and the other campaigns of the Madinan period. The muezzin did not stay behind the lines. He carried a weapon, stood in the ranks and shared the dangers of the community he called to prayer. The sources do not make him a general, but they do place him among the fighters.`) +
          NOTE(`<strong>Source caution.</strong> The account of Umayyah’s death at Badr is preserved in Ibn Ishaq and later histories. The hadith collections mention the event, but the dialogue and the exact sequence are not uniformly reported.`)
      },
      {
        id: 'bilal-in-the-prophets-household',
        heading: 'Bilal in the Prophet’s Household',
        html: P(`Bilal was close to the Prophet ﷺ in a way that the sources remember with affection. The most famous report is the hadith of the footsteps: the Prophet ﷺ asked Bilal what deed he hoped would be most rewarded, and Bilal replied that he never made ablution without praying two units of prayer. The Prophet ﷺ said that he had heard the sound of Bilal’s footsteps in Paradise.`) +
          P(`The report is in the sound collections, and it is one of the clearest statements of Bilal’s rank. It does not make him a scholar or a ruler; it makes him a man of consistent, hidden devotion. The Prophet ﷺ saw in his private habit a sign of nearness to God, and the community preserved the observation.`) +
          P(`Bilal also served the Prophet ﷺ in practical ways. He kept the time of prayer, carried messages, managed the household’s needs and accompanied the Prophet ﷺ on journeys. The sources present him as trustworthy, generous and quick to defend the Prophet’s honour. His closeness was not the closeness of a courtier; it was the closeness of a servant who had been freed and who chose to stay.`) +
          NOTE(`<strong>Source caution.</strong> The hadith of the footsteps is in Sahih al-Bukhari and Sahih Muslim. The details of Bilal’s daily service are drawn from biography and should not be read as a complete job description.`)
      },
      {
        id: 'the-conquest-of-makkah',
        heading: 'The Conquest of Makkah and the Adhan on the Ka‘bah',
        html: P(`At the conquest of Makkah in 8 AH, the Prophet ﷺ entered the city with the Muslim army and granted a general amnesty to those who did not resist. The sources report that Bilal was with him, and that he gave the adhan from the Ka‘bah or from its roof. The act reversed the order of the city: the man who had been tortured in Makkah now called the city to the worship of the One he had refused to deny.`) +
          P(`The report is preserved in the biographical and hadith literature, though the details differ. Some versions place Bilal on the roof of the Ka‘bah, others on a nearby height. The symbolic force of the scene is unmistakable, and it explains why the story became one of the most memorable images of the conquest.`) +
          P(`The adhan on that day was not a triumph over a defeated people. It was a summons to a new order in which the Ka‘bah belonged to the worship of Allah alone. Bilal’s voice announced that the old hierarchy of clan and wealth had been judged, and that the community’s public worship would no longer be led by the sons of the powerful.`) +
          NOTE(`<strong>Source caution.</strong> The report that Bilal gave the adhan on the day of the conquest is widely preserved, but the exact location and wording vary. The article does not claim that every detail of the scene is established.`)
      },
      {
        id: 'the-death-of-the-prophet',
        heading: 'The Death of the Prophet ﷺ',
        html: P(`The death of the Prophet ﷺ in 11 AH broke Bilal’s world. The sources describe his grief and his difficulty in continuing to give the adhan in the city where the Prophet ﷺ had lived. The call to prayer had been the sound of the Prophet’s presence; after his death, it became a reminder of absence.`) +
          P(`The later reports say that Bilal asked Abu Bakr for permission to leave Madinah, and that Abu Bakr granted it. Other reports say that he stopped giving the adhan and that the community asked him to return. The stories differ, but they agree on the emotional core: Bilal could not separate the adhan from the man who had chosen him to give it.`) +
          NOTE(`<strong>Source caution.</strong> The reports about Bilal leaving Madinah and refusing to give the adhan are later biographical traditions. The fact of his grief is not in doubt; the exact sequence of events is.`)
      },
      {
        id: 'syria-and-later-life',
        heading: 'Syria and the Later Years',
        html: P(`Bilal spent his later years in Syria, where the Muslim armies had established a presence during the caliphate of Abu Bakr and Umar. The sources place him in Damascus and report that he took part in the campaigns. He is not remembered as a commander, but as a companion who carried the community’s worship into a new land.`) +
          P(`One of the best-known later reports describes Umar’s visit to Syria. When Umar arrived, the people asked Bilal to give the adhan, and when he did, the companions wept. The sound reminded them of the Prophet ﷺ and of Madinah. The report is not a legal text; it is a memory of loss, and it shows how deeply the adhan was associated with the first generation.`) +
          NOTE(`<strong>Source caution.</strong> The report of Umar’s visit and the weeping of the companions is preserved in later biographical works. It is edifying and widely quoted, but it is not a sound hadith with a detailed chain.`)
      },
      {
        id: 'death-and-burial',
        heading: 'Death, Burial and the Reports',
        html: P(`The sources differ on the date and place of Bilal’s death. The most common report places his death in Damascus around 20 AH, during the caliphate of Umar, and his burial at the Bab al-Saghir cemetery. Other reports say that he died in Madinah, and some give a later date. The disagreement is not surprising for a companion who lived through the first conquests and whose family settled in Syria.`) +
          P(`His age at death is also reported differently, with figures in the sixties. The numbers are later estimates, not contemporary records. What is consistent is that he died after the Prophet ﷺ, after the conquest of Makkah and after the community had expanded beyond Arabia. He did not live to see the great fitna, and the sources do not place him in the political conflicts of the later caliphate.`) +
          NOTE(`<strong>Source caution.</strong> The date and place of Bilal’s death are not settled. The article follows the most common report, Damascus around 20 AH, without claiming certainty.`)
      },
      {
        id: 'the-later-legends',
        heading: 'The Later Legends and Their Limits',
        html: P(`Bilal’s story attracted many later additions. One of the most popular is the account of his dream in which the Prophet ﷺ told him to visit his grave, and of Bilal travelling to Madinah to place his face on the tomb. Another is the claim that he never gave the adhan again after the Prophet’s death, or that he gave it only once, in Syria, and that the whole city wept.`) +
          P(`These stories are beautiful, and they express a real grief. But they are not all equally attested. The dream-visit narrative is not found in the earliest collections, and the reports about his silence after the Prophet’s death vary. The reader should enjoy the stories as later expressions of love without treating them as historical records of equal weight to the hadith.`) +
          NOTE(`<strong>Source caution.</strong> The dream-visit story and the “he never called the adhan again” narrative are later traditions. They are not in the sound collections and should not be presented as established history.`)
      },
      {
        id: 'lessons-and-limits',
        heading: 'Lessons and the Limits of the Sources',
        html: P(`Bilal’s life teaches four things. The first is the dignity of the person: a man whom the world called property was chosen to lead the community’s worship. The second is the cost of faith: his conversion was not a change of opinion but a decision that led to physical torture. The third is the power of a voice: the adhan he called became the sound of Islam across the world. The fourth is the honesty of grief: he loved the Prophet ﷺ and did not hide the loss.`) +
          P(`The limits of the sources are also a lesson. We do not know Bilal’s inner thoughts, the exact price of his freedom or the precise date of his death. The later stories fill the gaps with emotion, and some of them are edifying. But the historian’s task is to distinguish the established from the beautiful, and the believer’s task is to honour the man without inventing his biography.`) +
          P(`The best way to remember Bilal is to listen to the adhan. Every call to prayer in every mosque repeats the words he was chosen to carry. The voice that Makkah tried to silence is now heard five times a day from every direction. That is a more eloquent memorial than any legend.`) +
          NOTE(`<strong>Editorial note:</strong> this article distinguishes the Qur’anic text, the authentic hadith, the early biographical reports and later narrative. It does not claim that every detail about Bilal is historically established, and it does not use his story to minimise the reality of slavery in early Islam.`)
      }
    ],
    faqs: [
      { q: 'Who was Bilal ibn Rabah?', a: 'Bilal ibn Rabah was an enslaved man of Abyssinian descent in Makkah, owned by Umayyah ibn Khalaf. He was among the earliest Muslims, was tortured for his faith, was bought and freed by Abu Bakr, and became the muezzin of the Prophet ﷺ in Madinah.' },
      { q: 'Was Bilal the first muezzin?', a: 'Yes, in the standard account. After the hijrah, when the community needed a public call to prayer, the Prophet ﷺ chose Bilal because of his strong voice. He is remembered as the first muezzin of Islam.' },
      { q: 'What did Bilal say under torture?', a: 'The early biographical reports say that he repeated “Ahad, Ahad” — “One, One” — refusing to renounce the oneness of Allah. The torture itself is widely reported; the exact staging of the scene is from early biography rather than a detailed sound hadith.' },
      { q: 'Did Bilal give the adhan at the conquest of Makkah?', a: 'The sources report that he did, from the Ka‘bah or its roof, on the day the Prophet ﷺ entered Makkah in 8 AH. The details vary, but the report is widely preserved and the scene became one of the most memorable images of the conquest.' },
      { q: 'When and where did Bilal die?', a: 'The most common report places his death in Damascus around 20 AH, during the caliphate of Umar, and his burial at Bab al-Saghir. Other reports say he died in Madinah. The sources do not agree, and the article presents the disagreement rather than a certainty.' }
    ],
    bibliography: [
      `The Qur’an — especially 49:13 on piety and nobility, 4:75 on the oppressed, 16:110 on those tried for their faith, and 90:11–13 on freeing a slave. Translations adapted from Saheeh International unless stated.`,
      `Sahih al-Bukhari — the hadith of Bilal’s footsteps in Paradise, the institution of the adhan and the reports on his virtues.`,
      `Sahih Muslim — the reports on Bilal and the muezzin’s rank.`,
      `Abu Dawud, <em>Sunan</em> — the report “O Bilal, comfort us with the prayer” and the adhan traditions.`,
      `Ibn Ishaq, <em>Sirat Rasul Allah</em>, as transmitted by Ibn Hisham — the torture, the manumission and the Badr narrative.`,
      `Al-Tabari, <em>Tarikh al-Rusul wa al-Muluk</em> — the conquest of Makkah and the later campaigns.`,
      `Ibn Sa‘d, <em>Kitab al-Tabaqat al-Kabir</em> — the biographical entry on Bilal and his family.`,
      `Ibn Kathir, <em>al-Bidayah wa al-Nihayah</em> and al-Dhahabi, <em>Siyar A‘lam al-Nubala</em> — later synthesis with grading.`,
      `Modern academic studies of slavery in late antique Arabia and of race and conversion in early Islam.`
    ],
    related: [
      ...relatedBase,
      { href: 'khadijah-the-first-believer-and-pillar-of-the-mission.html', label: 'Khadijah: the first believer and pillar of the mission' },
      { href: 'abu-bakr-the-truthful-and-the-first-caliph.html', label: 'Abu Bakr: the truthful and the first caliph' },
      { href: 'salman-al-farsi-the-seeker-who-crossed-empires.html', label: 'Salman al-Farsi: the seeker who crossed empires' },
      { href: '../sahaba.html', label: 'Companions library' }
    ]
  },
  {
    slug: 'salman-al-farsi-the-seeker-who-crossed-empires',
    title: 'Salman al-Farsi: The Seeker Who Crossed Empires',
    metaTitle: 'Salman al-Farsi: From Zoroastrian Persia to the Trench of Madinah',
    description: 'The life of Salman al-Farsi: his Zoroastrian upbringing near Isfahan, his search for the true religion through Syria and Iraq, his enslavement and arrival in Yathrib, his recognition of the Prophet ﷺ, his freedom, the trench of the Confederates, his knowledge and asceticism, his governorship of al-Mada’in, his death and the limits of the later legends.',
    category: 'Sahaba',
    readTime: '15 min',
    intro: P(`Salman al-Farsi is the companion who came to Islam from outside Arabia, from a Zoroastrian family in Persia, after a journey that took him through the churches of Syria and Iraq and into slavery in Yathrib. He is the proof that the new religion was not a tribal movement. He crossed empires, languages and scriptures to find the Prophet ﷺ, and when he found him he recognised the signs that the monks had described.`) +
      P(`His story is also the story of the trench. At the Battle of the Confederates, Salman suggested digging a defensive ditch across the exposed northern approach to Madinah, a technique he knew from Persian warfare. The Prophet ﷺ accepted the plan, the Muslims dug the trench, and the siege failed. The battle became a turning point, and Salman’s advice is part of the reason.`) +
      P(`This article follows the early biographical sources and the hadith, and it marks the line between the established outline and the later legends. It does not claim that every detail of Salman’s long journey is verbatim history, and it does not repeat the claim that he lived for two and a half centuries. It does claim that his life is one of the most remarkable in the first generation, and that his search for truth deserves to be told with care.`),
    keyTakeaways: [
      `Salman was born into a Zoroastrian family near Isfahan, in a village called Jayy, and his father was a local landowner.`,
      `He left home in search of the true religion and travelled through Syria and Iraq, learning from Christian monks.`,
      `He was betrayed and sold into slavery, and was brought to Yathrib, where he heard of the Prophet ﷺ.`,
      `He recognised the Prophet ﷺ by the signs the monks had described, accepted Islam and was helped to freedom.`,
      `He suggested digging the trench at the Battle of the Confederates, and the plan was adopted.`,
      `The Prophet ﷺ praised him, and the report “Salman is from us, the family” is widely quoted but graded differently by scholars.`,
      `He was appointed governor of al-Mada’in during the caliphate of Umar and lived there simply.`,
      `He died in al-Mada’in around 33–36 AH; the reports of a 250-year lifespan are legendary and not authentic.`
    ],
    sections: [
      {
        id: 'why-salman-matters',
        heading: 'Why Salman Matters',
        html: P(`Salman matters because he shows that the search for God can begin outside the Abrahamic fold and still arrive at the Prophet ﷺ. He was raised as a Zoroastrian, became a Christian, and then accepted Islam. His journey is a history of religious seeking in late antiquity, and it gives the early community a non-Arab, non-tribal face.`) +
          P(`He also matters because of the trench. The Battle of the Confederates was the moment when the survival of the Madinan community was most seriously threatened. Salman’s military knowledge, gained in a different empire, helped save the city. The episode shows that the community was willing to learn from outsiders and that expertise was valued regardless of origin.`)
      },
      {
        id: 'persia-and-the-search',
        heading: 'Persia and the Search for the True Religion',
        html: P(`Salman was born in the village of Jayy, near Isfahan, into a Zoroastrian family. His father was a dehqan, a landowner of the local aristocracy, and the sources describe him as a devout fire-worshipper who kept the sacred fire and raised his son in the religion of the Magians. Salman grew up in comfort, but he was not satisfied.`) +
          P(`The long narrative preserved in the biographical and hadith literature describes his dissatisfaction with Zoroastrianism and his encounter with a Christian community. He began to ask about the religion of the Christians, and his father opposed him. The tension between father and son is one of the earliest parts of the story, and it sets up the journey that follows.`) +
          P(`The sources present Salman’s search as a movement from one teacher to another. He did not receive a single revelation or a single vision; he travelled, listened and tested. That pattern is important. His conversion was not a sudden emotional turn but the end of a long intellectual and spiritual pilgrimage.`) +
          NOTE(`<strong>Source caution.</strong> The detailed narrative of Salman’s youth is preserved in the long hadith of Salman and in Ibn Ishaq. Its chain and details have been discussed by scholars, and the article treats it as early biography rather than as a verbatim prophetic report.`)
      },
      {
        id: 'the-monks-and-the-journey',
        heading: 'The Monks and the Long Journey',
        html: P(`Salman left Persia and travelled to Syria, where he attached himself to a Christian monk. When the monk was dying, he directed Salman to another monk, and so on through a series of teachers. The sources name several locations, including Mosul and Ammuriyya, and describe each monk as pointing to the next. The last of them told Salman that a prophet was about to appear in the land of the Arabs.`) +
          P(`The monks are said to have described the signs of the coming prophet: he would accept a gift but not charity, he would have the seal of prophethood between his shoulders, and he would appear in a land of palm trees. Salman memorised the signs and set out for Arabia. The narrative is one of the most detailed conversion stories in the early sources.`) +
          P(`The journey was not a pilgrimage in comfort. Salman was a stranger who did not speak the local languages well, and he depended on the generosity of the people he met. The sources describe him joining a caravan and being betrayed by its members, who sold him into slavery. The search for truth ended, for a time, in a market.`) +
          NOTE(`<strong>Source caution.</strong> The names of the monks and the exact route vary across the reports. The broad outline of the journey is early and widely preserved; the details should not be treated as a travel diary.`)
      },
      {
        id: 'slavery-and-yathrib',
        heading: 'Slavery and Arrival in Yathrib',
        html: P(`Salman was sold to a Jewish merchant and brought to Yathrib, the town that would later be called Madinah. He worked as a slave, tending palms and doing the heavy labour of the household. The sources say that he heard talk of a prophet who had appeared in the town, and he began to watch for the signs the monks had described.`) +
          P(`His position was difficult. He was a foreigner, a slave and a convert from a religion that the people of Yathrib did not share. He could not approach the Prophet ﷺ openly without his owner’s permission. The narrative describes him waiting, observing and testing what he heard. His patience is part of the story’s moral texture.`) +
          P(`The sources differ on the identity of his owner and on the details of his work. Some say that he belonged to a Jew of the Banu Qurayza, others to a Jew of the Banu Nadir. The disagreement is minor, but it shows how the story was transmitted through different chains and communities.`) +
          NOTE(`<strong>Source caution.</strong> The identity of Salman’s owner and the exact terms of his slavery are reported differently. The article does not treat those details as settled.`)
      },
      {
        id: 'recognising-the-prophet',
        heading: 'Recognising the Prophet ﷺ',
        html: P(`When the Prophet ﷺ arrived in Madinah, Salman went to see him with a gift of food. He presented it as charity, and the Prophet ﷺ gave it to his companions and did not eat from it. Salman noted the sign. He returned with food presented as a gift, and the Prophet ﷺ accepted it and ate. The second sign was confirmed.`) +
          P(`The third sign was the seal of prophethood between the Prophet’s shoulders. Salman found an opportunity to see it, and he accepted Islam. The sources describe the moment as the fulfilment of everything the monks had told him. The long journey, the slavery and the waiting were suddenly intelligible.`) +
          P(`The story of the three signs is one of the most famous conversion narratives in the tradition. It is also a story about discernment: Salman did not accept the Prophet ﷺ because of a miracle performed for him, but because the signs matched what he had already been told by trustworthy teachers. His faith was the fruit of patient investigation.`) +
          NOTE(`<strong>Source caution.</strong> The three-signs narrative is preserved in the long hadith of Salman and in the biographical works. Scholars have discussed its chain; the article presents it as the traditional account rather than as an undisputed sound hadith.`)
      },
      {
        id: 'freedom-and-the-palms',
        heading: 'Freedom and the Palms',
        html: P(`Salman’s owner agreed to free him in exchange for a payment of palm trees and gold. The sources describe the terms differently, but the outline is consistent: Salman had to plant a number of palms and pay a sum of money. He had neither the land nor the means to do it alone.`) +
          P(`The Prophet ﷺ helped him. The reports say that the Muslims contributed the palms and that the Prophet ﷺ planted them with his own hand. The trees are said to have taken root, and the gold was provided from a source that the sources describe in different ways. Salman was freed and became a full member of the community.`) +
          P(`The episode is a model of collective responsibility. The community did not leave a convert to work out his manumission alone. It pooled resources, planted trees and paid the price. The Prophet’s participation gave the act a symbolic weight: the man who had crossed empires to find him was not left in slavery.`) +
          NOTE(`<strong>Source caution.</strong> The number of palms, the amount of gold and the details of the transaction vary widely in the sources. The fact of the Prophet’s help and Salman’s manumission is established; the arithmetic is not.`)
      },
      {
        id: 'the-trench',
        heading: 'The Trench of the Confederates',
        html: P(`The Battle of the Confederates, or al-Khandaq, took place in 5 AH, when a coalition of Quraysh and their allies marched on Madinah. The city was vulnerable on its northern side, where the approaches were open to cavalry. Salman, who knew the siege techniques of the Persian frontier, suggested digging a trench across those approaches.`) +
          P(`The Prophet ﷺ accepted the plan, and the Muslims dug the trench under difficult conditions. The sources describe the cold, the hunger and the speed of the work. The trench neutralised the enemy cavalry, and the siege ended without a decisive battle. The Qur’an describes the moment in Surah al-Ahzab, where the believers were tested and shaken (33:10–11).`) +
          P(`Salman’s role in the battle became one of his defining achievements. He was not a commander of the whole army, but he was the source of the idea that saved the city. The episode also produced the famous report that the Muhajirun and the Ansar each claimed him, and that the Prophet ﷺ said, “Salman is from us, the family.” That report is discussed below.`) +
          NOTE(`<strong>Source caution.</strong> The trench narrative is preserved in Ibn Ishaq and al-Tabari. The Qur’an confirms the siege but not the tactical details. The report of the Muhajirun and Ansar claiming Salman is part of the later biographical tradition.`)
      },
      {
        id: 'knowledge-and-asceticism',
        heading: 'Knowledge, Asceticism and the Prophet’s Praise',
        html: P(`Salman was known for his knowledge and his simplicity. The sources describe him as a man who read widely, asked difficult questions and lived on coarse food and simple clothing. He was not a formal scholar in the later sense, but he was a companion whose judgement was respected.`) +
          P(`The Prophet ﷺ is reported to have praised him in several ways. The most famous report says, “Salman is from us, the family.” Another says that Salman was a man of knowledge. Some of these reports are stronger than others, and the later tradition sometimes exaggerated them into claims that Salman was a sea of knowledge or the equal of the philosophers.`) +
          P(`His asceticism was not a rejection of the world. He had been a wealthy young man in Persia and had chosen poverty for the sake of the truth. When he later became a governor, he did not abandon that discipline. His simple life was a continuation of the search that had brought him to Madinah.`) +
          NOTE(`<strong>Source caution.</strong> The report “Salman is a sea of knowledge” is not established as a sound hadith. The article does not use it. The report “Salman is from us, the family” is discussed in a separate section.`)
      },
      {
        id: 'al-madain',
        heading: 'Governor of al-Mada’in',
        html: P(`During the caliphate of Umar, Salman was appointed governor of al-Mada’in, the former Sasanian capital in Iraq. The appointment placed a Persian convert in charge of the administration of the conquered Persian heartland. It was a practical choice as well as a symbolic one: Salman knew the language, the customs and the geography of the region.`) +
          P(`The sources describe him as a governor who lived like a poor man. He wore a simple cloak, ate coarse bread and carried his own goods. The stories of his humility are part of the later biographical tradition, but they reflect a consistent picture of a man who did not use office for personal gain.`) +
          P(`His governorship was not a grand political career. He administered, judged and then withdrew. The sources do not give us a detailed record of his policies, and the later stories focus on his simplicity rather than his administration. That focus is itself revealing: the community remembered him as a model of ascetic rule, not as a builder of institutions.`) +
          NOTE(`<strong>Source caution.</strong> The details of Salman’s governorship are preserved in later biographical works. The fact of his appointment is widely reported; the anecdotes about his poverty are edifying and should be read as such.`)
      },
      {
        id: 'death-and-burial',
        heading: 'Death and Burial',
        html: P(`Salman died in al-Mada’in, according to the most common reports, during the caliphate of Uthman or the beginning of Ali’s caliphate. The date is given as 33, 35 or 36 AH, and the sources do not agree. He was buried in the city he had governed, and his grave became a place of visitation in Iraq.`) +
          P(`His age at death is also reported differently. Some sources give figures that would make him over a hundred, and a few preserve the legend that he lived for two hundred and fifty years. That legend is not credible. It contradicts the chronological data and belongs to the later storytelling tradition rather than to the historical record.`) +
          P(`What is certain is that he died far from Persia and far from Madinah, in a city that had been the capital of the empire he left as a young man. His life had come full circle: the Persian seeker became the governor of the Persian capital, and the slave became a free man remembered by the community he had joined.`) +
          NOTE(`<strong>Source caution.</strong> The date of Salman’s death is not settled, and the 250-year lifespan is a legend. The article follows the most common reports without endorsing the exaggerated ages.`)
      },
      {
        id: 'the-ahl-al-bayt-report',
        heading: '“Salman is from us”: The Report and Its Grading',
        html: P(`The report “Salman is from us, the family” (Salman minna Ahl al-Bayt) is one of the most quoted statements about Salman. It is preserved in several collections, including Musnad Ahmad and al-Hakim’s Mustadrak, and it is often cited to show the Prophet’s affection for him.`) +
          P(`The report is not uniformly graded. Some scholars have accepted it as hasan, while others have weakened its chain. The disagreement is part of the normal work of hadith criticism, and it should be stated rather than hidden. The statement is beautiful and widely loved, but it is not in the same category as the mutawatir reports of the Qur’an or the most famous hadith of Bukhari and Muslim.`) +
          P(`The meaning of the report is also debated. It does not make Salman a biological member of the Prophet’s family, and it does not give him the legal status of a relative. It expresses a spiritual kinship: the community of faith can create bonds that blood does not. That is a powerful idea, and it does not need to be overstated to be true.`) +
          NOTE(`<strong>Source caution.</strong> The report is graded differently by different scholars. The article presents it as a widely transmitted tradition with a disputed chain, not as an undisputed saying of the Prophet ﷺ.`)
      },
      {
        id: 'the-later-legends',
        heading: 'The Later Legends and Their Limits',
        html: P(`Salman’s story attracted many later additions. The most common are the 250-year lifespan, the detailed names and sayings of every monk, the claim that he knew the unseen, and the stories that make him a philosopher or a proto-Sufi master. Some of these details may preserve early memories; others are clearly later edification.`) +
          P(`The long journey itself is early, but the later versions expand it with dialogue and miracles. The trench is historical, but the later versions add supernatural details. The governorship is historical, but the later versions turn his poverty into a legend of perfect asceticism. The reader should enjoy the stories without confusing them with the earliest sources.`) +
          NOTE(`<strong>Source caution.</strong> The 250-year lifespan and the supernatural stories about Salman are later legends. They are not established by the earliest sources and should not be presented as history.`)
      },
      {
        id: 'lessons-and-limits',
        heading: 'Lessons and the Limits of the Sources',
        html: P(`Salman’s life teaches four things. The first is the dignity of the search: he did not accept the religion of his father simply because it was his, and he did not stop asking questions until he found an answer. The second is the courage of migration: he left home, family and comfort for a truth he could not yet see. The third is the value of expertise: his Persian knowledge saved Madinah. The fourth is the possibility of transformation: a slave became a governor, and a Zoroastrian became a companion of the Prophet ﷺ.`) +
          P(`The limits of the sources are also a lesson. We do not have a contemporary account of his journey, and the details of his conversion are preserved in a long narrative whose chain has been debated. The later legends fill the gaps with miracles and exaggerated ages. The historian’s task is to hold the extraordinary core without accepting every ornament.`) +
          P(`The best way to remember Salman is to remember the trench. A stranger from Persia looked at the open northern approach to Madinah and saw what the locals had not seen. The community listened to him, dug the ditch and survived. That is a model of how revelation and experience can work together, and it is a more honest tribute than any legend.`) +
          NOTE(`<strong>Editorial note:</strong> this article distinguishes the Qur’anic text, the authentic hadith, the early biographical reports and later narrative. It does not claim that every detail of Salman’s journey is historically established, and it does not repeat the exaggerated claims about his age.`)
      }
    ],
    faqs: [
      { q: 'Who was Salman al-Farsi?', a: 'Salman al-Farsi was a Persian companion of the Prophet ﷺ, born near Isfahan into a Zoroastrian family. He became a Christian, travelled through Syria and Iraq, was sold into slavery and brought to Yathrib, where he recognised the Prophet ﷺ and accepted Islam.' },
      { q: 'What did Salman do at the Battle of the Trench?', a: 'He suggested digging a defensive trench across the northern approach to Madinah, using a technique he knew from Persian warfare. The Prophet ﷺ accepted the plan, the Muslims dug the trench, and the siege of the Confederates failed.' },
      { q: 'Is “Salman is from us, the family” a sound hadith?', a: 'It is reported in several collections, including Musnad Ahmad and al-Hakim’s Mustadrak, but its chain has been graded differently. Some scholars accept it as hasan, others weaken it. It expresses spiritual kinship rather than biological descent.' },
      { q: 'Did Salman live for 250 years?', a: 'No. The claim that Salman lived for two and a half centuries is a later legend. It contradicts the chronological data and is not accepted by historians of the early period.' },
      { q: 'Where did Salman die?', a: 'The most common reports place his death in al-Mada’in, the former Sasanian capital in Iraq, around 33–36 AH. The exact date is not settled, and the sources give different figures.' }
    ],
    bibliography: [
      `The Qur’an — especially 33:10–25 on the Battle of the Confederates and 49:13 on piety and nobility. Translations adapted from Saheeh International unless stated.`,
      `Musnad Ahmad — the long hadith of Salman’s journey and conversion.`,
      `Sahih al-Bukhari and Sahih Muslim — the reports on Salman’s virtues and the trench.`,
      `Ibn Ishaq, <em>Sirat Rasul Allah</em>, as transmitted by Ibn Hisham — the journey, the manumission and the trench.`,
      `Al-Tabari, <em>Tarikh al-Rusul wa al-Muluk</em> — the conquest of Iraq and the governorship of al-Mada’in.`,
      `Ibn Sa‘d, <em>Kitab al-Tabaqat al-Kabir</em> — the biographical entry on Salman.`,
      `Al-Hakim, <em>al-Mustadrak</em> — the report “Salman is from us, the family” and its grading.`,
      `Ibn Kathir, <em>al-Bidayah wa al-Nihayah</em> and al-Dhahabi, <em>Siyar A‘lam al-Nubala</em> — later synthesis with grading.`,
      `Modern academic studies of Persian conversion, late antique religion and the early Islamic conquests.`
    ],
    related: [
      ...relatedBase,
      { href: 'bilal-ibn-rabah-the-voice-of-the-adhan.html', label: 'Bilal ibn Rabah: the voice of the first adhan' },
      { href: 'umar-al-faruq-justice-and-the-caliphate.html', label: 'Umar: justice, conquest and the caliphate' },
      { href: 'battles-of-badr-uhud-and-the-trench.html', label: 'The battles of Badr, Uhud and the Trench' },
      { href: '../sahaba.html', label: 'Companions library' }
    ]
  }
];
