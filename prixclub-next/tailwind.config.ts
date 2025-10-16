import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#74AA9C',
          dark: '#53897B',
        },
        bg: {
          DEFAULT: '#0b2622',
          2: '#133a33',
        },
      },
      boxShadow: {
        glow: '0 10px 24px rgba(116,170,156,.35)',
      },
      borderRadius: {
        xl: '14px',
      },
    },
  },
  plugins: [],
}
export default config
