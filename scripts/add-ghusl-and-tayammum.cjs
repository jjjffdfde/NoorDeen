const fs = require('fs');

const wuduHtmlPath = 'public/wudu-guide.html';
let content = fs.readFileSync(wuduHtmlPath, 'utf8');

// 1. Update Table of Contents
const oldToc = `<ul class="toc-nav-list">
          <li class="toc-nav-item"><a href="#spiritual-and-medical-hikmah" class="toc-nav-link">1. Spiritual & Medical Hikmah</a></li>
          <li class="toc-nav-item"><a href="#quranic-mandate" class="toc-nav-link">2. The Quranic Mandate (5:6)</a></li>
          <li class="toc-nav-item"><a href="#four-faraid" class="toc-nav-link">3. The 4 Fard (Obligatory) Acts</a></li>
          <li class="toc-nav-item"><a href="#step-by-step-sunan" class="toc-nav-link">4. Step-by-Step Prophetic Sunan</a></li>
          <li class="toc-nav-item"><a href="#duas-after-wudu" class="toc-nav-link">5. Authentic Duas After Wudu</a></li>
          <li class="toc-nav-item"><a href="#wiping-over-socks" class="toc-nav-link">6. Masah on Socks (Khuffayn)</a></li>
          <li class="toc-nav-item"><a href="#nawaqid-al-wudu" class="toc-nav-link">7. Nullifiers of Wudu</a></li>
          <li class="toc-nav-item"><a href="#common-mistakes" class="toc-nav-link">8. Common Mistakes to Avoid</a></li>
          <li class="toc-nav-item"><a href="#faq-section" class="toc-nav-link">9. Frequently Asked Questions</a></li>
        </ul>`;

const newToc = `<ul class="toc-nav-list">
          <li class="toc-nav-item"><a href="#spiritual-and-medical-hikmah" class="toc-nav-link">1. Spiritual & Medical Hikmah</a></li>
          <li class="toc-nav-item"><a href="#quranic-mandate" class="toc-nav-link">2. The Quranic Mandate (5:6)</a></li>
          <li class="toc-nav-item"><a href="#four-faraid" class="toc-nav-link">3. The 4 Fard (Obligatory) Acts</a></li>
          <li class="toc-nav-item"><a href="#step-by-step-sunan" class="toc-nav-link">4. Step-by-Step Prophetic Sunan</a></li>
          <li class="toc-nav-item"><a href="#duas-after-wudu" class="toc-nav-link">5. Authentic Duas After Wudu</a></li>
          <li class="toc-nav-item"><a href="#wiping-over-socks" class="toc-nav-link">6. Masah on Socks (Khuffayn)</a></li>
          <li class="toc-nav-item"><a href="#nawaqid-al-wudu" class="toc-nav-link">7. Nullifiers of Wudu</a></li>
          <li class="toc-nav-item"><a href="#ghusl-guide" class="toc-nav-link">8. Ghusl (Major Ritual Bath)</a></li>
          <li class="toc-nav-item"><a href="#tayammum-guide" class="toc-nav-link">9. Tayammum (Dry Ablution)</a></li>
          <li class="toc-nav-item"><a href="#common-mistakes" class="toc-nav-link">10. Common Mistakes to Avoid</a></li>
          <li class="toc-nav-item"><a href="#faq-section" class="toc-nav-link">11. Frequently Asked Questions</a></li>
        </ul>`;

// 2. Build Ghusl and Tayammum Sections
const ghuslAndTayammumSections = `
        <!-- Section 8: Complete Guide to Ghusl (Major Ritual Bath) -->
        <section id="ghusl-guide" style="margin-bottom: 48px;">
          <h2 style="font-size: 1.7rem; color: var(--color-primary); font-weight: 800; margin-bottom: 14px;">
            8. The Complete Guide to Ghusl (Major Ritual Bath)
          </h2>
          <p style="font-size: 1.05rem; line-height: 1.8; color: var(--color-text-main); margin-bottom: 18px;">
            <strong>Ghusl (الغُسْل)</strong> is the complete washing of the entire human body with clean, pure water to attain purification from major ritual impurity (<em>Hadath Akbar</em>). Allah the Exalted commanded in the Holy Quran: 
            <span class="font-quran" style="font-size: 1.25rem; color: var(--color-primary); display: block; margin: 8px 0; direction: rtl; text-align: right;">وَإِنْ كُنْتُمْ جُنُبًا فَاطَّهَّرُوا</span>
            <em>"And if you are in a state of Janabah (major ritual impurity), then purify yourselves thoroughly."</em> (Surah Al-Ma'idah 5:6; Surah An-Nisa 4:43).
          </p>

          <!-- Causes Requiring Ghusl -->
          <div class="card" style="margin-bottom: 20px; padding: 22px; border-left: 4px solid var(--color-primary); background: var(--color-surface);">
            <h3 style="font-size: 1.25rem; font-weight: 700; color: var(--color-primary); margin-bottom: 10px;">
              Causes that Render Ghusl Obligatory (Wajibat al-Ghusl)
            </h3>
            <ul style="padding-left: 20px; font-size: 0.95rem; line-height: 1.8; color: var(--color-text-main); margin: 0;">
              <li><strong>Emission of Seminal Fluid (Mani):</strong> Accompanied by sexual desire or climax, whether awake or during sleep (nocturnal emission / wet dream), as established by the Prophet ﷺ: <em>"Water is only required because of water (emission of fluid)"</em> (Sahih Muslim #343).</li>
              <li><strong>Sexual Intercourse:</strong> The meeting or penetration of the private parts, even if no ejaculation occurs, based on the Hadith: <em>"When the two circumcised parts meet, Ghusl becomes obligatory"</em> (Sahih Muslim #349).</li>
              <li><strong>Cessation of Menstruation (Hayd):</strong> When a woman's menstrual bleeding completely stops, she must perform Ghusl before establishing prayer (Surah Al-Baqarah 2:222).</li>
              <li><strong>Cessation of Postnatal Bleeding (Nifas):</strong> Following childbirth upon the complete cessation of lochia.</li>
              <li><strong>Entering Islam:</strong> When a non-Muslim embraces Islam, the Prophet ﷺ commanded Thumamah ibn Uthal and Qays ibn Asim to take a bath (Sunan Abi Dawud #355).</li>
              <li><strong>Death of a Muslim:</strong> Washing the deceased body (<em>Ghusl al-Mayyit</em>) is a communal obligation (Fard Kifayah) upon the Muslim community.</li>
            </ul>
          </div>

          <!-- Recommended Occasions for Ghusl -->
          <div class="card" style="margin-bottom: 20px; padding: 20px; border-left: 4px solid var(--color-gold); background: var(--color-surface);">
            <h3 style="font-size: 1.15rem; font-weight: 700; color: var(--color-gold-dark); margin-bottom: 8px;">
              Sunnah (Recommended) Occasions for Ghusl
            </h3>
            <p style="font-size: 0.95rem; line-height: 1.7; color: var(--color-text-main); margin: 0;">
              Performing Ghusl is a virtuous Sunnah for: the Friday congregational prayer (Jumu'ah — <em>"Taking a bath on Friday is an obligation on every mature person"</em>, Sahih al-Bukhari #877), the two Eid festivals (Eid al-Fitr and Eid al-Adha), entering the state of Ihram for Hajj or Umrah, standing on the plains of Arafah on the 9th of Dhul Hijjah, and after washing a deceased person.
            </p>
          </div>

          <!-- The Mandatory Pillars vs Prophetic Sunnah -->
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 18px; margin-bottom: 24px;">
            <div class="card" style="padding: 20px; border-top: 3px solid #DC2626; background: var(--color-card);">
              <h3 style="font-size: 1.15rem; font-weight: 700; color: #DC2626; margin-bottom: 10px;">
                The 3 Mandatory Pillars (Fara'id)
              </h3>
              <p style="font-size: 0.88rem; color: var(--color-text-muted); margin-bottom: 12px;">Without these, the Ghusl is invalid according to classical jurists:</p>
              <ol style="padding-left: 20px; font-size: 0.92rem; line-height: 1.7; color: var(--color-text-main); margin: 0;">
                <li><strong>Madmadah:</strong> Rinsing the mouth thoroughly with water reaching the throat.</li>
                <li><strong>Istinshaq:</strong> Sniffing water into the nasal cavity up to the soft bone.</li>
                <li><strong>Ghasl al-Jasad:</strong> Washing the entire surface of the body, including every single hair strand, the scalp, navel, and folds of skin, leaving no spot dry.</li>
              </ol>
            </div>

            <div class="card" style="padding: 20px; border-top: 3px solid var(--color-primary); background: var(--color-card);">
              <h3 style="font-size: 1.15rem; font-weight: 700; color: var(--color-primary); margin-bottom: 10px;">
                Prophetic Sunnah Method Step-by-Step
              </h3>
              <p style="font-size: 0.88rem; color: var(--color-text-muted); margin-bottom: 12px;">As narrated by Mother of the Believers Sayyidah Aishah (RA) in Sahih al-Bukhari #248 & Sahih Muslim #316:</p>
              <ol style="padding-left: 20px; font-size: 0.92rem; line-height: 1.7; color: var(--color-text-main); margin: 0;">
                <li>Make internal intention (Niyyah) in the heart to remove major ritual impurity.</li>
                <li>Wash both hands up to the wrists three times.</li>
                <li>Wash private parts and any physical impurity using the left hand.</li>
                <li>Perform complete Wudu exactly as for prayer (may delay washing feet).</li>
                <li>Pour water over the head 3 times, thoroughly rubbing roots of hair.</li>
                <li>Pour water over the right side of the body, then the left side, ensuring water penetrates armpits and navel.</li>
                <li>Step aside to clean feet if water pooled on the floor.</li>
              </ol>
            </div>
          </div>
        </section>

        <!-- Section 9: Complete Guide to Tayammum (Dry Ablution) -->
        <section id="tayammum-guide" style="margin-bottom: 48px;">
          <h2 style="font-size: 1.7rem; color: var(--color-primary); font-weight: 800; margin-bottom: 14px;">
            9. The Complete Guide to Tayammum (Dry Earth Ablution)
          </h2>
          <p style="font-size: 1.05rem; line-height: 1.8; color: var(--color-text-main); margin-bottom: 18px;">
            <strong>Tayammum (التَّيَمُّم)</strong> is a divine concession (<em>Rukhsah</em>) allowing a Muslim to substitute pure dry earth or natural stone for water in both minor and major ritual purification when water is legitimately unavailable or medically harmful. Allah revealed:
            <span class="font-quran" style="font-size: 1.25rem; color: var(--color-primary); display: block; margin: 8px 0; direction: rtl; text-align: right;">فَلَمْ تَجِدُوا مَاءً فَتَيَمَّمُوا صَعِيدًا طَيِّبًا فَامْسَحُوا بِوُجُوهِكُمْ وَأَيْدِيكُمْ مِنْهُ</span>
            <em>"And if you find no water, then perform Tayammum with clean earth and wipe over your faces and hands with it. Allah does not intend to make difficulty for you, but He intends to purify you and complete His favor upon you."</em> (Surah Al-Ma'idah 5:6; Surah An-Nisa 4:43).
          </p>

          <!-- Conditions of Validity -->
          <div class="card" style="margin-bottom: 20px; padding: 22px; border-left: 4px solid var(--color-gold-dark); background: var(--color-surface);">
            <h3 style="font-size: 1.25rem; font-weight: 700; color: var(--color-gold-dark); margin-bottom: 10px;">
              Validating Conditions for Tayammum (Shurut al-Tayammum)
            </h3>
            <p style="font-size: 0.95rem; line-height: 1.7; color: var(--color-text-main); margin-bottom: 10px;">
              Tayammum is not permissible simply due to mild inconvenience. It requires one of the following legitimate juristic excuses:
            </p>
            <ul style="padding-left: 20px; font-size: 0.92rem; line-height: 1.8; color: var(--color-text-main); margin: 0;">
              <li><strong>Total Absence of Water:</strong> No clean water can be found after making a reasonable search within approximately one mile (or reasonable reach).</li>
              <li><strong>Medical Risk or Physical Inability:</strong> When using water would aggravate illness, delay wound healing, cause unbearable pain, or risk life/limb, as attested by a competent physician or clear experience.</li>
              <li><strong>Severe Freezing Cold:</strong> When water is near-freezing and there is no feasible means to heat it, with a genuine danger of severe illness or hypothermia (as the Prophet ﷺ approved for Amr ibn al-Aas in Sunan Abi Dawud #334).</li>
              <li><strong>Preserving Life-Saving Water:</strong> Having only enough water for necessary drinking for oneself, travel companions, or livestock.</li>
              <li><strong>Imminent Danger to Life or Safety:</strong> If fetching water exposes the person to enemy attacks, predatory wild animals, or danger of robbery.</li>
            </ul>
          </div>

          <!-- Permissible Medium & Prophetic Method -->
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 18px; margin-bottom: 24px;">
            <div class="card" style="padding: 20px; border-top: 3px solid var(--color-primary); background: var(--color-card);">
              <h3 style="font-size: 1.15rem; font-weight: 700; color: var(--color-primary); margin-bottom: 10px;">
                The Clean Medium (Sa'id Tayyib)
              </h3>
              <p style="font-size: 0.92rem; line-height: 1.7; color: var(--color-text-main); margin-bottom: 10px;">
                <em>Sa'id Tayyib</em> denotes pure natural surface materials of the earth:
              </p>
              <ul style="padding-left: 20px; font-size: 0.9rem; line-height: 1.7; color: var(--color-text-main); margin: 0;">
                <li>Clean, dry soil or earth free of impurities.</li>
                <li>Natural sand, stone, pebble, or unpolished rock.</li>
                <li>Clay or dust that has settled on clean natural surfaces.</li>
                <li><em>Condition:</em> The substance must be pure (Tahoor) and unadulterated by impure filth (Najasah). Synthetic carpets or treated plastics do not qualify unless containing actual settled dust.</li>
              </ul>
            </div>

            <div class="card" style="padding: 20px; border-top: 3px solid var(--color-gold); background: var(--color-card);">
              <h3 style="font-size: 1.15rem; font-weight: 700; color: var(--color-gold-dark); margin-bottom: 10px;">
                Step-by-Step Prophetic Method
              </h3>
              <p style="font-size: 0.88rem; color: var(--color-text-muted); margin-bottom: 10px;">
                Based on the authentic narration of Ammar ibn Yasir (RA) in Sahih al-Bukhari #338 & Sahih Muslim #368:
              </p>
              <ol style="padding-left: 20px; font-size: 0.92rem; line-height: 1.7; color: var(--color-text-main); margin: 0;">
                <li><strong>Niyyah:</strong> Form internal intention to seek ritual purity to establish Salah.</li>
                <li><strong>Basmalah:</strong> Say <em>"Bismillah"</em> (In the Name of Allah).</li>
                <li><strong>Striking the Earth:</strong> Strike the clean earth or stone once with both palms open and fingers spread.</li>
                <li><strong>Blowing Dust:</strong> Lightly blow onto both hands to remove excess dust.</li>
                <li><strong>Wiping the Face:</strong> Wipe the entire face once with both palms.</li>
                <li><strong>Wiping Hands:</strong> Wipe the back of the right hand with the left palm, and the back of the left hand with the right palm (Hanafi/Shafi'i jurists include wiping up to the elbows based on traditions of two strikes).</li>
              </ol>
            </div>
          </div>

          <!-- Nullifiers of Tayammum -->
          <div class="card" style="padding: 18px 22px; border-left: 4px solid #DC2626; background: var(--color-surface); margin-bottom: 16px;">
            <h4 style="color: #DC2626; font-size: 1.1rem; margin-bottom: 6px;">Nullifiers of Tayammum (Nawaqid al-Tayammum)</h4>
            <p style="font-size: 0.92rem; line-height: 1.7; color: var(--color-text-main); margin: 0;">
              Tayammum is immediately invalidated by: <strong>(1)</strong> Anything that nullifies regular Wudu or Ghusl (passing wind, bleeding, sleep, major impurity); <strong>(2)</strong> The availability and reachability of clean water (if performed due to lack of water); and <strong>(3)</strong> The cessation of the medical excuse or wound healing (if performed due to medical disability). The Prophet ﷺ declared: <em>"Clean earth is the purification of a Muslim, even for ten years, until he finds water. When he finds water, let him touch it to his skin, for that is better"</em> (Jami\` at-Tirmidhi #124 — Sahih).
            </p>
          </div>
        </section>
`;

const isCrlf = content.includes('\r\n');
content = content.replace(/\r\n/g, '\n');

// Replace TOC
if (content.includes(oldToc.replace(/\r\n/g, '\n'))) {
  content = content.replace(oldToc.replace(/\r\n/g, '\n'), newToc);
  console.log('Replaced Table of Contents successfully!');
} else {
  console.log('Old TOC not found!');
}

// Renumber Section 8 heading
content = content.replace(
  '8. Common Mistakes to Avoid in Wudu',
  '10. Common Mistakes to Avoid in Purification'
);

// Renumber Section 9 heading
content = content.replace(
  '9. Frequently Asked Questions',
  '11. Frequently Asked Questions'
);

// Insert Ghusl and Tayammum before Section 10
const insertMarker = '<!-- Section 8: Common Mistakes -->';
if (content.includes(insertMarker)) {
  content = content.replace(insertMarker, `${ghuslAndTayammumSections}\n        <!-- Section 10: Common Mistakes -->`);
  console.log('Inserted Ghusl and Tayammum sections successfully!');
} else {
  console.log('Insert marker not found!');
}

if (isCrlf) content = content.replace(/\n/g, '\r\n');
fs.writeFileSync(wuduHtmlPath, content, 'utf8');
console.log('Updated public/wudu-guide.html size:', fs.statSync(wuduHtmlPath).size);
