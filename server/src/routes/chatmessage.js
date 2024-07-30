const express = require('express')
const asyncHandler = require('../middlewares/asyncHandler')
const chatMessageControllers = require('../controllers/chatMessageControllers')
const router = express.Router()

router.get('/', asyncHandler(chatMessageControllers.getChatMessage))

module.exports = router