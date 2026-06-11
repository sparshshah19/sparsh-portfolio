import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'lego-base':      '#F7F3EE',
        'lego-dark':      '#1A1A1A',
        'lego-red':       '#E3000B',
        'lego-yellow':    '#FFD700',
        'lego-blue':      '#006CB7',
        'lego-green':     '#00A650',
        'lego-orange':    '#FF6B35',
        'lego-gold':      '#B8A000',
        'lego-blueprint': '#1A6FE3',
      },
      fontFamily: {
        unbounded:      ['Unbounded', 'sans-serif'],
        grotesk:        ['var(--font-space-grotesk)', 'sans-serif'],
        inter:          ['var(--font-inter)', 'sans-serif'],
        'space-grotesk': ['var(--font-space-grotesk)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
