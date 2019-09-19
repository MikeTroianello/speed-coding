const express = require('express');
const router = express.Router();
const User = require('../models/User');

const bcrypt = require('bcrypt');
const bcryptSalt = 10;

//POST create user
router.post('/create', (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  if (!name || password) {
    res.send('missing username/password');
    // res.redirect('/')
  }
});

module.exports = router;
