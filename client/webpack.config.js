const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

const isDev = process.env.NODE_ENV !== "production";

module.exports = {
	mode: isDev ? "development" : "production",
	entry: "./src/index.tsx",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: isDev ? "[name].js" : "[name].[contenthash].js",
		publicPath: "/",
		assetModuleFilename: "assets/[hash][ext]",
		clean: true,
	},
	devServer: {
		static: {
			directory: path.join(__dirname, "public"),
		},
		historyApiFallback: true,
		compress: true,
		port: 3000,
		hot: true,
		open: true,
	},
	resolve: {
		extensions: [".js", ".ts", ".jsx", ".tsx"],
		alias: {
			"@components": path.resolve(__dirname, "src/components"),
			"@store": path.resolve(__dirname, "src/store"),
			"@api": path.resolve(__dirname, "src/api"),
			"@styles": path.resolve(__dirname, "src/styles"),
		},
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./public/index.html",
			favicon: "./public/favicon.ico",
		}),
		!isDev &&
			new MiniCssExtractPlugin({
				filename: "[name].[contenthash].css",
			}),
		isDev && new ReactRefreshWebpackPlugin(),
	].filter(Boolean),
	optimization: {
		splitChunks: {
			chunks: "all",
		},
		runtimeChunk: "single",
	},
	module: {
		rules: [
			{
				test: /\.(js|ts|jsx|tsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: [
							"@babel/preset-env",
							["@babel/preset-react", { runtime: "automatic" }],
							"@babel/preset-typescript",
						],
						plugins: [isDev && require.resolve("react-refresh/babel")].filter(Boolean),
					},
				},
			},
			{
				test: /\.(css|scss)$/,
				use: [
					isDev ? "style-loader" : MiniCssExtractPlugin.loader,
					{
						loader: "css-loader",
						options: {
							modules: {
								auto: true,
								localIdentName: isDev ? "[path][name]__[local]" : "[hash:base64]",
							},
							sourceMap: isDev,
						},
					},
					"sass-loader",
				],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: "asset/resource",
			},
		],
	},
};
