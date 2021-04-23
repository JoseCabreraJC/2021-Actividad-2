const sequelize = require('../db');
const createPost = async (req, res) => {
    try {
        const post = await sequelize.Post.create({
            raw: true,
            title: req.body.title,
            content: req.body.content,
            user_id: req.body.userId,
        });
        res.status(201).send(post);
    } catch (err) {
        res.status(500).send({ message: err });
    }
};

const getPost = async (req, res) => {
    try {
        const post = await sequelize.Post.findAll({
            where: {
                id: req.params.id,
            },
        });
        if (post.length === 0) {
            res.status(404).send('notFound');
        } else {
            res.status(200).send(post);
        }
    } catch (err) {
        res.status(500).send(err);
    }
};

const getAllPosts = async (req, res) => {
    try {
        const post = await sequelize.Post.findAll();
        res.status(200).send(post);
    } catch (err) {
        res.status(500).send(err);
    }
};

module.exports = { createPost, getPost, getAllPosts };
