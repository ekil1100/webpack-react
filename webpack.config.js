const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './index.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },

  module: {
    rules: [{
      test: /\.(js|jsx|mjs)$/,
      loader: 'babel-loader',
    }]
  },

  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: './index.html',
    }),
  ],

  devServer: {
    contentBase: './dist',
    compress: true,
    hot: true,
    inline: true,
    host: 'localhost',
    port: 8080,
    watchContentBase: false,
  }

};
