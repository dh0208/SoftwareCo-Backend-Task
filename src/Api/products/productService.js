const productDao = require("./productDao");

module.exports.addProduct = async (body) => {
  try {
    const result = await productDao.addProduct(body);
    return result;
  } catch (error) {
    return error;
  }
};

module.exports.getProduct = async (props) => {
  try {
    const result = await productDao.getProduct(props);
    return result;
  } catch (error) {
    return error;
  }
};
