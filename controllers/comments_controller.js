const CommentModel = require('../models/comments_model');
const PostModel = require("../models/posts_model");

const createComment = async (req, res) => {
    const { postId, sender, content } = req.body;
  
    try {
      const post = await PostModel.findById(postId);
      if (!post) {
        return res.status(404).send("Post not found");
      }
  
      const comment = await CommentModel.create({
        post: postId,
        sender,
        content,
      });
  
      res.status(201).send(comment);
    } catch (error) {
      res.status(400).send(error.message);
    }
  };

  
const updateComment = async (req, res) => {
    const commentId = req.params.id;
    const { content } = req.body;
  
    try {
      const comment = await CommentModel.findById(commentId);
  
      if (!comment) {
        return res.status(404).send("Comment not found");
      }
  
      comment.content = content || comment.content;
      await comment.save();
  
      res.send(comment);
    } catch (error) {
      res.status(400).send(error.message);
    }
  };

  
const deleteComment = async (req, res) => {
    const commentId = req.params.id;
  
    try {
      const comment = await CommentModel.findById(commentId);
  
      if (!comment) {
        return res.status(404).send("Comment not found");
      }
  
      await comment.remove();
  
      res.send("Comment deleted successfully");
    } catch (error) {
      res.status(400).send(error.message);
    }
  };

  
const getAllCommentsForPost = async (req, res) => {
    const postId = req.params.postId;
  
    try {
      const comments = await CommentModel.find({ post: postId });
  
      if (comments.length === 0) {
        return res.status(404).send("No comments found for this post.");
      }
  
      res.send(comments);
    } catch (error) {
      res.status(400).send(error.message);
    }
  };

const getCommentById = async (req, res) => {
    const { id } = req.params;
  
    try {
      const comment = await CommentModel.findById(id);
  
      if (!comment) {
        return res.status(404).send('Comment not found');
      }
  
      res.status(200).json(comment);
    } catch (error) {
      res.status(400).send(error.message);
    }
  };
  
  module.exports = {
    createComment,
    updateComment,
    deleteComment,
    getAllCommentsForPost,
    getCommentById
  };