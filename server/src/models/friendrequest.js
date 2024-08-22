const mongoose = require("mongoose");

const friendRequestSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.ObjectId,
    ref: 'user',
    required: true
  },
  to: [{
    userId: {
      type: mongoose.Schema.ObjectId,
      ref: 'user',
    },
    addTimestamp: {
      type: Date,
    }
  }],
  from: [{
    userId: {
      type: mongoose.Schema.ObjectId,
      ref: 'user',
    },
    addTimestamp: {
      type: Date,
    }
  }],
}, {
  timestamps: true
})

const friendRequestModel = mongoose.model('friendrequest', friendRequestSchema)

module.exports = friendRequestModel
