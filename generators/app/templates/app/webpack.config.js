const path = require("path")
const BrowserSync = require("browser-sync-webpack-plugin")
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
    new ExtractTextPlugin("styles/styles.css"),
    new BrowserSync({
      host: "localhost",
      port: 3000,
      files: "**/*.*",
      server: { baseDir: ["dist"] }
    })
  ],
  devServer: {
    contentBase: "dist"
  },
  devtool: "source-map",
  resolve: {
    extensions: [".ts", "tsx", ".js", "jsx"]
  },
  module: {
   rules: [
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            "style-loader",
            "css-loader",
            "autoprefixer-loader",
            "sass-loader"
          ]
        })
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: "ts-loader"
      }
    ]
  }
}
