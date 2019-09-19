const express = require('express');
const router = express.Router();
const Todo = require('../models/Todo');

// GET see all todo items

router.get('/all', (req, res, next) => {
  console.log('HERE');
  Todo.find().then(items => {
    res.send({ items });
    // res.render('../views/todo/all.hbs', { items });
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
router.post('/delete/:id', (req, res, next) => {
  const id = req.params.id;
  Todo.findByIdAndRemove(id)
    .then(ToDelete => {
      console.log('To-do item deleted');
      return res.send('BALEETED');
    })
    .catch(err => {
      next(err);
    });
});

//GET see individual to-do item

router.get('/view-post/:id', (req, res, next) => {
  Todo.findById(req.params.id)
    .then(item => {
      res.send(item);
    })
    .catch(err => {
      next(err);
    });
});

//GET edit individual to-do item
router.get('/view-post/:id/edit', (req, res, next) => {
  Todo.findById(req.params.id)
    .then(item => {
      res.send('This is the edit page');
    })
    .catch(err => {
      next(err);
    });
});

//POST edit individual to-do item
router.post('/view-post/:id/edit', (req, res, next) => {
  Todo.findByIdAndUpdate(req.params.id).then(updatedItem => {});
});

module.exports = router;
