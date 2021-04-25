const Ingredient = require("../models/ingredientModel");

module.exports = {
  getIngredients: async (request, response) => {
    const ingredients = await Ingredient.find({});

    try {
      response.send(ingredients);
    } catch (error) {
      response.status(500).send(error);
    }
  },
  getIngredient: async (request, response) => {
    const ingredient = await Ingredient.findById(request.params.id);

    try {
      response.send(ingredient);
    } catch (error) {
      response.status(500).send(error);
    }
  },
  addIngredient: async (request, response) => {
    const ingredient = new Ingredient(request.body);

    try {
      await ingredient.save();
      response.send(ingredient);
    } catch (error) {
      response.status(500).send(error);
    }
  },
  editIngredient: async (request, response) => {
    try {
      const ingredient = await Ingredient.findByIdAndUpdate(
        request.params.id,
        request.body
      );
      await ingredient.save();
      response.send(ingredient);
    } catch (error) {
      response.status(500).send(error);
    }
  },
  deleteIngredient: async (request, response) => {
    try {
      const ingredient = await Ingredient.findByIdAndDelete(request.params.id);

      if (!ingredient) response.status(404).send("La comida buscada no existe");
      response.status(200).send();
    } catch (error) {
      response.status(500).send(error);
    }
  },
  deleteAllIngredients: async (request, response) => {
    try {
      const ingredients = await Ingredient.deleteMany({});

      if (!ingredients)
        response.status(404).send("No hay nada de comidas por acá");
      response
        .status(200)
        .send(`Se han borrado ${ingredients.deletedCount} ingredientes`);
    } catch (error) {
      response.status(500).send(error);
    }
  },
};
