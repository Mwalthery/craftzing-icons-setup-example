const convertColorTo = require('../plugin/convertColorTo.js');
const convertToSymbol = require('../plugin/convertToSymbol.js');
let defaultConfig = require('../../../../svgo.config.js');

defaultConfig.plugins.push({
  ...convertColorTo,
  params: { from: ['#000', '#000000', '#202120', '#323232', '#FF4612'], to: 'currentColor' },
});

defaultConfig.plugins.push(convertToSymbol);
module.exports = defaultConfig;
