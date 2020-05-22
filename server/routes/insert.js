if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const express = require("express");
const router = express.Router();
const db = require("../database/configurationSequelize");
const hour = db.hour;
const account = db.account;
const passport = require("passport");

//Helper functions
const { isNotNumber } = require("../Configurations/helper");

router.post(
  "/inserthours",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
   
    //check if entered value is number
    if (isNotNumber(req.body.mounth_number)) {
      res.status(400).send({ message: "Oops, month should be a number!" });
    } else {
      if (isNotNumber(req.body.hour)) {
        res.status(400).send({ message: "Oops, hour should be a number!" });
      } else {
        if (isNotNumber(req.body.day_number)) {
          res.status(400).send({ message: "Oops, day should be a number!" });
        } else {
          hour
            .create({
              hour_logged: req.body.hour,
              month_number: req.body.mounth_number,
              day_number: req.body.day_number,
              account_id: req.body.account_id,
            })
            .then((response) =>
              res
                .status(200)
                .send({ message: "Hooray, you inserted your hours!" })
            )
            .catch((error) =>
              res.status(500).send({
                message:
                  "Sorry! We are currently having server difficulties. Try again later",
              })
            );
        }
      }
    }
  }
);
module.exports = router;
