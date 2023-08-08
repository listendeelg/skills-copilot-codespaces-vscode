// Create web server

// Module
const express = require('express');
const router = express.Router();
const db = require('../models/index');
const Comment = db.Comment;
const User = db.User;

// Create comment
router.post('/', (req, res) => {
  Comment.create({
    text: req.body.text,
    userId: req.user.id,
    postId: req.body.postId
  }).then(comment => {
    res.redirect(`/posts/${req.body.postId}`);
  }).catch(err => {
    res.redirect(`/posts/${req.body.postId}`);
  });
});

// Delete comment
router.delete('/:id', (req, res) => {
  Comment.destroy({
    where: {
      id: req.params.id
    }
  }).then(comment => {
    res.redirect(`/posts/${req.body.postId}`);
  }).catch(err => {
    res.redirect(`/posts/${req.body.postId}`);
  });
});

module.exports = router;