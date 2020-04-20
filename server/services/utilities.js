require("dotenv").config();

const db = require("../database/configurationSequelize");
const JwtStrategy = require("passport-jwt").Strategy;
const passportJWT = require("passport-jwt");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const account = db.account;
const ExtractJwt = passportJWT.ExtractJwt;

/**
 * @function findUserByEmail
 * @param {string} email - email passed by the client
 * @returns {obj} -user from the database
 */

function findUserByEmail(email) {
  return  account.findOne({ where: { email: email } });
  
  }

  /**
   * @function handleJSW
   *  @param {obj} playload 
   *  @returns {obj} 
   */
  
  function handleJSW (playload) {
   return  account.findOne({ where: { email: playload.email } })
  }

const jwsConfiguration = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.ACCESS_TOKEN_SECRET}



    module.exports ={jwsConfiguration,handleJSW,findUserByEmail}