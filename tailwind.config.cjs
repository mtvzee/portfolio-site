/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Alfa: ['Alfa Slab One', 'cursive'],
        Archivo: ['Archivo Black', 'sans-serif'],
        Caveat: ['Caveat', ' cursive'],
        Permanent: ['Permanent Marker', ' cursive'],
        Ultra: ['Ultra', ' serif'],
      },
      colors: {
        primary: '#6ba7e8',
        secondary: '',
        'c-light': '#777777',
      },
    },
  },
  plugins: [],
};
