/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts,tsx}', '../shared/src/**/*.{html,tsx}'],
  theme: {
    container: {
      center: true
    },
    fontFamily: {
      inter: ['"Inter"']
    }
  },
  plugins: []
}
