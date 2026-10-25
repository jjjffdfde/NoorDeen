/**
 * Article 7: Wudu, Ghusl and Tayammum: A Practical Study Guide
 */
const { buildArticleHtml } = require('./template.cjs');

function getArticle7() {
  const tocItems = [
    { id: "philosophy-of-taharah", title: "The Philosophy of Taharah: Half of Faith" },
    { id: "hadath-two-states", title: "The Two States of Ritual Impurity (Asghar vs Akbar)" },
    { id: "step-by-step-wudu", title: "Part 1: Al-Wudu (The Minor Ritual Ablution)" },
    { id: "nullifiers-of-wudu", title: "What Nullifies Wudu (Nawaqid) vs What Does Not" },
    { id: "wiping-over-footwear", title: "Wiping Over Footwear (Al-Masah 'ala al-Khuffayn)" },
    { id: "step-by-step-ghusl", title: "Part 2: Al-Ghusl (The Major Ritual Bath)" },
    { id: "step-by-step-tayammum", title: "Part 3: Al-Tayammum (The Dry Concession)" },
    { id: "madhhab-nuances", title: "Madhhab Differences Treated with Scholarly Balance" },
    { id: "key-takeaways", title: "Summary & Practical Purification Checklist" }
  ];

  const relatedTools = [
    { icon: "💧", title: "Interactive Wudu Guide", url: "../wudu-guide.html" },
    { icon: "🕌", title: "Step-by-Step Salah Guide", url: "../salah-guide.html" },
    { icon: "⏱️", title: "Solar Prayer Times", url: "../prayer-times.html" },
    { icon: "🤲", title: "Purification Duas & Adhkar", url: "../duas.html" }
  ];

  const faqItems = [
    {
      question: "Can I wipe over ordinary cotton socks during Wudu?",
      answer: "This is a subject of recognized scholarly discussion. The classical consensus of the four Sunni Madhhabs required that footwear be thick leather (Khuffayn) or thick socks capable of holding water without soaking through and walking on without tearing. However, many prominent jurists (including Imam Ahmad in one narration, Imam Ibn Taymiyyah, and modern fatwa bodies such as the European Council for Fatwa and Research) permit wiping over ordinary, thick, non-transparent socks that stay up on their own, especially in cold climates or work environments."
    },
    {
      question: "Does touching a person of the opposite gender break Wudu?",
      answer: "Recognized juristic schools differ based on interpreting the word <em>Aw lamastum an-nisa'</em> in Surah An-Nisa (4:43): (1) The Shafi'i school holds that any skin-to-skin touch between non-Mahram male and female breaks Wudu; (2) The Hanafi school holds that touching never breaks Wudu unless accompanied by sexual arousal or discharge; (3) The Maliki and Hanbali schools hold that it breaks Wudu only if done with physical desire (Shahwah). All three positions are respected within Sunni scholarship."
    },
    {
      question: "Does bleeding from a cut break Wudu?",
      answer: "The Hanafi school holds that flowing blood from an injury nullifies Wudu. The Shafi'i, Maliki, and Hanbali schools hold that bleeding does not break Wudu, pointing to authentic historical reports of Companions praying while bleeding from battle wounds (Sahih al-Bukhari, Kitab al-Wudu)."
    },
    {
      question: "What should I do if water is available but using it would exacerbate an illness?",
      answer: "Islam provides the divine concession of Tayammum (dry ablution). If a medical professional advises that water will cause harm, delay healing, or worsen severe skin conditions, one is legally excused from using water and performs Tayammum using clean earth instead (Surah An-Nisa 4:43)."
    }
  ];

  const contentHtml = `
    <!-- Introduction -->
    <div style="background: var(--color-surface); padding: 24px; border-radius: 12px; margin-bottom: 36px; border-left: 4px solid var(--color-primary);">
      <p style="font-size: 1.1rem; line-height: 1.7; margin: 0; color: var(--color-text-main);">
        Physical cleanliness and spiritual purity are inextricably linked in the Islamic worldview. Before a Muslim can converse with their Creator in prayer, the physical body must undergo ritual purification. Far from being a superstitious chore, <strong>Ṭahārah</strong> (ritual purity) is a transformative spiritual gateway that sheds minor sins, clears mental fatigue, and restores sacred focus.
      </p>
    </div>

    <!-- Section 1 -->
    <section id="philosophy-of-taharah" style="margin-bottom: 40px;">
      <h2 style="font-size: 1.75rem; color: var(--color-primary); border-bottom: 2px solid var(--color-border-subtle); padding-bottom: 8px;">
        1. The Philosophy of Taharah: Half of Faith
      </h2>
      <p style="line-height: 1.8; color: var(--color-text-main);">
        In a concise, famous statement, the Messenger of Allah ﷺ announced:
      </p>

      <blockquote style="background: var(--color-card); border-left: 4px solid var(--color-gold); padding: 18px 24px; margin: 20px 0; border-radius: 0 8px 8px 0;">
        <div style="font-family: 'Amiri', 'Traditional Arabic', serif; font-size: 1.5rem; direction: rtl; text-align: right; color: var(--color-primary); line-height: 2;">
          الطُّهُورُ شَطْرُ الْإِيمَانِ
        </div>
        <div style="margin-top: 10px; font-style: italic; color: var(--color-text-muted); font-size: 0.95rem;">
          "Purity is half of faith."
        </div>
        <div style="margin-top: 4px; font-size: 0.85rem; color: var(--color-gold); font-weight: 600;">
          — Sahih Muslim (#223)
        </div>
      </blockquote>

      <p style="line-height: 1.8; color: var(--color-text-main);">
        Classical commentators explain that faith consists of two fundamental operations: <em>Takhliyah</em> (cleansing the vessel of the soul from impurities) and <em>Tahliyah</em> (adorning it with virtues and good deeds). Taharah physically symbolizes the inner purging of spiritual filth.
      </p>
      <p style="line-height: 1.8; color: var(--color-text-main);">
        Furthermore, the Prophet ﷺ revealed the metaphysical reality of Wudu: <em>"When a Muslim washes his face, every sin he contemplated with his eyes is washed away with the water, or with the last drop of water. When he washes his hands, every sin his hands committed is washed away... until he emerges cleansed of all minor sins"</em> (Sahih Muslim #244).
      </p>
    </section>

    <!-- Section 2 -->
    <section id="hadath-two-states" style="margin-bottom: 40px;">
      <h2 style="font-size: 1.75rem; color: var(--color-primary); border-bottom: 2px solid var(--color-border-subtle); padding-bottom: 8px;">
        2. The Two States of Ritual Impurity (Aṣghar vs Akbar)
      </h2>
      <p style="line-height: 1.8; color: var(--color-text-main);">
        Islamic jurisprudence categorizes ritual impurity (<strong>Ḥadath</strong>) into two distinct levels:
      </p>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 18px; margin: 24px 0;">
        <div class="card" style="padding: 22px; border-left: 4px solid var(--color-primary);">
          <h3 style="margin-top: 0; color: var(--color-primary); font-size: 1.2rem;">Minor Impurity (Al-Ḥadath al-Aṣghar)</h3>
          <p style="font-size: 0.92rem; color: var(--color-text-muted); line-height: 1.7; margin: 0;">
            Caused by natural bodily functions (urination, defecation, passing gas, deep sleep, loss of consciousness). <strong>Remedy:</strong> Purified exclusively by performing <strong>Al-Wuḍū'</strong> (minor ritual ablution).
          </p>
        </div>

        <div class="card" style="padding: 22px; border-left: 4px solid var(--color-gold);">
          <h3 style="margin-top: 0; color: var(--color-primary); font-size: 1.2rem;">Major Impurity (Al-Ḥadath al-Akbar)</h3>
          <p style="font-size: 0.92rem; color: var(--color-text-muted); line-height: 1.7; margin: 0;">
            Caused by marital relations, nocturnal emission (wet dreams), the cessation of menstruation (<em>Ḥayḍ</em>), or post-natal bleeding (<em>Nifās</em>). <strong>Remedy:</strong> Purified exclusively by taking a complete ritual bath: <strong>Al-Ghusl</strong>.
          </p>
        </div>
      </div>
    </section>

    <!-- Section 3 -->
    <section id="step-by-step-wudu" style="margin-bottom: 40px;">
      <h2 style="font-size: 1.75rem; color: var(--color-primary); border-bottom: 2px solid var(--color-border-subtle); padding-bottom: 8px;">
        3. Part 1: Al-Wuḍū' (The Minor Ritual Ablution)
      </h2>
      <p style="line-height: 1.8; color: var(--color-text-main);">
        The primary scriptural charter of Wudu is enshrined in Surah Al-Ma'idah:
      </p>

      <blockquote style="background: var(--color-card); border-left: 4px solid var(--color-gold); padding: 18px 24px; margin: 20px 0; border-radius: 0 8px 8px 0;">
        <div style="font-family: 'Amiri', 'Traditional Arabic', serif; font-size: 1.45rem; direction: rtl; text-align: right; color: var(--color-primary); line-height: 2;">
          يَا أَيُّهَا الَّذِينَ آمَنُوا إِذَا قُمْتُمْ إِلَى الصَّلَاةِ فَاغْسِلُوا وُجُوهَكُمْ وَأَيْدِيَكُمْ إِلَى الْمَرَافِقِ وَامْسَحُوا بِرُءُوسِكُمْ وَأَرْجُلَكُمْ إِلَى الْكَعْبَيْنِ
        </div>
        <div style="margin-top: 10px; font-style: italic; color: var(--color-text-muted); font-size: 0.95rem;">
          "O you who have believed, when you rise to prayer, wash your faces and your forearms to the elbows and wipe over your heads and wash your feet to the ankles."
        </div>
        <div style="margin-top: 4px; font-size: 0.85rem; color: var(--color-gold); font-weight: 600;">
          — Surah Al-Ma'idah (5:6)
        </div>
      </blockquote>

      <p style="line-height: 1.8; color: var(--color-text-main);">
        From this verse, jurists derived the <strong>Four Quranic Obligations (Farā'iḍ)</strong> of Wudu: (1) Washing the entire face from hairline to chin and ear to ear; (2) Washing both arms including the elbows; (3) Wiping over the head with wet hands; and (4) Washing both feet including the ankles.
      </p>

      <div style="background: var(--color-card); border: 1px solid var(--color-border); border-radius: 12px; padding: 22px; margin: 20px 0;">
        <h4 style="color: var(--color-primary); margin-top: 0; font-size: 1.15rem;">The Complete Prophetic Method (Sunan al-Wuḍū')</h4>
        <ol style="margin: 0; padding-left: 20px; line-height: 1.9; color: var(--color-text-main);">
          <li><strong>Intention (Niyyah):</strong> Form intention in the heart to purify oneself for prayer.</li>
          <li><strong>The Basmalah:</strong> Say <em>Bismillāh</em> (In the name of Allah).</li>
          <li><strong>Washing Hands $3\times$:</strong> Wash both hands up to the wrists, cleaning between the fingers.</li>
          <li><strong>Rinsing Mouth $3\times$ (Maḍmaḍah):</strong> Swirl water inside the mouth and expel it.</li>
          <li><strong>Sniffing Water into Nose $3\times$ (Istinshāq):</strong> Sniff water gently into nostrils and blow it out with the left hand (<em>Istinthār</em>).</li>
          <li><strong>Washing the Face $3\times$:</strong> Wash thoroughly from top of forehead to bottom of chin, and from earlobe to earlobe.</li>
          <li><strong>Washing Arms $3\times$:</strong> Wash right arm from fingertips up to and including the elbow, then the left arm identically.</li>
          <li><strong>Wiping the Head Once (Masḥ):</strong> Pass moist hands from the front hairline to the nape of the neck, and bring them back to the front.</li>
          <li><strong>Cleaning the Ears Once:</strong> Use wet index fingers to clean the inner ear contours while thumbs wipe the back of the ears.</li>
          <li><strong>Washing the Feet $3\times$:</strong> Wash right foot up to and including the ankle bone, cleaning between toes with pinky finger, then left foot identically.</li>
          <li><strong>Closing Supplication:</strong> Recite the Shahadah and the Sunnah dua: <em>"Allāhummaj-'alnī minat-tawwābīna waj-'alnī minal-mutaṭahhirīn"</em> ("O Allah, make me of those who constantly repent and make me of those who purify themselves" — Jami' at-Tirmidhi #55).</li>
        </ol>
      </div>
    </section>

    <!-- Section 4 -->
    <section id="nullifiers-of-wudu" style="margin-bottom: 40px;">
      <h2 style="font-size: 1.75rem; color: var(--color-primary); border-bottom: 2px solid var(--color-border-subtle); padding-bottom: 8px;">
        4. What Nullifies Wudu (Nawāqiḍ) vs What Does Not
      </h2>
      <p style="line-height: 1.8; color: var(--color-text-main);">
        To avoid unnecessary obsessive doubts (<em>Waswasah</em>), a believer must know precisely what breaks Wudu and what does not:
      </p>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 18px; margin: 20px 0;">
        <div class="card" style="padding: 20px; border-top: 3px solid #B91C1C;">
          <h4 style="margin: 0 0 10px 0; color: #B91C1C; font-size: 1.1rem;">Definite Nullifiers (Breaks Wudu)</h4>
          <ul style="margin: 0; padding-left: 20px; font-size: 0.9rem; color: var(--color-text-muted); line-height: 1.7;">
            <li>Anything exiting the two private passages (urine, feces, flatulence, prostatic fluid/Madhy).</li>
            <li>Deep sleep where one loses conscious control over bodily muscles.</li>
            <li>Loss of consciousness, fainting, intoxication, or severe delirium.</li>
            <li>Direct skin-to-skin contact with one's private parts with the palm or fingers (according to the majority).</li>
          </ul>
        </div>

        <div class="card" style="padding: 20px; border-top: 3px solid #15803D;">
          <h4 style="margin: 0 0 10px 0; color: #15803D; font-size: 1.1rem;">Non-Nullifiers (Does NOT Break Wudu)</h4>
          <ul style="margin: 0; padding-left: 20px; font-size: 0.9rem; color: var(--color-text-muted); line-height: 1.7;">
            <li>Mere doubt: If you know you made Wudu, ignore unverified doubts unless you hear a sound or detect an odor (Sahih Muslim #362).</li>
            <li>Nodding off lightly while seated upright awaiting prayer.</li>
            <li>Vomiting (according to the Shafi'i and Maliki schools).</li>
            <li>Cutting nails, shaving, or cutting hair.</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Section 5 -->
    <section id="wiping-over-footwear" style="margin-bottom: 40px;">
      <h2 style="font-size: 1.75rem; color: var(--color-primary); border-bottom: 2px solid var(--color-border-subtle); padding-bottom: 8px;">
        5. Wiping Over Footwear (Al-Masḥ 'alā al-Khuffayn)
      </h2>
      <p style="line-height: 1.8; color: var(--color-text-main);">
        Islam is a faith of practical mercy. When traveling or residing in cold climates, taking off shoes or socks for every prayer can be arduous. The Sunnah provides the established concession of <strong>Al-Masḥ</strong> (wiping moist hands over footwear):
      </p>

      <ul style="line-height: 1.8; color: var(--color-text-main); margin-bottom: 20px;">
        <li><strong>Condition 1:</strong> The footwear/socks must be put on <em>after</em> having performed a complete Wudu with washing of the feet (Sahih al-Bukhari #206).</li>
        <li><strong>Duration for a Resident (Muqīm):</strong> One full day and night (24 hours) from the first time one wipes after breaking Wudu.</li>
        <li><strong>Duration for a Traveler (Musāfir):</strong> Three days and nights (72 hours) from the first wipe (Sahih Muslim #276).</li>
        <li><strong>Method:</strong> Pass damp fingers over the <em>top</em> surface of the foot from the toes toward the ankle once. The bottom sole is not wiped.</li>
      </ul>
    </section>

    <!-- Section 6 -->
    <section id="step-by-step-ghusl" style="margin-bottom: 40px;">
      <h2 style="font-size: 1.75rem; color: var(--color-primary); border-bottom: 2px solid var(--color-border-subtle); padding-bottom: 8px;">
        6. Part 2: Al-Ghusl (The Major Ritual Bath)
      </h2>
      <p style="line-height: 1.8; color: var(--color-text-main);">
        When entering major ritual impurity (<em>Janābah</em> or following menstruation/post-natal bleeding), normal Wudu is insufficient. One must perform <strong>Al-Ghusl</strong> — pouring water over the entire body:
      </p>

      <div style="background: var(--color-card); border: 1px solid var(--color-border); border-radius: 12px; padding: 22px; margin: 20px 0;">
        <h4 style="color: var(--color-primary); margin-top: 0; font-size: 1.15rem;">The Prophetic Step-by-Step Ghusl (Sahih al-Bukhari #248)</h4>
        <ol style="margin: 0; padding-left: 20px; line-height: 1.9; color: var(--color-text-main);">
          <li><strong>Intention (Niyyah):</strong> Intend in the heart to purify yourself from major ritual impurity.</li>
          <li><strong>Wash Hands:</strong> Wash both hands up to the wrists three times.</li>
          <li><strong>Wash Private Parts:</strong> Thoroughly wash the private parts with the left hand to remove all physical discharge.</li>
          <li><strong>Perform Complete Wudu:</strong> Make standard Wudu as for prayer (one may delay washing the feet until the end of the bath).</li>
          <li><strong>Wash the Head & Scalp $3\times$:</strong> Pour water over the head, running wet fingers through the roots of the hair so water reaches the scalp completely.</li>
          <li><strong>Wash the Entire Body:</strong> Pour water over the entire body, beginning with the right side from shoulder to foot, then the left side, ensuring armpits, navel, and skin folds receive water.</li>
        </ol>
      </div>

      <p style="line-height: 1.8; color: var(--color-text-main);">
        <em>Note:</em> A person who completes a valid Ghusl with intention is automatically in a state of minor Wudu as well and can pray immediately without making a separate Wudu, provided they did not touch their private parts after the bath.
      </p>
    </section>

    <!-- Section 7 -->
    <section id="step-by-step-tayammum" style="margin-bottom: 40px;">
      <h2 style="font-size: 1.75rem; color: var(--color-primary); border-bottom: 2px solid var(--color-border-subtle); padding-bottom: 8px;">
        7. Part 3: Al-Tayammum (The Dry Concession)
      </h2>
      <p style="line-height: 1.8; color: var(--color-text-main);">
        What happens if a Muslim is stranded in a desert without water, or is hospitalized with severe burns or surgical incisions that must not contact water? Allah revealed a profound concession in Surah An-Nisa:
      </p>

      <blockquote style="background: var(--color-card); border-left: 4px solid var(--color-gold); padding: 18px 24px; margin: 20px 0; border-radius: 0 8px 8px 0;">
        <div style="font-family: 'Amiri', 'Traditional Arabic', serif; font-size: 1.45rem; direction: rtl; text-align: right; color: var(--color-primary); line-height: 2;">
          فَلَمْ تَجِدُوا مَاءً فَتَيَمَّمُوا صَعِيدًا طَيِّبًا فَامْسَحُوا بِوُجُوهِكُمْ وَأَيْدِيكُمْ ۗ إِنَّ اللَّهَ كَانَ عَفُوًّا غَفُورًا
        </div>
        <div style="margin-top: 10px; font-style: italic; color: var(--color-text-muted); font-size: 0.95rem;">
          "...and you find no water, then seek clean earth and wipe over your faces and hands. Indeed, Allah is ever Pardoning and Forgiving."
        </div>
        <div style="margin-top: 4px; font-size: 0.85rem; color: var(--color-gold); font-weight: 600;">
          — Surah An-Nisa (4:43)
        </div>
      </blockquote>

      <p style="line-height: 1.8; color: var(--color-text-main);">
        <strong>The Step-by-Step Method of Tayammum (Sahih al-Bukhari #338):</strong><br>
        (1) Form the intention to purify oneself; (2) Strike clean earth, dust, or natural stone once with both open palms; (3) Blow off excess dust from the hands; (4) Wipe both hands over the face once; (5) Wipe the back of the right hand with the left palm, and the back of the left hand with the right palm.
      </p>
      <p style="line-height: 1.8; color: var(--color-text-main);">
        Tayammum completely substitutes for both Wudu and Ghusl. As soon as clean water becomes accessible or the medical condition heals, the concession terminates and water must be used.
      </p>
    </section>

    <!-- Section 8 -->
    <section id="madhhab-nuances" style="margin-bottom: 40px;">
      <h2 style="font-size: 1.75rem; color: var(--color-primary); border-bottom: 2px solid var(--color-border-subtle); padding-bottom: 8px;">
        8. Madhhab Differences Treated with Scholarly Balance
      </h2>
      <p style="line-height: 1.8; color: var(--color-text-main);">
        Sunni jurisprudence celebrates diversity in minor regulatory details where texts permit multiple valid interpretations:
      </p>

      <ul style="line-height: 1.8; color: var(--color-text-main); margin-bottom: 24px;">
        <li><strong>Head Wiping (Masḥ ar-Ra's):</strong> The Maliki and Hanbali schools require wiping the entire head. The Hanafi school requires wiping at least one-quarter of the head. The Shafi'i school requires wiping even a few hairs. All fulfill the Quranic command <em>"Wipe over your heads"</em>.</li>
        <li><strong>Sequence (Tartīb) and Continuity (Muwālāt):</strong> The Shafi'is and Hanbalis consider following the exact sequence obligatory. The Hanafis regard sequence as an emphasized Sunnah. The Malikis require continuity (not allowing one limb to dry before washing the next).</li>
      </ul>
      <p style="line-height: 1.8; color: var(--color-text-main);">
        No school accuses another of invalidity. All four schools agree on the core Quranic pillars.
      </p>
    </section>

    <!-- Section 9 -->
    <section id="key-takeaways" style="margin-bottom: 40px; background: var(--color-surface); padding: 24px; border-radius: 12px; border: 1px solid var(--color-border);">
      <h2 style="font-size: 1.5rem; color: var(--color-primary); margin-top: 0; margin-bottom: 12px;">
        9. Summary & Practical Purification Checklist
      </h2>
      <ul style="line-height: 1.8; color: var(--color-text-main); margin: 0; padding-left: 20px;">
        <li><strong>Prerequisite to Prayer:</strong> Valid prayer cannot exist without appropriate ritual purity (Wudu or Ghusl).</li>
        <li><strong>Four Quranic Fara'id:</strong> Wash face, wash arms to elbows, wipe head, wash feet to ankles.</li>
        <li><strong>Prophetic Sunnah:</strong> Enhance reward by adding intention, Basmalah, mouth/nose rinsing, ear cleaning, and closing dua.</li>
        <li><strong>Concessions Available:</strong> Use footwear wiping (Mash) and dry ablution (Tayammum) when genuine hardships arise.</li>
        <li><strong>Avoid Waswasah:</strong> Do not succumb to obsessive doubts; base purity on certainty until proven otherwise.</li>
      </ul>
    </section>
  `;

  const sourcesHtml = `
    <li><strong>Al-Qur'an al-Kareem:</strong> Surah Al-Baqarah (2:222), Surah An-Nisa (4:43), Surah Al-Ma'idah (5:6).</li>
    <li><strong>Sahih al-Bukhari:</strong> Hadith #206 (Wiping over Khuffayn), Hadith #248 (Manner of Ghusl), Hadith #338 (Method of Tayammum), Hadith #386 (Cleanliness in prayer).</li>
    <li><strong>Sahih Muslim:</strong> Hadith #223 ("Purity is half of faith"), Hadith #244 (Minor sins washed away with Wudu), Hadith #276 (Durations for wiping over footwear), Hadith #362 (Ruling on doubts in Wudu).</li>
    <li><strong>Jami' at-Tirmidhi:</strong> Hadith #55 (Sunnah supplication following Wudu).</li>
    <li><strong>Ibn Qudamah:</strong> <em>Al-Mughni</em> (Kitab al-Taharah), Dar 'Alam al-Kutub, Riyadh.</li>
    <li><strong>Imam al-Kasani:</strong> <em>Bada'i' al-Sana'i' fi Tartib al-Shara'i'</em>, Dar al-Kutub al-'Ilmiyyah, Beirut.</li>
  `;

  return buildArticleHtml({
    slug: 'wudu-ghusl-tayammum-guide',
    title: "Wudu, Ghusl and Tayammum: A Practical Study Guide",
    arabicSubtitle: "إِنَّ اللَّهَ يُحِبُّ التَّوَّابِينَ وَيُحِبُّ الْمُتَطَهِّرِينَ — ALLAH LOVES PURITY",
    metaDescription: "Complete practical guide to Taharah (ritual purity) in Islam. Step-by-step instructions for Wudu (minor ablution), Ghusl (major bath), and Tayammum (dry ablution) with Quranic proof and school distinctions.",
    readingTime: "13 min read",
    wordCount: "2,380",
    tocItems,
    relatedTools,
    faqItems,
    contentHtml,
    sourcesHtml
  });
}

module.exports = { getArticle7 };
