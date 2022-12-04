const cartDao = require("./cartDao");

module.exports.addCart = async(body) => {
  try {
    const cart = await cartDao.addCart(body);
    return cart;
  } catch (error) {
    return error;
  }
};

module.exports.getCartDetails = async(id) => {
  try {
    const cart = await cartDao.getCartDetails(id);
    return cart;
  } catch (error) {
    return error;
  }
};