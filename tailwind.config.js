/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{html,js,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      display: ['Poppins', 'sans-serif'],
      body: ['Poppins', 'sans-serif'],
      editor: [  "Source Serif Pro", 'serif']

    },
    extend: {
      fontSize: {
        14: '14px',
      },
      backgroundColor: {
        'main-bg': '#FAFBFB',
        'main-dark-bg': '#0f0f0f',
        'secondary-dark-bg': '#1d1d1d',
        'bg-dark-blue':'rgb(28, 39, 76)',
        'light-gray': '#F4f4f4',

        'grey':"#c5c5c5",
        'half-transparent': 'rgba(0, 0, 0, 0.5)',
        'border':'#1d1d1d'
      },
      borderWidth: {
        1: '1px',
      },
      borderColor: {
        color: '#',
      },
      width: {
        400: '400px',
        760: '760px',
        780: '780px',
        800: '800px',
        1000: '1000px',
        1200: '1200px',
        1400: '1400px',
      },
      height: {
        80: '80px',
      },
      minHeight: {
        590: '590px',
      },
      backgroundImage: {
        'hero-pattern': "url('https://i.ibb.co/MkvLDfb/Rectangle-4389.png')",
      },
    },
  },
  plugins: [],
};
