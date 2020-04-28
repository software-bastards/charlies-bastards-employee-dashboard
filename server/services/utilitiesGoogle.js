require("dotenv").config();

const db = require("../database/configurationSequelize");
const User = db.account;

const googleKeys = {
  clientID: process.env.GOOGLE_AUTH_CLIENT_ID,
  clientSecret: process.env.GOOGLE_AUTH_CLIENT_SECRET_KEY,
  callbackURL: "http://localhost:5000/auth/google/callback",
};

/**
 * @function findUser - search on database if the e-mail exists 
 * @param {*} profile -the profile user’s profile
 */
async function findUser(profile) {
  const user = await profile
 return User.findOne({ where: { email: user.emails[0].value } });
}

/**
 * @function createUserGoogle - creates a new user and insert the data on the account table
 * @param {*} profile -the profile user’s profile
 */

async function createUserGoogle (profile) {
  const user = await profile
  return User.create({
    firstname: user.name.givenName,
    lastname: user.name.familyName,
    email: user.emails[0].value,
  });
}

module.exports = { createUserGoogle, findUser, googleKeys };
