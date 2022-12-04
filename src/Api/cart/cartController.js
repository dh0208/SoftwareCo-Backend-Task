const cartService = require("./cartService");
const userModel = require("./../users/userModel")

module.exports.addCart = async(req, res) => {
  try {
    const body = req.body;
    const cart = await cartService.addCart(body);
    return res.status(200).json(cart);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports.getCartDetails = async(req, res) => {
  try {
    const id = req.params.id;
    const cart = await cartService.getCartDetails(id);
    return res.status(200).json(cart);
  } catch (error) {
    return res.status(500).json(error);
  }
};
