const mongoose = require("mongoose");

const deletedUserSchema = new mongoose.Schema({
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
  dateOfBirth: {
    type: Date,
  },
  country: {
    type: String
  },
  avatarLink: {
    type: String,
    default: ""
  },
  profileBackgroundLink: {
    type: String,
    default: ""
  },
  friendList: [
    {
      userId: {
        type: mongoose.Schema.ObjectId,
        ref: 'user'
      },
      username: {
        type: String
      },
      avatarLink: {
        type: String
      }
    }
  ],
  lastLogin: { 
    type: Date,
    default: Date.now()
  },
  isActive: {
    type: Boolean,
    default: false
  },
}, {
  timestamps: true
})

const deletedUserModel = mongoose.model('deletedUser', deletedUserSchema)

module.exports = deletedUserModel