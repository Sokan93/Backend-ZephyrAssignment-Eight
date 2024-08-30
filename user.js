const mongoose = require("mongoose");
const schema = mongoose.Schema

const userSchema = new mongoose.Schema ({
  name: {type: String},
  email: {type: String},
  age: {type: Number},
});

const User = new mongoose.model("User", userSchema)

module.exports = "User";