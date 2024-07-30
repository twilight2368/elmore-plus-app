const express = require('express')
const asyncHandler = require('../middlewares/asyncHandler')
const friendRequestControllers = require('../controllers/friendRequestControllers')
const router = express.Router()

router.get('/', asyncHandler(friendRequestControllers.getFrientRequest))

module.exports = router