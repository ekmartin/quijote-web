/* eslint no-var: 0 */
var path = require('path');
var nib = require('nib');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '..', 'public'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.styl']
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, loaders: ['react-hot', 'babel?optional[]=runtime&stage=0'], include: path.join(__dirname, '..', 'src') },
      { test: /\.styl$/, loader: 'style-loader!css-loader!stylus-loader' }
    ]
  },
  stylus: {
    use: [nib()]
  }
};
