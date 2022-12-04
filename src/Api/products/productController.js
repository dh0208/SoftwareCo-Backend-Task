const productService = require("./productService");

module.exports.addProduct = async (req, res) => {
  try {
    // const userDetails = req.headers["user"];
    let body = req.body;
    const result = await productService.addProduct(body);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports.getProduct = async (req, res) => {
  try {
    let body = req.params.id;
    const result = await productService.getProduct(body);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json(error);
  }
};
