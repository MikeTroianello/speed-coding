const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  created: {
    type: Number,
    default: 0
  },
  completed: {
    type: Number,
    default: 0
  },

  time: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
