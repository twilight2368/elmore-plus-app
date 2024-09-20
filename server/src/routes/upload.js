const { authToken } = require('../auth/authMiddlewares')
const uploadFileControllers = require('../controllers/uploadFileControllers')
const asyncHandler = require('../middlewares/asyncHandler')
const { uploadVideo, uploadImage } = require('../middlewares/uploadFileHandler')

const router = require('express').Router()

router.use(authToken)
router.post('/videos', uploadVideo.array('video'), asyncHandler(uploadFileControllers.uploadFiles))
router.post('/images', uploadImage.array('image'), asyncHandler(uploadFileControllers.uploadFiles))
router.post('/video', uploadVideo.single('video'), asyncHandler(uploadFileControllers.uploadFile))
router.post('/image', uploadImage.single('image'), asyncHandler(uploadFileControllers.uploadFile))
router.delete('/file', asyncHandler(uploadFileControllers.deleteFile))
router.delete('/files', asyncHandler(uploadFileControllers.deleteFiles))

module.exports = router