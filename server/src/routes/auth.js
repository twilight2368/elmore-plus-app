const express = require('express')
const asyncHandler = require('../middlewares/asyncHandler')
const authControllers = require('../auth/authControllers')
const { authToken } = require('../auth/authMiddlewares')
const router = express.Router()

router.post('/sign-up', asyncHandler(authControllers.signup))
router.post('/sign-in', asyncHandler(authControllers.signin))
router.post('/refresh-token', asyncHandler(authControllers.refreshToken))

router.get('/callback/oauth/google', asyncHandler(authControllers.googleOAuthCallback))
router.post('/facebook-login', asyncHandler(authControllers.facebookAuth))

router.use(authToken)
router.post('/logout', asyncHandler(authControllers.logout))


module.exports = router
