const posts = require('./models/posts');
const users = require('./models/users');
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('dacs', 'root', 'rootroot', {
    host: 'localhost',
    dialect: 'mysql',
    dialectOptions: { decimalNumbers: true },
    define: {
        timestamps: false,
    },
});

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established');
    })
    .catch((err) => {
        console.error('Unable to connecto to db');
    });

const Post = posts(sequelize, Sequelize);
const User = users(sequelize, Sequelize);
User.associate(Post);
sequelize.sync({ force: false }).then(() => {
    console.log('synchronized');
});

module.exports = {
    Post,
    User,
    sequelize,
};
