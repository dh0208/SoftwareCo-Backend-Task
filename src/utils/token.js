// const userDao = require("./../Api/Dao/userDao")
const jwt = require("jsonwebtoken");
let secret = "keyboard cat";
module.exports.tokenGenerator = async (payload) => {
  return await jwt.sign(payload, secret, {
    expiresIn: "24h", // expires in 24 hours
  });
};

module.exports.tokenDecode = async (token) => {
  return await jwt.verify(token, secret);
};
