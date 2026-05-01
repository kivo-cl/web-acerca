/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-orange':    '#e9740b',
        'brand-orange-lt': '#f7a25c',
        'brand-black':     '#1d1d1b',
        'brand-grey':      '#b1b1b1',
      },
      fontFamily: {
        sans: ['"Source Sans 3"', 'sans-serif'],
      },
      animation: {
        marquee: 'marquee 32s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
