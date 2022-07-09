const webpack = require('webpack');
const package = require('./package.json');

module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      APP_VERSION: JSON.stringify(package.version),
    }),
  ].filter(Boolean),
};
