const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  user: {
    userId: {
      type: mongoose.Schema.ObjectId,
      ref: 'user',
    },
    username: {
      type: String
    },
    avatarLink: {
      type: String
    }
  },
  content: {
    type: String
  },
  sharePost: {
    isShare: {
      type: Boolean,
      default: false
    },
    originalPostId: {
      type: mongoose.Schema.ObjectId,
      ref: 'post'
    }
  },
  imageLink: [{
    main: {
      type: String,
    },
    backup: {
      type: String
    }
  }],
  videoLink: [{
    main: {
      type: String,
    },
    backup: {
      type: String
    }
  }],
  likes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  }],
  likeCount: {
    type: Number,
    default: 0
  },
  shares: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  }],
  shareCount: {
    type: Number,
    default: 0
  },
  comments: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'comment'
  }],
  commentCount: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
})

const postModel = mongoose.model('post', postSchema)

module.exports = postModel
