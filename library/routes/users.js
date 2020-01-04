const express = require('express');
const router = express.Router();
const db = require("../models/index");
const passport = require("passport")
const bcrypt = require("bcryptjs");


/* GET users listing. */
router.get('/login', (req, res) => {
  res.send('Login Page');
  
})

// router.get('/register', function(req, res, next) {
//   res.send('Register');
// });


// Register new user
router.post('/register', (req, res) => {

  var newUser;

  const { email, password } = req.body;
 

    // check for or create a user
    db.User.findOne({email: email})
    .then(user => {

      if(user) {

        // email already exist
        // user logged in,redirect user to index page
        console.log("email already exists")

      }else{

        newUser = {
          email, password
        }

        // hash password
        console.log(`
                    ${newUser.email}
                    ${newUser.password}
                    `)

        bcrypt.genSalt(10, (err, salt) => 

        bcrypt.hash(newUser.password, salt, (err, hash) => {

          if(err) throw err;



          newUser.password = hash

          

          db.User.create({ 
            email: newUser.email,
            password: newUser.password
          })
          .then(user => {
          
            // redirect new user to login page
            // req.flash("success_msg", "You are now registered, Yon can login")          
            res.json(user)
          })
          // .catch(err => res.status(422).json(err));
        
          
        }))          
        
      }

    })
    .catch(err => res.status(422).json(err));

  

  
});



// user login, this is where passport works wonders
// Login
router.post('/login', 
  passport.authenticate('local', {
    // redirect to index page
    // successRedirect: '/api/search',
    failureRedirect: '/users/login',
    failureFlash: true
  }), function(req, res) {

  console.log(req.user)
  // res.json(req.user.email)
  res.redirect("/api/search");
})

// Logout
router.get('/logout', (req, res) => {
  req.logout();
  req.flash('success_msg', 'You are logged out');
  res.redirect('/users/login');
  (console.log("user logged out, redirected to /users/login"))
});


module.exports = router;
