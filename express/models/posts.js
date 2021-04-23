const users = require('./users');

module.exports = (sequelize, type) => {
    const Post = sequelize.define('posts', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        title: type.STRING,
        content: type.STRING,
    });

    return Post;
};
