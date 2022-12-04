const router = require("express").Router();
const cartController = require("./cartController");

router.post("/addCart", cartController.addCart);

router.get("/getCart/:id", cartController.getCartDetails);


module.exports = router;
