const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

const prodMode = process.env.NODE_ENV === 'production';

module.exports = {
  entry: ['babel-polyfill', './src/index.js'],
  output: {
    path: prodMode ? `${__dirname}/docs` : `${__dirname}/dist`,
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Fun Fun Forum - User Map',
      template: path.join(__dirname, 'src/index.ejs'),
    }),
    new webpack.ProvidePlugin({ fetch: 'isomorphic-fetch' }),
  ],
  devtool: prodMode ? '' : 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env'],
            plugins: [
              'transform-object-rest-spread',
              'transform-es2015-template-literals',
              'transform-es2015-literals',
              'transform-es2015-function-name',
              'transform-es2015-arrow-functions',
              'transform-es2015-block-scoped-functions',
              'transform-es2015-classes',
              'transform-es2015-object-super',
              'transform-es2015-shorthand-properties',
              'transform-es2015-computed-properties',
              'transform-es2015-for-of',
              'transform-es2015-sticky-regex',
              'transform-es2015-unicode-regex',
              'check-es2015-constants',
              'transform-es2015-spread',
              'transform-es2015-parameters',
              'transform-es2015-destructuring',
              'transform-es2015-block-scoping',
              'transform-es2015-typeof-symbol',
              ['transform-regenerator', { async: false, asyncGenerators: false }],
            ],
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
