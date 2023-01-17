/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'black': {
          100: '#121212'
        },
      },
    },
  },
  plugins: [],
}
