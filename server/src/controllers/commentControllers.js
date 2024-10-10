const commentService = require("../services/commentService")

const getAllComments = async (req, res, next) => {
  const { postId } = req.params
  const { limit=10, page=1 } = req.query
  const comments = await commentService.getAllComments({ postId, limit, page })
  res.status(200).json({
    message: "Successfully get comments of post",
    data: comments
  })
}

const getReplyComments = async (req, res, next) => {
  const commentId = req.params
  const { postId, commentIds } = req.body
  const replyComments = await commentService.getReplyComments({ postId, commentId, commentIds })
  res.status(200).json({
    message: "Successfully get reply comments",
    data: replyComments
  })
}

const createNewComment = async (req, res, next) => {
  const newComment = await commentService.createNewComment(req.body)
  res.status(200).json({
    message: "Successfully create new comment",
    data: newComment
  })
}

const updateCommentContent = async (req, res, next) => {
  const updatedComment = await commentService.updateCommentContent(req.body)
  res.status(200).json({
    message: "Successfully update comment content",
    data: updatedComment
  })
}

const updateCommentLike = async (req, res, next) => {
  const updatedComment = await commentService.updateCommentLike(req.body)
  res.status(200).json({
    message: "Successfully update comment like",
    data: updatedComment
  })
}

const deleteComment = async (req, res, next) => {
  const deleteResult = await commentService.deleteComment(req.body)
  res.status(200).json({
    message: "Successfully delete comment",
    data: deleteResult
  })
}

const commentControllers = {
  getAllComments,
  getReplyComments,
  createNewComment,
  updateCommentContent,
  updateCommentLike,
  deleteComment
}

module.exports = commentControllers