/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgPrime: '#FAFAFA',
        borderPrime: '#E0E0E0',
        colorPrime: '#424242',
      },
      fontFamily: {
        sans: ['Open Sans', 'ui-sans-serif', 'system-ui'],
      }
    },
  },
  plugins: [],
};
