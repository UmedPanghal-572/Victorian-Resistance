/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'header': "url(assets/images/png/bg-header.png)",
      },
      fontFamily: {
        oswald: ['Oswald', 'sans-serif'],
        openSans: ['Open Sans', 'sans-serif'],
      },
      screens: {
        'start1920': '1920px',
      },
      height: {
        '800': '800px',
      },
    },
  },
  plugins: [],
}
