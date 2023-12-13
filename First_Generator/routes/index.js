var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// router.get('/create', async function(req, res) {
//   const createduser =  await userModel.create({
//     username: "Shubhankar",
//     age: 21,
//     name:"Shubhankar"
//   });
//   res.send(createduser)
// });

module.exports = router;
