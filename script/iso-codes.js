const fs = require('fs');
const flagsIconsFolder = 'src/assets/flags';

// Flags are going to be loaded and iso codes will be generate as
// a type, so we can get typehinting

function filterForSvgs(file) {
  return file.endsWith('.svg');
}

const flags = fs.readdirSync(flagsIconsFolder).filter(filterForSvgs);

function fileNameToString(file) {
  return `'${file.replace('.svg', '')}'`;
}

const flagNames = flags.map(fileNameToString);

const content = `const countryIsoCodes=[${flagNames.join(', ')}] as const;
export type CountryIsoCode = (typeof countryIsoCodes)[number];
`;
fs.writeFileSync('./src/types/iso-codes.ts', content);
