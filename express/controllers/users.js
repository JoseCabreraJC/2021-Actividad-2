const sequelize = require('../db');
const createUser = async (req, res) => {
    try {
        const user = await sequelize.User.create({
            raw: true,
            username: req.body.username,
            password: req.body.password,
        });
        res.status(201).send(user);
    } catch (err) {
        res.status(500).send({ message: err });
    }
};

const getUser = async (req, res) => {
    try {
        const user = await sequelize.User.findAll({
            where: {
                id: req.params.id,
            },
        });
        if (user.length === 0) {
            res.status(404).send('notFound');
        } else {
            res.status(200).send(user);
        }
    } catch (err) {
        res.status(500).send(err);
    }
};

const getAllUsers = async (req, res) => {
    try {
        const user = await sequelize.User.findAll();
        res.status(200).send(user);
    } catch (err) {
        res.status(500).send(err);
    }
};

module.exports = { createUser, getUser, getAllUsers };
