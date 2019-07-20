const path = require('path');
const DIST_DIR = path.join(__dirname, '/public');

module.exports = {
  entry: `./src/index.js`,
  output: {
    filename: 'bundle.js',
    path: `${DIST_DIR}`,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css'],
  },
};