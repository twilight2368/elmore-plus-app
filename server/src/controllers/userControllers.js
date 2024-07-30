const userService = require('../services/userServices')

const getUser = async (req, res, next) => {
  const user = await userService.getUser()
  res.status(200).json(user)
}

module.exports = {
  getUser
}