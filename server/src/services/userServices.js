const userDaos = require("../daos/userDaos")
const { BadRequestError, NotFoundError } = require("../errors/customError")

// Get user profile
// Get users profile
// Update user profile
// Deactive user profile

const getUserProfile = async (userId) => {
  const foundUser = await userDaos.findOneUser({ _id: userId })
  if (!foundUser) {
    throw new NotFoundError("User not found!")
  }
}

const getUserProfiles = async (userIds) => {
  const filter = { _id: { $in: userIds } }
  const foundUsers = await userDaos.findManyUsers(filter, ['username', 'avatarLink'])
  if (foundUsers.length == 0) {
    throw new NotFoundError("No user found!")
  }
  return foundUsers
}

module.exports = {
  getUserProfile,
  getUserProfiles
}