const path = require("path");

module.exports = {
  entry: [
    "babel-polyfill",
    "whatwg-fetch",
    path.resolve(__dirname, "./src/index.js")
  ],
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "public")
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
  }
};
