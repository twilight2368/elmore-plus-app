const commentModel = require("../models/comment")
const { DatabaseError } = require("../errors/customError")

const getComment = async (commentId) => {
  return await commentModel.findById(commentId)
    .then(data => data)
    .catch(err => {
      console.log(err)
      throw new DatabaseError("Something went wrong in getComment")
    })
}

const getAllCommentsOfPost = async (postId, limit = 10, page = 1) => {
  return await commentModel.find({ postId: postId }).limit(limit).skip((page - 1) * limit).sort({ createdAt: -1 })
    .then(data => data)
    .catch(err => {
      console.log(err)
      throw new DatabaseError("Something went wrong in getAllCommentsOfPost")
    })
}

const getReplyComments = async (postId, commentIds) => {
  return await commentModel.find({
    postId: postId,
    _id: {
      $in: commentIds
    }
  })
    .then(data => data)
    .catch(err => {
      console.log(err)
      throw new DatabaseError("Something went wrong in getReplyComments")
    })
}

const createNewComments = async (newCommentDocument) => {
  return await commentModel.create(newCommentDocument)
    .then(data => data)
    .catch(err => {
      console.log(err)
      throw new DatabaseError("Something went wrong in createNewComments")
    })
}

const updateComment = async (commentId, updateData) => {
  return await commentModel.updateOne({ _id: commentId }, updateData, { new: true })
    .then(data => data)
    .catch(err => {
      console.log(err)
      throw new DatabaseError("Something went wrong in updateComment")
    })
}

const updateCommentLikeAndReplyComments = async (commentId, updateData) => {
  return await commentModel.updateOne(
    { _id: commentId },
    updateData
  )
    .then(data => data)
    .catch(err => {
      console.log(err)
      throw new DatabaseError("Something went wrong in updateCommentLikeAndReplyComments")
    })
}

const deleteComment = async (commentId) => {
  return await commentModel.deleteOne({ _id: commentId })
    .then(data => data)
    .catch(err => {
      console.log(err)
      throw new DatabaseError("Something went wrong in deleteComment")
    })
}

const deleteAllCommentsOfPost = async (postId) => {
  return await commentModel.deleteMany({ postId: postId })
    .then(data => data)
    .catch(err => {
      console.log(err)
      throw new DatabaseError("Something went wrong in deleteAllCommentsOfPost")
    })
}

const commentDaos = {
  getComment,
  getAllCommentsOfPost,
  getReplyComments,
  createNewComments,
  updateComment,
  updateCommentLikeAndReplyComments,
  deleteComment,
  deleteAllCommentsOfPost,

}

module.exports = commentDaos