const path = require('path');

console.log('estoy por configurar web pack');

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    devServer: {
        publicPath: '/dst/',
        port: 80,
        historyApiFallback: true
    },
    module: {
        rules: [
          {
             test: /\.(js)$/,
             exclude: /node_modules/,
             use: ['babel-loader']
          },
          {
            test:/\.css$/,
            use:['style-loader','css-loader']
          }
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dst'),
        filename: 'bundle.js'
    }
}