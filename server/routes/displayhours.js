const express = require("express");
const router = express.Router();
const db = require("../database/configurationSequelize");
const hour = db.hour;
const passport = require("passport");

router.post(
  "/displayhours",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const id = req.body.id;

    hour
      .findAll({ where: { account_id: id } })
      .then((response) => {
        let hourList = response.map((element) => {
          return element.dataValues;
        });

        res.send(hourList);
      })
      .catch((err) => console.log(err));
  }
);

module.exports = router;
