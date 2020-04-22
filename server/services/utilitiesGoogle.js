require("dotenv").config();

const db = require("../database/configurationSequelize");
const User = db.account;

const googleKeys = {
  clientID: process.env.GOOGLE_AUTH_CLIENT_ID,
  clientSecret: process.env.GOOGLE_AUTH_CLIENT_SECRET_KEY,
  callbackURL: "http://localhost:5000/auth/google/callback",
};
async function findUser(profile) {
  const user = await profile
 return User.findOne({ where: { email: user.emails[0].value } });
}

async function createUserGoogle (profile) {
  const user = await profile
  return User.create({
    firstname: user.name.givenName,
    lastname: user.name.familyName,
    email: user.emails[0].value,
  });
}

module.exports = { createUserGoogle, findUser, googleKeys };
