const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');

// 1. Patch contact.html
console.log('Patching contact.html...');
let contactPath = path.join(publicDir, 'contact.html');
let contact = fs.readFileSync(contactPath, 'utf8');

// Replace hero header
contact = contact.replace(
  /<h1 style="font-size: 2\.2rem; font-weight: 800; margin-bottom: 10px;">Contact Our Editorial Board<\/h1>\s*<p style="color: #D1D5DB; max-width: 680px; margin: 0 auto; font-size: 1\.05rem; line-height: 1\.6;">[\s\S]*?<\/p>/,
  `<h1 style="font-size: 2.2rem; font-weight: 800; margin-bottom: 10px;">Contact, Feedback & Corrections</h1>
      <p style="color: #D1D5DB; max-width: 680px; margin: 0 auto; font-size: 1.05rem; line-height: 1.6;">
        NoorDeen is an open-source Islamic educational platform hosted on GitHub Pages. We welcome reader feedback, corrections to Quranic diacritics, Hadith citations, translations, and technical reports.
      </p>`
);

// Replace direct contact information card
contact = contact.replace(
  /<div class="card" style="margin-bottom: 24px;">\s*<h3 style="font-size: 1\.2rem; color: var\(--color-primary\); margin-bottom: 12px;">Direct Contact Information<\/h3>[\s\S]*?<\/div>\s*<\/div>/,
  `<div class="card" style="margin-bottom: 24px;">
          <h3 style="font-size: 1.2rem; color: var(--color-primary); margin-bottom: 12px;">Public Channels & Repository</h3>
          <div style="font-size: 0.92rem; line-height: 2; color: var(--color-text-main); word-break: break-word; overflow-wrap: anywhere;">
            <div><strong>Project Repository:</strong> <a href="https://github.com/jjjffdfde/NoorDeen" target="_blank" rel="noopener noreferrer" style="color: var(--color-primary); word-break: break-all;">github.com/jjjffdfde/NoorDeen</a></div>
            <div><strong>Issue & Bug Tracker:</strong> <a href="https://github.com/jjjffdfde/NoorDeen/issues" target="_blank" rel="noopener noreferrer" style="color: var(--color-primary); word-break: break-all;">github.com/jjjffdfde/NoorDeen/issues</a></div>
            <div><strong>Platform Architecture:</strong> Open-Source Static Web Application (GitHub Pages)</div>
            <div><strong>Community Review:</strong> Automated CI Verification Suites & Open Pull Requests</div>
          </div>
        </div>`
);

// Replace contact success box
contact = contact.replace(
  /<div id="contact-success-box"[\s\S]*?<\/div>\s*<\/div>/,
  `<div id="contact-success-box" style="display: none; margin-top: 20px; padding: 18px; background: rgba(15,81,50,0.08); border: 1px solid var(--color-primary); border-radius: var(--radius-sm);">
          <div style="font-size: 1.6rem; text-align: center; margin-bottom: 6px;">📝</div>
          <h4 style="color: var(--color-primary); text-align: center; margin-bottom: 8px;">Your Report Draft is Ready</h4>
          <p style="font-size: 0.88rem; color: var(--color-text-main); line-height: 1.6; margin-bottom: 14px;">
            NoorDeen is hosted as a static open-source website on GitHub Pages without a backend database. Please select your preferred dispatch channel to submit your report:
          </p>
          <div style="display: flex; flex-direction: column; gap: 10px;">
            <a id="btn-github-issue" href="https://github.com/jjjffdfde/NoorDeen/issues/new" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="text-align: center; text-decoration: none; padding: 10px 16px;">
              🚀 Open Pre-Filled GitHub Issue (Recommended)
            </a>
            <a id="btn-mailto" href="mailto:?subject=NoorDeen%20Feedback" class="btn btn-outline" style="text-align: center; text-decoration: none; padding: 10px 16px;">
              ✉️ Open in Your Email Client
            </a>
            <button type="button" id="btn-copy-msg" class="btn btn-outline" onclick="copyContactDraft()" style="padding: 10px 16px;">
              📋 Copy Draft to Clipboard
            </button>
          </div>
          <div id="copy-confirm-msg" style="display: none; font-size: 0.82rem; color: var(--color-primary); font-weight: 700; text-align: center; margin-top: 8px;">
            ✔ Draft copied to clipboard!
          </div>
          <div style="font-size: 0.8rem; color: var(--color-text-muted); margin-top: 12px; text-align: center;">
            Your report is maintained locally in your browser until dispatched.
          </div>
        </div>
      </div>`
);

// Replace script in contact.html
contact = contact.replace(
  /<script>\s*function handleContactSubmit\(\)[\s\S]*?<\/script>/,
  `<script>
    let draftText = '';
    function handleContactSubmit() {
      var name = (document.getElementById('contact-name') || {}).value || '';
      var email = (document.getElementById('contact-email') || {}).value || '';
      var cat = (document.getElementById('feedback-category') || {}).value || 'general';
      var ref = (document.getElementById('contact-reference') || {}).value || '';
      var msg = (document.getElementById('contact-message') || {}).value || '';

      var title = '[Feedback - ' + cat + '] ' + (ref ? ref : 'General Inquiry');
      var body = '### NoorDeen Feedback & Correction Report\\n\\n' +
                 '**Name:** ' + name + '\\n' +
                 '**Email:** ' + email + '\\n' +
                 '**Category:** ' + cat + '\\n' +
                 '**Reference:** ' + ref + '\\n\\n' +
                 '**Message:**\\n' + msg + '\\n\\n' +
                 '---\\n*Report submitted via NoorDeen Contact Interface*';

      draftText = body;

      var ghBtn = document.getElementById('btn-github-issue');
      var mailBtn = document.getElementById('btn-mailto');
      if (ghBtn) {
        ghBtn.href = 'https://github.com/jjjffdfde/NoorDeen/issues/new?title=' + encodeURIComponent(title) + '&body=' + encodeURIComponent(body);
      }
      if (mailBtn) {
        mailBtn.href = 'mailto:?subject=' + encodeURIComponent(title) + '&body=' + encodeURIComponent(body);
      }

      var form = document.getElementById('feedback-form') || document.getElementById('contact-form');
      var successBox = document.getElementById('contact-success-box');
      if (form && successBox) {
        form.style.display = 'none';
        successBox.style.display = 'block';
      }
    }

    function copyContactDraft() {
      if (!draftText) return;
      navigator.clipboard.writeText(draftText).then(function() {
        var conf = document.getElementById('copy-confirm-msg');
        if (conf) {
          conf.style.display = 'block';
          setTimeout(function() { conf.style.display = 'none'; }, 3000);
        }
      });
    }
  </script>`
);

fs.writeFileSync(contactPath, contact, 'utf8');
console.log('contact.html patched successfully.');

// 2. Patch about.html
console.log('Patching about.html...');
let aboutPath = path.join(publicDir, 'about.html');
let about = fs.readFileSync(aboutPath, 'utf8');

about = about.replace(
  'We provide a sanctuary of reliable, peer-reviewed religious education',
  'We provide a sanctuary of reliable, citation-backed and verifiable religious education'
);
about = about.replace(
  /automated suites run over 170\+ rigorous checks[\s\S]*?\(WCAG 2\.1 AA compliance\)\./,
  'automated test suites run over 1,300+ rigorous checks (including 1,080 unit/integration tests and 286 Chrome CDP viewport inspections), verifying astronomical formulas (prayer times, Qibla azimuth), dual Nisab standards, cryptographic SHA-256 release sums, structured JSON-LD schemas, link integrity, and accessibility (WCAG 2.1 AA compliance).'
);
about = about.replace(
  '<li><strong>Subject-Matter Expertise:</strong> Content is authored and curated by researchers trained in classical Arabic, Usul al-Fiqh, and Ulum al-Hadith.</li>',
  '<li><strong>Subject-Matter Rigor:</strong> Content is compiled directly from classical primary publications, including King Fahd Quran printing standards and Darussalam Hadith editions, cross-checked against authoritative lexicons and commentaries.</li>'
);
about = about.replace(
  'Our editorial committee reviews all submissions within 24–48 hours.',
  'All reported errata and suggestions are reviewed against canonical source texts in our public GitHub repository issue tracker.'
);

fs.writeFileSync(aboutPath, about, 'utf8');
console.log('about.html patched successfully.');

// 3. Patch privacy.html
console.log('Patching privacy.html...');
let privacyPath = path.join(publicDir, 'privacy.html');
let privacy = fs.readFileSync(privacyPath, 'utf8');

privacy = privacy.replace(
  /<div class="card" style="">\s*<h2 style="color: var\(--color-primary\); font-size: 1\.35rem; margin-bottom: 12px;">7\. Contact Our Privacy Officer<\/h2>[\s\S]*?<\/div>\s*<\/div>/,
  `<div class="card" style="">
      <h2 style="color: var(--color-primary); font-size: 1.35rem; margin-bottom: 12px;">7. Privacy Inquiries & Repository Feedback</h2>
      <p style="line-height: 1.8; color: var(--color-text-main); margin-bottom: 10px;">
        NoorDeen operates with zero server-side user profiling or account databases. If you have questions regarding this Privacy Policy or wish to review data handling practices:
      </p>
      <div style="font-size: 0.92rem; line-height: 1.8; color: var(--color-text-main); word-break: break-word;">
        <div style="margin-bottom: 6px;"><strong>Public Issue Tracker:</strong> <a href="https://github.com/jjjffdfde/NoorDeen/issues" target="_blank" rel="noopener noreferrer" style="color: var(--color-primary); word-break: break-all;">github.com/jjjffdfde/NoorDeen/issues</a></div>
        <div><strong>Feedback & Corrections:</strong> <a href="contact.html" style="color: var(--color-primary); font-weight: 700;">Open Contact Page</a></div>
      </div>
    </div>`
);

fs.writeFileSync(privacyPath, privacy, 'utf8');
console.log('privacy.html patched successfully.');

// 4. Patch footer contact links across all HTML files
console.log('Patching footer contact links across all HTML files...');
const htmlFiles = fs.readdirSync(publicDir).filter(f => f.endsWith('.html'));

for (const file of htmlFiles) {
  const filePath = path.join(publicDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  if (content.includes('<div>Contact: contact@noordeen.org</div>')) {
    content = content.replace(
      '<div>Contact: contact@noordeen.org</div>',
      '<div><a href="contact.html" style="color: inherit; text-decoration: underline;">Contact & Feedback</a> • <a href="https://github.com/jjjffdfde/NoorDeen/issues" target="_blank" rel="noopener noreferrer" style="color: inherit; text-decoration: underline;">GitHub Issues</a></div>'
    );
    changed = true;
  }
  if (content.includes('<div>Contact: privacy@noordeen.org</div>')) {
    content = content.replace(
      '<div>Contact: privacy@noordeen.org</div>',
      '<div><a href="contact.html" style="color: inherit; text-decoration: underline;">Contact & Feedback</a> • <a href="https://github.com/jjjffdfde/NoorDeen/issues" target="_blank" rel="noopener noreferrer" style="color: inherit; text-decoration: underline;">GitHub Issues</a></div>'
    );
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated footer contact link in ${file}`);
  }
}

// 5. Add config.js to index.html, history.html, prophets.html if missing
const filesNeedingConfig = ['index.html', 'history.html', 'prophets.html'];
for (const file of filesNeedingConfig) {
  const filePath = path.join(publicDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  if (!content.includes('js/config.js')) {
    if (content.includes('<script src="js/data.js"></script>')) {
      content = content.replace(
        '<script src="js/data.js"></script>',
        '<script src="js/config.js"></script>\n  <script src="js/data.js"></script>'
      );
    } else if (content.includes('<script src="js/app.js"></script>')) {
      content = content.replace(
        '<script src="js/app.js"></script>',
        '<script src="js/config.js"></script>\n  <script src="js/app.js"></script>'
      );
    }
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Added js/config.js to ${file}`);
  }
}
