const express = require('express');
const router = express.Router();
const User = require('../models/User');

const bcrypt         = require("bcrypt");
const bcryptSalt     = 10;


//POST create user
router.post('/create', (req,res,next) => {
  const user= req.body.user;
  const password= req.body.password;

  if(!user||password)
})


module.exports = router;