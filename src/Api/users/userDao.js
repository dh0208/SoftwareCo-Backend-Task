const User = require("./userModel");
const bcrypt = require("bcrypt");

module.exports.userSignup = async (props) => {
  try {
    let user = new User({
      first_name: props.first_name,
      last_name: props.last_name,
      email: props.email,
      address: props.address,
      contact_no: props.contact_no,
      password: props.password,
    });
    // const salt = await bcrypt.genSalt(10);
    // user.password = await bcrypt.hash(props.password, salt);
    const result = await user.save();
    return result;
  } catch (error) {
    return error;
  }
};

module.exports.userLogin = async (props) => {
  try {
    const result = await User.findOne({
      email: props.email,
      password: props.password,
    });
    return result;
  } catch (error) {
    return error;
  }
};

/**check if user is exist or not */
module.exports.userAlreadyExist = async (email) => {
  try {
    const result = await User.findOne({
      email :email,
    });
    return result;
  } catch (error) {
    return error;
  }
};

module.exports.getUserDetails = async (props) => {
  try {
    const result = await User.find()
    return result;
  } catch (error) {
    return error;
  }
};

module.exports.checkUserExist = async (id) => {
  try {
    const result = await User.findOne({
      _id: id,
    });
    return result;
  } catch (error) {
    throw error;
  }
};