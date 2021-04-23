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

app.post("/food", async (request, response) => {
  const food = new Food(request.body);

  try {
    await food.save();
    response.send(food);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.patch("/food/:id", async (request, response) => {
  try {
    const food = await Food.findByIdAndUpdate(request.params.id, request.body);
    await food.save();
    response.send(food);
  } catch (error) {
    response.status(500).send(error);
  }
});

module.exports = app;
