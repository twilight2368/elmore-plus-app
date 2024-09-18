const getSelectData = (selectData = []) => {
  return Object.fromEntries(selectData.map(data => [data, 1]))
}

module.exports = getSelectData