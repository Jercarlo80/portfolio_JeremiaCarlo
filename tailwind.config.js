/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      padding: '16px',
      center: true
    },
    extend: {
      colors: {
        primary: '#0190ff',
        dark: '#0f172a'
      }, 
      screens: {
        '2xl':'1320px'
      }
    },
  },
  plugins: [],
}
