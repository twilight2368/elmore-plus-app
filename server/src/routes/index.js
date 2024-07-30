const express = require('express')
const router = express.Router()

router.use('/users', require('./user'))
router.use('/posts', require('./post'))
router.use('/friend-requests', require('./friendrequest'))
router.use('/chat-room', require('./chatroom'))
router.use('/chat-message', require('./chatmessage'))

module.exports = router