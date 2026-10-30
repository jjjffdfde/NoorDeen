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
    slug: 'madinah-society-and-first-muslim-state',
    title: 'Madinah: Society, Law and the First Muslim Polity',
    metaTitle: 'Madinah Society and the First Muslim State: The Document, the Mosque and the Community',
    description: 'How the Hijrah created a plural city: the document of Madinah, the mosque as centre, the brotherhood of Muhajirun and Ansar, the change of qibla, law and arbitration, the hypocrites, zakat and the honest question of whether Madinah was a “state”.',
    category: 'Seerah',
    readTime: '15 min',
    intro: P(`The Hijrah ended one phase of the Seerah and opened another. In Makkah the believers had been a persecuted minority without public authority. In Madinah they became responsible for a plural city: its defence, its disputes, its markets, its treaties and its poor. The change was not a change of message. It was a change of responsibility.`) +
      P(`This article examines the institutions that took shape in the first years after the Hijrah: the document of Madinah, the mosque, the brotherhood between the Muhajirun and the Ansar, the change of qibla, the administration of law and the problem of the hypocrites. It also asks a question that popular writing often answers too quickly: was Madinah a “state”? The honest answer is that it was a new kind of polity, not a modern nation-state, and the difference matters.`),
    keyTakeaways: [
      `The Prophet ﷺ was invited to Yathrib as an arbitrator, not as a conqueror; his authority began with consent and reputation.`,
      `The document of Madinah was a compact between communities, not a modern constitution; its clauses and unity are discussed by historians.`,
      `The mosque was the centre of worship, teaching, arbitration, welfare and diplomacy at once.`,
      `The brotherhood of Muhajirun and Ansar was a practical welfare arrangement, later adjusted as the community grew.`,
      `The change of qibla, the fast of Ramadan and the zakat created a distinct public identity without erasing earlier prophets.`,
      `The hypocrites were tolerated outwardly; the Prophet ﷺ refused to run an inquisition into hearts.`,
      `“State” is a useful shorthand but anachronistic if it implies bureaucracy, standing armies and monopolised violence.`
    ],
    sections: [
      {
        id: 'from-community-to-polity',
        heading: 'From Persecuted Community to Public Responsibility',
        html: P(`Yathrib was an oasis settlement with a mixed population. Two large Arab tribes, the Aws and the Khazraj, had fought a long and exhausting feud, culminating in the battle of Bu’ath shortly before the Hijrah. Several Jewish groups — including Banu Qaynuqa, Banu al-Nadir and Banu Qurayzah — lived in the town and its outskirts, with their own alliances, forts and economic interests. There were also clients, craftsmen and people with no powerful clan behind them.`) +
          P(`The Prophet ﷺ did not arrive as a conqueror. He came because delegations from the town had pledged allegiance at Aqabah and invited him to arbitrate their disputes. That detail is essential. His authority in Madinah began with consent, reputation and the expectation that he would be a fair judge. It was strengthened by revelation, by the loyalty of the Muhajirun and the Ansar, and by the practical success of his leadership, but it was not imposed by an invading army.`) +
          P(`The first acts of the new leader were telling. He built a mosque, paired the emigrants with helpers, and concluded a written agreement among the communities of the town. These were not separate “religious” and “political” projects. In the seventh-century Arabian setting, worship, law, welfare and defence were aspects of one public order, and the Prophet ﷺ was the centre of that order.`)
      },
      {
        id: 'document-of-madinah',
        heading: 'The Document of Madinah',
        html: P(`The agreement known as the document of Madinah (al-sahifah) is preserved in the Sirah of Ibn Ishaq through Ibn Hisham. It is a series of clauses rather than a single polished constitution, and scholars debate whether the text we have is one document, several documents, or a later compilation of agreements. Its broad content, however, is clear enough to describe.`) +
          P(`The document declares that the believers and Muslims of Quraysh and Yathrib, together with those who follow them, are one ummah distinct from other people. It regulates blood-money between the clans, insists that a believer must not leave another believer burdened with debt or injustice, and provides that disputes are referred to Allah and to Muhammad ﷺ. It also addresses the Jewish groups: they are to be treated as allies, they retain their religion, they share in the costs of war when fighting alongside the Muslims, and they are not to be wronged or aided against.`) +
          Q(`The Jews shall maintain their own religion and the Muslims theirs.`, `Document of Madinah, in a widely used English translation`) +
          P(`That sentence is often quoted, but the translation varies and the clause should not be read as a modern charter of secular pluralism. The agreement was a treaty of mutual obligation in a specific crisis. It assumed separate communities bound by kinship and religion, and it aimed at security, arbitration and common defence rather than at creating a neutral public square.`) +
          NOTE(`<strong>Historical caution:</strong> some clauses in the received text may be later additions, and the document’s relationship to the later expulsions of Jewish groups is disputed. This article treats it as an early compact whose general shape is reliable, not as a verbatim modern constitution.`)
      },
      {
        id: 'mosque-as-centre',
        heading: 'The Mosque as the Centre of Public Life',
        html: P(`The Prophet ﷺ built the mosque of Madinah on land that belonged to two orphans, purchased with his own wealth after the camel he was riding knelt there. The first structure was simple: mud-brick walls, palm trunks for pillars, a roof of palm branches. It was enlarged as the community grew, and the Prophet’s ﷺ own apartments adjoined it.`) +
          P(`The mosque was never only a prayer hall. It was a school where the Qur’an was recited and explained; a courtroom where disputes were heard; a shelter where the homeless companions of the Suffah slept and studied; a treasury where donations were received and distributed; a hostel for delegations; and, when necessary, a planning room for defence. The call to prayer, the adhan, gave the town a public rhythm. Reports attribute its form to a dream seen by Abdullah ibn Zayd and confirmed by Umar, but the essential practice — a public call at the fixed times — is established in the Qur’an and the earliest practice.`) +
          P(`This integration is easy to sentimentalise. It also created tensions. The mosque was a place of worship and of politics, and the Prophet ﷺ had to protect its sanctity while using it for public business. Later Islamic societies would separate these functions in different ways, sometimes sharply. Madinah represents the earliest model in which they were held together under prophetic authority.`)
      },
      {
        id: 'brotherhood',
        heading: 'The Brotherhood of Muhajirun and Ansar',
        html: P(`The emigrants from Makkah had left homes, property and businesses. Many arrived with almost nothing. The Ansar — the helpers of Madinah — were asked to receive them, and the Prophet ﷺ established a formal bond of brotherhood (mu’akhah) between pairs of Muhajirun and Ansar. In some cases the helper offered to share his wealth and even his household; the Qur’an praises the Ansar for preferring others over themselves despite their own need:`) +
          Q(`And those who settled in the home [of Madinah] and embraced the faith before them love those who emigrated to them and find not any want in their breasts of what they were given but give [them] preference over themselves, even though they were in need.`, `Qur’an 59:9`) +
          P(`The brotherhood was not a permanent redistribution of all property. It was an emergency welfare arrangement that allowed a displaced community to survive and integrate. Some reports suggest that the bond initially carried rights of inheritance, later modified by the Qur’anic law of inheritance and by the verse that “those related by blood are nearer to one another” (8:75; 33:6). The details are debated, but the direction is clear: the bond was adjusted as the emergency passed.`) +
          P(`The most famous anecdote is that of Abd al-Rahman ibn Awf, who was offered half his brother’s wealth and replied that he needed only to be shown the market. He then traded and prospered. The story is preserved in the hadith collections and captures the ethos: help was real, but it was meant to enable independence, not create clients.`)
      },
      {
        id: 'qibla-and-identity',
        heading: 'The Qibla, Ramadan and a Distinct Community',
        html: P(`In the second year after the Hijrah, the qibla was changed from Jerusalem to the Sacred Mosque in Makkah. The Qur’an addresses the change directly, acknowledging that it would disturb some people and explaining that the direction is a test of obedience:`) +
          Q(`We have certainly seen the turning of your face toward the sky, and We will surely turn you to a qiblah with which you will be pleased. So turn your face toward al-Masjid al-Haram.`, `Qur’an 2:144`) +
          P(`The change did not repudiate the earlier prophets. The Qur’an calls the Muslims a “middle community” (2:143), witnesses to humanity, and it insists that righteousness is not the direction of the face but faith and good deeds (2:177). Jerusalem retained its sanctity; the Prophet ﷺ had been taken there on the night journey. But the public orientation of the community was now towards the house of Ibrahim, and that was a statement about the restoration of the religion of Ibrahim rather than the invention of a new one.`) +
          P(`Ramadan fasting was prescribed in the same period, along with the zakat al-fitr and the public prayers of Eid. These practices gave the community a shared calendar and a shared discipline. They also distinguished the Muslims from their neighbours without requiring hostility towards them. The Qur’an permits eating the food of the People of the Book and marriage to their chaste women (5:5), and it insists on justice even towards those who oppose the believers (5:8). Identity and coexistence were held together.`)
      },
      {
        id: 'plural-city',
        heading: 'Governing a Plural City',
        html: P(`Madinah contained Muslims, Jews, polytheists and people with no strong religious commitment. The document of Madinah assumed that these groups would remain distinct and would deal with one another through agreements. The Prophet ﷺ did not require the Jewish groups to convert, and he did not abolish their internal religious authority. He adjudicated when disputes were brought to him and when the public peace was at stake.`) +
          P(`Relations deteriorated over time. Banu Qaynuqa were besieged and expelled after a market dispute and an alleged breach of the agreement; Banu al-Nadir were expelled after a reported assassination plot against the Prophet ﷺ; Banu Qurayzah were dealt with after the siege of the Trench. These events are treated in the next article. What matters here is that the framework was political and contractual, and that the later conflicts were justified in the sources by treaty violation and security, not by religion as such.`) +
          P(`Christians were also part of the wider picture. The delegation of Najran came to Madinah in the ninth year and debated with the Prophet ﷺ; the Qur’an addresses the encounter in Surah Al Imran and ultimately calls for a mutual invocation of curses (3:61) after argument fails. A treaty was concluded with the Najran Christians. The Qur’an’s stance towards the People of the Book combines theological disagreement with a command to argue in the best manner (16:125; 29:46).`)
      },
      {
        id: 'law-and-justice',
        heading: 'Law, Arbitration and the Prophet as Judge',
        html: P(`The Prophet ﷺ judged by revelation, but he also judged within the customs and capacities of the people. The Qur’an commands him to judge with justice and warns against following desire (4:105; 5:42–49). Where revelation was silent, he used consultation, analogy and the testimony of the parties. The famous principle that the burden of proof lies on the claimant and the oath on the one who denies is reported in the collections of al-Bayhaqi and others and became a foundation of Islamic procedure.`) +
          P(`Justice was not tribal. The Qur’an commands believers to stand firm for justice, even against themselves and their relatives (4:135), and to be witnesses for Allah even against a people they hate (5:8). The Prophet ﷺ applied this in a case involving a woman of the Makhzum clan who had stolen. When Usama ibn Zayd tried to intercede, the Prophet ﷺ became angry and asked whether he was interceding in one of the punishments prescribed by Allah. He then addressed the people and said that the nations before them were destroyed because they punished the weak and let the noble go. The report is in Bukhari and Muslim.`) +
          P(`Punishments were not applied casually. The Qur’an sets high thresholds of proof for sexual offences (24:4, 24:13), commands that suspicion not replace evidence (49:12), and insists that the accused be treated justly. The Prophet ﷺ warned against judging between people while angry, and he refused to decide a case in favour of a claimant merely because one party was eloquent. The picture is of a judge conscious that his rulings could be wrong and that the truth of hearts belongs to Allah.`)
      },
      {
        id: 'hypocrites',
        heading: 'The Hypocrites and the Limits of Belonging',
        html: P(`Not everyone in Madinah who professed Islam was sincere. The Qur’an describes the munafiqun, the hypocrites, at length: they say they believe with their tongues while their hearts are elsewhere (2:8–20), they mock the believers, they withdraw from battle and they spread rumours. The most prominent figure was Abdullah ibn Ubayy ibn Salul, a chief of the Khazraj who had expected to be king of Yathrib before the Prophet’s ﷺ arrival.`) +
          P(`The Prophet ﷺ did not create a system of religious police. He accepted the outward profession of Islam, judged on the evidence available, and left the hearts to Allah. When Abdullah ibn Ubayy’s intrigues were exposed, the Prophet ﷺ sometimes chose not to punish him, fearing that people would say Muhammad kills his own companions. When Ibn Ubayy died, the Prophet ﷺ prayed over him, despite Umar’s objection, until a verse was revealed that discouraged prayer over the hypocrites who had died in disbelief (9:84).`) +
          P(`This restraint was a governance principle, not naivety. The Qur’an exposes hypocrisy and warns of its consequences, but it also leaves room for repentance and does not authorise a purge on suspicion. The episode of the slander against Aisha (24:11–20), in which the hypocrites spread a rumour and the Qur’an vindicated her, shows how destructive rumour can be and how the community was taught to demand witnesses rather than circulate accusation.`)
      },
      {
        id: 'economy-and-welfare',
        heading: 'Economic Life, Zakat and the Market',
        html: P(`Madinah’s economy rested on date palms, wells, livestock and trade. The Muhajirun had lost their Makkan businesses, and the Ansar owned most of the agricultural land. The early economy was therefore a transfer economy: the Ansar supported the emigrants until they could establish themselves, and the Prophet ﷺ distributed land and opportunities as they became available.`) +
          P(`Zakat became an obligatory annual levy on wealth, with eight categories of recipients named in the Qur’an (9:60). It was not charity in the modern sense of voluntary giving; it was a right of the poor upon the wealth of the community. The Prophet ﷺ appointed collectors, set rates for different kinds of property, and warned against withholding it. Voluntary sadaqah, waqf endowments and the redemption of slaves supplemented the system.`) +
          P(`The Qur’an also regulated the market. It condemns fraudulent weighing (83:1–3), commands fair measure (6:152), forbids riba (2:275–279) and prohibits the consumption of wealth by false means (4:29). The Prophet ﷺ established a market in Madinah and discouraged monopolistic practices and intercepting goods before they reached the market. The details were elaborated by later jurists, but the ethical direction was set in the Madinan period: exchange must be honest, and the weak must not be crushed by the strong.`)
      },
      {
        id: 'was-it-a-state',
        heading: 'Was Madinah a “State”?',
        html: P(`Popular accounts often call the document of Madinah “the first written constitution” and describe the Prophet ﷺ as the founder of the first Islamic state. The phrases are memorable, but they can mislead. A modern state is normally defined by a territory, a sovereign authority, a monopoly on legitimate violence, a bureaucracy, a standing army, a tax system and a constitution in the legal sense. Madinah had some of these features and lacked others.`) +
          P(`It had a defined territory and a defended sanctuary, a recognised authority, a written compact, a system of adjudication, a treasury fed by zakat and spoils, and the capacity to conclude treaties and wage war. It did not have a professional bureaucracy, a standing army, a police force, a codified legal code or a modern conception of impersonal sovereignty. Authority was personal and prophetic: people obeyed the Prophet ﷺ because he was the Messenger of Allah, because they had consented, and because his rule was just and effective.`) +
          P(`The most accurate description is therefore something like a prophetic city-polity or a commonwealth of allied communities under a single arbiter. It was a real political order, not a vague religious club, but it was not a nation-state and it should not be used to bless modern institutions that it did not possess. The enduring principles are more important than the label: consent, covenant, justice, consultation, welfare and the protection of the weak.`) +
          NOTE(`<strong>Editorial note:</strong> this article distinguishes the historical Madinan order from later theories of the caliphate and from modern state ideology. The sources describe a compact and a practice, not a political science textbook.`)
      },
      {
        id: 'sources-and-limits',
        heading: 'Sources and Their Limits',
        html: P(`The main sources for this period are:`) +
          UL([
            `<strong>The Qur’an</strong> — especially 2:143–150, 4:105, 5:8, 8:72–75, 9:60, 24:11–20, 33:6, 49:12–13 and 59:9.`,
            `<strong>Sahih al-Bukhari and Sahih Muslim</strong> — the mosque, the brotherhood, the adhan, the Makhzum woman, the slander of Aisha and the Prophet’s ﷺ judgments.`,
            `<strong>Ibn Hisham, al-Sirah al-Nabawiyyah</strong> — the text of the document of Madinah, the building of the mosque and the early expeditions.`,
            `<strong>Al-Tabari, Tarikh al-Rusul wa al-Muluk</strong> — the chronology and parallel reports, including weak ones.`,
            `<strong>Al-Waqidi, Kitab al-Maghazi</strong> — detailed but widely regarded as weak in hadith criticism; used only where corroborated.`,
            `<strong>Modern critical studies</strong> of the document, the economy of Yathrib and the social history of the Hijaz.`
          ]) +
          P(`The document’s text survives through a literary chain, not as an excavated original. Its clause order and completeness are debated. The numbers of combatants, the exact dates and the details of individual houses are reported by later historians and are approximate. Where the sources differ, this article says so rather than smoothing the difference away.`) +
          NOTE(`<strong>Editorial note:</strong> this is an educational synthesis, not a critical edition. Reports from Ibn Hisham, al-Tabari and al-Waqidi are identified as such and are not presented as authentic hadith. The description of Madinah as a “state” is explicitly qualified.`)
      }
    ],
    faqs: [
      { q: 'Did the Prophet ﷺ found the first Islamic state in Madinah?', a: 'He founded a political community with a written compact, a treasury, a court and a defence force, but it was not a modern state. It lacked a bureaucracy, a standing army and impersonal sovereignty. “Prophetic city-polity” is a more accurate description than “nation-state”.' },
      { q: 'Was the document of Madinah a constitution?', a: 'It is often called that, but it is better described as a treaty or compact between communities. It regulated blood-money, arbitration, mutual defence and the status of the Jewish groups. Its unity and dating are debated by historians.' },
      { q: 'Did the document grant religious freedom?', a: 'It allowed the Jewish groups to retain their religion and internal arrangements within a framework of alliance and mutual obligation. That is not the same as modern secular religious freedom, which rests on a different conception of the state.' },
      { q: 'Why did the Prophet ﷺ not punish the hypocrites?', a: 'He accepted outward Islam, judged on evidence and left hearts to Allah. He sometimes declined to punish Abdullah ibn Ubayy for prudential reasons, and the Qur’an warns against acting on suspicion. The community was not run as an inquisition.' },
      { q: 'How were the Muhajirun supported?', a: 'Through the bond of brotherhood with the Ansar, through shared households and wealth in the emergency, through work and trade, and later through zakat, spoils and land distribution. The aim was to enable independence, not permanent dependency.' }
    ],
    bibliography: [
      `The Qur’an — especially 2:143–150, 2:177, 4:105, 4:135, 5:8, 5:42–49, 8:72–75, 9:60, 24:11–20, 33:6, 49:12–13, 59:9. Translations adapted from Saheeh International unless stated.`,
      `Sahih al-Bukhari — the building of the mosque, the adhan, the brotherhood, the Makhzum woman and the slander of Aisha.`,
      `Sahih Muslim — the Prophet’s ﷺ judgments, the farewell to Ibn Ubayy and the virtues of the Ansar.`,
      `Ibn Hisham, <em>al-Sirah al-Nabawiyyah</em> — the document of Madinah, the arrival, the mosque and the early expeditions.`,
      `Al-Tabari, <em>Tarikh al-Rusul wa al-Muluk</em> — the chronology of the first Madinan years.`,
      `Al-Waqidi, <em>Kitab al-Maghazi</em> — detailed narrative, used with caution because of its weak standing in hadith criticism.`,
      `Ibn Kathir, <em>al-Bidayah wa al-Nihayah</em> — the Madinan period with grading comments on reports.`,
      `Modern critical studies of the document of Madinah, the economy of Yathrib and early Islamic governance.`
    ],
    related: [
      ...relatedBase,
      { href: 'hijrah-to-madinah.html', label: 'The Hijrah to Madinah: planning, trust and a new society' },
      { href: 'battles-of-badr-uhud-and-the-trench.html', label: 'Badr, Uhud and the Trench: war, ethics and survival' },
      { href: 'hudaybiyyah-and-conquest-of-makkah.html', label: 'Hudaybiyyah and the conquest of Makkah' },
      { href: 'seerah-of-prophet-muhammad.html', label: 'Seerah of Prophet Muhammad ﷺ: a guided journey' }
    ]
  },

  {
    slug: 'battles-of-badr-uhud-and-the-trench',
    title: 'Badr, Uhud and the Trench: War, Ethics and Survival',
    metaTitle: 'The Battles of Badr, Uhud and the Trench: History, Qur’anic Lessons and Source Limits',
    description: 'The three great early battles of the Seerah: the road to Badr, the day of the criterion, the prisoners and spoils, the archers at Uhud, the wounding of the Prophet ﷺ, the Confederate siege of the Trench, the wind, and the difficult aftermath with Banu Qurayzah.',
    category: 'Seerah',
    readTime: '16 min',
    intro: P(`Three battles in five years decided whether the community of Madinah would survive. Badr was a stunning deliverance; Uhud was a costly lesson in discipline; the Trench was a siege survived by endurance, weather and diplomacy. Together they shaped the Qur’anic vocabulary of trial, obedience, martyrdom and divine help.`) +
      P(`This article narrates the three campaigns and the Qur’anic response to each. It also states the limits of the sources. The detailed numbers, speeches and single combat are preserved by Ibn Hisham, al-Tabari and al-Waqidi, and not all of that material meets the standard of authentic hadith. The Qur’an and the sound hadith give the theological and moral frame; the later historians give the narrative colour, which this article uses carefully.`),
    keyTakeaways: [
      `Badr (2 AH) was fought against a Quraysh army protecting a caravan; the Muslims were outnumbered and won.`,
      `The Qur’an presents Badr as divine help and a test of gratitude, not as a licence for arrogance.`,
      `Uhud (3 AH) was lost when the archers left their post; the Qur’an blames disobedience, not the enemy’s numbers.`,
      `The rumour that the Prophet ﷺ had been killed tested the community and produced the verse that he was a messenger who would die.`,
      `The Trench (5 AH) was a defensive siege; a trench, cold, hunger, a storm and diplomacy broke the Confederacy.`,
      `The aftermath with Banu Qurayzah is a difficult episode; the sources differ on numbers and the judgment was a tribal arbitration.`,
      `Later sources inflate numbers and add speeches; the article labels such material rather than presenting it as hadith.`
    ],
    sections: [
      {
        id: 'war-and-ethics',
        heading: 'War, Ethics and the Prophetic Example',
        html: P(`The Qur’an does not present war as a good in itself. It permits fighting against those who fight the believers and drive them from their homes, and it commands that aggression not be exceeded:`) +
          Q(`Fight in the way of Allah those who fight you but do not transgress. Indeed, Allah does not like transgressors.`, `Qur’an 2:190`) +
          P(`The Prophet ﷺ set limits that later jurists developed into a law of war: do not kill women, children, the elderly or monks; do not mutilate; do not betray; do not cut down fruit-bearing trees except when necessary; do not kill animals except for food. Abu Bakr repeated similar instructions to his armies. These rules were not always observed in later history, but they were the standard against which conduct was judged.`) +
          P(`The early battles were not wars of conversion. The Qur’an insists that there is no compulsion in religion (2:256), and the fighting in this period was tied to the specific conflict with Quraysh: the seizure of Muslim property, the blockade of the community, and the threat of annihilation. Later conquests raised different questions, but they should not be read back into Badr as if the Prophet ﷺ had set out to conquer the world from the beginning.`)
      },
      {
        id: 'road-to-badr',
        heading: 'The Road to Badr',
        html: P(`The Muslims who left Makkah had lost homes, goods and businesses. The Qur’an acknowledges their expulsion and permits them to fight those who drove them out (22:39–40). Quraysh continued to organise caravans and to threaten the routes and allies of Madinah. The Prophet ﷺ sent small expeditions to monitor the routes and to signal that the Muslims were no longer passive.`) +
          P(`One of these, led by Abdullah ibn Jahsh, reached Nakhlah in Rajab of the second year. A skirmish there resulted in the killing of a Quraysh man during a sacred month, which the Quraysh used for propaganda. The Qur’an responded that persecution and expulsion were worse than killing in the sacred month, while acknowledging the gravity of the act (2:217). The episode shows how easily a small operation could escalate.`) +
          P(`The immediate occasion of Badr was a large caravan returning from Syria under Abu Sufyan. The Prophet ﷺ called the Muslims to intercept it. Abu Sufyan sent word to Makkah for help, and Quraysh marched out with a substantial army. The Muslims had about three hundred and thirteen men, few horses and limited armour. Before the battle the Prophet ﷺ consulted his companions, and the Ansar confirmed that they would fight, not merely defend their own homes. That consultation mattered: it turned a raid into a battle of the community.`)
      },
      {
        id: 'badr-battle',
        heading: 'Badr: The Day of the Criterion',
        html: P(`The two armies met at the wells of Badr on the seventeenth of Ramadan in the second year after the Hijrah, conventionally 624 CE. The Muslims reached the water first and cut off the enemy’s access. The Prophet ﷺ spent the night in supplication, and the Qur’an describes the rain and the sleep that steadied the believers before the fight (8:11).`) +
          P(`The battle opened with single combats. Ali, Hamzah and Ubaydah ibn al-Harith faced Utbah, Shaybah and al-Walid ibn Utbah; the Muslims prevailed. The general engagement followed. The Qur’an describes the believers as few in number and the enemy as numerous, and it attributes the victory to Allah:`) +
          Q(`And already had Allah given you victory at Badr while you were few in number. Then fear Allah; perhaps you will be grateful.`, `Qur’an 3:123`) +
          P(`The Sirah reports that around seventy of Quraysh were killed and a similar number captured, while fourteen Muslims were martyred. These figures come from the historians and are broadly consistent across the early sources, though they should not be treated as exact statistics. The Qur’an calls the day al-Furqan, the criterion, because it separated the believers from their persecutors and vindicated the message in the eyes of many.`)
      },
      {
        id: 'badr-aftermath',
        heading: 'Prisoners, Spoils and the Meaning of Victory',
        html: P(`Victory brought immediate practical questions. The fighters disagreed about the distribution of the spoils, and the Qur’an intervened: the spoils belong to Allah and His Messenger, and a fifth is set aside for Allah, the Messenger, the near relatives, orphans, the poor and the traveller (8:1, 8:41). This was not merely an accounting rule. It placed the gains of war under moral authority and made provision for the vulnerable.`) +
          P(`The prisoners were a harder case. The Qur’an criticises the desire for worldly gain in the treatment of captives and says that Allah wants the Hereafter (8:67–68). The Prophet ﷺ consulted his companions; Abu Bakr favoured ransom, Umar favoured execution, and the Prophet ﷺ chose ransom. A report in the Sirah says that some prisoners who could read were allowed to teach Muslim children instead of paying a cash ransom. The story is well known but comes from the historians rather than an authentic hadith, and it should be labelled as such.`) +
          P(`Badr did not end the conflict. It humiliated Quraysh, strengthened the Muslims’ standing with the tribes, and convinced many that the Prophet ﷺ was protected. But it also created a debt of revenge. The Qur’an warns the believers not to become arrogant, and it reminds them that help was a favour to be repaid with gratitude and obedience, not a permanent guarantee.`)
      },
      {
        id: 'uhud-background',
        heading: 'Uhud: The Revenge Campaign',
        html: P(`Quraysh spent the following year preparing revenge. They gathered around three thousand men, financed in part by the profits of the caravan that had escaped at Badr, and marched towards Madinah under Abu Sufyan. The Prophet ﷺ consulted the community on whether to fight inside the town or meet the enemy in the open. He himself leaned towards defending Madinah, but the younger men and those eager for battle pressed for a march. He accepted the majority view.`) +
          P(`The Muslim force numbered about seven hundred. Abdullah ibn Ubayy withdrew with his followers on the way, reducing the army and revealing the fragility of the coalition. The Prophet ﷺ positioned fifty archers on a pass on Mount Aynayn with strict orders to hold their ground whatever happened, so that the cavalry of Quraysh could not attack the Muslim rear.`) +
          P(`The choice of Uhud was therefore a compromise between counsel and popular pressure. The Prophet ﷺ had warned that he had seen in a dream that he was wearing a breastplate and that a cow was being slaughtered, which he interpreted as a sign that it was better to stay in Madinah. The community chose otherwise. The episode is a study in consultation, and in the cost of ignoring wise counsel.`)
      },
      {
        id: 'uhud-battle',
        heading: 'Uhud: The Battle and the Archers',
        html: P(`The battle began well for the Muslims. They broke the Quraysh centre, and the enemy began to flee. At that point the archers on the pass saw the spoils being gathered and left their positions to join the pursuit, despite the Prophet’s ﷺ order to remain. Khalid ibn al-Walid, then still a leader of Quraysh, saw the gap and led his cavalry around the hill. The Muslims were attacked from behind and the tide turned.`) +
          P(`The confusion was severe. A rumour spread that the Prophet ﷺ had been killed, and some believers lost heart. The Qur’an answers the rumour directly: Muhammad is a messenger, and messengers have died before him; if he died or was killed, would they turn back? (3:144). The Prophet ﷺ was in fact wounded in the face, and a link of his helmet pierced his cheek. Hamzah ibn Abd al-Muttalib, the Prophet’s uncle, was killed by Wahshi, and Hind, Abu Sufyan’s wife, mutilated the bodies of the slain.`) +
          P(`The Sirah names around seventy martyrs, including Hamzah, Mus’ab ibn Umayr and Anas ibn al-Nadr. The Prophet ﷺ grieved deeply. He forgave the archers and did not punish them, and he prayed for the dead. The battle was a military defeat, but the community survived, and the Qur’an turned the defeat into a permanent lesson.`)
      },
      {
        id: 'uhud-lessons',
        heading: 'Uhud: The Qur’anic Response and the Lessons',
        html: P(`Surah Al Imran addresses Uhud at length. It tells the believers not to weaken or grieve, because they will be superior if they are believers (3:139). It explains that the setback came through their own disobedience, while forgiveness was available (3:152–155). It distinguishes the sincere from the hypocrites who stayed behind and spoke about what they had not witnessed (3:165–168). And it declares that those killed in the way of Allah are alive with their Lord, provided for (3:169–171).`) +
          Q(`So do not weaken and do not grieve, and you will be superior if you are [true] believers.`, `Qur’an 3:139`) +
          P(`The lessons are concrete. Obedience to the commander matters more than individual bravery. Discipline protects the community from the consequences of enthusiasm. Defeat is not proof that Allah has abandoned the believers; it is a test and a correction. The Prophet ﷺ himself was wounded, and the Qur’an does not hide his vulnerability. That honesty is part of the Seerah’s credibility.`) +
          P(`Uhud also shaped the ethics of grief. The Prophet ﷺ wept for Hamzah and for the martyrs, and he allowed mourning. He did not demand that the community pretend that loss did not hurt. The Qur’an’s promise of Paradise for the martyrs did not cancel the pain of the survivors; it gave the pain a horizon.`)
      },
      {
        id: 'trench-background',
        heading: 'The Trench: A Coalition Against Madinah',
        html: P(`Two years after Uhud, Quraysh assembled a much larger coalition. The tribes of Ghatafan and others joined, and the exiled leaders of Banu al-Nadir, especially Huyayy ibn Akhtab, travelled among them urging a decisive campaign. The Sirah reports a Confederate force of about ten thousand against a Muslim force of about three thousand. The numbers are traditional and may be rounded, but the strategic imbalance is clear.`) +
          P(`Salman al-Farsi, a Persian companion with experience of siege warfare, suggested digging a trench on the open northern approaches to Madinah, where cavalry could otherwise sweep into the town. The Prophet ﷺ accepted the advice and the Muslims dug a defensive ditch, reinforced by the natural lava fields and the fortified houses on the other sides. The work was hard, the weather cold, and food scarce.`) +
          P(`The trench was a defensive innovation in Arabian warfare, and it neutralised the enemy’s greatest advantage: cavalry. It also bought time. The Prophet ﷺ remained in the city, organised the defences, and used diplomacy to divide the coalition. The siege that followed is known as the Battle of the Trench (Khandaq) or the Battle of the Confederates (Ahzab).`)
      },
      {
        id: 'trench-siege',
        heading: 'The Siege, Hunger and the Wind',
        html: P(`The Confederates arrived, found the trench impassable, and settled into a siege that the sources put at roughly three to four weeks. The Muslims endured cold, hunger and constant alert. The Prophet ﷺ tied stones to his stomach to ease the pangs of hunger, and the companions shared what little they had. The Qur’an describes the fear and the testing of the believers:`) +
          Q(`When they came upon you from above you and from below you, and when eyes grew wild and hearts reached to the throats, and you were assuming about Allah [various] assumptions.`, `Qur’an 33:10`) +
          P(`The siege was broken by a combination of factors. A severe storm — wind, rain and cold — overturned tents and extinguished fires, and the Confederates’ morale collapsed. The Qur’an presents the wind as an unseen army of Allah (33:9). Diplomacy also played a part: Nu’aym ibn Mas’ud, a man from Ghatafan who had become a secret Muslim, sowed distrust between the Confederates and the Jewish group of Banu Qurayzah, weakening the coalition from within. The story is from the Sirah, not an authentic hadith, and is reported with variation.`) +
          P(`The Prophet ﷺ is reported to have said, after the enemy withdrew, that Quraysh would never again march against the Muslims in force, while the Muslims would march against them. The report is in Bukhari. From this point the strategic initiative passed to Madinah.`)
      },
      {
        id: 'after-trench',
        heading: 'After the Trench: Banu Qurayzah and Consolidation',
        html: P(`During the siege, Banu Qurayzah — a Jewish group in Madinah with a treaty relationship to the Muslims — were accused of negotiating with the Confederates and breaking their agreement. After the siege lifted, the Prophet ﷺ besieged their forts. They surrendered and asked that their fate be decided by Sa’d ibn Mu’adh, a chief of the Aws who had been wounded at the Trench. Sa’d judged that the fighting men should be killed, the women and children taken captive, and their property divided. The Prophet ﷺ is reported to have said that the judgment corresponded to the judgment of Allah.`) +
          P(`This is one of the most difficult episodes in the Seerah, and honesty requires more than either triumphalism or caricature. The sources report that the judgment followed the tribal custom of the time for treachery in war, and that it was accepted by the group’s own allies. The numbers of those killed are given variously in the sources, sometimes in the hundreds; they cannot be verified precisely. The Qur’an refers to the event in 33:26–27. Modern scholars debate the legal and ethical reading of the episode, and the debate is legitimate.`) +
          P(`What should not be done is to use the episode as a proof-text for hostility to Jews as such. The conflict was political and contractual, and the Prophet ﷺ had treaties with other Jewish groups and with the Christians of Najran. At the same time, the severity of the outcome should not be softened into something it was not. The article records what the sources say and marks the limits of certainty.`) +
          NOTE(`<strong>Source caution:</strong> the numbers and some details of the Banu Qurayzah episode come from later historians and are disputed. This article does not present them as precise or as a model for later conduct.`)
      },
      {
        id: 'sources-and-limits',
        heading: 'Sources and Their Limits',
        html: P(`The main sources for the three battles are:`) +
          UL([
            `<strong>The Qur’an</strong> — especially 2:190–193, 2:217, 3:121–175, 8:1–75, 22:39–40 and 33:9–27.`,
            `<strong>Sahih al-Bukhari and Sahih Muslim</strong> — selected reports on Badr, Uhud, Hamzah, the Trench and the Prophet’s ﷺ wounds.`,
            `<strong>Ibn Hisham, al-Sirah al-Nabawiyyah</strong> — the fullest early narrative of the campaigns, including speeches, letters and poetry.`,
            `<strong>Al-Tabari, Tarikh al-Rusul wa al-Muluk</strong> — parallel reports and chronology, with varying chains.`,
            `<strong>Al-Waqidi, Kitab al-Maghazi</strong> — very detailed, but widely criticised as weak; useful only where corroborated.`,
            `<strong>Ibn Kathir, al-Bidayah wa al-Nihayah</strong> — a later synthesis with grading comments.`
          ]) +
          P(`The historians preserve material that a strict hadith scholar would not accept: invented speeches, exact troop counts, names of minor participants and poetic exchanges. The Qur’an and the sound hadith provide the framework; the historians provide the story. This article follows that division and flags the difference where it matters.`) +
          NOTE(`<strong>Editorial note:</strong> dates are given in the conventional Hijri and CE chronology. Troop numbers and casualty figures are traditional reports, not modern statistics. The article does not claim that every detail in the Sirah is authentic.`)
      }
    ],
    faqs: [
      { q: 'Why did the Muslims fight at Badr?', a: 'The immediate occasion was the interception of a Quraysh caravan, but the deeper context was the expulsion and persecution of the Muslims, the seizure of their property and the ongoing threat from Quraysh. The Qur’an permits fighting against aggression while forbidding transgression.' },
      { q: 'Was Badr a miracle?', a: 'The Qur’an presents the victory as divine help: the Muslims were few, exhausted and poorly equipped against a larger army. It also presents the help as a test of gratitude, not as a guarantee that the believers would always win regardless of their conduct.' },
      { q: 'Why were the Muslims defeated at Uhud?', a: 'The immediate cause was the archers leaving their post, which allowed Khalid ibn al-Walid’s cavalry to attack from behind. The Qur’an attributes the setback to disobedience and presents it as a test and a correction, not as proof that the enemy was right.' },
      { q: 'How was the siege of the Trench broken?', a: 'A combination of the trench, which neutralised cavalry; the endurance of the Muslims; a severe storm that destroyed the Confederates’ camp; and diplomacy that sowed distrust within the coalition. The Qur’an presents the wind as an unseen army of Allah.' },
      { q: 'What happened to Banu Qurayzah?', a: 'After the siege they were accused of breaking their treaty, besieged and forced to surrender. Their fate was arbitrated by Sa’d ibn Mu’adh, who judged that the fighting men should be killed and the women and children taken captive. The sources differ on numbers, and modern scholars debate the episode.' }
    ],
    bibliography: [
      `The Qur’an — especially 2:190–193, 2:217, 3:121–175, 8:1–75, 22:39–40, 33:9–27. Translations adapted from Saheeh International unless stated.`,
      `Sahih al-Bukhari — Badr, Uhud, Hamzah, the Trench and the Prophet’s ﷺ wounds.`,
      `Sahih Muslim — the battles, the virtues of the companions and the treatment of prisoners.`,
      `Ibn Hisham, <em>al-Sirah al-Nabawiyyah</em> — the campaigns of Badr, Uhud and the Trench.`,
      `Al-Tabari, <em>Tarikh al-Rusul wa al-Muluk</em> — the chronology and parallel reports.`,
      `Al-Waqidi, <em>Kitab al-Maghazi</em> — detailed narrative, used with caution because of its weak standing in hadith criticism.`,
      `Ibn Kathir, <em>al-Bidayah wa al-Nihayah</em> — the campaigns with grading comments.`,
      `Modern studies of early Islamic warfare, the economy of the Hijaz and the historiography of the Sirah.`
    ],
    related: [
      ...relatedBase,
      { href: 'madinah-society-and-first-muslim-state.html', label: 'Madinah: society, law and the first Muslim polity' },
      { href: 'hudaybiyyah-and-conquest-of-makkah.html', label: 'Hudaybiyyah and the conquest of Makkah' },
      { href: 'farewell-sermon-and-final-years.html', label: 'The farewell sermon and the final years' },
      { href: 'hijrah-to-madinah.html', label: 'The Hijrah to Madinah: planning, trust and a new society' }
    ]
  },

  {
    slug: 'hudaybiyyah-and-conquest-of-makkah',
    title: 'Hudaybiyyah and the Conquest of Makkah',
    metaTitle: 'Hudaybiyyah and the Conquest of Makkah: Treaty, Victory and Amnesty',
    description: 'The umrah that became a treaty, the pledge of Ridwan, the terms that looked like humiliation, Surah al-Fath, the breach by Quraysh, the secret march, the entry into Makkah, the general amnesty and the cleansing of the Kaaba.',
    category: 'Seerah',
    readTime: '15 min',
    intro: P(`Hudaybiyyah is the hinge of the Madinan Seerah. A pilgrimage that was blocked became a treaty; a treaty that looked like a humiliation became, in the Qur’an’s language, a clear victory. Two years later the same community entered Makkah almost without bloodshed and granted a general amnesty to the city that had tortured and expelled it.`) +
      P(`This article follows that arc: the journey, the negotiations, the pledge under the tree, the terms, the Qur’anic interpretation, the breach, the march and the conquest. It also examines the moral character of the victory. The Prophet’s ﷺ restraint at the moment of maximum power is as important as the military achievement, and it is the part most often reduced to a slogan.`),
    keyTakeaways: [
      `Hudaybiyyah (6 AH) was an umrah journey that ended in a ten-year truce, not a battle.`,
      `The pledge of Ridwan took place under a tree after a rumour that a Quraysh envoy had been killed.`,
      `The terms seemed one-sided: the Muslims would not perform umrah that year and would return converts without guardians.`,
      `The Qur’an called the treaty a clear victory (48:1), and the years that followed saw a major expansion of Islam.`,
      `Quraysh’s allies breached the truce by attacking the allies of the Muslims, leading to the march on Makkah in 8 AH.`,
      `The conquest was marked by a general amnesty, the protection of Abu Sufyan’s house and the cleansing of the Kaaba.`,
      `The “go, you are free” speech is reported by the historians rather than as an authentic hadith.`
    ],
    sections: [
      {
        id: 'why-hudaybiyyah',
        heading: 'A Turning Point in the Seerah',
        html: P(`By the sixth year after the Hijrah, the Muslims had survived Badr, Uhud and the Trench. They were no longer a besieged minority, but they were still excluded from the sanctuary of Makkah. The Prophet ﷺ saw in a dream that he and his companions would enter the Sacred House in safety, with heads shaved or shortened, and he announced his intention to perform umrah.`) +
          P(`The decision was religious, not military. The Muslims set out in the sacred month of Dhul-Qa’dah, wearing the pilgrim dress and driving sacrificial animals, so that their intention would be unmistakable. They were about fourteen hundred or fifteen hundred strong, with no intention of fighting. The Quraysh, however, saw the pilgrimage as a political challenge and sent forces to block the road.`) +
          P(`The standoff at Hudaybiyyah, on the edge of the sacred territory, forced both sides to negotiate. The episode is a study in how a position of weakness can be converted into a strategic gain through patience, and how a Prophet ﷺ could accept terms that his companions found humiliating because he understood what they could not yet see.`)
      },
      {
        id: 'journey-of-umrah',
        heading: 'The Journey and the Blockade',
        html: P(`The Prophet ﷺ travelled with the Muhajirun and the Ansar, and the party included women and children. They took a route that avoided the main Quraysh patrols, guided by a man familiar with the desert tracks. When they reached Hudaybiyyah, the Prophet’s ﷺ camel knelt and refused to go further; he interpreted this as a sign that the Quraysh were determined to prevent the pilgrimage.`) +
          P(`Negotiations began with envoys. The Quraysh demanded that the Muslims turn back and return the following year. The Prophet ﷺ sent Uthman ibn Affan to Makkah to explain the peaceful intention, and a rumour spread that Uthman had been killed. The Muslims responded with the pledge of Ridwan, placing their hands in the Prophet’s ﷺ hand under a tree, vowing not to flee. The Qur’an commemorates the pledge:`) +
          Q(`Indeed, Allah was pleased with the believers when they pledged allegiance to you under the tree, and He knew what was in their hearts, so He sent down tranquillity upon them and rewarded them with an imminent conquest.`, `Qur’an 48:18`) +
          P(`The pledge was not a declaration of war. It was a commitment of loyalty in a moment of uncertainty. The tree itself later became a site of devotion, and the second caliph Umar had it cut down to prevent it from being treated as a shrine. The report is in Bukhari and reflects the concern to keep devotion directed to Allah alone.`)
      },
      {
        id: 'treaty-terms',
        heading: 'The Terms of the Treaty',
        html: P(`The agreement that emerged is known as the treaty of Hudaybiyyah. Its main terms, as reported in the Sirah and the hadith collections, were:`) +
          UL([
            `A truce between the Muslims and Quraysh for ten years.`,
            `The Muslims would return to Madinah that year without performing umrah, and would come back the following year for three days.`,
            `Any person from Quraysh who came to the Muslims without the permission of his guardian would be returned to Quraysh; any Muslim who went to Quraysh would not be returned.`,
            `The Arab tribes were free to ally with either side, and an attack on an ally would be treated as an attack on the party to which it belonged.`,
            `The Muslims would enter Makkah unarmed, apart from the weapons of a traveller.`
          ]) +
          P(`The wording of the document caused further friction. The Prophet ﷺ dictated “In the name of Allah, the Most Merciful, the Most Compassionate”, and the Quraysh envoy objected; he accepted “In Your name, O Allah”. He dictated “This is what Muhammad, the Messenger of Allah, has agreed”, and the envoy objected to the title; he accepted “Muhammad ibn Abdullah”. To the companions this looked like surrender.`) +
          P(`The asymmetry of the return clause is real and should not be explained away. It meant that a Muslim who escaped Makkah could be handed back to his persecutors. The Prophet ﷺ accepted it because the treaty as a whole served a greater purpose, and because the clause was later used sparingly and eventually superseded. The episode shows that prophetic leadership sometimes accepts a lesser evil for a greater good, and that the companions were allowed to struggle with the decision.`)
      },
      {
        id: 'apparent-defeat',
        heading: 'Why It Looked Like a Defeat',
        html: P(`The companions were deeply distressed. Umar ibn al-Khattab questioned the Prophet ﷺ about the terms and about the dream of entering Makkah. The Prophet ﷺ replied that he was the servant and messenger of Allah and would not disobey Him. The tension was real, and the sources do not hide it. Some companions were so upset that they hesitated to shave their heads and sacrifice the animals at the end of the journey.`) +
          P(`The Qur’an responded with Surah al-Fath, revealed on the return journey, which called the treaty a clear victory:`) +
          Q(`Indeed, We have given you a clear conquest.`, `Qur’an 48:1`) +
          P(`The title “al-Fath” is usually translated as “the victory” or “the opening”. The surah explains that the treaty brought tranquillity, that Allah knew what the believers did not, and that the hostile Quraysh had been restrained from fighting them. It also promises that they would enter the Sacred Mosque in safety, which happened the following year.`) +
          P(`The lesson is not that appearances never matter. It is that a leader may see a horizon that the community cannot yet see, and that loyalty in such moments is tested precisely by disappointment. The companions who stayed with the Prophet ﷺ were later able to look back on Hudaybiyyah as the beginning of the great expansion.`)
      },
      {
        id: 'surah-al-fath',
        heading: 'The Fruits of Hudaybiyyah',
        html: P(`The strategic results were substantial. For the first time, Quraysh dealt with the Muslims as a political party rather than as outlaws. The truce opened the roads, and the tribes could now choose alliances without fear of Quraysh reprisal. Delegations came to Madinah, and the number of conversions increased markedly. The following year the Muslims performed the umrah of qada in Makkah, and the Quraysh withdrew for three days as agreed.`) +
          P(`The treaty also allowed the Prophet ﷺ to turn his attention to other fronts. He sent letters to neighbouring rulers — the Byzantine emperor, the Persian king, the Negus of Abyssinia, the governor of Egypt and others — inviting them to Islam. The authenticity and exact wording of some of these letters are debated, but the diplomatic activity is well attested. The expedition to Khaybar in the seventh year removed a hostile Jewish stronghold north of Madinah.`) +
          P(`Hudaybiyyah therefore functioned as a diplomatic revolution. It converted a military stalemate into recognition, and recognition into expansion. The Qur’an’s description of it as a conquest is not rhetorical inflation; it is a judgement about the long-term consequences of a treaty that looked like a concession.`)
      },
      {
        id: 'breach',
        heading: 'The Breach of the Treaty',
        html: P(`The truce held for about two years. Then the tribe of Banu Bakr, allied with Quraysh, attacked the tribe of Khuza’ah, allied with the Muslims, in the sacred territory of Makkah. Quraysh supported the attack with men and weapons. The treaty had made an attack on an ally equivalent to an attack on the party itself, so the breach was clear.`) +
          P(`Khuza’ah appealed to the Prophet ﷺ, and he gave them a choice: Quraysh could either pay blood-money, or dissolve the alliance with Banu Bakr, or consider the treaty void. Quraysh chose to dissolve the alliance, then sent Abu Sufyan to Madinah to repair the agreement. His mission failed. The Prophet ﷺ began preparations for a march on Makkah and concealed the destination, so that the city would not have time to organise a defence.`) +
          P(`The sources report that the Prophet ﷺ prayed, “O Allah, blind the spies and the news from Quraysh until we come upon them in their land.” The secrecy was effective. The Muslims assembled a force of about ten thousand, including many tribes who had joined since Hudaybiyyah, and marched in Ramadan of the eighth year.`)
      },
      {
        id: 'march',
        heading: 'The Secret March and the Camp at Marr al-Zahran',
        html: P(`The army camped at Marr al-Zahran, near Makkah, and lit ten thousand fires. Abu Sufyan came out to investigate and was brought to the Prophet ﷺ. He eventually accepted Islam, and the Prophet ﷺ granted protection to anyone who entered his house or the Sacred Mosque or stayed in his own home. The conversion of Abu Sufyan was a political and psychological victory: the chief of the opposing city had crossed over.`) +
          P(`The Prophet ﷺ divided the army into columns and gave strict orders about who should be fought and who should not. He instructed that no one should fight except those who resisted, and he named a small number of individuals who had committed serious crimes and were to be seized even if they clung to the Kaaba. The list is reported in the Sirah and includes people who had killed or mutilated Muslims.`) +
          P(`The entry was almost bloodless. A skirmish occurred at the pass of Khandamah, where Khalid ibn al-Walid’s column met resistance and a small number were killed on both sides. The Prophet ﷺ disapproved of the fighting and later paid blood-money for the dead. The main body entered Makkah without a battle.`)
      },
      {
        id: 'conquest',
        heading: 'The Conquest: Entry and Amnesty',
        html: P(`The Prophet ﷺ entered Makkah on his camel, with his head bowed in humility, reciting Surah al-Fath. He did not enter as a triumphant king demanding submission. He went first to the Kaaba, performed the circumambulation, and touched the Black Stone with a stick because the crowd was too dense.`) +
          P(`The people of Makkah gathered, expecting punishment. The Prophet ﷺ asked them what they thought he would do. They said that he was a noble brother and the son of a noble brother. He replied with the words of Joseph to his brothers: “No blame will there be upon you today. May Allah forgive you; and He is the most merciful of the merciful” (12:92). Then he said, “Go, for you are free.”`) +
          Q(`No blame will there be upon you today. May Allah forgive you; and He is the most merciful of the merciful.`, `Qur’an 12:92, recited by the Prophet ﷺ at the conquest`) +
          P(`The amnesty was not absolute. A small number of individuals accused of murder, mutilation or persistent treachery were excluded, and some were executed. The exceptions are reported in the Sirah and are a reminder that the general pardon was a political decision, not a legal abolition of all accountability. Even so, the contrast with the customary sack of a conquered city was stark. The Prophet ﷺ had the power to destroy Makkah and chose mercy.`) +
          NOTE(`<strong>Source caution:</strong> the famous words “Go, for you are free” are reported by Ibn Hisham and later historians, not in an authentic hadith with a sound chain. The general amnesty itself is well established in the early sources.`)
      },
      {
        id: 'kaaba',
        heading: 'The Cleansing of the Kaaba and Bilal’s Adhan',
        html: P(`The Prophet ﷺ ordered the idols around and inside the Kaaba to be removed and destroyed. He recited, “The truth has come, and falsehood has vanished; indeed falsehood is ever bound to vanish” (17:81). The Kaaba was restored as the house of the one God, and the pilgrimage was reformed. The change was theological and political at once: the sanctuary that had been the centre of the tribal cult became the centre of the worship of Allah alone.`) +
          P(`The Prophet ﷺ then ordered Bilal ibn Rabah, the formerly enslaved Abyssinian companion, to climb the Kaaba and give the call to prayer. The image is one of the most powerful in the Seerah: the man who had been tortured in Makkah now stood above the sanctuary and called the city to prayer. It was a public statement that the new order was not based on tribe, wealth or race.`) +
          P(`The Prophet ﷺ stayed in Makkah for a period, teaching and reorganising the sanctuary. He did not force the Makkans to convert. Many did, but the Qur’an’s principle of no compulsion remained, and the city was integrated into the growing polity through treaties, education and the gradual transformation of its institutions.`)
      },
      {
        id: 'aftermath',
        heading: 'Hunayn, Ta’if and the Consolidation',
        html: P(`The conquest of Makkah did not end the fighting. The tribes of Hawazin and Thaqif gathered at Hunayn, and the Muslims marched to meet them. The Qur’an describes the initial rout and the steadfastness of the Prophet ﷺ and a group of companions:`) +
          Q(`And on the day of Hunayn, when your multitude was pleasing to you but it availed you nothing, and the earth, for all its breadth, was constrained for you, and then you turned back, fleeing.`, `Qur’an 9:25`) +
          P(`The Muslims eventually won, and the spoils were distributed. The Prophet ﷺ gave generously to the new converts of Makkah, including Abu Sufyan and others, to reconcile their hearts, while some Ansar felt that they had been overlooked. He addressed them and reassured them, and the report is in Bukhari and Muslim. The episode shows that the politics of reconciliation continued after the victory.`) +
          P(`Ta’if was besieged but not taken at that time; its people later accepted Islam voluntarily. By the end of the ninth year, delegations were arriving from across Arabia, and the community had become the dominant power in the region. The conquest of Makkah was the turning point that made this possible.`)
      },
      {
        id: 'sources-and-limits',
        heading: 'Sources and Their Limits',
        html: P(`The main sources for Hudaybiyyah and the conquest are:`) +
          UL([
            `<strong>The Qur’an</strong> — especially 48:1–29, 9:25–27, 12:92 and 17:81.`,
            `<strong>Sahih al-Bukhari and Sahih Muslim</strong> — the treaty, the pledge of Ridwan, the conquest, the amnesty and Hunayn.`,
            `<strong>Ibn Hisham, al-Sirah al-Nabawiyyah</strong> — the fullest narrative of the negotiations, the march and the entry.`,
            `<strong>Al-Tabari, Tarikh al-Rusul wa al-Muluk</strong> — parallel reports and chronology.`,
            `<strong>Al-Waqidi, Kitab al-Maghazi</strong> — detail used with caution because of its weak standing.`,
            `<strong>Ibn Kathir, al-Bidayah wa al-Nihayah</strong> — a later synthesis with grading comments.`
          ]) +
          P(`The treaty text survives in several recensions with minor differences. The exact number of companions at Hudaybiyyah is given as fourteen hundred or fifteen hundred. The speeches at the conquest, including “Go, for you are free”, are from the historians and should be labelled as such. The Qur’anic verses and the main events are established in the sound sources.`) +
          NOTE(`<strong>Editorial note:</strong> this article distinguishes the Qur’anic and hadith evidence from the later narrative detail. It does not present the historians’ speeches as verbatim words of the Prophet ﷺ.`)
      }
    ],
    faqs: [
      { q: 'Why is Hudaybiyyah called a victory?', a: 'The Qur’an calls it a clear conquest (48:1) because the treaty gave the Muslims political recognition, opened the roads, allowed alliances and led to a large expansion of Islam. The military and diplomatic gains outweighed the apparent concessions.' },
      { q: 'What was the pledge of Ridwan?', a: 'It was a pledge of loyalty by the companions under a tree at Hudaybiyyah, after a rumour that the Quraysh envoy Uthman ibn Affan had been killed. The Qur’an praises those who pledged (48:18).' },
      { q: 'Why did the Prophet ﷺ accept the return of Muslim converts to Quraysh?', a: 'The clause was part of a package that secured a ten-year truce and recognition. It was a painful concession, and the companions struggled with it, but the treaty as a whole served the community. The clause was later used sparingly and became obsolete after the conquest.' },
      { q: 'Was the conquest of Makkah violent?', a: 'It was almost bloodless. A skirmish at Khandamah caused a small number of deaths, which the Prophet ﷺ disapproved of and compensated. The main entry was peaceful, and a general amnesty was granted, with exceptions for a small number of people accused of serious crimes.' },
      { q: 'Did the Prophet ﷺ forgive everyone in Makkah?', a: 'He granted a general amnesty and protected those who entered the Sacred Mosque, his house or Abu Sufyan’s house. A small number of individuals accused of murder, mutilation or persistent treachery were excluded. The amnesty was a political decision, not an abolition of all accountability.' }
    ],
    bibliography: [
      `The Qur’an — especially 9:25–27, 12:92, 17:81, 48:1–29. Translations adapted from Saheeh International unless stated.`,
      `Sahih al-Bukhari — the treaty of Hudaybiyyah, the pledge of Ridwan, the conquest and Hunayn.`,
      `Sahih Muslim — the treaty, the amnesty and the distribution of spoils at Hunayn.`,
      `Ibn Hisham, <em>al-Sirah al-Nabawiyyah</em> — the negotiations, the march, the entry and the speeches.`,
      `Al-Tabari, <em>Tarikh al-Rusul wa al-Muluk</em> — the chronology and parallel reports.`,
      `Al-Waqidi, <em>Kitab al-Maghazi</em> — detailed narrative, used with caution.`,
      `Ibn Kathir, <em>al-Bidayah wa al-Nihayah</em> — the conquest and its aftermath with grading comments.`,
      `Modern studies of the treaty of Hudaybiyyah, the diplomacy of the Prophet ﷺ and the conquest of Makkah.`
    ],
    related: [
      ...relatedBase,
      { href: 'battles-of-badr-uhud-and-the-trench.html', label: 'Badr, Uhud and the Trench: war, ethics and survival' },
      { href: 'farewell-sermon-and-final-years.html', label: 'The farewell sermon and the final years' },
      { href: 'madinah-society-and-first-muslim-state.html', label: 'Madinah: society, law and the first Muslim polity' },
      { href: 'seerah-of-prophet-muhammad.html', label: 'Seerah of Prophet Muhammad ﷺ: a guided journey' }
    ]
  },

  {
    slug: 'farewell-sermon-and-final-years',
    title: 'The Farewell Sermon and the Final Years',
    metaTitle: 'The Farewell Sermon and the Death of the Prophet ﷺ: Text, Context and Transmission',
    description: 'The farewell pilgrimage, the sermon at Arafah, the sanctity of life and property, the abolition of riba, the rights of women, the call to equality, the final months, the illness and death of the Prophet ﷺ, and the succession.',
    category: 'Seerah',
    readTime: '15 min',
    intro: P(`In the tenth year after the Hijrah, the Prophet ﷺ performed his only Hajj after the Hijrah and addressed the largest gathering of Muslims he had ever led. The speech we call the farewell sermon is short, but it summarises the moral revolution of his mission: the sanctity of life, property and honour; the abolition of usury; the rights of women; the equality of believers; and the command to hold fast to the Book of Allah.`) +
      P(`This article sets the sermon in its context, examines what the sound sources actually report, and follows the Prophet ﷺ through the final months to his death and burial. It also addresses the transmission problem: the “last sermon” that circulates online is often a composite paraphrase, and some of its most quoted lines are not from the most reliable reports. Honesty requires distinguishing the core from the embellishment.`),
    keyTakeaways: [
      `The farewell Hajj took place in the tenth year after the Hijrah, conventionally 632 CE.`,
      `The sermon was delivered at Arafah, with some reports placing the address at Mina; the core content is well attested.`,
      `It declared life, property and honour inviolable, abolished usury, and commanded fair treatment of women.`,
      `The “Book and Sunnah” version is found in some reports; the “Book of Allah” version is the most securely attested.`,
      `The equality passage (“no superiority of Arab over non-Arab”) is reported in later collections and graded variously.`,
      `The Prophet ﷺ died in Rabi al-Awwal of the eleventh year, in Aisha’s room, and was buried there.`,
      `The succession was resolved at the Saqifah of Banu Sa’idah; Sunnis and Shi’a interpret the events differently.`
    ],
    sections: [
      {
        id: 'last-hajj',
        heading: 'The Farewell Pilgrimage',
        html: P(`The Prophet ﷺ announced his intention to perform Hajj, and Muslims gathered in Madinah from across Arabia. The number of pilgrims is given in the sources as tens of thousands, though the figures vary. He performed the rites publicly so that the community could learn them from him, and he said, “Take your rites from me, for I do not know whether I will perform Hajj after this year.” The report is in Muslim.`) +
          P(`The pilgrimage was therefore both worship and instruction. The Prophet ﷺ demonstrated the stations, the standing at Arafah, the sacrifices and the circumambulation. He also addressed the people at Arafah on the ninth of Dhul-Hijjah, and the sermon is associated with that day. Some reports place a further address at Mina on the tenth or the days after. The sources do not give a single verbatim transcript; they give several reports with overlapping content.`) +
          P(`The Qur’an is reported to have been revealed at this time with the verse, “This day I have perfected for you your religion and completed My favour upon you and have approved for you Islam as religion” (5:3). Umar is reported to have wept when he heard it, understanding that the completion of the religion signalled the approaching end of the Prophet’s ﷺ life. The report is in Bukhari and Muslim.`)
      },
      {
        id: 'sermon-setting',
        heading: 'The Sermon: Setting and Transmission',
        html: P(`The farewell sermon is preserved in several reports, the fullest being the hadith of Jabir ibn Abdullah in Sahih Muslim describing the Hajj. Other versions appear in Bukhari, Abu Dawud, al-Tirmidhi, al-Nasa’i, Ibn Majah and the Musnad of Ahmad. They agree on the main themes but differ in wording and order, which is normal for a sermon transmitted by multiple listeners.`) +
          P(`The most widely circulated modern text — beginning “O People, lend me an attentive ear, for I know not whether after this year I shall ever be amongst you again” — is a composite. It blends lines from different reports and adds material that is not in the earliest collections. That does not make the whole text false, but it means that a quotation should be checked against a specific report rather than repeated as if it were a single authenticated transcript.`) +
          P(`This article therefore quotes only lines that are securely attested in the major collections, and it labels the rest. The core of the sermon is not in doubt: the Prophet ﷺ declared the sanctity of life, property and honour, abolished usury, commanded justice towards women, affirmed the equality of believers and asked the people to bear witness that he had conveyed the message.`) +
          NOTE(`<strong>Transmission caution:</strong> the popular “Last Sermon” text is a harmonised composite. Its themes are authentic, but it is not a verbatim transcript from a single sound report. Quotations should be attributed to a specific collection where possible.`)
      },
      {
        id: 'sanctity',
        heading: 'The Sanctity of Life, Property and Honour',
        html: P(`The sermon begins with a declaration that echoes the sanctity of the sacred month and the sacred city. The Prophet ﷺ said that the lives, property and honour of the believers are sacred to one another, and that they will meet their Lord and be questioned about their deeds. The report is in Muslim and Bukhari in slightly different wordings.`) +
          Q(`Your lives, your property and your honour are sacred to one another, like the sanctity of this day of yours, in this month of yours, in this city of yours.`, `Sahih Muslim, farewell sermon report of Jabir`) +
          P(`The comparison is deliberate. The Arabs revered the sacred month and the sacred territory; the sermon extends that reverence to the person, property and reputation of every believer. It is a radical move: the ordinary Muslim’s life and dignity are placed on the same level as the sanctuary itself.`) +
          P(`The Prophet ﷺ then said that he had conveyed the message and asked the people to witness it. The sermon ends with a repeated invocation, “O Allah, bear witness.” The structure is that of a covenant: the community is entrusted with what it has heard, and it is made responsible for transmitting it. The sermon is therefore not only a farewell but a commissioning.`)
      },
      {
        id: 'riba',
        heading: 'Usury and Economic Justice',
        html: P(`The sermon declares that all riba is abolished, and that the first riba to be abolished is that of Abbas ibn Abd al-Muttalib, the Prophet’s uncle. The report is in Muslim. This was a concrete act, not a general principle: a specific debt owed to a specific man was cancelled as a public example.`) +
          P(`The Qur’an had already condemned riba in the strongest terms, warning of war from Allah and His Messenger against those who persist in it (2:279). The Madinan market had been reformed by the prohibition of fraudulent weighing, hoarding and unjust exchange. The farewell sermon sealed the reform by making the abolition of usury part of the final testament.`) +
          P(`The economic teaching of the sermon is not limited to riba. It also assumes the sanctity of property: no one may take another’s wealth without lawful consent. The Prophet ﷺ had said in the same period that a Muslim’s property is not lawful for another except with his consent. The combination is important: the sermon protects property and simultaneously abolishes a form of profit that the Qur’an regarded as exploitative.`)
      },
      {
        id: 'women',
        heading: 'The Rights and Dignity of Women',
        html: P(`The sermon contains a well-known passage on women: “Fear Allah concerning women, for you have taken them by the trust of Allah and made their private parts lawful by the word of Allah.” The Prophet ﷺ explained that husbands have rights over wives and wives have rights over husbands, and he commanded kindness and provision. The report is in Muslim.`) +
          P(`The passage is often quoted in isolation, but its context matters. It comes within a sermon about the sanctity of life and property, and it treats the marital relationship as a trust (amanah) rather than a possession. The Qur’an elsewhere commands men to live with women in kindness (4:19), grants women inheritance, property and the right to consent to marriage, and condemns the harsh treatment of wives (4:19–21; 2:228–233).`) +
          P(`The sermon did not create a fully egalitarian society, and it would be dishonest to claim that it did. It set a standard of reciprocal rights and dignity that the community was to live up to, and the gap between the standard and the practice has varied across Muslim societies. The honest reading holds both: the sermon is a strong statement of women’s rights, and history shows that those rights were not always honoured.`)
      },
      {
        id: 'equality',
        heading: 'Equality and the End of Tribal Superiority',
        html: P(`The most quoted equality passage is not in the earliest collections in a single sound report. It is transmitted in the Musnad of Ahmad and in the collections of al-Bayhaqi and others, with chains that scholars have graded variously, often as hasan or acceptable in meaning. Its content is consistent with the Qur’an:`) +
          Q(`O mankind, indeed We have created you from male and female and made you peoples and tribes that you may know one another. Indeed, the most noble of you in the sight of Allah is the most righteous of you.`, `Qur’an 49:13`) +
          P(`The reported sermon line — “O people, your Lord is one and your father is one; there is no superiority of an Arab over a non-Arab, nor of a non-Arab over an Arab, nor of a white over a black, nor of a black over a white, except by piety” — expresses the same principle. Even where the chain is debated, the meaning is firmly established by the Qur’an and by the Prophet’s ﷺ practice.`) +
          P(`The sermon did not abolish slavery in a single sentence, and it did not create a classless society. It did something more specific: it removed lineage and race as grounds of superiority and made piety the criterion. That principle would be invoked repeatedly in later Islamic history, and it would be violated repeatedly as well. The sermon remains a standard by which those violations are judged.`)
      },
      {
        id: 'conveyed',
        heading: '“Have I Conveyed the Message?”',
        html: P(`The sermon closes with a question. The Prophet ﷺ asked the people whether he had conveyed the message, and they replied that he had. He then raised his finger to the sky and said, “O Allah, bear witness,” three times. The report is in Muslim.`) +
          P(`The gesture is a legal and spiritual act. The Prophet ﷺ is not asking for applause; he is calling Allah to witness that the trust has been delivered. The community is now the bearer of the message, and the sermon is the moment at which responsibility passes to it. The Qur’an describes the Prophet ﷺ as a warner and a bringer of good tidings, and it insists that his duty is to convey, not to compel (2:256; 88:21–22).`) +
          P(`The question also has a backward look. The Prophet ﷺ had begun his mission with a small circle in Makkah and had been rejected, tortured and expelled. At Arafah he stood before tens of thousands who had accepted the message. The sermon is the public completion of that arc, and the answer of the people is the community’s acceptance of the trust.`)
      },
      {
        id: 'final-months',
        heading: 'The Final Months: Tabuk, Delegations and Illness',
        html: P(`The farewell Hajj took place in the tenth year. In the ninth year the Prophet ﷺ had led the expedition to Tabuk, the farthest northern campaign, which ended without a battle but consolidated the northern frontier and tested the community’s resolve in a year of drought and hardship. The Qur’an addresses the reluctance of some believers to march (9:38–57) and praises those who gave generously.`) +
          P(`The ninth year is also called the Year of Delegations, because tribes from across Arabia sent representatives to Madinah to accept Islam or to conclude treaties. The community had become the dominant power in the peninsula, and the Prophet ﷺ spent much of his time teaching, receiving delegations and appointing governors and teachers.`) +
          P(`In the eleventh year he fell ill. The illness began with a headache and fever, and it worsened over several days. He continued to lead the prayer as long as he could, then asked Abu Bakr to lead it in his place. The report is in Bukhari and Muslim and is one of the indications that the community understood about the succession. He also ordered the expedition of Usama ibn Zayd to be prepared, and he urged the people to treat the Ansar well.`)
      },
      {
        id: 'death',
        heading: 'The Death of the Prophet ﷺ',
        html: P(`The Prophet ﷺ died on a Monday in Rabi al-Awwal of the eleventh year after the Hijrah, conventionally 632 CE. The exact day is given as the twelfth in the most common reports, with some saying the first or the second. He died in the room of Aisha, his wife, with his head resting against her. She reported that he was in pain and that he asked for water, and that his final words included the command to guard the prayer and to treat those whom their right hands possessed with kindness.`) +
          P(`The report of the final words is in Abu Dawud and Ibn Majah, and its chain has been discussed by scholars; it is not at the highest level of authenticity. What is certain is that the Prophet ﷺ remained concerned with prayer and with the vulnerable until the end. He also said, according to Bukhari, “Allah curses the Jews and the Christians who took the graves of their prophets as places of worship,” warning against the divinisation of graves.`) +
          P(`When he died, the community was stunned. Umar denied it. Abu Bakr entered, uncovered the face of the Prophet ﷺ, kissed his forehead and said, “You are more precious than my father and mother.” He then went out and addressed the people: “Whoever worshipped Muhammad, Muhammad has died. Whoever worshipped Allah, Allah is alive and does not die.” He recited, “Muhammad is not but a messenger; messengers have passed before him” (3:144). The report is in Bukhari.`) +
          P(`The Prophet ﷺ was washed, shrouded and buried in Aisha’s room, where he died, according to the report that prophets are buried where they die. The room later became part of the mosque of Madinah. The burial was simple, without a monumental tomb, in accordance with his teaching.`)
      },
      {
        id: 'succession',
        heading: 'The Succession and the Community After Him',
        html: P(`The Prophet ﷺ did not leave a written designation of a successor that was accepted by all. After his death, the companions gathered at the Saqifah of Banu Sa’idah, where the Ansar and the Muhajirun debated the leadership. Abu Bakr was chosen as the first caliph, and the majority of the community gave him allegiance. The decision was urgent because the community faced the threat of fragmentation and apostasy.`) +
          P(`The question of succession is one of the great divisions of Islamic history. Sunnis hold that the Prophet ﷺ did not explicitly appoint a successor and that the community’s choice of Abu Bakr was legitimate. Shi’a hold that Ali ibn Abi Talib was the divinely appointed imam and that the leadership belonged to the Prophet’s family. This article does not adjudicate the theological dispute; it records that the disagreement is old, serious and rooted in different readings of the sources.`) +
          P(`On the return journey from the farewell Hajj, at a place called Ghadir Khumm, the Prophet ﷺ addressed the people and spoke about the Ahl al-Bayt, his family. The report is found in several collections and its interpretation is disputed. Some see it as a designation of Ali; others see it as a general exhortation to honour the Prophet’s family. The difference is part of the same larger question.`) +
          P(`What is not disputed is the achievement. Within a generation, the community had moved from a persecuted minority in Makkah to a polity that would carry the message across three continents. The farewell sermon is the moral charter of that transition, and the death of the Prophet ﷺ is the moment at which the community had to learn to live without his physical presence.`)
      },
      {
        id: 'sources-and-limits',
        heading: 'Sources and Their Limits',
        html: P(`The main sources for the farewell sermon and the final years are:`) +
          UL([
            `<strong>The Qur’an</strong> — especially 3:144, 5:3, 9:38–57, 49:13 and 88:21–22.`,
            `<strong>Sahih Muslim</strong> — the fullest report of the farewell Hajj and the sermon of Jabir.`,
            `<strong>Sahih al-Bukhari</strong> — the farewell pilgrimage, the death of the Prophet ﷺ, Abu Bakr’s address and the burial.`,
            `<strong>Abu Dawud, al-Tirmidhi, al-Nasa’i and Ibn Majah</strong> — additional reports on the sermon and the final words, with varying grades.`,
            `<strong>The Musnad of Ahmad and the collections of al-Bayhaqi</strong> — the equality passage and other sermon variants.`,
            `<strong>Ibn Hisham, al-Sirah al-Nabawiyyah</strong> — the chronology of the final years, the illness and the death.`
          ]) +
          P(`The sermon is transmitted in several versions, and the popular composite text should not be treated as a single authenticated transcript. The exact date of the death, the details of the final illness and the words of the final moments are reported with variation. The article follows the most widely accepted chronology and marks the differences where they matter.`) +
          NOTE(`<strong>Editorial note:</strong> quotations are attributed to the collection in which they are reported. Where a report is graded weak or hasan, the article says so. The succession dispute is described, not adjudicated.`)
      }
    ],
    faqs: [
      { q: 'When was the farewell sermon delivered?', a: 'It was delivered during the farewell Hajj in the tenth year after the Hijrah, conventionally 632 CE, at Arafah on the ninth of Dhul-Hijjah. Some reports place a further address at Mina. The sources give several versions rather than one verbatim transcript.' },
      { q: 'Is the popular “Last Sermon” text authentic?', a: 'The text that circulates online is a composite. Its main themes are authentic and found in the major collections, but the wording is harmonised from different reports and includes later material. It should not be quoted as a single sound hadith.' },
      { q: 'Did the Prophet ﷺ say “I leave behind the Book and the Sunnah”?', a: 'The “Book of Allah” version is the most securely attested, in Sahih Muslim. The “Book and Sunnah” version appears in other reports, including a mursal report in Malik’s Muwatta, and scholars have discussed its chain. The meaning of both is that the community is to hold fast to revelation.' },
      { q: 'How did the Prophet ﷺ die?', a: 'He died of an illness in Rabi al-Awwal of the eleventh year after the Hijrah, in Aisha’s room, at the age of about sixty-three. He was buried where he died. The final words are reported with variation, and the most certain theme is his concern for prayer and for the vulnerable.' },
      { q: 'Who succeeded the Prophet ﷺ?', a: 'Abu Bakr was chosen as the first caliph at the Saqifah of Banu Sa’idah. Sunnis regard the choice as legitimate; Shi’a hold that Ali was the divinely appointed successor. The disagreement is old and rooted in different readings of the sources.' }
    ],
    bibliography: [
      `The Qur’an — especially 3:144, 5:3, 9:38–57, 49:13, 88:21–22. Translations adapted from Saheeh International unless stated.`,
      `Sahih Muslim — the farewell Hajj and the sermon of Jabir ibn Abdullah.`,
      `Sahih al-Bukhari — the farewell pilgrimage, the death of the Prophet ﷺ, Abu Bakr’s address and the burial.`,
      `Abu Dawud, al-Tirmidhi, al-Nasa’i and Ibn Majah — additional reports on the sermon and the final words.`,
      `The Musnad of Ahmad ibn Hanbal and the collections of al-Bayhaqi — the equality passage and sermon variants.`,
      `Ibn Hisham, <em>al-Sirah al-Nabawiyyah</em> — the final years, the illness and the death.`,
      `Al-Tabari, <em>Tarikh al-Rusul wa al-Muluk</em> — the chronology of the eleventh year and the Saqifah.`,
      `Modern studies of the farewell sermon, the succession and the historiography of the final years.`
    ],
    related: [
      ...relatedBase,
      { href: 'hudaybiyyah-and-conquest-of-makkah.html', label: 'Hudaybiyyah and the conquest of Makkah' },
      { href: 'battles-of-badr-uhud-and-the-trench.html', label: 'Badr, Uhud and the Trench: war, ethics and survival' },
      { href: 'madinah-society-and-first-muslim-state.html', label: 'Madinah: society, law and the first Muslim polity' },
      { href: 'seerah-of-prophet-muhammad.html', label: 'Seerah of Prophet Muhammad ﷺ: a guided journey' }
    ]
  }
];
