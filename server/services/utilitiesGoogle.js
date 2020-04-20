require("dotenv").config();

const db = require("../database/configurationSequelize");
const User = db.account;

const googleKeys = {
  clientID: process.env.GOOGLE_AUTH_CLIENT_ID,
  clientSecret: process.env.GOOGLE_AUTH_CLIENT_SECRET_KEY,
  callbackURL: "http://localhost:5000/auth/google/callback",
};
function findUser(profile) {
 return User.findOne({ where: { email: profile.emails[0].value } });
}

function createUserGoogle(profile) {
  return User.create({
    firstname: profile.name.givenName,
    lastname: profile.name.familyName,
    email: profile.emails[0].value,
  });
}

module.exports = { createUserGoogle, findUser, googleKeys };
