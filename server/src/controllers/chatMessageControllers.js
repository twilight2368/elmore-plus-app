const chatMessageService = require('../services/chatMessageService')

const getChatMessage = async (req, res, next) => {
  const chatMessage = await chatMessageService.getChatMessage()
  res.status(200).json(chatMessage)
}

module.exports = {
  getChatMessage
}