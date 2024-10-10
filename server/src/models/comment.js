const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.ObjectId,
    ref: 'user',
    required: true
  },
  postId: {
    type: mongoose.Schema.ObjectId,
    ref: 'user',
    required: true
  },
  content: {
    type: String,
    required: true
  },
  imageLink: {
    main: {
      type: String,
      default: '',
    },
    backup: {
      type: String,
      default: '',
    }
  },
  videoLink: {
    main: {
      type: String,
    },
    backup: {
      type: String
    }
  },
  likes: {
    type: mongoose.Schema.Types.Array,
    default: []
  },
  likeCount: {
    type: Number,
    default: 0
  },
  replyComments: {
    type: mongoose.Schema.Types.Array,
    default: []
  }
}, {
  timestamps: true
})

const commentModel = mongoose.model('comment', commentSchema)

module.exports = commentModel
