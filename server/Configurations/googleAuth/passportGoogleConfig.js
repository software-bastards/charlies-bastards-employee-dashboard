require('dotenv').config()
const GoogleStrategy = require('passport-google-oauth').OAuthStrategy;

module.exports = (passport) => {
   passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_AUTH_CLIENT_ID, 
    clientSecret: process.env.GOOGLE_AUTH_CLIENT_SECRET_KEY,
      
},
    (token, refreshToken, profile, done) => {
    return done(null, {
    profile: profile,
    token: token
    });
    }));
   };