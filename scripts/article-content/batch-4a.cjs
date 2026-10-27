const P = t => `<p style="line-height:1.8; color:var(--color-text-main); margin-bottom:14px;">${t}</p>`;
const H3 = t => `<h3 style="font-size:1.15rem; color:var(--color-primary); margin:22px 0 10px;">${t}</h3>`;
const UL = items => `<ul style="line-height:1.9; color:var(--color-text-main); padding-left:20px; margin-bottom:14px;">${items.map(i => `<li>${i}</li>`).join('')}</ul>`;
const Q = (text, cite) => `<blockquote style="background:var(--color-card); border-left:4px solid var(--color-gold); padding:16px 22px; margin:18px 0; border-radius:0 8px 8px 0;"><div style="font-style:italic; color:var(--color-text-main); line-height:1.8;">&ldquo;${text}&rdquo;</div><div style="margin-top:6px; font-size:0.85rem; color:var(--color-gold); font-weight:600;">${cite}</div></blockquote>`;
const NOTE = t => `<div style="background:var(--color-surface); border:1px solid var(--color-border); border-radius:10px; padding:16px 18px; margin:18px 0; font-size:0.92rem; line-height:1.75;">${t}</div>`;

const relatedBase = [
  { href: 'index.html', label: 'Articles Library — full catalogue' },
  { href: 'marriage-and-family-in-islam.html', label: 'Marriage and family in Islam' },
  { href: '../duas.html', label: 'Duas and Adhkar library' },
  { href: '../sources.html', label: 'Sources and verification policy' }
];

module.exports = [
  {
    slug: 'honouring-parents-in-islam',
    title: 'Honouring Parents (Birr al-Walidayn): Rights, Limits and Care in Old Age',
    metaTitle: 'Honouring Parents in Islam: Rights, Limits and Care in Old Age',
    description: 'The Quranic command to honour parents, what birr includes, the limits of obedience, non-Muslim parents, care in old age, family conflict, and what can be done after a parent dies.',
    category: 'Family & Society',
    readTime: '12 min',
    intro: P(`Few duties are stated as directly in the Qur'an as kindness to parents. It is joined to the worship of Allah in the same verse, and the Prophet ﷺ placed a mother's companionship above almost every other claim. Yet real families are not simple. Parents can be old, ill, difficult, absent, of another faith, or even abusive. This guide sets out the obligation, its limits, and the practical shape of care.`) +
      P(`It is an educational overview, not a personal fatwa. Cases involving abuse, medical decisions, immigration, money or inheritance need a qualified scholar and, where relevant, a lawyer or safeguarding professional.`),
    keyTakeaways: [
      `The Qur'an commands kindness to parents immediately after the command to worship Allah alone.`,
      `Birr (filial devotion) includes speech, service, financial help and companionship, not only obedience.`,
      `Obedience is not owed in sin; the duty of kindness remains.`,
      `Non-Muslim parents retain rights of kindness and justice, but not of religious compromise.`,
      `Care in old age should be planned with siblings, documented, and shared without humiliation.`,
      `After death, dua, charity, fulfilled vows and maintained family ties continue the relationship.`
    ],
    sections: [
      {
        id: 'quranic-command',
        heading: 'The Quranic Command',
        html: P(`The Qur'an places the command to honour parents in a passage that begins with the foundation of all morality:`) +
          Q(`Your Lord has decreed that you worship none but Him, and that you be kind to parents. Whether one or both of them attain old age in your life, say not to them a word of contempt, nor repel them, but address them in terms of honour. And lower to them the wing of humility and say: My Lord, have mercy on them as they brought me up when I was small.`, `Qur'an 17:23–24`) +
          P(`The wording is precise. The verse does not merely forbid hitting or abandoning parents; it forbids even a grunt of irritation (<em>uff</em>) and commands honoured speech. It then ties the command to the parents' vulnerability: the child was once small and dependent, and the parents may now be old and dependent in turn.`) +
          P(`Surah Luqman adds the mother's particular burden:`) +
          Q(`And We have enjoined upon man care for his parents. His mother carried him, increasing her in weakness upon weakness, and his weaning is in two years. Be grateful to Me and to your parents; to Me is the final destination.`, `Qur'an 31:14`) +
          P(`Gratitude to Allah and gratitude to parents are joined, but the order is deliberate: the final destination is Allah. That order matters when a parent asks for something that would disobey Allah, a case addressed below.`)
      },
      {
        id: 'what-birr-includes',
        heading: 'What Birr Includes',
        html: P(`<em>Birr al-walidayn</em> is usually translated as filial piety, but the Arabic root carries the sense of expansive goodness, truthfulness and fulfilling a claim. It is wider than obedience. Classical scholars listed several overlapping duties:`) +
          UL([
            `<strong>Speech:</strong> speaking gently, not raising the voice, not mocking, and not correcting them in public.`,
            `<strong>Service:</strong> helping with daily tasks, transport, paperwork and technology, especially as mobility or memory decline.`,
            `<strong>Financial support:</strong> maintaining parents who are in need, within the child's capacity and according to the school's rules.`,
            `<strong>Companionship:</strong> visiting, listening, and including them in family life rather than treating them as a burden.`,
            `<strong>Dua:</strong> asking Allah to forgive them and have mercy on them, including after their death.`,
            `<strong>Gratitude:</strong> acknowledging what they did, without pretending that every part of the relationship was healthy.`
          ]) +
          P(`The Prophet ﷺ emphasised the mother's claim in a famous exchange. A man asked, “Who is most deserving of my good companionship?” He said, “Your mother.” The man asked, “Then who?” He said, “Your mother.” The man asked, “Then who?” He said, “Your mother.” The man asked again, and he said, “Then your father.” (Sahih al-Bukhari 5971; Sahih Muslim 2548.)`) +
          P(`This does not erase the father's rights. It recognises the ordinary reality that mothers often carry the heavier physical and emotional load, and it corrects a culture that can treat care for mothers as optional.`)
      },
      {
        id: 'limits-of-obedience',
        heading: 'The Limits of Obedience',
        html: P(`Islamic teaching does not make parents absolute authorities. The principle is stated in the hadith literature: there is no obedience to a creature in disobedience to Allah. If a parent demands that a child lie, steal, abandon a religious obligation, marry someone against the child's will, or cut off an innocent relative, the child must refuse the sin while preserving kindness.`) +
          P(`The Qur'an gives the clearest example in the case of parents who pressure a child toward shirk:`) +
          Q(`But if they endeavour to make you associate with Me that of which you have no knowledge, do not obey them but accompany them in this world with appropriate kindness, and follow the way of those who turn back to Me.`, `Qur'an 31:15`) +
          P(`The verse is remarkable for holding two things together. The child does not obey the demand, but neither does the child abandon the parent. Refusal is limited to the sinful command; the relationship is not cancelled.`) +
          P(`This distinction is often lost in practice. Some families use “honour your parents” to enforce control over an adult child's marriage, career, money or religion. Others use “no obedience in sin” as a licence for contempt. Both are distortions. The Quranic pattern is firm boundaries with sustained kindness.`) +
          NOTE(`<strong>If there is abuse:</strong> no one is required to remain in a situation of violence or exploitation. Physical safety, safeguarding children, and involving trusted authorities take priority. A scholar or counsellor should help distinguish between ordinary family friction and abuse.`)
      },
      {
        id: 'non-muslim-parents',
        heading: 'Parents of Another Faith',
        html: P(`A Muslim may have non-Muslim parents. The Qur'an does not command hostility. It commands justice and kindness toward those who are not fighting the Muslim community or driving it from its homes:`) +
          Q(`Allah does not forbid you from those who do not fight you because of religion and do not expel you from your homes — from being righteous toward them and acting justly toward them. Indeed, Allah loves those who act justly.`, `Qur'an 60:8`) +
          P(`Practical duties remain: respect, visits, help in illness, financial support where needed, and protecting the parent's dignity. What changes is religious participation. A Muslim does not join in worship of other than Allah, does not affirm false doctrine, and does not let a parent's disapproval override a clear obligation.`) +
          P(`Many converts face pressure to attend family religious ceremonies or to hide their Islam. The general guidance is to be present for the family relationship without performing or approving religious acts that contradict tawhid. Where a family event is primarily social, attendance may be possible; where it is explicitly religious, the convert should seek specific advice. The guiding principle is the verse above: kindness and justice, without compromise in belief.`)
      },
      {
        id: 'ageing-and-care',
        heading: 'Care in Old Age',
        html: P(`The Qur'anic phrase “if one or both of them attain old age in your life” anticipates the hardest stage. Care is not only an emotional duty; it is logistics, money, medical decisions and sibling coordination. Families that never discuss these matters often discover them in a hospital corridor.`) +
          P(`A workable plan usually covers:`) +
          UL([
            `<strong>Who does what:</strong> daily visits, meals, medication, appointments, paperwork and overnight cover, written down rather than assumed.`,
            `<strong>Money:</strong> who pays for care, whether the parent's own savings are used first, and how siblings are reimbursed.`,
            `<strong>Medical authority:</strong> who can speak to doctors, and what the parent wants if they lose capacity.`,
            `<strong>Housing:</strong> ageing in place, moving in with a child, or supported accommodation, with the parent's preferences heard.`,
            `<strong>Respite:</strong> carers need rest; burnout is not a spiritual virtue.`
          ]) +
          P(`The parent's dignity is the test. Discussing them as if they are not in the room, taking over their money without accounting, or treating their home as an inheritance before their death are failures of birr even when the practical decisions are reasonable.`) +
          P(`Siblings should avoid the twin traps of scorekeeping and silent resentment. The Prophet ﷺ warned against injustice among children, and the same logic applies to burden-sharing among adult siblings. A written rota and a shared expense record are not unspiritual; they are a way of making fairness real.`)
      },
      {
        id: 'after-death',
        heading: 'After a Parent Dies',
        html: P(`The relationship does not end at death. The Prophet ﷺ said that when a person dies, their deeds cease except three: ongoing charity, knowledge that continues to benefit, and a righteous child who prays for them (Sahih Muslim 1631). The child's dua is therefore part of the parent's continuing story.`) +
          P(`Practical acts include:`) +
          UL([
            `Making dua for forgiveness and mercy, especially in the funeral prayer and afterwards.`,
            `Giving charity on their behalf, without claiming that it replaces any neglected obligation.`,
            `Fulfilling a lawful vow or debt they left, and completing a pilgrimage they validly intended if resources allow and scholars permit.`,
            `Maintaining ties with their relatives and friends, not only with those who are useful.`,
            `Honouring their memory truthfully, without inventing virtues or hiding serious harm.`
          ]) +
          P(`Grief is not a measure of faith. Tears are recorded from the Prophet ﷺ himself. What matters is that grief does not turn into despair or into performative mourning that burdens the living.`)
      },
      {
        id: 'conflict-and-repair',
        heading: 'Conflict, Estrangement and Repair',
        html: P(`Some parent-child relationships are marked by long silence, favouritism, financial pressure, or a parent who refuses to respect an adult child's boundaries. Islam does not require denial. It requires honesty, justice and a serious attempt at repair where repair is safe.`) +
          P(`A useful sequence is:`) +
          UL([
            `Name the actual issue rather than the whole person (“I cannot lend more money” rather than “you are greedy”).`,
            `Choose a calm time and a private setting, and avoid using children as messengers.`,
            `Offer what you can sustain, not what will collapse after a month.`,
            `Bring in a trusted third party if direct conversation keeps failing; the Qur'an praises reconciliation.`,
            `Keep the door open without accepting repeated harm.`
          ]) +
          P(`The Qur'an commands justice even when feelings are raw: “O you who have believed, be persistently standing firm for Allah, witnesses in justice, and do not let the hatred of a people prevent you from being just” (5:8). Being wronged by a parent does not licence cruelty in return.`)
      },
      {
        id: 'checklist',
        heading: 'A Practical Checklist',
        html: P(`For readers who want to move from principle to action:`) +
          UL([
            `Call or visit this week without an agenda; ask about their day, not only their health.`,
            `Check whether they have unmet medical, financial or transport needs, and who else is helping.`,
            `Write down the care plan and the money arrangements with your siblings.`,
            `Ask a scholar about any specific conflict between a parent's request and a religious obligation.`,
            `Make dua for them by name, including for the parent who has died.`,
            `If the relationship is unsafe, seek professional advice and do not confuse endurance with piety.`
          ]) +
          P(`Honouring parents is not a performance for relatives. It is a steady practice of gratitude, justice and mercy toward the two people through whom one entered the world, held together with the worship of Allah alone.`)
      }
    ],
    faqs: [
      { q: 'Do I have to obey my parents in everything?', a: 'No. Obedience is owed in what is lawful and reasonable. If a parent commands a sin, the command is refused, but the duty of kind treatment remains. Adult children also retain the right to make their own lawful decisions about marriage, work and money.' },
      { q: 'What if my parents are non-Muslim?', a: 'They retain rights of kindness, respect, financial support and care. You do not participate in religious acts that contradict tawhid, and you do not obey a demand to abandon Islam. The Qur\'an commands justice and kindness toward peaceful non-Muslim parents (60:8; 31:15).' },
      { q: 'Can I put my parent in a care home?', a: 'There is no blanket prohibition. The decision depends on the parent\'s needs, safety, available family care, cost and the parent\'s wishes. The duty is to provide dignified, competent care and regular contact, not to pretend that one option is always religiously superior.' },
      { q: 'My parent was abusive. Do I still have to care for them?', a: 'Safety comes first. You are not required to endure violence or exploitation. Many scholars distinguish between the general duty of kindness and the specific practical arrangements that are unsafe. Seek advice from a qualified scholar and a safeguarding professional; maintaining a distant, respectful form of contact may be the most that is possible.' },
      { q: 'What can I do for a parent who has died?', a: 'Make dua for them, give charity on their behalf, fulfil their lawful debts and vows where possible, and maintain ties with their relatives. These are widely attested practices. Do not invent acts of worship the religion does not prescribe.' }
    ],
    bibliography: [
      'The Qur\'an — especially 2:83, 4:36, 5:8, 17:23–24, 29:8, 31:14–15 and 60:8. Translations adapted from Saheeh International unless stated.',
      'Sahih al-Bukhari — the hadith on the mother\'s precedence (5971) and the prohibition of harming a neighbour (6018).',
      'Sahih Muslim — the mother\'s precedence (2548) and the three deeds that continue after death (1631).',
      'Al-Nawawi, <em>Riyad al-Salihin</em> — chapters on kindness to parents and maintaining family ties.',
      'Ibn al-Jawzi, <em>Birr al-Walidayn</em> — classical treatment of filial duties and their limits.',
      'Contemporary works on elder care and safeguarding, read alongside a qualified scholar for case-specific rulings.'
    ],
    related: [
      ...relatedBase,
      { href: 'islamic-parenting-guide.html', label: 'Raising children: an Islamic parenting guide' },
      { href: 'rights-of-neighbours-in-islam.html', label: 'Rights of neighbours in Islam' }
    ]
  },

  {
    slug: 'islamic-parenting-guide',
    title: 'Raising Children in Islam: Parenting with Mercy, Structure and Purpose',
    metaTitle: 'Islamic Parenting Guide: Raising Children with Mercy and Purpose',
    description: 'Children as a trust, the Prophetic model of mercy, teaching tawhid and prayer, discipline without harm, emotional health, fairness between children, screens and modern pressures, and parenting adult children.',
    category: 'Family & Society',
    readTime: '13 min',
    intro: P(`The Qur'an calls children both a trial and a comfort: “Your wealth and your children are but a trial, and Allah has with Him a great reward” (64:15), and the righteous pray, “Our Lord, grant us from among our spouses and offspring comfort to our eyes” (25:74). Both are true. Parenting is a trust that exposes a person's patience, ego and dependence on Allah.`) +
      P(`This guide draws on the Qur'an, authenticated Prophetic reports and widely accepted principles of child welfare. It is not a manual for every family, and it does not replace a scholar, teacher, doctor or safeguarding professional when a child is in danger.`),
    keyTakeaways: [
      `Children are a trust, not a possession or a project for parental status.`,
      `The Prophetic model combines affection, patience and firm, proportionate boundaries.`,
      `Tawhid and prayer are taught gradually, by example and without coercion.`,
      `Corporal punishment is not the Prophetic default and is legally restricted in many countries.`,
      `Fairness, listening and emotional safety shape a child's image of God and of authority.`,
      `Parents remain responsible for guidance, but not for controlling an adult child's every choice.`
    ],
    sections: [
      {
        id: 'trust',
        heading: 'Children as a Trust',
        html: P(`The Qur'an describes wealth and children as <em>fitnah</em>, a test, not because children are bad but because they reveal what a person loves, fears and sacrifices. A child can become an idol, a status symbol, or a vessel for a parent's unmet ambitions. The believer is asked to love without worshipping the gift.`) +
          Q(`O you who have believed, protect yourselves and your families from a Fire whose fuel is people and stones.`, `Qur'an 66:6`) +
          P(`Protection here is not only physical. It includes teaching a child what is true, modelling justice, and creating an environment in which questions can be asked without fear. A home that punishes every doubt may produce outward conformity and inward distance.`) +
          P(`The Prophet ﷺ treated children as full human beings. He greeted them, carried them during prayer, shortened the prayer when a child cried, and allowed them to play. The reports are not sentimental decoration; they establish a norm.`)
      },
      {
        id: 'mercy-model',
        heading: 'The Prophetic Model of Mercy',
        html: P(`The Prophet ﷺ said, “He is not one of us who does not show mercy to our young or respect our old” (reported in al-Tirmidhi and Abu Dawud; scholars grade it hasan). He kissed his grandson al-Hasan in front of a man who said he had ten children and had never kissed one. The Prophet replied, “What can I do for you if Allah has removed mercy from your heart?” (Sahih al-Bukhari 5997).`) +
          P(`Mercy is not permissiveness. The same Prophet ﷺ gave clear instructions about prayer, honesty and respect, and he corrected children when needed. The balance is captured in the report that he said, “The best of you are those who are best to their families” (reported in al-Tirmidhi).`) +
          P(`For parents, this means distinguishing between the child and the behaviour. “You are a bad boy” attacks identity; “You hit your sister, and that is not allowed” addresses the act. The first produces shame and defensiveness; the second makes repair possible.`) +
          NOTE(`<strong>A note on violence:</strong> the Prophet ﷺ forbade striking the face (Sahih Muslim), and he never struck a child or a servant in the reports describing his household. Many contemporary scholars and child-protection bodies treat hitting as harmful and avoid it. Physical abuse is never justified by “discipline”.`)
      },
      {
        id: 'tawhid-first',
        heading: 'Teaching Tawhid First',
        html: P(`Luqman's advice to his son begins with the foundation:`) +
          Q(`O my son, do not associate anything with Allah. Indeed, association with Him is a great injustice.`, `Qur'an 31:13`) +
          P(`The passage then moves through gratitude to parents, humility, prayer, enjoining good, patience, moderation in walking and speech, and avoiding arrogance. It is a curriculum in character, not a list of slogans.`) +
          P(`Children learn tawhid less from lectures than from what they see: whether adults lie, whether they treat the vulnerable with dignity, whether they pray when no one is watching, whether they mention Allah with love or only with fear. A parent who explains “Allah sees us” while shouting at a cashier teaches two contradictory lessons.`) +
          P(`Questions about God, suffering and other religions should be welcomed. “I don't know; let's find out together” is a better answer than a fabricated certainty. The Qur'an itself invites reflection on the heavens, the earth and the self.`)
      },
      {
        id: 'prayer-and-discipline',
        heading: 'Prayer, Routine and Discipline',
        html: P(`The well-known report instructs parents to order children to pray at seven and to apply appropriate discipline at ten (reported by Abu Dawud; scholars grade it hasan). It describes a gradual process, not a switch. A seven-year-old is learning the movements and words; a ten-year-old is building consistency.`) +
          P(`Practical habits that help:`) +
          UL([
            `Pray beside the child before asking the child to pray alone.`,
            `Keep the prayer space clean, simple and associated with calm rather than shouting.`,
            `Teach short surahs and duas first; add length as capacity grows.`,
            `Use reminders rather than humiliation, especially in front of siblings or guests.`,
            `Distinguish between a child who is learning and an adult who is deliberately abandoning an obligation.`
          ]) +
          P(`Discipline should be predictable, proportionate and connected to the act. Removing a privilege for a stated period is different from hours of shouting or a punishment that the parent invents in anger. The child should know what the rule is before the consequence arrives.`) +
          P(`The Prophet ﷺ said, “None of you truly believes until he loves for his brother what he loves for himself” (Sahih al-Bukhari 13; Sahih Muslim 45). In a family, that includes loving for a child the same dignity, patience and privacy the parent expects for themselves.`)
      },
      {
        id: 'emotional-health',
        heading: 'Emotional Health and Listening',
        html: P(`A child's emotional system is still developing. Repeated shaming, threats of abandonment and unpredictable anger can teach a child that love is conditional and that authority is dangerous. Those lessons often outlast the childhood.`) +
          P(`Listening is a discipline. It means putting the phone down, asking open questions, and resisting the urge to correct every feeling. “You seem angry about school” is not agreeing with the anger; it is helping the child name it. Only after that can a parent guide.`) +
          P(`The Qur'an describes the Prophet ﷺ as gentle with his companions: “It is by mercy from Allah that you were lenient with them. And if you had been rude and harsh-hearted, they would have dispersed from around you” (3:159). If this is how a leader was told to treat adults, a parent's case for harshness with a child is weak.`) +
          P(`Sleep, food, movement and screen limits affect behaviour more than many parents expect. A child who is exhausted or hungry is not in a state to learn self-control. Address the body before diagnosing the character.`)
      },
      {
        id: 'fairness',
        heading: 'Fairness Between Children',
        html: P(`Favouritism is an old problem. The Prophet ﷺ was told by Nu'man ibn Bashir's father that he had given one son a gift and not the others. He asked whether the other children were also given the same, and when the answer was no, he refused to witness the gift and said, “Fear Allah and be just between your children” (Sahih al-Bukhari 2587; Sahih Muslim 1623).`) +
          P(`Fairness is not identical treatment. A sick child needs more time; a younger child needs more supervision; a child with a disability may need more resources. Fairness means that the reason for different treatment is the child's need, not the parent's preference, and that children are not left to guess whether they are loved less.`) +
          P(`Gender favouritism is particularly damaging. The Qur'an condemns the pre-Islamic resentment of daughters (16:58–59) and promises the same moral accountability to both. A family that celebrates a son's achievement while dismissing a daughter's, or that expects a daughter to serve a brother, teaches injustice in the name of tradition.`)
      },
      {
        id: 'modern-pressures',
        heading: 'Screens, School and Modern Pressures',
        html: P(`Contemporary parents face pressures earlier generations did not: constant connectivity, sexualised media, online bullying, academic competition and algorithms designed to capture attention. Pretending these do not exist is not protective.`) +
          P(`A workable approach includes:`) +
          UL([
            `Agree on device-free times and places, and apply them to adults too.`,
            `Keep younger children's devices in shared spaces and learn what the apps actually do.`,
            `Teach privacy and consent, including the rule that images are not shared without permission.`,
            `Distinguish between curiosity and harmful content; react to the first with conversation, not panic.`,
            `Protect sleep and offline friendship; both are stronger predictors of wellbeing than perfect grades.`
          ]) +
          P(`The Qur'an's teaching on privacy in the home remains relevant: children should ask permission at sensitive times, and adults should not spy on one another (24:58–59; 49:12). A parent's authority does not erase a child's right to dignity.`) +
          P(`School choices, extracurricular activities and career pressure should be discussed with the child's temperament in mind. Not every child is a doctor, and not every path that pleases relatives is good for the child.`)
      },
      {
        id: 'adult-children',
        heading: 'Parenting Adult Children',
        html: P(`The duty of guidance does not end, but the mode changes. Adult children make their own lawful decisions, including decisions a parent disagrees with. The Qur'an's principle in the case of religious disagreement is kindness without obedience to sin (31:15); the same spirit applies to marriage, career and lifestyle choices.`) +
          P(`Parents often struggle most when they fear a child is making a mistake. Advice given once, with respect, is usually heard better than advice repeated daily. Ultimatums, financial blackmail and shunning may produce compliance or distance, but rarely conviction.`) +
          P(`“There is no compulsion in religion” (2:256) is a foundational principle. It does not mean that parents should not teach; it means that faith cannot be coerced into existence. A parent can plant, water and pray, but cannot manufacture the harvest.`) +
          P(`Grandparenting brings a new test: respecting the parents' rules even when the grandparent disagrees. Undermining a daughter-in-law or son-in-law in front of the children creates conflicts that outlast the visit.`)
      }
    ],
    faqs: [
      { q: 'Is it permissible to hit children?', a: 'The Prophet ﷺ forbade striking the face and is not reported to have struck a child. Many contemporary scholars and child-protection bodies advise against hitting altogether, and it is illegal in many countries. Discipline should be proportionate, non-humiliating and connected to the behaviour. Physical abuse is never acceptable.' },
      { q: 'At what age should children start praying?', a: 'The well-known report mentions instructing children at seven and applying appropriate discipline at ten (Abu Dawud, graded hasan). The purpose is gradual formation. A child should first see prayer as normal, learn short surahs, and be encouraged without humiliation.' },
      { q: 'How do I handle a child who asks difficult questions about Islam?', a: 'Welcome the question and be honest about what you know. “I don\'t know, let\'s ask someone who does” is better than inventing an answer. Questions are not automatically rebellion; they are part of growing understanding.' },
      { q: 'Should I treat sons and daughters differently?', a: 'Needs may differ, but worth and dignity do not. The Qur\'an condemns the pre-Islamic resentment of daughters and holds both accountable to the same moral standard. Favouritism, unequal education and using a daughter as a servant for a son are injustices, not Islamic norms.' },
      { q: 'What if my adult child leaves Islam?', a: 'The Qur\'an prohibits compulsion in religion (2:256) and commands kind treatment even when parents are pressured toward shirk (31:15). Keep the relationship open, make dua, and avoid abusive or humiliating tactics. For specific family and legal questions, consult a qualified scholar and, where relevant, a counsellor.' }
    ],
    bibliography: [
      'The Qur\'an — especially 2:233, 2:256, 3:159, 16:58–59, 24:58–59, 25:74, 31:13–19, 49:11–13, 64:15 and 66:6. Translations adapted from Saheeh International unless stated.',
      'Sahih al-Bukhari — mercy to children (5997), fairness between children (2587) and brotherhood (13).',
      'Sahih Muslim — fairness between children (1623), the prohibition of striking the face, and the brotherhood hadith (45).',
      'Sunan Abi Dawud — the report on instructing children to pray (495), graded hasan by scholars.',
      'Jami\' al-Tirmidhi — mercy to the young and respect for the old (1919), and the best of you to their families (3895).',
      'Contemporary child-welfare and safeguarding guidance, read alongside qualified scholarly advice for case-specific questions.'
    ],
    related: [
      ...relatedBase,
      { href: 'honouring-parents-in-islam.html', label: 'Honouring parents: rights and limits' },
      { href: 'rights-of-neighbours-in-islam.html', label: 'Rights of neighbours in Islam' }
    ]
  },

  {
    slug: 'islamic-inheritance-basics',
    title: 'Islamic Inheritance (Mawarith): Rights, Shares and Practical Duties',
    metaTitle: 'Islamic Inheritance: Rights, Shares and Practical Duties',
    description: 'Why inheritance is Quranic law, what must be paid before distribution, the fixed shares, the one-third will, common injustices, orphans and minors, and how to seek a qualified calculation.',
    category: 'Law & Ethics',
    readTime: '12 min',
    intro: P(`Islamic inheritance law (<em>mawarith</em> or <em>fara'id</em>) is unusual in the Qur'an: the shares are revealed in explicit numerical detail. That detail is a mercy and a responsibility. It protects the vulnerable from being written out by custom, and it prevents the estate from becoming a prize for the loudest relative.`) +
      P(`This article explains the framework and the duties that surround it. It does not calculate a specific estate. Shares change with the exact combination of surviving heirs, debts, valid bequests and local law, and a wrong calculation can permanently harm a family. Use a qualified mufti or inheritance specialist and, where the state requires it, a lawyer.`),
    keyTakeaways: [
      `Inheritance shares are part of Quranic law, not merely local custom.`,
      `Funeral costs and genuine debts are settled before the will and the shares.`,
      `A valid will is limited to one-third of the estate unless the heirs consent.`,
      `Male and female heirs both receive shares; the common claim that women inherit nothing is false.`,
      `Orphans, minors and absent heirs have specific protections.`,
      `A qualified calculation is essential; do not rely on guesswork or family lore.`
    ],
    sections: [
      {
        id: 'why',
        heading: 'Why Inheritance Is Quranic Law',
        html: P(`The Qur'an addresses inheritance directly:`) +
          Q(`For men is a share of what the parents and close relatives leave, and for women is a share of what they leave, whether it is small or large — an obligatory share.`, `Qur'an 4:7`) +
          P(`This verse corrected a pre-Islamic custom in which only adult male warriors could inherit. Women, children and the vulnerable could be excluded. The Qur'an made a share obligatory for both men and women, and then specified the shares in 4:11–12 and 4:176.`) +
          P(`The legal detail is striking. The Qur'an does not leave inheritance to the discretion of the dying person or the strongest relative. It sets limits on the will and fixed entitlements for close relatives. A person may dispose of part of the estate, but not at the expense of the heirs Allah has named.`) +
          P(`Inheritance is therefore an act of worship and justice, not a technicality to be arranged after the funeral. Delaying distribution, hiding assets or pressuring heirs to sign away their shares are serious wrongs.`)
      },
      {
        id: 'before-distribution',
        heading: 'What Must Be Paid First',
        html: P(`The estate is not simply divided among heirs. The Qur'an says shares are distributed “after any bequest he may have made or debt” (4:12). Classical jurists set the order:`) +
          UL([
            `<strong>Funeral and burial costs:</strong> reasonable and necessary expenses, without extravagance.`,
            `<strong>Genuine debts:</strong> including unpaid zakat, loans, rent, medical bills and lawful maintenance obligations.`,
            `<strong>Valid will (<em>wasiyyah</em>):</strong> up to one-third of what remains, to a non-heir or to charity, unless the heirs consent to more.`,
            `<strong>Fixed shares:</strong> distributed according to the Quranic scheme and the surviving heirs.`,
            `<strong>Residue:</strong> to the nearest male relatives (<em>asabah</em>) according to the school's rules, or dealt with as the law and scholar direct.`
          ]) +
          P(`The Prophet ﷺ explained the limit of the will in the case of Sa'd ibn Abi Waqqas, who was ill and had only one daughter. He asked whether he should give away two-thirds or half of his wealth. The Prophet ﷺ said one-third, and added that one-third is a lot; leaving heirs rich is better than leaving them poor and begging (Sahih al-Bukhari 2742; Sahih Muslim 1628).`) +
          P(`A debt is not cancelled by death, and an heir who hides an asset is taking what is not theirs. Families should keep written records of loans and obligations while the person is alive.`)
      },
      {
        id: 'fixed-shares',
        heading: 'The Fixed Shares in Outline',
        html: P(`The Quranic shares are not a single formula; they are a set of rules that interact. The most familiar features are:`) +
          UL([
            `<strong>Spouse:</strong> a husband receives one-half of his wife's estate if she has no child, or one-quarter if she does. A wife receives one-quarter of her husband's estate if he has no child, or one-eighth if he does.`,
            `<strong>Parents:</strong> each parent generally receives one-sixth where there is a child; the mother may receive one-third in some combinations without a child.`,
            `<strong>Children:</strong> a son receives twice the share of a daughter in the same class. Where there are no sons, daughters receive specified fractions, commonly one-half for one daughter and two-thirds shared by two or more, subject to other heirs.`,
            `<strong>Siblings and extended kin:</strong> their shares depend on whether there is a child, a parent, a spouse, and on the school's treatment of residuaries and blocked heirs.`
          ]) +
          P(`The two-to-one ratio between son and daughter is often quoted without context. The classical rationale is that the male generally bears financial maintenance obligations while the female's property remains hers, and that a woman is not required to spend her inheritance on the household. Scholars also note that the ratio is not universal across all heirs; it applies to the specific sibling combination. The rule is not a statement that a woman's life or testimony is half a man's.`) +
          P(`A daughter is never excluded merely because she is a daughter. A wife is never excluded merely because she is a wife. Where a family custom says otherwise, the custom is wrong.`) +
          NOTE(`<strong>Do not self-calculate:</strong> the presence of a grandchild, a predeceased son's children, a full or half sibling, a grandmother, or a surviving spouse can change the result. Use a qualified specialist and provide the full family tree, debts and will.`)
      },
      {
        id: 'will',
        heading: 'The Will and Its Limits',
        html: P(`The Qur'an instructs those leaving wealth to make a fair bequest for parents and close relatives (2:180–182), and the Prophet ﷺ capped the bequest at one-third. A will is therefore useful for:`) +
          UL([
            `charity or a cause the person cares about;`,
            `a non-heir who is in need, such as a stepchild or a friend;`,
            `clarifying debts, funeral wishes and documents;`,
            `appointing an executor and a guardian for minor children.`
          ]) +
          P(`A will cannot be used to disinherit a Quranic heir or to give a favoured child more than the law allows without the consent of the other heirs. The Qur'an warns against altering a bequest unjustly (2:181–182). Families sometimes pressure a dying person to sign a late will; that is coercion, not piety.`) +
          P(`In countries where the state applies a different inheritance regime, a Muslim should take legal advice early. A will that is valid in civil law may still be unjust in religious terms, and a religiously correct plan may need a civil instrument to be enforceable. The two systems should be reconciled before death, not litigated after it.`)
      },
      {
        id: 'common-mistakes',
        heading: 'Common Injustices',
        html: P(`The same mistakes recur across communities:`) +
          UL([
            `<strong>“The eldest son takes everything.”</strong> This is custom, not Islamic law. It strips daughters, wives and younger siblings of their shares.`,
            `<strong>“Daughters do not inherit because they marry out.”</strong> The Qur'an explicitly gives women a share (4:7). Marriage does not erase it.`,
            `<strong>“The family home goes to the son who cared for the parents.”</strong> Care may deserve compensation or a gift during life, but it does not automatically cancel the shares of other heirs.`,
            `<strong>“We will sort it out later.”</strong> Delay allows assets to disappear, memories to fade and resentment to harden.`,
            `<strong>Oral promises and deathbed gifts.</strong> A gift made to avoid inheritance may be treated as a bequest or as invalid depending on the circumstances.`,
            `<strong>Joint accounts and hidden assets.</strong> Adding a child's name to an account for convenience can create a dispute about ownership after death.`
          ]) +
          P(`The Qur'an commands that orphans be given their property and that it not be exchanged for inferior property (4:2). It warns those who consume an orphan's wealth unjustly of fire in their bellies (4:10). Those verses are not only about strangers; they apply to relatives who manage a minor heir's share.`) +
          P(`A family meeting before death, with documents and a qualified adviser, can prevent most of these disputes. Avoiding the conversation is not trust in Allah; it is often a way of postponing injustice.`)
      },
      {
        id: 'practical-process',
        heading: 'A Practical Process',
        html: P(`A defensible process looks like this:`) +
          UL([
            `List every asset and every genuine debt, including informal loans and unpaid obligations.`,
            `Obtain the death certificate and the local legal authority's inheritance document where required.`,
            `Identify all heirs, including minors, absent relatives and any unborn child.`,
            `Have a qualified scholar or inheritance calculator produce the shares from the full facts.`,
            `Pay funeral costs, debts and the valid one-third bequest before distributing.`,
            `Document the distribution with signatures and bank records, and set up a trust or guardianship for minors where the law allows.`,
            `Keep the calculation and receipts; they protect the executor and the heirs.`
          ]) +
          P(`An executor should not take a “fee” from the estate without a lawful basis or the heirs' informed consent. A guardian of a minor heir should keep the minor's property separate and account for it. These are trust obligations, not favours.`) +
          P(`Where the estate is small or the family is cooperative, the process can still be simple. Simplicity is not an excuse to skip the shares.`)
      },
      {
        id: 'madhhab-and-law',
        heading: 'Schools of Law and Local Law',
        html: P(`The major Sunni schools agree on the Quranic fixed shares but differ on residuaries, blocked relatives, the treatment of certain grandparents and siblings, and the calculation of <em>al-'awl</em> and <em>al-radd</em>. A calculation that is correct in one school may differ in another. This is one reason a qualified specialist is needed.`) +
          P(`Local law may impose compulsory shares, community property rules, or a civil probate process. In some countries, a Muslim can make a will that honours both the religious scheme and the legal minimum. In others, the civil law may override the religious plan for certain assets. A lawyer and a scholar should be consulted together where possible.`) +
          P(`None of this authorises injustice. A civil loophole that lets one heir take everything is not a religious justification. The goal is a distribution that is both legally effective and morally defensible before Allah.`)
      }
    ],
    faqs: [
      { q: 'Does a daughter inherit?', a: 'Yes. The Qur\'an explicitly gives women a share (4:7) and specifies daughters\' shares in 4:11. A daughter is not excluded merely because she is a daughter or because she is married. The exact share depends on the other surviving heirs.' },
      { q: 'Can I leave everything to one child in my will?', a: 'No. A valid will is limited to one-third of the estate, and the Quranic heirs have fixed shares. Giving more to one child requires the informed consent of the other heirs after the death, and even then coercion or concealment is unjust. Seek a scholar and a lawyer.' },
      { q: 'Why does a son receive twice a daughter\'s share?', a: 'That is the rule for the specific sibling combination in 4:11. Classical scholars explain it in light of the male\'s maintenance obligations and the fact that a woman\'s property remains hers. The ratio is not a universal statement about the value of women, and other heirs receive different shares.' },
      { q: 'Should debts be paid before inheritance?', a: 'Yes. Funeral costs and genuine debts are paid before the will and the fixed shares (4:12). Hiding a debt or an asset is a breach of trust and can wrong the creditors and the heirs.' },
      { q: 'Can I use an online inheritance calculator?', a: 'A calculator can help you understand the structure, but it is only as good as the facts you enter. Complex families, missing heirs, debts and local law require a qualified specialist. Use a calculator for learning, not as the final authority for a real estate.' }
    ],
    bibliography: [
      'The Qur\'an — especially 2:180–182, 4:2, 4:6–12, 4:176 and 5:8. Translations adapted from Saheeh International unless stated.',
      'Sahih al-Bukhari — the one-third bequest of Sa\'d ibn Abi Waqqas (2742).',
      'Sahih Muslim — the one-third bequest (1628).',
      'Al-Nawawi, <em>al-Majmu\' Sharh al-Muhadhdhab</em> — chapters on fara\'id and wasiyyah.',
      'Ibn Rushd, <em>Bidayat al-Mujtahid</em> — comparative treatment of inheritance and residuaries.',
      'A qualified mufti or inheritance specialist for the calculation of a real estate, together with a local lawyer where civil law applies.'
    ],
    related: [
      ...relatedBase,
      { href: 'marriage-and-family-in-islam.html', label: 'Marriage and family in Islam' },
      { href: 'honouring-parents-in-islam.html', label: 'Honouring parents: rights and limits' }
    ]
  },

  {
    slug: 'rights-of-neighbours-in-islam',
    title: 'Neighbours in Islam: Rights, Boundaries and Community',
    metaTitle: 'Rights of Neighbours in Islam: Boundaries and Community',
    description: 'The Quranic command of neighbourliness, the Prophetic prohibition of harm, everyday rights, privacy, noise and shared spaces, conflict resolution, neighbours of other faiths, and community emergencies.',
    category: 'Ethics & Society',
    readTime: '11 min',
    intro: P(`Neighbourliness is one of the clearest tests of whether faith has reached the ordinary details of life. The Qur'an lists the neighbour among those to whom goodness is owed, and the Prophet ﷺ repeatedly connected faith in Allah and the Last Day with not harming the person next door.`) +
      P(`This article sets out the rights and the limits: hospitality without intrusion, help without control, privacy without suspicion, and firm boundaries without hostility. It is a guide to principles, not a substitute for local law or mediation in a serious dispute.`),
    keyTakeaways: [
      `The Qur'an commands goodness to near and distant neighbours, whether related or not.`,
      `The Prophet ﷺ made not harming a neighbour a marker of faith.`,
      `Neighbourliness includes greeting, help, sharing, privacy and restraint of harm.`,
      `Noise, parking, rubbish, cameras and shared maintenance are real religious issues, not only civic ones.`,
      `Spying and suspicion are forbidden; a neighbour's home is not an extension of one's own.`,
      `Justice and kindness extend to neighbours of other faiths.`
    ],
    sections: [
      {
        id: 'quranic-command',
        heading: 'The Quranic Command',
        html: P(`Surah al-Nisa' lists neighbourliness among the obligations that accompany worship of Allah alone:`) +
          Q(`Worship Allah and associate nothing with Him, and be good to parents, relatives, orphans, the needy, the near neighbour, the neighbour farther away, the companion at your side, the traveller, and those whom your right hands possess.`, `Qur'an 4:36`) +
          P(`The verse distinguishes the near neighbour and the distant neighbour. Classical commentators discussed whether “near” and “far” refer to physical distance, kinship, or religion. The safest reading is that the obligation is broad: the person in the next flat, the family two doors down, the colleague at the desk beside you, and the traveller who is temporarily nearby all have a claim to courtesy and help.`) +
          P(`The Qur'an also includes neighbours in the general command of goodness and justice (2:83; 2:177). These are not optional virtues for people with spare time. They are part of the ethical baseline.`)
      },
      {
        id: 'prophetic-teaching',
        heading: 'The Prophetic Teaching',
        html: P(`The Prophet ﷺ said, “Whoever believes in Allah and the Last Day, let him not harm his neighbour” (Sahih al-Bukhari 6018; Sahih Muslim 47). The wording is a warning: faith is not a private transaction between a person and God while the person next door suffers from their noise, rubbish or contempt.`) +
          P(`He also said that Jibril kept advising him about the neighbour until he thought the neighbour would be made an heir (Sahih al-Bukhari 6014; Sahih Muslim 2624). The hyperbole makes the point: neighbourliness is not a minor courtesy; it is close to the status of family obligation.`) +
          P(`Another report states, “He is not a believer who eats his fill while his neighbour beside him is hungry” (reported in <em>al-Adab al-Mufrad</em>). Scholars debate its exact grading, but the meaning is widely accepted: a well-fed household that ignores a hungry neighbour has misunderstood something essential.`) +
          NOTE(`<strong>Balance:</strong> the Prophet ﷺ also taught believers not to burden neighbours with excessive visits, to seek permission, and to protect privacy. Neighbourliness is not surveillance or forced intimacy.`)
      },
      {
        id: 'who-is-neighbour',
        heading: 'Who Counts as a Neighbour?',
        html: P(`A neighbour is not only the person in the adjacent house. In a city, a neighbour may be the flat above, the shop below, the family across the corridor, or the people who share a garden or a water tank. The Prophet ﷺ spoke of the neighbour's right in a way that suggests proximity creates obligation, not ownership.`) +
          P(`Classical scholars discussed categories such as the neighbour who is also a relative, the neighbour who shares religion, and the neighbour who shares neither. Some reports assign different levels of right, but the practical conclusion is consistent: every neighbour has a basic right to safety, privacy and courtesy; closer ties add stronger claims.`) +
          P(`A Muslim should not treat a non-Muslim neighbour as outside the circle of neighbourliness. The Qur'an commands justice toward peaceful people of other faiths (60:8), and the Prophet ﷺ visited and helped non-Muslim neighbours. Good neighbourliness can be a form of da'wah, but only if it is genuine; using kindness as a technique to convert someone is not kindness.`)
      },
      {
        id: 'everyday-rights',
        heading: 'Everyday Rights and Duties',
        html: P(`Neighbourliness is built from small, repeatable acts:`) +
          UL([
            `<strong>Greeting:</strong> a smile and a salaam cost nothing and reduce the anonymity that makes cities lonely.`,
            `<strong>Checking in:</strong> especially on the elderly, the ill, the newly bereaved and the family with a new baby.`,
            `<strong>Sharing:</strong> food, tools, a lift, or a spare key held in trust, without creating an obligation.`,
            `<strong>Restraint of harm:</strong> noise at night, parking across a driveway, rubbish left in a shared area, smoke, water leaks and building work are all neighbour issues.`,
            `<strong>Maintenance:</strong> shared walls, roofs, drains and gardens should be repaired cooperatively, not dumped on the quieter party.`,
            `<strong>Respect for visitors:</strong> a neighbour's guests are not an invitation to comment or complain without cause.`
          ]) +
          P(`The Prophet ﷺ warned against harming a neighbour and also against despising a gift, even a small one. A plate of dates or a bowl of soup can repair a relationship that a thousand arguments could not.`) +
          P(`Where a neighbour is vulnerable, the duty is stronger. The Qur'an's command to feed the poor and care for the orphan is not limited to distant charities; it begins at the door.`)
      },
      {
        id: 'privacy',
        heading: 'Privacy, Suspicion and Spying',
        html: P(`Islam protects the home. The Qur'an commands believers not to enter houses other than their own without permission and a greeting (24:27–28), and it forbids spying and suspicion:`) +
          Q(`O you who have believed, avoid much suspicion. Indeed, some suspicion is sin. And do not spy or backbite one another.`, `Qur'an 49:12`) +
          P(`This has concrete implications. A neighbour's balcony, window, garden and bin are not public property. Cameras should not point into another home. A shared wall does not give a right to listen through it. Asking a child to report on a neighbour's household is spying, even if the motive is curiosity rather than malice.`) +
          P(`Privacy runs both ways. A neighbour who is friendly does not thereby consent to unannounced visits at any hour. A family that values its own privacy should extend the same courtesy. The Prophet ﷺ taught believers to seek permission and to leave when asked, without taking offence.`) +
          P(`Gossip about a neighbour's marriage, money or children is backbiting. If there is a genuine safeguarding concern, the response is to involve the appropriate authority, not to circulate rumours.`)
      },
      {
        id: 'conflict',
        heading: 'When Neighbours Disagree',
        html: P(`Disputes over parking, noise, boundaries, pets, trees and shared expenses are common. The Qur'an gives a framework:`) +
          Q(`And if two factions among the believers should fight, then make settlement between them.`, `Qur'an 49:9`) +
          P(`A practical sequence:`) +
          UL([
            `Address the specific issue directly and privately, without an audience.`,
            `Assume the possibility of a misunderstanding until the facts are clear.`,
            `Propose a concrete solution and a time to review it.`,
            `Bring in a neutral third party, such as a community elder or building manager, if the direct conversation fails.`,
            `Use the law or the relevant authority when safety, property or repeated harm is at stake.`
          ]) +
          P(`Escalation should be proportionate. A single loud night is not a police matter; a pattern of threats or harassment is. Documenting incidents is not backbiting; it is evidence for a fair process.`) +
          P(`The goal is not to “win” the dispute but to restore a livable relationship. Sometimes the most just outcome is a clear boundary and minimal contact. That is permitted; hostility is not.`)
      },
      {
        id: 'other-faiths',
        heading: 'Neighbours of Other Faiths',
        html: P(`Muslims live beside Christians, Jews, Hindus, secular families and people of no religion. The Qur'an's standard is justice and kindness toward those who are not at war with the community:`) +
          Q(`Allah does not forbid you from those who do not fight you because of religion and do not expel you from your homes — from being righteous toward them and acting justly toward them.`, `Qur'an 60:8`) +
          P(`This means sharing food, helping in an emergency, congratulating a neighbour on a safe arrival, and offering condolences at a death. It does not mean affirming every religious claim or participating in worship of other than Allah. The two are not in conflict: kindness is not theological agreement.`) +
          P(`The Qur'an also says that diversity of peoples and tribes exists so that people may know one another, and that the most honoured are the most righteous (49:13). A neighbour's religion is not a licence for contempt.`)
      },
      {
        id: 'community',
        heading: 'From Neighbours to Community',
        html: P(`A neighbourhood is more than a collection of private homes. It has shared risks: fire, flood, crime, isolation, poor lighting, unsafe roads and neglected public spaces. Muslims are told to cooperate in righteousness and not in aggression (5:2).`) +
          UL([
            `Learn the names of the people on your street or floor.`,
            `Check on the elderly and disabled during heatwaves, storms and power cuts.`,
            `Keep shared areas clean and report hazards rather than ignoring them.`,
            `Support local food banks, shelters and community clean-ups, not only distant causes.`,
            `Treat service workers, cleaners and security staff with the same dignity as homeowners.`
          ]) +
          P(`The Prophet ﷺ said that removing harm from the road is a branch of faith. That is a small hadith with a large civic implication: faith is measured partly by whether the street is safe for the next person.`) +
          P(`Neighbourliness is not a substitute for justice on a national scale, but it is where justice becomes visible. A community that cannot share a staircase cannot credibly claim to care about the ummah.`)
      }
    ],
    faqs: [
      { q: 'Do I have to invite my neighbour into my home?', a: 'No. Neighbourliness requires courtesy, safety and help, not forced intimacy. You should greet, avoid harming, and assist in need. Inviting someone in is a kindness, not an obligation, and privacy is a legitimate boundary.' },
      { q: 'What if my neighbour is noisy or parks in my space?', a: 'Raise the specific issue privately and propose a practical solution. If it continues, involve the building manager or local authority. Document repeated incidents. Respond proportionately and avoid public humiliation or retaliation.' },
      { q: 'Can I complain about a neighbour to the authorities?', a: 'Yes, when there is a genuine safety, property or harassment issue. Islam commands justice and the prevention of harm; it does not require silence in the face of abuse. Use the proper process and stick to facts.' },
      { q: 'What are my duties to a non-Muslim neighbour?', a: 'The same basic duties of safety, courtesy, help and justice. The Qur\'an commands kindness toward peaceful non-Muslims (60:8). You do not participate in worship of other than Allah, but you do not need to be cold or hostile.' },
      { q: 'Is it wrong to keep to myself?', a: 'A quiet, private life is not a sin. But Islam discourages a closed circle that ignores a neighbour in need. A balance of privacy and basic neighbourliness is the Prophetic norm: greet, help when able, and do not harm.' }
    ],
    bibliography: [
      'The Qur\'an — especially 2:83, 2:177, 4:36, 5:2, 24:27–28, 49:9–13 and 60:8. Translations adapted from Saheeh International unless stated.',
      'Sahih al-Bukhari — the prohibition of harming a neighbour (6018) and Jibril\'s advice about the neighbour (6014).',
      'Sahih Muslim — the prohibition of harming a neighbour (47) and Jibril\'s advice (2624).',
      'Al-Bukhari, <em>al-Adab al-Mufrad</em> — reports on neighbourliness and the hungry neighbour.',
      'Al-Nawawi, <em>Riyad al-Salihin</em> — chapters on neighbours and social conduct.',
      'Local tenancy, planning and noise law, which should be followed alongside religious guidance.'
    ],
    related: [
      ...relatedBase,
      { href: 'islamic-manners-and-character.html', label: 'Adab and character in daily life' },
      { href: 'honouring-parents-in-islam.html', label: 'Honouring parents: rights and limits' }
    ]
  }
];
