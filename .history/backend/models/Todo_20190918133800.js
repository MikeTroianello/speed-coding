const mongoose = require('mongoose');
const schema = require('schema');

const Schema = new schema();

const Todo = new Schema({
  title: {
    type: String,
    required: yes
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
