/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,ts}",
    "./src/**/*.{vue,js,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'mochiy': ['Mochiy Pop P One', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'] 
      },
    },

    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'aureolin': '#ffee30ff',
      'eggplant': '#6f5060ff',
      'burnished': '#a78682ff',
      'white': '#fffafbff',
      'black': '#000000ff',
    },

  },
  plugins: [],
}
