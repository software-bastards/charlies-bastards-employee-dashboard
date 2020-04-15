require("dotenv").config();
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const db = require("../../database/configurationSequelize");
/* const userData = require ('../../routes/user')
 */const User = db.account;
module.exports = (passport) => {
  /* passport.serializeUser(function(user, done) {
    done(null, user);
  });
  
  passport.deserializeUser(function(user, done) {
    done(null, user);
  }); */
  
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_AUTH_CLIENT_ID,
        clientSecret: process.env.GOOGLE_AUTH_CLIENT_SECRET_KEY,
        callbackURL: "http://localhost:5000/auth/google/callback",
      },

      (token, refreshToken, profile, done) => {
        console.log(JSON.stringify(profile))
        User.findOne({ where:{email: profile.emails[0].value} }).then((currentUser) => {
           if (currentUser) { 
            console.log(`user: ${JSON.stringify(currentUser.dataValues)}`);            
           return  done(null,{
             user:currentUser.dataValues, 
             token:token});
            } else {
            User.create({
              firstname: profile.name.givenName,
              lastname: profile.name.familyName,
              email: profile.emails[0].value,
            }).then((newUser) => {
              console.log(`new user was created:${newUser.firstname}`);
              done(null,{
                user:currentUser.dataValues, 
                token:token});
            })}; 
          }).catch(err=>console.log(err))
        
          
      }
    )
  )}
  