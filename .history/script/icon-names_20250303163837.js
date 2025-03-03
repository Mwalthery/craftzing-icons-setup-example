const fs = require('fs');
const typesFolder = './src/types';
const uiIconsFolder = 'src/assets/icons/ui';
const duocolorIconsFolder = 'src/assets/icons/duocolor/40';
const filterForSvgs = require('./filterForSvgs.js');
const fileNameToString = require('./fileNameToString.js');

// UI icons and DuoColor icons are going to be loaded and icon names will be generate as
// a type, so we can get typehinting

const uiIcons = fs.readdirSync(uiIconsFolder).filter(filterForSvgs);
const duocolorIcons = fs.readdirSync(duocolorIconsFolder).filter(filterForSvgs);

const removeQuotes = (string) => {
  return string.replace(/['"]+/g, '');
};

const uiIconNames = uiIcons.map(fileNameToString);
const duocolorIconNames = duocolorIcons.map(fileNameToString);

const uiIconValidations = uiIconNames.map(removeQuotes);
const duocolorIconValidations = duocolorIconNames.map(removeQuotes);

console.log('-------- UI ICONS -------');
console.log(uiIconValidations.join(', \n')); // Output: UI Icons for DatoCMS
console.log('---------- DUOCOLOR ICONS --------');
console.log(duocolorIconValidations.join(', \n')); // Output: Duocolor Icons for DatoCMS

const content = `export const uiIconNamesArray=[${uiIconNames.join(
  ', '
)}] as const;
export type UiIconNames = (typeof uiIconNamesArray)[number];

export const duoColorIconNamesArray=[${duocolorIconNames.join(', ')}] as const;
export type DuocolorIconNames = (typeof duoColorIconNamesArray)[number];
`;

if (!fs.existsSync(typesFolder)) {
  fs.mkdirSync(typesFolder);
}

fs.writeFileSync(`${typesFolder}/icon-names.ts`, content);
