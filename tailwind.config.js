module.exports = {
  important: true,
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true
  },
  purge: [],
  theme: {
    extend: {
      colors: {
        cyan: '#319795',
      },
      backgroundColor: {
        todoSuccess: '#BBECE9',
        todoDanger: '#F6ABAB',
        todoSuccessHover: '#6BD5CE',
        todoDangerHover: '#F89090',
      }
    },
  },
  variants: {},
  plugins: [],
}
