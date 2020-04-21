const express = require("express");
const router = express.Router();
const db = require ("../database/configurationSequelize")
const account = db.account
const bcrypt =require("bcrypt")
router.post("/register",  async (req, res, next) => {
try{
  const hash= await bcrypt.hash(req.body.password,10) 
 

  account.create({
    firstname:req.body.firstname,
    lastname:req.body.lastname,
    email:req.body.email,
    password:hash,

  })

  res.status(201).send(`the user ${req.body.lastname} was created`)
}
catch{err=>( res.send(err))}


});

module.exports = router;
