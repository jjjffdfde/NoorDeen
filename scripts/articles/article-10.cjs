/**
 * Article 10: Zakat: A Detailed Educational and Calculation Guide
 */
const { buildArticleHtml } = require('./template.cjs');

function getArticle10() {
  const tocItems = [
    { id: "meaning-and-status", title: "The Theological Meaning and Obligation of Zakat" },
    { id: "conditions-of-obligation", title: "Conditions That Make Zakat Obligatory" },
    { id: "nisab-thresholds", title: "Understanding the Nisab Standards (Gold vs Silver)" },
    { id: "eligible-wealth-categories", title: "Wealth Categories Subject to Zakat" },
    { id: "deductible-liabilities", title: "Deductible Liabilities & Modern Debt Rules" },
    { id: "calculation-formula", title: "The Step-by-Step Calculation Formula (2.5% vs 2.577%)" },
    { id: "eight-recipients", title: "The Eight Quranic Recipient Categories (Masarif)" },
    { id: "zakat-vs-fitr-sadaqah", title: "Zakat al-Mal vs Zakat al-Fitr vs Voluntary Sadaqah" },
    { id: "calculator-methodology", title: "NoorDeen Calculator Methodology & Transparent Assumptions" },
    { id: "key-takeaways", title: "Summary & Annual Preparation Worksheet" }
  ];

  const relatedTools = [
    { icon: "💰", title: "Nisab Zakat Calculator", url: "../zakat-calculator.html" },
    { icon: "🏛️", title: "Five Pillars of Islam", url: "../pillars.html" },
    { icon: "📅", title: "Lunar Hijri Calendar", url: "../calendar.html" },
    { icon: "🌙", title: "Eid & Fitrana Guide", url: "../eid-guide.html" }
  ];

  const faqItems = [
    {
      question: "Should I calculate my Nisab using the Gold standard or the Silver standard?",
      answer: "In classical jurisprudence, both gold (20 Mithqals = 85g / 87.48g) and silver (200 Dirhams = 595g / 612.36g) possessed comparable purchasing power. In the modern economy, silver has depreciated significantly compared to gold. The majority of contemporary classical scholars (including the Hanafi Fiqh Academy and major fatwa councils) recommend using the <strong>Silver Nisab</strong> for liquid cash, bank savings, and general commercial wealth because its lower threshold ensures that more struggling families receive assistance (<em>Anfa' li-al-Fuqara'</em>). If you only possess gold jewelry and no cash or silver, the Gold Nisab applies."
    },
    {
      question: "Is personal gold jewelry worn by women subject to Zakat?",
      answer: "This is a classical matter of recognized difference among the four Sunni schools: (1) The <strong>Hanafi school</strong> holds that all gold and silver jewelry is subject to Zakat annually, whether worn regularly or stored, based on general Quranic verses and hadiths; (2) The <strong>Maliki, Shafi'i, and Hanbali schools</strong> hold that customary personal jewelry worn for reasonable adornment (without extravagance or investment hoarding) is exempt from Zakat, analogous to personal clothing or transportation. Both positions are backed by evidence; consult your conscience and local scholars."
    },
    {
      question: "How do I calculate Zakat on long-term home mortgages or student loans?",
      answer: "Contemporary Fiqh councils (including the OIC Islamic Fiqh Academy and AAOIFI) differentiate between immediate short-term debts and long-term multi-decade liabilities. You may deduct the currently due monthly installments for the upcoming 12-month period, but you cannot deduct the entire 30-year outstanding mortgage balance against your liquid savings. Deducting the full 30-year principal would eliminate the Zakat liability of millions of affluent homeowners, defeating the social purpose of wealth purification."
    },
    {
      question: "Can I give my Zakat to my parents, children, or spouse?",
      answer: "No. Zakat cannot be given to vertical direct ascendants (parents, grandparents) or direct descendants (children, grandchildren), nor can a husband give Zakat to his wife, because one is already legally and morally obligated under Shariah to provide for their financial maintenance (Nafaqah). However, Zakat may legitimately be given to other relatives in poverty—such as impoverished brothers, sisters, uncles, aunts, or in-laws—which carries double reward: charity and upholding family ties (Sunan an-Nasa'i #2582)."
    }
  ];

  const contentHtml = `
    <!-- Introduction -->
    <div style="background: var(--color-surface); padding: 24px; border-radius: 12px; margin-bottom: 36px; border-left: 4px solid var(--color-primary);">
      <p style="font-size: 1.1rem; line-height: 1.7; margin: 0; color: var(--color-text-main);">
        Islam envisions a society where extreme poverty is systematically dismantled through institutional solidarity. The divine mechanism that achieves this is <strong>Al-Zakāh</strong> (الزَّكَاة) — the third pillar of Islam. Neither an optional charitable donation nor a punitive secular income tax, Zakat is a precise, mathematically defined wealth purification levy that redistributes economic vitality from the financially stable to the vulnerable.
      </p>
    </div>

    <!-- Section 1 -->
    <section id="meaning-and-status" style="margin-bottom: 40px;">
      <h2 style="font-size: 1.75rem; color: var(--color-primary); border-bottom: 2px solid var(--color-border-subtle); padding-bottom: 8px;">
        1. The Theological Meaning and Obligation of Zakat
      </h2>
      <p style="line-height: 1.8; color: var(--color-text-main);">
        Linguistically, <em>Zakāh</em> carries two profound roots: <strong>Ṭahārah</strong> (purification from greed, miserliness, and illicit wealth) and <strong>Namā'</strong> (growth, blessings, and spiritual expansion). When a Muslim disburses Zakat, their remaining wealth is not diminished; rather, it is divinely protected and blessed.
      </p>

      <blockquote style="background: var(--color-card); border-left: 4px solid var(--color-gold); padding: 18px 24px; margin: 20px 0; border-radius: 0 8px 8px 0;">
        <div style="font-family: 'Amiri', 'Traditional Arabic', serif; font-size: 1.45rem; direction: rtl; text-align: right; color: var(--color-primary); line-height: 2;">
          خُذْ مِنْ أَمْوَالِهِمْ صَدَقَةً تُطَهِّرُهُمْ وَتُزَكِّيهِم بِهَا وَصَلِّ عَلَيْهِمْ ۖ إِنَّ صَلَاتَكَ سَكَنٌ لَّهُمْ ۗ وَاللَّهُ سَمِيعٌ عَلِيمٌ
        </div>
        <div style="margin-top: 10px; font-style: italic; color: var(--color-text-muted); font-size: 0.95rem;">
          "Take, [O Muhammad], from their wealth a charity by which you purify them and cause them increase, and invoke [Allah's blessings] upon them. Indeed, your invocations are reassurance for them. And Allah is Hearing and Knowing."
        </div>
        <div style="margin-top: 4px; font-size: 0.85rem; color: var(--color-gold); font-weight: 600;">
          — Surah At-Tawbah (9:103)
        </div>
      </blockquote>

      <p style="line-height: 1.8; color: var(--color-text-main);">
        In more than twenty-eight verses across the Quran, the obligation of establishing prayer (<em>Aqīmū al-Ṣalāh</em>) is paired immediately with giving Zakat (<em>Ātū al-Zakāh</em>). The two commands form the twin wings of faith: Salah rectifies the human relationship with God, while Zakat rectifies the human relationship with society.
      </p>
    </section>

    <!-- Section 2 -->
    <section id="conditions-of-obligation" style="margin-bottom: 40px;">
      <h2 style="font-size: 1.75rem; color: var(--color-primary); border-bottom: 2px solid var(--color-border-subtle); padding-bottom: 8px;">
        2. Conditions That Make Zakat Obligatory
      </h2>
      <p style="line-height: 1.8; color: var(--color-text-main);">
        Zakat is not assessed on every individual, nor on every piece of property. To become legally binding under Islamic law, six conditions must converge:
      </p>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin: 24px 0;">
        <div class="card" style="padding: 18px; border-top: 3px solid var(--color-primary);">
          <h4 style="margin: 0 0 6px 0; color: var(--color-primary); font-size: 1.05rem;">1. Islam & Freedom</h4>
          <p style="margin: 0; font-size: 0.88rem; color: var(--color-text-muted); line-height: 1.6;">
            The individual must be a Muslim. Non-Muslim citizens are not subject to Zakat and cannot be compelled to fulfill Islamic worship rites.
          </p>
        </div>

        <div class="card" style="padding: 18px; border-top: 3px solid var(--color-primary);">
          <h4 style="margin: 0 0 6px 0; color: var(--color-primary); font-size: 1.05rem;">2. Complete Ownership (Milk Tāmm)</h4>
          <p style="margin: 0; font-size: 0.88rem; color: var(--color-text-muted); line-height: 1.6;">
            The wealth must be under the full, unencumbered possession and control of the owner. Public property, state funds, and endowment trusts (*Waqf*) are exempt.
          </p>
        </div>

        <div class="card" style="padding: 18px; border-top: 3px solid var(--color-primary);">
          <h4 style="margin: 0 0 6px 0; color: var(--color-primary); font-size: 1.05rem;">3. Beyond Basic Needs (Ḥājah Aṣliyyah)</h4>
          <p style="margin: 0; font-size: 0.88rem; color: var(--color-text-muted); line-height: 1.6;">
            Wealth designated for basic survival—one's primary personal residence, personal family car, work tools, furniture, and daily food—is strictly exempt from Zakat.
          </p>
        </div>

        <div class="card" style="padding: 18px; border-top: 3px solid var(--color-primary);">
          <h4 style="margin: 0 0 6px 0; color: var(--color-primary); font-size: 1.05rem;">4. Reaching the Niṣāb</h4>
          <p style="margin: 0; font-size: 0.88rem; color: var(--color-text-muted); line-height: 1.6;">
            The total qualifying surplus wealth must equal or exceed the minimum threshold (Nisab) established by the Prophet ﷺ.
          </p>
        </div>

        <div class="card" style="padding: 18px; border-top: 3px solid var(--color-primary);">
          <h4 style="margin: 0 0 6px 0; color: var(--color-primary); font-size: 1.05rem;">5. Freedom from Debt</h4>
          <p style="margin: 0; font-size: 0.88rem; color: var(--color-text-muted); line-height: 1.6;">
            Immediate debts due right away are deducted from gross assets before calculating the net Zakat base.
          </p>
        </div>

        <div class="card" style="padding: 18px; border-top: 3px solid var(--color-primary);">
          <h4 style="margin: 0 0 6px 0; color: var(--color-primary); font-size: 1.05rem;">6. The Lunar Year (Ḥawl)</h4>
          <p style="margin: 0; font-size: 0.88rem; color: var(--color-text-muted); line-height: 1.6;">
            One full Islamic lunar year (approx. 354 days) must elapse while wealth remains consistently above the Nisab threshold.
          </p>
        </div>
      </div>
    </section>

    <!-- Section 3 -->
    <section id="nisab-thresholds" style="margin-bottom: 40px;">
      <h2 style="font-size: 1.75rem; color: var(--color-primary); border-bottom: 2px solid var(--color-border-subtle); padding-bottom: 8px;">
        3. Understanding the Nisab Standards (Gold vs Silver)
      </h2>
      <p style="line-height: 1.8; color: var(--color-text-main);">
        The <strong>Niṣāb</strong> (نِصَاب) is the divine poverty threshold separating those obligated to pay from those eligible to receive charity. The Prophet Muhammad ﷺ fixed two distinct metallic benchmarks:
      </p>

      <div style="background: var(--color-card); border: 1px solid var(--color-border); border-radius: 10px; overflow: hidden; margin: 24px 0;">
        <table style="width: 100%; border-collapse: collapse; font-size: 0.92rem; text-align: left;">
          <thead>
            <tr style="background: var(--color-surface); border-bottom: 2px solid var(--color-border);">
              <th style="padding: 12px 16px; color: var(--color-primary);">Metal Standard</th>
              <th style="padding: 12px 16px; color: var(--color-primary);">Canonical Prophetic Weight</th>
              <th style="padding: 12px 16px; color: var(--color-primary);">Modern Metric Standard (OIC / Fiqh Academy)</th>
              <th style="padding: 12px 16px; color: var(--color-primary);">Hanafi Traditional Benchmark (Tola Weight)</th>
            </tr>
          </thead>
          <tbody>
            <tr style="border-bottom: 1px solid var(--color-border-subtle);">
              <td style="padding: 12px 16px; font-weight: 700;">Gold (Dhahab)</td>
              <td style="padding: 12px 16px;">20 Mithqāls (Dīnārs)</td>
              <td style="padding: 12px 16px; font-weight: 700; color: var(--color-gold);">85.00 Grams (2.73 Troy Oz)</td>
              <td style="padding: 12px 16px; font-weight: 700; color: var(--color-gold);">87.48 Grams (7.5 Tolas)</td>
            </tr>
            <tr>
              <td style="padding: 12px 16px; font-weight: 700;">Silver (Fiḍḍah)</td>
              <td style="padding: 12px 16px;">200 Dirhams</td>
              <td style="padding: 12px 16px; font-weight: 700; color: var(--color-primary);">595.00 Grams (19.13 Troy Oz)</td>
              <td style="padding: 12px 16px; font-weight: 700; color: var(--color-primary);">612.36 Grams (52.5 Tolas)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p style="line-height: 1.8; color: var(--color-text-main);">
        <em>Which standard should you use?</em> Because silver prices have declined drastically relative to gold over the last century, 595 grams of silver represents approximately $450–$600 USD, whereas 85 grams of gold represents approximately $6,000–$7,500 USD. The overwhelming majority of classical and contemporary Hanafi, Maliki, and Hanbali scholars mandate utilizing the <strong>Silver Nisab</strong> for liquid cash and savings to benefit the impoverished.
      </p>
    </section>

    <!-- Section 4 -->
    <section id="eligible-wealth-categories" style="margin-bottom: 40px;">
      <h2 style="font-size: 1.75rem; color: var(--color-primary); border-bottom: 2px solid var(--color-border-subtle); padding-bottom: 8px;">
        4. Wealth Categories Subject to Zakat
      </h2>
      <p style="line-height: 1.8; color: var(--color-text-main);">
        To calculate your accurate Zakat, aggregate all qualifying assets across these categories:
      </p>

      <ul style="line-height: 1.8; color: var(--color-text-main); margin-bottom: 24px;">
        <li><strong>Cash & Bank Balances:</strong> All liquid cash, checking accounts, high-yield savings accounts, foreign currencies, digital wallets, and physical cash held at home.</li>
        <li><strong>Gold & Silver Bullion:</strong> Physical bars, investment coins, and jewelry held as stores of value (evaluated by current market scrap metal weight, excluding jeweler crafting fees).</li>
        <li><strong>Business Merchandise & Inventory ('Urūḍ al-Tijārah):</strong> Finished goods, stock held for resale, and raw materials awaiting manufacturing, evaluated at their current wholesale market value on your Zakat due date.</li>
        <li><strong>Shares, Stocks & Equities:</strong> If trading actively for capital gains: pay 2.5% on full market value. If holding passively as a long-term investor: pay 2.5% on the underlying liquid zakat-eligible assets of the enterprise (often estimated conservatively between 25% to 35% of share price).</li>
        <li><strong>Retirement Accounts (401k, IRA, Pensions):</strong> Evaluated based on the net accessible cash balance after accounting for early withdrawal penalties and taxes.</li>
        <li><strong>Recoverable Debts Owed to You:</strong> Loans you extended to trusted family or business partners that you reasonably anticipate will be repaid.</li>
      </ul>
    </section>

    <!-- Section 5 -->
    <section id="deductible-liabilities" style="margin-bottom: 40px;">
      <h2 style="font-size: 1.75rem; color: var(--color-primary); border-bottom: 2px solid var(--color-border-subtle); padding-bottom: 8px;">
        5. Deductible Liabilities & Modern Debt Rules
      </h2>
      <p style="line-height: 1.8; color: var(--color-text-main);">
        Islam balances assets against real obligations. You may deduct:
      </p>

      <div style="background: var(--color-card); border: 1px solid var(--color-border); border-radius: 12px; padding: 22px; margin: 20px 0;">
        <ul style="line-height: 1.9; color: var(--color-text-main); margin: 0; padding-left: 20px;">
          <li><strong>Immediate Living Bills:</strong> Unpaid rent, utilities, medical bills, or credit card balances due within the current month.</li>
          <li><strong>Short-Term Commercial Payables:</strong> Supplier invoices and worker wages due immediately.</li>
          <li><strong>Long-Term Debt Rule:</strong> For multi-year debts (e.g. 30-year home mortgages or multi-year car financing), you may deduct only the specific monthly installments due over the next 12 months, <em>not</em> the full principal sum.</li>
        </ul>
      </div>
    </section>

    <!-- Section 6 -->
    <section id="calculation-formula" style="margin-bottom: 40px;">
      <h2 style="font-size: 1.75rem; color: var(--color-primary); border-bottom: 2px solid var(--color-border-subtle); padding-bottom: 8px;">
        6. The Step-by-Step Calculation Formula (2.5% vs 2.577%)
      </h2>
      <p style="line-height: 1.8; color: var(--color-text-main);">
        The mathematical computation of Zakat is clean and transparent:
      </p>

      <div style="background: var(--color-card); border: 1.5px solid var(--color-primary); border-radius: 12px; padding: 24px; margin: 20px 0; text-align: center;">
        <div style="font-size: 1.25rem; font-weight: 700; color: var(--color-primary); margin-bottom: 10px;">
          Net Zakat Base = (Total Qualifying Assets) − (Immediate Liabilities)
        </div>
        <div style="font-size: 1.2rem; font-weight: 700; color: var(--color-gold); margin-bottom: 12px;">
          Zakat Obligation = Net Zakat Base × 2.5%
        </div>
        <div style="font-size: 0.9rem; color: var(--color-text-muted); line-height: 1.6;">
          <em>Solar Calendar Adjustment:</em> If calculating according to the Gregorian calendar (365.25 days) rather than the Islamic Hijri calendar (354.36 days), multiply by <strong>2.577%</strong> to account for the extra 11 days.
        </div>
      </div>
    </section>

    <!-- Section 7 -->
    <section id="eight-recipients" style="margin-bottom: 40px;">
      <h2 style="font-size: 1.75rem; color: var(--color-primary); border-bottom: 2px solid var(--color-border-subtle); padding-bottom: 8px;">
        7. The Eight Quranic Recipient Categories (Maṣārif)
      </h2>
      <p style="line-height: 1.8; color: var(--color-text-main);">
        Unlike voluntary charity which may be given to any worthy cause (such as building a mosque or maintaining a library), Zakat distribution is strictly confined by Allah to eight precise recipient classes in Surah At-Tawbah:
      </p>

      <blockquote style="background: var(--color-card); border-left: 4px solid var(--color-gold); padding: 18px 24px; margin: 20px 0; border-radius: 0 8px 8px 0;">
        <div style="font-family: 'Amiri', 'Traditional Arabic', serif; font-size: 1.4rem; direction: rtl; text-align: right; color: var(--color-primary); line-height: 2;">
          إِنَّمَا الصَّدَقَاتُ لِلْفُقَرَاءِ وَالْمَسَاكِينِ وَالْعَامِلِينَ عَلَيْهَا وَالْمُؤَلَّفَةِ قُلُوبُهُمْ وَفِي الرِّقَابِ وَالْغَارِمِينَ وَفِي سَبِيلِ اللَّهِ وَابْنِ السَّبِيلِ ۖ فَرِيضَةً مِّنَ اللَّهِ ۗ وَاللَّهُ عَلِيمٌ حَكِيمٌ
        </div>
        <div style="margin-top: 10px; font-style: italic; color: var(--color-text-muted); font-size: 0.95rem;">
          "Zakat expenditures are only for the poor and for the needy and for those employed to collect [zakat] and for bringing hearts together [for Islam] and for freeing captives [or slaves] and for those in debt and for the cause of Allah and for the [stranded] traveler — an obligation [imposed] by Allah. And Allah is Knowing and Wise."
        </div>
        <div style="margin-top: 4px; font-size: 0.85rem; color: var(--color-gold); font-weight: 600;">
          — Surah At-Tawbah (9:60)
        </div>
      </blockquote>

      <ol style="line-height: 1.9; color: var(--color-text-main); margin-bottom: 20px;">
        <li><strong>Al-Fuqarā' (The Destitute):</strong> Individuals possessing zero wealth or less than half of their basic survival needs.</li>
        <li><strong>Al-Masākīn (The Working Poor):</strong> Individuals with employment who earn more than half their needs, but still fall below basic survival thresholds.</li>
        <li><strong>Al-'Āmilīna 'Alayhā (Zakat Administrators):</strong> Workers appointed by legitimate authorities to collect, record, and distribute Zakat.</li>
        <li><strong>Al-Mu'allafati Qulūbuhum (Reconciling Hearts):</strong> New Muslims facing economic marginalization or influential community members whose hearts are softened toward Islam.</li>
        <li><strong>Fī ar-Riqāb (Freeing Captives):</strong> Emancipating enslaved humans or ransoming prisoners of war.</li>
        <li><strong>Al-Ghārimīn (Debtors):</strong> Individuals burdened by overwhelming personal debts incurred for lawful survival needs.</li>
        <li><strong>Fī Sabīlillāh (In the Cause of Allah):</strong> Funding authentic defense of the Muslim community, outreach, and Islamic education.</li>
        <li><strong>Ibn al-Sabīl (The Stranded Traveler):</strong> Legitimate travelers cut off from their home funds while on a lawful journey.</li>
      </ol>
    </section>

    <!-- Section 8 -->
    <section id="zakat-vs-fitr-sadaqah" style="margin-bottom: 40px;">
      <h2 style="font-size: 1.75rem; color: var(--color-primary); border-bottom: 2px solid var(--color-border-subtle); padding-bottom: 8px;">
        8. Zakat al-Mal vs Zakat al-Fitr vs Voluntary Sadaqah
      </h2>
      <p style="line-height: 1.8; color: var(--color-text-main);">
        To eliminate frequent confusion between these three terms:
      </p>

      <div style="background: var(--color-card); border: 1px solid var(--color-border); border-radius: 10px; overflow: hidden; margin: 20px 0;">
        <table style="width: 100%; border-collapse: collapse; font-size: 0.9rem;">
          <thead>
            <tr style="background: var(--color-surface); border-bottom: 2px solid var(--color-border);">
              <th style="padding: 12px 16px; text-align: left; color: var(--color-primary);">Type of Charity</th>
              <th style="padding: 12px 16px; text-align: left; color: var(--color-primary);">Status</th>
              <th style="padding: 12px 16px; text-align: left; color: var(--color-primary);">Timing</th>
              <th style="padding: 12px 16px; text-align: left; color: var(--color-primary);">Rate & Scope</th>
            </tr>
          </thead>
          <tbody>
            <tr style="border-bottom: 1px solid var(--color-border-subtle);">
              <td style="padding: 12px 16px; font-weight: 700;">Zakat al-Māl</td>
              <td style="padding: 12px 16px; color: var(--color-primary); font-weight: 700;">Obligatory (3rd Pillar)</td>
              <td style="padding: 12px 16px;">Annually after 1 full lunar year</td>
              <td style="padding: 12px 16px;">2.5% of net surplus wealth exceeding Nisab</td>
            </tr>
            <tr style="border-bottom: 1px solid var(--color-border-subtle);">
              <td style="padding: 12px 16px; font-weight: 700;">Zakat al-Fiṭr</td>
              <td style="padding: 12px 16px; color: var(--color-primary); font-weight: 700;">Obligatory (Wājib)</td>
              <td style="padding: 12px 16px;">End of Ramadan before Eid prayer</td>
              <td style="padding: 12px 16px;">Fixed flat rate (~$10–$15 per family member)</td>
            </tr>
            <tr>
              <td style="padding: 12px 16px; font-weight: 700;">Ṣadaqah</td>
              <td style="padding: 12px 16px; color: var(--color-gold); font-weight: 700;">Voluntary (Mustahabb)</td>
              <td style="padding: 12px 16px;">Any day, any hour of the year</td>
              <td style="padding: 12px 16px;">Any amount to any worthy person or project</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- Section 9 -->
    <section id="calculator-methodology" style="margin-bottom: 40px;">
      <h2 style="font-size: 1.75rem; color: var(--color-primary); border-bottom: 2px solid var(--color-border-subtle); padding-bottom: 8px;">
        9. NoorDeen Calculator Methodology & Transparent Assumptions
      </h2>
      <p style="line-height: 1.8; color: var(--color-text-main);">
        The <a href="../zakat-calculator.html" style="color: var(--color-primary); font-weight: 700;">NoorDeen Zakat Calculator</a> was engineered according to strict classical transparency:
      </p>

      <ul style="line-height: 1.8; color: var(--color-text-main); margin-bottom: 24px;">
        <li><strong>Dual Nisab Toggle:</strong> Users can effortlessly switch between the <strong>Modern Metric Standard</strong> (595g Silver / 85g Gold) and the <strong>Hanafi Tola Standard</strong> (612.36g Silver / 87.48g Gold).</li>
        <li><strong>Zero Hidden Margins:</strong> All arithmetic operations are computed purely on the client side without storing personal financial data on any server.</li>
        <li><strong>Conservative Stock Estimation:</strong> Long-term investors are provided with standard AAOIFI 30% dividend proxy options or custom liquid entry.</li>
      </ul>
    </section>

    <!-- Section 10 -->
    <section id="key-takeaways" style="margin-bottom: 40px; background: var(--color-surface); padding: 24px; border-radius: 12px; border: 1px solid var(--color-border);">
      <h2 style="font-size: 1.5rem; color: var(--color-primary); margin-top: 0; margin-bottom: 12px;">
        10. Summary & Annual Preparation Worksheet
      </h2>
      <ul style="line-height: 1.8; color: var(--color-text-main); margin: 0; padding-left: 20px;">
        <li><strong>Divine Right:</strong> Zakat is not charity; it is an obligatory debt owed to the impoverished.</li>
        <li><strong>Purification & Growth:</strong> Wealth paid in Zakat is cleansed from spiritual toxicity and blessed.</li>
        <li><strong>Silver Standard Recommended:</strong> Opt for the Silver Nisab for cash and savings to maximize relief for the needy.</li>
        <li><strong>Eight Recipient Classes:</strong> Ensure your Zakat reaches legitimate individuals specified in Surah At-Tawbah (9:60).</li>
        <li><strong>Fixed Annual Date:</strong> Select a specific Hijri date (such as 1st Ramadan or 1st Muharram) as your permanent annual Zakat valuation day.</li>
      </ul>
    </section>
  `;

  const sourcesHtml = `
    <li><strong>Al-Qur'an al-Kareem:</strong> Surah Al-Baqarah (2:43), Surah At-Tawbah (9:34-35, 9:60, 9:103), Surah Al-Ma'arij (70:24-25).</li>
    <li><strong>Sahih al-Bukhari:</strong> Hadith #1395 (The decree of fighting those who refuse Zakat), Hadith #1403 (Obligation of Zakat).</li>
    <li><strong>Sahih Muslim:</strong> Hadith #19 (The five pillars and rights of wealth), Hadith #987 (Warning against hoarding wealth).</li>
    <li><strong>Sunan an-Nasa'i:</strong> Hadith #2582 (Charity to relatives carrying double reward).</li>
    <li><strong>AAOIFI:</strong> Shari'ah Standard No. 35 on Zakah, Manama, Bahrain.</li>
    <li><strong>Yusuf al-Qaradawi:</strong> <em>Fiqh al-Zakah</em> (Comparative Study of the Rules and Philosophy of Zakat), Mu'assasat al-Risalah, Beirut.</li>
  `;

  return buildArticleHtml({
    slug: 'zakat-educational-calculation-guide',
    title: "Zakat: A Detailed Educational and Calculation Guide",
    arabicSubtitle: "خُذْ مِنْ أَمْوَالِهِمْ صَدَقَةً تُطَهِّرُهُمْ وَتُزَكِّيهِم بِهَا — PURIFY THEIR WEALTH",
    metaDescription: "An in-depth guide to Zakat in Islam. Covers Nisab thresholds (Gold & Silver standards), eligible wealth categories, deduction of liabilities, the 8 Quranic recipient classes, and step-by-step calculation formulas.",
    readingTime: "13 min read",
    wordCount: "2,420",
    tocItems,
    relatedTools,
    faqItems,
    contentHtml,
    sourcesHtml
  });
}

module.exports = { getArticle10 };
