var express = require('express');
var router = express.Router();
const userModel = require("./users");
const passport = require("passport");
const localStategy = require("passport-local");
const { route } = require('../app');
passport.use(new localStategy(userModel.authenticate()));


router.get('/', function(req, res) {
  res.render('index');
});

router.get('/profile',isloggedin ,function(req, res) {
  res.send("welcome to profile");
});

router.post("/register",function(req,res){
  var username = new userModel({
    username : String,
    secret : String
  });
  userModel.register(userdata, req.body.password)
    .then(function(registereduser){
      passport.authenticate("local")(req,res, function(){
        res.redirect("/profile");
      })
    })
});


router.post("/login",passport.authenticate("local",{
  successRedirect: "/profile",
  failureRedirect: "/"
}) ,function(req, res){
  res.send();
})

route.post("/logout",function(req,res,next){
  req.logout(function(err){
    if (err){ return next(err);}
    res.redirect("/")
  });
});

function isloggedin(req,res, next){
  if(req.isAuthenticated()){
    return next();
  }
  else{
    res.redirect("/");
  }
}

module.exports = router;
