const express = require("express");
const Post = require("../models/post");

const router = express.Router();

// Create a new post
router.post("/", async (req, res) => {
  try {
    const post = new Post({
      userId: req.body.userId,
      content: req.body.content,
    });
    await post.save();
    res.status(201).json(post);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all posts
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
