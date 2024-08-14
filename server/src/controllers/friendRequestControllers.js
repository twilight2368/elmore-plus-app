const friendRequestService = require('../services/friendRequestService')

const getFrientRequest = async (req, res, next) => {
  const friendRequest = await friendRequestService.getFrientRequest()
  res.status(200).json(friendRequest)
}

module.exports = {
  getFrientRequest
}