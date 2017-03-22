var express = require('express');
var passport = require('passport');
var session = require('express-session');
var FacebookStrategy = require('passport-facebook').Strategy;

var app = express();

app.use(session({secret: 'I am a nerd'}));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new FacebookStrategy({
    clientID:
    clientSecret:
    callbackURL: 
}, function(){

}))




app.listen(3000, function(){
  console.log('this works');
})
