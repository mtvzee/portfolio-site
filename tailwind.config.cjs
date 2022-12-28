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
      animation: {
        wave: 'wave 8s ease-in-out infinite',
      },
      keyframes: {
        wave: {
          '0%,100%': {
            'clip-path':
              'polygon(0 47%, 11% 40%, 26% 37%, 40% 42%, 50% 50%, 62% 56%, 78% 57%, 92% 53%, 100% 48%, 100% 100%, 0 100%)',
          },
          '50%': {
            'clip-path':
              'polygon(0 49%, 11% 56%, 22% 61%, 38% 58%, 50% 50%, 60% 44%, 73% 40%, 89% 42%, 100% 49%, 100% 100%, 0 100%)',
          },
        },
      },
    },
  },
  plugins: [],
};
