const { DatabaseError } = require("../errors/customError");
const userModel = require("../models/user");

const findOneUser = async (filter) => {
  return await userModel.findOne(filter)
    .then(data => data)
    .catch(err => {
      console.log(err)
      throw new DatabaseError("Something went wrong in findOneUser")
    })
}

const findManyUsers = async (filter) => {
  return await userModel.find(filter)
    .then(data => data)
    .catch(err => {
      console.log(err)
      throw new DatabaseError("Something went wrong in findManyUsers")
    })
}

const createNewUser = async (userDocument) => {
  return await userModel.create(userDocument)
    .then(data => data)
    .catch(err => {
      console.log(err)
      throw new DatabaseError("Something went wrong in createNewUser")
    })
}

const updateUserById = async (userId, updateData) => {
  return await userModel.findByIdAndUpdate(userId, updateData, { upsert: true, new: true })
    .then(data => data)
    .catch(err => {
      console.log(err)
      throw new DatabaseError("Something went wrong in updateUserById")
    })
}

const updateUser = async (filter, updateData) => {
  return await userModel.findOneAndUpdate(filter, updateData, { upsert: true, new: true })
    .then(data => data)
    .catch(err => {
      console.log(err)
      throw new DatabaseError("Something went wrong in updateUser")
    })
}

const userDaos = {
  findOneUser,
  findManyUsers,
  createNewUser,
  updateUserById,
  updateUser
}

module.exports = userDaos
