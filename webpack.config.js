module.exports = {
	entry: './src/app.js',
	output: {
		path: __dirname + '/dist',
		filename:'app.bundle.js'
	},
	module: {
		rules: [{
			exclude: '/node_modules/',
			loader: 'babel-loader'
		}]
	}
}