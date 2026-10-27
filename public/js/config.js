/**
 * ISLAMIC KNOWLEDGE PORTAL — GLOBAL CONFIGURATION & ADSENSE COMPLIANCE CONTROLLER
 * Zero-CLS Semantic Ad Slots & Editorial Platform Settings
 */

const PortalConfig = {
  // Master switch for Google AdSense & Sponsor Units
  // Set to true after receiving Google AdSense account approval
  ADS_ENABLED: false,

  // AdSense Publisher ID (Replace with your actual ca-pub-XXXXXXXXXXXXXXXX once approved)
  ADSENSE_CLIENT_ID: "ca-pub-XXXXXXXXXXXXXXXX",

  // Cookie Consent & Compliance
  COOKIE_CONSENT_KEY: "islamic_portal_cookie_consent_v1",

  // Feature Flags
  ENABLE_OFFLINE_AUDIO_CACHE: true,
  ENABLE_KEYBOARD_SHORTCUTS: true, // Ctrl+K / Cmd+K for search

  // AD_CONFIG mapping for top and bottom zero-CLS banner slots
  AD_CONFIG: {
    BANNER_TOP: {
      id: "ad-banner-top",
      width: "728px",
      minHeight: "90px",
      format: "horizontal"
    },
    BANNER_BOTTOM: {
      id: "ad-banner-bottom",
      width: "728px",
      minHeight: "90px",
      format: "horizontal"
    }
  },

  // Ad Slots Registry with strict CLS=0 dimension reservations
  AD_SLOTS: {
    TOP_BANNER: {
      id: "ad-slot-top-banner",
      width: "728px",
      minHeight: "90px",
      format: "horizontal"
    },
    SIDEBAR_STICKY: {
      id: "ad-slot-sidebar",
      width: "300px",
      minHeight: "250px",
      format: "rectangle"
    },
    IN_ARTICLE: {
      id: "ad-slot-article-mid",
      width: "100%",
      minHeight: "120px",
      format: "fluid"
    }
  },

  // Initialize Ad Containers (Safe, non-disruptive CLS=0 placeholders)
  initAdSlots() {
    if (!this.ADS_ENABLED) {
      document.querySelectorAll('.ad-slot-container').forEach(el => {
        el.style.display = 'none';
      });
      return;
    }

    document.querySelectorAll('.ad-slot-container').forEach(el => {
      el.style.display = 'flex';
    });
  },

  // Deployment-root helper so runtime-generated links (cookie banner, etc.)
  // work from /articles/* pages and from the file:// offline bundle.
  getBasePath() {
    if (typeof window === 'undefined') return './';
    const p = window.location.pathname;
    if (p.includes('/articles/')) return p.substring(0, p.indexOf('/articles/') + 1);
    return p.substring(0, p.lastIndexOf('/') + 1) || './';
  },

  // Initialize Cookie Consent Bar (GDPR, CCPA & AdSense compliant)
  initCookieConsent() {
    const consent = localStorage.getItem(this.COOKIE_CONSENT_KEY);
    if (consent) return;

    let banner = document.getElementById('cookie-consent-banner');
    if (!banner) {
      banner = document.createElement('div');
      banner.id = 'cookie-consent-banner';
      banner.className = 'cookie-consent-bar';
      banner.setAttribute('role', 'region');
      banner.setAttribute('aria-label', 'Privacy and Cookie Consent');
      banner.innerHTML = `
        <div class="container cookie-consent-inner">
          <div class="cookie-consent-text">
            <span>🍪</span>
            <p>
              We use necessary cookies and local storage to persist your Quran reading progress, prayer times, and preferences. We respect your privacy and never sell personal data. Review our <a href="${this.getBasePath()}privacy.html" style="color: var(--color-gold); text-decoration: underline;">Privacy Policy</a>.
            </p>
          </div>
          <div class="cookie-consent-actions">
            <button class="btn btn-outline" style="padding: 6px 14px; font-size: 0.85rem;" onclick="PortalConfig.acceptCookies(false)">Necessary Only</button>
            <button class="btn btn-primary" style="padding: 6px 18px; font-size: 0.85rem;" onclick="PortalConfig.acceptCookies(true)">Accept All</button>
          </div>
        </div>
      `;
      document.body.appendChild(banner);
    }
  },

  acceptCookies(all = true) {
    localStorage.setItem(this.COOKIE_CONSENT_KEY, all ? 'accepted_all' : 'accepted_necessary');
    const banner = document.getElementById('cookie-consent-banner');
    if (banner) {
      banner.style.opacity = '0';
      banner.style.transform = 'translateY(100%)';
      setTimeout(() => banner.remove(), 300);
    }
  }
};

window.PortalConfig = PortalConfig;
window.AD_CONFIG = PortalConfig.AD_CONFIG;
document.addEventListener('DOMContentLoaded', () => {
  PortalConfig.initAdSlots();
  PortalConfig.initCookieConsent();
});
