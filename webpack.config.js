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
    // resolve: {
    //     alias: {
         
    //       img: __dirname+"./src/images",

    //     },
    //         extensions:[".js"]
    //   },
    module: {
        rules: [{
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
                    // path: path.resolve(__dirname, 'src/image/'),
                    outputPath: './image'
                    // useRelativePath: true

                  }
                }]
              },
            // {
            //     test: /\.(png|jpe?g|gif)$/i,
            //     use: [{
            //         loader: 'file-loader',
            //     }, ],
            // },
            // {
            //     test: /\.(png|jpg)$/,
            //     loader: 'url-loader',
            //     options:{
            //         // exclude: __dirname + "/../src/vendors",
            //         // limit:4096,
            //         name: "[path][name].[ext]",
            //         fallback: "file-loader"
            //       }
            //   },




            // {
            //     test: /\.(png|jpg|gif|ico|svg)$/, 
            //          // 
            //     use: [
            //         'file-loader', 
            //         //  'url-loader',
            //         {
            //             loader: 'image-webpack-loader',
            //             options: {
            //                 // outputPath: 'image',
            //                 bypassOnDebug: true,  
            //                 disable: true, 
            //             },
            //         },
            //     ],
            // },






            // {
            //     test: /\.(png|jpg|gif|ico|svg)$/,
            //     use: [
            //             'file-loader?name=../images/[name].[ext]', 
            //             {
            //                 loader: 'image-webpack-loader',
            //                 options: {}
            //             },
            //     ]
            // },
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