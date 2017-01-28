const webpack = require("webpack");

module.exports = {
    entry: "./entry.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
			rules: [
				{
					test: /\.js$/,
					exclude: ["node_modules"],
					use: [{
						loader: 'babel-loader',
						options: {
							presets: [['es2015', {modules: false}]]
						}
					}]
				}
			]
    },
		plugins: [
			new webpack.LoaderOptionsPlugin({
				minimize: true
			}),
			new webpack.optimize.UglifyJsPlugin({
			})
		]
};
