if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const express = require("express");
const router = express.Router();
const db = require("../database/configurationSequelize");
const hour = db.hour;
const account = db.account;
const passport = require("passport");

router.post(
  "/inserthours",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    hour
      .create({
        hour: req.body.hour,
        month_number: req.body.month_number,
        day_number: req.body.day_number,
        account_id: req.body.account_id,
      })
      .then((response) => res.status(200).send(response.dataValues))
      .catch((error) =>
        res.status(500).send({
          message:
            "Sorry! We are currently having server difficulties. Try again later",
        })
      );
  }
);

module.exports = router;
