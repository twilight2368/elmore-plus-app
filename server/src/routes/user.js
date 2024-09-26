const express = require('express')
const asyncHandler = require('../middlewares/asyncHandler')
const router = express.Router()
const userController = require('../controllers/userControllers')
const { authToken } = require('../auth/authMiddlewares')

router.use(authToken)
router.get('/', asyncHandler(userController.getUserProfile))
router.get('/get-many', asyncHandler(userController.getUserProfiles))
router.put('/', asyncHandler(userController.updateUserProfile))
router.put('/change-password', asyncHandler(userController.updateUserPassword))
router.delete('/', asyncHandler(userController.deleteUserProfile))

module.exports = router
