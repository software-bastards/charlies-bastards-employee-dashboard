const express = require("express");
const authrouter = express.Router();
const passport = require("passport");

/* authrouter.get(
  "/auth",
  passport.authenticate("jwt", { session: false },
  (req, res) => {
    res.status(200);
  })
); */
authrouter.get(
  "/auth/google",
  passport.authenticate("google", {
    
    scope: ['profile','email']
  })
);

authrouter.get(
  "/auth/google/callback",
  passport.authenticate("google",{session:false}),
  (req, res) => {
  res.redirect('http://localhost:3000/dashboard')
  }
);

module.exports = authrouter;
