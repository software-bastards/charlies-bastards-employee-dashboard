const express = require("express");
const authrouter = express.Router();
const passport = require("passport");

authrouter.get(
  "/auth/callback",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.status(200).send({ message: "You're logged in", user: req.user });
  }
);
authrouter.get(
  "/auth/google/callback",
  passport.authenticate("google", (req, res) => {
    res.redirect("/dashboard");
  })
);

module.exports = authrouter;
