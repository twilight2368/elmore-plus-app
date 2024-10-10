const express = require('express')
const router = express.Router()

router.use('/auth', require('./auth'))
router.use('/users', require('./user'))
router.use('/posts', require('./post'))
router.use('/comments', require('./comment'))
router.use('/friend-requests', require('./friendrequest'))
router.use('/chat-room', require('./chatroom'))
router.use('/chat-message', require('./chatmessage'))
router.use('/upload', require('./upload'))

module.exports = router