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
      'secondary': '#58F99B',
      'light': '#F5F5F5',
      'gray': '#BDBDBD',
      'dark': '#212121',
    },
  },
  plugins: [],
}