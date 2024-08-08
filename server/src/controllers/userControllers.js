const userDaos = require('../daos/userDaos')

const getUser = async (req, res, next) => {
  const foundUser = await userDaos.findOneUser({ _id: req.userId })
  res.status(200).json({
    message: "Successfully found user",
    data: foundUser
  })
}

module.exports = {
  getUser
}