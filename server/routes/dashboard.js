const express = require("express");
const authRouter = express.Router();
const passport = require("passport");

authRouter.get(
  "/dashboard",
  passport.authenticate("jwt", { session: false }),
  function (req, res) {
    res.send(req.user);
  }
);
authRouter.get(
  "/dashboard?:account_id",
  (req, res, next) => {
    const id = req.query.account_id;
    passport.authenticate("jwt", { session: false }, (err, user, info) => {
      if (err) console.log(err);
    });
    next();
  },
  (req, res) => {
    const id = req.query.account_id;
    const month = new Date().getMonth();
    hour
      .findAll({ where: { account_id: id, month_number: month } })
      .then((result) => res.status(200).send(result))
      .catch((err) => {
        console.error(err), res.status(500);
      });
  }
);
module.exports = authRouter;
