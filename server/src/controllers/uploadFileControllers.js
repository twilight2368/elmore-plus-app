const uploadFileServices = require("../services/uploadFileService")

const uploadFiles = async (req, res, next) => {
  const results = await uploadFileServices.uploadFiles(req.files)
  res.status(200).json({
    message: "Successfully uploaded!",
    data: results
  })
}

const uploadFile = async (req, res, next) => {
  const result = await uploadFileServices.uploadFile(req.file)
  res.status(200).json({
    message: "Successfully uploaded!",
    data: result
  })
}

const deleteFile = async (req, res, next) => {
  const result = await uploadFileServices.deleteFile(req.body.filePath)
  res.status(200).json({
    message: "Successfully deleted!",
    data: result
  })
}

const deleteFiles = async (req, res, next) => {
  const results = await uploadFileServices.deleteFiles(req.body.filePaths)
  res.status(200).json({
    message: "Successfully deleted!",
    data: results
  })
}

const uploadFileControllers = {
  uploadFiles,
  uploadFile,
  deleteFile,
  deleteFiles
}

module.exports = uploadFileControllers