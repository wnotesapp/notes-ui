const merge = require('webpack-merge');
const common = require('./webpackCommon.config');

module.exports = merge(common, {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './build',
    historyApiFallback: true,
    host: 'localhost',
    port: '3000'
  },
  mode: 'development'
});