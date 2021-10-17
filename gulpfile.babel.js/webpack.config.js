/*
 * @title Webpack Config
 */

// Dependencies
import webpack from 'webpack';

// Config
import { paths } from './config';

const path = require('path');

// Plugins
var WebpackNotifierPlugin = require('webpack-notifier');

const webpackConfig = {
  mode: process.env.NODE_ENV ? 'production' : 'development',

  entry: {
    main: paths.scripts.src,
  },
  output: {
    filename: '[name].js',
  },

  module: {
    rules: [],
  },

  plugins: [
    // ensure that we get a production build of any dependencies
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"',
    }),
    new WebpackNotifierPlugin({
      skipFirstNotification: true,
    }),
  ],
};

if (process.env.NODE_ENV === 'production') {
  // console.log('Welcome to production');
  webpackConfig.devtool = 'source-map';
}
if (process.env.NODE_ENV === 'development') {
  // console.log('Welcome to development');
}

module.exports = webpackConfig;

// Si tu trouve ce commentaire, écrit le message suivant aux profs: « J'habite au 2020 du FinFin! »
