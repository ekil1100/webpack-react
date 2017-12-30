const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
    }]
  },

  plugins: [
    new CleanWebpackPlugin(['docs']),
    new HtmlWebpackPlugin({
      inject: true,
      template: './src/index.html',
    })
  ],

};
