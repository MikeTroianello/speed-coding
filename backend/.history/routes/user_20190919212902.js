const express = require('express');
const router = express.Router();
const User = require('../models/User');

const passport = require('passport');
const bcrypt = require('bcrypt');
const bcryptSalt = 10;

const ensureLogin = require('connect-ensure-login');

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

//Get Login page
router.get('/login', (req, res, next) => {
  res.send('LOGIN');
  res.render('auth/login');
});

//POST Log in User
router.post(
  '/login',
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/user/login',
    // failureFlash: true,
    passReqToCallback: true
  })
);

router.get('/private-page', ensureLogin.ensureLoggedIn(), (req, res) => {
  console.log('ALMOST THERE');
  res.send({ user: req.user });
  // res.render("private", { user: req.user });
});

module.exports = router;
