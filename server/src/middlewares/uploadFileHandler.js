const multer = require("multer")
const { v4: uuidv4 } = require('uuid')

const storageVideos = multer.diskStorage({
  destination: "../assets/videos",
  filename: function (req, file, cb) {
    const uuid = uuidv4()
    const uniqueSuffix = req.userId + '-' + Date.now() + '-' + uuid
    cb(null, uniqueSuffix + '-' + file.originalname)
  }
})

const storageImages = multer.diskStorage({
  destination: "../assets/images",
  filename: function (req, file, cb) {
    const uuid = uuidv4()
    const uniqueSuffix = req.userId + '-' + Date.now() + '-' + uuid
    cb(null, uniqueSuffix + '-' + file.originalname)
  }
})

const uploadVideo = multer({ storage: storageVideos })
const uploadImage = multer({ storage: storageImages })

module.exports = {
  uploadVideo,
  uploadImage
}