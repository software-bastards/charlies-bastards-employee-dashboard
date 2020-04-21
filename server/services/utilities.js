require("dotenv").config();

const db = require("../database/configurationSequelize");
const JwtStrategy = require("passport-jwt").Strategy;
const passportJWT = require("passport-jwt");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const account = db.account;
const ExtractJWT = passportJWT.ExtractJwt;

/**
 * @function findUserByEmail
 * @param {string} email - email passed by the client
 * @returns {obj} -user from the database
 */

function findUserByEmail(email) {
  return  account.findOne({ where: { email: email } });
  
  }

  /**
   * @function handleJWT
   *  @param {obj} payload 
   *  @returns {obj} 
   */
  
  function handleJWT (payload) {
   return  account.findOne({ where: { email: payload.email } })
  }

const jwtConfiguration = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderWithScheme("JWT"),
    secretOrKey: process.env.ACCESS_TOKEN_SECRET}



    module.exports ={jwtConfiguration,handleJWT,findUserByEmail}