const router = require("express").Router();
const userController = require("./userController")

/** user signup */
router.post("/signUp",userController.userSignup)

/** user Login */
router.post("/login",userController.userLogin)

router.get("/getUsers",userController.getUserDetails)


module.exports = router;