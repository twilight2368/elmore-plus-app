const express = require('express')
const asyncHandler = require('../middlewares/asyncHandler')
const postControllers = require('../controllers/postControllers')
const router = express.Router()

router.get('/', asyncHandler(postControllers.getPost))

module.exports = router