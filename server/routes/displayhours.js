if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const express = require("express");
const router = express.Router();
const db = require("../database/configurationSequelize");
const hour = db.hour;
/* const account = db.account; */
router.post("/displayhours", function (req, res) {
  console.log(req.body.id);
  const id = req.body.id;

  hour.findAll({ where: { account_id: id } }).then((response) => {
    let hourList = response.map((element) => {
      return element.dataValues;
    });

    res.send(hourList);
  }).catch;
});

module.exports = router;
