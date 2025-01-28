/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        zeus: '#2B2120',
        brown_red: '#922F0F',
        rose_gold: '#E1C8C8',
        ebony: '#282142',
      }
    },
  },
  plugins: [],
}

