'use strict';

const HWP = require('html-webpack-plugin');
const cssExtract = require('mini-css-extract-plugin');
const cssMin = require('optimize-css-assets-webpack-plugin');
const dev = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: './src/main',
  output: {
    path: __dirname + '/dist',
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.s(c|a)ss$/,
        use: [dev ? 'style-loader' : cssExtract.loader, 'css-loader', 'sass-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'file-loader',
        exclude: /node_modules/,
      },
    ]
  },
  plugins: [
    new HWP({
      template: './src/index.html'
    }),
    ...!dev ? [
      new cssMin({}),
      new cssExtract({
        filename: '[name].css'
      })
    ] : []
  ],
  devServer: {
    host: '0.0.0.0',
    port: 8080,
    overlay: true,
    stats: 'minimal'
  }
};
