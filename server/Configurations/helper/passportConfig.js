require("dotenv").config();
//Dependecies
const JwtStrategy = require("passport-jwt").Strategy;
const passportJWT = require("passport-jwt");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");


//utilities
const  utilities =require ('../../services/utilities')
const  handleJSW = utilities.handleJSW
const  findUserByEmail =utilities.findUserByEmail
const  jwsConfiguration =utilities.jwsConfiguration


module.exports = function (passport) {
  passport.use(
    new LocalStrategy({ usernameField: "email" },  (email, password, done) => {
      findUserByEmail(email)
        .then((user) => {
          !user &&
            done(null, false, {
              message: "This e-mail is not registered",
            });
          bcrypt.compare(password, user.password, (err, isMatch) => {
            isMatch && done(null, user.dataValues);
            done(null, false, { message: "Password incorrect" });
            }
          );
        })
        .catch((err) => console.log(err));
    })
  );

  


  passport.use(
    new JwtStrategy( jwsConfiguration,
      (playload, done) => {
        handleJSW(playload)
        .then((user) => done(null, user.dataValues))
        .catch((err) => console.error(err));
      }
    )
  );
};
