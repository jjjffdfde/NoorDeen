/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/data/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        islamic: {
          primary: '#0F5132',       // Classic Deep Emerald
          primaryDark: '#073320',   // Rich Night Emerald
          primaryLight: '#198754',  // Vibrant Leaf Emerald
          secondary: '#D4AF37',     // Islamic Gold
          goldLight: '#F3E5AB',     // Soft Warm Gold
          goldDark: '#997300',      // Muted Antique Gold
          cream: '#FDFBF7',         // Warm parchment / cream
          creamDark: '#F3EDE2',     // Darker cream card background
          darkBg: '#0B1512',        // Deep forest-night background
          darkCard: '#13231E',      // Card surface in dark mode
          darkBorder: '#1F3830',    // Subtle border in dark mode
          sand: '#ECE5D8',
          accent: '#2A9D8F'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        quran: ['"Amiri Quran"', '"Scheherazade New"', '"Noto Naskh Arabic"', 'Traditional Arabic', 'serif'],
        arabic: ['"Amiri"', '"Scheherazade New"', '"Noto Naskh Arabic"', 'Arabic Typesetting', 'serif'],
        urdu: ['"Noto Nastaliq Urdu"', '"Jameel Noori Nastaleeq"', '"Urdu Typesetting"', 'serif'],
        heading: ['"Cinzel"', 'Georgia', 'serif'],
      },
      boxShadow: {
        'islamic': '0 4px 20px -2px rgba(15, 81, 50, 0.12)',
        'islamic-lg': '0 10px 30px -4px rgba(15, 81, 50, 0.2)',
        'gold': '0 4px 20px -2px rgba(212, 175, 55, 0.25)',
      }
    },
  },
  plugins: [],
}
