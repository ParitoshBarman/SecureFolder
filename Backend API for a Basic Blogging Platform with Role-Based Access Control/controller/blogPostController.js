const BlogPost = require('../models/blogPostModel');
const User = require('../models/userModel');

const createBlogPost = async (req, res) => {
    try {
        const { title, content } = req.body;
        const user = req.user;

        if (user.role !== 'author' && user.role !== 'admin') {
            return res.status(403).json({ error: 'Only authors or admins can create posts' });
        }

        const post = await BlogPost.create({
            title,
            content,
            author: user.id
        });

        res.status(201).json({ message: 'Blog post created', post });
    } catch (error) {
        res.status(400).json(error);
    }
};


const getAllBlogPosts = async (req, res) => {
    try {
        const posts = await BlogPost.find().populate('author', 'name email role');
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json(error);
    }
};

const getBlogPostById = async (req, res) => {
    try {
        const post = await BlogPost.findById(req.params.id).populate('author', 'name email role');
        if (!post) {
            return res.status(404).json({ error: 'Post not found' });
        }
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json(error);
    }
};

const updateBlogPost = async (req, res) => {
    try {
        const user = req.user;
        const post = await BlogPost.findById(req.params.id);

        if (!post) {
            return res.status(404).json({ error: 'Post not found' });
        }

        if (user.role !== 'admin' && post.author.toString() !== user.id) {
            return res.status(403).json({ error: 'Only the author or an admin can update this post' });
        }

        const updatedPost = await BlogPost.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );

        res.status(200).json({ message: 'Post updated', post: updatedPost });
    } catch (error) {
        res.status(500).json(error);
    }
};

const deleteBlogPost = async (req, res) => {
    try {
        const user = req.user;
        if (user.role !== 'admin') {
            return res.status(403).json({ error: 'Only admin can delete posts' });
        }

        const post = await BlogPost.findByIdAndDelete(req.params.id);
        if (!post) {
            return res.status(404).json({ error: 'Post not found' });
        }

        res.status(200).json({ message: 'Post deleted successfully' });
    } catch (error) {
        res.status(500).json(error);
    }
};

module.exports = { createBlogPost, getAllBlogPosts, getBlogPostById, updateBlogPost, deleteBlogPost
};
