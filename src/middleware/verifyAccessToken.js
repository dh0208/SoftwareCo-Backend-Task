//const APIError = require("../utils/APIError");
//const { tokenDecode } = require("./../user/generate-token");
const userDao = require("./../Api/users/userDao");
const { tokenDecode } = require("./../utils/token");

module.exports.verifyAccessToken = async (req, res, next) => {
  try {
    const props = req.headers;
    if (props.authorization) {
      /* Decode token for verify user */
      const decode = await tokenDecode(props.authorization);

      if (!decode) {
        throw "Invalid Token";
      }

      let user = await userDao.checkUserExist(decode.user.id);
      /* Check user is already register or not */
      if (user) {
        req.headers["user"] = user;
        next();
      } else {
        throw "Invalid Token";
      }
    } else {
      throw "Authorization not provided!";
    }
  } catch (error) {
    next("Authorization not provided");
  }
};
