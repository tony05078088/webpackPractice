const path = require("path");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./dist"),
    publicPath: ''
  },
  mode: "development",
  devServer: {
    contentBase: path.resolve(__dirname, "./dist"),
    index: "index.html",
    port: 9000,
  },
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
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
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
