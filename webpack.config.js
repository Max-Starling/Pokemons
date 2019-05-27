const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] }
      },
      // {test: /\.ttf$/, loader: 'url?limit=10240&mimetype=application/x-font-ttf'},
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
                name: 'assets/fonts/[name].[ext]',
            }
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: 'assets/[name].[ext]',
            },
          },
        ],
      },
    ]
  },
  resolve: {
    modules: [path.resolve(__dirname, './src'), 'node_modules'],
    extensions: ["*", ".js", ".jsx", ".png"], // , '.ttf'
  },
  output: {
    pathinfo: true,
    filename: "bundle.js",
    path: path.resolve(__dirname, "src/"),
    publicPath: "/",
  },
  devServer: {
    contentBase: [
      path.join(__dirname, 'public'),
    ],
    port: 3001,
    publicPath: "http://localhost:3001/",
    hotOnly: true,
    historyApiFallback: true,
  },
  // optimization: {
	// 	minimize: false
	// },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};