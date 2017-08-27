const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: ['babel-polyfill', './src/index.js'],
  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Fun Fun Forum - User Map',
    }),
    new webpack.ProvidePlugin({ fetch: 'isomorphic-fetch' }),
  ],
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
        },
      },
    ],
  },
  resolve: {
    alias: {
      leaflet_css: `${__dirname}/node_modules/leaflet/dist/leaflet.css`,
    },
  },
};
