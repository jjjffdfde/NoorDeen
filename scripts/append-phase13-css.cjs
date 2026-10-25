const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, '..', 'public', 'css', 'main.css');
let css = fs.readFileSync(cssPath, 'utf8');

const phase13Rules = `
/* ==========================================================================
   PHASE 13 — REFINED ISLAMIC EDUCATIONAL LIBRARY DESIGN SYSTEM
   Content-First Architecture • Restrained Library Aesthetic • High Readability
   ========================================================================== */

/* 1. Knowledge Hub Grid (8 Primary Portal Pillars) */
.knowledge-hub-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 48px;
}

@media (max-width: 1024px) {
  .knowledge-hub-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }
}

@media (max-width: 600px) {
  .knowledge-hub-grid {
    grid-template-columns: 1fr;
    gap: 14px;
  }
}

.knowledge-hub-card {
  background: var(--color-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: 22px 20px;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: inherit;
  transition: transform var(--transition-normal), box-shadow var(--transition-normal), border-color var(--transition-normal);
  position: relative;
  box-shadow: var(--shadow-sm);
}

.knowledge-hub-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
  border-color: var(--color-primary);
}

.knowledge-hub-icon-badge {
  width: 44px;
  height: 44px;
  border-radius: var(--radius-sm);
  background: var(--color-primary-subtle);
  color: var(--color-primary);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1.35rem;
  margin-bottom: 14px;
}

.knowledge-hub-title {
  font-size: 1.12rem;
  font-weight: 700;
  color: var(--color-primary);
  margin-bottom: 8px;
  line-height: 1.3;
}

.knowledge-hub-desc {
  font-size: 0.88rem;
  color: var(--color-text-muted);
  line-height: 1.55;
  margin-bottom: 16px;
  flex-grow: 1;
}

.knowledge-hub-meta {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--color-gold-dark);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 10px;
  border-top: 1px dashed var(--color-border-subtle);
}

/* 2. Daily Foundations Section (Balanced 2-Column Deck) */
.daily-foundations-grid {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 24px;
  margin-bottom: 48px;
}

@media (max-width: 900px) {
  .daily-foundations-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
}

.daily-wisdom-card {
  background: var(--color-card);
  border: 1px solid var(--color-border);
  border-top: 4px solid var(--color-primary);
  border-radius: var(--radius-md);
  padding: 24px;
  box-shadow: var(--shadow-sm);
  display: flex;
  flex-direction: column;
}

.observatory-card {
  background: var(--color-card);
  border: 1px solid var(--color-border);
  border-top: 4px solid var(--color-gold);
  border-radius: var(--radius-md);
  padding: 24px;
  box-shadow: var(--shadow-sm);
  display: flex;
  flex-direction: column;
}

/* 3. Refined Dignified Hero */
.clean-hero-section {
  padding: 44px 0 36px;
  background: var(--color-surface);
  border-bottom: 1px solid var(--color-border);
  text-align: center;
  position: relative;
}

.hero-destinations-row {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
  margin-top: 20px;
}

.hero-destination-pill {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  background: var(--color-card);
  border: 1px solid var(--color-border);
  border-radius: 99px;
  font-size: 0.86rem;
  font-weight: 600;
  color: var(--color-primary);
  text-decoration: none;
  transition: all var(--transition-fast);
  box-shadow: var(--shadow-sm);
}

.hero-destination-pill:hover {
  background: var(--color-primary);
  color: #FFFFFF;
  border-color: var(--color-primary);
  transform: translateY(-1px);
}

/* 4. Content Language Integrity Notice */
.content-lang-banner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
  padding: 10px 16px;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-left: 4px solid var(--color-primary);
  border-radius: var(--radius-sm);
  font-size: 0.86rem;
  color: var(--color-text-muted);
  margin-bottom: 24px;
}

/* 5. Clean Editorial Article Breadcrumbs */
.editorial-breadcrumb {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  font-size: 0.84rem;
  color: var(--color-text-muted);
  margin-bottom: 18px;
}

.editorial-breadcrumb a {
  color: var(--color-primary);
  text-decoration: none;
  font-weight: 600;
}

.editorial-breadcrumb a:hover {
  text-decoration: underline;
}
`;

if (!css.includes('PHASE 13 — REFINED ISLAMIC EDUCATIONAL LIBRARY DESIGN SYSTEM')) {
  css += '\n' + phase13Rules;
  fs.writeFileSync(cssPath, css, 'utf8');
  console.log('Appended Phase 13 Design System rules to main.css!');
} else {
  console.log('Phase 13 rules already present.');
}
