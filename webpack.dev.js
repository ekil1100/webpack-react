const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'docs'),
    compress: true,
    hot: true,
    inline: true,
    host: 'localhost',
    port: 8080,
    watchContentBase: false,
  }
});
