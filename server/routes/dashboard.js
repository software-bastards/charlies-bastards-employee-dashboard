const express = require("express");
const authRouter = express.Router();
const passport = require("passport");

authRouter.get("/dashboard",
  passport.authenticate("jwt", { session: false }),
  function (req, res) {
    res.send(req.user);
  }
);

module.exports = authRouter;
