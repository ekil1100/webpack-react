const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },

  module: {
    rules: [{
      test: /\.(js|jsx|mjs)$/,
      include: [
        path.resolve(__dirname, 'src')
      ],
      loader: 'babel-loader',
    }]
  },

  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: './src/index.html',
    }),
  ],

  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    compress: true,
    hot: true,
    inline: true,
    host: 'localhost',
    port: 8080,
    watchContentBase: false,
  }

};
