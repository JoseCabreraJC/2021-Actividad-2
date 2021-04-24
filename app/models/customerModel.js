const mongoose = require("mongoose");

const CustomerSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  nombre: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  apellido: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  edad: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0) throw new Error("La edad no puede ser negativa.");
    },
  },
  clienteFrecuente: {
    type: Boolean,
    required: true,
  }, 
  myFavoriteFood: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Food",
  }],
  
});

const Customer = mongoose.model("Customer", CustomerSchema);

module.exports = Customer;