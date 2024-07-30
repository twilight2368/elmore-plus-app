const express = require('express')
const asyncHandler = require('../middlewares/asyncHandler')
const chatRoomControllers = require('../controllers/chatRoomControllers')
const router = express.Router()

router.get('/', asyncHandler(chatRoomControllers.getChatRoom))

module.exports = router