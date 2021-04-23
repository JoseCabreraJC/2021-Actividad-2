const express = require('express');
const router = express.Router();
const { createPost, getPost, getAllPosts } = require('../controllers/posts');

router.post('/', createPost);
router.get('/:id', getPost);
router.get('/', getAllPosts);

module.exports = router;
