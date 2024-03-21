const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
	entry: './src/client.index.js',
	outpute: {
		filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
	},
	module: {
		rules: [
           {
               test:/\.scss$/,
               use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
           },
        ],
	},
	
	plugins: [
	  new HtmlWebpackPlugin({
		  template: '.src/client/views/index.html',
		  filename: './index.html',
	  }),
	  new MiniCssExtractPlugin({ filename: '[name].css'}),
	  new GenerateSW(),
	],
};