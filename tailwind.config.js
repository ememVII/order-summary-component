/** @type {import('tailwindcss').Config} */

// tailwind.config.js
// const colors = require("tailwindcss/colors")
// const defaultSpacing = require("tailwindcss/defaultTheme").spacing

export default {
  content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      colors: {
        'pale-blue' : 'hsl(225, 100%, 94%)',
        'bright-blue' : 'hsl(245, 75%, 52%)',
        'very-pale-blue' : 'hsl(225, 100%, 98%)',
        'desaturated-blue' : 'hsl(224, 23%, 55%)',
        'desaturated-blue-light' : 'hsl(224, 23%, 55%, 0.1)',
        'dark-blue' : 'hsl(223, 47%, 23%)',
        'dark-purple' : '#4d41e2',
        'light-purple' : '#766cf1'
      },
      spacing: {
        100: '25rem',
        104: '26rem',
        108: '27rem',
        112: '28rem',
      }
    },

  },
  plugins: [],
}

