const mongoose = require("mongoose")

const notificationSchema = new mongoose.Schema({
  userReceiveId: {
    type: mongoose.Schema.ObjectId,
    ref: 'user',
    required: true
  },
  content: {
    type: String,
    required: true
  },
  userSendId: {
    type: mongoose.Schema.ObjectId,
    ref: 'user',
    required: true
  },
  postId: {
    type: mongoose.Schema.ObjectId,
    ref: 'post',
  },
  commentId: {
    type: mongoose.Schema.ObjectId,
    ref: 'comment',
  },
  notiType: {
    type: String,
    enum: [
      "friend-request",
      "friend-reject",
      "friend-accept",
      "like-post",
      "comment-post",
      "like-comment",
      "reply-comment"
    ],
    required: true
  },
}, {
  timestamps: true
})

const notificationModel = mongoose.model('notification', notificationSchema)

module.exports = notificationModel
