/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontSize: {
      'sm': ['14px']
    },
    screens: {
      'xl': {'max': '1020px'},
      'lg': {'max': '992px'},
      'md': {'max': '768px'},
      'sm': {'max': '480px'}
    },
    container: {
      padding: '20px',
      center: true
    },
    extend: {
      colors: {
        lightblack: '#151515'
      }
    },
  },
  plugins: [],
}