const commentModel = require("../models/comment")

const deleteAllCommentsOfPost = async (postId) => {
  return await commentModel.deleteMany({ postId: postId })
    .then(data => data)
    .catch(err => {
      console.log(err)
      throw new DatabaseError("Something went wrong in updatePost")
    })
}

const commentDaos = {
  deleteAllCommentsOfPost
}

module.exports = commentDaos