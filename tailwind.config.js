module.exports = {
  purge: {
    content: [
      './public/**/*.html',
      './src/**/*.vue'
    ]
  },
  theme: {
    extend: {
      colors: {
        'turquoise': {
          '100': '#30D1D1',
          '200': '#288E8E',
          '300': '#226666',
          '400': '#183E3E',
          '500': '#0A1717'
        },
      }
    },
  },
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  variants: {},
  plugins: [],
}