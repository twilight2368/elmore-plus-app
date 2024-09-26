const userDaos = require('../daos/userDaos')
const userServices = require('../services/userServices')

const getUserProfile = async (req, res, next) => {
  const foundUser = await userServices.getUserProfile(req.userId)
  res.status(200).json({
    message: "Successfully found user",
    data: foundUser
  })
}

const getUserProfiles = async (req, res, next) => {
  const foundUsers = await userServices.getUserProfiles(req.body.userIds)
  res.status(200).json({
    message: "Successfully found users",
    data: foundUsers
  })
}

const updateUserProfile = async (req, res, next) => {
  const updatedUser = await userServices.updateUserProfile(req.userId, req.body)
  res.status(200).json({
    message: "Successfully updated user",
    data: updatedUser
  })
}

const updateUserPassword = async (req, res, next) => {
  const updatedPasswordResult = await userServices.updateUserPassword(req.userId, req.body.newPassword)
  res.status(200).json({
    message: "Successfully change user password",
    data: updatedPasswordResult
  })
}

const deleteUserProfile = async (req, res, next) => {
  const deleteUserResult = await userServices.deleteUserProfile(req.userId)
  res.status(200).json({
    message: "Successfully delete user account",
    data: deleteUserResult
  })
}

module.exports = {
  getUserProfile,
  getUserProfiles,
  updateUserProfile,
  updateUserPassword,
  deleteUserProfile,
}