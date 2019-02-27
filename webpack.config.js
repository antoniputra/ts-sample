const path = require("path");
const isProd = process.env.NODE_ENV === 'production';
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/app.ts',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: isProd ? '/dist/' : '/'
  },
  devtool: "inline-source-map",
  resolve: {
    extensions: ['.js', '.ts', '.json']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader'
      },
      {
        test: /\.ts$/,
        exclude: [path.resolve(__dirname, "src/tests")],
        enforce: 'post',
        use: {
          loader: 'istanbul-instrumenter-loader',
          options: { esModules: true }
        }
      },
      {
        test: /\.s?css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
          options: {
            attrs: [':data-src']
          }
        }
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      template: './src/index.html',
      filename: 'index.html',
      minify: {
        collapseWhitespace: false
      },
    }),
    new MiniCssExtractPlugin({
      filename: "app.css"
    }),
  ]
};

if (process.env.NODE_ENV !== 'watch') {
  module.exports.plugins.push(
    new CleanWebpackPlugin('dist', {})
  );
}
