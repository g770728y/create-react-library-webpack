const path = require('path');

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve('awesome-typescript-loader')
      }
    ]
  });
  config.resolve.extensions.push('.ts', '.tsx');

  /****************** WARNING: 在umi项目中, 需要打开以下选项. 但create-react-app项目打开会报错!!!  **********************/

  /** 支持sass, see: https://storybook.js.org/docs/configurations/custom-webpack-config/#full-control-mode */
  /** warning: 这个不适合create-react-app项目!!! */
  // config.module.rules.push({
  //   test: /\.scss$/,
  //   loaders: [
  //     require.resolve('style-loader'),
  //     /** 支持css module, see: https://github.com/storybookjs/storybook/issues/2320#issuecomment-351804807 */
  //     {
  //       loader: require.resolve('css-loader'),
  //       options: {
  //         importLoaders: 1,
  //         modules: true,
  //         localIdentName: '[name]__[local]___[hash:base64:5]',
  //       },
  //     },
  //     require.resolve('sass-loader'),
  //   ],
  //   include: path.resolve(__dirname, '../src'),
  // });
  return config;
};
