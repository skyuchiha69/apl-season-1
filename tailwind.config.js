/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        apl: {
          gold: '#B99A5B', // Restrained aged brass
          'gold-light': '#D4BA7E',
          'gold-dark': '#8E733B',
          dark: '#090C0B',
          card: '#111815',
          surface: '#141D19',
          muted: '#87968B',
        },
        editorial: {
          forest: '#0B1512',
          nearblack: '#090C0B',
          surface: '#111815',
          card: '#141D19',
          ivory: '#EAE4D8',
          brass: '#B99A5B',
          'brass-light': '#D4BA7E',
          'brass-dark': '#8E733B',
          sage: '#87968B',
          muted: '#A69F92',
          border: 'rgba(234, 228, 216, 0.1)',
        },
        // Dedicated team colors strictly for franchise context
        team: {
          authors: '#00E676',
          champions: '#FF2E4D',
          skyshot: '#00D2FF',
          knights: '#E2E8F0',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Oswald', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
}
