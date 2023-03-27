/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        not: ["Noticia Text", " serif"],
      },
    },
  },
  plugins: [],
};
