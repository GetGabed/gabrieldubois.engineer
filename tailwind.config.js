/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      textColor: {
        skin: {
          primary: "var(--color-primary)"
        }
      },
      colors: {
        'black': {
          100: '#121212',
        },
        primary: 'var(--color-primary)'
      },
      backgroundColor: {
        'light': "#efefef",
        'dark': "#101010",
        'dark-light': "#151515"
      },
    },
  },
  plugins: [require("tailwind-scrollbar"), require('@headlessui/tailwindcss')],
  layers: {
    'hover': ['responsive'],
  },
}
