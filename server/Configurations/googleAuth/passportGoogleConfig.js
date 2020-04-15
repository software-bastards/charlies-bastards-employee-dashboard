require("dotenv").config();
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const db = require("../../database/configurationSequelize");
const User = db.account;
module.exports = (passport) => {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_AUTH_CLIENT_ID,
        clientSecret: process.env.GOOGLE_AUTH_CLIENT_SECRET_KEY,
        callbackURL: "/auth/google/callback",
      },

      (token, refreshToken, profile, done) => {
     
         User.findOne({ where:{email: profile.emails[0].value} }).then((currentUser) => {
          if (currentUser) {
            console.log(`user is: ${currentUser}`);
            done(null, currentUser);
          } else {
            User.create({
              firstname: profile.name.givenName,
              lastname: profile.name.familyName,
              email: profile.emails[0].value,
            }).then((newUser) => {
              console.log(`new user was created:${newUser.firstname}`);
              done(null, newUser);
            });
          }
        });  
      }
    )
  );
};
