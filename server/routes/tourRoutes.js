const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth.js");

const {
  createTour,
  deleteTour,
  getRelatedTours,
  getTour,
  getTours,
  getToursBySearch,
  getToursByTag,
  getToursByUser,
  likeTour,
  updateTour,
} = require("../controller/tourController.js");

router.get("/search", getToursBySearch);
router.get("/tag/:tag", getToursByTag);
router.post("/relatedTours", getRelatedTours);
router.get("/", getTours);
router.get("/:id", getTour);
router.post("/", auth, createTour);
router.delete("/:id", auth, deleteTour);
router.patch("/:id", auth, updateTour);
router.get("/userTours/:id", auth, getToursByUser);
router.patch("/like/:id", auth, likeTour);

module.exports = router;
