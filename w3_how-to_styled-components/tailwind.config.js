module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'sm': '440px',
      // => @media (min-width: 640px) { ... }

      'md': '547px',
      // => @media (min-width: 768px) { ... }

      'lg': '768px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1024',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1680',
      // => @media (min-width: 1536px) { ... }
    },
    extend: { //  Mie personalizzazzioni.
      colors: { //  Per esempio i miei colori.
        primary: '#ff4800',
        blue: {
          450: '#5F99F7'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
