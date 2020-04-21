const express = require("express");
const authrouter = express.Router();
const passport = require("passport");
const { user } = require("./user");

 /* authrouter.get(
  "/auth",
  passport.authenticate("jwt", { session: false },
  (req, res) => {
    res.status(200);
  })
);  */
authrouter.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

authrouter.get(
  "/auth/google/callback",
  passport.authenticate("google", { session: false }),

  (req, res,next) => {
    res.redirect("http://localhost:3000/authenticated"), next();
  },
  (req, res ) => {
    res.json({
      lastname: user.socket.parser.incoming.user.user.firstname,
      firstname: user.socket.parser.incoming.user.user.lastname,
      email: user.socket.parser.incoming.user.user.email,
      token: user.socket.parser.incoming.user.token,
    });

  }
);

/* authrouter.get(
  '/auth/google/authenticating',(req,res)=>{
res.json({
  lastname:user.firstname,
  firstname:user.lastname,
  email:user.email,
  token:user.token
  }) 
  }
) */
module.exports = authrouter;
