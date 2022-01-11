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
      "scan-orange": "#F26D21", 
      "gunpowder-gray": "#BDBDBD",
      "success-green": "#34A853",
      "facebook-blue": "#1877F2",
      "instagram-yellow": "#FEDA77",
      "instagram-orange": "#F58529",
      "instagram-magenta": "#DD2A7B",
      "instagram-purple": "#8134AF",
      "instagram-blue": "#515BD4",
      "tag-gray": "rgba(63, 63, 63, 0.7)",
      "btn-yellow": "#FFEB3B",
      "btn-red": "#F44336",
      "btn-green": "#66BB6A"
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