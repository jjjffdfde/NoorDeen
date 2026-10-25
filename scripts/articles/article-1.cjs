/**
 * Article 1: A Complete Beginner's Guide to Islam
 */
const { buildArticleHtml } = require('./template.cjs');

function getArticle1() {
  const tocItems = [
    { id: "meaning-of-islam", title: "The Meaning of Islam: Peace and Submission" },
    { id: "purpose-of-worship", title: "The Purpose of Existence: Why We Worship" },
    { id: "six-articles-of-faith", title: "The Six Articles of Faith (Arkan al-Iman)" },
    { id: "five-pillars-overview", title: "The Five Pillars of Islam (Arkan al-Islam)" },
    { id: "prophetic-model", title: "The Prophetic Model: Muhammad ﷺ as Teacher" },
    { id: "balanced-human", title: "The Balanced Human: Faith, Action, and Akhlaq" },
    { id: "learning-pathway", title: "A Sensible Learning Pathway for Beginners" },
    { id: "key-takeaways", title: "Summary and Key Spiritual Lessons" }
  ];

  const relatedTools = [
    { icon: "🏛️", title: "Five Pillars Guide", url: "../pillars.html" },
    { icon: "🕌", title: "Step-by-Step Salah Guide", url: "../salah-guide.html" },
    { icon: "💧", title: "Wudu Purification Guide", url: "../wudu-guide.html" },
    { icon: "⭐", title: "Six Kalimas of Islam", url: "../kalimas.html" }
  ];

  const faqItems = [
    {
      question: "How does someone officially embrace Islam?",
      answer: "A person becomes a Muslim by sincerely professing the Shahadah (the Testimony of Faith) with understanding and conviction: <em>Ash-hadu alla ilaha illallah, wa ash-hadu anna Muhammadan rasulullah</em> ('I testify that there is no deity worthy of worship except Allah, and I testify that Muhammad is the Messenger of Allah'). While it is virtuous to make this declaration in front of witnesses or at a mosque for community support, sincere belief and verbal declaration between oneself and Allah is spiritually binding."
    },
    {
      question: "Do I have to learn Arabic immediately to be a practicing Muslim?",
      answer: "No. Islam is a universal religion for all mankind regardless of native tongue. While Arabic is the sacred language of Quranic revelation and prescribed prayer (Salah), a beginner should immediately learn the essential phrases of prayer phonetically while using English or their native language for personal supplication (Dua), Quranic comprehension, and general study. Pacing oneself is a recognized Sunnah."
    },
    {
      question: "How should a new Muslim manage family relationships with non-Muslim relatives?",
      answer: "Islam strictly commands excellence, kindness, and dutiful respect toward parents and family members (Birr al-Walidayn), even if they do not share your faith (Surah Luqman 31:15). The only exception is if they ask you to commit polytheism or disobedience to Allah, in which case one respectfully declines while maintaining gentle companionship, patience, and good conduct."
    },
    {
      question: "What should I do if I feel overwhelmed by how much there is to learn?",
      answer: "The Prophet Muhammad ﷺ warned: 'Indeed, this religion is easy, and no one overburdens himself in religion except that it will overcome him' (Sahih al-Bukhari #39). Focus first on establishing pure monotheism, followed by learning the daily ritual prayer (Salah) gradually, step-by-step. Islam is a lifelong journey of incremental growth, not an overnight transformation."
    }
  ];

  const contentHtml = `
    <!-- Introduction -->
    <div style="background: var(--color-surface); padding: 24px; border-radius: 12px; margin-bottom: 36px; border-left: 4px solid var(--color-primary);">
      <p style="font-size: 1.1rem; line-height: 1.7; margin: 0; color: var(--color-text-main);">
        Entering the study of Islam can feel profound yet daunting. With over fourteen centuries of scholarly tradition, diverse cultures, and profound jurisprudence, a newcomer often asks: <em>Where do I begin? What are the non-negotiable foundations? How does faith translate into everyday life?</em> This guide provides a coherent, source-verified overview of Islam's essential worldview, its pillars of faith, its acts of devotion, and a practical, compassionate roadmap for lifelong learning.
      </p>
    </div>

    <!-- Section 1 -->
    <section id="meaning-of-islam" style="margin-bottom: 40px;">
      <h2 style="font-size: 1.75rem; color: var(--color-primary); border-bottom: 2px solid var(--color-border-subtle); padding-bottom: 8px;">
        1. The Meaning of Islam: Peace and Submission
      </h2>
      <p style="line-height: 1.8; color: var(--color-text-main);">
        Linguistically, the Arabic word <strong>Islām</strong> (إِسْلَام) derives from the triconsonantal root <em>S-L-M</em> (س-ل-م), which carries two profound, interconnected connotations: <strong>Salām</strong> (peace, safety, and wholeness) and <strong>Istislām</strong> (voluntary submission, surrender, and resignation to a higher authority). In an Islamic theological context, Islam is defined as:
      </p>

      <blockquote style="background: var(--color-card); border-left: 4px solid var(--color-gold); padding: 18px 24px; margin: 20px 0; border-radius: 0 8px 8px 0;">
        <div style="font-family: 'Amiri', 'Traditional Arabic', serif; font-size: 1.4rem; direction: rtl; text-align: right; color: var(--color-primary); line-height: 2;">
          الْإِسْلَامُ هُوَ الِاسْتِسْلَامُ لِلَّهِ بِالتَّوْحِيدِ، وَالِانْقِيَادُ لَهُ بِالطَّاعَةِ، وَالْبَرَاءَةُ مِنَ الشِّرْكِ وَأَهْلِهِ
        </div>
        <div style="margin-top: 10px; font-style: italic; color: var(--color-text-muted); font-size: 0.95rem;">
          "Islam is voluntary surrender to Allah through monotheism, compliance to Him through obedience, and sincere dissociation from polytheism and its practices."
        </div>
      </blockquote>

      <p style="line-height: 1.8; color: var(--color-text-main);">
        Islam is not named after a human founder, a geographic tribe, or a specific century. Rather, it represents the primordial religion of every prophet sent by God—from Adam, Noah, Abraham, Moses, and Jesus, culminating in Muhammad (peace be upon them all). A Muslim is simply someone who consciously chooses to align their heart, mind, and deeds with the will of their Creator.
      </p>
    </section>

    <!-- Section 2 -->
    <section id="purpose-of-worship" style="margin-bottom: 40px;">
      <h2 style="font-size: 1.75rem; color: var(--color-primary); border-bottom: 2px solid var(--color-border-subtle); padding-bottom: 8px;">
        2. The Purpose of Existence: Why We Worship
      </h2>
      <p style="line-height: 1.8; color: var(--color-text-main);">
        One of the most foundational existential questions human beings confront is: <em>Why am I here? What is the purpose of life?</em> The Quran provides an unequivocal and direct answer in Surah Adh-Dhariyat:
      </p>

      <div style="background: var(--color-card); border: 1px solid var(--color-border); border-radius: 10px; padding: 22px; margin: 24px 0; text-align: center;">
        <div style="font-family: 'Amiri', 'Traditional Arabic', serif; font-size: 1.6rem; color: var(--color-primary); line-height: 2.2; margin-bottom: 12px;">
          وَمَا خَلَقْتُ الْجِنَّ وَالْإِنسَ إِلَّا لِيَعْبُدُونِ
        </div>
        <div style="font-weight: 600; color: var(--color-gold); margin-bottom: 6px;">
          "And I did not create the jinn and mankind except to worship Me."
        </div>
        <div style="font-size: 0.85rem; color: var(--color-text-muted);">
          — Surah Adh-Dhariyat (51:56) | Tafsir Ibn Kathir
        </div>
      </div>

      <p style="line-height: 1.8; color: var(--color-text-main);">
        In Islamic theology, <strong>'Ibādah</strong> (worship) is not confined to mechanical rituals performed inside a sanctuary. As classical scholar Imam Ibn Taymiyyah defined in <em>Al-'Ubudiyyah</em>, worship is a comprehensive umbrella term encompassing everything that Allah loves and is pleased with—including truthful speech, fulfilling trusts, kindness to parents, keeping promises, feeding the hungry, seeking beneficial knowledge, and even smiling at a fellow human being. 
      </p>
      <p style="line-height: 1.8; color: var(--color-text-main);">
        Worship does not benefit God, for God is <em>Al-Ghaniyy</em> (The Absolutely Self-Sufficient). Rather, worship is the divine technology through which the human soul discovers inner tranquility, moral direction, and liberation from servitude to worldly desires, peer pressure, and anxiety.
      </p>
    </section>

    <!-- Section 3 -->
    <section id="six-articles-of-faith" style="margin-bottom: 40px;">
      <h2 style="font-size: 1.75rem; color: var(--color-primary); border-bottom: 2px solid var(--color-border-subtle); padding-bottom: 8px;">
        3. The Six Articles of Faith (Arkān al-Īmān)
      </h2>
      <p style="line-height: 1.8; color: var(--color-text-main);">
        While Islam governs outward actions, <strong>Īmān</strong> (Faith) forms the internal, intellectual, and spiritual conviction of the heart. In the famous <em>Hadith of Jibril</em> (Sahih Muslim #8), the Prophet Muhammad ﷺ detailed the six non-negotiable articles of Islamic creed:
      </p>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 18px; margin: 24px 0;">
        <div class="card" style="padding: 20px; border-left: 3px solid var(--color-primary);">
          <h3 style="margin-top: 0; color: var(--color-primary); font-size: 1.15rem;">1. Belief in Allah (الإِيمَانُ بِاللَّهِ)</h3>
          <p style="font-size: 0.92rem; color: var(--color-text-muted); line-height: 1.6; margin: 0;">
            Believing that Allah is the Sole Creator, Sustainer, and Sovereign of the universe, possessing absolute perfection in His Divine Names and Attributes, with no partner, equal, parent, or offspring (Surah Al-Ikhlas 112:1-4).
          </p>
        </div>

        <div class="card" style="padding: 20px; border-left: 3px solid var(--color-primary);">
          <h3 style="margin-top: 0; color: var(--color-primary); font-size: 1.15rem;">2. Belief in the Angels (المَلَائِكَة)</h3>
          <p style="font-size: 0.92rem; color: var(--color-text-muted); line-height: 1.6; margin: 0;">
            Created from pure light, angels are noble, sinless beings who execute divine commands without fatigue. Key angels include Jibril (Gabriel, conveyor of revelation), Mika'il (Michael), and Israfil (the Horn-blower).
          </p>
        </div>

        <div class="card" style="padding: 20px; border-left: 3px solid var(--color-primary);">
          <h3 style="margin-top: 0; color: var(--color-primary); font-size: 1.15rem;">3. Belief in Revealed Scriptures (الكُتُب)</h3>
          <p style="font-size: 0.92rem; color: var(--color-text-muted); line-height: 1.6; margin: 0;">
            Believing that God revealed divine messages to previous messengers, including the Scrolls of Abraham (*Suhuf*), the Torah to Moses (*Tawrat*), the Psalms to David (*Zabur*), the Gospel to Jesus (*Injeel*), and the Final, fully preserved Quran to Muhammad ﷺ.
          </p>
        </div>

        <div class="card" style="padding: 20px; border-left: 3px solid var(--color-primary);">
          <h3 style="margin-top: 0; color: var(--color-primary); font-size: 1.15rem;">4. Belief in the Messengers (الرُّسُل)</h3>
          <p style="font-size: 0.92rem; color: var(--color-text-muted); line-height: 1.6; margin: 0;">
            God sent prophets to every nation to convey monotheism and moral guidance. Muslims revere all prophets equally without rejecting any, accepting Muhammad ﷺ as the Seal and Final Messenger for all mankind.
          </p>
        </div>

        <div class="card" style="padding: 20px; border-left: 3px solid var(--color-primary);">
          <h3 style="margin-top: 0; color: var(--color-primary); font-size: 1.15rem;">5. Belief in the Day of Judgment (اليَوْم الآخِر)</h3>
          <p style="font-size: 0.92rem; color: var(--color-text-muted); line-height: 1.6; margin: 0;">
            This world is temporary and a testing ground. Every human soul will be bodily resurrected, held accountable before God with absolute justice, and rewarded with Paradise (*Jannah*) or disciplined in Hellfire (*Jahannam*).
          </p>
        </div>

        <div class="card" style="padding: 20px; border-left: 3px solid var(--color-primary);">
          <h3 style="margin-top: 0; color: var(--color-primary); font-size: 1.15rem;">6. Belief in Divine Destiny (القَدَر)</h3>
          <p style="font-size: 0.92rem; color: var(--color-text-muted); line-height: 1.6; margin: 0;">
            Affirming that Allah possesses all-encompassing knowledge of everything that was, is, and will be, has decreed all matters, and creates all occurrences, while humans possess real moral will and responsibility for their choices.
          </p>
        </div>
      </div>
    </section>

    <!-- Section 4 -->
    <section id="five-pillars-overview" style="margin-bottom: 40px;">
      <h2 style="font-size: 1.75rem; color: var(--color-primary); border-bottom: 2px solid var(--color-border-subtle); padding-bottom: 8px;">
        4. The Five Pillars of Islam (Arkān al-Islām)
      </h2>
      <p style="line-height: 1.8; color: var(--color-text-main);">
        If faith is the root system, the Five Pillars are the physical structure of the tree. The Prophet Muhammad ﷺ declared: <em>"Islam is built upon five..."</em> (Sahih al-Bukhari #8). These pillars represent the minimum obligatory physical observances required of every sane, adult Muslim:
      </p>

      <div style="background: var(--color-card); border: 1px solid var(--color-border); border-radius: 10px; padding: 24px; margin: 20px 0;">
        <ol style="margin: 0; padding-left: 24px; line-height: 2; color: var(--color-text-main);">
          <li>
            <strong>1. Shahadah (Testimony of Faith):</strong> Openly declaring that there is no deity worthy of worship except Allah and that Muhammad is His servant and messenger. This is the entry gate into Islam.
          </li>
          <li>
            <strong>2. Salah (The Five Daily Prayers):</strong> Performing the prescribed ritual prayers at five specific intervals across day and night (Fajr, Dhuhr, Asr, Maghrib, Isha), connecting the servant directly to God without intermediaries.
          </li>
          <li>
            <strong>3. Zakat (Obligatory Wealth Purification):</strong> An annual obligatory transfer of 2.5% of surplus qualifying wealth held above the Nisab threshold for a lunar year, distributed to the poor, indebted, and vulnerable.
          </li>
          <li>
            <strong>4. Sawm (Fasting Ramadan):</strong> Abstaining from food, drink, and marital relations from dawn until sunset throughout the lunar month of Ramadan, cultivating self-discipline, compassion, and God-consciousness (*Taqwa*).
          </li>
          <li>
            <strong>5. Hajj (The Pilgrimage to Makkah):</strong> A physical pilgrimage to the Holy Ka'bah and surrounding sacred sites, obligatory once in a lifetime for every Muslim who possesses physical health and financial means (*Istita'ah*).
          </li>
        </ol>
      </div>

      <p style="line-height: 1.8; color: var(--color-text-main);">
        For a deep exploration of the scriptural evidences, spiritual wisdom, and legal parameters of each pillar, consult our dedicated <a href="../pillars.html" style="color: var(--color-primary); font-weight: 700;">Complete Five Pillars Guide</a>.
      </p>
    </section>

    <!-- Section 5 -->
    <section id="prophetic-model" style="margin-bottom: 40px;">
      <h2 style="font-size: 1.75rem; color: var(--color-primary); border-bottom: 2px solid var(--color-border-subtle); padding-bottom: 8px;">
        5. The Prophetic Model: Muhammad ﷺ as Teacher
      </h2>
      <p style="line-height: 1.8; color: var(--color-text-main);">
        Muslims do not worship Prophet Muhammad ﷺ. He was a mortal human being who ate food, walked in markets, experienced grief, and passed away. However, he was chosen by God as the ultimate spiritual exemplar, described by Allah in the Quran as: <em>"And indeed, you are of a great moral character"</em> (Surah Al-Qalam 68:4) and <em>"A mercy to all the worlds"</em> (Surah Al-Anbiya 21:107).
      </p>
      <p style="line-height: 1.8; color: var(--color-text-main);">
        When his beloved wife Aisha (may Allah be pleased with her) was asked about the character of the Prophet ﷺ, she famously replied: <em>"His character was the Quran"</em> (Sahih Muslim #746). To understand Islam practically, one studies the <strong>Sunnah</strong> (his established teachings, actions, and approvals) and the <strong>Seerah</strong> (his historical biography).
      </p>
    </section>

    <!-- Section 6 -->
    <section id="balanced-human" style="margin-bottom: 40px;">
      <h2 style="font-size: 1.75rem; color: var(--color-primary); border-bottom: 2px solid var(--color-border-subtle); padding-bottom: 8px;">
        6. The Balanced Human: Faith, Action, and Akhlāq
      </h2>
      <p style="line-height: 1.8; color: var(--color-text-main);">
        A frequent misconception is that Islam is purely legalistic or ritualistic. In truth, Islamic scholarship structures the faith into three harmonious dimensions:
      </p>

      <ul style="line-height: 1.8; color: var(--color-text-main); margin-bottom: 20px;">
        <li><strong>Islām (Outward Deeds):</strong> Ritual prayer, fasting, charity, honesty, and law.</li>
        <li><strong>Īmān (Internal Creed):</strong> Intellectual conviction, trust in Allah, love for the Messenger.</li>
        <li><strong>Iḥsān (Spiritual Excellence):</strong> As defined by the Prophet ﷺ, <em>"To worship Allah as if you see Him, and if you do not see Him, knowing that He sees you."</em> (Sahih Muslim #8).</li>
      </ul>

      <p style="line-height: 1.8; color: var(--color-text-main);">
        Noble character (<strong>Akhlāq</strong>) is the fruit of true faith. The Prophet ﷺ declared: <em>"The most complete of believers in faith are those with the best character"</em> (Jami' at-Tirmidhi #1162). A Muslim is expected to be honest in business, loyal in friendship, compassionate to animals, forgiving toward rivals, and an asset to their community.
      </p>
    </section>

    <!-- Section 7 -->
    <section id="learning-pathway" style="margin-bottom: 40px;">
      <h2 style="font-size: 1.75rem; color: var(--color-primary); border-bottom: 2px solid var(--color-border-subtle); padding-bottom: 8px;">
        7. A Sensible Learning Pathway for Beginners
      </h2>
      <p style="line-height: 1.8; color: var(--color-text-main);">
        A major reason beginners feel discouraged is attempting to master every detailed ruling simultaneously. Classical Islamic pedagogy prescribes a phased, gradual progression:
      </p>

      <div style="background: var(--color-card); border: 1px solid var(--color-border); border-radius: 12px; padding: 24px; margin: 20px 0;">
        <div style="display: flex; gap: 16px; margin-bottom: 20px; align-items: flex-start;">
          <div style="background: var(--color-primary); color: #FFF; width: 36px; height: 36px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; flex-shrink: 0;">1</div>
          <div>
            <h4 style="margin: 0 0 6px 0; color: var(--color-primary); font-size: 1.1rem;">Phase 1: Internalizing Creed & Identity (Weeks 1–2)</h4>
            <p style="margin: 0; color: var(--color-text-muted); font-size: 0.95rem; line-height: 1.6;">
              Solidify understanding of Tawhid (the Oneness of God). Learn the meaning of the Shahadah and the Six Articles of Faith. Read our article on <a href="tawhid-and-the-shahadah.html" style="color: var(--color-primary);">Tawhid and the Shahadah</a>.
            </p>
          </div>
        </div>

        <div style="display: flex; gap: 16px; margin-bottom: 20px; align-items: flex-start;">
          <div style="background: var(--color-primary); color: #FFF; width: 36px; height: 36px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; flex-shrink: 0;">2</div>
          <div>
            <h4 style="margin: 0 0 6px 0; color: var(--color-primary); font-size: 1.1rem;">Phase 2: Mastering Physical Purity (Taharah) (Weeks 3–4)</h4>
            <p style="margin: 0; color: var(--color-text-muted); font-size: 0.95rem; line-height: 1.6;">
              Prayer is invalid without ritual cleanliness. Learn the step-by-step procedure of Wudu (minor ablution) and Ghusl (major bath) using our <a href="../wudu-guide.html" style="color: var(--color-primary);">Wudu and Taharah Guide</a>.
            </p>
          </div>
        </div>

        <div style="display: flex; gap: 16px; margin-bottom: 20px; align-items: flex-start;">
          <div style="background: var(--color-primary); color: #FFF; width: 36px; height: 36px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; flex-shrink: 0;">3</div>
          <div>
            <h4 style="margin: 0 0 6px 0; color: var(--color-primary); font-size: 1.1rem;">Phase 3: Learning the Daily Prayer (Salah) (Month 2)</h4>
            <p style="margin: 0; color: var(--color-text-muted); font-size: 0.95rem; line-height: 1.6;">
              Begin by learning the basic physical postures of prayer. Learn Surah Al-Fatihah in Arabic phonetically, along with essential praises (*Subhana Rabbiyal 'Azeem* and *Subhana Rabbiyal A'la*). Refer to our <a href="../salah-guide.html" style="color: var(--color-primary);">Salah Step-by-Step Guide</a>.
            </p>
          </div>
        </div>

        <div style="display: flex; gap: 16px; margin-bottom: 20px; align-items: flex-start;">
          <div style="background: var(--color-primary); color: #FFF; width: 36px; height: 36px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; flex-shrink: 0;">4</div>
          <div>
            <h4 style="margin: 0 0 6px 0; color: var(--color-primary); font-size: 1.1rem;">Phase 4: Establishing a Quran Study Habit (Month 3)</h4>
            <p style="margin: 0; color: var(--color-text-muted); font-size: 0.95rem; line-height: 1.6;">
              Read a reliable English translation of the Quran daily for 15 minutes. Start from short Surahs in Juz 30 (such as Surah Al-Ikhlas, Al-Falaq, An-Nas, and Al-Kawthar) and read our guide on <a href="how-to-read-and-understand-quran.html" style="color: var(--color-primary);">How to Read and Understand the Quran</a>.
            </p>
          </div>
        </div>

        <div style="display: flex; gap: 16px; align-items: flex-start;">
          <div style="background: var(--color-primary); color: #FFF; width: 36px; height: 36px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; flex-shrink: 0;">5</div>
          <div>
            <h4 style="margin: 0 0 6px 0; color: var(--color-primary); font-size: 1.1rem;">Phase 5: Community & Ethical Maturation (Ongoing)</h4>
            <p style="margin: 0; color: var(--color-text-muted); font-size: 0.95rem; line-height: 1.6;">
              Connect with a local mainstream mosque, cultivate friendships with positive mentors, integrate morning and evening Adhkar into your routine, and maintain patience with your personal growth.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 8 -->
    <section id="key-takeaways" style="margin-bottom: 40px; background: var(--color-surface); padding: 24px; border-radius: 12px; border: 1px solid var(--color-border);">
      <h2 style="font-size: 1.5rem; color: var(--color-primary); margin-top: 0; margin-bottom: 12px;">
        8. Summary and Key Spiritual Lessons
      </h2>
      <ul style="line-height: 1.8; color: var(--color-text-main); margin: 0; padding-left: 20px;">
        <li><strong>Pure Monotheism:</strong> Islam centers on Tawhid—worshipping Allah directly with no partners or intermediaries.</li>
        <li><strong>Comprehensive Life Way:</strong> Worship encompasses daily prayer, ethical work, familial kindness, charity, and social justice.</li>
        <li><strong>Six Articles & Five Pillars:</strong> Faith internalizes sacred truths, while the pillars establish tangible rhythm and community solidarity.</li>
        <li><strong>Patience with Learning:</strong> Pacing oneself is not a compromise; it is an authentic Sunnah practice that prevents burnout.</li>
        <li><strong>Continuous Repentance:</strong> God does not expect human beings to be angelic or sinless; He expects sincere effort and constant return (*Tawbah*).</li>
      </ul>
    </section>
  `;

  const sourcesHtml = `
    <li><strong>Al-Qur'an al-Kareem:</strong> Surah Adh-Dhariyat (51:56), Surah Al-Ikhlas (112:1-4), Surah Al-Qalam (68:4), Surah Al-Anbiya (21:107), Surah Luqman (31:15).</li>
    <li><strong>Sahih al-Bukhari:</strong> Hadith #8 ("Islam is built upon five..."), Hadith #39 ("Indeed the religion is easy...").</li>
    <li><strong>Sahih Muslim:</strong> Hadith #8 (The Hadith of Jibril on Islam, Iman, and Ihsan), Hadith #746 (Aisha's testimony on the Prophet's character).</li>
    <li><strong>Jami' at-Tirmidhi:</strong> Hadith #1162 ("The most complete in faith are those best in character").</li>
    <li><strong>Ibn Taymiyyah:</strong> <em>Al-'Ubudiyyah</em> (The Essence of Servitude), Dar al-Kitab al-Arabi, Beirut.</li>
    <li><strong>Ibn Kathir:</strong> <em>Tafsir al-Qur'an al-'Azim</em>, Dar Taybah, Riyadh, commentary on Surah Adh-Dhariyat 51:56.</li>
  `;

  return buildArticleHtml({
    slug: 'beginners-guide-to-islam',
    title: "A Complete Beginner's Guide to Islam",
    arabicSubtitle: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ — الدَّلِيلُ الشَّامِلُ لِلْمُبْتَدِئِينَ فِي الْإِسْلَامِ",
    metaDescription: "An authentic, comprehensive beginner's guide to Islam. Explores the core concept of submission, the purpose of human existence, the 6 Articles of Faith, 5 Pillars, and a structured learning pathway.",
    readingTime: "11 min read",
    wordCount: "2,250",
    tocItems,
    relatedTools,
    faqItems,
    contentHtml,
    sourcesHtml
  });
}

module.exports = { getArticle1 };
