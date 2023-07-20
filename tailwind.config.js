/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    fontFamily: {
      'primary' : ['Sora', 'sans-serif'],
    },


    colors: {
      'color-primary': '#00BFA6',
      'color-light': '#F5F5F5',
    },
  },
  plugins: [],
}