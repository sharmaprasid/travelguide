const mongoose = require("mongoose");

const blogSchema = mongoose.Schema({
  title: String,
  description: String,
  name: String,
  creator: String,
  tags: [String],
  imageFile: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
  likes: {
    type: [String],
    default: [],
  },
});

const blogModal = mongoose.model("blog", blogSchema);

module.exports = blogModal;
