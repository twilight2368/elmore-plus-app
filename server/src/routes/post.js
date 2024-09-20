const express = require('express')
const asyncHandler = require('../middlewares/asyncHandler')
const postControllers = require('../controllers/postControllers')
const { authToken } = require('../auth/authMiddlewares')
const router = express.Router()

router.use(authToken)
router.get('/user-posts/:userId', asyncHandler(postControllers.getAllPostsOfUser))
router.get('/:postId', asyncHandler(postControllers.getPostById))
router.post('/', asyncHandler(postControllers.createNewPost))
router.post('/share/:postId', asyncHandler(postControllers.createNewSharePost))
router.put('/:postId/content', asyncHandler(postControllers.updatePostCotent))
router.put('/:postId/like', asyncHandler(postControllers.updatePostLike))
router.delete('/:postId', asyncHandler(postControllers.deletePost))

module.exports = router
