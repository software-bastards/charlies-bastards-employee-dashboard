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

<<<<<<< HEAD
      (token, refreshToken, profile, done) => {
        User.findOne({ where: { email: profile.emails[0].value } })
          .then((currentUser) => {
            if (currentUser) {
               console.log(JSON.stringify(currentUser.dataValues));
               findUserOf(currentUser.dataValues)
               return done(null, {
                user: JSON.stringify(currentUser.dataValues),
                token: token,
              });
            } else {
              User.create({
                firstname: profile.name.givenName,
                lastname: profile.name.familyName,
                email: profile.emails[0].value,
              }).then((newUser) => {
                console.log(`new user was created:${newUser.firstname}`);
                done(null, {
                  user: currentUser.dataValues,
                  token: token,
                });
              });
            }
          })
          .catch((err) => console.log(err));
      }
    )
  );
};
=======
>>>>>>> implementing_style
