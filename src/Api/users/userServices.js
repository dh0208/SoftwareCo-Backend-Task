const userDao = require("./userDao");
const {tokenGenerator} = require("../../utils/token");
let message;

module.exports.userSignup = async (body) => {
  try {
    const checkUser = await userDao.userAlreadyExist(body.email);
    if (checkUser) {
      message = "user already exist";
      return message;
    }
    const result = await userDao.userSignup(body);
    return result;
  } catch (error) {
    next(error);
  }
};

module.exports.userLogin = async (body) => {
  try {
    const result = await userDao.userLogin(body);
    if (!result) {
      const error = {message : "user not exist",
      status:500}
      return error;
    }
    const token = await tokenGenerator({ id: result._id });
    return { result, token };
  } catch (error) {
    next(error);
  }
};

module.exports.getUserDetails = async (req, res, next) => {
  try {
    const userResult = await userDao.getUserDetails();
    return userResult;
  } catch (error) {
    return error;
  }
};
