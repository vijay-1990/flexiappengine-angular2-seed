var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./config/helpers');

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
        loaders: ['ts', 'angular2-template-loader']
      },
      {
        test: /\.html$/,
        loader: 'html'
      },
      {
        test: /\.scss$/,
        loaders: ['css', 'sass']
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file?name=assets/[name].[hash].[ext]'
      },     
      { 
        test: /\.css$/, 
        exclude: helpers.root('angular', 'app'),
        loader: ExtractTextPlugin.extract('style', 'css-loader!postcss-loader')
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

    new ExtractTextPlugin("styles.css"),

    new webpack.ProvidePlugin({
        jQuery: 'jquery',
        $: 'jquery',
        jquery: 'jquery'
    })
  ],
  resolve: {
    extensions: ["", ".js", ".ts", ".html", ".css", ".png", ".woff",".svg"]
  }
}