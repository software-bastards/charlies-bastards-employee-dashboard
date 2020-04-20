if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const express = require("express");
const router = express.Router();
const db = require("../database/configurationSequelize");
const hour = db.hour;
const account = db.account;
router.post("/displayhours", function (req, res, next) {
  const id = req.body.id;

  hour
    .findAll({ where: { account_id: id } })
    .then((response) => console.log(response))
    .catch();
});

module.exports = router;
