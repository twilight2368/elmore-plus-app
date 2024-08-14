const express = require('express')
const asyncHandler = require('../middlewares/asyncHandler')
const router = express.Router()

router.get('/', asyncHandler())