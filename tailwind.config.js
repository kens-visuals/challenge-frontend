/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'work-sans': ['Work Sans', 'sans-serif'],
        'bungee-inline': ['Bungee Inline', 'sans-serif'],
      },
      colors: {
        primary: '#FF5F49',
        secondary: '#191917',
        tertiary: '#F0F0F0',
      },
      gridTemplateRows: {
        main: 'auto 1fr auto',
      },
    },
  },
  plugins: [],
};
