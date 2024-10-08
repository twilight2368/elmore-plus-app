const { DatabaseError } = require("../errors/customError");
const userModel = require("../models/user");
const getSelectData = require("../utils/getSelectData");
const getUnselectData = require("../utils/getUnselectData");

const findOneUser = async (filter) => {
  return await userModel.findOne(filter).select(getUnselectData(['password']))
    .then(data => data)
    .catch(err => {
      console.log(err)
      throw new DatabaseError("Something went wrong in findOneUser")
    })
}

const findManyUsers = async (filter, select) => {
  return await userModel.find(filter).select(getSelectData(select))
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
  return await userModel.findByIdAndUpdate(userId, updateData, { upsert: true, new: true }).select(getUnselectData(['password']))
    .then(data => data)
    .catch(err => {
      console.log(err)
      throw new DatabaseError("Something went wrong in updateUserById")
    })
}

const updateUser = async (filter, updateData) => {
  return await userModel.findOneAndUpdate(filter, updateData, { upsert: true, new: true }).select(getUnselectData(['password']))
    .then(data => data)
    .catch(err => {
      console.log(err)
      throw new DatabaseError("Something went wrong in updateUser")
    })
}

const deleteUser = async (userId) => {
  return await userModel.deleteOne({ _id: userId })
    .then(data => data)
    .catch(err => {
      console.log(err)
      throw new DatabaseError("Something went wrong in deleteUser")
    })
}

const userDaos = {
  findOneUser,
  findManyUsers,
  createNewUser,
  updateUserById,
  updateUser,
  deleteUser
}

module.exports = userDaos
