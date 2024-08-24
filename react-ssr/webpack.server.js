const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
	entry: "./server/index.js",
	target: "node",
	externals: [nodeExternals()],
	output: {
		path: path.resolve("server-build"),
		filename: "index.js",
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env", "@babel/preset-react"],
					},
				},
			},
			{
				test: /\.svg$/,
				use: [
					{
						loader: "file-loader",
						options: {
							name: "[name].[hash].[ext]",
							outputPath: "images/",
						},
					},
				],
			},
			,
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
			},
		],
	},
    resolve: {
        extensions: [".js", ".jsx"],
    },
};
