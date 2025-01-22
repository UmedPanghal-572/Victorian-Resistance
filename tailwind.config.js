/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'resistance':"url(assets/images/png/bg-layer-resistance.png)",
        'header': "url(assets/images/gif/victory.gif)",
        'footer': "url(assets/images/png/footer-bg-opacity-2.png)",
      },
      fontFamily: {
        oswald: ['Oswald', 'sans-serif'],
        openSans: ['Open Sans', 'sans-serif'],
      },
      screens: {
        'start1920': '1920px',
        'sm-min': '400px',
      },
      height: {
        '800': '800px',
      },
    },
  },
  plugins: [],
}
