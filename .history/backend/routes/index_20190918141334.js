const express = require('express');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/todo', (req, res, next) => {
  console.log('THIS EXISTS');
  res.render('index');
});

module.exports = router;
