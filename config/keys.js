const devConfig = require('./dev');
const prodConfig = require('./prod');

if (process.env.NODE_ENV === 'production') {
  module.exports = prodConfig;
} else {
  module.exports = devConfig;
}
