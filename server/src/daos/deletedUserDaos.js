const { DatabaseError } = require("../errors/customError");
const deletedUser = require("../models/deletedUser");

const createNewDeletedUser = async (deletedUserDocument) => {
  return await deletedUser.create(deletedUserDocument)
    .then(data => data)
    .catch(err => {
      console.log(err)
      throw new DatabaseError("Something went wrong in createNewDeletedUser")
    })
}

const deletedUserDaos = {
  createNewDeletedUser,
}

module.exports = deletedUserDaos
