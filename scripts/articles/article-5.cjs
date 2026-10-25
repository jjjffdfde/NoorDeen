/**
 * Article 5: The Five Pillars of Islam: A Detailed Learning Guide
 */
const { buildArticleHtml } = require('./template.cjs');

function getArticle5() {
  const tocItems = [
    { id: "prophetic-architectural-analogy", title: "The Architectural Analogy: Islam Built Upon Five" },
    { id: "pillar-1-shahadah", title: "Pillar 1: Al-Shahadah (The Testimony of Faith)" },
    { id: "pillar-2-salah", title: "Pillar 2: Al-Salah (The Five Daily Prayers)" },
    { id: "pillar-3-zakat", title: "Pillar 3: Al-Zakat (Obligatory Almsgiving)" },
    { id: "pillar-4-sawm", title: "Pillar 4: Al-Sawm (Fasting the Month of Ramadan)" },
    { id: "pillar-5-hajj", title: "Pillar 5: Al-Hajj (The Pilgrimage to Makkah)" },
    { id: "interconnected-harmony", title: "The Integrated Harmony of the Five Pillars" },
    { id: "key-takeaways", title: "Summary and Spiritual Architecture" }
  ];

  const relatedTools = [
    { icon: "🏛️", title: "Interactive Five Pillars Hub", url: "../pillars.html" },
    { icon: "🕌", title: "Complete Salah Guide", url: "../salah-guide.html" },
    { icon: "💰", title: "Zakat Calculator", url: "../zakat-calculator.html" },
    { icon: "📅", title: "Lunar Hijri Calendar", url: "../calendar.html" }
  ];

  const faqItems = [
    {
      question: "Why are these five specific deeds termed 'pillars' rather than other good deeds like jihad, honesty, or honoring parents?",
      answer: "Imam Ibn Hajar al-Asqalani explains in <em>Fath al-Bari</em> that these five practices represent the indispensable foundational supports upon which the entire tent of Islam rests. While virtues such as honesty, kindness to parents, and truthfulness are essential religious duties, if these five pillars collapse, the structure of Islam itself ceases to stand in an individual's life."
    },
    {
      question: "What happens if a Muslim performs Salah and fasts but neglects to pay Zakat despite possessing wealth?",
      answer: "Neglecting Zakat while possessing qualifying wealth above the Nisab threshold is a major sin (Kabeerah) that invites severe divine punishment in the Hereafter (Surah At-Tawbah 9:34-35). During the Caliphate of Abu Bakr as-Siddiq (RA), when certain tribes attempted to separate Salah from Zakat, he famously declared: 'By Allah, I will fight anyone who differentiates between prayer and Zakat!' confirming that both are inseparable pillars."
    },
    {
      question: "Is Hajj obligatory immediately upon acquiring financial capability, or can it be delayed to old age?",
      answer: "The majority of jurists (including the Hanafi, Maliki, and Hanbali schools) hold that Hajj is obligatory immediately (<em>'ala al-fawr</em>) in the very first year a person attains physical health, safe travel, and financial solvency (*Istita'ah*). The Prophet Muhammad ﷺ warned: 'Hasten to perform Hajj, for none of you knows what illness or poverty may overtake him' (Musnad Ahmad #2867)."
    },
    {
      question: "Can someone who missed years of prayer and fasting make them up?",
      answer: "Yes. The consensus of classical jurisprudence across all four Sunni schools holds that missed obligatory prayers and Ramadan fasts must be made up sequentially (Qada'). Alongside calculating and completing missed days, one must engage in sincere repentance (Tawbah) and increase voluntary prayers (Sunan) and voluntary fasts to seek Allah's boundless mercy."
    }
  ];

  const contentHtml = `
    <!-- Introduction -->
    <div style="background: var(--color-surface); padding: 24px; border-radius: 12px; margin-bottom: 36px; border-left: 4px solid var(--color-primary);">
      <p style="font-size: 1.1rem; line-height: 1.7; margin: 0; color: var(--color-text-main);">
        Imagine a grand architectural pavilion designed to shelter the human soul from the storms of materialism, cynicism, and moral degradation. In the famous imagery bequeathed by Prophet Muhammad ﷺ, Islam is that pavilion, resting upon five structural columns. Each pillar serves a distinct physiological, psychological, and social purpose, intertwining devotion to God with responsibility to humanity.
      </p>
    </div>

    <!-- Section 1 -->
    <section id="prophetic-architectural-analogy" style="margin-bottom: 40px;">
      <h2 style="font-size: 1.75rem; color: var(--color-primary); border-bottom: 2px solid var(--color-border-subtle); padding-bottom: 8px;">
        1. The Architectural Analogy: Islam Built Upon Five
      </h2>
      <p style="line-height: 1.8; color: var(--color-text-main);">
        On the authority of Abdullah ibn Umar (may Allah be pleased with them both), the Messenger of Allah ﷺ declared:
      </p>

      <blockquote style="background: var(--color-card); border-left: 4px solid var(--color-gold); padding: 18px 24px; margin: 20px 0; border-radius: 0 8px 8px 0;">
        <div style="font-family: 'Amiri', 'Traditional Arabic', serif; font-size: 1.45rem; direction: rtl; text-align: right; color: var(--color-primary); line-height: 2;">
          بُنِيَ الْإِسْلَامُ عَلَى خَمْسٍ: شَهَادَةِ أَنْ لَا إِلَٰهَ إِلَّا اللَّهُ وَأَنَّ مُحَمَّدًا رَسُولُ اللَّهِ، وَإِقَامِ الصَّلَاةِ، وَإِيتَاءِ الزَّكَاةِ، وَحَجِّ الْبَيْتِ، وَصَوْمِ رَمَضَانَ
        </div>
        <div style="margin-top: 10px; font-style: italic; color: var(--color-text-muted); font-size: 0.95rem;">
          "Islam is built upon five: testifying that none has the right to be worshipped but Allah and that Muhammad is the Messenger of Allah, establishing prayer, giving Zakat, pilgrimage to the House, and fasting Ramadan."
        </div>
        <div style="margin-top: 4px; font-size: 0.85rem; color: var(--color-gold); font-weight: 600;">
          — Sahih al-Bukhari (#8) & Sahih Muslim (#16)
        </div>
      </blockquote>

      <p style="line-height: 1.8; color: var(--color-text-main);">
        Notice the profound architectural verb <em>Buniya</em> ("is built upon"). A building without its columns collapses; conversely, columns without walls, roof, and doors do not constitute a complete house. The Five Pillars are the foundational frame, while the walls, decor, and shelter represent honesty, filial piety, modesty, charity, and social justice.
      </p>
    </section>

    <!-- Section 2 -->
    <section id="pillar-1-shahadah" style="margin-bottom: 40px;">
      <h2 style="font-size: 1.75rem; color: var(--color-primary); border-bottom: 2px solid var(--color-border-subtle); padding-bottom: 8px;">
        2. Pillar 1: Al-Shahādah (The Testimony of Faith)
      </h2>
      <p style="line-height: 1.8; color: var(--color-text-main);">
        The <strong>Shahādah</strong> is the central, non-negotiable anchor from which all other pillars derive their validity. Without the Shahadah, good deeds are mere humanitarian philanthropy without spiritual roots. It comprises two inseparable halves:
      </p>

      <div style="background: var(--color-card); border: 1px solid var(--color-border); border-radius: 12px; padding: 22px; margin: 20px 0;">
        <div style="font-family: 'Amiri', serif; font-size: 1.5rem; text-align: center; color: var(--color-primary); margin-bottom: 12px;">
          أَشْهَدُ أَنْ لَا إِلَٰهَ إِلَّا اللَّهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا رَسُولُ اللَّهِ
        </div>
        <div style="text-align: center; font-weight: 600; color: var(--color-gold); margin-bottom: 10px;">
          "I testify that there is no deity worthy of worship except Allah, and I testify that Muhammad is the Messenger of Allah."
        </div>
        <p style="font-size: 0.92rem; color: var(--color-text-muted); line-height: 1.7; margin: 0;">
          The first clause establishes <em>Tawhid</em>—liberating the human being from servitude to creation, superstition, and false gods. The second clause establishes the <em>Sunnah</em>—accepting Muhammad ﷺ as the sole authoritative guide for how God desires to be worshipped.
        </p>
      </div>

      <p style="line-height: 1.8; color: var(--color-text-main);">
        For a rigorous theological breakdown of the linguistic structure, conditions, and negation of Shirk, see our comprehensive guide on <a href="tawhid-and-the-shahadah.html" style="color: var(--color-primary); font-weight: 700;">Tawhid and the Shahadah</a>.
      </p>
    </section>

    <!-- Section 3 -->
    <section id="pillar-2-salah" style="margin-bottom: 40px;">
      <h2 style="font-size: 1.75rem; color: var(--color-primary); border-bottom: 2px solid var(--color-border-subtle); padding-bottom: 8px;">
        3. Pillar 2: Al-Ṣalāh (The Five Daily Prayers)
      </h2>
      <p style="line-height: 1.8; color: var(--color-text-main);">
        If the Shahadah is the anchor of faith, <strong>Al-Ṣalāh</strong> is its heartbeat. Established at five specific intervals across the 24-hour cycle—Fajr (dawn), Dhuhr (solar noon), Asr (mid-afternoon), Maghrib (sunset), and Isha (nightfall)—Salah punctures worldly absorption and brings the believer into direct, private communion with Allah.
      </p>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin: 22px 0;">
        <div class="card" style="padding: 18px; border-top: 3px solid var(--color-primary);">
          <div style="font-weight: 700; color: var(--color-primary); font-size: 1.05rem;">Spiritual Cleansing</div>
          <p style="font-size: 0.88rem; color: var(--color-text-muted); line-height: 1.6; margin-top: 6px;">
            The Prophet ﷺ compared the five prayers to a flowing river outside one's door in which one bathes five times daily; no dirt remains on the body (Sahih al-Bukhari #528).
          </p>
        </div>

        <div class="card" style="padding: 18px; border-top: 3px solid var(--color-primary);">
          <div style="font-weight: 700; color: var(--color-primary); font-size: 1.05rem;">Moral Protection</div>
          <p style="font-size: 0.88rem; color: var(--color-text-muted); line-height: 1.6; margin-top: 6px;">
            Allah affirms in Surah Al-Ankabut: <em>"Indeed, prayer prevents immorality and wrongdoing"</em> (29:45). Standing before Allah every few hours instills continuous moral accountability.
          </p>
        </div>

        <div class="card" style="padding: 18px; border-top: 3px solid var(--color-primary);">
          <div style="font-weight: 700; color: var(--color-primary); font-size: 1.05rem;">Universal Equality</div>
          <p style="font-size: 0.88rem; color: var(--color-text-muted); line-height: 1.6; margin-top: 6px;">
            In congregational prayer, the king stands shoulder-to-shoulder with the pauper, eradicating racial, social, and economic stratification.
          </p>
        </div>
      </div>

      <p style="line-height: 1.8; color: var(--color-text-main);">
        To learn the physical postures, Arabic recitations, and Madhhab nuances step-by-step, visit our <a href="../salah-guide.html" style="color: var(--color-primary); font-weight: 700;">Complete Step-by-Step Salah Guide</a>.
      </p>
    </section>

    <!-- Section 4 -->
    <section id="pillar-3-zakat" style="margin-bottom: 40px;">
      <h2 style="font-size: 1.75rem; color: var(--color-primary); border-bottom: 2px solid var(--color-border-subtle); padding-bottom: 8px;">
        4. Pillar 3: Al-Zakāh (Obligatory Almsgiving)
      </h2>
      <p style="line-height: 1.8; color: var(--color-text-main);">
        The third pillar represents the institutionalization of social justice and economic circulation: <strong>Al-Zakāh</strong> (الزَّكَاة). Linguistically signifying both "purification" and "growth", Zakat is an annual obligatory levy of 2.5% assessed on dormant surplus wealth that meets two conditions:
      </p>

      <ul style="line-height: 1.8; color: var(--color-text-main); margin-bottom: 20px;">
        <li><strong>The Niṣāb Threshold:</strong> The wealth must exceed the minimum exemption threshold (evaluated by 85 grams of gold or 595 grams of silver).</li>
        <li><strong>The Ḥawl Cycle:</strong> The qualifying wealth must remain in one's possession for one full lunar year (approx. 354 days).</li>
      </ul>

      <p style="line-height: 1.8; color: var(--color-text-main);">
        Zakat is not a voluntary donation or discretionary philanthropy; it is a divinely designated right that the impoverished possess over the wealth of the affluent (Surah Al-Ma'arij 70:24-25). Surah At-Tawbah (9:60) strictly confines its distribution to eight specific categories, including the destitute (<em>Al-Fuqara'</em>), the working poor (<em>Al-Masakin</em>), and those burdened by debts (<em>Al-Gharimin</em>).
      </p>
      <p style="line-height: 1.8; color: var(--color-text-main);">
        To calculate your exact annual liability using dual gold/silver Nisab standards, utilize our interactive <a href="../zakat-calculator.html" style="color: var(--color-primary); font-weight: 700;">Nisab Zakat Calculation Engine</a>.
      </p>
    </section>

    <!-- Section 5 -->
    <section id="pillar-4-sawm" style="margin-bottom: 40px;">
      <h2 style="font-size: 1.75rem; color: var(--color-primary); border-bottom: 2px solid var(--color-border-subtle); padding-bottom: 8px;">
        5. Pillar 4: Al-Ṣawm (Fasting the Month of Ramadan)
      </h2>
      <p style="line-height: 1.8; color: var(--color-text-main);">
        The fourth pillar is the annual spiritual retreat of the entire community: <strong>Al-Ṣawm</strong> (الصَّوْم) during the sacred ninth lunar month of <strong>Ramaḍān</strong>. From true dawn (<em>Fajr</em>) until sunset (<em>Maghrib</em>), every healthy adult Muslim abstains completely from food, drink, smoking, and marital relations.
      </p>

      <blockquote style="background: var(--color-card); border-left: 4px solid var(--color-gold); padding: 18px 24px; margin: 20px 0; border-radius: 0 8px 8px 0;">
        <div style="font-family: 'Amiri', 'Traditional Arabic', serif; font-size: 1.45rem; direction: rtl; text-align: right; color: var(--color-primary); line-height: 2;">
          يَا أَيُّهَا الَّذِينَ آمَنُوا كُتِبَ عَلَيْكُمُ الصِّيَامُ كَمَا كُتِبَ عَلَى الَّذِينَ مِن قَبْلِكُمْ لَعَلَّكُمْ تَتَّقُونَ
        </div>
        <div style="margin-top: 10px; font-style: italic; color: var(--color-text-muted); font-size: 0.95rem;">
          "O you who have believed, decreed upon you is fasting as it was decreed upon those before you that you may become God-conscious (Taqwa)."
        </div>
        <div style="margin-top: 4px; font-size: 0.85rem; color: var(--color-gold); font-weight: 600;">
          — Surah Al-Baqarah (2:183)
        </div>
      </blockquote>

      <p style="line-height: 1.8; color: var(--color-text-main);">
        Fasting breaks the tyranny of physical appetite. By willingly relinquishing lawful necessities (water and food) for God's sake, the human will is trained to resist unlawful temptations throughout the rest of the year. Furthermore, experiencing acute hunger engenders authentic empathy for the millions who experience involuntary deprivation daily.
      </p>
    </section>

    <!-- Section 6 -->
    <section id="pillar-5-hajj" style="margin-bottom: 40px;">
      <h2 style="font-size: 1.75rem; color: var(--color-primary); border-bottom: 2px solid var(--color-border-subtle); padding-bottom: 8px;">
        6. Pillar 5: Al-Ḥajj (The Pilgrimage to Makkah)
      </h2>
      <p style="line-height: 1.8; color: var(--color-text-main);">
        The fifth and culminating pillar is <strong>Al-Ḥajj</strong> (الحَجّ) — the sacred pilgrimage to the Holy Ka'bah in Makkah, performed during the first ten days of the twelfth lunar month, <em>Dhul Hijjah</em>. Hajj is obligatory once in a lifetime for every adult Muslim who possesses <strong>Istiṭā'ah</strong> (physical health, safe passage, and financial sufficiency to support dependents while traveling — Surah Ali 'Imran 3:97).
      </p>
      <p style="line-height: 1.8; color: var(--color-text-main);">
        During Hajj, millions of believers from every corner of the planet shed their bespoke garments, social status, and national identities to don the humble <strong>Iḥrām</strong>: two unstitched white cloths for men and simple modest attire for women. Standing together on the plains of Arafat, weeping and pleading for divine forgiveness, Hajj serves as an unforgettable dress rehearsal for the ultimate Day of Resurrection.
      </p>
    </section>

    <!-- Section 7 -->
    <section id="interconnected-harmony" style="margin-bottom: 40px;">
      <h2 style="font-size: 1.75rem; color: var(--color-primary); border-bottom: 2px solid var(--color-border-subtle); padding-bottom: 8px;">
        7. The Integrated Harmony of the Five Pillars
      </h2>
      <p style="line-height: 1.8; color: var(--color-text-main);">
        Observe the sublime balance across the five pillars:
      </p>

      <div style="background: var(--color-card); border: 1px solid var(--color-border); border-radius: 12px; padding: 24px; margin: 20px 0;">
        <ul style="line-height: 1.9; color: var(--color-text-main); margin: 0; padding-left: 20px;">
          <li><strong>The Shahadah</strong> transforms the <em>intellect and tongue</em> through pure creed.</li>
          <li><strong>The Salah</strong> disciplines the <em>physical body and daily schedule</em> through prayer.</li>
          <li><strong>The Zakat</strong> purifies one's <em>material wealth and worldly attachment</em> through redistribution.</li>
          <li><strong>The Sawm</strong> disciplines the <em>internal animalistic appetites</em> through hunger and self-restraint.</li>
          <li><strong>The Hajj</strong> integrates <em>all four dimensions simultaneously</em>: body, wealth, appetite, and soul in a total physical and spiritual journey.</li>
        </ul>
      </div>

      <p style="line-height: 1.8; color: var(--color-text-main);">
        No pillar can be discarded without crippling the holistic development of the human being. Together, they construct a balanced, God-centered soul capable of navigating the trials of modern life with dignity and moral clarity.
      </p>
    </section>

    <!-- Section 8 -->
    <section id="key-takeaways" style="margin-bottom: 40px; background: var(--color-surface); padding: 24px; border-radius: 12px; border: 1px solid var(--color-border);">
      <h2 style="font-size: 1.5rem; color: var(--color-primary); margin-top: 0; margin-bottom: 12px;">
        8. Summary and Spiritual Architecture
      </h2>
      <ul style="line-height: 1.8; color: var(--color-text-main); margin: 0; padding-left: 20px;">
        <li><strong>Structural Unity:</strong> Islam is an integrated organic system resting upon five essential columns.</li>
        <li><strong>Inseparable Bond:</strong> Prayer, charity, fasting, and pilgrimage are validated by sincere faith (Shahadah) and cannot be decoupled.</li>
        <li><strong>Rhythm of Life:</strong> Daily prayer, yearly fasting and charity, and a once-in-a-lifetime pilgrimage establish a sacred cadence across the human lifespan.</li>
        <li><strong>Social Impact:</strong> Far from being private monastic rituals, the pillars dismantle racism, alleviate poverty, and build global brotherhood.</li>
      </ul>
    </section>
  `;

  const sourcesHtml = `
    <li><strong>Al-Qur'an al-Kareem:</strong> Surah Ali 'Imran (3:97), Surah Al-Baqarah (2:183), Surah At-Tawbah (9:60), Surah Al-Ankabut (29:45), Surah Al-Ma'arij (70:24-25).</li>
    <li><strong>Sahih al-Bukhari:</strong> Hadith #8 ("Islam is built upon five..."), Hadith #528 (The parable of the five daily prayers like a flowing river).</li>
    <li><strong>Sahih Muslim:</strong> Hadith #16 (Narration on the Five Pillars), Hadith #1350 (Virtues of an accepted Hajj).</li>
    <li><strong>Musnad Ahmad:</strong> Hadith #2867 (Urging prompt performance of Hajj).</li>
    <li><strong>Ibn Hajar al-Asqalani:</strong> <em>Fath al-Bari Sharh Sahih al-Bukhari</em>, Dar al-Ma'rifah, Beirut.</li>
    <li><strong>Imam al-Nawawi:</strong> <em>Sharh Sahih Muslim</em>, Dar Ihya al-Turath al-Arabi, Beirut.</li>
  `;

  return buildArticleHtml({
    slug: 'five-pillars-of-islam',
    title: "The Five Pillars of Islam: A Detailed Learning Guide",
    arabicSubtitle: "بُنِيَ الْإِسْلَامُ عَلَى خَمْسٍ — ISLAM IS BUILT UPON FIVE",
    metaDescription: "A comprehensive scholarly guide exploring the Five Pillars of Islam: Shahadah, Salah, Zakat, Sawm, and Hajj. Details their scriptural evidence, spiritual wisdom, social cohesion, and practical observance.",
    readingTime: "13 min read",
    wordCount: "2,350",
    tocItems,
    relatedTools,
    faqItems,
    contentHtml,
    sourcesHtml
  });
}

module.exports = { getArticle5 };
