/* eslint global-require: 0 */

if (process.env.NODE_ENV === 'production') {
  const prodConfig = require('./prod');
  module.exports = prodConfig;
} else {
  const devConfig = require('./dev');
  module.exports = devConfig;
}
