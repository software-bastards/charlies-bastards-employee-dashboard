const express = require('express');
const router = express.Router();
const db = require('../database/configurationSequelize');
const hour = db.hour
const account = db.account
const passport = require("passport");



router.post('/myhours',
passport.authenticate("jwt", { session: false }),
(req,res)=>{
 const id = req.body.id
 hour.findAll({where:{id:id}})
 .then(result=> res.status(200).json(result))
 .catch(err=> {console.error(err), res.status(500)})
})

router.put('/myhours/edit',
passport.authenticate("jwt", { session: false }),
(req,res)=>{
    const idBody = req.body.id
    const hourBody = req.body.hour
    hour.update({hour_logged:hourBody},{returning: true, where:{id:idBody}})
    .then(result=> res.status(200).json({message:"Your hours were updated"}) )
    .catch(err=> {console.error(err), res.status(500)})
   })

module.exports = router