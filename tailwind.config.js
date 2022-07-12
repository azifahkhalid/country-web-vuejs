/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Nunito Sans', 'sans-serif']
    },
    extend: {
      fontSize: {
      '14': '14px',
      '16': '16px',
      },
      colors: {
        'dmElement': 'hsl(209, 23%, 22%)', // - Dark Blue (Dark Mode Elements): hsl(209, 23%, 22%)
        'dmBackground': 'hsl(207, 26%, 17%)', // - Very Dark Blue (Dark Mode Background): hsl(207, 26%, 17%)
        'lmText': 'hsl(200, 15%, 8%)', // - Very Dark Blue (Light Mode Text): hsl(200, 15%, 8%)
        'lmInput': 'hsl(0, 0%, 52%)', // - Dark Gray (Light Mode Input): hsl(0, 0%, 52%)
        'lmBackground': 'hsl(0, 0%, 98%)', // - Very Light Gray (Light Mode Background): hsl(0, 0%, 98%)
      }
    },
  },
  plugins: [],
}