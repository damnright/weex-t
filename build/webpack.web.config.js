
var path = require('path');
var fs = require('fs');

module.exports = {
    entry: {
        'app': path.resolve('app', 'app.js')
    },
    output: {
        path: 'dist/web',
        filename: '[name].js',
        //publicPath: 'http://xiazhou.me/example/xiazhou-weex/dist/',
        publicPath: '/dist/web/'
    },
    node: {
        global: true
    },
    module: {
        loaders: [
            {
                test: /\.vue(\?[^?]+)?$/,
                loaders: ['vue']
            },
            {
                test:/\.js(\?[^?]+)?$/,
                loader: 'babel'
            }
        ]
    }
};