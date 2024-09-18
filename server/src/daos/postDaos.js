const postModel = require("../models/post")

const getPosts = async (limit, page) => {
  return await postModel.find().skip((page - 1) * limit).limit(limit)
    .then(data => data)
    .catch(err => {
      console.log(err)
      throw new DatabaseError("Something went wrong in getAllPostsOfUser")
    })
}

const getAllPostsOfUser = async (userId, limit, page) => {
  return await postModel.find({ userId: userId }).skip((page - 1) * limit).limit(limit).sort({ createdAt: -1 })
    .then(data => data)
    .catch(err => {
      console.log(err)
      throw new DatabaseError("Something went wrong in getAllPostsOfUser")
    })
}

const getPostById = async (postId) => {
  return await postModel.findById(postId)
    .then(data => data)
    .catch(err => {
      console.log(err)
      throw new DatabaseError("Something went wrong in getPostById")
    })
}

const createNewPost = async (postDocument) => {
  return await postModel.create(postDocument)
    .then(data => data)
    .catch(err => {
      console.log(err)
      throw new DatabaseError("Something went wrong in createNewPost")
    })
}

// Only for content
const updatePost = async (filter, updateData) => {
  return await postModel.updateOne(filter, updateData, { new: true })
    .then(data => data)
    .catch(err => {
      console.log(err)
      throw new DatabaseError("Something went wrong in updatePost")
    })
}

const addUserLikeShareCommentPost = async (postId, pushData, increaseData) => {
  return await postModel.updateOne(
    { _id: postId },
    {
      $push: pushData,
      $inc: increaseData
    },
    {
      new: true
    }
  )
    .then(data => data)
    .catch(err => {
      console.log(err)
      throw new DatabaseError("Something went wrong in addUserLikeShareCommentPost")
    })
}

const removeUserLikeShareCommentPost = async (postId, pullData, decreaseData) => {
  return await postModel.updateOne(
    { _id: postId },
    {
      $pull: pullData,
      $inc: decreaseData
    },
    {
      new: true
    }
  )
    .then(data => data)
    .catch(err => {
      console.log(err)
      throw new DatabaseError("Something went wrong in removeUserLikeShareCommentPost")
    })
}


const deletePost = async (postId) => {
  return await postModel.deleteOne({ _id: postId })
    .then(data => data)
    .catch(err => {
      console.log(err)
      throw new DatabaseError("Something went wrong in deletePost")
    })
}

const postDaos = {
  getPosts,
  getAllPostsOfUser,
  getPostById,
  createNewPost,
  updatePost,
  addUserLikeShareCommentPost,
  removeUserLikeShareCommentPost,
  deletePost,
}

module.exports = postDaos
