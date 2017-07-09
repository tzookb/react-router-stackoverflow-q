const path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  // This is the "main" file which should include all other modules
  entry: './index.js',
  // Where should the compiled file go?
  output: {
    // To the `dist` folder
    path: path.join(__dirname, "dist"),
    publicPath: '/',
    // With the filename `build.js` so it's dist/build.js
    filename: 'build.js'
  },

  module: {
    // Special compilation rules
    loaders: [
      {
        test: /.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },

  plugins: [new HtmlWebpackPlugin({
    template: "index.html"
  })]
}