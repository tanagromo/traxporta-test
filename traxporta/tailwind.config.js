/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        tgray: {
          100: '#F8F8F9',
          200: '#EEEEEE',
          300: '#E3E5E9',
          400: '#B7BCC7',
          500: '#8D96AB',
          600: '#576177',
          700: '#2A3248',
          800: '#E5E5E5'
        }
      }
    },
  },
  plugins: [],
}

