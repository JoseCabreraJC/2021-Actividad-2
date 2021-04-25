const Food = require("../models/foodModel");

const create = async (request, response) => {
  if (!request.body.nombre) {
    response.status(400).send("Falta el nombre");
    return;
  }

  const food = new Food(request.body);

  try {
    await food.save();
    response.send(food);
  } catch (error) {
    response.status(500).send(error);
  }
};

const getAll = async (request, response) => {
  const foods = await Food.find({});

  try {
    response.send(foods);
  } catch (error) {
    response.status(500).send(error);
  }
};

const getID = async (request, response) => {
  const food = await Food.findById(request.params.id);

  try {
    response.send(food);
  } catch (error) {
    response.status(500).send(error);
  }
};

const modifyID = async (request, response) => {
  try {
    const food = await Food.findByIdAndUpdate(request.params.id, request.body);
    await food.save();
    response.send(food);
  } catch (error) {
    response.status(500).send(error);
  }
};

const deleteID = async (request, response) => {
  try {
    const food = await Food.findByIdAndDelete(request.params.id);

    if (!food) response.status(404).send("La comida buscada no existe");
    response.status(200).send();
  } catch (error) {
    response.status(500).send(error);
  }
};

const deleteAll = async (request, response) => {
  try {
    const food = await Food.deleteMany({});

    if (!food) response.status(404).send("No hay nada de comidas por acá");
    response.status(200).send(`Se han borrado ${food.deletedCount} comidas`);
  } catch (error) {
    response.status(500).send(error);
  }
};

export { create, getID, getAll, modifyID, deleteAll, deleteID };
