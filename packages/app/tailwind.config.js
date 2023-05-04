/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts,tsx}', '../shared/src/**/*.{html,tsx}'],
  theme: {
    container: {
      center: true
    },
    fontFamily: {
      inter: ['"Inter"']
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#40a3ff',
          light: '#70BAFF',
          dark: '#0A89FF',
        },
      },
    }
  },
  plugins: [
    require('@headlessui/tailwindcss')
  ]
}
