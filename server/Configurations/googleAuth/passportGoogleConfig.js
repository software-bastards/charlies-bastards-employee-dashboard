require('dotenv').config()
const GoogleStrategy = require('passport-google-oauth20');

module.exports = (passport) => {
   passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_AUTH_CLIENT_ID, 
    clientSecret: process.env.GOOGLE_AUTH_CLIENT_SECRET_KEY,
    callbackURL:"/auth/google/callback"  
},
    (token, refreshToken, profile, done) => {
        console.log(chalk.blue(JSON.stringify(profile)))
    return done(null, {
    user: {...profile},
    token: token
    });
    }));
   };

   user={}
   token={}