import Webpack from 'webpack';
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
let nodeModulesPath = path.resolve(__dirname, 'node_modules');
let buildPath = path.resolve(__dirname, 'public', 'build');

//Entry points
let bannerPath = path.resolve(__dirname, 'app/banners/', 'entry.js');
let emailPath = path.resolve(__dirname, 'app/email/', 'entry.js');
let dealsPath = path.resolve(__dirname, 'app/deals/', 'entry.js');
let mainPath = path.resolve(__dirname, 'app', 'main.js');

let hot = 'webpack/hot/dev-server';
let devServer = 'webpack-dev-server/client?http://localhost:8080';
let config = {

  // Makes sure errors in console map to the correct file
  // and line number
  devtool: 'eval',
  // entry: {
  //   banners : [hot, devServer, bannerPath],
  //   deals : [hot, devServer, dealsPath],
  //   email : [hot, devServer, emailPath]
  // },
  entry: [

    'webpack-dev-server/client?http://localhost:3001',
    'webpack/hot/only-dev-server',
    // Our application
    mainPath],
  output: {

    // We need to give Webpack a path. It does not actually need it,
    // because files are kept in memory in webpack-dev-server, but an 
    // error will occur if nothing is specified. We use the buildPath 
    // as that points to where the files will eventually be bundled
    // in production
    path: buildPath,
    filename: 'bundle.js',

    // Everything related to Webpack should go through a build path,
    // localhost:3000/build. That makes proxying easier to handle
    publicPath: 'http://localhost:3001/build/'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {

    loaders: [

    // I highly recommend using the babel-loader as it gives you
    // ES6/7 syntax and JSX transpiling out of the box
    {
      test: /\.js$/,
      loaders: ['react-hot', 'babel-loader?experimental'],
      exclude: [nodeModulesPath]
    },

    // Let us also add the style-loader and css-loader, which you can
    // expand with less-loader etc.
    {
      test: /\.less$/,
      loader: ExtractTextPlugin.extract("css!less")
    }

    ]
  },

  // We have to manually add the Hot Replacement plugin when running
  // from Node
  plugins: [
    new Webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('style.css', {
      allChunks: true
    }),
    new Webpack.DefinePlugin({
      "process.env": {
        BROWSER: JSON.stringify(true)
      }
    })
    //new ExtractTextPlugin('build/style.css')
  ]
};

export default config;
//module.exports = config;