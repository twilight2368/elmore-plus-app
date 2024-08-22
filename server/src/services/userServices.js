const { BadRequestError } = require("../errors/customError")

const updateUserProfile = async (userId, updateData) => {
  const { email } = updateData
  if (email) {
    throw new BadRequestError("Email is not allowed to be updated!")
  }


}

module.exports = {
  getUser
}