function isValidDatasetName(name) {
  if (!name) return false;
  return name.length > 3 && !name.includes(' ');
}
module.exports = isValidDatasetName;
