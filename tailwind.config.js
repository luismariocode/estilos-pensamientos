/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    fontFamily: {
      'primary' : ['Sora', 'sans-serif'],
      'secondary' : ['Lunasima', 'sans-serif'],
    },


    colors: {
      'primary': '#00BFA6',
      'primary-dark': '#009884',
      'secondary': '#58F99B',
      'light': '#F5F5F5',
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