const express = require("express");
const db = require("../database/configurationSequelize");
const hour = db.hour;
const router = express.Router();
const passport = require("passport");

router.get(
  "/dashboard/hours?",
  (req, res, next) => {
    const id = req.query.account_id;
    passport.authenticate("jwt", { session: false }, (err, user, info) => {
      if (err) console.log(err);
    });
    next();
  },
  (req, res) => {
    const id = req.query.account_id;
    console.log(id);
    const month = new Date().getMonth();

    hour
      .findAll({ where: { account_id: id, month_number: month } })
      .then((result) => {
        let hoursArr = [];
        result.forEach((element) => {
          hoursArr.push(element.dataValues);
        });
        res.status(200).send(hoursArr);
      })
      .catch((err) => {
        console.error(err), res.status(500);
      });
  }
);

module.exports = router;
