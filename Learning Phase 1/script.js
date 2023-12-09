const express = require("express");
const app = express();

app.use(function(req,res,next){
    next();
});

app.get('/', function(req,res){
    res.send("Hello World ab sheek raha hu mei or nodemon bhi sheek chuka hu jo ki chlr nhi raha tha")
});

app.get('/profile', function(req,res){
    res.send("this is another route called profile")
});

app.get('/profile/:username', function(req,res){
    res.send(`this is another route from ${req.params.username}`)
});

app.listen(3000);
