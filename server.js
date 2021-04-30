const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const foodRouter = require("./app/routes/foodRoutes.js");
const customerRouter = require("./app/routes/customerRoutes.js");
const ingredientRouter = require("./app/routes/ingredientRoutes.js");

const app = express();

const dbConfig = require("./app/config/db.config.js");

var corsOptions = {
  origin: "https://mongo-server-cli-se-actv2.herokuapp.com/",
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(dbConfig.url, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });
// simple route
app.get("/", (req, res) => {
  res.json({ message: "Arrancamos desde lo mas simple." });
});

app.use(foodRouter);
app.use(customerRouter);
app.use(ingredientRouter);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
