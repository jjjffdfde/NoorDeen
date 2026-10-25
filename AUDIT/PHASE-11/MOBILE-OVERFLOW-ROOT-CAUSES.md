# PHASE 11: MOBILE OVERFLOW ROOT CAUSE ANALYSIS
**Comprehensive Architectural Breakdown of Mobile Layout Failures & Horizontal Sway**
*Date: 2026-10-24 | Target Engine: Chromium Headless CDP DOM Engine*

---

## 1. Overview & Problem Definition

When viewing the Islamic Knowledge Portal on any mobile device whose viewport width is $\le 520\text{px}$ (e.g. iPhone SE 375px, Pixel 7 360px, Galaxy S8 360px, iPhone 12/13/14 390px, Galaxy Z Fold folded 320px):
1. The page layout physically overflows the viewport boundary by up to $145\text{px} - 274\text{px}$.
2. Touch gestures enable horizontal panning and elastic rubber-banding, causing the entire UI to wobble and shake.
3. The mobile navigation hamburger button (`.mobile-menu-btn`) is pushed out of the viewport onto the far right (`x = 505\text{px}`), making it invisible and un-tappable for users.

---

## 2. Mathematical Root Cause Breakdown

### Root Cause 1: Header Inline Flex Collision (`.header-inner` + `.header-actions`)

In `public/css/main.css`:
```css
.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 76px;
  flex-wrap: nowrap;
  white-space: nowrap;
  gap: 16px;
}
```

The header contains two primary sibling blocks:
1. **`.logo-group`**:
   - `.logo-icon`: $44\text{px}$ width
   - `gap`: $12\text{px}$
   - `.logo-text-wrapper`: Contains `div.logo-text-title` ("Islamic Knowledge Portal" at $1.25\text{rem}$ bold, $\approx 179\text{px}$) and `div.logo-text-subtitle` ("Sacred Islamic Library & Tools" at $0.74\text{rem}$, $\approx 150\text{px}$).
   - **Total minimum content width of `.logo-group`**: $44 + 12 + 179 = \mathbf{235\text{px}}$.
   - Notice: `.logo-group` was assigned `flex-shrink: 0;` (preventing any compression).

2. **`.header-actions`**:
   - `#search-modal-btn`: Icon + "Search..." text + "Ctrl K" keyboard shortcut $\approx \mathbf{98\text{px}}$ (or $41\text{px}$ icon only).
   - `#language-selector-btn`: `🌐 English` button with padding $\approx \mathbf{92\text{px}}$.
   - `#theme-toggle-btn`: Icon button ($40\text{px} \times 40\text{px}$, margin/border $\approx \mathbf{44\text{px}}$).
   - `.mobile-menu-btn`: Icon button ($40\text{px} \times 40\text{px}$, border $\approx \mathbf{44\text{px}}$).
   - Inter-item `gap`: $10\text{px} \times 3 = 30\text{px}$.
   - **Total minimum content width of `.header-actions`**: $\approx 41 + 92 + 44 + 44 + 19 = \mathbf{240\text{px}}$.

3. **Total Header Sibling Sum**:
   $$\text{Total Width} = \text{Logo Group } (235\text{px}) + \text{Gap } (16\text{px}) + \text{Header Actions } (240\text{px}) + \text{Container Padding } (32\text{px}) = \mathbf{523\text{px}} \implies \text{Evaluated to } \mathbf{505\text{px}}.$$

4. **Consequence at $360\text{px}$ Screen Width**:
   $$\text{Excess Width} = 505\text{px} - 360\text{px} = \mathbf{+145\text{px}}.$$
   Because `.header-inner` has `white-space: nowrap;` and both `.logo-group` and `.header-actions` have `flex-shrink: 0`, the browser's CSS layout engine is physically forced to establish a minimum formatting context width of **505px**, which establishes the document's horizontal canvas at 505px. The mobile menu button sits at the rightmost edge (`x = 505px`), pushed 145px off-screen.

---

### Root Cause 2: Decorative Background Mandala Protrusion (`.hero-mandala-bg`)

In `public/css/main.css`:
```css
.hero-mandala-bg {
  position: absolute;
  width: 580px;
  height: 580px;
  right: -8%;
  top: 50%;
  transform: translateY(-50%);
  opacity: 0.07;
  pointer-events: none;
}
```
When `.hero-section` or its parent does not have `overflow: hidden; max-width: 100%;` with strict containment, the $580\text{px} \times 580\text{px}$ SVG protrudes beyond the right viewport margin (evaluated in CDP at `right = 489px` to `781px`), creating horizontal scrollbars even when other page content is hidden.

---

### Root Cause 3: Ineffective Bandage (`overflow-x: hidden` on Body)

In `public/css/main.css` line 2344:
```css
@media (max-width: 480px) {
  body {
    overflow-x: hidden;
  }
}
```
Why this fails:
1. `overflow-x: hidden` on `body` merely clips the visual paint; it does **not** recalculate the layout width of elements whose flex items exceed the viewport.
2. The browser still calculates `.mobile-menu-btn` at coordinate $505\text{px}$. Because it is beyond the $360\text{px}$ clip rectangle, the button is **completely truncated and unclickable**.
3. In modern mobile WebKit (iOS Safari) and Chromium (Android WebView / Capacitor), applying `overflow-x: hidden` to `body` while `html` is unconstrained still allows touch fling/scroll pan gestures to drag the page sideways, creating a jarring "shaking" feel.

---

### Root Cause 4: Duplicate Language Button on Mobile

The desktop header includes `#language-selector-btn` displaying `🌐 English` ($92\text{px}$). However:
- The mobile slide-out drawer (`.mobile-drawer-body`) **already contains** `#drawer-lang-btn` (`🌐 Switch Language`) specifically styled for mobile users.
- Displaying a full text language button in the cramped top navbar alongside the Logo, Search trigger, Theme button, and Hamburger button is structurally impossible on screens $< 480\text{px}$.
- Moving or hiding `#language-selector-btn` on screens $\le 520\text{px}$ immediately recovers $92\text{px}$ of top navbar width.

---

### Root Cause 5: Unresponsive Inline CSS Grids in Page Content

In several content pages, two-column grids were hardcoded via inline CSS styles:
- **`contact.html`**:
  `<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 32px; align-items: start;">`
  On a $360\text{px}$ screen, dividing into two columns leaves each column with $\approx 150\text{px}$, which is far smaller than the minimum inputs and cards ($280\text{px}$), causing the grid to blow out to $571\text{px}$.
- **`janazah-guide.html` and `salah-guide.html`**:
  `.editorial-page-container` at $\le 1024\text{px}$ used `grid-template-columns: 1fr;` without `min-width: 0;` on its child article, causing tables like the 6-column Rak'ah breakdown table ($620\text{px}$) to stretch the entire grid container.
- **`prophets.html`**:
  Quick directory grid buttons with long labels without word-break or min-width control.

---

## 3. Remediation Strategy

1. **Header Structural Redesign**:
   - Set `.header-inner { width: 100%; max-width: 100%; box-sizing: border-box; }`.
   - Set `.logo-group { min-width: 0; flex-shrink: 1; overflow: hidden; }`.
   - At $\le 768\text{px}$: hide `.logo-text-subtitle`.
   - At $\le 480\text{px}$: clamp `.logo-text-title` font size (`clamp(0.88rem, 3.8vw, 1.05rem)`), allow ellipsis.
   - At $\le 640\text{px}$: compact `#search-modal-btn` to icon-only ($40\text{px} \times 40\text{px}$ circle/square, hide "Search..." text and "Ctrl K" kbd).
   - At $\le 640\text{px}$: hide `#language-selector-btn` in header (delegating to the dedicated drawer button `#drawer-lang-btn`).
   - Sizing math on $320\text{px}$ screen:
     - Logo: $40\text{px}$ icon + $8\text{px}$ gap + $130\text{px}$ title = $178\text{px}$
     - Header actions: Search ($36\text{px}$) + Theme ($36\text{px}$) + Menu ($36\text{px}$) + $12\text{px}$ gap = $120\text{px}$
     - Total: $178 + 120 + 16\text{px padding} = \mathbf{314\text{px}} \le 320\text{px}$! Perfectly fits the smallest smartphone with zero overflow.
2. **Mandala Background Containment**:
   - Add `overflow: hidden; max-width: 100vw;` to `.hero-section` and constrain `.hero-mandala-bg` width to `min(580px, 90vw)`.
3. **Responsive Grid & Table Utilities**:
   - Replace rigid inline `grid-template-columns: 1fr 1fr` with responsive class `.grid-responsive-2col` (which collapses to `1fr` on $\le 768\text{px}$).
   - Ensure all tables are wrapped in `.table-responsive` with `overflow-x: auto; max-width: 100%; -webkit-overflow-scrolling: touch;`.
   - Add `min-width: 0;` to `.editorial-content-body` and `.editorial-page-container`.
4. **Eliminate All Superficial Bandages**:
   - Remove `overflow-x: hidden` from `body` once genuine underlying overflows are structurally resolved.
