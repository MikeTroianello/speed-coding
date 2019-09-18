const express = require('express');
const router = express.Router();
const Todo = require('../models/Todo');

// GET see all todo items

router.get('/all', (req, res, next) => {
  console.log('HERE');
  Todo.find().then(items => {
    res.send({ items });
  });
});

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

/* POST delete todo item */
router.post('/delete/id', (req, res, next) => {
  const id = req.params.id;
  Todo.findById(id)
    .then(ToDelete => {
      Todo.delete(ToDelete);
      console.log('To-do item deleted');
      return res.send('BALEETED');
    })
    .catch(err => {
      next(err);
    });
});

module.exports = router;
