var path = require('path');
var webpack = require('webpack');
var WriteFilePlugin = require('write-file-webpack-plugin');

module.exports = {
    context : path.resolve('src'),
    entry : {
        app : 'proxies.js'
    },
    resolve: {
        root: path.resolve(__dirname + '/src'),
        extensions: ['', '.js', '.json']
    },
    devServer: {
        outputPath: path.join(__dirname, './build')
    },
    output : {
        path: path.resolve(__dirname + '/build'),
        publicPath : '/build/',
        filename: 'js/[name].js',
        libraryTarget: 'umd'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    },
    plugins : [
        new WriteFilePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ],
    watch : true
};