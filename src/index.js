const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userroutes = require("./Api/users/userRoutes");
const productroutes  = require("./Api/products/productRoutes")
const cartroutes = require("./Api/cart/cartRoutes")

const app = express();

app.use(cors());


mongoose
  .connect("mongodb://localhost:27017/Ecommerce", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("CONNECTED TO DATABASE");
  });

app.use(express.json());
app.use("/api", userroutes, cors());
app.use("/api", productroutes, cors());
app.use("/api", cartroutes, cors());



// listening port
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`app is live at ${PORT}`);
});
