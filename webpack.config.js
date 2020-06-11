const path = require('path');

module.exports = {
    entry: './src/index.js',
    module: {
        rules: [
            {
              test: /\.(js|jsx)$/,
              exclude: /node_modules/,
              use: ['babel-loader']
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
              }
          ]
    },
    output: {
        filename: 'bundle.js',
        path: __dirname + '/public'
    }
};