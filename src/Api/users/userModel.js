const mongoose = require("mongoose")


const userSchema = mongoose.Schema({
    first_name: {
      type: String,
    },
    last_name: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
    },
    address : {
        type:String,
    },
    contact_no : {
        type:Number,
    },
    is_active: {
      type: Boolean,
      required: true,
      default: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  });
module.exports = mongoose.model("User",userSchema)