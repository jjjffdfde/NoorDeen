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
    slug: 'rightly-guided-caliphs-succession-and-expansion',
    title: 'The Rightly Guided Caliphs: Succession, Expansion and the First Fitna',
    metaTitle: 'The Rashidun Caliphate: Abu Bakr, Umar, Uthman and Ali — Institutions, Conquests and Civil War',
    description: 'The Rashidun caliphate as an institution: the Saqifa, the bay‘ah, Abu Bakr and the ridda wars, Umar and the machinery of empire, Uthman and the standard codex, Ali and the first fitna, taxation, the garrison towns, the conquests and the contested memory of the four caliphs.',
    category: 'History',
    readTime: '15 min',
    intro: P(`The first four caliphs after the Prophet ﷺ — Abu Bakr, Umar, Uthman and Ali — ruled for fewer than thirty years, yet they created the political vocabulary that Muslims have argued about ever since. In that generation a small Arabian community became an empire stretching from the Atlas Mountains to the Oxus, and the questions raised by that transformation — who may rule, how he is chosen, what limits his power, how wealth is distributed — have never gone away.`) +
      P(`The four are called al-khulafa al-rashidun, the rightly guided caliphs. The label is a judgement of piety and of fidelity to the prophetic model, not a description of a constitutional system. They did not rule through a written constitution, a standing bureaucracy or a fixed law of succession. They improvised under pressure, and their improvisations became precedents that later dynasties cited or ignored.`) +
      P(`This article treats the Rashidun as an institution rather than repeating the four biographies already published on this site. It follows the early historical and biographical sources, marks where those sources are late or tendentious, and refuses to turn a civil war into a simple morality play. The first fitna was a tragedy that the community survived, not a template for later conflict.`),
    keyTakeaways: [
      `The Rashidun caliphate lasted from 632 to 661 CE: Abu Bakr (632–634), Umar (634–644), Uthman (644–656) and Ali (656–661).`,
      `Abu Bakr was chosen at the Saqifa of the Banu Sa‘ida by a group of the Ansar and Muhajirun; the bay‘ah was real but not a general election.`,
      `The ridda wars were not a single war of apostasy: some tribes rejected the caliphate, and some refused the zakat while professing Islam.`,
      `Umar built the institutions of empire: the garrison towns, the diwan, the Hijri calendar and a system of stipends.`,
      `Uthman standardised the Qur’anic codex and sent copies to the provinces; the decision is accepted by the community even where the politics of his caliphate are disputed.`,
      `Ali’s caliphate was consumed by the first fitna: the Battle of the Camel, Siffin, the arbitration and the Kharijite secession.`,
      `The caliphate was not a papacy: the caliphs governed, judged and led prayer, but they did not define doctrine or claim infallibility.`,
      `Later Sunni and Shi‘i memories of this period differ sharply, and both are shaped by the conflicts of later centuries.`
    ],
    sections: [
      {
        id: 'why-the-rashidun-matter',
        heading: 'Why the Rashidun Matter',
        html: P(`The Rashidun matter because they are the only period in which the community was governed by people who had known the Prophet ﷺ intimately and who had no inherited claim to power. Abu Bakr was a merchant and a close friend. Umar was a former wrestler and a stern administrator. Uthman was a wealthy trader from a leading clan. Ali was the Prophet’s cousin and son-in-law. None of them was a king, and none of them founded a dynasty.`) +
          P(`That combination — proximity to the Prophet ﷺ, absence of dynastic legitimacy and the pressures of rapid conquest — produced both the achievements and the crises of the period. The achievements were administrative and military: the unification of Arabia, the defeat of the Sasanian empire, the conquest of Syria and Egypt, the creation of a treasury and a calendar. The crises were political: the murder of two caliphs, a civil war and the emergence of a dissident faction that would outlast the caliphate itself.`)
      },
      {
        id: 'the-saqifa-and-the-first-bay-ah',
        heading: 'The Saqifa and the First Bay‘ah',
        html: P(`When the Prophet ﷺ died in 11 AH / 632 CE, he left no written instruction naming a successor. The community faced an immediate practical problem: the Ansar gathered at the Saqifa of the Banu Sa‘ida to discuss a leader, and the Muhajirun arrived to insist that the leader should come from Quraysh. Abu Bakr and Umar were among them. After debate, Abu Bakr was given the bay‘ah, first by those present and then in the mosque.`) +
          P(`The sources do not describe a unanimous assembly. Sa‘d ibn Ubada, the Ansar leader, was ill and later withdrew from public life. Ali was not present at the Saqifa; he was occupied with the Prophet’s burial, and his own bay‘ah is reported to have come later. These facts are recorded in the earliest sources, and they explain why the event became a focus of later dispute.`) +
          P(`The bay‘ah was nonetheless a real act of consent by the community’s most influential figures. It was not a modern election, and it was not a hereditary succession. It was a negotiated choice made under the pressure of a possible split between the Muhajirun and the Ansar. The distinction matters: the Rashidun caliphate rested on a practice of consultation and acclamation, not on a fixed rule.`) +
          NOTE(`<strong>Source caution.</strong> The Saqifa narratives are preserved in Ibn Ishaq, al-Tabari and the biographical works. The broad outline is agreed; the speeches are later compositions, and the sequence of the bay‘ah reports varies. The article does not claim that the event was uncontested.`)
      },
      {
        id: 'abu-bakr-and-the-consolidation',
        heading: 'Abu Bakr and the Consolidation of the Community',
        html: P(`Abu Bakr’s caliphate lasted barely two years, and it was almost entirely consumed by the question of survival. Several Arab tribes withheld the zakat or rejected the authority of Madinah after the Prophet’s death. Abu Bakr refused to separate the prayer from the zakat, and he sent armies to restore the authority of the centre. The campaigns are conventionally called the ridda wars, the wars of apostasy.`) +
          P(`That label flattens a complex reality. Some tribes had genuinely renounced Islam and followed rival prophets such as Musaylima. Others professed Islam but refused to pay the zakat to a caliph they did not accept. Abu Bakr treated both as rebellion against the community, and his firmness preserved the unity of the state. Whether every campaign was a war of religion or a war of politics is a question the sources allow us to ask.`) +
          P(`The most consequential decision of his caliphate came after the Battle of Yamama, where many reciters of the Qur’an were killed. Umar urged the caliph to collect the Qur’an into a single written corpus, and Abu Bakr commissioned Zayd ibn Thabit to do it. The sheets were kept with the caliph and later with Hafsah, Umar’s daughter. That collection became the basis of the standard codex produced under Uthman.`) +
          NOTE(`<strong>Source caution.</strong> The ridda campaigns are reported in al-Tabari and al-Baladhuri, but the most detailed accounts depend on Sayf ibn Umar, whose reliability was criticised by hadith scholars. The outline is secure; the battle speeches and numbers are not.`)
      },
      {
        id: 'umar-and-the-machinery-of-empire',
        heading: 'Umar and the Machinery of Empire',
        html: P(`Umar inherited a state that was expanding faster than its institutions. His caliphate (634–644) turned a victorious army into an administration. He founded or developed the garrison towns of Kufa, Basra and Fustat, where soldiers could settle with their families rather than dissolving into the conquered populations. He established the diwan, a register of those entitled to stipends from the treasury, and he organised the distribution of the fay’.`) +
          P(`He also gave the community a calendar. The Hijri era, beginning with the Prophet’s migration, was adopted during his caliphate and remains the Islamic lunar reckoning. He appointed and dismissed governors with unusual severity, and he insisted that officials be accessible to complainants. The stories of his night patrols and his refusal of luxury are part of the period’s moral memory, and they express a real expectation that the ruler should live like the ruled.`) +
          NOTE(`<strong>Source caution.</strong> The details of the diwan and the stipend scales are reported by al-Baladhuri and later administrative writers. The figures should be read as later reconstruction, not as contemporary budget documents.`)
      },
      {
        id: 'uthman-and-the-standard-codex',
        heading: 'Uthman and the Standard Codex',
        html: P(`Uthman’s caliphate (644–656) is remembered for two things: the standardisation of the Qur’anic text and the political crisis that ended in his murder. The two are connected, because both involved the question of how far the caliph could act on behalf of the whole community.`) +
          P(`As the conquests spread, Muslims in different provinces recited the text with different dialectal conventions. Hudhayfah ibn al-Yaman warned the caliph that the differences could become a source of conflict. Uthman commissioned a committee, again led by Zayd ibn Thabit, to produce a standard codex from Abu Bakr’s collection. Copies were sent to the major centres, and variant personal codices were suppressed.`) +
          P(`The decision was controversial at the time and has been accepted by the community since. It preserved the unity of the text, but it also centralised authority over the text in the caliph’s hands. Critics of Uthman accused him of favouring his relatives and of appointing young men from the Umayyad clan to key posts. Some of those accusations are corroborated by the sources; others are polemical. In 656 a group of rebels besieged his house in Madinah and killed him while he was reciting the Qur’an.`) +
          NOTE(`<strong>Source caution.</strong> The reports of Uthman’s codex are preserved in al-Bukhari and in the biographical works. The accusations against his administration come largely from sources written under the Abbasids, who had reasons to portray the Umayyads badly. They are not therefore false, but they require care.`)
      },
      {
        id: 'ali-and-the-first-fitna',
        heading: 'Ali and the First Fitna',
        html: P(`Ali was given the bay‘ah in Madinah after Uthman’s death, and his caliphate was immediately contested. The Prophet’s widow A’ishah, Talhah and al-Zubayr demanded that the killers of Uthman be punished before Ali’s authority was recognised. Ali argued that he needed time to establish control. The dispute ended in the Battle of the Camel in 656, near Basra, where Talhah and al-Zubayr were killed and A’ishah’s forces were defeated.`) +
          P(`The deeper conflict was with Mu‘awiya, the governor of Syria and a relative of Uthman, who refused to give the bay‘ah until the murder was avenged. The two armies met at Siffin in 657. After weeks of skirmishing, the Syrians called for arbitration, and a group of Ali’s own supporters forced him to accept it. The arbitration was inconclusive, and a faction rejected it as a sin against God. That faction, the Kharijites, withdrew from Ali’s camp and were defeated at Nahrawan in 658.`) +
          P(`In 661 a Kharijite named Ibn Muljam stabbed Ali in the mosque of Kufa. His caliphate had lasted five years, most of them at war with other Muslims. The first fitna ended with Mu‘awiya as the undisputed ruler, and the question of how the community should be governed had been answered by force rather than by consultation.`) +
          NOTE(`<strong>Source caution.</strong> The narratives of the Camel, Siffin and Nahrawan are preserved in al-Tabari, Ibn al-Athir and the biographical works. The speeches and letters attributed to the protagonists are literary compositions of a later date, however early their core may be.`)
      },
      {
        id: 'how-the-community-chose',
        heading: 'How the Community Chose Its Leaders',
        html: P(`The Rashidun were chosen in four different ways. Abu Bakr was chosen at the Saqifa by acclamation. Umar was nominated by Abu Bakr and confirmed by the community. Uthman was chosen by a committee of six appointed by Umar. Ali was given the bay‘ah in Madinah after Uthman’s death, though his authority was never accepted by the whole community.`) +
          P(`These four procedures do not add up to a single theory of succession. Later jurists tried to derive one, and the results differed: some emphasised the consensus of the qualified, others the nomination of the previous caliph, others the role of the Quraysh. The historical record is more modest. The community improvised, and each improvisation became a precedent that could be cited or ignored.`) +
          P(`The Qur’an speaks of consultation in the conduct of affairs (42:38) and commands the Prophet ﷺ to consult the believers (3:159), but it does not prescribe a mechanism for choosing a ruler. The famous hadith that urges obedience to the Prophet’s Sunnah and the Sunnah of the rightly guided caliphs is a guide to loyalty, not a constitutional manual. The gap between the text and the institution is one reason the question has remained open.`)
      },
      {
        id: 'taxation-and-the-garrison-towns',
        heading: 'Taxation, Land and the Garrison Towns',
        html: P(`The conquests posed an economic question that the Qur’an addresses in principle but not in detail. The fay’ — property taken without fighting — is assigned in Surah al-Hashr to God, the Messenger, the near relatives, the orphans, the poor and the wayfarer, “so that it will not be a perpetual distribution among the rich from among you” (59:7). How that principle should be applied to whole provinces was left to the caliphs.`) +
          P(`Umar decided that conquered agricultural land should not be divided among the fighters but should remain with its cultivators, who would pay kharaj, a land tax, while non-Muslim subjects would pay jizya, a poll tax, in return for protection and exemption from military service. The decision kept the army from becoming a landed aristocracy and preserved the tax base of the state. It was not universally popular; some companions argued that the fighters had a right to the land.`) +
          NOTE(`<strong>Source caution.</strong> The tax categories were not fixed in the Qur’an and were elaborated over centuries. The article describes the early practice, not the fully developed fiqh of kharaj and jizya, which differs between schools.`)
      },
      {
        id: 'the-conquests-and-their-terms',
        heading: 'The Conquests and Their Terms',
        html: P(`The speed of the conquests is one of the most remarkable facts of the period. Within a generation the Muslims defeated the Sasanian empire, took Syria and Egypt from Byzantium, and raided into North Africa and the Iranian plateau. The decisive battles — Yarmuk in 636, al-Qadisiyya in 636 or 637, the fall of Ctesiphon, the surrender of Jerusalem in 637 or 638, the conquest of Egypt between 639 and 642 — became foundational memories.`) +
          P(`The terms of surrender varied. Some cities were taken by force; others capitulated and received treaties that guaranteed their lives, property and places of worship in return for tribute. The treaty of Jerusalem, attributed to Umar, is the most famous example, though its text survives in later recensions. The conquered populations were not forced to convert. Conversion was gradual, and in some regions it took centuries.`) +
          NOTE(`<strong>Source caution.</strong> The conquest narratives are preserved in al-Baladhuri, al-Tabari and Ibn Abd al-Hakam, all writing well after the events. The treaties are later recensions, and the numbers of combatants are unreliable.`)
      },
      {
        id: 'the-rashidun-in-memory',
        heading: 'The Rashidun in Sunni and Shi‘i Memory',
        html: P(`Sunni tradition honours all four caliphs and places them in the order of their rule. The hadith of the ten promised Paradise, reported in al-Tirmidhi and other collections, includes Abu Bakr, Umar, Uthman and Ali, and the phrase “the rightly guided caliphs” became a standard way of referring to the first four. Their period is treated as the model age of the community.`) +
          P(`Shi‘i tradition honours Ali and the Prophet’s family above the other caliphs and regards the first three caliphates as illegitimate. The events of the Saqifa, the death of Fatima, the murder of Uthman and the wars of Ali are read through a theology of rightful succession. This is not a minor difference of emphasis; it is one of the deepest divisions in Islamic history.`) +
          NOTE(`<strong>Editorial note:</strong> this article follows the Sunni ordering and valuation of the caliphs while describing the Shi‘i position as a serious theological and historical tradition, not as a political error.`)
      },
      {
        id: 'the-first-fitna-and-its-legacy',
        heading: 'The First Fitna and Its Legacy',
        html: P(`The first fitna was the community’s first experience of Muslims killing Muslims on a large scale. The Prophet ﷺ had warned that sedition would come, and the hadith literature contains many warnings against taking sides in it. The generation that fought at the Camel and Siffin was the generation that had accompanied the Prophet ﷺ, and that fact made the conflict unbearable for many believers.`) +
          P(`The political legacy was the Umayyad dynasty. Mu‘awiya moved the capital to Damascus, instituted a hereditary succession and built a state that lasted for nearly a century. The religious legacy was more divided. The Kharijites became a permanent dissident tradition, famous for piety and for excommunication. The Shi‘a became a distinct community with its own law, theology and commemorations. The Sunnis developed a political ethic of obedience to the ruler and patience under injustice, qualified by the duty to speak the truth.`)
      },
      {
        id: 'what-the-rashidun-did-not-invent',
        heading: 'What the Rashidun Did Not Invent',
        html: P(`The Rashidun did not invent the caliphate as a fully formed institution, and they did not leave a constitutional blueprint. They inherited the Prophet’s authority without his prophethood, and they had to improvise the difference. The word khalifa means successor or deputy, and the early caliphs were careful to present themselves as deputies of the Prophet ﷺ and trustees of the community, not as sources of revelation.`)
      },
      {
        id: 'lessons-and-the-limits',
        heading: 'Lessons and the Limits of the Sources',
        html: P(`The Rashidun period teaches three lessons. The first is the importance of consultation: the community’s best decisions came when its leading figures deliberated, and its worst crises came when deliberation collapsed into faction. The second is the danger of idealisation: the period was not a golden age of harmony, and treating it as one makes it useless as a model. The third is the possibility of reform: Umar changed the tax system, Uthman standardised the text and Ali tried to restore a shattered polity.`) +
          P(`The limits of the sources are severe. Al-Tabari wrote three centuries after the events and collected every report he could find, including contradictory ones. Al-Baladhuri and Ibn Abd al-Hakam wrote administrative and regional histories with their own agendas. The biographical works preserve memory and piety as much as chronology. A modern reader can reconstruct the outline of the period with confidence, but not the detail of every speech and battle.`) +
          NOTE(`<strong>Editorial note:</strong> this article distinguishes the Qur’anic text, the sound hadith, the early chronicles and later polemic. It does not claim that every detail of the period is settled, and it does not use the first fitna to justify later sectarian violence.`)
      }
    ],
    faqs: [
      { q: 'Who were the Rightly Guided Caliphs?', a: 'They are Abu Bakr (632–634), Umar (634–644), Uthman (644–656) and Ali (656–661), the first four caliphs after the Prophet ﷺ. Sunni tradition calls them al-khulafa al-rashidun because of their proximity to the Prophet ﷺ and their role in establishing the community.' },
      { q: 'How was the first caliph chosen?', a: 'Abu Bakr was chosen at the Saqifa of the Banu Sa‘ida by the leading Muhajirun and Ansar present, and then given the bay‘ah in the mosque. It was a negotiated choice under pressure, not a general election, and Ali’s bay‘ah is reported to have come later.' },
      { q: 'What were the ridda wars?', a: 'They were the campaigns of 632–633 against tribes that rejected the authority of Madinah after the Prophet’s death. Some had renounced Islam; others professed Islam but refused to pay the zakat. Abu Bakr treated both as rebellion and restored the unity of the state.' },
      { q: 'Why did Uthman standardise the Qur’an?', a: 'Because Muslims in different provinces were reciting the text with different dialectal conventions, and Hudhayfah ibn al-Yaman warned that the differences could cause conflict. Uthman commissioned a standard codex from Abu Bakr’s collection and sent copies to the major centres.' },
      { q: 'What caused the first fitna?', a: 'The murder of Uthman in 656 created a dispute over punishment and authority. Ali’s caliphate was contested by A’ishah, Talhah and al-Zubayr at the Camel, and by Mu‘awiya at Siffin. The arbitration that followed split Ali’s camp and produced the Kharijite secession.' }
    ],
    bibliography: [
      `The Qur’an — especially 42:38 on consultation, 3:159 on consulting the believers, 4:59 on obedience to those in authority and 59:7 on the distribution of fay’. Translations adapted from Saheeh International unless stated.`,
      `Sahih al-Bukhari and Sahih Muslim — the hadith on the best generation and the reports on the caliphs’ virtues.`,
      `Sunan Abi Dawud and Jami‘ at-Tirmidhi — the report urging adherence to the Sunnah of the rightly guided caliphs, graded hasan by several scholars.`,
      `Al-Tabari, <em>Tarikh al-Rusul wa al-Muluk</em> — the Saqifa, the ridda wars, the conquests and the first fitna, with full chains.`,
      `Al-Baladhuri, <em>Futuh al-Buldan</em> — the treaties, the garrison towns and the tax arrangements.`,
      `Ibn Abd al-Hakam, <em>Futuh Misr wa Akhbaruha</em> — the conquest of Egypt and North Africa.`,
      `Ibn Ishaq, <em>Sirat Rasul Allah</em>, as transmitted by Ibn Hisham — the Saqifa and the Prophet’s final instructions.`,
      `Ibn Kathir, <em>al-Bidayah wa al-Nihayah</em>, and al-Dhahabi, <em>Siyar A‘lam al-Nubala</em> — later synthesis with grading and biographical detail.`,
      `Hugh Kennedy, <em>The Prophet and the Age of the Caliphates</em>; Fred Donner, <em>The Early Islamic Conquests</em>; Chase Robinson, <em>Islamic Historiography</em> — modern critical reconstruction and source analysis.`
    ],
    related: [
      ...relatedBase,
      { href: 'abu-bakr-the-truthful-and-the-first-caliph.html', label: 'Abu Bakr: the truthful and the first caliph' },
      { href: 'umar-al-faruq-justice-and-the-caliphate.html', label: 'Umar: justice, conquest and the caliphate' },
      { href: 'uthman-dhul-nurayn-and-the-standard-codex.html', label: 'Uthman: the standard codex and the fitna' },
      { href: 'ali-the-gate-of-knowledge-and-the-fitna.html', label: 'Ali: the gate of knowledge and the fitna' },
      { href: '../history.html', label: 'History eras library' }
    ]
  },
  {
    slug: 'umayyads-damascus-and-the-arab-kingdom',
    title: 'The Umayyads: Damascus, Dynasty and the Limits of the Arab Kingdom',
    metaTitle: 'The Umayyad Caliphate: Mu‘awiya, Abd al-Malik, the Conquests and the Abbasid Revolution',
    description: 'The Umayyad caliphate from Mu‘awiya to Marwan II: the move to Damascus, the second and third fitnas, Karbala, Ibn al-Zubayr, al-Hajjaj, the coinage and the Dome of the Rock, the conquests of North Africa, Iberia and Sind, Umar II’s reforms and the revolution of 750.',
    category: 'History',
    readTime: '15 min',
    intro: P(`The Umayyads ruled the largest empire the world had yet seen, from the Atlantic coast of Iberia to the Indus, and they did it for less than ninety years. They moved the capital from Madinah to Damascus, turned the caliphate into a hereditary monarchy and built the administrative foundations that the Abbasids inherited. They are also the dynasty that Islamic historiography loves to condemn.`) +
      P(`Almost everything we know about the Umayyads was written under their successors. The Abbasid revolution of 750 presented itself as the restoration of the Prophet’s family and the defeat of impious kings, and the historians who served the new order described the old one in those terms. Some of the accusations are supported by earlier or independent evidence; others are literary topoi. The historian’s task is to separate the two.`) +
      P(`This article follows the Umayyads from Mu‘awiya’s assumption of power in 661 to the fall of Marwan II in 750. It treats them neither as saints nor as villains, but as a ruling dynasty that solved some problems brilliantly, failed at others and was destroyed by the coalition it had excluded.`),
    keyTakeaways: [
      `Mu‘awiya ibn Abi Sufyan founded the dynasty in 661, moving the capital to Damascus and instituting hereditary succession.`,
      `The second fitna (680–692) followed the death of Mu‘awiya and included the killing of Husayn at Karbala and the counter-caliphate of Ibn al-Zubayr.`,
      `Abd al-Malik (685–705) rebuilt the state after the civil war, Arabised the administration and reformed the coinage.`,
      `The Dome of the Rock in Jerusalem was completed under Abd al-Malik, one of the earliest surviving monuments of Islamic architecture.`,
      `Al-Hajjaj ibn Yusuf governed Iraq with severity and is remembered both for repression and for administrative and Qur’anic reforms.`,
      `Umayyad armies conquered North Africa, crossed into Iberia in 711 and reached Sind in the same period; the conquests were often negotiated rather than purely military.`,
      `Umar ibn Abd al-Aziz (717–720) attempted tax and conversion reforms and is widely respected across the schools.`,
      `The dynasty fell in 750 to the Abbasid revolution, which drew on Khurasani, mawali and Shi‘i grievances.`
    ],
    sections: [
      {
        id: 'why-the-umayyads-matter',
        heading: 'Why the Umayyads Matter',
        html: P(`The Umayyads matter because they turned a community into an empire with a professional state. They inherited the Rashidun’s conquests but not their consensus, and they had to govern millions of non-Muslims, a growing number of converts and a military aristocracy that expected rewards. Their solutions — a hereditary monarchy, a Syrian power base, a standing army and a sophisticated bureaucracy — shaped the Islamic state for centuries.`) +
          P(`They also matter because the religious and political divisions of the modern Muslim world took shape under their rule. The killing of Husayn at Karbala in 680 became the founding martyrdom of Shi‘i devotion. The Kharijite revolts produced a tradition of radical piety and rebellion. The Sunni compromise of obedience to the ruler and patience under injustice was formulated partly in response to Umayyad power.`) +
          P(`Finally, the Umayyads matter for the history of art, architecture and administration. The Dome of the Rock, the Great Mosque of Damascus, the desert palaces and the first Islamic coins are their creations. They borrowed from Byzantine and Sasanian models and transformed them into something new.`)
      },
      {
        id: 'from-civil-war-to-dynasty',
        heading: 'From Civil War to Dynasty',
        html: P(`When Ali was killed in 661, Mu‘awiya was the strongest figure in the community. He had governed Syria for nearly twenty years, commanded a loyal army and controlled the revenues of a rich province. He received the bay‘ah in Kufa and moved the seat of government to Damascus. The capital shift was symbolic as well as practical: the centre of gravity of the empire had moved to the Mediterranean and the Fertile Crescent.`) +
          P(`Mu‘awiya’s most consequential decision was to nominate his son Yazid as his successor. The nomination turned the caliphate into a dynasty and bypassed the tradition of consultation. It was accepted by many, resisted by others and condemned by later jurists who preferred the Rashidun model. The change was not simply personal ambition; it reflected a genuine fear that without a designated successor the community would fall into another civil war.`) +
          P(`The fear was justified. When Mu‘awiya died in 680, Yazid’s succession was contested by Husayn ibn Ali, the Prophet’s grandson, and by Abdullah ibn al-Zubayr. Husayn was killed at Karbala in Iraq with a small group of family members and supporters. The event became the central tragedy of Shi‘i Islam and a moral indictment of dynastic power that Sunnis also remember with grief.`) +
          NOTE(`<strong>Source caution.</strong> The Karbala narratives were shaped by later devotion and polemic. The killing itself is established; the detailed speeches and the exact sequence of the days are preserved in sources written much later.`)
      },
      {
        id: 'muawiya-the-pragmatic-founder',
        heading: 'Mu‘awiya: The Pragmatic Founder',
        html: P(`Mu‘awiya is one of the most misjudged figures in Islamic history. Later sources portray him as a cunning king who corrupted the caliphate, and there is truth in the charge that he replaced consultation with dynasty. But he was also a capable administrator who ended a civil war, restored unity and managed the empire’s rival factions with a combination of generosity and ruthlessness.`) +
          P(`He made peace with Hasan ibn Ali, Ali’s son, who abdicated his claim in return for a pension and a quiet life. The agreement, often called the year of unity, was praised by many contemporaries as a mercy for the community. Mu‘awiya also developed the Syrian army, the navy and the frontier defences against Byzantium. He raided Byzantine territory and even besieged Constantinople, though the campaign failed.`) +
          NOTE(`<strong>Source caution.</strong> The portrait of Mu‘awiya as a “king” rather than a caliph comes largely from Abbasid-era historians. Some earlier reports are more favourable, and modern scholars have argued for a more balanced assessment.`)
      },
      {
        id: 'damascus-and-the-shape-of-the-state',
        heading: 'Damascus and the Shape of the State',
        html: P(`Damascus was a Byzantine city with a Greek-speaking bureaucracy, a Christian population and a sophisticated tax system. The Umayyads kept much of that machinery and adapted it. The diwan continued to be staffed by Greek and Coptic officials for decades, and the coinage initially imitated Byzantine models. Abd al-Malik’s reforms in the 690s replaced the imagery with Arabic inscriptions and a new gold dinar.`) +
          P(`The Arabisation of the administration was gradual. It was driven by the need to integrate the empire and by the growing confidence of a generation that no longer saw itself as a provincial offshoot of Byzantium. The change did not happen overnight, and local languages continued in the provinces. But the long-term effect was a state whose official culture was Arabic and Islamic.`) +
          P(`The Dome of the Rock, completed in the 690s, is the most visible monument of that confidence. Its inscriptions are the earliest dated Qur’anic quotations in architecture, and its design deliberately rivals the Christian shrines of Jerusalem. The Great Mosque of Damascus, built on the site of a church, made a similar claim: the new faith had arrived and would build in the language of empire.`) +
          NOTE(`<strong>Source caution.</strong> The dating and patronage of the Dome of the Rock are established by its inscriptions. The interpretation of its political meaning is debated among art historians.`)
      },
      {
        id: 'the-arab-kingdom-thesis',
        heading: 'The “Arab Kingdom” Thesis and Its Critics',
        html: P(`Nineteenth- and early twentieth-century scholars described the Umayyad state as an “Arab kingdom”: a regime in which a Arab military aristocracy ruled over non-Arab converts and non-Muslim subjects, and in which conversion was discouraged because it reduced tax revenue. The thesis was developed by Julius Wellhausen and others and became a standard account.`) +
          P(`Later scholarship complicated it. The administration was not uniformly hostile to converts, and the fiscal system was more flexible than the thesis suggested. Some governors encouraged conversion; others penalised it. The category of mawali — non-Arab clients — was not a single underclass but a varied group that included scholars, soldiers and administrators.`) +
          P(`What remains true is that the Umayyad state was Arab in its ruling elite, its language of power and its military structure. Arabs received higher stipends, held the highest offices and dominated the court. Converts had to attach themselves to an Arab tribe as clients, and their status was inferior. That hierarchy generated resentment, and the resentment became a political resource for the Abbasids.`) +
          NOTE(`<strong>Source caution.</strong> The “Arab kingdom” model is a modern historiographical construct, not a contemporary description. It captures real inequalities but oversimplifies a diverse and changing administration.`)
      },
      {
        id: 'the-second-fitna',
        heading: 'The Second Fitna and the Counter-Caliphate',
        html: P(`The second fitna began with Yazid’s accession in 680 and lasted until 692. It had three centres: Karbala, where Husayn was killed; Madinah, where the people revolted and were defeated at al-Harrah; and Makkah, where Abdullah ibn al-Zubayr declared himself caliph and was recognised by much of the Hijaz, Iraq, Egypt and Yemen.`) +
          P(`Ibn al-Zubayr was a grandson of Abu Bakr and a son of al-Zubayr ibn al-Awwam. He controlled the holy cities and presented himself as the defender of the Prophet’s family and the opponent of Umayyad impiety. The Umayyads besieged Makkah and damaged the Ka‘bah, an act that deepened their unpopularity. For a decade the empire had two competing caliphates.`) +
          P(`The civil war ended with the Marwanid branch of the Umayyads, based in Syria, defeating Ibn al-Zubayr and killing him in 692. Abd al-Malik then rebuilt the state, reformed the coinage and restored unity. The cost was high: the sanctuary had been violated, the Prophet’s grandson had been killed and the community had been divided for more than a decade.`) +
          NOTE(`<strong>Source caution.</strong> The second fitna is reported in al-Tabari and al-Baladhuri. The chronology is difficult because different sources date the key events differently, and the article follows the most common sequence.`)
      },
      {
        id: 'al-hajjaj-and-iraq',
        heading: 'Al-Hajjaj and the Governance of Iraq',
        html: P(`Al-Hajjaj ibn Yusuf was appointed governor of Iraq in 694 and governed it for twenty years with a severity that became proverbial. He crushed the Kharijite revolts, suppressed Ibn al-Zubayr’s supporters and imposed order on a province that had been in turmoil for a generation. His methods included mass executions, collective punishment and the intimidation of the religious scholars.`) +
          P(`He was also an administrator of consequence. He supervised the vowel markings of the Qur’anic codex, which made the text easier to read for non-Arabs. He founded the city of Wasit as a garrison and administrative centre. He reorganised the tax system and promoted public works. The sources that condemn his cruelty also record his effectiveness.`) +
          P(`Al-Hajjaj illustrates a central problem of the Umayyad state: it depended on strongmen who could hold provinces together, and those strongmen often ruled by fear. When a strongman died or fell, the province reverted to factionalism. The dynasty never solved the problem of governing Iraq, and Iraq became the base of the revolution that destroyed it.`) +
          NOTE(`<strong>Source caution.</strong> The reports of al-Hajjaj’s cruelty are numerous and come from sources hostile to the Umayyads. Some are corroborated by independent evidence; others may be exaggerated. The article does not repeat the most lurid anecdotes as fact.`)
      },
      {
        id: 'the-great-conquests',
        heading: 'The Great Conquests: Africa, Iberia and Sind',
        html: P(`The Umayyad period saw the furthest extension of the Arab conquests. In North Africa, Uqba ibn Nafi founded Qayrawan in 670 and raided as far as the Atlantic; the region was not fully subdued until the early eighth century. In 711 Tariq ibn Ziyad crossed the strait that now bears his name and defeated the Visigothic kingdom in a campaign that within a few years brought most of Iberia under Muslim rule.`) +
          P(`In the east, Muhammad ibn Qasim conquered Sind in 711–712, establishing a Muslim presence in the Indian subcontinent. In Transoxiana, Qutayba ibn Muslim extended Umayyad authority beyond the Oxus. The conquests were not a single coordinated wave; they were a series of campaigns led by governors with local resources and local agendas.`) +
          P(`The terms varied. Some cities were taken by treaty, others by force. In Iberia, the sources describe a mixture of Visigothic collapse, local alliances and military victory. In Sind, Muhammad ibn Qasim is remembered for granting religious freedom to Hindus and Buddhists and for integrating local elites into the administration. The details are preserved in later sources and should be read with caution.`) +
          NOTE(`<strong>Source caution.</strong> The conquest of Iberia is reported in Ibn Abd al-Hakam and later Arabic sources, and in Latin chronicles written centuries later. The numbers and the details of the battles are unreliable; the broad outline is not.`)
      },
      {
        id: 'umar-ii-and-reform',
        heading: 'Umar II and the Reform Impulse',
        html: P(`Umar ibn Abd al-Aziz, known as Umar II, ruled from 717 to 720 and is the one Umayyad caliph whom almost every later tradition praises. He was a scholar and a pious man, and he attempted to reverse some of the policies that had made the dynasty unpopular. He withdrew the tax penalties on converts, restored confiscated property and reduced the luxury of the court.`) +
          P(`His fiscal reforms were the most important. He ruled that converts should not be taxed as if they were still non-Muslims, and he tried to put the jizya on a consistent footing. The reforms reduced revenue in the short term and were resisted by governors. They also revealed a tension that the dynasty never resolved: the empire’s finances depended on a tax distinction between Muslims and non-Muslims, and mass conversion eroded that distinction.`) +
          P(`Umar II died after less than three years in office. His brief reign became a symbol of what the Umayyads might have been, and later historians used him as a reproach to his successors. Whether his policies could have saved the dynasty is impossible to know, but they show that the Umayyad state was not monolithically oppressive.`) +
          NOTE(`<strong>Source caution.</strong> The reports of Umar II’s reforms are preserved in al-Tabari and the biographical works. The fiscal details are debated, and the article describes the direction of reform rather than a precise budget.`)
      },
      {
        id: 'the-third-fitna-and-the-revolution',
        heading: 'The Third Fitna and the Abbasid Revolution',
        html: P(`The dynasty’s final crisis began in the 740s. The Berber revolt in North Africa, the Kharijite insurrections in Iraq and the rivalry within the Umayyad family weakened the state. In Khurasan, a movement led by Abu Muslim raised the black banners of the Abbasids and called for a ruler from the Prophet’s family. The slogan was deliberately ambiguous: it could mean the Alids or the Abbasids, and it attracted both.`) +
          P(`The Abbasid army marched west, took Kufa in 749 and defeated Marwan II at the Battle of the Zab in 750. Marwan fled to Egypt and was killed. The new dynasty hunted down the surviving Umayyads, and one prince, Abd al-Rahman, escaped to Iberia, where he founded the Umayyad emirate of Córdoba. The revolution was not a simple change of dynasty; it was a coalition of the excluded — mawali, Khurasanis, Shi‘i sympathisers and provincial elites — that then had to be held together.`) +
          P(`The Abbasids presented their victory as the restoration of justice and the end of kingly rule. In practice they built a more centralised and more elaborate monarchy than the Umayyads had ever done. The rhetoric of the revolution and the reality of the new state were different things, and the gap between them is one of the themes of Abbasid history.`) +
          NOTE(`<strong>Source caution.</strong> The revolution is reported in al-Tabari and in the Abbasid court histories. The role of Abu Muslim and the promises made to the Alids are debated, and the sources are shaped by the need to legitimise the new dynasty.`)
      },
      {
        id: 'the-umayyads-in-memory',
        heading: 'The Umayyads in Memory',
        html: P(`The Umayyads are remembered as the dynasty that turned the caliphate into a monarchy. That charge is substantially true, but it is not the whole story. They also created the administrative and architectural foundations of Islamic civilisation, defended the frontiers, expanded the empire and produced the first great monuments of Islamic art. Their reputation suffered because their successors wrote the history.`) +
          P(`Modern scholarship has rehabilitated parts of the Umayyad record without denying its violence. The dynasty’s treatment of the Prophet’s family, the killing of Husayn, the siege of Makkah and the repression of Iraq are not inventions of Abbasid propaganda. They are part of the record and must be named. The question is whether they define the dynasty entirely, and the answer is no.`)
      },
      {
        id: 'art-and-architecture',
        heading: 'Art, Architecture and the Desert Palaces',
        html: P(`Umayyad architecture is the first distinctively Islamic architecture. The Dome of the Rock in Jerusalem, the Great Mosque of Damascus and the desert palaces of Syria and Jordan combine Byzantine, Sasanian and local traditions into a new visual language. The palaces, such as Qusayr Amra and Mshatta, preserve frescoes, mosaics and carved facades that show a court culture of considerable sophistication.`) +
          NOTE(`<strong>Source caution.</strong> The interpretation of Umayyad palace imagery is contested. The article describes the monuments and the range of scholarly readings without endorsing one.`)
      },
      {
        id: 'lessons-and-the-limits',
        heading: 'Lessons and the Limits of the Sources',
        html: P(`The Umayyad experience teaches three lessons. The first is that legitimacy is not only a matter of power: a ruler who wins the battle but loses the moral argument will be remembered badly, and the memory has political consequences. The second is that empire requires institutions, and the Umayyads built them even when their politics were unstable. The third is that exclusion is expensive: the dynasty’s treatment of converts, non-Arabs and the Prophet’s family created the coalition that destroyed it.`) +
          P(`The limits of the sources are serious. The Abbasid historians had every reason to blacken the Umayyads, and the surviving Umayyad-friendly sources are few. Archaeology, inscriptions, coins and architecture provide an independent check, and they often show a more complex picture than the literary tradition. A responsible account uses both.`) +
          P(`The best way to remember the Umayyads is neither to idealise them as the last Arab caliphs nor to reduce them to a dynasty of tyrants. They were a ruling family that inherited a revolution, built a state and lost it. Their monuments still stand, their coins still circulate in museums and their conflicts still shape the way Muslims argue about power.`) +
          NOTE(`<strong>Editorial note:</strong> this article distinguishes the early chronicles, the Abbasid-era literary tradition, the material evidence and modern historiography. It does not present the Abbasid portrait of the Umayyads as neutral fact.`)
      }
    ],
    faqs: [
      { q: 'Who founded the Umayyad dynasty?', a: 'Mu‘awiya ibn Abi Sufyan, who became caliph in 661 after the death of Ali and moved the capital to Damascus. He had governed Syria for nearly twenty years and was the strongest figure in the community.' },
      { q: 'Why is Karbala important?', a: 'Husayn ibn Ali, the Prophet’s grandson, was killed at Karbala in 680 after refusing to give allegiance to Yazid. The event became the central martyrdom of Shi‘i Islam and a moral indictment of dynastic power that Sunnis also remember with grief.' },
      { q: 'What did Abd al-Malik accomplish?', a: 'He ended the second fitna, rebuilt the state, Arabised the administration, reformed the coinage and completed the Dome of the Rock. His reign is the turning point from a conquest state to a settled empire.' },
      { q: 'Was Umar II an Umayyad?', a: 'Yes. Umar ibn Abd al-Aziz was a member of the Umayyad family and ruled from 717 to 720. He is widely praised for his piety and for attempting tax and conversion reforms, and he is the one Umayyad caliph whom almost every later tradition honours.' },
      { q: 'How did the Umayyad dynasty end?', a: 'It fell in 750 to the Abbasid revolution, which drew on Khurasani, mawali and Shi‘i grievances. Marwan II was defeated at the Battle of the Zab, and one Umayyad prince, Abd al-Rahman, escaped to Iberia and founded the emirate of Córdoba.' }
    ],
    bibliography: [
      `The Qur’an — especially 59:7 on the distribution of wealth and 4:59 on authority. Translations adapted from Saheeh International unless stated.`,
      `Sahih al-Bukhari and Sahih Muslim — the reports on the Prophet’s family and the warnings against sedition.`,
      `Al-Tabari, <em>Tarikh al-Rusul wa al-Muluk</em> — the second and third fitnas, the conquests and the revolution of 750.`,
      `Al-Baladhuri, <em>Futuh al-Buldan</em> — the provincial conquests, treaties and tax arrangements.`,
      `Ibn Abd al-Hakam, <em>Futuh Misr wa Akhbaruha</em> — North Africa and the conquest of Iberia.`,
      `Ibn al-Athir, <em>al-Kamil fi al-Tarikh</em> — a later synthesis with additional reports.`,
      `Ibn Kathir, <em>al-Bidayah wa al-Nihayah</em>, and al-Dhahabi, <em>Siyar A‘lam al-Nubala</em> — biographical and grading material.`,
      `Hugh Kennedy, <em>The Prophet and the Age of the Caliphates</em>; Chase Robinson, <em>Empire and Elites after the Muslim Conquest</em>; Gerald Hawting, <em>The First Dynasty of Islam</em> — modern critical accounts.`,
      `Oleg Grabar, <em>The Shape of the Holy</em> — the Dome of the Rock and early Islamic Jerusalem.`
    ],
    related: [
      ...relatedBase,
      { href: 'rightly-guided-caliphs-succession-and-expansion.html', label: 'The Rightly Guided Caliphs: succession and expansion' },
      { href: 'abbasids-baghdad-and-the-fragmentation.html', label: 'The Abbasids: Baghdad and fragmentation' },
      { href: 'al-andalus-cordoba-taifas-and-convivencia.html', label: 'Al-Andalus: Córdoba, the taifas and convivencia' },
      { href: 'ali-the-gate-of-knowledge-and-the-fitna.html', label: 'Ali: the gate of knowledge and the fitna' },
      { href: '../history.html', label: 'History eras library' }
    ]
  },
  {
    slug: 'abbasids-baghdad-and-the-fragmentation',
    title: 'The Abbasids: Baghdad, the Translation Movement and the Fragmentation of the Caliphate',
    metaTitle: 'The Abbasid Caliphate: Baghdad, Harun al-Rashid, the Mihna and the Mongol Sack of 1258',
    description: 'The Abbasid caliphate from the revolution of 750 to the sack of Baghdad in 1258: the Round City, the Barmakids, Harun al-Rashid, the translation movement, paper and commerce, the mihna of Ibn Hanbal, the rise of the Buyids and Seljuks, the Nizamiyya and the limits of the “golden age”.',
    category: 'History',
    readTime: '15 min',
    intro: P(`The Abbasids ruled the Muslim world for five centuries, longer than any other caliphate, and their name is attached to the most celebrated period of Islamic civilisation. Baghdad, founded in 762, became the largest city in the world outside China, a centre of trade, scholarship and administration. The translation of Greek, Persian and Indian learning into Arabic, the development of paper, the growth of a commercial economy and the flowering of literature all belong to their era.`) +
      P(`The Abbasids are also the dynasty that lost control of its own empire. By the middle of the tenth century the caliph was a figurehead under the protection of the Buyids, and by the eleventh he was a client of the Seljuks. The caliphate survived as a symbol of religious authority long after it had ceased to govern. In 1258 the Mongols sacked Baghdad and killed the last caliph, and the institution never recovered its central place.`) +
      P(`This article follows the Abbasids from the revolution of 750 to the catastrophe of 1258. It treats the “golden age” as a real achievement and as a selective memory: the same period produced the mihna, the enslavement of millions, sectarian violence and the fragmentation of political authority.`),
    keyTakeaways: [
      `The Abbasid revolution of 750 overthrew the Umayyads and established a new dynasty based in Iraq.`,
      `Baghdad was founded by al-Mansur in 762 as a round city and became the administrative and commercial capital of the empire.`,
      `Harun al-Rashid (786–809) is the most famous Abbasid caliph, but his reign ended in a civil war between his sons.`,
      `The translation movement rendered Greek, Persian and Indian works into Arabic and shaped the intellectual tradition of the Islamic world.`,
      `The mihna, a caliphal inquisition over the createdness of the Qur’an, was imposed by al-Ma’mun in 833 and ended under al-Mutawakkil.`,
      `Paper, credit and long-distance trade transformed the urban economy and made Baghdad a commercial hub.`,
      `Political power fragmented: the Buyids took Baghdad in 945, the Seljuks in 1055, and the caliph became a symbolic figure.`,
      `The Mongols sacked Baghdad in 1258, killing the caliph and ending the Abbasid caliphate in its historic capital.`
    ],
    sections: [
      {
        id: 'why-the-abbasids-matter',
        heading: 'Why the Abbasids Matter',
        html: P(`The Abbasids matter because they presided over the formation of classical Islamic civilisation. The schools of law, the science of hadith, the systematisation of theology, the codification of Arabic grammar and the great works of geography and history all took shape under their rule. The culture that later generations called Islamic was largely an Abbasid creation, even where its roots were older.`) +
          P(`They also matter because their history exposes the gap between the ideal of the caliphate and the reality of politics. The Abbasids came to power promising to restore the Prophet’s family and to end kingly rule. Within a century they had built a court of immense wealth, a bureaucracy staffed by secretaries and a monarchy that resembled the empires they had replaced. The tension between the promise and the practice is the theme of their history.`) +
          P(`Finally, the Abbasids matter for the history of knowledge. The translation movement, the paper revolution and the growth of libraries and madrasas created an intellectual infrastructure that outlasted the dynasty. The works produced in Baghdad, Kufa, Basra, Nishapur and Cairo were studied in Europe, Africa and Asia for centuries.`)
      },
      {
        id: 'the-revolution-of-750',
        heading: 'The Revolution of 750',
        html: P(`The Abbasid revolution began in Khurasan, a province that had been a source of discontent for the Umayyads. Abu Muslim, a mysterious and gifted organiser, mobilised the local Arabs and Iranians with black banners and a message of justice. The movement claimed to restore the rights of the Prophet’s family, a slogan broad enough to attract Alids, mawali and provincial elites who wanted a change.`) +
          P(`The Umayyad army was defeated at the Battle of the Zab in 750, and Marwan II was killed in Egypt. The new caliph, Abu al-Abbas al-Saffah, ordered the extermination of the Umayyad family. One prince, Abd al-Rahman ibn Mu‘awiya, escaped across North Africa to Iberia, where he founded a rival Umayyad state. The Abbasids moved the capital from Damascus to Iraq, first to Kufa and then to a new city.`) +
          P(`The revolution did not deliver what all its supporters expected. The Alids, who had hoped for a caliph from their line, were sidelined. Abu Muslim, who had made the revolution possible, was killed by the second Abbasid caliph, al-Mansur. The new dynasty was more centralised and more bureaucratic than the old one, and it claimed a religious authority that the Umayyads had never asserted so explicitly.`) +
          NOTE(`<strong>Source caution.</strong> The revolution is reported in al-Tabari and in the Abbasid court histories, which were written to legitimise the new dynasty. The promises made to the Alids and the role of Abu Muslim are debated.`)
      },
      {
        id: 'baghdad-the-round-city',
        heading: 'Baghdad and the Round City',
        html: P(`Al-Mansur founded Baghdad in 762 on the west bank of the Tigris, at a point where the river and the canals connected the Fertile Crescent with the Gulf and the Iranian plateau. The city was laid out as a circle, with the caliph’s palace and the great mosque at the centre, the administrative quarters around them and the residential districts outside. The design expressed a cosmology of power: the ruler at the centre, the world arranged around him.`) +
          P(`Baghdad grew rapidly. Within a generation it was a metropolis of markets, workshops, libraries and immigrant communities. It attracted merchants from China, India, Central Asia, Byzantium and Africa, and it became the hub of a commercial network that stretched across the hemisphere. The city’s population is impossible to establish precisely, but it was certainly one of the largest in the world.`) +
          P(`The Round City itself did not survive as a single unit; the city expanded into suburbs on both banks of the Tigris. But the idea of Baghdad as the centre of the world persisted in geography, literature and political imagination. It is the city of the Thousand and One Nights, of the House of Wisdom and of the caliphs who could summon the scholars of the age.`) +
          NOTE(`<strong>Source caution.</strong> The foundation narratives are preserved in al-Tabari and later geographers. The archaeological evidence is limited because the city has been continuously inhabited and rebuilt.`)
      },
      {
        id: 'the-barmakids-and-the-court',
        heading: 'The Barmakids and the Court',
        html: P(`The early Abbasid state was run by a small number of powerful families, and the most famous were the Barmakids, a Persian family of Buddhist origin that had converted to Islam. Khalid ibn Barmak and his sons served as viziers, governors and tutors to princes. They accumulated enormous wealth and influence, and they became the model of the courtier-administrator in Arabic literature.`) +
          P(`The family’s fall in 803 is one of the great mysteries of Abbasid history. Harun al-Rashid ordered the execution of Ja‘far ibn Yahya and the imprisonment of his father and brothers. The sources offer several explanations: the family’s excessive power, their sympathy for the Alids, a romantic scandal involving Harun’s sister, or a combination of these. The truth is probably political: the Barmakids had become too powerful to be safe.`) +
          NOTE(`<strong>Source caution.</strong> The causes of the Barmakid fall are disputed. The romantic story of Ja‘far and the caliph’s sister is a literary embellishment and should not be treated as established fact.`)
      },
      {
        id: 'harun-al-rashid',
        heading: 'Harun al-Rashid and the Image of the Golden Age',
        html: P(`Harun al-Rashid ruled from 786 to 809 and became the most famous caliph in the world. His court was wealthy, his armies powerful and his empire vast. He corresponded with Charlemagne, exchanged gifts with Byzantium and patronised poets, jurists and musicians. The image of Harun in later literature is a symbol of the splendour of the Abbasid age.`) +
          P(`The reality was more complicated. Harun’s reign ended in a civil war between his sons al-Amin and al-Ma’mun, a conflict that devastated Baghdad and weakened the dynasty. He also presided over a court whose luxury was condemned by pious critics, and his treatment of the Alids and the Barmakids was ruthless. The golden age was golden for some and dangerous for others.`) +
          NOTE(`<strong>Source caution.</strong> The Thousand and One Nights is a later literary compilation with many layers. It is not a source for Abbasid history, and its depiction of Harun is fictional.`)
      },
      {
        id: 'the-translation-movement',
        heading: 'The Translation Movement',
        html: P(`The Abbasid era produced the largest translation project in pre-modern history. Greek works of philosophy, medicine, mathematics and astronomy were translated into Arabic, along with Persian and Indian texts. The movement was not confined to one institution or one reign; it was a broad, century-long effort sponsored by caliphs, viziers, courtiers and scholars.`) +
          P(`Hunayn ibn Ishaq, a Christian physician and translator of the ninth century, is the most famous figure of the movement. His translations of Galen and Hippocrates became standard texts in both the Islamic world and, later, in Latin Europe. The mathematicians of Baghdad absorbed Indian numerals and Greek geometry, and the result was the algebra of al-Khwarizmi and the trigonometry of later scholars.`) +
          P(`The “House of Wisdom” is often described as a research academy founded by al-Ma’mun. Modern scholarship suggests that it was more likely a palace library and translation bureau, and that the story of a single institution of higher learning is a later simplification. The translation movement was real; the bureaucratic details are not.`) +
          NOTE(`<strong>Source caution.</strong> The nature of the Bayt al-Hikma is debated. Dimitri Gutas and other scholars have argued that it was a library rather than a research academy. The article follows that more cautious reading.`)
      },
      {
        id: 'paper-and-commerce',
        heading: 'Paper, Commerce and the Urban Economy',
        html: P(`Paper reached the Islamic world from China, probably through Central Asia after the Battle of Talas in 751. By the end of the eighth century there were paper mills in Baghdad, and by the tenth century paper had largely replaced papyrus and parchment for administrative and scholarly use. The change was as important as the printing press would later be in Europe: it made books cheaper and knowledge more portable.`) +
          P(`The Abbasid economy was commercial and urban. Basra and Baghdad were connected to the Indian Ocean trade, the Silk Road and the Mediterranean. Merchants used credit, letters of exchange and partnerships to conduct business across vast distances. The word “cheque” derives from the Arabic sakk, and the commercial vocabulary of the period survives in many languages.`) +
          P(`The wealth of the cities coexisted with poverty, slavery and inequality. The Abbasid economy depended on enslaved labour in agriculture, domestic service and the army, and the Zanj rebellion of the ninth century was a massive revolt of enslaved East Africans in southern Iraq. The golden age was built on a social order that was not golden for everyone.`) +
          NOTE(`<strong>Source caution.</strong> The scale of the Abbasid economy is difficult to quantify. The article describes the structures and the direction of trade rather than offering precise figures.`)
      },
      {
        id: 'the-mihna',
        heading: 'The Mihna and the Limits of Caliphal Power',
        html: P(`The mihna was an inquisition instituted by al-Ma’mun in 833. The caliph adopted the theological position that the Qur’an was created rather than uncreated, and he required judges and scholars to affirm it. Those who refused were dismissed, imprisoned or flogged. The most famous resister was Ahmad ibn Hanbal, the founder of the Hanbali school, who was beaten and imprisoned for his refusal.`) +
          P(`The mihna was not primarily a philosophical dispute. It was a test of whether the caliph had the authority to define doctrine and to impose his definition on the scholars. The scholars resisted, and the resistance established a principle that became central to Sunni Islam: the caliph may enforce the law, but he does not define creed.`) +
          P(`The policy was reversed by al-Mutawakkil in the 840s, and the episode became a cautionary tale about the dangers of state interference in theology. It also shaped the relationship between rulers and scholars for centuries. The ulama emerged from the mihna with greater moral authority than the caliph, and that authority would outlast the dynasty.`) +
          NOTE(`<strong>Source caution.</strong> The mihna is reported in al-Tabari and in the biographical works on Ibn Hanbal. The theological positions involved are complex, and the article simplifies them deliberately.`)
      },
      {
        id: 'fragmentation',
        heading: 'Fragmentation: Samanids, Buyids and Fatimids',
        html: P(`The Abbasid empire began to fragment in the ninth century. The Tahirids in Khurasan, the Samanids in Transoxiana, the Tulunids in Egypt and the Hamdanids in Syria became effectively independent. The caliph retained symbolic authority and the revenues of Iraq, but he could no longer command the provinces.`) +
          P(`In 945 the Buyids, a Shi‘i dynasty from the Caspian region, took Baghdad and placed the caliph under their protection. They kept him as a figurehead and ruled in his name. In 969 the Fatimids, an Isma‘ili dynasty based in Tunisia, conquered Egypt and founded Cairo as a rival caliphate. For a century there were three caliphs: the Abbasid in Baghdad, the Fatimid in Cairo and the Umayyad in Córdoba.`) +
          P(`The fragmentation was not simply a political failure. It produced a remarkable cultural flourishing in the regional courts. The Samanids patronised Persian literature, the Buyids supported philosophy and the Fatimids built Cairo and patronised the sciences. The Abbasid caliphate lost power, but the Islamic world gained a plurality of centres.`) +
          NOTE(`<strong>Source caution.</strong> The term “caliphate” in this period covers very different institutions. The article uses it for the office and distinguishes the rival claims where necessary.`)
      },
      {
        id: 'the-seljuks-and-the-sunni-revival',
        heading: 'The Seljuks, the Nizamiyya and the Sunni Revival',
        html: P(`In 1055 the Seljuk Turks entered Baghdad and ended Buyid rule. The Seljuk sultan Tughril Beg was a Sunni Muslim who presented himself as the protector of the caliph. The relationship was unequal: the sultan held the army and the caliph held the legitimacy. The arrangement became the model for later Turkish and Persian states.`) +
          P(`The Seljuks patronised the madrasa, a new institution of higher learning that spread across the Islamic world. The most famous was the Nizamiyya in Baghdad, founded by the vizier Nizam al-Mulk in 1065. Its teachers included al-Ghazali, whose works on theology, law and Sufism became foundational for Sunni Islam.`) +
          P(`The Sunni revival was not only an intellectual movement. It was also a political programme: the Seljuks and their successors supported Sunni scholarship, built madrasas and suppressed Isma‘ili and Shi‘i movements where they could. The result was a more institutionalised and more uniform Sunni orthodoxy than had existed before.`) +
          NOTE(`<strong>Source caution.</strong> The history of the madrasa is complex, and the Nizamiyya was not the first institution of its kind. The article presents it as the most famous example of a broader movement.`)
      },
      {
        id: 'the-late-caliphate-and-1258',
        heading: 'The Late Caliphate and the Sack of Baghdad',
        html: P(`For two centuries after the Seljuk conquest, the Abbasid caliph was a symbolic figure. He conferred legitimacy on sultans, appointed judges and presided over court ceremonies. The caliphate had become an institution of religious authority without political power, and its survival depended on the goodwill of the military rulers around it.`) +
          P(`In 1258 the Mongol army of Hulagu Khan besieged and sacked Baghdad. The caliph al-Musta‘sim was killed, the city was plundered and burned, and the population was massacred. The sack is one of the most traumatic events in Islamic history, and it is often described as the end of the Abbasid golden age.`) +
          P(`The dynasty did not disappear entirely. A surviving Abbasid prince was installed as a figurehead caliph in Cairo under the Mamluks, and the line continued until the Ottoman conquest of Egypt in 1517. But the caliphate of Baghdad, the centre of the classical Islamic world, was gone. The memory of 1258 shaped later Muslim perceptions of the Mongols and of the fragility of civilisation.`) +
          NOTE(`<strong>Source caution.</strong> The figures for the dead in 1258 are unreliable and vary wildly in the sources. The destruction was real; the numbers are not.`)
      },
      {
        id: 'what-golden-age-obscures',
        heading: 'What the “Golden Age” Obscures',
        html: P(`The phrase “golden age” is useful as a shorthand and misleading as a description. The Abbasid period produced extraordinary achievements, but it was also a time of civil war, sectarian violence, slavery, famine and epidemic. The wealth of Baghdad was built on a social order that excluded most of its inhabitants from its benefits.`) +
          P(`The golden age was also not confined to the Abbasids. The Umayyads of Córdoba, the Fatimids of Cairo, the Samanids of Bukhara and the Ghaznavids of Afghanistan all contributed to the same civilisation. The achievements of the period were the product of a network of courts, markets and scholars, not of a single dynasty.`) +
          P(`Remembering the Abbasids honestly means holding both truths: they presided over one of the most creative periods in human history, and they presided over a state that was often unjust and eventually collapsed. The two are not contradictory. They are the normal condition of empires.`) +
          NOTE(`<strong>Editorial note:</strong> this article uses “golden age” as a conventional label while insisting that the period was not uniformly prosperous or peaceful.`)
      },
      {
        id: 'lessons-and-the-limits',
        heading: 'Lessons and the Limits of the Sources',
        html: P(`The Abbasid experience teaches three lessons. The first is that knowledge requires institutions: libraries, paper, patronage and a commercial economy made the translation movement possible. The second is that political power and religious authority are different things, and confusing them is dangerous, as the mihna showed. The third is that fragmentation is not the same as decline: the regional courts of the tenth and eleventh centuries produced some of the finest works of Islamic civilisation.`) +
          P(`The limits of the sources are considerable. The Abbasid court histories were written by officials and clients of the dynasty, and they magnify its achievements and justify its decisions. The biographical dictionaries preserve the scholars’ perspective, which is often critical of the rulers. Archaeology and material culture provide a third perspective, but Baghdad’s continuous habitation has destroyed much of the evidence.`) +
          P(`The best way to remember the Abbasids is to read their scholars, not only their caliphs. The mathematicians, physicians, jurists, poets and historians of the period created works that outlived the dynasty and shaped the world. Their achievement is more durable than the empire that sponsored them.`) +
          NOTE(`<strong>Editorial note:</strong> this article distinguishes the court histories, the biographical tradition, the material evidence and modern scholarship. It does not treat the “golden age” as a period without conflict.`)
      }
    ],
    faqs: [
      { q: 'Who founded Baghdad?', a: 'The Abbasid caliph al-Mansur founded Baghdad in 762 on the Tigris. It was laid out as a round city with the caliph’s palace and the great mosque at the centre, and it became the administrative and commercial capital of the empire.' },
      { q: 'What was the translation movement?', a: 'It was a century-long effort to translate Greek, Persian and Indian works of philosophy, medicine, mathematics and astronomy into Arabic. It was sponsored by caliphs, viziers and scholars, and it produced the foundations of classical Islamic science.' },
      { q: 'What was the mihna?', a: 'The mihna was an inquisition instituted by al-Ma’mun in 833 over the createdness of the Qur’an. Scholars who refused to affirm the caliph’s position were punished. Ahmad ibn Hanbal resisted, and the episode established the principle that the caliph does not define creed.' },
      { q: 'When did the Abbasid caliphate end?', a: 'The Mongols sacked Baghdad in 1258 and killed the caliph al-Musta‘sim. A figurehead Abbasid caliphate continued in Cairo under the Mamluks until 1517, but the caliphate of Baghdad never recovered.' },
      { q: 'Was the Abbasid period a golden age?', a: 'It was a period of extraordinary achievement in science, philosophy, literature and administration, but it was also marked by civil war, sectarian violence, slavery and political fragmentation. The label is useful as shorthand and misleading as a full description.' }
    ],
    bibliography: [
      `The Qur’an — especially 4:59 on authority and 42:38 on consultation. Translations adapted from Saheeh International unless stated.`,
      `Al-Tabari, <em>Tarikh al-Rusul wa al-Muluk</em> — the revolution, the foundation of Baghdad, the mihna and the late caliphate.`,
      `Ibn al-Athir, <em>al-Kamil fi al-Tarikh</em> — a later synthesis covering the whole period.`,
      `Al-Mas‘udi, <em>Muruj al-Dhahab</em> — the court, the cities and the intellectual life of the period.`,
      `Ibn al-Nadim, <em>al-Fihrist</em> — the books and translators of the Abbasid era.`,
      `Al-Ghazali, <em>Ihya’ ‘Ulum al-Din</em> and <em>al-Munqidh min al-Dalal</em> — the intellectual and spiritual world of the Seljuk period.`,
      `Ibn Khaldun, <em>al-Muqaddima</em> — the theory of dynasties and the analysis of urban civilisation.`,
      `Dimitri Gutas, <em>Greek Thought, Arabic Culture</em>; Jonathan Berkey, <em>The Formation of Islam</em>; Hugh Kennedy, <em>When Baghdad Ruled the Muslim World</em> — modern critical accounts.`,
      `Michael Cooperson, <em>Classical Arabic Biography</em> — the literary construction of the caliphs and scholars.`
    ],
    related: [
      ...relatedBase,
      { href: 'umayyads-damascus-and-the-arab-kingdom.html', label: 'The Umayyads: Damascus and the Arab kingdom' },
      { href: 'al-andalus-cordoba-taifas-and-convivencia.html', label: 'Al-Andalus: Córdoba, the taifas and convivencia' },
      { href: 'rightly-guided-caliphs-succession-and-expansion.html', label: 'The Rightly Guided Caliphs: succession and expansion' },
      { href: 'islamic-history-civilization.html', label: 'Islamic history and civilisation: a framework' },
      { href: '../history.html', label: 'History eras library' }
    ]
  },
  {
    slug: 'al-andalus-cordoba-taifas-and-convivencia',
    title: 'Al-Andalus: Córdoba, the Taifas and the Memory of Convivencia',
    metaTitle: 'Al-Andalus: The Muslim Conquest of Iberia, the Caliphate of Córdoba, the Taifas and 1492',
    description: 'Al-Andalus from the conquest of 711 to the fall of Granada in 1492: the emirate and caliphate of Córdoba, Madinat al-Zahra, Ibn Rushd and Maimonides, the taifa kingdoms, the Almoravids and Almohads, the Reconquista, the Morisco expulsions and the modern debate over convivencia.',
    category: 'History',
    readTime: '15 min',
    intro: P(`Al-Andalus was the Muslim presence in the Iberian peninsula that lasted from 711 to 1492, and for much of that time it was the most sophisticated society in western Europe. Córdoba under the Umayyad caliphs was a city of libraries, gardens, mosques and scholars, connected to the wider Islamic world and to Latin Christendom. Its legacy is claimed by Muslims, Spaniards, Jews and Europeans, often for contradictory purposes.`) +
      P(`The story is not a simple romance. Al-Andalus was conquered by force, governed by a Muslim minority, divided by ethnic and tribal rivalries and eventually destroyed by Christian conquest and the expulsion of its Muslim and Jewish inhabitants. The idea of convivencia — the peaceful coexistence of Muslims, Christians and Jews — captures something real about the period, but it has been romanticised and, in recent decades, sharply criticised.`) +
      P(`This article follows al-Andalus from the conquest to 1492 and beyond, and it treats the memory of the period as part of its history. It does not claim that medieval Iberia was a paradise of tolerance, and it does not accept the counter-claim that it was a uniform tyranny. The evidence supports a more interesting and more human picture.`),
    keyTakeaways: [
      `Muslim armies crossed into Iberia in 711 under Tariq ibn Ziyad and defeated the Visigothic kingdom within a few years.`,
      `Abd al-Rahman I founded the Umayyad emirate of Córdoba in 756 after escaping the Abbasid revolution.`,
      `Abd al-Rahman III declared himself caliph in 929 and built Madinat al-Zahra as a new palace-city.`,
      `Córdoba became a centre of scholarship, with libraries, poets, physicians, philosophers and jurists.`,
      `The caliphate collapsed in 1031 and was replaced by the taifa kingdoms, which fought each other and paid tribute to Christian rulers.`,
      `The Almoravids (1086) and Almohads (1147) imposed stricter rule and persecuted religious minorities.`,
      `The Reconquista reduced Muslim rule to Granada, which fell in 1492; the Jews were expelled the same year and the Muslims were forced to convert or leave.`,
      `The idea of convivencia is debated: it describes real cultural exchange but obscures inequality, violence and the dhimma system.`
    ],
    sections: [
      {
        id: 'why-al-andalus-matters',
        heading: 'Why Al-Andalus Matters',
        html: P(`Al-Andalus matters because it is the place where Islamic civilisation met Latin Christendom most directly. The translation of Arabic philosophy and science into Latin, the transmission of Greek learning through Arabic, the poetry of Ibn Zaydun and al-Mu‘tamid, the philosophy of Ibn Rushd and the law of Ibn Hazm all belong to its history. Without al-Andalus, the intellectual history of medieval Europe would be different.`) +
          P(`It also matters because it is a test case for how Muslims, Christians and Jews can live together. The dhimma system gave non-Muslims a protected but subordinate status. It was not equality, and it was not genocide. It was a hierarchical arrangement that worked for long periods and broke down in others. The modern debate about convivencia is really a debate about what that arrangement meant.`) +
          P(`Finally, al-Andalus matters because its memory is contested. Spanish nationalism, Arab nationalism, Jewish memory, Islamic revivalism and European romanticism have all claimed it. The historian’s task is to recover the period’s complexity against the simplifications of all these claims.`)
      },
      {
        id: 'conquest-and-province',
        heading: 'Conquest and the Making of a Province',
        html: P(`In 711 Tariq ibn Ziyad, a Berber commander serving the Umayyad governor of North Africa, crossed the strait and defeated the Visigothic king Roderic at the Battle of Guadalete. The Visigothic kingdom was already weakened by dynastic conflict, and the Muslim armies exploited the divisions. Within a few years most of the peninsula was under Muslim control.`) +
          P(`The conquest was not a single campaign. Tariq and Musa ibn Nusayr, the governor, operated with separate armies and sometimes in competition. Local lords negotiated treaties that allowed them to keep their lands and religion in return for tribute. Some cities resisted and were taken by force; others capitulated. The result was a patchwork of arrangements rather than a uniform conquest.`) +
          P(`Al-Andalus became a province of the Umayyad caliphate, dependent on Damascus and then on Qayrawan. The Muslim settlers were a minority, divided between Arabs and Berbers, and their rivalries shaped the politics of the province. The Christian population remained large, and the Jewish communities continued to exist under the dhimma system.`) +
          NOTE(`<strong>Source caution.</strong> The conquest is reported in Ibn Abd al-Hakam and later Arabic sources, and in Latin chronicles written centuries later. The numbers and the details of the battles are unreliable; the broad outline is not.`)
      },
      {
        id: 'the-emirate-of-cordoba',
        heading: 'The Emirate of Córdoba',
        html: P(`In 756 Abd al-Rahman I, the last surviving Umayyad prince, landed in Iberia and made himself emir of Córdoba. He had escaped the Abbasid revolution and spent years in North Africa before crossing the strait. His arrival created a Umayyad state independent of Baghdad, and it gave al-Andalus a dynasty that would last for nearly three centuries.`) +
          P(`Abd al-Rahman built the Great Mosque of Córdoba, one of the masterpieces of Islamic architecture, and he fortified the city. His successors expanded the mosque, developed the irrigation system and patronised poets and scholars. The emirate was not peaceful: it faced rebellions by Berbers, Arabs and converts, and the frontier with the Christian kingdoms was a zone of raids and negotiations.`) +
          P(`The emirate’s independence was cultural as well as political. Córdoba developed its own legal and literary traditions, and its scholars travelled to the East to study and returned with books and ideas. The city became a bridge between the Islamic East and the Latin West.`) +
          NOTE(`<strong>Source caution.</strong> The early emirate is known from Arabic chronicles and from the archaeology of Córdoba. The literary anecdotes about the emirs are later compositions and should not be read as verbatim records.`)
      },
      {
        id: 'the-caliphate-of-cordoba',
        heading: 'The Caliphate of Córdoba',
        html: P(`In 929 Abd al-Rahman III declared himself caliph, breaking the last symbolic tie to Baghdad. The declaration was a response to the Fatimid caliphate in North Africa, which claimed the same title and threatened the Umayyad sphere. It was also a statement of confidence: al-Andalus was rich, powerful and culturally self-sufficient.`) +
          P(`Abd al-Rahman III built Madinat al-Zahra, a palace-city outside Córdoba, and made it the centre of a court of extraordinary splendour. He received ambassadors from Byzantium, the Holy Roman Empire and the Fatimids. His armies campaigned against the Christian kingdoms of the north and against the Fatimids in North Africa. His reign is often considered the high point of Muslim rule in Iberia.`) +
          P(`His son al-Hakam II continued the patronage of learning and expanded the library of Córdoba. The caliphate lasted until 1031, when a series of civil wars and succession disputes destroyed it. The collapse was sudden and complete: the greatest state in western Europe fragmented into a mosaic of small kingdoms.`) +
          NOTE(`<strong>Source caution.</strong> The size of the Córdoba library is often exaggerated in later sources. The article describes its importance without repeating unverifiable figures.`)
      },
      {
        id: 'scholars-and-libraries',
        heading: 'Scholars, Libraries and the Transmission of Knowledge',
        html: P(`Al-Andalus produced scholars of the first rank. Ibn Hazm (994–1064) was a jurist, theologian, logician and poet, famous for his literalist approach to law and his treatise on love. Ibn Rushd (1126–1198) was a philosopher, physician and jurist whose commentaries on Aristotle shaped Latin scholasticism. Ibn Arabi (1165–1240), though born in Murcia and buried in Damascus, belongs to the same Andalusian tradition of mystical thought.`) +
          P(`The Jewish communities of al-Andalus produced figures such as Maimonides (1138–1204), the philosopher and physician who left Córdoba as a young man and eventually settled in Egypt. His work was written in Arabic and Hebrew and became central to Jewish philosophy. The presence of Jewish and Christian scholars in the same intellectual world is one of the strongest arguments for the reality of convivencia.`) +
          P(`The transmission of knowledge to Latin Europe happened largely through translation. Toledo, conquered by Castile in 1085, became a centre where Arabic texts were translated into Latin, often with the help of Jewish and Muslim collaborators. The works of Ibn Rushd, Ibn Sina, al-Khwarizmi and others entered the European universities through this route.`) +
          NOTE(`<strong>Source caution.</strong> The translation movement in Toledo is well documented, but the popular image of a single “school of translators” oversimplifies a long and decentralised process.`)
      },
      {
        id: 'convivencia-the-debate',
        heading: 'Convivencia: The Debate',
        html: P(`The term convivencia was popularised by the Spanish philologist Américo Castro and later by María Rosa Menocal, whose book The Ornament of the World presented al-Andalus as a model of tolerance and cultural exchange. The image is attractive, and it has been used to promote interfaith dialogue and to criticise modern intolerance.`) +
          P(`Critics have argued that the image is romanticised. The dhimma system was hierarchical: non-Muslims paid a special tax, could not bear arms, had to distinguish themselves in public and were excluded from the highest offices. There were periods of persecution, including the Almohad forced conversions and the massacre of the Jews of Granada in 1066. Coexistence was real, but it was not equality.`) +
          P(`The scholarly consensus today is more nuanced than either the romantic or the hostile account. Al-Andalus was a society of cultural exchange, translation and interdependence, and it was also a society of inequality, religious hierarchy and violence. Both facts are true, and the historian’s task is to hold them together.`) +
          NOTE(`<strong>Source caution.</strong> The debate over convivencia is a modern historiographical controversy. The article presents the main positions without adopting a political agenda.`)
      },
      {
        id: 'the-taifa-kingdoms',
        heading: 'The Taifa Kingdoms and the Fragmentation',
        html: P(`After the collapse of the caliphate in 1031, al-Andalus fragmented into more than twenty small kingdoms, known as the taifas. The most important were Seville, Toledo, Zaragoza, Badajoz, Granada and Valencia. They competed with each other, patronised poets and scholars and paid tribute to the Christian kingdoms of the north.`) +
          P(`The taifas were culturally brilliant and politically weak. The courts of Seville and Zaragoza produced some of the finest poetry and philosophy of the period, and the rulers competed to attract scholars. But their divisions made them vulnerable. In 1085 Alfonso VI of Castile took Toledo, and the taifa kings called for help from the Almoravids, a Berber dynasty from North Africa.`) +
          P(`The Almoravids defeated Alfonso at the Battle of Sagrajas in 1086 and then annexed the taifas one by one. They were followed by the Almohads in the twelfth century. The period of the taifas is often seen as a golden age of Andalusian culture, but it was also a time of political fragmentation and foreign intervention.`) +
          NOTE(`<strong>Source caution.</strong> The taifa period is documented in Arabic chronicles and in the poetry of the courts. The political narrative is complicated by the shifting alliances of the period.`)
      },
      {
        id: 'almoravids-and-almohads',
        heading: 'The Almoravids and the Almohads',
        html: P(`The Almoravids were a Berber movement from the Sahara that had built an empire in North Africa. They entered Iberia in 1086 to defend the taifas against the Christian advance, and they soon took control of the peninsula. Their rule was stricter than that of the taifas, and they patronised a more austere form of Maliki law.`) +
          P(`The Almohads, who replaced them in the twelfth century, were a more radical movement. They claimed to restore the pure monotheism of the early community and they persecuted those they considered heretics. The Jewish community suffered severely, and Maimonides’ family left Córdoba during this period. The Almohads also built the great mosque of Seville and the Giralda, one of the masterpieces of Andalusian architecture.`) +
          P(`The Almohad period was not simply a time of intolerance. It was also a period of philosophical brilliance: Ibn Rushd served as a judge and physician under the Almohads, and his commentaries on Aristotle were written in their service. The relationship between political power and intellectual freedom was complicated, as it always is.`) +
          NOTE(`<strong>Source caution.</strong> The Almohad persecutions are reported in Jewish and Muslim sources. The article describes them without reducing the whole period to persecution.`)
      },
      {
        id: 'the-reconquista-and-1492',
        heading: 'The Reconquista and 1492',
        html: P(`The Christian reconquest advanced slowly over centuries. Toledo fell in 1085, Zaragoza in 1118, Córdoba in 1236 and Seville in 1248. By the end of the thirteenth century only Granada remained, a small kingdom in the south that survived for two and a half centuries by paying tribute to Castile and navigating the rivalries between the Christian kingdoms.`) +
          P(`Granada fell in January 1492. The treaty promised the Muslims their lives, property, religion and laws. Within a few years the promises were broken: the Muslim population was pressured to convert, and in 1502 Castile formally required conversion or exile. The Jews had been expelled in 1492 by the Alhambra Decree. The last Muslims, the Moriscos, were expelled from Spain between 1609 and 1614.`) +
          P(`The year 1492 is often treated as the end of convivencia. It was the end of a political order, and it was followed by the destruction of the religious diversity that had made al-Andalus distinctive. The memory of 1492 became central to both Spanish national identity and Muslim nostalgia.`) +
          NOTE(`<strong>Source caution.</strong> The Treaty of Granada and its violation are documented in Castilian and Arabic sources. The article follows the mainstream account of the expulsions.`)
      },
      {
        id: 'architecture-of-memory',
        heading: 'The Architecture of Memory',
        html: P(`The monuments of al-Andalus are among the most visited in the world. The Great Mosque of Córdoba, with its forest of columns and double arches, is one of the great buildings of Islamic architecture. The Alhambra in Granada, with its courtyards, muqarnas and inscriptions, is a masterpiece of Nasrid art. Madinat al-Zahra, the palace-city of Abd al-Rahman III, is an archaeological site that has been partially reconstructed.`) +
          P(`These buildings are not neutral. They were built by a Muslim minority to express power, piety and cultural confidence, and they were later appropriated by Christian rulers who converted mosques into cathedrals. The Mosque of Córdoba became a cathedral in 1236, and its Christian additions are part of the building’s history.`) +
          P(`The architecture of al-Andalus is also a reminder of the interconnectedness of Mediterranean culture. The horseshoe arch, the courtyard garden and the muqarnas are shared across Islamic, Christian and Jewish buildings. The visual language of the period is a language of exchange, even when the politics were violent.`) +
          NOTE(`<strong>Source caution.</strong> The interpretation of the Alhambra’s inscriptions and symbolism is a specialised field. The article describes the monuments without claiming to decode every inscription.`)
      },
      {
        id: 'al-andalus-in-modern-debate',
        heading: 'Al-Andalus in Modern Debate',
        html: P(`Al-Andalus is a battleground of modern identities. Spanish nationalism has sometimes treated it as a foreign occupation and sometimes as a national heritage. Arab nationalism has claimed it as proof of the superiority of Islamic civilisation. Jewish memory has celebrated the Golden Age of Spain while also remembering the persecutions. European romanticism turned it into a fantasy of exotic sensuality.`) +
          P(`The Islamic revivalist imagination often presents al-Andalus as a lost paradise and a warning about the dangers of division. The fall of Granada is invoked in sermons and poetry as a symbol of Muslim weakness and divine punishment. The historical record is more complicated: al-Andalus was lost through a combination of internal fragmentation, external pressure and the logic of frontier warfare.`) +
          P(`The most honest way to remember al-Andalus is to resist both nostalgia and denigration. It was a society of extraordinary cultural achievement, built on a hierarchical and sometimes violent order, destroyed by conquest and expulsion. Its legacy belongs to everyone who studies it, and no one community owns it.`) +
          NOTE(`<strong>Editorial note:</strong> this article presents the modern uses of al-Andalus as part of its history and does not adopt a nationalist or romantic position.`)
      },
      {
        id: 'lessons-and-the-limits',
        heading: 'Lessons and the Limits of the Sources',
        html: P(`Al-Andalus teaches three lessons. The first is that cultural exchange does not require equality: some of the greatest achievements of the period were produced by a society that was deeply unequal. The second is that political fragmentation is dangerous: the taifas were culturally brilliant and militarily weak, and their divisions invited conquest. The third is that memory is selective: every community remembers the parts of al-Andalus that serve its present needs.`) +
          P(`The limits of the sources are significant. The Arabic chronicles were written by courtiers and scholars, and they reflect the perspectives of the elite. The Latin and Hebrew sources provide a different view but are often polemical. Archaeology has transformed our understanding of daily life, agriculture and urbanism, but it cannot recover the inner lives of the people who lived there.`) +
          P(`The best way to remember al-Andalus is to read its poetry, its philosophy and its law, and to walk its monuments with an awareness of who built them and who was excluded from them. The result is not a simple story, but it is a true one.`) +
          NOTE(`<strong>Editorial note:</strong> this article distinguishes the Arabic chronicles, the Latin and Hebrew sources, the material evidence and modern historiography. It does not present convivencia as either a paradise or a myth.`)
      }
    ],
    faqs: [
      { q: 'When did Muslims conquer Iberia?', a: 'Muslim armies crossed the strait in 711 under Tariq ibn Ziyad and defeated the Visigothic king Roderic. Within a few years most of the peninsula was under Muslim control, though the conquest was a patchwork of treaties and campaigns rather than a single event.' },
      { q: 'What was the caliphate of Córdoba?', a: 'It was the period from 929, when Abd al-Rahman III declared himself caliph, to 1031, when the caliphate collapsed. It was the political and cultural high point of Muslim rule in Iberia, with Córdoba as one of the great cities of the world.' },
      { q: 'What is convivencia?', a: 'Convivencia is the modern term for the coexistence of Muslims, Christians and Jews in medieval Iberia. It describes real cultural exchange and interdependence, but it should not be confused with equality: non-Muslims were subordinate under the dhimma system.' },
      { q: 'When did al-Andalus end?', a: 'The kingdom of Granada fell in January 1492. The treaty promised religious rights, but within years the Muslims were pressured to convert, and the Jews had been expelled in 1492. The last Muslims, the Moriscos, were expelled between 1609 and 1614.' },
      { q: 'Was al-Andalus a golden age of tolerance?', a: 'It was a period of remarkable cultural achievement and real coexistence, but it was also hierarchical and sometimes violent. The Almohads persecuted minorities, and the dhimma system denied non-Muslims equality. The honest answer is more complicated than the slogan.' }
    ],
    bibliography: [
      `The Qur’an — especially 49:13 on the equality of believers and 2:256 on compulsion in religion. Translations adapted from Saheeh International unless stated.`,
      `Ibn Abd al-Hakam, <em>Futuh Misr wa Akhbaruha</em> — the conquest of North Africa and Iberia.`,
      `Ibn Hazm, <em>Tawq al-Hamama</em> and <em>al-Fisal fi al-Milal wa al-Ahwa’ wa al-Nihal</em> — Andalusian literature and theology.`,
      `Ibn Rushd, <em>Fasl al-Maqal</em> and the commentaries on Aristotle — philosophy and law in the Almohad period.`,
      `Al-Maqqari, <em>Nafh al-Tib</em> — the great later compilation on the history and culture of al-Andalus.`,
      `Ibn al-Khatib, <em>al-Ihata fi Akhbar Gharnata</em> — the history of Granada and its scholars.`,
      `María Rosa Menocal, <em>The Ornament of the World</em> — the influential case for convivencia.`,
      `Brian Catlos, <em>Muslims of Medieval Latin Christendom</em>; David Nirenberg, <em>Communities of Violence</em>; Roger Collins, <em>Caliphs and Kings</em> — critical and comparative studies.`,
      `Hugh Kennedy, <em>Muslim Spain and Portugal</em> — a political and administrative history.`
    ],
    related: [
      ...relatedBase,
      { href: 'umayyads-damascus-and-the-arab-kingdom.html', label: 'The Umayyads: Damascus and the Arab kingdom' },
      { href: 'abbasids-baghdad-and-the-fragmentation.html', label: 'The Abbasids: Baghdad and fragmentation' },
      { href: 'islamic-history-civilization.html', label: 'Islamic history and civilisation: a framework' },
      { href: '../history.html', label: 'History eras library' }
    ]
  }
];
