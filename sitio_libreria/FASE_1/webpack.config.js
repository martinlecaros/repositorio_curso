const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); 
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); 

module.exports = {
    module: {
      rules: [
        {
          test: /\.(html)$/,
          use: [{
            loader: "html-loader",
            options: {minimize: false},
          }]
        }, // RULE 1
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        }, // RULE 2
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: [
            "file-loader"
          ]
        }, // RULE 3
        {
          test: /\.scss$/,
          use: [
          "style-loader",
          "css-loader",
          "sass-loader"
          ]
        }, // RULE 4
      ]
    },
    plugins: [
      new HtmlWebpackPlugin ({
        template: "./src/index.html",
        filename: "./index.html"
      })
      new MiniCssExtractPlugin ({
        filename: "[name].css",
        chunkFilename: "[id].css"
      })
    ]
  };