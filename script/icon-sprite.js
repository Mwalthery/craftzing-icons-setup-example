const fs = require('fs');
const uiIconsPublicFolder = './public/icons/ui';
const spriteFolder = './public/icons';

// Minified UI icons are going to be loaded and icon sprite will be generated as
// a svg of multiple <symbol>'s so it can be used inline with a <use> tag.
// Read more why we do this here: https://kurtextrem.de/posts/svg-in-js

function filterForSvgs(file) {
  return file.endsWith('.svg');
}

const uiIcons = fs.readdirSync(uiIconsPublicFolder).filter(filterForSvgs);

function fileNameToId(file) {
  return file.replace('.svg', '');
}

const uiIconsSymbolData = uiIcons
  .map((fileName) => {
    const file = fs.readFileSync(`${uiIconsPublicFolder}/${fileName}`, {
      encoding: 'utf8',
    });
    return file
      .replace(/<\?xml.*?\?>/, '')
      .replace(/ id=".*?"/, '')
      .replace(/ version=".*?"/, '')
      .replace(/ xmlns=".*?"/, '')
      .replace(/ xmlns:xlink=".*?"/, '')
      .replace('<svg', `<symbol id="${fileNameToId(fileName)}"`)
      .replace('</svg>', '</symbol>');
  })
  .join('\n');

const content = `<?xml version="1.0" encoding="UTF-8"?>\n<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="0" height="0">\n${uiIconsSymbolData}\n</svg>\n`;

if (!fs.existsSync(spriteFolder)) {
  fs.mkdirSync(spriteFolder);
}

fs.writeFileSync(`${spriteFolder}/sprite.svg`, content);