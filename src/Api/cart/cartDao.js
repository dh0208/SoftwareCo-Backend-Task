const cartModel = require("./cartModel");
const userModel = require("./../users/userModel");
const productModel = require("./../products/productModel");

module.exports.addCart = async (props) => {
  try {
    let cartItem = new cartModel({
      product: props.product,
    });
    let data = await cartItem.save();
    return data;
  } catch (error) {
    return error;
  }
};

module.exports.getCartDetails = async (props) => {
  try {
    let data = await cartModel.find({ user: props }).populate("product").select("-user -_id");

    return data;
  } catch (error) {
    return error;
  }
};
