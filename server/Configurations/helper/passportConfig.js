require('dotenv').config()

const JwtStrategy = require("passport-jwt").Strategy;
const passportJWT = require ('passport-jwt');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const db = require ("../../database/configurationSequelize")
const account = db.account
const ExtractJwt= passportJWT.ExtractJwt

module.exports = function(passport) {
  passport.use(
    new LocalStrategy({usernameField: 'email'},  (email, password, done) => {
       
      account.findOne({where: {email: email}})
      .then( (user) => {
               if (!user) {
          return done(null, false, { message: 'This e-mail is not registered' });
        }
      
        bcrypt.compare(password, user.password, (err, isMatch) => {
          if(err) throw error            
          if (isMatch) {
            return done(null, user.dataValues);
           } else {
             
             return done(null, false, { message: 'Password incorrect' });
           } 
         });
        })

        .catch( err=>console.log(err))
    }
        
        ))
       
                      
      passport.use( 
            new JwtStrategy(
                { 
                    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
                    secretOrKey: process.env.ACCESS_TOKEN_SECRET

            },
            (playload,done)=>{
              account.findOne({where:{email:playload.email}})
                .then( user=> done(null, user.dataValues))
                .catch(err=> console.error(err)) 
            })
          ) 
   
    }