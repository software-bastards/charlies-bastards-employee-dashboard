const express = require("express");
const router = express.Router();
const db = require("../database/configurationSequelize");
const hour = db.hour;
const passport = require("passport");

router.post(
  "/myhours",
  (req, res, next) => {
    passport.authenticate("jwt", { session: false }, (err, user, infor) => {
      if (err) console.log(err);
    });
    next();
  },
  (req, res) => {
     const id = req.body.data.account_id;
    hour
      .findAll({ where: { account_id: id } })
      .then((result) => res.status(200).send(result))
      .catch((err) => {
        console.error(err), res.status(500);
      });
  }
);

router.put(
  "/myhours/edit",
  (req, res, next) => {
    passport.authenticate("jwt", { session: false }, (err, user, infor) => {
      if (err) console.log(err);
    });
    next();
  },
  (req, res) => {
    console.log("ok");
    const idBody = req.body.data.account_id;
    const monthBody = req.body.data.month;
    const dayBody = req.body.data.day;
    const hourBody = req.body.data.hour;

    hour
      .update(
        { hour_logged: hourBody },
        {
          returning: true,
          where: {
            account_id: idBody,
            month_number: monthBody,
            day_number: dayBody,
          },
        }
      )
      .then((results) =>
       hour.findAll({where:{ account_id: idBody, month_number: monthBody,day_number:dayBody}})
       .then(user=> 
        {
        user.length>0? res.status(200).send({
          message: "Your hours were updated"
        }): res.status(404).send({
          message: "You didn't work this day"
        })}
        )
       
      ).catch((err) => {
        console.error(err),
          res.status(500).json({ message: "Something went wrong" });
      });
  }
);

module.exports = router;
