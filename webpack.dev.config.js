const path = require('path');
const webpack = require('webpack');

module.exports = {
    devtool: 'eval',

    entry: [
        'webpack-hot-middleware/client',
        './src/index'
    ],

    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js',
        publicPath: '/public/'
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],

    module: {
        loaders: [
        {   
            test: /\.js?$/,
            loader: 'babel',
            include: path.join(__dirname, 'src'),
            exclude: path.join(__dirname, 'node_modules') 
        },
        {   
            test: /\.scss?$/,
            loader: 'style!css!sass',
            include: path.join(__dirname, 'src', 'styles') 
        },
        {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        },
        { 
            test: /\.png$/, 
            loader: "url-loader?limit=100000" 
        },
        {
            test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, 
            loader: 'url?limit=10000&mimetype=application/font-woff'
        },
        {
            test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, 
            loader: 'url?limit=10000&mimetype=application/octet-stream'
        },
        {
            test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, 
            loader: 'file'
        },
        {
            test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, 
            loader: 'url?limit=10000&mimetype=image/svg+xml'
        },
        {
            test: /\.jpg$/,
            loader: 'file-loader'
        }
        ]
    }
}