const postDaos = require('../daos/postDaos')
const commentDaos = require("../daos/commentDaos")
const { NotFoundError, InternalServerError } = require("../errors/customError")

// get all comments of a post
// get reply comments of a comment
// create a new comment for a post or a new reply comment for a comment
// update a comment content
// update a comment like
// delete a comment

const checkPostExist = async (postId) => {
  const foundPost = await postDaos.getPostById(postId)
  if (!foundPost) throw new NotFoundError(`No post with id: ${postId}`)
  return foundPost
}

const checkCommentExist = async (commentId) => {
  const foundComment = await commentDaos.getComment(commentId)
  if (!foundComment) throw new NotFoundError(`No post with id: ${postId}`)
  return foundComment
}

const getAllComments = async ({ postId, limit=10, page=1 }) => {
  await checkPostExist(postId)

  return await commentDaos.getAllCommentsOfPost(postId, limit, page)
}

const getReplyComments = async ({ postId, commentId, commentIds }) => {
  await checkPostExist(postId)

  await checkCommentExist(commentId)

  return await commentDaos.getReplyComments(postId, commentIds)
}

const createNewComment = async ({ commentId, userId, postId, content, imageLink, videoLink }) => {
  await checkPostExist(postId)

  const newCommentDocument = {
    userId,
    postId,
    content,
    imageLink,
    videoLink,
  }

  // reply comment
  if (commentId) {
    await checkCommentExist(commentId)

    const newComment = await commentDaos.createNewComments(newCommentDocument)
    const updateParentComment = await commentDaos.updateCommentLikeAndReplyComments(commentId, {
      $push: { replyComments: newComment._id }
    })

    if (updateParentComment.modifiedCount !== 1) {
      throw new InternalServerError("Something went wrong when creating new comment")
    }
    return newComment
  } else {
    return await commentDaos.createNewComments(newCommentDocument)
  }
}

const updateCommentContent = async ({ commentId, content }) => {
  await checkCommentExist(commentId)

  const updatedComment = await commentDaos.updateComment(commentId, { content: content })
  if (updatedComment.modifiedCount !== 1) {
    throw new InternalServerError("Something went wrong when updating comment")
  }
  return updatedComment
}

const updateCommentLike = async ({ commentId, userLikeId, isLike }) => {
  await checkCommentExist(commentId)

  if (isLike) {
    const updateData = {
      $push: { likes: userLikeId },
      $inc: { likeCount: 1 }
    }
    const updatedComment = await commentDaos.updateCommentLikeAndReplyComments(commentId, updateData)
    if (updatedComment.modifiedCount !== 1) {
      throw new InternalServerError("Something went wrong when updating comment like")
    }
    return updatedComment
  } else {
    const updateData = {
      $pull: { likes: userLikeId },
      $inc: { likeCount: -1 }
    }
    const updatedComment = await commentDaos.updateCommentLikeAndReplyComments(commentId, updateData)
    if (updatedComment.modifiedCount !== 1) {
      throw new InternalServerError("Something went wrong when updating comment like")
    }
    return updatedComment
  }
}

const deleteComment = async ({ commentId, parentCommentId }) => {
  await checkCommentExist(commentId)

  if (parentCommentId) {
    await checkCommentExist(parentCommentId)

    const deleteReplyCommentResult = await commentDaos.deleteComment(commentId)
    if (deleteReplyCommentResult.modifiedCount !== 1) {
      throw new InternalServerError("Something went wrong when deleting comment")
    }
    
    const updateReplyCommentOfParentComment = await commentDaos.updateCommentLikeAndReplyComments(commentId, {
      $pull: { replyComments: commentId }
    })

    if (updateReplyCommentOfParentComment.modifiedCount !== 1) {
      throw new InternalServerError("Something went wrong when updating reply comment of parent comment")
    }

    return true
  } else {
    const deleteCommentResult = await commentDaos.deleteComment(commentId)
    if (deleteCommentResult.modifiedCount !== 1) {
      throw new InternalServerError("Something went wrong when deleting comment")
    }
    return true
  }
}

const commentService = {
  getAllComments,
  getReplyComments,
  createNewComment,
  updateCommentContent,
  updateCommentLike,
  deleteComment,
}

module.exports = commentService