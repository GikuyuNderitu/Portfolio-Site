const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')


module.exports = {
	entry: path.resolve(__dirname, 'src', 'main.js'),
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, 'dist'),
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: [
					path.resolve(__dirname, 'node_modules'),
					path.resolve(__dirname, 'bower_components'),
				],
				loader: "babel-loader"
			},
			{
				test: /\.sass$/,
				include: [
					path.resolve(__dirname, 'src', 'styles')
				],
				use: ExtractTextPlugin.extract('css-loader!sass-loader?indentedSyntax')
			}
		]
	},
	plugins: [
		new ExtractTextPlugin('style.css')
	]

}