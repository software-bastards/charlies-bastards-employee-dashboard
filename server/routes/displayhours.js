const express = require("express");
const router = express.Router();
const db = require("../database/configurationSequelize");
const hour = db.hour;
const passport = require("passport");

router.get(
  "/displayhours",
  (req, res, next) => {
    passport.authenticate("jwt", { session: false }, (err, user, info) => {
      if (err) console.log(err);
    });
    next();
  },
  (req, res) => {
    const id = req.query.id;
    const month = req.query.month;
    hour
      .findAll({ where: { account_id: id, month_number: month } })
      .then(async (user) => {
        if (user.length > 0) {
          let data = [];
          await user.forEach((e) => {
            data.push({
              hour: e.dataValues.hour_logged,
              month: e.dataValues.month_number,
              day: e.dataValues.day_number,
            });
          });
          res.status(200).send(data);
        } else {
          res.status(200).send({ message: "There is no image avaible" });
        }
      })
      .catch((err) => {
        console.log(err);
        res.status(404).json({ message: "something went wrong" });
      });
  }
);

module.exports = router;
