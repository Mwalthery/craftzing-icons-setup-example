export const fileNameToString = (file) => {};

module.exports = fileNameToString = (file) => {
  return `'${file.replace('.svg', '')}'`;
};
