const express = require("express");
const Food = require("../models/foodModel");
const Customer = require("../models/customerModel");
const mongoose = require("mongoose");

const app = express();

app.get("/customer", async (request, response) => {
  const customers = await Customer.find({});

  try {
    response.send(customers);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.get("/customer/:id", async (request, response) => {
  const customer = await Customer.findById(request.params.id);
  try {
    response.send(customer);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.post("/customer/new", async (request, response) => {
  const customer = new Customer({
    _id: new mongoose.Types.ObjectId(),
    nombre: request.body.nombre,
    apellido: request.body.apellido,
    edad: request.body.edad,
    clienteFrecuente: request.body.clienteFrencuente,
    myFavouriteFood: new Food({
      nombre: request.body.myFavouriteFood.nombre,
      calorias: request.body.myFavouriteFood.calorias,
    }),
  });
  try {
    await customer.save();
    response.send(customer);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.put("/customer/:id", async (request, response) => {
  try {
    const customer = await Customer.findByIdAndUpdate(
      request.params.id,
      request.body
    );
    await customer.save();
    response.send(customer);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.delete("/customer/:id", async (request, response) => {
  try {
    const customer = await Customer.findByIdAndDelete(request.params.id);

    if (!customer) response.status(404).send("El cliente buscado no existe");
    response.status(200).send();
  } catch (error) {
    response.status(500).send(error);
  }
});

app.delete("/customer", async (request, response) => {
  try {
    const customer = await Customer.deleteMany({});

    if (!customer) response.status(404).send("No hay ningún cliente por acá");
    response
      .status(200)
      .send(`Se han borrado ${customer.deletedCount} clientes`);
  } catch (error) {
    response.status(500).send(error);
  }
});

module.exports = app;
