const P = t => `<p style="line-height:1.8; color:var(--color-text-main); margin-bottom:14px;">${t}</p>`;
const H3 = t => `<h3 style="font-size:1.15rem; color:var(--color-primary); margin:22px 0 10px;">${t}</h3>`;
const UL = items => `<ul style="line-height:1.9; color:var(--color-text-main); padding-left:20px; margin-bottom:14px;">${items.map(i => `<li>${i}</li>`).join('')}</ul>`;
const Q = (text, cite) => `<blockquote style="background:var(--color-card); border-left:4px solid var(--color-gold); padding:16px 22px; margin:18px 0; border-radius:0 8px 8px 0;"><div style="font-style:italic; color:var(--color-text-main); line-height:1.8;">&ldquo;${text}&rdquo;</div><div style="margin-top:6px; font-size:0.85rem; color:var(--color-gold); font-weight:600;">${cite}</div></blockquote>`;
const NOTE = t => `<div style="background:var(--color-surface); border:1px solid var(--color-border); border-radius:10px; padding:16px 18px; margin:18px 0; font-size:0.92rem; line-height:1.75;">${t}</div>`;

const relatedBase = [
  { href: 'index.html', label: 'Articles Library — full catalogue' },
  { href: '../pillars.html', label: 'The Five Pillars of Islam' },
  { href: '../salah-guide.html', label: 'Step-by-step Salah guide' },
  { href: '../duas.html', label: 'Duas and Adhkar library' },
  { href: '../calendar.html', label: 'Hijri calendar and date converter' }
];

module.exports = [
  {
    slug: 'fasting-and-ramadan',
    title: 'Understanding Fasting and Ramadan: A Complete Learning Guide',
    metaTitle: 'Understanding Fasting and Ramadan: A Complete Learning Guide',
    description: 'A practical, source-based guide to fasting in Ramadan: the obligation and purpose, who is exempt, suhoor and iftar, what invalidates a fast, Tarawih, Laylat al-Qadr, Zakat al-Fitr, I\'tikaf and a daily plan.',
    category: 'Worship',
    readTime: '12 min',
    intro: P('Ramadan is the ninth month of the Islamic lunar calendar and the month in which the Qur\'an began to be revealed. Fasting (<em>sawm</em>) is one of the five pillars of Islam, obligatory for every adult Muslim who is able, with clear exemptions for illness, travel, pregnancy, breastfeeding, menstruation and advanced age. This guide explains the law and the practice together, and flags where the schools of jurisprudence differ.') + P('It is a learning guide, not a personal fatwa. For medical conditions or complex circumstances, consult a qualified scholar and a physician.'),
    keyTakeaways: [
      'Fasting Ramadan is obligatory for able adult Muslims and is one of the five pillars.',
      'The purpose is taqwa — God-consciousness and self-restraint.',
      'Exemptions are real and merciful; missed fasts are made up or compensated.',
      'Suhoor is a recommended pre-dawn meal; iftar is at sunset.',
      'Laylat al-Qadr is sought in the last ten nights, especially the odd nights.',
      'Zakat al-Fitr is a separate obligation from Zakat on wealth.'
    ],
    sections: [
      {
        id: 'obligation-purpose',
        heading: 'The Obligation and Purpose of Fasting',
        html: P('Fasting was prescribed in the second year after the Hijrah. The Qur\'an states the command and its purpose in a single verse:') +
          Q('O you who have believed, decreed upon you is fasting as it was decreed upon those before you that you may become righteous.', 'Qur\'an 2:183') +
          P('The Arabic word <em>taqwa</em> is often translated as piety or God-consciousness. Fasting trains it by suspending lawful desires for a set period, teaching the believer that the self can be governed rather than obeyed.') +
          P('The Prophet ﷺ said that Islam is built on five: the testimony of faith, prayer, zakat, fasting Ramadan, and Hajj (Sahih al-Bukhari and Sahih Muslim). Fasting is therefore not a voluntary devotion but a foundational obligation.') +
          P('Ramadan is also the month of the Qur\'an. The Qur\'an was revealed in it, and the Prophet ﷺ reviewed the Qur\'an with Jibril every Ramadan. Reading and studying the Qur\'an is thus integral to the month, not an optional extra.')
      },
      {
        id: 'month-begins',
        heading: 'When Ramadan Begins: Sighting and Calculation',
        html: P('The Islamic calendar is lunar. A new month begins with the sighting of the crescent or, according to many scholars, with the completion of thirty days of the previous month. The Prophet ﷺ said: <em>“Fast when you see it and break when you see it, and if it is cloudy then complete thirty days”</em> (Sahih al-Bukhari and Sahih Muslim).') +
          P('Muslims differ on whether astronomical calculation may be used when physical sighting is impossible or disputed. This is a genuine juristic difference, not a sign of unbelief. NoorDeen\'s Hijri calendar tool provides calculated dates and should be used alongside your local mosque or authority.') +
          NOTE('<strong>Practical advice:</strong> Follow the announced date of the recognised authority in your country or community. Avoid turning the start of Ramadan into a sectarian dispute.')
      },
      {
        id: 'who-is-exempt',
        heading: 'Who Is Exempt, and What They Do',
        html: P('The Qur\'an explicitly mentions exemptions:') +
          Q('So whoever among you is ill or on a journey — then an equal number of other days. And upon those who are able [to fast, but with hardship] — a ransom of feeding a poor person.', 'Qur\'an 2:184') +
          P('The classical scholars list the following categories:') +
          UL([
            '<strong>Illness:</strong> if fasting would harm or severely worsen the condition, one may break the fast and make it up later.',
            '<strong>Travel:</strong> travellers may break the fast and make it up later; the details depend on distance and duration according to each school.',
            '<strong>Pregnancy and breastfeeding:</strong> if there is risk to mother or child, one may break the fast. Schools differ on whether make-up, fidyah, or both are required.',
            '<strong>Menstruation and postnatal bleeding:</strong> fasting is not valid during these periods, and the missed days are made up later.',
            '<strong>Advanced age or chronic illness:</strong> those permanently unable to fast may feed a poor person for each day (fidyah).',
            '<strong>Children:</strong> not obligatory before puberty, though training is encouraged.'
          ]) +
          P('A person who deliberately breaks a Ramadan fast without a valid excuse commits a serious sin and may owe make-up plus expiation (<em>kaffarah</em>) according to the school. The expiation is normally freeing a slave, or fasting two consecutive months, or feeding sixty poor people — the first two are not applicable or possible for most people today, so feeding is the practical option.')
      },
      {
        id: 'suhoor-iftar',
        heading: 'Suhoor and Iftar: The Daily Rhythm',
        html: P('Suhoor is the pre-dawn meal. It is a recommended practice, not an obligation. The Prophet ﷺ said: <em>“Take suhoor, for in suhoor there is blessing”</em> (Sahih al-Bukhari and Sahih Muslim). He also advised delaying suhoor and hastening iftar.') +
          P('Iftar is the sunset meal. The recommended practice is to break the fast with dates and water, then pray Maghrib, then eat the main meal. The Prophet ﷺ said: <em>“The people will remain upon goodness as long as they hasten the iftar”</em> (Sahih al-Bukhari and Sahih Muslim).') +
          P('A common supplication at iftar is: <em>“Dhahaba al-zama\'u wa ibtallat al-\'uruqu wa thabata al-ajru in sha\' Allah”</em> — “The thirst has gone, the veins are moistened, and the reward is confirmed, if Allah wills” (narrated by Abu Dawud).') +
          P('Nutritionally, the priority is hydration, slow-release carbohydrates, protein and moderation. Ramadan is not a month of feasting after sunset; the point is restraint.')
      },
      {
        id: 'invalidators',
        heading: 'What Invalidates the Fast',
        html: P('The core invalidators are deliberate eating, drinking, sexual intercourse, and deliberate vomiting. Menstrual and postnatal bleeding also invalidate the fast. Accidental eating or drinking does not break the fast; the Prophet ﷺ said that if one forgets and eats or drinks, he should complete his fast, for Allah fed him (Sahih al-Bukhari and Sahih Muslim).') +
          P('Matters that scholars discuss in detail include:') +
          UL([
            '<strong>Injections and IV fluids:</strong> non-nutritive injections are generally permitted by many contemporary scholars; nutritive drips invalidate. Opinions differ.',
            '<strong>Inhalers:</strong> many scholars permit them for asthma, comparing them to dust or miswak; some require make-up.',
            '<strong>Brushing teeth:</strong> permitted if one avoids swallowing toothpaste; the miswak is explicitly recommended.',
            '<strong>Rinsing the mouth and nose:</strong> permitted without exaggeration.',
            '<strong>Blood tests and dialysis:</strong> depend on the type and quantity; consult a scholar and doctor.',
            '<strong>Medication patches and eye drops:</strong> generally discussed as non-invalidating by many, but differences exist.'
          ]) +
          NOTE('<strong>Principle:</strong> uncertainty about a medical matter is not a licence to ignore the fast, nor is it a reason to abandon treatment. Ask a qualified scholar with medical knowledge of your case.')
      },
      {
        id: 'tarawih',
        heading: 'Tarawih and Night Prayer',
        html: P('Tarawih is the voluntary night prayer performed after Isha during Ramadan. The Prophet ﷺ prayed it with the companions for a few nights, then stopped for fear it would become obligatory. Umar later revived the practice of praying it in congregation.') +
          P('The number of rak\'ahs is a matter of juristic difference: the Hanafi, Shafi\'i and Hanbali schools commonly pray twenty, while the Maliki school and some hadith-oriented scholars prefer eight plus witr. Both practices are attested and accepted. The quality of recitation and humility matters more than the count.') +
          P('Tarawih is not obligatory, but it is a emphasised Sunnah. The Prophet ﷺ said: <em>“Whoever stands in prayer during Ramadan out of faith and seeking reward, his previous sins will be forgiven”</em> (Sahih al-Bukhari and Sahih Muslim).')
      },
      {
        id: 'laylat-al-qadr',
        heading: 'Laylat al-Qadr: The Night of Decree',
        html: P('Laylat al-Qadr is the night on which the Qur\'an was revealed and which the Qur\'an describes as better than a thousand months:') +
          Q('Indeed, We sent it down during the Night of Decree. And what can make you know what is the Night of Decree? The Night of Decree is better than a thousand months.', 'Qur\'an 97:1–3') +
          P('The Prophet ﷺ instructed believers to seek it in the last ten nights, especially the odd nights (21st, 23rd, 25th, 27th, 29th), though the exact night is not fixed. Aisha asked what to say if she found it, and he taught her: <em>“Allahumma innaka \'afuwwun tuhibb al-\'afwa fa\'fu \'anni”</em> — “O Allah, You are Forgiving and love forgiveness, so forgive me” (narrated by al-Tirmidhi, graded authentic).') +
          P('The night is an opportunity for repentance, supplication, Qur\'an and prayer — not for elaborate rituals invented for the occasion.')
      },
      {
        id: 'zakat-al-fitr',
        heading: 'Zakat al-Fitr and Eid',
        html: P('Zakat al-Fitr is a mandatory charity at the end of Ramadan, distinct from the annual Zakat on wealth. It is due from every Muslim who possesses more than their basic needs for the day and night of Eid, and it is paid on behalf of dependants.') +
          P('The standard amount is one <em>sa\'</em> of the staple food of the locality — approximately 2.5 to 3 kilograms of rice, wheat, dates or similar. Many scholars permit paying its monetary equivalent, especially where that serves the poor better. It must be paid before the Eid prayer, ideally in the last days of Ramadan.') +
          P('Eid al-Fitr begins with the sighting of Shawwal. The recommended acts include the takbir, a bath, wearing one\'s best clothes, eating dates before the prayer, and taking a different route to and from the prayer. Zakat al-Fitr is what allows the poor to celebrate without begging.')
      },
      {
        id: 'itikaf',
        heading: 'I\'tikaf: Spiritual Retreat',
        html: P('I\'tikaf is seclusion in the mosque for worship, especially in the last ten nights of Ramadan. It is a confirmed Sunnah. The Prophet ﷺ used to observe it, and Aisha reported that he would enter the mosque and stay there for worship (Sahih al-Bukhari and Sahih Muslim).') +
          P('The minimum is a short period of intention and staying in the mosque; many scholars require fasting and a valid mosque. I\'tikaf is not a holiday from responsibilities: one may leave for necessities, and it should not cause harm to family or work obligations.') +
          P('Its purpose is to remove distractions and focus the heart on Allah in the most sacred nights of the year.')
      },
      {
        id: 'daily-plan',
        heading: 'A Practical Daily Plan for Ramadan',
        html: UL([
          '<strong>Before Fajr:</strong> wake for suhoor, make intention, pray Tahajjud if able, and eat a balanced meal.',
          '<strong>Fajr:</strong> pray in congregation, then read Qur\'an or reflect until sunrise if possible.',
          '<strong>Morning:</strong> work or study, with a short Qur\'an portion and dhikr.',
          '<strong>Afternoon:</strong> rest if needed, prepare iftar, avoid arguments and gossip.',
          '<strong>Maghrib:</strong> break the fast with dates and water, pray, then eat moderately.',
          '<strong>Isha and Tarawih:</strong> pray, listen attentively, and avoid distracting conversations in the mosque.',
          '<strong>Night:</strong> a small portion of Qur\'an, supplication, and sleep early enough for suhoor.'
        ]) +
          P('The most common Ramadan failures are not theological but practical: oversleeping, overeating, excessive social media, and losing tempers. Plan for them. The Prophet ﷺ said that fasting is a shield, so when one is fasting he should not behave obscenely or foolishly (Sahih al-Bukhari and Sahih Muslim).')
      }
    ],
    faqs: [
      { q: 'Can I brush my teeth while fasting?', a: 'Yes, provided you do not swallow toothpaste or water. The Prophet ﷺ recommended the miswak while fasting. Rinsing the mouth is permitted without exaggeration.' },
      { q: 'Do injections break the fast?', a: 'Contemporary scholars generally distinguish between nutritive and non-nutritive injections. Most permit non-nutritive injections (such as many vaccines and local anaesthetics) and prohibit nutritive drips. Opinions differ on some cases; consult a qualified scholar and your physician.' },
      { q: 'What if I miss a fast due to menstruation?', a: 'You do not fast during menstruation, and you make up the missed days after Ramadan. This is established in authentic hadith and agreed upon by the schools.' },
      { q: 'Can I pay Zakat al-Fitr in cash?', a: 'Many contemporary scholars permit paying the monetary equivalent, especially where cash serves the poor better. Others prefer the literal staple food. Follow your local mosque or the school you follow.' },
      { q: 'Is it permissible to travel during Ramadan?', a: 'Yes. Travellers have a concession to break the fast and make it up later, subject to the conditions of travel in your school. If the journey is easy and fasting causes no hardship, many scholars prefer fasting.' }
    ],
    bibliography: [
      'The Qur\'an — Surahs al-Baqarah (2:183–187, 2:196–203), al-Qadr (97) and al-Baqarah (2:185).',
      'Sahih al-Bukhari and Sahih Muslim — Books of Fasting, Night Prayer and Zakat al-Fitr.',
      'Al-Nawawi, <em>al-Majmu\' Sharh al-Muhadhdhab</em>.',
      'Ibn Rushd, <em>Bidayat al-Mujtahid wa Nihayat al-Muqtasid</em>.',
      'Ibn Qudamah, <em>al-Mughni</em>.',
      'Al-Shawkani, <em>Nayl al-Awtar</em>.',
      'Contemporary fiqh manuals on medical exemptions, read alongside a physician\'s advice.'
    ],
    related: relatedBase
  },

  {
    slug: 'hajj-and-umrah-guide',
    title: 'Hajj and Umrah: A Learning Guide',
    metaTitle: 'Hajj and Umrah: A Learning Guide',
    description: 'A clear guide to Hajj and Umrah: the obligation and conditions, Ihram and its prohibitions, the rites from 8 to 13 Dhul Hijjah, Tawaf and Sa\'i, Arafah, Muzdalifah, Mina, sacrifice, and practical preparation.',
    category: 'Worship',
    readTime: '13 min',
    intro: P('Hajj is the fifth pillar of Islam and an obligation once in a lifetime for every adult Muslim who is physically and financially able. Umrah is a lesser pilgrimage that may be performed at most times of the year. Both are acts of worship with precise rites, and both are physically demanding. This guide explains the sequence, the legal conditions, and the practical details that pilgrims most often misunderstand.') + P('It is an educational overview, not a substitute for a qualified teacher or your country\'s official Hajj authority. Rites vary in small details between the schools; follow the instructions of the school you follow and the organisers guiding you.'),
    keyTakeaways: [
      'Hajj is obligatory once in a lifetime for those who are able.',
      'Ihram begins at the miqat and imposes specific prohibitions.',
      'The core rites run from 8 to 13 Dhul Hijjah, with Arafah on the 9th.',
      'Tawaf is seven circuits of the Ka\'bah; Sa\'i is seven trips between Safa and Marwah.',
      'Missing Arafah invalidates the Hajj; other omissions may be compensated.',
      'Umrah consists of Ihram, Tawaf, Sa\'i and shaving or trimming.'
    ],
    sections: [
      {
        id: 'hajj-in-scripture',
        heading: 'Hajj in the Qur\'an and Sunnah',
        html: P('The Qur\'an commands pilgrimage and describes its purpose:') +
          Q('And proclaim to the people the Hajj; they will come to you on foot and on every lean camel, coming from every distant pass.', 'Qur\'an 22:27') +
          P('It also states the obligation:') +
          Q('And pilgrimage to the House is a duty owed to Allah by mankind — for whoever is able to find a way. And whoever disbelieves — then indeed, Allah is free from need of the worlds.', 'Qur\'an 3:97') +
          P('The Prophet ﷺ performed one Hajj, the Farewell Pilgrimage in 632 CE, and taught the rites personally. He said: <em>“Take your rites from me”</em> (narrated in Sahih Muslim). The detailed sequence therefore comes from his practice, not from later custom.') +
          P('Hajj is also a re-enactment of the story of Ibrahim, Hajar and Isma\'il: the running between Safa and Marwah recalls Hajar\'s search for water, and the sacrifice recalls Ibrahim\'s trial.')
      },
      {
        id: 'conditions',
        heading: 'Who Must Perform Hajj',
        html: P('The obligation applies to a Muslim who is:') +
          UL([
            '<strong>Adult</strong> and of sound mind.',
            '<strong>Free</strong> — historically this referred to slavery; today it means not under coercive restriction.',
            '<strong>Physically able</strong> to undertake the journey and rites.',
            '<strong>Financially able</strong> — possessing the cost of travel, accommodation and subsistence, while leaving adequate provision for dependants and debts.',
            '<strong>Secure</strong> — the route and destination are safe enough to travel.'
          ]) +
          P('A woman\'s requirement of a <em>mahram</em> is debated. The majority of classical scholars require a mahram for travel, while others permit travel with a trustworthy group. Saudi regulations have changed over time and should be checked directly. This is a genuine difference; it should not be used to shame or pressure anyone.') +
          P('Hajj is not due from someone who is in debt and unable to repay, or who has dependants in need. It is also valid to perform Hajj on behalf of a deceased or permanently incapacitated person, under conditions discussed by jurists.')
      },
      {
        id: 'ihram',
        heading: 'Ihram: The Sacred State',
        html: P('Ihram is the state entered at the <em>miqat</em> — the designated boundary — with the intention to perform Hajj or Umrah. For men it involves wearing two unstitched white sheets; for women, ordinary modest clothing that does not cover the face or hands in the state of ihram according to most schools (though face covering is debated when near non-mahram men).') +
          P('The prohibitions of ihram include: cutting hair or nails, using perfume, marital intimacy, hunting land game, and — for men — covering the head or wearing stitched clothing. Women may wear sewn clothes. Violations require expiation depending on the type.') +
          P('The talbiyah is recited from the moment of ihram until the beginning of Tawaf for Umrah, or until the Day of Sacrifice for Hajj: <em>“Labbayk Allahumma labbayk, labbayka la sharika laka labbayk, inna al-hamda wa al-ni\'mata laka wa al-mulk, la sharika lak.”</em>') +
          NOTE('<strong>Practical note:</strong> Carry unscented toiletries, keep your ihram clean, and learn the specific prohibitions before you travel. Many pilgrims accidentally use scented soap or deodorant.')
      },
      {
        id: 'rites-day-by-day',
        heading: 'The Rites Day by Day',
        html: P('<strong>8 Dhul Hijjah (Yawm al-Tarwiyah):</strong> Pilgrims enter ihram, travel to Mina, and pray Dhuhr, Asr, Maghrib, Isha and the next Fajr there.') +
          P('<strong>9 Dhul Hijjah (Yawm Arafah):</strong> The pivotal day. Pilgrims travel to Arafah, stand in supplication from after Dhuhr until sunset, and combine Dhuhr and Asr. This standing (<em>wuquf</em>) is the essential rite; missing it invalidates the Hajj.') +
          P('<strong>Night of 9–10 (Muzdalifah):</strong> After sunset, pilgrims travel to Muzdalifah, pray Maghrib and Isha together, rest, and pray Fajr. Pebbles are collected here or at Mina.') +
          P('<strong>10 Dhul Hijjah (Yawm al-Nahr):</strong> The busiest day. Pilgrims stone the large Jamarah, offer the sacrifice, shave or trim, and perform Tawaf al-Ifadah. They may then leave ihram (with some restrictions remaining until the final Tawaf).') +
          P('<strong>11–13 Dhul Hijjah (Ayyam al-Tashriq):</strong> Pilgrims stay in Mina and stone all three Jamarat after Dhuhr each day. They may leave on the 12th after stoning if they depart before sunset, or stay until the 13th.') +
          P('<strong>Final Tawaf:</strong> The Farewell Tawaf (<em>Tawaf al-Wada\'</em>) is performed before leaving Makkah.') +
          P('The order is important but the schools differ on whether some steps may be delayed or advanced. If you forget a step, consult your group\'s scholar immediately rather than guessing.')
      },
      {
        id: 'tawaf-sai',
        heading: 'Tawaf and Sa\'i',
        html: P('Tawaf is seven circuits around the Ka\'bah, beginning and ending at the Black Stone corner, with the Ka\'bah on your left. Men are encouraged to walk briskly in the first three circuits (<em>ramal</em>) when possible. Each circuit includes the takbir and supplication; there is no fixed required supplication, so recite what you know.') +
          P('Sa\'i is seven trips between Safa and Marwah, beginning at Safa and ending at Marwah. It commemorates Hajar\'s search for water for Isma\'il. Men may jog between the green markers; women walk.') +
          P('Ritual purity is required for Tawaf according to most schools; menstruating women generally delay Tawaf until purity, though they may perform other rites. This is a significant practical issue and should be planned for.') +
          P('Crowds can be dangerous. Do not push, do not stop abruptly in the middle of a circuit, and follow the designated flow. The reward of Hajj is not in physical risk-taking.')
      },
      {
        id: 'arafah-mina',
        heading: 'Arafah, Muzdalifah and Mina: The Heart of Hajj',
        html: P('Arafah is the spiritual summit. The Prophet ﷺ said: <em>“Hajj is Arafah”</em> (narrated by Abu Dawud and al-Tirmidhi). Pilgrims stand in supplication, repentance and hope, often from midday until sunset. Many describe it as the closest experience to the Day of Judgement.') +
          P('Muzdalifah is a night of simplicity: pilgrims sleep under the sky or in tents, pray, and rest. It is intentionally austere, reminding pilgrims of equality and detachment.') +
          P('Mina is the tent city where pilgrims stay during the days of stoning. The Jamarat are stoned in a specific order: the small, then the middle, then the large on the 10th; all three on the 11th–13th. Pebbles should be small, and throwing should be done calmly.') +
          P('The sacrifice (<em>hady</em>) is required for Hajj Tamattu\' and Qiran, and recommended for Ifrad. It may be performed through an authorised agent. The meat is distributed to the poor.')
      },
      {
        id: 'umrah',
        heading: 'Umrah: The Lesser Pilgrimage',
        html: P('Umrah consists of four acts: entering ihram at the miqat, Tawaf, Sa\'i, and shaving or trimming the hair. It can be performed in a few hours, though crowds may make it longer.') +
          P('Umrah is highly recommended but not obligatory according to the majority. It may be performed alongside Hajj (Tamattu\' or Qiran) or separately. The Prophet ﷺ performed Umrah four times according to authentic reports.') +
          P('The same ihram rules apply. Many pilgrims perform multiple Umrahs in one trip; scholars differ on whether this is recommended, and some discourage it because of crowding. One well-performed Umrah is better than several rushed ones.')
      },
      {
        id: 'mistakes',
        heading: 'Common Mistakes and Spiritual Preparation',
        html: P('The most common mistakes are practical and preventable:') +
          UL([
            'Entering ihram after passing the miqat without doing so — a serious error requiring a sacrifice in many cases.',
            'Using scented products while in ihram.',
            'Assuming Tawaf begins anywhere other than the Black Stone corner.',
            'Pushing or trampling others to touch the Ka\'bah or the Black Stone.',
            'Missing the standing at Arafah because of poor planning.',
            'Delaying the sacrifice or shaving without understanding the order.',
            'Treating Hajj as a sightseeing trip rather than an act of worship.'
          ]) +
          P('Spiritual preparation matters more than shopping. Settle debts, seek forgiveness, reconcile relationships, learn the rites, memorise the talbiyah and some supplications, and purify your intention. The Prophet ﷺ said: <em>“Whoever performs Hajj and does not commit obscenity or sin returns as on the day his mother bore him”</em> (Sahih al-Bukhari).')
      },
      {
        id: 'practical-checklist',
        heading: 'Practical and Health Checklist',
        html: UL([
          'Valid passport, visa, Hajj permit and vaccination records.',
          'Copies of documents stored offline and in the cloud.',
          'Comfortable footwear, blister plasters, and a small first-aid kit.',
          'Unscented toiletries, sunscreen (unscented), and a water bottle.',
          'Medications in original packaging with prescriptions.',
          'A small bag for pebbles, a prayer mat, and a lightweight umbrella.',
          'Emergency contacts and your group leader\'s number written on paper.',
          'Physical preparation: walking, hydration and stamina in the weeks before travel.'
        ]) +
          P('Hajj is physically demanding, with long walks, heat and crowds. Anyone with heart, lung, kidney or mobility conditions should consult a doctor well in advance. Islam does not require you to harm yourself to perform a rite; the concession for inability is part of the law.')
      }
    ],
    faqs: [
      { q: 'Is Hajj valid without a mahram for a woman?', a: 'Classical schools differ. The majority require a mahram for travel, while other scholars permit travel with a trustworthy group or in safety. Saudi regulations also change. Follow your school and the official rules, and do not let this difference become a source of conflict.' },
      { q: 'Can I perform Hajj if I have debts?', a: 'Hajj is not obligatory until your debts are settled or you have a clear plan and permission to defer them. If you owe money and cannot repay, prioritise the debt. Voluntary Hajj while defaulting on debts is generally discouraged.' },
      { q: 'What happens if I miss a rite?', a: 'It depends on the rite. Missing Arafah invalidates the Hajj and requires repeating it in a later year. Other omissions may require a sacrifice, fasting, or a make-up. Consult a qualified scholar immediately; do not rely on guesswork.' },
      { q: 'Can someone perform Hajj on my behalf?', a: 'Yes, for a deceased person or someone permanently unable to perform it, under conditions set by jurists. The proxy must have performed Hajj for themselves first according to many scholars.' },
      { q: 'Is Umrah obligatory?', a: 'The majority view is that Umrah is highly recommended but not obligatory; the Hanafi school considers it obligatory once in a lifetime. Both positions are grounded in evidence and should be respected.' }
    ],
    bibliography: [
      'The Qur\'an — Surahs al-Baqarah (2:196–203), Al Imran (3:97), al-Hajj (22:26–29) and al-Ma\'idah (5:95–97).',
      'Sahih al-Bukhari and Sahih Muslim — Books of Hajj.',
      'Ibn Rushd, <em>Bidayat al-Mujtahid</em>.',
      'Al-Nawawi, <em>al-Majmu\'</em>.',
      'Ibn Qudamah, <em>al-Mughni</em>.',
      'Al-Shawkani, <em>Nayl al-Awtar</em>.',
      'Official Hajj authority guidance for your country and the Saudi Ministry of Hajj and Umrah.'
    ],
    related: relatedBase
  },

  {
    slug: 'ninety-nine-names-of-allah',
    title: 'Understanding the 99 Names of Allah',
    metaTitle: 'Understanding the 99 Names of Allah',
    description: 'A careful guide to the 99 Names of Allah: the hadith and its meaning, whether the number is exhaustive, the categories of names, Tawhid al-Asma\' wa al-Sifat, how to memorise them properly, and common errors.',
    category: 'Aqeedah',
    readTime: '11 min',
    intro: P('The "99 Names of Allah" is one of the most popular topics in Islamic teaching, and one of the most frequently misunderstood. The phrase comes from an authentic hadith, but the famous list of ninety-nine is a scholarly compilation, not a list given in the Qur\'an. This article explains what the names are, what the hadith actually says, how the names relate to Islamic theology, and how to study them without falling into either literalism or speculation.') + P('It is written from a mainstream Sunni perspective and notes where scholars differ.'),
    keyTakeaways: [
      'Allah\'s names are revealed descriptions of His perfection, not labels we invent.',
      'The hadith promises a great reward for "memorising" 99 names, but the number is not a limit on Allah\'s names.',
      'The famous enumerated list is compiled from Qur\'an and hadith, chiefly through al-Tirmidhi.',
      'Names are studied through Tawhid al-Asma\' wa al-Sifat: affirming them without likening Allah to creation.',
      'True memorisation means understanding, worshipping through the name, and acting on its meaning.'
    ],
    sections: [
      {
        id: 'what-are-names',
        heading: 'What "Names" Means in Islamic Theology',
        html: P('In Arabic, <em>ism</em> (name) is not merely a label. A name discloses something about the named. Allah\'s names are therefore descriptions of His perfect attributes: He is <em>ar-Rahman</em> (the Most Merciful), <em>al-\'Alim</em> (the All-Knowing), <em>al-Qadir</em> (the All-Powerful). They are not separate deities, and they are not metaphors with no content.') +
          Q('And to Allah belong the best names, so invoke Him by them. And leave those who practice deviation concerning His names — they will be recompensed for what they have been doing.', 'Qur\'an 7:180') +
          P('The Qur\'an also says:') +
          Q('He is Allah, the Creator, the Inventor, the Fashioner; to Him belong the best names. Whatever is in the heavens and earth is exalting Him. And He is the Exalted in Might, the Wise.', 'Qur\'an 59:24') +
          P('The names are therefore both a matter of knowledge and a matter of worship. To know that Allah is <em>al-Ghafur</em> is to turn to Him for forgiveness; to know that He is <em>al-\'Adl</em> is to act justly.')
      },
      {
        id: 'hadith',
        heading: 'The Hadith of the Ninety-Nine Names',
        html: P('The Prophet ﷺ said: <em>“Allah has ninety-nine names, one hundred less one. Whoever memorises them will enter Paradise.”</em> The hadith is narrated in Sahih al-Bukhari and Sahih Muslim, though the wording and chains vary.') +
          P('The hadith does not say that Allah has only ninety-nine names. It says that Allah has ninety-nine names with a specific virtue attached. The distinction is crucial. Other authentic reports indicate that Allah has names He has not revealed to creation.') +
          P('The famous list of ninety-nine names is most commonly taken from a narration of al-Tirmidhi, who compiled it and graded the hadith <em>hasan</em>. Scholars differ on the authenticity of the full list and on the exact enumeration. Some names in the list are derived from Qur\'anic descriptions rather than direct name-forms.') +
          NOTE('<strong>Honest caveat:</strong> There is no single, universally agreed, Qur\'an-only list of ninety-nine names. Different scholars produce slightly different lists. NoorDeen does not present one list as the only valid one.')
      },
      {
        id: 'not-limited',
        heading: 'Are There Only Ninety-Nine Names?',
        html: P('No. The number ninety-nine is not a limit. The Prophet ﷺ taught a supplication in which he says: <em>“I ask You by every name You have named Yourself, or revealed in Your Book, or taught to any of Your creation, or kept hidden in the knowledge of the unseen with You...”</em> (narrated in Musnad Ahmad; graded authentic by scholars).') +
          P('This indicates that Allah has names beyond what has been revealed. The ninety-nine are a known, accessible set with a promised reward, not an exhaustive inventory.') +
          P('The practical implication is humility: we worship Allah as He has described Himself, and we do not claim to encompass Him with our categories.')
      },
      {
        id: 'categories',
        heading: 'Categories of Names: Beauty and Majesty',
        html: P('Scholars often divide the names into two broad families:') +
          UL([
            '<strong>Names of beauty (<em>jamal</em>):</strong> mercy, love, generosity, forgiveness, kindness — such as ar-Rahman, ar-Rahim, al-Wadud, al-Ghafur, al-Karim.',
            '<strong>Names of majesty (<em>jalal</em>):</strong> power, sovereignty, justice, greatness, wrath — such as al-Jabbar, al-Qahhar, al-\'Aziz, al-Muntaqim, al-Malik.'
          ]) +
          P('A balanced understanding holds both together. A God who is only merciful becomes permissive; a God who is only severe becomes terrifying. The Qur\'an consistently pairs mercy with justice, and hope with fear.') +
          Q('Declare, "O My servants who have transgressed against themselves, do not despair of the mercy of Allah. Indeed, Allah forgives all sins. Indeed, it is He who is the Forgiving, the Merciful."', 'Qur\'an 39:53') +
          P('The names are also a remedy for spiritual imbalance. A person consumed by guilt should meditate on al-Ghafur; a person consumed by arrogance should meditate on al-Kabir and al-Jabbar.')
      },
      {
        id: 'tawhid-asma',
        heading: 'Tawhid al-Asma\' wa al-Sifat: Affirming Without Likening',
        html: P('Sunni theology affirms Allah\'s names and attributes as He revealed them, without distorting their meaning, denying them, asking how they are, or likening them to creation. The Qur\'an states the principle:') +
          Q('There is nothing like unto Him, and He is the Hearing, the Seeing.', 'Qur\'an 42:11') +
          P('This verse combines negation and affirmation: Allah is not like anything, and He is Hearing and Seeing. The attributes are real, but their modality is beyond human comprehension.') +
          P('Two errors are rejected. The first is <em>tashbih</em> — likening Allah to creation, imagining Him with a body or human emotions in the created sense. The second is <em>ta\'til</em> — stripping the names of meaning, reducing them to empty metaphors. The middle path affirms the name and denies the likeness.') +
          P('This is not abstract theology. It shapes how a Muslim reads verses about Allah\'s "hand", "face" or "throne": with affirmation of what Allah intended, and with the conviction that He is unlike creation.')
      },
      {
        id: 'memorise',
        heading: 'What "Memorising" the Names Actually Means',
        html: P('The hadith\'s reward is attached to <em>ihsa\'</em>, often translated as memorising or counting. Scholars explain that it includes several levels:') +
          UL([
            '<strong>Learning the names</strong> and their correct meanings.',
            '<strong>Understanding them</strong> without distortion or likening.',
            '<strong>Worshipping Allah through them</strong> — invoking the appropriate name in supplication.',
            '<strong>Acting on their implications</strong> — being merciful because Allah is Merciful, just because He is Just.',
            '<strong>Living with awareness</strong> of Allah\'s presence and attributes.'
          ]) +
          P('Rote repetition without understanding is a beginning, not the goal. The names are meant to transform the heart, not just fill a checklist.')
      },
      {
        id: 'dua',
        heading: 'Invoking Allah by His Names',
        html: P('The Qur\'an commands us to call upon Allah by His names. This is one of the most intimate forms of supplication:') +
          Q('And to Allah belong the best names, so invoke Him by them.', 'Qur\'an 7:180') +
          P('Examples from the Sunnah include: <em>“Ya Rahman, Ya Rahim”</em> for mercy; <em>“Ya Ghafur, Ya Rahim”</em> for forgiveness; <em>“Ya Hayyu Ya Qayyum”</em> for relief in distress; <em>“Ya Latif”</em> for subtle kindness.') +
          P('The name should match the need. Asking for forgiveness with <em>al-Ghafur</em>, for provision with <em>ar-Razzaq</em>, for protection with <em>al-Hafiz</em>, for guidance with <em>al-Hadi</em>. This is not manipulation of God; it is approaching Him through the attributes He has revealed.')
      },
      {
        id: 'selected-names',
        heading: 'Selected Names Explained',
        html: H3('Ar-Rahman and Ar-Rahim') + P('Both come from the root <em>r-h-m</em>, mercy. <em>Ar-Rahman</em> describes Allah\'s vast, all-encompassing mercy; <em>ar-Rahim</em> describes His special mercy toward believers. The Basmalah opens with both.') +
          H3('Al-Malik') + P('The Sovereign. All dominion belongs to Allah; human kingship is delegated and temporary. This name relativises every earthly power.') +
          H3('As-Salam') + P('The Source of Peace and Perfection, free from every defect. It is also the root of the greeting <em>salam</em>.') +
          H3('Al-Khaliq, Al-Bari\', Al-Musawwir') + P('The Creator, the Originator, the Fashioner. These three names appear together in 59:24 and describe the stages of creation: decree, bringing into being, and shaping.') +
          H3('Al-Ghafur and Al-\'Afuww') + P('The Forgiving and the Pardoner. <em>Al-\'Afuww</em> is the name taught in the Laylat al-Qadr supplication; it suggests erasing sin entirely, not merely covering it.') +
          H3('Al-Wadud') + P('The Loving. Allah\'s love is real and selective: He loves the believers, the patient, the just, the purified. It is not a vague universal sentiment that ignores conduct.') +
          H3('Al-Hayy Al-Qayyum') + P('The Ever-Living, the Sustainer of all existence. These two names are central in the verse of the Throne (2:255) and in the Prophet\'s ﷺ supplication for distress.') +
          H3('Al-Ahad and As-Samad') + P('The Unique and the Eternal Refuge. Surah al-Ikhlas is built on these names: Allah is one, indivisible, and everything depends on Him while He depends on nothing.')
      },
      {
        id: 'errors',
        heading: 'Common Errors to Avoid',
        html: UL([
          '<strong>Inventing names:</strong> Allah is named only by what He or His Prophet ﷺ revealed. We do not derive new divine names from personal preference.',
          '<strong>Claiming the list is exhaustive:</strong> the ninety-nine are not the limit of Allah\'s names.',
          '<strong>Treating names as magical formulas:</strong> reciting a name a set number of times for guaranteed worldly results is not established in the Sunnah.',
          '<strong>Likening Allah to creation:</strong> affirming attributes does not mean imagining a body or human psychology.',
          '<strong>Denying meaning:</strong> reducing the names to empty symbols is also an error.',
          '<strong>Using the names to justify injustice:</strong> "Allah is forgiving" does not cancel the obligation to repay debts or seek justice.'
        ]) +
          P('The names should produce humility, not certainty about God\'s inner nature. The more one knows, the more one realises how little one knows.')
      }
    ],
    faqs: [
      { q: 'Are the 99 names listed in the Qur\'an?', a: 'No. The Qur\'an contains many divine names, but it does not provide a single list of ninety-nine. The famous list is a compilation from Qur\'an and hadith, chiefly through al-Tirmidhi, and scholars differ on its exact contents.' },
      { q: 'Does Allah have more than 99 names?', a: 'Yes. The hadith indicates that ninety-nine names have a specific virtue, not that Allah\'s names are limited to that number. Other authentic reports mention names kept hidden from creation.' },
      { q: 'Can we call Allah "God" in English?', a: 'Yes, "God" is the English word for the deity, and Arabic-speaking Christians also use "Allah". However, "Allah" is the proper name used in the Qur\'an and carries theological precision. In English writing, "Allah" is often preferred to avoid confusion.' },
      { q: 'Is using prayer beads for dhikr an innovation?', a: 'Scholars differ. Many permit beads as a permissible means of counting, citing the practice of some companions and the general permissibility of aids. Others prefer counting on the fingers, which is also established. The means is not the core issue; sincerity and consistency are.' },
      { q: 'How should a beginner start learning the names?', a: 'Learn ten names with their meanings and one practical implication each. Use them in supplication. Study the verses where they appear. Avoid memorising the full list without understanding, and avoid debates about the exact enumeration until the basics are secure.' }
    ],
    bibliography: [
      'The Qur\'an — especially Surahs al-A\'raf (7:180), al-Isra (17:110), Ta-Ha (20:8), al-Hashr (59:22–24), al-Ikhlas (112) and al-Baqarah (2:255).',
      'Sahih al-Bukhari and Sahih Muslim — the hadith of the ninety-nine names.',
      'Al-Tirmidhi, <em>Jami\' al-Tirmidhi</em> — the enumerated list.',
      'Ibn al-Qayyim, <em>Madarij al-Salikin</em> and <em>al-Asma\' wa al-Sifat</em>.',
      'Al-Ghazali, <em>al-Maqsad al-Asna fi Sharh Ma\'ani Asma\' Allah al-Husna</em>.',
      'Ibn Taymiyyah, <em>Majmu\' al-Fatawa</em> — sections on the names and attributes.'
    ],
    related: relatedBase
  },

  {
    slug: 'repentance-dhikr-spiritual-development',
    title: 'Repentance, Dhikr and Spiritual Development',
    metaTitle: 'Repentance, Dhikr and Spiritual Development',
    description: 'A practical guide to tawbah and dhikr: the conditions of sincere repentance, the role of remembrance in calming the heart, morning and evening adhkar, self-accounting, the diseases of the heart, and a 30-day plan.',
    category: 'Spirituality',
    readTime: '12 min',
    intro: P('Islamic spirituality is not a separate mystical layer added to law. It is the interior dimension of the same submission: a heart that knows Allah, a tongue that remembers Him, and a life that returns to Him after failure. This article explains <strong>tawbah</strong> (repentance) and <strong>dhikr</strong> (remembrance) with practical structure, avoiding both legalism and vague sentimentality.') + P('It draws on the Qur\'an, authentic hadith, and classical works such as al-Ghazali\'s <em>Ihya\'</em> and Ibn al-Qayyim\'s <em>al-Wabil al-Sayyib</em>.'),
    keyTakeaways: [
      'Repentance is available to everyone, no matter how serious the sin.',
      'Sincere tawbah has conditions: stopping, regretting, resolving, and making amends where possible.',
      'Dhikr is a command, not an optional hobby; it shapes the heart and behaviour.',
      'The best dhikr is what is authentic, consistent and understood.',
      'Self-accounting and a daily routine are more effective than occasional intensity.',
      'Spiritual development requires community, knowledge and patience with oneself.'
    ],
    sections: [
      {
        id: 'capacity-change',
        heading: 'The Human Capacity for Change',
        html: P('The Qur\'an presents human beings as capable of both great good and serious error, and it consistently offers the path back. It does not teach that a person is permanently defined by their worst act.') +
          Q('Say, "O My servants who have transgressed against themselves, do not despair of the mercy of Allah. Indeed, Allah forgives all sins. Indeed, it is He who is the Forgiving, the Merciful."', 'Qur\'an 39:53') +
          P('This verse is addressed to those who have "transgressed against themselves" — not to the already righteous. The door of return is open. Despair is itself a spiritual disease, because it doubts Allah\'s mercy.') +
          P('At the same time, the Qur\'an does not treat repentance as a cheap transaction. It demands sincerity, cessation and repair. The balance is mercy without complacency, and accountability without despair.')
      },
      {
        id: 'tawbah',
        heading: 'Tawbah: Conditions and Sincerity',
        html: P('The classical scholars list conditions for valid repentance:') +
          UL([
            '<strong>Ceasing the sin immediately.</strong>',
            '<strong>Regret</strong> for having done it.',
            '<strong>Resolving</strong> not to return to it.',
            '<strong>Restoring rights</strong> where the sin involved another person — returning property, apologising, or clearing a reputation.',
            '<strong>Sincerity</strong> — repenting for Allah, not merely to avoid consequences or impress people.'
          ]) +
          P('If the sin is between the person and Allah, these conditions suffice. If it involves another person, their rights must be addressed. This is why repentance from theft requires returning what was stolen, and repentance from backbiting may require correcting the harm or seeking forgiveness, depending on the case.') +
          Q('O you who have believed, repent to Allah with sincere repentance. Perhaps your Lord will remove from you your misdeeds and admit you into gardens beneath which rivers flow.', 'Qur\'an 66:8') +
          P('The Prophet ﷺ said: <em>“Allah is more joyful at the repentance of His servant than one of you who found his lost camel in the desert”</em> (Sahih al-Bukhari and Sahih Muslim). Repentance is not a humiliation; it is a homecoming.')
      },
      {
        id: 'procrastination',
        heading: 'The Danger of Procrastination',
        html: P('The most common trap is postponing repentance. "I will change after Ramadan", "after I finish this project", "when I am older." The Qur\'an warns against dying in heedlessness, and the Prophet ﷺ advised taking advantage of five before five, including health before illness and life before death (narrated by al-Hakim and others).') +
          P('Procrastination often hides a deeper issue: attachment to the sin, fear of social consequences, or a mistaken belief that Allah will not forgive. Each of these needs its own remedy.') +
          P('A practical rule: do not delay the *decision* even if you cannot immediately fix every consequence. Turn to Allah now, then take the practical steps.')
      },
      {
        id: 'dhikr',
        heading: 'Dhikr: What It Is and Why It Matters',
        html: P('Dhikr means remembrance of Allah — with the tongue, the heart, or both. The Qur\'an commands it repeatedly:') +
          Q('O you who have believed, remember Allah with much remembrance, and exalt Him morning and afternoon.', 'Qur\'an 33:41–42') +
          P('And it identifies the effect:') +
          Q('Those who have believed and whose hearts are assured by the remembrance of Allah. Unquestionably, by the remembrance of Allah hearts are assured.', 'Qur\'an 13:28') +
          P('Dhikr is not a technique for material success. It is an act of worship that reorients the heart toward its Creator. The Prophet ﷺ said: <em>“The example of one who remembers his Lord and one who does not is like the living and the dead”</em> (Sahih al-Bukhari).') +
          P('The best dhikr combines authenticity, understanding and consistency. A small amount done daily is better than an intense session abandoned after a week.')
      },
      {
        id: 'types',
        heading: 'Types of Dhikr',
        html: UL([
          '<strong>Qur\'anic recitation:</strong> the highest form of remembrance. Even a few verses daily, with meaning, transforms the heart.',
          '<strong>Tasbih:</strong> <em>SubhanAllah</em> (Glory to Allah), <em>Alhamdulillah</em> (Praise to Allah), <em>Allahu Akbar</em> (Allah is Greatest).',
          '<strong>Tahlil:</strong> <em>La ilaha illa Allah</em> — the declaration of tawhid.',
          '<strong>Istighfar:</strong> seeking forgiveness, especially <em>Astaghfirullah</em> and the sayyid al-istighfar.',
          '<strong>Salawat:</strong> sending blessings upon the Prophet ﷺ.',
          '<strong>Du\'a:</strong> supplication, which is remembrance with request.',
          '<strong>Reflection (tafakkur):</strong> contemplating creation, scripture and one\'s own state.'
        ]) +
          P('The Prophet ﷺ taught specific dhikr for specific times: after prayer, on waking, before sleep, when travelling, when distressed. The <em>Hisn al-Muslim</em> collection (available in NoorDeen\'s Duas library) organises these by occasion.')
      },
      {
        id: 'adkhar',
        heading: 'Morning and Evening Adhkar',
        html: P('The Qur\'an commands remembrance "morning and afternoon" (33:42), and the Sunnah provides a structured set of morning and evening supplications. These are not magical incantations; they are declarations of dependence, protection and praise.') +
          P('A minimal daily set includes:') +
          UL([
            'Ayat al-Kursi (2:255) — recited in the morning and evening for protection.',
            'Surah al-Ikhlas, al-Falaq and an-Nas — three times each.',
            '<em>Bismillahilladhi la yadurru ma\'a ismihi shay\'un fi al-ard wa la fi al-sama\'</em> — three times.',
            '<em>Hasbiyallahu la ilaha illa Huwa</em> — seven times.',
            '<em>SubhanAllahi wa bihamdihi</em> — one hundred times, if able.',
            '<em>Astaghfirullah</em> — at least seventy or one hundred times, as in authentic reports.'
          ]) +
          P('Consistency matters more than volume. Attach the adhkar to fixed anchors: after Fajr and after Asr. Use the Duas library to learn the Arabic, transliteration and meaning.')
      },
      {
        id: 'self-accounting',
        heading: 'Muraqabah and Self-Accounting',
        html: P('<em>Muraqabah</em> is the awareness that Allah sees you. <em>Muhasabah</em> is self-accounting: reviewing your day before Allah. Umar ibn al-Khattab famously said: "Account yourselves before you are accounted."') +
          P('A simple nightly practice:') +
          UL([
            'What did I do today that pleased Allah? Thank Him for it.',
            'What did I do that displeased Him? Seek forgiveness and plan to avoid it.',
            'Whose rights did I neglect? Make a concrete plan to restore them.',
            'What is one small improvement for tomorrow?'
          ]) +
          P('This is not morbid introspection. It is honest stewardship of the self. The goal is amendment, not self-hatred.')
      },
      {
        id: 'heart-diseases',
        heading: 'The Diseases of the Heart',
        html: P('Classical scholars identified diseases that corrupt the heart and block spiritual growth:') +
          UL([
            '<strong>Arrogance (<em>kibr</em>):</strong> rejecting truth and looking down on people.',
            '<strong>Envy (<em>hasad</em>):</strong> resenting Allah\'s gifts to others.',
            '<strong>Riya\' (ostentation):</strong> performing good deeds for praise.',
            '<strong>Heedlessness (<em>ghaflah</em>):</strong> living as if Allah is absent.',
            '<strong>Love of the world (<em>hubb al-dunya</em>):</strong> allowing material attachment to dominate the heart.',
            '<strong>Anger and resentment:</strong> refusing to forgive and seeking revenge.'
          ]) +
          P('The remedy is not to deny the feeling but to redirect it: humility for arrogance, gratitude for envy, sincerity for ostentation, dhikr for heedlessness, contentment for worldly love, and forgiveness for resentment.')
      },
      {
        id: 'thirty-day-plan',
        heading: 'A Thirty-Day Plan',
        html: P('A realistic plan is better than an ambitious one abandoned. Here is a thirty-day structure:') +
          UL([
            '<strong>Days 1–7:</strong> establish the five prayers on time; add one page of Qur\'an with translation daily; say istighfar 100 times.',
            '<strong>Days 8–14:</strong> add morning and evening adhkar; memorise one short du\'a; review one name of Allah each day.',
            '<strong>Days 15–21:</strong> add a nightly self-accounting journal; identify one recurring sin and plan a replacement habit.',
            '<strong>Days 22–30:</strong> add a small act of charity or service; reconnect with a mosque or study circle; review progress without perfectionism.'
          ]) +
          P('If you miss a day, resume the next day. The Prophet ﷺ said that the deeds most beloved to Allah are those done consistently, even if small (Sahih al-Bukhari and Sahih Muslim).')
      }
    ],
    faqs: [
      { q: 'Do I need a spiritual guide (shaykh) to practise dhikr?', a: 'No. The basic dhikr taught in the Qur\'an and Sunnah can be practised by any Muslim without a personal guide. A trustworthy teacher is helpful for learning, accountability and correcting misunderstandings, but it is not a condition for valid worship.' },
      { q: 'Is silent or audible dhikr better?', a: 'Both are established. Silent dhikr protects sincerity and is suitable in public; audible dhikr can strengthen focus and encourage others. The Prophet ﷺ practised both. Avoid ostentatious display.' },
      { q: 'Can I make up missed dhikr?', a: 'Voluntary dhikr has no fixed make-up requirement, but you may perform it later. Consistent daily practice is better than accumulating debts. Some specific Sunnah dhikr are tied to their times and are not made up in the same way.' },
      { q: 'What if I keep falling into the same sin?', a: 'Keep repenting and keep reducing the conditions that lead to it. Change your environment, avoid triggers, seek accountability, and do not despair. The Prophet ﷺ said that Allah loves the servant who repents, and He does not tire of forgiving until we tire of asking.' },
      { q: 'Is music permitted during dhikr?', a: 'Scholars differ on music generally, and the use of instrumental music in religious settings is contested. The safest practice is to recite dhikr without instruments, focusing on the words and their meaning. This is a difference of jurisprudence, not a pillar of faith.' }
    ],
    bibliography: [
      'The Qur\'an — especially Surahs al-Zumar (39:53), al-Furqan (25:70), al-Tahrim (66:8), al-Ra\'d (13:28), al-Ahzab (33:41–42) and al-Baqarah (2:152).',
      'Sahih al-Bukhari and Sahih Muslim — Books of Supplication, Repentance and Heart-Melting Traditions.',
      'Al-Nawawi, <em>al-Adhkar</em> and <em>Riyad al-Salihin</em>.',
      'Ibn al-Qayyim, <em>al-Wabil al-Sayyib min al-Kalim al-Tayyib</em>.',
      'Al-Ghazali, <em>Ihya\' Ulum al-Din</em> — the sections on repentance, patience, gratitude and the heart.',
      'Ibn al-Qayyim, <em>Madarij al-Salikin</em>.'
    ],
    related: relatedBase
  },

  {
    slug: 'new-muslim-learning-path',
    title: 'A Structured Learning Path for New Muslims',
    metaTitle: 'A Structured Learning Path for New Muslims',
    description: 'A realistic 12-month learning path for new Muslims: the shahadah, prayer and wudu, the five pillars, Quran reading, Seerah, hadith basics, halal and haram, community, and common challenges.',
    category: 'New Muslims',
    readTime: '12 min',
    intro: P('Becoming Muslim is a beginning, not a graduation. The first year is often a mix of relief, confusion, loneliness and enthusiasm, and much of the available material is either too academic or too simplistic. This article sets out a realistic twelve-month path: what to learn first, what can wait, how to find community, and how to handle the questions that new Muslims most often ask.') + P('It assumes no prior knowledge of Arabic or Islamic law. It is a guide, not a fatwa; for personal rulings, consult a qualified scholar.'),
    keyTakeaways: [
      'Start with the shahadah, prayer and wudu; do not try to learn everything at once.',
      'The five pillars give a stable framework for the first months.',
      'Quran reading and translation should grow together.',
      'Seerah and hadith study build love and context, not just information.',
      'Community is essential; isolation is the biggest practical risk.',
      'You do not need to change your name, become an Arab, or be perfect to be Muslim.'
    ],
    sections: [
      {
        id: 'first-principles',
        heading: 'First Principles: What Islam Actually Requires',
        html: P('Islam is submission to Allah, expressed through the shahadah: <em>La ilaha illa Allah, Muhammadur Rasul Allah</em> — there is no deity except Allah, and Muhammad is the Messenger of Allah. A person becomes Muslim by uttering this testimony with knowledge, sincerity and acceptance.') +
          P('The religion is then built on five pillars: the shahadah, prayer, zakat, fasting Ramadan, and Hajj for those who are able. Everything else — theology, law, spirituality, ethics — grows from these.') +
          P('A new Muslim is not expected to master everything immediately. The Prophet ﷺ taught people gradually, and the Qur\'an was revealed over twenty-three years. Give yourself the same patience.')
      },
      {
        id: 'week-one',
        heading: 'Week 1: Shahadah, Wudu and Prayer',
        html: P('The first practical priority is prayer. Learn:') +
          UL([
            'The five prayer times and their names.',
            'How to perform wudu (ablution).',
            'The movements of one rak\'ah and the number of rak\'ahs in each prayer.',
            'The Fatihah and the tashahhud, even approximately at first.',
            'The qiblah direction and a clean place to pray.'
          ]) +
          P('Use NoorDeen\'s <a href="../salah-guide.html">Salah guide</a> and <a href="../wudu-guide.html">Wudu guide</a> alongside a local teacher. Do not wait until your Arabic is perfect; pray with what you know and improve gradually.') +
          P('If you miss a prayer, pray it as soon as you remember. The goal in week one is consistency, not fluency.')
      },
      {
        id: 'weeks-two-four',
        heading: 'Weeks 2–4: The Five Pillars and Daily Practice',
        html: P('Once prayer is becoming routine, learn the other pillars:') +
          UL([
            '<strong>Zakat:</strong> the annual 2.5% charity on qualifying wealth. You may not owe it yet, but understand the principle.',
            '<strong>Fasting:</strong> the rules of Ramadan, who is exempt, and how to make up missed fasts.',
            '<strong>Hajj:</strong> the obligation and its conditions; it may be years away, but the framework matters.'
          ]) +
          P('Add a short daily Qur\'an reading habit — even three verses with translation. Add the morning and evening adhkar gradually. Learn one new supplication per week.') +
          P('Avoid debates about sectarian differences in the first month. You need stability, not controversy.')
      },
      {
        id: 'month-two',
        heading: 'Month 2: Reading the Qur\'an',
        html: P('The Qur\'an is the primary source of guidance, and every new Muslim should learn to read it — both the Arabic script and the meaning.') +
          UL([
            'Start with a transliteration-friendly surah such as al-Fatihah, al-Ikhlas, al-Falaq and an-Nas.',
            'Use a translation you trust, and read the introduction to understand the surah\'s context.',
            'Read a short surah with its meaning each day.',
            'Listen to a reciter and repeat; audio is essential for pronunciation.',
            'Do not rush to read the whole Qur\'an in a month. Consistency beats speed.'
          ]) +
          P('NoorDeen\'s <a href="../quran.html">Quran reader</a> provides Arabic, translation, and audio for the bundled surahs, with the rest available online. Pair it with the article <a href="how-to-read-and-understand-quran.html">How to Read and Understand the Quran</a>.')
      },
      {
        id: 'month-three',
        heading: 'Month 3: Seerah and Hadith Basics',
        html: P('Knowing the Prophet ﷺ builds love and context. Read a reliable biography — start with a shorter modern work, then a classical source.') +
          P('For hadith, begin with a curated collection such as <em>Riyad al-Salihin</em> or the Forty Hadith of al-Nawawi. Learn the difference between an authentic, weak and fabricated report, and why the science of hadith exists.') +
          P('Do not begin with polemics or obscure narrations. The goal is a coherent picture of the Prophet\'s ﷺ character and teaching.') +
          P('Use NoorDeen\'s <a href="../seerah.html">Seerah library</a>, <a href="../hadith.html">Hadith library</a> and the article <a href="hadith-and-sunnah-authenticity.html">Understanding Hadith</a>.')
      },
      {
        id: 'months-four-six',
        heading: 'Months 4–6: Fiqh of Worship and Halal/Haram',
        html: P('With the basics in place, learn the jurisprudence of what you actually do:') +
          UL([
            'The conditions and nullifiers of prayer.',
            'Fasting rules in more detail.',
            'Zakat calculation if you have wealth.',
            'Marriage and family law if relevant.',
            'Halal and haram in food, finance and speech.',
            'Rulings on cleanliness, travel and illness.'
          ]) +
          P('Choose one school of jurisprudence to follow for consistency, or learn the evidence-based approach with a qualified teacher. Do not assemble rulings from random internet answers.') +
          P('A useful principle: the permissible is broad, and the prohibited is narrow and specific. Do not make religion harder than Allah made it.')
      },
      {
        id: 'community',
        heading: 'Building a Support Network',
        html: P('Community is not a luxury. The Prophet ﷺ built a community, and the Qur\'an commands believers to cooperate in righteousness. New Muslims who isolate themselves are more likely to burn out or be misled.') +
          UL([
            'Find a local mosque or Islamic centre and speak to the imam or a designated new-Muslim contact.',
            'Join a study circle, even if you only listen at first.',
            'Identify one or two trustworthy friends who can answer questions without judgement.',
            'Be cautious online: not every confident voice is knowledgeable, and some communities are predatory.',
            'If you face family opposition, seek support rather than isolating yourself.'
          ]) +
          P('You do not have to adopt a new culture to be Muslim. Islam is universal; many cultural practices are local and optional.')
      },
      {
        id: 'challenges',
        heading: 'Common Challenges and How to Handle Them',
        html: H3('Family and friends') + P('Conversion can strain relationships. Be patient, avoid arguments, and show the religion through character. You are not required to cut off non-Muslim family; kindness to parents is a command.') +
          H3('Loneliness') + P('Find community, but also build a daily routine of prayer, Qur\'an and dhikr. Spiritual consistency reduces isolation.') +
          H3('Guilt and perfectionism') + P('You will sin. Repent and continue. Allah\'s mercy is greater than your failures. Do not let shame drive you away from prayer.') +
          H3('Misinformation') + P('Verify claims with scholars and primary sources. Be sceptical of viral fatwas, sensational videos and sectarian propaganda.') +
          H3('Practical issues') + P('Questions about marriage, inheritance, halal finance or family law should go to a qualified scholar who knows your situation, not to a generic forum.')
      },
      {
        id: 'twelve-month-roadmap',
        heading: 'A Twelve-Month Roadmap',
        html: UL([
          '<strong>Months 1–2:</strong> shahadah, wudu, five prayers, Fatihah, basic adhkar.',
          '<strong>Month 3:</strong> the five pillars in detail; begin daily Qur\'an with translation.',
          '<strong>Month 4:</strong> Seerah overview; Forty Hadith of al-Nawawi.',
          '<strong>Month 5:</strong> fiqh of prayer and fasting; zakat basics.',
          '<strong>Month 6:</strong> halal and haram in food and finance; Islamic manners.',
          '<strong>Month 7:</strong> Qur\'anic themes and selected surahs; memorize short surahs.',
          '<strong>Month 8:</strong> hadith sciences and the lives of the companions.',
          '<strong>Month 9:</strong> marriage and family law, or the rulings most relevant to your life.',
          '<strong>Month 10:</strong> Islamic history and civilisation; avoid sectarian polemics.',
          '<strong>Month 11:</strong> deepen dhikr and self-accounting; review your prayer quality.',
          '<strong>Month 12:</strong> consolidate, teach a friend what you know, and plan the next year.'
        ]) +
          P('Adjust the pace to your circumstances. The point is a stable, growing practice, not a race.')
      },
      {
        id: 'resources',
        heading: 'Recommended Resources',
        html: P('Start with the Qur\'an, a reliable translation, and a local teacher. For books, these are widely used and accessible:') +
          UL([
            '<em>The Qur\'an</em> — an approved translation with notes.',
            'Al-Nawawi, <em>Riyad al-Salihin</em> — curated hadith for daily life.',
            'Al-Nawawi, <em>al-Arba\'un</em> — forty foundational hadiths.',
            'A reliable Seerah, such as <em>ar-Raheeq al-Makhtum</em> or Martin Lings.',
            'A beginner fiqh text in your school of practice.',
            'Al-Ghazali, <em>Ihya\'</em> — selected sections on character and worship.',
            'NoorDeen\'s articles, Quran reader, hadith and dua libraries as a free starting point.'
          ]) +
          P('Avoid buying a library before you have read the first three books. Depth comes from repetition and practice, not accumulation.')
      }
    ],
    faqs: [
      { q: 'Do I need to change my name after becoming Muslim?', a: 'No. Changing your name is not required unless it contains something Islamically problematic. Many converts keep their names. Cultural pressure to adopt an Arabic name is not a religious obligation.' },
      { q: 'Do I need to learn Arabic before I can be Muslim?', a: 'No. You can be Muslim and pray with what you know while learning. Arabic is necessary for understanding the Qur\'an deeply and for reciting it correctly, but it is a lifelong learning process, not a precondition for faith.' },
      { q: 'What if I commit sins after converting?', a: 'Repent and continue. Conversion does not make you sinless, and Allah\'s mercy is not withdrawn because you struggle. The Prophet ﷺ said that every son of Adam sins, and the best of those who sin are those who repent (narrated by al-Tirmidhi and Ibn Majah).' },
      { q: 'How do I find a mosque or community?', a: 'Search for local Islamic centres, university Muslim societies, or national mosque directories. Contact the imam or a new-Muslim coordinator before visiting if you are nervous. Most communities are welcoming, though quality varies.' },
      { q: 'Can I take it slowly?', a: 'Yes. Islam was revealed gradually, and the Prophet ﷺ warned against excessive rigidity. Learn the obligations first, then add voluntary practices. Consistency is more important than intensity.' }
    ],
    bibliography: [
      'The Qur\'an — especially Surahs al-Fatihah (1), al-Baqarah (2), al-Ikhlas (112) and al-Hujurat (49).',
      'Sahih al-Bukhari and Sahih Muslim — foundational hadith collections.',
      'Al-Nawawi, <em>Riyad al-Salihin</em> and <em>al-Arba\'un al-Nawawiyyah</em>.',
      'Safiur Rahman Mubarakpuri, <em>ar-Raheeq al-Makhtum</em>.',
      'Al-Ghazali, <em>Ihya\' Ulum al-Din</em> — selected sections.',
      'A beginner fiqh manual in the school you follow, studied with a teacher.',
      'Local mosque and new-Muslim support organisations.'
    ],
    related: relatedBase
  }
];
