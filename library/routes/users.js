const express = require('express');
const router = express.Router();
const db = require("../models/index");
const bcrypt = require("bcryptjs");

/* GET users listing. */
router.get('/login', function(req, res, next) {
  res.send('Login');
});

router.get('/register', function(req, res, next) {
  res.send('Register');
});


// Register new user
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

    // check for or create a user 

    db.User
      .findOne({email: email})
      .then(user => {

        if(user) {

          // email already exist
          // user logged in,redirect user to index page
        }else{

          // hash password

          bcrypt.genSalt(10, (salt, err) => 

          bcrypt.hash(password, salt, () => (hash, err) => {

            if(err) throw err;

            password = hash;

            db.User.create({ name, email, password })
            .then(user => {
            // redirect new user to login page
             req.flash("success_msg", "You are now registered, Yon can login")
             res.redirect("/user/login")
          })
          .catch(err => res.status(422).json(err));
          }))
          
        }

        

        // re
        

      })
      .catch(err => res.status(422).json(err));

  }
});



// user login, this is where passport works wonders
// Login
router.post('/login', (req, res, next) => {
  passport.authenticate('local', {
    // redirect to index page
    successRedirect: '',
    failureRedirect: '/users/login',
    failureFlash: true
  })(req, res, next);
});

// Logout
router.get('/logout', (req, res) => {
  req.logout();
  req.flash('success_msg', 'You are logged out');
  res.redirect('/users/login');
});


module.exports = router;
