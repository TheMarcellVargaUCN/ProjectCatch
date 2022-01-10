module.exports = {
  content: [
    "./assets/**/*.{html,js}",
    './index.html',
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
      },
      "gunpowder-gray": "#BDBDBD",
      "facebook-blue": "#1877F2",
      "tag-gray": "rgba(63, 63, 63, 0.7)",
      "btn-yellow": "#FFEB3B",
      "btn-red": "#F44336"
    },
    borderRadius: {
      'max': '100px',
      'quarter-rad': '25px'
    },
    fontFamily: {
      'roboto': ['Roboto', 'sans-serif']
    },
    maxHeight: {
      '128': '32rem'
    }
  },
  },
  plugins: [],
}