const express = require('express')
const asyncHandler = require('../middlewares/asyncHandler')
const { authToken } = require('../auth/authMiddlewares')
const commentControllers = require('../controllers/commentControllers')

const router = express.Router()

router.use(authToken)
router.get('/:postId', asyncHandler(commentControllers.getAllComments))
router.post('/:commentId', asyncHandler(commentControllers.getReplyComments))
router.put('/content', asyncHandler(commentControllers.updateCommentContent))
router.put('/like', asyncHandler(commentControllers.updateCommentLike))
router.delete('/', asyncHandler(commentControllers.deleteComment))

module.exports = router