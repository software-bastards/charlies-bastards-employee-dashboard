const express = require('express');
const router = express.Router();
const db = require('../database/configurationSequelize');
const hour = db.hour
const passport = require("passport");


 router.post('/myhours',
/*   passport.authenticate("jwt", { session: false },(req,res)=>{}),  
 */   (req,res)=>{ 
    console.log('ok')
     const id = req.body.data.account_id 
    hour.findAll({where:{account_id:id}})
 .then(result=> res.status(200).send(result))
 .catch(err=> {console.error(err), res.status(500)})
 }
)


router.put('/myhours/edit',
/* passport.authenticate("jwt", { session: false }, 
(req,res)=>{ next()}), */
  (req,res)=>{
    console.log('ok')
   const idBody = req.body.data.account_id
    const monthBody = req.body.data.month
    const dayBody = req.body.data.day
    const hourBody = req.body.data.hour 

     hour.update({hour_logged:hourBody},{ returning: true, where:{account_id:idBody,month_number:monthBody,day_number:dayBody}})
    .then(results=> res.status(200).json({
      message:"Your hours were updated"}) )
    .catch(err=> {console.error(err), res.status(500).json({message:"Something went wrong"})}) 
   })

 module.exports = router