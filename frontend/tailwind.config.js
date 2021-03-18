module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    boxShadow: {
      purple: '0 .5rem 1rem rgba(	124, 58, 237,.125)',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
