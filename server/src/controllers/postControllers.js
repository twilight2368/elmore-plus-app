const postService = require('../services/postService')

const getAllPostsOfUser = async (req, res, next) => {
  const posts = await postService.getAllPostsOfUser(req.params.userId, req.query.limit, req.query.page)
  res.status(200).json({
    data: posts
  })
}

const getPostById = async (req, res, next) => {
  const post = await postService.getPostById(req.params.postId)
  res.status(200).json({
    data: post
  })
}

const createNewPost = async (req, res, next) => {
  const newPost = await postService.createNewPost(req.userId, req.body)
  res.status(201).json({
    data: newPost
  })
}

const createNewSharePost = async (req, res, next) => {
  const newSharePost = await postService.createNewSharePost(req.userId, req.params.postId)
  res.status(201).json({
    data: newSharePost
  })
}

const updatePostCotent = async (req, res, next) => {
  const updatedPost = await postService.updatePostCotent(req.params.postId, req.body)
  res.status(201).json({
    data: updatedPost
  })
}

const updatePostLike = async (req, res, next) => {
  const updatedPost = await postService.updatePostLike(req.params.postId, req.body)
  res.status(201).json({
    data: updatedPost
  })
}

const deletePost = async (req, res, next) => {
  const deleteResult = await postService.deletePost(req.params.postId)
  res.status(200).json({
    data: deleteResult
  })
}

module.exports = {
  getAllPostsOfUser,
  getPostById,
  createNewPost,
  createNewSharePost,
  updatePostCotent,
  updatePostLike,
  deletePost
}