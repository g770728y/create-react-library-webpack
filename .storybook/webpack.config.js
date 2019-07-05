const path = require('path');

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve('awesome-typescript-loader'),
      },
    ],
  });
  config.resolve.extensions.push('.ts', '.tsx');

  /** 支持sass, see: https://storybook.js.org/docs/configurations/custom-webpack-config/#full-control-mode */
  config.module.rules.push({
    test: /\.scss$/,
    loaders: [
      require.resolve('style-loader'),
      /** 支持css module, see: https://github.com/storybookjs/storybook/issues/2320#issuecomment-351804807 */
      {
        loader: require.resolve('css-loader'),
        options: {
          importLoaders: 1,
          modules: true,
          localIdentName: '[name]__[local]___[hash:base64:5]',
        },
      },
      require.resolve('sass-loader'),
    ],
    include: path.resolve(__dirname, '../src'),
  });
  return config;
};
