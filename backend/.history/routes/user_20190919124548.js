const express = require('express');
const router = express.Router();
const User = require('../models/User');

const bcrypt = require('bcrypt');
const bcryptSalt = 10;

// router.post('/create', (req, res, next) => {
//   const todo = req.body;
//   Todo.create(todo)
//     .then(created => {
//       console.log('To-do item created!');
//       return res.send({ created });
//     })
//     .catch(err => {
//       next(err);
//     });
// });

//POST create user
router.post('/create', (req, res, next) => {
  const username = req.body.username.toLowerCase();
  const password = req.body.password;

  console.log(req.body);

  if (!username || !password) {
    res.send('missing username/password');
    // res.redirect('/')
  }

  const user = { username, password };

  User.findOne(user)
    .then(foundUser => {
      if (foundUser) {
        res.send('Username already exists!');
      } else {
        User.create(user)
          .then(createdUser => {
            res.send('User Created!');
          })
          .catch(err => {
            next(err);
          });
      }
    })
    .catch(err => {
      next(err);
    });
});

module.exports = router;
