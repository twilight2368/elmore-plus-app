const getUnselectData = (unselectData = []) => {
  return Object.fromEntries(unselectData.map(data => [data, 0]))
}

module.exports = getUnselectData