const jwt = require("jsonwebtoken");
const UserModel = require("../models/userModel");
const bcrypt = require("bcryptjs");

const signIn = async (req, res) => {
  const { email, password } = req.body;
  try {
    const oldUser = await UserModel.findOne({ email });
    if (!oldUser) {
      return res.status(404).json({ msg: "User doesn't exist" });
    }
    const passwordMatch = await bcrypt.compare(password, oldUser.password);
    if (!passwordMatch) {
      return res.status(400).json({ msg: "Wrong password" });
    }
    const token = jwt.sign(
      { email: oldUser.email, id: oldUser._id },
      process.env.SECRETE,
      { expiresIn: "1h" }
    );
    res.status(200).json({ result: oldUser, token });
  } catch (error) {
    res.status(500).json({ msg: "Something went wrong" });
    console.log(error);
  }
};
const signUp = async (req, res) => {
  const { email, password, firstName, lastName } = req.body;
  try {
    const oldUser = await UserModel.findOne({ email });
    if (oldUser) {
      return res.status(400).json({ msg: "User already exist" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await UserModel.create({
      email,
      password: hashedPassword,
      name: { firstName: firstName, lastName: lastName },
    });
    const token = jwt.sign(
      { email: user.email, id: user._id },
      process.env.SECRETE,
      { expiresIn: "1h" }
    );
    res.status(200).json({ user, token });
  } catch (err) {
    res.status(500).json({ msg: "error while creating user" });
  }
};

module.exports = { signIn, signUp };
