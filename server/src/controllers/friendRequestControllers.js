const friendRequestService = require('../services/friendRequestService')

const getNewFriendRequest = async (req, res, next) => {
  const friendRequests = await friendRequestService.getNewFriendRequest(req.userId)
  res.status(200).json({
    message: "Successfully get new friend requests",
    data: friendRequests
  })
}

const createNewFriendRequest = async (req, res, next) => {
  res.status(200).json({
    message: "Successfully get create new friend request",
    data: await friendRequestService.createNewFriendRequest(req.userId, req.body.receiverId)
  })
}

const acceptFriendRequest = async (req, res, next) => {
  res.status(200).json({
    message: "Successfully accept friend request",
    data: await friendRequestService.acceptFriendRequest(req.userId, req.body.receiverId)
  })
}

const rejectFriendRequest = async (req, res, next) => {
  res.status(200).json({
    message: "Successfully reject friend request",
    data: await friendRequestService.rejectFriendRequest(req.userId, req.body.receiverId)
  })
}

const cancelFriendRequest = async (req, res, next) => {
  res.status(200).json({
    message: "Successfully reject friend request",
    data: await friendRequestService.cancelFriendRequest(req.userId, req.body.receiverId)
  })
}

module.exports = {
  getNewFriendRequest,
  createNewFriendRequest,
  acceptFriendRequest,
  rejectFriendRequest,
  cancelFriendRequest
}