const mongoose = require("mongoose");

const chatMessageSchema = new mongoose.Schema({
  roomId: {
    type: mongoose.Schema.ObjectId,
    required: true
  },
  userId: {
    type: mongoose.Schema.ObjectId,
    ref: 'user',
    required: true
  },
  message: {
    type: String,
    required: true
  },
  sendAt: {
    type: Date,
    required: true
  }
}, {
  timestamps: true
})

const chatMessageModel = mongoose.model('chatmessage', chatMessageSchema)

module.exports = chatMessageModel
