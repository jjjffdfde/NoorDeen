const P = t => `<p style="line-height:1.8; color:var(--color-text-main); margin-bottom:14px;">${t}</p>`;
const H3 = t => `<h3 style="font-size:1.15rem; color:var(--color-primary); margin:22px 0 10px;">${t}</h3>`;
const UL = items => `<ul style="line-height:1.9; color:var(--color-text-main); padding-left:20px; margin-bottom:14px;">${items.map(i => `<li>${i}</li>`).join('')}</ul>`;
const Q = (text, cite) => `<blockquote style="background:var(--color-card); border-left:4px solid var(--color-gold); padding:16px 22px; margin:18px 0; border-radius:0 8px 8px 0;"><div style="font-style:italic; color:var(--color-text-main); line-height:1.8;">&ldquo;${text}&rdquo;</div><div style="margin-top:6px; font-size:0.85rem; color:var(--color-gold); font-weight:600;">${cite}</div></blockquote>`;
const NOTE = t => `<div style="background:var(--color-surface); border:1px solid var(--color-border); border-radius:10px; padding:16px 18px; margin:18px 0; font-size:0.92rem; line-height:1.75;">${t}</div>`;

const relatedBase = [
  { href: 'index.html', label: 'Articles Library — full catalogue' },
  { href: '../pillars.html', label: 'The Five Pillars of Islam' },
  { href: '../zakat-calculator.html', label: 'Zakat calculation tool' },
  { href: '../duas.html', label: 'Duas and Adhkar library' },
  { href: '../sources.html', label: 'Sources and verification policy' }
];

module.exports = [
  {
    slug: 'islamic-finance-and-riba',
    title: 'Islamic Finance and Riba: A Source-Based Introduction',
    metaTitle: 'Islamic Finance and Riba: A Source-Based Introduction',
    description: 'Why Islam regulates money, what riba (interest/usury) means, the two classical categories, how modern loans and credit cards raise the issue, halal financing structures, gharar and gambling, and zakat on investments.',
    category: 'Law & Ethics',
    readTime: '12 min',
    intro: P('Money is a tool, not a goal. Islamic law treats it as a trust (<em>amanah</em>) to be earned, spent and invested within limits that protect justice, transparency and the vulnerable. The most discussed limit is the prohibition of <em>riba</em>, usually translated as interest or usury. This article explains the scriptural basis, the classical categories, how ordinary modern products raise the question, and the main halal alternatives.') +
      P('It is an educational overview, not a personal fatwa or a specific investment recommendation. Contracts, tax and local law vary; consult a qualified scholar and a regulated financial adviser before signing.'),
    keyTakeaways: [
      'The Qur\'an prohibits riba and describes it as a form of injustice.',
      'Classical scholars distinguish riba in loans from riba in exchange (the six commodities).',
      'Modern interest-bearing loans, savings and credit cards require careful review.',
      'Islamic finance replaces interest with profit, rent, partnership or trade.',
      'Gharar (excessive uncertainty) and gambling are separate prohibitions.',
      'Zakat still applies to qualifying wealth and investments.'
    ],
    sections: [
      {
        id: 'why-regulate',
        heading: 'Why Islam Regulates Money',
        html: P('The Qur\'an frames wealth as belonging ultimately to Allah and held by people in trust:') +
          Q('Believe in Allah and His Messenger and spend out of that in which He has made you trustees.', 'Qur\'an 57:7') +
          P('Lawful earning is encouraged, but gain must not come through deception, exploitation or harm. The Qur\'an commands:') +
          Q('O you who have believed, do not consume one another\'s wealth unjustly, but only [in lawful] business by mutual consent.', 'Qur\'an 4:29') +
          P('This is the wider principle behind the specific rules. Islam does not condemn profit; it condemns profit extracted through coercion, hidden risk or the exploitation of need. A trader who bears risk and adds value is praised; a lender who is guaranteed a return regardless of the borrower\'s outcome is treated differently.') +
          P('The Prophet ﷺ was himself a trader and worked in commerce before prophethood. Trade is therefore a respected path, and the ethical question is how the gain is made, not whether gain is made.')
      },
      {
        id: 'what-is-riba',
        heading: 'What Riba Means',
        html: P('The Qur\'an is severe on riba. It says that Allah has permitted trade and forbidden riba (2:275), warns of war from Allah and His Messenger for those who persist (2:279), and describes riba as increasing in the sight of people but not with Allah (30:39).') +
          Q('Allah destroys interest and gives increase for charities.', 'Qur\'an 2:276') +
          P('Classical jurists identified two broad categories:') +
          UL([
            '<strong>Riba al-nasi\'ah (riba of delay):</strong> an excess charged for postponing repayment of a loan. This is the riba explicitly condemned in the Qur\'an and is the category most relevant to modern interest.',
            '<strong>Riba al-fadl (riba of excess):</strong> exchanging the same commodity in unequal quantities, such as gold for gold or wheat for wheat. The Prophet ﷺ specified six commodities — gold, silver, wheat, barley, dates and salt — and required equal measure and immediate hand-to-hand exchange when they are of the same kind.'
          ]) +
          P('The second category is less familiar to modern readers but reflects a concern for fair exchange and the prevention of hidden advantage in currency and staple-food markets. Jurists extended the reasoning to other commodities by analogy, with differences between the schools.')
      },
      {
        id: 'modern-finance',
        heading: 'How Modern Finance Raises the Issue',
        html: P('A conventional loan with a fixed or variable interest rate is the clearest modern parallel to riba al-nasi\'ah: the lender is guaranteed a return on money merely by waiting, without sharing the borrower\'s risk or the productive outcome.') +
          P('Common products that require review include:') +
          UL([
            '<strong>Mortgages and personal loans:</strong> usually interest-bearing. Islamic alternatives exist but must be checked for genuine risk-sharing rather than a renamed interest charge.',
            '<strong>Credit cards:</strong> paying the full balance within the grace period may avoid interest, but late payment interest remains riba. Some scholars permit holding a card for necessity while avoiding interest; others advise debit or charge cards.',
            '<strong>Savings accounts:</strong> interest credited by a conventional bank is generally treated as riba. Many scholars advise keeping only what is needed and giving unexpected interest to charity without expecting reward.',
            '<strong>Bonds and interest funds:</strong> conventional bonds pay interest and are generally excluded from Islamic portfolios. Sukuk are structured differently but still require scholarly review.',
            '<strong>Student and business loans:</strong> government schemes vary widely; the presence of interest is the key question, and some schemes have hardship exemptions.'
          ]) +
          NOTE('<strong>Important:</strong> A product labelled “Islamic” is not automatically compliant. Look for a named Shariah supervisory board, a clear contract, and disclosure of penalties, late fees and risk allocation. Ask questions before signing.')
      },
      {
        id: 'halal-alternatives',
        heading: 'Halal Financing Structures',
        html: P('Islamic finance does not simply ban interest and leave a gap. It uses contracts in which the financier shares risk, owns an asset, or provides a service. The main structures are:') +
          UL([
            '<strong>Murabaha (cost-plus sale):</strong> the financier buys an asset and sells it to the customer at a disclosed markup, payable in instalments. The markup is tied to a real sale, not to a money loan.',
            '<strong>Musharakah (joint partnership):</strong> partners contribute capital and share profit and loss according to agreed ratios. Loss is shared in proportion to capital.',
            '<strong>Mudarabah (investment partnership):</strong> one party provides capital and the other provides expertise; profit is shared, and financial loss falls on the capital provider unless the manager was negligent.',
            '<strong>Ijarah (lease):</strong> the financier owns the asset and leases its use for a rent; ownership risks and maintenance responsibilities must be real.',
            '<strong>Sukuk:</strong> investment certificates backed by tangible assets or usufruct, structured to avoid a pure interest payment.',
            '<strong>Takaful:</strong> a mutual or cooperative protection arrangement rather than a conventional insurance contract with excessive uncertainty.'
          ]) +
          P('Each structure has detailed conditions. A murabaha that merely disguises a cash loan, or an ijarah in which the financier bears none of the ownership risk, may fail the purpose of the rules. The test is substance, not the label.')
      },
      {
        id: 'gharar-gambling',
        heading: 'Gharar, Gambling and Speculation',
        html: P('Riba is not the only financial prohibition. Islam also prohibits <em>gharar</em> — excessive uncertainty or ambiguity in a contract — and <em>maysir</em> — gambling. The Qur\'an links intoxicants and gambling as works of Satan that cause enmity and hatred and turn people away from remembrance (5:90–91).') +
          P('In practice this affects:') +
          UL([
            'Contracts whose subject matter, price or delivery is fundamentally unknown or uncontrollable.',
            'Lotteries, betting and games of chance where a stake is won or lost on an uncertain event.',
            'Highly speculative derivatives and short-selling practices that scholars judge to involve excessive uncertainty or sale of what one does not own.',
            'Conventional insurance, which some scholars criticise for gharar, though others permit it under necessity; takaful is the alternative.'
          ]) +
          P('Ordinary business risk is not gharar. A trader who buys stock hoping to sell at a profit takes a normal commercial risk; the prohibition targets contractual ambiguity and pure wagering, not every uncertain outcome.')
      },
      {
        id: 'zakat-investments',
        heading: 'Zakat on Wealth and Investments',
        html: P('Zakat is a separate obligation from the prohibition of riba. Qualifying wealth held for a lunar year above the nisab threshold is subject to 2.5%. The details depend on the asset:') +
          UL([
            '<strong>Cash and bank balances:</strong> zakatable at 2.5% once the combined wealth reaches nisab.',
            '<strong>Gold and silver:</strong> zakatable by weight, with the classical nisab thresholds.',
            '<strong>Trade goods and inventory:</strong> valued at market price at the zakat date.',
            '<strong>Shares:</strong> scholars differ. Some treat actively traded shares at market value; others calculate the zakatable assets of the company. Long-term holdings may be treated differently from trading portfolios.',
            '<strong>Retirement accounts:</strong> the treatment depends on accessibility and ownership; ask a scholar familiar with your jurisdiction.'
          ]) +
          P('Use the portal\'s zakat calculator to estimate, but verify the metal prices and your asset values. The calculator uses indicative defaults, not live market quotes.')
      },
      {
        id: 'practical-steps',
        heading: 'Practical Steps for an Ordinary Muslim',
        html: UL([
          '<strong>Audit your accounts:</strong> list loans, credit cards, savings, investments and business interests, and identify where interest is charged or paid.',
          '<strong>Separate necessity from convenience:</strong> a mortgage for a family home is a serious matter; a credit card for rewards is not. Seek specific guidance for your situation.',
          '<strong>Prefer transparent contracts:</strong> ask for the total cost, the penalty terms, and who bears the risk if something goes wrong.',
          '<strong>Do not self-issue a fatwa:</strong> a scholar who knows your country\'s law and your finances is better than a generic article.',
          '<strong>Give doubtful interest to charity:</strong> many scholars advise disposing of riba received without intending it as reward, while repenting from the arrangement.',
          '<strong>Keep learning:</strong> the Quranic command to write down and witness debts (2:282) shows that precision in financial matters is itself part of faith.'
        ]) +
          P('The goal is not to become paralysed by complexity. It is to move steadily toward lawful, transparent and just dealings, and to seek forgiveness where one has fallen short.')
      }
    ],
    faqs: [
      { q: 'Is all interest riba?', a: 'The dominant classical and contemporary view is that interest charged on a money loan for delay falls under riba al-nasi\'ah. A minority of modern writers argue for narrower definitions, but this is not the mainstream position. Specific products still need case-by-case review.' },
      { q: 'Can I have a conventional bank account?', a: 'Most scholars permit a current account for safekeeping and daily transactions, while advising against intentionally earning interest. If interest is credited unexpectedly, many advise giving it to charity without expecting reward.' },
      { q: 'Are Islamic mortgages really interest-free?', a: 'A genuine Islamic mortgage uses a sale, lease or partnership structure and involves real asset ownership and risk. Some products are economically similar to conventional mortgages; the contract terms and the presence of a credible Shariah board matter.' },
      { q: 'Is investing in stocks halal?', a: 'It depends on the company and the purpose. Shares in businesses whose core activity is unlawful (for example alcohol, gambling or conventional banking) are generally excluded. Mixed-activity companies require screening and purification of incidental income. Seek a reputable screening methodology.' },
      { q: 'Does zakat replace the need to avoid riba?', a: 'No. Zakat purifies lawful wealth; it does not make an unlawful gain lawful. The two obligations are separate.' }
    ],
    bibliography: [
      'The Qur\'an — especially 2:275–281, 4:29, 5:90–91, 30:39 and 57:7.',
      'Sahih Muslim — the hadith on the six commodities and the prohibition of riba al-fadl.',
      'Sahih al-Bukhari — trade, debt and the condemnation of usury.',
      'Al-Nawawi, <em>al-Majmu\' Sharh al-Muhadhdhab</em> — chapters on riba and sale.',
      'Ibn Rushd, <em>Bidayat al-Mujtahid</em> — comparative treatment of riba and exchange.',
      'Contemporary standards from recognised Shariah boards and AAOIFI, read with a qualified scholar.'
    ],
    related: [
      ...relatedBase,
      { href: 'zakat-educational-calculation-guide.html', label: 'Zakat: detailed calculation guide' },
      { href: 'islamic-manners-and-character.html', label: 'Adab and honest dealings' }
    ]
  },

  {
    slug: 'marriage-and-family-in-islam',
    title: 'Marriage and Family in Islam: Rights, Contracts and Real Life',
    metaTitle: 'Marriage and Family in Islam: Rights, Contracts and Real Life',
    description: 'The Quranic purpose of marriage, choosing a spouse, the marriage contract and its conditions, mahr, mutual rights, conflict resolution, divorce and the upbringing of children — with madhhab differences noted.',
    category: 'Family & Society',
    readTime: '13 min',
    intro: P('Marriage (<em>nikah</em>) is described in the Qur\'an as a sign of Allah\'s creation and a source of tranquillity, love and mercy:') +
      Q('And among His signs is this, that He created for you mates from among yourselves, that you may dwell in tranquillity with them, and He has put love and mercy between your hearts.', 'Qur\'an 30:21') +
      P('It is a worship act, a legal contract and a social institution at once. This article explains the purpose, the contract, the rights and responsibilities, and the hard realities of conflict and divorce. It is a learning guide, not a substitute for a scholar, a counsellor or a lawyer.'),
    keyTakeaways: [
      'Marriage is both a religious covenant and a legal contract.',
      'Consent of both parties is essential; forced marriage is invalid.',
      'The contract requires offer, acceptance, witnesses and mahr.',
      'Rights are mutual, though roles and details differ between schools.',
      'Conflict should be addressed early, with mediation and fairness.',
      'Divorce is permitted but disliked; it has legal procedures and waiting periods.'
    ],
    sections: [
      {
        id: 'purpose',
        heading: 'The Purpose of Marriage',
        html: P('The Qur\'an presents marriage as more than a private romance. It is a bond of tranquillity (<em>sakan</em>), affection (<em>mawadda</em>) and mercy (<em>rahma</em>). It protects chastity, provides companionship, and creates the stable household in which children are raised.') +
          P('The Prophet ﷺ said: <em>“Marriage is part of my Sunnah. Whoever does not follow my Sunnah has nothing to do with me”</em> (narrated by Ibn Majah; graded hasan by some scholars). He also advised: <em>“O young people, whoever among you can afford to marry should marry, for it helps lower the gaze and guard chastity”</em> (Sahih al-Bukhari and Sahih Muslim).') +
          P('Marriage is not obligatory for everyone. It is strongly recommended for those able to fulfil its responsibilities, while celibacy is not a virtue in Islam. Health, finances, study and caring duties can all affect timing, and these are legitimate considerations.')
      },
      {
        id: 'choosing',
        heading: 'Choosing a Spouse',
        html: P('The Prophet ﷺ taught that people consider wealth, lineage, beauty and religion, and advised: <em>“Choose the one who is religiously committed”</em> (Sahih al-Bukhari and Sahih Muslim). This does not mean ignoring compatibility; it means that character and faith are the foundation, not an afterthought.') +
          P('Practical considerations include:') +
          UL([
            '<strong>Character and temperament:</strong> how the person handles anger, money, family and disagreement.',
            '<strong>Faith and practice:</strong> not a claim of perfection, but a shared direction and willingness to grow.',
            '<strong>Communication:</strong> can you discuss difficult topics without contempt?',
            '<strong>Family context:</strong> the families will be involved, for better or worse. Observe how they treat each other.',
            '<strong>Health and fertility questions:</strong> discuss honestly and lawfully; neither party should be deceived.',
            '<strong>Finances and housing:</strong> expectations about work, spending and living arrangements should be explicit.'
          ]) +
          NOTE('<strong>Guard against coercion:</strong> a marriage without the free consent of both parties is invalid. Cultural pressure, threats and deception are not Islamic. If you are being forced, seek help from a trusted scholar, imam or civil authority.')
      },
      {
        id: 'contract',
        heading: 'The Marriage Contract',
        html: P('Nikah is a contract with specific pillars. Across the schools, the essential elements are:') +
          UL([
            '<strong>Offer and acceptance</strong> by the parties or their authorised representatives.',
            '<strong>Free consent</strong> of both bride and groom. The bride\'s consent is required; a guardian\'s role varies by school and jurisdiction but cannot justify compulsion.',
            '<strong>Witnesses</strong> — generally two just adult witnesses, with details differing by school.',
            '<strong>Mahr</strong> — a bridal gift from the groom to the bride, which becomes her property. It may be paid immediately, deferred, or partly both, and must be agreed.',
            '<strong>Eligibility</strong> — the parties must not be within the prohibited degrees of kinship, and other legal conditions must be met.'
          ]) +
          P('The contract should be written and registered according to local law. A written contract can include conditions that do not contradict the religion, such as where the couple will live, arrangements for study or work, or a delegated right of divorce. Conditions that remove a spouse\'s basic rights are invalid.') +
          P('The <em>wali</em> (guardian) is required in the Hanafi view for a minor and recommended for an adult woman; the Shafi\'i and Maliki schools give the guardian a larger role, while the Hanbali school and many contemporary scholars emphasise the woman\'s consent. These are genuine juristic differences; follow the school and the law that apply to you.')
      },
      {
        id: 'mahr',
        heading: 'Mahr: The Bridal Gift',
        html: P('Mahr is not a price for the bride or a payment to her family. It is her right, and it becomes her property. The Qur\'an says:') +
          Q('And give the women their dower as a free gift.', 'Qur\'an 4:4') +
          P('There is no fixed minimum in the Qur\'an; the amount is agreed and should be reasonable. The Prophet ﷺ encouraged moderation and did not set an inflated standard. Mahr can be cash, gold, property, a useful service, or a deferred obligation.') +
          P('If the marriage is not consummated and ends, the rules on returning or retaining part of the mahr differ by circumstance and school. If the husband divorces after consummation, the mahr is generally due. These details matter and should be settled with a scholar or lawyer, not improvised.')
      },
      {
        id: 'rights',
        heading: 'Mutual Rights and Responsibilities',
        html: P('The Qur\'an speaks of spouses as garments for one another (2:187) and commands men to live with women in kindness (<em>ma\'ruf</em>) (4:19). The Prophet ﷺ said: <em>“The best of you are those who are best to their families”</em> (narrated by al-Tirmidhi; graded authentic).') +
          P('Broadly, each spouse owes the other:') +
          UL([
            '<strong>Faithfulness and chastity.</strong>',
            '<strong>Kindness, respect and protection from harm.</strong>',
            '<strong>Fair maintenance:</strong> the husband is generally responsible for financial maintenance according to his means; the wife\'s own property remains hers.',
            '<strong>Consultation in family decisions</strong> and avoiding unilateral control.',
            '<strong>Care in illness, old age and hardship.</strong>',
            '<strong>Support for each other\'s worship, learning and lawful goals.</strong>'
          ]) +
          P('The Qur\'an\'s verse on <em>qiwamah</em> (4:34) is often read as a statement of responsibility and maintenance, not a licence for domination. Scholars differ on its details. Any reading that permits violence contradicts the Prophet\'s clear prohibition of harming one\'s wife and the Qur\'anic command to live in kindness. Domestic abuse is a crime and a sin; it is not a private religious matter.')
      },
      {
        id: 'conflict',
        heading: 'Conflict, Mediation and Repair',
        html: P('Disagreement is normal. The Qur\'an prescribes a graduated process for serious marital discord (4:34–35): admonition, separation in bed, and finally arbitration by representatives of both families. The goal is repair, not punishment.') +
          P('Healthy practices include:') +
          UL([
            'Address the issue, not the person. Avoid contempt, mockery and dredging up the past.',
            'Pause when angry. The Prophet ﷺ advised that anger is from Satan and should be cooled by silence, sitting, or ablution.',
            'Use a trusted third party early, before positions harden.',
            'Separate financial pressure from emotional accusations.',
            'Never use children as weapons or messengers.',
            'Seek professional counselling where available; it is not a lack of faith.'
          ]) +
          P('If abuse, addiction or serial deception is present, safety comes first. Religious advice should never be used to keep someone in danger.')
      },
      {
        id: 'divorce',
        heading: 'Divorce: Permitted but Disliked',
        html: P('The Prophet ﷺ said: <em>“The most hated of permissible things to Allah is divorce”</em> (narrated by Abu Dawud; graded by some scholars as weak or hasan). Even where the report is debated, the sentiment is clear: divorce is lawful but should not be rushed.') +
          P('Islamic divorce has procedures:') +
          UL([
            '<strong>Talaq:</strong> the husband\'s pronouncement, followed by a waiting period (<em>iddah</em>) during which reconciliation is possible.',
            '<strong>Khul\':</strong> the wife\'s separation by agreement, often returning or forgoing part of the mahr.',
            '<strong>Faskh:</strong> judicial annulment for valid grounds, decided by a court or authority.',
            '<strong>Iddah:</strong> a waiting period, generally three menstrual cycles or three months, or until childbirth if pregnant. Maintenance and residence during iddah have detailed rules.'
          ]) +
          P('The Qur\'an commands fairness, witnesses and kindness even in separation (2:229–232). Secret or triple simultaneous pronouncements, coercion and withholding rights are abuses. Civil registration and legal advice are essential, especially where children, property or immigration status are involved.')
      },
      {
        id: 'children',
        heading: 'Raising Children',
        html: P('Children are a trust. The Qur\'an commands parents to protect their families from the Fire (66:6) and describes righteous offspring as a blessing (25:74). The Prophet ﷺ was affectionate with children, patient with their play, and gentle in correction.') +
          P('Key principles:') +
          UL([
            'Teach prayer, honesty and respect by example before demanding them.',
            'Be consistent; arbitrary rules produce anxiety, not character.',
            'Distinguish childhood mistakes from defiance and respond proportionately.',
            'Protect children from adult conflicts, including divorce proceedings.',
            'Provide religious education that is loving and intellectually honest, not frightening.',
            'Recognise that children have rights: maintenance, education, safety and fair treatment.'
          ]) +
          P('No family is perfect. The standard is not a flawless household but a repentant, repairing one.')
      }
    ],
    faqs: [
      { q: 'Can a woman choose her own husband?', a: 'Yes. Her free consent is required. The guardian\'s role and the details of the contract vary by school and local law, but compulsion is not valid in Islamic law.' },
      { q: 'Is a civil marriage valid in Islam?', a: 'A civil registration alone may not fulfil the religious requirements (offer, acceptance, witnesses, mahr). Many couples do both. Ask a local imam and follow the law of your country.' },
      { q: 'How much mahr should be paid?', a: 'There is no fixed amount. It should be agreed, reasonable and within the groom\'s capacity. Inflated cultural expectations are not a religious requirement.' },
      { q: 'Is divorce a sin?', a: 'Divorce is permitted but disliked. It is not an unforgivable sin. It should follow the legal procedure, with fairness and attempts at reconciliation where safe.' },
      { q: 'Can a couple marry without their families?', a: 'The religious validity depends on the contract\'s pillars and the applicable school, not on a family celebration. However, family involvement and community support are strongly advisable where they are safe and fair.' }
    ],
    bibliography: [
      'The Qur\'an — especially 2:187, 2:221–237, 4:1–35, 30:21 and 66:6.',
      'Sahih al-Bukhari and Sahih Muslim — books of marriage, divorce and maintenance.',
      'Al-Nawawi, <em>al-Majmu\'</em> and <em>Riyad al-Salihin</em>.',
      'Ibn Qudamah, <em>al-Mughni</em> — marriage and divorce chapters.',
      'Ibn Rushd, <em>Bidayat al-Mujtahid</em> — comparative family law.',
      'Contemporary family-law manuals and local civil law, read with a qualified scholar and lawyer.'
    ],
    related: [
      ...relatedBase,
      { href: 'islamic-manners-and-character.html', label: 'Adab within the family' },
      { href: 'new-muslim-learning-path.html', label: 'Learning path for new Muslims' }
    ]
  },

  {
    slug: 'death-and-the-afterlife',
    title: 'Death and the Afterlife: A Quranic and Prophetic Overview',
    metaTitle: 'Death and the Afterlife: A Quranic and Prophetic Overview',
    description: 'The inevitability of death, preparing a will and settling debts, deathbed etiquette, burial rites, the barzakh, resurrection, the judgment, intercession, Paradise and Hell — with weak reports clearly distinguished.',
    category: 'Belief & Hereafter',
    readTime: '13 min',
    intro: P('Every soul will taste death (Qur\'an 3:185). Islam treats death not as an end but as a doorway: the body returns to the earth, and the soul enters an intermediate state until the resurrection. This article summarises what the Qur\'an and authentic Sunnah say, distinguishes clear texts from disputed reports, and explains the practical duties of the living.') +
      P('The unseen is known only through revelation. Speculative detail, dream narratives and popular stories should not be presented as certain. Where reports are weak or disputed, this guide says so.'),
    keyTakeaways: [
      'Death is certain and its time is unknown; preparation is a duty.',
      'A valid will, settled debts and repaid trusts ease the transition.',
      'The dying person is comforted, not frightened; the deceased is washed, shrouded, prayed over and buried.',
      'The barzakh is the intermediate state between death and resurrection.',
      'Resurrection, judgment, intercession and the final abode are core beliefs.',
      'Exact details of Paradise and Hell are known only to the extent revelation discloses.'
    ],
    sections: [
      {
        id: 'certainty',
        heading: 'The Certainty of Death',
        html: P('The Qur\'an repeats that death is unavoidable:') +
          Q('Every soul will taste death, and you will only be given your full compensation on the Day of Resurrection.', 'Qur\'an 3:185') +
          P('It also says that no one knows where or when they will die (31:34) and that the term of every life is fixed (7:34). This is not fatalism; it is a call to live deliberately. The Prophet ﷺ advised: <em>“Remember often the destroyer of pleasures — death”</em> (narrated by al-Tirmidhi and al-Nasa\'i; graded hasan).') +
          P('Remembering death is meant to soften the heart, prompt repentance and reduce attachment to status and possessions. It is not meant to produce despair. The Qur\'an repeatedly pairs warning with mercy, and the Prophet ﷺ forbade wishing for death merely because of hardship.')
      },
      {
        id: 'preparation',
        heading: 'Preparing: Will, Debts and Trusts',
        html: P('The Prophet ﷺ said: <em>“It is not right for a Muslim who has something to bequeath to spend two nights without having his will written”</em> (Sahih al-Bukhari and Sahih Muslim). A will (<em>wasiyyah</em>) is a practical act of worship.') +
          P('Priorities at the end of life:') +
          UL([
            '<strong>Repent and seek forgiveness</strong>, and reconcile with people you have wronged.',
            '<strong>Repay debts and return trusts</strong>, including informal loans and items borrowed.',
            '<strong>Write a valid will</strong> according to local law. Classical rules limit bequests to a third of the estate after debts and funeral costs, with heirs receiving fixed shares. Local law may differ; seek legal advice.',
            '<strong>Document guardianship</strong> for minor children and any dependants with special needs.',
            '<strong>Tell trusted family</strong> where the will is kept and who the executor is.',
            '<strong>Do not delay</strong> — capacity can disappear suddenly.'
          ]) +
          NOTE('<strong>Estate planning is not only a religious matter.</strong> Inheritance shares are specified in the Qur\'an (4:11–12), but applying them requires a court, a jurisdiction and a properly drafted will. A qualified lawyer and a knowledgeable scholar should both review the plan.')
      },
      {
        id: 'deathbed',
        heading: 'At the Time of Death',
        html: P('The dying person should be treated with dignity and calm. Recommended practices, based on authentic reports, include:') +
          UL([
            'Encouraging the dying person to say the testimony of faith (<em>La ilaha illa Allah</em>) gently, without forcing.',
            'Reciting Qur\'an and supplicating for ease and mercy.',
            'Keeping the environment quiet and free from loud distress.',
            'Turning the person toward the qiblah where feasible, according to some scholars; this is a recommended practice, not a condition of validity.',
            'Closing the eyes after death and covering the body respectfully.',
            'Informing family and arranging burial promptly, without excessive delay.'
          ]) +
          P('The Prophet ﷺ taught that when the soul departs, the eyes follow it, and he closed the eyes of the deceased (Sahih Muslim). He also taught patience and the words <em>“Inna lillahi wa inna ilayhi raji\'un”</em> at calamity. Wailing, self-harm and questioning Allah\'s decree are discouraged.')
      },
      {
        id: 'burial',
        heading: 'Washing, Shrouding, Prayer and Burial',
        html: P('The communal obligations are:') +
          UL([
            '<strong>Ghusl:</strong> washing the body of the deceased, with the same-sex caregiver or spouse as appropriate. Details vary by school.',
            '<strong>Kafan:</strong> shrouding in simple white cloth, generally three sheets for a man and five for a woman, without extravagance.',
            '<strong>Janazah prayer:</strong> a communal prayer with four takbirs, supplication for the deceased, and no bowing or prostration.',
            '<strong>Burial:</strong> placing the body in a grave facing the qiblah, without a lavish tomb. Cremation is not permitted in Islamic law.',
            '<strong>Condolence and support:</strong> feeding the bereaved family and helping with practical needs is a Sunnah.'
          ]) +
          P('The portal\'s Janazah guide explains the prayer in detail. Local law may require permits and a registered burial site; follow both the religious and civil requirements.')
      },
      {
        id: 'barzakh',
        heading: 'The Barzakh: The Intermediate State',
        html: P('Between death and resurrection is the <em>barzakh</em>, literally a barrier. The Qur\'an says:') +
          Q('Behind them is a barrier until the Day they are resurrected.', 'Qur\'an 23:100') +
          P('The Qur\'an and authentic hadith indicate that the righteous are in comfort and the wrongdoers in difficulty, but the exact nature of that state is known only to Allah. The Prophet ﷺ spoke of the grave as a garden or a pit, and of questioning by angels, but the reports vary in strength and detail.') +
          P('What is certain: the barzakh is real, the soul persists, and the deeds one sent ahead matter. What is uncertain: precise timings, physical descriptions and the experiences of others. Avoid claiming certainty about what revelation does not clearly state.')
      },
      {
        id: 'resurrection',
        heading: 'Resurrection and the Judgment',
        html: P('The Qur\'an affirms bodily resurrection:') +
          Q('Does man think that We will not assemble his bones? Yes. We are able to put together in perfect order the very tips of his fingers.', 'Qur\'an 75:3–4') +
          P('On the Day of Resurrection, the trumpet is blown, the dead rise, and all are gathered. Each person receives the record of their deeds:') +
          Q('Read your book. Sufficient is your own soul against you this Day as a reckoner.', 'Qur\'an 17:14') +
          P('The judgment is perfectly just. No one is wronged even by the weight of a mustard seed (21:47). The scales (<em>mizan</em>) weigh deeds, and the bridge (<em>sirat</em>) is mentioned in authentic reports. Intercession (<em>shafa\'ah</em>) is affirmed for the Prophet ﷺ and others by Allah\'s permission, but it is not a licence to neglect obedience.') +
          P('The Prophet ﷺ described the people of the Day as barefoot, naked and uncircumcised, and said the first to be clothed would be Ibrahim (Sahih al-Bukhari and Sahih Muslim). These descriptions are reports of the unseen; we accept them without adding speculative detail.')
      },
      {
        id: 'paradise-hell',
        heading: 'Paradise and Hell',
        html: P('The Qur\'an describes Paradise as gardens beneath which rivers flow, with pure companions, abundant provision and the greatest reward: the pleasure of Allah (9:72, 98:8). Hell is described as a place of punishment and regret. Both are real, eternal for those whom Allah consigns to them, and their exact nature is known only to the extent revelation discloses.') +
          P('The Qur\'an says:') +
          Q('For those who have done good is the best reward and more.', 'Qur\'an 10:26') +
          P('The “more” is understood by many scholars as the vision of Allah in the Hereafter, the greatest joy. The Prophet ﷺ said that no eye has seen, no ear has heard, and no heart has imagined what has been prepared for the righteous (Sahih al-Bukhari and Sahih Muslim).') +
          P('Belief in the Hereafter is meant to shape behaviour now: it makes injustice temporary, accountability real, and mercy worth seeking. It is not a tool for frightening children or condemning named individuals. Final judgment belongs to Allah alone.')
      },
      {
        id: 'lessons',
        heading: 'Living in Light of the Hereafter',
        html: UL([
          'Pray as if it is your last prayer; the Prophet ﷺ advised this in a well-known report.',
          'Repair relationships now; the dead cannot return to apologise.',
          'Write your will and settle debts while you are healthy.',
          'Visit the sick and attend funerals; they remind the heart of its destination.',
          'Do not postpone repentance, assuming a long life.',
          'Balance fear and hope: the Qur\'an praises those who call on Allah with fear and hope (32:16).'
        ]) +
          P('The best preparation for death is not a dramatic gesture but a steady life of prayer, honesty, kindness and repentance. Allah\'s mercy is vast, and no sincere turn to Him is wasted.')
      }
    ],
    faqs: [
      { q: 'Can a Muslim be cremated?', a: 'No. Islamic burial is in the ground, facing the qiblah. Cremation is not permitted in Islamic law. Local law may require alternatives only in exceptional circumstances, which should be discussed with a scholar.' },
      { q: 'Is organ donation allowed?', a: 'Contemporary scholars differ. Many permit donation to save a life under strict conditions; others prohibit it. Follow a qualified scholar and your local law, and decide in advance with your family.' },
      { q: 'Do the dead hear us?', a: 'The Qur\'an says the dead do not hear the living (27:80, 30:52) in the context of calling them to guidance. Some scholars affirm a limited awareness from other reports. This is a disputed detail; do not build practice on certainty where the texts are not explicit.' },
      { q: 'Can we pray for a non-Muslim who died?', a: 'The Qur\'an prohibits seeking forgiveness for those who died in disbelief (9:113), while it permits kindness and justice toward living non-Muslims. The matter of attending funerals and condolence has detailed scholarly discussion; consult a qualified scholar.' },
      { q: 'Is the punishment of the grave certain?', a: 'The Qur\'an and authentic hadith affirm a state between death and resurrection, and many scholars affirm questioning and punishment. Details vary in strength. It is sufficient to affirm the barzakh and prepare sincerely, without speculative elaboration.' }
    ],
    bibliography: [
      'The Qur\'an — especially 3:185, 17:14, 21:47, 23:99–100, 31:34, 55:26–27, 75 and 98:8.',
      'Sahih al-Bukhari and Sahih Muslim — books of funerals, resurrection and Paradise.',
      'Al-Nawawi, <em>Riyad al-Salihin</em> — chapters on death and the Hereafter.',
      'Ibn Rajab al-Hanbali, <em>Lata\'if al-Ma\'arif</em>.',
      'Al-Ghazali, <em>Ihya\' \'Ulum al-Din</em> — the remembrance of death (read critically).',
      'Contemporary works on Islamic burial law and estate planning, reviewed by qualified scholars.'
    ],
    related: [
      ...relatedBase,
      { href: '../janazah-guide.html', label: 'Complete Janazah prayer guide' },
      { href: 'repentance-dhikr-spiritual-development.html', label: 'Repentance and spiritual development' }
    ]
  },

  {
    slug: 'halal-and-haram-food',
    title: 'Halal and Haram Food: Principles, Practice and Doubts',
    metaTitle: 'Halal and Haram Food: Principles, Practice and Doubts',
    description: 'The Quranic principle of permissibility, explicit prohibitions, slaughter conditions, alcohol and intoxicants, pork, seafood differences, meat in non-Muslim countries, additives and dealing with doubt.',
    category: 'Law & Ethics',
    readTime: '11 min',
    intro: P('Food is a daily act of worship when it is lawful and grateful. The Qur\'an addresses humanity with a broad permission and a clear limit:') +
      Q('O mankind, eat from whatever is on earth [that is] lawful and good and do not follow the footsteps of Satan.', 'Qur\'an 2:168') +
      P('This article explains the principle of permissibility, the explicitly prohibited items, the conditions of slaughter, the debate over seafood and additives, and how to handle genuine doubt without inventing rules. It is a learning guide, not a personal fatwa.'),
    keyTakeaways: [
      'The default for food and drink is permissibility unless revelation prohibits it.',
      'Explicit prohibitions include pork, blood, carrion, intoxicants and improperly slaughtered meat.',
      'Slaughter requires a clean cut, a living animal, and the name of Allah.',
      'Alcohol and other intoxicants are prohibited, including in cooking and small amounts.',
      'Seafood and stunning are matters of juristic difference.',
      'Doubt should be resolved by knowledge, not by obsessive suspicion.'
    ],
    sections: [
      {
        id: 'principle',
        heading: 'The Default Is Permissibility',
        html: P('Islamic law starts from the principle that things are lawful unless there is evidence to prohibit them. The Qur\'an says:') +
          Q('He it is Who created for you all that is on earth.', 'Qur\'an 2:29') +
          P('The Prophet ﷺ said: <em>“What Allah has made lawful in His Book is lawful, and what He has forbidden is forbidden, and what He has remained silent about is pardoned”</em> (narrated by al-Tirmidhi; graded hasan). This does not mean anything goes; it means the burden of proof lies with the prohibition, not with the permission.') +
          P('Food must also be <em>tayyib</em> — good, wholesome and not harmful. The same verse that permits lawful food pairs it with goodness (2:168). Lawful but harmful excess is not the Islamic ideal.')
      },
      {
        id: 'prohibitions',
        heading: 'The Explicit Prohibitions',
        html: P('The Qur\'an lists the main prohibited foods:') +
          Q('He has only forbidden to you dead animals, blood, the flesh of swine, and that which has been dedicated to other than Allah.', 'Qur\'an 2:173') +
          P('It also forbids:') +
          UL([
            '<strong>Animals slaughtered in the name of other than Allah</strong> (5:3).',
            '<strong>Strangled, beaten, fallen, gored or partly eaten animals</strong> that were not slaughtered properly (5:3).',
            '<strong>Intoxicants (<em>khamr</em>)</strong> (5:90).',
            '<strong>Predatory animals with fangs and birds with talons</strong>, according to authentic hadith (Sahih Muslim), though details vary by school.',
            '<strong>Donkeys</strong>, according to authentic reports, though the context is debated by some scholars.'
          ]) +
          P('The list is not a licence to prohibit everything unfamiliar. Foods not mentioned remain lawful unless they are harmful, impure, or obtained unlawfully.')
      },
      {
        id: 'slaughter',
        heading: 'Slaughter: The Conditions',
        html: P('For meat to be lawful, the animal must be alive at the time of slaughter and killed by a cut that severs the throat and the windpipe (and, in many schools, the two jugular veins). The name of Allah must be invoked. The Qur\'an says:') +
          Q('So eat of that over which the name of Allah has been mentioned, if you are believers in His verses.', 'Qur\'an 6:118') +
          P('The schools differ on details:') +
          UL([
            '<strong>Who may slaughter:</strong> Muslims, and according to most schools the People of the Book (Jews and Christians), based on 5:5.',
            '<strong>Invoking the name:</strong> the Hanafi, Shafi\'i and Hanbali schools generally require it; the Maliki school is more lenient if the slaughterer is a Muslim.',
            '<strong>Mechanical stunning:</strong> many contemporary scholars permit stunning if it does not kill the animal before slaughter; others discourage or prohibit it. Verify the certification and the process.',
            '<strong>Machine slaughter:</strong> depends on whether each animal is alive at the cut and the name is invoked; scholarly opinions vary.'
          ]) +
          NOTE('<strong>Certification matters, but it is not infallible.</strong> A logo is a claim, not a guarantee. If you have reliable knowledge that a product is mislabelled, avoid it. If you do not, do not burden yourself with suspicion.')
      },
      {
        id: 'alcohol',
        heading: 'Alcohol and Intoxicants',
        html: P('The Qur\'an prohibits intoxicants in stages, ending with a clear command:') +
          Q('O you who have believed, indeed, intoxicants, gambling, [sacrificing on] stone alters, and divining arrows are but defilement from the work of Satan, so avoid it that you may be successful.', 'Qur\'an 5:90') +
          P('The Prophet ﷺ said: <em>“Every intoxicant is khamr, and every khamr is haram”</em> (Sahih Muslim). This includes alcohol, drugs and any substance that removes reason.') +
          P('On alcohol in food and medicine:') +
          UL([
            'A dish whose intoxicating alcohol remains is generally prohibited. Alcohol that evaporates completely in cooking is discussed, but many scholars still advise avoidance.',
            'Vanilla extract and similar products often contain alcohol; scholars differ on trace amounts and on whether the amount is intoxicating. Follow a reliable local guidance.',
            'Medicines containing alcohol: necessity and harm are weighed; consult a scholar and a doctor. Do not refuse essential treatment without advice.',
            'Alcohol-based perfumes and sanitisers are generally treated differently from ingestion, though some scholars advise caution.'
          ])
      },
      {
        id: 'seafood',
        heading: 'Seafood and Other Differences',
        html: P('The Qur\'an permits the catch of the sea (5:96) and the Prophet ﷺ said about the sea: <em>“Its water is purifying and its dead are lawful”</em> (narrated by Abu Dawud, al-Tirmidhi and others; graded authentic by many). The schools differ:') +
          UL([
            '<strong>Hanafi:</strong> only fish are lawful; shellfish and other sea creatures are generally not.',
            '<strong>Maliki:</strong> all sea creatures are lawful.',
            '<strong>Shafi\'i and Hanbali:</strong> generally all sea creatures are lawful, with some details.'
          ]) +
          P('Other common differences include:') +
          UL([
            'Horse meat: permitted by most, disliked by some.',
            'Rabbit: permitted.',
            'Insects and additives derived from them: depend on the school and the amount.',
            'Cheese made with animal rennet: varies by school and source.',
            'Gelatine: depends on the source (pork, beef, fish) and the school\'s view on transformation.'
          ]) +
          P('These are real differences, not signs of laxity or extremism. Follow the school you follow and avoid judging others on details that scholars have disputed.')
      },
      {
        id: 'doubt',
        heading: 'Dealing with Doubt',
        html: P('The Prophet ﷺ said: <em>“Leave what makes you doubt for what does not make you doubt”</em> (narrated by al-Tirmidhi and al-Nasa\'i; graded authentic). He also said: <em>“Whoever avoids doubtful matters has protected his religion and his honour”</em> (Sahih al-Bukhari and Sahih Muslim).') +
          P('But doubt is not the same as obsessive suspicion. A practical approach:') +
          UL([
            'Distinguish a genuine concern (a known ingredient, a credible report) from a vague fear.',
            'Ask the manufacturer or a reliable certification body when it matters.',
            'Do not declare a product haram without evidence; that is a serious claim.',
            'Do not declare a prohibited product halal to please people; that is worse.',
            'If you accidentally consume something prohibited, do not despair; repent and continue.'
          ]) +
          P('The religion is built on ease and evidence. The goal is a conscience at peace, not a life of endless anxiety.')
      },
      {
        id: 'etiquette',
        heading: 'Etiquette, Gratitude and Hospitality',
        html: P('Lawful food is only half the picture; how we eat matters too. The Qur\'an commands:') +
          Q('So eat of the lawful and good food which Allah has provided for you, and be grateful for the favour of Allah, if it is He whom you worship.', 'Qur\'an 16:114') +
          P('The Prophet ﷺ taught several simple practices that turn a meal into an act of worship:') +
          UL([
            '<strong>Mention the name of Allah before eating</strong> and praise Him afterwards. If one forgets, the well-known supplication begins “Bismillah awwalahu wa akhirahu”.',
            '<strong>Eat with the right hand</strong> and from what is nearest, as the Prophet ﷺ instructed a young companion (Sahih al-Bukhari and Sahih Muslim).',
            '<strong>Do not criticise food.</strong> If he liked it he ate it; if not, he left it without complaint (Sahih al-Bukhari and Sahih Muslim).',
            '<strong>Share.</strong> The Prophet ﷺ said that food for two is enough for three, and food for three enough for four (Sahih al-Bukhari and Sahih Muslim).',
            '<strong>Do not waste.</strong> Take what you will finish and take leftovers seriously; the Qur\'an condemns extravagance (7:31).',
            '<strong>Accept hospitality graciously</strong> and do not interrogate a host about every ingredient. Ask politely if a genuine concern exists, then let it go.'
          ]) +
          P('These etiquettes protect relationships. A Muslim who turns every shared meal into an inspection of labels may win an argument and lose a neighbour. The balance is knowledge where it matters and graciousness everywhere else.')
      }
    ],
    faqs: [
      { q: 'Is kosher meat halal?', a: 'Most scholars permit meat slaughtered by the People of the Book (5:5), and kosher slaughter generally meets the requirement of a cut and invocation. Some scholars require the explicit name of Allah, which Jewish slaughter invokes differently. Follow your school.' },
      { q: 'Can I eat at a non-Muslim friend\'s house?', a: 'Yes, with care. Avoid known prohibited foods and ask what is being served. Hospitality and kindness are part of the Sunnah; suspicion is not.' },
      { q: 'Is alcohol in vanilla extract haram?', a: 'Scholars differ on trace alcohol in flavourings. Many permit small amounts that are not intoxicating; others avoid them. Follow reliable local guidance and do not obsess over trace amounts.' },
      { q: 'Are all shellfish haram?', a: 'The Hanafi school restricts lawful sea food to fish; the Maliki, Shafi\'i and Hanbali schools generally permit all sea creatures. This is a genuine difference.' },
      { q: 'What if I find out a restaurant was not halal?', a: 'Stop eating it once you know, seek forgiveness, and do not punish yourself. You are accountable for what you know and can reasonably verify, not for every hidden fact.' }
    ],
    bibliography: [
      'The Qur\'an — especially 2:29, 2:168–173, 5:3–5, 5:90–96 and 6:118–121.',
      'Sahih al-Bukhari and Sahih Muslim — books of food, slaughter and intoxicants.',
      'Al-Nawawi, <em>al-Majmu\'</em> — food and slaughter chapters.',
      'Ibn Qudamah, <em>al-Mughni</em> — comparative rulings on food.',
      'Contemporary fatwa bodies on stunning, additives and certification, read with a qualified scholar.'
    ],
    related: [
      ...relatedBase,
      { href: 'islamic-manners-and-character.html', label: 'Adab of eating and hospitality' },
      { href: 'beginners-guide-to-islam.html', label: 'Beginner\'s guide to Islam' }
    ]
  },

  {
    slug: 'environment-and-stewardship',
    title: 'Environment and Stewardship: The Islamic Case for Caring for the Earth',
    metaTitle: 'Environment and Stewardship: The Islamic Case for Caring for the Earth',
    description: 'The Quranic idea of humans as stewards (khalifah), balance (mizan), water and waste, kindness to animals, planting trees, moderation in consumption, and practical environmental action grounded in revelation.',
    category: 'Ethics & Society',
    readTime: '11 min',
    intro: P('The environment is not a secular afterthought in Islam. The Qur\'an presents the natural world as a sign of Allah, a trust, and a balanced order that humans are responsible for maintaining. This article gathers the scriptural foundations and turns them into practical habits, without pretending that every environmental policy is a religious obligation.') +
      P('It is an educational reflection, not a political programme. Muslims may differ on policies while agreeing on the underlying duty of stewardship.'),
    keyTakeaways: [
      'Humans are stewards (khalifah) accountable for the earth, not owners with unlimited licence.',
      'The Qur\'an describes creation as balanced (mizan) and warns against corruption.',
      'Waste is condemned; moderation is a Quranic principle.',
      'Kindness to animals and planting trees are acts of reward.',
      'Environmental harm is a moral issue, not only a technical one.',
      'Practical action should be proportionate, informed and sustained.'
    ],
    sections: [
      {
        id: 'khalifah',
        heading: 'Stewardship, Not Domination',
        html: P('The Qur\'an says:') +
          Q('And [mention] when your Lord said to the angels, “Indeed, I will make upon the earth a successive authority [khalifah].”', 'Qur\'an 2:30') +
          P('The word <em>khalifah</em> carries the sense of a successor or steward. Humans are placed on earth to manage it according to Allah\'s guidance, not to exploit it without limit. The Qur\'an also says:') +
          Q('It is He who has made you successors upon the earth and has raised some of you above others in degrees, that He may test you through what He has given you.', 'Qur\'an 6:165') +
          P('The test is not only in wealth and power but in how we use the resources entrusted to us. The earth belongs to Allah:') +
          Q('To Allah belongs whatever is in the heavens and whatever is on the earth.', 'Qur\'an 2:255') +
          P('This reframes ownership. A farmer, a company or a state may hold land, but the ultimate owner is Allah, and the holding carries duties to neighbours, future generations and other creatures.')
      },
      {
        id: 'mizan',
        heading: 'Balance and Corruption',
        html: P('The Qur\'an describes creation as measured and balanced:') +
          Q('And the heaven He raised and imposed the balance, that you not transgress within the balance.', 'Qur\'an 55:7–8') +
          P('It warns against spreading corruption on earth:') +
          Q('And do not cause corruption on the earth after its reformation.', 'Qur\'an 7:56') +
          P('And it links human actions to environmental disorder:') +
          Q('Corruption has appeared throughout the land and sea by [reason of] what the hands of people have earned, so He may let them taste part of [the consequence of] what they have done that perhaps they will return.', 'Qur\'an 30:41') +
          P('This verse is often read as a warning about moral and social corruption, but it also supports a broader ecological reading: human greed and excess damage the systems on which life depends. The Qur\'an does not separate “spiritual” from “material” responsibility.')
      },
      {
        id: 'water-waste',
        heading: 'Water, Waste and Moderation',
        html: P('The Qur\'an commands moderation in eating and drinking:') +
          Q('Eat and drink, but be not excessive. Indeed, He likes not those who commit excess.', 'Qur\'an 7:31') +
          P('The Prophet ﷺ was known for economy in water. A well-known report says he passed by Sa\'d while he was performing ablution and said: <em>“Do not waste water”</em>. Sa\'d asked, “Is there waste in ablution?” He replied: <em>“Yes, even if you are on the bank of a flowing river”</em> (narrated by Ibn Majah; graded hasan by some scholars).') +
          P('Whether or not one accepts the exact grading, the principle is clear and repeated: waste is ingratitude. Practical applications:') +
          UL([
            'Use only the water needed for wudu and ghusl; do not leave taps running.',
            'Fix leaks and report communal waste.',
            'Reduce food waste; plan meals and share surplus.',
            'Avoid single-use plastic where a durable alternative is easy.',
            'Repair rather than replace when repair is reasonable.'
          ]) +
          P('Moderation is not deprivation. The Qur\'an praises those who spend without extravagance and without stinginess (25:67).')
      },
      {
        id: 'animals',
        heading: 'Kindness to Animals',
        html: P('The Prophet ﷺ taught that a woman entered Paradise for giving water to a thirsty dog, and that a woman was punished for starving a cat (Sahih al-Bukhari and Sahih Muslim). He forbade branding animals on the face, separating a mother from her young unnecessarily, and overloading beasts.') +
          P('The Qur\'an says:') +
          Q('And there is no creature on [or within] the earth or bird that flies with its wings except [that they are] communities like you.', 'Qur\'an 6:38') +
          P('Animals are not mere machines. They have needs, fear and pain. Islamic slaughter rules themselves reflect mercy: a sharp blade, a swift cut, and no slaughter in front of other animals. Hunting for sport without need, animal fighting and neglect are contrary to this ethos.') +
          P('Pets, livestock and wildlife all fall under the duty of care. If you cannot meet an animal\'s needs, do not take it on.')
      },
      {
        id: 'trees',
        heading: 'Planting and Long-Term Thinking',
        html: P('The Prophet ﷺ said: <em>“If the Hour comes while one of you has a seedling in his hand, let him plant it”</em> (narrated by Ahmad and others; graded hasan). He also said that whoever plants a tree and a bird, human or animal eats from it, it is charity for him (Sahih al-Bukhari and Sahih Muslim).') +
          P('This is a striking image of long-term responsibility: act for the future even when you may not see the benefit. It supports:') +
          UL([
            'Planting and protecting trees and green spaces.',
            'Caring for soil, water and biodiversity.',
            'Supporting sustainable agriculture and avoiding needless destruction.',
            'Teaching children to value creation, not only to consume it.'
          ]) +
          P('Environmental action is not a substitute for worship, and worship is not an excuse for negligence. The two belong together.')
      },
      {
        id: 'practical',
        heading: 'Practical Steps for Individuals and Communities',
        html: UL([
          '<strong>Audit your consumption:</strong> food, water, energy, clothing and electronics. Identify one area to improve this month.',
          '<strong>Reduce, reuse, repair, recycle</strong> — in that order. Recycling is the last resort, not the first.',
          '<strong>Eat locally and seasonally</strong> where possible, and waste less. Food waste is both an ethical and an economic failure.',
          '<strong>Use energy wisely:</strong> switch off, insulate, choose efficient appliances, and avoid unnecessary travel.',
          '<strong>Support community projects:</strong> mosque gardens, tree planting, clean-ups and water conservation.',
          '<strong>Speak honestly:</strong> do not exaggerate scientific claims, and do not dismiss real problems for convenience.',
          '<strong>Teach and model:</strong> children learn stewardship by watching adults, not by lectures.'
        ]) +
          P('No single person can fix global systems. But the Qur\'an judges by intention and effort, not by whether the whole world changes. A consistent small habit is better than a dramatic gesture that ends in burnout.')
      },
      {
        id: 'balance',
        heading: 'Balancing Stewardship with Human Needs',
        html: P('Environmental ethics can become harsh or unrealistic. Islam recognises legitimate human needs: food, shelter, work, travel and comfort. The goal is not poverty or guilt but justice and moderation.') +
          P('Principles for balance:') +
          UL([
            'Prioritise harm reduction where trade-offs are unavoidable.',
            'Do not impose burdens on the poor in the name of ecology while ignoring corporate and state responsibility.',
            'Avoid both denial (“nothing is happening”) and despair (“nothing can be done”).',
            'Seek knowledge from qualified experts and be honest about uncertainty.',
            'Remember that the earth is a trust for future generations, not a final consumption.'
          ]) +
          P('The Prophet ﷺ lived simply, repaired his own sandals, and warned against extravagance. His example is a practical middle path: grateful use, not greedy waste.')
      },
      {
        id: 'community',
        heading: 'The Mosque, the Neighbourhood and Collective Duty',
        html: P('Stewardship is not only a private lifestyle. In Madinah the Prophet ﷺ established a mosque and a protected area (<em>harim</em>) around the settlement, and classical jurists developed rules for the protection of wells, rivers, trees and common pasture because these belong to the community, not to whoever reaches them first.') +
          P('That legacy suggests concrete communal duties:') +
          UL([
            'Mosques and Islamic centres can audit their own energy and water use, plant shade trees, and reduce disposable waste at gatherings.',
            'Communities can organise clean-ups, repair projects and shared tools rather than replacing items individually.',
            'Charity can support water access, sanitation and reforestation, especially where the poorest bear the heaviest environmental burden.',
            'Neighbours have rights in Islam; noise, smoke, rubbish and blocked drains are not only environmental nuisances but failures of neighbourliness.',
            'Public advocacy should be truthful and proportionate, avoiding both alarmism and complacency.'
          ]) +
          P('The Prophet ﷺ described the believers as a single body, and the Qur\'an commands cooperation in righteousness (5:2). Environmental care is one arena where that cooperation becomes visible: a shared well, a clean street, a tree that outlives the planter.')
      }
    ],
    faqs: [
      { q: 'Is environmentalism a religious duty?', a: 'Stewardship, avoiding waste, kindness to animals and moderation are clearly grounded in the Qur\'an and Sunnah. Specific policies are matters of judgement on which Muslims may differ.' },
      { q: 'Does Islam forbid eating meat?', a: 'No. Meat is lawful, and the Prophet ﷺ ate it. Islam regulates slaughter and encourages moderation and kindness to animals; it does not require vegetarianism.' },
      { q: 'Is climate change a Muslim issue?', a: 'Caring for creation and avoiding harm are Muslim concerns. The scientific details and policy responses are matters for experts; the moral duty to reduce waste and protect the vulnerable is clear.' },
      { q: 'What is the ruling on wasting water in wudu?', a: 'Waste is condemned even with abundant water. Use what is needed and avoid extravagance. The exact amount is not fixed; the principle is moderation.' },
      { q: 'Can I keep a pet?', a: 'Yes, with proper care, food, water, space and veterinary attention. Neglect is a serious wrong. Some animals require specific permits or are unsuitable for domestic keeping; follow local law and animal welfare guidance.' }
    ],
    bibliography: [
      'The Qur\'an — especially 2:30, 6:38, 6:165, 7:31, 7:56, 25:67, 30:41 and 55:7–9.',
      'Sahih al-Bukhari and Sahih Muslim — kindness to animals and planting trees.',
      'Ibn Majah and Ahmad — reports on wasting water and planting (gradings noted in the text).',
      'Al-Nawawi, <em>Riyad al-Salihin</em> — chapters on moderation and mercy.',
      'Contemporary Islamic environmental ethics, read alongside peer-reviewed environmental science.'
    ],
    related: [
      ...relatedBase,
      { href: 'islamic-manners-and-character.html', label: 'Adab and moderation' },
      { href: 'islamic-history-civilization.html', label: 'Islamic civilisation and learning' }
    ]
  }
];
