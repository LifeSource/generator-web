const path = require("path")
const ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = {
  context: path.resolve("src"),
  entry: ["./app.ts"],
  output: {
    path: path.resolve("dist"),
    publicPath: "/dist",
    filename: "scripts/app.js"
  },
  plugins: [
    new ExtractTextPlugin("styles/styles.css")
  ],
  devServer: {
    contentBase: "dist"
  },
  devtool: "source-map",
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', 'tsx', '.js', 'jsx']
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract("style", "css!autoprefixer")
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract("style", "css!autoprefixer!sass")
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: 'ts-loader'
      }
    ]
  }
}
