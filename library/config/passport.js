  
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');

// Load User model
const db = require('../models/index');

module.exports = function(passport) {
  passport.use(
    new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
      // Match user
      db.User.findOne({
        email: email
      }).then(user => {

        if (!user) {

          console.log("user not registered")

          
          return done(null, false);
        }

        // console.log(user)

        // Match password
        bcrypt.compare( password, user.password, (err, isMatch) => {
          if (err) throw err;
          if (isMatch) {
            // console.log(user)
            return done(null, user);
           
          } else {
            // return done(null, false, { message: 'Password incorrect' });
            console.log("password dont match")
            return done(null, false);
          }
        });
      });
    })
  );

  passport.serializeUser(function(user, done) {
    done(null, user.id);
    return user
  });

  passport.deserializeUser(function(id, done) {
    db.User.findById(id, function(err, user) {
      done(err, user);
      return user
    });
  });
};