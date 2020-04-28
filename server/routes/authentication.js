const express = require("express");
const authrouter = express.Router();
const passport = require("passport");
const { user } = require("./user");


authrouter.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

/* authrouter.get(
  "/auth/google/callback", (res,req,next)=>{
    ( passport.authenticate("google", { session: false },
  (err,user,info) => {
   res.send(user)
  }))
 }

 )  */

 authrouter.get(
  "/auth/google/callback", (req,res,next) =>{
    passport.authenticate("google", { session: false },
    (err,user,info) =>  {
      console.log(user)
    /* if (err) throw res.status(500).send("Something went wrong") 
    return   res.status(200).json({
      success: true,
      id: user.id,
      firstname:user.firstname,
      lastname:user.lastname,
      token:  user.token,
     })(req,res) */
  })
  next()
},(req,res)=>{});


authrouter.get(
  "/auth/google/login",
  passport.authenticate("google", { session: false },
  (req, res) => {
    res.status(200).redirect('http://localhost:3000/authorized');
  })
);  

/* authrouter.get(
  '/auth/google/authenticating',(req,res)=>{
res.json({
  lastname:user.firstname,
  firstname:user.lastname,
  email:user.email,
  token:user.token
  }) 
  }
) */
module.exports = authrouter;
