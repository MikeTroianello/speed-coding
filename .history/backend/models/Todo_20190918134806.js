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
    enum: ['low', 'moderate', 'high']
  },
  progress: {
    type: Boolean,
    default: false
  },
  complete: {
    type: Boolean,
    default: false
  }
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
