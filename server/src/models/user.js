const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  realname: {
    type: String
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
  },
  country: {
    type: String
  },
  avatarLink: {
    type: String,
    default: ""
  },
  friends: [
    {
      userId: {
        type: mongoose.Schema.ObjectId,
        ref: 'user'
      }
    }
  ],
  roomIds: {
    type: mongoose.Schema.Types.Array,
    default: []
  },
  posts: {
    type: mongoose.Schema.Types.Array,
    default: []
  },
  lastLogined: { 
    type: Date
  },
  isActive: {
    type: Boolean,
    required: true
  },
}, {
  timestamps: true
})

const userModel = mongoose.model('user', userSchema)

module.exports = userModel