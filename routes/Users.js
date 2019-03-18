const express = require('express');
const router = express.Router();

const User_Controller = require('../controllers/Users');

router.all('/LogIn/:id',User_Controller.login);

router.get('/SignUp',function(req,res) {
  res.send("Sorry registrations are closed");
});

router.get('/Ligin',(req,res)=>{
  res.render("Users/login");
});

//router.get('/api', User_Controller.api);

module.exports = router;
