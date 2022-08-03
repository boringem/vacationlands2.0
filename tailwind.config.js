/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'purple': '#3F52BB',
      'black': '#03010A',
      'yellow': '#FFCC00',
      'white': '#FFFFFF'
    },
    fontFamily: {
      decor: ['"Yellowtail"', 'cursive'],
      sans: ['"Bebas Neue"', 'sans-serif'],
      serif: ['"Source Serif Pro"', 'serif'],
      map: ['"Caveat"', 'handwriting']
    }
  },
  plugins: [],
}
