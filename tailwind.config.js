/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      primary: "Poppins, sans-serif",
    },
    container: {
      padding:{
        DEFAULT: '30px',
      },
    },
    extend: {
      colors:{
        primary: '#222222',
        secondary: '#F5E6E0',
      },
      backgroundImage: {
        hero: "url('./src/assets/bg_hero.svg')"
      }
    },
  },
  plugins: [],
}

