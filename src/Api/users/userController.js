const userService = require("./userServices");

module.exports.userSignup = async (req, res, next) => {
  try {
    const body = req.body;
    const saveUser = await userService.userSignup(body);
    return res.status(200).json(saveUser);
  } catch (error) {
    return res.status(500).json(error);
  }
};

/** User Login */
module.exports.userLogin = async (req, res, next) => {
  try {
    const body = req.body;
    const userResult = await userService.userLogin(body);
    return res.status(200).json(userResult);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports.getUserDetails = async (req, res, next) => {
  try {
    const userResult = await userService.getUserDetails();
    return res.status(200).json(userResult);
  } catch (error) {
    return res.status(500).json(error);
  }
};

