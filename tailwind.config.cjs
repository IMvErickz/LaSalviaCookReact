/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
     "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cursive: 'URW Chancery L, cursive',
      }
    },
  },
  plugins: [],
}
