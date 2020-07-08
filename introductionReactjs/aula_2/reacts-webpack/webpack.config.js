const path = require("path");
const HtmlwebpackPlugin = require("html-webpack-plugin");

module.exports = {
  //mode:"production",
  sourcemap: true,
  devtool:'source-map',
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_module/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  plugins: [
    new HtmlwebpackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
    }),
  ],
};
