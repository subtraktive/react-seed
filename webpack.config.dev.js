var webpack = require("webpack");

module.exports = {
	devtool: 'inline-source-map',
	entry: [
		'webpack-dev-server/client?http://localhost:8080',
		'webpack/hot/only-dev-server',
		'./lib/banners/entry',
	],
	output: {
	    path: __dirname + '/public/js/',
	    filename: 'build.js',
	    publicPath: 'http://localhost:8080/js/',
	},
	plugins: [
	    new webpack.HotModuleReplacementPlugin(),
	    new webpack.NoErrorsPlugin(),
	],
	resolve: {
	    extensions: ['', '.js']
	},
	module: {
	    loaders: [
	      { test: /\.js$/, loaders: ['react-hot', 'babel-loader?experimental'], exclude: /node_modules/ }
	    ]
	}
}