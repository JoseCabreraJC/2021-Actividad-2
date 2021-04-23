const express = require("express");
const Food = require("../models/foodModel");
const app = express();

app.get("/food", async (request, response) => {
  const foods = await Food.find({});

  try {
    response.send(foods);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.get("/food/:id", async (request, response) => {

  const food = await Food.findById(request.params.id);

  try {
    response.send(food);
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

app.put("/food/:id", async (request, response) => {
  try {
    const food = await Food.findByIdAndUpdate(request.params.id, request.body);
    await food.save();
    response.send(food);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.delete("/food/:id", async (request, response) => {
  try {
    const food = await Food.findByIdAndDelete(request.params.id);

    if (!food) response.status(404).send("La comida buscada no existe");
    response.status(200).send();
  } catch (error) {
    response.status(500).send(error);
  }
});

app.delete("/food", async (request, response) => {
  try {
    const food = await Food.deleteMany({});

    if (!food) response.status(404).send("No hay nada de comidas por acá");
    response.status(200).send(`Se han borrado ${food.deletedCount} comidas`);
  } catch (error) {
    response.status(500).send(error);
  }
});

module.exports = app;
