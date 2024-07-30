const chatRoomService = require('../services/chatRoomService')

const getChatRoom = async (req, res, next) => {
  const chatRoom = await chatRoomService.getChatRoom()
  res.status(200).json(chatRoom)
}

module.exports = {
  getChatRoom
}