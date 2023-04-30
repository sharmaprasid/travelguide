const blogModal = require("../models/blogModel");
const mongoose = require("mongoose");

const createblog = async (req, res) => {
  const blog = req.body;
  const newblog = new blogModal({
    ...blog,
    creator: req.userId,
    createdAt: new Date().toISOString(),
  });

  try {
    await newblog.save();
    res.status(201).json(newblog);
  } catch (error) {
    res.status(404).json({ message: "Something went wrong" });
  }
};

const getblogs = async (req, res) => {
  const { page } = req.query;
  try {
    const limit = 6;
    const startIndex = (Number(page) - 1) * limit;
    const total = await blogModal.countDocuments({});
    const blogs = await blogModal.find().limit(limit).skip(startIndex);
    res.json({
      data: blogs,
      currentPage: Number(page),
      totalblogs: total,
      numberOfPages: Math.ceil(total / limit),
    });
  } catch (error) {
    res.status(404).json({ message: "Something went wrong" });
  }
};

const getblog = async (req, res) => {
  const { id } = req.params;
  try {
    const blog = await blogModal.findById(id);
    res.status(200).json(blog);
  } catch (error) {
    res.status(404).json({ message: "Something went wrong" });
  }
};

const getblogsByUser = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ message: "User doesn't exist" });
  }
  const userblogs = await blogModal.find({ creator: id });
  res.status(200).json(userblogs);
};

const deleteblog = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ message: `No blog exist with id: ${id}` });
    }
    await blogModal.findByIdAndRemove(id);
    res.json({ message: "blog deleted successfully" });
  } catch (error) {
    res.status(404).json({ message: "Something went wrong" });
  }
};

const updateblog = async (req, res) => {
  const { id } = req.params;
  const { title, description, creator, imageFile, tags } = req.body;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ message: `No blog exist with id: ${id}` });
    }

    const updatedblog = {
      creator,
      title,
      description,
      tags,
      imageFile,
      _id: id,
    };
    await blogModal.findByIdAndUpdate(id, updatedblog, { new: true });
    res.json(updatedblog);
  } catch (error) {
    res.status(404).json({ message: "Something went wrong" });
  }
};

const getblogsBySearch = async (req, res) => {
  const { searchQuery } = req.query;
  try {
    const title = new RegExp(searchQuery, "i");
    const blogs = await blogModal.find({ title });
    res.json(blogs);
  } catch (error) {
    res.status(404).json({ message: "Something went wrong" });
  }
};

const getblogsByTag = async (req, res) => {
  const { tag } = req.params;
  try {
    const blogs = await blogModal.find({ tags: { $in: tag } });
    res.json(blogs);
  } catch (error) {
    res.status(404).json({ message: "Something went wrong" });
  }
};

const getRelatedblogs = async (req, res) => {
  const tags = req.body;
  try {
    const blogs = await blogModal.find({ tags: { $in: tags } });
    res.json(blogs);
  } catch (error) {
    res.status(404).json({ message: "Something went wrong" });
  }
};

const likeblog = async (req, res) => {
  const { id } = req.params;
  try {
    if (!req.userId) {
      return res.json({ message: "User is not authenticated" });
    }

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ message: `No blog exist with id: ${id}` });
    }

    const blog = await blogModal.findById(id);

    const index = blog.likes.findIndex((id) => id === String(req.userId));

    if (index === -1) {
      blog.likes.push(req.userId);
    } else {
      blog.likes = blog.likes.filter((id) => id !== String(req.userId));
    }

    const updatedblog = await blogModal.findByIdAndUpdate(id, blog, {
      new: true,
    });

    res.status(200).json(updatedblog);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
module.exports = {
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
};
