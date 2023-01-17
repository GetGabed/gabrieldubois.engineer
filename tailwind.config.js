/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'black': {
          100: '#121212'
        },
      },
      backgroundImage:{
        'custom-light': "url('/Mass Circles.svg')",
        'custom-dark': "url('/Sprinkle.svg')",
      }
    },
  },
  variants: {
    extend: {
      backgroundImage: ["dark"],
    },
  },
  plugins: [],
}
