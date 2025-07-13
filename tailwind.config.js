/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2e7d32',
        accent: '#81c784',
        bg: '#fdfaf4',
        card: '#f1f8e9',
        highlight: '#f9a825',
        dark: '#212121',
      },
      fontFamily: {
        heading: ['Cinzel', 'serif'],
        subheading: ['Playfair Display', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
