const router = require("express").Router();
const productController = require("./productController");
const { verifyAccessToken } = require("./../../middleware/verifyAccessToken");

/** Add Product */
router.post("/addProduct", 
// verifyAccessToken,
 productController.addProduct);

/** Get Product */
router.get(
  "/getProduct/:id",
  // verifyAccessToken,
  productController.getProduct
);

module.exports = router;
