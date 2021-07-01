const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: {
    "hello-world": "./src/index.js",
    "BMW-world": "./src/components/bmw.js",
  },
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "./dist"),
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.(png|jpg)$/,
        // 小於8k,為inline,大於8k 為resource
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 3 * 1024, // 3 kilobytes
          },
        },
      },
      {
        test: /\.txt$/,
        type: "asset/source",
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/env"],
            plugins: ["@babel/plugin-proposal-class-properties"],
          },
        },
      },
      {
        test: /\.hbs$/,
        use: ["handlebars-loader"],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [
        "**/*",
        path.join(process.cwd(), "build/**/"),
      ],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./index.html"),
      description: "Cool!",
      title: "Webpack 8",
      filename: "index.html",
      // meta: {
      //   description: 'Some description!'
      // }
    }),
  ],
};
