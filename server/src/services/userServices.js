const bcrypt = require('bcrypt')
const userDaos = require("../daos/userDaos")
const { NotFoundError, InternalServerError } = require("../errors/customError")
const deletedUserDaos = require('../daos/deletedUserDaos')

// /users/: GET: Get user profile
// /users/get-many: GET: Get many user profile
// /users/: PUT: Update user profile
// /users/change-password: PUT: Update user password
// /users/: DELETE: Delete user profile

const getUserProfile = async (userId) => {
  const foundUser = await userDaos.findOneUser({ _id: userId })
  if (!foundUser) {
    throw new NotFoundError("User not found!")
  }
  return foundUser
}

const getUserProfiles = async (userIds) => {
  const filter = { _id: { $in: userIds } }
  const foundUsers = await userDaos.findManyUsers(filter, ['_id', 'username', 'avatarLink'])
  if (foundUsers.length == 0) {
    throw new NotFoundError("No user found!")
  }
  return foundUsers
}

const updateUserProfile = async (userId, updateData) => {
  const foundUser = await userDaos.findOneUser({ _id: userId })
  if (!foundUser) {
    throw new NotFoundError("User not found!")
  }

  const updatedUser = await userDaos.updateUserById(userId, updateData)
  return updatedUser
}

const updateUserPassword = async (userId, newPassword) => {
  const foundUser = await userDaos.findOneUser({ _id: userId })
  if (!foundUser) {
    throw new NotFoundError("User not found!")
  }

  const hashedPassword = await bcrypt.hash(newPassword, 10)
  await userDaos.updateUserById(userId, { password: hashedPassword })
  return 1
}

const deleteUserProfile = async (userId) => {
  // 1. Check if user exist
  // 2. Delete user from `user` table
  // 3. Add user into `deleteUser` table
  // 4. Run a cron job that will delete everything that is related to this user
  // on the background

  const foundUser = await userDaos.findOneUser({ _id: userId })
  if (!foundUser) {
    throw new NotFoundError("User not found!")
  }

  const deleteUserResult = await userDaos.deleteUser(userId)
  if (deleteUserResult.deletedCount === 0) {
    throw new InternalServerError("Something went wrong in deleting user")
  }

  await deletedUserDaos.createNewDeletedUser(foundUser)
  return 1
}

const userServices = {
  getUserProfile,
  getUserProfiles,
  updateUserProfile,
  updateUserPassword,
  deleteUserProfile,
}

module.exports = userServices
