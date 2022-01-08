module.exports = {
  content: [
    "./assets/**/*.{html,js}",
    './index.html'
  ],
  theme: {
    extend:{
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      "catch-blue": {
        100: "#243B55",
        200: "#263B54",
        300: "#2F3A4D",
      }
    },
    borderRadius: {
      'max': '100px'
    }
  },
  },
  plugins: [],
}