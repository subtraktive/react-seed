module.exports = {
	entry: './app/main.js',
	output: {
		path: __dirname + '/build',
		filename: "bundle.js"
	},
	module: {
		loaders: [
			{test: /\.css$/, loader: "style!css"},
			{test: /\.js$/, loader: 'babel-loader'}
		]
	}
}