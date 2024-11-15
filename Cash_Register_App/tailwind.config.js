/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app.html", "./JS/**/*.js"],
  theme: {
    extend: {
      'colors': {
        'custom-aqua': '#00d1b2',
        'custom-aqua-light': '#f5fdfc'
      }
    },
  },
  plugins: [],
}

