const { Schema, model } = require("mongoose");

const IngredientSchema = new Schema({
  nombre: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  cantidad: {
    type: Number,
    default: 0,
    min: 0,
  },
});

const Ingredient = model("Ingredient", IngredientSchema);

module.exports = Ingredient;
