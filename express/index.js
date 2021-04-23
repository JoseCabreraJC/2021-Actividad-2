const express = require('express');
const cors = require('cors');
const postsRouter = require('./routes/posts');
const usersRouter = require('./routes/users');

require('./db');
const app = express();
app.use(express.json());

const PORT = 5000;

app.use('/posts', postsRouter);
app.use('/users', usersRouter);

app.listen(PORT, () =>
    console.log(`Server running on port: localhost:${PORT}`),
);
