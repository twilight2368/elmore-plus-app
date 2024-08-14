const mongoose = require("mongoose");

const chatroomSchema = new mongoose.Schema({
  participation: {
    type: mongoose.Schema.Types.Array,
    required: true
  },
  messageIds: {
    type: mongoose.Schema.Types.Array,
    default: []
  },
  files: [
    {
      filePath: {
        type: String,
      },
      messageId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'chatmessage',
      }
    }
  ]
}, {
  timestamps: true
})

const chatRoomModel = mongoose.model('chatroom', chatroomSchema)

module.exports = chatRoomModel
