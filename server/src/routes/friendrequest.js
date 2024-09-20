const express = require('express')
const asyncHandler = require('../middlewares/asyncHandler')
const friendRequestControllers = require('../controllers/friendRequestControllers')
const router = express.Router()

router.get('/', asyncHandler(friendRequestControllers.getNewFriendRequest))
router.post('/new-friend-request', asyncHandler(friendRequestControllers.createNewFriendRequest))
router.post('/accept-friend-request', asyncHandler(friendRequestControllers.createNewFriendRequest))
router.post('/reject-friend-request', asyncHandler(friendRequestControllers.createNewFriendRequest))
router.post('/cancel-friend-request', asyncHandler(friendRequestControllers.createNewFriendRequest))

module.exports = router