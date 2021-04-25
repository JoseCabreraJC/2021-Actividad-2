const express = require("express");
const Ingredient = require("../models/ingredientModel");
const {
  getIngredients,
  editIngredient,
  addIngredient,
  deleteIngredient,
  getIngredient,
  deleteAllIngredients,
} = require("../controllers/ingredientController");
const app = express();
// 6084dfc84a56c30d84958f4c
app.get("/ingredients", getIngredients);
app.get("/ingredients/:id", getIngredient);
app.post("/ingredients", addIngredient);
app.patch("/ingredients/:id", editIngredient);
app.delete("/ingredients/:id", deleteIngredient);
app.delete("/ingredients", deleteAllIngredients);

// app.get("/ingredients", async (request, response) => {
//   const ingredients = await Ingredient.find({});

//   try {
//     response.send(ingredients);
//   } catch (error) {
//     response.status(500).send(error);
//   }
// });

module.exports = app;
