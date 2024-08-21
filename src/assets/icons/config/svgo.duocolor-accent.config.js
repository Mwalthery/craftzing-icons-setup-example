const convertColorTo = require('../plugin/convertColorTo.js');
const convertToSymbol = require('../plugin/convertToSymbol.js');
let defaultConfig = require('../../../../svgo.config.js');

defaultConfig.plugins.push({
  ...convertColorTo,
  params: { from: ['#FF4612'], to: 'currentColor' },
});

defaultConfig.plugins.push(convertToSymbol);
module.exports = defaultConfig;
