/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'navBar': ['Quicksand','-apple-system','"system-ui"','"Segoe UI"','Roboto','"Helvetica Neue"','Arial','sans-serif']
    },
  },
  plugins: [],
}

