'use strict';

exports.type = 'visitor';
exports.name = 'convertToSymbol';
exports.active = true;
exports.description = 'Wraps the content of the SVG in a symbol tag';

/**
 * Wraps the content of the SVG in a symbol tag with the given id.
 *
 * @author Milan Bauwens
 *
 * @type {import('../lib/types').Plugin}
 */

exports.fn = (_root) => {
  return {
    element: {
      enter: (node, parentNode) => {
        const isRoot = node.name === 'svg' && parentNode.type === 'root';

        // Only wrap the content of the SVG tag if it is the root SVG tag
        if (!isRoot) return;

        // Create a new symbol tag
        const symbol = {
          type: 'element',
          name: 'symbol',
          attributes: {
            fill: 'none',
            id: 'icon',
            viewBox: node.attributes.viewBox,
          },
          children: node.children,
        };

        delete node.attributes.viewBox;
        delete node.attributes.fill;

        // append the symbol tag to the SVG tag
        node.children = [symbol];
      },
    },
  };
};
