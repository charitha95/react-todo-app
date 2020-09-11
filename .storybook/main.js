module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    {
      "name": "@storybook/preset-create-react-app",
      "options": {
        "craOverrides": {
          "fileLoaderExcludes": ["less"]
        }
      }
    },
    {
      name: '@storybook/preset-ant-design',
      options: {
        lessOptions: {
          modifyVars: {
            '@primary-color': '#1DA57A',
            '@font-family': 'Montserrat, Poppins'
          },
        },
      },
    }
  ]
}
