const fs = require('fs');
const uiIconsFolder = 'src/assets/icons/ui';
const duocolorIconsFolder = 'src/assets/icons/duocolor/40';

// UI icons and DuoColor icons are going to be loaded and icon names will be generate as
// a type, so we can get typehinting

function filterForSvgs(file) {
  return file.endsWith('.svg');
}

const uiIcons = fs.readdirSync(uiIconsFolder).filter(filterForSvgs);
const duocolorIcons = fs.readdirSync(duocolorIconsFolder).filter(filterForSvgs);

function fileNameToString(file) {
  return `'${file.replace('.svg', '')}'`;
}

function removeQuotes(string) {
  return string.replace(/['"]+/g, '');
}

const uiIconNames = uiIcons.map(fileNameToString);
const duocolorIconNames = duocolorIcons.map(fileNameToString);

const uiIconValidations = uiIconNames.map(removeQuotes);
const duocolorIconValidations = duocolorIconNames.map(removeQuotes);

console.log('-------- UI ICONS -------');
console.log(uiIconValidations.join(', \n')); // Output: UI Icons for DatoCMS
console.log('---------- DUOCOLOR ICONS --------');
console.log(duocolorIconValidations.join(', \n')); // Output: Duocolor Icons for DatoCMS

const content = `export const uiIconNamesArray=[${uiIconNames.join(', ')}] as const;
export type UiIconNames = (typeof uiIconNamesArray)[number];

export const duoColorIconNamesArray=[${duocolorIconNames.join(', ')}] as const;
export type DuocolorIconNames = (typeof duoColorIconNamesArray)[number];
`;
fs.writeFileSync('./src/types/icon-names.ts', content);
