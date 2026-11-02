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
    slug: 'adam-creation-trust-and-repentance',
    title: 'Adam: Creation, Trust and Repentance',
    metaTitle: 'Adam in the Qur’an: Creation, the Trust, Iblis and the Vocabulary of Repentance',
    description: 'The Qur’anic account of Adam: creation from clay, the knowledge of names, the refusal of Iblis, the garden and the tree, the slip and the words of repentance, the descent to earth, the covenant of the descendants of Adam, and the rejection of inherited guilt.',
    category: 'Prophets',
    readTime: '14 min',
    intro: P(`Adam is the first human being in the Qur’an and the first prophet in the Islamic account of history. His story is told in several surahs, and it is not a single continuous narrative: it is a set of scenes that the Qur’an returns to whenever it wants to explain human nature, the reality of temptation, the meaning of repentance and the dignity of the human being.`) +
      P(`That is why the story matters beyond the question of origins. The Qur’an uses Adam to answer questions that every reader asks: why is there evil, why do we fail, what does it mean to be forgiven, and what kind of creature has God placed on the earth? This article follows the Qur’anic text closely, marks where the later storytellers added detail, and refuses to present popular embellishment as revelation.`),
    keyTakeaways: [
      `Adam is presented as a vicegerent (khalifah) on earth, created from clay and honoured by the command to the angels to prostrate.`,
      `Iblis refused out of pride, claiming superiority of substance, and was expelled; his request for respite was granted as a test.`,
      `The prohibition concerned a single tree, and the transgression was one act, not a permanent corruption of human nature.`,
      `Adam and Hawwa’ (Eve) both repented with the words of 7:23; the Qur’an does not blame the woman alone.`,
      `The Qur’an rejects inherited guilt: no bearer of burdens bears the burden of another (6:164; 53:38).`,
      `The descent to earth is not simply a punishment; it is the beginning of vicegerency, guidance and prophethood.`,
      `The details of the tree, the serpent, the location of the garden and Adam’s age come from later literature and are not in the Qur’an.`
    ],
    sections: [
      {
        id: 'why-adam-matters',
        heading: 'Why Adam Matters',
        html: P(`The Qur’an mentions Adam by name in several places and alludes to his story in others. The longest continuous passages are 2:30–39 and 7:11–27, with further material in 15:26–44, 17:61–65, 18:50, 20:115–123 and 38:71–85. These are not duplicates. Each passage selects the details that serve its argument: the first teaches the dignity of knowledge and the reality of repentance, the second warns the children of Adam against the whispering of Satan, and the third answers those who doubted the resurrection by pointing to the creation of the first human being.`) +
          P(`Reading the passages together produces a coherent account, but it also shows how the Qur’an teaches. It does not hand the reader a biography with dates and places. It gives scenes, dialogue and moral commentary. The reader is expected to think with the story rather than to extract a chronicle from it. That is the first interpretive principle this article follows.`) +
          P(`The second principle is source discipline. The Qur’an is the primary text. The authentic hadith add a small number of details, and the classical commentaries preserve a much larger body of material drawn from Jewish and Christian traditions and from the imagination of later storytellers. Some of it is edifying; much of it is unverifiable, and this article keeps the layers separate.`)
      },
      {
        id: 'quranic-account',
        heading: 'The Qur’anic Account and Where It Is Found',
        html: P(`The core sequence is this. Allah announces to the angels that He is placing a vicegerent on the earth. The angels ask whether He will place there one who causes corruption and sheds blood, while they glorify and sanctify Him. Allah replies that He knows what they do not know. He teaches Adam the names of all things and presents them to the angels, who cannot name them. Adam names them, and the angels are commanded to prostrate. All prostrate except Iblis, who refuses, is arrogant and is expelled. Adam and his wife are placed in a garden with one prohibition. Satan approaches them, they slip, their shame becomes apparent, and they repent. They are sent down to the earth with guidance, and the story becomes the story of every human being.`) +
          P(`The passages differ in emphasis. Surah al-Baqarah frames the story as a lesson about knowledge, obedience and the mercy of repentance. Surah al-A‘raf frames it as a warning: “O children of Adam, let not Satan tempt you as he removed your parents from Paradise” (7:27). Surah Ta-Ha adds the note that Adam forgot and that “his Lord chose him and turned to him in forgiveness and guided him” (20:121–122). Surah al-Hijr and Surah Sad focus on the creation and on the refusal of Iblis.`) +
          P(`None of these passages names the tree, the place of the garden, the time that passed or the manner of the descent. Those gaps are real, and they are not defects. The Qur’an is interested in the meaning of the event, and it says what it needs to say to make that meaning clear.`)
      },
      {
        id: 'creation-from-clay',
        heading: 'Creation from Clay and the Divine Announcement',
        html: P(`The Qur’an describes the creation of Adam from clay, dust and moulded mud. “He created man from clay like [that of] pottery” (55:14); “We created man from an extract of clay” (23:12); “Indeed, We created them from sticky clay” (37:11). The variations are not contradictions. They describe the same origin with different images: dust, earth, clay, pottery, a substance shaped and then given life.`) +
          P(`The creation is presented as a deliberate act, not an accident. Allah says to the angels, “I am going to create a human being from clay. So when I have proportioned him and breathed into him of My spirit, then fall down to him in prostration” (38:71–72). The phrase “of My spirit” has been discussed by theologians for centuries. It does not mean that the human being shares divinity. Classical exegetes explained it as an attribution of honour, like the “House of Allah” or the “she-camel of Allah” — a creature singled out for a dignity that belongs to its Maker.`) +
          P(`The angels are told that a vicegerent is coming. The word khalifah in 2:30 has been understood in two main ways: a successor to previous creatures on the earth, or a representative of divine authority. Both readings are found in the commentaries, and both capture something true. The human being is a steward, not an owner; the earth is entrusted, not possessed.`)
      },
      {
        id: 'names-and-knowledge',
        heading: 'The Angels’ Question and the Knowledge of Names',
        html: P(`The angels’ question is not a rebellion. They ask how a creature who causes corruption and sheds blood can be placed on the earth when they already worship. The answer is not a defence of human behaviour; it is a statement of a knowledge the angels do not possess. Then Allah teaches Adam the names and asks the angels to inform Him of them. They confess that they know only what He has taught them. Adam names them, and the point is made: this creature has a capacity that the angels lack.`) +
          P(`What does “the names” mean? The commentaries offer several readings. Some take it literally: Adam was taught the names of all created things, and therefore the vocabulary of language. Others understand it as the knowledge of the essences and properties of things, or the capacity for conceptual thought. The Qur’an does not define it, and the ambiguity is productive. What is clear is that knowledge is the ground of human dignity in this passage, not power, wealth or lineage.`) +
          P(`That emphasis has consequences. A community that honours Adam must honour learning. The first human being is not presented as a warrior or a king but as a student who is taught and who can name what he sees.`)
      },
      {
        id: 'iblis-refusal',
        heading: 'Iblis: Refusal, Pride and the Nature of Evil',
        html: P(`The command to prostrate was a test of obedience, and Iblis failed it. The Qur’an is precise about why: “He refused and was arrogant and became of the disbelievers” (2:34). When asked what prevented him, he answered, “I am better than him. You created me from fire and created him from clay” (7:12). The sin begins with a comparison and ends in disobedience.`) +
          P(`Iblis is not presented as an equal opponent of God. He is a created being who was given respite and who uses it to mislead. “He said, ‘Reprieve me until the Day they are resurrected.’ Allah said, ‘Indeed, you are of those reprieved’” (15:36–37). His programme is stated plainly: he will approach human beings from every side, except those who are sincere (15:39–40). The Qur’an therefore treats evil as a real force, but never as an independent power.`) +
          P(`The passage also identifies the anatomy of the first sin: pride, a sense of superiority based on substance, and the refusal to accept a command that elevated someone else. The Prophet ﷺ is reported to have said that no one who has an atom’s weight of arrogance in his heart will enter Paradise, and that arrogance is rejecting the truth and despising people (Sahih Muslim).`)
      },
      {
        id: 'garden-and-tree',
        heading: 'The Garden, the Tree and the Single Prohibition',
        html: P(`Adam and his wife are placed in a garden and given permission to eat freely, with one exception: “Do not approach this tree, lest you be among the wrongdoers” (2:35). The wording is significant. The prohibition is not “do not eat” but “do not approach”, a wider boundary that protects the person before the act. Islamic law would later use the same logic in the doctrine of sadd al-dhara’i‘, blocking the means to harm.`) +
          P(`The tree is never identified. Wheat, grape, fig and other suggestions appear in the commentaries, but they are guesses, often borrowed from earlier traditions. The Qur’an withholds the detail, and there is no obligation to supply it. What matters is that the prohibition was clear, that it was one command among many permissions, and that the transgression was a single act rather than a rejection of God.`) +
          P(`Satan’s approach is described as whispering (waswasa), and his argument is that the tree is forbidden only because it would make them angels or immortal (7:20). He also swears that he is a sincere adviser (7:21). The Qur’an comments that he deceived them by delusion. The mechanics of temptation are recognisable: a plausible reason, a flattering assurance, a minimisation of the command, and a gradual approach rather than a sudden leap.`)
      },
      {
        id: 'slip-and-repentance',
        heading: 'The Slip, Blame and the Vocabulary of Repentance',
        html: P(`The Qur’an uses the language of slipping (zalla), not of a fall from grace in the Christian theological sense. “And Adam and his wife ate from the tree, and their shame became apparent to them, and they began to cover themselves with the leaves of the garden” (7:22). The shame is real, but the story does not end there. “Then Adam received from his Lord [some] words, and He accepted his repentance” (2:37).`) +
          P(`The words are given in Surah al-A‘raf: “Our Lord, we have wronged ourselves, and if You do not forgive us and have mercy upon us, we will surely be among the losers” (7:23). This is the model of repentance in Islam: confession without excuse, an appeal to mercy without despair, and a resolve that belongs to the future rather than a bargaining over the past.`) +
          P(`Both Adam and his wife say “we have wronged ourselves”. The Qur’an does not single out Hawwa’ (Eve) as the temptress, and it does not endorse the later story that she was created from a crooked rib in a way that made her inherently deceptive. The hadith that woman was created from a rib is authentic, but the Prophet ﷺ used it to command gentle treatment, not to establish female moral inferiority. The Qur’anic account places the responsibility on both partners and the mercy on both.`) +
          NOTE(`<strong>Source caution:</strong> the identification of the tree, the presence of a serpent, the location of the garden and the idea that Adam’s sin was sexual are not in the Qur’an. They enter through later narrative and commentary, and this article does not present them as revelation.`)
      },
      {
        id: 'descent-and-vicegerency',
        heading: 'Descent to Earth and the Meaning of Vicegerency',
        html: P(`The descent is stated in the plural: “We said, ‘Go down from it, all of you’” (2:38). It is not a solitary expulsion of a guilty man. It is the beginning of human history, with a promise attached: “And when guidance comes to you from Me, whoever follows My guidance — there will be no fear concerning them, nor will they grieve” (2:38).`) +
          P(`The Qur’an does not treat earthly life as a punishment to be escaped. It calls the earth a place of settlement and provision (7:10; 2:29), and it calls human beings successors on the earth (6:165; 27:62; 35:39). The descent therefore turns the story into the frame of prophethood: guidance will come, and the test is whether people follow it.`)
      },
      {
        id: 'original-sin',
        heading: 'Original Sin, Inherited Guilt and the Qur’anic Correction',
        html: P(`The Qur’an does not teach that Adam’s descendants are born guilty of his act. The principle is stated repeatedly: “No bearer of burdens will bear the burden of another” (6:164; 35:18; 53:38). Every person is responsible for his or her own choices, and every person has access to repentance. The story of Adam is the story of a first mistake and a first forgiveness, not the origin of a permanent stain.`) +
          P(`This does not mean that the Qur’an is optimistic about human behaviour. It describes the soul as inclined to evil unless shown mercy (12:53), and it commands constant seeking of forgiveness. The Prophet ﷺ said, “Every son of Adam sins, and the best of those who sin are those who repent” (al-Tirmidhi and Ibn Majah; graded hasan by several scholars). The difference from the doctrine of original sin is not the seriousness of sin but the universality of pardon.`) +
          P(`The practical consequence is important. A person is not trapped by an inherited condition, a caste, a family curse or a national guilt. The Qur’an insists that the door of repentance remains open until death, and it warns only against delaying until the moment of dying (4:18). The Adam story therefore ends with hope: the first human beings failed, repented and were forgiven, and their descendants are invited to do the same.`)
      },
      {
        id: 'covenant-of-descendants',
        heading: 'The Covenant of the Descendants of Adam',
        html: P(`One of the most striking Adam-related passages is 7:172: “And when your Lord took from the children of Adam, from their loins, their descendants and made them testify of themselves, [saying], ‘Am I not your Lord?’ They said, ‘Yes, we have testified.’” The verse is offered as a refutation of the excuse that people did not know: “lest you should say on the Day of Resurrection, ‘Indeed, we were of this unaware.’”`) +
          P(`Interpreters have differed sharply about what this event was. Some read it as a literal pre-creation gathering in which every human soul testified. Others read it as a statement about the innate recognition of God, the fitrah, which the Qur’an describes elsewhere: “So direct your face toward the religion, inclining to truth, [the] disposition of Allah upon which He has created [all] people” (30:30). Both readings are classical, and the verse is not a proof-text for a single metaphysical system.`) +
          P(`The ethical force of the verse is clear either way. The Qur’an claims that there is a witness within the person, however muffled by habit, and that the prophetic message awakens it rather than inventing it.`)
      },
      {
        id: 'adam-in-hadith',
        heading: 'Adam in Hadith and Later Literature',
        html: P(`The authentic hadith add a small number of details. The Prophet ﷺ said that Allah created Adam on a Friday (Sahih Muslim), that Adam was sixty cubits tall (Sahih al-Bukhari), and that Adam and Musa debated: Musa said, “You are Adam who drove us out of Paradise,” and Adam replied, “You are Musa whom Allah chose for His speech; do you blame me for something Allah decreed before He created me?” The Prophet ﷺ said that Adam overcame Musa in the argument (Sahih al-Bukhari and Sahih Muslim). The report is theological, not biological: it is about divine decree and human responsibility, and scholars have written extensively on how to hold both.`) +
          P(`A second hadith, “Allah created Adam in His image” (Sahih al-Bukhari and Sahih Muslim), has been the subject of intense theological discussion. The literalists affirmed the attribute without asking how; the theologians interpreted “image” as qualities such as life, knowledge, will and power, without likeness. This article does not adjudicate the dispute, but it notes that the report is authentic and that its interpretation is contested.`) +
          P(`The later literature is much larger. It supplies the name of Adam’s wife as Hawwa’, the name of the tree, the serpent that spoke, the number of years Adam lived and the place of his burial. Some of this is harmless storytelling; some contradicts the Qur’an; all of it should be labelled as tradition rather than revelation.`)
      },
      {
        id: 'sources-and-limits',
        heading: 'Sources and Their Limits',
        html: P(`The main sources for this article are:`) +
          UL([
            `<strong>The Qur’an</strong> — especially 2:30–39, 7:11–27, 15:26–44, 17:61–65, 18:50, 20:115–123, 38:71–85, 55:14 and 7:172.`,
            `<strong>Sahih al-Bukhari and Sahih Muslim</strong> — the creation on Friday, the sixty cubits, the Adam–Musa debate and the “image” report.`,
            `<strong>Al-Tabari, Jami‘ al-Bayan</strong> — the classical commentary, including the isnad criticism of narrative material.`,
            `<strong>Ibn Kathir, Tafsir al-Qur’an al-‘Azim and al-Bidayah wa al-Nihayah</strong> — a later synthesis with explicit grading of reports.`,
            `<strong>Al-Qurtubi, al-Jami‘ li Ahkam al-Qur’an</strong> — legal and theological discussion of the passage.`,
            `<strong>Ibn Hisham, al-Sirah al-Nabawiyyah</strong> — the later narrative framework, used with caution.`
          ]) +
          P(`The Qur’anic text is fixed and complete; the narrative detail is not. Where the commentaries disagree, this article reports the disagreement. Where a report has no chain or a weak chain, it is not used as evidence. The reader should be suspicious of any account of Adam that is more precise than the Qur’an and more confident than the hadith.`) +
          NOTE(`<strong>Editorial note:</strong> this is an educational synthesis, not a critical edition of the commentaries. Reports from al-Tabari, Ibn Kathir and the storytellers are identified as such. The article does not claim that every detail in the classical literature is authentic.`)
      }
    ],
    faqs: [
      { q: 'Was Adam the first prophet?', a: 'Yes. The Qur’an presents Adam as the first human being and the first recipient of divine guidance, and the Prophet ﷺ is reported to have said that Adam was a prophet. The hadith that Nuh was the first messenger sent to the people of the earth is consistent with this: Adam was a prophet to his own household, while Nuh was sent to a disobedient people.' },
      { q: 'Does Islam teach original sin?', a: 'No. The Qur’an states that no bearer of burdens bears the burden of another (6:164; 35:18; 53:38). Adam and Hawwa’ repented and were forgiven. Every person is born with a disposition to recognise God (30:30) and is responsible for his or her own choices.' },
      { q: 'Was Hawwa’ (Eve) blamed for the expulsion?', a: 'Not in the Qur’an. Both are addressed together, both eat, both feel shame, and both say “Our Lord, we have wronged ourselves” (7:23). The later story that Eve alone tempted Adam comes from extra-Qur’anic literature.' },
      { q: 'What was the forbidden tree?', a: 'The Qur’an does not say. Wheat, grape, fig and other identifications appear in the commentaries and in earlier traditions, but none is established by revelation. The silence is deliberate, and the identity of the tree is not religiously important.' },
      { q: 'Did Adam live for 930 years?', a: 'The figure comes from later tradition, not from the Qur’an or an authentic hadith. The Qur’an gives no lifespan for Adam. The ages of the early prophets in the Bible and in Islamic narrative literature are not reliable chronology.' }
    ],
    bibliography: [
      `The Qur’an — especially 2:30–39, 7:11–27, 15:26–44, 17:61–65, 18:50, 20:115–123, 38:71–85, 55:14, 7:172, 6:164, 30:30. Translations adapted from Saheeh International unless stated.`,
      `Sahih al-Bukhari — the creation of Adam, his height, the Adam–Musa debate and the “image” report.`,
      `Sahih Muslim — the creation on Friday, the Adam–Musa debate and the hadith on arrogance.`,
      `Al-Tabari, <em>Jami‘ al-Bayan ‘an Ta’wil Ay al-Qur’an</em> — the classical commentary on the Adam passages.`,
      `Al-Qurtubi, <em>al-Jami‘ li Ahkam al-Qur’an</em> — legal and theological discussion.`,
      `Ibn Kathir, <em>Tafsir al-Qur’an al-‘Azim</em> and <em>al-Bidayah wa al-Nihayah</em> — later synthesis with grading.`,
      `Ibn Hisham, <em>al-Sirah al-Nabawiyyah</em> — the narrative framework, used with caution.`,
      `Modern studies of Qur’anic narrative, the Adam story and the history of Isra’iliyyat in tafsir.`
    ],
    related: [
      ...relatedBase,
      { href: 'stories-of-the-prophets.html', label: 'Stories of the Prophets: an overview of the Qur’anic narratives' },
      { href: 'nuh-the-long-call-and-the-ark.html', label: 'Nuh: the long call, the ark and the flood' },
      { href: 'ibrahim-friend-of-allah-and-the-trial.html', label: 'Ibrahim: the friend of Allah and the trial of faith' },
      { href: '../prophets.html', label: 'Prophetic narratives library' }
    ]
  },

  {
    slug: 'nuh-the-long-call-and-the-ark',
    title: 'Nuh: The Long Call, the Ark and the Flood',
    metaTitle: 'Nuh in the Qur’an: The 950-Year Call, the Ark, the Flood and the Limits of the Sources',
    description: 'The Qur’anic story of Nuh: the call by night and day, the rejection by the elites, the building of the ark, the flood, the son who refused, the wife who disbelieved, the covenant after the flood, and the archaeological claims that cannot be verified.',
    category: 'Prophets',
    readTime: '14 min',
    intro: P(`Nuh is the prophet of patience in the Qur’an. He calls his people for what the text describes as a thousand years minus fifty, is mocked, is rejected by the powerful, and is finally commanded to build a vessel on dry land. The flood that follows is one of the Qur’an’s great scenes of judgement, and the survival of the believers in the ark is one of its great scenes of mercy.`) +
      P(`The story is also a test of honesty. Popular retellings add a global flood, a specific mountain, the exact size of the ark and a chronology of centuries. Some of those details are later tradition; some are modern speculation dressed as archaeology. This article follows the Qur’an, uses the authentic hadith sparingly, and says clearly where the evidence stops.`),
    keyTakeaways: [
      `Nuh is described in the Qur’an as remaining among his people “a thousand years minus fifty” (29:14).`,
      `He called openly and secretly, by night and day, and was rejected by the chiefs while the weak believed.`,
      `The ark was built by divine command and under divine observation, and Nuh was mocked while building it.`,
      `The flood destroyed the deniers; the Qur’an does not specify its geographical extent.`,
      `Nuh’s son refused to board and was drowned; the Qur’an denies that family ties save a person who rejects faith.`,
      `Nuh’s wife is cited in 66:10 as an example of a believer’s relative who disbelieved.`,
      `Ark-hunting claims, the “Durupinar” formation and the Black Sea flood hypothesis are not evidence for the Qur’anic narrative.`
    ],
    sections: [
      {
        id: 'why-nuh',
        heading: 'Why Nuh Matters',
        html: P(`Nuh is one of the five prophets described in the hadith as “the messengers of strong will” (ulu al-‘azm), together with Ibrahim, Musa, Isa and Muhammad ﷺ. The Qur’an mentions him in more than forty places and devotes a whole surah to his preaching (Surah Nuh, 71). He is the first messenger sent to a people who had turned to idolatry, and his story sets the pattern for every later confrontation between a prophet and a hostile community.`) +
          P(`For Muslims, Nuh is also a figure of warning and hope at once. The warning is that a community can become so settled in its error that it mistakes the prophet for a fool. The hope is that a small, weak, mocked group can be saved while the powerful are not. The story is retold in the Qur’an precisely because those dynamics recur.`) +
          P(`The narrative is spread across Surahs Hud (11:25–49), al-Mu’minun (23:23–30), al-A‘raf (7:59–64), al-Shu‘ara’ (26:105–122), al-Qamar (54:9–17), al-Anbiya’ (21:76–77) and Nuh (71:1–28). Each passage selects different scenes: the preaching, the ark, the son, the flood, the covenant.`)
      },
      {
        id: 'quranic-dossier',
        heading: 'The Qur’anic Dossier',
        html: P(`The Qur’an presents Nuh as a messenger sent to his own people. “We sent Nuh to his people, [saying], ‘Warn your people before there comes to them a painful punishment’” (71:1). His message is the message of every prophet: worship Allah alone, fear Him and obey the messenger (71:3; 23:23). The Qur’an does not give the name of his town, the number of his followers or the date of the flood.`) +
          P(`The narrative is remarkably consistent across the surahs. The people reject him, the chiefs accuse him of being a mere man who wants superiority, and they demand signs. Nuh refuses to drive away the poor believers to please the elite. He insists that he asks no wage. The flood comes by divine command, the believers are saved, and the deniers are destroyed.`) +
          P(`The Qur’an also uses Nuh as a historical reference point. “The people of Nuh denied before them” (51:46), and the destruction of earlier nations is cited as evidence that God’s judgement is real (9:70; 14:9; 22:42; 25:37). The story is thus both narrative and argument: it tells what happened and it draws the lesson for the present.`)
      },
      {
        id: 'the-call',
        heading: 'The Call: Day and Night, Secret and Public',
        html: P(`Surah Nuh preserves the content of the preaching with unusual intimacy. Nuh says: “My Lord, indeed I invited my people [to truth] night and day. But my invitation increased them not except in flight. And indeed, every time I invited them that You may forgive them, they put their fingers in their ears, covered themselves with their garments, persisted, and were arrogant with [great] arrogance” (71:5–7).`) +
          P(`He then appeals to their self-interest without reducing the message to it: “Ask forgiveness of your Lord. Indeed, He is ever a Perpetual Forgiver. He will send [rain from] the sky upon you in [continuing] showers and give you increase in wealth and children and provide for you gardens and rivers” (71:10–12). The Qur’an presents repentance as the door to both spiritual and material well-being, not as a transaction but as a consequence of restored order.`) +
          P(`The call is also theological. Nuh asks, “What is [the matter] with you that you do not attribute to Allah [due] grandeur, while He has created you in stages?” (71:13–14). He points to the seven heavens, the moon as a light, the sun as a lamp, and the earth as a spread carpet with wide paths (71:15–20). The argument is from creation to Creator, the same argument the Qur’an uses throughout.`)
      },
      {
        id: 'the-response',
        heading: 'The Response: Mockery, Elites and the Poor',
        html: P(`The chiefs of the people answer with a familiar combination of social contempt and theological denial: “This is not but a man like you, desiring to make himself superior to you” (23:24); “we see you in clear error” (7:60); “we do not see you but as a man like ourselves, and we do not see you followed except by those who are the lowest of us” (11:27). The objection is not really about evidence. It is about status.`) +
          P(`Nuh’s reply is one of the most important passages in the Qur’an on the social character of prophethood: “And I do not say to you that I have the treasures of Allah, nor do I know the unseen, nor do I say that I am an angel, nor do I say of those whom your eyes look down upon that Allah will not give them any good. Allah is most knowing of what is within their souls” (11:31). He refuses to trade the poor for the powerful.`) +
          P(`The Qur’an also records the demand for a sign and the offer of a compromise: “They said, ‘O Nuh, you have disputed with us and increased our dispute. Bring us what you threaten us with, if you are of the truthful’” (11:32). Nuh answers that only Allah can bring it, and that no advice of his will benefit them if Allah intends to leave them in error (11:34). The dialogue ends not with a debate victory but with a judgement.`)
      },
      {
        id: 'nine-hundred-fifty',
        heading: 'The 950 Years and the Problem of Chronology',
        html: P(`The Qur’an says: “And We certainly sent Nuh to his people, and he remained among them a thousand years minus fifty years” (29:14). The number is stated in the text, and the classical commentators took it literally. Some modern readers have suggested that the “year” here is not a solar year, or that the figure is symbolic of endurance rather than a precise chronology. Neither suggestion is required by the text, and neither is established.`) +
          P(`What the number does establish is the scale of the patience being described. The Qur’an is not offering a date for the flood; it is telling the reader that the call lasted an extraordinarily long time and that the rejection was not a momentary misunderstanding. The rhetorical force of the figure is at least as important as its arithmetic.`) +
          P(`The verse also raises a question the Qur’an does not answer: how could a single preacher address one people for so long? The text does not describe generations, successors or the structure of the community. It compresses the period into a single continuous mission, and the reader is meant to feel the weight of it rather than to reconstruct a timeline.`)
      },
      {
        id: 'the-ark',
        heading: 'The Ark: Command, Construction and Mockery',
        html: P(`The ark is built by revelation, not by human engineering alone: “And construct the ship under Our observation and Our inspiration, and do not address Me concerning those who have wronged — indeed, they are to be drowned” (11:37). The same command appears in 23:27. The Qur’an does not describe the wood, the dimensions, the number of decks or the materials. Those details come from later tradition and from the Bible.`) +
          P(`While he builds, his people mock him: “And he was building the ship, and every time a company of his people passed by him, they ridiculed him. He said, ‘If you ridicule us, then we will ridicule you just as you ridicule’” (11:38). The scene is a study in the loneliness of obedience. The man is doing something that looks absurd to everyone around him, and he is doing it because he was commanded.`) +
          P(`The ark is also described as carrying “a pair of every kind” (11:40) and the believers, and the Qur’an says that Nuh was commanded to take his family except those against whom the word had already passed (11:40). The emphasis is on salvation by divine instruction rather than on the vessel as a technical achievement.`)
      },
      {
        id: 'the-flood',
        heading: 'The Flood: Text, Scope and the Question of Universality',
        html: P(`The flood begins when “Our command came and the oven overflowed” (11:40), an image that has puzzled commentators. Water comes from the sky and bursts from the earth: “So We opened the gates of the heaven with rain pouring down and caused the earth to burst with springs, and the waters met for a matter already predestined” (54:11–12). The ark sails “amid waves like mountains” (11:42).`) +
          P(`The Qur’an describes the destruction of “the people of Nuh” and says that “they were drowned because of their sins” (71:25). It does not say that every human being on earth was drowned. The classical commentators often assumed a universal flood, and the Bible describes one, but the Qur’anic text is not explicit about geography or extent. The theological point is the judgement of a rejecting people, not a census of the planet.`) +
          P(`The ark settles on “al-Judi” (11:44), a name the Qur’an gives without locating it. Later tradition places it in northern Mesopotamia or on a mountain in the region of Ararat. The Qur’an does not. The verse that follows — “And it was said, ‘Away with the wrongdoing people’” (11:44) — closes the scene with a verdict rather than a map.`)
      },
      {
        id: 'family-and-lineage',
        heading: 'The Son, the Wife and the Limits of Lineage',
        html: P(`One of the most painful scenes in the Qur’an is the son who refuses to board. Nuh calls to him, “O my son, come aboard with us and be not with the disbelievers.” He replies, “I will take refuge on a mountain to protect me from the water.” Nuh says, “There is no protector today from the decree of Allah, except for whom He gives mercy.” And the wave comes between them, and he is among the drowned (11:42–43).`) +
          P(`Then Nuh calls to his Lord: “My Lord, indeed my son is of my family, and indeed Your promise is true, and You are the most just of judges.” The answer is one of the most important verses in the Qur’an about belonging: “O Nuh, indeed he is not of your family; indeed, he is [one whose] work was other than righteous, so do not ask Me about that of which you have no knowledge” (11:45–46). Nuh repents of the question and seeks forgiveness (11:47).`) +
          P(`The Qur’an reinforces the point with the wives of Nuh and Lut: “They were under two of Our righteous servants but they betrayed them, so they [the husbands] availed them nothing against Allah” (66:10). The verse is a warning to the believers that a relationship with a prophet is not a substitute for faith. It is also a correction of the idea that lineage, tribe or family name can secure salvation.`)
      },
      {
        id: 'covenant-and-second-adam',
        heading: 'The Covenant and the “Second Adam”',
        html: P(`After the flood, the Qur’an speaks of blessing and a new beginning: “It was said, ‘O Nuh, descend with peace from Us and blessings upon you and upon nations [to be created] from those with you’” (11:48). The verse is the Qur’anic equivalent of a new humanity, and it is why later writers called Nuh the second father of humanity.`) +
          P(`That title is a later epithet, not a Qur’anic term. The Qur’an does say that Allah chose Nuh: “Indeed, Allah chose Adam and Nuh and the family of Ibrahim and the family of Imran over the worlds” (3:33). It also lists Nuh among the prophets with whom Allah made a covenant: “And [mention, O Muhammad], when We took from the prophets their covenant and from you and from Nuh and Ibrahim and Musa and Isa, son of Maryam” (33:7).`) +
          P(`The covenant is the framework of the whole prophetic story. Nuh is not an isolated wonder; he is one link in a chain that runs from Adam through Ibrahim, Musa and Isa to Muhammad ﷺ. The Qur’an uses the earlier prophets to establish the continuity of the message and the unity of the Messenger who sent them.`)
      },
      {
        id: 'nuh-in-hadith',
        heading: 'Nuh in Hadith and the Intercession Narrative',
        html: P(`The most important hadith reference to Nuh is the long report of intercession. On the Day of Resurrection, people go to Adam, then to Nuh, saying, “O Nuh, you are the first messenger to the people of the earth, and Allah called you a grateful servant” (Sahih al-Bukhari and Sahih Muslim). The report identifies Nuh as the first messenger sent to a people, which is consistent with Adam being a prophet within his own household.`) +
          P(`The Qur’an itself calls Nuh “a grateful servant” (17:3), and the hadith picks up the phrase. The report is also a reminder that the prophets are not worshipped; they are intercessors by God’s permission, and the chain of intercession ends with the Prophet Muhammad ﷺ.`) +
          P(`The hadith also mentions that Nuh fasted often, and some reports describe him as one who never ate his fill. These reports are not at the highest level of authenticity, and they are not needed to establish his status. The Qur’an’s portrait of patient, persistent preaching is sufficient.`)
      },
      {
        id: 'archaeology-limits',
        heading: 'Archaeology, Geology and the Limits of Claim',
        html: P(`The search for the ark has produced a large literature and a larger industry. Claims have been made for Mount Ararat in Turkey, for the “Durupinar” formation near Dogubayazit, for Mount Judi in southeastern Turkey and for sites in Iran. None has produced a vessel that can be dated, excavated and identified as the ark. The formations that are photographed are geological structures, and the photographs circulated online are often presented without the excavation reports that would test the claim.`) +
          P(`The “Black Sea flood hypothesis” is a scientific proposal about a rapid rise in the Black Sea around 5600 BCE. It is debated among geologists, and even if it were correct it would not establish the Qur’anic narrative. A natural event and a prophetic judgement are not the same kind of claim, and the Qur’an does not invite the reader to date the flood.`) +
          P(`This matters for honesty. The Qur’an does not need archaeological confirmation, and faith is not strengthened by a false report. When a Muslim repeats an unverified ark claim as fact, he puts the credibility of the narrative at the mercy of the next expedition. The better position is the one the Qur’an itself takes: the story is true, the lesson is clear, and the physical details are not the point.`) +
          NOTE(`<strong>Source caution:</strong> the Qur’an does not specify the size of the ark, the number of animals, the extent of the flood or the modern location of al-Judi. Claims to have found the ark are not established.`)
      },
      {
        id: 'sources-and-limits',
        heading: 'Sources and Their Limits',
        html: P(`The main sources for this article are:`) +
          UL([
            `<strong>The Qur’an</strong> — especially 11:25–49, 23:23–30, 71:1–28, 7:59–64, 26:105–122, 54:9–17, 29:14, 3:33 and 33:7.`,
            `<strong>Sahih al-Bukhari and Sahih Muslim</strong> — the intercession narrative and the identification of Nuh as the first messenger.`,
            `<strong>Al-Tabari, Jami‘ al-Bayan</strong> — the classical commentary and its isnad discussions.`,
            `<strong>Ibn Kathir, Tafsir and al-Bidayah wa al-Nihayah</strong> — the later synthesis with grading.`,
            `<strong>Al-Qurtubi, al-Jami‘ li Ahkam al-Qur’an</strong> — the legal and theological discussion.`,
            `<strong>Modern studies of the ancient Near East and of flood traditions</strong> — used only for context, not as proof of the Qur’anic account.`
          ]) +
          P(`The Qur’anic narrative is consistent across its passages. The later literature adds the dimensions of the ark, the names of the sons, the number of believers, the exact mountain and the date. Those additions are not established and should not be preached as revelation.`) +
          NOTE(`<strong>Editorial note:</strong> this article distinguishes the Qur’anic text, the authentic hadith and later narrative. It does not endorse ark-hunting claims or treat scientific hypotheses as confirmation of revelation.`)
      }
    ],
    faqs: [
      { q: 'How long did Nuh preach?', a: 'The Qur’an says he remained among his people “a thousand years minus fifty years” (29:14), which is 950 years. The classical commentators took the figure literally. The text does not explain how the period was counted, and the number’s main force is to convey the scale of his patience.' },
      { q: 'Was the flood global?', a: 'The Qur’an does not say. It describes the destruction of the people of Nuh and the salvation of the believers in the ark, but it does not specify the geographical extent. Many classical commentators assumed a universal flood, but the text is not explicit, and the theological point is the judgement of a rejecting people.' },
      { q: 'Did Nuh’s son drown?', a: 'Yes. The Qur’an describes Nuh calling his son to board, the son refusing and seeking refuge on a mountain, and the wave coming between them (11:42–43). The Qur’an then says that the son was “not of your family” in the sense of faith (11:46).' },
      { q: 'Where did the ark land?', a: 'The Qur’an names “al-Judi” (11:44) without locating it. Later tradition places it in northern Mesopotamia or near Ararat. The exact site is not established, and claims to have found the ark are unverified.' },
      { q: 'Was Nuh the first prophet?', a: 'Adam was the first prophet, but Nuh was the first messenger sent to a disobedient people. The Prophet ﷺ is reported to have called Nuh “the first messenger to the people of the earth” in the intercession narrative (Sahih al-Bukhari and Sahih Muslim).' }
    ],
    bibliography: [
      `The Qur’an — especially 11:25–49, 23:23–30, 71:1–28, 7:59–64, 26:105–122, 54:9–17, 29:14, 3:33, 33:7, 66:10, 17:3. Translations adapted from Saheeh International unless stated.`,
      `Sahih al-Bukhari — the intercession narrative and the prophets’ ranks.`,
      `Sahih Muslim — the intercession narrative and the first messenger.`,
      `Al-Tabari, <em>Jami‘ al-Bayan ‘an Ta’wil Ay al-Qur’an</em> — the Nuh passages.`,
      `Al-Qurtubi, <em>al-Jami‘ li Ahkam al-Qur’an</em> — legal and theological discussion.`,
      `Ibn Kathir, <em>Tafsir al-Qur’an al-‘Azim</em> and <em>al-Bidayah wa al-Nihayah</em> — the later synthesis.`,
      `Ibn Hisham, <em>al-Sirah al-Nabawiyyah</em> — the narrative framework.`,
      `Modern studies of ancient Near Eastern flood traditions and of the history of ark claims.`
    ],
    related: [
      ...relatedBase,
      { href: 'stories-of-the-prophets.html', label: 'Stories of the Prophets: an overview of the Qur’anic narratives' },
      { href: 'adam-creation-trust-and-repentance.html', label: 'Adam: creation, trust and repentance' },
      { href: 'ibrahim-friend-of-allah-and-the-trial.html', label: 'Ibrahim: the friend of Allah and the trial of faith' },
      { href: '../prophets.html', label: 'Prophetic narratives library' }
    ]
  },

  {
    slug: 'ibrahim-friend-of-allah-and-the-trial',
    title: 'Ibrahim: The Friend of Allah and the Trial of Faith',
    metaTitle: 'Ibrahim in the Qur’an: The Search for God, the Fire, the Sacrifice and the House',
    description: 'The Qur’anic story of Ibrahim: the search for the Lord among the star, moon and sun, the breaking of the idols, the fire that became cool, the father who refused, the guests and the annunciation, Isma’il and the sacrifice, the building of the House and the pilgrimage.',
    category: 'Prophets',
    readTime: '15 min',
    intro: P(`Ibrahim is the pivot of the Qur’anic prophetic story. He is the friend of Allah (khalil), the hanif who rejected the idolatry of his people, the father of Isma’il and Ishaq, the builder of the House in Makkah, and the ancestor of the Israelite line and of the Prophet Muhammad ﷺ. Judaism, Christianity and Islam all claim him, and the Qur’an insists that he was neither Jew nor Christian but a submitter to the one God.`) +
      P(`His story is also a sequence of tests. He argues with his people, breaks their idols, is thrown into a fire, leaves his homeland, is given a son in old age, is commanded to sacrifice him, and is told that his covenant will not include the wrongdoers. This article follows those scenes through the Qur’an, uses the authentic hadith where they add something, and marks the point where later legend takes over.`),
    keyTakeaways: [
      `Ibrahim is called hanif, a pure monotheist who turned away from idolatry before the revelation of the Torah and the Gospel.`,
      `The Qur’an describes his reasoning from the star, moon and sun to the Creator who does not set (6:75–79).`,
      `He broke the idols of his people and was thrown into a fire that Allah made cool and safe (21:68–70).`,
      `His father rejected him; Ibrahim prayed for him but disassociated himself when the enmity became clear (9:114).`,
      `The Qur’an does not name the son of the sacrifice; most scholars say Isma’il, and some early reports say Ishaq.`,
      `He built the House with Isma’il and prayed for a messenger from among their descendants (2:127–129).`,
      `The details of Nimrod, the catapult, the size of the fire and the name of Ibrahim’s mother are later tradition.`
    ],
    sections: [
      {
        id: 'why-ibrahim',
        heading: 'Why Ibrahim Matters',
        html: P(`The Qur’an mentions Ibrahim more than sixty times, and it treats him as the standard of pure monotheism. “Indeed, Ibrahim was a nation, devoutly obedient to Allah, inclining toward truth, and he was not of those who associate others with Allah” (16:120). The word “nation” (ummah) for a single man is striking: he is a community in himself because he carried the religion alone when everyone around him had turned away.`) +
          P(`He is also the link between the prophets. The Qur’an calls him the father of the believers in faith (22:78), the friend of Allah (4:125), and the one whose milla, or way, the Prophet Muhammad ﷺ was commanded to follow (3:95; 16:123). The pilgrimage, the qibla, the sacrifice of Eid al-Adha and the prayer of Ibrahim all connect the Muslim community to him.`) +
          P(`For all that, the Qur’an does not give a continuous biography. It gives scenes arranged by argument, and the reader has to assemble them. The scenes are: the search for the Lord, the confrontation with the people and the idols, the fire, the migration, the guests and the annunciation, the sacrifice, and the House.`)
      },
      {
        id: 'portrait',
        heading: 'The Qur’anic Portrait: Hanif, Ummah, Khalil',
        html: P(`Three titles define Ibrahim in the Qur’an. The first is hanif: one who inclines away from falsehood toward the truth, a pure monotheist. The term is used in contrast to the polytheists and also to the Jews and Christians who claimed him: “Ibrahim was not a Jew nor a Christian, but he was a hanif, a Muslim, and he was not of the polytheists” (3:67).`) +
          P(`The second is ummah: a model, a community in one person (16:120). The third is khalil: “And Allah took Ibrahim as a friend” (4:125). The title is relational, not biological. It speaks of a closeness that the Qur’an does not explain, and the theologians have been careful not to reduce it to a physical or spatial nearness.`) +
          P(`The Qur’an also describes him as grateful: “He was grateful for His favours; He chose him and guided him to a straight path” (16:121). Gratitude runs through the whole story: Ibrahim receives tests and responds with obedience.`)
      },
      {
        id: 'search-for-lord',
        heading: 'The Search for the Lord: Star, Moon and Sun',
        html: P(`Surah al-An‘am preserves one of the most discussed passages in the Qur’an: “And thus did We show Ibrahim the realm of the heavens and the earth that he would be among the certain [in faith]. So when the night covered him [with darkness], he saw a star. He said, ‘This is my lord.’ But when it set, he said, ‘I like not those that disappear.’ And when he saw the moon rising, he said, ‘This is my lord.’ But when it set, he said, ‘Unless my Lord guides me, I will surely be among the people gone astray.’ And when he saw the sun rising, he said, ‘This is my lord; this is greater.’ But when it set, he said, ‘O my people, indeed I am free from what you associate with Allah’” (6:75–78).`) +
          P(`The passage has been read in two main ways. Some commentators take it as a record of Ibrahim’s actual reasoning: he began with the celestial bodies as candidates and rejected each because it set. Others read it as a rhetorical device addressed to his people: he presents their gods as hypotheses and demolishes them one by one. Both readings are classical, and both make the same point: a god who disappears cannot be God.`) +
          P(`The conclusion is stated in the next verse: “Indeed, I have turned my face toward He who created the heavens and the earth, inclining toward truth, and I am not of those who associate others with Allah” (6:79). The argument from change and dependence is a classic form of natural theology, and the Qur’an uses it again and again: the Creator is the one who does not change, while everything He made is subject to change.`)
      },
      {
        id: 'idols-and-fire',
        heading: 'Breaking the Idols and the Fire',
        html: P(`Surah al-Anbiya’ tells the confrontation in a compressed, almost cinematic sequence. Ibrahim says to his father and people, “What are these statues to which you are devoted?” They reply that their fathers worshipped them. He says, “You and your fathers were in clear error.” They ask whether he is serious or joking, and he answers, “Rather, your Lord is the Lord of the heavens and the earth, who created them, and I am of those who testify to that” (21:52–56).`) +
          P(`He then breaks the idols except the largest, so that the people may question it: “He said, ‘Rather, this — the largest of them — did it, so ask them, if they should [be able to] speak’” (21:63). The people turn on themselves, admit that the idols cannot speak, and then relapse into their old position. The scene exposes the incoherence of idolatry: the worshippers know that the statues are helpless, yet they cannot let go of them.`) +
          P(`Their response is to burn him. “They said, ‘Burn him and protect your gods, if you are to do [anything]’” (21:68). The Qur’an then says, “We said, ‘O fire, be coolness and safety upon Ibrahim’” (21:69). The fire is not described as a miracle performed for a crowd; it is a command that changes the nature of the fire for the one who is in it. The Qur’an adds that they intended harm but were made the losers (21:70).`) +
          P(`The details that fill the popular account — Nimrod’s name, the catapult, the size of the fire, the number of days, the angels fanning him — are not in the Qur’an. Nimrod appears in the Qur’an only as an unnamed king in 2:258, and the identification is from later tradition. The article uses the Qur’anic scene and labels the rest.`)
      },
      {
        id: 'the-father',
        heading: 'The Father: Preaching, Promise and Disavowal',
        html: P(`Ibrahim’s father is called Azar in the Qur’an (6:74), and the passage in Surah Maryam gives the most extended dialogue between a prophet and a parent in the Qur’an. Ibrahim addresses him with tenderness: “O my father, why do you worship that which does not hear and does not see and will not avail you in anything? O my father, indeed there has come to me of knowledge that which has not come to you, so follow me; I will guide you to an even path” (19:42–43).`) +
          P(`The father answers with threat: “Have you turned away from my gods, O Ibrahim? If you do not desist, I will surely stone you, so avoid me a prolonged time” (19:46). Ibrahim replies, “Peace be upon you. I will ask forgiveness for you from my Lord. Indeed, He is ever a Perpetual Forgiver” (19:47). He then separates himself and his people and turns to Allah (19:48–49).`) +
          P(`The Qur’an later explains the limits of that promise: “And the request of forgiveness of Ibrahim for his father was only because of a promise he had made to him. But when it became apparent to him that he was an enemy to Allah, he disassociated himself from him. Indeed, Ibrahim was compassionate and forbearing” (9:114). The verse is important for two reasons. It shows that filial love is not cancelled by disagreement, and it shows that love for a person does not require approval of disbelief.`) +
          P(`The Qur’an also presents Ibrahim as a model of disavowal for the believers: “There has already been for you an excellent pattern in Ibrahim and those with him, when they said to their people, ‘Indeed, we are disassociated from you and from whatever you worship other than Allah’” (60:4). The pattern is not hatred of people but clarity about worship.`)
      },
      {
        id: 'migration-and-guests',
        heading: 'Migration, Lut and the Guests',
        html: P(`Ibrahim leaves his people: “And he said, ‘Indeed, I am going to my Lord. He will guide me’” (37:99). The Qur’an does not name the destination, though the tradition places the migration in the direction of Syria and Palestine. Lut, his nephew, believes with him and migrates: “And Lut believed him. And he said, ‘Indeed, I am emigrating to my Lord. Indeed, He is the Exalted in Might, the Wise’” (29:26).`) +
          P(`The most vivid scene of the later years is the visit of the angels. “And certainly did Our messengers come to Ibrahim with good tidings; they said, ‘Peace.’ He said, ‘Peace,’ and did not delay in bringing [them] a roasted calf” (11:69). When he sees that their hands do not reach the food, he becomes afraid, and they reassure him and give him the good news of a son. His wife, standing by, laughs, and they announce Ishaq and, beyond him, Ya’qub (11:71).`) +
          P(`The annunciation is followed by a tense exchange. Ibrahim argues for the people of Lut, and the angels say, “O Ibrahim, turn away from this. Indeed, the command of your Lord has come, and indeed, there will come to them a punishment that cannot be repelled” (11:76). The scene shows a prophet interceding for a sinful people and being told that the decree is final. It is one of the Qur’an’s clearest statements about the limits of intercession before judgement.`)
      },
      {
        id: 'sacrifice',
        heading: 'Isma’il, the Sacrifice and the Ransom',
        html: P(`The Qur’an gives the sacrifice in Surah al-Saffat: “My Lord, grant me [a child] from among the righteous. So We gave him good tidings of a forbearing boy. And when he reached with him [the age of] exertion, he said, ‘O my son, indeed I have seen in a dream that I [must] sacrifice you, so see what you think.’ He said, ‘O my father, do as you are commanded. You will find me, if Allah wills, of the steadfast’” (37:100–102).`) +
          P(`When both had submitted, and Ibrahim had laid him on his forehead, he was called: “O Ibrahim, you have fulfilled the vision. Indeed, We thus reward the doers of good. Indeed, this was the clear trial. And We ransomed him with a great sacrifice” (37:104–107). The Qur’an does not describe the animal, the place or the conversation beyond this. The ritual of Eid al-Adha commemorates the obedience, not the details.`) +
          P(`The identity of the son is not stated in Surah al-Saffat. Most Muslim scholars, and the majority of the classical commentaries, say Isma’il, because the passage is followed by the annunciation of Ishaq (37:112) and because the Qur’an connects the sacrifice with the House in Makkah. Some early reports say Ishaq, and the disagreement is old. The Qur’an’s silence is real, and a preacher who insists on one name should know that he is going beyond the text.`) +
          NOTE(`<strong>Source caution:</strong> the Qur’an does not name the son of the sacrifice in Surah al-Saffat. The majority view is Isma’il; some early reports say Ishaq. The name of the place, the age of the son and the words of the angels are later narrative detail.`)
      },
      {
        id: 'the-house',
        heading: 'The House, the Prayer and the Pilgrimage',
        html: P(`The Qur’an connects Ibrahim with the House in Makkah: “And [mention] when We designated for Ibrahim the site of the House, [saying], ‘Do not associate anything with Me and purify My House for those who perform tawaf and those who stand [in prayer] and those who bow and prostrate’” (22:26). He is commanded to proclaim the pilgrimage: “And proclaim to the people the Hajj; they will come to you on foot and on every lean camel, coming from every distant pass” (22:27).`) +
          P(`With Isma’il he raises the foundations and prays: “Our Lord, accept [this] from us. Indeed, You are the Hearing, the Knowing. Our Lord, and make us Muslims [in submission] to You and from our descendants a Muslim nation [in submission] to You. And show us our rites and accept our repentance. Indeed, You are the Accepting of repentance, the Merciful” (2:127–128). The prayer continues with the request for a messenger from among them, “who will recite to them Your verses and teach them the Book and wisdom” (2:129).`) +
          P(`The Qur’an identifies the House as “the first House established for the people” (3:96) and the place of the standing of Ibrahim (2:125). The pilgrimage rites — the tawaf, the standing at Arafah, the sacrifice — are thus anchored in the Abrahamic story. The Prophet ﷺ reformed the rites and removed the polytheistic additions, but he did not invent them; he restored them to the worship of the one God.`)
      },
      {
        id: 'tests-and-imam',
        heading: 'The Tests and the Imam of Humanity',
        html: P(`The Qur’an summarises the whole life in one verse: “And [mention, O Muhammad], when Ibrahim was tried by his Lord with commands and he fulfilled them. [Allah] said, ‘Indeed, I will make you a leader for the people.’ [Ibrahim] said, ‘And of my descendants?’ [Allah] said, ‘My covenant does not include the wrongdoers’” (2:124).`) +
          P(`The verse establishes two principles. The first is that leadership in religion is earned through trial and obedience, not claimed through ancestry. The second is that the covenant is conditional: it does not pass automatically to every descendant. The children of a prophet can be wrongdoers, and the Qur’an says so plainly, as it does with the son of Nuh and the wives of Nuh and Lut.`) +
          P(`The “commands” with which Ibrahim was tried are not listed in the verse. The commentaries suggest the acts of worship, the migration, the sacrifice, the building of the House and the endurance of the fire. The list is not fixed, and the point is not the enumeration but the response: “he fulfilled them”. The Qur’an presents Ibrahim as the model of a faith that is tested and proven, not a faith that is merely professed.`)
      },
      {
        id: 'ibrahim-in-hadith',
        heading: 'Ibrahim in Hadith and Later Literature',
        html: P(`The authentic hadith add several details and one important correction. The Prophet ﷺ said, “We have more right to be in doubt than Ibrahim when he said, ‘My Lord, show me how You give life to the dead’” (Sahih al-Bukhari and Sahih Muslim). The report is a lesson in humility: even a prophet asked for reassurance, and the Prophet ﷺ identifies with that need rather than pretending to a faith without questions.`) +
          P(`Another report says that Ibrahim told three lies, all in the cause of God: he said “I am sick” when he did not want to go with his people to their festival, he said of the largest idol that it had broken the others, and he referred to Sarah as his sister to protect her from a king. The report is in Sahih al-Bukhari, and scholars explain the “lies” as figurative or prudential speech, not as moral falsehood.`) +
          P(`The later literature is vast: Nimrod’s name, the catapult, the fire’s size, the number of days Ibrahim spent in it, the name of his mother, the age of Isma’il at the sacrifice, the exact location of the Maqam and the story of the four birds (2:260). Some of these have a basis in the Qur’an or the hadith; many do not. The rule remains: the Qur’an and the sound Sunnah establish, the historians report, the storytellers imagine.`)
      },
      {
        id: 'sources-and-limits',
        heading: 'Sources and Their Limits',
        html: P(`The main sources for this article are:`) +
          UL([
            `<strong>The Qur’an</strong> — especially 2:124–132, 2:258, 3:67–68, 3:95–97, 4:125, 6:74–83, 9:114, 11:69–76, 14:35–41, 16:120–123, 19:41–50, 21:51–70, 22:26–27, 37:99–113 and 60:4.`,
            `<strong>Sahih al-Bukhari</strong> — the Hajar and Zamzam narrative, the “three lies” report and the hadith of Ibrahim’s doubt.`,
            `<strong>Sahih Muslim</strong> — the hadith of Ibrahim’s doubt and the virtues of the prophets.`,
            `<strong>Al-Tabari, Jami‘ al-Bayan</strong> — the classical commentary and its isnad discussions.`,
            `<strong>Ibn Kathir, Tafsir and al-Bidayah wa al-Nihayah</strong> — the later synthesis with grading.`,
            `<strong>Al-Qurtubi, al-Jami‘ li Ahkam al-Qur’an</strong> — legal and theological discussion.`
          ]) +
          P(`The Qur’anic scenes are consistent, but they are not a chronicle. The name Nimrod, the fire’s mechanics, the identity of the sacrificed son and the ages of the patriarchs are later material. This article reports the majority view on the son and the disagreement around it, and it does not present legend as revelation.`) +
          NOTE(`<strong>Editorial note:</strong> this is an educational synthesis, not a critical edition. The article distinguishes the Qur’an, the authentic hadith and later narrative, and it does not adjudicate every classical dispute.`)
      }
    ],
    faqs: [
      { q: 'Why is Ibrahim called the friend of Allah?', a: 'The Qur’an says, “And Allah took Ibrahim as a friend” (4:125). The title (khalil) expresses a special closeness that the Qur’an does not define. The theologians have been careful not to interpret it in physical or spatial terms.' },
      { q: 'Was Ibrahim thrown into a fire?', a: 'Yes. The Qur’an says his people said, “Burn him and protect your gods,” and that Allah commanded the fire to be “coolness and safety” for him (21:68–70). The details of the catapult, the size of the fire and the duration are later tradition.' },
      { q: 'Which son was to be sacrificed?', a: 'The Qur’an does not name him in Surah al-Saffat (37:100–107). The majority of scholars say Isma’il; some early reports say Ishaq. The disagreement is old and the text is silent.' },
      { q: 'Did Ibrahim build the Kaaba?', a: 'The Qur’an says he raised the foundations of the House with Isma’il (2:127) and that Allah designated the site for him (22:26). It also calls the House “the first House established for the people” (3:96). The Qur’an does not describe the original dimensions or the construction process.' },
      { q: 'Was Nimrod the king who argued with Ibrahim?', a: 'The Qur’an describes an unnamed king who argued with Ibrahim about his Lord (2:258). The identification with Nimrod comes from later tradition, not from the Qur’an or an authentic hadith.' }
    ],
    bibliography: [
      `The Qur’an — especially 2:124–132, 2:258, 3:67–68, 3:95–97, 4:125, 6:74–83, 9:114, 11:69–76, 14:35–41, 16:120–123, 19:41–50, 21:51–70, 22:26–27, 37:99–113, 60:4. Translations adapted from Saheeh International unless stated.`,
      `Sahih al-Bukhari — Hajar and Zamzam, the “three lies” report, the hadith of Ibrahim’s doubt and the building of the House.`,
      `Sahih Muslim — the hadith of Ibrahim’s doubt and the virtues of the prophets.`,
      `Al-Tabari, <em>Jami‘ al-Bayan ‘an Ta’wil Ay al-Qur’an</em> — the Ibrahim passages.`,
      `Al-Qurtubi, <em>al-Jami‘ li Ahkam al-Qur’an</em> — legal and theological discussion.`,
      `Ibn Kathir, <em>Tafsir al-Qur’an al-‘Azim</em> and <em>al-Bidayah wa al-Nihayah</em> — the later synthesis.`,
      `Ibn Hisham, <em>al-Sirah al-Nabawiyyah</em> — the narrative framework.`,
      `Modern studies of the Abrahamic traditions and of the history of the Makkan sanctuary.`
    ],
    related: [
      ...relatedBase,
      { href: 'stories-of-the-prophets.html', label: 'Stories of the Prophets: an overview of the Qur’anic narratives' },
      { href: 'adam-creation-trust-and-repentance.html', label: 'Adam: creation, trust and repentance' },
      { href: 'nuh-the-long-call-and-the-ark.html', label: 'Nuh: the long call, the ark and the flood' },
      { href: 'yusuf-beauty-of-forgiveness.html', label: 'Yusuf: beauty, chastity and forgiveness' },
      { href: '../prophets.html', label: 'Prophetic narratives library' }
    ]
  },

  {
    slug: 'yusuf-beauty-of-forgiveness',
    title: 'Yusuf: Beauty, Chastity and Forgiveness',
    metaTitle: 'Yusuf in the Qur’an: The Best of Stories, Chastity, Power and Forgiveness',
    description: 'The Qur’anic story of Yusuf: the dream, the jealousy of the brothers, the well, slavery in Egypt, the temptation and prison, the king’s dream, the rise to power, the cup and Binyamin, and the forgiveness that ends the story.',
    category: 'Prophets',
    readTime: '15 min',
    intro: P(`Surah Yusuf is the only surah in the Qur’an that tells a single prophet’s story from beginning to end, and the Qur’an calls it “the best of stories” (12:3). It has a plot, a cast, reversals, a trial, a rise to power and a reconciliation. It is also a sustained study of patience, chastity, family jealousy, political responsibility and forgiveness.`) +
      P(`The story is popular, and popularity has cost it accuracy. The name Zulaykha, the seven-year famine, the exact years in prison and the romantic elaborations of later literature are not in the Qur’an. This article follows the Qur’anic narrative closely, keeps the hadith in their proper place, and separates the text from the legend.`),
    keyTakeaways: [
      `Yusuf’s dream of eleven stars, the sun and the moon frames the surah and is fulfilled at its end (12:4; 12:100).`,
      `The brothers’ jealousy leads to his being cast into a well and sold into slavery in Egypt.`,
      `He refuses the advances of his master’s wife, is imprisoned unjustly, and interprets dreams in prison.`,
      `He interprets the king’s dream, is released, and is appointed over the storehouses of the land.`,
      `The cup is placed in Binyamin’s bag to keep him, and the brothers return to Ya’qub in grief.`,
      `Yusuf forgives his brothers with the words of 12:92, which the Prophet ﷺ later recited at the conquest of Makkah.`,
      `The name Zulaykha, the seven-year famine and the exact prison term are later tradition, not Qur’anic text.`
    ],
    sections: [
      {
        id: 'why-yusuf',
        heading: 'Why Yusuf Matters',
        html: P(`Surah Yusuf is a complete narrative in a single surah, and it is placed in the Qur’an among the surahs that address the Prophet ﷺ in a time of difficulty. The opening and closing verses make the purpose explicit: “We relate to you the best of stories” (12:3) and “There was certainly in their stories a lesson for those of understanding” (12:111). The story is consolation and instruction at once.`) +
          P(`The surah is also a study in how a believer lives inside a hostile system. Yusuf is a slave, a prisoner and then a minister. He does not withdraw from public life, and he does not compromise his faith. He interprets dreams, administers a famine, saves a nation and forgives the brothers who wronged him. The Qur’an presents political responsibility as a field of service, not a temptation to be avoided.`) +
          P(`Finally, the surah is a masterpiece of narrative technique. It withholds information, shifts point of view, uses clothing as a recurring symbol, and lets the reader know more than the characters. The Qur’an’s claim that it is “the best of stories” is not only a theological judgement; it is a literary one.`)
      },
      {
        id: 'best-of-stories',
        heading: '“The Best of Stories”: Structure and Setting',
        html: P(`The surah moves through a series of settings: the family home in Canaan, the well, the caravan, the Egyptian household, the prison, the royal court, the storehouses and the final reunion. Each setting tests Yusuf in a different way, and each is resolved before the next begins. The movement is from the private to the public, from the victim to the minister.`) +
          P(`The recurring symbols are clothing and dreams. The shirt is stained with false blood (12:18), torn from the back (12:25–28), sent to restore Ya’qub’s sight (12:93), and finally the shirt of honour. Dreams appear at the beginning, in prison and at the court, and the final scene is the interpretation of the first dream. The surah is built so that the ending answers the beginning.`) +
          P(`The Qur’an also uses the brothers as a collective character. They speak with one voice, plot together, accuse one another and finally confess. Their change is not sudden; it is the cumulative effect of famine, guilt and the generosity of the brother they wronged. The surah is as much about their repentance as about Yusuf’s patience.`)
      },
      {
        id: 'dream-and-jealousy',
        heading: 'The Dream and the Brothers’ Jealousy',
        html: P(`The surah opens with a boy’s dream: “O my father, indeed I have seen eleven stars and the sun and the moon prostrating to me” (12:4). Ya’qub recognises its significance and warns him: “O my son, do not relate your vision to your brothers, lest they devise a plan against you. Indeed, Satan is an enemy to man, a manifest one” (12:5). The father’s caution is not superstition; it is an understanding of human envy.`) +
          P(`The brothers’ jealousy is stated in their own words: “When they said, ‘Joseph and his brother are more beloved to our father than we, while we are a clan. Indeed, our father is in clear error’” (12:8). They propose to kill him or cast him out, and one of them suggests the well instead: “Do not kill Joseph, but throw him into the bottom of the well; some caravan will pick him up” (12:10).`) +
          P(`The plan is carried out with a cruelty that the Qur’an does not soften. They ask their father to send Yusuf with them, promise to protect him, and then throw him into the well. The Qur’an inserts a divine reassurance: “And We inspired to him, ‘You will surely inform them of this affair of theirs while they do not perceive’” (12:15). The boy in the well is given the end of the story before he lives it.`)
      },
      {
        id: 'well-and-egypt',
        heading: 'The Well, the Caravan and Egypt',
        html: P(`The brothers return to their father at night, weeping, with the shirt stained with false blood: “They said, ‘O our father, indeed we went racing each other and left Joseph with our possessions, and a wolf ate him’” (12:17). Ya’qub does not believe them. “He said, ‘Rather, your souls have enticed you to something, so patience is most fitting. And Allah is the one sought for help against that which you describe’” (12:18).`) +
          P(`The caravan finds Yusuf in the well and sells him: “And they sold him for a reduced price — a few dirhams — and they were, concerning him, of those content with little” (12:20). The Qur’an’s detail is precise and unromantic. A human being is priced at a few coins. The verse is a quiet indictment of the slave trade that the later story embellishes with golden caravans.`) +
          P(`In Egypt, “the one who bought him” tells his wife to treat him well, and the Qur’an notes that “We established Joseph in the land that We might teach him the interpretation of events” (12:21). The Egyptian household becomes the next test. The Qur’an calls the buyer’s wife “the one in whose house he was” (12:23), not by name. The name Zulaykha comes from later literature.`)
      },
      {
        id: 'temptation-and-prison',
        heading: 'Temptation, Chastity and Prison',
        html: P(`The temptation scene is one of the most discussed passages in the Qur’an. “And she, in whose house he was, sought to seduce him. She closed the doors and said, ‘Come, you.’ He said, ‘I seek refuge in Allah. Indeed, he is my master, who has made good my residence. Indeed, wrongdoers will not succeed’” (12:23). The refusal is immediate, and it is framed as a refuge in God rather than a calculation of consequences.`) +
          P(`The Qur’an then describes the race to the door and the shirt torn from the back (12:25). A witness from her family suggests that if the shirt is torn from the front she is telling the truth, and if from the back he is (12:26–27). The shirt becomes evidence, and the husband concludes that it is “of your plan” (12:28). Yusuf asks to be imprisoned rather than return to the situation: “My Lord, prison is more to my liking than that to which they invite me” (12:33).`) +
          P(`In prison he meets two young men and interprets their dreams: one will pour wine for his master, the other will be crucified and the birds will eat from his head (12:36–41). He uses the occasion to preach: “O my two companions of prison, are separate lords better or Allah, the One, the Prevailing?” (12:39). The scene shows that da‘wah is not confined to free men or comfortable places.`) +
          P(`He asks the one he believes will be released to remember him, but “Satan made him forget the mention [to] his master, and he remained in prison several years” (12:42). The Qur’an does not blame Yusuf for the request, but it records the delay honestly. The servant of God can do everything right and still wait.`)
      },
      {
        id: 'dreams-and-rise',
        heading: 'Dreams, Famine and the Rise',
        html: P(`The king’s dream is the turning point: seven fat cows eaten by seven lean ones, and seven green ears of grain and seven dry (12:43). The court’s interpreters fail, and the released prisoner remembers Yusuf. Yusuf interprets: seven years of plenty followed by seven years of famine, with a plan to store grain and keep seed for the next planting (12:47–49).`) +
          P(`The king summons him, but Yusuf refuses to leave prison until his innocence is established: “Return to your master and ask him, ‘What is the case of the women who cut their hands? Indeed, my Lord is Knowing of their plan’” (12:50). The investigation vindicates him, and the wife confesses: “Now the truth has become evident. I attempted to seduce him, and he is of the truthful” (12:51).`) +
          P(`Only then does Yusuf accept office: “Appoint me over the storehouses of the land. Indeed, I will be a knowing guardian” (12:55). The verse is a model of public responsibility: he asks for a position because he has the competence for it, and he uses it to serve. The Qur’an says that “We established Joseph in the land, to settle therein wherever he willed” (12:56).`) +
          P(`The seven-year famine is not stated in the Qur’an as a fixed number of years for the famine itself; the text says seven years of plenty and then “a hard year” or years of scarcity (12:48–49). The popular “seven years of famine” is an inference. The exact chronology is not the point; the administration and the mercy are.`)
      },
      {
        id: 'binyamin-and-cup',
        heading: 'The Brothers Return: Binyamin and the Cup',
        html: P(`The famine brings the brothers to Egypt, and the surah’s most delicate scenes follow. Yusuf recognises them, but they do not recognise him (12:58). He supplies them generously and asks them to bring their brother: “Bring me a brother of yours from your father” (12:59). He takes a pledge from them and warns them that if they do not return, he will not measure grain for them (12:63–66).`) +
          P(`When they return with Binyamin, Yusuf reveals himself to him: “Indeed, I am your brother, so do not despair over what they used to do” (12:69). He then has a drinking cup placed in Binyamin’s bag. When the caravan leaves, a herald announces the theft, and the brothers deny it. The cup is found, and Binyamin is detained according to the law of the land (12:70–76).`) +
          P(`The brothers are devastated, not because they love Binyamin less but because they fear their father. They offer themselves in his place, and Yusuf refuses: “Allah forbid that we take other than him with whom we found our property. Indeed, if we did so, we would be wrongdoers” (12:79). The verse is a statement of legal integrity: the innocent are not punished for the guilty.`) +
          P(`The brothers return to Ya’qub with the news, and he turns away and says, “O my sons, go and find out about Joseph and his brother and despair not of the mercy of Allah. Indeed, no one despairs of the mercy of Allah except the disbelieving people” (12:87). The father’s hope is the theological heart of the surah.`)
      },
      {
        id: 'forgiveness',
        heading: '“No Blame Upon You Today”: Forgiveness and Power',
        html: P(`The reconciliation begins with a question: “He said, ‘Do you know what you did with Joseph and his brother when you were ignorant?’ They said, ‘Are you indeed Joseph?’ He said, ‘I am Joseph, and this is my brother. Allah has certainly favoured us. Indeed, he who fears Allah and is patient, then indeed, Allah does not allow the reward of the doers of good to be lost’” (12:89–90).`) +
          P(`The brothers confess: “By Allah, certainly has Allah preferred you over us, and indeed, we have been sinners” (12:91). Yusuf’s answer is one of the most famous sentences in the Qur’an: “No blame will there be upon you today. Allah will forgive you; and He is the most merciful of the merciful” (12:92).`) +
          P(`The verse is remarkable because Yusuf has the power to punish. He is the minister of Egypt, and his brothers are foreigners in his hands. He chooses forgiveness not from weakness but from strength. The Prophet ﷺ recited the same verse at the conquest of Makkah, when he had the power to destroy the city that had persecuted him. The parallel is deliberate in the Sirah and it is one of the clearest links between the two stories.`) +
          P(`The forgiveness is not amnesia. Yusuf says, “No blame upon you today,” and then he acts to save the family from famine: “Take this, my shirt, and cast it over the face of my father; he will become seeing. And bring me your family, all together” (12:93). Forgiveness leads to restoration, not to a polite distance.`)
      },
      {
        id: 'yaqub-and-fulfilment',
        heading: 'Ya’qub’s Patience and the Fulfilment of the Dream',
        html: P(`Ya’qub’s patience runs through the surah as a counterpoint to Yusuf’s. He refuses to believe the false blood, he refuses to believe the loss of Binyamin, and he says, “So patience is most fitting. Perhaps Allah will bring them to me all together. Indeed, it is He who is the Knowing, the Wise” (12:83). He also says, “I only complain of my suffering and grief to Allah, and I know from Allah that which you do not know” (12:86).`) +
          P(`The shirt restores his sight, and he says, “Indeed, I find the scent of Joseph” (12:94). The family travels to Egypt, and the dream is fulfilled: “And he raised his parents upon the throne, and they fell in prostration to him. And he said, ‘O my father, this is the interpretation of my vision from before. My Lord has made it true’” (12:100).`) +
          P(`The prostration of the family is not worship of Yusuf. The Qur’an is explicit that worship belongs to Allah alone, and the classical commentators explain the gesture as a greeting or a recognition of his rank, permitted in the law of that time. The verse closes with Yusuf’s prayer: “My Lord, You have given me [something] of sovereignty and taught me of the interpretation of dreams. Creator of the heavens and earth, You are my protector in this world and the Hereafter. Cause me to die a Muslim and join me with the righteous” (12:101).`) +
          P(`The surah ends by returning to the Prophet ﷺ and to the reader: “That is from the news of the unseen which We reveal to you, [O Muhammad]. And you were not with them when they decided their plan while they were plotting” (12:102). The story is presented as revelation, and the proof of its truth is its coherence and its agreement with what the earlier scriptures report.`)
      },
      {
        id: 'yusuf-in-hadith',
        heading: 'Yusuf in Hadith and Later Literature',
        html: P(`The authentic hadith honour Yusuf as one of the noble line: “The noble son of the noble son of the noble son of the noble: Yusuf son of Ya’qub son of Ishaq son of Ibrahim” (Sahih al-Bukhari). The report establishes his lineage and his rank among the prophets, and it is a reminder that the Qur’anic story is not an isolated tale.`) +
          P(`The Prophet ﷺ also recited 12:92 at the conquest of Makkah, as the Sirah reports, and the verse became the model of prophetic amnesty. The connection is one of the most important in the Seerah: the wronged man who becomes powerful chooses mercy.`) +
          P(`The later literature adds the name Zulaykha, the name of the Egyptian minister (Qitfir in some reports), the exact number of years in prison, the age of Yusuf at each stage, the romantic sequel in which Zulaykha marries him, and the detailed description of his beauty. None of this is in the Qur’an or the sound hadith. Some of it is edifying poetry; some of it is fantasy. It should be labelled as literature, not as revelation.`) +
          NOTE(`<strong>Source caution:</strong> the Qur’an does not name the wife of the Egyptian minister, does not give the length of Yusuf’s imprisonment and does not describe his physical beauty. Those details come from later narrative and poetry.`)
      },
      {
        id: 'sources-and-limits',
        heading: 'Sources and Their Limits',
        html: P(`The main sources for this article are:`) +
          UL([
            `<strong>The Qur’an</strong> — Surah Yusuf (12:1–111) in full, with 12:92 as the central verse on forgiveness.`,
            `<strong>Sahih al-Bukhari</strong> — the lineage of Yusuf and the virtues of the prophets.`,
            `<strong>Sahih Muslim</strong> — parallel reports on the prophets and the lessons of patience.`,
            `<strong>Al-Tabari, Jami‘ al-Bayan</strong> — the classical commentary and its narrative material.`,
            `<strong>Ibn Kathir, Tafsir and al-Bidayah wa al-Nihayah</strong> — the later synthesis with grading.`,
            `<strong>Al-Qurtubi, al-Jami‘ li Ahkam al-Qur’an</strong> — legal and theological discussion.`
          ]) +
          P(`Surah Yusuf is a single continuous narrative, which makes it easier to follow than the scattered Adam and Ibrahim passages. But the surah is still not a chronicle: it does not give dates, ages or the names of most characters. The later literature supplies those details, and this article marks them as later.`) +
          NOTE(`<strong>Editorial note:</strong> this is an educational synthesis, not a critical edition. The article distinguishes the Qur’anic text, the authentic hadith and later narrative, and it does not present legend as revelation.`)
      }
    ],
    faqs: [
      { q: 'Why is Surah Yusuf called the best of stories?', a: 'The Qur’an itself uses the phrase in 12:3. The surah tells a complete narrative from dream to fulfilment, with a coherent plot, a moral arc and a resolution. The description is both literary and theological: the story is beautifully told and it teaches patience, chastity and forgiveness.' },
      { q: 'Did Yusuf marry Zulaykha?', a: 'The Qur’an does not say. The name Zulaykha and the story of her later marriage to Yusuf come from later literature, not from the Qur’an or an authentic hadith. The Qur’an mentions only that she confessed his innocence (12:51).' },
      { q: 'How long was Yusuf in prison?', a: 'The Qur’an says “several years” (12:42) without giving a number. The figure of seven or twelve years comes from later tradition. The exact length is not established.' },
      { q: 'Why did Yusuf not reveal himself to his brothers earlier?', a: 'The Qur’an does not explain his motive in detail. The narrative shows him testing them, providing for them and waiting for the right moment. The delay allows the brothers to confront their guilt and the family to be reunited in a way that fulfils the dream.' },
      { q: 'Was Yusuf’s forgiveness unconditional?', a: 'He says, “No blame will there be upon you today” (12:92) before any request for pardon. The forgiveness is freely given. It is followed by practical restoration: he sends his shirt to heal his father’s sight and asks for the whole family to come to Egypt.' }
    ],
    bibliography: [
      `The Qur’an — Surah Yusuf (12:1–111), especially 12:4, 12:18, 12:23–33, 12:42, 12:50–57, 12:69–76, 12:87–93, 12:100–101 and 12:111. Translations adapted from Saheeh International unless stated.`,
      `Sahih al-Bukhari — the lineage of Yusuf and the virtues of the prophets.`,
      `Sahih Muslim — parallel reports on the prophets.`,
      `Al-Tabari, <em>Jami‘ al-Bayan ‘an Ta’wil Ay al-Qur’an</em> — Surah Yusuf.`,
      `Al-Qurtubi, <em>al-Jami‘ li Ahkam al-Qur’an</em> — legal and theological discussion.`,
      `Ibn Kathir, <em>Tafsir al-Qur’an al-‘Azim</em> and <em>al-Bidayah wa al-Nihayah</em> — the later synthesis.`,
      `Ibn Hisham, <em>al-Sirah al-Nabawiyyah</em> — the conquest of Makkah and the recitation of 12:92.`,
      `Modern studies of Qur’anic narrative and of the literary structure of Surah Yusuf.`
    ],
    related: [
      ...relatedBase,
      { href: 'stories-of-the-prophets.html', label: 'Stories of the Prophets: an overview of the Qur’anic narratives' },
      { href: 'ibrahim-friend-of-allah-and-the-trial.html', label: 'Ibrahim: the friend of Allah and the trial of faith' },
      { href: 'hudaybiyyah-and-conquest-of-makkah.html', label: 'Hudaybiyyah and the conquest of Makkah' },
      { href: '../prophets.html', label: 'Prophetic narratives library' }
    ]
  }
];
