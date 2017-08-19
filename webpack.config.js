const path = require('path');

module.exports = {
  module : {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  entry: './js-build/index.js',
  output: {
    filename: 'build/bundle.js',
    path: path.resolve(__dirname, 'js')
  }
};