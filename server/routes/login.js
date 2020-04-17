if(process.env.NODE_ENV !== 'production'){
  require('dotenv').config()
} 

const express = require('express');
const router = express.Router();
const passport = require('passport')
const jwt = require('jsonwebtoken')

router.post("/login", function(req, res, next) {

  
  passport.authenticate("local", (err, user, info) => {
    if (err) throw res.status(500).send("Something went wrong") 
   if (!user ) return  res.status(400).send({message:info}); 
  

   const token = jwt.sign(JSON.stringify(user), process.env.ACCESS_TOKEN_SECRET);
   return   res.status(200).json({
     success: true,
     id: user.id,
     firstname:user.firstname,
     lastname:user.lastname,
     token: token,
     message:"you were authenticated"})  
     
    })(req, res, next)

});

module.exports = router;
