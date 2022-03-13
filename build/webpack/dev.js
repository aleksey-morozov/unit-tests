const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  entry: path.resolve(__dirname, '../../src', 'index.ts'),
  output: {
    path: path.resolve(__dirname, '../../dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              configFile: path.resolve(__dirname, '../babel/.babelrc.dev.json'),
            },
          },
        ],
      },
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              configFile: path.resolve(__dirname, '../babel/.babelrc.dev.json'),
            },
          },
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
              configFile: path.resolve(__dirname, '../../tsconfig.json'),
            },
          },
        ],
      },
    ],
  },
};
