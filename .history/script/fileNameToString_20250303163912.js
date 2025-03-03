module.exports = fileNameToString = (file) => {
  return `'${file.replace('.svg', '')}'`;
};
