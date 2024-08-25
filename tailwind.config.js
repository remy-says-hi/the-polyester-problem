/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './docs/*.html'
  ],
  theme: {
    extend: {},
    container: {
      center: true,
      screens: {
        DEFAULT: '100%',
        sm: '100%',
        md: '100%',
        lg: '100%',
        xl: '1180px',
        '2xl': '1180px'
      },
    },
  },
  plugins: [],
}

