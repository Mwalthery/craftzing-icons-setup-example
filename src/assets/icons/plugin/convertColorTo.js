'use strict';

const collections = require('svgo/plugins/_collections.js');

exports.type = 'visitor';
exports.name = 'convertColorTo';
exports.active = true;
exports.description = 'converts colors: to specific color';

/**
 * Convert different colors formats in element attributes to specific color.
 *
 * @author Thomas Verleye
 *
 * @type {import('../lib/types').Plugin<{
 *   from?: string | array[string],
 *   to?: string,
 * }>}
 */
exports.fn = (_root, params) => {
  const { from, to } = params;

  return {
    element: {
      enter: (node) => {
        for (const [name, value] of Object.entries(node.attributes)) {
          if (collections.colorsProps.has(name)) {
            if (from.includes(value)) {
              node.attributes[name] = to;
            }
          }
        }
      },
    },
  };
};
