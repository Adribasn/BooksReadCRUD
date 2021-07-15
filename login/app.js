const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const passportJWT = require('passport-jwt')
const JWTStrategy = passportJWT.Strategy;
const apiRouter = require('./routes/api');
const app = express();

app.use(passport.initialize());

//hardcoded user during dev
const user = {
  id: '1',
  email: 'example@email.com',
  password: 'password'
}

passport.use(new LocalStrategy({
  usernameField: 'email'
}, (email, password, done) => {
  if(email === user.email && password == user.password) {
    return done(null, user);
  }
}))

passport.use(new JWTStrategy({
  jwtFromRequest: passportJWT.ExtractJwt.fromAuthHeaderAsBearerToken(), 
  secretOrKey: "jwt_secret" //hardcoded only during development to make it simpler
}, (jwt_payload, done) => {
  if (user.id === jwt_payload.id) {
    return done(null, user);
  } else {
    return done(null, false);
  }
}))

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', apiRouter);

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send(error.message);
});

module.exports = app;
