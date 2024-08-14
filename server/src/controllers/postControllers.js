const postService = require('../services/postService')

const getPost = async (req, res, next) => {
  const post = await postService.getPost()
  res.status(200).json(post)
}

module.exports = {
  getPost
}