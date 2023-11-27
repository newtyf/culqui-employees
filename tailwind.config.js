/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: "media",
  content: [],
  theme: {
    extend: {
      maxWidth: {
        '72': '288px',
      },
      rotate: {
        '1.2': ".5deg"
      },
      gridTemplateColumns: {
        '6-120': "repeat(6, minmax(120px, 1fr))"
      }
    },
  },
  plugins: [],
}

