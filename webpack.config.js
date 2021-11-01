const path = require('path');

module.exports = {
  entry: './src/packages/Button/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};