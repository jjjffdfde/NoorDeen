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
    slug: 'pre-islamic-arabia-jahiliyyah',
    title: 'Pre-Islamic Arabia: The World That Received the Qur’an',
    metaTitle: 'Pre-Islamic Arabia (Jahiliyyah): Society, Religion and the Makkan Sanctuary',
    description: 'The land, caravan economy, tribal law, religion of the Kaaba, poetry, the status of women and the vulnerable, slavery, the sacred months and the Year of the Elephant — the historical setting of the Prophet’s birth, with the limits of the sources stated.',
    category: 'Seerah',
    readTime: '14 min',
    intro: P(`The Qur’an did not arrive in an empty landscape. It addressed a living society of traders, poets, tribes, sanctuaries and inherited customs. Its moral criticism only makes sense against that background, and the Prophet’s ﷺ early audience understood exactly what was being challenged.`) +
      P(`This article describes the Arabia of the late sixth century: its economy, tribal order, religious life, language and social hierarchy. It also explains what the sources can and cannot tell us. Much of the detail comes from later compilers such as Ibn Hisham (d. 218 AH) and al-Tabari (d. 310 AH), from pre-Islamic poetry, and from archaeology and inscriptions. Those sources are valuable, but they are not all equally reliable, and this article does not fill gaps with invented colour.`),
    keyTakeaways: [
      `Pre-Islamic Arabia was not one uniform “pagan” bloc; Jewish, Christian, Zoroastrian and hanif currents existed alongside Arabian cults.`,
      `Makkah’s standing rested on the sanctuary, the pilgrimage and long-distance trade, not on agriculture.`,
      `Tribal solidarity protected members but could also produce blood feuds and collective punishment.`,
      `The Qur’an criticises specific injustices — idolatry, female infanticide, exploitative inheritance, arrogance — rather than Arab identity as such.`,
      `The Prophet ﷺ was born into this world and was shaped by its language, trade and reputation for honesty.`,
      `Later reports about the jahiliyyah must be handled critically; not every vivid story is authentic.`
    ],
    sections: [
      {
        id: 'why-context-matters',
        heading: 'Why the Pre-Islamic Context Matters',
        html: P(`“Jahiliyyah” is usually translated as “the age of ignorance”. It does not mean that pre-Islamic Arabs knew nothing. They had sophisticated poetry, genealogy, trade law, astronomy for navigation and a complex ritual culture. In Qur’anic usage, jahiliyyah is primarily a moral and religious condition: the absence of guidance from Allah, and the acceptance of customs that the revelation would judge.`) +
          P(`The Qur’an refers to “the former ignorance” (33:33), “the judgement of ignorance” (5:50) and the “zealotry of ignorance” (48:26). It also commands believers not to insult the idols of others lest they insult Allah out of ignorance (6:108). The tone is not contempt for a people but a summons away from a distorted order.`) +
          P(`Reading the Seerah without this setting produces two errors. One is romanticism: an Arabia of pure nobility and poetry. The other is caricature: a desert of unrelieved cruelty. The truth is more interesting. The same society that produced tribal vengeance also produced the pact of al-Fudul, in which the young Muhammad ﷺ joined an alliance to defend the wronged. The same Makkah that persecuted the believers also honoured the sanctity of the sanctuary and the sacred months.`)
      },
      {
        id: 'land-and-trade',
        heading: 'The Land, the Sanctuary and the Caravan Economy',
        html: P(`Makkah sits in a barren valley with no reliable agriculture. Its importance was religious and commercial at once. The Kaaba made it a pilgrimage destination; the pilgrimage made it a meeting point; the meeting point made it a market. The Qur’an names this security and provision directly:`) +
          Q(`For the accustomed security of the Quraysh — their accustomed security in the caravan of winter and summer — let them worship the Lord of this House, who has fed them, [saving them] from hunger and made them safe, [saving them] from fear.`, `Qur’an 106:1–4`) +
          P(`Quraysh organised caravans north to Syria and south to Yemen. They traded leather, cloth, aromatics, spices and other goods, and they negotiated safe passage with tribes along the routes. Makkah was also a sanctuary (haram) in which fighting was traditionally forbidden, which made it useful for arbitration and commerce.`) +
          P(`The annual fairs — Ukaz, Majannah and Dhul-Majaz — brought poets, traders and pilgrims together. Poetry competitions gave the Arabic language a public stage. The Prophet’s ﷺ own reputation as al-Amin, the trustworthy, was an asset in this commercial world: Khadijah bint Khuwaylid employed him to trade on her behalf before their marriage.`)
      },
      {
        id: 'tribe-and-law',
        heading: 'Tribal Solidarity, Law and the Pact of al-Fudul',
        html: P(`Arabian society was organised around the tribe rather than the state. A tribe protected its members, avenged its dead and negotiated with rivals. There was no standing army or central police force in Makkah. Order rested on custom, arbitration, kinship and the balance of power.`) +
          P(`The strength of this system was solidarity. Its weakness was that justice depended on who your relatives were. A powerful tribe could shield a culprit; a weak family could be crushed by collective retaliation. The Qur’an would later condemn the tribal boast and replace it with a moral criterion:`) +
          Q(`O mankind, indeed We have created you from male and female and made you peoples and tribes that you may know one another. Indeed, the most noble of you in the sight of Allah is the most righteous of you.`, `Qur’an 49:13`) +
          P(`Makkah also knew cooperative justice. The pact of al-Fudul (hilf al-Fudul) was an alliance formed after the sacrilegious war to support any wronged person in Makkah, whether resident or outsider. The Prophet ﷺ later spoke of it with approval and said that if he were invited to such a pact in Islam, he would answer. The report is preserved by Ibn Hisham and later historians; it shows that the pre-Islamic world was capable of genuine moral initiative, not only of the vices the Qur’an condemns.`) +
          P(`The point is not that tribal society was lawless. It had law, but it was a law of status and retaliation. The revelation would insist on a different principle: the same prohibition applies to the noble and the weak, and the blood of every believer is equal.`)
      },
      {
        id: 'religion-of-makkah',
        heading: 'The Religion of the Kaaba',
        html: P(`Arabian religion was diverse. The Qur’an names three goddesses associated with Makkah — al-Lat, al-Uzza and Manat — and rejects the idea that they could intercede with Allah (53:19–23). Hubal was a prominent idol in the Kaaba. Other tribes had their own deities, sacred stones, trees and ritual sites.`) +
          P(`Yet the Arabs generally acknowledged a supreme creator. The Qur’an quotes them saying that Allah created the heavens and the earth (29:61; 31:25) and that He provides from the sky and the earth (29:63). The error was not denial of a high god but the worship of intermediaries and the association of partners with Him.`) +
          P(`The Kaaba itself was traced to Ibrahim and Isma’il. The Qur’an presents Ibrahim as a hanif, a monotheist who was neither Jew nor Christian (3:67; 6:161; 16:120), and it describes him and Isma’il raising the foundations of the House and praying for a messenger from among their descendants (2:127–129). Over centuries the sanctuary had been filled with idols and its pilgrimage wrapped in customs that the revelation would reform.`) +
          P(`Judaism was established in Yathrib and Khaybar; Christianity in Najran and among some Arab tribes; Zoroastrian influence reached the eastern regions through Persia. There were also hanifs — individuals who rejected idolatry and sought the religion of Ibrahim. Waraqa ibn Nawfal, Khadijah’s cousin, is described as one of them in the first-revelation reports. The pre-Islamic religious landscape was therefore not a single cult but a contested field.`)
      },
      {
        id: 'poetry-and-language',
        heading: 'Poetry, Oratory and the Arabic Language',
        html: P(`Arabic was the prestige language of poetry and tribal memory. The qasidah, the formal ode, could praise, satirise, mourn or preserve genealogy. The Mu’allaqat, a later collection of celebrated odes, show the sophistication of the poetic tradition. Oratory was equally important in war, peace and negotiation.`) +
          P(`The Qur’an challenged this culture on its own ground. It was revealed in “a clear Arabic tongue” (16:103; 26:195), and its opponents were accused of listening to a human teacher — a charge the Qur’an answers by pointing to the eloquence and coherence of the message. The Qur’an also distances itself from the poets’ worldly conventions while acknowledging that poets can be believers who do righteous deeds (26:224–227).`) +
          P(`This does not mean that every pre-Islamic poem is historically reliable. Poetry was transmitted orally and edited later; poems could be attributed to famous names, and verses could be adjusted to fit a story. Scholars of Arabic literature treat the corpus as evidence for language, values and imagery, not as a verbatim newspaper of events. The same caution applies to reports about the jahiliyyah in later histories.`)
      },
      {
        id: 'women-and-vulnerable',
        heading: 'Women, Children and the Vulnerable',
        html: P(`The status of women varied by tribe, class and circumstance. Some women owned property, traded and exercised influence; Khadijah is the clearest example. Others faced severe restrictions. The Qur’an addresses several specific injustices:`) +
          UL([
            `<strong>Inheritance:</strong> the Qur’an forbids treating women as part of the estate to be inherited against their will (4:19) and establishes shares for female heirs (4:7, 4:11–12).`,
            `<strong>Female infanticide:</strong> the Qur’an condemns the burial of infant daughters (16:58–59; 81:8–9) and the fear of daughters as a mark of ignorance (43:17).`,
            `<strong>Marriage and consent:</strong> the Qur’an requires kind treatment and mutual rights (2:228; 4:19), though the detailed law of guardianship and consent was elaborated by jurists.`,
            `<strong>Economic rights:</strong> women may own, buy, sell, inherit and give charity; the Prophet’s ﷺ wife Khadijah ran a trading operation.`
          ]) +
          P(`These verses did not create a perfect society overnight. They set a direction of reform that the Prophet ﷺ applied in Madinah and that the jurists developed over centuries. Reading them honestly means acknowledging both the real improvements and the gap between ideals and practice in every generation.`) +
          P(`Children, orphans, widows, travellers and the poor were especially exposed in a society without a welfare state. The Qur’an repeatedly commands care for the orphan and the needy (2:177; 90:14–16; 93:9–10), and it warns against consuming an orphan’s property (4:10). The Prophet ﷺ himself was an orphan, raised first by his grandfather and then by his uncle. That biography shaped his later insistence on protecting the vulnerable.`)
      },
      {
        id: 'slavery-and-hierarchy',
        heading: 'Slavery, Clients and Social Hierarchy',
        html: P(`Slavery existed across the ancient world, and Arabia was no exception. Enslaved people were captured in war, bought and sold, and used in households, herding and trade. Their legal status was inherited, and their testimony and marriage rights were restricted.`) +
          P(`The Qur’an did not abolish slavery in a single decree. It regulated it, urged manumission as an act of virtue and expiation (2:177; 90:13; 58:3), commanded that enslaved people who seek a written agreement to buy their freedom be granted it if they are capable (24:33), and insisted on kind treatment. The Prophet ﷺ freed slaves, and Bilal ibn Rabah, an enslaved Abyssinian who was tortured for his faith, became one of the most honoured Companions and the first muezzin of Madinah.`) +
          P(`This is a sensitive subject, and honesty requires more than a slogan. The revelation worked within an existing economy while setting slavery on a path of contraction. Later Muslim societies did not always follow that trajectory, and slavery persisted in some regions for centuries. A truthful account says both: the Qur’an’s direction was towards freedom and dignity, and historical Muslims often fell short.`) +
          P(`The same society had other hierarchies: clients (mawali) attached to tribes, freedmen, foreigners and people of low birth. The Qur’an’s criterion of nobility by righteousness (49:13) challenged the entire status system, even though social prejudice did not disappear.`)
      },
      {
        id: 'sacred-months-and-elephant',
        heading: 'The Sacred Months and the Year of the Elephant',
        html: P(`The Arabs observed four sacred months — Dhul-Qa’dah, Dhul-Hijjah, Muharram and Rajab — during which fighting was traditionally prohibited. The Qur’an acknowledges the sacred months and the sanctuary (2:194; 5:2; 9:36), while reforming the practice of intercalation by which people shifted the months to suit their interests (9:37).`) +
          P(`The Prophet ﷺ was born in the Year of the Elephant, traditionally around 570 CE. The Qur’an preserves the memory of Abraha’s expedition against the Kaaba in Surah al-Fil:`) +
          Q(`Have you not considered how your Lord dealt with the companions of the elephant? Did He not make their plan into misguidance? And He sent against them birds in flocks, striking them with stones of hard clay, and He made them like eaten straw.`, `Qur’an 105:1–5`) +
          P(`The story is reported by Ibn Hisham and other historians: Abraha, the Abyssinian governor of Yemen, marched on Makkah with an elephant, and the army was destroyed. The Qur’an treats the event as a sign of Allah’s protection of the House. The exact year and the details of the campaign are known from later reports, not from contemporary inscriptions, so the date is traditional rather than certain.`) +
          P(`What matters for the Seerah is the setting: Makkah believed itself protected by the sanctuary, and the Qur’an confirms that protection while redirecting gratitude to Allah alone. The Prophet’s ﷺ birth in this environment, and his early loss of his father, mother and grandfather, shaped the themes of mercy, orphanhood and trust that run through his message.`)
      },
      {
        id: 'hanifiyya-and-birth',
        heading: 'The Hanifs and the Prophet’s Early Life',
        html: P(`The Qur’an describes Ibrahim as a hanif, and it commands the Prophet ﷺ to follow the religion of Ibrahim (3:95; 16:123). The term hanifiyya came to describe monotheists who rejected idolatry before Islam. Ibn Hisham names several, including Zayd ibn Amr ibn Nufayl, who criticised the Makkan cult and died before the revelation.`) +
          P(`The Prophet ﷺ was born into Banu Hashim, a respected clan of Quraysh. His father Abdullah died before his birth; his mother Aminah died when he was six; his grandfather Abd al-Muttalib died when he was eight; and he was raised by his uncle Abu Talib. As a young man he worked as a shepherd and later as a trader, earning the title al-Amin. At about twenty-five he married Khadijah bint Khuwaylid, a successful businesswoman who was older than him and who became his first supporter.`) +
          P(`These facts matter because they locate the revelation in a real family and a real economy. The Prophet ﷺ was not a stranger who descended on Makkah from nowhere. He knew its trade routes, its genealogies, its disputes and its sanctuaries. When he later preached against idolatry, he was criticising practices he had grown up among, and when he spoke of the orphan and the widow, he spoke from experience.`)
      },
      {
        id: 'what-quran-affirms',
        heading: 'What the Qur’an Affirms and What It Rejects',
        html: P(`The Qur’an does not reject Arab identity. It affirms the Kaaba, the pilgrimage, the sacred months and the memory of Ibrahim and Isma’il. It even uses the pre-Islamic vocabulary of honour and generosity, redirecting it towards faith and charity. The Prophet ﷺ said that Allah chose Kinanah from among the Arabs, Quraysh from Kinanah, and Banu Hashim from Quraysh — a report that establishes the Prophet’s lineage without making ethnicity a substitute for righteousness.`) +
          P(`What the Qur’an rejects is shirk, moral arrogance, exploitation and the substitution of custom for divine guidance. It condemns:`) +
          UL([
            `associating partners with Allah and worshipping intermediaries (53:19–23; 39:3);`,
            `female infanticide and the devaluation of daughters (16:58–59; 81:8–9);`,
            `consuming orphans’ wealth and exploiting the weak (4:10; 89:17–20);`,
            `tribal boasting and judging people by lineage rather than piety (49:13);`,
            `following ancestral custom without evidence (43:22–24);`,
            `usury, fraud and unjust gain (2:275–279; 83:1–3).`
          ]) +
          P(`At the same time, the Qur’an praises the pact of al-Fudul, the generosity of the Arabs, the eloquence of the language and the sincerity of the hanifs. It is a message of reform, not erasure. The Prophet ﷺ would later say that he was sent to perfect noble character, and the pre-Islamic Arabs already had a word for that: muru’ah, manliness and honour. The revelation purified it and gave it a new foundation.`)
      },
      {
        id: 'sources-and-limits',
        heading: 'Sources and Their Limits',
        html: P(`The main narrative sources for pre-Islamic Arabia are:`) +
          UL([
            `<strong>The Qur’an</strong> — the most important witness, but it alludes to events rather than narrating them in chronological detail.`,
            `<strong>Pre-Islamic poetry</strong> — valuable for language and values, but orally transmitted and later edited.`,
            `<strong>Ibn Hisham’s Sirah</strong> — the recension of Ibn Ishaq (d. 150 AH), compiled in the third century; rich but containing reports of varying reliability.`,
            `<strong>Al-Tabari’s Tarikh</strong> — a vast compilation that preserves earlier reports, including many weak or legendary ones.`,
            `<strong>Ibn al-Kalbi’s Kitab al-Asnam</strong> — a later source on Arabian cults, useful but not neutral or fully reliable.`,
            `<strong>Archaeology and inscriptions</strong> — independent evidence for trade, languages and religion, though still uneven for western Arabia.`
          ]) +
          P(`A responsible account distinguishes between what the Qur’an says, what the earliest Muslim reports say, and what later storytellers added. It does not invent conversations, exact dates or physical descriptions to make the narrative vivid. Where the sources disagree, this article says so.`) +
          NOTE(`<strong>Editorial note:</strong> this is an educational synthesis, not a critical edition of the Seerah. Dates are approximate and follow the conventional chronology. Reports from Ibn Hisham, al-Tabari and later historians are identified as such rather than presented as sahih hadith.`)
      }
    ],
    faqs: [
      { q: 'Does “jahiliyyah” mean that pre-Islamic Arabs were stupid?', a: 'No. The term refers primarily to a moral and religious condition — life without divine guidance — not to a lack of intelligence or culture. Pre-Islamic Arabs had sophisticated poetry, trade, genealogy and law. The Qur’an criticises specific beliefs and injustices, not the people’s mental capacity.' },
      { q: 'Was everyone in Makkah an idol worshipper?', a: 'No. The Qur’an and the Sirah show Jews, Christians, Zoroastrians and hanifs in the region, and some Makkans were uneasy about idolatry. The dominant public cult of Makkah was polytheistic, but the religious landscape was plural.' },
      { q: 'Did the Prophet ﷺ participate in the pact of al-Fudul?', a: 'Yes, according to reports preserved by Ibn Hisham and later historians. He praised the pact later and said he would join such an alliance in Islam. It was a pre-Islamic agreement to defend the wronged, and it shows that the society was capable of genuine moral cooperation.' },
      { q: 'Was the Year of the Elephant exactly 570 CE?', a: 'The traditional date is around 570 CE, but it is not certain. The Qur’an preserves the event in Surah al-Fil; the exact year comes from later reports and is approximate. Scholars use “the Year of the Elephant” as a conventional reference point for the Prophet’s birth.' },
      { q: 'Does the Qur’an approve of slavery?', a: 'The Qur’an regulates the existing institution, commands kind treatment, encourages manumission and requires freedom agreements for those who seek them. It does not present slavery as a moral ideal. Later Muslim societies did not always follow the trajectory of reform, and honesty requires acknowledging that gap.' }
    ],
    bibliography: [
      `The Qur’an — especially 2:127–129, 3:67, 5:2, 6:108, 9:36–37, 16:58–59, 17:31, 26:224–227, 33:33, 43:22–24, 49:13, 53:19–23, 81:8–9, 90:13–16, 105, 106. Translations adapted from Saheeh International unless stated.`,
      `Ibn Hisham, <em>al-Sirah al-Nabawiyyah</em> — the recension of Ibn Ishaq; pre-Islamic Arabia, the Year of the Elephant, the hanifs and the pact of al-Fudul.`,
      `Al-Tabari, <em>Tarikh al-Rusul wa al-Muluk</em> — the pre-Islamic period and the birth of the Prophet ﷺ; reports of varying reliability.`,
      `Ibn Kathir, <em>al-Bidayah wa al-Nihayah</em> — the pre-Islamic era and the Seerah, with his own grading comments on reports.`,
      `Ibn al-Kalbi, <em>Kitab al-Asnam</em> — a later source on Arabian idols; used with caution.`,
      `Sahih al-Bukhari and Sahih Muslim — the Prophet’s ﷺ lineage, the first revelation, and reports on the sanctity of Makkah.`,
      `Pre-Islamic poetry, including the Mu’allaqat — used for language and values, not as a verbatim chronicle.`,
      `Modern critical studies of pre-Islamic Arabia and the Qur’anic milieu for archaeology, epigraphy and source criticism.`
    ],
    related: [
      ...relatedBase,
      { href: 'seerah-of-prophet-muhammad.html', label: 'Seerah of Prophet Muhammad ﷺ: a guided journey' },
      { href: 'makkan-persecution-and-resilience.html', label: 'The Makkan phase: persecution and patience' },
      { href: 'isra-and-miraj-night-journey.html', label: 'Al-Isra’ wal-Mi’raj: the night journey' },
      { href: 'hijrah-to-madinah.html', label: 'The Hijrah to Madinah' }
    ]
  },

  {
    slug: 'makkan-persecution-and-resilience',
    title: 'The Makkan Phase: Persecution, Patience and the Early Believers',
    metaTitle: 'Makkan Persecution: The Early Muslims, Boycott and Resilience',
    description: 'The first revelation, secret and public preaching, why Quraysh opposed the message, the torture of the vulnerable, the boycott, the migration to Abyssinia, the Year of Sorrow, Ta’if, and the Qur’anic response to persecution.',
    category: 'Seerah',
    readTime: '14 min',
    intro: P(`The Makkan period is often summarised as “thirteen years of patience”. That phrase is true but too smooth. It was thirteen years of preaching, argument, social pressure, torture, boycott, loss and repeated refusal. The early Muslims were not a large movement with a plan for statehood; they were a small, vulnerable community learning what it meant to obey Allah when obedience cost them their safety.`) +
      P(`This article follows the main stages of the Makkan phase and the Qur’anic response to each. It relies on the Qur’an, the Sirah of Ibn Hisham, and the hadith collections. Where a famous story comes from a later historian rather than an authentic hadith, it says so.`),
    keyTakeaways: [
      `The first revelation began in the cave of Hira and was followed by a pause that tested the Prophet ﷺ.`,
      `Preaching was private for about three years, then public; the opposition was driven by religion, status, economics and politics together.`,
      `The first targets were the vulnerable: enslaved people, the poor and those without tribal protection.`,
      `The boycott of Banu Hashim and the Year of Sorrow were severe social and personal tests.`,
      `The migration to Abyssinia shows that seeking safety and a just ruler is a legitimate prophetic strategy.`,
      `Ta’if was a rejection, but the Prophet ﷺ refused vengeance and chose patience.`,
      `The Qur’an does not treat suffering as proof of abandonment; it reframes it as a trial and a preparation.`
    ],
    sections: [
      {
        id: 'first-revelation',
        heading: 'The First Revelation and the Pause',
        html: P(`The Prophet ﷺ had begun to retreat to the cave of Hira outside Makkah for reflection. At about the age of forty, during Ramadan, the angel Jibril appeared and commanded him: “Read!” He replied that he could not read. The angel pressed him and recited the opening verses of Surah al-‘Alaq:`) +
          Q(`Read in the name of your Lord who created — created man from a clinging substance. Read, and your Lord is the most Generous — who taught by the pen — taught man that which he knew not.`, `Qur’an 96:1–5`) +
          P(`He returned home trembling and asked Khadijah to cover him. She reassured him, saying that Allah would not abandon him because he maintained family ties, bore the burdens of others, earned what was not his, honoured guests and helped the oppressed. She then took him to her cousin Waraqa ibn Nawfal, a Christian who recognised the pattern of revelation and warned that his people would oppose him. The account is preserved in Sahih al-Bukhari (Book of Revelation) and in the Sirah.`) +
          P(`Then the revelation paused. The Prophet ﷺ was deeply distressed, fearing that he had been abandoned. The pause ended with Surah al-Muddaththir or Surah al-Duha, depending on the report: “Your Lord has not taken leave of you, nor has He detested you” (93:3). The experience taught him that revelation was not under his control. It was a gift, and the gap between messages was itself a test.`)
      },
      {
        id: 'secret-and-public',
        heading: 'Secret Preaching, Then the Public Call',
        html: P(`For roughly three years the call was private. The Prophet ﷺ invited those closest to him: Khadijah, Abu Bakr, Ali, Zayd ibn Harithah and a small circle of trusted people. Abu Bakr in turn brought others. The first community was built through personal relationships, not public spectacle.`) +
          P(`Then came the command to speak openly: “And warn your closest kindred” (26:214), and “So proclaim what you have been commanded” (15:94). The Prophet ﷺ stood on Safa and called the clans of Quraysh, asking whether they would believe him if he told them an army was behind the mountain. They said yes, for they knew him as al-Amin. He then warned them of a severe punishment. Abu Lahab mocked him, and Surah al-Masad was revealed: “May the hands of Abu Lahab be ruined, and ruined is he” (111:1).`) +
          P(`The public call changed the nature of the conflict. It was no longer a private devotion but a challenge to the religious, social and economic order of Makkah. The Qur’an began to answer the objections directly, defending the oneness of Allah, the resurrection, the status of the Prophet ﷺ and the moral accountability of the powerful.`)
      },
      {
        id: 'why-opposition',
        heading: 'Why Quraysh Opposed the Message',
        html: P(`It is tempting to explain the opposition as simple ignorance. The Qur’an presents something more complex. Quraysh understood the message; they resisted its consequences.`) +
          UL([
            `<strong>Religious authority:</strong> the Prophet ﷺ denied the efficacy of the idols and the intercession of the goddesses. This threatened the custodianship of the Kaaba and the pilgrimage economy built around it.`,
            `<strong>Social status:</strong> the message declared that the noble and the weak were equal before Allah. For a society organised around lineage, this was destabilising.`,
            `<strong>Economic interest:</strong> the sanctuary and the pilgrimage brought trade and prestige. A new religion with a universal claim could disrupt that system.`,
            `<strong>Political power:</strong> the clans feared that a prophet from Banu Hashim would concentrate authority in one family.`,
            `<strong>Ancestral custom:</strong> the Qur’an records the argument that they found their fathers on a path and would follow their footsteps (43:22–24). Tradition was a source of identity, not merely a set of ideas.`
          ]) +
          P(`The Qur’an also records their accusations: that the Prophet ﷺ was a poet, a soothsayer, a madman or a man taught by others (16:103; 21:5; 26:224–227; 68:2). These were not neutral descriptions; they were attempts to discredit the message without engaging it. At the same time, some Makkans were moved by the Qur’an despite themselves. The Prophet ﷺ recited to them, and they called it “magic” because it divided families — a backhanded admission of its power.`)
      },
      {
        id: 'vulnerable-believers',
        heading: 'The Vulnerable Believers and the First Martyrs',
        html: P(`The first Muslims included people with powerful protectors and people with none. Abu Bakr, Umar (after his conversion), Hamzah and Abbas belonged to influential clans. Bilal was an enslaved Abyssinian; Khabbab ibn al-Aratt was a client; Sumayyah and Yasir were an elderly couple with no tribal shield; Ammar ibn Yasir was their son.`) +
          P(`Quraysh targeted the unprotected. Bilal was dragged over hot stones and forced to deny his faith; he repeated “Ahad, Ahad” — One, One. Abu Bakr bought and freed him. Sumayyah was killed by Abu Jahl, becoming the first martyr in Islam. Yasir died under torture. Khabbab was made to lie on burning coals. The Prophet ﷺ could not stop the torture, but he acknowledged their suffering and promised them Paradise.`) +
          P(`These stories are not decorative. They show that the early community was not a movement of the elite. It included the poor, the enslaved, women, young people and foreigners. The Qur’an’s insistence on justice for the weak was not an abstraction; it was written in the bodies of its first believers.`) +
          P(`The Prophet ﷺ also advised some believers to conceal their faith when concealment would save their lives. The Qur’an permits the denial of faith under compulsion while the heart remains firm (16:106), a concession that recognises the reality of torture without pretending that heroism is always possible.`)
      },
      {
        id: 'boycott-and-sorrow',
        heading: 'The Boycott and the Year of Sorrow',
        html: P(`As the movement grew, Quraysh escalated from individual persecution to collective pressure. They imposed a social and economic boycott on Banu Hashim, the Prophet’s clan, and on Banu al-Muttalib who protected him. The agreement was written and hung in the Kaaba. The clans were to refrain from trade, marriage and social relations with the boycotted families.`) +
          P(`The boycott lasted about three years. The Prophet’s ﷺ relatives, including some who had not accepted Islam, endured hunger and isolation in a valley outside Makkah. Eventually the agreement was revoked, according to the Sirah, after several Makkans objected to its injustice and the document was found to have been eaten by insects. The story of the document is a later report, not an authentic hadith, but the boycott itself is well attested in the earliest Sirah.`) +
          P(`Around 619 CE, the Prophet ﷺ lost two of his strongest supports: his uncle Abu Talib, who had protected him without accepting Islam, and his wife Khadijah, his first believer and closest companion. The year is called the Year of Sorrow (‘am al-huzn). The loss was personal and political at once. Without Abu Talib’s clan protection, the Prophet ﷺ was more exposed than ever.`) +
          P(`The Qur’an does not promise believers a life without loss. It promises that loss is not the end of the story. The Prophet’s ﷺ grief in this period is a model of how faith and sorrow can coexist without denial.`)
      },
      {
        id: 'abyssinia',
        heading: 'The Migration to Abyssinia',
        html: P(`When persecution intensified, the Prophet ﷺ advised some believers to migrate to Abyssinia (al-Habashah), where a Christian king, the Negus (al-Najashi), was known for justice. The first group went around 615 CE; a second, larger group followed. Among them were Ja’far ibn Abi Talib, Asma bint Umays, Uthman ibn Affan and Ruqayyah.`) +
          P(`Quraysh sent envoys with gifts to persuade the Negus to hand the Muslims over. The Negus asked the Muslims about their religion. Ja’far recited Surah Maryam, and the king and his bishops were moved. He refused to surrender the refugees, saying that he would not give up people who had come to his land seeking protection. The report is preserved in the Sirah and later histories; the exact dialogue may be elaborated, but the migration and the protection are established.`) +
          P(`The episode matters for several reasons. It shows that the Prophet ﷺ was willing to send believers to a non-Muslim ruler when that ruler was just. It shows that Muslims could present their faith respectfully to a Christian court. And it shows that migration is not a failure; it can be a strategy of survival and witness. Some Muslims later returned to Makkah, while others stayed until the Hijrah.`)
      },
      {
        id: 'taif',
        heading: 'Ta’if and the Refusal of Revenge',
        html: P(`After the Year of Sorrow, the Prophet ﷺ travelled to Ta’if, hoping that the Thaqif tribe would accept the message or at least protect him. They rejected him and set their young men and slaves to pelt him with stones as he left. He was wounded and sought shelter in a vineyard belonging to two Makkans.`) +
          P(`According to the well-known report, the angel of the mountains came to him and offered to crush the people of Ta’if between the mountains. The Prophet ﷺ refused, saying that he hoped Allah would bring forth from their descendants people who would worship Him alone. The report is found in Sahih al-Bukhari and Sahih Muslim, though the wording varies.`) +
          P(`The refusal of revenge is one of the most important moments in the Seerah. The Prophet ﷺ had been physically attacked and rejected by a whole town. He could have asked for destruction. Instead he asked for their descendants. This is not weakness; it is a deliberate choice to break the cycle of vengeance that defined the tribal order.`) +
          P(`Ta’if also shows that the Prophet ﷺ did not rely on miracles to compel belief. He could have called down punishment; he chose to continue preaching. The Qur’an would later describe him as a mercy to the worlds (21:107), and Ta’if is one of the clearest illustrations of that mercy.`)
      },
      {
        id: 'quranic-response',
        heading: 'The Qur’anic Response to Persecution',
        html: P(`The Makkan Qur’an speaks directly to a persecuted community. It does not tell believers that their suffering is imaginary or that faith will make them comfortable. It tells them that trials are part of the prophetic path:`) +
          Q(`Do the people think that they will be left to say, “We believe,” and they will not be tried?`, `Qur’an 29:2`) +
          P(`It reminds them that earlier communities faced worse: “Or do you think that you will enter Paradise while such [trial] has not yet come to you as came to those who passed on before you?” (2:214). It promises that Allah does not burden a soul beyond its capacity (2:286) and that He is with the patient (2:153).`) +
          P(`The Makkan Qur’an also tells stories of persecuted believers from the past. Surah al-Buruj (85) describes the people of the trench who were killed for their faith, and it promises that the perpetrators will face the Fire. Surah al-Kahf (18) tells of young men who fled to a cave to protect their faith. Surah Yusuf (12) tells of betrayal, imprisonment and eventual vindication. These narratives gave the early Muslims a vocabulary for their own experience.`) +
          P(`At the same time, the Qur’an permits self-defence and migration. It does not command passivity in the face of aggression. The Makkan phase was a period of restraint because the community was weak and the command to fight had not yet been given. The later Madinan verses would establish the ethics of war and peace in a different context. Reading the Makkan verses as a permanent prohibition of resistance, or the Madinan verses as a permanent licence for aggression, both distort the Qur’an’s historical guidance.`)
      },
      {
        id: 'lessons',
        heading: 'What the Makkan Phase Teaches',
        html: P(`The Makkan period is a school in steadfastness. Several lessons stand out:`) +
          UL([
            `<strong>Truth is not validated by numbers.</strong> The early Muslims were few and powerless, yet the message was true.`,
            `<strong>The vulnerable matter most.</strong> The community’s credibility was tested by how it treated the enslaved, the poor and the unprotected.`,
            `<strong>Patience is active.</strong> The Prophet ﷺ kept preaching, negotiating, sending believers to safety and seeking allies. He did not simply wait.`,
            `<strong>Revenge is not the goal.</strong> Ta’if shows that the Prophet ﷺ wanted transformation, not destruction.`,
            `<strong>Institutions matter.</strong> The migration to Abyssinia and later to Madinah were strategic moves to create spaces where the community could live and grow.`,
            `<strong>Grief is not faithlessness.</strong> The Year of Sorrow shows that the Prophet ﷺ mourned deeply and continued his mission.`
          ]) +
          P(`For Muslims today, the Makkan phase is not a template for victimhood. It is a reminder that faithfulness may cost something, that solidarity with the weak is non-negotiable, and that the long arc of a community’s life is not determined by its first difficult chapter.`)
      },
      {
        id: 'sources',
        heading: 'Sources and Their Limits',
        html: P(`The main sources for this period are the Qur’an, the Sirah of Ibn Hisham, the hadith collections and the later histories of al-Tabari and Ibn Kathir. Each has limits:`) +
          UL([
            `The Qur’an alludes to events but rarely gives names, dates or full narratives.`,
            `Ibn Hisham’s Sirah preserves early reports but also includes weak and legendary material.`,
            `Sahih al-Bukhari and Sahih Muslim contain authentic reports about the first revelation, the boycott’s context and Ta’if, but not a continuous chronology.`,
            `Al-Tabari and later historians compiled reports without always grading them.`,
            `Poetry and genealogy can illuminate the period but were transmitted orally and edited later.`
          ]) +
          P(`This article therefore distinguishes between the Qur’anic anchor, authentic hadith, early Sirah reports and later popular additions. It does not claim to settle every historical detail.`) +
          NOTE(`<strong>Editorial note:</strong> the Makkan chronology is approximate. The order of some events and the exact duration of the boycott vary in the sources. The article follows the conventional sequence without presenting disputed details as certain.`)
      }
    ],
    faqs: [
      { q: 'How long was the Makkan period?', a: 'About thirteen years, from the first revelation to the Hijrah in 622 CE. The exact length depends on the date assigned to the first revelation, but the conventional figure is thirteen years.' },
      { q: 'Why did the Prophet ﷺ not fight back in Makkah?', a: 'The community was small and vulnerable, and the command to fight had not yet been given. The Prophet ﷺ chose restraint, preaching, negotiation and migration. Later, in Madinah, the context changed and the Qur’an gave detailed rules for defence and peace.' },
      { q: 'Was the migration to Abyssinia a permanent separation?', a: 'No. Some Muslims stayed for years, and some returned to Makkah or later joined the Hijrah to Madinah. It was a temporary refuge, not a schism.' },
      { q: 'Did the Prophet ﷺ really refuse to destroy Ta’if?', a: 'Yes, according to reports in Sahih al-Bukhari and Sahih Muslim. The angel of the mountains offered to crush the town, and the Prophet ﷺ refused, hoping that their descendants would worship Allah.' },
      { q: 'Is the story of the boycott document being eaten by insects authentic?', a: 'The boycott itself is well attested in the early Sirah. The detail that the document was eaten by insects is a later report and should be described as such, not as an authentic hadith.' }
    ],
    bibliography: [
      `The Qur’an — especially 2:153, 2:214, 2:286, 15:94, 16:106, 21:107, 26:214, 29:2, 85, 93, 96:1–5, 111. Translations adapted from Saheeh International unless stated.`,
      `Ibn Hisham, <em>al-Sirah al-Nabawiyyah</em> — the first revelation, the public call, the boycott, the migration to Abyssinia and Ta’if.`,
      `Sahih al-Bukhari — the beginning of revelation, the Prophet’s ﷺ character, the Ta’if report and the virtues of the Companions.`,
      `Sahih Muslim — the first revelation, the Ta’if report and the status of the early believers.`,
      `Al-Tabari, <em>Tarikh al-Rusul wa al-Muluk</em> — the Makkan period; reports of varying reliability.`,
      `Ibn Kathir, <em>al-Bidayah wa al-Nihayah</em> and <em>al-Sirah al-Nabawiyyah</em> — chronology and grading comments.`,
      `Martin Lings, <em>Muhammad: His Life Based on the Earliest Sources</em> — a modern narrative synthesis, useful alongside the primary sources.`,
      `W. Montgomery Watt, <em>Muhammad at Mecca</em> — a critical historical study of the Makkan context and opposition.`
    ],
    related: [
      ...relatedBase,
      { href: 'pre-islamic-arabia-jahiliyyah.html', label: 'Pre-Islamic Arabia: the world that received the Qur’an' },
      { href: 'isra-and-miraj-night-journey.html', label: 'Al-Isra’ wal-Mi’raj: the night journey' },
      { href: 'hijrah-to-madinah.html', label: 'The Hijrah to Madinah' },
      { href: 'seerah-of-prophet-muhammad.html', label: 'Seerah of Prophet Muhammad ﷺ: a guided journey' }
    ]
  },

  {
    slug: 'isra-and-miraj-night-journey',
    title: 'Al-Isra’ wal-Mi’raj: The Night Journey and the Gift of Prayer',
    metaTitle: 'Al-Isra’ wal-Mi’raj: The Night Journey, Jerusalem and the Five Prayers',
    description: 'What the Qur’an and authentic hadith say about the night journey and ascension, the question of date and bodily or spiritual travel, the sanctity of Jerusalem, the meeting with the prophets, the five daily prayers and the lessons for believers.',
    category: 'Seerah',
    readTime: '13 min',
    intro: P(`The night journey (al-Isra’) and ascension (al-Mi’raj) stand at the turning point of the Makkan period. The Prophet ﷺ had lost his uncle and his wife, been rejected at Ta’if and faced relentless opposition. Then, in a single night, he was taken from the Sacred Mosque to the Farthest Mosque and raised through the heavens. He returned with the five daily prayers.`) +
      P(`The event is affirmed by the Qur’an and by authentic hadith, but the sources do not answer every question people ask about it. This article sets out what is established, what is disputed, and what should be left to Allah. It avoids the elaborate descriptions that later storytellers added.`),
    keyTakeaways: [
      `The Qur’an affirms the journey from the Sacred Mosque to the Farthest Mosque in 17:1 and alludes to the vision in 53:1–18.`,
      `The ascension is narrated in authentic hadith, most famously in Sahih al-Bukhari and Sahih Muslim.`,
      `The exact date is not established; the 27th of Rajab is a later popular commemoration, not a confirmed historical date.`,
      `Scholars differ on whether the journey was bodily or spiritual; the majority position affirms the body, but the difference is not a basis for takfir.`,
      `Jerusalem and the Masjid al-Aqsa are sacred to Muslims, independently of later political disputes.`,
      `The central legal gift of the night is the five daily prayers, reduced from fifty.`,
      `The event is a lesson in hope: Allah can restore a servant after the hardest year.`
    ],
    sections: [
      {
        id: 'quranic-anchor',
        heading: 'The Qur’anic Anchor',
        html: P(`The primary Qur’anic text is the opening verse of Surah al-Isra’:`) +
          Q(`Exalted is He who took His Servant by night from al-Masjid al-Haram to al-Masjid al-Aqsa, whose surroundings We have blessed, to show him of Our signs. Indeed, He is the Hearing, the Seeing.`, `Qur’an 17:1`) +
          P(`The verse establishes several things: the journey was by night; it was from the Sacred Mosque to the Farthest Mosque; the surroundings of the Farthest Mosque were blessed; and the purpose was to show the Prophet ﷺ signs of Allah. It does not describe the means of travel, the heavens, the prophets he met or the prayers. Those details come from hadith.`) +
          P(`Surah al-Najm also describes a vision: “While he was in the highest part of the horizon... Then he approached and came closer... And he certainly saw him in another descent at the Lote Tree of the Utmost Boundary” (53:7–14). Exegetes differ on whether this refers to the same night, to an earlier vision, or to the Prophet’s ﷺ sight of Jibril. The Qur’an itself does not force a single chronological reconstruction.`) +
          P(`The verse also names Jerusalem. Al-Masjid al-Aqsa means “the farthest mosque”, and the site is the Haram al-Sharif in Jerusalem. The Qur’an calls its surroundings blessed, a point that classical scholars connected to the land of the prophets. This sanctity is religious, not a licence for political aggression by any party.`)
      },
      {
        id: 'hadith-evidence',
        heading: 'The Hadith Evidence',
        html: P(`The most detailed narration is the long hadith of Malik ibn Sa’sa’ah, reported in Sahih al-Bukhari and Sahih Muslim. It describes the Prophet ﷺ being brought al-Buraq, travelling to Jerusalem, leading the prophets in prayer, ascending through the heavens, meeting Adam, Isa, Yahya, Yusuf, Idris, Harun, Musa and Ibrahim, reaching the Lote Tree, and receiving the command of fifty prayers, which was reduced to five after Musa’s counsel.`) +
          P(`A shorter narration from Anas ibn Malik, also in the two Sahihs, describes the journey and the ascension. The reports differ in some details — the order of the prophets, the exact conversation, the number of heavens — and scholars have discussed these differences. What is firmly established is the journey, the ascension, the meeting with the prophets and the gift of the five prayers.`) +
          P(`Some popular accounts add vivid descriptions of al-Buraq’s appearance, the gates of heaven, the angels’ names, the Prophet’s ﷺ physical sensations and conversations that are not in the authentic texts. These should not be presented as certain. The hadith are rich enough without embellishment.`) +
          P(`The event is also mentioned in the Prophet’s ﷺ statement that he was taken to Bayt al-Maqdis and then to the heavens. The Companions treated it as a real event, and the Qur’an’s affirmation in 17:1 settles the basic fact for believers.`)
      },
      {
        id: 'date-and-commemoration',
        heading: 'When Did It Happen?',
        html: P(`The sources do not give a fixed date. Most reports place the journey shortly before the Hijrah, after the Year of Sorrow and the visit to Ta’if, when the Prophet ﷺ was about fifty. Some scholars suggest the tenth or eleventh year of prophethood; others place it earlier or later. The 27th of Rajab is widely observed as Laylat al-Isra’ wal-Mi’raj, but this date is not established by an authentic text.`) +
          P(`The commemoration developed later in Muslim history, with local customs varying widely. There is no authentic report that the Prophet ﷺ or the Companions marked the night with a specific ritual, communal prayer or food. A Muslim may remember the event, read the Qur’an and reflect on the gift of prayer, but should not invent a liturgy and attribute it to the Prophet ﷺ.`) +
          P(`This is not a rejection of all commemoration. It is a call to distinguish between historical memory and religious legislation. The night is significant because of what happened, not because of a particular date on the calendar.`)
      },
      {
        id: 'body-or-soul',
        heading: 'Bodily or Spiritual?',
        html: P(`Scholars have discussed whether the journey was with the body or in the soul. The majority of classical scholars affirmed that it was bodily, based on the Qur’an’s “He took His Servant by night” and on the hadith’s physical descriptions. Others, including some early scholars, understood it as a vision or a spiritual journey.`) +
          P(`The difference is not a matter of faith in the event itself. Both positions affirm that Allah showed the Prophet ﷺ signs and that the journey was real in the sense that it was not a dream invented by his opponents. The disagreement concerns the mode, not the truth.`) +
          P(`Some reports attributed to Aisha say that the Prophet’s ﷺ body did not leave, but these reports are debated by hadith scholars. The safest position is to affirm the journey as the Qur’an and authentic hadith describe it, to avoid speculative details, and to refrain from condemning those who hold a different scholarly view.`)
      },
      {
        id: 'jerusalem',
        heading: 'Jerusalem and the Farthest Mosque',
        html: P(`The journey links the Kaaba in Makkah to the Haram al-Sharif in Jerusalem. The Qur’an calls the latter “al-Masjid al-Aqsa” and says its surroundings are blessed. The Prophet ﷺ led the prophets in prayer there, according to the hadith, a sign of the continuity of the prophetic mission.`) +
          P(`Jerusalem is sacred to Muslims, Jews and Christians, and its history is layered with conquest, pilgrimage, coexistence and conflict. The Qur’an’s affirmation of the sanctity of the site does not justify the displacement or humiliation of others. Classical Muslim rule generally protected the lives and worship of non-Muslims under agreed terms, even when those terms were imperfectly applied.`) +
          P(`For Muslims, the night journey is a reminder that the land of the prophets is part of their religious memory. It is not a substitute for justice. The Prophet ﷺ taught that the rights of others are not cancelled by a sacred claim, and the Qur’an commands justice even against those you dislike (5:8).`)
      },
      {
        id: 'heavens',
        heading: 'The Ascent Through the Heavens',
        html: P(`The hadith describe the Prophet ﷺ ascending through the heavens and meeting prophets at different levels: Adam, Isa and Yahya, Yusuf, Idris, Harun, Musa and Ibrahim. He then reached the Lote Tree of the Utmost Boundary (sidrat al-muntaha), beyond which no created being passes.`) +
          P(`The meeting with Musa is particularly significant. When the Prophet ﷺ was commanded to establish fifty prayers, Musa advised him to return and ask for a reduction because his community would not be able to bear it. The Prophet ﷺ returned repeatedly until the command was reduced to five, with the promise that five would be rewarded as fifty.`) +
          P(`This dialogue is not a negotiation about Allah’s knowledge; Allah knew what would happen. It is a teaching device that shows the Prophet’s ﷺ concern for his community and the mercy embedded in the final command. The five prayers are described as a gift, not a burden imposed without consideration.`) +
          P(`The hadith also mention the Prophet’s ﷺ vision of Paradise and Hellfire, the angels and the Lote Tree. These descriptions are part of the unseen. They should be accepted as reported without attempting to draw or physically locate them.`)
      },
      {
        id: 'five-prayers',
        heading: 'The Gift of the Five Prayers',
        html: P(`The central legal outcome of the night is the five daily prayers. The Qur’an commands prayer in many places, but the details of the five times and their structure were taught by the Prophet ﷺ. The night journey is the moment when the command was given in the heavens, and the Prophet ﷺ described it as the most important gift he received.`) +
          P(`The five prayers are a daily connection between the servant and Allah. They are not a magic formula that makes a person sinless, and they are not a substitute for justice, charity or honest work. But they structure the day around remembrance and remind the believer that the world is not the whole of reality.`) +
          P(`The Prophet ﷺ said that the prayer is the first thing a servant will be asked about on the Day of Judgment. He also described it as a means of expiating sins, like a river at the door of one who bathes in it five times a day. These reports are found in the Sunan and the Sahih collections. The point is not that prayer automatically cancels every consequence of wrongdoing, but that it is the foundation of a life turned towards Allah.`) +
          P(`For a new Muslim or a person returning to prayer, the night journey is an invitation to begin. The command was reduced from fifty to five out of mercy. The response should be gratitude, not despair over past neglect.`)
      },
      {
        id: 'test-and-response',
        heading: 'The Test of Faith and the Response of Abu Bakr',
        html: P(`When the Prophet ﷺ told the people about the journey, Quraysh mocked him. They knew the distance to Jerusalem and could not imagine a night journey. Some believers wavered. The report says that Abu Bakr, when told, said: “If he said it, then he has spoken the truth.” He was thereafter called al-Siddiq, the truthful.`) +
          P(`The story is preserved in the Sirah and later sources rather than in the most rigorous hadith collections, but it captures the essence of the test. The night journey was not a public miracle designed to compel Quraysh. It was a private gift that deepened the faith of those who already trusted the Prophet ﷺ.`) +
          P(`The Qur’an refers to the vision as a trial for people: “And We did not make the sight which We showed you except as a trial for the people” (17:60). The event separated those who followed the Prophet ﷺ because of evidence and character from those who followed only what they could physically verify.`) +
          P(`This is a recurring Qur’anic theme. Faith is not credulity; it is trust grounded in evidence, character and the coherence of revelation. The night journey tested whether that trust could survive a report that seemed impossible.`)
      },
      {
        id: 'lessons',
        heading: 'Lessons for Believers',
        html: P(`The night journey offers several lessons:`) +
          UL([
            `<strong>Allah restores after loss.</strong> The Prophet ﷺ was at his lowest point when he was honoured with the ascent.`,
            `<strong>Prayer is a gift.</strong> The five prayers came from the heavens, reduced in mercy.`,
            `<strong>Jerusalem matters.</strong> The journey links the Kaaba and the Haram al-Sharif in one prophetic geography.`,
            `<strong>The unseen is real.</strong> The prophets, the Lote Tree and the heavens are part of revelation, not fantasy.`,
            `<strong>Do not embellish.</strong> The authentic reports are sufficient; invented details distract from the message.`,
            `<strong>Faith is tested.</strong> The event separated sincere trust from superficial belief.`
          ]) +
          P(`The night journey is not an excuse for sectarian rivalry or political violence. It is a call to prayer, to hope and to humility before what we do not know. The Prophet ﷺ returned from the highest creation with a command for ordinary life: pray, and do not give up.`)
      },
      {
        id: 'sources',
        heading: 'Sources and Their Limits',
        html: P(`The primary sources are:`) +
          UL([
            `The Qur’an — 17:1 and 53:1–18, with the surrounding context.`,
            `Sahih al-Bukhari — the long narration of Malik ibn Sa’sa’ah and the report of Anas ibn Malik.`,
            `Sahih Muslim — parallel narrations of the journey and the ascension.`,
            `Ibn Hisham, <em>al-Sirah al-Nabawiyyah</em> — the chronology and the reaction of Quraysh and Abu Bakr.`,
            `Ibn Kathir, <em>al-Bidayah wa al-Nihayah</em> and his tafsir — the scholarly discussion of the date and mode.`,
            `Later works on the night journey — useful for history of interpretation, but often contain weak or legendary reports.`
          ]) +
          P(`This article does not claim to resolve every difference. It distinguishes the Qur’anic anchor, the authentic hadith, the early Sirah reports and later popular additions. Where a detail is not established, it is not presented as certain.`) +
          NOTE(`<strong>Editorial note:</strong> the 27th of Rajab is a later commemoration, not a date established by the Qur’an or authentic Sunnah. Muslims should avoid attributing specific rituals to the Prophet ﷺ without evidence.`)
      }
    ],
    faqs: [
      { q: 'Is the night journey mentioned in the Qur’an?', a: 'Yes. Surah al-Isra’ 17:1 explicitly mentions the journey from the Sacred Mosque to the Farthest Mosque. Surah al-Najm 53:1–18 describes a vision that many exegetes connect to the ascent.' },
      { q: 'Did the Prophet ﷺ travel in body or soul?', a: 'Scholars differ. The majority affirm a bodily journey; others understand it as a spiritual vision. Both affirm the event as real. The difference concerns the mode, not the truth of the journey.' },
      { q: 'Is the 27th of Rajab the date of the night journey?', a: 'It is a popular commemoration, but the date is not established by the Qur’an or authentic hadith. The sources place the event shortly before the Hijrah without fixing a date.' },
      { q: 'Why is Jerusalem important to Muslims?', a: 'The Qur’an calls al-Masjid al-Aqsa the Farthest Mosque and says its surroundings are blessed. The Prophet ﷺ led the prophets in prayer there according to the hadith. Jerusalem is sacred to Muslims, Jews and Christians, and its sanctity does not justify injustice to any community.' },
      { q: 'What was the main gift of the night?', a: 'The five daily prayers. The hadith describe the command being reduced from fifty to five, with the reward of fifty, out of Allah’s mercy.' }
    ],
    bibliography: [
      `The Qur’an — especially 17:1, 17:60, 53:1–18. Translations adapted from Saheeh International unless stated.`,
      `Sahih al-Bukhari — the long narration of Malik ibn Sa’sa’ah and the report of Anas ibn Malik on the night journey and ascension.`,
      `Sahih Muslim — parallel narrations of al-Isra’ wal-Mi’raj and the five prayers.`,
      `Ibn Hisham, <em>al-Sirah al-Nabawiyyah</em> — the chronology and the reaction of Quraysh and Abu Bakr.`,
      `Ibn Kathir, <em>al-Bidayah wa al-Nihayah</em> and <em>Tafsir al-Qur’an al-‘Azim</em> — the date, the mode and the exegesis of 17:1 and 53:1–18.`,
      `Al-Tabari, <em>Jami’ al-Bayan</em> — the exegetical reports on the journey and the vision.`,
      `Al-Nawawi, <em>Sharh Sahih Muslim</em> — commentary on the ascension narrations.`,
      `Modern studies of the Seerah for the historical context of the Makkan period.`
    ],
    related: [
      ...relatedBase,
      { href: 'makkan-persecution-and-resilience.html', label: 'The Makkan phase: persecution and patience' },
      { href: 'hijrah-to-madinah.html', label: 'The Hijrah to Madinah' },
      { href: 'pre-islamic-arabia-jahiliyyah.html', label: 'Pre-Islamic Arabia: the world that received the Qur’an' },
      { href: 'seerah-of-prophet-muhammad.html', label: 'Seerah of Prophet Muhammad ﷺ: a guided journey' }
    ]
  },

  {
    slug: 'hijrah-to-madinah',
    title: 'The Hijrah to Madinah: Planning, Trust and a New Society',
    metaTitle: 'The Hijrah to Madinah: The Pledges, the Cave and the First Muslim Society',
    description: 'The pledges of Aqabah, the plot in Dar al-Nadwa, the cave of Thawr, the journey with Abu Bakr, Quba and the first mosque, the document of Madinah, the brotherhood between Muhajirun and Ansar, and the Hijri calendar.',
    category: 'Seerah',
    readTime: '14 min',
    intro: P(`The Hijrah is the hinge of the Seerah. In 622 CE the Prophet ﷺ and the early Muslims left Makkah for Yathrib, a town later known as Madinat al-Nabi. The move was not an escape from responsibility; it was a carefully planned migration that created the conditions for a new society.`) +
      P(`The Hijrah involved secret negotiations, a dangerous journey, a cave, a guide, a pursuer and a reception. It also involved a written agreement among the communities of Madinah, a brotherhood between the refugees and the helpers, and the construction of a mosque. This article follows the main stages and distinguishes the established reports from later embellishment.`),
    keyTakeaways: [
      `The pledges of Aqabah prepared the ground for the migration by securing protection and support in Yathrib.`,
      `The Prophet ﷺ planned the journey carefully: Ali stayed in his bed, Abu Bakr accompanied him, a guide was hired and a cave was used for concealment.`,
      `The Qur’an refers to the cave in 9:40: “Do not grieve; indeed Allah is with us.”`,
      `The arrival at Quba and the first mosque marked the beginning of a new community.`,
      `The document of Madinah established mutual obligations among the Muslims, the Jews and the tribes of the town.`,
      `The brotherhood between the Muhajirun and the Ansar was a radical experiment in sharing wealth and loyalty.`,
      `The Hijri calendar was instituted later by Umar, not by the Prophet ﷺ, and it begins with the year of the migration.`
    ],
    sections: [
      {
        id: 'turning-point',
        heading: 'A Turning Point After Thirteen Years',
        html: P(`By the tenth year of prophethood, the Prophet ﷺ had lost Abu Talib and Khadijah, been rejected at Ta’if and seen the Makkan opposition harden. The community was still small and vulnerable. Then came the possibility of a new base.`) +
          P(`Yathrib, an oasis town about 400 kilometres north of Makkah, was divided between the tribes of Aws and Khazraj and included Jewish communities. Its people had heard of the Prophet ﷺ through travellers and relatives. Some of them met him during the pilgrimage season and accepted Islam. These meetings led to the pledges of Aqabah.`) +
          P(`The Hijrah was not a sudden decision. It was the result of years of preaching, relationship-building and careful assessment. The Prophet ﷺ did not flee in panic; he sent his companions ahead in small groups, arranged protection and waited for the right moment.`)
      },
      {
        id: 'aqabah',
        heading: 'The Pledges of Aqabah',
        html: P(`The first pledge of Aqabah took place around 621 CE, when twelve men from Yathrib met the Prophet ﷺ and pledged to worship Allah alone, avoid theft, fornication and the killing of children, obey the Prophet ﷺ in what is right and not disobey him. This is known as the “pledge of women” because it resembles the conditions mentioned in Surah al-Mumtahanah 60:12.`) +
          P(`The second pledge, around 622 CE, involved seventy-three men and two women. They pledged to protect the Prophet ﷺ as they would protect their own families. The Prophet ﷺ then sent Mus’ab ibn Umayr to Yathrib to teach the Qur’an and Islam. Mus’ab’s work prepared the town for the migration.`) +
          P(`The pledges are reported in the Sirah and in Sahih al-Bukhari. They show that the Hijrah was based on a mutual covenant, not merely on an invitation. The people of Yathrib committed themselves to protect the Prophet ﷺ and the Muslims, and the Prophet ﷺ committed himself to their community.`)
      },
      {
        id: 'plot',
        heading: 'The Plot and the Departure',
        html: P(`Quraysh realised that the Prophet ﷺ was preparing to leave. They met in Dar al-Nadwa and agreed to kill him, choosing a young man from each clan so that the blood would be spread among the tribes and Banu Hashim could not take revenge on one family. The Qur’an refers to their plotting: “And [remember] when those who disbelieved plotted against you to restrain you or kill you or evict you” (8:30).`) +
          P(`The Prophet ﷺ learned of the plot and arranged for Ali to sleep in his bed, wrapped in his cloak. He told Ali that no harm would come to him. He then left with Abu Bakr, and they hid in the cave of Thawr, south of Makkah, for three days.`) +
          P(`The choice of Thawr was strategic: it was in the opposite direction from Yathrib, so pursuers would look north while the two men waited south. Abdullah ibn Abi Bakr brought news, Asma bint Abi Bakr brought food, and Amir ibn Fuhayrah, Abu Bakr’s freed slave, grazed sheep to erase footprints. The plan combined human intelligence with trust in Allah.`)
      },
      {
        id: 'cave',
        heading: 'The Cave of Thawr',
        html: P(`The most famous Qur’anic reference to the Hijrah is in Surah al-Tawbah:`) +
          Q(`If you do not aid him — Allah has already aided him when those who disbelieved had driven him out [of Makkah] as one of two, when they were in the cave and he said to his companion, “Do not grieve; indeed Allah is with us.”`, `Qur’an 9:40`) +
          P(`The verse names Abu Bakr as the companion of the cave and records the Prophet’s ﷺ reassurance. It is a powerful statement of trust: the two men were in physical danger, with pursuers nearby, and the Prophet ﷺ told his companion not to grieve because Allah was with them.`) +
          P(`The Sirah adds that Quraysh offered a reward for their capture and that a tracker followed them to the cave, but found the entrance covered by a spider’s web and a dove’s nest. The spider and dove detail is a later report, not an authentic hadith. It is beloved in popular storytelling, but it should be labelled as a later addition rather than presented as certain history.`) +
          P(`What is certain is the cave, the three days, the pursuers and the Qur’anic verse. The lesson does not depend on the spider.`)
      },
      {
        id: 'journey',
        heading: 'The Journey to Yathrib',
        html: P(`After three days, the Prophet ﷺ and Abu Bakr set out with a guide, Abdullah ibn Urayqit, who was not yet a Muslim but knew the desert routes. They travelled along the Red Sea coast to avoid the main caravan road. The journey was difficult: heat, thirst, rough terrain and the fear of pursuit.`) +
          P(`One of the pursuers, Suraqa ibn Malik, caught up with them. According to the Sirah, his horse stumbled, and he eventually asked for protection and promised not to reveal their location. He later became a Muslim. The story is preserved in the Sirah and later histories; it is not an authentic hadith, but it is part of the early narrative.`) +
          P(`Another famous story is that of Umm Ma’bad, a woman who gave them milk from a weak sheep. The report is found in Ibn Hisham and later sources, not in the two Sahihs. It is a beautiful story of hospitality and blessing, but it should be described as a later report.`) +
          P(`The Prophet ﷺ did not travel alone or rely on supernatural transport. He hired a guide, took provisions, planned a route and accepted help from non-Muslims. The Hijrah is a model of planning and trust, not of passivity.`)
      },
      {
        id: 'quba',
        heading: 'Quba and the First Mosque',
        html: P(`The Prophet ﷺ reached the outskirts of Yathrib, at Quba, around the beginning of Rabi’ al-Awwal. He stayed with the family of Amr ibn Awf and laid the foundation of a mosque there. The Qur’an refers to a mosque “founded upon piety from the first day” (9:108), which many exegetes identify with Quba.`) +
          P(`The first Friday prayer was held in the valley of Ranuna on the way into Yathrib. The Prophet ﷺ delivered a sermon and led the prayer. The community then entered the town, and the Prophet ﷺ stayed with Abu Ayyub al-Ansari while the mosque and his houses were built.`) +
          P(`Quba is significant because it shows that the first act of the new community was worship and construction, not conquest. The Prophet ﷺ built a mosque before he built a palace. The mosque was a place of prayer, teaching, consultation and refuge — the centre of the new society.`)
      },
      {
        id: 'madinah-and-document',
        heading: 'Madinah and the Document of the City',
        html: P(`Yathrib was a plural society. It included the Muhajirun (the emigrants from Makkah), the Ansar (the helpers from Aws and Khazraj), Jewish tribes such as Banu Qaynuqa, Banu Nadir and Banu Qurayzah, and other groups with their own alliances. The Prophet ﷺ established a written agreement, often called the Constitution of Madinah, to regulate relations among them.`) +
          P(`The document is preserved by Ibn Ishaq and Ibn Hisham. It declares that the Muslims and the Jews of Madinah are one community (ummah) alongside the believers, that each group retains its religion, that they cooperate against aggression, that disputes are referred to the Prophet ﷺ, and that the Jews share the costs of war with the Muslims. It also addresses the tribes of the town and their obligations.`) +
          P(`The document is not a modern constitution, and it did not create a secular state. It was a covenant among communities with different religions and tribal loyalties, designed to prevent the kind of civil war that had torn Yathrib apart. It established a common framework of security and adjudication while recognising religious difference.`) +
          P(`Its precise application was tested by later conflicts, and some Jewish tribes were eventually expelled or punished after breaches of the agreement. Historians debate the details and the extent of collective responsibility. What remains clear is that the Prophet ﷺ began with a plural agreement, not with forced conversion.`)
      },
      {
        id: 'brotherhood',
        heading: 'The Brotherhood of Muhajirun and Ansar',
        html: P(`The emigrants had left their homes and property in Makkah. The helpers of Madinah opened their homes and shared their wealth. The Prophet ﷺ established a bond of brotherhood (mu’akhah) between individual Muhajirun and Ansar, a relationship stronger than a business partnership and more formal than friendship.`) +
          P(`The Qur’an praises the Ansar: “And those who had settled in the home and [adopted] the faith before them love those who emigrated to them and find not any want in their breasts of what they were given but give [them] preference over themselves, even though they were in need” (59:9). It also describes the believers as brothers (49:10) and the Muhajirun and Ansar as allies of one another (8:72).`) +
          P(`The brotherhood was not a permanent transfer of property. It was a system of support during the initial period of hardship. Some Ansar offered to divide their wealth; the Prophet ﷺ encouraged generosity but also organised work, trade and the distribution of the spoils of war. The goal was dignity, not dependency.`) +
          P(`This experiment in sharing is one of the most striking social achievements of the Seerah. It was not based on ethnic kinship but on faith. It created a community that could absorb refugees and integrate them into a new society.`)
      },
      {
        id: 'calendar',
        heading: 'The Hijri Calendar',
        html: P(`The Islamic lunar calendar begins with the year of the Hijrah. It was not instituted by the Prophet ﷺ himself; according to the reports, Umar ibn al-Khattab established it during his caliphate to give the growing state a common dating system. The first year is 1 AH, corresponding to 622 CE.`) +
          P(`The calendar is lunar, with twelve months of twenty-nine or thirty days. The Qur’an says that the number of months with Allah is twelve (9:36) and that the new moons are markers of time for people and pilgrimage (2:189). The sighting of the crescent is the traditional method for beginning a month, though scholars and communities differ on whether astronomical calculation may be used.`) +
          P(`The Hijri calendar is not a claim that the Prophet ﷺ commanded a particular numbering system. It is a collective memory: every year counts from the migration that made the community possible. For Muslims, it is a reminder that the Hijrah was not a single event but the beginning of a new phase in the life of the ummah.`)
      },
      {
        id: 'lessons',
        heading: 'Lessons from the Hijrah',
        html: P(`The Hijrah offers lessons for individuals and communities:`) +
          UL([
            `<strong>Plan, then trust.</strong> The Prophet ﷺ arranged the route, the guide, the food and the hiding place, and he trusted Allah with the outcome.`,
            `<strong>Migration can be worship.</strong> Leaving a place of oppression for a place where faith can be practised is a prophetic strategy.`,
            `<strong>Build institutions.</strong> The first acts were a mosque, a covenant and a brotherhood, not a monument.`,
            `<strong>Pluralism requires justice.</strong> The document of Madinah protected different communities within a common framework.`,
            `<strong>Refugees need dignity.</strong> The Ansar shared their wealth, but the goal was to help the Muhajirun stand on their own feet.`,
            `<strong>Gratitude is political.</strong> The calendar begins with the Hijrah because the community remembered what Allah had done for it.`
          ]) +
          P(`The Hijrah is often remembered as a flight, but it was also a founding. It created the space in which the Qur’an could be applied, the Prophet ﷺ could teach, and a community could learn to govern itself. The migration was not the end of the Makkan struggle; it was the beginning of the Madinan responsibility.`)
      },
      {
        id: 'sources',
        heading: 'Sources and Their Limits',
        html: P(`The main sources for the Hijrah are:`) +
          UL([
            `The Qur’an — especially 8:30, 8:72, 9:40, 9:108, 59:9 and 60:12.`,
            `Sahih al-Bukhari — the pledges of Aqabah, the Hijrah and the Prophet’s ﷺ arrival in Madinah.`,
            `Sahih Muslim — parallel reports on the Hijrah and the brotherhood.`,
            `Ibn Hisham, <em>al-Sirah al-Nabawiyyah</em> — the most detailed early narrative, including the cave, the journey, Quba and the document of Madinah.`,
            `Al-Tabari, <em>Tarikh al-Rusul wa al-Muluk</em> — the chronology and the reports of the journey.`,
            `Ibn Kathir, <em>al-Bidayah wa al-Nihayah</em> — the Hijrah and the early Madinan period.`
          ]) +
          P(`The Sirah contains reports of varying reliability. The spider and dove, Umm Ma’bad and some details of Suraqa are later reports, not authentic hadith. The Qur’anic verses, the pledges, the cave, the arrival at Quba, the mosque and the document are established in the early sources.`) +
          NOTE(`<strong>Editorial note:</strong> the exact dates of the Hijrah are approximate. The conventional date is 622 CE, and the Hijri calendar begins with that year, but the month and day are reported differently. The article follows the standard chronology without claiming precision the sources do not provide.`)
      }
    ],
    faqs: [
      { q: 'Why is the Hijrah so important?', a: 'It marks the transition from a persecuted minority in Makkah to a community with a base, institutions and the freedom to practise and teach Islam. The Hijri calendar begins with it because it reshaped the life of the ummah.' },
      { q: 'Did the Prophet ﷺ flee secretly?', a: 'He left carefully and quietly, with a planned route and a guide, because Quraysh had plotted to kill him. It was not a panic flight; it was a strategic migration.' },
      { q: 'What is the Constitution of Madinah?', a: 'A written agreement preserved by Ibn Ishaq and Ibn Hisham that regulated relations among the Muslims, the Jewish tribes and the other communities of Madinah. It established mutual obligations, religious freedom for the groups and a common framework of security and adjudication.' },
      { q: 'Who were the Ansar and the Muhajirun?', a: 'The Muhajirun were the emigrants from Makkah; the Ansar were the helpers of Madinah who received them. The Prophet ﷺ established a bond of brotherhood between them, and the Ansar shared their homes and wealth.' },
      { q: 'Did the Prophet ﷺ start the Hijri calendar?', a: 'The calendar begins with the Hijrah, but the reports attribute its formal institution to Umar ibn al-Khattab during his caliphate. It is a collective memory of the migration, not a direct command of the Prophet ﷺ.' }
    ],
    bibliography: [
      `The Qur’an — especially 8:30, 8:72, 9:40, 9:108, 59:9, 60:12. Translations adapted from Saheeh International unless stated.`,
      `Sahih al-Bukhari — the pledges of Aqabah, the Hijrah, the arrival at Madinah and the brotherhood.`,
      `Sahih Muslim — parallel reports on the Hijrah and the status of the Ansar.`,
      `Ibn Hisham, <em>al-Sirah al-Nabawiyyah</em> — the cave, the journey, Quba, the document of Madinah and the brotherhood.`,
      `Al-Tabari, <em>Tarikh al-Rusul wa al-Muluk</em> — the chronology of the Hijrah and the early Madinan period.`,
      `Ibn Kathir, <em>al-Bidayah wa al-Nihayah</em> — the Hijrah and the first years in Madinah.`,
      `Ibn Ishaq, <em>Sirat Rasul Allah</em> — the earliest surviving narrative, preserved through Ibn Hisham.`,
      `Modern critical studies of the document of Madinah and the social history of Yathrib.`
    ],
    related: [
      ...relatedBase,
      { href: 'makkan-persecution-and-resilience.html', label: 'The Makkan phase: persecution and patience' },
      { href: 'isra-and-miraj-night-journey.html', label: 'Al-Isra’ wal-Mi’raj: the night journey' },
      { href: 'pre-islamic-arabia-jahiliyyah.html', label: 'Pre-Islamic Arabia: the world that received the Qur’an' },
      { href: 'seerah-of-prophet-muhammad.html', label: 'Seerah of Prophet Muhammad ﷺ: a guided journey' }
    ]
  }
];
