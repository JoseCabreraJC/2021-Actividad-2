import React, { useState, useEffect } from "react";
import FoodDataService from "../services/FoodService";
import { Link } from "react-router-dom";

const FoodsList = () => {
    const [foods, setFoods] = useState([]);
    const [currentFood, setCurrentFood] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(-1);

    useEffect(() => {
        retrieveFoods();
    }, []);


    const retrieveFoods = () => {
        console.log("entre acá");
        FoodDataService.getAll()
            .then(response => {
                setFoods(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    const refreshList = () => {
        retrieveFoods();
        setCurrentFood(null);
        setCurrentIndex(-1);
    };

    const setActiveFood = (food, index) => {
        console.log(food);
        setCurrentFood(food);
        setCurrentIndex(index);
    };

    const removeAllFoods = () => {
        FoodDataService.removeAll()
            .then(response => {
                console.log(response.data);
                refreshList();
            })
            .catch(e => {
                console.log(e);
            });
    };


    return (
        <div className="list row">

            <div className="col-md-6">
                <h4>Listado de comidas</h4>

                <ul className="list-group">
                    {foods &&
                        foods.map((food, index) => (
                            <li
                                className={
                                    "list-group-item " + (index === currentIndex ? "active" : "")
                                }
                                onClick={() => setActiveFood(food, index)}
                                key={index}
                            >
                                {food.nombre}
                            </li>
                        ))}
                </ul>

                {(foods.length > 0) ?
                    <button
                        className="m-3 btn btn-sm btn-danger"
                        onClick={removeAllFoods}
                    >
                        Eliminar todos
                    </button>
                    :
                    <Link to={"/add"} className="m-3 btn btn-sm btn-primary">
                        Añadir
                    </Link>
                }
            </div>
            <div className="col-md-6">
                {currentFood ? (
                    <div>
                        <h4>Comida</h4>
                        <div>
                            <label>
                                <strong>Nombre:</strong>
                            </label>{" "}
                            {currentFood.nombre}
                        </div>
                        <div>
                            <label>
                                <strong>Calorias:</strong>
                            </label>{" "}
                            {currentFood.calorias} grs
                        </div>


                        <Link
                            to={"/foods/" + currentFood._id}
                            className="badge badge-warning"
                        >
                            Editar
            </Link>
                    </div>
                ) : ((foods.length > 0)
                    ?
                    <div>
                        <br />
                        <p>Seleccione una comida...</p>
                    </div>
                    : null
                )

                }
            </div>
        </div>
    );
};

export default FoodsList;
