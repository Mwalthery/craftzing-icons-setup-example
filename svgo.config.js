module.exports = {
  plugins: [
    // set of built-in plugins enabled by default
    {
      name: 'preset-default',
      params: {
        overrides: {
          removeViewBox: false,
          inlineStyles: {
            onlyMatchedOnce: false,
          },
        },
      },
    },
    // enable additional plugins
    'removeRasterImages',
    'removeDimensions',
    'removeScriptElement',
    'convertStyleToAttrs',
    'cleanupEnableBackground',
  ],
};
