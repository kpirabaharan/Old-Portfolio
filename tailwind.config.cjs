/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  mode: 'jit',
  theme: {
    extend: {
      transitionDelay: {
        2000: '2000ms',
      },
      maxWidth: {
        '8xl': '90rem',
      },
      animation: {
        fade: 'fadeOut 2s 2s ease-out',
      },
      keyframes: (theme) => ({
        fadeOut: {
          '0%': { backgroundColor: theme('colors.transparent') },
          '100%': { backgroundColor: theme('colors.primary') },
        },
      }),
      colors: {
        primary: '#080609',
        secondary: '#9DCBD7',
        'secondary-2': '#BADAE2',
        tertiary: '#151030',
        teal: '#448b9c',
        'dark-teal': '#0d1d31',
        'black-100': '#100d25',
        'black-200': '#090325',
        'white-100': '#f3f3f3',
      },
      boxShadow: {
        card: '0px 35px 120px -15px #211e35',
      },
      backgroundImage: {
        wallpaper: "url('/bg-wallpaper.jpg')",
        'gradient-teal': 'linear-gradient(135deg, #448b9c, #080609)',
      },
      fontFamily: {
        kaushan: ['Kaushan Script', 'cursive'],
        playfair: ['Playfair Display', 'serif'],
        opensans: ['Open Sans', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
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
