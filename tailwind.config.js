/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        zeus: '#2B2120', // Nome personalizado para sua cor
      }
    },
  },
  plugins: [],
}

