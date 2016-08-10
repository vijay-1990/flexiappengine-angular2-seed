var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: {
    'polyfills': './angular/app/polyfills.ts',
    'vendor': './angular/app/vendor.ts',
    'app': './angular/app/main.ts'
  },
  output: {
    path: './src/main/webapp/',
    filename: "[name].js"
  },
  devtool: 'source-map',
  devServer: {
    port: 9090,
    inline: true,
    host: 'localhost',
    historyApiFallback: true
  },
  module: {
    loaders: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: "ts"
      },
      {
        test: /\.html$/,
        loader: "html"
      },
       {
        test: /\.scss$/,
        loaders: ["css", "sass"]
      },
      {
        test: /\.css$/,
        loaders: ["style", "css"]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: ["file"]
      },
      {
        test: /\.(woff2?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url-loader"
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: [ 'app', 'vendor', 'polyfills']
    }),

    new HtmlWebpackPlugin({
      template: 'angular/index.html'
    }),

    new webpack.ProvidePlugin({
        jQuery: 'jquery',
        $: 'jquery',
        jquery: 'jquery'
    })
  ],
  resolve: {
    extensions: ["", ".js", ".ts"]
  }
}