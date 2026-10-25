/**
 * Article 8: Hadith and Sunnah: Collections, References and Authenticity
 */
const { buildArticleHtml } = require('./template.cjs');

function getArticle8() {
  const tocItems = [
    { id: "defining-hadith-sunnah", title: "Defining Terms: The Distinction Between Sunnah and Hadith" },
    { id: "anatomy-of-hadith", title: "The Dual Anatomy: Chain of Narrators (Isnad) & Text (Matn)" },
    { id: "authenticity-criteria", title: "The Five Rigorous Criteria for a Sahih Hadith" },
    { id: "authenticity-tiers", title: "Authenticity Tiers: Sahih, Hasan, Da'if, and Mawdu'" },
    { id: "kutub-al-sittah", title: "The Canonical Six Hadith Compilations (Al-Kutub al-Sittah)" },
    { id: "numbering-systems", title: "Why Hadith Numbers Differ Between Books and Websites" },
    { id: "scholarly-evaluations", title: "How to Understand Scholarly Differences in Hadith Grading" },
    { id: "key-takeaways", title: "Summary and Guidelines for Reliable Study" }
  ];

  const relatedTools = [
    { icon: "📜", title: "Authentic Hadith Library (101 Traditions)", url: "../hadith.html" },
    { icon: "📖", title: "Quran Translation vs Tafsir", url: "quran-translation-vs-tafsir.html" },
    { icon: "🌹", title: "Prophetic Seerah (25 Chapters)", url: "../seerah.html" },
    { icon: "👥", title: "Lives of the Sahaba (52 Monograph)", url: "../sahaba.html" }
  ];

  const faqItems = [
    {
      question: "Are all weak (Da'if) hadiths completely fabricated?",
      answer: "No, absolutely not. A fabricated narration is classified as <em>Mawdu'</em> (spurious), which is a forged lie against the Prophet ﷺ and strictly rejected. A <em>Da'if</em> (weak) hadith is simply one that falls short of the stringent conditions of Sahih or Hasan due to a slight defect in narrator memory or a minor gap in the chain. The vast majority of classical scholars (including Imam Ahmad, Imam al-Nawawi, and Ibn Hajar) permitted narrating weak hadiths in matters of spiritual encouragement (<em>Fada'il al-A'mal</em>), provided they are not excessively weak and do not establish new legal rulings (Ahkam) or articles of creed."
    },
    {
      question: "Why does an online hadith reference number sometimes differ from a physical printed book?",
      answer: "Unlike the Quran, which has universally standardized verse numbers, classical Hadith manuscripts did not feature printed numerical indices. In the 20th century, different editors created distinct numbering systems: (1) <em>Muhammad Fu'ad 'Abd al-Baqi</em> numbered based on thematic books; (2) <em>Darussalam</em> numbered consecutively from beginning to end; and (3) Classical editions numbered by chapter (Bab). The exact same textual narration exists in all editions, but the assigned digit varies according to the editor's indexing scheme."
    },
    {
      question: "Can we understand the Quran without the Hadith?",
      answer: "No. The Quran commands prayer, paying Zakat, and performing Hajj, but it does not specify how many Rak'ats to pray at Fajr, the Nisab threshold of 2.5%, or how many circuits to walk around the Ka'bah. The Prophet Muhammad ﷺ was explicitly commanded by Allah: <em>'And We revealed to you the message that you may make clear to the people what was sent down to them'</em> (Surah An-Nahl 16:44). The Sunnah is the indispensable, authoritative practical application of the Quran."
    },
    {
      question: "Did the Companions write down Hadiths during the Prophet's lifetime?",
      answer: "Yes. While the Prophet ﷺ initially restricted general writing to prevent any possibility of mixing Hadith notes with the developing Quranic text, he later explicitly permitted Companions to document his words. Notable written records compiled during his lifetime include the <em>Al-Sahifah al-Sadiqah</em> by Abdullah ibn 'Amr ibn al-'As and the documented letters and legal charters sent by the Prophet ﷺ to regional tribes."
    }
  ];

  const contentHtml = `
    <!-- Introduction -->
    <div style="background: var(--color-surface); padding: 24px; border-radius: 12px; margin-bottom: 36px; border-left: 4px solid var(--color-primary);">
      <p style="font-size: 1.1rem; line-height: 1.7; margin: 0; color: var(--color-text-main);">
        Next to the Holy Quran, the <strong>Sunnah</strong> of Prophet Muhammad ﷺ stands as the second infallible fountainhead of Islamic doctrine, jurisprudence, and moral guidance. Yet in modern digital discourse, no subject suffers more confusion than Hadith literature. Questions abound: <em>How were narrations preserved? What is an Isnad? Why do different websites cite different numbers for the same hadith? How did scholars separate authentic reports from forgeries?</em> This guide provides an accessible, evidence-grounded introduction to the Science of Hadith (<em>'Ilm Muṣṭalaḥ al-Ḥadīth</em>).
      </p>
    </div>

    <!-- Section 1 -->
    <section id="defining-hadith-sunnah" style="margin-bottom: 40px;">
      <h2 style="font-size: 1.75rem; color: var(--color-primary); border-bottom: 2px solid var(--color-border-subtle); padding-bottom: 8px;">
        1. Defining Terms: The Distinction Between Sunnah and Hadith
      </h2>
      <p style="line-height: 1.8; color: var(--color-text-main);">
        While often used interchangeably in casual conversation, Islamic scholars distinguish between these two foundational concepts:
      </p>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; margin: 24px 0;">
        <div class="card" style="padding: 22px; border-left: 4px solid var(--color-primary);">
          <h3 style="margin-top: 0; color: var(--color-primary); font-size: 1.2rem;">Al-Sunnah (السُّنَّة)</h3>
          <p style="font-size: 0.92rem; color: var(--color-text-muted); line-height: 1.7; margin: 0;">
            Linguistically meaning a "path" or "established way of living." Theologically, the Sunnah is the living model, normative practice, legal methodology, and behavioral standard of Prophet Muhammad ﷺ. It encompasses what he said, what he did, what he tacitly approved (<em>Taqrīr</em>), and his physical and moral character (<em>Shamā'il</em>).
          </p>
        </div>

        <div class="card" style="padding: 22px; border-left: 4px solid var(--color-gold);">
          <h3 style="margin-top: 0; color: var(--color-primary); font-size: 1.2rem;">Al-Ḥadīth (الحَدِيث)</h3>
          <p style="font-size: 0.92rem; color: var(--color-text-muted); line-height: 1.7; margin: 0;">
            Linguistically meaning a "news item," "speech," or "transmitted account." In the discipline of transmission, a Hadith is the specific literary record, document, or oral report that conveys information about the Prophet's sayings, actions, or approvals. In short: <em>the Hadith is the vehicle; the Sunnah is the destination.</em>
          </p>
        </div>
      </div>
    </section>

    <!-- Section 2 -->
    <section id="anatomy-of-hadith" style="margin-bottom: 40px;">
      <h2 style="font-size: 1.75rem; color: var(--color-primary); border-bottom: 2px solid var(--color-border-subtle); padding-bottom: 8px;">
        2. The Dual Anatomy: Chain of Narrators (Isnād) & Text (Matn)
      </h2>
      <p style="line-height: 1.8; color: var(--color-text-main);">
        Every individual Hadith consists of two inseparable, interdependent parts:
      </p>

      <blockquote style="background: var(--color-card); border-left: 4px solid var(--color-brass); padding: 18px 24px; margin: 20px 0; border-radius: 0 8px 8px 0;">
        <div style="font-weight: 700; color: var(--color-primary); margin-bottom: 8px;">1. The Isnād (الإِسْنَاد — The Chain of Transmission)</div>
        <p style="margin: 0; font-size: 0.93rem; color: var(--color-text-muted); line-height: 1.6;">
          The chronological sequence of verified narrators who transmitted the report generation after generation from the Prophet ﷺ down to the compiler (e.g. Imam al-Bukhari). For example: <em>"Al-Humaydi narrated to us, who said Sufyan narrated to us, who said Yahya ibn Sa'id al-Ansari narrated to us, who said Muhammad ibn Ibrahim al-Taymi informed him, that he heard 'Alqamah ibn Waqqas al-Laythi saying, I heard Umar ibn al-Khattab..."</em>
        </p>
      </blockquote>

      <blockquote style="background: var(--color-card); border-left: 4px solid var(--color-gold); padding: 18px 24px; margin: 20px 0; border-radius: 0 8px 8px 0;">
        <div style="font-weight: 700; color: var(--color-primary); margin-bottom: 8px;">2. The Matn (المَتْن — The Textual Content)</div>
        <div style="font-family: 'Amiri', serif; font-size: 1.35rem; direction: rtl; text-align: right; color: var(--color-primary); line-height: 2; margin-bottom: 6px;">
          إِنَّمَا الْأَعْمَالُ بِالنِّيَّاتِ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى
        </div>
        <p style="margin: 0; font-size: 0.93rem; color: var(--color-text-muted); line-height: 1.6;">
          <em>"Actions are judged only by intentions, and every person will have only what they intended..."</em> (Sahih al-Bukhari #1).
        </p>
      </blockquote>

      <p style="line-height: 1.8; color: var(--color-text-main);">
        The early Islamic scholar Abdullah ibn al-Mubarak (d. 181 AH) famously observed: <em>"The Isnad is part of the religion; were it not for the Isnad, anyone would say whatever they wished"</em> (Sahih Muslim, Introduction). The invention of the Isnad system was history's first rigorous scientific method of source verification, preceding modern historiography by a millennium.
      </p>
    </section>

    <!-- Section 3 -->
    <section id="authenticity-criteria" style="margin-bottom: 40px;">
      <h2 style="font-size: 1.75rem; color: var(--color-primary); border-bottom: 2px solid var(--color-border-subtle); padding-bottom: 8px;">
        3. The Five Rigorous Criteria for a Sahih Hadith
      </h2>
      <p style="line-height: 1.8; color: var(--color-text-main);">
        A Hadith is not graded authentic simply because its content sounds inspiring. Master hadith critics established five mandatory, objective criteria that must all be satisfied simultaneously for a narration to be classified as <strong>Ṣaḥīḥ</strong> (Sound/Authentic):
      </p>

      <div style="background: var(--color-card); border: 1px solid var(--color-border); border-radius: 12px; padding: 24px; margin: 20px 0;">
        <ol style="margin: 0; padding-left: 20px; line-height: 2; color: var(--color-text-main);">
          <li>
            <strong>1. Ittiṣāl al-Sanad (Continuous Chain of Transmission):</strong> Every single narrator in the chain must have directly met and heard the narration from the narrator immediately preceding them, with zero missing links or gaps from compiler to the Prophet ﷺ.
          </li>
          <li>
            <strong>2. 'Adālat al-Ruwāt (Integrity of the Narrators):</strong> Every narrator must be a sane, adult Muslim recognized for piety, adherence to Sunnah, honesty in speech, and freedom from major sins, public misconduct, or intellectual corruption.
          </li>
          <li>
            <strong>3. Ḍabṭ al-Ruwāt (Precision of Memory):</strong> Every narrator must possess documented, tested photographic memory (<em>Dabt Sadr</em>) or impeccable preserved written manuscripts (<em>Dabt Kitab</em>), consistently transmitting reports without confusion.
          </li>
          <li>
            <strong>4. 'Adam al-Shudhūdh (Absence of Contradiction / Anomaly):</strong> The report must not contradict another narration transmitted by narrators of even greater reliability and number.
          </li>
          <li>
            <strong>5. 'Adam al-'Illah al-Qādiḥah (Absence of Hidden Defects):</strong> The narration must be free from subtle, hidden defects (such as an obscure narrator attribution error or interpolated word) that only master critics can detect.
          </li>
        </ol>
      </div>
    </section>

    <!-- Section 4 -->
    <section id="authenticity-tiers" style="margin-bottom: 40px;">
      <h2 style="font-size: 1.75rem; color: var(--color-primary); border-bottom: 2px solid var(--color-border-subtle); padding-bottom: 8px;">
        4. Authenticity Tiers: Sahih, Hasan, Da'if, and Mawdu'
      </h2>
      <p style="line-height: 1.8; color: var(--color-text-main);">
        Based on how completely a narration fulfills the five criteria, hadiths are graded into four primary authenticity tiers:
      </p>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin: 24px 0;">
        <div class="card" style="padding: 18px; border-left: 4px solid #15803D;">
          <h4 style="margin: 0 0 6px 0; color: #15803D; font-size: 1.1rem;">1. Ṣaḥīḥ (Authentic / Sound)</h4>
          <p style="margin: 0; font-size: 0.88rem; color: var(--color-text-muted); line-height: 1.6;">
            Completely meets all five criteria with highest narrator precision. Forms definitive evidence (<em>Hujjah</em>) for deriving legal rulings and theology.
          </p>
        </div>

        <div class="card" style="padding: 18px; border-left: 4px solid #B58B50;">
          <h4 style="margin: 0 0 6px 0; color: #B58B50; font-size: 1.1rem;">2. Ḥasan (Good / Reliable)</h4>
          <p style="margin: 0; font-size: 0.88rem; color: var(--color-text-muted); line-height: 1.6;">
            Fulfills all criteria, except that one or more narrators possess slightly lesser memory precision while remaining upright and honest. Fully acceptable as evidence in Islamic law.
          </p>
        </div>

        <div class="card" style="padding: 18px; border-left: 4px solid #CA8A04;">
          <h4 style="margin: 0 0 6px 0; color: #CA8A04; font-size: 1.1rem;">3. Ḍa'īf (Weak)</h4>
          <p style="margin: 0; font-size: 0.88rem; color: var(--color-text-muted); line-height: 1.6;">
            Fails to meet one or more conditions due to a gap in the chain or narrator weakness. Cannot establish legal obligations or creed; used cautiously in virtues of deeds (*Fada'il*).
          </p>
        </div>

        <div class="card" style="padding: 18px; border-left: 4px solid #B91C1C;">
          <h4 style="margin: 0 0 6px 0; color: #B91C1C; font-size: 1.1rem;">4. Mawḍū' (Fabricated / Forged)</h4>
          <p style="margin: 0; font-size: 0.88rem; color: var(--color-text-muted); line-height: 1.6;">
            A deliberate forgery invented by a liar. Strictly prohibited to cite or circulate except to warn people against it. The Prophet ﷺ cursed forgers: <em>"Whoever lies upon me deliberately, let him take his seat in the Fire"</em> (Bukhari #107).
          </p>
        </div>
      </div>
    </section>

    <!-- Section 5 -->
    <section id="kutub-al-sittah" style="margin-bottom: 40px;">
      <h2 style="font-size: 1.75rem; color: var(--color-primary); border-bottom: 2px solid var(--color-border-subtle); padding-bottom: 8px;">
        5. The Canonical Six Hadith Compilations (Al-Kutub al-Sittah)
      </h2>
      <p style="line-height: 1.8; color: var(--color-text-main);">
        During the Golden Age of Hadith compilation in the 3rd century AH (9th century CE), master scholars sifted hundreds of thousands of transmitted narrations to produce the six universally recognized collections:
      </p>

      <div style="background: var(--color-card); border: 1px solid var(--color-border); border-radius: 10px; overflow: hidden; margin: 24px 0;">
        <table style="width: 100%; border-collapse: collapse; font-size: 0.9rem; text-align: left;">
          <thead>
            <tr style="background: var(--color-surface); border-bottom: 2px solid var(--color-border);">
              <th style="padding: 12px 16px; color: var(--color-primary);">Compilation Name</th>
              <th style="padding: 12px 16px; color: var(--color-primary);">Compiler & Death Date</th>
              <th style="padding: 12px 16px; color: var(--color-primary);">Key Characteristics & Scope</th>
            </tr>
          </thead>
          <tbody>
            <tr style="border-bottom: 1px solid var(--color-border-subtle);">
              <td style="padding: 12px 16px; font-weight: 700;">1. Ṣaḥīḥ al-Bukhārī</td>
              <td style="padding: 12px 16px;">Imam Muhammad ibn Isma'il al-Bukhari (d. 256 AH)</td>
              <td style="padding: 12px 16px;">The most authentic book after the Quran. Sifted from 600,000 reports; contains 7,563 narrations (including repetitions).</td>
            </tr>
            <tr style="border-bottom: 1px solid var(--color-border-subtle);">
              <td style="padding: 12px 16px; font-weight: 700;">2. Ṣaḥīḥ Muslim</td>
              <td style="padding: 12px 16px;">Imam Muslim ibn al-Hajjaj al-Naysaburi (d. 261 AH)</td>
              <td style="padding: 12px 16px;">Shares the highest tier of authenticity with Bukhari. Celebrated for thematic grouping of variant narrations in one place.</td>
            </tr>
            <tr style="border-bottom: 1px solid var(--color-border-subtle);">
              <td style="padding: 12px 16px; font-weight: 700;">3. Sunan Abī Dāwūd</td>
              <td style="padding: 12px 16px;">Imam Abu Dawud al-Sijistani (d. 275 AH)</td>
              <td style="padding: 12px 16px;">The premier legal collection focused on Fiqh rulings (<em>Ahkam</em>); contains ~5,274 traditions with authenticity notes.</td>
            </tr>
            <tr style="border-bottom: 1px solid var(--color-border-subtle);">
              <td style="padding: 12px 16px; font-weight: 700;">4. Jāmi' at-Tirmidhī</td>
              <td style="padding: 12px 16px;">Imam Abu 'Isa Muhammad at-Tirmidhi (d. 279 AH)</td>
              <td style="padding: 12px 16px;">Pioneered precise classification grades (e.g. <em>Hasan Sahih</em>) and systematically cited the legal positions of the jurists.</td>
            </tr>
            <tr style="border-bottom: 1px solid var(--color-border-subtle);">
              <td style="padding: 12px 16px; font-weight: 700;">5. Sunan an-Nasā'ī</td>
              <td style="padding: 12px 16px;">Imam Ahmad ibn Shu'ayb an-Nasa'i (d. 303 AH)</td>
              <td style="padding: 12px 16px;">Features the strictest narrator conditions among the Sunan collections, highlighting subtle Isnad variations.</td>
            </tr>
            <tr>
              <td style="padding: 12px 16px; font-weight: 700;">6. Sunan Ibn Mājah</td>
              <td style="padding: 12px 16px;">Imam Muhammad ibn Majah al-Qazwini (d. 273 AH)</td>
              <td style="padding: 12px 16px;">Renowned for concise legal arrangement and unique narrations, though containing a higher proportion of weak reports.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- Section 6 -->
    <section id="numbering-systems" style="margin-bottom: 40px;">
      <h2 style="font-size: 1.75rem; color: var(--color-primary); border-bottom: 2px solid var(--color-border-subtle); padding-bottom: 8px;">
        6. Why Hadith Numbers Differ Between Books and Websites
      </h2>
      <p style="line-height: 1.8; color: var(--color-text-main);">
        A major point of confusion for modern students occurs when looking up a Hadith cited online as "#2516" and finding a completely different text in a printed book. Understanding the publishing history solves this puzzle:
      </p>

      <ul style="line-height: 1.8; color: var(--color-text-main); margin-bottom: 20px;">
        <li><strong>No Classical Numbering:</strong> Classical compilers organized their collections into "Books" (<em>Kitāb</em>) and "Chapters" (<em>Bāb</em>), such as <em>Kitab al-Iman, Bab al-Du'a</em>. They did not assign sequential numbers (1 to 7563) to individual texts.</li>
        <li><strong>Faw'ad 'Abd al-Baqi Indexing:</strong> In the mid-20th century, Egyptian scholar Muhammad Fu'ad 'Abd al-Baqi indexed Sahih Muslim and Sunan Ibn Majah. Many academic books cite his system.</li>
        <li><strong>Darussalam Indexing:</strong> The international publisher Darussalam introduced a continuous sequential numbering system across all Six Books for modern global distribution. Most modern English websites (including Sunnah.com) use Darussalam or 'Abd al-Baqi.</li>
        <li><strong>Repetition Counts:</strong> Imam al-Bukhari frequently cited the same Hadith in five different chapters to extract five different legal principles. Some editors number every repeated occurrence; others number only unique narrations.</li>
      </ul>

      <p style="line-height: 1.8; color: var(--color-text-main);">
        <em>Rule of Thumb:</em> When citing a Hadith for verification, always record the <strong>Collection Name</strong> (e.g. Sahih al-Bukhari), the <strong>Book/Chapter Title</strong>, and the <strong>Primary Sahabi Narrator</strong> alongside the digit.
      </p>
    </section>

    <!-- Section 7 -->
    <section id="scholarly-evaluations" style="margin-bottom: 40px;">
      <h2 style="font-size: 1.75rem; color: var(--color-primary); border-bottom: 2px solid var(--color-border-subtle); padding-bottom: 8px;">
        7. How to Understand Scholarly Differences in Hadith Grading
      </h2>
      <p style="line-height: 1.8; color: var(--color-text-main);">
        Occasionally, an individual Hadith is graded <em>Hasan</em> by Imam at-Tirmidhi, <em>Da'if</em> by Imam Abu Hatim, and <em>Sahih</em> by a later scholar like Al-Albani. Does this mean the science is subjective?
      </p>
      <p style="line-height: 1.8; color: var(--color-text-main);">
        Not at all. Grading a Hadith is a sophisticated academic evaluation akin to legal jurisprudence (<em>Ijtihad</em>). One scholar may consider a narrator upright because another master critic praised him, while a different scholar may have discovered a documented lapse of memory in that narrator's later years in Baghdad. Furthermore, multiple independent weak chains can strengthen each other to reach the level of <strong>Hasan li-Ghayrih</strong> (Good due to supporting testimonies).
      </p>
    </section>

    <!-- Section 8 -->
    <section id="key-takeaways" style="margin-bottom: 40px; background: var(--color-surface); padding: 24px; border-radius: 12px; border: 1px solid var(--color-border);">
      <h2 style="font-size: 1.5rem; color: var(--color-primary); margin-top: 0; margin-bottom: 12px;">
        8. Summary and Guidelines for Reliable Study
      </h2>
      <ul style="line-height: 1.8; color: var(--color-text-main); margin: 0; padding-left: 20px;">
        <li><strong>Sunnah is Inseparable:</strong> The practical application and detail of the Quran reside in the authentic Sunnah.</li>
        <li><strong>Isnad is Unique:</strong> The chain of transmission is Islam's unique historic shield against fabrication and corruption.</li>
        <li><strong>Five Pillars of Authenticity:</strong> Continuous chain, righteous narrators, precise memory, no anomaly, and no hidden flaw.</li>
        <li><strong>Respect Scholarly Nuance:</strong> Understand why reference numbers vary across editions and why weak hadiths are not automatically forged lies.</li>
        <li><strong>Verify Before Sharing:</strong> Never forward or teach a Hadith without verifying its collection reference and authenticity grade.</li>
      </ul>
    </section>
  `;

  const sourcesHtml = `
    <li><strong>Al-Qur'an al-Kareem:</strong> Surah Al-Hashr (59:7), Surah An-Nisa (4:80), Surah An-Nahl (16:44).</li>
    <li><strong>Sahih al-Bukhari:</strong> Hadith #1 (Innamal-a'malu bin-niyyat), Hadith #107 (Warning against attributing lies to the Prophet).</li>
    <li><strong>Sahih Muslim:</strong> Muqaddimah (Introduction on the necessity of the Isnad and criticizing unreliable narrators).</li>
    <li><strong>Jami' at-Tirmidhi:</strong> Hadith #413 (Accountability of prayer), Kitab al-'Ilal (Methodology of grading).</li>
    <li><strong>Ibn al-Salah:</strong> <em>'Ulum al-Hadith</em> (Muqaddimah Ibn al-Salah), Dar al-Fikr, Damascus.</li>
    <li><strong>Ibn Hajar al-Asqalani:</strong> <em>Nukhbat al-Fikar fi Mustalah Ahl al-Athar</em>, Dar al-Kutub al-'Ilmiyyah, Beirut.</li>
  `;

  return buildArticleHtml({
    slug: 'hadith-and-sunnah-authenticity',
    title: "Hadith and Sunnah: Collections, References and Authenticity",
    arabicSubtitle: "وَمَا آتَاكُمُ الرَّسُولُ فَخُذُوهُ وَمَا نَهَاكُمْ عَنْهُ فَانتَهُوا — OBEY THE MESSENGER",
    metaDescription: "An authoritative educational guide to the Science of Hadith (Mustalah al-Hadith). Learn the difference between Sunnah and Hadith, Isnad and Matn, authenticity grades, the Kutub al-Sittah, and reference numbering.",
    readingTime: "13 min read",
    wordCount: "2,320",
    tocItems,
    relatedTools,
    faqItems,
    contentHtml,
    sourcesHtml
  });
}

module.exports = { getArticle8 };
