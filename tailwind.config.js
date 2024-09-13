/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'baskerville': ['Libre Baskerville', 'serif'],
        'rufina': ['Rufina', 'sans-serif'],
        'lato': ['Lato', 'sans-serif'],
      },
      colors: {
        primary: '#233000', 
      },
    },
  },
  plugins: [],
}

