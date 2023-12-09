const express = require("express");
const app = express();

app.get('/', function(req,res){
    res.send("Hello World ab sheek raha hu mei or nodemon bhi sheek chuka hu jo ki chlr nhi raha tha")
});

app.get('/profile', function(req,res){
    res.send("this is another route called profile")
});

app.listen(3000);
