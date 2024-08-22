const { DatabaseError } = require("../errors/customError")
const friendRequestModel = require("../models/friendrequest")

const findFriendRequest = async (userId) => {
  return await friendRequestModel.findOne({ userId: userId })
  .then(result => result)
  .catch(err => {
    console.log(err)
    throw new DatabaseError("Error in findFriendRequest")
  })
}

const addNewFriendRequest = async (userId, updateData) => {
  return await friendRequestModel.updateOne(
    { userId: userId },
    { $push: updateData },
    { upsert: true, new: true }
  )
  .then(result => result)
  .catch(err => {
    console.log(err)
    throw new DatabaseError("Error in addNewFriendRequest")
  })
}

const removeNewFriendRequest = async (userId, updateData) => {
  return await friendRequestModel.updateOne(
    { userId: userId },
    { $pull: updateData },
    { upsert: true, new: true }
  )
  .then(result => result)
  .catch(err => {
    console.log(err)
    throw new DatabaseError("Error in removeNewFriendRequest")
  })
}

module.exports = {
  findFriendRequest,
  addNewFriendRequest,
  removeNewFriendRequest
}
