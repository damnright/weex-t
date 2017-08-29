
module.exports ={
    entry: {
      'extend':'./extend/index.js'
    },
    output: {
      path: 'dist/extend',
      filename:"[name].bundle.js"
    },
    module: {
      loaders: [
          {
              test: /\.js(\?[^?]+)?$/,
              loader: 'babel'

          }, {
              test: /\.vue(\?[^?]+)?$/,
              loaders: ['vue']
          }
      ]
    }
};
