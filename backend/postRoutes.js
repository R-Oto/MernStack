const express = require('express');
const Post = require('./postModel.js'); 
const postRoutes = express.Router();

postRoutes.route("/posts").get(async (req, res) => {
    try {
        const data = await Post.find();
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
});

postRoutes.route("/posts/:id").get(async (req, res) => {
    try {
        const data = await Post.findById(req.params.id);
        if (data) {
            res.json(data);
        } else {
            res.status(404).json({ message: "Data was not found :(" });
        }
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
});

postRoutes.route("/posts").post(async (req, res) => {
    try {
        const post = new Post(req.body);
        const data = await post.save();
        res.status(201).json(data);
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
});

postRoutes.route("/posts/:id").put(async (req, res) => {
    try {
        const result = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (result) {
            res.json({ message: "Post updated successfully", data: result });
        } else {
            res.status(404).json({ message: "Post not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
});

postRoutes.route("/posts/:id").delete(async (req, res) => {
    try {
        const result = await Post.findByIdAndDelete(req.params.id);
        if (result) {
            res.json({ message: "Post deleted successfully" });
        } else {
            res.status(404).json({ message: "Post not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
});

module.exports = postRoutes;
