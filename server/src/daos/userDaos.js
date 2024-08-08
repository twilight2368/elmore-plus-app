const { DatabaseError } = require("../errors/customError");
const userModel = require("../models/user");

const findOneUser = async (filter) => {
  return await userModel.findOne(filter)
    .then(data => data)
    .catch(err => {
      console.log(err)
      throw new DatabaseError()
    })
}

const findManyUsers = async (filter) => {
  return await userModel.find(filter)
    .then(data => data)
    .catch(err => {
      console.log(err)
      throw new DatabaseError()
    })
}

const createNewUser = async (userDocument) => {
  return await userModel.create(userDocument)
    .then(data => data)
    .catch(err => {
      console.log(err)
      throw new DatabaseError()
    })
}

const updateUserById = async (userId, updateData) => {
  return await userModel.findByIdAndUpdate(userId, updateData, { upsert: true, new: true })
    .then(data => data)
    .catch(err => {
      console.log(err)
      throw new DatabaseError()
    })
}

const updateUser = async (filter, updateData) => {
  return await userModel.findOneAndUpdate(filter, updateData, { upsert: true, new: true })
    .then(data => data)
    .catch(err => {
      console.log(err)
      throw new DatabaseError()
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
