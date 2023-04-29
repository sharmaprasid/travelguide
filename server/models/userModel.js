const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
  },

  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: false,
  },
  googleID: {
    type: String,
    required: false,
  },
});
const UserModel = mongoose.model("UserModel", userSchema);
module.exports = UserModel;
