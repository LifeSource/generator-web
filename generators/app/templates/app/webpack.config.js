const path = require("path")
const webpack = require("webpack")
const BrowserSync = require("browser-sync-webpack-plugin")
const ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = {
  entry: {
    app: "./src/app.ts"
  },
  output: {
    publicPath: "dist",
    filename: "scripts/[name].min.js"
  },
  plugins: [
    require("autoprefixer"),
    new ExtractTextPlugin("styles/styles.css"),
    new webpack.optimize.UglifyJsPlugin({ minimize: true }),
    new BrowserSync({
      host: "localhost",
      port: 3000,
      files: "**/*.*",
      server: {
        baseDir: ["dist"]
      }
    })
  ],
  devServer: {
    contentBase: "dist"
  },
  devtool: "eval-source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  module: {
    rules: [{
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            "css-loader",
            "postcss-loader",
            "sass-loader"
          ],
          publicPath: "/dist/styles"
        })
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file-loader?name=assets/[name].[hash].[ext]'
      },
      {
        test: /\.ts$/,
        exclude: /(\/node_modules\/|test\.js|\.spec\.js$)/,
        use: "ts-loader"
      }
    ]
  }
}
