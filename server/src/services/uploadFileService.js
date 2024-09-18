const { v2: cloudinary } = require('cloudinary')
const ENV = require('../configs/configs')
const { InternalServerError } = require('../errors/customError')
const fs = require('node:fs')

cloudinary.config({
  cloud_name: ENV.CLOUDINARY.CLOUD_NAME,
  api_key: ENV.CLOUDINARY.API_KEY,
  api_secret: ENV.CLOUDINARY.API_SECRET
})

// Upload multiple files
const uploadFiles = async (files) => {
  let results = []
  for (let file of files) {
    const multerPath = file.path
    const transformedPath = multerPath.replaceAll("\\", "/")
    const fileSegmentArr = transformedPath.split('.')
    const fileExtension = fileSegmentArr[fileSegmentArr.length - 1]
    let filePath = fileSegmentArr[fileSegmentArr.length - 2]

    try {
      const result = await cloudinary.uploader.upload(transformedPath)
      filePath = '..' + filePath + '-' + result.public_id + '.' + fileExtension

      fs.rename(transformedPath, filePath, (err) => {
        if (err) throw err
        console.log("Rename complete!")
      })

      results.push({
        main: result.url,
        backup: filePath
      })
    } catch (error) {
      throw new InternalServerError("Something went wrong when uploading file")
    }
  }
  return results
}

// Upload a single file
const uploadFile = async (file) => {
  const multerPath = file.path
  const transformedPath = multerPath.replaceAll("\\", "/")
  const fileSegmentArr = transformedPath.split('.')
  const fileExtension = fileSegmentArr[fileSegmentArr.length - 1]
  let filePath = fileSegmentArr[fileSegmentArr.length - 2]

  try {
    const result = await cloudinary.uploader.upload(transformedPath)
    filePath = '..' + filePath + '-' + result.public_id + '.' + fileExtension

    fs.rename(transformedPath, filePath, (err) => {
      if (err) throw new InternalServerError("Something went wrong when renaming file!")
      console.log("Rename complete!")
    })

    return {
      main: result.url,
      backup: filePath
    }

  } catch (error) {
    throw new InternalServerError("Something went wrong when uploading file")
  }
}

const deleteFile = async (filePath) => {
  const fileSegmentArr = filePath.split('.')
  const publicId = fileSegmentArr[2].split('-')[2]
  try {
    const deleteOnClodinary = await cloudinary.uploader.destroy(publicId)
    fs.rm(filePath, (err) => {
      if (err) throw new InternalServerError("Something went wrong when deleting file!")
      console.log("Remove file successfully!")
    })

    return deleteOnClodinary.result
  } catch (error) {
    throw new InternalServerError("Something went wrong when uploading file")
  }
}

const deleteFiles = async (filePaths) => {
  let results = []
  for (let filePath of filePaths) {
    const fileSegmentArr = filePath.split('.')
    const publicId = fileSegmentArr[2].split('-')[2]
    try {
      const deleteOnClodinary = await cloudinary.uploader.destroy(publicId)
      fs.rm(filePath, (err) => {
        if (err) throw new InternalServerError("Something went wrong when deleting file!")
        console.log("Remove file successfully!")
      })

      results.push(deleteOnClodinary.result)
    } catch (error) {
      throw new InternalServerError("Something went wrong when deleting file")
    }
  }

  return results
}

const uploadFileServices = {
  uploadFiles,
  uploadFile,
  deleteFile,
  deleteFiles
}

module.exports = uploadFileServices