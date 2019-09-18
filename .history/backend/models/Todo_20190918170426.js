const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  importance: {
    type: String,
    enum: ['low', 'moderate', 'high'],
    required: true
  },
  progress: {
    type: Boolean,
    default: false
  },
  complete: {
    type: Boolean,
    default: false
  },
  time: { type: Date, default: Date.now }
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
