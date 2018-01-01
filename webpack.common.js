const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: './src/js/index.js',

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
    }, {
      test: /\.woff(2)?(\?[a-z0-9#=&.]+)?$/,
      use: 'url-loader?name=font/[hash].[name].[ext]'
    }, {
      test: /\.(ttf|eot|svg)?(\?[a-z0-9#=&.]+)?$/,
      use: 'file-loader?name=font/[hash].[name].[ext]'
    }, {
      // 图片加载器，雷同file-loader，更适合图片，可以将较小的图片转成base64，减少http请求
      test: /\.(png|jpg|gif|ico|jpeg)$/,
      loader: 'url-loader?limit=8192&name=images/[name].[ext]'
    }]
  },

  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        alias: {
          src: path.resolve(__dirname, 'src')
        },
        extensions: ['.js', '.css', '.less']
      }
    }),
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
  ]

};
