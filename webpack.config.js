var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./src/index.js",
  output: {
    path: `${__dirname}/dist`,
    filename: "bundle.js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Fun Fun Forum - User Map'
    })
  ],
  devtool: "source-map",
  module: {
    loaders: [
      { test: /\.css$/, loader: "style!css" }
    ]
  }
};