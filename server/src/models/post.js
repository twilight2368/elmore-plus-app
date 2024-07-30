const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.ObjectId,
    ref: 'user',
    required: true
  },
  content: {
    type: String
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
  likes: {
    type: mongoose.Schema.Types.Array,
    default: []
  },
  shares: {
    type: mongoose.Schema.Types.Array,
    default: []
  },
  comments: {
    type: mongoose.Schema.Types.Array,
    default: []
  },
}, {
  timestamps: true
})

const postModel = mongoose.model('post', postSchema)

module.exports = postModel
