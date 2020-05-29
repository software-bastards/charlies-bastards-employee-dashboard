const express = require("express");
const router = express.Router();
const db = require("../database/configurationSequelize");
const upload = db.upload;
const path = require("path");
const passport = require("passport");
const jwt = require("jsonwebtoken");

router.post(
  "/upload",
  (req, res, next) => {
    passport.authenticate("jwt", { session: false }, (err, user, info) => {
      if (err) console.log(err);
    });
    next();
  },
  async (req, res) => {
  if (req.files === null ) {
      return  res.status(400).json({ message: "No file uploaded" }); 
    
    } 
    
     const file = req.files.file;
    const userId = req.body.file[0];
    const month = req.body.file[1]; 

  
    


     await file.mv(
      path.join(__dirname, "../../client/public/uploads/", file.name),
      (err) => {
        if (err) {
          return res.status(500).send({message:err});
        }})

        
        upload.create({
          upload_name: file.name,
          upload_image: `/uploads/${file.name}`,
          month: month,
          account_id: userId,
        }).then( response=> 
           res.status(200).send({
            fileName: file.name,
            filePath: `/uploads/${file.name}`,
            message: "Your image was uploaded", 
          })).catch(err=>  
          {   res.status(500).send({message:"You didn't choose a month"})} ) 
      }
    );
 

router.get(
  `/upload/images`,
  (req, res, next) => {
    passport.authenticate("jwt", { session: false }, (err, user, info) => {
      if (err) console.log(err);
    });
    next();
  },
  (req, res) => {
    const userId = req.query.userId;
    const month = req.query.month;
    upload
      .findAll({ where: { account_id: userId, month: month } })
      .then(async (user) => {
        if (user.length > 0) {
          let data = [];
          await user.forEach((e) => {
            data.push({
              fileName: e.dataValues.upload_name,
              filePath: `/uploads/${e.dataValues.upload_name}`,
            });
          });
          res.status(200).send(data);
        } else {
          res.status(200).send({ message: "There is no image avaible" });
        }
      })
      .catch((err) => {
     
        res.status(404).json({ message: "something went wrong" });
      });
  }
);

module.exports = router;
