/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        'deep-blue': '#010026',
        blue: '#2CBCE9',
        red: '#781423',
        'bright-red': '#ab5261',
        yellow: '#FDCC49',
        grey: '#ededed',
        'dark-grey': '#757575',
        'opaque-black': 'rgba(0,0,0,0.35)',
      },
      backgroundImage: (theme) => ({
        'gradient-rainbow':
          'linear-gradient(81.66deg, #00B5EE 7.21%, #FF45A4 45.05%, #FFBA00 78.07%)',
        'gradient-rainblue':
          'linear-gradient(90deg, #24CBFF 14.53%, #FC59FF 69.36%, #FFBD0C 117.73%)',
        'gradient-predawn': 'linear-gradient(90deg, #FFA17F, #00223E)',
        'gradient-shore': 'linear-gradient(90deg, #70e1f5, #ffd194)',
        'gradient-starfall': 'linear-gradient(90deg, #f0c27b, #4b1248)',
        'gradient-orange': 'linear-gradient(90deg, #EA5A6F, #DE791E, #FCCF3A)',
      }),
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        opensans: ['Open Sans', 'sans-serif'],
      },
      content: {
        brush: "url('./assets/brush.png')",
        person1: "url('./assets/person-1.png')",
        person2: "url('./assets/person-2.png')",
        person3: "url('./assets/person-3.png')",
      },
    },
    screens: {
      xs: '480px',
      ss: '620px',
      sm: '768px',
      md: '1060px',
      lg: '1200px',
      xl: '1700px',
    },
  },
  plugins: [],
};
