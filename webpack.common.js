const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',

  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: 'bundle.js',
  },

  module: {
    rules: [{
      test: /\.(js|jsx|mjs)$/,
      include: [
        path.resolve(__dirname, 'src')
      ],
      use: 'babel-loader',
    }, {
      test: require.resolve('jquery'), // 此loader配置项的目标是NPM中的jquery
      use: 'expose-loader?$!expose-loader?jQuery', // 先把jQuery对象声明成为全局变量`jQuery`，再通过管道进一步又声明成为全局变量`$`
    }]
  },

  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      'window.$': 'jquery',
      React: 'react',
      ReactDOM: 'react-dom'
    }),
    new CleanWebpackPlugin(['docs']),
    new HtmlWebpackPlugin({
      inject: true,
      template: './src/index.html',
    })
  ],

};
