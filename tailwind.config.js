/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        'main': '#e4002b',
        'second': '#393f52cc'
      }
    },
  },
  plugins: [],
}