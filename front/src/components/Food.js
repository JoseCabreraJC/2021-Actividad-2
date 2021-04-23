import React, { useState, useEffect } from "react";
import FoodDataService from "../services/FoodService";

const Food = props => {
  console.log("las props que recibí:   ", props)
  const initialFoodState = {
    id: null,
    nombre: "",
    calorias: ""
  };
  const [currentFood, setCurrentFood] = useState(initialFoodState);
  const [message, setMessage] = useState("");

  const getFood = id => {
    console.log("Entré acá getFood", id)
    FoodDataService.get(id)
      .then(response => {
        setCurrentFood(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    getFood(props.match.params.id);
  }, [props.match.params.id]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentFood({ ...currentFood, [name]: value });
  };



  const updateFood = () => {
    FoodDataService.update(currentFood._id, currentFood)
      .then(response => {
        console.log(response.data);
        setMessage("The food was updated successfully!");
      })
      .catch(e => {
        console.log(e);
      });
  };

  const deleteFood = () => {
    FoodDataService.remove(currentFood._id)
      .then(response => {
        console.log(response.data);
        props.history.push("/foods");
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div>
      {currentFood ? (
        <div className="edit-form">
          <h4>Comida</h4>
          <form>
            <div className="form-group">
              <label htmlFor="nombre">Nombre</label>
              <input
                type="text"
                className="form-control"
                id="nombre"
                name="nombre"
                value={currentFood.nombre}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="calorias">Calorias</label>
              <input
                type="text"
                className="form-control"
                id="calorias"
                name="calorias"
                value={currentFood.calorias}
                onChange={handleInputChange}
              />
            </div>
          </form>


          <button className="badge badge-danger mr-2" onClick={deleteFood}>
            Eliminar
          </button>

          <button
            type="submit"
            className="badge badge-success"
            onClick={updateFood}
          >
            Modificar
          </button>
          <p>{message}</p>
        </div>
      ) : (
        <div>
          <br />
          <p>Seleccione una comida...</p>
        </div>
      )}
    </div>
  );
};

export default Food;
