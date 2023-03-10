/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blues: 'rgb(10,38,88)',
        darkblue: 'rgb(7,29,70)'       
      },
      screens:{
        xs: '450px',
      }
    },
  },
  plugins: [],
}
