'use strict';

const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const srcPath = path.join(__dirname, 'src');
const autoprefixer = require('autoprefixer');
const iconsPath = path.join(srcPath,'assets', 'icons');

const cssLoaders = [
  {
    loader: "css-loader",
    options: {
      modules: true,
      localIdentName: '[local]__[hash:base64:10]',
      sourceMap: true,
    },
  },
  {
    loader: "sass-loader",
    options: {
      sourceMap: true,
      sourceMapContents: true,
    },
  },
  {
    loader: 'postcss-loader',
    options: {
      plugins: () => ([autoprefixer]),
    },
  },
];

const entry = process.env.NODE_ENV === 'development'
? ['webpack-dev-server/client?http://localhost:8080',
  'webpack/hot/only-dev-server',
  path.resolve(__dirname, 'src/app.jsx')]
: path.resolve(__dirname, 'src/app.jsx');

const publicPath = process.env.NODE_ENV == 'development' ? '/' : './';

module.exports = {
  context: path.resolve(__dirname, './src'),
  devtool: 'source-map',
  entry,
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
    publicPath,
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
    contentBase: path.resolve(__dirname, './src'),
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      // {
      //   enforce: "pre",
      //   test: /\.jsx|js/,
      //   exclude: /node_modules/,
      //   loader: "eslint-loader",
      //   options: {
      //     configFile: '.eslintrc.json',
      //     emitError: false,
      //     emitWarning: true,
      //     failOnWarning: false,
      //     failOnError: false,
      //   },
      // },
      {
        test: /\.json$/,
        loader: "json-loader",
        enforce: "pre",
      },
      {
        test: /\.js|jsx$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['es2015', 'stage-0', 'react'],
          plugins: [
            'babel-plugin-transform-class-properties',
            'babel-plugin-syntax-class-properties',
            'babel-plugin-transform-object-rest-spread',
          ],
        },
      },
      {
        test: /\.(png|jpg)$/i,
        loader: 'url-loader',
        options: {
          name: 'assets/images/[name].[ext]',
          limit: 25000,
        },
      },
      {
        test: /\.(woff|woff2)$/,
        loader: 'url-loader',
        options: {
          limit: 50000,
          mimetype: 'application/font-woff',
          name: 'assets/fonts/[name].[ext]',
        },
      },
      {
        test: /\.svg$/,
        include: path.join(srcPath, 'assets', 'icons'),
        loaders: [
          'svg-sprite-loader?' + JSON.stringify({
            name: '[name].[ext]',
            prefixize: true,
          }),
          'svgo-loader?' + JSON.stringify({
            plugins: [
              { removeTitle: true },
              { convertPathData: false },
              { removeUselessStrokeAndFill: true },
            ],
          }),
        ],
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: cssLoaders,
        }),
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: 'index.html',
      inject: 'body'
    }),
    new FaviconsWebpackPlugin({
      logo: './favicon.png',
      prefix: 'icons-[hash]/',
      // Emit all stats of the generated icons
      emitStats: false,
      // The name of the json containing all favicon information
      statsFilename: 'iconstats-[hash].json',
      persistentCache: true,
      inject: true,
      icons: {
        android: false,
        appleIcon: false,
        appleStartup: false,
        coast: false,
        favicons: true,
        firefox: true,
        opengraph: false,
        twitter: false,
        yandex: false,
        windows: false
      }
    }),
     new ExtractTextPlugin({
      filename: 'bundle.css',
      disable: false,
      allChunks: true,
    }),
  ],
};
