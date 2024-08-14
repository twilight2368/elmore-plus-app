const express = require('express')
const asyncHandler = require('../middlewares/asyncHandler')
const router = express.Router()
const userController = require('../controllers/userControllers')
const { authToken } = require('../auth/authMiddlewares')

router.use(authToken)
router.get('/', asyncHandler(userController.getUser))

module.exports = router