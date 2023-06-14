/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'product': "url('/images/productImg.jpg')",
      }
    },
    fontFamily: {
      'navBar': ['Quicksand','-apple-system','"system-ui"','"Segoe UI"','Roboto','"Helvetica Neue"','Arial','sans-serif']
    },
  },
  plugins: [],
}

