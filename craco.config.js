const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#28c7bd',
              '@font-family': 'Montserrat, Poppins',
              '@border-radius-base': '4px'
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};