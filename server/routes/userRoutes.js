const {
  googleSignIn,
  signin,
  signup,
} = require("../controller/userController");

const express = require("express");
const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.post("/googleSignIn", googleSignIn);

module.exports = router;
