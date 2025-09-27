const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const isDev = process.env.NODE_ENV !== "production";

module.exports = {
	mode: isDev ? "development" : "production",
	entry: "./src/index.tsx",
	output: {
		path: path.resolve(__dirname, "build"),
		filename: isDev ? "[name].js" : "[name].[contenthash].js",
		publicPath: "/",
		assetModuleFilename: "assets/[hash][ext]",
		clean: true,
	},
	devServer: {
		static: {
			directory: path.join(__dirname, "public"),
		},
		proxy: [
			{
				context: ["/api"],
				target: "http://localhost:4000",
				changeOrigin: true,
			},
		],
		historyApiFallback: true,
		compress: true,
		port: 3000,
		hot: true,
		open: true,
	},
	resolve: {
		extensions: [".js", ".ts", ".jsx", ".tsx"],
		alias: {
			"@api": path.resolve(__dirname, "src/api"),
			"@assets": path.resolve(__dirname, "src/assets"),
			"@components": path.resolve(__dirname, "src/components"),
			"@pages": path.resolve(__dirname, "src/pages"),
			"@store": path.resolve(__dirname, "src/store"),
			"@styles": path.resolve(__dirname, "src/styles"),
			"@types": path.resolve(__dirname, "src/types"),
			"@utils": path.resolve(__dirname, "src/utils"),
			"@HOC": path.resolve(__dirname, "src/HOC"),
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
		new CopyPlugin({
			patterns: [{ from: "public/locales", to: "locales" }],
		}),
	].filter(Boolean),
	optimization: {
		splitChunks: {
			chunks: "all",
		},
		runtimeChunk: "single",
		minimize: true,
		minimizer: [
			new TerserPlugin({
				extractComments: false,
			}),
		],
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
				test: /\.module\.(scss|css)$/,
				use: [
					isDev ? "style-loader" : MiniCssExtractPlugin.loader,
					{
						loader: "css-loader",
						options: {
							modules: {
								localIdentName: isDev
									? "[path][name]__[local]--[hash:base64:5]"
									: "[hash:base64:8]",
							},
							sourceMap: isDev,
						},
					},
					{
						loader: "sass-loader",
						options: {
							sourceMap: isDev,
						},
					},
				],
			},
			{
				test: /\.(scss|css)$/,
				exclude: /\.module\.(scss|css)$/,
				use: [
					isDev ? "style-loader" : MiniCssExtractPlugin.loader,
					{
						loader: "css-loader",
						options: {
							sourceMap: isDev,
						},
					},
					{
						loader: "sass-loader",
						options: {
							sourceMap: isDev,
						},
					},
				],
			},
			{
				test: /\.svg$/i,
				issuer: /\.[jt]sx?$/,
				use: ["@svgr/webpack"],
			},
			{
				test: /\.(png|jpg|jpeg|gif)$/i,
				type: "asset/resource",
			},
		],
	},
};
