const createError = require('http-errors');
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require("express-session");
const flash = require('connect-flash');
const passport = require("passport");


// Passport config
require("./config/passport")(passport);


// user and index routes
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

// app from express
const app = express();


// connecting to mongoDB

const databaseUri = "mongodb://localhost/library";

if (process.env.MONGODB_URI) {

  mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("[MongoDB] ==> connected..."))
  .catch(err => console.log(err))

}else{

  mongoose.connect(databaseUri, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log("[MongoDB] ==> connected..."))
  .catch(err => console.log(err))

}

mongoose.set('useCreateIndex', true);



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// Express Session
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true,
}));


// Passport middleware
app.use(passport.initialize());
app.use(passport.session());


// Connect Flash
app.use(flash());

// Global Var
app.use((req, res, next) => {
  res.locals.success_msg = req.flash("success_msg");
  res.locals.error_msg = req.flash("error_msg");
  next();
})

// set routes
app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
