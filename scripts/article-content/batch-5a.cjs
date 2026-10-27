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
    slug: 'business-ethics-and-honest-trade',
    title: 'Business Ethics and Honest Trade in Islam: Trust, Truthfulness and Fair Measure',
    metaTitle: 'Business Ethics in Islam: Honest Trade, Truthfulness and Fair Measure',
    description: 'Why trade is lawful worship, the duty of truthful disclosure, honest weights and measures, mutual consent, riba in brief, hoarding and market abuse, advertising, modern business dilemmas, and a practical ethics checklist.',
    category: 'Law & Ethics',
    readTime: '13 min',
    intro: P(`Trade is the ordinary setting in which most Muslims handle money, power and trust. The Qur'an does not treat it as a worldly distraction from religion. It names trade as the lawful alternative to interest (2:275), commands believers to disperse in the land and seek Allah's bounty after prayer (62:10), and acknowledges people who travel and trade while remembering Him (73:20).`) +
      P(`That is exactly why the ethical stakes are high. A merchant handles other people's needs, ignorance, urgency and trust. The Prophet ﷺ described the honest merchant as standing with the prophets, the truthful and the martyrs, and he warned that whoever cheats is not one of us. This article sets out the main principles of honest trade and applies them to ordinary modern dilemmas. It is an educational overview, not a fatwa for a specific transaction.`),
    keyTakeaways: [
      `Trade is lawful and can be an act of worship when it is honest and just.`,
      `Truthfulness, disclosure of defects and accurate measure are obligations, not marketing extras.`,
      `A sale requires mutual consent, a known subject matter and a known price.`,
      `Hoarding, price manipulation and exploitation of crisis are injustices.`,
      `Riba is prohibited in both giving and receiving; modern structures need scholarly review.`,
      `When a transaction is unclear, stop and ask before the money moves.`
    ],
    sections: [
      {
        id: 'why-trade-matters',
        heading: 'Why Trade Matters',
        html: P(`The Qur'an's permission of trade is stated in the same verse that prohibits interest:`) +
          Q(`Allah has permitted trade and has forbidden interest.`, `Qur'an 2:275`) +
          P(`The contrast is deliberate. Money may grow through exchange, work and risk, not through the mere passage of time on a loan. Trade is also presented as a route to Allah's bounty, not a rival to worship. After the Friday prayer, believers are told to disperse and seek from His bounty while remembering Him (62:10). The Qur'an describes people who travel in the land seeking Allah's bounty and others who strive in His cause, without treating either as second-class (73:20).`) +
          P(`The Prophet ﷺ honoured lawful work. He said that no one eats better food than that which he eats from the work of his own hands (Sahih al-Bukhari 2072), and he told a man who asked for charity to take a rope, gather firewood and sell it rather than beg (Sahih al-Bukhari 1470). Work is dignified; dependency is not a virtue when capacity exists. But the same tradition refuses to separate economic life from accountability: every transaction is witnessed by Allah, and the market is not a moral free zone.`)
      },
      {
        id: 'truthfulness-and-deception',
        heading: 'Truthfulness and the Prohibition of Deception',
        html: P(`The foundation of trade is truthful speech. The Qur'an commands believers to fear Allah and speak words of appropriate justice (33:70), and it forbids mixing truth with falsehood or concealing the truth knowingly (2:42). In a sale, this means describing the goods, the price, the defects and the conditions accurately.`) +
          P(`The Prophet ﷺ said: “The truthful, trustworthy merchant will be with the prophets, the truthful and the martyrs” (reported by al-Tirmidhi 1209 and Ibn Majah 2139; scholars have discussed its chain, and many grade it hasan). He also said: “Whoever cheats is not one of us” (Sahih Muslim 101). The report behind the second statement is concrete: he passed a heap of food, put his hand into it and found wet grain beneath dry grain, and told the seller to place the wet part on top so buyers could see it.`) +
          P(`Concealment is not limited to food. A used car with a hidden accident history, a course that promises results it cannot deliver, a review written by the seller, a subscription that hides its renewal price, and a “free” trial that requires a card are modern forms of the same problem. The buyer's ignorance is being converted into profit.`) +
          P(`The Prophet ﷺ also warned that whoever sells a defective item without disclosing its defect carries its blame (reported by Ibn Majah). Disclosure may reduce the price; concealment transfers the loss to someone who did not consent to it.`)
      },
      {
        id: 'honest-measure',
        heading: 'Honest Weights, Measures and Pricing',
        html: P(`The Qur'an returns to weights and measures with unusual insistence. It commands full measure and weight in justice (6:152), tells believers to weigh with an even balance because it is best in result (17:35), and warns those who take in full but give short: “Woe to those who give less than due” (83:1–3). It even places the command in the cosmic order: “And establish weight in justice and do not make deficient the balance” (55:9).`) +
          P(`The Prophet Shu'ayb confronted a trading people with the same message: give full measure and weight, do not deprive people of their due, and do not spread corruption on the earth (7:85; 11:85). The repetition across prophets shows that commercial fraud is not a minor sin.`) +
          P(`Modern short measure rarely looks like a rigged scale. It looks like net weight that excludes packaging while the price suggests otherwise, hidden service fees added at checkout, a “discount” that raises the original price, shrinkflation without disclosure, or a loan whose real cost is buried in a headline rate. The principle is constant: the other party must be able to know what they are paying and what they are receiving.`)
      },
      {
        id: 'mutual-consent',
        heading: 'Mutual Consent and Known Terms',
        html: P(`The Qur'an permits consuming wealth only through trade based on mutual consent (4:29), and it forbids consuming property unjustly or using bribery and litigation to take what is not yours (2:188). Consent is not a signature obtained by pressure, confusion or a forty-page document nobody can understand.`) +
          P(`Classical law therefore requires a known subject matter, a known price, capacity to contract and a meeting of offer and acceptance. It prohibits gharar, excessive uncertainty, because uncertainty is a form of hidden risk that one party may exploit. The Prophet ﷺ forbade the sale of gharar (Sahih Muslim 1513) and forbade selling what one does not possess (reported by Abu Dawud and al-Tirmidhi).`) +
          P(`The law also protects the right to reconsider. The Prophet ﷺ said that the buyer and seller have the option to cancel as long as they have not separated (Sahih al-Bukhari 2109; Sahih Muslim 1532), with detailed rules in each school. Modern consumer law often provides cooling-off periods for the same reason: a decision made under pressure should not be irreversible by default. Bait-and-switch, fake urgency and hidden auto-renewal strain the requirement of genuine consent.`)
      },
      {
        id: 'riba-in-brief',
        heading: 'Riba in Brief',
        html: P(`Riba is the clearest economic prohibition in the Qur'an. The Qur'an contrasts it with trade (2:275), warns of war from Allah and His Messenger for those who persist (2:279), condemns the doubled and multiplied interest of pre-Islamic practice (3:130), and rejects the idea that interest increases wealth with Allah (30:39). The Prophet ﷺ cursed the one who consumes riba, the one who pays it, the one who records it and the two witnesses (Sahih Muslim 1598).`) +
          P(`The practical minimum is to understand the contract before signing, to separate genuine service charges from charges for the use of money over time, and to seek a qualified scholar or a reputable Islamic finance adviser for anything substantial. The finance article in this library treats the subject in more detail.`)
      },
      {
        id: 'monopoly-and-market-conduct',
        heading: 'Hoarding, Manipulation and Fair Competition',
        html: P(`A market can be technically free and still unjust. The Prophet ﷺ said: “No one hoards except a sinner” (Sahih Muslim 1605), targeting the person who withholds essential goods to force prices up. He forbade meeting caravans outside town to buy cheaply before sellers know the market price, and he forbade bidding against a brother to inflate a price without intending to buy (reported in the two Sahihs).`) +
          P(`These rules protect information and fair access. They do not forbid profit, innovation or competitive advantage. They forbid manufacturing another person's ignorance or desperation and then charging for it. During a shortage, the difference between a higher price and exploitation is whether the increase reflects real cost and risk or the seller's control over a necessity.`) +
          P(`The Qur'an also warns against envy at another's provision (4:32). A merchant who spends his energy destroying a competitor instead of improving his own service is not practising the justice the Qur'an commands. Competition in quality, service and price is healthy; sabotage, false rumours and coordinated price-fixing are not. Where a business holds a dominant position, the duty is heavier: a monopoly that crushes suppliers or charges what the market cannot bear is a public harm.`)
      },
      {
        id: 'advertising-and-consumer-protection',
        heading: 'Advertising, Data and Consumer Protection',
        html: P(`Advertising is speech, and the same rules of truthfulness apply. A claim about a product should be true, clear and not misleading by omission. Fake reviews, paid endorsements presented as personal opinions, edited before-and-after images and invented scarcity are forms of deception, even when they are legal in a particular country.`) +
          P(`Consumer protection is part of justice, not a modern intrusion. Warranties, refunds, safety standards and clear pricing exist because information and power are unequal. A Muslim seller should meet the standard even when the customer cannot enforce it. The Prophet ﷺ was generous in selling, buying and demanding repayment, and he asked Allah's mercy for the one who is easy-going in these matters (Sahih al-Bukhari 2076).`) +
          P(`Data has become part of the transaction. Collecting personal information without meaningful consent, hiding how it will be used, or locking customers into a service they cannot leave are modern harms that the classical prohibitions of deception and unjust consumption still address. A privacy policy that nobody can understand is not informed consent. When a product causes harm, recalls, honest communication and compensation are part of repair, not public relations.`)
      },
      {
        id: 'modern-dilemmas',
        heading: 'Modern Business Dilemmas',
        html: P(`Several contemporary business models raise questions that need case-by-case review:`) +
          UL([
            `<strong>Dropshipping with undisclosed suppliers</strong> and unrealistic delivery promises, which can combine gharar and deception.`,
            `<strong>Multi-level marketing</strong> whose main income comes from recruiting rather than selling a real product.`,
            `<strong>Cryptocurrency trading and speculative derivatives</strong>, where uncertainty, leverage and gambling-like features require specialist analysis.`,
            `<strong>Alcohol, tobacco, gambling, adult content and interest-based finance</strong>, where the product itself may be impermissible to sell or promote.`,
            `<strong>Conventional insurance and mortgages</strong>, which scholars treat differently depending on structure and necessity.`,
            `<strong>Consulting or marketing for a business</strong> whose core activity is haram.`
          ]) +
          P(`These are not answered by a slogan. The honest approach is to describe the actual contract, identify the prohibited element if any, ask whether a permissible alternative exists, and consult a scholar who understands both the industry and the local law. A fatwa given without the facts is not a fatwa.`)
      },
      {
        id: 'practical-ethics',
        heading: 'A Practical Ethics Checklist',
        html: P(`Before a transaction, a seller or buyer can ask:`) +
          UL([
            `Do I understand exactly what is being sold, for what price, and on what conditions?`,
            `Have I disclosed every defect or risk that would change the other person's decision?`,
            `Is the other party free to say no, or am I using urgency, authority or confusion?`,
            `Does the product itself harm people in a way Islam prohibits?`,
            `Would I accept this contract if I were on the other side?`,
            `Have I written down anything that is deferred, borrowed or conditional?`
          ]) +
          P(`Honest trade is not a tax on profit. It is the condition that makes profit legitimate. A business built on concealed defects, trapped customers or exploited workers may grow quickly, but the Qur'an's question is not how large the balance sheet became. It is whether the wealth was consumed justly and whether the covenant was kept.`)
      }
    ],
    faqs: [
      { q: 'Is profit maximisation permitted?', a: 'Profit is lawful, but not at any cost. The means must be lawful, the product must not be haram, deception and riba are prohibited, and the seller must disclose defects. Maximising profit through exploitation is not a religious value.' },
      { q: 'Is dropshipping halal?', a: 'It can be, but the model often creates gharar and deception: unclear supplier, unknown delivery time, and a seller who does not own or inspect the goods. It becomes problematic when the buyer is misled or when the seller cannot fulfil the contract. Review the actual terms with a scholar.' },
      { q: 'Can I sell something that the buyer may use for haram?', a: 'The general rule is that selling a product for a prohibited use is not permissible when the seller knows the purpose. Context matters: a knife, a car or a phone has many lawful uses. The clearer the intended haram use, the stronger the prohibition.' },
      { q: 'Are credit card rewards riba?', a: 'Rewards programmes vary. If the card charges interest on balances, carrying a balance involves riba. Rewards funded by merchant fees or paid in full each month are analysed differently by scholars. Do not treat a reward as a justification for an interest-bearing contract.' }
    ],
    bibliography: [
      `The Qur'an — especially 2:42, 2:188, 2:275–279, 3:130, 4:29, 4:32, 6:152, 7:85, 9:105, 11:85, 17:35, 30:39, 33:70, 55:9, 62:10, 73:20 and 83:1–3. Translations adapted from Saheeh International unless stated.`,
      `Sahih al-Bukhari — lawful earnings (2072), the man who was given a rope (1470), the option of the buyer and seller (2109), and generosity in trade (2076).`,
      `Sahih Muslim — cheating (101), gharar (1513), hoarding (1605), riba (1598), and the option of the buyer and seller (1532).`,
      `Sunan al-Tirmidhi and Sunan Ibn Majah — the truthful merchant (Tirmidhi 1209; Ibn Majah 2139) and the disclosure of defects.`,
      `Sunan Abi Dawud — the prohibition of selling what one does not possess.`,
      `Al-Ghazali, <em>Ihya' 'Ulum al-Din</em>, Kitab al-Kasb — classical treatment of earning, intention and the ethics of trade.`,
      `Ibn Taymiyyah, <em>al-Hisbah fi al-Islam</em> — market regulation and the duty of enjoining good.`,
      `Contemporary Islamic finance works, read with a qualified scholar for specific contracts.`
    ],
    related: [
      ...relatedBase,
      { href: 'islamic-finance-and-riba.html', label: 'Islamic finance and riba: a source-based introduction' },
      { href: 'contracts-and-promises-in-islam.html', label: 'Contracts and promises in Islam' },
      { href: 'workers-rights-in-islam.html', label: 'Workers’ rights and fair employment' },
      { href: 'halal-and-haram-food.html', label: 'Halal and haram food: principles and practice' }
    ]
  },

  {
    slug: 'contracts-and-promises-in-islam',
    title: 'Contracts and Promises in Islam: Fulfilling the Covenant in Word and Deed',
    metaTitle: 'Contracts and Promises in Islam: Fulfilling the Covenant',
    description: 'The Quranic command to fulfil contracts, why promise-keeping is a marker of faith, the elements of a valid contract, writing and witnesses, lawful conditions, broken oaths, breach and repair, digital contracts, and a practical checklist.',
    category: 'Law & Ethics',
    readTime: '12 min',
    intro: P(`A contract is a promise with consequences. It may be a marriage, a job, a lease, a loan, a business partnership or a click on a website. Islamic law treats these commitments as moral acts, not merely technical instruments. The Qur'an opens Surah al-Ma'idah with a command that covers the whole of life: “O you who have believed, fulfil all contracts” (5:1).`) +
      P(`This article explains the Quranic and Prophetic teaching on covenants, the basic elements of a valid contract, the discipline of writing things down, what to do when circumstances change, and how the same principles apply to digital agreements. It is an educational guide, not a fatwa or legal advice on a specific dispute.`),
    keyTakeaways: [
      `Fulfilling contracts is a Quranic obligation, not a courtesy.`,
      `Promise-keeping is presented as a sign of faith and hypocrisy as its opposite.`,
      `A valid contract needs clarity, capacity, mutual consent and a lawful subject matter.`,
      `Deferred obligations should be written and witnessed.`,
      `Conditions are generally binding unless they permit what is forbidden or forbid what is required.`,
      `Breach should be repaired honestly, through negotiation and, where needed, arbitration or law.`
    ],
    sections: [
      {
        id: 'covenant-in-the-quran',
        heading: 'The Covenant in the Qur’an',
        html: P(`The Qur'an uses several related words: <em>'aqd</em> (contract, knot), <em>'ahd</em> (covenant), <em>mithaq</em> (solemn pledge) and <em>wa'd</em> (promise). Together they describe a life in which words create obligations.`) +
          Q(`And fulfil the covenant. Indeed, the covenant is that about which one will be questioned.`, `Qur'an 17:34`) +
          P(`The command is repeated with emphasis on the act of committing oneself: “And fulfil the covenant of Allah when you have taken it, and do not break oaths after their confirmation while you have made Allah, over you, a witness” (16:91). The Qur'an warns against treating oaths as a means of deceit between groups, and it uses the image of a woman who unravels her spun thread after it was strong (16:92).`) +
          P(`Believers are described as those “who are to their trusts and their promises attentive” (23:8). The Qur'an also says that Allah loves the righteous who fulfil their promise (3:76), and it lists promise-keeping among the marks of true righteousness (2:177). These verses place reliability at the centre of religious identity. A person who prays and fasts but treats agreements as disposable has separated worship from character.`)
      },
      {
        id: 'why-keeping-promises',
        heading: 'Why Promise-Keeping Matters',
        html: P(`The Prophet ﷺ made promise-keeping one of the defining signs of a believer. He said: “The signs of a hypocrite are three: when he speaks he lies, when he makes a promise he breaks it, and when he is entrusted he betrays” (Sahih al-Bukhari 33; Sahih Muslim 59). The wording is stark because broken promises destroy the trust on which families, markets and communities depend.`) +
          P(`Trust is also a form of <em>amanah</em>, a trust for which a person is accountable. The Qur'an commands that trusts be rendered to their owners and that judgment be given with justice (4:58), and it forbids betraying Allah, the Messenger or one's trusts knowingly (8:27). A contract is a trust placed in the hands of both parties.`) +
          P(`The Prophet ﷺ was known as <em>al-Amin</em>, the trustworthy, before he received revelation. His opponents entrusted him with their goods even while opposing his message. That reputation was not a public-relations strategy; it was a life of consistent reliability. Keeping a promise is hardest when it becomes inconvenient, when the alternative is attractive, or when the other party can no longer enforce it.`)
      },
      {
        id: 'elements-of-a-contract',
        heading: 'What Makes a Contract Valid',
        html: P(`Classical jurists analysed contracts through a set of conditions. The details differ between schools, but the core is widely shared:`) +
          UL([
            `<strong>Offer and acceptance</strong> — a clear expression of consent by both parties, in words, writing or a recognised digital equivalent.`,
            `<strong>Capacity</strong> — the parties are sane, adult and free to act, with special protections for minors and the vulnerable.`,
            `<strong>Known subject matter</strong> — what is being sold, hired or exchanged must be identifiable and deliverable.`,
            `<strong>Known price or consideration</strong> — the cost and terms must be clear enough to prevent dispute.`,
            `<strong>Lawful purpose</strong> — the contract cannot require or facilitate what Islam prohibits.`,
            `<strong>Absence of excessive uncertainty</strong> — gharar that one party could exploit is prohibited.`
          ]) +
          P(`The Qur'an permits trade only by mutual consent (4:29) and forbids consuming wealth unjustly (2:188). The Prophet ﷺ forbade the sale of gharar (Sahih Muslim 1513) and the sale of what one does not possess (reported by Abu Dawud and al-Tirmidhi). A contract that depends on a hidden gamble is not made valid by a confident handshake.`) +
          P(`Formality is not an end in itself. A simple sale of bread is a contract, even without paper. But as the stakes, duration and uncertainty rise, the need for clarity rises with them.`)
      },
      {
        id: 'writing-and-witnesses',
        heading: 'Writing, Witnesses and Evidence',
        html: P(`The longest verse in the Qur'an is devoted to documenting debt:`) +
          Q(`O you who have believed, when you contract a debt for a specified term, write it down. And let a scribe write it between you in justice... And bring to witness two witnesses from among your men.`, `Qur'an 2:282`) +
          P(`The verse continues with detailed guidance on the scribe, the witnesses, the weak, the young and the traveller, and it ends by urging that testimony not be concealed. The purpose is not bureaucracy. It is to protect the creditor from loss, the debtor from false claims, and the community from disputes that poison relationships.`) +
          P(`The next verse provides for a pledge when a scribe is unavailable on a journey, and it commands the one entrusted with a deposit to discharge the trust and fear Allah (2:283). Even in a low-documentation setting, the trust remains.`) +
          P(`Modern equivalents include written contracts, receipts, bank records, emails, signed PDFs and auditable digital timestamps. A family loan of a few hundred pounds may seem too small for paperwork, but undocumented family loans are a common source of inheritance disputes and estrangement. Writing it down is an act of care, not distrust.`) +
          NOTE(`<strong>Practical note:</strong> a document is only useful if it is understandable and stored safely. Record the amount, the date, the repayment terms, the currency and the identities of the parties. Give a copy to each side.`)
      },
      {
        id: 'conditions-and-fairness',
        heading: 'Conditions, Penalties and Fairness',
        html: P(`The Prophet ﷺ said that Muslims are bound by their conditions, except a condition that makes lawful what is forbidden or forbids what is lawful (reported by al-Tirmidhi and Abu Dawud). Conditions are therefore part of the contract, not an optional appendix.`) +
          P(`This has consequences for modern clauses. A late-payment penalty that operates as a charge for the use of money over time raises riba concerns; a genuine administrative cost or a charitable penalty clause may be analysed differently. A non-compete clause that prevents a former employee from earning a living indefinitely may be unjust. A clause that waives a consumer's statutory rights may be legally ineffective and morally suspect.`) +
          P(`Force majeure, price-adjustment clauses and termination rights are attempts to allocate risk. They are permissible when they are clear, negotiated and not used to trap the weaker party. The Qur'an's standard is justice, not the cleverness of the drafting: “Be persistently standing firm for Allah, witnesses in justice, and do not let the hatred of a people prevent you from being just” (5:8).`) +
          P(`Where a contract is genuinely unfair, the response is not automatically to walk away after benefiting from it. Renegotiation, lawful termination, compensation and, where necessary, adjudication are the orderly routes.`)
      },
      {
        id: 'promises-oaths-and-expiation',
        heading: 'Promises, Oaths and Expiation',
        html: P(`Not every promise is a contract, but every promise carries moral weight. The Qur'an criticises those who say what they do not do (61:2–3) and commands truthfulness in speech (33:70). A repeated pattern of casual promises teaches others that one's word is worthless.`) +
          P(`An oath is a stronger form. The Qur'an provides an expiation for breaking an oath: feeding ten needy people from the average of what one feeds one's family, or clothing them, or freeing a slave; and if one cannot afford that, fasting three days (5:89). The expiation does not make oath-breaking trivial. It is a remedy for a failure, not a licence.`) +
          P(`Some promises are conditional on ability. If a person promises to help with a task and then falls seriously ill, the obligation is not absolute in the way a commercial debt is. The honest course is to communicate early, explain the change, and offer an alternative where possible. Silence is what turns a reasonable inability into a betrayal.`) +
          P(`Promises made under pressure, or to do something unlawful, are not binding in the same way. A promise to commit fraud, to conceal a crime or to marry under coercion does not create a religious obligation to perform the sin. The general principle remains: no obedience to a creature in disobedience to Allah.`)
      },
      {
        id: 'breach-and-repair',
        heading: 'Breach, Dispute and Repair',
        html: P(`Breach happens. The question is what follows. The Qur'an commands reconciliation between believers and warns against transgression (49:9), and it praises those who conduct their affairs by consultation (42:38). A dispute is not an excuse to abandon justice.`) +
          P(`A workable sequence is:`) +
          UL([
            `Put the facts in writing, including dates, payments, messages and the specific clause relied on.`,
            `Speak directly and privately before involving a wider audience.`,
            `Separate the remedy you need from the punishment you feel like inflicting.`,
            `Consider mediation or arbitration by a trusted person with relevant expertise.`,
            `Use the courts where necessary; a legal right is not cancelled by a religious obligation to be fair.`,
            `If you are the party at fault, admit it, compensate promptly and do not hide behind procedure.`
          ]) +
          P(`The Prophet ﷺ warned against the delay of a wealthy debtor (Sahih al-Bukhari 2404; Sahih Muslim 1564), and he praised ease in demanding repayment (Sahih al-Bukhari 2076). Those two reports together describe the balance: the creditor may insist on the right, but should not humiliate; the debtor must not evade. Apology without restitution is incomplete where money is involved, and restitution without apology may repair the account but not the relationship.`)
      },
      {
        id: 'digital-contracts',
        heading: 'Digital Contracts and Clickwrap',
        html: P(`Online agreements are contracts. A click, a tick box or a continued use of a service can create obligations, and the same requirements of clarity and consent apply. The medium changes the evidence, not the ethics.`) +
          P(`Problems arise when consent is manufactured: pre-ticked boxes, buried renewal terms, a “free” service that takes ownership of user content, or a unilateral right to change the price or the rules at any time. The Qur'anic prohibition of deception and unjust consumption applies to a dark pattern as much as to a false statement in a shop.`) +
          P(`Users also have duties. Reading the key terms, checking the renewal date, keeping confirmation emails and not sharing an account in breach of the licence are part of honest dealing. “I did not read it” may be true, but it does not always describe what a reasonable person should have done. Smart contracts raise new questions about code errors and irreversible transfers, but the technology cannot make an unjust bargain just.`)
      },
      {
        id: 'practical-checklist',
        heading: 'A Practical Checklist',
        html: P(`Before making or accepting a commitment:`) +
          UL([
            `Write down who owes what, to whom, by when, and in what currency.`,
            `Identify the conditions that would change the obligation, and state them clearly.`,
            `Check that the subject matter and the price are known, not left to one party's discretion.`,
            `Ask whether any term requires or facilitates something haram.`,
            `Keep copies of the signed document, receipts and relevant messages.`,
            `If circumstances change, communicate before the deadline rather than after it.`,
            `If you have broken a promise, repair what can be repaired and ask forgiveness for what cannot.`
          ]) +
          P(`Reliability is a form of worship that costs little in the easy case and everything in the hard case. The Qur'an's standard is not a vague intention to do better. It is the fulfilment of what one has undertaken, with justice and mercy.`)
      }
    ],
    faqs: [
      { q: 'Is a verbal contract valid?', a: 'In principle, yes, when the essential elements are clear and the parties consent. Writing is strongly recommended, and the Qur\'an commands it for deferred debts (2:282), because it prevents dispute. Some contracts, such as marriage in many jurisdictions, require specific formalities under local law.' },
      { q: 'Do I have to keep a promise I made under pressure?', a: 'Pressure can affect whether consent was genuine. A promise to do something unlawful is not binding. For ordinary promises made reluctantly but freely, the general duty remains, though a person may explain the difficulty and seek release. Specific cases need a qualified scholar.' },
      { q: 'What if the other party breached first?', a: 'A breach may give you a right to terminate, claim compensation or withhold performance under the contract and the law. It does not give you a right to deceive or to take more than you are owed. Document the breach and seek advice before acting.' },
      { q: 'Are terms and conditions binding if I did not read them?', a: 'They can be, especially where the key terms were clearly presented and you chose to continue. But terms that are hidden, unfair or unlawful may be unenforceable, and a Muslim should not rely on a technicality to escape a fair obligation. Read the important clauses before agreeing.' },
      { q: 'What is the expiation for a broken oath?', a: 'The Qur\'an specifies feeding ten needy people from the average of what you feed your family, or clothing them, or freeing a slave; if you cannot afford that, fasting three days (5:89). This is a remedy for a broken oath, not permission to break promises casually.' }
    ],
    bibliography: [
      `The Qur'an — especially 2:177, 2:282–283, 3:76, 4:29, 4:58, 5:1, 5:8, 5:89, 8:27, 16:91–92, 17:34, 23:8, 33:70, 42:38, 49:9 and 61:2–3. Translations adapted from Saheeh International unless stated.`,
      `Sahih al-Bukhari — the signs of a hypocrite (33), the delay of a wealthy debtor (2404), and ease in trade and repayment (2076).`,
      `Sahih Muslim — the signs of a hypocrite (59), gharar (1513), and the delay of a wealthy debtor (1564).`,
      `Sunan al-Tirmidhi and Sunan Abi Dawud — the binding nature of lawful conditions.`,
      `Al-Nawawi, <em>Riyad al-Salihin</em> — chapters on truthfulness, promise-keeping and trust.`,
      `Ibn Qudamah, <em>al-Mughni</em> — the elements of contract, conditions and options.`,
      `A qualified scholar or lawyer for the interpretation of a specific contract or dispute.`
    ],
    related: [
      ...relatedBase,
      { href: 'business-ethics-and-honest-trade.html', label: 'Business ethics and honest trade' },
      { href: 'debt-and-loans-in-islam.html', label: 'Debt and loans in Islam' },
      { href: 'islamic-inheritance-basics.html', label: 'Islamic inheritance: rights and shares' },
      { href: 'marriage-and-family-in-islam.html', label: 'Marriage and family in Islam' }
    ]
  },

  {
    slug: 'debt-and-loans-in-islam',
    title: 'Debt and Loans in Islam: Borrowing, Repayment and Relief',
    metaTitle: 'Debt and Loans in Islam: Borrowing, Repayment and Relief',
    description: 'The seriousness of debt, the permission to borrow, qard hasan, the prohibition of riba, documenting loans, repayment and delay, hardship and forgiveness, lending ethics, collateral and guarantees, modern debt, and a practical plan.',
    category: 'Law & Ethics',
    readTime: '13 min',
    intro: P(`Debt is one of the few subjects the Prophet ﷺ sought refuge from in the same breath as sin. It can be a mercy that allows a family to buy a home, start a business or survive illness, and it can become a chain that outlives the borrower. Islamic teaching neither romanticises poverty nor treats borrowing as shameful. It insists that the transaction be honest, documented, repayable and just.`) +
      P(`This article explains the Quranic and Prophetic framework, the difference between a loan and a sale, the prohibition of riba, the ethics of lending and collection, and what to do when repayment becomes impossible. It is an educational overview, not a fatwa on a particular mortgage, credit card or bankruptcy.`),
    keyTakeaways: [
      `Borrowing is permitted, but debt is a serious trust and should not be entered casually.`,
      `A loan is a kindness, not a profit-making transaction; riba is prohibited.`,
      `Deferred debts should be written down with clear terms and witnesses.`,
      `Repaying on time is an obligation; delaying when able is injustice.`,
      `A creditor must grant time to a debtor in genuine hardship and is encouraged to forgive.`,
      `Guarantees and collateral are permitted, but they must not become instruments of exploitation.`
    ],
    sections: [
      {
        id: 'seriousness-of-debt',
        heading: 'The Seriousness of Debt',
        html: P(`The Prophet ﷺ taught his companions to seek refuge from debt. In a well-known supplication he asked Allah to protect him from sin and from being overwhelmed by debt, and he explained that a person in debt may speak and then lie, and promise and then break the promise (reported in Sahih al-Bukhari). The point is not that every borrower is dishonest. It is that financial pressure distorts speech, judgment and relationships.`) +
          P(`Another report states that the soul of a believer is suspended by his debt until it is paid (al-Tirmidhi 1078; Ibn Majah 2413; graded hasan by many scholars). Unpaid debt is not a private matter that disappears at the funeral.`) +
          P(`At the same time, Islam does not forbid borrowing. The Prophet ﷺ himself borrowed and pledged his armour to a Jewish man for barley (Sahih al-Bukhari 2513), and he said that whoever takes people's wealth intending to repay it, Allah will repay on his behalf (Sahih al-Bukhari 2387). The intention to repay is the dividing line between a loan and a wrong. Borrow only when necessary, borrow an amount one can realistically repay, and treat the obligation as a trust from the first day.`)
      },
      {
        id: 'borrowing-and-qard-hasan',
        heading: 'Borrowing and the Beautiful Loan',
        html: P(`The Qur'an speaks of lending to Allah a “goodly loan” (<em>qard hasan</em>), promising to multiply it many times over (2:245; 57:11; 64:17). The expression is metaphorical: what is given to a needy person is received by Allah as a loan of faithfulness.`) +
          P(`The borrower's side of the beautiful loan is equally serious. The Qur'an praises those who fulfil their promises and warns against consuming wealth unjustly. A person who borrows with no intention to repay, or who hides assets while claiming poverty, has turned a kindness into a theft.`)
      },
      {
        id: 'riba-and-the-cost-of-money',
        heading: 'Riba and the Cost of Money',
        html: P(`The Qur'an prohibits riba in the strongest terms. It contrasts interest with trade (2:275), warns those who persist of war from Allah and His Messenger (2:279), condemns the doubled and multiplied interest of the pre-Islamic practice (3:130), and rejects the belief that interest increases wealth with Allah (30:39). The Prophet ﷺ cursed the one who consumes riba, the one who pays it, the one who records it and the two witnesses (Sahih Muslim 1598).`) +
          P(`Riba is not simply “any charge”. A seller may charge a profit; a service provider may charge a fee; a lender may recover genuine documented costs in some analyses. The prohibited element is an increase charged for the mere passage of time on a loan of money, or an exchange of like commodities that is unequal or delayed. Modern products mix these elements. A credit card may combine an annual fee, a merchant fee and a monthly interest charge; a mortgage may be structured as a conventional loan or as a diminishing partnership; a buy-now-pay-later plan may contain a late fee that functions as a penalty or as interest. Each needs its own analysis, and it is not honest to relabel interest as a “service charge” and assume the ruling changes.`)
      },
      {
        id: 'write-it-down',
        heading: 'Write It Down',
        html: P(`The Qur'an devotes its longest verse to debt documentation:`) +
          Q(`O you who have believed, when you contract a debt for a specified term, write it down. And let a scribe write it between you in justice... And bring to witness two witnesses from among your men.`, `Qur'an 2:282`) +
          P(`The verse addresses the amount, the term, the scribe, the witnesses and the vulnerability of the weak. It ends by commanding that testimony not be concealed. The purpose is to protect both sides: the creditor from denial, the debtor from exaggeration, and the community from litigation.`) +
          P(`A useful record includes the principal, the currency, the date, the repayment schedule, any security, the identities and signatures of the parties, and what happens if a payment is missed. For a family loan, a simple signed note and a bank transfer reference are enough to prevent most disputes. For a business loan, a lawyer should draft the document.`)
      },
      {
        id: 'repayment-and-delay',
        heading: 'Repayment, Delay and the Duty to Pay',
        html: P(`Repayment is a religious obligation, not a favour. The Prophet ﷺ said that the delay of a wealthy debtor is injustice (Sahih al-Bukhari 2404; Sahih Muslim 1564). A person who can pay but chooses to postpone is wronging the creditor, even if the creditor is patient or embarrassed to ask.`) +
          P(`The borrower should prioritise the debt, communicate before a payment is missed, and avoid new borrowing to service old borrowing without a realistic plan. If a payment date is genuinely impossible, the earlier the conversation, the more options remain.`) +
          P(`The creditor should ask politely, in private, and without humiliation. The Prophet ﷺ praised the one who is easy-going when selling, buying and demanding repayment (Sahih al-Bukhari 2076). Reminding a debtor of one's generosity in public is a form of injury that the Qur'an warns against (2:264). A voluntary gift at repayment is different from a contractual increase: if the borrower chooses, without prior condition or expectation, to give a little extra as thanks, scholars generally permit it. If the extra is required by the contract, it is riba.`)
      },
      {
        id: 'hardship-and-forgiveness',
        heading: 'Hardship, Insolvency and Forgiveness',
        html: P(`The Qur'an gives a clear instruction for the debtor who cannot pay:`) +
          Q(`And if someone is in hardship, then let there be postponement until a time of ease. But if you give from your right as charity, then it is better for you, if you only knew.`, `Qur'an 2:280`) +
          P(`This is not optional courtesy. It is a command to the creditor. The next verse reminds both parties of the Day when every soul will be compensated and none will be wronged (2:281).`) +
          P(`The Prophet ﷺ said that whoever relieves a believer of a distress in this world, Allah will relieve him of a distress on the Day of Resurrection (Sahih Muslim 2699). He also warned against the creditor who refuses to give time to a debtor in difficulty. Insolvency is not a moral failure: a business can fail, a person can lose a job, and an illness can consume savings. Running away, hiding assets or lying about one's means is a different matter. Forgiving a debt is a voluntary act of great reward, but it should not be used to pressure a creditor who cannot afford it.`)
      },
      {
        id: 'lending-ethics',
        heading: 'The Ethics of Lending',
        html: P(`A lender holds power. Islamic teaching places several restraints on it:`) +
          UL([
            `<strong>No riba:</strong> the loan may not generate a contractual increase for the passage of time.`,
            `<strong>No exploitation of urgency:</strong> a person in crisis should not be charged more because they have no alternative.`,
            `<strong>No humiliation:</strong> the debt should not be used to control, shame or gossip about the borrower.`,
            `<strong>No hidden conditions:</strong> any security, guarantee or fee must be disclosed and understood.`,
            `<strong>No unlawful purpose:</strong> one may not lend money for gambling, alcohol, fraud or other haram.`,
            `<strong>No indefinite entanglement:</strong> a clear repayment date protects both parties.`
          ]) +
          P(`The Qur'an praises those who lend without expecting repayment from people, seeking only Allah's countenance (2:272; 2:264). That spirit does not cancel the contract; it shapes the manner in which the contract is enforced. A lender who uses a debtor's need to demand favours, silence or loyalty has turned a financial relationship into a form of control. The Qur'an's prohibition of consuming wealth unjustly (4:29) covers that too.`)
      },
      {
        id: 'collateral-and-guarantees',
        heading: 'Collateral, Guarantees and Sureties',
        html: P(`Islamic law permits security for a debt. The Qur'an mentions a pledge (<em>rahn</em>) when a scribe is unavailable on a journey (2:283), and the Prophet ﷺ pledged his armour for barley (Sahih al-Bukhari 2513). A pledge gives the creditor a right over specified property if the debt is not paid, but the property remains a trust and any surplus must be returned.`) +
          P(`A guarantee (<em>kafalah</em>) is also permitted. A guarantor takes on the obligation to pay if the debtor cannot, and the Prophet ﷺ said that the guarantor is liable (reported in the Sunan). Guaranteeing a loan is a serious commitment, not a ceremonial signature. A person should know the amount, the term and the risk before agreeing.`) +
          P(`Both collateral and guarantees can become unjust when the creditor takes more than the debt, charges excessive fees, or uses the threat of seizure to extract unrelated concessions. The objective is security, not punishment. Where the law requires registration or a written security document, a Muslim should comply: an unregistered pledge may be religiously intended but legally unenforceable, and the resulting dispute can harm both parties.`)
      },
      {
        id: 'modern-debt',
        heading: 'Modern Debt: Mortgages, Cards and Buy Now, Pay Later',
        html: P(`Most Muslims today encounter debt through products that did not exist in the classical period. The principles still apply, but the analysis is detailed:`) +
          UL([
            `<strong>Mortgages:</strong> a conventional interest-bearing mortgage contains riba. Islamic alternatives use structures such as diminishing partnership or murabaha, and their details need review.`,
            `<strong>Credit cards:</strong> paying the full balance monthly may avoid interest, but the card agreement and the merchant fees still need analysis. Carrying a balance at interest is riba.`,
            `<strong>Buy now, pay later:</strong> the key questions are whether a fee is charged for delay, whether the price is fixed at the outset, and whether the provider is acting as a seller or a lender.`,
            `<strong>Student loans:</strong> the structure varies by country. Some are income-contingent and subsidised; others are commercial. The terms matter.`,
            `<strong>Business loans:</strong> conventional interest is riba; partnership and trade-based structures are the alternatives.`,
            `<strong>National and corporate debt:</strong> a Muslim may be a citizen, employee or investor in a system that uses interest without personally approving every transaction. The level of involvement and the specific role matter.`
          ]) +
          P(`This is not a fatwa on any of these products. A person should ask a scholar who knows the local market, and should not rely on a generic website answer for a thirty-year commitment. A lender that offers “interest-free” branding may still include fees that function as riba; read the total cost, not the label.`)
      },
      {
        id: 'practical-plan',
        heading: 'A Practical Plan for Debt',
        html: P(`For a person carrying debt, a disciplined plan is better than shame:`) +
          UL([
            `List every debt: creditor, balance, interest rate, minimum payment and due date.`,
            `Separate essential debts from discretionary ones, and stop adding new discretionary debt.`,
            `Build a bare-bones monthly budget that still covers food, housing, medicine and transport.`,
            `Contact creditors early if a payment will be missed; ask for a realistic arrangement in writing.`,
            `Prioritise the highest-cost debt while maintaining minimum payments on the rest, unless a scholar advises otherwise.`,
            `Sell unused assets, take available work and avoid “debt consolidation” that adds new interest and fees.`,
            `Seek zakat, charitable hardship funds or family help where genuinely needed, without deception.`,
            `Make dua, but do not treat dua as a substitute for a budget.`
          ]) +
          P(`If the burden has become unmanageable, seek professional debt advice and, where available, a formal insolvency process. Hiding from creditors, borrowing from one to pay another without a plan, and lying to family are not solutions; they multiply the harm.`)
      }
    ],
    faqs: [
      { q: 'Is all interest riba?', a: 'The classical prohibition covers an increase charged for the mere passage of time on a loan of money, and unequal or delayed exchange of like commodities. Modern fees and products need individual analysis. A fee that is genuinely for a service may differ from interest, but relabelling does not change the substance. Ask a qualified scholar.' },
      { q: 'Can I lend money to a family member?', a: 'Yes, and it can be a beautiful loan. Write down the amount and repayment terms, keep a record of payments, and do not attach interest or humiliating conditions. Clear documentation protects the relationship as well as the money.' },
      { q: 'What if I cannot repay a loan?', a: 'Speak to the creditor before the deadline, explain the situation honestly, and propose a realistic plan. The Qur\'an commands the creditor to grant time to a debtor in hardship (2:280). Do not hide assets or disappear. Seek advice and, where needed, a formal insolvency process.' },
      { q: 'Does debt prevent a person from entering Paradise?', a: 'The reports warn that unpaid debt is a serious matter and that the soul may be suspended until it is paid. Scholars explain this as a warning, not a final verdict that a debtor is doomed. Repentance, repayment, and the creditor\'s forgiveness are the way forward. Debt is not a reason to despair of Allah\'s mercy.' }
    ],
    bibliography: [
      `The Qur'an — especially 2:245, 2:264, 2:272, 2:275–281, 2:282–283, 3:130, 4:29, 30:39, 57:11, 64:17 and 65:7. Translations adapted from Saheeh International unless stated.`,
      `Sahih al-Bukhari — the Prophet's pledge of armour (2513), the intention to repay (2387), the delay of a wealthy debtor (2404), and ease in demanding repayment (2076).`,
      `Sahih Muslim — riba (1598), the delay of a wealthy debtor (1564), and relieving a believer's distress (2699).`,
      `Sunan al-Tirmidhi and Sunan Ibn Majah — the soul suspended by debt (Tirmidhi 1078; Ibn Majah 2413).`,
      `Al-Nawawi, <em>al-Majmu' Sharh al-Muhadhdhab</em> — chapters on qard, rahn and kafalah.`,
      `Ibn Qudamah, <em>al-Mughni</em> — loans, security and guarantees.`,
      `A qualified scholar or Islamic finance adviser for a specific modern product.`
    ],
    related: [
      ...relatedBase,
      { href: 'islamic-finance-and-riba.html', label: 'Islamic finance and riba' },
      { href: 'business-ethics-and-honest-trade.html', label: 'Business ethics and honest trade' },
      { href: 'contracts-and-promises-in-islam.html', label: 'Contracts and promises in Islam' },
      { href: 'islamic-inheritance-basics.html', label: 'Islamic inheritance: debts and shares' }
    ]
  },

  {
    slug: 'workers-rights-in-islam',
    title: 'Workers’ Rights and Fair Employment in Islam: Wages, Dignity and Justice',
    metaTitle: 'Workers’ Rights in Islam: Wages, Dignity and Justice',
    description: 'The dignity of work, the wage contract, fair pay, workload and safety, respect and non-discrimination, vulnerable workers, employee duties, disputes and collective action, and a practical checklist for employers and workers.',
    category: 'Ethics & Society',
    readTime: '12 min',
    intro: P(`Work is how most people spend most of their waking life. Islamic teaching treats it as a field of worship, justice and trust, not as a neutral transaction between capital and labour. The Qur'an commands that workers be paid fairly, the Prophet ﷺ warned that he would be the opponent on the Day of Judgment of an employer who takes full work and withholds the wage, and the law of contracts applies to the employment relationship as much as to a sale.`) +
      P(`This article sets out the rights of workers and the duties of employers, the responsibilities of employees, and the difficult cases: delayed wages, unsafe work, discrimination, migrant labour, gig work and collective action. It is an educational overview, not a fatwa on a specific employment dispute.`),
    keyTakeaways: [
      `Work is dignified, and lawful earnings are praised in the Qur'an and Sunnah.`,
      `The wage and the task should be clear before the work begins.`,
      `Wages must be paid fairly and promptly; withholding them is a grave injustice.`,
      `Employers must not impose work beyond capacity or expose workers to preventable harm.`,
      `Workers are entitled to dignity and equal treatment, regardless of origin, gender or status.`,
      `Employees owe honesty, diligence and confidentiality, but not obedience to wrongdoing.`
    ],
    sections: [
      {
        id: 'work-and-dignity',
        heading: 'The Dignity of Work',
        html: P(`The Qur'an presents work as part of the purpose of life: “And say, ‘Do work, for Allah will see your deeds, and so will His Messenger and the believers’” (9:105). It commands believers to disperse in the land and seek Allah's bounty (62:10), and it acknowledges those who travel for trade and those who strive in His cause (73:20).`) +
          P(`The Prophet ﷺ honoured manual labour. He said that no one eats better food than that which he eats from the work of his own hands, and that the Prophet Dawud used to eat from the work of his hands (Sahih al-Bukhari 2072). He told a man who asked for charity to take a rope and gather firewood rather than depend on others (Sahih al-Bukhari 1470).`) +
          P(`The Qur'an says that a person will have nothing except what he strives for (53:39), and it warns against envy of another's provision (4:32). Yet the Qur'an does not measure a person's worth by their job. The most noble are the most righteous (49:13). A cleaner, a driver, a nurse and a professor stand before Allah on the same footing of dignity.`)
      },
      {
        id: 'the-wage-contract',
        heading: 'The Wage Contract',
        html: P(`An employment relationship is a contract, and the general rules of contract apply: clarity, consent, capacity and a lawful subject matter. The Prophet ﷺ said that whoever employs a worker should inform him of his wage (reported by Abu Dawud and al-Nasa'i; scholars discuss its grading). The purpose is to prevent the exploitation that comes from ambiguity.`) +
          P(`The Qur'an commands that deferred obligations be written down (2:282). An employment contract should state the role, the pay, the hours, the place of work, the leave, the notice period and the grounds for termination. A verbal agreement can be valid, but a written one protects both sides when memory or circumstances change.`) +
          P(`The Prophet ﷺ said: “I will be the opponent of three on the Day of Resurrection: a man who gives a pledge in My name and then betrays it, a man who sells a free person and consumes the price, and a man who employs a worker and takes full work from him but does not give him his wage” (Sahih al-Bukhari 2227). The third category is an employer, and the warning is addressed to anyone who controls another person's labour. A contract that requires the worker to lie, to harm others or to work in an unlawful industry is not made permissible by consent; the worker may refuse that specific task while honouring the lawful parts of the agreement.`)
      },
      {
        id: 'fair-pay',
        heading: 'Fair Pay and Prompt Payment',
        html: P(`Justice is the foundation of wages. The Qur'an commands that trusts be rendered to their owners and that judgment be given with justice (4:58), and it commands justice and good conduct while forbidding oppression (16:90). A wage that is technically agreed but leaves a full-time worker unable to meet basic needs is a moral problem even if the contract is legally enforceable.`) +
          P(`The Prophet ﷺ said: “Give the worker his wage before his sweat dries” (reported by Ibn Majah 2443; many scholars grade it hasan). The image is vivid: payment is not a favour granted when convenient, but an obligation that should follow the work promptly.`) +
          P(`Delayed wages are a common abuse. Some employers use delay as a form of control, knowing that the worker cannot afford to leave or complain. The Prophet ﷺ called the delay of a wealthy debtor injustice (Sahih al-Bukhari 2404; Sahih Muslim 1564), and the principle applies with greater force to wages, which are the worker's means of survival. Deductions must be lawful, transparent and proportionate: fining a worker for taking legally protected leave, charging for tools that the employer should provide, or withholding a final salary to prevent the worker from leaving are forms of exploitation, not management.`)
      },
      {
        id: 'workload-safety-and-rest',
        heading: 'Workload, Safety and Rest',
        html: P(`The Qur'an says that Allah does not burden a soul beyond its capacity (2:286) and that He does not charge a soul except according to what He has given it (65:7). These are theological statements about human limits, and they have practical consequences for employers who design impossible workloads.`) +
          P(`The Prophet ﷺ said about servants and workers: “They are your brothers. Allah has placed them under your authority. So whoever has his brother under his authority, let him feed him from what he eats, clothe him from what he wears, and let him not burden him with work that overcomes him; and if you burden him, then help him” (reported in Sahih al-Bukhari and Sahih Muslim). The wording addresses the master-servant relationship of the time, but the principle extends to any employment relationship.`) +
          P(`Safety is part of justice. An employer who knows of a hazard and does nothing is exposing a worker to harm for profit. The Qur'an forbids throwing oneself into destruction (2:195) and commands that one not be killed or harmed unjustly. Labour law, inspections and safety equipment are modern instruments for an old obligation.`) +
          P(`Rest is not laziness. Sleep deprivation, unpaid overtime and the expectation of constant availability damage health, family life and the quality of work. A sustainable pace is better for the worker and the employer. Where the law provides for annual leave, sick leave, parental leave and a maximum working week, a Muslim employer should meet those standards and not use religious language to demand more than a person can bear.`)
      },
      {
        id: 'dignity-and-respect',
        heading: 'Dignity and Non-Discrimination',
        html: P(`The Qur'an forbids mocking, insulting and name-calling (49:11), and it grounds human dignity in a shared origin: “O mankind, indeed We have created you from male and female and made you peoples and tribes that you may know one another. Indeed, the most noble of you in the sight of Allah is the most righteous of you” (49:13).`) +
          P(`A workplace that tolerates racial slurs, sexual harassment, religious mockery or the humiliation of junior staff is not a neutral environment. It is a place where the Qur'anic command of justice is being violated. Employers have a duty to prevent it, investigate complaints fairly and protect complainants from retaliation. The Prophet ﷺ treated his companions and servants with respect, helped with household tasks and did not consider any lawful work beneath him. A manager who believes that low pay entitles him to contempt has misunderstood both Islam and management.`)
      },
      {
        id: 'vulnerable-workers',
        heading: 'Vulnerable Workers',
        html: P(`Some workers are especially exposed: migrants whose residency depends on an employer, domestic workers who live in the home, gig workers classified as independent contractors, and children in informal labour. The Qur'an's command not to consume wealth unjustly (4:29) and not to wrong others (2:279) applies with particular force where the worker has little power to complain.`) +
          P(`Confiscating a worker's passport, withholding wages until a contract is renewed, charging recruitment fees that trap the worker in debt, or confining a domestic worker to the house without rest or contact with family are forms of control that no contract can justify.`)
      },
      {
        id: 'employee-duties',
        heading: 'The Duties of the Employee',
        html: P(`Rights come with responsibilities. An employee owes the employer honest work, care with property, confidentiality where appropriate, and courtesy to colleagues and customers. The Qur'an commands that trusts be discharged (4:58) and forbids betrayal of trusts (8:27). Time theft, falsified expenses, taking supplies, leaking confidential information and using the job for personal gain are breaches of trust.`) +
          P(`The Prophet ﷺ said: “Whoever cheats is not one of us” (Sahih Muslim 101). That applies to an employee who claims to work while doing nothing, as much as to a merchant who hides a defect.`) +
          P(`Diligence does not mean servility. An employee may decline an unlawful instruction, report genuine wrongdoing through the proper channel, and leave a job that cannot be performed honestly. Whistleblowing on serious harm can be a duty, but it should be proportionate and, where possible, use internal remedies first. A worker should also give notice, hand over responsibly and avoid sabotaging the employer on the way out. Where an employer is genuinely oppressive, the employee is not required to remain indefinitely: the Qur'an says that the earth is spacious and that those who emigrate for Allah's cause will find refuge and abundance (4:100).`)
      },
      {
        id: 'disputes-and-collective-action',
        heading: 'Disputes and Collective Action',
        html: P(`Employment disputes are inevitable. The Qur'an commands reconciliation between believers (49:9) and praises those who conduct their affairs by consultation (42:38). A first attempt should be direct, private and documented. If that fails, mediation, a labour tribunal or a union representative may be appropriate.`) +
          P(`Collective bargaining and strikes are contested in Islamic law, and the answer depends on the context, the law and the nature of the work. What is clear is that workers may organise to seek justice, that employers may not use coercion to prevent lawful organising, and that a strike should not deliberately harm innocent third parties or violate a lawful agreement without justification. The Prophet ﷺ said that the believers are like a single body: when one part aches, the whole body responds with wakefulness and fever (Sahih Muslim 2586). A society that ignores the suffering of its workers is not a healthy body.`) +
          P(`Where the law is unjust, Muslims may work peacefully for reform. Where the law is just, it should be used. Violence, sabotage and intimidation are not part of a legitimate claim for justice.`)
      },
      {
        id: 'practical-checklist',
        heading: 'A Practical Checklist',
        html: P(`For employers:`) +
          UL([
            `State the role, wage, hours, leave and notice terms in writing before work begins.`,
            `Pay on time, in full, and provide a payslip that explains deductions.`,
            `Provide safe equipment, training and rest, and do not demand more than a person can sustain.`,
            `Treat workers with dignity; investigate harassment and discrimination promptly.`,
            `Do not confiscate documents, withhold final pay or use debt to control a worker.`,
            `If the business cannot pay, communicate early and honestly; do not disappear.`
          ]) +
          P(`For workers:`) +
          UL([
            `Understand your contract before signing, and keep a copy.`,
            `Do the work honestly and protect the employer's lawful property and information.`,
            `Record hours, wages and agreed changes; ask for confirmation in writing.`,
            `Raise problems early, in private and with evidence.`,
            `Refuse unlawful instructions and seek advice if you are asked to compromise your religion or integrity.`,
            `Know your legal rights and the local bodies that can enforce them.`
          ]) +
          P(`The employment relationship is a trust. When it is built on clarity, fair pay and mutual respect, it becomes a source of barakah for the employer, the worker and the community. When it is built on exploitation, the harm does not stay inside the workplace.`)
      }
    ],
    faqs: [
      { q: 'Is it permissible to ask for a raise?', a: 'Yes. Asking for fair compensation is not greed. Prepare evidence of your work, the market rate and your needs, and ask respectfully. The employer should consider the request justly. Deception or pressure is not required.' },
      { q: 'Can workers go on strike?', a: 'This is a contested area. Workers may organise and bargain collectively, but a strike must be assessed against local law, the employment contract and the harm to innocent third parties. It should be a last resort after negotiation. Consult a scholar and a union or legal adviser.' },
      { q: 'What if my employer delays my wages?', a: 'Wages are a debt and must be paid promptly. Ask in writing, keep records, and use the lawful complaint mechanisms available. The Prophet ﷺ warned that he would be the opponent of an employer who withholds wages. Do not resort to theft or sabotage.' },
      { q: 'Can I work in an industry that has some haram elements?', a: 'It depends on your role and the nature of the business. Working directly in riba, alcohol, gambling, adult content or fraud is not permissible. Ancillary roles in mixed businesses require detailed analysis. Seek a qualified scholar who understands the specific job.' }
    ],
    bibliography: [
      `The Qur'an — especially 2:195, 2:279, 2:286, 4:29, 4:32, 4:58, 4:100, 8:27, 9:105, 16:90, 42:38, 49:9, 49:11, 49:13, 53:39, 62:10, 65:7 and 73:20. Translations adapted from Saheeh International unless stated.`,
      `Sahih al-Bukhari — earnings from one's own hands (2072), the man who was given a rope (1470), the opponent of the unjust employer (2227), and the delay of a wealthy debtor (2404).`,
      `Sahih Muslim — cheating (101), the believers as one body (2586), and the delay of a wealthy debtor (1564).`,
      `Sunan Ibn Majah — the wage before the sweat dries (2443), graded hasan by many scholars.`,
      `Sunan Abi Dawud and Sunan al-Nasa'i — informing the worker of the wage.`,
      `Al-Ghazali, <em>Ihya' 'Ulum al-Din</em>, Kitab al-Kasb — the ethics of earning and employment.`,
      `Ibn Taymiyyah, <em>al-Hisbah fi al-Islam</em> — justice in the market and the duty to restrain harm.`,
      `Local labour law and a qualified legal adviser for a specific dispute.`
    ],
    related: [
      ...relatedBase,
      { href: 'business-ethics-and-honest-trade.html', label: 'Business ethics and honest trade' },
      { href: 'debt-and-loans-in-islam.html', label: 'Debt and loans in Islam' },
      { href: 'contracts-and-promises-in-islam.html', label: 'Contracts and promises in Islam' },
      { href: 'islamic-finance-and-riba.html', label: 'Islamic finance and riba' }
    ]
  }
];
