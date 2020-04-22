if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const express = require("express");
const router = express.Router();
const db = require("../database/configurationSequelize");
const hour = db.hour;
const account = db.account;

router.post("/inserthours", (req, res, next) => {
  hour
    .create({
      hour: req.body.hour,
      mounth_number: req.body.mounth_number,
      day_number: req.body.day_number,
      account_id: req.body.account_id,
    })
    .then((response) => console.log(response))
    .catch((error) => console.log(error));
});

module.exports = router;
