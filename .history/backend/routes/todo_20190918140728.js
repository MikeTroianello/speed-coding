const express = require('express');
const router = express.Router();
const Todo = require('../models/Todo');

/* POST create todo item */
router.post('/create', (req, res, next) => {
  const todo = req.body;
  Todo.create(todo)
    .then(created => {
      console.log('To-do item created!');
      return res.send({ created });
    })
    .catch(err => {
      next(err);
    });
});

module.exports = router;
