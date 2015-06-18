var Webpack = require('webpack');
var path = require('path');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var buildPath = path.resolve(__dirname, 'public', 'build');
var bannerPath = path.resolve(__dirname, 'app/banners/', 'entry.js');
var emailPath = path.resolve(__dirname, 'app/email/', 'entry.js');
var dealsPath = path.resolve(__dirname, 'app/deals/', 'entry.js');
var hot = 'webpack/hot/dev-server';
var dev-server = 'webpack-dev-server/client?http://localhost:8080';
var config = {

  // Makes sure errors in console map to the correct file
  // and line number
  devtool: 'eval',
  entry: {
    banners : [hot, dev-server, bannerPath],
    deals : [hot, dev-server, dealsPath],
    email : [hot, dev-server, emailPath]
  },
  // entry: [

  //   banners: 
  //   // For hot style updates
  //   'webpack/hot/dev-server', 

  //   // The script refreshing the browser on hot updates
  //   'webpack-dev-server/client?http://localhost:8080', 

  //   // Our application
  //   mainPath],
  output: {

    // We need to give Webpack a path. It does not actually need it,
    // because files are kept in memory in webpack-dev-server, but an 
    // error will occur if nothing is specified. We use the buildPath 
    // as that points to where the files will eventually be bundled
    // in production
    path: buildPath,
    filename: '[name].bundle.js',

    // Everything related to Webpack should go through a build path,
    // localhost:3000/build. That makes proxying easier to handle
    publicPath: '/build/'
  },
  module: {

    loaders: [

    // I highly recommend using the babel-loader as it gives you
    // ES6/7 syntax and JSX transpiling out of the box
    {
      test: /\.js$/,
      loader: 'babel',
      exclude: [nodeModulesPath]
    },

    // Let us also add the style-loader and css-loader, which you can
    // expand with less-loader etc.
    {
      test: /\.css$/,
      loader: 'style!css'
    }

    ]
  },

  // We have to manually add the Hot Replacement plugin when running
  // from Node
  plugins: [new Webpack.HotModuleReplacementPlugin()]
};

module.exports = config;