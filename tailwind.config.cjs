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
        freeMono: 'FreeMono, monospace',
      },
      colors: {
        'background': '#393256',
        'tittle': '#fcd34d',
        'modal': '#1f2937'
      }
    },
  },
  plugins: [],
}
