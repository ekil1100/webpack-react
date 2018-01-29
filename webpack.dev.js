const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  devtool: 'inline-source-map',

  module: {
    rules: [{
      test: /\.css$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            sourceMap: true,
            '-autoprefixer': true //禁用autoprefixer以确保为兼容性而废弃的css不被删除
          }
        },
        'postcss-loader'
      ]
    }]
  },

  devServer: {
    contentBase: path.resolve(__dirname, 'docs'),
    compress: true,
    hot: true,
    inline: true,
    host: 'localhost',
    port: 3000,
    watchContentBase: false,
  }
});
