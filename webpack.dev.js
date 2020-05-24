const path = require("path")
const merge = require("webpack-merge")
const common = require("./webpack.common.js")

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    port: 3000,
    contentBase: path.join(__dirname, "app"),
    hot: true,
    historyApiFallback: true
  }
})
