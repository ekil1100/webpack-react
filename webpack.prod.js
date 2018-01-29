const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = merge(common, {
  devtool: 'source-map',

  module: {
    rules: [{
      test: /\.css$/,
      use: ExtractTextPlugin.extract([
        {
          loader: 'css-loader',
          options: {
            sourceMap: true,
            minimize: true,
            '-autoprefixer': true //禁用autoprefixer以确保为兼容性而废弃的css不被删除
          }
        },
        'postcss-loader'
      ])
    }]
  },

  plugins: [
    /* 抽取出所有通用的部分 */
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'commons', //不能与entry的名字相同
    //   filename: '[name]/bundle.js',
    //   minChunks: 2 //至少2个chunk相同，就执行抽取
    // }),

    /* 抽取出chunk的css */
    new ExtractTextPlugin('bundle.css'),
    new UglifyJSPlugin({
      sourceMap: true
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
});
