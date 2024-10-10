const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");

module.exports = {
  // Other Webpack config...
  resolve: {
    alias: {
      cesium: path.resolve(__dirname, "node_modules/cesium/Source"),
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|gif|jpg|jpeg|xml|json)$/,
        use: ["url-loader"],
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: "node_modules/cesium/Build/Cesium/Workers", to: "Workers" },
        { from: "node_modules/cesium/Source/Assets", to: "Assets" },
        { from: "node_modules/cesium/Source/Widgets", to: "Widgets" },
      ],
    }),
  ],
};
