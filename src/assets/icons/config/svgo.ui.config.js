const convertColorTo = require('../plugin/convertColorTo.js');
let defaultConfig = require('../../../../svgo.config.js');

defaultConfig.plugins.push({
  ...convertColorTo,
  params: { from: ['#000', '#000000', '#202120', '#323232'], to: 'currentColor' },
});
module.exports = defaultConfig;
