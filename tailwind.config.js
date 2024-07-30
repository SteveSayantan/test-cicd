/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        moderate_blue:  "#5457b6",
        soft_red:  "#ed6468",
        light_grayish_blue: "#c3c4ef",
        pale_red:	"#ffb8bb",
        dark_blue: "#324152",
        grayish_blue:"#67727e",
        light_gray:"#eaecf1",
        very_light_gray:"#f5f6fa" 
      },
      fontFamily:{
        'rubik':["'Rubik'",...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}

