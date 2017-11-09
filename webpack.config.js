const path = require("path");
const webpack = require("webpack");
const MinifyPlugin = require("babel-minify-webpack-plugin");

module.exports = (env = {}) => ({
  entry: [
    "babel-polyfill",
    "whatwg-fetch",
    path.resolve(__dirname, "./src/index.js")
  ],
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "public")
  },
  devServer: {
    contentBase: path.resolve(__dirname, "public"),
    port: 3000
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["react", "env"],
            plugins: ["transform-object-rest-spread"]
          }
        }
      }
    ]
  },
  plugins: env.production && [
    new MinifyPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    })
  ]
});
