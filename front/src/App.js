import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddFood from "./components/AddFood";
import Food from "./components/Food";
import FoodsList from "./components/FoodsList";

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/foods" className="navbar-brand">
          DACS-G5
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/foods"} className="nav-link">
              Listado
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/add"} className="nav-link">
              Añadir
            </Link>
          </li>
        </div>
      </nav>

      <div className="container mt-3">
        <Switch>
          <Route exact path={["/", "/foods"]} component={FoodsList} />
          <Route exact path="/add" component={AddFood} />
          <Route path="/foods/:id" component={Food} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
