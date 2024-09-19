module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
plugins: [require("daisyui")],
daisyui: {
  themes: ['light',
   {dark: {
    ...require("daisyui/src/colors/themes")["[data-theme=dark]"],
    primary: "#1FB2A6",
    "primary-focus": "#1FB2c6"
  }}, 
  'dracula']
},
}
