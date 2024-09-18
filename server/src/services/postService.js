const commentDaos = require("../daos/commentDaos")
const postDaos = require("../daos/postDaos")
const userDaos = require("../daos/userDaos")
const { NotFoundError, InternalServerError, MissingField } = require("../errors/customError")
const uploadFileServices = require("./uploadFileService")

const getPosts = async (limit, page) => {
  const posts = await postDaos.getPosts(limit, page)

  posts = posts.map(async (post) => {
    if (post.sharePost.isShare) {
      const originalPost = await postDaos.getPostById(post.sharePost.originalPostId)
      post.sharePost['originalPostContent'] = originalPost
      return post
    }
  })

  return posts
}

const getAllPostsOfUser = async (userId, limit, page) => {
  // 1. Check if user does exist ?
  const foundUser = await userDaos.findOneUser({ _id: userId })
  if (!foundUser) throw new NotFoundError("User not found!")

  // 2. Get all post of the user
  const userPosts = await postDaos.getAllPostsOfUser(userId, limit, page)

  // 3. Loop through all post, find that one post that the user shared. And then
  // use originalPostId field to get the original post. And then add new field originalPostContent
  // to sharePost field
  userPosts = userPosts.map(async (userPost) => {
    if (userPost.sharePost.isShare) {
      const originalPost = await postDaos.getPostById(userPost.sharePost.originalPostId)
      userPost.sharePost['originalPostContent'] = originalPost
      return userPost
    }
  })

  // 4. Return to the client
  return userPosts
}

const getPostById = async (postId) => {
  // 1. Check if post does exist ?
  const foundPost = await postDaos.getPostById(postId)
  if (!foundPost) {
    throw new NotFoundError("Post not found!")
  }
  // 2. Check if that post is share post or not
  // 3. If foundPost is share post, use originalPostId to get the original post. 
  // And then add new field originalPostContent to sharePost 
  if (foundPost.sharePost.isShare) {
    const originalPost = await postDaos.getPostById(foundPost.sharePost.originalPostId)
    foundPost.sharePost['originalPostContent'] = originalPost
  }

  // 4. Return found post
  return foundPost
}

/**
 * Data Structure of postData
 * {
 *  content: String,
 *  imageLink:
 *  [{
 *    main: String (The link that storage return)
 *    backup: String (The file name that multer generate)
 *  }],
 *  videoLink:
 *  [{
 *    main: String (The link that storage return)
 *    backup: String (the file name that multer generate)
 *  }]
 * }
 */
const createNewPost = async(userId, postData) => {
  // 1. Get user infomation: username, avatarLink
  const foundUser = await userDaos.findOneUser({ _id: userId })
  if (!foundUser) {
    throw new NotFoundError("User not found!")
  }
  // 2. Construct user object
  const user = {
    userId: foundUser._id,
    username: foundUser.username,
    avatarLink: foundUser.avatarLink
  }

  // 3. Construct postDoc
  const postDoc = {
    user,
    ...postData
  }
  // 4. Create new post
  return await postDaos.createNewPost(postDoc)
}

const createNewSharePost = async(userId, postId) => {
  // 1. Get user infomation: username, avatarLink
  const foundUser = await userDaos.findOneUser({ _id: userId })
  if (!foundUser) {
    throw new NotFoundError("User not found!")
  }

  // 2. Check if original post exist
  const foundPost = await postDaos.getPostById(postId)
  if (!foundPost) {
    throw new NotFoundError("Post not found!")
  }

  // 3. Construct user object
  const user = {
    userId: foundUser._id,
    username: foundUser.username,
    avatarLink: foundUser.avatarLink
  }

  // 4. Construct postDoc
  const postDoc = {
    user: user,
    sharePost: {
      isShare: true,
      originalPostId: postId
    }
  }

  // 5. Update shares and shareCount field of original post
  await postDaos.addUserLikeShareCommentPost(foundPost._id, { shares: foundUser._id }, { shareCount: 1 })
  
  // 6. Create new post
  await postDaos.createNewPost(postDoc)
}

// Data structure of updateData
/**
 * {
 *  content: String,
 *  imageLink:
 *  [{
 *    main: String (The link that storage return)
 *    backup: String (The file name that multer generate)
 *  }],
 *  videoLink:
 *  [{
 *    main: String (The link that storage return)
 *    backup: String (the file name that multer generate)
 *  }]
 * }
 */
//
const updatePostCotent = async (postId, updateData) => {
  // 1. Check post does exist ?
  const foundPost = await postDaos.getPostById(postId)
  if (!foundPost) {
    throw new NotFoundError("Post not found")
  }

  // 2. Destructure updateData object argument into: content, imageLink, videoLink
  const { content, imageLink, videoLink } = updateData

  // 3. Check if imageLink is not undefined.
  // If imageLink is undefined, return error missing field
  // If imageLink is not undefined: delete old images in filesystem
  if (!imageLink) {
    throw new MissingField("Missing imageLink field")
  } else if (imageLink.length !== 0) {
    const filePaths = []
    for (let i = 0; i < foundPost.imageLink.length; i++) {
      filePaths.push(foundPost.imageLink[i].backup)
    }
    await uploadFileServices.deleteFiles(filePaths)
  } 

  // 4. Check if videoLink is not undefined.
  // If videoLink is undefined, return error missing field
  // If videoLink is not undefined: delete old videos in filesystem
  if (!videoLink) {
    throw new MissingField("Missing videoLink field")
  } else if (videoLink.length !== 0) {
    const filePaths = []
    for (let i = 0; i < foundPost.videoLink.length; i++) {
      filePaths.push(foundPost.videoLink[i].backup)
    }
    await uploadFileServices.deleteFiles(filePaths)
  }

  // 5. Update post
  await postDaos.updatePost(postId, updateData)
}

// Data structure of updateData
/**
 * {
 *  actionType: String ("like" or "dislike")
 *  userId: String (Who like or dislike)
 * }
 */
const updatePostLike = async (postId, updateData) => {
  // 1. Find post
  const foundPost = await postDaos.getPostById(postId)
  if (!foundPost) {
    throw new NotFoundError("Post not found")
  }
  const { actionType, userId } = updateData
  if (!actionType || !userId) {
    throw new MissingField()
  }
  // 2. Check actionType
  // If actionType == "like" then add userId to likes array and increase 1 likeCount
  // If actionType == "dislike" then remove userId out of likes array and increase -1 likeCount
  if (actionType === "like") {
    return await postDaos.addUserLikeShareCommentPost(postId, { likes: userId }, { likeCount: 1 })
  } else {
    return await postDaos.removeUserLikeShareCommentPost(postId, { likes: userId }, { likeCount: -1 })
  }
}

const deletePost = async (postId) => {
  // 1. Check if post does exist
  const foundPost = await postDaos.getPostById(postId)
  if (!foundPost) throw new NotFoundError("Post not found!")

  // 2. Delete all comment of post
  const deleteCommentResult = await commentDaos.deleteAllCommentsOfPost(foundPost._id)
  if (deleteCommentResult.modifiedCount == 0) {
    throw new InternalServerError("Something went wrong when delete comment of post")
  }

  // 3. Set originalPostId to null of all users that shared post
  for (let i = 0; i < foundPost.shares.length; i++) {
    const userId = foundPost.shares[i]
    const updateData = {
      $set: { "sharePost.originalPostId": null },
    }
    const filter = {
      userId: userId,
      sharePost: { originalPostId: foundPost._id }
    }
    const updateResult = await postDaos.updatePost(filter, updateData)
    if (updateResult.modifiedCount == 0) {
      throw new InternalServerError("Something went wrong when update share post")
    }
  }
  // 4. Delete post 
  const deletePostResult = await postDaos.deletePost(foundPost._id)
  if (deleteCommentResult.modifiedCount == 0) {
    throw new InternalServerError("Something went wrong when delete comment of post")
  }

  return deletePostResult
}

const postService = {
  getPosts,
  getAllPostsOfUser,
  getPostById,
  createNewPost,
  createNewSharePost,
  updatePostCotent,
  updatePostLike,
  deletePost,
}

module.exports = postService