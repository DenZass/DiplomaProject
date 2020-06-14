const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); 
const CopyWebpackPlugin = require("copy-webpack-plugin");
module.exports = {
    entry: {
        main: './src/index.js',
        about: './src/about/about.js',
        analytics: './src/analytics/analytics.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[chunkhash].js'
    },
    devtool: 'sourse-map',
   
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ["source-map-loader"],
                enforce: "pre"
              },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'] 
            },
            {
                test: /\.(png|jpg|svg)$/,
                use:[{
                  loader: "file-loader",
                  options:{
                    name: "[name].[ext]",
                    publicPath: './image/',
                    outputPath: './image'

                  }
                }]
              },
          




            {
                test: /\.(eot|ttf|woff|woff2)$/,
                loader: 'file-loader?name=./vendor/[name].[ext]'
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({ 
            filename: 'style.[contenthash].css',
        }),
        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            template: './src/index.html',
            filename: 'index.html'
        }),
        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            template: './src/about.html',
            filename: 'about.html'
        }),
        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            template: './src/analytics.html',
            filename: 'analytics.html'
        }),
        new CopyWebpackPlugin([
            {from: './src/image', to: 'image'}
        ]),
        // new CopyWebpackPlugin([
        //     {from: './src/vendor/fonts-frontend', to: 'vendor/fonts-frontend'}
        // ]),
        new WebpackMd5Hash()
    ]
}