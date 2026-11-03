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
    slug: 'abu-bakr-the-truthful-and-the-first-caliph',
    title: 'Abu Bakr: The Truthful and the First Caliph',
    metaTitle: 'Abu Bakr al-Siddiq in History: The Merchant, the Companion of the Cave and the First Caliph',
    description: 'The life of Abu Bakr al-Siddiq: his merchant years in Makkah, his early acceptance of Islam, the title al-Siddiq, the persecution and the freeing of slaves, the hijrah and the cave, Madinah and the battles, the Saqifah, the Ridda wars, the refusal to compromise on zakat, the compilation of the Qur’an and his death.',
    category: 'Sahaba',
    readTime: '13 min',
    intro: P(`Abu Bakr al-Siddiq is the companion whose name is bound to the two most fragile moments of the early community: the cave of Thawr during the hijrah, and the courtyard of the Saqifah after the Prophet’s death. In both, he is presented as a man of quiet certainty rather than spectacle. He was a successful merchant who spent his wealth on slaves and on the mission, a soft-hearted man who wept easily, and the first caliph of a community that had just lost its prophet.`) +
      P(`His life is also a test case in source discipline. The broad outline is established by the Qur’an, the authentic hadith and the earliest histories. Many of the details that circulate in popular preaching — the spider that spun a web over the cave, the exact number of slaves he freed, the precise speech at the Saqifah — are later reports of varying strength. This article follows the established record and marks the line between history and edification.`),
    keyTakeaways: [
      `Abu Bakr was a Qurayshi merchant of the Banu Taym, known before Islam as a man of good character and genealogical knowledge.`,
      `He was among the first to accept Islam and was given the title al-Siddiq for affirming the night journey.`,
      `He used his wealth to free persecuted slaves, including Bilal ibn Rabah.`,
      `He accompanied the Prophet ﷺ on the hijrah and is the second person named in the Qur’an’s cave verse (9:40).`,
      `He was chosen as caliph at the Saqifah and insisted on the unity of the community.`,
      `He refused to separate prayer from zakat and confronted the apostasy movements.`,
      `He commissioned the first collected codex of the Qur’an after the battle of Yamama.`,
      `He died in 13 AH and was buried beside the Prophet ﷺ; later legends about the cave should not be treated as revelation.`
    ],
    sections: [
      {
        id: 'why-abu-bakr-matters',
        heading: 'Why Abu Bakr Matters',
        html: P(`Abu Bakr is the first adult free man to accept Islam in the majority Sunni account, the father-in-law of the Prophet ﷺ through his daughter A’ishah, and the first of the four caliphs whom Sunnis call al-Rashidun. His caliphate lasted only about two years and three months, but it decided two questions that shaped the rest of Islamic history: whether the community would hold together after the Prophet’s death, and whether the Qur’an would be preserved as a single written text.`) +
          P(`The sources for his life are the Qur’an, the hadith collections, the early biographical works of Ibn Ishaq and al-Waqidi as transmitted by later authors, and the histories of al-Tabari and Ibn Kathir. They do not agree on every detail, and some of the most memorable stories are not in the earliest layers. The reader should therefore distinguish three things: what the Qur’an says, what the authentic hadith say, and what later historians and storytellers report.`) +
          P(`This article is an educational synthesis. It does not claim to be a critical edition of the sources, and it does not adjudicate every dispute about his precedence or his caliphate. It aims to give a clear, honest portrait of a man whose significance is not in legend but in the decisions he made at the most dangerous moments of the early community.`)
      },
      {
        id: 'the-merchant-of-taym',
        heading: 'The Merchant of Taym',
        html: P(`Abu Bakr was born in Makkah into the Banu Taym, a clan of Quraysh that was respected but not among the wealthiest or most powerful. His name was Abdullah ibn Uthman ibn Amir, and his father was known as Abu Quhafa. The kunya “Abu Bakr” is said to derive from his early maturity or from his father’s nickname; the sources give more than one explanation.`) +
          P(`He became a cloth merchant and travelled with caravans. The sources describe him as a man of gentle manners, generous, abstemious in food and drink, and knowledgeable about Arab genealogy and dreams. He was not a poet or a warrior by reputation; his influence came from character, judgement and relationships.`) +
          P(`Before Islam he is said to have avoided the worst of the pagan practices, though the sources do not present him as a monotheist before the revelation. What is clear is that he was a man of standing in Makkah, and that when Muhammad ﷺ began to call people to Islam, Abu Bakr was one of the first to respond.`)
      },
      {
        id: 'the-first-days',
        heading: 'The First Days of Revelation',
        html: P(`The majority Sunni tradition places Abu Bakr among the very first Muslims, after Khadijah and before most of the other companions. The exact order of the first conversions is disputed: some reports place Ali first among men, others Abu Bakr, and the difference reflects later theological and political alignments as much as historical memory. What is not disputed is that Abu Bakr accepted Islam early, without hesitation, and immediately began to speak about it.`) +
          P(`He is credited with bringing several important companions to the Prophet ﷺ, including Uthman ibn Affan, Talha ibn Ubaydillah, al-Zubayr ibn al-Awwam, Abd al-Rahman ibn Awf and Sa‘d ibn Abi Waqqas. The reports differ on the exact list, but the pattern is consistent: Abu Bakr’s social network became one of the earliest nuclei of the community.`) +
          P(`His acceptance was not a public spectacle. It was the decision of a mature man who knew the Prophet ﷺ closely and recognised in him the character he had always trusted. That combination of intimacy and judgement is the key to his later role.`)
      },
      {
        id: 'al-siddiq',
        heading: 'Al-Siddiq and the Night Journey',
        html: P(`The title al-Siddiq, “the one who affirms the truth,” is associated with the reaction to the Isra’ and Mi‘raj. When the Quraysh challenged the Prophet ﷺ about the night journey, they are said to have gone to Abu Bakr expecting him to waver. He answered that if Muhammad ﷺ had said it, it was true. The story is widely reported in the biographical and hadith literature, though its exact wording varies.`) +
          P(`The title is not merely a compliment. It defines the virtue that the Qur’an praises in the companions: belief that does not wait for material proof. Abu Bakr’s faith was not credulity; he knew the Prophet ﷺ intimately and had tested his truthfulness over years. His affirmation was an act of trust grounded in knowledge.`) +
          P(`The Qur’an does not use the title al-Siddiq for Abu Bakr by name, and the reports that attach it to him should be read as early tradition rather than as a Qur’anic designation. The title became one of his standard epithets in Sunni literature.`)
      },
      {
        id: 'persecution-and-slaves',
        heading: 'Persecution, Slaves and Wealth',
        html: P(`As the Makkan opposition hardened, Abu Bakr was among those who suffered. The sources report that he was beaten and that his tribe intervened for him. He also used his wealth to buy and free Muslims who were being tortured by their owners, most famously Bilal ibn Rabah, whom he purchased and manumitted.`) +
          P(`The list of those he freed varies in the sources and should not be treated as a precise inventory. What matters is the pattern: Abu Bakr converted commercial capital into freedom. In a society where slaves were property, this was a direct challenge to the economic logic of persecution.`) +
          P(`He is also said to have spent heavily on the migration and on the early community. The later stories that he gave away all his wealth are edifying but not always documented in detail. The authentic hadith do praise his generosity and his readiness to sacrifice for the Prophet ﷺ.`)
      },
      {
        id: 'hijrah-and-the-cave',
        heading: 'The Hijrah and the Cave',
        html: P(`When the Prophet ﷺ decided to leave Makkah, Abu Bakr was his companion. They hid in the cave of Thawr, south of Makkah, while the Quraysh searched for them. The Qur’an refers to this moment without naming Abu Bakr: “If you do not aid him, Allah has already aided him when those who disbelieved had driven him out, when he was in the cave and said to his companion, ‘Do not grieve; indeed Allah is with us’” (9:40).`) +
          P(`The verse is the strongest Qur’anic evidence for Abu Bakr’s rank. It calls him “his companion” and records the Prophet’s assurance that Allah was with them. The passage is not a general statement about friendship; it is a specific reference to the hijrah, and the classical commentators identified the companion as Abu Bakr.`) +
          P(`The famous story of the spider’s web and the dove’s nest at the mouth of the cave is not in the Qur’an or the earliest hadith. It appears in later biographical and storytelling literature. It may be used as a popular image, but it should not be presented as an established historical detail.`) +
          NOTE(`<strong>Source caution.</strong> The cave verse (9:40) is Qur’anic and establishes that the Prophet ﷺ had a companion with him. The spider web, the dove, the exact duration in the cave and the dialogue reported in later sources are not part of the Qur’an and are not uniformly attested in the earliest hadith.`)
      },
      {
        id: 'madinah-and-the-battles',
        heading: 'Madinah and the Battles',
        html: P(`In Madinah, Abu Bakr was one of the closest advisers of the Prophet ﷺ and a participant in the major events of the community. He fought at Badr, Uhud and the Trench, and he was present at Hudaybiyyah and the conquest of Makkah. The sources do not present him as the most prominent warrior; his role was counsel, representation and the management of relationships.`) +
          P(`He was among those who pledged at Hudaybiyyah under the tree, the bay‘at al-ridwan, which the Qur’an describes as a pledge that Allah was pleased with (48:18). He led the pilgrimage in 9 AH, and he was appointed to lead the prayer during the Prophet’s final illness, a detail that later Sunnis used as an argument for his fitness to lead the community.`) +
          P(`The sources also record his deep attachment to the Prophet ﷺ. When the Prophet died, Abu Bakr was not in the house; he came, uncovered the face, kissed the forehead and said words that the sources preserve in slightly different forms. His public speech in the mosque, “Whoever worshipped Muhammad, Muhammad has died; whoever worshipped Allah, Allah is alive and does not die,” is one of the defining moments of the succession.`)
      },
      {
        id: 'the-household',
        heading: 'The Household of the Prophet',
        html: P(`Abu Bakr’s daughter A’ishah married the Prophet ﷺ, and the marriage made him the closest of fathers-in-law. His daughter Asma’ was the wife of al-Zubayr and the mother of Abdullah ibn al-Zubayr. His son Muhammad ibn Abi Bakr was born late in his life and became a figure in the later political disputes, but the sources disagree about his role and his loyalties.`) +
          P(`The family relationship did not make Abu Bakr a courtier. The sources show him disagreeing with the Prophet ﷺ on occasion, and the Qur’an itself corrects a misunderstanding involving A’ishah in the episode of the slander (24:11–20). The household was close to revelation, but it was not exempt from testing.`) +
          P(`A’ishah’s reports are among the most important sources for the Prophet’s domestic life, and through her the memory of her father was preserved. That memory is affectionate, but it is not uncritical; the hadith literature records his mistakes and his corrections as well as his virtues.`)
      },
      {
        id: 'saqifah',
        heading: 'The Saqifah and the First Caliphate',
        html: P(`The Prophet ﷺ died in 11 AH without a written designation of a successor that all parties accepted. The Ansar gathered at the Saqifah of the Banu Sa‘idah to discuss leadership. Abu Bakr, Umar and Abu Ubaydah went to them. After speeches, Abu Bakr proposed that the leader should be from Quraysh and that the community should not divide. He took the hand of Umar or Abu Ubaydah, depending on the report, and offered them the pledge. They in turn pledged to him.`) +
          P(`The event was not a general election. It was a rapid consultation among the senior companions present in Madinah, followed by a public pledge in the mosque. Some companions were absent, including Ali, who was occupied with the Prophet’s burial according to several reports. The sources preserve criticism and disagreement, and later Shia and Sunni narratives interpret the event very differently.`) +
          P(`What is historically clear is that Abu Bakr emerged as caliph with broad support and that he insisted on the unity of the community. His first speech set the tone: he called himself not a king but a servant, asked the people to correct him if he erred, and warned that obedience was conditional on obedience to Allah. The exact wording is reported in different versions, but the substance is consistent.`)
      },
      {
        id: 'ridda-and-zakat',
        heading: 'The Ridda Wars and the Refusal to Compromise',
        html: P(`Abu Bakr’s caliphate was immediately confronted by the Ridda, the movements that followed the Prophet’s death. Some tribes renounced Islam; others refused to pay zakat while claiming to remain Muslim; others followed rival prophets such as Musaylima, Tulayha and Sajah. The situation threatened to dissolve the community within months.`) +
          P(`Abu Bakr’s response was firm. He refused to separate the prayer from the zakat, insisting that the two were inseparable parts of the religion. He sent armies under Khalid ibn al-Walid and others, and after a series of campaigns the apostasy was suppressed and the peninsula was reunified. The wars were brutal, and the sources record controversial decisions, including the killing of captives and the treatment of tribes that had surrendered.`) +
          P(`The Ridda wars are a difficult subject. They cannot be reduced to a simple story of faithful Muslims defeating traitors. They involved political calculation, tribal grievance, prophecy movements and genuine religious confusion. Abu Bakr’s achievement was not that he avoided violence but that he held the community together and reasserted the authority of the Madinan state.`)
      },
      {
        id: 'the-quranic-codex',
        heading: 'The Qur’anic Codex',
        html: P(`The battle of Yamama against Musaylima cost the lives of many Qur’an reciters. Umar ibn al-Khattab urged Abu Bakr to collect the Qur’an into a single written volume before more of it was lost. Abu Bakr hesitated, then agreed and commissioned Zayd ibn Thabit, a young scribe of the Prophet ﷺ, to gather the material.`) +
          P(`Zayd collected the verses from written fragments and from the memories of the companions, verifying each piece against multiple sources. The resulting codex was kept with Abu Bakr, then with Umar, then with Hafsah, and later became the basis of Uthman’s standard text. The story is reported in Sahih al-Bukhari and is one of the most important accounts of the Qur’an’s textual history.`) +
          P(`The codex was not a new revelation or an editorial rewrite. It was a collection of what had already been revealed and memorised. The Qur’an itself promises preservation (15:9), and the early community understood the collection as an act of obedience to that promise. The details of the process, including the exact number of witnesses required, are reported with some variation.`) +
          NOTE(`<strong>Source caution.</strong> The Qur’an was not compiled by Abu Bakr in the sense of producing a new scripture. He commissioned the gathering of an already revealed and memorised text. The claim that he “edited” the Qur’an, or that the codex omitted or added verses, is not supported by the sources and contradicts the Qur’an’s own doctrine of preservation.`)
      },
      {
        id: 'death-and-legacy',
        heading: 'Death and Legacy',
        html: P(`Abu Bakr died in 13 AH after an illness. He was about sixty-three years old, the same age as the Prophet ﷺ according to several reports. He was buried beside the Prophet ﷺ in the chamber of A’ishah, and his grave remains one of the most visited sites in Madinah.`) +
          P(`He appointed Umar as his successor after consultation, a decision that ensured continuity and avoided another succession crisis. His caliphate had lasted two years and three months. In that time he had held the community together, suppressed the Ridda, launched the conquests of Syria and Iraq, and commissioned the Qur’anic codex.`) +
          P(`His legacy is not a legend of perfect infallibility. He was a man who made difficult decisions, some of which are still debated. But he is remembered for a particular kind of strength: the strength of a man who could weep, who could be corrected, and who could still hold to a principle when the ground was moving under him.`)
      },
      {
        id: 'lessons-and-limits',
        heading: 'Lessons and the Limits of the Sources',
        html: P(`Abu Bakr’s life offers three lessons. The first is the value of quiet, tested loyalty: he believed the Prophet ﷺ not because of miracles but because he knew him. The second is the responsible use of wealth: he spent his commercial fortune on freeing people and on the mission. The third is the courage of institutional decisions: the codex, the succession and the refusal to compromise on zakat all required him to act before he could see the outcome.`) +
          P(`The sources also warn against hagiography. Abu Bakr was not a superhero, and the stories that make him one often obscure the real man. He wept, he hesitated, he consulted, he made political choices that alienated some companions. The Sunni tradition honours him as al-Siddiq without claiming that he was sinless or that every report about him is authentic.`) +
          P(`The reader who wants to know him should begin with the Qur’an’s cave verse, the authentic hadith on his virtues, and the earliest biographical reports. The later legends — the spider, the dove, the exact speeches — may be edifying, but they are not the foundation of his rank. His rank rests on what he did when the community had no map.`) +
          NOTE(`<strong>Editorial note:</strong> this article distinguishes the Qur’anic text, the authentic hadith, the early biographical reports and later narrative. It does not claim that every story about Abu Bakr is historically established, and it does not use his rank to silence legitimate historical questions.`)
      }
    ],
    faqs: [
      { q: 'Was Abu Bakr the first Muslim?', a: 'The majority Sunni tradition places him among the very first Muslims, but the exact order is disputed. Some reports place Ali first among men, others Abu Bakr. What is not disputed is that Abu Bakr accepted Islam very early and immediately worked for the community.' },
      { q: 'Why is he called al-Siddiq?', a: 'The title means “the one who affirms the truth.” It is associated with his acceptance of the night journey when others doubted. The story is widely reported in the biographical literature, though the exact wording varies.' },
      { q: 'Did Abu Bakr compile the Qur’an?', a: 'He commissioned the first collected codex after the battle of Yamama, on Umar’s advice, with Zayd ibn Thabit gathering and verifying the material. He did not create or edit the revelation; he ordered the collection of what had already been revealed and memorised.' },
      { q: 'How long was his caliphate?', a: 'About two years and three months, from 11 AH to 13 AH. In that time he suppressed the Ridda, launched the early conquests and commissioned the Qur’anic codex.' },
      { q: 'What is the story of the spider in the cave?', a: 'It is a later popular story, not part of the Qur’an or the earliest hadith. The Qur’an confirms that the Prophet ﷺ had a companion in the cave (9:40), but the spider, the dove and the detailed dialogue are later narrative.' }
    ],
    bibliography: [
      `The Qur’an — especially 9:40 and 48:18. Translations adapted from Saheeh International unless stated.`,
      `Sahih al-Bukhari — the reports on Abu Bakr’s virtues, the cave, the Saqifah and the collection of the Qur’an.`,
      `Sahih Muslim — the reports on the companions and the caliphate.`,
      `Ibn Ishaq, <em>Sirat Rasul Allah</em>, as transmitted by Ibn Hisham — the earliest surviving biographical narrative.`,
      `Al-Tabari, <em>Tarikh al-Rusul wa al-Muluk</em> — the early caliphate and the Ridda wars.`,
      `Ibn Kathir, <em>al-Bidayah wa al-Nihayah</em> — later synthesis with grading.`,
      `Modern academic studies of the early caliphate and the Qur’anic codex.`
    ],
    related: [
      ...relatedBase,
      { href: 'umar-al-faruq-justice-and-the-caliphate.html', label: 'Umar: justice, conquest and the caliphate' },
      { href: 'uthman-dhul-nurayn-and-the-standard-codex.html', label: 'Uthman: the standard codex and the fitna' },
      { href: 'ali-the-gate-of-knowledge-and-the-fitna.html', label: 'Ali: knowledge, courage and the fitna' },
      { href: '../sahaba.html', label: 'Companions library' }
    ]
  },
  {
    slug: 'umar-al-faruq-justice-and-the-caliphate',
    title: 'Umar: Justice, Conquest and the Caliphate',
    metaTitle: 'Umar ibn al-Khattab in History: Conversion, the Pledge, the Conquests, Jerusalem and the Assassination',
    description: 'The life of Umar ibn al-Khattab: his early opposition, the conversion through Surah Ta-Ha, al-Faruq, the hijrah and the battles, the caliphate of Abu Bakr, the great conquests, Jerusalem, the year of ashes, the plague of Amwas, the diwan and the Hijri calendar, his justice and his assassination.',
    category: 'Sahaba',
    readTime: '14 min',
    intro: P(`Umar ibn al-Khattab is the companion who turned the small Madinan polity into a world empire and then spent the rest of his life trying to keep that empire accountable to a standard higher than itself. He was a man of immense physical strength, a formidable debater before Islam, and a caliph who patrolled the streets at night, carried grain on his back and wept over a single wronged woman.`) +
      P(`His story is also the story of the early conquests, with all their glory and all their moral difficulty. The sources celebrate his justice and record his severity. They describe his reforms and his uncertainties. This article follows the established record, notes where the famous stories are weakly attested, and refuses to turn him into either a saint or a caricature.`),
    keyTakeaways: [
      `Umar was a Qurayshi noble of the Banu Adi and one of the fiercest early opponents of Islam.`,
      `His conversion is associated with hearing Surah Ta-Ha in his sister’s house; the sources differ on the details.`,
      `He was called al-Faruq, “the one who distinguishes,” and was known for his strength and severity.`,
      `He was a close adviser to Abu Bakr and became the second caliph in 13 AH.`,
      `His caliphate saw the conquest of Syria, Iraq, Egypt and Persia, and the surrender of Jerusalem.`,
      `He established the diwan, the Hijri calendar and a system of stipends and provincial administration.`,
      `He died by assassination in 23 AH and was buried beside the Prophet ﷺ and Abu Bakr.`,
      `Later stories such as the burning of the library of Alexandria and the “Umar covenant” with Jerusalem are not established by the earliest sources.`
    ],
    sections: [
      {
        id: 'why-umar-matters',
        heading: 'Why Umar Matters',
        html: P(`Umar’s caliphate lasted about ten and a half years, from 13 AH to 23 AH. In that decade the armies of the community defeated the two great empires of the age, the Byzantines and the Sasanians, and established garrisons from the Euphrates to the Nile. Umar did not lead most of those armies in person, but he directed them, appointed their commanders, and tried to control what conquest did to the conquerors.`) +
          P(`He is also the caliph most associated with the idea of justice as a visible, institutional practice. The sources are full of stories about his night patrols, his refusal of luxury, his treatment of non-Muslim subjects and his readiness to be corrected by ordinary people. Some of these stories are later embellishments, but the pattern is early and consistent.`) +
          P(`At the same time, Umar’s record raises hard questions. The conquests were wars of expansion, and the sources record harsh decisions. His treatment of the conquered peoples, the status of non-Muslims and the distribution of wealth are debated by historians. An honest account must hold the justice and the violence together, rather than choosing one and ignoring the other.`)
      },
      {
        id: 'the-man-before-islam',
        heading: 'The Man Before Islam',
        html: P(`Umar was born in Makkah into the Banu Adi, a clan of Quraysh known for its role in arbitration and diplomacy. His father, al-Khattab, was a harsh man, and the sources describe a difficult relationship. Umar grew up strong, tall and skilled in wrestling, riding and public speech. He was known for his temper and his readiness to defend the honour of his tribe.`) +
          P(`He was a trader and a diplomat. The sources say that he was sent as an envoy by the Quraysh and that he had a reputation for fair dealing in a society that did not always value it. He was also a man of the world, aware of the politics of the peninsula and the weaknesses of the tribes.`) +
          P(`Before Islam he was not a philosopher or a seeker. He was a practical man of his society, and he saw the new movement as a threat to the order he knew. That makes his conversion more than a change of opinion: it was a reorientation of a whole life.`)
      },
      {
        id: 'the-conversion',
        heading: 'The Conversion and Surah Ta-Ha',
        html: P(`The best-known account of Umar’s conversion begins with his anger at the spread of Islam. He took his sword and went out to find the Prophet ﷺ. On the way he was told that his own sister Fatimah and her husband Sa‘id ibn Zayd had accepted Islam. He went to their house and found them reading a page of the Qur’an.`) +
          P(`He struck his sister, then saw blood and was ashamed. He asked for the page. It contained the opening of Surah Ta-Ha. He read it and was moved. He went to the Prophet ﷺ and accepted Islam. The sources differ on the exact sequence and on which verses he read, but the core of the story is early and widely reported.`) +
          P(`The conversion changed the balance of power in Makkah. Umar was not a marginal figure; he was a man whose strength and connections mattered. The Muslims had prayed in secret; after his conversion they prayed openly near the Ka‘bah. The sources present this as a turning point, and the Prophet ﷺ is said to have called him al-Faruq, the one who distinguishes truth from falsehood.`) +
          NOTE(`<strong>Source caution.</strong> The story of Umar reading Surah Ta-Ha is preserved in early biographical sources but with variations in wording and detail. The title al-Faruq is also explained in more than one way. The article follows the common account without claiming that every sentence of dialogue is verbatim.`)
      },
      {
        id: 'al-faruq-in-makkah',
        heading: 'Al-Faruq in Makkah',
        html: P(`After his conversion, Umar became one of the most visible Muslims in Makkah. The sources report that he challenged the Quraysh, that he protected the weak, and that he was willing to use force when necessary. His reputation for severity was already established, and it now served the community.`) +
          P(`He was not, however, a man without restraint. The Qur’an and the Prophet ﷺ corrected him more than once. The sources record his occasional excess of zeal and the Prophet’s interventions. This is important: the later image of Umar as the infallible enforcer obscures the fact that he was a disciple who was taught.`) +
          P(`His time in Makkah also gave him a deep knowledge of the tribes, their alliances and their grievances. That knowledge would become one of his greatest assets as caliph, when he had to hold together a coalition of Arab tribes and conquered peoples.`)
      },
      {
        id: 'hijrah-and-badr',
        heading: 'Hijrah, Badr and the Pledge',
        html: P(`Umar migrated to Madinah openly, according to the sources, and became one of the closest companions of the Prophet ﷺ. He fought at Badr, Uhud and the Trench, and he was present at Hudaybiyyah. At Hudaybiyyah he is reported to have questioned the terms of the treaty and to have been reassured by the Prophet ﷺ and by Abu Bakr.`) +
          P(`The episode is a useful corrective to the legend of Umar as a man who never doubted. He was human, and the treaty of Hudaybiyyah was difficult for many of the companions. The Qur’an later called it a clear victory (48:1), and Umar’s willingness to submit after his objection is part of his character.`) +
          P(`He was also one of those who pledged under the tree at al-Ridwan (48:18). The pledge was a response to a rumour that Uthman had been killed, and it became a mark of loyalty to the Prophet ﷺ. Umar’s participation is reported in the hadith literature.`)
      },
      {
        id: 'right-hand-of-abu-bakr',
        heading: 'The Right Hand of Abu Bakr',
        html: P(`When the Prophet ﷺ died, Umar initially refused to believe it. Abu Bakr calmed him and recited the verse that Muhammad ﷺ was a messenger who had passed away (3:144). Umar later described this as the moment when the reality became clear to him.`) +
          P(`At the Saqifah, Umar supported Abu Bakr’s candidacy and took his hand in pledge. He became the caliph’s closest adviser and the enforcer of his decisions. When Abu Bakr fell ill, he consulted the senior companions and nominated Umar as his successor. The nomination was not unanimous, but it was accepted.`) +
          P(`Umar’s first act as caliph was to continue Abu Bakr’s policies, including the Ridda campaigns and the collection of the Qur’an. He also began to build the institutions that would govern the expanding state. The partnership between the two men is one of the most important in early Islamic history.`)
      },
      {
        id: 'the-conquests',
        heading: 'The Caliphate and the Great Conquests',
        html: P(`The conquests of Umar’s caliphate were rapid and vast. The armies of the community defeated the Byzantines at Yarmuk in 15 AH, took Damascus and the Levant, and pushed into Egypt under Amr ibn al-As. In the east, the Sasanian empire collapsed after the battles of al-Qadisiyyah and Nihawand, and the Muslims took Iraq and Persia.`) +
          P(`Umar directed the campaigns from Madinah through letters and appointed commanders. He insisted that the conquered peoples be treated according to treaties and that the spoils be distributed according to law. He also tried to prevent the Arab fighters from becoming a landed aristocracy, preferring to keep them in garrison towns such as Kufa and Basra.`) +
          P(`The conquests were not a simple story of religious expansion. They were driven by a combination of political instability in the two empires, the mobility of the Arab tribes, the appeal of the new faith and the promise of booty. The sources present them as a divine opening, but they also record the human calculations, rivalries and atrocities that accompanied them.`)
      },
      {
        id: 'jerusalem',
        heading: 'Jerusalem and the Ethics of Conquest',
        html: P(`In 16 or 17 AH, Jerusalem surrendered to the Muslims. Umar travelled to receive the surrender in person, a gesture that impressed the local population. The sources describe a written assurance that guaranteed the lives, property and churches of the inhabitants in exchange for tribute.`) +
          P(`The document known as the “Umar covenant” is preserved in later forms, and its exact wording is disputed. Some versions include restrictions on the building of new churches and on public displays of non-Muslim worship. Historians disagree about how much of this goes back to Umar and how much reflects later legal developments.`) +
          P(`What is clear is that Umar refused to pray inside the Church of the Holy Sepulchre, according to the sources, so that Muslims would not later claim it as a mosque. He prayed outside instead. The story is a powerful image of a conqueror who understood the danger of turning a victory into a permanent religious grievance.`) +
          NOTE(`<strong>Source caution.</strong> The “Umar covenant” as it circulates today is a later composite. Its core — a treaty of protection in exchange for tribute — is consistent with early practice, but the detailed restrictions are not securely attributable to Umar. The article does not present the later document as his verbatim words.`)
      },
      {
        id: 'year-of-ashes',
        heading: 'The Year of Ashes and the Plague',
        html: P(`Umar’s caliphate was not only a story of victory. A severe drought and famine struck the Hijaz and Syria, and the period became known as the Year of Ashes (sanat al-ramadah) because the land looked grey. Umar organised relief, brought grain from Egypt and Syria, and is reported to have refused to eat butter or meat while the people suffered.`) +
          P(`The plague of Amwas struck the army in Syria and killed many companions, including Abu Ubaydah ibn al-Jarrah. Umar had travelled toward Syria but turned back when he learned of the plague, and he was criticised for it. He answered that he was fleeing from the decree of Allah to the decree of Allah. The episode is a classic case of his combination of faith and practical judgement.`) +
          P(`These crises show a different side of Umar from the conqueror. He was an administrator who had to feed people, bury the dead and hold an empire together during natural disaster. The sources preserve his grief and his improvisations as well as his victories.`)
      },
      {
        id: 'administration',
        heading: 'Administration, the Diwan and the Calendar',
        html: P(`Umar is credited with establishing the diwan, a register of soldiers and stipends, and with organising the provinces of the empire. He appointed governors, judges and tax collectors, and he tried to supervise them through reports and inspections. The details are reported in the sources with some variation, but the direction is clear: the community was moving from a simple polity to a bureaucracy.`) +
          P(`He also established the Hijri calendar, beginning with the year of the Prophet’s migration. The decision gave the community a shared sense of time and separated it from the local calendars of the conquered peoples. The sources differ on who first proposed it, but Umar is consistently associated with its adoption.`) +
          P(`His administrative reforms were not always successful. The sources record disputes over land, taxation and the distribution of spoils. The conquered peoples were not passive; they negotiated, resisted and sometimes revolted. Umar’s system was an attempt to manage an empire that had grown faster than its institutions.`)
      },
      {
        id: 'justice-and-the-poor',
        heading: 'Justice, Patrol and the Poor',
        html: P(`The stories of Umar’s justice are among the most beloved in Islamic literature. He is said to have patrolled the streets at night, carried food to a poor woman, and refused to let his son ride a horse that had been given as a gift. He judged between a Muslim and a non-Muslim according to the same standard, and he punished his own family when they overstepped.`) +
          P(`Some of these stories are later embellishments, and the famous saying attributed to him — “If a mule stumbled in Iraq, I would fear that Allah would ask me about it” — is not a hadith and may be a later summary of his sense of responsibility. But the underlying picture is early: Umar was a caliph who understood his authority as a trust to be audited.`) +
          P(`His justice had a harsh edge. He was severe with governors who lived in luxury, and he could be abrupt with petitioners. The sources do not hide his temper. The point is not that he was gentle; it is that his severity was directed at the powerful as well as the weak.`)
      },
      {
        id: 'the-assassination',
        heading: 'The Assassination',
        html: P(`Umar was assassinated in 23 AH by Abu Lu’lu’a, a Persian slave of al-Mughirah ibn Shu‘bah, during the dawn prayer in the mosque of Madinah. The sources say that he had complained about a tax or a dispute with his master and that he stabbed Umar and several others before killing himself or being killed.`) +
          P(`The motives are reported differently. Some sources present it as a personal grievance; others connect it to the political tensions of the conquest. What is clear is that the caliph died from the wounds and that the community was thrown into another succession crisis.`) +
          P(`Umar appointed a committee of six companions to choose his successor, and he was buried beside the Prophet ﷺ and Abu Bakr. His caliphate had lasted ten years and six months, and his death marked the end of the first phase of the early caliphate.`)
      },
      {
        id: 'lessons-and-limits',
        heading: 'Lessons and the Limits of the Sources',
        html: P(`Umar’s life teaches that justice is not an abstract ideal but a set of practices: registers, audits, courts, provisions for the poor and a refusal to let power become privilege. It also teaches that strength without self-criticism becomes tyranny. Umar was corrected by the Qur’an, by the Prophet ﷺ and by ordinary people, and the sources remember those corrections.`) +
          P(`The sources also warn against romanticising the conquests. The early Islamic state was built through war, and war produces suffering, even when it is conducted according to rules. Umar’s caliphate should be studied with both the victories and the costs in view.`) +
          P(`Finally, the reader should be careful with the huge body of later stories about Umar. Some are authentic, some are early reports of uncertain strength, and some are legends. The authentic hadith, the Qur’an and the earliest histories are the safest guides. The rest may be read as edification, but not as revelation.`) +
          NOTE(`<strong>Editorial note:</strong> this article distinguishes the Qur’anic text, the authentic hadith, the early historical reports and later narrative. It does not claim that every famous story about Umar is historically established, and it does not treat the later “Umar covenant” or the Alexandria library story as fact.`)
      }
    ],
    faqs: [
      { q: 'Why is Umar called al-Faruq?', a: 'Al-Faruq means “the one who distinguishes.” The title is associated with his role in distinguishing truth from falsehood, especially after his conversion. The sources give more than one explanation, and the title became one of his standard epithets.' },
      { q: 'Did Umar burn the library of Alexandria?', a: 'No early source establishes this. The story appears in later literature and is rejected by most historians. It should not be presented as a historical fact.' },
      { q: 'What was the “Umar covenant” with Jerusalem?', a: 'It is a later composite document. Its core — a treaty of protection in exchange for tribute — is consistent with early practice, but the detailed restrictions as they circulate today are not securely attributable to Umar.' },
      { q: 'How did Umar become caliph?', a: 'Abu Bakr nominated him after consulting the senior companions, and the community pledged allegiance to him. The nomination was not unanimous, but it was accepted and avoided a succession crisis.' },
      { q: 'Was Umar infallible?', a: 'No. The sources record his mistakes, his temper and his corrections by the Qur’an, the Prophet ﷺ and other companions. Sunni tradition honours him as a great caliph, not as a sinless figure.' }
    ],
    bibliography: [
      `The Qur’an — especially 3:144, 48:1 and 48:18. Translations adapted from Saheeh International unless stated.`,
      `Sahih al-Bukhari — the reports on Umar’s virtues, the Hudaybiyyah pledge and the conquests.`,
      `Sahih Muslim — the reports on the companions and the caliphate.`,
      `Ibn Ishaq, <em>Sirat Rasul Allah</em>, as transmitted by Ibn Hisham.`,
      `Al-Tabari, <em>Tarikh al-Rusul wa al-Muluk</em> — the conquests and the administration of Umar.`,
      `Ibn Kathir, <em>al-Bidayah wa al-Nihayah</em> — later synthesis with grading.`,
      `Modern academic studies of the early conquests and the administration of the caliphate.`
    ],
    related: [
      ...relatedBase,
      { href: 'abu-bakr-the-truthful-and-the-first-caliph.html', label: 'Abu Bakr: the truthful and the first caliph' },
      { href: 'uthman-dhul-nurayn-and-the-standard-codex.html', label: 'Uthman: the standard codex and the fitna' },
      { href: 'ali-the-gate-of-knowledge-and-the-fitna.html', label: 'Ali: knowledge, courage and the fitna' },
      { href: '../sahaba.html', label: 'Companions library' }
    ]
  },
  {
    slug: 'uthman-dhul-nurayn-and-the-standard-codex',
    title: 'Uthman: The Standard Codex and the Fitna',
    metaTitle: 'Uthman ibn Affan in History: The Two Lights, the Well of Rumah, the Standard Qur’an and the Siege',
    description: 'The life of Uthman ibn Affan: his wealth and early conversion, the two migrations, his marriages to the Prophet’s daughters, the well of Rumah and the army of Tabuk, the standard Qur’anic codex, the conquests, the grievances, the siege and the assassination that opened the fitna.',
    category: 'Sahaba',
    readTime: '13 min',
    intro: P(`Uthman ibn Affan is the caliph whose greatest achievement and deepest tragedy are bound to the same thing: the unity of the community. He gave the Muslims a standard written Qur’an so that they would not differ over recitation, and he was killed by Muslims who believed he had betrayed the trust of the caliphate. Both facts belong to his story, and neither can be understood without the other.`) +
      P(`He was a wealthy merchant who spent his fortune on the community, a man of modesty and generosity, and a ruler whose later years were overwhelmed by grievances he could not resolve. The sources are full of praise and full of criticism. This article follows the established record and marks where the later narratives, especially the polemical ones, go beyond the evidence.`),
    keyTakeaways: [
      `Uthman was an early convert from the Banu Umayya and one of the wealthiest men in Makkah.`,
      `He married two daughters of the Prophet ﷺ, Ruqayyah and then Umm Kulthum, and was called Dhul-Nurayn.`,
      `He migrated to Abyssinia and then to Madinah, and financed the army of Tabuk.`,
      `He bought the well of Rumah and gave it to the Muslims.`,
      `As caliph he commissioned the standard Qur’anic codex and ordered the destruction of variant copies.`,
      `His caliphate saw the conquest of Armenia, Cyprus and parts of North Africa, but also growing internal grievance.`,
      `He was besieged in his house and killed in 35 AH, an event that opened the first fitna.`,
      `The claim that he was buried in a Jewish cemetery, or that he was a secret Christian, is later polemic and has no basis in the early sources.`
    ],
    sections: [
      {
        id: 'why-uthman-matters',
        heading: 'Why Uthman Matters',
        html: P(`Uthman’s caliphate lasted about twelve years, from 23 AH to 35 AH. It began with the conquest of new territories and ended with the caliph besieged in his own house. In between, he made the decision that gave the Muslim world a single written Qur’an, and he faced the first serious internal opposition to a caliph’s authority.`) +
          P(`His story is essential for understanding the fitna, the civil conflict that followed his death. The grievances against him were real, even if some of the accusations were exaggerated. The sources preserve the voices of his critics and his defenders, and the modern reader must weigh them rather than choose a side in advance.`) +
          P(`Uthman is also a case study in the danger of wealth and family. He was generous with his own money, but his appointment of relatives to important posts created the impression of dynastic favouritism. Whether that impression was fair is debated; that it shaped the politics of the time is not.`)
      },
      {
        id: 'the-merchant',
        heading: 'The Merchant of Umayya',
        html: P(`Uthman was born into the Banu Umayya, one of the most powerful clans of Quraysh. His father, Affan ibn Abi al-As, was a merchant, and Uthman became one of the richest men in Makkah. The sources describe him as a successful trader who travelled to Syria and Yemen and who was known for his honesty and his modesty.`) +
          P(`He was not a warrior by temperament. He was soft-spoken, generous and deeply shy. The Prophet ﷺ is reported to have said that even the angels were shy of Uthman, a report that the sources preserve with different wordings. His wealth gave him independence, and he used it for the community rather than for display.`) +
          P(`Before Islam he was known as a man of good character. The sources do not present him as a seeker or a rebel. His conversion came through Abu Bakr, and it was immediate.`)
      },
      {
        id: 'conversion-and-migrations',
        heading: 'Conversion and the Two Migrations',
        html: P(`Uthman accepted Islam early, through the invitation of Abu Bakr. He and his wife Ruqayyah, the daughter of the Prophet ﷺ, migrated to Abyssinia in the first migration, and then to Madinah. The sources call him one of the two migrations, and the experience shaped his later commitment to the community.`) +
          P(`In Madinah he became one of the Prophet’s closest companions. He was not among the most prominent fighters, but he was trusted with sensitive missions. He was the Prophet’s envoy to the Quraysh at Hudaybiyyah, and the rumour of his death triggered the pledge of al-Ridwan.`) +
          P(`His wife Ruqayyah died in Madinah, and the Prophet ﷺ later married him to her sister Umm Kulthum. The two marriages gave him the title Dhul-Nurayn, “the possessor of two lights.” The title is later, but the marriages are established.`)
      },
      {
        id: 'the-two-lights',
        heading: 'The Two Lights and the Household',
        html: P(`The marriage to two daughters of the Prophet ﷺ is unique among the companions. Ruqayyah was the wife of Uthman when the revelation began, and she migrated with him to Abyssinia. She died in 2 AH, after the battle of Badr, while Uthman was nursing her. The Prophet ﷺ later married Umm Kulthum to him.`) +
          P(`The sources report that Umm Kulthum also died during the Prophet’s lifetime, and that the Prophet ﷺ said that if he had a third daughter he would have married her to Uthman. The report is widely cited, though its exact wording varies. It expresses the Prophet’s trust in Uthman rather than a literal plan.`) +
          P(`The title Dhul-Nurayn became a standard way of referring to him in Sunni literature. It should not be used to imply that he was sinless or that his caliphate was beyond criticism. The title honours his family relationship to the Prophet ﷺ, not his political record.`)
      },
      {
        id: 'rumah-and-tabuk',
        heading: 'The Well of Rumah and the Army of Tabuk',
        html: P(`Two stories illustrate Uthman’s generosity. The first is the well of Rumah, a well in Madinah that belonged to a Jew and whose water was sold at a high price. Uthman bought the well and gave it to the Muslims, and the Prophet ﷺ is reported to have promised paradise to whoever bought it.`) +
          P(`The second is the army of Tabuk. In 9 AH the Prophet ﷺ prepared an expedition to the north, and the community was short of supplies. Uthman financed a large part of the army, and the sources say that the Prophet ﷺ said, “Nothing will harm Uthman after what he has done today.” The exact number of camels and the amount of money vary in the reports.`) +
          P(`These stories are important because they show the positive side of his wealth. The same money that later made him vulnerable to accusations of favouritism was used to feed and equip the community. The sources preserve both sides.`)
      },
      {
        id: 'the-standard-codex',
        heading: 'The Standard Qur’anic Codex',
        html: P(`Uthman’s most enduring achievement was the standardisation of the Qur’anic text. As the community expanded, different regions began to recite according to different readings, and disputes arose. Hudhayfah ibn al-Yaman, returning from the frontiers, warned Uthman that the community might differ over the Qur’an as the Jews and Christians had differed over their scriptures.`) +
          P(`Uthman consulted the companions and commissioned a committee led by Zayd ibn Thabit to copy the codex that Abu Bakr had collected. The committee produced a standard text, and Uthman sent copies to the major centres, ordering that other written copies be destroyed or corrected. The sources describe the process in some detail, and the codex became known as the Uthmani mushaf.`) +
          P(`The decision was controversial. Some companions objected to the destruction of variant copies, and some regions resisted the standardisation. But the result was a single written text that has remained remarkably stable across centuries. The Qur’an’s own promise of preservation (15:9) was understood by the community as being fulfilled through this process.`) +
          NOTE(`<strong>Source caution.</strong> Uthman did not create a new Qur’an. He standardised the written text based on the codex already collected under Abu Bakr. The claim that he removed or added verses is a later polemic and is contradicted by the manuscript evidence and the unanimous testimony of the early community.`)
      },
      {
        id: 'the-conquests',
        heading: 'The Caliphate and the Conquests',
        html: P(`Uthman became caliph in 23 AH after Umar’s assassination. The conquests continued: Armenia, Cyprus and parts of North Africa were added, and the navy began to operate in the Mediterranean. The sources record campaigns in Khurasan, Sistan and the Caucasus.`) +
          P(`The expansion was not without setbacks. The Byzantines counter-attacked, and the Muslims suffered losses at sea and on the frontiers. The caliphate also faced financial and administrative problems as the empire grew. Uthman appointed governors, some of whom were relatives, and their conduct became a source of grievance.`) +
          P(`The conquests under Uthman are often overshadowed by the fitna, but they were substantial. The community was still expanding when the internal crisis began, and the two developments were connected: the wealth and offices of the conquests created competition among the elite.`)
      },
      {
        id: 'the-grievances',
        heading: 'The Grievances',
        html: P(`The grievances against Uthman were of several kinds. He was accused of appointing relatives to key positions, of allowing governors to accumulate wealth, of distributing land and spoils in ways that favoured certain groups, and of being too lenient with his family. The sources preserve specific complaints from Kufa, Basra and Egypt.`) +
          P(`Some of the complaints were exaggerated or politically motivated. Others reflected real problems. Uthman’s style was different from Umar’s: he was more trusting, less willing to confront his governors, and more inclined to conciliation. In a rapidly changing empire, that style was read as weakness or favouritism.`) +
          P(`The opposition coalesced around a group of malcontents from Egypt and Iraq who came to Madinah with demands. Uthman negotiated with them and made concessions, but the situation escalated. The sources differ on the role of agitators, on the sincerity of the demands and on Uthman’s response. What is clear is that the caliph lost control of the political narrative.`)
      },
      {
        id: 'the-siege',
        heading: 'The Siege',
        html: P(`In 35 AH a group of protesters besieged Uthman’s house in Madinah. The siege lasted for weeks, according to the sources, and the caliph refused to use force against the besiegers. He is reported to have said that he would not be the first successor of the Prophet ﷺ to shed the blood of his community.`) +
          P(`His decision has been debated ever since. Some see it as a noble refusal to start a civil war; others see it as a failure of leadership that allowed the situation to deteriorate. The sources also report that some companions urged him to resist and that others advised him to compromise.`) +
          P(`The siege was not a simple confrontation between a tyrant and the people. It involved factions, rumours and outside manipulation. The sources are partisan, and the modern reader should be cautious about accepting any single account as complete.`)
      },
      {
        id: 'the-assassination',
        heading: 'The Assassination',
        html: P(`Uthman was killed in his house in 35 AH. The sources say that the attackers entered the house, and that his wife Nailah was injured trying to protect him. He was reciting the Qur’an when he was killed, according to several reports, and his blood stained the page.`) +
          P(`The identity of the killers and the exact sequence of events are disputed. The sources name different individuals and groups, and the political factions of the later period had reasons to shape the story. What is not disputed is that the caliph was killed by Muslims, and that the community was plunged into civil war.`) +
          P(`Uthman was buried in Madinah, and his grave became a site of mourning and controversy. The claim that he was buried in a Jewish cemetery is a later polemic and has no basis in the early sources. His body was buried by the Muslims, and the location is recorded in the biographical literature.`)
      },
      {
        id: 'the-fitna',
        heading: 'The Fitna and Its Aftermath',
        html: P(`Uthman’s death opened the first fitna. Ali ibn Abi Talib was chosen as caliph, but his authority was contested by Mu‘awiyah ibn Abi Sufyan and by A’ishah, Talha and al-Zubayr. The community divided, and the conflicts of the Camel and Siffin followed.`) +
          P(`The fitna was not caused by Uthman’s personality alone. It was the product of rapid expansion, the distribution of wealth, the rivalry of the Qurayshi clans, the absence of a clear mechanism for succession, and the tensions between the early companions and the newer converts. Uthman’s caliphate was the point at which those tensions became visible.`) +
          P(`The later Sunni tradition honours Uthman as the third caliph and rejects the claim that he was a tyrant. The Shia tradition takes a more critical view. The historical sources do not support a simple narrative of innocence or guilt, and the reader should approach the fitna with humility.`)
      },
      {
        id: 'death-and-legacy',
        heading: 'Death, Burial and Legacy',
        html: P(`Uthman was about eighty years old when he died, according to several reports. His caliphate had lasted twelve years. He left behind the standard Qur’anic codex, a community that had expanded to three continents, and a political crisis that would define the next generation.`) +
          P(`His legacy is inseparable from the codex. Every written Qur’an in the world today traces its ancestry to the text that his committee produced. That is an extraordinary achievement for a man whose political career ended in siege and murder.`) +
          P(`He is also remembered for his generosity, his modesty and his family ties to the Prophet ﷺ. The Sunni tradition calls him Dhul-Nurayn and counts him among the rightly guided caliphs. The honest historian adds that his caliphate was a period of both achievement and failure, and that the failure was not only his.`)
      },
      {
        id: 'lessons-and-limits',
        heading: 'Lessons and the Limits of the Sources',
        html: P(`Uthman’s life teaches that a community can be united by a text and divided by politics. It also teaches that generosity and family loyalty can become political liabilities when they are not matched by clear institutions. His refusal to fight the besiegers is a reminder that the restraint of violence is a real moral choice, even when it has terrible consequences.`) +
          P(`The sources for his caliphate are among the most partisan in early Islamic history. The Sunni and Shia narratives diverge sharply, and the medieval historians often shaped their accounts to defend a theological or political position. The modern reader should read widely and distinguish between established facts and later interpretation.`) +
          P(`The most reliable anchors are the Qur’an, the authentic hadith on his virtues, the early biographical reports and the manuscript evidence for the codex. The polemical stories — the Jewish cemetery, the secret Christian, the forged letters — should be rejected or treated with extreme caution.`) +
          NOTE(`<strong>Editorial note:</strong> this article distinguishes the Qur’anic text, the authentic hadith, the early historical reports and later polemic. It honours Uthman’s achievement without claiming that his caliphate was free of serious political failure, and it does not adopt the sectarian caricatures of either side.`)
      }
    ],
    faqs: [
      { q: 'Why is Uthman called Dhul-Nurayn?', a: 'He married two daughters of the Prophet ﷺ, Ruqayyah and then Umm Kulthum. The title means “possessor of two lights” and honours that unique family relationship. It is a later title, but the marriages are established.' },
      { q: 'Did Uthman change the Qur’an?', a: 'No. He standardised the written text based on the codex collected under Abu Bakr, and he ordered variant copies to be corrected or destroyed so that the community would not differ over recitation. He did not add or remove revelation.' },
      { q: 'Who killed Uthman?', a: 'He was killed by a group of besiegers in his house in 35 AH. The sources name different individuals and factions, and the exact sequence is disputed. What is clear is that he was killed by Muslims, an event that opened the first fitna.' },
      { q: 'Was Uthman buried in a Jewish cemetery?', a: 'No. That claim is later polemic and has no basis in the early sources. He was buried by the Muslims in Madinah, and the location is recorded in the biographical literature.' },
      { q: 'Was Uthman a good caliph?', a: 'The Sunni tradition honours him as the third rightly guided caliph and recognises his achievements, especially the standard codex. Historians also recognise serious political failures in his later years. The answer depends on how one weighs achievement, intention and outcome.' }
    ],
    bibliography: [
      `The Qur’an — especially 15:9. Translations adapted from Saheeh International unless stated.`,
      `Sahih al-Bukhari — the reports on Uthman’s virtues, the well of Rumah, the army of Tabuk and the collection of the Qur’an.`,
      `Sahih Muslim — the reports on the companions and the caliphate.`,
      `Ibn Ishaq, <em>Sirat Rasul Allah</em>, as transmitted by Ibn Hisham.`,
      `Al-Tabari, <em>Tarikh al-Rusul wa al-Muluk</em> — the caliphate of Uthman and the fitna.`,
      `Ibn Kathir, <em>al-Bidayah wa al-Nihayah</em> — later synthesis with grading.`,
      `Modern studies of the Uthmani codex, the early manuscripts and the historiography of the fitna.`
    ],
    related: [
      ...relatedBase,
      { href: 'abu-bakr-the-truthful-and-the-first-caliph.html', label: 'Abu Bakr: the truthful and the first caliph' },
      { href: 'umar-al-faruq-justice-and-the-caliphate.html', label: 'Umar: justice, conquest and the caliphate' },
      { href: 'ali-the-gate-of-knowledge-and-the-fitna.html', label: 'Ali: knowledge, courage and the fitna' },
      { href: '../sahaba.html', label: 'Companions library' }
    ]
  },
  {
    slug: 'ali-the-gate-of-knowledge-and-the-fitna',
    title: 'Ali: The Gate of Knowledge and the Fitna',
    metaTitle: 'Ali ibn Abi Talib in History: The Prophet’s Household, Khaybar, Ghadir, the Caliphate and the Fitna',
    description: 'The life of Ali ibn Abi Talib: his upbringing in the Prophet’s household, the night of the hijrah, his marriage to Fatima, Badr, Uhud and Khaybar, the farewell and Ghadir Khumm, the caliphate, the Camel, Siffin, the Kharijites and his assassination in Kufa.',
    category: 'Sahaba',
    readTime: '14 min',
    intro: P(`Ali ibn Abi Talib is the companion around whom the early community divided most deeply. He was the Prophet’s cousin, the husband of his daughter Fatima, the father of Hasan and Husayn, and one of the bravest and most learned of the companions. He was also the fourth caliph, and his caliphate was consumed by civil war.`) +
      P(`The sources for his life are rich, partisan and often contradictory. Sunni and Shia traditions both honour him, but they interpret key events differently. This article follows the historical record as far as it can be established, marks the points where the sources disagree, and refuses to turn him into either a semi-divine figure or a political villain.`),
    keyTakeaways: [
      `Ali was the cousin of the Prophet ﷺ and was raised in his household from childhood.`,
      `He was among the first to accept Islam and slept in the Prophet’s bed on the night of the hijrah.`,
      `He married Fatima, the Prophet’s daughter, and their sons Hasan and Husayn are central figures in Islamic history.`,
      `He fought at Badr, Uhud, the Trench and Khaybar, where the Prophet ﷺ gave him the banner.`,
      `The hadith of Ghadir Khumm is authentic in its core, but its interpretation is disputed between Sunni and Shia.`,
      `He became caliph after Uthman’s death and faced the rebellions of the Camel and Siffin.`,
      `The Kharijites split from him after Siffin, and he was assassinated in Kufa in 40 AH.`,
      `Later claims such as his birth inside the Ka‘ba and the “city of knowledge” hadith are weakly attested or disputed.`
    ],
    sections: [
      {
        id: 'why-ali-matters',
        heading: 'Why Ali Matters',
        html: P(`Ali is central to Islamic history for three reasons. He was a member of the Prophet’s household and one of the earliest believers. He was a warrior and a judge whose courage and learning are remembered in both Sunni and Shia traditions. And he was the caliph whose reign defined the first fitna and the split between the early factions that later became Sunni and Shia Islam.`) +
          P(`His life cannot be understood without the political crisis that followed Uthman’s assassination. Ali inherited a community that was already divided, and his attempts to restore unity were resisted by powerful opponents. The sources present him as a man of principle who was also politically isolated, and the debate about his decisions has never ended.`) +
          P(`This article is an educational synthesis. It does not adjudicate the theological claims that later traditions built around him. It tries to give a clear account of his life, his words and his actions, and to distinguish the historical record from the legends that grew up on both sides.`)
      },
      {
        id: 'the-boy-in-the-household',
        heading: 'The Boy in the Prophet’s Household',
        html: P(`Ali was born in Makkah, the son of Abu Talib, the uncle of the Prophet ﷺ, and Fatimah bint Asad. The sources say that he was born around 600 CE, about ten years before the beginning of the revelation, though the exact date is not certain. His father was a respected but poor member of the Banu Hashim.`) +
          P(`When a famine struck Makkah, the Prophet ﷺ took Ali into his household to relieve his uncle’s burden. Ali grew up under the Prophet’s care, and the sources describe a close bond between them. He was among the first to accept Islam, and the majority Shia tradition and many Sunni reports place him as the first male believer.`) +
          P(`The exact order of the first conversions is disputed, and the dispute is theological as well as historical. What is clear is that Ali was a child or a very young man when he accepted Islam, and that his whole formation was shaped by the Prophet’s teaching.`)
      },
      {
        id: 'the-night-of-hijrah',
        heading: 'The Night of the Hijrah',
        html: P(`On the night of the hijrah, the Quraysh plotted to kill the Prophet ﷺ. Ali slept in the Prophet’s bed while the Prophet ﷺ left with Abu Bakr for the cave of Thawr. The plan depended on the assassins believing that the figure in the bed was the Prophet ﷺ.`) +
          P(`The Qur’an may allude to this event in 2:207: “And of mankind is he who would sell himself, seeking the pleasure of Allah; and Allah is full of kindness to His servants.” Many commentators applied the verse to Ali, though the connection is interpretive rather than explicit.`) +
          P(`Ali also stayed behind to return the trusts that the Prophet ﷺ had been holding for the people of Makkah. The episode captures two sides of his character: physical courage and scrupulous honesty. He was willing to risk his life, and he was careful with the property of those who opposed him.`)
      },
      {
        id: 'fatima-and-the-household',
        heading: 'Fatima and the Household',
        html: P(`Ali married Fatima, the daughter of the Prophet ﷺ, in Madinah. The marriage was simple, and the sources describe a household of poverty, work and devotion. Fatima ground grain and carried water; Ali worked and struggled to provide. Their sons Hasan and Husayn, and their daughters Zaynab and Umm Kulthum, became central figures in Islamic history.`) +
          P(`The Prophet ﷺ loved the household deeply. The hadith of the cloak (hadith al-kisa’) reports that he gathered Ali, Fatima, Hasan and Husayn under a cloak and prayed for them, and the verse of purification (33:33) is connected with this event in many reports. The interpretation of the verse is disputed, but the affection of the Prophet ﷺ for the household is not.`) +
          P(`The household was not a political party in the modern sense. It was a family that was close to the Prophet ﷺ and that suffered greatly after his death. The later traditions built a theology around it, but the historical family was human, vulnerable and often divided by the same politics that divided the community.`)
      },
      {
        id: 'badr-uhud-and-the-trench',
        heading: 'Badr, Uhud and the Trench',
        html: P(`Ali fought at Badr, where he is reported to have killed several of the Qurayshi champions. At Uhud he was among those who stayed with the Prophet ﷺ when many others fled, and he was wounded. The sources praise his courage in both battles, though the details of the individual duels vary.`) +
          P(`At the Trench (al-Khandaq), the confederates besieged Madinah, and the fighting was dominated by skirmishes rather than a full battle. The most famous episode is the duel between Ali and Amr ibn Abd Wudd, a Qurayshi warrior who had crossed the trench. The sources report that Ali killed him, and the story became one of the defining images of his bravery.`) +
          P(`The historical Ali was not only a fighter. He was also a judge and a teacher, and the sources preserve his rulings and his sermons. His courage on the battlefield was part of a larger vocation that included law, governance and the interpretation of the Qur’an.`)
      },
      {
        id: 'khaybar-and-the-banner',
        heading: 'Khaybar and the Banner',
        html: P(`At Khaybar in 7 AH, the Muslims besieged the Jewish fortresses of the Khaybar oasis. The sources report that the Prophet ﷺ said, “I will give the banner tomorrow to a man who loves Allah and His Messenger, and whom Allah and His Messenger love.” The next day he called Ali, who had been suffering from an eye ailment, treated his eye, and gave him the banner.`) +
          P(`The hadith is reported in Sahih al-Bukhari and Sahih Muslim, and it is one of the most important authentic reports about Ali’s rank. The conquest of Khaybar followed, though the sources differ on the details of the fighting and the terms of the surrender.`) +
          P(`The banner hadith is often used in Sunni-Shia polemic, but its core is a statement of the Prophet’s love for Ali and Ali’s love for the Prophet ﷺ. It does not by itself settle the question of succession, and it should not be isolated from the rest of the Prophet’s teaching.`)
      },
      {
        id: 'ghadir-khumm',
        heading: 'The Farewell and Ghadir Khumm',
        html: P(`On the return from the farewell pilgrimage in 10 AH, the Prophet ﷺ stopped at a place called Ghadir Khumm and addressed the people. The sources report that he said, “Whoever I am his mawla, Ali is his mawla.” The hadith is widely transmitted and is regarded as authentic by many scholars, though its interpretation is disputed.`) +
          P(`Sunni scholars generally understand mawla as “friend” or “ally,” and read the statement as a defence of Ali against those who had complained about him during the Yemen expedition. Shia scholars understand it as a designation of Ali as the Prophet’s successor. The word itself can mean both, and the historical context is debated.`) +
          P(`What is not disputed is that the Prophet ﷺ honoured Ali publicly and that the statement became one of the most important texts in the later debates about authority. The reader should approach it with a knowledge of the Arabic language, the context and the subsequent history, rather than with a slogan.`) +
          NOTE(`<strong>Source caution.</strong> The Ghadir Khumm report is authentic in its core, but its interpretation is not settled by the text alone. Sunni and Shia scholars disagree about the meaning of mawla and about whether the event was a designation of political succession. This article presents the dispute without pretending that it can be resolved by a single translation.`)
      },
      {
        id: 'the-caliphate',
        heading: 'The Caliphate and the Fitna',
        html: P(`After Uthman’s assassination in 35 AH, the people of Madinah pledged allegiance to Ali. He became the fourth caliph, but his authority was immediately contested. Mu‘awiyah ibn Abi Sufyan, the governor of Syria and a relative of Uthman, refused to pledge until the killers of Uthman were punished. A’ishah, Talha and al-Zubayr also opposed Ali’s authority.`) +
          P(`Ali’s caliphate was thus born in crisis. He moved the capital to Kufa, where he had more support, and he tried to consolidate his authority. The sources describe his efforts to reform the administration and to distribute wealth fairly, but the civil war consumed his energy and his resources.`) +
          P(`The fitna was not a simple conflict between good and evil. It involved competing claims of justice, revenge, legitimacy and tribal interest. Ali’s supporters believed he was the legitimate caliph; his opponents believed he was protecting Uthman’s killers. The sources preserve the arguments of both sides.`)
      },
      {
        id: 'the-camel',
        heading: 'The Battle of the Camel',
        html: P(`The first major battle of the fitna was fought near Basra in 36 AH. A’ishah, Talha and al-Zubayr gathered forces to demand justice for Uthman and to challenge Ali’s authority. Ali met them and tried to negotiate, but the fighting began and became known as the Battle of the Camel, after the camel on which A’ishah sat.`) +
          P(`Talha and al-Zubayr were killed, and A’ishah was escorted back to Madinah with respect. The battle was a tragedy for the community: two groups of Muslims who had fought together against the Quraysh now killed each other. The sources record Ali’s grief and his efforts to honour the dead.`) +
          P(`The Battle of the Camel set the pattern for the fitna. It showed that the community had no agreed mechanism for resolving disputes about authority, and that the memory of Uthman’s death could be mobilised for political ends.`)
      },
      {
        id: 'siffin-and-the-kharijites',
        heading: 'Siffin and the Kharijites',
        html: P(`The confrontation with Mu‘awiyah culminated at Siffin in 37 AH. The fighting was inconclusive, and the two sides agreed to arbitration. A group of Ali’s supporters rejected the arbitration, arguing that “judgement belongs to Allah alone” and that Ali had no right to submit his claim to human judges. They withdrew from his army and became known as the Kharijites.`) +
          P(`The Kharijites were not a unified movement. They included pious ascetics, tribal malcontents and radicals, and their slogan “no judgement but Allah’s” was used to justify rebellion against any ruler who did not meet their standards. Ali tried to reason with them, but the movement grew and became violent.`) +
          P(`At Nahrawan in 38 AH, Ali defeated a Kharijite force. The victory did not end the movement. The Kharijites survived as a radical current in Islamic history, and one of their members would eventually assassinate Ali.`)
      },
      {
        id: 'nahrawan-and-fragmentation',
        heading: 'Nahrawan and the Fragmentation',
        html: P(`The battle of Nahrawan was a turning point. Ali’s army was exhausted, his authority was contested, and the arbitration with Mu‘awiyah had damaged his position. The Kharijites were defeated on the battlefield, but their ideas spread among those who were disillusioned with the political elite.`) +
          P(`Ali’s later years were marked by loss. His supporters in Kufa were divided, his governors were unreliable, and Mu‘awiyah consolidated his control over Syria and Egypt. The sources describe Ali’s loneliness and his continuing commitment to justice, even as his political project unravelled.`) +
          P(`The fragmentation of the community was not caused by Ali alone. It was the result of structural problems that had been building since the conquests: the absence of a clear succession mechanism, the rivalry of the Qurayshi clans, the tension between the early companions and the newer converts, and the difficulty of governing a vast empire from a garrison town.`)
      },
      {
        id: 'the-assassination',
        heading: 'The Assassination in Kufa',
        html: P(`Ali was assassinated in 40 AH in Kufa by Abd al-Rahman ibn Muljam, a Kharijite. He struck Ali with a poisoned sword during the dawn prayer in the mosque. Ali died a few days later, and he was buried near Kufa, at a site that later became the shrine of Najaf.`) +
          P(`His caliphate had lasted about four years and nine months. He was succeeded by his son Hasan, who abdicated in favour of Mu‘awiyah after a short period in order to avoid further bloodshed. The year of Hasan’s abdication is called the Year of Unity in some Sunni sources.`) +
          P(`Ali’s death did not end the fitna. It deepened the divisions that would shape the later history of Islam. The Sunni and Shia traditions both mourn him, but they interpret his legacy in different ways.`)
      },
      {
        id: 'lessons-and-limits',
        heading: 'Lessons and the Limits of the Sources',
        html: P(`Ali’s life teaches that courage and wisdom are not enough to resolve a political crisis that has structural causes. He was a man of great personal integrity, but he inherited a community that was already fractured, and his attempts to restore unity were resisted by forces he could not control.`) +
          P(`The sources also teach the danger of hagiography. The later traditions, both Sunni and Shia, sometimes turn Ali into a figure who transcends history. The historical Ali was a human being who made decisions, suffered losses and was opposed by other Muslims. His greatness does not depend on denying his humanity.`) +
          P(`The reader who wants to understand him should begin with the Qur’an, the authentic hadith, the early biographical reports and the sermons and letters attributed to him. The Nahj al-Balagha is a later compilation and its attribution is debated; it should be read as literature and history, not as a verbatim record.`) +
          NOTE(`<strong>Editorial note:</strong> this article distinguishes the Qur’anic text, the authentic hadith, the early historical reports and later sectarian narrative. It honours Ali without adopting either the Sunni or the Shia theological interpretation of the disputed events, and it does not present later legends as established history.`)
      }
    ],
    faqs: [
      { q: 'Was Ali the first Muslim?', a: 'Many Shia and some Sunni reports place him as the first male believer, while other reports place Abu Bakr first among adult men. The exact order is disputed. What is clear is that Ali accepted Islam as a child or young man and was raised in the Prophet’s household.' },
      { q: 'What does “mawla” mean in the Ghadir Khumm hadith?', a: 'The word can mean friend, ally, client or master. Sunni scholars generally read it as friendship and support; Shia scholars read it as designation of succession. The report is authentic in its core, but its interpretation is disputed.' },
      { q: 'Why did Ali move the capital to Kufa?', a: 'Kufa was a major garrison town with a large body of supporters, and Madinah had become politically unstable after Uthman’s assassination. The move was a practical attempt to consolidate authority, though it also alienated some of the Madinan elite.' },
      { q: 'Who were the Kharijites?', a: 'They were a radical group that rejected Ali’s arbitration with Mu‘awiyah and adopted the slogan “judgement belongs to Allah alone.” They later became a violent movement that rejected all rulers who did not meet their standards. One of them assassinated Ali.' },
      { q: 'Was Ali infallible?', a: 'Sunni tradition honours him as a great companion and caliph but does not consider him infallible. Shia tradition holds a different view of the Imams. This article presents the historical record without adjudicating the theological dispute.' }
    ],
    bibliography: [
      `The Qur’an — especially 2:207, 3:61, 33:33 and 42:23. Translations adapted from Saheeh International unless stated.`,
      `Sahih al-Bukhari — the reports on Khaybar, the household and Ali’s virtues.`,
      `Sahih Muslim — the reports on Ghadir Khumm, the banner and the companions’ virtues.`,
      `Ibn Ishaq, <em>Sirat Rasul Allah</em>, as transmitted by Ibn Hisham.`,
      `Al-Tabari, <em>Tarikh al-Rusul wa al-Muluk</em> — the caliphate of Ali and the fitna.`,
      `Ibn Kathir, <em>al-Bidayah wa al-Nihayah</em> — later synthesis with grading.`,
      `Modern studies of the fitna, the Kharijites and the historiography of the early caliphate.`
    ],
    related: [
      ...relatedBase,
      { href: 'abu-bakr-the-truthful-and-the-first-caliph.html', label: 'Abu Bakr: the truthful and the first caliph' },
      { href: 'umar-al-faruq-justice-and-the-caliphate.html', label: 'Umar: justice, conquest and the caliphate' },
      { href: 'uthman-dhul-nurayn-and-the-standard-codex.html', label: 'Uthman: the standard codex and the fitna' },
      { href: '../sahaba.html', label: 'Companions library' }
    ]
  }
];
