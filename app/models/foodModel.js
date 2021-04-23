const mongoose = require("mongoose");

const FoodSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  calorias: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0) throw new Error("Las calorias negativas no son reales.");
    },
  },
});

const Food = mongoose.model("Food", FoodSchema);

module.exports = Food;
