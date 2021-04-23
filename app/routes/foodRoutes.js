const express = require("express");
const Food = require("../models/foodModel");
const app = express();

app.get("/foods", async (request, response) => {
  const foods = await Food.find({});

  try {
    response.send(foods);
  } catch (error) {
    response.status(500).send(error);
  }
});

module.exports = app;
