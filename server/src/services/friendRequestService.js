const { addNewFriendRequest, findFriendRequest, removeNewFriendRequest } = require("../daos/friendRequestDaos")
const userDaos = require("../daos/userDaos")
const { BadRequestError } = require("../errors/customError")

const getNewFriendRequest = async(userId) => {
  const foundUserNewFriendRequest = await findFriendRequest(userId)
  const userNewFriendRequestDetail = []
  
  for (i = 0; i < foundUserNewFriendRequest.from.length; i++) {
    const foundUser = await userDaos.findOneUser({ _id: foundUserNewFriendRequest.from[i].userId })
    userNewFriendRequestDetail.push({
      userId: foundUser._id,
      username: foundUser.username,
      avatarLink: foundUser.avatarLink
    })
  }

  return userNewFriendRequestDetail
}

const createNewFriendRequest = async (senderId, receiverId) => {
  const senderFriendRequest = await findFriendRequest(senderId)
  if (senderFriendRequest) {
    if (senderFriendRequest.to.includes(receiverId)) {
      throw new BadRequestError("Something went wrong! We're very sorry")
    }
  }

  const receiverFriendRequest = await findFriendRequest(receiverId)
  if (receiverFriendRequest) {
    if (receiverFriendRequest.to.includes(senderId)) {
      throw new BadRequestError("Something went wrong! We're very sorry")
    }
  }

  const senderUpdateData = {
    userId: receiverId,
    addTimestamp: new Date()
  }

  const receiverUpdateData = {
    userId: senderId,
    addTimestamp: new Date()
  }

  await addNewFriendRequest(senderId, { to: senderUpdateData })
  await addNewFriendRequest(receiverId, { from: receiverUpdateData })

  //TODO: Notify user

  return 1
}

// acceptId: Id of user that accept friend request
// receiveAcceptanceId: Id of user that receive friend request acceptance
const acceptFriendRequest = async (acceptId, receiveAcceptanceId) => {
  // Find 2 user to get necessary data
  const acceptUser = await userDaos.findOneUser({ _id: acceptId })
  const receiveAcceptanceUser = await userDaos.findOneUser({ _id: receiveAcceptanceId })

  // Find acceptUser friend request list to get receiveAccpentanceUser data from "from" list
  const acceptUserFriendRequestList = await findFriendRequest(acceptId)
  const acceptUserFriendRequestListUpdateData = acceptUserFriendRequestList.from.find((item) => item.userId === receiveAcceptanceId)

  // Find receiveAcceptanceUser friend request list to remove acceptUser from "to" list
  const receiveAcceptanceUserFriendRequestList = await findFriendRequest(receiveAcceptanceId)
  const receiveAcceptanceUserFriendRequestListUpdateData = receiveAcceptanceUserFriendRequestList.to.find((item) => item.userId === acceptId)

  // Remove receiveAcceptanceUser from "from" list of acceptUser
  await removeNewFriendRequest(acceptId, { from: acceptUserFriendRequestListUpdateData })
  // remove acceptUser from "to" list of receiveAcceptanceUser
  await removeNewFriendRequest(receiveAcceptanceId, { to: receiveAcceptanceUserFriendRequestListUpdateData })

  // Construct receiveAcceptanceUser data to add to acceptUserFriendList
  const acceptUserFriendListUpdateData = {
    userId: receiveAcceptanceUser._id,
    username: receiveAcceptanceUser.username,
    avatarLink: receiveAcceptanceUser.avatarLink
  }

  // Construct acceptUser data to add to receiveAcceptanceUserFriendList
  const receiveAcceptanceUserFriendListUpdateData = {
    userId: acceptUser._id,
    username: acceptUser.username,
    avatarLink: acceptUser.avatarLink
  }

  await userDaos.updateUserById(acceptId, { $push: { friendList: acceptUserFriendListUpdateData } })
  await userDaos.updateUserById(receiveAcceptanceId, { $push: { friendList: receiveAcceptanceUserFriendListUpdateData } })

  // TODO: Notify user

  return 1
}

// rejectId: Id of user that reject friend request
// receiveRejectionId: Id of user that receive friend request rejection
const rejectFriendRequest = async (rejectId, receiveRejectionId) => {
  // Find rejectUser friend request list to get receiveRejectionUser data from "from" list
  const rejectUserFriendRequestList = await findFriendRequest(rejectId)
  const rejectUserFriendRequestListUpdateData = rejectUserFriendRequestList.from.find((item) => item.userId === receiveRejectionId)

  // Find receiveRejectionUser friend request list to remove rejectUser data from "to" list
  const receiveRejectionUserFriendRequestList = await findFriendRequest(receiveRejectionId)
  const receiveRejectionUserFriendRequestListUpdateData = receiveRejectionUserFriendRequestList.to.find((item) => item.userId === rejectId)

  // Remove receiveRejectionUser from "from" list of rejectUser
  await removeNewFriendRequest(rejectId, { from: rejectUserFriendRequestListUpdateData })
  // remove rejectUser from "to" list of receiveRejectionUser
  await removeNewFriendRequest(receiveRejectionId, { to: receiveRejectionUserFriendRequestListUpdateData })
  
  // TODO: Notify user

  return 1
}

// cancelId: Id of user that cancel friend request
// receiveCancelationId: Id of user that receive friend request cancelation
const cancelFriendRequest = async (cancelId, receiveCancelationId) => {
  // Find cancelUser friend request list to get receiveCancelationnUser data from "from" list
  const cancelUserFriendRequestList = await findFriendRequest(cancelId)
  const cancelUserFriendRequestListUpdateData = cancelUserFriendRequestList.to.find((item) => item.userId === receiveCancelationId)

  // Find receiveRejectionUser friend request list to remove rejectUser data from "to" list
  const receiveCancelationUserFriendRequestList = await findFriendRequest(receiveCancelationId)
  const receiveCancelationUserFriendRequestListUpdateData = receiveCancelationUserFriendRequestList.from.find((item) => item.userId === cancelId)

  // Remove receiveCancelationUser from "from" list of cancelUser
  await removeNewFriendRequest(cancelId, { to: cancelUserFriendRequestListUpdateData })
  // remove cancelUser from "to" list of receiveCancelationUser
  await removeNewFriendRequest(receiveCancelationId, { from: receiveCancelationUserFriendRequestListUpdateData })
  
  // TODO: Delete user notification

  return 1
}

const friendRequestService = {
  getNewFriendRequest,
  createNewFriendRequest,
  acceptFriendRequest,
  rejectFriendRequest,
  cancelFriendRequest
}

module.exports = friendRequestService