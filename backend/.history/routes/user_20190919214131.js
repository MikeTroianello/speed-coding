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

  const salt = bcrypt.genSaltSync(bcryptSalt);
  const hashPass = bcrypt.hashSync(password, salt);

  const newUser = new User({
    username,
    password: hashPass
  });

  // newUser.save((err) => {
  //   if (err) {
  //     res.render("auth/signup", { message: "Something went wrong" });
  //   } else {
  //     res.redirect("/");
  //   }
  // });

  User.findOne(newUser)
    .then(foundUser => {
      if (foundUser) {
        res.send('Username already exists!');
      } else {
        User.create(newUser)
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
  res.send('nope...');
  // res.render('user/login');
});

//POST Log in User
router.post(
  '/login',
  passport.authenticate('local', {
    successRedirect: '/user/private-page',
    failureRedirect: '/user/login',
    // failureFlash: true,
    passReqToCallback: true
  })
);

router.get('/private-page', ensureLogin.ensureLoggedIn(), (req, res) => {
  console.log('ALMOST THERE');
  res.send('Ya did it, mate', { user: req.user });
  // res.render('user/private', { user: req.user });
});

module.exports = router;
