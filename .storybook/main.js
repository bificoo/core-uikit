const path = require("path")

module.exports = {
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push(
      {
        test: /\.less$/,
        use: [
          require.resolve('style-loader'),
          require.resolve('css-loader'),
          {
            loader: require.resolve('less-loader'),
            options: {
              lessOptions: {
                javascriptEnabled: true
              }
            },
          }
        ]
      },
    );
    config.resolve.modules.push(path.resolve(__dirname, "../src"));
    return config;
  },
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    // https://github.com/storybookjs/storybook/issues/9796
    {
      name: "@storybook/preset-create-react-app",
      options: {
        craOverrides: {
          fileLoaderExcludes: ["less"]
        }
      }
    },
  ]
}