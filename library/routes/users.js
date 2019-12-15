const express = require('express');
const router = express.Router();
const db = require("../models/index")

/* GET users listing. */
router.get('/login', function(req, res, next) {
  res.send('Login');
});

router.get('/register', function(req, res, next) {
  res.send('Register');
});

router.post('/register', function(req, res) {

  const { name, email, password, password2 } = req.body;
  let errors = [];

  // check required fields

  if ((!name) || (!email) || (!password) || (!password2)) {

    errors.push({ msg: "Please fill in all fields"})
  }

  // check for passwords

  if(password !== password2) {

    errors.push({ msg: "Passwords do not match"})
  }

  // check length of password

  if(password.length < 6) {

    errors.push({ msg: "Password should be at least 6 characters"})
  }

  if(errors.length > 0) {

    // render user registration

  }else{

    // create a user

  }
});

module.exports = router;
