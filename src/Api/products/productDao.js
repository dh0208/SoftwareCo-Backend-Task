const productModel = require("./productModel");
const userModel = require("./../users/userModel");

module.exports.addProduct = async (props) => {
  try {
    let product = new productModel({
      product_name: props.product_name,
      price: props.price,
      stock_qty: props.stock_qty,
    });
    const result = await product.save();
    return result;
  } catch (error) {
    return error;
  }
};

module.exports.getProduct = async (props) => {
  try {
    let user = await userModel.find({ user: props });
    if (!user) {
      let message = "User Data Not Match";
      return message;
    } else {
      const result = await productModel.find();
      return result;
    }
  } catch (error) {
    return error;
  }
};
