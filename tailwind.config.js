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
        todoSuccess: '#65DE86',
        todoDanger: '#FB789B',
        todoSuccessHover: '#54CE75',
        todoDangerHover: '#FE5885',
      },
      height: {
        '78': '30rem'
      }
    },
  },
  variants: {},
  plugins: [],
}
