const express = require("express");
const router = express.Router();
const db = require("../database/configurationSequelize");
const upload = db.upload;
const path = require("path");

router.post("/upload", async (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: "No file uploaded" });
  }

  const file = req.files.file; 
    const userId=req.body.file[0]
    const month=req.body.file[1]
    await file.mv(path.join(__dirname , '../../client/public/uploads/', file.name), (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }
    
console.log(file+userId+month)
     upload.create({
      upload_name: file.name,
      upload_image:  `/uploads/${file.name}`,
      month:month,
      account_id:userId
    });
     res.status(200).json({fileName:file.name, filePath:`/uploads/${file.name}`, message:"Your image was uploaded"})} ); 
  } ); 



router.post("/upload/images", (req, res) => {
  const userId =req.body.data.userId
  const month =req.body.data.month
  upload
    .findAll({ where: { account_id: userId, month:month } })
    .then(async (user) => {
      if(user.length>0){
      let data =[]
      await user.forEach(e=>{
      data.push({ fileName: e.dataValues.upload_name,
      filePath: `/uploads/${e.dataValues.upload_name}`})
        })
         res.status(200).send(data)}
         else{
           res.status(200).send({message:"There is no image avaible"})
         }
       }
    ).catch( err => console.log(err)/* res.status(404).json({message:"something went wrong"}) */)
});

module.exports = router;
