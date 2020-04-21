var GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
const utilities = require("../../services/utilitiesGoogle");
const createUserGoogle = utilities.createUserGoogle;
const findUser = utilities.findUser;
const googleKeys = utilities.googleKeys;



module.exports = (passport) => {
  passport.use(
    new GoogleStrategy(googleKeys,
      (token, refreshToken, profile, done) => { 
       
          findUser(profile).then( (currentUser)=> 
        {if (currentUser) {
          console.log(`user: ${JSON.stringify(currentUser.dataValues)}`);
          return done(null, {
            user: currentUser.dataValues,
            token: token,
          });
        } else {
          createUserGoogle(profile).then((newUser) => {
            console.log(`new user was created:${newUser.firstname}`);
            done(null, {
              user: newUser.dataValues,
              token: token,
            })
          })}}).catch((err) => console.log(err));


    })
  )
}

