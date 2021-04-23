import React, { useState } from "react";
import FoodDataService from "../services/FoodService";
import { Link } from "react-router-dom";

const AddFood = () => {
  const initialFoodState = {
    id: null,
    nombre: "",
    calorias: ""
  };
  const [food, setFood] = useState(initialFoodState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setFood({ ...food, [name]: value });
  };

  const saveFood = () => {
    var data = {
      nombre: food.nombre,
      calorias: food.calorias
    };

    FoodDataService.create(data)
      .then(response => {
        setFood({
          id: response.data.id,
          nombre: response.data.nombre,
          calorias: response.data.calorias,
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const newFood = () => {
    setFood(initialFoodState);
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>Se ha agregado exitosamente!</h4>
          <button className="m-3 btn btn-sm btn-success" onClick={newFood}>
            Añadir otra
          </button>
          <Link to={"/foods"} className="m-3 btn btn-sm btn-primary">
            Ir al listado
                    </Link>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="nombre">Nombre</label>
            <input
              type="text"
              className="form-control"
              id="nombre"
              required
              value={food.nombre}
              onChange={handleInputChange}
              name="nombre"
            />
          </div>

          <div className="form-group">
            <label htmlFor="calorias">Calorias</label>
            <input
              type="number"
              className="form-control"
              id="calorias"
              required
              value={food.calorias}
              onChange={handleInputChange}
              name="calorias"
            />
          </div>

          <button onClick={saveFood} className="btn btn-success">
            Agregar
          </button>
        </div>
      )}
    </div>
  );
};

export default AddFood;
