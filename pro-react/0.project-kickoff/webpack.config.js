var webpack = require('webpack');
var config = {
  entry:  __dirname + "/app/index.js",
  output: {
    path: __dirname + "/public",
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['es2015','react']
      }
    }]
  },
  devServer: {
    contentBase: "./public",
    colors: true,
    historyApiFallback: true,
    inline: true
  }
}

module.exports = config;