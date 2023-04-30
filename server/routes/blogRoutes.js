const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth.js");

const {
  createblog,
  deleteblog,
  getRelatedblogs,
  getblog,
  getblogs,
  getblogsBySearch,
  getblogsByTag,
  getblogsByUser,
  likeblog,
  updateblog,
} = require("../controller/blogController.js");

router.get("/search", getblogsBySearch);
router.get("/tag/:tag", getblogsByTag);
router.post("/relatedblogs", getRelatedblogs);
router.get("/", getblogs);
router.get("/:id", getblog);
router.post("/", auth, createblog);
router.delete("/:id", auth, deleteblog);
router.patch("/:id", auth, updateblog);
router.get("/userblogs/:id", auth, getblogsByUser);
router.patch("/like/:id", auth, likeblog);

module.exports = router;
