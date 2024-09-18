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