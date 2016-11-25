var webpack = require("webpack");

module.exports = {
  /**
   * Entry point for the webpack
   * 1. For Application
   * 2. For Vendor
   */
  entry: {
    "vendor": "./app/vendor",
    "app": "./app/main"
  },
  output: {
    path: __dirname,
    filename: "./dist/[name].bundle.js"
  },
  /**
   * To tell Webpack to resolve module file requests by looking for matching files
   */
  resolve: {
    extensions: ['', '.ts', '.js']
  },
  devtool: 'source-map',
  /**
   * Module loaders for typescript and HTML
   */
  module: {
    loaders: [
      {
        test: /\.ts/,
        loaders: ['awesome-typescript-loader', 'angular2-template-loader']
      },
      {
        test: /\.html$/,
        loader: 'html'
      }
    ]
  },
  /**
   * CommonChunks to ensure Vendor has only Vendor code and does not include App code
   */
  plugins: [
    new webpack.optimize.CommonsChunkPlugin("vendor", "./dist/vendor.bundle.js")
  ]
}
