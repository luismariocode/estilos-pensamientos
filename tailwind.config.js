/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    fontFamily: {
      'primary' : ['Montsserrat', 'sans-serif'],
      'secondary' : ['Lato', 'sans-serif'],
    },


    colors: {
      'primary': '#6176EA',
      'primary-light': '#74CCD8',
      'secondary': '#042A2B',
      'light': '#F2F2F2',
      'white': '#FFFFFF',
      'gray': '#BDBDBD',
      'dark': '#1c1c1c',
      'red' : '#FF0000',
      'gray-light' : '#dddddd',
      'blue' : '#26547C',
      'sucess' : '#6969B3',
      'sucess-dark' : '#171123',
      'blue-light' : '#C5D5EA',

    },
  },
  plugins: [],
}